(() => {
    var __webpack_modules__ = {
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => s });
                var u = a(6179),
                    r = a.n(u),
                    n = a(4179);
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
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6483),
                    s = a.n(n),
                    o = a(3649),
                    i = a(5287);
                const l = ({ binding: e, text: t = '', classMix: a, alignment: n = o.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              u.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: s()(i.Z.base, a), key: `${t}-${l}` },
                                      (0, o.Uw)(t, n, e).map((e, t) =>
                                          r().createElement(u.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            9766: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => u.z });
                var u = a(280);
                a(8082);
            },
            8082: (e, t, a) => {
                'use strict';
                a(3649);
            },
            1975: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => _.$, ko: () => g, uH: () => m, uu: () => E });
                var u = a(6483),
                    r = a.n(u),
                    n = a(6179),
                    s = a.n(n),
                    o = a(2468),
                    i = a(7442),
                    l = a(2407),
                    c = a(156),
                    _ = a(7736),
                    d = a(1635);
                a(6823);
                const m = c.Gh,
                    E = {
                        freezed: !1,
                        withStack: !1,
                        type: _.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = m,
                            size: a = _.$.Default,
                            animationSettings: u = E,
                            disabled: n = !1,
                            withoutBackground: g = !1,
                            value: b,
                            deltaFrom: p,
                            lineRef: A,
                            onChangeAnimationState: h,
                            onEndAnimation: C,
                            onComplete: v,
                        }) => {
                            const f = (0, d.S)(b, e, p);
                            return s().createElement(
                                'div',
                                { className: r()(o.Z.base, o.Z[`base__${a}`]), style: (0, c.VQ)(t) },
                                !g && s().createElement(i.J, { size: a }),
                                s().createElement(l.r, {
                                    size: a,
                                    lineRef: A,
                                    disabled: n,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    animationSettings: u,
                                    onEndAnimation: C,
                                    onChangeAnimationState: h,
                                    onComplete: v,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => l });
                var u = a(6483),
                    r = a.n(u),
                    n = a(6179),
                    s = a.n(n),
                    o = a(2468),
                    i = a(7736);
                const l = ({ size: e = i.$.Default }) =>
                    s().createElement('div', { className: r()(o.Z.background, o.Z[`background__${e}`]) });
            },
            8150: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => i });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6483),
                    s = a.n(n),
                    o = a(8804);
                const i = ({ size: e }) => {
                    const t = s()(o.Z.base, o.Z[`base__${e}`]);
                    return r().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => l });
                var u = a(6179),
                    r = a.n(u),
                    n = a(5680),
                    s = a(6736),
                    o = a(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, u.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: u,
                        deltaFrom: l,
                        animationSettings: c,
                        onEndAnimation: _,
                        onChangeAnimationState: d,
                        onComplete: m,
                    }) => {
                        if (l === t)
                            return r().createElement(n.M, {
                                key: `${l}-${t}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: u,
                                onComplete: m,
                            });
                        const E = {
                            from: l,
                            to: t,
                            size: e,
                            lineRef: a,
                            disabled: u,
                            animationSettings: c,
                            onComplete: m,
                            onEndAnimation: _,
                            onChangeAnimationState: d,
                        };
                        return c.withStack
                            ? r().createElement(o.F, E)
                            : r().createElement(s.H, i({ key: `${l}-${t}` }, E));
                    },
                );
            },
            1848: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6483),
                    s = a.n(n),
                    o = a(8150),
                    i = a(6664);
                const l = (0, u.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: u, isComplete: n, withoutBounce: l }) => {
                        const c = s()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                a && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            _ = !a && !n;
                        return r().createElement(
                            'div',
                            { className: c, style: u, ref: t },
                            r().createElement('div', { className: i.Z.pattern }),
                            r().createElement('div', { className: i.Z.gradient }),
                            _ && r().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => E });
                var u = a(6483),
                    r = a.n(u),
                    n = a(122),
                    s = a(6179),
                    o = a.n(s),
                    i = a(8150),
                    l = a(6823),
                    c = a(6147);
                const _ = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: u,
                            size: E,
                            to: g,
                            onEndAnimation: b,
                            onChangeAnimationState: p,
                            className: A,
                        }) => {
                            const h = g < u,
                                C = (0, s.useState)(l.S.Idle),
                                v = C[0],
                                f = C[1],
                                D = v === l.S.End,
                                F = v === l.S.Idle,
                                B = v === l.S.Grow,
                                w = v === l.S.Shrink,
                                P = (0, s.useCallback)(
                                    (e) => {
                                        f(e), p && p(e);
                                    },
                                    [p],
                                ),
                                S = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, n.F)(() => {
                                            P(e);
                                        }, t),
                                    [P],
                                );
                            (0, s.useEffect)(() => {
                                if (!a)
                                    return F
                                        ? S(l.S.Grow, t)
                                        : B
                                          ? S(l.S.Shrink, e)
                                          : w
                                            ? S(l.S.End, e)
                                            : void (D && b && b());
                            }, [S, a, D, B, F, w, b, t, e]);
                            const k = (0, s.useMemo)(() => Object.assign({ width: '100%' }, m(e), _(h)), [h, e]),
                                y = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(e), _(h)), [h, e]),
                                L = (0, s.useMemo)(() => Object.assign({ width: '0%' }, d(h, u), m(e)), [u, h, e]),
                                N = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - u)}%` }, d(h, u), m(e)),
                                    [u, h, g, e],
                                );
                            if (D) return null;
                            const R = r()(c.Z.base, A, h && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: F ? L : N, className: R },
                                o().createElement(
                                    'div',
                                    { style: w ? y : k, className: c.Z.glow },
                                    o().createElement(i.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => l });
                var u = a(6179),
                    r = a.n(u),
                    n = a(122),
                    s = a(6823),
                    o = a(8150),
                    i = a(9919);
                const l = (0, u.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: l,
                        size: c,
                        to: _,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                    }) => {
                        const E = _ < l,
                            g = (0, u.useState)(s.V.Idle),
                            b = g[0],
                            p = g[1],
                            A = b === s.V.In,
                            h = b === s.V.End,
                            C = b === s.V.Idle,
                            v = (0, u.useCallback)(
                                (e) => {
                                    p(e), m && m(e);
                                },
                                [m],
                            );
                        (0, u.useEffect)(() => {
                            if (C && !a) {
                                const e = t;
                                return (0, n.F)(() => {
                                    v(s.V.In);
                                }, e);
                            }
                        }, [v, a, C, t]),
                            (0, u.useEffect)(() => {
                                if (A) {
                                    const a = e + t;
                                    return (0, n.F)(() => {
                                        d && d(), v(s.V.End);
                                    }, a);
                                }
                            }, [v, A, d, t, e]);
                        const f = (0, u.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            D = (0, u.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            F = (0, u.useMemo)(
                                () => ({ width: `${Math.abs(l - _)}%`, left: `${E ? _ : l}%` }),
                                [l, E, _],
                            );
                        return h
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: i.Z.base, style: F },
                                  r().createElement(
                                      'div',
                                      { style: C ? f : D, className: i.Z.delta },
                                      r().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => i });
                var u = a(6179),
                    r = a.n(u),
                    n = a(2434),
                    s = a(1848),
                    o = a(6823);
                const i = (0, u.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: _,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                    }) => {
                        const E = e < a,
                            g = (0, u.useState)(!1),
                            b = g[0],
                            p = g[1],
                            A = (0, u.useCallback)(
                                (e) => {
                                    e === o.S.Shrink && p(!0), m && m(e);
                                },
                                [m],
                            ),
                            h = (0, u.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            C = (0, u.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${_.line.duration}ms` }),
                                [_.line.duration, e],
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
                                baseStyles: b ? C : h,
                            }),
                            a >= 0 &&
                                r().createElement(n.O, {
                                    transitionDuration: _.delta.duration,
                                    transitionDelay: _.delta.delay,
                                    onChangeAnimationState: A,
                                    freezed: _.freezed,
                                    onEndAnimation: d,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: _.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => o });
                var u = a(6179),
                    r = a.n(u),
                    n = a(5913),
                    s = a(1848);
                const o = (0, u.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: o,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: _,
                        onEndAnimation: d,
                    }) => {
                        const m = (0, u.useMemo)(
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
                            a >= 0 &&
                                r().createElement(n.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: _,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => c });
                var u = a(6179),
                    r = a.n(u),
                    n = a(7736),
                    s = a(828),
                    o = a(538);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, u.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, i);
                    const _ = (0, u.useState)(!1),
                        d = _[0],
                        m = _[1],
                        E = (0, u.useCallback)(() => {
                            const e = 100 === c.to;
                            e !== d && m(e), e && t && t(), a && a();
                        }, [d, t, a, c.to]);
                    switch (c.animationSettings.type) {
                        case n.r.Simple:
                            return r().createElement(s.D, l({}, c, { onEndAnimation: E, isComplete: d }));
                        case n.r.Growing:
                            return r().createElement(o.F, l({}, c, { onEndAnimation: E, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                'use strict';
                let u, r;
                a.d(t, { S: () => u, V: () => r }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(u || (u = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(r || (r = {}));
            },
            2386: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => i });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6736);
                const s = ['onEndAnimation'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, s);
                    const i = (0, u.useRef)({}),
                        l = (0, u.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        c = 'number' == typeof i.current.from ? i.current.from : a.from;
                    return (
                        (i.current.from = c),
                        r().createElement(n.H, o({}, a, { onEndAnimation: l, key: `${c}-${a.to}`, from: c }))
                    );
                });
            },
            5680: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => s });
                var u = a(6179),
                    r = a.n(u),
                    n = a(1848);
                const s = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                    const i = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, u.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        r().createElement(n.t, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                'use strict';
                a.d(t, { Gh: () => r, VQ: () => u, fV: () => n });
                const u = (e) => ({
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
            7736: (e, t, a) => {
                'use strict';
                let u, r;
                a.d(t, { $: () => u, r: () => r }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                    })(u || (u = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(r || (r = {}));
            },
            1635: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => s });
                var u = a(7515),
                    r = a(6179);
                const n = (e, t, a) => {
                        if ('number' == typeof a) {
                            return ((0, u.u)(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    s = (e, t, a) =>
                        (0, r.useMemo)(() => {
                            const r = ((0, u.u)(0, t, e) / t) * 100;
                            return { value: r, deltaFrom: n(r, t, a) };
                        }, [a, t, e]);
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var u = a(2056),
                    r = a(6179),
                    n = a.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, s);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, d]);
                        return n().createElement(
                            u.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
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
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var u = a(7902),
                    r = a(4179),
                    n = a(6179);
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
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const i = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            b = void 0 !== g && g,
                            p = e.decoratorId,
                            A = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            C = void 0 === h || h,
                            v = e.targetId,
                            f = void 0 === v ? 0 : v,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, s);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            P = (0, n.useMemo)(() => f || (0, u.F)().resId, [f]),
                            S = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(a, A, { isMouseEvent: !0, on: !0, arguments: o(r) }, P),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [a, A, r, P, D]),
                            k = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(a, A, { on: !1 }, P),
                                        w.current.isVisible && F && F(),
                                        (w.current.isVisible = !1);
                                }
                            }, [a, A, P, F]),
                            y = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === C && k();
                            }, [C, k]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return C
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(S, E ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var L;
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
            7515: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => u });
                const u = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            122: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e, t) => {
                    let a;
                    const u = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        'function' == typeof a && a(), clearTimeout(u);
                    };
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { mouse: () => o, onResize: () => n });
                var u = a(2472),
                    r = a(1176);
                const n = (0, u.E)('clientResized'),
                    s = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function u() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${t}`,
                                        o = s[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        u(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                u(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), u();
                        },
                        enable() {
                            (e.enabled = !0), u();
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => u,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var u = a(527);
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
            1176: (e, t, a) => {
                'use strict';
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            2472: (e, t, a) => {
                'use strict';
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var u = a(5959);
                const r = { view: a(7641), client: u };
            },
            3722: (e, t, a) => {
                'use strict';
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => u });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var u = a(2472);
                const r = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => u,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => p,
                        remToPx: () => A,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => P,
                    });
                var u = a(3722),
                    r = a(6112),
                    n = a(6538),
                    s = a(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function v() {
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
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const u = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, u);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
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
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        u = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (u = window.subViews[a].id)),
                        { caller: a, stack: t, resId: u }
                    );
                };
            },
            5521: (e, t, a) => {
                'use strict';
                let u, r;
                a.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            7727: (e, t, a) => {
                'use strict';
                function u(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => r, G: () => u });
                const r = {
                    playHighlight() {
                        u('highlight');
                    },
                    playClick() {
                        u('play');
                    },
                    playYes() {
                        u('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                let u;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                a.d(t, { BN: () => n, Uw: () => m, e: () => s, uF: () => r, v2: () => u }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(u || (u = {}));
                const o = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    i = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    l = (e, t, a = u.left) => e.split(t).reduce(a === u.left ? o : i, []),
                    c = (() => {
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
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t = u.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return _.includes(a)
                            ? c(e)
                            : ((e, t = u.left) => {
                                  let a = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return l(n, /( )/, t).forEach((e) => (a = a.concat(l(e, r, u.left)))), a;
                              })(e, t);
                    },
                    m = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : d(e, t)));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var u = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = u.O.view.addModelObserver(e, a, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(n) : (this._views[a] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => n.Z, B3: () => l, Z5: () => s, B0: () => i, ry: () => A, Eu: () => h });
                class u {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return u.__instance || (u.__instance = new u()), u.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const r = u;
                var n = a(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(5521),
                    E = a(3138);
                const g = ['args'];
                function b(e, t, a, u, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                        a = arguments;
                                    return new Promise(function (u, r) {
                                        var n = e.apply(t, a);
                                        function s(e) {
                                            b(n, u, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            b(n, u, r, s, o, 'throw', e);
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
                    C = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    v = () => C(i.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var D = a(7572);
                const F = r.instance,
                    B = {
                        DataTracker: n.Z,
                        ViewModel: D.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, u, r = R.invalid('resId'), n) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = a.getBoundingClientRect(),
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
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: u || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, v);
                        },
                        handleViewEvent: C,
                        onBindingsReady: A,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const r = Object.prototype.toString.call(t[u]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < r.length; t++) a[u].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = B;
            },
            291: (e, t, a) => {
                'use strict';
                var u = {};
                a.r(u),
                    a.d(u, {
                        Area: () => Nu,
                        Bar: () => ku,
                        DefaultScroll: () => Lu,
                        Direction: () => mu,
                        defaultSettings: () => Eu,
                        useHorizontalScrollApi: () => bu,
                    });
                var r = {};
                a.r(r), a.d(r, { Area: () => Zu, Bar: () => qu, Default: () => Xu, useVerticalScrollApi: () => Ru });
                var n = a(6179),
                    s = a.n(n);
                const o = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var i = a(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, t, a) {
                    const u = (function (e, t) {
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
                        })(e, a),
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
                        })(t, a),
                        n = Math.min(u, r);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
                    };
                }
                !(function (e) {
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
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    m = d.width,
                    E = d.height,
                    g = Object.assign({ width: m, height: E }, _(m, E, l)),
                    b = (0, n.createContext)(g),
                    p = ['children'];
                const A = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, p);
                    const u = (0, n.useContext)(b),
                        r = u.extraLarge,
                        s = u.large,
                        i = u.medium,
                        l = u.small,
                        c = u.extraSmall,
                        _ = u.extraLargeWidth,
                        d = u.largeWidth,
                        m = u.mediumWidth,
                        E = u.smallWidth,
                        g = u.extraSmallWidth,
                        A = u.extraLargeHeight,
                        h = u.largeHeight,
                        C = u.mediumHeight,
                        v = u.smallHeight,
                        f = u.extraSmallHeight,
                        D = { extraLarge: A, large: h, medium: C, small: v, extraSmall: f };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && r) return t;
                        if (a.large && s) return t;
                        if (a.medium && i) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && _) return o(t, a, D);
                        if (a.largeWidth && d) return o(t, a, D);
                        if (a.mediumWidth && m) return o(t, a, D);
                        if (a.smallWidth && E) return o(t, a, D);
                        if (a.extraSmallWidth && g) return o(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && A) return t;
                            if (a.largeHeight && h) return t;
                            if (a.mediumHeight && C) return t;
                            if (a.smallHeight && v) return t;
                            if (a.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, n.memo)(A);
                const h = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    C = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(b),
                            a = (0, n.useState)(t),
                            u = a[0],
                            r = a[1],
                            o = (0, n.useCallback)((e, t) => {
                                const a = i.O.view.pxToRem(e),
                                    u = i.O.view.pxToRem(t);
                                r(Object.assign({ width: a, height: u }, _(a, u, l)));
                            }, []);
                        h(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', o), [o]);
                        const c = (0, n.useMemo)(() => Object.assign({}, u), [u]);
                        return s().createElement(b.Provider, { value: c }, e);
                    });
                var v = a(6483),
                    f = a.n(v),
                    D = a(926),
                    F = a.n(D);
                let B, w, P;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(P || (P = {}));
                const S = () => {
                        const e = (0, n.useContext)(b),
                            t = e.width,
                            a = e.height,
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return P.ExtraLarge;
                                    case e.largeHeight:
                                        return P.Large;
                                    case e.mediumHeight:
                                        return P.Medium;
                                    case e.smallHeight:
                                        return P.Small;
                                    case e.extraSmallHeight:
                                        return P.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), P.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: u, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: a };
                    },
                    k = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: F().SMALL_WIDTH,
                        [w.Medium]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH}`,
                        [w.Large]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH} ${F().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [P.ExtraSmall]: '',
                        [P.Small]: F().SMALL_HEIGHT,
                        [P.Medium]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT}`,
                        [P.Large]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT}`,
                        [P.ExtraLarge]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT} ${F().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: F().SMALL,
                        [B.Medium]: `${F().SMALL} ${F().MEDIUM}`,
                        [B.Large]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE}`,
                        [B.ExtraLarge]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE} ${F().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, k);
                        const r = S(),
                            n = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', y({ className: f()(a, L[n], N[o], x[i]) }, u), t);
                    },
                    M = ['children'];
                const I = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, M);
                    return s().createElement(C, null, s().createElement(T, a, t));
                };
                var O = a(493),
                    W = a.n(O);
                const H = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                (a = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                        }
                    );
                };
                var $ = a(5521),
                    G = a(4179);
                const U = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(e = $.n.NONE, t = U, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', u, a),
                                () => {
                                    window.removeEventListener('keydown', u, a);
                                }
                            );
                        function u(u) {
                            if (u.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(u), a && u.stopPropagation();
                            }
                        }
                    }, [t, e, a]);
                }
                var V = a(7902);
                const j = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Y = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    X = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const u = j(`${e}.${a}`, window);
                                return q(u) ? t(e, a, u) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Z = (e) => {
                        const t = ((e) => {
                                const t = (0, V.F)(),
                                    a = t.caller,
                                    u = t.resId,
                                    r = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: r, modelPath: Y(r, e || ''), resId: u };
                            })(),
                            a = t.modelPrefix,
                            u = e.split('.');
                        if (u.length > 0) {
                            const e = [u[0]];
                            return (
                                u.reduce((t, u) => {
                                    const r = j(Y(a, `${t}.${u}`), window);
                                    return q(r) ? (e.push(r.id), `${t}.${u}.value`) : (e.push(u), `${t}.${u}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    K = G.Sw.instance;
                let Q;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Q || (Q = {}));
                const J = (e = 'model', t = Q.Deep) => {
                    const a = (0, n.useState)(0),
                        u = (a[0], a[1]),
                        r = (0, n.useMemo)(() => (0, V.F)(), []),
                        s = r.caller,
                        o = r.resId,
                        i = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const t = j(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return q(t) ? t.value : t;
                            })(X(i)),
                        ),
                        c = l[0],
                        _ = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        h(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Q.Deep : Q.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Q.None)
                            ) {
                                const a = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Q.Deep
                                            ? (e === c && u((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    r = Z(e);
                                d.current = K.addCallback(r, a, o, t === Q.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== Q.None)
                                return () => {
                                    K.removeCallback(d.current, o);
                                };
                        }, [o, t]),
                        c
                    );
                };
                var ee = a(7727),
                    te = a(3403),
                    ae = a(3649),
                    ue = a(3044);
                const re = 'SeasonEmblem_base_de',
                    ne = 'SeasonEmblem_emblem_82',
                    se = 'SeasonEmblem_emblem__hasBP_55';
                var oe;
                !(function (e) {
                    (e[(e.Base = 0)] = 'Base'), (e[(e.HasBP = 1)] = 'HasBP');
                })(oe || (oe = {}));
                const ie = () => {
                    const e = J('model.offSeason', Q.None),
                        t = e.level,
                        a = e.hasBattlePass,
                        u = e.isEnabled,
                        r = ((e, t) => (!0 === t ? oe.HasBP : oe.Base))(0, a),
                        n = f()(ne, r === oe.HasBP && se);
                    return s().createElement(
                        'div',
                        { className: re },
                        s().createElement(
                            'div',
                            { className: n },
                            s().createElement(ue._, { level: u ? t : 1, size: 'extraLarge', isGold: a }),
                        ),
                    );
                };
                var le = a(6373);
                const ce = 'SeasonStatistics_base_e1',
                    _e = 'SeasonStatistics_shineWrapper_36',
                    de = 'SeasonStatistics_imgShine_22',
                    me = 'SeasonStatistics_imgLines_8d',
                    Ee = 'SeasonStatistics_emblem_53',
                    ge = 'SeasonStatistics_emblem__disabled_12',
                    be = 'SeasonStatistics_stats_11',
                    pe = 'SeasonStatistics_stats__left_0c',
                    Ae = 'SeasonStatistics_stats__right_06',
                    he = 'SeasonStatistics_statsBg_aa',
                    Ce = 'SeasonStatistics_statsBg__right_00',
                    ve = 'SeasonStatistics_statsLabel_2d',
                    fe = 'SeasonStatistics_statsContainer_d0',
                    De = 'SeasonStatistics_statsValue_07',
                    Fe = 'SeasonStatistics_alertIcon_15',
                    Be = '---',
                    we = R.strings.battle_pass.offSeason,
                    Pe = (e) => (0 === e ? Be : G.Z5.getNumberFormat(e, G.B3.INTEGRAL)),
                    Se = () => {
                        const e = J('model.offSeason'),
                            t = e.isEnabled,
                            a = e.leftVehicle,
                            u = e.leftPoints,
                            r = e.rightVehicle,
                            n = e.rightPoints,
                            o = e.isFailedService,
                            i = f()([Ee, { [ge]: !t }]),
                            l = (0, ae.uF)(we.sideChosen(), { vehicle: a }),
                            c = (0, ae.uF)(we.sideChosen(), { vehicle: r }),
                            _ = ((e, t) => (e ? { left: Be, right: Be } : { left: Pe(t.left), right: Pe(t.right) }))(
                                o,
                                { left: u, right: n },
                            ),
                            d = f()(be, pe),
                            m = f()(be, Ae),
                            E = f()(he, Ce),
                            g = we.alertTooltip();
                        return s().createElement(
                            'div',
                            { className: ce },
                            t &&
                                s().createElement(
                                    'div',
                                    { className: _e },
                                    s().createElement('div', { className: de }),
                                ),
                            s().createElement('div', { className: me }),
                            s().createElement(
                                'div',
                                { className: d },
                                s().createElement('div', { className: he }),
                                s().createElement('div', { className: ve }, l),
                                s().createElement(
                                    'div',
                                    { className: fe },
                                    o &&
                                        s().createElement(
                                            le.i,
                                            { body: g },
                                            s().createElement('div', { className: Fe }),
                                        ),
                                    s().createElement('div', { className: De }, _.left),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: m },
                                s().createElement('div', { className: E }),
                                s().createElement('div', { className: ve }, c),
                                s().createElement(
                                    'div',
                                    { className: fe },
                                    s().createElement('div', { className: De }, _.right),
                                    o &&
                                        s().createElement(
                                            le.i,
                                            { body: g },
                                            s().createElement('div', { className: Fe }),
                                        ),
                                ),
                            ),
                            s().createElement('div', { className: i }, s().createElement(ie, null)),
                        );
                    },
                    ke = 'BattlePassOffSeasonViewContent_base_a5',
                    ye = 'BattlePassOffSeasonViewContent_content_17',
                    Le = 'BattlePassOffSeasonViewContent_background_5f',
                    Ne = 'BattlePassOffSeasonViewContent_backgroundFade_3d',
                    Re = 'BattlePassOffSeasonViewContent_header_66',
                    xe = 'BattlePassOffSeasonViewContent_title_e9',
                    Te = 'BattlePassOffSeasonViewContent_date_7c',
                    Me = 'BattlePassOffSeasonViewContent_stats_c1',
                    Ie = 'BattlePassOffSeasonViewContent_subTitle_19',
                    Oe = 'BattlePassOffSeasonViewContent_levelLabel_0a',
                    We = 'BattlePassOffSeasonViewContent_levelLabel__disabled_8f',
                    He = 'BattlePassOffSeasonViewContent_footerLabel_e8',
                    $e = R.strings.battle_pass.offSeason,
                    Ge = { loseVote: $e.footerLose(), winVote: $e.footerWin(), notVote: '' },
                    Ue = () => {
                        const e = J('model.offSeason'),
                            t = e.level,
                            a = e.isEnabled,
                            u = e.seasonName,
                            r = e.voteStatus,
                            n = f()(Oe, !a && We),
                            o = a ? (0, ae.uF)($e.$dyn('levelReached'), { level: t }) : $e.noProgress(),
                            i = Ge[r];
                        return s().createElement(
                            'div',
                            { className: ke },
                            s().createElement('div', { className: Le }),
                            s().createElement('div', { className: Ne }),
                            s().createElement(
                                'div',
                                { className: Re },
                                s().createElement('div', { className: xe }, u),
                                s().createElement('div', { className: Te }, $e.finished()),
                            ),
                            s().createElement(
                                'div',
                                { className: ye },
                                s().createElement('div', { className: Me }, s().createElement(Se, null)),
                                s().createElement('div', { className: n }, o),
                            ),
                            s().createElement('div', { className: Ie }, $e.startsSoon()),
                            s().createElement('div', { className: He }, i),
                        );
                    };
                function ze() {
                    return !1;
                }
                console.log;
                var Ve = a(9174);
                function je(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return qe(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return qe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function qe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const Ye = (e) => (0 === e ? window : window.subViews.get(e));
                function Xe(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, u) => t(null == e ? void 0 : e.value, a, u));
                }
                var Ze = a(3946);
                const Ke = ((e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    _ = (a, u, r) => {
                                        var n;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = Ye,
                                                context: u = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = a(t),
                                                        n = u.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (a, n) => {
                                                        const o = 'string' == typeof n ? `${u}.${n}` : u,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return r.set(l, a), e && a(s(n)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const a = s(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = je(r.keys()); !(e = a()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(u),
                                            o =
                                                'real' === a
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const u = null != t ? t : l(e),
                                                            r = Ve.LO.box(u, { equals: ze });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, Ve.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const u = null != t ? t : l(e),
                                                            r = Ve.LO.box(u, { equals: ze });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, Ve.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const u = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Ve.LO.box(u[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, Ve.aD)((t) => {
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
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [t, a]) => ((e[a] = Ve.LO.box(u[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, Ve.aD)((e) => {
                                                                            n.forEach(([t, a]) => {
                                                                                s[a].set(e[t]);
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
                                            m = { mode: a, model: d, externalModel: o, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === a && r ? r.controls(m) : t(m),
                                            externalModel: o,
                                            mode: a,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    m = (0, n.useState)(u),
                                    E = m[0],
                                    g = m[1],
                                    b = (0, n.useState)(() => _(u, r, l)),
                                    p = b[0],
                                    A = b[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? A(_(E, r, l)) : (d.current = !0);
                                    }, [l, E, r]),
                                    (0, n.useEffect)(() => {
                                        g(u);
                                    }, [u]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    s().createElement(a.Provider, { value: p }, o)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    extraChapterWidget: e.object('widget3dStyle'),
                                    extraChapterMainRewardInfo: e.object('widget3dStyle.vehicleInfo'),
                                    availableChapterTypes: e.array('availableChapterTypes'),
                                    levels: e.array('levels.items'),
                                    collectionEntryPoint: e.object('collectionEntryPoint'),
                                    chapterCharacter: e.object('chapterCharacter'),
                                    chapterCharacterSkills: e.array('chapterCharacter.skills'),
                                    widget3dStyle: e.object('widget3dStyle'),
                                    vehicleInfo: e.object('widget3dStyle.vehicleInfo'),
                                },
                                a = (0, Ze.Om)(
                                    (e) =>
                                        (function (e, t) {
                                            if (Array.isArray(e)) return e.filter(t);
                                            const a = [];
                                            for (let r = 0; r < e.length; r++) {
                                                var u;
                                                const n = null == (u = e[r]) ? void 0 : u.value;
                                                t(n, r, e) && a.push(n);
                                            }
                                            return a;
                                        })(t.availableChapterTypes.get(), (t) => t === e).length > 0,
                                    { equals: ze },
                                ),
                                u = (0, Ze.Om)(() => Xe(t.levels.get(), (e) => e), { equals: ze }),
                                r = (0, Ze.Om)(() => Xe(t.chapterCharacterSkills.get(), (e) => e), { equals: ze }),
                                n = (0, Ze.Om)(() => t.levels.get().length);
                            return Object.assign({}, t, {
                                computes: { hasChapter: a, getLevels: u, getLevelsLength: n, getCharacterSkills: r },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            onChapterChoice: e.createCallbackNoArgs('onChapterChoice'),
                            openPreview: e.createCallbackNoArgs('widget3dStyle.onMarathonPreviewClick'),
                            onAboutClick: e.createCallbackNoArgs('onAboutClick'),
                            onPointsInfoClick: e.createCallbackNoArgs('onPointsInfoClick'),
                            onBpcoinClick: e.createCallbackNoArgs('onBpcoinClick'),
                            onBpbitClick: e.createCallbackNoArgs('onBpbitClick'),
                            onTakeRewardsClick: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                            onActionClick: e.createCallbackNoArgs('onActionClick'),
                            on3dStylePreviewClick: e.createCallback((e) => e, 'widget3dStyle.onPreviewClick'),
                            onFinishedAnimation: e.createCallbackNoArgs('onFinishedAnimation'),
                            onTakeClick: e.createCallback((e) => e, 'onTakeClick'),
                            onLevelsAnimationFinished: e.createCallbackNoArgs('onLevelsAnimationFinished'),
                        }),
                    ),
                    Qe = Ke[0],
                    Je = Ke[1],
                    et = {
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
                    tt = [
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
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                class ut extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, ee.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, ee.G)(this.props.soundClick);
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
                            a = e.onClick,
                            u = e.goto,
                            r = e.side,
                            n = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, tt)),
                            m = f()(et.base, et[`base__${n}`], et[`base__${r}`], null == o ? void 0 : o.base),
                            E = f()(et.icon, et[`icon__${n}`], et[`icon__${r}`], null == o ? void 0 : o.icon),
                            g = f()(et.glow, null == o ? void 0 : o.glow),
                            b = f()(et.caption, et[`caption__${n}`], null == o ? void 0 : o.caption),
                            p = f()(et.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            at(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                d,
                            ),
                            'info' !== n && s().createElement('div', { className: et.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: b }, t),
                            u && s().createElement('div', { className: p }, u),
                        );
                    }
                }
                let rt, nt, st;
                (ut.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            (e.Disabled = 'disabled');
                    })(rt || (rt = {})),
                    (function (e) {
                        (e.Hide = 'hide'), (e.Buy = 'buy'), (e.Level = 'level'), (e.Activate = 'activate');
                    })(nt || (nt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(st || (st = {}));
                let ot;
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
                })(ot || (ot = {}));
                Date.now();
                G.Sw.instance;
                var it = a(903);
                let lt, ct;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(lt || (lt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(ct || (ct = {}));
                lt.style, lt.tankman;
                const _t = {
                        base: 'BattlePassProgressionsViewContent_base_67',
                        base__marathon: 'BattlePassProgressionsViewContent_base__marathon_80',
                        header: 'BattlePassProgressionsViewContent_header_76',
                        progression: 'BattlePassProgressionsViewContent_progression_7c',
                        progression__marathon: 'BattlePassProgressionsViewContent_progression__marathon_3e',
                        extraChapterWidget: 'BattlePassProgressionsViewContent_extraChapterWidget_e2',
                        footer: 'BattlePassProgressionsViewContent_footer_13',
                        close: 'BattlePassProgressionsViewContent_close_69',
                    },
                    dt = 'ExtraChapterWidget_base_61',
                    mt = 'ExtraChapterWidget_glow_e7',
                    Et = 'ExtraChapterWidget_vehicle_dc',
                    gt = 'ExtraChapterWidget_vehicleCaption_39',
                    bt = 'ExtraChapterWidget_vehicleBg_ce',
                    pt = 'ExtraChapterWidget_vehicleInfo_44',
                    At = 'ExtraChapterWidget_separatorBg_ab',
                    ht = 'ExtraChapterWidget_styleDescription_fe',
                    Ct = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    vt = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
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
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                let Dt;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(Dt || (Dt = {}));
                const Ft = (0, n.memo)((e) => {
                        let t = e.label,
                            a = e.isVisibleLabel,
                            u = void 0 !== a && a,
                            r = e.autofocus,
                            o = void 0 !== r && r,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            _ = void 0 === c ? 'play' : c,
                            d = e.size,
                            m = void 0 === d ? Dt.NORMAL : d,
                            E = e.onClick,
                            g = e.onMouseEnter,
                            b = e.onMouseLeave,
                            p = e.onMouseDown,
                            A = e.onMouseUp,
                            h = e.onFocus,
                            C = e.onBlur,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, vt);
                        const D = (0, n.useState)(!1),
                            F = D[0],
                            B = D[1],
                            w = (0, n.useState)(!1),
                            P = w[0],
                            S = w[1],
                            k = (0, n.useState)(o),
                            y = k[0],
                            L = k[1],
                            N = (0, n.useRef)(null),
                            R = (0, n.useCallback)(() => {
                                N.current && (N.current.focus(), L(!0));
                            }, []),
                            x = (0, n.useCallback)(
                                (e) => {
                                    y && null !== N.current && !N.current.contains(e.target) && L(!1);
                                },
                                [y],
                            );
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                            (0, n.useEffect)(() => {
                                L(o);
                            }, [o]);
                        const T = (0, n.useCallback)(
                                (e) => {
                                    E && E(e);
                                },
                                [E],
                            ),
                            M = (0, n.useCallback)(
                                (e) => {
                                    B(!0), p && p(e), _ && (0, ee.G)(_), o && R();
                                },
                                [o, p, R, _],
                            ),
                            I = (0, n.useCallback)(
                                (e) => {
                                    B(!1), A && A(e);
                                },
                                [A],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    g && g(e), l && (0, ee.G)(l), S(!0);
                                },
                                [g, l],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    B(!1), S(!1), b && b(e);
                                },
                                [b],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    L(!0), h && h(e);
                                },
                                [h],
                            ),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    L(!1), C && C(e);
                                },
                                [C],
                            ),
                            G = f()(
                                Ct.base,
                                u && Ct.base__visibleLabel,
                                F && Ct.base__mouseDown,
                                P && Ct.base__hovered,
                                y && Ct.base__focused,
                            ),
                            U = f()(Ct.icon, Ct[`icon__${m}`]);
                        return s().createElement(
                            'div',
                            ft(
                                {
                                    ref: N,
                                    className: G,
                                    onClick: T,
                                    onMouseEnter: O,
                                    onMouseLeave: W,
                                    onMouseDown: M,
                                    onMouseUp: I,
                                    onFocus: H,
                                    onBlur: $,
                                },
                                v,
                            ),
                            s().createElement('div', { className: U }),
                            s().createElement('div', { className: Ct.label }, t),
                        );
                    }),
                    Bt = 'Separator_base_c5',
                    wt = 'Separator_separatorBg_28',
                    Pt = 'Separator_preview_44',
                    St = ({ classNames: e, onPreviewIconClick: t }) =>
                        s().createElement(
                            'div',
                            { className: f()(Bt, null == e ? void 0 : e.base) },
                            s().createElement('div', { className: f()(wt, null == e ? void 0 : e.separatorBg) }),
                            t &&
                                s().createElement(
                                    'div',
                                    { className: f()(Pt, null == e ? void 0 : e.preview) },
                                    s().createElement(Ft, { size: Dt.NORMAL, onClick: t }),
                                ),
                        );
                var kt = a(9766),
                    yt = a(2056);
                const Lt = 'StyleDescription_base_b1',
                    Nt = 'StyleDescription_title_9e',
                    Rt = 'StyleDescription_subTitle_99',
                    xt = 'StyleDescription_subTitleTextWrapper_36',
                    Tt = 'StyleDescription_subTitleText_c8',
                    Mt = 'StyleDescription_subTitleText__truncated_0f',
                    It = 'StyleDescription_infoIcon_30',
                    Ot = 'StyleDescription_remark_0e',
                    Wt = 'StyleDescription_lockIcon_6e';
                function Ht(e, t, a, u, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                function $t(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, r) {
                            var n = e.apply(t, a);
                            function s(e) {
                                Ht(n, u, r, s, o, 'next', e);
                            }
                            function o(e) {
                                Ht(n, u, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const Gt = R.strings.battle_pass.progression.extraChapterWidget,
                    Ut = (0, te.Pi)(({ className: e, vehicleName: t }) => {
                        const a = Je().model,
                            u = a.extraChapterWidget,
                            r = a.root,
                            o = u.get().marathonRewardId,
                            i = r.get().isBattlePassPurchased,
                            l = (0, n.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = (0, n.useRef)(null),
                            m = (0, n.useCallback)(
                                $t(function* () {
                                    yield (0, G.Eu)();
                                    const e = d.current;
                                    e && _(e.scrollWidth > e.offsetWidth);
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
                            (0, n.useEffect)(E, []),
                            s().createElement(
                                'div',
                                { className: f()(Lt, e) },
                                s().createElement(kt.z, {
                                    classMix: Nt,
                                    text: Gt.styleTitle(),
                                    binding: { styleName: u.get().styleName },
                                }),
                                o &&
                                    s().createElement(
                                        yt.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: o },
                                        },
                                        s().createElement(
                                            'div',
                                            { className: Rt },
                                            s().createElement(
                                                'div',
                                                { className: xt },
                                                s().createElement(
                                                    'div',
                                                    { className: f()(Tt, c && Mt), ref: d },
                                                    (0, ae.uF)(Gt.styleSubTitle(), { vehicleName: t }),
                                                ),
                                            ),
                                            s().createElement('div', { className: It }),
                                        ),
                                    ),
                                !i &&
                                    s().createElement(
                                        'div',
                                        { className: Ot },
                                        s().createElement('div', { className: Wt }),
                                        s().createElement('div', null, Gt.styleRemark()),
                                    ),
                            )
                        );
                    }),
                    zt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Vt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function jt(e) {
                    let t = '';
                    for (let a = Vt.length - 1; a >= 0; a--) for (; e >= Vt[a]; ) (t += zt[a]), (e -= Vt[a]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const qt = 'VehicleInfo_base_45',
                    Yt = 'VehicleInfo_type_2e',
                    Xt = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u, classNames: r }) =>
                        s().createElement(
                            'div',
                            { className: f()(qt, null == r ? void 0 : r.base) },
                            jt(e),
                            s().createElement('div', {
                                className: f()(Yt, null == r ? void 0 : r.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, ae.BN)(a)}${u ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    Zt = R.strings.battle_pass.progression.extraChapterWidget,
                    Kt = (0, te.Pi)(() => {
                        const e = Je(),
                            t = e.model.extraChapterMainRewardInfo,
                            a = e.controls,
                            u = t.get(),
                            r = u.vehicleType,
                            n = u.isElite,
                            o = u.vehicleName,
                            i = u.vehicleShortName,
                            l = u.vehicleLvl,
                            c = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${u.vehicleNation})` },
                            _ = S().mediaSize > B.Medium ? 14 : 12,
                            d = o.length > _ ? i : o;
                        return s().createElement(
                            'div',
                            { className: dt },
                            s().createElement('div', { className: mt }),
                            s().createElement(
                                'div',
                                { className: Et },
                                s().createElement('div', { className: bt, style: c }),
                                s().createElement('div', { className: gt }, Zt.vehicleCaption()),
                                s().createElement(Xt, {
                                    classNames: { base: pt },
                                    vehicleLvl: l,
                                    vehicleName: d,
                                    vehicleType: r,
                                    isElite: n,
                                }),
                            ),
                            s().createElement(St, {
                                classNames: { separatorBg: At },
                                onPreviewIconClick: a.openPreview,
                            }),
                            s().createElement(Ut, { className: ht, vehicleName: d }),
                        );
                    }),
                    Qt = {
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
                let Jt, ea;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Jt || (Jt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(ea || (ea = {}));
                const ta = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: u,
                    disabled: r,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const b = (0, n.useRef)(null),
                        p = (0, n.useState)(a),
                        A = p[0],
                        h = p[1],
                        C = (0, n.useState)(!1),
                        v = C[0],
                        D = C[1],
                        F = (0, n.useState)(!1),
                        B = F[0],
                        w = F[1],
                        P = (0, n.useCallback)(() => {
                            r || (b.current && (b.current.focus(), h(!0)));
                        }, [r]),
                        S = (0, n.useCallback)(
                            (e) => {
                                A && null !== b.current && !b.current.contains(e.target) && h(!1);
                            },
                            [A],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                r || (g && g(e));
                            },
                            [r, g],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                r || (null !== i && (0, ee.G)(i), c && c(e), w(!0));
                            },
                            [r, i, c],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                r || (m && m(e), D(!1));
                            },
                            [r, m],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                r || (null !== l && (0, ee.G)(l), d && d(e), a && P(), D(!0));
                            },
                            [r, l, d, P, a],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                r || (E && E(e), D(!1));
                            },
                            [r, E],
                        ),
                        M = f()(
                            Qt.base,
                            Qt[`base__${u}`],
                            {
                                [Qt.base__disabled]: r,
                                [Qt[`base__${t}`]]: t,
                                [Qt.base__focus]: A,
                                [Qt.base__highlightActive]: v,
                                [Qt.base__firstHover]: B,
                            },
                            o,
                        ),
                        I = f()(Qt.state, Qt.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, n.useEffect)(() => {
                            h(a);
                        }, [a]),
                        s().createElement(
                            'div',
                            {
                                ref: b,
                                className: M,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: N,
                                onMouseDown: x,
                                onMouseLeave: T,
                                onClick: k,
                            },
                            u !== Jt.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Qt.back }),
                                    s().createElement('span', { className: Qt.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: Qt.stateDisabled }),
                                s().createElement('span', { className: Qt.stateHighlightHover }),
                                s().createElement('span', { className: Qt.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Qt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ta.defaultProps = { type: Jt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const aa = (0, n.memo)(ta),
                    ua = {
                        base: 'Footer_base_96',
                        light: 'Footer_light_53',
                        light__darkRed: 'Footer_light__darkRed_72',
                        light__red: 'Footer_light__red_50',
                        light__green: 'Footer_light__green_6e',
                        buttonWrapper: 'Footer_buttonWrapper_ba',
                        buttonWrapper__isMarathon: 'Footer_buttonWrapper__isMarathon_fb',
                        multicurrencyIcon: 'Footer_multicurrencyIcon_c6',
                        button: 'Footer_button_2a',
                        labelContainer: 'Footer_labelContainer_bf',
                        labelContainer__disabled: 'Footer_labelContainer__disabled_db',
                        labelHeader: 'Footer_labelHeader_ad',
                        disabledIcon: 'Footer_disabledIcon_3e',
                        label: 'Footer_label_61',
                        days: 'Footer_days_3d',
                        points: 'Footer_points_34',
                        status: 'Footer_status_9b',
                        info: 'Footer_info_40',
                        infoHover: 'Footer_infoHover_e2',
                        blink: 'Footer_blink_5d',
                        move: 'Footer_move_54',
                    },
                    ra = R.strings.battle_pass.progression,
                    na = R.strings.battle_pass.tooltips.footerBuyBtn,
                    sa = R.strings.battle_pass.tooltips.progression,
                    oa = (e, t) =>
                        e
                            ? t
                                ? ra.activatePausedExtraChapterDescr()
                                : ra.activateExtraChapterDescr()
                            : ra.activateChapterDescr();
                let ia, la;
                !(function (e) {
                    (e.Red = 'red'), (e.Green = 'green'), (e.None = '');
                })(ia || (ia = {})),
                    (function (e) {
                        (e.Inactive = 'Inactive'), (e.Paused = 'Paused');
                    })(la || (la = {}));
                const ca = (0, te.Pi)(({ isDisabled: e = !1 }) => {
                    const t = Je(),
                        a = t.model,
                        u = t.controls,
                        r = a.root.get(),
                        o = r.buttonState,
                        i = r.isSeasonEndingSoon,
                        l = r.expireTimeStr,
                        c = r.freePointsInChapter,
                        _ = r.currentPointsInChapter,
                        d = r.chapterState,
                        m = r.chapterID,
                        E = r.chapterType,
                        g = u.onActionClick,
                        b = d === rt.Paused,
                        p = c - _,
                        A = o === nt.Activate && p > 0,
                        h = o !== nt.Activate && i,
                        C = E === ct.Marathon,
                        v = C && o === nt.Buy,
                        D = {
                            [nt.Buy]: {
                                buyBtnLabel: ra.battlePassBuyBtn(),
                                tooltip: na.battlePass.descr(),
                                label: ra.battlePassBuyDescr(),
                                warning: ra.seasonEndingDescr(),
                                buttonType: Jt.main,
                                lightColor: ia.Red,
                            },
                            [nt.Level]: {
                                buyBtnLabel: ra.episodeBuyBtn(),
                                tooltip: na.episode.descr(),
                                label: ra.episodeBuyDescr(),
                                warning: ra.seasonEndingDescr(),
                                buttonType: Jt.main,
                                lightColor: ia.None,
                            },
                            [nt.Activate]: {
                                buyBtnLabel: ra.activateChapter(),
                                tooltip: na.activateChapter.descr(),
                                label: oa(C, b),
                                warning: ra.footer.freePointsDescr(),
                                buttonType: Jt.primary,
                                lightColor: ia.Green,
                            },
                            [nt.Hide]: {
                                buyBtnLabel: '',
                                tooltip: '',
                                label: '',
                                warning: '',
                                buttonType: Jt.ghost,
                                lightColor: ia.Green,
                            },
                        },
                        F = S().mediaSize <= B.Small ? ea.small : ea.medium,
                        w = (0, n.useCallback)(() => {
                            g();
                        }, [g]),
                        P = D[o],
                        k = P.buyBtnLabel,
                        y = P.tooltip,
                        L = P.label,
                        N = P.warning,
                        x = P.buttonType,
                        T = P.lightColor,
                        M = A || h ? N : L;
                    return s().createElement(
                        'div',
                        { className: ua.base },
                        e
                            ? s().createElement(
                                  s().Fragment,
                                  null,
                                  s().createElement('div', { className: f()(ua.light, ua.light__darkRed) }),
                                  s().createElement(
                                      'div',
                                      { className: f()(ua.labelContainer, ua.labelContainer__disabled) },
                                      s().createElement(
                                          'div',
                                          { className: ua.labelHeader },
                                          s().createElement('div', { className: ua.disabledIcon }),
                                          s().createElement(
                                              'div',
                                              { className: ua.status },
                                              s().createElement(kt.z, {
                                                  text: ra.footer.status.disabled(),
                                                  binding: {
                                                      chapterName:
                                                          R.strings.battle_pass.chapter.fullName.quoted.$num(m),
                                                  },
                                              }),
                                          ),
                                      ),
                                      s().createElement('div', { className: ua.label }, ra.battlePassDisabled()),
                                  ),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  s().createElement('div', { className: f()(ua.light, ua[`light__${T}`]) }),
                                  s().createElement(
                                      'div',
                                      { className: ua.labelContainer },
                                      b &&
                                          s().createElement('div', { className: ua.status }, ra.footer.status.paused()),
                                      s().createElement('div', { className: ua.label }, M),
                                      h && s().createElement('div', { className: ua.days }, l),
                                      A &&
                                          s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement('div', { className: ua.points }, p),
                                              s().createElement(
                                                  'div',
                                                  { className: ua.info },
                                                  s().createElement(
                                                      le.i,
                                                      {
                                                          header: sa.freePoints.header(),
                                                          body: sa.freePoints.body.$dyn(E),
                                                      },
                                                      s().createElement('div', { className: ua.infoHover }),
                                                  ),
                                              ),
                                          ),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: f()(ua.buttonWrapper, v && ua.buttonWrapper__isMarathon) },
                                      s().createElement(
                                          le.i,
                                          { body: y },
                                          s().createElement(
                                              aa,
                                              { type: x, size: F, mixClass: ua.button, onClick: w },
                                              h && s().createElement('div', { className: ua.blink }),
                                              k,
                                          ),
                                      ),
                                      v &&
                                          s().createElement(
                                              le.i,
                                              { body: ra.footer.multicurrencyTooltip() },
                                              s().createElement('div', { className: ua.multicurrencyIcon }),
                                          ),
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
                function _a() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                function da(e, t, a) {
                    const u = (0, n.useContext)(b);
                    let r = Object.entries(u).filter(([e, t]) => !0 === t && e in c);
                    return (
                        a && (r = r.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const u = r.map((e) =>
                                f()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, ae.e)(t))(a, e[0])]),
                            );
                            return (e[a] = f()(t[a], ...u)), e;
                        }, {})
                    );
                }
                const ma = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let Ea;
                !(function (e) {
                    (e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info');
                })(Ea || (Ea = {}));
                (0, n.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: u,
                        leftSubText: r,
                        leftButtonType: o,
                        onClose: i,
                        onLeftButtonClick: l,
                        isHideButtons: c = !1,
                    }) => {
                        const _ = da(['leftBlock', 'rightBlock'], ma),
                            d = (0, n.useState)(c),
                            m = d[0],
                            E = d[1];
                        (0, n.useEffect)(() => E(!c), [c]);
                        const g = (0, n.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            b = f()(ma.container, m && ma.container__shown);
                        return s().createElement(
                            'div',
                            { className: ma.base, style: g },
                            s().createElement(
                                'div',
                                { className: b },
                                Boolean(a) &&
                                    s().createElement(
                                        'div',
                                        { className: _.leftBlock },
                                        s().createElement(ut, {
                                            caption: a || '',
                                            goto: r,
                                            type: o,
                                            side: 'left',
                                            onClick: l,
                                        }),
                                    ),
                                Boolean(t) &&
                                    s().createElement(
                                        'div',
                                        { className: _.rightBlock },
                                        s().createElement(ut, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            s().createElement('div', { className: ma.view }, u),
                        );
                    },
                );
                var ga = a(3561);
                let ba, pa, Aa, ha, Ca, va, fa;
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
                        (e.Currency = 'currency'),
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
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2');
                })(ba || (ba = {})),
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
                    })(pa || (pa = {})),
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
                    })(Aa || (Aa = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(ha || (ha = {})),
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
                    })(Ca || (Ca = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(va || (va = {})),
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
                    })(fa || (fa = {}));
                var Da = a(2372);
                const Fa = [
                        ba.Items,
                        ba.Equipment,
                        ba.Xp,
                        ba.XpFactor,
                        ba.Blueprints,
                        ba.BlueprintsAny,
                        ba.Goodies,
                        ba.Berths,
                        ba.Slots,
                        ba.Tokens,
                        ba.CrewSkins,
                        ba.CrewBooks,
                        ba.Customizations,
                        ba.CreditsFactor,
                        ba.TankmenXp,
                        ba.TankmenXpFactor,
                        ba.FreeXpFactor,
                        ba.BattleToken,
                        ba.PremiumUniversal,
                        ba.NaturalCover,
                        ba.BpCoin,
                        ba.BattlePassSelectToken,
                        ba.BattlaPassFinalAchievement,
                        ba.BattleBadge,
                        ba.BonusX5,
                        ba.CrewBonusX3,
                        ba.NewYearFillers,
                        ba.NewYearInvoice,
                        ba.EpicSelectToken,
                        ba.Comp7TokenWeeklyReward,
                        ba.Comp7TokenCouponReward,
                        ba.BattleBoosterGift,
                        ba.CosmicLootboxCommon,
                        ba.CosmicLootboxSilver,
                    ],
                    Ba = [ba.Gold, ba.Credits, ba.Crystal, ba.FreeXp],
                    wa = [ba.BattlePassPoints],
                    Pa = [ba.PremiumPlus, ba.Premium],
                    Sa = ['engravings', 'backgrounds'],
                    ka = ['engraving', 'background'],
                    ya = (e, t = Aa.Small) => {
                        const a = e.name,
                            u = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Aa.S600x450:
                                        return 'c_600x450';
                                    case Aa.S400x300:
                                        return 'c_400x300';
                                    case Aa.S296x222:
                                        return 'c_296x222';
                                    case Aa.S232x174:
                                        return 'c_232x174';
                                    case Aa.Big:
                                        return 'c_80x80';
                                    case Aa.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
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
                            case 'lootBoxToken':
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
                                return ((e, t, a) => {
                                    const u = Sa[e];
                                    if (u) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(u),
                                            n = r.$dyn(a);
                                        return n ? `${n}` : `${r.$dyn(ka[e])}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    La = (e, t, a) => {
                        const u = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            u,
                            a,
                        );
                    };
                let Na, Ra;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled');
                })(Na || (Na = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(Ra || (Ra = {}));
                var xa = a(8546);
                const Ta = (e) => {
                    const t = lt[e];
                    return t || console.warn('Unknown FinalReward key: ', e), t;
                };
                var Ma = a(323);
                const Ia = {
                        base: 'Logo_base_95',
                        base__isChapterNotChosen: 'Logo_base__isChapterNotChosen_6f',
                        flag: 'Logo_flag_ee',
                        flag__isChapterChosen: 'Logo_flag__isChapterChosen_06',
                        emblem: 'Logo_emblem_f4',
                        chapterLogoIcon: 'Logo_chapterLogoIcon_92',
                    },
                    Oa = ({ chapter: e, hasBattlePass: t, className: a, chapterType: u }) => {
                        const r = e.id,
                            n = e.state,
                            o = e.currentLevel,
                            i = e.currentPoints,
                            l = [rt.NotStarted, rt.Paused, rt.Disabled],
                            c = S().mediaSize <= B.Medium ? xa.$u.Small : xa.$u.Medium,
                            _ = n === rt.Completed,
                            d = { level: o, from: i },
                            m = n === rt.Active,
                            E = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(d),
                            g = E || (n !== rt.NotStarted && n !== rt.Disabled),
                            b = g && !_;
                        return s().createElement(
                            'div',
                            { className: f()(Ia.base, l.includes(n) && Ia.base__isChapterNotChosen, a) },
                            s().createElement('div', {
                                className: f()(
                                    Ia.flag,
                                    c === xa.$u.Small && Ia.flag__small,
                                    b && Ia.flag__isChapterChosen,
                                ),
                                style: (0, it.fW)(r, c),
                            }),
                            s().createElement(
                                'div',
                                { className: Ia.emblem },
                                s().createElement(Ma.G, {
                                    progression: d,
                                    size: c,
                                    battlePassState: _ ? xa.Bq.Completed : t ? xa.Bq.Bought : xa.Bq.Free,
                                    hasBattlePass: t,
                                    isChapterChosen: m,
                                    isProgression: !0,
                                    chapterID: r,
                                    hasBeenActive: g,
                                    showProgressBar: !1,
                                    isOpen: b,
                                    chapterType: u,
                                }),
                                b &&
                                    s().createElement('div', {
                                        className: Ia.chapterLogoIcon,
                                        style: (0, it.cs)(r, t, c),
                                    }),
                            ),
                        );
                    },
                    Wa = 'Header_base_be',
                    Ha = 'Header_labels_82',
                    $a = 'Header_title_1f',
                    Ga = 'Header_chapterWrapper_ac',
                    Ua = 'Header_chapterText_81',
                    za = 'Header_chapterText__overflow_8f',
                    Va = 'Header_chapterStatus_fa',
                    ja = 'Header_date_5f',
                    qa = 'Header_titleButtons_80',
                    Ya = 'Header_titleButton_1d',
                    Xa = 'Header_awards_7b',
                    Za = 'Header_logo_2d';
                function Ka(e, t, a, u, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                function Qa(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (u, r) {
                            var n = e.apply(t, a);
                            function s(e) {
                                Ka(n, u, r, s, o, 'next', e);
                            }
                            function o(e) {
                                Ka(n, u, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let Ja;
                !(function (e) {
                    (e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium');
                })(Ja || (Ja = {}));
                const eu = R.strings.battle_pass,
                    tu = 'auto',
                    au = (e, t, a, u) => ({ id: e, state: t, currentPoints: a, currentLevel: u }),
                    uu = (0, te.Pi)(() => {
                        const e = Je(),
                            t = e.model,
                            a = e.controls,
                            u = a.onAboutClick,
                            r = a.onPointsInfoClick,
                            o = a.onBpcoinClick,
                            i = a.onBpbitClick,
                            l = a.onTakeRewardsClick,
                            c = a.openCollection,
                            _ = t.root.get(),
                            d = _.chapterID,
                            m = _.chapterState,
                            E = _.seasonText,
                            g = _.expireTimeStr,
                            b = _.currentLevel,
                            p = _.bpcoinCount,
                            A = _.bpbitCount,
                            h = _.notChosenRewardCount,
                            C = _.isChooseRewardsEnabled,
                            v = _.isBattlePassCompleted,
                            D = _.isBattlePassPurchased,
                            F = _.currentPointsInChapter,
                            w = _.chapterType,
                            P = t.collectionEntryPoint.get(),
                            k = P.collectionItemCount,
                            y = P.newCollectionItemCount,
                            L = P.maxCollectionItemCount,
                            N = P.isFirstEnter,
                            R = P.isCollectionsEnabled,
                            x = (0, n.useState)(!1),
                            T = x[0],
                            M = x[1],
                            I = (0, n.useState)(tu),
                            O = I[0],
                            W = I[1],
                            H = S().mediaSize <= B.Medium ? Ja.Small : Ja.Medium,
                            $ = (0, n.useRef)(null),
                            U = (0, n.useRef)(null),
                            z =
                                (V = m) === rt.Paused
                                    ? eu.progression.header.paused()
                                    : V === rt.NotStarted
                                      ? eu.progression.header.inactive()
                                      : V === rt.Disabled
                                        ? eu.progression.header.disabled()
                                        : void 0;
                        var V;
                        const j = (0, n.useRef)(0),
                            q = t.computes.hasChapter(ct.Marathon),
                            Y = t.computes.hasChapter(ct.Resource),
                            X = (0, n.useCallback)(() => {
                                u();
                            }, [u]),
                            Z = (0, n.useCallback)(() => {
                                r();
                            }, [r]),
                            K = (0, n.useCallback)(() => {
                                o();
                            }, [o]),
                            Q = (0, n.useCallback)(() => {
                                i();
                            }, [i]),
                            J = (0, n.useCallback)(() => {
                                l();
                            }, [l]),
                            ee = (0, n.useCallback)(() => {
                                c();
                            }, [c]),
                            te = eu.chapter.fullName.quoted.$num(d),
                            ue = (0, ae.uF)(eu.progression.seasonEndingTooltip(), { day: g }),
                            re = (0, ae.uF)(eu.progression.header.chapter.status(), { chapterName: te }),
                            ne = (0, n.useCallback)(
                                (e) => {
                                    e > j.current && (j.current = e);
                                },
                                [j],
                            ),
                            se = (0, n.useCallback)(
                                Qa(function* () {
                                    yield (0, G.Eu)(), yield _a();
                                    const e = $.current,
                                        t = U.current;
                                    e &&
                                        t &&
                                        (ne(t.offsetWidth),
                                        z
                                            ? (M(j.current >= e.offsetWidth - H),
                                              W(e.offsetWidth / viewEnv.getScale() - H + 'rem'))
                                            : (M(j.current >= e.offsetWidth), W(tu)));
                                }),
                                [ne, z, H],
                            );
                        return (
                            (0, n.useEffect)(
                                () => (
                                    se(),
                                    engine.on('clientResized', se),
                                    () => {
                                        engine.off('clientResized', se);
                                    }
                                ),
                                [m],
                            ),
                            s().createElement(
                                'div',
                                { className: Wa },
                                s().createElement(Oa, {
                                    chapter: au(d, m, F, b),
                                    hasBattlePass: D,
                                    className: Za,
                                    chapterType: w,
                                }),
                                s().createElement(
                                    'div',
                                    { className: Ha },
                                    s().createElement(
                                        'div',
                                        { className: $a },
                                        s().createElement(
                                            le.i,
                                            { body: ue, isEnabled: Boolean(g) },
                                            s().createElement('div', { className: ja }, E),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Ga, ref: $ },
                                            s().createElement(
                                                'div',
                                                { style: { maxWidth: `${O}` } },
                                                s().createElement(
                                                    le.i,
                                                    { body: re, isEnabled: T },
                                                    s().createElement(
                                                        'div',
                                                        { className: f()(Ua, T && za), ref: U },
                                                        re,
                                                    ),
                                                ),
                                            ),
                                            z && s().createElement('div', { className: Va }, z),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: qa },
                                            s().createElement(
                                                'div',
                                                { className: Ya },
                                                s().createElement(ut, {
                                                    caption: eu.progression.about.$dyn(w),
                                                    type: Ea.Info,
                                                    onClick: X,
                                                }),
                                            ),
                                            !q &&
                                                s().createElement(
                                                    'div',
                                                    { className: Ya },
                                                    s().createElement(ut, {
                                                        caption: eu.howToEarnPoints.title(),
                                                        type: Ea.Info,
                                                        onClick: Z,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Xa },
                                    s().createElement(ga.Z, {
                                        notChosenRewardCount: h,
                                        pointsCount: A,
                                        coinCount: p,
                                        collectionItemCount: k,
                                        maxCollectionItemCount: L,
                                        newCollectionItemCount: y,
                                        isBPFirstEnter: N,
                                        isCollectionsEnabled: R,
                                        isAwardDisabled: !C,
                                        isPointsLocked: !v,
                                        onPointsClick: Q,
                                        onCoinClick: K,
                                        onTakeRewardsClick: J,
                                        onCollectionClick: ee,
                                        hasMarathon: q,
                                        hasResource: Y,
                                    }),
                                ),
                            )
                        );
                    }),
                    ru = {
                        base: 'Progression_base_52',
                        base__marathon: 'Progression_base__marathon_dd',
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
                var nu = a(7515);
                const su = [];
                function ou(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), su)
                    );
                }
                function iu(e, t, a = []) {
                    const u = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(u.current), a || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (u.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, s),
                        r,
                    ];
                }
                function lu(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return cu(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return cu(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function cu(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                function _u(e, t, a) {
                    const u = (0, n.useMemo)(
                        () =>
                            (function (e, t, a, u) {
                                let r,
                                    n = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function _() {
                                        (s = Date.now()), a.apply(l, i);
                                    }
                                    n ||
                                        (u && !r && _(),
                                        o(),
                                        void 0 === u && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  u
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : _,
                                                  void 0 === u ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((u = a), (a = t), (t = void 0)),
                                    (i.cancel = function () {
                                        o(), (n = !0);
                                    }),
                                    i
                                );
                            })(a, e),
                        t,
                    );
                    return (0, n.useEffect)(() => u.cancel, [u]), u;
                }
                var du = a(7030);
                let mu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(mu || (mu = {}));
                const Eu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    gu = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: u,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, a) => {
                            const u = t(e),
                                r = u[0],
                                n = u[1];
                            return (0, nu.u)(r, n, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? Eu : c,
                                d = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        u = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        r = (e, ...a) => {
                                            for (var u, r = lu(t(e).values()); !(u = r()).done; ) (0, u.value)(...a);
                                        };
                                    return (0, n.useMemo)(() => ({ on: a, off: u, trigger: r }), []);
                                })(),
                                g = _u(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, du.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), E.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                p = b[0],
                                A = b[1],
                                h = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var u;
                                        const r = p.scrollPosition.get(),
                                            n = (null != (u = p.scrollPosition.goal) ? u : 0) - r;
                                        return o(e, t * a + n + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const u = d.current;
                                        u &&
                                            A.start({
                                                scrollPosition: o(u, e),
                                                immediate: t,
                                                reset: a,
                                                config: _.animationConfig,
                                                from: { scrollPosition: o(u, p.scrollPosition.get()) },
                                            });
                                    },
                                    [A, _.animationConfig, p.scrollPosition],
                                ),
                                v = (0, n.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = m.current;
                                        if (!t || !a) return;
                                        const u = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, _.step),
                                            n = h(t, e, u);
                                        C(n);
                                    },
                                    [C, h, _.step],
                                ),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(u(e)),
                                            d.current && E.trigger('mouseWheel', e, p.scrollPosition, t(d.current));
                                    },
                                    [p.scrollPosition, v, E],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        u = (0, n.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [u],
                                        ),
                                        u
                                    );
                                })(
                                    () =>
                                        H(() => {
                                            const e = d.current;
                                            e &&
                                                (C(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [C, p.scrollPosition.goal],
                                ),
                                F = ou(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && C(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: C,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: A,
                                    animationScroll: p,
                                    recalculateContent: F,
                                    events: { on: E.on, off: E.off },
                                }),
                                [p.scrollPosition, C, v, E.off, E.on, F, f, A, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    bu = gu({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? mu.Next : mu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    pu = 'HorizontalBar_base_49',
                    Au = 'HorizontalBar_base__nonActive_82',
                    hu = 'HorizontalBar_leftButton_5f',
                    Cu = 'HorizontalBar_rightButton_03',
                    vu = 'HorizontalBar_track_0d',
                    fu = 'HorizontalBar_thumb_fd',
                    Du = 'HorizontalBar_rail_32',
                    Fu = 'disable',
                    Bu = { pending: !1, offset: 0 },
                    wu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Pu = () => {},
                    Su = (e, t) => Math.max(20, e.offsetWidth * t),
                    ku = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = wu, onDrag: u = Pu }) => {
                        const r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, n.useState)(Bu),
                            m = d[0],
                            E = d[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [u],
                            ),
                            b = () => {
                                const t = l.current,
                                    a = c.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && t && a && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, u / r),
                                    _ = (0, nu.u)(0, 1, n / (r - u)),
                                    d = (t.offsetWidth - Su(t, s)) * _;
                                (a.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Fu), void i.current.classList.remove(Fu);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Fu), void i.current.classList.add(Fu);
                                            var t, a;
                                            o.current.classList.remove(Fu), i.current.classList.remove(Fu);
                                        }
                                    })(d);
                            },
                            p = ou(() => {
                                (() => {
                                    const t = c.current,
                                        a = l.current,
                                        u = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && u && a)) return;
                                    const s = Math.min(1, u / n);
                                    (t.style.width = `${Su(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Au) : r.current.classList.remove(Au));
                                })(),
                                    b();
                            });
                        (0, n.useEffect)(() => H(p)),
                            (0, n.useEffect)(
                                () =>
                                    H(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let a = Pu;
                                        const u = () => {
                                            a(), (a = H(p));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', u),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', u);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        var a;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const n = l.current,
                                            s = c.current;
                                        if (!r || !n || !s) return;
                                        const o = t.screenX - m.offset - n.getBoundingClientRect().x,
                                            i = (o / n.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            u({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(Bu);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, m.offset, m.pending, u, g]);
                        const A = iu((t) => e.applyStepTo(t), _, [e]),
                            h = A[0],
                            C = A[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Fu) || (0, ee.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: f()(pu, t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: f()(hu, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fu) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), h(mu.Next));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: f()(vu, t.track),
                                    onMouseDown: (t) => {
                                        const u = c.current;
                                        if (u && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === u))
                                                g({ pending: !0, offset: t.screenX - u.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const u = c.current,
                                                        r = e.contentRef.current;
                                                    if (!u || !r) return;
                                                    const n = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                })(t.screenX > u.getBoundingClientRect().x ? mu.Prev : mu.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: c, className: f()(fu, t.thumb) }),
                                s().createElement('div', { className: f()(Du, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: f()(Cu, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Fu) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), h(mu.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    yu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Lu = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, n.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: f()(yu.base, e.base) });
                            }, [u]),
                            d = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: f()(yu.defaultScroll, a), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(yu.defaultScrollArea, r) },
                                s().createElement(Nu, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(ku, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Nu = ({ api: e, className: t, classNames: a, children: u }) => (
                        (0, n.useEffect)(() => H(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(yu.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: f()(yu.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: f()(yu.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    );
                (Nu.Bar = ku),
                    (Nu.Default = Lu),
                    (Nu.SeniorityAwards = ({ api: e, className: t, classNames: a, children: u }) => (
                        (0, n.useEffect)(() => H(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(yu.base, t) },
                            s().createElement(
                                'div',
                                { className: f()(yu.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: f()(yu.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    ));
                const Ru = gu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? mu.Next : mu.Prev),
                    }),
                    xu = 'VerticalBar_base_f3',
                    Tu = 'VerticalBar_base__nonActive_42',
                    Mu = 'VerticalBar_topButton_d7',
                    Iu = 'VerticalBar_bottomButton_06',
                    Ou = 'VerticalBar_track_df',
                    Wu = 'VerticalBar_thumb_32',
                    Hu = 'VerticalBar_rail_43',
                    $u = 'disable',
                    Gu = () => {},
                    Uu = { pending: !1, offset: 0 },
                    zu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Vu = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ju = (e, t) => Math.max(20, e.offsetHeight * t),
                    qu = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = zu, onDrag: u = Gu }) => {
                        const r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, n.useState)(Uu),
                            m = d[0],
                            E = d[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [u],
                            ),
                            b = ou(() => {
                                const t = c.current,
                                    a = l.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && n && t && a)) return;
                                const s = Math.min(1, u / n);
                                return (
                                    (t.style.height = `${ju(a, s)}px`),
                                    t.classList.add(Wu),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Tu) : r.current.classList.remove(Tu)),
                                    s
                                );
                            }),
                            p = ou(() => {
                                const t = l.current,
                                    a = c.current,
                                    u = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(u && t && a && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, u / r),
                                    _ = (0, nu.u)(0, 1, n / (r - u)),
                                    d = (t.offsetHeight - ju(t, s)) * _;
                                (a.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add($u), void i.current.classList.remove($u);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove($u), void i.current.classList.add($u);
                                            var t, a;
                                            o.current.classList.remove($u), i.current.classList.remove($u);
                                        }
                                    })(d);
                            }),
                            A = ou(() => {
                                Vu(e, () => {
                                    b(), p();
                                });
                            });
                        (0, n.useEffect)(() => H(A)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    Vu(e, () => {
                                        p();
                                    });
                                };
                                let a = Gu;
                                const u = () => {
                                    a(), (a = H(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', u),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', u);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        Vu(e, (a) => {
                                            const r = l.current,
                                                n = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !n || !s) return;
                                            const o = t.screenY - m.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                u({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(Uu);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, m.offset, m.pending, u, g]);
                        const h = iu((t) => e.applyStepTo(t), _, [e]),
                            C = h[0],
                            v = h[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const D = (e) => {
                            e.target.classList.contains($u) || (0, ee.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: f()(xu, t.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: f()(Mu, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($u) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(mu.Next));
                                },
                                ref: o,
                                onMouseEnter: D,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: f()(Ou, t.track),
                                    onMouseDown: (t) => {
                                        const u = c.current;
                                        if (u && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === u))
                                                g({ pending: !0, offset: t.screenY - u.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Vu(e, (u) => {
                                                            if (!u) return;
                                                            const r = a(e),
                                                                n = e.clampPosition(u, u.scrollTop + r * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > u.getBoundingClientRect().y ? mu.Prev : mu.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: D,
                                },
                                s().createElement('div', { ref: c, className: t.thumb }),
                                s().createElement('div', { className: f()(Hu, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: f()(Iu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($u) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), C(mu.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Yu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Xu = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, n.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: f()(Yu.base, e.base) });
                            }, [u]),
                            d = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: f()(Yu.defaultScroll, a), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(Yu.area, r) },
                                s().createElement(Zu, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(qu, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Zu = ({ className: e, classNames: t, children: a, api: u }) => (
                        (0, n.useEffect)(() => H(u.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(Yu.base, e), ref: u.wrapperRef, onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(Yu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                a,
                            ),
                        )
                    );
                Zu.Default = Xu;
                const Ku = { Vertical: r, Horizontal: u };
                var Qu = a(122);
                let Ju;
                !(function (e) {
                    (e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle');
                })(Ju || (Ju = {}));
                const er = { type: Ju.Idle };
                let tr;
                !(function (e) {
                    (e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton');
                })(tr || (tr = {}));
                const ar = {
                    base: 'ArrowButton_base_8c',
                    base__gray: 'ArrowButton_base__gray_bd',
                    icon: 'ArrowButton_icon_af',
                    icon__4k: 'ArrowButton_icon__4k_23',
                    icon__back: 'ArrowButton_icon__back_28',
                    icon__forward: 'ArrowButton_icon__forward_ff',
                };
                let ur;
                !(function (e) {
                    (e.Default = 'default'), (e.Gray = 'gray');
                })(ur || (ur = {}));
                const rr = ({ onClick: e, direction: t, type: a = ur.Default, className: u, tooltipBody: r }) => {
                        const o = f()(ar.icon, ar[`icon__${t}`], 2 === i.O.view.getScale() && ar.icon__4k),
                            l = (0, n.useCallback)(() => {
                                (0, ee.G)('highlight');
                            }, []),
                            c = (0, n.useCallback)(() => {
                                (0, ee.G)('bp_slide'), e();
                            }, [e]);
                        return s().createElement(
                            le.i,
                            { body: r },
                            s().createElement(
                                'div',
                                { className: f()(ar.base, ar[`base__${a}`], u), onClick: c, onMouseEnter: l },
                                s().createElement('div', { className: o }),
                            ),
                        );
                    },
                    nr = 'Bookmark_base_cc',
                    sr = 'Bookmark_container_72',
                    or = 'Bookmark_container__start_b1',
                    ir = 'Bookmark_container__wide_14',
                    lr = 'Bookmark_textWrapper_46',
                    cr = 'Bookmark_withTooltip_58',
                    _r = 'Bookmark_text_6f',
                    dr = 'Bookmark_text__basic_01',
                    mr = 'Bookmark_text__premium_b8',
                    Er = 'Bookmark_text__single_a0',
                    gr = 'Bookmark_text__wide_4c',
                    br = 'Bookmark_text__disappeared_f2',
                    pr = 'Bookmark_textInner_b4',
                    Ar = 'Bookmark_leftTextLine_0a',
                    hr = 'Bookmark_rightTextLine_37',
                    Cr = ({ isWide: e, isDecorated: t }) => {
                        const a = f()(_r, Er, e && gr);
                        return s().createElement(
                            'div',
                            { className: a },
                            t && s().createElement('div', { className: Ar }),
                            s().createElement(
                                'div',
                                { className: pr },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && s().createElement('div', { className: hr }),
                        );
                    };
                class vr extends n.PureComponent {
                    render() {
                        const e = this.props,
                            t = e.tooltipBody,
                            a = e.tooltipTitle,
                            u = e.children;
                        return 'string' == typeof t
                            ? s().createElement(
                                  le.i,
                                  { body: t, header: a },
                                  s().createElement('div', { className: cr }, u),
                              )
                            : { children: u };
                    }
                }
                const fr = (0, n.memo)(vr),
                    Dr = (0, n.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: u,
                                chapterStep: r,
                                mixClass: o,
                            },
                            i,
                        ) => {
                            const l = (0, n.useRef)(null);
                            (0, n.useImperativeHandle)(i, () => ({
                                width: () => {
                                    const e = l.current;
                                    if (e) {
                                        const t = window.getComputedStyle(e, null).getPropertyValue('width');
                                        return Number(t.split('rem')[0]);
                                    }
                                    return 0;
                                },
                            }));
                            const c = (0, ae.uF)(R.strings.battle_pass.tooltips.postProgress.body(), {
                                    chapterStep: r,
                                }),
                                _ = f()(nr, o),
                                d = f()(sr, e && ir, !e && or),
                                m = f()(_r, dr, t && br),
                                E = f()(_r, mr);
                            return s().createElement(
                                'div',
                                { className: _, ref: l },
                                s().createElement(
                                    'div',
                                    { className: d },
                                    e
                                        ? s().createElement(
                                              fr,
                                              { tooltipBody: a, tooltipTitle: u },
                                              s().createElement(Cr, { isWide: e, isDecorated: !0 }),
                                          )
                                        : s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement(
                                                  'div',
                                                  { className: lr },
                                                  s().createElement(
                                                      le.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: c,
                                                      },
                                                      s().createElement(Cr, { isWide: e }),
                                                  ),
                                              ),
                                              s().createElement(
                                                  yt.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  s().createElement(
                                                      'div',
                                                      { className: E },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              s().createElement(
                                                  'div',
                                                  { className: m },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                let Fr, Br, wr, Pr, Sr;
                !(function (e) {
                    (e.left = 'left'), (e.right = 'right');
                })(Fr || (Fr = {})),
                    (function (e) {
                        (e.COMPLETED = 'completed'),
                            (e.IN_PROGRESS = 'inProgress'),
                            (e.NOT_STARTED = 'notStarted'),
                            (e.DISABLED = 'disabled'),
                            (e.COMPLETED_TROPHY_NOT_SELECTED = 'completedTrophyNotSelected');
                    })(Br || (Br = {})),
                    (function (e) {
                        (e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward');
                    })(wr || (wr = {})),
                    (function (e) {
                        (e.back = 'back'), (e.forward = 'forward');
                    })(Pr || (Pr = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Gray = 'gray');
                    })(Sr || (Sr = {}));
                var kr = a(1975),
                    yr = a(7442),
                    Lr = a(156);
                const Nr = 'OptimizedProgressBar_base_1f',
                    Rr = 'OptimizedProgressBar_wrapper_ab',
                    xr = 'OptimizedProgressBar_background_ce';
                var Tr = a(7736);
                const Mr = ['api', 'value', 'maxValue', 'theme'];
                function Ir() {
                    return (
                        (Ir =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ir.apply(this, arguments)
                    );
                }
                const Or = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Wr = (e) => {
                        let t = e.api,
                            a = e.value,
                            u = e.maxValue,
                            r = void 0 === u ? 100 : u,
                            o = e.theme,
                            i = void 0 === o ? kr.uH : o,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Mr);
                        const c = (0, n.useRef)(null),
                            _ = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = (0, nu.u)(0, a, r) / r,
                            E = (0, n.useCallback)(
                                (e) => {
                                    d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, u) => {
                                            const r = a.offsetWidth - u.offsetWidth,
                                                n = e - Or(a, t),
                                                s = (0, nu.u)(0, r, n);
                                            u.style.left = `${s}px`;
                                        })(e, c.current, d.current),
                                        _.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: u, line: r },
                                            ) => {
                                                const n = Math.max(0, Math.floor(u.offsetWidth * a) - 8e3),
                                                    s = e - Or(u, t),
                                                    o = (0, nu.u)(0, n, s);
                                                r.style.left = `${o}px`;
                                            })(e, m, { line: _.current, container: c.current });
                                },
                                [m],
                            ),
                            g = (0, n.useMemo)(() => (0, Lr.VQ)(i), [i]);
                        return (
                            (t.current.update = E),
                            s().createElement(
                                'div',
                                { className: Nr, ref: c },
                                s().createElement(
                                    'div',
                                    { className: Rr },
                                    s().createElement(
                                        'div',
                                        { style: g, className: xr, ref: d },
                                        s().createElement(yr.J, { size: l.size }),
                                    ),
                                    s().createElement(
                                        kr.ko,
                                        Ir({}, l, {
                                            lineRef: _,
                                            value: a,
                                            theme: i,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Hr = 'CrewReward_base_60',
                    $r = 'CrewReward_baseWrapper_38',
                    Gr = 'CrewReward_crewBackground_45',
                    Ur = 'CrewReward_crewBackground__disableHover_c9',
                    zr = 'CrewReward_infoWrapper_6c',
                    Vr = 'CrewReward_crewDescription_93',
                    jr = 'CrewReward_name_9b',
                    qr = 'CrewReward_skillWrapper_cd',
                    Yr = 'CrewReward_skillBackground_3f',
                    Xr = 'CrewReward_skill_91',
                    Zr = R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                    Kr = R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                let Qr;
                !(function (e) {
                    (e.Small = 'Small'), (e.Medium = 'Medium'), (e.Large = 'Large');
                })(Qr || (Qr = {}));
                const Jr = R.images.gui.maps.icons.battlePass.progression.crews,
                    en = (e, t) => {
                        if (t <= 2) {
                            if (e <= B.Small) return Qr.Small;
                            if (e === B.Medium) return Qr.Medium;
                        }
                        return Qr.Large;
                    },
                    tn = (0, te.Pi)(() => {
                        const e = (0, n.useState)(!1),
                            t = e[0],
                            a = e[1],
                            u = Je().model,
                            r = u.root.get().chapterState,
                            o = u.chapterCharacter.get(),
                            l = o.tankman,
                            c = o.icon,
                            _ = o.tooltipId,
                            d = u.computes.getCharacterSkills(),
                            m = i.O.view.getScale(),
                            E = S().mediaSize,
                            g = (0, n.useCallback)(() => {
                                a(!0);
                            }, [a]),
                            b = (0, n.useCallback)(() => {
                                a(!1);
                            }, [a]),
                            p = { backgroundImage: `url(${Jr.$dyn(`${en(E, m)}_${c.split('.')[0]}`)})` },
                            A = r === rt.Completed,
                            h = f()(Gr, t && !A && Ur),
                            C = Zr,
                            v = C === Zr ? Kr : void 0,
                            D = (0, n.useMemo)(() => ({ tooltipId: _ }), [_]);
                        return s().createElement(
                            yt.u,
                            {
                                ignoreShowDelay: !0,
                                ignoreMouseClick: !0,
                                contentId: C,
                                decoratorId: v,
                                isEnabled: !0,
                                args: D,
                            },
                            s().createElement(
                                'div',
                                { className: Hr },
                                s().createElement(
                                    'div',
                                    { className: $r },
                                    s().createElement('div', {
                                        className: h,
                                        style: p,
                                        onMouseEnter: g,
                                        onMouseLeave: b,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: zr },
                                        s().createElement(
                                            'div',
                                            { className: Vr },
                                            s().createElement('div', { className: jr }, l),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: qr },
                                            s().createElement('div', { className: Yr }),
                                            d.map((e, t) =>
                                                s().createElement('div', {
                                                    className: Xr,
                                                    key: t,
                                                    style: {
                                                        backgroundImage: `url('img://gui/maps/icons/battlePass/tooltips/icons/icon_perk_${e}.png')`,
                                                    },
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var an = a(1481);
                const un = 'VehicleInfo_base_b3',
                    rn = 'VehicleInfo_prefix_f6',
                    nn = 'VehicleInfo_type_1b',
                    sn = R.strings.battle_pass.progression.widget3dStyle,
                    on = (0, n.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: u }) => {
                        const r = (0, n.useMemo)(() => {
                            const e = (0, ae.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${u ? '_elite' : ''}`)})`,
                            };
                        }, [a, u]);
                        return s().createElement(
                            'div',
                            { className: un },
                            s().createElement('div', { className: rn }, sn.forVehicle()),
                            jt(e),
                            s().createElement('div', { className: nn, style: r }),
                            t,
                        );
                    }),
                    ln = 'Widget3dStyle_base_ae',
                    cn = 'Widget3dStyle_title_20',
                    _n = 'Widget3dStyle_base__closedChapter_d4',
                    dn = 'Widget3dStyle_box_f8',
                    mn = 'Widget3dStyle_light_82',
                    En = 'Widget3dStyle_image_f7',
                    gn = 'Widget3dStyle_previewButton_03',
                    bn = 'Widget3dStyle_box__hover_39',
                    pn = 'Widget3dStyle_footer_b9',
                    An = 'Widget3dStyle_caption_2b',
                    hn = 'R.images.gui.maps.icons.battlePass.rewards.customizations',
                    Cn = R.strings.battle_pass.progression.widget3dStyle,
                    vn = (0, te.Pi)(({ widget3dStyleRef: e, overScrollWidth: t, level: a, isShowTitle: u }) => {
                        const r = (0, n.useState)(!1),
                            o = r[0],
                            i = r[1],
                            l = Je(),
                            c = l.model,
                            _ = l.controls,
                            d = c.root.get(),
                            m = d.chapterState,
                            E = d.isStyleTaken,
                            g = c.widget3dStyle.get(),
                            b = g.styleName,
                            p = g.styleId,
                            A = g.intCD,
                            h = _.on3dStylePreviewClick,
                            C = c.vehicleInfo.get(),
                            v = { marginRight: `-${t}`, marginLeft: t },
                            D = ((e, t) => (2 !== t ? (e <= B.Small ? Aa.S296x222 : Aa.S400x300) : Aa.S600x450))(
                                S().mediaSize,
                                viewEnv.getScale(),
                            ),
                            F = ((e, t, a, u) => {
                                if (u) return { backgroundImage: `url(${hn}.${a}.style_3d_${u})` };
                                return { backgroundImage: `url(${hn}.${a}.style_3d_${e}_${t})` };
                            })(a, p, D, A),
                            w = (0, ae.uF)(Cn.currentStyle(), { name: b }),
                            P = (0, n.useCallback)(() => {
                                h({ level: a });
                            }, [h, a]),
                            k = m === rt.Completed,
                            y = f()(ln, k && _n),
                            L = f()(dn, o && bn);
                        return s().createElement(
                            'div',
                            { className: y, ref: e, style: v },
                            !E && u && s().createElement('div', { className: cn }, Cn.titleNoChapterSelected()),
                            s().createElement(
                                'div',
                                {
                                    className: L,
                                    onMouseEnter: () => {
                                        i(!0);
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                },
                                !E && 1 === a && s().createElement('div', { className: mn }),
                                s().createElement('div', { className: En, style: F }),
                                s().createElement('div', { className: gn }, s().createElement(an.k, { onClick: P })),
                            ),
                            s().createElement(
                                'div',
                                { className: pn },
                                s().createElement('div', { className: An }, w),
                                s().createElement(on, C),
                            ),
                        );
                    }),
                    fn = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: u,
                        totalPointsInLevel: r,
                        currentLevel: n,
                    }) => (e > n ? a + t * (e - 2) + t * (u / r) : (e - 1) * t + a * (u / r)),
                    Dn = (e) => e + 1,
                    Fn = (0, te.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            level: r,
                            previousLevel: o,
                            currentPointsInLevel: i,
                            previousPointsInLevel: l,
                            currentPointsInChapter: c,
                            previousPointsInChapter: _,
                            theme: d,
                        }) => {
                            const m = (0, n.useContext)(ys).levels,
                                E = Je().model.root.get(),
                                g = E.isPaused,
                                b = E.showLevelsAnimations,
                                p = E.currentLevel,
                                A = (0, n.useState)(0),
                                h = A[0],
                                C = A[1],
                                v = (0, n.useRef)(-1),
                                f = (0, n.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                D = f[0],
                                F = D.previousBaseEarnedPoints,
                                B = D.maxBasePoints,
                                w = D.baseProgressionSize,
                                P = f[1];
                            (0, n.useEffect)(() => {
                                if (g) return;
                                const e = v.current !== _,
                                    t = e ? o : r,
                                    n = u + (m.items.length - 1) * a,
                                    s = m.items[t - 1],
                                    d = r <= m.items.length ? r - 1 : m.items.length - 1,
                                    E = m.items[d].value.levelPoints,
                                    b = fn({
                                        level: r,
                                        levelWidth: a,
                                        currentLevelWidth: u,
                                        pointsInLevel: i,
                                        totalPointsInLevel: E,
                                        currentLevel: p,
                                    }),
                                    A = s ? s.value.levelPoints : 0,
                                    h = fn({
                                        level: t > r ? r : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < p ? a : u,
                                        pointsInLevel: l,
                                        totalPointsInLevel: A,
                                        currentLevel: p,
                                    }),
                                    C = e && t <= r ? h : b;
                                _ !== c && a && (v.current = _),
                                    P({ maxBasePoints: n, previousBaseEarnedPoints: C, baseProgressionSize: b });
                            }, [g, a, u, r, o, c, l, i, _, p, m.items]);
                            const S = (0, n.useMemo)(
                                () =>
                                    Object.assign({}, kr.uu, {
                                        withStack: !0,
                                        type: Tr.r.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, n.useEffect)(() => {
                                    const e = p !== o || i !== l;
                                    if (b) C(Dn);
                                    else if (e && -1 === v.current)
                                        return (0, Qu.F)(() => {
                                            C(Dn);
                                        }, 700);
                                }, [p, i, o, l, b]),
                                (0, n.useEffect)(() => {
                                    if (b)
                                        return H(() => {
                                            t && t();
                                        });
                                }, [t, b]),
                                s().createElement(Wr, {
                                    key: h,
                                    animationSettings: S,
                                    deltaFrom: F,
                                    value: w,
                                    maxValue: B,
                                    api: e,
                                    theme: d,
                                })
                            );
                        },
                    ),
                    Bn = R.strings.battle_pass.tooltips.progression.freePoints,
                    wn = (0, te.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: u,
                            progressChange: r,
                        }) => {
                            const o = (0, n.useContext)(ys),
                                l = o.levels,
                                c = o.chapterState,
                                _ = o.currentPointsInLevel,
                                d = Je().model.root.get(),
                                m = d.previousPointsInLevel,
                                E = d.currentPointsInChapter,
                                g = d.previousPointsInChapter,
                                b = d.freePointsInLevel,
                                p = d.freePointsInChapter,
                                A = d.previousFreePointsInChapter,
                                h = d.previousFreePointsInLevel,
                                C = d.potentialLevel,
                                v = d.previousPotentialLevel,
                                D = d.chapterType,
                                F = d.currentLevel,
                                B = d.previousLevel,
                                w = (() => {
                                    const e = (0, n.useState)(i.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(i.O.view.getScale());
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
                                P = (c === rt.NotStarted || c === rt.Paused) && p - E > 0,
                                S = l.items[l.items.length - 1].value.levelPoints,
                                k = ((F - 1) * a + (_ / S) * u) / w,
                                y = E >= l.items.length * S,
                                L = (0, n.useMemo)(
                                    () => ({
                                        '--progress-line-base': Lr.Gh.line.bgColorBase,
                                        '--progress-line-disabled': Lr.Gh.line.bgColorDisabled,
                                        '--progress-line-finished': Lr.Gh.line.bgColorFinished,
                                    }),
                                    [],
                                );
                            return s().createElement(
                                'div',
                                { className: ru.progressContainer },
                                P &&
                                    s().createElement(
                                        le.i,
                                        { header: Bn.header(), body: Bn.body.$dyn(D) },
                                        s().createElement(
                                            'div',
                                            { className: ru.progress },
                                            s().createElement(Fn, {
                                                api: t,
                                                progressChange: r,
                                                levelWidth: a,
                                                currentLevelWidth: u,
                                                level: C,
                                                previousLevel: v,
                                                currentPointsInLevel: b,
                                                previousPointsInLevel: h,
                                                currentPointsInChapter: p,
                                                previousPointsInChapter: A,
                                                theme: Lr.fV,
                                            }),
                                        ),
                                    ),
                                s().createElement('div', {
                                    className: f()(ru.progressBackground, y && ru.progressBackground__finished),
                                    style: Object.assign({ width: `${k}rem` }, L),
                                }),
                                s().createElement(
                                    yt.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    s().createElement(
                                        'div',
                                        { className: f()(ru.progress, P && ru.progress__inactive) },
                                        s().createElement(Fn, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: u,
                                            level: F,
                                            previousLevel: B,
                                            currentPointsInLevel: _,
                                            previousPointsInLevel: m,
                                            currentPointsInChapter: E,
                                            previousPointsInChapter: g,
                                            progressChange: r,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Pn = {
                        base: 'Background_base_f7',
                        default: 'Background_default_c1',
                        default__premium: 'Background_default__premium_d5',
                        default__normal: 'Background_default__normal_15',
                        default__rare: 'Background_default__rare_4a',
                        normalCompleted: 'Background_normalCompleted_e0',
                        normalCompleted__premium: 'Background_normalCompleted__premium_a4',
                        normalCompleted__disabled: 'Background_normalCompleted__disabled_52',
                        rare: 'Background_rare_b6',
                        rare__premium: 'Background_rare__premium_2e',
                        rareBg: 'Background_rareBg_ee',
                        rare__completed: 'Background_rare__completed_85',
                        rare__notStarted: 'Background_rare__notStarted_3f',
                        rarePattern: 'Background_rarePattern_03',
                        rarePattern__left: 'Background_rarePattern__left_8b',
                        rarePattern__leftCompleted: 'Background_rarePattern__leftCompleted_3f',
                        rarePattern__leftIndent: 'Background_rarePattern__leftIndent_e2',
                        rarePattern__leftNoIndent: 'Background_rarePattern__leftNoIndent_ac',
                        rarePattern__right: 'Background_rarePattern__right_c2',
                        rarePattern__rightCompleted: 'Background_rarePattern__rightCompleted_eb',
                        rarePattern__rightNoIndent: 'Background_rarePattern__rightNoIndent_f1',
                        rarePattern__rightIndent: 'Background_rarePattern__rightIndent_f7',
                        rare__completedEnabled: 'Background_rare__completedEnabled_b0',
                        rare__completedDisabled: 'Background_rare__completedDisabled_a6',
                        rare__notStartedEnabled: 'Background_rare__notStartedEnabled_62',
                        rare__notStartedDisabled: 'Background_rare__notStartedDisabled_7f',
                        disabled: 'Background_disabled_ba',
                        disabled__premium: 'Background_disabled__premium_6d',
                        inProgress: 'Background_inProgress_68',
                        inProgress__premium: 'Background_inProgress__premium_8e',
                        inProgressInner: 'Background_inProgressInner_0d',
                        inProgressPart: 'Background_inProgressPart_68',
                        inProgressPart__left: 'Background_inProgressPart__left_76',
                        inProgressPart__right: 'Background_inProgressPart__right_5b',
                    },
                    Sn = ({ status: e, isPremium: t, isPremiumActivated: a, isRare: u }) => {
                        const r = t && !a,
                            n = e === Br.IN_PROGRESS,
                            o = e === Br.COMPLETED || e === Br.COMPLETED_TROPHY_NOT_SELECTED,
                            i = e === Br.NOT_STARTED,
                            l = f()(
                                Pn.default,
                                !r && !u && Pn.default__normal,
                                !r && u && Pn.default__rare,
                                t ? Pn.default__premium : Pn.default__basic,
                            ),
                            c = f()(
                                Pn.normalCompleted,
                                t && Pn.normalCompleted__premium,
                                r ? Pn.normalCompleted__disabled : Pn.normalCompleted__enabled,
                            ),
                            _ = f()(
                                Pn.rare,
                                t && Pn.rare__premium,
                                o && Pn.rare__completed,
                                o && !t && Pn.rare__completedEnabled,
                                t && o && (r ? Pn.rare__completedDisabled : Pn.rare__completedEnabled),
                                i && Pn.rare__notStarted,
                                t && i && (r ? Pn.rare__notStartedDisabled : Pn.rare__notStartedEnabled),
                            ),
                            d = f()(
                                Pn.rarePattern,
                                o ? Pn.rarePattern__leftCompleted : Pn.rarePattern__left,
                                ((o && !t) || (i && t)) && Pn.rarePattern__leftIndent,
                                ((i && !t) || (o && t)) && Pn.rarePattern__leftNoIndent,
                            ),
                            m = f()(
                                Pn.rarePattern,
                                o ? Pn.rarePattern__rightCompleted : Pn.rarePattern__right,
                                ((o && !t) || (i && t)) && Pn.rarePattern__rightNoIndent,
                                ((i && !t) || (o && t)) && Pn.rarePattern__rightIndent,
                            ),
                            E = f()(Pn.inProgress, t && Pn.inProgress__premium),
                            g = f()(Pn.inProgressInner, t && Pn.inProgressInner__premium),
                            b = f()(Pn.inProgressPart, Pn.inProgressPart__left),
                            p = f()(Pn.inProgressPart, Pn.inProgressPart__right),
                            A = f()(Pn.disabled, t && Pn.disabled__premium);
                        return s().createElement(
                            'div',
                            { className: Pn.base },
                            i && s().createElement('div', { className: A }),
                            s().createElement('div', { className: l }),
                            o && !u && s().createElement('div', { className: c }),
                            n &&
                                s().createElement(
                                    'div',
                                    { className: E },
                                    s().createElement('div', { className: b }),
                                    !t && s().createElement('div', { className: g }),
                                    s().createElement('div', { className: p }),
                                ),
                            u &&
                                !n &&
                                s().createElement(
                                    'div',
                                    { className: _ },
                                    s().createElement('div', { className: d }),
                                    s().createElement('div', { className: m }),
                                    s().createElement('div', { className: Pn.rareBg }),
                                ),
                        );
                    };
                var kn = a(8664);
                const yn = {
                        base: 'Stage_base_46',
                        base__notStarted: 'Stage_base__notStarted_86',
                        number: 'Stage_number_1f',
                        numberAnimated: 'Stage_numberAnimated_c6',
                        numberAnimated__enter: 'Stage_numberAnimated__enter_98',
                        numberAnimated__enterActive: 'Stage_numberAnimated__enterActive_1a',
                        highlightScale: 'Stage_highlightScale_6b',
                        numberAnimated__enterDone: 'Stage_numberAnimated__enterDone_68',
                        numberGlow: 'Stage_numberGlow_b7',
                        numberGlow__active: 'Stage_numberGlow__active_3c',
                        circleOut: 'Stage_circleOut_87',
                        numberGlow__exit: 'Stage_numberGlow__exit_d9',
                        numberInProgress: 'Stage_numberInProgress_69',
                        title: 'Stage_title_ee',
                        glow: 'Stage_glow_9e',
                        glow__inProgress: 'Stage_glow__inProgress_6a',
                        iconFinal: 'Stage_iconFinal_70',
                        iconFinal__inProgress: 'Stage_iconFinal__inProgress_c1',
                    },
                    Ln = R.strings.battle_pass.progression,
                    Nn = (0, te.Pi)(
                        ({ status: e, stepNumber: t, isFinal: a, showLevelsAnimations: u, stageAnimationDelay: r }) => {
                            const o = Je(),
                                i = o.model,
                                l = o.controls,
                                c = i.root.get().chapterState,
                                _ = l.onLevelsAnimationFinished,
                                d = (0, n.useState)(!1),
                                m = d[0],
                                E = d[1],
                                g = e === Br.IN_PROGRESS,
                                b = e === Br.COMPLETED,
                                p = c === rt.NotStarted || c === rt.Paused,
                                A = g ? yn.numberInProgress : yn.number,
                                h = {
                                    enter: yn.numberAnimated__enter,
                                    enterActive: yn.numberAnimated__enterActive,
                                    enterDone: yn.numberAnimated__enterDone,
                                },
                                C = { enterActive: yn.numberGlow__active, enterDone: yn.numberGlow__exit },
                                v = (0, n.useCallback)(() => {
                                    (0, ee.G)('bp_current_phase');
                                }, []);
                            return (
                                (0, n.useEffect)(() => {
                                    if (u && g)
                                        return (0, Qu.F)(() => {
                                            E(!0), _();
                                        }, r);
                                }, [u, g, r, _]),
                                s().createElement(
                                    'div',
                                    { className: f()(yn.base, yn[`base__${e}`]) },
                                    ((a && b) || (g && !p)) &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', {
                                                className: f()(yn.glow, g && yn.glow__inProgress),
                                            }),
                                            s().createElement(
                                                kn.Z,
                                                { in: m, timeout: r + 4e3, className: yn.numberGlow, classNames: C },
                                                s().createElement('div', null),
                                            ),
                                        ),
                                    a &&
                                        s().createElement('div', {
                                            className: f()(yn.iconFinal, g && yn.iconFinal__inProgress),
                                        }),
                                    g
                                        ? s().createElement(
                                              'div',
                                              { className: A },
                                              t,
                                              s().createElement(
                                                  kn.Z,
                                                  {
                                                      in: m,
                                                      timeout: r + 4e3,
                                                      className: f()(yn.numberInProgress, yn.numberAnimated),
                                                      classNames: h,
                                                      onEnter: v,
                                                  },
                                                  s().createElement('div', null, t),
                                              ),
                                          )
                                        : s().createElement('div', { className: A }, t),
                                    g &&
                                        s().createElement(
                                            'div',
                                            { className: yn.title },
                                            p ? Ln.pausedStep() : Ln.currentStep(),
                                        ),
                                )
                            );
                        },
                    ),
                    Rn = {
                        base: 'ClosedStatus_base_8a',
                        icon: 'ClosedStatus_icon_18',
                        icon__current: 'ClosedStatus_icon__current_44',
                        icon__exit: 'ClosedStatus_icon__exit_fd',
                        icon__exitActive: 'ClosedStatus_icon__exitActive_65',
                        icon__exitCurrentActive: 'ClosedStatus_icon__exitCurrentActive_4d',
                        fadeDown: 'ClosedStatus_fadeDown_d3',
                        zoomOut: 'ClosedStatus_zoomOut_0f',
                        icon__exitDone: 'ClosedStatus_icon__exitDone_b2',
                        title: 'ClosedStatus_title_a3',
                        title__premium: 'ClosedStatus_title__premium_e2',
                        title__exit: 'ClosedStatus_title__exit_16',
                        title__exitActive: 'ClosedStatus_title__exitActive_44',
                        title__exitDone: 'ClosedStatus_title__exitDone_51',
                    };
                function xn() {
                    return (
                        (xn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        xn.apply(this, arguments)
                    );
                }
                const Tn = ({
                        isPremium: e = !1,
                        isLockedState: t = !1,
                        isInProgress: a = !1,
                        isPremiumActivated: u = !1,
                        playUnlockAnimation: r = !1,
                        handleUnlockAnimationExited: n,
                        baseUnlockProps: o,
                    }) => {
                        const i = a && e && (!u || r),
                            l = {
                                exit: Rn.icon__exit,
                                exitActive: a ? Rn.icon__exitCurrentActive : Rn.icon__exitActive,
                                exitDone: Rn.icon__exitDone,
                            },
                            c = t || r,
                            _ =
                                c && e
                                    ? {
                                          exit: Rn.title__exit,
                                          exitActive: Rn.title__exitActive,
                                          exitDone: Rn.title__exitDone,
                                      }
                                    : {};
                        return s().createElement(
                            'div',
                            { className: Rn.base },
                            c &&
                                s().createElement(
                                    kn.Z,
                                    xn({}, o, { classNames: l, onExited: n }),
                                    s().createElement('div', {
                                        className: f()(Rn.icon, a ? Rn.icon__current : Rn.icon__locked),
                                    }),
                                ),
                            i &&
                                s().createElement(
                                    kn.Z,
                                    xn({}, o, { classNames: _ }),
                                    s().createElement(
                                        'div',
                                        { className: f()(Rn.title, e && Rn.title__premium) },
                                        Un.progression.currentStepLocked(),
                                    ),
                                ),
                        );
                    },
                    Mn = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_3f',
                        slideUp: 'CompletedStatus_slideUp_d2',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_03',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_19',
                        showUp: 'CompletedStatus_showUp_a2',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_d8',
                        icon: 'CompletedStatus_icon_b1',
                        icon__potentiallyCompleted: 'CompletedStatus_icon__potentiallyCompleted_a4',
                        icon__currentPotentiallyCompleted: 'CompletedStatus_icon__currentPotentiallyCompleted_60',
                    },
                    In = ({
                        hasTrophySelectionToken: e,
                        isPotentiallyCompleted: t,
                        isCurrentPotentiallyCompleted: a,
                        completedIn: u,
                        handleCompleteGlowAnimationExited: r,
                        children: n,
                        isRewardAnimationEnd: o,
                    }) => {
                        const i = {
                                exit: Mn.iconGlow__completedEnter,
                                exitActive: Mn.iconGlow__completedEnterActive,
                                exitDone: Mn.iconGlow__completedEnterDone,
                            },
                            l = f()(
                                Mn.icon,
                                t && Mn.icon__potentiallyCompleted,
                                a && Mn.icon__currentPotentiallyCompleted,
                            );
                        return s().createElement(
                            'div',
                            { className: f()(Mn.base, o && Mn.base__showAnimation) },
                            s().createElement(kn.Z, { in: !u, timeout: Gn, classNames: i, onExited: r }, n),
                            e
                                ? s().createElement(
                                      'div',
                                      { className: Mn.trophyTokenLabel },
                                      Un.progression.trophySelectAwaiting(),
                                  )
                                : s().createElement(
                                      le.i,
                                      { body: Un.tooltips.completed.got() },
                                      s().createElement('div', { className: l }),
                                  ),
                        );
                    },
                    On = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    Wn = ({ totalPoints: e, currentPoints: t }) => {
                        const a = f()(On.value, On.value__current),
                            u = f()(On.value, On.value__total);
                        return s().createElement(
                            yt.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            s().createElement(
                                'div',
                                { className: On.base },
                                s().createElement('div', { className: a }, t),
                                s().createElement('div', { className: On.divider }, '/'),
                                s().createElement('div', { className: u }, e),
                                s().createElement('div', { className: On.icon }),
                            ),
                        );
                    },
                    Hn = {
                        base: 'Status_base_1f',
                        base__default: 'Status_base__default_a1',
                        base__inProgress: 'Status_base__inProgress_b8',
                        base__premiumInProgress: 'Status_base__premiumInProgress_5e',
                        iconContainer: 'Status_iconContainer_2f',
                        iconInner: 'Status_iconInner_30',
                        iconGlow: 'Status_iconGlow_c5',
                        iconGlow__completed: 'Status_iconGlow__completed_b9',
                        iconGlow__completedRare: 'Status_iconGlow__completedRare_be',
                        iconGlow__hidden: 'Status_iconGlow__hidden_24',
                        icon: 'Status_icon_8b',
                        icon__completedEnter: 'Status_icon__completedEnter_e2',
                        icon__completedEnterActive: 'Status_icon__completedEnterActive_d1',
                        fadeUp: 'Status_fadeUp_a4',
                        icon__completedEnterDone: 'Status_icon__completedEnterDone_9e',
                        glowWrapper: 'Status_glowWrapper_67',
                        glow: 'Status_glow_89',
                        glow__active: 'Status_glow__active_7f',
                        highlightScale: 'Status_highlightScale_62',
                        dust: 'Status_dust_b2',
                        dust__active: 'Status_dust__active_14',
                        trophyTokenLabel: 'Status_trophyTokenLabel_b9',
                        pointsWrapper: 'Status_pointsWrapper_e8',
                    };
                function $n() {
                    return (
                        ($n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        $n.apply(this, arguments)
                    );
                }
                const Gn = 1500,
                    Un = R.strings.battle_pass,
                    zn = R.views.lobby.battle_pass,
                    Vn = ({
                        status: e,
                        potentialStatus: t,
                        isPremium: a,
                        isRare: u,
                        isPremiumActivated: r,
                        totalPoints: o,
                        currentPoints: i,
                        playCompleteAnimation: l,
                        playUnlockAnimation: c,
                        completeAnimationDelay: _ = 0,
                        unlockAnimationDelay: d = 0,
                        baseTimeout: m = 0,
                        playUnlockAnimationSound: E = !0,
                        playCompleteAnimationSound: g = !0,
                        onAnimationDone: b,
                        onCompleteAnimationStart: p,
                        initialAnimationDelay: A,
                        hasTrophySelectionToken: h,
                        isTaken: C,
                        completedDuration: v,
                        playCompleteSelectRewardAnimation: D,
                        isRewardAnimationEnd: F,
                    }) => {
                        const B = (0, n.useState)(!1),
                            w = B[0],
                            P = B[1],
                            S = (0, n.useState)(!1),
                            k = S[0],
                            y = S[1],
                            L = (0, n.useState)(!0),
                            N = L[0],
                            R = L[1],
                            x = (0, n.useState)(!1),
                            T = x[0],
                            M = x[1],
                            I = { '--animation-duration': `${v}ms` },
                            O = e === Br.IN_PROGRESS,
                            W = e === Br.COMPLETED,
                            H = t === Br.IN_PROGRESS,
                            $ = !W && t === Br.COMPLETED,
                            G = (0, n.useCallback)(() => {
                                R(!1), E && !T && (O ? (0, ee.G)(wr.UNLOCK_BIG) : (0, ee.G)(wr.UNLOCK_SMALL));
                            }, [T, O, E]),
                            U = (0, n.useCallback)(() => {
                                g && (0, ee.G)(wr.IMPROVED_REWARD), P(!0), p && p();
                            }, [p, g]);
                        (0, n.useEffect)(
                            () =>
                                c
                                    ? (0, Qu.F)(() => {
                                          G();
                                      }, A + d)
                                    : l
                                      ? (y(!0),
                                        (0, Qu.F)(() => {
                                            y(!1), U();
                                        }, A + _))
                                      : void (k && y(!1)),
                            [c, l, U, A, _, G, d, k],
                        );
                        const z =
                                O && a
                                    ? f()(Hn.base, Hn.base__premiumInProgress)
                                    : f()(Hn.base, Hn.base__default, O && Hn.base__inProgress),
                            V = {
                                exit: Hn.icon__completedEnter,
                                exitActive: Hn.icon__completedEnterActive,
                                exitDone: Hn.icon__completedEnterDone,
                            },
                            j = { exit: Hn.glow, exitActive: Hn.glow__active, exitDone: Hn.glow },
                            q = { exit: Hn.dust, exitActive: Hn.dust__active, exitDone: Hn.dust },
                            Y = W && (!a || (a && r)) && !C,
                            X = a && !r,
                            Z = !a && !Y && $,
                            K = !a && O && $,
                            Q = f()(
                                Hn.iconGlow,
                                Y && (u ? Hn.iconGlow__completedRare : Hn.iconGlow__completed),
                                k && Hn.iconGlow__hidden,
                            ),
                            J = (0, n.useCallback)(() => {
                                b && b();
                            }, [b]),
                            te = (0, n.useCallback)(() => {
                                !l && b && b(), M(!0);
                            }, [b, l]),
                            ae = (0, n.useCallback)(() => {
                                k && y(!1);
                            }, [k]);
                        (0, n.useEffect)(() => {
                            if (l && T)
                                return (0, Qu.F)(() => {
                                    U();
                                }, _);
                        }, [l, T, U, _]);
                        const ue = { in: N, timeout: Gn + m },
                            re = w ? f()(Hn.icon, Y && Hn.icon__completed) : void 0,
                            ne = a || Y || $,
                            se = !a && ((O && !$) || H);
                        return s().createElement(
                            'div',
                            { className: z, style: I },
                            ne &&
                                s().createElement(
                                    'div',
                                    { className: Hn.iconContainer },
                                    !l &&
                                        !c &&
                                        (Y
                                            ? s().createElement(
                                                  In,
                                                  {
                                                      hasTrophySelectionToken: h,
                                                      isPotentiallyCompleted: Z,
                                                      isCurrentPotentiallyCompleted: K,
                                                      completedIn: w,
                                                      handleCompleteGlowAnimationExited: ae,
                                                      isRewardAnimationEnd: F,
                                                  },
                                                  s().createElement('div', { className: Q }),
                                              )
                                            : s().createElement(
                                                  yt.u,
                                                  {
                                                      isEnabled: a,
                                                      contentId: zn.tooltips.BattlePassLockIconTooltipView('resId'),
                                                  },
                                                  s().createElement(
                                                      'div',
                                                      null,
                                                      s().createElement(Tn, {
                                                          isPremium: a,
                                                          isLockedState: X,
                                                          isInProgress: O,
                                                          isPremiumActivated: r,
                                                          playUnlockAnimation: c,
                                                          baseUnlockProps: ue,
                                                          handleUnlockAnimationExited: te,
                                                      }),
                                                  ),
                                              )),
                                    (l || D) &&
                                        s().createElement(
                                            kn.Z,
                                            { in: !w, timeout: Gn, classNames: V, onExited: J },
                                            h && w
                                                ? s().createElement(
                                                      'div',
                                                      { className: Hn.trophyTokenLabel },
                                                      Un.progression.trophySelectAwaiting(),
                                                  )
                                                : s().createElement('div', { className: re }),
                                        ),
                                    c &&
                                        !T &&
                                        s().createElement(
                                            yt.u,
                                            { contentId: zn.tooltips.BattlePassLockIconTooltipView('resId') },
                                            s().createElement(
                                                'div',
                                                { className: Hn.iconInner },
                                                s().createElement(Tn, {
                                                    baseUnlockProps: ue,
                                                    isPremium: a,
                                                    isLockedState: X,
                                                    isInProgress: O,
                                                    isPremiumActivated: r,
                                                    playUnlockAnimation: c,
                                                    handleUnlockAnimationExited: te,
                                                }),
                                                O &&
                                                    s().createElement(
                                                        'div',
                                                        null,
                                                        s().createElement(
                                                            kn.Z,
                                                            $n({}, ue, { classNames: j }),
                                                            s().createElement(
                                                                'div',
                                                                { className: Hn.glowWrapper },
                                                                s().createElement('div', { className: Hn.glow }),
                                                            ),
                                                        ),
                                                        s().createElement(
                                                            kn.Z,
                                                            $n({}, ue, { classNames: q }),
                                                            s().createElement(
                                                                'div',
                                                                { className: Hn.glowWrapper },
                                                                s().createElement('div', { className: Hn.dust }),
                                                            ),
                                                        ),
                                                    ),
                                            ),
                                        ),
                                ),
                            se &&
                                s().createElement(
                                    'div',
                                    { className: Hn.pointsWrapper },
                                    s().createElement(Wn, { totalPoints: o, currentPoints: i }),
                                ),
                        );
                    },
                    jn = {
                        base: 'CardContent_base_aa',
                        content: 'CardContent_content_ed',
                        content__notStarted: 'CardContent_content__notStarted_30',
                        content__premiumWithoutBP: 'CardContent_content__premiumWithoutBP_2f',
                        content__enter: 'CardContent_content__enter_10',
                        content__enterActive: 'CardContent_content__enterActive_80',
                        content__enterDone: 'CardContent_content__enterDone_1b',
                        status: 'CardContent_status_6f',
                        buttonHolder: 'CardContent_buttonHolder_a0',
                        buttonLight: 'CardContent_buttonLight_95',
                        buttonInner: 'CardContent_buttonInner_27',
                        buttonInner__disabled: 'CardContent_buttonInner__disabled_b1',
                        button: 'CardContent_button_3a',
                        button__disabled: 'CardContent_button__disabled_a8',
                        buttonBlink: 'CardContent_buttonBlink_db',
                        move: 'CardContent_move_18',
                        buttonText: 'CardContent_buttonText_fc',
                    },
                    qn = ['children'];
                function Yn() {
                    return (
                        (Yn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Yn.apply(this, arguments)
                    );
                }
                const Xn = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, qn);
                    return s().createElement(
                        yt.u,
                        Yn(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
                function Zn() {
                    return (
                        (Zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Zn.apply(this, arguments)
                    );
                }
                const Kn = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const u = s().createElement('div', { className: a }, e);
                        if (t.header || t.body) return s().createElement(le.i, t, u);
                        const r = t.contentId,
                            n = t.args,
                            o = null == n ? void 0 : n.contentId;
                        return r || o
                            ? s().createElement(yt.u, Zn({}, t, { contentId: r || o }), u)
                            : s().createElement(Xn, t, u);
                    },
                    Qn = {
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
                    Jn = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: u = Aa.Big,
                        special: r,
                        value: n,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ca.BATTLE_BOOSTER:
                                    case Ca.BATTLE_BOOSTER_REPLACE:
                                        return va.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ca.BATTLE_BOOSTER:
                                        return fa.BATTLE_BOOSTER;
                                    case Ca.BATTLE_BOOSTER_REPLACE:
                                        return fa.BATTLE_BOOSTER_REPLACE;
                                    case Ca.BUILT_IN_EQUIPMENT:
                                        return fa.BUILT_IN_EQUIPMENT;
                                    case Ca.EQUIPMENT_PLUS:
                                        return fa.EQUIPMENT_PLUS;
                                    case Ca.EQUIPMENT_TROPHY_BASIC:
                                        return fa.EQUIPMENT_TROPHY_BASIC;
                                    case Ca.EQUIPMENT_TROPHY_UPGRADED:
                                        return fa.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ca.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return fa.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ca.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return fa.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ca.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return fa.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ca.PROGRESSION_STYLE_UPGRADED_1:
                                        return fa.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ca.PROGRESSION_STYLE_UPGRADED_2:
                                        return fa.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ca.PROGRESSION_STYLE_UPGRADED_3:
                                        return fa.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ca.PROGRESSION_STYLE_UPGRADED_4:
                                        return fa.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ha.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ha.CURRENCY:
                                    case ha.NUMBER:
                                        return s().createElement(Da.A, { format: 'integral', value: Number(e) });
                                    case ha.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, o);
                        return s().createElement(
                            'div',
                            { className: f()(Qn.base, Qn[`base__${u}`], l), style: i },
                            s().createElement(
                                Kn,
                                { tooltipArgs: _, className: Qn.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: f()(Qn.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: f()(Qn.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: f()(Qn.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: f()(Qn.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    Qn.info,
                                                    Qn[`info__${e}`],
                                                    o === ha.MULTI && Qn.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                s().createElement(
                                    Kn,
                                    { tooltipArgs: d },
                                    s().createElement('div', {
                                        className: f()(Qn.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    es = {
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
                        shine__animated: 'Rewards_shine__animated_08',
                        fade: 'Rewards_fade_96',
                        rewardInner__animated: 'Rewards_rewardInner__animated_7a',
                        changeReward: 'Rewards_changeReward_ee',
                        staticShine: 'Rewards_staticShine_e4',
                        explosion: 'Rewards_explosion_f6',
                    };
                function ts() {
                    return (
                        (ts =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ts.apply(this, arguments)
                    );
                }
                const as = (0, n.memo)(
                        ({
                            data: e,
                            isTaken: t,
                            isVertical: a,
                            isTriple: u,
                            isReverse: r,
                            isInProgress: n,
                            hasAnimation: o,
                        }) => {
                            const i = S().mediaSize <= B.Small,
                                l = f()(
                                    es.base,
                                    a && es.base__column,
                                    n && es.base__inProgress,
                                    r && es.base__reverse,
                                    n && u && es.base__tripleInProgress,
                                    !n && u && es.base__tripleDefault,
                                ),
                                c = f()(es.rewardInner, o && es.rewardInner__animated),
                                _ = f()(es.shine, o && es.shine__animated);
                            return s().createElement(
                                'div',
                                { className: l },
                                e.map((e, a) => {
                                    const u =
                                            e.name.includes('styleProgressToken') ||
                                            e.name.includes('battlePassSelectToken'),
                                        r = (t && u) || o;
                                    return s().createElement(
                                        'div',
                                        { key: a, className: f()(es.reward, es[`reward__${a}`]) },
                                        r && s().createElement('div', { className: _ }),
                                        s().createElement(
                                            'div',
                                            { className: c },
                                            o &&
                                                s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement('div', { className: es.staticShine }),
                                                    s().createElement('div', { className: es.explosion }),
                                                ),
                                            s().createElement(
                                                Jn,
                                                ts(
                                                    {
                                                        size: i ? Aa.Small : Aa.Big,
                                                        image: i ? e.smallImage : e.bigImage,
                                                    },
                                                    e,
                                                ),
                                            ),
                                        ),
                                    );
                                }),
                            );
                        },
                    ),
                    us = {
                        content: 'CardRewards_content_0a',
                        content__notStarted: 'CardRewards_content__notStarted_9f',
                        content__premiumWithoutBP: 'CardRewards_content__premiumWithoutBP_05',
                        content__enterActive: 'CardRewards_content__enterActive_07',
                        content__enterDone: 'CardRewards_content__enterDone_26',
                    },
                    rs = (0, n.memo)(
                        ({
                            rewards: e,
                            showHighlight: t,
                            completedIn: a,
                            isTaken: u,
                            isPremium: r,
                            isInProgress: o,
                            isNotStarted: i,
                            isPremiumActivated: l,
                            baseTimeout: c,
                            isRewardAnimationActive: _,
                        }) => {
                            const d = e.items.map(({ value: e }) => {
                                    const t = e.item,
                                        a = e.name,
                                        u = e.value,
                                        r = e.overlayType,
                                        n = e.tooltipId,
                                        s = e.tooltipContentId;
                                    return {
                                        name: t || a,
                                        smallImage: ya(e, Aa.Small),
                                        bigImage: ya(e, Aa.Big),
                                        special: r,
                                        value: u,
                                        valueType:
                                            ((o = a),
                                            Fa.includes(o)
                                                ? ha.MULTI
                                                : Ba.includes(o)
                                                  ? ha.CURRENCY
                                                  : wa.includes(o)
                                                    ? ha.NUMBER
                                                    : Pa.includes(o)
                                                      ? ha.PREMIUM_PLUS
                                                      : ha.STRING),
                                        tooltipArgs: La({ tooltipId: n }, Number(s), { ignoreShowDelay: !0 }),
                                    };
                                    var o;
                                }),
                                m = (0, n.useState)(d),
                                E = m[0],
                                g = m[1],
                                b = (0, n.useRef)(d),
                                p = b.current;
                            (0, n.useEffect)(() => {
                                if (p.some((e, t) => e !== d[t])) return (b.current = d), (0, Qu.F)(() => g(d), 1e3);
                            }, [d, p]);
                            const A = (0, n.useMemo)(
                                    () => ({
                                        enter: us.content__enter,
                                        enterActive: us.content__enterActive,
                                        enterDone: us.content__enterDone,
                                    }),
                                    [],
                                ),
                                h = f()(
                                    us.content,
                                    t && !a && us.content__enter,
                                    i && us.content__notStarted,
                                    r && !l && us.content__premiumWithoutBP,
                                ),
                                C = (0, n.useMemo)(
                                    () => ({
                                        data: E,
                                        isVertical: 2 === E.length,
                                        isTaken: u,
                                        isTriple: 3 === E.length,
                                        isReverse: r,
                                        isInProgress: o,
                                        hasAnimation: _,
                                    }),
                                    [E, u, r, o, _],
                                );
                            return t
                                ? s().createElement(
                                      kn.Z,
                                      { in: a, timeout: c, className: h, classNames: A },
                                      s().createElement('div', null, s().createElement(as, C)),
                                  )
                                : s().createElement('div', { className: h }, s().createElement(as, C));
                        },
                    );
                function ns() {
                    return (
                        (ns =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ns.apply(this, arguments)
                    );
                }
                const ss = 100,
                    os = 1800,
                    is = (0, te.Pi)(
                        ({
                            status: e,
                            potentialStatus: t,
                            isPremium: a,
                            isRare: u,
                            isPremiumActivated: r,
                            reward: o,
                            stepNumber: i,
                            totalPoints: l,
                            currentPoints: c,
                            currentLevel: _,
                            previousLevel: d,
                            isFinal: m,
                            showBuyAnimations: E,
                            showLevelsAnimations: g,
                            onFinalAnimationDone: b,
                            maxVisibleCards: p,
                            isTaken: A,
                            isButtonVisible: h,
                            isButtonDisabled: C,
                        }) => {
                            (0, n.useContext)(Ls);
                            const v = Je().controls,
                                D = v.onTakeClick,
                                F = v.onFinishedAnimation,
                                w = e === Br.IN_PROGRESS,
                                P = e === Br.COMPLETED,
                                k = e === Br.COMPLETED_TROPHY_NOT_SELECTED,
                                y = e === Br.NOT_STARTED,
                                L = (0, n.useState)(!1),
                                N = L[0],
                                x = L[1],
                                T = (0, n.useState)(!1),
                                M = T[0],
                                I = T[1],
                                O = (0, n.useState)(!1),
                                W = O[0],
                                H = O[1],
                                $ = (0, n.useState)(!1),
                                G = $[0],
                                U = $[1],
                                z = (0, n.useCallback)(() => x(!0), []),
                                V = S().mediaSize <= B.Small ? ea.extraSmall : ea.small,
                                j = (0, n.useRef)(A),
                                q = (0, n.useRef)([]),
                                Y = j.current;
                            (0, n.useEffect)(() => {
                                j.current = A;
                            }),
                                (0, n.useEffect)(() => {
                                    if (Y && !A) {
                                        const e = window.setTimeout(() => {
                                                I(!1), H(!0), F();
                                            }, os),
                                            t = window.setTimeout(() => {
                                                U(!1);
                                            }, 2300);
                                        I(!0), U(!0), q.current.push(e, t);
                                    }
                                }, [A, F, Y, o]),
                                (0, n.useEffect)(
                                    () => () => {
                                        q.current.forEach(clearTimeout);
                                    },
                                    [],
                                );
                            const X = (0, n.useMemo)(() => {
                                    let e,
                                        t = 0,
                                        u = 0,
                                        n = 0,
                                        s = 0,
                                        o = !1,
                                        l = !1,
                                        c = !1,
                                        m = !1,
                                        A = 500 * Math.ceil(_ / 25);
                                    if (p && E && r) {
                                        const e = Math.floor(0.5 * p);
                                        let a = _ - e,
                                            r = _ + e,
                                            n = 0;
                                        a <= 0 && ((n = 1 - a), (r += n), (a = 1));
                                        const d = i < _ && i >= a,
                                            E = i > _ && i <= r,
                                            g = i === a;
                                        d ? (t = (i - a + 1) * ss) : E && (t = (i - a) * ss),
                                            (o = Boolean(w || d || E || g)),
                                            (l = Boolean(w || g)),
                                            (c = Boolean(P && o)),
                                            (m = Boolean(k && o)),
                                            (u = (p - n - 1) * ss),
                                            w && (s = (i - a + 1) * ss * 2.5);
                                    }
                                    if (p && g) {
                                        const t = Math.min(_ - d, Math.floor(0.5 * p));
                                        let r = _ - t;
                                        r <= 0 && (r = 1);
                                        const s = i < _ && i >= r;
                                        s && ((u = (i - r + 1) * ss), a && (u += ss)),
                                            (c = Boolean(P && s)),
                                            (n = t * ss + ss * Math.trunc(t / 2) + A),
                                            g ? (e = b) : i === _ - 1 && (e = z);
                                    }
                                    return (
                                        G && ((A = 0), (u = os), (c = Boolean(P)), (m = Boolean(k))),
                                        w ? (e = z) : i === _ - 1 && (e = b),
                                        {
                                            baseTimeout: s,
                                            playCompleteAnimation: c,
                                            playCompleteSelectRewardAnimation: m,
                                            playCompleteAnimationSound: c,
                                            playUnlockAnimation: o,
                                            playUnlockAnimationSound: l,
                                            unlockAnimationDelay: t,
                                            onAnimationDone: e,
                                            onCompleteAnimationStart: z,
                                            completeAnimationDelay: u,
                                            stageAnimationDelay: n,
                                            initialAnimationDelay: A,
                                        }
                                    );
                                }, [_, P, w, a, r, p, z, b, d, E, g, i, G, k]),
                                Z = (0, n.useCallback)(() => {
                                    D({ level: i });
                                }, [D, i]),
                                K = f()(jn.base, w && !a ? jn.base__inProgress : jn.base__default),
                                Q = f()(jn.buttonInner, C && jn.buttonInner__disabled),
                                J = f()(jn.button, C && jn.button__disabled),
                                ee = (P || w) && (X.playUnlockAnimation || X.playCompleteAnimation),
                                te = e === Br.COMPLETED_TROPHY_NOT_SELECTED;
                            return s().createElement(
                                'div',
                                { className: K },
                                !a &&
                                    s().createElement(
                                        Nn,
                                        ns({ status: e, stepNumber: i, isFinal: m, showLevelsAnimations: g }, X),
                                    ),
                                h &&
                                    !a &&
                                    s().createElement(
                                        le.i,
                                        {
                                            isEnabled: C,
                                            body: R.strings.battle_pass.progression.btnRewardsUnavailable(),
                                        },
                                        s().createElement(
                                            'div',
                                            { className: jn.buttonHolder },
                                            !C && s().createElement('div', { className: jn.buttonLight }),
                                            s().createElement(
                                                'div',
                                                { className: Q },
                                                s().createElement(
                                                    aa,
                                                    { type: Jt.ghost, size: V, disabled: C, onClick: Z, mixClass: J },
                                                    !C && s().createElement('div', { className: jn.buttonBlink }),
                                                    s().createElement(
                                                        'div',
                                                        { className: jn.buttonText },
                                                        R.strings.battle_pass.progression.takeReward(),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                s().createElement(rs, {
                                    showHighlight: ee,
                                    rewards: o,
                                    completedIn: N,
                                    isTaken: A,
                                    isPremium: a,
                                    isInProgress: w,
                                    baseTimeout: X.baseTimeout,
                                    isNotStarted: y,
                                    isPremiumActivated: r,
                                    isRewardAnimationActive: M,
                                }),
                                s().createElement(
                                    'div',
                                    { className: jn.status },
                                    s().createElement(
                                        Vn,
                                        ns(
                                            {
                                                status: e,
                                                potentialStatus: t,
                                                isPremium: Boolean(a),
                                                isRare: u,
                                                isPremiumActivated: r,
                                                totalPoints: l,
                                                currentPoints: c,
                                                isTaken: A,
                                                hasTrophySelectionToken: te,
                                                completedDuration: 500,
                                                isRewardAnimationEnd: W,
                                            },
                                            X,
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ls = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__fullBasic: 'Divider_base__fullBasic_b1',
                        base__fullPremium: 'Divider_base__fullPremium_0a',
                        inner: 'Divider_inner_40',
                        inner__basic: 'Divider_inner__basic_17',
                        inner__premium: 'Divider_inner__premium_28',
                    },
                    cs = ({ position: e, isFull: t = !0, isPremium: a = !1 }) => {
                        const u = f()(ls.base, ls[`base__${e}`], t && (a ? ls.base__fullPremium : ls.base__fullBasic)),
                            r = f()(ls.inner, a ? ls.inner__premium : ls.inner__basic);
                        return s().createElement('div', { className: u }, s().createElement('div', { className: r }));
                    },
                    _s = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__inProgressNonPremium: 'Card_base__inProgressNonPremium_0c',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    ds = (0, n.memo)(
                        (0, n.forwardRef)(
                            (
                                {
                                    status: e,
                                    potentialStatus: t,
                                    isPremium: a,
                                    isPremiumActivated: u,
                                    isRare: r,
                                    reward: o,
                                    stepNumber: i,
                                    totalPoints: l,
                                    totalPointsFinal: c,
                                    currentPoints: _,
                                    currentLevel: d,
                                    previousLevel: m,
                                    isFinal: E,
                                    maxVisibleCards: g,
                                    showBuyAnimations: b,
                                    showLevelsAnimations: p,
                                    onAnimationDone: A,
                                    isTaken: h,
                                    isButtonVisible: C,
                                    isButtonDisabled: v,
                                    isShadowVisible: D,
                                },
                                F,
                            ) => {
                                const B = J('model'),
                                    w = B.currentPointsInLevel,
                                    P = B.chapterState,
                                    S = (0, n.useRef)(null);
                                (0, n.useImperativeHandle)(F, () => ({
                                    width: () => {
                                        const e = S.current;
                                        return e ? e.offsetWidth : void 0;
                                    },
                                    offsetLeft: () => {
                                        const e = S.current;
                                        return e ? e.offsetLeft : void 0;
                                    },
                                    getOffsetLeftInArea: () => {
                                        const e = S.current;
                                        if (!e) return 0;
                                        const t = e.parentNode,
                                            a = t ? t.offsetLeft : 0;
                                        return e.offsetLeft + a;
                                    },
                                    getHTMLElement: () => S.current,
                                }));
                                const k = e === Br.NOT_STARTED,
                                    y = e === Br.IN_PROGRESS,
                                    L = e === Br.COMPLETED,
                                    N = e === Br.COMPLETED_TROPHY_NOT_SELECTED,
                                    R = L || y || N || (k && 1 === i),
                                    x = k || y || N || (L && E),
                                    T = f()(_s.base, _s[`base__${e}`], !a && _s[`base__${e}NonPremium`]),
                                    M = f()(_s.totalPoints, _s.totalPoints__default),
                                    I = f()(_s.totalPoints, _s.totalPoints__final),
                                    O = ((e, t, a, u) =>
                                        e === Br.COMPLETED
                                            ? 100
                                            : e !== Br.IN_PROGRESS || (t !== rt.NotStarted && t !== rt.Paused)
                                              ? 0
                                              : (100 * a) / u)(e, P, w, l),
                                    W = { width: `${O}%` },
                                    H = {
                                        '--small-card-width': '140rem',
                                        '--small-current-card-width': '224rem',
                                        '--big-card-width': '220rem',
                                        '--big-current-card-width': '340rem',
                                    };
                                return s().createElement(
                                    'div',
                                    { className: T, ref: S, style: H },
                                    s().createElement(Sn, {
                                        status: e,
                                        isPremium: a,
                                        isPremiumActivated: u,
                                        isRare: r,
                                    }),
                                    s().createElement(is, {
                                        status: e,
                                        potentialStatus: t,
                                        isPremium: a,
                                        isRare: r,
                                        isPremiumActivated: u,
                                        reward: o,
                                        stepNumber: i,
                                        totalPoints: l,
                                        currentPoints: _,
                                        currentLevel: d,
                                        previousLevel: m,
                                        isFinal: E,
                                        maxVisibleCards: g,
                                        showBuyAnimations: b,
                                        showLevelsAnimations: p,
                                        onFinalAnimationDone: A,
                                        isTaken: h,
                                        isButtonVisible: C,
                                        isButtonDisabled: v,
                                    }),
                                    a && s().createElement('div', { className: M }, l),
                                    a && E && s().createElement('div', { className: I }, c),
                                    D && s().createElement('div', { className: _s.progressShadow, style: W }),
                                    R && s().createElement(cs, { position: Fr.left, isFull: !0, isPremium: a }),
                                    x && s().createElement(cs, { position: Fr.right, isFull: !0, isPremium: a }),
                                );
                            },
                        ),
                    );
                function ms() {
                    return (
                        (ms =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ms.apply(this, arguments)
                    );
                }
                const Es = (e, t, a, u, r, n, s) =>
                        r === n && u === t
                            ? Br.COMPLETED
                            : e === r && ((s !== rt.NotStarted && s !== rt.Disabled) || u > 0)
                              ? Br.IN_PROGRESS
                              : e < r
                                ? 3 !== a || (s !== rt.Active && s !== rt.Completed)
                                    ? Br.COMPLETED
                                    : Br.COMPLETED_TROPHY_NOT_SELECTED
                                : Br.NOT_STARTED,
                    gs = (0, te.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            levels: u,
                            isPremium: r,
                            sectionKey: o,
                            maxVisibleCards: i,
                            isMarathon: l = !1,
                        }) => {
                            const c = Je().model.root.get(),
                                _ = c.chapterID,
                                d = c.chapterState,
                                m = c.currentPointsInLevel,
                                E = c.currentPointsInChapter,
                                g = c.freePointsInChapter,
                                b = c.freePointsInLevel,
                                p = c.currentLevel,
                                A = c.previousLevel,
                                h = c.potentialLevel,
                                C = c.isBattlePassPurchased,
                                v = c.showBuyAnimations,
                                D = c.showLevelsAnimations,
                                F = (0, n.useState)(!1),
                                B = F[0],
                                w = F[1],
                                P = (0, n.useCallback)(() => {
                                    w(!0);
                                }, [w]),
                                S = Boolean(i && r && v),
                                k = Boolean(i && D);
                            let y = 0;
                            const L = u.items,
                                N = L.length,
                                R = d === rt.NotStarted || d === rt.Paused,
                                x = L.map(({ value: u }, n) => {
                                    const c = u.level,
                                        v = u.levelPoints,
                                        f = u.state,
                                        D = u.isButtonDisabled;
                                    y += v;
                                    const F = r ? u.paidRewardItems : u.freeRewardItems,
                                        w = c === N,
                                        L = Es(c, y, f, E, p, N, d),
                                        x = R ? Es(c, y, f, g, h, N, d) : Br.NOT_STARTED,
                                        T = ((u, r, n) => (u === r ? e : u === n ? a : t))(c, p, h),
                                        M = F || [],
                                        I = !r && (L === Br.COMPLETED || L === Br.IN_PROGRESS);
                                    return s().createElement(
                                        ds,
                                        ms(
                                            {
                                                key: `${_}_${o}_${n}`,
                                                showBuyAnimations: S && !B,
                                                showLevelsAnimations: k,
                                            },
                                            u,
                                            {
                                                ref: T,
                                                reward: M,
                                                currentPoints: R && !l ? b : m,
                                                currentLevel: p,
                                                previousLevel: A,
                                                stepNumber: c,
                                                status: L,
                                                potentialStatus: x,
                                                totalPoints: r ? y - v : v,
                                                totalPointsFinal: y,
                                                isPremium: r,
                                                isPremiumActivated: C,
                                                isFinal: w,
                                                isShadowVisible: I,
                                                maxVisibleCards: i,
                                                onAnimationDone: P,
                                                isTaken: r ? u.needTakePaid : u.needTakeFree,
                                                isButtonDisabled: D,
                                            },
                                        ),
                                    );
                                });
                            return s().createElement('div', { className: f()(ru.row, !r && ru.row__basic) }, x);
                        },
                    );
                function bs() {
                    return (
                        (bs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        bs.apply(this, arguments)
                    );
                }
                const ps = (0, te.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: u,
                            overScrollWidth: r,
                            widget3dStyleLeftRef: o,
                            shadowLipRef: l,
                            api: c,
                        }) => {
                            const _ = (0, n.useContext)(ys).levels,
                                d = Je().model.root.get(),
                                m = d.showLevelsAnimations,
                                E = d.finalReward,
                                g = d.isStyleProgressive,
                                b = d.currentLevel,
                                p = d.currentPointsInLevel,
                                A = d.chapterType,
                                h = (0, n.useRef)({ update: () => {} }),
                                C = (0, n.useRef)({ update: () => {} }),
                                v = A === ct.Marathon;
                            c.current.moveProgressBars = (0, n.useCallback)((e) => {
                                h.current.update(e), C.current.update(e);
                            }, []);
                            const D = (0, n.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                F = D[0],
                                B = D[1],
                                w = (0, n.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            u = t.current,
                                            r = a ? a.width() : 0,
                                            n = u ? u.width() : 0;
                                        return !n && r
                                            ? { currentLevelWidth: r, levelWidth: 224 === r ? 140 : 220 }
                                            : { currentLevelWidth: r, levelWidth: n };
                                    }
                                }, [e, t]),
                                P = S().mediaSize;
                            (0, n.useEffect)(() => {
                                (0, G.Eu)().then(() => {
                                    const e = w();
                                    if (e) {
                                        const t = i.O.client.getSize(),
                                            a = Math.floor((t.width - e.currentLevelWidth) / e.levelWidth) + 1;
                                        B({
                                            levelWidth: e.levelWidth,
                                            currentLevelWidth: e.currentLevelWidth,
                                            maxCardsShown: a,
                                        });
                                    }
                                });
                            }, [P, w, _.items.length, b, p]),
                                (0, n.useEffect)(() => {
                                    m && (0, ee.G)(R.sounds.bp_progress_bar_start());
                                }, [m]),
                                (0, n.useEffect)(() => {
                                    u && u();
                                }, [b, p, u]);
                            const k = _.items.map((e) => {
                                    const t = e.value.isFreeRewardChoiceEnabled || e.value.isPaidRewardChoiceEnabled,
                                        a = e.value.needTakeFree || e.value.needTakePaid,
                                        u = a && !t;
                                    return {
                                        value: Object.assign({}, e.value, { isButtonDisabled: u, isButtonVisible: a }),
                                    };
                                }),
                                y = g ? 4 : 0,
                                L = !v && Ta(E) === lt.style,
                                N = Ta(E) === lt.tankman,
                                x = L && g,
                                T = L || N;
                            return s().createElement(
                                'div',
                                { className: ru.wrapper },
                                x &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(vn, {
                                            widget3dStyleRef: o,
                                            overScrollWidth: r,
                                            level: 1,
                                            isShowTitle: !0,
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: f()(ru.decor, ru.decor__left) },
                                            s().createElement('div', { className: ru.decorBackground }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: ru.bookmarkBackground, ref: l },
                                            s().createElement(Dr, {
                                                isDisappeared: !0,
                                                mixClass: ru.bookmarkLeftResponsive,
                                            }),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: ru.section },
                                    s().createElement(gs, {
                                        sectionKey: 'baseCard',
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        potentialLevelCardRef: a,
                                        levels: Object.assign({}, _, { items: k }),
                                        maxVisibleCards: m ? F.maxCardsShown : 0,
                                        currentLevel: b,
                                        isMarathon: v,
                                    }),
                                    s().createElement(
                                        wn,
                                        bs({ progressApi: h, freePointsApi: C, progressChange: u }, F),
                                    ),
                                    s().createElement(gs, {
                                        sectionKey: 'basePremiumCard',
                                        isPremium: !0,
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        levels: _,
                                        maxVisibleCards: F.maxCardsShown,
                                        currentLevel: b,
                                        isMarathon: v,
                                    }),
                                ),
                                T &&
                                    s().createElement(
                                        'div',
                                        { className: ru.decor },
                                        s().createElement('div', { className: ru.decorBackground }),
                                    ),
                                L && s().createElement(vn, { overScrollWidth: r, level: y }),
                                N && s().createElement(tn, null),
                            );
                        },
                    ),
                    As = (0, n.memo)(ps);
                function hs() {
                    return (
                        (hs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        hs.apply(this, arguments)
                    );
                }
                function Cs(e, t, a, u, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, r);
                }
                const vs = { allowedButtons: [tr.MainButton] },
                    fs = 0,
                    Ds = R.strings.battle_pass.progression;
                let Fs;
                !(function (e) {
                    (e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel');
                })(Fs || (Fs = {}));
                const Bs = (0, te.Pi)(({ onScrollToEnd: e, onHorizontalScroll: t }) => {
                        const a = (0, n.useContext)(ys).levels,
                            u = Je().model.root.get(),
                            r = u.currentLevel,
                            o = u.isBattlePassPurchased,
                            i = u.showBuyAnimations,
                            l = u.isStyleProgressive,
                            c = (0, n.useRef)({ moveProgressBars: () => {} }),
                            _ = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            A = (0, n.useRef)(0),
                            h = (0, n.useState)(Fs.Hidden),
                            C = h[0],
                            v = h[1],
                            D = (0, n.useState)(Fs.Hidden),
                            F = D[0],
                            B = D[1],
                            w = (0, n.useState)(!1),
                            P = w[0],
                            S = w[1],
                            k = l,
                            y = bu(),
                            L = y.animationScroll.scrollPosition,
                            N = y.applyScroll,
                            R = y.events,
                            x = y.handleMouseWheel,
                            T = y.getContainerSize,
                            M = y.getWrapperSize,
                            I = (function (e, t, a) {
                                const u = e.contentRef,
                                    r = e.wrapperRef,
                                    s = e.scrollPosition,
                                    o = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, n.useState)(er),
                                    _ = c[0],
                                    d = c[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = u.current;
                                        e && (e.style.cursor = _.type === Ju.Dragging ? 'move' : 'grab');
                                    }, [u, _.type]),
                                    (0, n.useEffect)(() => {
                                        if (_.type !== Ju.Dragging) return;
                                        const e = (e) => {
                                            const a = u.current,
                                                n = r.current;
                                            if (!a || !n) return;
                                            const l = _.positionFrom - e.screenX,
                                                c = _.previousScrollPosition + l;
                                            s.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: o(a, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        };
                                        function a() {
                                            window.removeEventListener('mousemove', e),
                                                document.body.removeEventListener('mouseleave', a),
                                                d({ type: 'scrollingToEnd' });
                                        }
                                        return (
                                            window.addEventListener('mousemove', e),
                                            window.addEventListener('mouseup', a),
                                            document.body.addEventListener('mouseleave', a),
                                            () => {
                                                window.removeEventListener('mousemove', e),
                                                    window.removeEventListener('mouseup', a),
                                                    document.body.removeEventListener('mouseleave', a);
                                            }
                                        );
                                    }, [i.scrollPosition, o, u, _, s, r, t, a]),
                                    (0, n.useEffect)(() => {
                                        if (_.type !== Ju.End) return;
                                        const e = () => {
                                            d(er);
                                        };
                                        return i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [i.scrollPosition, _.type, l]),
                                    (0, n.useEffect)(() => {
                                        const e = u.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                d({
                                                    type: Ju.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, u, a]),
                                    [_, d]
                                );
                            })(y, void 0, vs),
                            O = I[0],
                            W = I[1],
                            $ = (e) => {
                                O.type === Ju.Dragging && W({ type: Ju.End }), x(e);
                            },
                            U = (0, n.useMemo)(() => Object.assign({}, y, { handleMouseWheel: $ }), []),
                            z = (0, n.useCallback)(
                                (e) => {
                                    const t = E.current ? E.current.offsetWidth : 0,
                                        a = g.current ? g.current.offsetWidth : 0;
                                    if (_.current) {
                                        const u = M();
                                        c.current.moveProgressBars({
                                            viewPort: _.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                            leftOffset: t + fs + a,
                                        }),
                                            S(!k || e > t + fs + 0.5 * a);
                                    }
                                },
                                [M, k],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    z(e);
                                },
                                [z],
                            ),
                            j = (0, n.useCallback)((e = !1) => {
                                const t = d.current;
                                let a = 0,
                                    u = 0;
                                const r = E.current ? E.current.offsetWidth : 0,
                                    n = g.current ? g.current.offsetWidth : 0;
                                t && ((a = t.width()), (u = t.offsetLeft() + r + n));
                                const s = _.current;
                                let o = 0;
                                if (a && s) {
                                    const t = 0.5 * s.offsetWidth;
                                    e && A.current
                                        ? (o = u + a - 0.5 * A.current - t)
                                        : ((o = u + 0.5 * a - t), (A.current = a));
                                }
                                return (o = Math.round(o < 0 ? 0 : o)), o;
                            }, []),
                            q = (0, n.useCallback)((e) => {
                                let t = 0;
                                if (e && e.current && _ && _.current) {
                                    const a = e.current,
                                        u = E.current ? E.current.offsetWidth : 0,
                                        r = g.current ? g.current.offsetWidth : 0;
                                    let n = 0,
                                        s = 0;
                                    a && ((n = a.width()), (s = a.offsetLeft() + u + r));
                                    const o = _.current;
                                    if (n && o) {
                                        t = s + 0.5 * n - 0.5 * o.offsetWidth;
                                    }
                                    t = Math.round(t < 0 ? 0 : t);
                                }
                                return t;
                            }, []),
                            Y = (0, n.useCallback)(() => {
                                const e = _.current,
                                    t = d.current,
                                    a = m.current,
                                    u = E.current ? E.current.offsetWidth : 0,
                                    r = g.current ? g.current.offsetWidth : 0,
                                    n = t.offsetLeft() + u + r,
                                    s = (null == a ? void 0 : a.offsetLeft()) + u + r,
                                    o =
                                        L.goal < n - e.offsetWidth
                                            ? Fs.NavToCurrentLevel
                                            : a && L.goal < s - e.offsetWidth
                                              ? Fs.NavToPotentialLevel
                                              : Fs.Hidden,
                                    i = (() => {
                                        switch (!0) {
                                            case a && L.goal > s + a.width():
                                                return Fs.NavToPotentialLevel;
                                            case L.goal > n + t.width():
                                                return Fs.NavToCurrentLevel;
                                            default:
                                                return Fs.Hidden;
                                        }
                                    })();
                                v(o), B(i);
                            }, [L.goal]),
                            X = (0, n.useCallback)(
                                (e) => {
                                    const t = q(e);
                                    V(L.goal), N(t), Y();
                                },
                                [N, q, V, L.goal, Y],
                            ),
                            Z = (0, n.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case Fs.NavToCurrentLevel:
                                            return X(d);
                                        case Fs.NavToPotentialLevel:
                                            return X(m);
                                    }
                                },
                                [X],
                            ),
                            K = (e) => {
                                switch (e) {
                                    case Fs.NavToCurrentLevel:
                                        return { type: ur.Default, tooltipBody: Ds.backToCurrentStageArrow.descr() };
                                    case Fs.NavToPotentialLevel:
                                        return { type: ur.Gray, tooltipBody: Ds.backToPotentialStageArrow.descr() };
                                }
                            },
                            Q = (0, n.useCallback)(() => {
                                const t = y.getBounds()[1];
                                V(L.goal), Y(), L.goal === t ? e(!0) : e(!1);
                            }, [y, V, e, L.goal, Y]);
                        (0, n.useEffect)(
                            () =>
                                H(() => {
                                    o && i && N(j());
                                }),
                            [N, j, o, i],
                        ),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = T(),
                                                    t = L.goal;
                                                yield (0, G.Eu)(), yield _a();
                                                const a = T(),
                                                    u = _.current,
                                                    r = y.getBounds()[1],
                                                    n = 0.25 * u.offsetWidth,
                                                    s = a && e && a !== e ? (t * a) / e : t;
                                                z(s), N(s > r - n ? r : s);
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (u, r) {
                                                    var n = e.apply(t, a);
                                                    function s(e) {
                                                        Cs(n, u, r, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Cs(n, u, r, s, o, 'throw', e);
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
                            (0, n.useEffect)(() => (0, Qu.F)(() => X(d), 700), [r]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                        t(!1), V(L.goal);
                                    },
                                    a = () => {
                                        t(!0), V(L.goal);
                                    };
                                return (
                                    R.on('rest', e),
                                    R.on('start', a),
                                    () => {
                                        R.off('rest', e), R.off('start', a);
                                    }
                                );
                            }, [O.type, R, V, t, L.goal]);
                        const J = f()(
                                ru.scrollToButton,
                                ru.scrollToButton__backward,
                                F !== Fs.Hidden && ru.scrollToButton__visible,
                            ),
                            ee = f()(
                                ru.scrollToButton,
                                ru.scrollToButton__forward,
                                C !== Fs.Hidden && ru.scrollToButton__visible,
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: f()(ru.bookmark, ru.bookmark__start) },
                                s().createElement(Dr, {
                                    chapterStep: a.items.length,
                                    mixClass: f()(ru.bookmarkLeftFixed, P && ru.bookmarkLeftFixed__active),
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: ru.scrollWrapper, ref: _, onClick: Q, onMouseLeave: Y, onWheel: Q },
                                s().createElement(
                                    Ku.Horizontal.Area.Default,
                                    { api: U, barClassNames: { base: ru.scrollBarPosition }, onDrag: Q },
                                    s().createElement(As, {
                                        api: c,
                                        currentCardRef: d,
                                        freeProgressionCutCardRef: b,
                                        potentialLevelCardRef: m,
                                        separatorRef: p,
                                        overScrollWidth: fs,
                                        widget3dStyleLeftRef: E,
                                        shadowLipRef: g,
                                        onProgressChanged: () => {
                                            Q();
                                        },
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: J },
                                s().createElement(
                                    rr,
                                    hs({ onClick: () => Z(F), direction: Pr.back, className: ru.arrowButton }, K(F)),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ee },
                                s().createElement(
                                    rr,
                                    hs({ onClick: () => Z(C), direction: Pr.forward, className: ru.arrowButton }, K(C)),
                                ),
                            ),
                        );
                    }),
                    ws = (0, te.Pi)(() => {
                        const e = Je().model.root.get(),
                            t = e.isPaused,
                            a = e.chapterType,
                            u = (0, n.useState)(!1),
                            r = u[0],
                            o = u[1],
                            i = (0, n.useState)(!1),
                            l = i[0],
                            c = i[1],
                            _ = (0, n.useCallback)((e) => {
                                o(e);
                            }, []),
                            d = (0, n.useCallback)((e) => {
                                c(e);
                            }, []),
                            m = f()(ru.base, ru[`base__${a}`]),
                            E = f()(ru.shadow, ru.shadow__left),
                            g = f()(ru.shadow, ru.shadow__right),
                            b = f()(ru.additionalShadow, ru.additionalShadow__active),
                            p = f()(ru.additionalShadow, !r && l && ru.additionalShadow__active);
                        return t
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: m },
                                  s().createElement(
                                      'div',
                                      { className: E },
                                      s().createElement('div', { className: b }),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: g },
                                      s().createElement('div', { className: p }),
                                  ),
                                  s().createElement(Bs, { onScrollToEnd: _, onHorizontalScroll: d }),
                              );
                    }),
                    Ps = (0, n.memo)(ws),
                    Ss = (0, n.memo)(({ chapterID: e, buttonState: t, handleChapterChoiceClick: a }) => {
                        const u = J('model'),
                            r = u.chapterState,
                            n = u.chapterType,
                            o = t !== nt.Hide,
                            i = r === rt.Disabled,
                            l = n === ct.Marathon,
                            c = R.strings.battle_pass.progression.btnAllChapters(),
                            _ = f()(_t.progression, _t[`progression__${n}`]);
                        return s().createElement(
                            'div',
                            { className: f()(_t.base, _t[`base__${n}`]), style: (0, it.W4)(e) },
                            s().createElement(
                                'div',
                                { className: _t.close },
                                s().createElement(ut, { caption: c, side: 'left', type: 'back', onClick: a }),
                            ),
                            s().createElement('div', { className: _t.header }, s().createElement(uu, null)),
                            s().createElement('div', { className: _ }, s().createElement(Ps, null)),
                            s().createElement(
                                'div',
                                { className: _t.footer },
                                o && s().createElement(ca, { isDisabled: i }),
                            ),
                            l &&
                                s().createElement(
                                    Qe,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: _t.extraChapterWidget },
                                        s().createElement(Kt, null),
                                    ),
                                ),
                        );
                    }),
                    ks = 'BattlePassProgressionsViewApp_base_40',
                    ys = (0, n.createContext)({}),
                    Ls = s().createContext(!1),
                    Ns = (0, te.Pi)(() => {
                        const e = Je(),
                            t = e.model,
                            a = e.controls,
                            u = t.root.get(),
                            r = u.showOffSeason,
                            o = u.showReplaceRewardsAnimations,
                            i = u.buttonState,
                            l = u.chapterID,
                            c = u.chapterState,
                            _ = u.currentPointsInLevel,
                            d = a.onChapterChoice,
                            m = a.onClose,
                            E = a.onViewLoaded,
                            g = J('model.levels'),
                            b = (0, n.useState)(r),
                            p = b[0],
                            A = b[1],
                            h = (0, n.useState)(!1),
                            C = h[0],
                            v = h[1];
                        var f;
                        (0, n.useEffect)(() => {
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
                            (f = () => m()),
                            z($.n.ESCAPE, f);
                        const D = (0, n.useCallback)(() => {
                                C || (E(), v(!0));
                            }, [C, E]),
                            F = (0, n.useCallback)(() => {
                                d();
                            }, [d]);
                        (0, n.useEffect)(
                            () =>
                                H(() => {
                                    D();
                                }),
                            [D],
                        ),
                            (0, n.useEffect)(() => {
                                A(r);
                            }, [r]),
                            (0, n.useEffect)(() => {
                                o && (0, ee.G)('bp_pick_up_award');
                            }, [o]);
                        const B = { chapterState: c, levels: g, currentPointsInLevel: _ };
                        return s().createElement(
                            Ls.Provider,
                            { value: o },
                            s().createElement(
                                'div',
                                { className: ks },
                                !p &&
                                    s().createElement(
                                        ys.Provider,
                                        { value: B },
                                        s().createElement(Ss, {
                                            chapterID: l,
                                            buttonState: i,
                                            handleChapterChoiceClick: F,
                                        }),
                                    ),
                                p && s().createElement(Ue, null),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        s().createElement(I, null, s().createElement(Qe, null, s().createElement(Ns, null))),
                        document.getElementById('root'),
                    );
                });
            },
            903: (e, t, a) => {
                'use strict';
                a.d(t, { W4: () => i, cs: () => s, fW: () => o, wD: () => n });
                var u = a(8546);
                const r = (e) => {
                        switch (e) {
                            case u.$u.Micro:
                                return 's';
                            case u.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    n = (e, t, a = '') => {
                        const u = a.length > 0 ? `_${a}` : a,
                            r = e.$dyn(`c_${t}${u}`),
                            n = e.$dyn(`common${u}`);
                        return r || n;
                    },
                    s = (e, t, a) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            s = t ? 'BP' : '',
                            o = `${r(a)}${s}`;
                        return { backgroundImage: `url(${n(u, e, o)})` };
                    },
                    o = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.flag,
                            u = r(t);
                        return { backgroundImage: `url(${n(a, e, u)})` };
                    },
                    i = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return { backgroundImage: `url(${n(t.chapter, e)})` };
                    };
            },
            2269: (e, t, a) => {
                'use strict';
                let u, r;
                a.d(t, { W: () => r, w: () => u }),
                    (function (e) {
                        (e.Award = 'Award'), (e.Coin = 'Coin'), (e.Point = 'Point'), (e.Collection = 'Collection');
                    })(u || (u = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(r || (r = {}));
            },
            3561: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => C });
                var u = a(6483),
                    r = a.n(u),
                    n = a(6179),
                    s = a.n(n);
                const o = {
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
                    i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        a = e.value,
                        u = e.isEmpty,
                        n = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        d = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, i);
                    const E = u ? null : a,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const b = E && !g && E > _,
                        p = r()(
                            o.base,
                            o[`base__${t}`],
                            n && o.base__animated,
                            c && o.base__hidden,
                            !E && o.base__pattern,
                            u && o.base__empty,
                            d,
                        );
                    return s().createElement(
                        'div',
                        l({ className: p }, m),
                        s().createElement('div', { className: o.bg }),
                        s().createElement('div', { className: o.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(o.value, g && o.value__text) },
                            b ? _ : E,
                            b && s().createElement('span', { className: o.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var _ = a(2372),
                    d = a(9766),
                    m = a(6373),
                    E = a(7727);
                const g = {
                    base: 'Award_base_1b',
                    base__disabled: 'Award_base__disabled_f6',
                    base__small: 'Award_base__small_88',
                    base__big: 'Award_base__big_70',
                    base__hasAppearAnimation: 'Award_base__hasAppearAnimation_90',
                    baseAppear: 'Award_baseAppear_1e',
                    border: 'Award_border_20',
                    border__smallAward: 'Award_border__smallAward_71',
                    border__smallCoin: 'Award_border__smallCoin_a9',
                    border__smallPoint: 'Award_border__smallPoint_a1',
                    border__smallCollection: 'Award_border__smallCollection_f7',
                    border__bigAward: 'Award_border__bigAward_d1',
                    border__bigCoin: 'Award_border__bigCoin_0e',
                    border__bigPoint: 'Award_border__bigPoint_9a',
                    border__bigCollection: 'Award_border__bigCollection_40',
                    border__disabled: 'Award_border__disabled_cc',
                    border__triggered: 'Award_border__triggered_89',
                    borderDisabled: 'Award_borderDisabled_0b',
                    borderDisabled__small: 'Award_borderDisabled__small_d3',
                    borderDisabled__big: 'Award_borderDisabled__big_67',
                    borderHover: 'Award_borderHover_9b',
                    borderHover__smallAward: 'Award_borderHover__smallAward_cc',
                    borderHover__smallCoin: 'Award_borderHover__smallCoin_34',
                    borderHover__smallPoint: 'Award_borderHover__smallPoint_26',
                    borderHover__smallCollection: 'Award_borderHover__smallCollection_75',
                    borderHover__bigAward: 'Award_borderHover__bigAward_cf',
                    borderHover__bigCoin: 'Award_borderHover__bigCoin_2d',
                    borderHover__bigPoint: 'Award_borderHover__bigPoint_db',
                    borderHover__bigCollection: 'Award_borderHover__bigCollection_6d',
                    shine: 'Award_shine_64',
                    shine__smallLeft: 'Award_shine__smallLeft_bd',
                    shine__smallRight: 'Award_shine__smallRight_a4',
                    shine_small_s: 'Award_shine_small_s_8e',
                    shine_small_m: 'Award_shine_small_m_ad',
                    shine__bigLeft: 'Award_shine__bigLeft_54',
                    shine__bigRight: 'Award_shine__bigRight_41',
                    shine_big_s: 'Award_shine_big_s_5f',
                    shine_big_m: 'Award_shine_big_m_4d',
                    bg: 'Award_bg_cb',
                    bgDisabled: 'Award_bgDisabled_5c',
                    bgHover: 'Award_bgHover_a6',
                    bg__smallAward: 'Award_bg__smallAward_a0',
                    bg__smallCoin: 'Award_bg__smallCoin_03',
                    bg__smallPoint: 'Award_bg__smallPoint_0e',
                    bg__smallCollection: 'Award_bg__smallCollection_c2',
                    bg__bigAward: 'Award_bg__bigAward_48',
                    bg__bigCoin: 'Award_bg__bigCoin_66',
                    bg__bigPoint: 'Award_bg__bigPoint_83',
                    bg__bigCollection: 'Award_bg__bigCollection_10',
                    bg__disabled: 'Award_bg__disabled_94',
                    bgDisabled__small: 'Award_bgDisabled__small_23',
                    bgDisabled__big: 'Award_bgDisabled__big_2a',
                    bgHover__smallAward: 'Award_bgHover__smallAward_e1',
                    bgHover__smallCoin: 'Award_bgHover__smallCoin_3e',
                    bgHover__smallPoint: 'Award_bgHover__smallPoint_99',
                    bgHover__smallCollection: 'Award_bgHover__smallCollection_44',
                    bgHover__bigAward: 'Award_bgHover__bigAward_25',
                    bgHover__bigCoin: 'Award_bgHover__bigCoin_5e',
                    bgHover__bigPoint: 'Award_bgHover__bigPoint_4b',
                    bgHover__bigCollection: 'Award_bgHover__bigCollection_9d',
                    locked: 'Award_locked_9e',
                    lockedHover: 'Award_lockedHover_e1',
                    locked__small: 'Award_locked__small_3d',
                    lockedHover__small: 'Award_lockedHover__small_0c',
                    locked__big: 'Award_locked__big_71',
                    lockedHover__big: 'Award_lockedHover__big_00',
                    arrow: 'Award_arrow_5e',
                    icon: 'Award_icon_b6',
                    icon__smallAward: 'Award_icon__smallAward_c3',
                    icon__smallCoin: 'Award_icon__smallCoin_23',
                    icon__smallPoint: 'Award_icon__smallPoint_72',
                    icon__smallCollection: 'Award_icon__smallCollection_c1',
                    icon__bigAward: 'Award_icon__bigAward_3e',
                    icon__bigCoin: 'Award_icon__bigCoin_c0',
                    icon__bigPoint: 'Award_icon__bigPoint_91',
                    icon__bigCollection: 'Award_icon__bigCollection_de',
                    count: 'Award_count_e4',
                    base__locked: 'Award_base__locked_9b',
                    completedCollectionIcon: 'Award_completedCollectionIcon_c4',
                    bubble: 'Award_bubble_eb',
                    label: 'Award_label_e8',
                    label__smallAward: 'Award_label__smallAward_7c',
                    label__bigAward: 'Award_label__bigAward_fe',
                    label__smallCoin: 'Award_label__smallCoin_45',
                    label__smallPoint: 'Award_label__smallPoint_b8',
                    label__smallCollection: 'Award_label__smallCollection_2b',
                    label__bigCoin: 'Award_label__bigCoin_b9',
                    label__bigPoint: 'Award_label__bigPoint_33',
                    label__bigCollection: 'Award_label__bigCollection_2e',
                    blinkShape: 'Award_blinkShape_77',
                    blink: 'Award_blink_c9',
                    blinker: 'Award_blinker_c1',
                };
                var b = a(2269);
                const p = R.strings.battle_pass.awardsWidget,
                    A = ({
                        type: e,
                        count: t,
                        disabled: a = !1,
                        onClick: u,
                        size: o,
                        isLocked: i = !1,
                        hasTriger: l = !1,
                        hasMarathon: A = !1,
                        hasResource: h = !1,
                        maxCount: C = 0,
                        newItemsCount: v = 0,
                    }) => {
                        let f = '',
                            D = '';
                        const F = e === b.w.Collection && C === t,
                            B = o === b.W.Small && l;
                        switch (e) {
                            case b.w.Award:
                                (f = 1 === t ? p.title.awardSingle() : p.title.awardMultiple()),
                                    (D = a ? p.description.awardDisabled() : p.description.award());
                                break;
                            case b.w.Coin:
                                (f = p.title.coin()), (D = p.description.coin());
                                break;
                            case b.w.Point:
                                (f = p.title.point()),
                                    (D = ((e, t, a) => {
                                        switch (!0) {
                                            case e && t && a:
                                                return p.description.pointLockedExceptExtraAndResource();
                                            case e && !t && a:
                                                return p.description.pointLockedExceptResource();
                                            case e && t:
                                                return p.description.pointLockedExceptExtra();
                                            case e && !t:
                                                return p.description.pointLocked();
                                            default:
                                                return p.description.point();
                                        }
                                    })(i, A, h));
                                break;
                            case b.w.Collection:
                                (f = p.title.collection()),
                                    (D = F ? p.description.collectionCompleted() : p.description.collection());
                        }
                        const w = r()(
                                g.base,
                                g[`base__${o}`],
                                a && g.base__disabled,
                                i && g.base__locked,
                                e === b.w.Award && !a && g.base__hasAppearAnimation,
                            ),
                            P = r()(g.border, g[`border__${o}${e}`], B && g.border__triggered),
                            S = r()(g.borderHover, g[`borderHover__${o}${e}`]),
                            k = r()(g.borderDisabled, g[`borderDisabled__${o}`]),
                            y = r()(g.shine, g[`shine__${o}Left`]),
                            L = r()(g.shine, g[`shine__${o}Right`]),
                            N = r()(g.bg, g[`bg__${o}${e}`]),
                            R = r()(g.bgHover, g[`bgHover__${o}${e}`]),
                            x = r()(g.bgDisabled, g[`bgDisabled__${o}`]),
                            T = r()(g.locked, g[`locked__${o}`]),
                            M = r()(g.lockedHover, g[`lockedHover__${o}`]),
                            I = (0, n.useCallback)(() => {
                                a || (E.$.playClick(), u());
                            }, [a, u]),
                            O = (0, n.useCallback)(() => {
                                (0, E.G)('bp_highlight_02');
                            }, []);
                        return s().createElement(
                            m.i,
                            { body: D, isEnabled: Boolean(D) },
                            s().createElement(
                                'div',
                                { className: w, onMouseEnter: O, onClick: I },
                                v > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: g.bubble },
                                        s().createElement(c, { size: 'small' }),
                                    ),
                                a
                                    ? s().createElement('div', { className: k })
                                    : s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement('div', { className: P }),
                                          s().createElement('div', { className: S }),
                                      ),
                                e === b.w.Award &&
                                    !a &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: y }),
                                        s().createElement('div', { className: L }),
                                    ),
                                a
                                    ? s().createElement('div', { className: x })
                                    : s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement('div', { className: N }),
                                          s().createElement('div', { className: R }),
                                      ),
                                i &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: T }),
                                        s().createElement('div', { className: M }),
                                    ),
                                e === b.w.Award && !a && s().createElement('div', { className: g.arrow }),
                                s().createElement('div', { className: r()(g.icon, g[`icon__${o}${e}`]) }),
                                s().createElement(
                                    'div',
                                    { className: g.count },
                                    e === b.w.Collection
                                        ? !F && s().createElement(d.z, { text: `${t || 0} / ${C}` })
                                        : s().createElement(_.A, { format: 'integral', value: t }),
                                    F && s().createElement('div', { className: g.completedCollectionIcon }),
                                ),
                                s().createElement('div', { className: r()(g.label, g[`label__${o}${e}`]) }, f),
                                e === b.w.Award &&
                                    !a &&
                                    s().createElement(
                                        'div',
                                        { className: g.blinkShape },
                                        s().createElement('div', { className: g.blink }),
                                    ),
                            ),
                        );
                    },
                    h = {
                        base: 'AwardsWidget_base_0f',
                        base__small: 'AwardsWidget_base__small_19',
                        award: 'AwardsWidget_award_c6',
                        base__big: 'AwardsWidget_base__big_f7',
                        award__last: 'AwardsWidget_award__last_0d',
                    },
                    C = ({
                        size: e = b.W.Small,
                        notChosenRewardCount: t,
                        pointsCount: a,
                        isPointsLocked: u,
                        isAwardDisabled: n,
                        coinCount: o,
                        collectionItemCount: i,
                        maxCollectionItemCount: l,
                        newCollectionItemCount: c,
                        isBPFirstEnter: _,
                        isCollectionsEnabled: d,
                        onPointsClick: m,
                        onCoinClick: E,
                        onTakeRewardsClick: g,
                        onCollectionClick: p,
                        hasMarathon: C,
                        hasResource: v = !1,
                    }) =>
                        s().createElement(
                            'div',
                            { className: r()(h.base, h[`base__${e}`]) },
                            t > 0 &&
                                s().createElement(
                                    'div',
                                    { className: h.award },
                                    s().createElement(A, {
                                        type: b.w.Award,
                                        size: e,
                                        count: t,
                                        disabled: n,
                                        onClick: g,
                                    }),
                                ),
                            s().createElement(
                                'div',
                                { className: h.award },
                                s().createElement(A, { type: b.w.Coin, count: o, onClick: E, size: e }),
                            ),
                            s().createElement(
                                'div',
                                { className: h.award },
                                s().createElement(A, {
                                    type: b.w.Point,
                                    count: a,
                                    onClick: m,
                                    size: e,
                                    isLocked: u,
                                    hasMarathon: C,
                                    hasResource: v,
                                }),
                            ),
                            d &&
                                s().createElement(
                                    'div',
                                    { className: r()(h.award, h.award__last) },
                                    s().createElement(A, {
                                        type: b.w.Collection,
                                        count: i,
                                        maxCount: l,
                                        newItemsCount: c,
                                        hasTriger: _,
                                        onClick: p,
                                        size: e,
                                    }),
                                ),
                        );
            },
            323: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => A });
                var u = a(6483),
                    r = a.n(u),
                    n = a(6179),
                    s = a.n(n);
                const o = {
                    base: 'Emblem_base_be',
                    progress: 'Emblem_progress_37',
                    progress__small: 'Emblem_progress__small_42',
                    progress__completed: 'Emblem_progress__completed_69',
                    hideProgress: 'Emblem_hideProgress_b4',
                    progress__hidden: 'Emblem_progress__hidden_6d',
                    image: 'Emblem_image_dc',
                    image__micro: 'Emblem_image__micro_aa',
                    image__small: 'Emblem_image__small_ce',
                    image__open: 'Emblem_image__open_43',
                    image__openSmall: 'Emblem_image__openSmall_5d',
                    image__openMicro: 'Emblem_image__openMicro_a9',
                    image__battlePass: 'Emblem_image__battlePass_ba',
                    image__battlePassSmall: 'Emblem_image__battlePassSmall_d5',
                    image__battlePassMicro: 'Emblem_image__battlePassMicro_6e',
                    image__battlePassOpen: 'Emblem_image__battlePassOpen_36',
                    image__battlePassSmallOpen: 'Emblem_image__battlePassSmallOpen_2f',
                    image__battlePassMicroOpen: 'Emblem_image__battlePassMicroOpen_e5',
                    image__seasonWaiting: 'Emblem_image__seasonWaiting_96',
                    image__seasonWaitingSmall: 'Emblem_image__seasonWaitingSmall_c0',
                    image__seasonWaitingMicro: 'Emblem_image__seasonWaitingMicro_86',
                    image__completedFree: 'Emblem_image__completedFree_56',
                    image__completedFreeSmall: 'Emblem_image__completedFreeSmall_a1',
                    image__completedFreeMicro: 'Emblem_image__completedFreeMicro_45',
                    image__completedFreeOpen: 'Emblem_image__completedFreeOpen_08',
                    image__completedFreeSmallOpen: 'Emblem_image__completedFreeSmallOpen_91',
                    image__completedFreeMicroOpen: 'Emblem_image__completedFreeMicroOpen_d3',
                    image__completedGolden: 'Emblem_image__completedGolden_77',
                    image__completedGoldenSmall: 'Emblem_image__completedGoldenSmall_be',
                    image__completedGoldenMicro: 'Emblem_image__completedGoldenMicro_2d',
                    marathon: 'Emblem_marathon_c6',
                    resource: 'Emblem_resource_97',
                    marathon__micro: 'Emblem_marathon__micro_61',
                    resource__micro: 'Emblem_resource__micro_67',
                    marathon__small: 'Emblem_marathon__small_0b',
                    resource__small: 'Emblem_resource__small_41',
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
                var i = a(903),
                    l = a(3044),
                    c = a(8546);
                const _ = {
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
                    d = (e, t) => {
                        const a = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case c.$u.Small:
                                    return 'l';
                                case c.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${a}`;
                    },
                    m = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: u,
                            hasProgression: n,
                            isGolden: o,
                            labelAnimation: m,
                            newLabelAnimation: E,
                            isChapterChosen: g = !1,
                            chapterID: b = 0,
                            isProgressionCompleted: p = !1,
                            hasBeenActive: A = !1,
                            isChapterSelection: h = !1,
                            isProgression: C = !1,
                        }) => {
                            let v = '',
                                f = '';
                            a === c.$u.Small
                                ? ((v = 'Small'), (f = '__small'))
                                : a === c.$u.Micro && ((v = 'Micro'), (f = '__micro'));
                            const D = u === c.Bq.SwitchedChapterRightNow,
                                F = u === c.Bq.CompletedRightNow,
                                B = ((e, t, a, u, r) => (e || r ? t || !a : t || !u))(h, p, A, g, C),
                                w = !C && !h;
                            return s().createElement(
                                s().Fragment,
                                null,
                                B
                                    ? s().createElement('div', {
                                          className: r()(_.icon, f && _[`icon${f}`], F && _[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = d(o, a);
                                                  if (w) {
                                                      if (p) return e.tank.$dyn(`tank_${t}`);
                                                      if (!g) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, i.wD)(e.chapterIcons, b, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: r()(
                                                  _.label,
                                                  _[`label${f}`],
                                                  D && _.label__new,
                                                  D && _[`label__new${v}`],
                                                  !F && p && _.label__disabled,
                                                  _[`label__${m}${v}`],
                                                  n && _[`label__hasProgress${v}`],
                                                  n && _[`label__hasProgress${v}${C ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(l._, {
                                              level: t,
                                              size: a,
                                              isGold: o,
                                              isFirstLevel: D,
                                              curState: m,
                                              showProgressionCompleted: F,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                _.label,
                                                _[`label${f}`],
                                                D && _.label__new,
                                                D && _[`label__new${v}`],
                                                _[`label__${E}${v}`],
                                                n && _[`label__hasProgress${v}`],
                                            ),
                                        },
                                        s().createElement(l._, {
                                            level: e,
                                            size: a,
                                            isGold: o,
                                            isFirstLevel: D,
                                            curState: E,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var E = a(1975);
                const g = {
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
                    b = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: u,
                            size: n,
                        }) => {
                            const o = r()(g.base, g[`base__${n}`], a && g.base__completed, !a && u && g.base__hidden);
                            return s().createElement(
                                'div',
                                { className: o },
                                s().createElement(E.ko, {
                                    key: e.to,
                                    size: E.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const A = (0, n.memo)((e) => {
                    const t = e.progression,
                        a = e.size,
                        u = e.battlePassState,
                        n = e.hasBattlePass,
                        i = e.isChapterChosen,
                        l = e.hasBeenActive,
                        _ = void 0 !== l && l,
                        d = e.isChapterSelection,
                        E = void 0 !== d && d,
                        g = e.isOpen,
                        A = void 0 !== g && g,
                        h = e.isProgression,
                        C = void 0 !== h && h,
                        v = e.showProgressBar,
                        f = void 0 === v || v,
                        D = e.chapterType;
                    let F = '',
                        B = '';
                    a === c.$u.Small
                        ? ((F = 'Small'), (B = '__small'))
                        : a === c.$u.Micro && ((F = 'Micro'), (B = '__micro'));
                    const w = A ? 'Open' : '',
                        P = u === c.Bq.CompletedRightNow,
                        S = n || u === c.Bq.Bought,
                        k = (u === c.Bq.Completed || P) && S,
                        y = (u === c.Bq.Completed || P) && !S,
                        L = k || y,
                        N = r()(
                            o.image,
                            o[`image${B}`],
                            A && o[`image__open${F}`],
                            S && o[`image__battlePass${F}${w}`],
                            u === c.Bq.AwaitSeason && o[`image__seasonWaiting${F}`],
                            y && o[`image__completedFree${F}${w}`],
                        ),
                        R = r()(o[`${D}`], o[`${D}${B}`]),
                        x = void 0 !== t.from,
                        T = f && ((x && i) || _);
                    return s().createElement(
                        'div',
                        { className: o.base },
                        s().createElement('div', { className: R }),
                        s().createElement(
                            'div',
                            { className: N },
                            u !== c.Bq.AwaitSeason &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        m,
                                        p(
                                            {
                                                hasProgression: x,
                                                isGolden: S,
                                                isProgressionCompleted: L,
                                                isChapterChosen: i,
                                                hasBeenActive: _,
                                                isChapterSelection: E,
                                                isProgression: C,
                                            },
                                            e,
                                            t,
                                        ),
                                    ),
                                    T &&
                                        s().createElement(b, {
                                            key: t.to,
                                            progression: t,
                                            showProgressionCompleted: P,
                                            isProgressionCompleted: L,
                                            size: a,
                                        }),
                                ),
                        ),
                    );
                });
            },
            3044: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => i });
                var u = a(6483),
                    r = a.n(u),
                    n = a(6179),
                    s = a.n(n);
                const o = {
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
                    i = ({
                        level: e,
                        size: t,
                        isGold: a,
                        isForRewardScreen: u,
                        curState: n,
                        isFirstLevel: i,
                        showProgressionCompleted: l,
                    }) => {
                        const c = r()(o.base, o[`base__${t}`]),
                            _ = r()(
                                o.text,
                                o.text__filtered,
                                o[`text__${t}`],
                                o[`text__${n}`],
                                l && o.text__hideWithDelay,
                                i && o.text__new,
                                u && o.text__rewardScreen,
                            ),
                            d = r()(
                                o.textWithBlend,
                                i && o.text__new,
                                l && o.text__hideWithDelay,
                                o[`textWithBlend__${n}`],
                            ),
                            m = r()(o.text, o.text__blended, o[`text__${t}`], u && o.text__rewardScreen),
                            E = r()(
                                o.textMask,
                                a && o.textMask__gold,
                                u && o.textMask__animated,
                                a && u && o.textMask__goldContrast,
                                o[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: c },
                            s().createElement('div', { className: _ }, e),
                            s().createElement(
                                'div',
                                { className: d },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: E }),
                            ),
                        );
                    };
            },
            8546: (e, t, a) => {
                'use strict';
                let u, r, n, s;
                a.d(t, { $u: () => u, Bq: () => n }),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(u || (u = {})),
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
            1481: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => d });
                var u = a(6179),
                    r = a.n(u),
                    n = a(6483),
                    s = a.n(n),
                    o = a(7727);
                const i = 'LoupeButton_base_ba',
                    l = 'LoupeButton_icon_44',
                    c = 'LoupeButton_iconHover_91',
                    _ = 'LoupeButton_hoverArea_d0',
                    d = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, u.useCallback)(() => (0, o.G)('highlight'), []),
                            n = (0, u.useCallback)(() => {
                                (0, o.G)('play'), e();
                            }, [e]),
                            d = s()(_, t);
                        return r().createElement(
                            'div',
                            { className: i, onClick: n, onMouseEnter: a },
                            r().createElement('div', { className: l }),
                            r().createElement('div', { className: c }),
                            t && r().createElement('div', { className: d }),
                        );
                    };
            },
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
            },
            6664: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
            6147: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, u] = deferred[i], n = !0, s = 0; s < t.length; s++)
                        (!1 & u || r >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), u < r && (r = u));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > u; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, u];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 488),
        (() => {
            var e = { 488: 0, 737: 0, 730: 0, 363: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var u,
                        r,
                        [n, s, o] = a,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (u in s) __webpack_require__.o(s, u) && (__webpack_require__.m[u] = s[u]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(291));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
