(() => {
    var __webpack_modules__ = {
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => o });
                var r = a(6179),
                    u = a.n(r),
                    n = a(4179);
                const o = ({ format: e, value: t }) => {
                    const a = ((e, t = 'integral') => {
                        let a;
                        a = 'gold' === t ? n.B3.GOLD : n.B3.INTEGRAL;
                        return void 0 === e ? '' : n.Z5.getNumberFormat(e, a);
                    })(t, e);
                    return a ? u().createElement('span', null, a) : null;
                };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var r = a(6179),
                    u = a.n(r),
                    n = a(6483),
                    o = a.n(n),
                    s = a(3649),
                    i = a(5287);
                const l = ({ binding: e, text: t = '', classMix: a, alignment: n = s.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : u().createElement(
                              r.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  u().createElement(
                                      'div',
                                      { className: o()(i.Z.base, a), key: `${t}-${l}` },
                                      (0, s.Uw)(t, n, e).map((e, t) =>
                                          u().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            9766: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r.z });
                var r = a(280);
                a(8082);
            },
            8082: (e, t, a) => {
                'use strict';
                a(3649);
            },
            1975: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => _.$, ko: () => g, uH: () => d, uu: () => E });
                var r = a(6483),
                    u = a.n(r),
                    n = a(6179),
                    o = a.n(n),
                    s = a(2468),
                    i = a(7442),
                    l = a(2407),
                    c = a(156),
                    _ = a(7736),
                    m = a(1635);
                a(6823);
                const d = c.Gh,
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
                            theme: t = d,
                            size: a = _.$.Default,
                            animationSettings: r = E,
                            disabled: n = !1,
                            withoutBackground: g = !1,
                            value: b,
                            deltaFrom: p,
                            lineRef: A,
                            onChangeAnimationState: h,
                            onEndAnimation: v,
                            onComplete: C,
                        }) => {
                            const f = (0, m.S)(b, e, p);
                            return o().createElement(
                                'div',
                                { className: u()(s.Z.base, s.Z[`base__${a}`]), style: (0, c.VQ)(t) },
                                !g && o().createElement(i.J, { size: a }),
                                o().createElement(l.r, {
                                    size: a,
                                    lineRef: A,
                                    disabled: n,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: v,
                                    onChangeAnimationState: h,
                                    onComplete: C,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => l });
                var r = a(6483),
                    u = a.n(r),
                    n = a(6179),
                    o = a.n(n),
                    s = a(2468),
                    i = a(7736);
                const l = ({ size: e = i.$.Default }) =>
                    o().createElement('div', { className: u()(s.Z.background, s.Z[`background__${e}`]) });
            },
            8150: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => i });
                var r = a(6179),
                    u = a.n(r),
                    n = a(6483),
                    o = a.n(n),
                    s = a(8804);
                const i = ({ size: e }) => {
                    const t = o()(s.Z.base, s.Z[`base__${e}`]);
                    return u().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => l });
                var r = a(6179),
                    u = a.n(r),
                    n = a(5680),
                    o = a(6736),
                    s = a(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, r.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: r,
                        deltaFrom: l,
                        animationSettings: c,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                        onComplete: d,
                    }) => {
                        if (l === t)
                            return u().createElement(n.M, {
                                key: `${l}-${t}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: r,
                                onComplete: d,
                            });
                        const E = {
                            from: l,
                            to: t,
                            size: e,
                            lineRef: a,
                            disabled: r,
                            animationSettings: c,
                            onComplete: d,
                            onEndAnimation: _,
                            onChangeAnimationState: m,
                        };
                        return c.withStack
                            ? u().createElement(s.F, E)
                            : u().createElement(o.H, i({ key: `${l}-${t}` }, E));
                    },
                );
            },
            1848: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var r = a(6179),
                    u = a.n(r),
                    n = a(6483),
                    o = a.n(n),
                    s = a(8150),
                    i = a(6664);
                const l = (0, r.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: r, isComplete: n, withoutBounce: l }) => {
                        const c = o()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                a && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            _ = !a && !n;
                        return u().createElement(
                            'div',
                            { className: c, style: r, ref: t },
                            u().createElement('div', { className: i.Z.pattern }),
                            u().createElement('div', { className: i.Z.gradient }),
                            _ && u().createElement(s.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => E });
                var r = a(6483),
                    u = a.n(r),
                    n = a(122),
                    o = a(6179),
                    s = a.n(o),
                    i = a(8150),
                    l = a(6823),
                    c = a(6147);
                const _ = (e) => (e ? { left: 0 } : { right: 0 }),
                    m = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    d = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: E,
                            to: g,
                            onEndAnimation: b,
                            onChangeAnimationState: p,
                            className: A,
                        }) => {
                            const h = g < r,
                                v = (0, o.useState)(l.S.Idle),
                                C = v[0],
                                f = v[1],
                                D = C === l.S.End,
                                B = C === l.S.Idle,
                                F = C === l.S.Grow,
                                w = C === l.S.Shrink,
                                S = (0, o.useCallback)(
                                    (e) => {
                                        f(e), p && p(e);
                                    },
                                    [p],
                                ),
                                P = (0, o.useCallback)(
                                    (e, t) =>
                                        (0, n.F)(() => {
                                            S(e);
                                        }, t),
                                    [S],
                                );
                            (0, o.useEffect)(() => {
                                if (!a)
                                    return B
                                        ? P(l.S.Grow, t)
                                        : F
                                          ? P(l.S.Shrink, e)
                                          : w
                                            ? P(l.S.End, e)
                                            : void (D && b && b());
                            }, [P, a, D, F, B, w, b, t, e]);
                            const L = (0, o.useMemo)(() => Object.assign({ width: '100%' }, d(e), _(h)), [h, e]),
                                k = (0, o.useMemo)(() => Object.assign({ width: '0%' }, d(e), _(h)), [h, e]),
                                y = (0, o.useMemo)(() => Object.assign({ width: '0%' }, m(h, r), d(e)), [r, h, e]),
                                N = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - r)}%` }, m(h, r), d(e)),
                                    [r, h, g, e],
                                );
                            if (D) return null;
                            const x = u()(c.Z.base, A, h && 0 === g && c.Z.base__withoutBounce);
                            return s().createElement(
                                'div',
                                { style: B ? y : N, className: x },
                                s().createElement(
                                    'div',
                                    { style: w ? k : L, className: c.Z.glow },
                                    s().createElement(i.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => l });
                var r = a(6179),
                    u = a.n(r),
                    n = a(122),
                    o = a(6823),
                    s = a(8150),
                    i = a(9919);
                const l = (0, r.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: l,
                        size: c,
                        to: _,
                        onEndAnimation: m,
                        onChangeAnimationState: d,
                    }) => {
                        const E = _ < l,
                            g = (0, r.useState)(o.V.Idle),
                            b = g[0],
                            p = g[1],
                            A = b === o.V.In,
                            h = b === o.V.End,
                            v = b === o.V.Idle,
                            C = (0, r.useCallback)(
                                (e) => {
                                    p(e), d && d(e);
                                },
                                [d],
                            );
                        (0, r.useEffect)(() => {
                            if (v && !a) {
                                const e = t;
                                return (0, n.F)(() => {
                                    C(o.V.In);
                                }, e);
                            }
                        }, [C, a, v, t]),
                            (0, r.useEffect)(() => {
                                if (A) {
                                    const a = e + t;
                                    return (0, n.F)(() => {
                                        m && m(), C(o.V.End);
                                    }, a);
                                }
                            }, [C, A, m, t, e]);
                        const f = (0, r.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            D = (0, r.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            B = (0, r.useMemo)(
                                () => ({ width: `${Math.abs(l - _)}%`, left: `${E ? _ : l}%` }),
                                [l, E, _],
                            );
                        return h
                            ? null
                            : u().createElement(
                                  'div',
                                  { className: i.Z.base, style: B },
                                  u().createElement(
                                      'div',
                                      { style: v ? f : D, className: i.Z.delta },
                                      u().createElement(s.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => i });
                var r = a(6179),
                    u = a.n(r),
                    n = a(2434),
                    o = a(1848),
                    s = a(6823);
                const i = (0, r.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: _,
                        onEndAnimation: m,
                        onChangeAnimationState: d,
                    }) => {
                        const E = e < a,
                            g = (0, r.useState)(!1),
                            b = g[0],
                            p = g[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    e === s.S.Shrink && p(!0), d && d(e);
                                },
                                [d],
                            ),
                            h = (0, r.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            v = (0, r.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${_.line.duration}ms` }),
                                [_.line.duration, e],
                            );
                        return u().createElement(
                            u().Fragment,
                            null,
                            u().createElement(o.t, {
                                size: t,
                                lineRef: i,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: E && 0 === e,
                                baseStyles: b ? v : h,
                            }),
                            a >= 0 &&
                                u().createElement(n.O, {
                                    transitionDuration: _.delta.duration,
                                    transitionDelay: _.delta.delay,
                                    onChangeAnimationState: A,
                                    freezed: _.freezed,
                                    onEndAnimation: m,
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
                a.d(t, { D: () => s });
                var r = a(6179),
                    u = a.n(r),
                    n = a(5913),
                    o = a(1848);
                const s = (0, r.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: s,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: _,
                        onEndAnimation: m,
                    }) => {
                        const d = (0, r.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return u().createElement(
                            u().Fragment,
                            null,
                            u().createElement(o.t, { size: t, lineRef: s, disabled: i, isComplete: l, baseStyles: d }),
                            a >= 0 &&
                                u().createElement(n.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: _,
                                    onEndAnimation: m,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => c });
                var r = a(6179),
                    u = a.n(r),
                    n = a(7736),
                    o = a(828),
                    s = a(538);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, r.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, i);
                    const _ = (0, r.useState)(!1),
                        m = _[0],
                        d = _[1],
                        E = (0, r.useCallback)(() => {
                            const e = 100 === c.to;
                            e !== m && d(e), e && t && t(), a && a();
                        }, [m, t, a, c.to]);
                    switch (c.animationSettings.type) {
                        case n.r.Simple:
                            return u().createElement(o.D, l({}, c, { onEndAnimation: E, isComplete: m }));
                        case n.r.Growing:
                            return u().createElement(s.F, l({}, c, { onEndAnimation: E, isComplete: m }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                'use strict';
                let r, u;
                a.d(t, { S: () => r, V: () => u }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(u || (u = {}));
            },
            2386: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => i });
                var r = a(6179),
                    u = a.n(r),
                    n = a(6736);
                const o = ['onEndAnimation'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, o);
                    const i = (0, r.useRef)({}),
                        l = (0, r.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        c = 'number' == typeof i.current.from ? i.current.from : a.from;
                    return (
                        (i.current.from = c),
                        u().createElement(n.H, s({}, a, { onEndAnimation: l, key: `${c}-${a.to}`, from: c }))
                    );
                });
            },
            5680: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => o });
                var r = a(6179),
                    u = a.n(r),
                    n = a(1848);
                const o = ({ size: e, value: t, lineRef: a, disabled: o, onComplete: s }) => {
                    const i = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, r.useEffect)(() => {
                            l && s && s();
                        }, [l, s]),
                        u().createElement(n.t, { size: e, disabled: o, baseStyles: i, isComplete: l, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                'use strict';
                a.d(t, { Gh: () => u, VQ: () => r, fV: () => n });
                const r = (e) => ({
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
                    u = {
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
                let r, u;
                a.d(t, { $: () => r, r: () => u }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                    })(r || (r = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(u || (u = {}));
            },
            1635: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => o });
                var r = a(7515),
                    u = a(6179);
                const n = (e, t, a) => {
                        if ('number' == typeof a) {
                            return ((0, r.u)(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    o = (e, t, a) =>
                        (0, u.useMemo)(() => {
                            const u = ((0, r.u)(0, t, e) / t) * 100;
                            return { value: u, deltaFrom: n(u, t, a) };
                        }, [a, t, e]);
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var r = a(2056),
                    u = a(6179),
                    n = a.n(u);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            m = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    u = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, o);
                        const E = (0, u.useMemo)(() => {
                            const e = Object.assign({}, m, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, m]);
                        return n().createElement(
                            r.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                d,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var r = a(7902),
                    u = a(4179),
                    n = a(6179);
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
                const i = (e, t, a = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: u.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            u = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            m = e.onClick,
                            d = e.ignoreShowDelay,
                            E = void 0 !== d && d,
                            g = e.ignoreMouseClick,
                            b = void 0 !== g && g,
                            p = e.decoratorId,
                            A = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            v = void 0 === h || h,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            D = e.onShow,
                            B = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    u = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, o);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(() => f || (0, r.F)().resId, [f]),
                            P = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(a, A, { isMouseEvent: !0, on: !0, arguments: s(u) }, S),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [a, A, u, S, D]),
                            L = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(a, A, { on: !1 }, S),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1);
                                }
                            }, [a, A, S, B]),
                            k = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && L();
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
                                !1 === v && L();
                            }, [v, L]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', L),
                                    () => {
                                        window.removeEventListener('mouseleave', L), L();
                                    }
                                ),
                                [L],
                            );
                        return v
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(P, E ? 100 : 400)),
                                                      l && l(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              L(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && L(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && L(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
                        var y;
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
            7515: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => r });
                const r = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            122: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => r });
                const r = (e, t) => {
                    let a;
                    const r = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        'function' == typeof a && a(), clearTimeout(r);
                    };
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { mouse: () => s, onResize: () => n });
                var r = a(2472),
                    u = a(1176);
                const n = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, u.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, u.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, u.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let u = !0;
                                    const n = `mouse${t}`,
                                        s = o[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        r(),
                                        () => {
                                            u &&
                                                (s(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (u = !1));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => u,
                        graphicsQuality: () => o,
                    });
                var r = a(527);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            2472: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => r });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => u });
                var r = a(5959);
                const u = { view: a(7641), client: r };
            },
            3722: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function u(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => u, getTextureUrl: () => r });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => u });
                var r = a(2472);
                const u = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => u.W,
                        displayStatusIs: () => F,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => v,
                        pxToRem: () => p,
                        remToPx: () => A,
                        resize: () => d,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    });
                var r = a(3722),
                    u = a(6112),
                    n = a(6538),
                    o = a(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, a = 'px') {
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
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const F = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
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
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const r = ['args'];
                const u = 2,
                    n = 16,
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        u = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(t, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((u = n),
                                              Object.entries(u).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
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
                            i(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => r });
                const r = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        r = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (r = window.subViews[a].id)),
                        { caller: a, stack: t, resId: r }
                    );
                };
            },
            5521: (e, t, a) => {
                'use strict';
                let r, u;
                a.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
            7727: (e, t, a) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => u, G: () => r });
                const u = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                let r;
                function u(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                a.d(t, { BN: () => n, Uw: () => d, e: () => o, uF: () => u, v2: () => r }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(r || (r = {}));
                const s = (e, t, a) => {
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
                    l = (e, t, a = r.left) => e.split(t).reduce(a === r.left ? s : i, []),
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
                    m = (e, t = r.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return _.includes(a)
                            ? c(e)
                            : ((e, t = r.left) => {
                                  let a = [];
                                  const u =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return l(n, /( )/, t).forEach((e) => (a = a.concat(l(e, u, r.left)))), a;
                              })(e, t);
                    },
                    d = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : m(e, t)));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var r = a(3138);
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
                    addCallback(e, t, a = 0, u = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(e, a, u);
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
                            const r = this._callbacks[a];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                u.__instance = void 0;
                const n = u;
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
                a.d(t, { Sw: () => n.Z, B3: () => l, Z5: () => o, B0: () => i, ry: () => A, Eu: () => h });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== r)),
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
                r.__instance = void 0;
                const u = r;
                var n = a(1358);
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = a(5521),
                    E = a(3138);
                const g = ['args'];
                function b(e, t, a, r, u, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(r, u);
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
                                    return new Promise(function (r, u) {
                                        var n = e.apply(t, a);
                                        function o(e) {
                                            b(n, r, u, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(n, r, u, o, s, 'throw', e);
                                        }
                                        o(void 0);
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
                    v = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        u = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(t, g);
                            void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    C = () => v(i.CLOSE),
                    f = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var D = a(7572);
                const B = u.instance,
                    F = {
                        DataTracker: n.Z,
                        ViewModel: D.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => v(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, u = R.invalid('resId'), n) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                s = a.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                m = s.height,
                                d = {
                                    x: E.O.view.pxToRem(l) + o.x,
                                    y: E.O.view.pxToRem(c) + o.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(m),
                                };
                            v(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: u,
                                direction: t,
                                bbox: p(d),
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
                            f(e, C);
                        },
                        handleViewEvent: v,
                        onBindingsReady: A,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const u = Object.prototype.toString.call(t[r]);
                                    if (u.startsWith('[object CoherentArrayProxy]')) {
                                        const u = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < u.length; t++) a[r].push({ value: e(u[t].value) });
                                    } else
                                        u.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = F;
            },
            2446: (e, t, a) => {
                'use strict';
                var r = {};
                a.r(r),
                    a.d(r, {
                        Area: () => vu,
                        Bar: () => pu,
                        DefaultScroll: () => hu,
                        Direction: () => tu,
                        defaultSettings: () => au,
                        useHorizontalScrollApi: () => uu,
                    });
                var u = {};
                a.r(u), a.d(u, { Area: () => Ou, Bar: () => Tu, Default: () => Iu, useVerticalScrollApi: () => Cu });
                var n = a(6179),
                    o = a.n(n);
                const s = (e, t, a) =>
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
                    const r = (function (e, t) {
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
                        })(t, a),
                        n = Math.min(r, u);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: u === a.extraLarge.weight,
                        largeHeight: u === a.large.weight,
                        mediumHeight: u === a.medium.weight,
                        smallHeight: u === a.small.weight,
                        extraSmallHeight: u === a.extraSmall.weight,
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
                const m = i.O.client.getSize('rem'),
                    d = m.width,
                    E = m.height,
                    g = Object.assign({ width: d, height: E }, _(d, E, l)),
                    b = (0, n.createContext)(g),
                    p = ['children'];
                const A = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, p);
                    const r = (0, n.useContext)(b),
                        u = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        _ = r.extraLargeWidth,
                        m = r.largeWidth,
                        d = r.mediumWidth,
                        E = r.smallWidth,
                        g = r.extraSmallWidth,
                        A = r.extraLargeHeight,
                        h = r.largeHeight,
                        v = r.mediumHeight,
                        C = r.smallHeight,
                        f = r.extraSmallHeight,
                        D = { extraLarge: A, large: h, medium: v, small: C, extraSmall: f };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && u) return t;
                        if (a.large && o) return t;
                        if (a.medium && i) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && _) return s(t, a, D);
                        if (a.largeWidth && m) return s(t, a, D);
                        if (a.mediumWidth && d) return s(t, a, D);
                        if (a.smallWidth && E) return s(t, a, D);
                        if (a.extraSmallWidth && g) return s(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && A) return t;
                            if (a.largeHeight && h) return t;
                            if (a.mediumHeight && v) return t;
                            if (a.smallHeight && C) return t;
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
                    v = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(b),
                            a = (0, n.useState)(t),
                            r = a[0],
                            u = a[1],
                            s = (0, n.useCallback)((e, t) => {
                                const a = i.O.view.pxToRem(e),
                                    r = i.O.view.pxToRem(t);
                                u(Object.assign({ width: a, height: r }, _(a, r, l)));
                            }, []);
                        h(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const c = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return o().createElement(b.Provider, { value: c }, e);
                    });
                var C = a(6483),
                    f = a.n(C),
                    D = a(926),
                    B = a.n(D);
                let F, w, S;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(F || (F = {})),
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
                    })(S || (S = {}));
                const P = () => {
                        const e = (0, n.useContext)(b),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return F.ExtraLarge;
                                    case e.large:
                                        return F.Large;
                                    case e.medium:
                                        return F.Medium;
                                    case e.small:
                                        return F.Small;
                                    case e.extraSmall:
                                        return F.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), F.ExtraSmall;
                                }
                            })(e),
                            u = ((e) => {
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
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: u, mediaHeight: o, remScreenWidth: t, remScreenHeight: a };
                    },
                    L = ['children', 'className'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const y = {
                        [w.ExtraSmall]: '',
                        [w.Small]: B().SMALL_WIDTH,
                        [w.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [w.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [S.ExtraSmall]: '',
                        [S.Small]: B().SMALL_HEIGHT,
                        [S.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [S.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [F.ExtraSmall]: '',
                        [F.Small]: B().SMALL,
                        [F.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [F.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [F.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    u = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, L);
                        const u = P(),
                            n = u.mediaWidth,
                            s = u.mediaHeight,
                            i = u.mediaSize;
                        return o().createElement('div', k({ className: f()(a, y[n], N[s], x[i]) }, r), t);
                    },
                    M = ['children'];
                const I = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, M);
                    return o().createElement(v, null, o().createElement(T, a, t));
                };
                var O = a(493),
                    H = a.n(O);
                const W = (e) => {
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
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(r), a && r.stopPropagation();
                            }
                        }
                    }, [t, e, a]);
                }
                var V = a(7902);
                const j = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    X = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Y = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    q = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const r = j(`${e}.${a}`, window);
                                return X(r) ? t(e, a, r) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Z = (e) => {
                        const t = ((e) => {
                                const t = (0, V.F)(),
                                    a = t.caller,
                                    r = t.resId,
                                    u = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: u, modelPath: Y(u, e || ''), resId: r };
                            })(),
                            a = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const u = j(Y(a, `${t}.${r}`), window);
                                    return X(u) ? (e.push(u.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
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
                        r = (a[0], a[1]),
                        u = (0, n.useMemo)(() => (0, V.F)(), []),
                        o = u.caller,
                        s = u.resId,
                        i = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const t = j(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return X(t) ? t.value : t;
                            })(q(i)),
                        ),
                        c = l[0],
                        _ = l[1],
                        m = (0, n.useRef)(-1);
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
                                            ? (e === c && r((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    u = Z(e);
                                m.current = K.addCallback(u, a, s, t === Q.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== Q.None)
                                return () => {
                                    K.removeCallback(m.current, s);
                                };
                        }, [s, t]),
                        c
                    );
                };
                var ee = a(7727),
                    te = a(3403),
                    ae = a(3649),
                    re = a(3044);
                const ue = 'SeasonEmblem_base_de',
                    ne = 'SeasonEmblem_emblem_82',
                    oe = 'SeasonEmblem_emblem__hasBP_55';
                var se;
                !(function (e) {
                    (e[(e.Base = 0)] = 'Base'), (e[(e.HasBP = 1)] = 'HasBP');
                })(se || (se = {}));
                const ie = () => {
                    const e = J('model.offSeason', Q.None),
                        t = e.level,
                        a = e.hasBattlePass,
                        r = e.isEnabled,
                        u = ((e, t) => (!0 === t ? se.HasBP : se.Base))(0, a),
                        n = f()(ne, u === se.HasBP && oe);
                    return o().createElement(
                        'div',
                        { className: ue },
                        o().createElement(
                            'div',
                            { className: n },
                            o().createElement(re._, { level: r ? t : 1, size: 'extraLarge', isGold: a }),
                        ),
                    );
                };
                var le = a(6373);
                const ce = 'SeasonStatistics_base_e1',
                    _e = 'SeasonStatistics_shineWrapper_36',
                    me = 'SeasonStatistics_imgShine_22',
                    de = 'SeasonStatistics_imgLines_8d',
                    Ee = 'SeasonStatistics_emblem_53',
                    ge = 'SeasonStatistics_emblem__disabled_12',
                    be = 'SeasonStatistics_stats_11',
                    pe = 'SeasonStatistics_stats__left_0c',
                    Ae = 'SeasonStatistics_stats__right_06',
                    he = 'SeasonStatistics_statsBg_aa',
                    ve = 'SeasonStatistics_statsBg__right_00',
                    Ce = 'SeasonStatistics_statsLabel_2d',
                    fe = 'SeasonStatistics_statsContainer_d0',
                    De = 'SeasonStatistics_statsValue_07',
                    Be = 'SeasonStatistics_alertIcon_15',
                    Fe = '---',
                    we = R.strings.battle_pass.offSeason,
                    Se = (e) => (0 === e ? Fe : G.Z5.getNumberFormat(e, G.B3.INTEGRAL)),
                    Pe = () => {
                        const e = J('model.offSeason'),
                            t = e.isEnabled,
                            a = e.leftVehicle,
                            r = e.leftPoints,
                            u = e.rightVehicle,
                            n = e.rightPoints,
                            s = e.isFailedService,
                            i = f()([Ee, { [ge]: !t }]),
                            l = (0, ae.uF)(we.sideChosen(), { vehicle: a }),
                            c = (0, ae.uF)(we.sideChosen(), { vehicle: u }),
                            _ = ((e, t) => (e ? { left: Fe, right: Fe } : { left: Se(t.left), right: Se(t.right) }))(
                                s,
                                { left: r, right: n },
                            ),
                            m = f()(be, pe),
                            d = f()(be, Ae),
                            E = f()(he, ve),
                            g = we.alertTooltip();
                        return o().createElement(
                            'div',
                            { className: ce },
                            t &&
                                o().createElement(
                                    'div',
                                    { className: _e },
                                    o().createElement('div', { className: me }),
                                ),
                            o().createElement('div', { className: de }),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement('div', { className: he }),
                                o().createElement('div', { className: Ce }, l),
                                o().createElement(
                                    'div',
                                    { className: fe },
                                    s &&
                                        o().createElement(
                                            le.i,
                                            { body: g },
                                            o().createElement('div', { className: Be }),
                                        ),
                                    o().createElement('div', { className: De }, _.left),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: d },
                                o().createElement('div', { className: E }),
                                o().createElement('div', { className: Ce }, c),
                                o().createElement(
                                    'div',
                                    { className: fe },
                                    o().createElement('div', { className: De }, _.right),
                                    s &&
                                        o().createElement(
                                            le.i,
                                            { body: g },
                                            o().createElement('div', { className: Be }),
                                        ),
                                ),
                            ),
                            o().createElement('div', { className: i }, o().createElement(ie, null)),
                        );
                    },
                    Le = 'BattlePassOffSeasonViewContent_base_a5',
                    ke = 'BattlePassOffSeasonViewContent_content_17',
                    ye = 'BattlePassOffSeasonViewContent_background_5f',
                    Ne = 'BattlePassOffSeasonViewContent_backgroundFade_3d',
                    xe = 'BattlePassOffSeasonViewContent_header_66',
                    Re = 'BattlePassOffSeasonViewContent_title_e9',
                    Te = 'BattlePassOffSeasonViewContent_date_7c',
                    Me = 'BattlePassOffSeasonViewContent_stats_c1',
                    Ie = 'BattlePassOffSeasonViewContent_subTitle_19',
                    Oe = 'BattlePassOffSeasonViewContent_levelLabel_0a',
                    He = 'BattlePassOffSeasonViewContent_levelLabel__disabled_8f',
                    We = 'BattlePassOffSeasonViewContent_footerLabel_e8',
                    $e = R.strings.battle_pass.offSeason,
                    Ge = { loseVote: $e.footerLose(), winVote: $e.footerWin(), notVote: '' },
                    Ue = () => {
                        const e = J('model.offSeason'),
                            t = e.level,
                            a = e.isEnabled,
                            r = e.seasonName,
                            u = e.voteStatus,
                            n = f()(Oe, !a && He),
                            s = a ? (0, ae.uF)($e.$dyn('levelReached'), { level: t }) : $e.noProgress(),
                            i = Ge[u];
                        return o().createElement(
                            'div',
                            { className: Le },
                            o().createElement('div', { className: ye }),
                            o().createElement('div', { className: Ne }),
                            o().createElement(
                                'div',
                                { className: xe },
                                o().createElement('div', { className: Re }, r),
                                o().createElement('div', { className: Te }, $e.finished()),
                            ),
                            o().createElement(
                                'div',
                                { className: ke },
                                o().createElement('div', { className: Me }, o().createElement(Pe, null)),
                                o().createElement('div', { className: n }, s),
                            ),
                            o().createElement('div', { className: Ie }, $e.startsSoon()),
                            o().createElement('div', { className: We }, i),
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
                            if ('string' == typeof e) return Xe(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Xe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Xe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const Ye = (e) => (0 === e ? window : window.subViews.get(e));
                function qe(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, r) => t(null == e ? void 0 : e.value, a, r));
                }
                var Ze = a(3946);
                const Ke = ((e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: u, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    _ = (a, r, u) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = Ye,
                                                context: r = 'model',
                                            } = {}) {
                                                const u = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? u.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = u.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const u = a(t),
                                                        n = r.split('.').reduce((e, t) => e[t], u);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (a, n) => {
                                                        const s = 'string' == typeof n ? `${r}.${n}` : r,
                                                            l = i.O.view.addModelObserver(s, t, !0);
                                                        return u.set(l, a), e && a(o(n)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const a = o(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = je(u.keys()); !(e = a()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(r),
                                            s =
                                                'real' === a
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == u ? void 0 : u.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == u ? void 0 : u.getter(e)) : s.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            u = Ve.LO.box(r, { equals: ze });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, Ve.aD)((e) => u.set(e)),
                                                                    e,
                                                                ),
                                                            u
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            u = Ve.LO.box(r, { equals: ze });
                                                        return (
                                                            'real' === a &&
                                                                s.subscribe(
                                                                    (0, Ve.aD)((e) => u.set(e)),
                                                                    e,
                                                                ),
                                                            u
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const u = e.reduce(
                                                                (e, t) => ((e[t] = Ve.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, Ve.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                u[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                u
                                                            );
                                                        }
                                                        {
                                                            const u = e,
                                                                n = Object.entries(u),
                                                                o = n.reduce(
                                                                    (e, [t, a]) => ((e[a] = Ve.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    s.subscribe(
                                                                        (0, Ve.aD)((e) => {
                                                                            n.forEach(([t, a]) => {
                                                                                o[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            d = { mode: a, model: m, externalModel: s, cleanup: _ };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && u ? u.controls(d) : t(d),
                                            externalModel: s,
                                            mode: a,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    d = (0, n.useState)(r),
                                    E = d[0],
                                    g = d[1],
                                    b = (0, n.useState)(() => _(r, u, l)),
                                    p = b[0],
                                    A = b[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? A(_(E, u, l)) : (m.current = !0);
                                    }, [l, E, u]),
                                    (0, n.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    o().createElement(a.Provider, { value: p }, s)
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
                                            for (let u = 0; u < e.length; u++) {
                                                var r;
                                                const n = null == (r = e[u]) ? void 0 : r.value;
                                                t(n, u, e) && a.push(n);
                                            }
                                            return a;
                                        })(t.availableChapterTypes.get(), (t) => t === e).length > 0,
                                    { equals: ze },
                                ),
                                r = (0, Ze.Om)(() => qe(t.levels.get(), (e) => e), { equals: ze }),
                                u = (0, Ze.Om)(() => qe(t.chapterCharacterSkills.get(), (e) => e), { equals: ze }),
                                n = (0, Ze.Om)(() => t.levels.get().length);
                            return Object.assign({}, t, {
                                computes: { hasChapter: a, getLevels: r, getLevelsLength: n, getCharacterSkills: u },
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
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                class rt extends o().PureComponent {
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
                            r = e.goto,
                            u = e.side,
                            n = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        u = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                    return u;
                                })(e, tt)),
                            d = f()(et.base, et[`base__${n}`], et[`base__${u}`], null == s ? void 0 : s.base),
                            E = f()(et.icon, et[`icon__${n}`], et[`icon__${u}`], null == s ? void 0 : s.icon),
                            g = f()(et.glow, null == s ? void 0 : s.glow),
                            b = f()(et.caption, et[`caption__${n}`], null == s ? void 0 : s.caption),
                            p = f()(et.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            at(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== n && o().createElement('div', { className: et.shine }),
                            o().createElement('div', { className: E }, o().createElement('div', { className: g })),
                            o().createElement('div', { className: b }, t),
                            r && o().createElement('div', { className: p }, r),
                        );
                    }
                }
                let ut, nt, ot;
                (rt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            (e.Disabled = 'disabled');
                    })(ut || (ut = {})),
                    (function (e) {
                        (e.Hide = 'hide'), (e.Buy = 'buy'), (e.Level = 'level'), (e.Activate = 'activate');
                    })(nt || (nt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(ot || (ot = {}));
                let st;
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
                })(st || (st = {}));
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
                    mt = 'ExtraChapterWidget_base_61',
                    dt = 'ExtraChapterWidget_glow_e7',
                    Et = 'ExtraChapterWidget_tankmen_0d',
                    gt = 'ExtraChapterWidget_vehicle_dc',
                    bt = 'ExtraChapterWidget_vehicleCaption_39',
                    pt = 'ExtraChapterWidget_tankmenCaption_c6',
                    At = 'ExtraChapterWidget_vehicleBg_ce',
                    ht = 'ExtraChapterWidget_vehicleInfo_44',
                    vt = 'ExtraChapterWidget_separatorBg_ab',
                    Ct = 'ExtraChapterWidget_styleDescription_fe',
                    ft = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Dt = [
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
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                let Ft;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(Ft || (Ft = {}));
                const wt = (0, n.memo)((e) => {
                    let t = e.label,
                        a = e.isVisibleLabel,
                        r = void 0 !== a && a,
                        u = e.autofocus,
                        s = void 0 !== u && u,
                        i = e.soundHover,
                        l = void 0 === i ? 'highlight' : i,
                        c = e.soundClick,
                        _ = void 0 === c ? 'play' : c,
                        m = e.size,
                        d = void 0 === m ? Ft.NORMAL : m,
                        E = e.onClick,
                        g = e.onMouseEnter,
                        b = e.onMouseLeave,
                        p = e.onMouseDown,
                        A = e.onMouseUp,
                        h = e.onFocus,
                        v = e.onBlur,
                        C = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, Dt);
                    const D = (0, n.useState)(!1),
                        B = D[0],
                        F = D[1],
                        w = (0, n.useState)(!1),
                        S = w[0],
                        P = w[1],
                        L = (0, n.useState)(s),
                        k = L[0],
                        y = L[1],
                        N = (0, n.useRef)(null),
                        x = (0, n.useCallback)(() => {
                            N.current && (N.current.focus(), y(!0));
                        }, []),
                        R = (0, n.useCallback)(
                            (e) => {
                                k && null !== N.current && !N.current.contains(e.target) && y(!1);
                            },
                            [k],
                        );
                    (0, n.useEffect)(
                        () => (
                            document.addEventListener('mousedown', R),
                            () => {
                                document.removeEventListener('mousedown', R);
                            }
                        ),
                        [R],
                    ),
                        (0, n.useEffect)(() => {
                            y(s);
                        }, [s]);
                    const T = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                F(!0), p && p(e), _ && (0, ee.G)(_), s && x();
                            },
                            [s, p, x, _],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                F(!1), A && A(e);
                            },
                            [A],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                g && g(e), l && (0, ee.G)(l), P(!0);
                            },
                            [g, l],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                F(!1), P(!1), b && b(e);
                            },
                            [b],
                        ),
                        W = (0, n.useCallback)(
                            (e) => {
                                y(!0), h && h(e);
                            },
                            [h],
                        ),
                        $ = (0, n.useCallback)(
                            (e) => {
                                y(!1), v && v(e);
                            },
                            [v],
                        ),
                        G = f()(
                            ft.base,
                            r && ft.base__visibleLabel,
                            B && ft.base__mouseDown,
                            S && ft.base__hovered,
                            k && ft.base__focused,
                        ),
                        U = f()(ft.icon, ft[`icon__${d}`]);
                    return o().createElement(
                        'div',
                        Bt(
                            {
                                ref: N,
                                className: G,
                                onClick: T,
                                onMouseEnter: O,
                                onMouseLeave: H,
                                onMouseDown: M,
                                onMouseUp: I,
                                onFocus: W,
                                onBlur: $,
                            },
                            C,
                        ),
                        o().createElement('div', { className: U }),
                        o().createElement('div', { className: ft.label }, t),
                    );
                });
                var St = a(122);
                const Pt = {
                        base: 'Sonar_base_8f',
                        back: 'Sonar_back_6b',
                        emitter: 'Sonar_emitter_50',
                        wave: 'Sonar_wave_1e',
                        wave__0: 'Sonar_wave__0_7a',
                        sonarWave: 'Sonar_sonarWave_6b',
                        wave__1: 'Sonar_wave__1_aa',
                        wave__2: 'Sonar_wave__2_5d',
                        wave__3: 'Sonar_wave__3_67',
                        wave__4: 'Sonar_wave__4_cd',
                        wave__5: 'Sonar_wave__5_08',
                        wave__6: 'Sonar_wave__6_0b',
                        wave__7: 'Sonar_wave__7_b6',
                        wave__8: 'Sonar_wave__8_3b',
                        wave__9: 'Sonar_wave__9_16',
                        wave__10: 'Sonar_wave__10_09',
                    },
                    Lt = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: f()(Pt.base, e) },
                            o().createElement(
                                'div',
                                { className: Pt.emitter },
                                Array.from({ length: 10 }, (e, t) =>
                                    o().createElement('div', {
                                        key: `wave-${t}`,
                                        className: f()(Pt.wave, Pt[`wave__${t}`]),
                                    }),
                                ),
                            ),
                            o().createElement('div', { className: Pt.back }),
                        ),
                    kt = 'Sound_base_9f',
                    yt = 'Sound_content_7a',
                    Nt = 'Sound_icoContainer_b7',
                    xt = 'Sound_base__active_d7',
                    Rt = 'Sound_ico_d2',
                    Tt = 'Sound_sonar_ef',
                    Mt = 'Sound_sonar__show_f5',
                    It = R.strings.battle_pass.progression.extraChapterWidget,
                    Ot = ({ active: e, soundOn: t }) =>
                        o().createElement(
                            le.i,
                            { body: It.voiceOverTooltip() },
                            o().createElement(
                                'div',
                                { className: f()(kt, (e || t) && xt) },
                                o().createElement(
                                    'div',
                                    { className: yt },
                                    o().createElement(
                                        'div',
                                        { className: Nt },
                                        o().createElement('div', { className: Rt }),
                                    ),
                                ),
                                o().createElement(Lt, { className: f()(Tt, t && Mt) }),
                            ),
                        ),
                    Ht = 'Separator_base_c5',
                    Wt = 'Separator_separatorBg_28',
                    $t = 'Separator_preview_44',
                    Gt = 'Separator_sound_8b',
                    Ut = ({ classNames: e, onPreviewIconClick: t }) => {
                        const a = (0, n.useState)(!1),
                            r = a[0],
                            u = a[1],
                            s = (0, n.useState)(!1),
                            i = s[0],
                            l = s[1];
                        return o().createElement(
                            'div',
                            { className: f()(Ht) },
                            o().createElement('div', { className: f()(Wt, null == e ? void 0 : e.separatorBg) }),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: f()($t) },
                                    o().createElement(wt, { size: Ft.NORMAL, onClick: t }),
                                ),
                            o().createElement(
                                'div',
                                {
                                    className: Gt,
                                    onClick: () => {
                                        if (!i)
                                            return (
                                                l(!0),
                                                (0, ee.G)('bp14_red_fury_vo'),
                                                (0, St.F)(() => {
                                                    l(!1);
                                                }, 3e3)
                                            );
                                    },
                                    onMouseEnter: () => {
                                        (0, ee.G)('highlight'), u(!0);
                                    },
                                    onMouseLeave: () => {
                                        u(!1);
                                    },
                                },
                                o().createElement(Ot, { active: r, soundOn: i }),
                            ),
                        );
                    };
                var zt = a(9887),
                    Vt = a.n(zt);
                const jt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Xt = (e) => e.includes('_') && ((e) => jt.includes(e))(e.split('_').at(-1)),
                    Yt = [F.ExtraLarge, F.Large, F.Medium, F.Small, F.ExtraSmall],
                    qt = (e, t) =>
                        Object.keys(e).reduce((a, r) => {
                            if (r in a) return a;
                            if (Xt(r)) {
                                const u = r.split('_').slice(0, -1).join('_');
                                if (u in a) return a;
                                const n = Yt.indexOf(t),
                                    o = (-1 !== n ? jt.slice(n) : [])
                                        .map((e) => u + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = o ? e[o] : void 0;
                                return (a[u] = void 0 !== s ? s : e[u]), a;
                            }
                            const u = e[r];
                            return (
                                void 0 === u ||
                                    ((e, t) => jt.some((a) => void 0 !== t[`${e}_${a}`]))(r, e) ||
                                    (a[r] = u),
                                a
                            );
                        }, {}),
                    Zt = (e, t = qt) => {
                        const a = (
                            (e, t = qt) =>
                            (a) => {
                                const r = P().mediaSize,
                                    u = (0, n.useMemo)(() => t(a, r), [a, r]);
                                return o().createElement(e, u);
                            }
                        )(e, t);
                        return o().memo((t) =>
                            Object.keys(t).some((e) => Xt(e) && void 0 !== t[e])
                                ? o().createElement(a, t)
                                : o().createElement(e, t),
                        );
                    },
                    Kt = {
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
                    Qt = [
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
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                Object.keys(Vt());
                const ea = {
                        XL: { mt: Kt.mt__XL, mr: Kt.mr__XL, mb: Kt.mb__XL, ml: Kt.ml__XL },
                        LG: { mt: Kt.mt__LG, mr: Kt.mr__LG, mb: Kt.mb__LG, ml: Kt.ml__LG },
                        MDp: { mt: Kt.mt__MDp, mr: Kt.mr__MDp, mb: Kt.mb__MDp, ml: Kt.ml__MDp },
                        MD: { mt: Kt.mt__MD, mr: Kt.mr__MD, mb: Kt.mb__MD, ml: Kt.ml__MD },
                        SMp: { mt: Kt.mt__SMp, mr: Kt.mr__SMp, mb: Kt.mb__SMp, ml: Kt.ml__SMp },
                        SM: { mt: Kt.mt__SM, mr: Kt.mr__SM, mb: Kt.mb__SM, ml: Kt.ml__SM },
                        XS: { mt: Kt.mt__XS, mr: Kt.mr__XS, mb: Kt.mb__XS, ml: Kt.ml__XS },
                    },
                    ta = (Object.keys(ea), ['mt', 'mr', 'mb', 'ml']),
                    aa = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ra = Zt((e) => {
                        let t = e.className,
                            a = e.width,
                            r = e.height,
                            u = e.m,
                            s = e.mt,
                            i = void 0 === s ? u : s,
                            l = e.mr,
                            c = void 0 === l ? u : l,
                            _ = e.mb,
                            m = void 0 === _ ? u : _,
                            d = e.ml,
                            E = void 0 === d ? u : d,
                            g = e.column,
                            b = e.row,
                            p = e.flexDirection,
                            A = void 0 === p ? (g ? 'column' : b && 'row') || void 0 : p,
                            h = e.flexStart,
                            v = e.center,
                            C = e.flexEnd,
                            D = e.spaceBetween,
                            B = e.spaceAround,
                            F = e.justifyContent,
                            w =
                                void 0 === F
                                    ? (h ? 'flex-start' : v && 'center') ||
                                      (C && 'flex-end') ||
                                      (D && 'space-between') ||
                                      (B && 'space-around') ||
                                      void 0
                                    : F,
                            S = e.alignItems,
                            P = void 0 === S ? (h ? 'flex-start' : v && 'center') || (C && 'flex-end') || void 0 : S,
                            L = e.alignSelf,
                            k = e.wrap,
                            y = e.flexWrap,
                            N = void 0 === y ? (k ? 'wrap' : void 0) : y,
                            x = e.grow,
                            R = e.shrink,
                            T = e.flex,
                            M = void 0 === T ? (x || R ? `${x ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : T,
                            I = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    u = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, Qt);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        ta.reduce((t, a) => {
                                            const r = e[a];
                                            return r && 'number' != typeof r ? t.concat(ea[!0 === r ? 'MD' : r][a]) : t;
                                        }, []))(e),
                                    u = ((e) =>
                                        ta.reduce((t, a) => {
                                            const r = e[a];
                                            return 'number' == typeof r && (t[aa[a]] = r + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, u, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: M,
                                        alignSelf: L,
                                        display: A || P ? 'flex' : void 0,
                                        flexDirection: A,
                                        flexWrap: N,
                                        justifyContent: w,
                                        alignItems: P,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, r, i, c, m, E, I, M, L, A, N, w, P]),
                            $ = W.computedStyle,
                            G = W.computedClassNames;
                        return o().createElement('div', Jt({ className: f()(Kt.base, ...G, t), style: $ }, H), O);
                    });
                var ua = a(280),
                    na = a(3532),
                    oa = a.n(na);
                const sa = {
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
                    ia = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function la() {
                    return (
                        (la =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        la.apply(this, arguments)
                    );
                }
                Object.keys(Vt());
                const ca = Object.keys(oa()),
                    _a = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ma = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    da = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ea = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    ga =
                        (Object.keys(Ea),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': _a,
                            'heading-H36': _a,
                            'heading-H28': ma,
                            'heading-H24': ma,
                            'heading-H24R': ma,
                            'heading-H22': ma,
                            'heading-H20R': ma,
                            'heading-H18': ma,
                            'heading-H15': da,
                            'heading-H14': da,
                            'paragraph-P24': ma,
                            'paragraph-P18': ma,
                            'paragraph-P16': ma,
                            'paragraph-P14': da,
                            'paragraph-P12': da,
                            'paragraph-P10': da,
                        }),
                    ba =
                        (Object.keys(ga),
                        (e) =>
                            e
                                ? ((e) => ca.includes(e))(e)
                                    ? { colorClassName: sa[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    pa = Zt((e) => {
                        let t = e.text,
                            a = e.variant,
                            r = e.className,
                            u = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            _ = void 0 === c ? s : c,
                            m = e.mb,
                            d = void 0 === m ? s : m,
                            E = e.ml,
                            g = void 0 === E ? s : E,
                            b = e.style,
                            p = e.format,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    u = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, ia);
                        const h = (0, n.useMemo)(() => {
                                const e = ba(u),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    r = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, b, r), colorClassName: t };
                            }, [b, u]),
                            v = h.computedStyle,
                            C = h.colorClassName;
                        return o().createElement(
                            ra,
                            la(
                                {
                                    className: f()(sa.base, a && sa[a], C, r),
                                    style: v,
                                    mt: !0 === l ? ga[a || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? ga[a || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? ga[a || 'paragraph-P16'].mb : d,
                                    ml: !0 === g ? ga[a || 'paragraph-P16'].ml : g,
                                },
                                A,
                            ),
                            void 0 !== p ? o().createElement(ua.z, la({}, p, { text: t })) : t,
                        );
                    });
                var Aa = a(2056);
                const ha = 'StyleDescription_base_b1',
                    va = 'StyleDescription_title_9e',
                    Ca = 'StyleDescription_subTitle_99',
                    fa = 'StyleDescription_subTitleTextWrapper_36',
                    Da = 'StyleDescription_subTitleText_c8',
                    Ba = 'StyleDescription_infoIcon_30',
                    Fa = 'StyleDescription_remark_0e',
                    wa = 'StyleDescription_lockIcon_6e';
                function Sa(e, t, a, r, u, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(r, u);
                }
                function Pa(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, u) {
                            var n = e.apply(t, a);
                            function o(e) {
                                Sa(n, r, u, o, s, 'next', e);
                            }
                            function s(e) {
                                Sa(n, r, u, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const La = R.strings.battle_pass.progression.extraChapterWidget,
                    ka = (0, te.Pi)(({ className: e, vehicleName: t }) => {
                        const a = Je().model,
                            r = a.extraChapterWidget,
                            u = a.root,
                            s = a.chapterCharacter,
                            i = r.get().marathonRewardId,
                            l = u.get().isBattlePassPurchased,
                            c = (0, n.useRef)(null),
                            _ = (0, n.useCallback)(
                                Pa(function* () {
                                    yield (0, G.Eu)();
                                    c.current;
                                }),
                                [],
                            );
                        var m;
                        return (
                            (m = () => (
                                _(),
                                engine.on('clientResized', _),
                                () => {
                                    engine.off('clientResized', _);
                                }
                            )),
                            (0, n.useEffect)(m, []),
                            o().createElement(
                                'div',
                                { className: f()(ha, e) },
                                o().createElement(pa, {
                                    text: La.styleTitle(),
                                    format: { binding: { styleName: r.get().styleName }, classMix: va },
                                }),
                                o().createElement(pa, {
                                    text: La.crewTitle(),
                                    format: { binding: { name: s.get().tankman }, classMix: va },
                                }),
                                i &&
                                    o().createElement(
                                        Aa.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: i },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Ca },
                                            o().createElement(
                                                'div',
                                                { className: fa },
                                                o().createElement(
                                                    'div',
                                                    { className: Da, ref: c },
                                                    o().createElement(pa, {
                                                        text: La.styleSubTitle(),
                                                        format: { binding: { vehicleName: t } },
                                                    }),
                                                ),
                                            ),
                                            o().createElement('div', { className: Ba }),
                                        ),
                                    ),
                                !l &&
                                    o().createElement(
                                        'div',
                                        { className: Fa },
                                        o().createElement('div', { className: wa }),
                                        o().createElement('div', null, La.styleRemark()),
                                    ),
                            )
                        );
                    }),
                    ya = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Na = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function xa(e) {
                    let t = '';
                    for (let a = Na.length - 1; a >= 0; a--) for (; e >= Na[a]; ) (t += ya[a]), (e -= Na[a]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const Ra = 'VehicleInfo_base_45',
                    Ta = 'VehicleInfo_type_2e',
                    Ma = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: r, classNames: u }) =>
                        o().createElement(
                            'div',
                            { className: f()(Ra, null == u ? void 0 : u.base) },
                            xa(e),
                            o().createElement('div', {
                                className: f()(Ta, null == u ? void 0 : u.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, ae.BN)(a)}${r ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    Ia = R.strings.battle_pass.progression.extraChapterWidget,
                    Oa = (0, te.Pi)(() => {
                        const e = Je(),
                            t = e.model.extraChapterMainRewardInfo,
                            a = e.controls,
                            r = t.get(),
                            u = r.vehicleType,
                            n = r.isElite,
                            s = r.vehicleName,
                            i = r.vehicleShortName,
                            l = r.vehicleLvl,
                            c = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${r.vehicleNation})` },
                            _ = P().mediaSize > F.Medium ? 14 : 12,
                            m = s.length > _ ? i : s;
                        return o().createElement(
                            'div',
                            { className: mt },
                            o().createElement('div', { className: dt }),
                            o().createElement(
                                'div',
                                { className: gt },
                                o().createElement('div', { className: At, style: c }),
                                o().createElement('div', { className: bt }, Ia.vehicleCaption()),
                                o().createElement(Ma, {
                                    classNames: { base: ht },
                                    vehicleLvl: l,
                                    vehicleName: m,
                                    vehicleType: u,
                                    isElite: n,
                                }),
                            ),
                            o().createElement(Ut, {
                                classNames: { separatorBg: vt },
                                onPreviewIconClick: a.openPreview,
                            }),
                            o().createElement(
                                'div',
                                { className: Et },
                                o().createElement('div', { className: pt }, Ia.styleCaption()),
                                o().createElement(ka, { className: Ct, vehicleName: m }),
                            ),
                        );
                    }),
                    Ha = {
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
                let Wa, $a;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Wa || (Wa = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })($a || ($a = {}));
                const Ga = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: r,
                    disabled: u,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const b = (0, n.useRef)(null),
                        p = (0, n.useState)(a),
                        A = p[0],
                        h = p[1],
                        v = (0, n.useState)(!1),
                        C = v[0],
                        D = v[1],
                        B = (0, n.useState)(!1),
                        F = B[0],
                        w = B[1],
                        S = (0, n.useCallback)(() => {
                            u || (b.current && (b.current.focus(), h(!0)));
                        }, [u]),
                        P = (0, n.useCallback)(
                            (e) => {
                                A && null !== b.current && !b.current.contains(e.target) && h(!1);
                            },
                            [A],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                u || (g && g(e));
                            },
                            [u, g],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                u || (null !== i && (0, ee.G)(i), c && c(e), w(!0));
                            },
                            [u, i, c],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                u || (d && d(e), D(!1));
                            },
                            [u, d],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                u || (null !== l && (0, ee.G)(l), m && m(e), a && S(), D(!0));
                            },
                            [u, l, m, S, a],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                u || (E && E(e), D(!1));
                            },
                            [u, E],
                        ),
                        M = f()(
                            Ha.base,
                            Ha[`base__${r}`],
                            {
                                [Ha.base__disabled]: u,
                                [Ha[`base__${t}`]]: t,
                                [Ha.base__focus]: A,
                                [Ha.base__highlightActive]: C,
                                [Ha.base__firstHover]: F,
                            },
                            s,
                        ),
                        I = f()(Ha.state, Ha.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, n.useEffect)(() => {
                            h(a);
                        }, [a]),
                        o().createElement(
                            'div',
                            {
                                ref: b,
                                className: M,
                                onMouseEnter: k,
                                onMouseMove: y,
                                onMouseUp: N,
                                onMouseDown: x,
                                onMouseLeave: T,
                                onClick: L,
                            },
                            r !== Wa.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Ha.back }),
                                    o().createElement('span', { className: Ha.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: I },
                                o().createElement('span', { className: Ha.stateDisabled }),
                                o().createElement('span', { className: Ha.stateHighlightHover }),
                                o().createElement('span', { className: Ha.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Ha.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ga.defaultProps = { type: Wa.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ua = (0, n.memo)(Ga);
                var za = a(9766);
                const Va = {
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
                    ja = R.strings.battle_pass.progression,
                    Xa = R.strings.battle_pass.tooltips.footerBuyBtn,
                    Ya = R.strings.battle_pass.tooltips.progression,
                    qa = (e, t) =>
                        e
                            ? t
                                ? ja.activatePausedExtraChapterDescr()
                                : ja.activateExtraChapterDescr()
                            : ja.activateChapterDescr();
                let Za, Ka;
                !(function (e) {
                    (e.Red = 'red'), (e.Green = 'green'), (e.None = '');
                })(Za || (Za = {})),
                    (function (e) {
                        (e.Inactive = 'Inactive'), (e.Paused = 'Paused');
                    })(Ka || (Ka = {}));
                const Qa = (0, te.Pi)(({ isDisabled: e = !1 }) => {
                    const t = Je(),
                        a = t.model,
                        r = t.controls,
                        u = a.root.get(),
                        s = u.buttonState,
                        i = u.isSeasonEndingSoon,
                        l = u.expireTimeStr,
                        c = u.freePointsInChapter,
                        _ = u.currentPointsInChapter,
                        m = u.chapterState,
                        d = u.chapterID,
                        E = u.chapterType,
                        g = r.onActionClick,
                        b = m === ut.Paused,
                        p = c - _,
                        A = s === nt.Activate && p > 0,
                        h = s !== nt.Activate && i,
                        v = E === ct.Marathon,
                        C = {
                            [nt.Buy]: {
                                buyBtnLabel: ja.battlePassBuyBtn(),
                                tooltip: Xa.battlePass.descr(),
                                label: ja.battlePassBuyDescr(),
                                warning: ja.seasonEndingDescr(),
                                buttonType: Wa.main,
                                lightColor: Za.Red,
                            },
                            [nt.Level]: {
                                buyBtnLabel: ja.episodeBuyBtn(),
                                tooltip: Xa.episode.descr(),
                                label: ja.episodeBuyDescr(),
                                warning: ja.seasonEndingDescr(),
                                buttonType: Wa.main,
                                lightColor: Za.None,
                            },
                            [nt.Activate]: {
                                buyBtnLabel: ja.activateChapter(),
                                tooltip: Xa.activateChapter.descr(),
                                label: qa(v, b),
                                warning: ja.footer.freePointsDescr(),
                                buttonType: Wa.primary,
                                lightColor: Za.Green,
                            },
                            [nt.Hide]: {
                                buyBtnLabel: '',
                                tooltip: '',
                                label: '',
                                warning: '',
                                buttonType: Wa.ghost,
                                lightColor: Za.Green,
                            },
                        },
                        D = P().mediaSize <= F.Small ? $a.small : $a.medium,
                        B = (0, n.useCallback)(() => {
                            g();
                        }, [g]),
                        w = C[s],
                        S = w.buyBtnLabel,
                        L = w.tooltip,
                        k = w.label,
                        y = w.warning,
                        N = w.buttonType,
                        x = w.lightColor,
                        T = A || h ? y : k;
                    return o().createElement(
                        'div',
                        { className: Va.base },
                        e
                            ? o().createElement(
                                  o().Fragment,
                                  null,
                                  o().createElement('div', { className: f()(Va.light, Va.light__darkRed) }),
                                  o().createElement(
                                      'div',
                                      { className: f()(Va.labelContainer, Va.labelContainer__disabled) },
                                      o().createElement(
                                          'div',
                                          { className: Va.labelHeader },
                                          o().createElement('div', { className: Va.disabledIcon }),
                                          o().createElement(
                                              'div',
                                              { className: Va.status },
                                              o().createElement(za.z, {
                                                  text: ja.footer.status.disabled(),
                                                  binding: {
                                                      chapterName:
                                                          R.strings.battle_pass.chapter.fullName.quoted.$num(d),
                                                  },
                                              }),
                                          ),
                                      ),
                                      o().createElement('div', { className: Va.label }, ja.battlePassDisabled()),
                                  ),
                              )
                            : o().createElement(
                                  o().Fragment,
                                  null,
                                  o().createElement('div', { className: f()(Va.light, Va[`light__${x}`]) }),
                                  o().createElement(
                                      'div',
                                      { className: Va.labelContainer },
                                      b &&
                                          o().createElement('div', { className: Va.status }, ja.footer.status.paused()),
                                      o().createElement('div', { className: Va.label }, T),
                                      h && o().createElement('div', { className: Va.days }, l),
                                      A &&
                                          o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement('div', { className: Va.points }, p),
                                              o().createElement(
                                                  'div',
                                                  { className: Va.info },
                                                  o().createElement(
                                                      le.i,
                                                      {
                                                          header: Ya.freePoints.header(),
                                                          body: Ya.freePoints.body.$dyn(E),
                                                      },
                                                      o().createElement('div', { className: Va.infoHover }),
                                                  ),
                                              ),
                                          ),
                                  ),
                                  o().createElement(
                                      'div',
                                      { className: f()(Va.buttonWrapper, false) },
                                      o().createElement(
                                          le.i,
                                          { body: L },
                                          o().createElement(
                                              Ua,
                                              { type: N, size: D, mixClass: Va.button, onClick: B },
                                              h && o().createElement('div', { className: Va.blink }),
                                              S,
                                          ),
                                      ),
                                      false,
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
                function Ja() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                function er(e, t, a) {
                    const r = (0, n.useContext)(b);
                    let u = Object.entries(r).filter(([e, t]) => !0 === t && e in c);
                    return (
                        a && (u = u.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const r = u.map((e) =>
                                f()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, ae.e)(t))(a, e[0])]),
                            );
                            return (e[a] = f()(t[a], ...r)), e;
                        }, {})
                    );
                }
                const tr = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let ar;
                !(function (e) {
                    (e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info');
                })(ar || (ar = {}));
                (0, n.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: r,
                        leftSubText: u,
                        leftButtonType: s,
                        onClose: i,
                        onLeftButtonClick: l,
                        isHideButtons: c = !1,
                    }) => {
                        const _ = er(['leftBlock', 'rightBlock'], tr),
                            m = (0, n.useState)(c),
                            d = m[0],
                            E = m[1];
                        (0, n.useEffect)(() => E(!c), [c]);
                        const g = (0, n.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            b = f()(tr.container, d && tr.container__shown);
                        return o().createElement(
                            'div',
                            { className: tr.base, style: g },
                            o().createElement(
                                'div',
                                { className: b },
                                Boolean(a) &&
                                    o().createElement(
                                        'div',
                                        { className: _.leftBlock },
                                        o().createElement(rt, {
                                            caption: a || '',
                                            goto: u,
                                            type: s,
                                            side: 'left',
                                            onClick: l,
                                        }),
                                    ),
                                Boolean(t) &&
                                    o().createElement(
                                        'div',
                                        { className: _.rightBlock },
                                        o().createElement(rt, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            o().createElement('div', { className: tr.view }, r),
                        );
                    },
                );
                var rr = a(3561);
                let ur, nr, or, sr, ir, lr, cr;
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
                        (e.SelectableBonus = 'selectableBonus'),
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
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.WtStamp = 'stamp'),
                        (e.WtHunter = 'wt_hunter'),
                        (e.WtHunterCollection = 'hunter_collection'),
                        (e.WtTicket = 'wtevent_ticket'),
                        (e.WtMainPrizeDiscount = 'main_prize_discount');
                })(ur || (ur = {})),
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
                    })(nr || (nr = {})),
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
                    })(or || (or = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(sr || (sr = {})),
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
                    })(ir || (ir = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(lr || (lr = {})),
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
                    })(cr || (cr = {}));
                var _r = a(2372);
                const mr = [
                        ur.Items,
                        ur.Equipment,
                        ur.Xp,
                        ur.XpFactor,
                        ur.Blueprints,
                        ur.BlueprintsAny,
                        ur.Goodies,
                        ur.Berths,
                        ur.Slots,
                        ur.Tokens,
                        ur.CrewSkins,
                        ur.CrewBooks,
                        ur.Customizations,
                        ur.CreditsFactor,
                        ur.TankmenXp,
                        ur.TankmenXpFactor,
                        ur.FreeXpFactor,
                        ur.BattleToken,
                        ur.PremiumUniversal,
                        ur.NaturalCover,
                        ur.BpCoin,
                        ur.BattlePassSelectToken,
                        ur.BattlaPassFinalAchievement,
                        ur.BattleBadge,
                        ur.BonusX5,
                        ur.CrewBonusX3,
                        ur.NewYearFillers,
                        ur.NewYearInvoice,
                        ur.EpicSelectToken,
                        ur.Comp7TokenWeeklyReward,
                        ur.Comp7TokenCouponReward,
                        ur.BattleBoosterGift,
                        ur.CosmicLootboxCommon,
                        ur.CosmicLootboxSilver,
                        ur.SelectableBonus,
                        ur.WtStamp,
                        ur.WtTicket,
                        ur.WtMainPrizeDiscount,
                        ur.WtHunter,
                        ur.WtHunterCollection,
                    ],
                    dr = [ur.Gold, ur.Credits, ur.Crystal, ur.FreeXp],
                    Er = [ur.BattlePassPoints],
                    gr = [ur.PremiumPlus, ur.Premium],
                    br = ['engravings', 'backgrounds'],
                    pr = ['engraving', 'background'],
                    Ar = (e, t = or.Small) => {
                        const a = e.name,
                            r = e.type,
                            u = e.value,
                            n = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case or.S600x450:
                                        return 'c_600x450';
                                    case or.S400x300:
                                        return 'c_400x300';
                                    case or.S296x222:
                                        return 'c_296x222';
                                    case or.S232x174:
                                        return 'c_232x174';
                                    case or.Big:
                                        return 'c_80x80';
                                    case or.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${u}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${u}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${u}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case or.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case or.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${n}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const r = br[e];
                                    if (r) {
                                        const u = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            n = u.$dyn(a);
                                        return n ? `${n}` : `${u.$dyn(pr[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, t, n);
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
                    hr = (e, t, a) => {
                        const r = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            r,
                            a,
                        );
                    };
                let vr, Cr;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled');
                })(vr || (vr = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(Cr || (Cr = {}));
                var fr = a(8546);
                const Dr = (e) => {
                    const t = lt[e];
                    return t || console.warn('Unknown FinalReward key: ', e), t;
                };
                var Br = a(323);
                const Fr = {
                        base: 'Logo_base_95',
                        base__isChapterNotChosen: 'Logo_base__isChapterNotChosen_6f',
                        flag: 'Logo_flag_ee',
                        flag__isChapterChosen: 'Logo_flag__isChapterChosen_06',
                        emblem: 'Logo_emblem_f4',
                        chapterLogoIcon: 'Logo_chapterLogoIcon_92',
                    },
                    wr = ({ chapter: e, hasBattlePass: t, className: a, chapterType: r }) => {
                        const u = e.id,
                            n = e.state,
                            s = e.currentLevel,
                            i = e.currentPoints,
                            l = [ut.NotStarted, ut.Paused, ut.Disabled],
                            c = P().mediaSize <= F.Medium ? fr.$u.Small : fr.$u.Medium,
                            _ = n === ut.Completed,
                            m = { level: s, from: i },
                            d = n === ut.Active,
                            E = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(m),
                            g = E || (n !== ut.NotStarted && n !== ut.Disabled),
                            b = g && !_;
                        return o().createElement(
                            'div',
                            { className: f()(Fr.base, l.includes(n) && Fr.base__isChapterNotChosen, a) },
                            o().createElement('div', {
                                className: f()(
                                    Fr.flag,
                                    c === fr.$u.Small && Fr.flag__small,
                                    b && Fr.flag__isChapterChosen,
                                ),
                                style: (0, it.fW)(u, c),
                            }),
                            o().createElement(
                                'div',
                                { className: Fr.emblem },
                                o().createElement(Br.G, {
                                    progression: m,
                                    size: c,
                                    battlePassState: _ ? fr.Bq.Completed : t ? fr.Bq.Bought : fr.Bq.Free,
                                    hasBattlePass: t,
                                    isChapterChosen: d,
                                    isProgression: !0,
                                    chapterID: u,
                                    hasBeenActive: g,
                                    showProgressBar: !1,
                                    isOpen: b,
                                    chapterType: r,
                                }),
                                b &&
                                    o().createElement('div', {
                                        className: Fr.chapterLogoIcon,
                                        style: (0, it.cs)(u, t, c),
                                    }),
                            ),
                        );
                    },
                    Sr = 'Header_base_be',
                    Pr = 'Header_labels_82',
                    Lr = 'Header_title_1f',
                    kr = 'Header_chapterWrapper_ac',
                    yr = 'Header_chapterText_81',
                    Nr = 'Header_chapterText__overflow_8f',
                    xr = 'Header_chapterStatus_fa',
                    Rr = 'Header_date_5f',
                    Tr = 'Header_titleButtons_80',
                    Mr = 'Header_titleButton_1d',
                    Ir = 'Header_awards_7b',
                    Or = 'Header_logo_2d';
                function Hr(e, t, a, r, u, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(r, u);
                }
                function Wr(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, u) {
                            var n = e.apply(t, a);
                            function o(e) {
                                Hr(n, r, u, o, s, 'next', e);
                            }
                            function s(e) {
                                Hr(n, r, u, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                let $r;
                !(function (e) {
                    (e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium');
                })($r || ($r = {}));
                const Gr = R.strings.battle_pass,
                    Ur = 'auto',
                    zr = (e, t, a, r) => ({ id: e, state: t, currentPoints: a, currentLevel: r }),
                    Vr = (0, te.Pi)(() => {
                        const e = Je(),
                            t = e.model,
                            a = e.controls,
                            r = a.onAboutClick,
                            u = a.onPointsInfoClick,
                            s = a.onBpcoinClick,
                            i = a.onBpbitClick,
                            l = a.onTakeRewardsClick,
                            c = a.openCollection,
                            _ = t.root.get(),
                            m = _.chapterID,
                            d = _.chapterState,
                            E = _.seasonText,
                            g = _.expireTimeStr,
                            b = _.currentLevel,
                            p = _.bpcoinCount,
                            A = _.bpbitCount,
                            h = _.notChosenRewardCount,
                            v = _.isChooseRewardsEnabled,
                            C = _.isBattlePassCompleted,
                            D = _.isBattlePassPurchased,
                            B = _.currentPointsInChapter,
                            w = _.chapterType,
                            S = t.collectionEntryPoint.get(),
                            L = S.collectionItemCount,
                            k = S.newCollectionItemCount,
                            y = S.maxCollectionItemCount,
                            N = S.isFirstEnter,
                            x = S.isCollectionsEnabled,
                            R = (0, n.useState)(!1),
                            T = R[0],
                            M = R[1],
                            I = (0, n.useState)(Ur),
                            O = I[0],
                            H = I[1],
                            W = P().mediaSize <= F.Medium ? $r.Small : $r.Medium,
                            $ = (0, n.useRef)(null),
                            U = (0, n.useRef)(null),
                            z =
                                (V = d) === ut.Paused
                                    ? Gr.progression.header.paused()
                                    : V === ut.NotStarted
                                      ? Gr.progression.header.inactive()
                                      : V === ut.Disabled
                                        ? Gr.progression.header.disabled()
                                        : void 0;
                        var V;
                        const j = (0, n.useRef)(0),
                            X = t.computes.hasChapter(ct.Marathon),
                            Y = t.computes.hasChapter(ct.Resource),
                            q = (0, n.useCallback)(() => {
                                r();
                            }, [r]),
                            Z = (0, n.useCallback)(() => {
                                u();
                            }, [u]),
                            K = (0, n.useCallback)(() => {
                                s();
                            }, [s]),
                            Q = (0, n.useCallback)(() => {
                                i();
                            }, [i]),
                            J = (0, n.useCallback)(() => {
                                l();
                            }, [l]),
                            ee = (0, n.useCallback)(() => {
                                c();
                            }, [c]),
                            te = Gr.chapter.fullName.quoted.$num(m),
                            re = (0, ae.uF)(Gr.progression.seasonEndingTooltip(), { day: g }),
                            ue = (0, ae.uF)(Gr.progression.header.chapter.status(), { chapterName: te }),
                            ne = (0, n.useCallback)(
                                (e) => {
                                    e > j.current && (j.current = e);
                                },
                                [j],
                            ),
                            oe = (0, n.useCallback)(
                                Wr(function* () {
                                    yield (0, G.Eu)(), yield Ja();
                                    const e = $.current,
                                        t = U.current;
                                    e &&
                                        t &&
                                        (ne(t.offsetWidth),
                                        z
                                            ? (M(j.current >= e.offsetWidth - W),
                                              H(e.offsetWidth / viewEnv.getScale() - W + 'rem'))
                                            : (M(j.current >= e.offsetWidth), H(Ur)));
                                }),
                                [ne, z, W],
                            );
                        return (
                            (0, n.useEffect)(
                                () => (
                                    oe(),
                                    engine.on('clientResized', oe),
                                    () => {
                                        engine.off('clientResized', oe);
                                    }
                                ),
                                [d],
                            ),
                            o().createElement(
                                'div',
                                { className: Sr },
                                o().createElement(wr, {
                                    chapter: zr(m, d, B, b),
                                    hasBattlePass: D,
                                    className: Or,
                                    chapterType: w,
                                }),
                                o().createElement(
                                    'div',
                                    { className: Pr },
                                    o().createElement(
                                        'div',
                                        { className: Lr },
                                        o().createElement(
                                            le.i,
                                            { body: re, isEnabled: Boolean(g) },
                                            o().createElement('div', { className: Rr }, E),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: kr, ref: $ },
                                            o().createElement(
                                                'div',
                                                { style: { maxWidth: `${O}` } },
                                                o().createElement(
                                                    le.i,
                                                    { body: ue, isEnabled: T },
                                                    o().createElement(
                                                        'div',
                                                        { className: f()(yr, T && Nr), ref: U },
                                                        ue,
                                                    ),
                                                ),
                                            ),
                                            z && o().createElement('div', { className: xr }, z),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Tr },
                                            o().createElement(
                                                'div',
                                                { className: Mr },
                                                o().createElement(rt, {
                                                    caption: Gr.progression.about.$dyn(w),
                                                    type: ar.Info,
                                                    onClick: q,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Mr },
                                                o().createElement(rt, {
                                                    caption: Gr.howToEarnPoints.title(),
                                                    type: ar.Info,
                                                    onClick: Z,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Ir },
                                    o().createElement(rr.Z, {
                                        notChosenRewardCount: h,
                                        pointsCount: A,
                                        coinCount: p,
                                        collectionItemCount: L,
                                        maxCollectionItemCount: y,
                                        newCollectionItemCount: k,
                                        isBPFirstEnter: N,
                                        isCollectionsEnabled: x,
                                        isAwardDisabled: !v,
                                        isPointsLocked: !C,
                                        onPointsClick: Q,
                                        onCoinClick: K,
                                        onTakeRewardsClick: J,
                                        onCollectionClick: ee,
                                        hasMarathon: X,
                                        hasResource: Y,
                                    }),
                                ),
                            )
                        );
                    }),
                    jr = {
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
                var Xr = a(7515);
                const Yr = [];
                function qr(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), Yr)
                    );
                }
                function Zr(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        u = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => u, [u]);
                    const o = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (r.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, o),
                        u,
                    ];
                }
                function Kr(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Qr(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Qr(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Qr(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                function Jr(e, t, a) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, t, a, r) {
                                let u,
                                    n = !1,
                                    o = 0;
                                function s() {
                                    u && clearTimeout(u);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function _() {
                                        (o = Date.now()), a.apply(l, i);
                                    }
                                    n ||
                                        (r && !u && _(),
                                        s(),
                                        void 0 === r && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (u = setTimeout(
                                                  r
                                                      ? function () {
                                                            u = void 0;
                                                        }
                                                      : _,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((r = a), (a = t), (t = void 0)),
                                    (i.cancel = function () {
                                        s(), (n = !0);
                                    }),
                                    i
                                );
                            })(a, e),
                        t,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var eu = a(7030);
                let tu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(tu || (tu = {}));
                const au = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ru = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: u,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, a) => {
                            const r = t(e),
                                u = r[0],
                                n = r[1];
                            return (0, Xr.u)(u, n, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? au : c,
                                m = (0, n.useRef)(null),
                                d = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        r = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        u = (e, ...a) => {
                                            for (var r, u = Kr(t(e).values()); !(r = u()).done; ) (0, r.value)(...a);
                                        };
                                    return (0, n.useMemo)(() => ({ on: a, off: r, trigger: u }), []);
                                })(),
                                g = Jr(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, eu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (a(t, e), E.trigger('change', e), o && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                p = b[0],
                                A = b[1],
                                h = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var r;
                                        const u = p.scrollPosition.get(),
                                            n = (null != (r = p.scrollPosition.goal) ? r : 0) - u;
                                        return s(e, t * a + n + u);
                                    },
                                    [p.scrollPosition],
                                ),
                                v = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            A.start({
                                                scrollPosition: s(r, e),
                                                immediate: t,
                                                reset: a,
                                                config: _.animationConfig,
                                                from: { scrollPosition: s(r, p.scrollPosition.get()) },
                                            });
                                    },
                                    [A, _.animationConfig, p.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            a = d.current;
                                        if (!t || !a) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return u(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, _.step),
                                            n = h(t, e, r);
                                        v(n);
                                    },
                                    [v, h, _.step],
                                ),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(r(e)),
                                            m.current && E.trigger('mouseWheel', e, p.scrollPosition, t(m.current));
                                    },
                                    [p.scrollPosition, C, E],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        W(() => {
                                            const e = m.current;
                                            e &&
                                                (v(s(e, p.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, p.scrollPosition.goal],
                                ),
                                B = qr(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && v(t, { immediate: !0 }),
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
                                    getWrapperSize: () => (d.current ? u(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: f,
                                    applyScroll: v,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: A,
                                    animationScroll: p,
                                    recalculateContent: B,
                                    events: { on: E.on, off: E.off },
                                }),
                                [p.scrollPosition, v, C, E.off, E.on, B, f, A, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    uu = ru({
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
                        getDirection: (e) => (e.deltaY > 1 ? tu.Next : tu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    nu = 'HorizontalBar_base_49',
                    ou = 'HorizontalBar_base__nonActive_82',
                    su = 'HorizontalBar_leftButton_5f',
                    iu = 'HorizontalBar_rightButton_03',
                    lu = 'HorizontalBar_track_0d',
                    cu = 'HorizontalBar_thumb_fd',
                    _u = 'HorizontalBar_rail_32',
                    mu = 'disable',
                    du = { pending: !1, offset: 0 },
                    Eu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    gu = () => {},
                    bu = (e, t) => Math.max(20, e.offsetWidth * t),
                    pu = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Eu, onDrag: r = gu }) => {
                        const u = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, n.useState)(du),
                            d = m[0],
                            E = m[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            b = () => {
                                const t = l.current,
                                    a = c.current,
                                    r = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(r && t && a && u)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / u),
                                    _ = (0, Xr.u)(0, 1, n / (u - r)),
                                    m = (t.offsetWidth - bu(t, o)) * _;
                                (a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(mu), void i.current.classList.remove(mu);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(mu), void i.current.classList.add(mu);
                                            var t, a;
                                            s.current.classList.remove(mu), i.current.classList.remove(mu);
                                        }
                                    })(m);
                            },
                            p = qr(() => {
                                (() => {
                                    const t = c.current,
                                        a = l.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && r && a)) return;
                                    const o = Math.min(1, r / n);
                                    (t.style.width = `${bu(a, o)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 === o ? u.current.classList.add(ou) : u.current.classList.remove(ou));
                                })(),
                                    b();
                            });
                        (0, n.useEffect)(() => W(p)),
                            (0, n.useEffect)(
                                () =>
                                    W(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let a = gu;
                                        const r = () => {
                                            a(), (a = W(p));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        var a;
                                        const u = e.contentRef.current;
                                        if (!u) return;
                                        const n = l.current,
                                            o = c.current;
                                        if (!u || !n || !o) return;
                                        const s = t.screenX - d.offset - n.getBoundingClientRect().x,
                                            i = (s / n.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(du);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, d.offset, d.pending, r, g]);
                        const A = Zr((t) => e.applyStepTo(t), _, [e]),
                            h = A[0],
                            v = A[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const C = (e) => {
                            e.target.classList.contains(mu) || (0, ee.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()(nu, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()(su, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(mu) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), h(tu.Next));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()(lu, t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        if (r && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === r))
                                                g({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = c.current,
                                                        u = e.contentRef.current;
                                                    if (!r || !u) return;
                                                    const n = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? tu.Prev : tu.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: c, className: f()(cu, t.thumb) }),
                                o().createElement('div', { className: f()(_u, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()(iu, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(mu) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), h(tu.Prev));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Au = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    hu = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: r,
                        areaClassName: u,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: f()(Au.base, e.base) });
                            }, [r]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: f()(Au.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Au.defaultScrollArea, u) },
                                o().createElement(vu, { className: i, api: m, classNames: s }, e),
                            ),
                            o().createElement(pu, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    vu = ({ api: e, className: t, classNames: a, children: r }) => (
                        (0, n.useEffect)(() => W(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Au.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: f()(Au.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: f()(Au.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (vu.Bar = pu),
                    (vu.Default = hu),
                    (vu.SeniorityAwards = ({ api: e, className: t, classNames: a, children: r }) => (
                        (0, n.useEffect)(() => W(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Au.base, t) },
                            o().createElement(
                                'div',
                                { className: f()(Au.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: f()(Au.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const Cu = ru({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? tu.Next : tu.Prev),
                    }),
                    fu = 'VerticalBar_base_f3',
                    Du = 'VerticalBar_base__nonActive_42',
                    Bu = 'VerticalBar_topButton_d7',
                    Fu = 'VerticalBar_bottomButton_06',
                    wu = 'VerticalBar_track_df',
                    Su = 'VerticalBar_thumb_32',
                    Pu = 'VerticalBar_rail_43',
                    Lu = 'disable',
                    ku = () => {},
                    yu = { pending: !1, offset: 0 },
                    Nu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    xu = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ru = (e, t) => Math.max(20, e.offsetHeight * t),
                    Tu = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Nu, onDrag: r = ku }) => {
                        const u = (0, n.useRef)(null),
                            s = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, n.useState)(yu),
                            d = m[0],
                            E = m[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            b = qr(() => {
                                const t = c.current,
                                    a = l.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && t && a)) return;
                                const o = Math.min(1, r / n);
                                return (
                                    (t.style.height = `${Ru(a, o)}px`),
                                    t.classList.add(Su),
                                    u.current &&
                                        (1 === o ? u.current.classList.add(Du) : u.current.classList.remove(Du)),
                                    o
                                );
                            }),
                            p = qr(() => {
                                const t = l.current,
                                    a = c.current,
                                    r = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(r && t && a && u)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / u),
                                    _ = (0, Xr.u)(0, 1, n / (u - r)),
                                    m = (t.offsetHeight - Ru(t, o)) * _;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Lu), void i.current.classList.remove(Lu);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Lu), void i.current.classList.add(Lu);
                                            var t, a;
                                            s.current.classList.remove(Lu), i.current.classList.remove(Lu);
                                        }
                                    })(m);
                            }),
                            A = qr(() => {
                                xu(e, () => {
                                    b(), p();
                                });
                            });
                        (0, n.useEffect)(() => W(A)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    xu(e, () => {
                                        p();
                                    });
                                };
                                let a = ku;
                                const r = () => {
                                    a(), (a = W(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!d.pending) return;
                                const t = (t) => {
                                        xu(e, (a) => {
                                            const u = l.current,
                                                n = c.current,
                                                o = e.getContainerSize();
                                            if (!u || !n || !o) return;
                                            const s = t.screenY - d.offset - u.getBoundingClientRect().y,
                                                i = (s / u.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: n, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(yu);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, d.offset, d.pending, r, g]);
                        const h = Zr((t) => e.applyStepTo(t), _, [e]),
                            v = h[0],
                            C = h[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Lu) || (0, ee.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: f()(fu, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: f()(Bu, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Lu) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), v(tu.Next));
                                },
                                ref: s,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: f()(wu, t.track),
                                    onMouseDown: (t) => {
                                        const r = c.current;
                                        if (r && 0 === t.button)
                                            if (((0, ee.G)('play'), t.target === r))
                                                g({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        xu(e, (r) => {
                                                            if (!r) return;
                                                            const u = a(e),
                                                                n = e.clampPosition(r, r.scrollTop + u * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? tu.Prev : tu.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: f()(Pu, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: f()(Fu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Lu) ||
                                        0 !== e.button ||
                                        ((0, ee.G)('play'), v(tu.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Mu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Iu = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: r,
                        areaClassName: u,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: f()(Mu.base, e.base) });
                            }, [r]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: f()(Mu.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Mu.area, u) },
                                o().createElement(Ou, { className: s, classNames: i, api: m }, e),
                            ),
                            o().createElement(Tu, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    Ou = ({ className: e, classNames: t, children: a, api: r }) => (
                        (0, n.useEffect)(() => W(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: f()(Mu.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: f()(Mu.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                a,
                            ),
                        )
                    );
                Ou.Default = Iu;
                const Hu = { Vertical: u, Horizontal: r };
                let Wu;
                !(function (e) {
                    (e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle');
                })(Wu || (Wu = {}));
                const $u = { type: Wu.Idle };
                let Gu;
                !(function (e) {
                    (e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton');
                })(Gu || (Gu = {}));
                const Uu = {
                    base: 'ArrowButton_base_8c',
                    base__gray: 'ArrowButton_base__gray_bd',
                    icon: 'ArrowButton_icon_af',
                    icon__4k: 'ArrowButton_icon__4k_23',
                    icon__back: 'ArrowButton_icon__back_28',
                    icon__forward: 'ArrowButton_icon__forward_ff',
                };
                let zu;
                !(function (e) {
                    (e.Default = 'default'), (e.Gray = 'gray');
                })(zu || (zu = {}));
                const Vu = ({ onClick: e, direction: t, type: a = zu.Default, className: r, tooltipBody: u }) => {
                        const s = f()(Uu.icon, Uu[`icon__${t}`], 2 === i.O.view.getScale() && Uu.icon__4k),
                            l = (0, n.useCallback)(() => {
                                (0, ee.G)('highlight');
                            }, []),
                            c = (0, n.useCallback)(() => {
                                (0, ee.G)('bp_slide'), e();
                            }, [e]);
                        return o().createElement(
                            le.i,
                            { body: u },
                            o().createElement(
                                'div',
                                { className: f()(Uu.base, Uu[`base__${a}`], r), onClick: c, onMouseEnter: l },
                                o().createElement('div', { className: s }),
                            ),
                        );
                    },
                    ju = 'Bookmark_base_cc',
                    Xu = 'Bookmark_container_72',
                    Yu = 'Bookmark_container__start_b1',
                    qu = 'Bookmark_container__wide_14',
                    Zu = 'Bookmark_textWrapper_46',
                    Ku = 'Bookmark_withTooltip_58',
                    Qu = 'Bookmark_text_6f',
                    Ju = 'Bookmark_text__basic_01',
                    en = 'Bookmark_text__premium_b8',
                    tn = 'Bookmark_text__single_a0',
                    an = 'Bookmark_text__wide_4c',
                    rn = 'Bookmark_text__disappeared_f2',
                    un = 'Bookmark_textInner_b4',
                    nn = 'Bookmark_leftTextLine_0a',
                    on = 'Bookmark_rightTextLine_37',
                    sn = ({ isWide: e, isDecorated: t }) => {
                        const a = f()(Qu, tn, e && an);
                        return o().createElement(
                            'div',
                            { className: a },
                            t && o().createElement('div', { className: nn }),
                            o().createElement(
                                'div',
                                { className: un },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && o().createElement('div', { className: on }),
                        );
                    };
                class ln extends n.PureComponent {
                    render() {
                        const e = this.props,
                            t = e.tooltipBody,
                            a = e.tooltipTitle,
                            r = e.children;
                        return 'string' == typeof t
                            ? o().createElement(
                                  le.i,
                                  { body: t, header: a },
                                  o().createElement('div', { className: Ku }, r),
                              )
                            : { children: r };
                    }
                }
                const cn = (0, n.memo)(ln),
                    _n = (0, n.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: r,
                                chapterStep: u,
                                mixClass: s,
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
                                    chapterStep: u,
                                }),
                                _ = f()(ju, s),
                                m = f()(Xu, e && qu, !e && Yu),
                                d = f()(Qu, Ju, t && rn),
                                E = f()(Qu, en);
                            return o().createElement(
                                'div',
                                { className: _, ref: l },
                                o().createElement(
                                    'div',
                                    { className: m },
                                    e
                                        ? o().createElement(
                                              cn,
                                              { tooltipBody: a, tooltipTitle: r },
                                              o().createElement(sn, { isWide: e, isDecorated: !0 }),
                                          )
                                        : o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: Zu },
                                                  o().createElement(
                                                      le.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: c,
                                                      },
                                                      o().createElement(sn, { isWide: e }),
                                                  ),
                                              ),
                                              o().createElement(
                                                  Aa.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      { className: E },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: d },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                let mn, dn, En, gn, bn;
                !(function (e) {
                    (e.left = 'left'), (e.right = 'right');
                })(mn || (mn = {})),
                    (function (e) {
                        (e.COMPLETED = 'completed'),
                            (e.IN_PROGRESS = 'inProgress'),
                            (e.NOT_STARTED = 'notStarted'),
                            (e.DISABLED = 'disabled'),
                            (e.COMPLETED_TROPHY_NOT_SELECTED = 'completedTrophyNotSelected');
                    })(dn || (dn = {})),
                    (function (e) {
                        (e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward');
                    })(En || (En = {})),
                    (function (e) {
                        (e.back = 'back'), (e.forward = 'forward');
                    })(gn || (gn = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Gray = 'gray');
                    })(bn || (bn = {}));
                var pn = a(1975),
                    An = a(7442),
                    hn = a(156);
                const vn = 'OptimizedProgressBar_base_1f',
                    Cn = 'OptimizedProgressBar_wrapper_ab',
                    fn = 'OptimizedProgressBar_background_ce';
                var Dn = a(7736);
                const Bn = ['api', 'value', 'maxValue', 'theme'];
                function Fn() {
                    return (
                        (Fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Fn.apply(this, arguments)
                    );
                }
                const wn = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Sn = (e) => {
                        let t = e.api,
                            a = e.value,
                            r = e.maxValue,
                            u = void 0 === r ? 100 : r,
                            s = e.theme,
                            i = void 0 === s ? pn.uH : s,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    u = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                                return u;
                            })(e, Bn);
                        const c = (0, n.useRef)(null),
                            _ = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            d = (0, Xr.u)(0, a, u) / u,
                            E = (0, n.useCallback)(
                                (e) => {
                                    m.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, r) => {
                                            const u = a.offsetWidth - r.offsetWidth,
                                                n = e - wn(a, t),
                                                o = (0, Xr.u)(0, u, n);
                                            r.style.left = `${o}px`;
                                        })(e, c.current, m.current),
                                        _.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: r, line: u },
                                            ) => {
                                                const n = Math.max(0, Math.floor(r.offsetWidth * a) - 8e3),
                                                    o = e - wn(r, t),
                                                    s = (0, Xr.u)(0, n, o);
                                                u.style.left = `${s}px`;
                                            })(e, d, { line: _.current, container: c.current });
                                },
                                [d],
                            ),
                            g = (0, n.useMemo)(() => (0, hn.VQ)(i), [i]);
                        return (
                            (t.current.update = E),
                            o().createElement(
                                'div',
                                { className: vn, ref: c },
                                o().createElement(
                                    'div',
                                    { className: Cn },
                                    o().createElement(
                                        'div',
                                        { style: g, className: fn, ref: m },
                                        o().createElement(An.J, { size: l.size }),
                                    ),
                                    o().createElement(
                                        pn.ko,
                                        Fn({}, l, {
                                            lineRef: _,
                                            value: a,
                                            theme: i,
                                            maxValue: u,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Pn = 'CrewReward_base_60',
                    Ln = 'CrewReward_baseWrapper_38',
                    kn = 'CrewReward_crewBackground_45',
                    yn = 'CrewReward_crewBackground__disableHover_c9',
                    Nn = 'CrewReward_infoWrapper_6c',
                    xn = 'CrewReward_crewDescription_93',
                    Rn = 'CrewReward_name_9b',
                    Tn = 'CrewReward_skillWrapper_cd',
                    Mn = 'CrewReward_skillBackground_3f',
                    In = 'CrewReward_skill_91',
                    On = R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                    Hn = R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                let Wn;
                !(function (e) {
                    (e.Small = 'Small'), (e.Medium = 'Medium'), (e.Large = 'Large');
                })(Wn || (Wn = {}));
                const $n = R.images.gui.maps.icons.battlePass.progression.crews,
                    Gn = (e, t) => {
                        if (t <= 2) {
                            if (e <= F.Small) return Wn.Small;
                            if (e === F.Medium) return Wn.Medium;
                        }
                        return Wn.Large;
                    },
                    Un = (0, te.Pi)(() => {
                        const e = (0, n.useState)(!1),
                            t = e[0],
                            a = e[1],
                            r = Je().model,
                            u = r.root.get().chapterState,
                            s = r.chapterCharacter.get(),
                            l = s.tankman,
                            c = s.icon,
                            _ = s.tooltipId,
                            m = r.computes.getCharacterSkills(),
                            d = i.O.view.getScale(),
                            E = P().mediaSize,
                            g = (0, n.useCallback)(() => {
                                a(!0);
                            }, [a]),
                            b = (0, n.useCallback)(() => {
                                a(!1);
                            }, [a]),
                            p = { backgroundImage: `url(${$n.$dyn(`${Gn(E, d)}_${c.split('.')[0]}`)})` },
                            A = u === ut.Completed,
                            h = f()(kn, t && !A && yn),
                            v = On,
                            C = v === On ? Hn : void 0,
                            D = (0, n.useMemo)(() => ({ tooltipId: _ }), [_]);
                        return o().createElement(
                            Aa.u,
                            {
                                ignoreShowDelay: !0,
                                ignoreMouseClick: !0,
                                contentId: v,
                                decoratorId: C,
                                isEnabled: !0,
                                args: D,
                            },
                            o().createElement(
                                'div',
                                { className: Pn },
                                o().createElement(
                                    'div',
                                    { className: Ln },
                                    o().createElement('div', {
                                        className: h,
                                        style: p,
                                        onMouseEnter: g,
                                        onMouseLeave: b,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Nn },
                                        o().createElement(
                                            'div',
                                            { className: xn },
                                            o().createElement('div', { className: Rn }, l),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Tn },
                                            o().createElement('div', { className: Mn }),
                                            m.map((e, t) =>
                                                o().createElement('div', {
                                                    className: In,
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
                var zn = a(1481);
                const Vn = 'VehicleInfo_base_b3',
                    jn = 'VehicleInfo_prefix_f6',
                    Xn = 'VehicleInfo_type_1b',
                    Yn = R.strings.battle_pass.progression.widget3dStyle,
                    qn = (0, n.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: r }) => {
                        const u = (0, n.useMemo)(() => {
                            const e = (0, ae.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${r ? '_elite' : ''}`)})`,
                            };
                        }, [a, r]);
                        return o().createElement(
                            'div',
                            { className: Vn },
                            o().createElement('div', { className: jn }, Yn.forVehicle()),
                            xa(e),
                            o().createElement('div', { className: Xn, style: u }),
                            t,
                        );
                    }),
                    Zn = 'Widget3dStyle_base_ae',
                    Kn = 'Widget3dStyle_title_20',
                    Qn = 'Widget3dStyle_base__closedChapter_d4',
                    Jn = 'Widget3dStyle_box_f8',
                    eo = 'Widget3dStyle_light_82',
                    to = 'Widget3dStyle_image_f7',
                    ao = 'Widget3dStyle_previewButton_03',
                    ro = 'Widget3dStyle_box__hover_39',
                    uo = 'Widget3dStyle_footer_b9',
                    no = 'Widget3dStyle_caption_2b',
                    oo = 'R.images.gui.maps.icons.battlePass.rewards.customizations',
                    so = R.strings.battle_pass.progression.widget3dStyle,
                    io = (0, te.Pi)(({ widget3dStyleRef: e, overScrollWidth: t, level: a, isShowTitle: r }) => {
                        const u = (0, n.useState)(!1),
                            s = u[0],
                            i = u[1],
                            l = Je(),
                            c = l.model,
                            _ = l.controls,
                            m = c.root.get(),
                            d = m.chapterState,
                            E = m.isStyleTaken,
                            g = c.widget3dStyle.get(),
                            b = g.styleName,
                            p = g.styleId,
                            A = g.intCD,
                            h = _.on3dStylePreviewClick,
                            v = c.vehicleInfo.get(),
                            C = { marginRight: `-${t}`, marginLeft: t },
                            D = ((e, t) => (2 !== t ? (e <= F.Small ? or.S296x222 : or.S400x300) : or.S600x450))(
                                P().mediaSize,
                                viewEnv.getScale(),
                            ),
                            B = ((e, t, a, r) => {
                                if (r) return { backgroundImage: `url(${oo}.${a}.style_3d_${r})` };
                                return { backgroundImage: `url(${oo}.${a}.style_3d_${e}_${t})` };
                            })(a, p, D, A),
                            w = (0, ae.uF)(so.currentStyle(), { name: b }),
                            S = (0, n.useCallback)(() => {
                                h({ level: a });
                            }, [h, a]),
                            L = d === ut.Completed,
                            k = f()(Zn, L && Qn),
                            y = f()(Jn, s && ro);
                        return o().createElement(
                            'div',
                            { className: k, ref: e, style: C },
                            !E && r && o().createElement('div', { className: Kn }, so.titleNoChapterSelected()),
                            o().createElement(
                                'div',
                                {
                                    className: y,
                                    onMouseEnter: () => {
                                        i(!0);
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                },
                                !E && 1 === a && o().createElement('div', { className: eo }),
                                o().createElement('div', { className: to, style: B }),
                                o().createElement('div', { className: ao }, o().createElement(zn.k, { onClick: S })),
                            ),
                            o().createElement(
                                'div',
                                { className: uo },
                                o().createElement('div', { className: no }, w),
                                o().createElement(qn, v),
                            ),
                        );
                    }),
                    lo = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: r,
                        totalPointsInLevel: u,
                        currentLevel: n,
                    }) => (e > n ? a + t * (e - 2) + t * (r / u) : (e - 1) * t + a * (r / u)),
                    co = (e) => e + 1,
                    _o = (0, te.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: r,
                            level: u,
                            previousLevel: s,
                            currentPointsInLevel: i,
                            previousPointsInLevel: l,
                            currentPointsInChapter: c,
                            previousPointsInChapter: _,
                            theme: m,
                        }) => {
                            const d = (0, n.useContext)(As).levels,
                                E = Je().model.root.get(),
                                g = E.isPaused,
                                b = E.showLevelsAnimations,
                                p = E.currentLevel,
                                A = (0, n.useState)(0),
                                h = A[0],
                                v = A[1],
                                C = (0, n.useRef)(-1),
                                f = (0, n.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                D = f[0],
                                B = D.previousBaseEarnedPoints,
                                F = D.maxBasePoints,
                                w = D.baseProgressionSize,
                                S = f[1];
                            (0, n.useEffect)(() => {
                                if (g) return;
                                const e = C.current !== _,
                                    t = e ? s : u,
                                    n = r + (d.items.length - 1) * a,
                                    o = d.items[t - 1],
                                    m = u <= d.items.length ? u - 1 : d.items.length - 1,
                                    E = d.items[m].value.levelPoints,
                                    b = lo({
                                        level: u,
                                        levelWidth: a,
                                        currentLevelWidth: r,
                                        pointsInLevel: i,
                                        totalPointsInLevel: E,
                                        currentLevel: p,
                                    }),
                                    A = o ? o.value.levelPoints : 0,
                                    h = lo({
                                        level: t > u ? u : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < p ? a : r,
                                        pointsInLevel: l,
                                        totalPointsInLevel: A,
                                        currentLevel: p,
                                    }),
                                    v = e && t <= u ? h : b;
                                _ !== c && a && (C.current = _),
                                    S({ maxBasePoints: n, previousBaseEarnedPoints: v, baseProgressionSize: b });
                            }, [g, a, r, u, s, c, l, i, _, p, d.items]);
                            const P = (0, n.useMemo)(
                                () =>
                                    Object.assign({}, pn.uu, {
                                        withStack: !0,
                                        type: Dn.r.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, n.useEffect)(() => {
                                    const e = p !== s || i !== l;
                                    if (b) v(co);
                                    else if (e && -1 === C.current)
                                        return (0, St.F)(() => {
                                            v(co);
                                        }, 700);
                                }, [p, i, s, l, b]),
                                (0, n.useEffect)(() => {
                                    if (b)
                                        return W(() => {
                                            t && t();
                                        });
                                }, [t, b]),
                                o().createElement(Sn, {
                                    key: h,
                                    animationSettings: P,
                                    deltaFrom: B,
                                    value: w,
                                    maxValue: F,
                                    api: e,
                                    theme: m,
                                })
                            );
                        },
                    ),
                    mo = R.strings.battle_pass.tooltips.progression.freePoints,
                    Eo = (0, te.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: r,
                            progressChange: u,
                        }) => {
                            const s = (0, n.useContext)(As),
                                l = s.levels,
                                c = s.chapterState,
                                _ = s.currentPointsInLevel,
                                m = Je().model.root.get(),
                                d = m.previousPointsInLevel,
                                E = m.currentPointsInChapter,
                                g = m.previousPointsInChapter,
                                b = m.freePointsInLevel,
                                p = m.freePointsInChapter,
                                A = m.previousFreePointsInChapter,
                                h = m.previousFreePointsInLevel,
                                v = m.potentialLevel,
                                C = m.previousPotentialLevel,
                                D = m.chapterType,
                                B = m.currentLevel,
                                F = m.previousLevel,
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
                                S = (c === ut.NotStarted || c === ut.Paused) && p - E > 0,
                                P = l.items[l.items.length - 1].value.levelPoints,
                                L = ((B - 1) * a + (_ / P) * r) / w,
                                k = E >= l.items.length * P,
                                y = (0, n.useMemo)(
                                    () => ({
                                        '--progress-line-base': hn.Gh.line.bgColorBase,
                                        '--progress-line-disabled': hn.Gh.line.bgColorDisabled,
                                        '--progress-line-finished': hn.Gh.line.bgColorFinished,
                                    }),
                                    [],
                                );
                            return o().createElement(
                                'div',
                                { className: jr.progressContainer },
                                S &&
                                    o().createElement(
                                        le.i,
                                        { header: mo.header(), body: mo.body.$dyn(D) },
                                        o().createElement(
                                            'div',
                                            { className: jr.progress },
                                            o().createElement(_o, {
                                                api: t,
                                                progressChange: u,
                                                levelWidth: a,
                                                currentLevelWidth: r,
                                                level: v,
                                                previousLevel: C,
                                                currentPointsInLevel: b,
                                                previousPointsInLevel: h,
                                                currentPointsInChapter: p,
                                                previousPointsInChapter: A,
                                                theme: hn.fV,
                                            }),
                                        ),
                                    ),
                                o().createElement('div', {
                                    className: f()(jr.progressBackground, k && jr.progressBackground__finished),
                                    style: Object.assign({ width: `${L}rem` }, y),
                                }),
                                o().createElement(
                                    Aa.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    o().createElement(
                                        'div',
                                        { className: f()(jr.progress, S && jr.progress__inactive) },
                                        o().createElement(_o, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: r,
                                            level: B,
                                            previousLevel: F,
                                            currentPointsInLevel: _,
                                            previousPointsInLevel: d,
                                            currentPointsInChapter: E,
                                            previousPointsInChapter: g,
                                            progressChange: u,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    go = {
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
                    bo = ({ status: e, isPremium: t, isPremiumActivated: a, isRare: r }) => {
                        const u = t && !a,
                            n = e === dn.IN_PROGRESS,
                            s = e === dn.COMPLETED || e === dn.COMPLETED_TROPHY_NOT_SELECTED,
                            i = e === dn.NOT_STARTED,
                            l = f()(
                                go.default,
                                !u && !r && go.default__normal,
                                !u && r && go.default__rare,
                                t ? go.default__premium : go.default__basic,
                            ),
                            c = f()(
                                go.normalCompleted,
                                t && go.normalCompleted__premium,
                                u ? go.normalCompleted__disabled : go.normalCompleted__enabled,
                            ),
                            _ = f()(
                                go.rare,
                                t && go.rare__premium,
                                s && go.rare__completed,
                                s && !t && go.rare__completedEnabled,
                                t && s && (u ? go.rare__completedDisabled : go.rare__completedEnabled),
                                i && go.rare__notStarted,
                                t && i && (u ? go.rare__notStartedDisabled : go.rare__notStartedEnabled),
                            ),
                            m = f()(
                                go.rarePattern,
                                s ? go.rarePattern__leftCompleted : go.rarePattern__left,
                                ((s && !t) || (i && t)) && go.rarePattern__leftIndent,
                                ((i && !t) || (s && t)) && go.rarePattern__leftNoIndent,
                            ),
                            d = f()(
                                go.rarePattern,
                                s ? go.rarePattern__rightCompleted : go.rarePattern__right,
                                ((s && !t) || (i && t)) && go.rarePattern__rightNoIndent,
                                ((i && !t) || (s && t)) && go.rarePattern__rightIndent,
                            ),
                            E = f()(go.inProgress, t && go.inProgress__premium),
                            g = f()(go.inProgressInner, t && go.inProgressInner__premium),
                            b = f()(go.inProgressPart, go.inProgressPart__left),
                            p = f()(go.inProgressPart, go.inProgressPart__right),
                            A = f()(go.disabled, t && go.disabled__premium);
                        return o().createElement(
                            'div',
                            { className: go.base },
                            i && o().createElement('div', { className: A }),
                            o().createElement('div', { className: l }),
                            s && !r && o().createElement('div', { className: c }),
                            n &&
                                o().createElement(
                                    'div',
                                    { className: E },
                                    o().createElement('div', { className: b }),
                                    !t && o().createElement('div', { className: g }),
                                    o().createElement('div', { className: p }),
                                ),
                            r &&
                                !n &&
                                o().createElement(
                                    'div',
                                    { className: _ },
                                    o().createElement('div', { className: m }),
                                    o().createElement('div', { className: d }),
                                    o().createElement('div', { className: go.rareBg }),
                                ),
                        );
                    };
                var po = a(8664);
                const Ao = {
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
                    ho = R.strings.battle_pass.progression,
                    vo = (0, te.Pi)(
                        ({ status: e, stepNumber: t, isFinal: a, showLevelsAnimations: r, stageAnimationDelay: u }) => {
                            const s = Je(),
                                i = s.model,
                                l = s.controls,
                                c = i.root.get().chapterState,
                                _ = l.onLevelsAnimationFinished,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                g = e === dn.IN_PROGRESS,
                                b = e === dn.COMPLETED,
                                p = c === ut.NotStarted || c === ut.Paused,
                                A = g ? Ao.numberInProgress : Ao.number,
                                h = {
                                    enter: Ao.numberAnimated__enter,
                                    enterActive: Ao.numberAnimated__enterActive,
                                    enterDone: Ao.numberAnimated__enterDone,
                                },
                                v = { enterActive: Ao.numberGlow__active, enterDone: Ao.numberGlow__exit },
                                C = (0, n.useCallback)(() => {
                                    (0, ee.G)('bp_current_phase');
                                }, []);
                            return (
                                (0, n.useEffect)(() => {
                                    if (r && g)
                                        return (0, St.F)(() => {
                                            E(!0), _();
                                        }, u);
                                }, [r, g, u, _]),
                                o().createElement(
                                    'div',
                                    { className: f()(Ao.base, Ao[`base__${e}`]) },
                                    ((a && b) || (g && !p)) &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('div', {
                                                className: f()(Ao.glow, g && Ao.glow__inProgress),
                                            }),
                                            o().createElement(
                                                po.Z,
                                                { in: d, timeout: u + 4e3, className: Ao.numberGlow, classNames: v },
                                                o().createElement('div', null),
                                            ),
                                        ),
                                    a &&
                                        o().createElement('div', {
                                            className: f()(Ao.iconFinal, g && Ao.iconFinal__inProgress),
                                        }),
                                    g
                                        ? o().createElement(
                                              'div',
                                              { className: A },
                                              t,
                                              o().createElement(
                                                  po.Z,
                                                  {
                                                      in: d,
                                                      timeout: u + 4e3,
                                                      className: f()(Ao.numberInProgress, Ao.numberAnimated),
                                                      classNames: h,
                                                      onEnter: C,
                                                  },
                                                  o().createElement('div', null, t),
                                              ),
                                          )
                                        : o().createElement('div', { className: A }, t),
                                    g &&
                                        o().createElement(
                                            'div',
                                            { className: Ao.title },
                                            p ? ho.pausedStep() : ho.currentStep(),
                                        ),
                                )
                            );
                        },
                    ),
                    Co = {
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
                function fo() {
                    return (
                        (fo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        fo.apply(this, arguments)
                    );
                }
                const Do = ({
                        isPremium: e = !1,
                        isLockedState: t = !1,
                        isInProgress: a = !1,
                        isPremiumActivated: r = !1,
                        playUnlockAnimation: u = !1,
                        handleUnlockAnimationExited: n,
                        baseUnlockProps: s,
                    }) => {
                        const i = a && e && (!r || u),
                            l = {
                                exit: Co.icon__exit,
                                exitActive: a ? Co.icon__exitCurrentActive : Co.icon__exitActive,
                                exitDone: Co.icon__exitDone,
                            },
                            c = t || u,
                            _ =
                                c && e
                                    ? {
                                          exit: Co.title__exit,
                                          exitActive: Co.title__exitActive,
                                          exitDone: Co.title__exitDone,
                                      }
                                    : {};
                        return o().createElement(
                            'div',
                            { className: Co.base },
                            c &&
                                o().createElement(
                                    po.Z,
                                    fo({}, s, { classNames: l, onExited: n }),
                                    o().createElement('div', {
                                        className: f()(Co.icon, a ? Co.icon__current : Co.icon__locked),
                                    }),
                                ),
                            i &&
                                o().createElement(
                                    po.Z,
                                    fo({}, s, { classNames: _ }),
                                    o().createElement(
                                        'div',
                                        { className: f()(Co.title, e && Co.title__premium) },
                                        yo.progression.currentStepLocked(),
                                    ),
                                ),
                        );
                    },
                    Bo = {
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
                    Fo = ({
                        hasTrophySelectionToken: e,
                        isPotentiallyCompleted: t,
                        isCurrentPotentiallyCompleted: a,
                        completedIn: r,
                        handleCompleteGlowAnimationExited: u,
                        children: n,
                        isRewardAnimationEnd: s,
                    }) => {
                        const i = {
                                exit: Bo.iconGlow__completedEnter,
                                exitActive: Bo.iconGlow__completedEnterActive,
                                exitDone: Bo.iconGlow__completedEnterDone,
                            },
                            l = f()(
                                Bo.icon,
                                t && Bo.icon__potentiallyCompleted,
                                a && Bo.icon__currentPotentiallyCompleted,
                            );
                        return o().createElement(
                            'div',
                            { className: f()(Bo.base, s && Bo.base__showAnimation) },
                            o().createElement(po.Z, { in: !r, timeout: ko, classNames: i, onExited: u }, n),
                            e
                                ? o().createElement(
                                      'div',
                                      { className: Bo.trophyTokenLabel },
                                      yo.progression.trophySelectAwaiting(),
                                  )
                                : o().createElement(
                                      le.i,
                                      { body: yo.tooltips.completed.got() },
                                      o().createElement('div', { className: l }),
                                  ),
                        );
                    },
                    wo = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    So = ({ totalPoints: e, currentPoints: t }) => {
                        const a = f()(wo.value, wo.value__current),
                            r = f()(wo.value, wo.value__total);
                        return o().createElement(
                            Aa.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            o().createElement(
                                'div',
                                { className: wo.base },
                                o().createElement('div', { className: a }, t),
                                o().createElement('div', { className: wo.divider }, '/'),
                                o().createElement('div', { className: r }, e),
                                o().createElement('div', { className: wo.icon }),
                            ),
                        );
                    },
                    Po = {
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
                function Lo() {
                    return (
                        (Lo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Lo.apply(this, arguments)
                    );
                }
                const ko = 1500,
                    yo = R.strings.battle_pass,
                    No = R.views.lobby.battle_pass,
                    xo = ({
                        status: e,
                        potentialStatus: t,
                        isPremium: a,
                        isRare: r,
                        isPremiumActivated: u,
                        totalPoints: s,
                        currentPoints: i,
                        playCompleteAnimation: l,
                        playUnlockAnimation: c,
                        completeAnimationDelay: _ = 0,
                        unlockAnimationDelay: m = 0,
                        baseTimeout: d = 0,
                        playUnlockAnimationSound: E = !0,
                        playCompleteAnimationSound: g = !0,
                        onAnimationDone: b,
                        onCompleteAnimationStart: p,
                        initialAnimationDelay: A,
                        hasTrophySelectionToken: h,
                        isTaken: v,
                        completedDuration: C,
                        playCompleteSelectRewardAnimation: D,
                        isRewardAnimationEnd: B,
                    }) => {
                        const F = (0, n.useState)(!1),
                            w = F[0],
                            S = F[1],
                            P = (0, n.useState)(!1),
                            L = P[0],
                            k = P[1],
                            y = (0, n.useState)(!0),
                            N = y[0],
                            x = y[1],
                            R = (0, n.useState)(!1),
                            T = R[0],
                            M = R[1],
                            I = { '--animation-duration': `${C}ms` },
                            O = e === dn.IN_PROGRESS,
                            H = e === dn.COMPLETED,
                            W = t === dn.IN_PROGRESS,
                            $ = !H && t === dn.COMPLETED,
                            G = (0, n.useCallback)(() => {
                                x(!1), E && !T && (O ? (0, ee.G)(En.UNLOCK_BIG) : (0, ee.G)(En.UNLOCK_SMALL));
                            }, [T, O, E]),
                            U = (0, n.useCallback)(() => {
                                g && (0, ee.G)(En.IMPROVED_REWARD), S(!0), p && p();
                            }, [p, g]);
                        (0, n.useEffect)(
                            () =>
                                c
                                    ? (0, St.F)(() => {
                                          G();
                                      }, A + m)
                                    : l
                                      ? (k(!0),
                                        (0, St.F)(() => {
                                            k(!1), U();
                                        }, A + _))
                                      : void (L && k(!1)),
                            [c, l, U, A, _, G, m, L],
                        );
                        const z =
                                O && a
                                    ? f()(Po.base, Po.base__premiumInProgress)
                                    : f()(Po.base, Po.base__default, O && Po.base__inProgress),
                            V = {
                                exit: Po.icon__completedEnter,
                                exitActive: Po.icon__completedEnterActive,
                                exitDone: Po.icon__completedEnterDone,
                            },
                            j = { exit: Po.glow, exitActive: Po.glow__active, exitDone: Po.glow },
                            X = { exit: Po.dust, exitActive: Po.dust__active, exitDone: Po.dust },
                            Y = H && (!a || (a && u)) && !v,
                            q = a && !u,
                            Z = !a && !Y && $,
                            K = !a && O && $,
                            Q = f()(
                                Po.iconGlow,
                                Y && (r ? Po.iconGlow__completedRare : Po.iconGlow__completed),
                                L && Po.iconGlow__hidden,
                            ),
                            J = (0, n.useCallback)(() => {
                                b && b();
                            }, [b]),
                            te = (0, n.useCallback)(() => {
                                !l && b && b(), M(!0);
                            }, [b, l]),
                            ae = (0, n.useCallback)(() => {
                                L && k(!1);
                            }, [L]);
                        (0, n.useEffect)(() => {
                            if (l && T)
                                return (0, St.F)(() => {
                                    U();
                                }, _);
                        }, [l, T, U, _]);
                        const re = { in: N, timeout: ko + d },
                            ue = w ? f()(Po.icon, Y && Po.icon__completed) : void 0,
                            ne = a || Y || $,
                            oe = !a && ((O && !$) || W);
                        return o().createElement(
                            'div',
                            { className: z, style: I },
                            ne &&
                                o().createElement(
                                    'div',
                                    { className: Po.iconContainer },
                                    !l &&
                                        !c &&
                                        (Y
                                            ? o().createElement(
                                                  Fo,
                                                  {
                                                      hasTrophySelectionToken: h,
                                                      isPotentiallyCompleted: Z,
                                                      isCurrentPotentiallyCompleted: K,
                                                      completedIn: w,
                                                      handleCompleteGlowAnimationExited: ae,
                                                      isRewardAnimationEnd: B,
                                                  },
                                                  o().createElement('div', { className: Q }),
                                              )
                                            : o().createElement(
                                                  Aa.u,
                                                  {
                                                      isEnabled: a,
                                                      contentId: No.tooltips.BattlePassLockIconTooltipView('resId'),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      null,
                                                      o().createElement(Do, {
                                                          isPremium: a,
                                                          isLockedState: q,
                                                          isInProgress: O,
                                                          isPremiumActivated: u,
                                                          playUnlockAnimation: c,
                                                          baseUnlockProps: re,
                                                          handleUnlockAnimationExited: te,
                                                      }),
                                                  ),
                                              )),
                                    (l || D) &&
                                        o().createElement(
                                            po.Z,
                                            { in: !w, timeout: ko, classNames: V, onExited: J },
                                            h && w
                                                ? o().createElement(
                                                      'div',
                                                      { className: Po.trophyTokenLabel },
                                                      yo.progression.trophySelectAwaiting(),
                                                  )
                                                : o().createElement('div', { className: ue }),
                                        ),
                                    c &&
                                        !T &&
                                        o().createElement(
                                            Aa.u,
                                            { contentId: No.tooltips.BattlePassLockIconTooltipView('resId') },
                                            o().createElement(
                                                'div',
                                                { className: Po.iconInner },
                                                o().createElement(Do, {
                                                    baseUnlockProps: re,
                                                    isPremium: a,
                                                    isLockedState: q,
                                                    isInProgress: O,
                                                    isPremiumActivated: u,
                                                    playUnlockAnimation: c,
                                                    handleUnlockAnimationExited: te,
                                                }),
                                                O &&
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement(
                                                            po.Z,
                                                            Lo({}, re, { classNames: j }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Po.glowWrapper },
                                                                o().createElement('div', { className: Po.glow }),
                                                            ),
                                                        ),
                                                        o().createElement(
                                                            po.Z,
                                                            Lo({}, re, { classNames: X }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Po.glowWrapper },
                                                                o().createElement('div', { className: Po.dust }),
                                                            ),
                                                        ),
                                                    ),
                                            ),
                                        ),
                                ),
                            oe &&
                                o().createElement(
                                    'div',
                                    { className: Po.pointsWrapper },
                                    o().createElement(So, { totalPoints: s, currentPoints: i }),
                                ),
                        );
                    },
                    Ro = {
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
                    To = ['children'];
                function Mo() {
                    return (
                        (Mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Mo.apply(this, arguments)
                    );
                }
                const Io = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, To);
                    return o().createElement(
                        Aa.u,
                        Mo(
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
                function Oo() {
                    return (
                        (Oo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Oo.apply(this, arguments)
                    );
                }
                const Ho = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const r = o().createElement('div', { className: a }, e);
                        if (t.header || t.body) return o().createElement(le.i, t, r);
                        const u = t.contentId,
                            n = t.args,
                            s = null == n ? void 0 : n.contentId;
                        return u || s
                            ? o().createElement(Aa.u, Oo({}, t, { contentId: u || s }), r)
                            : o().createElement(Io, t, r);
                    },
                    Wo = {
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
                    $o = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: r = or.Big,
                        special: u,
                        value: n,
                        valueType: s,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ir.BATTLE_BOOSTER:
                                    case ir.BATTLE_BOOSTER_REPLACE:
                                        return lr.BATTLE_BOOSTER;
                                }
                            })(u),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ir.BATTLE_BOOSTER:
                                        return cr.BATTLE_BOOSTER;
                                    case ir.BATTLE_BOOSTER_REPLACE:
                                        return cr.BATTLE_BOOSTER_REPLACE;
                                    case ir.BUILT_IN_EQUIPMENT:
                                        return cr.BUILT_IN_EQUIPMENT;
                                    case ir.EQUIPMENT_PLUS:
                                        return cr.EQUIPMENT_PLUS;
                                    case ir.EQUIPMENT_TROPHY_BASIC:
                                        return cr.EQUIPMENT_TROPHY_BASIC;
                                    case ir.EQUIPMENT_TROPHY_UPGRADED:
                                        return cr.EQUIPMENT_TROPHY_UPGRADED;
                                    case ir.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return cr.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ir.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return cr.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ir.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return cr.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ir.PROGRESSION_STYLE_UPGRADED_1:
                                        return cr.PROGRESSION_STYLE_UPGRADED_1;
                                    case ir.PROGRESSION_STYLE_UPGRADED_2:
                                        return cr.PROGRESSION_STYLE_UPGRADED_2;
                                    case ir.PROGRESSION_STYLE_UPGRADED_3:
                                        return cr.PROGRESSION_STYLE_UPGRADED_3;
                                    case ir.PROGRESSION_STYLE_UPGRADED_4:
                                        return cr.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(u),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case sr.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case sr.CURRENCY:
                                    case sr.NUMBER:
                                        return o().createElement(_r.A, { format: 'integral', value: Number(e) });
                                    case sr.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, s);
                        return o().createElement(
                            'div',
                            { className: f()(Wo.base, Wo[`base__${r}`], l), style: i },
                            o().createElement(
                                Ho,
                                { tooltipArgs: _, className: Wo.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: f()(Wo.image, null == c ? void 0 : c.image) },
                                        d &&
                                            o().createElement('div', {
                                                className: f()(Wo.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            o().createElement('div', {
                                                className: f()(Wo.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            o().createElement('div', {
                                                className: f()(Wo.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    Wo.info,
                                                    Wo[`info__${e}`],
                                                    s === sr.MULTI && Wo.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                o().createElement(
                                    Ho,
                                    { tooltipArgs: m },
                                    o().createElement('div', {
                                        className: f()(Wo.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Go = {
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
                function Uo() {
                    return (
                        (Uo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Uo.apply(this, arguments)
                    );
                }
                const zo = (0, n.memo)(
                        ({
                            data: e,
                            isTaken: t,
                            isVertical: a,
                            isTriple: r,
                            isReverse: u,
                            isInProgress: n,
                            hasAnimation: s,
                        }) => {
                            const i = P().mediaSize <= F.Small,
                                l = f()(
                                    Go.base,
                                    a && Go.base__column,
                                    n && Go.base__inProgress,
                                    u && Go.base__reverse,
                                    n && r && Go.base__tripleInProgress,
                                    !n && r && Go.base__tripleDefault,
                                ),
                                c = f()(Go.rewardInner, s && Go.rewardInner__animated),
                                _ = f()(Go.shine, s && Go.shine__animated);
                            return o().createElement(
                                'div',
                                { className: l },
                                e.map((e, a) => {
                                    const r =
                                            e.name.includes('styleProgressToken') ||
                                            e.name.includes('battlePassSelectToken'),
                                        u = (t && r) || s;
                                    return o().createElement(
                                        'div',
                                        { key: a, className: f()(Go.reward, Go[`reward__${a}`]) },
                                        u && o().createElement('div', { className: _ }),
                                        o().createElement(
                                            'div',
                                            { className: c },
                                            s &&
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement('div', { className: Go.staticShine }),
                                                    o().createElement('div', { className: Go.explosion }),
                                                ),
                                            o().createElement(
                                                $o,
                                                Uo(
                                                    {
                                                        size: i ? or.Small : or.Big,
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
                    Vo = {
                        content: 'CardRewards_content_0a',
                        content__notStarted: 'CardRewards_content__notStarted_9f',
                        content__premiumWithoutBP: 'CardRewards_content__premiumWithoutBP_05',
                        content__enterActive: 'CardRewards_content__enterActive_07',
                        content__enterDone: 'CardRewards_content__enterDone_26',
                    },
                    jo = (0, n.memo)(
                        ({
                            rewards: e,
                            showHighlight: t,
                            completedIn: a,
                            isTaken: r,
                            isPremium: u,
                            isInProgress: s,
                            isNotStarted: i,
                            isPremiumActivated: l,
                            baseTimeout: c,
                            isRewardAnimationActive: _,
                        }) => {
                            const m = e.items.map(({ value: e }) => {
                                    const t = e.item,
                                        a = e.name,
                                        r = e.value,
                                        u = e.overlayType,
                                        n = e.tooltipId,
                                        o = e.tooltipContentId;
                                    return {
                                        name: t || a,
                                        smallImage: Ar(e, or.Small),
                                        bigImage: Ar(e, or.Big),
                                        special: u,
                                        value: r,
                                        valueType:
                                            ((s = a),
                                            mr.includes(s)
                                                ? sr.MULTI
                                                : dr.includes(s)
                                                  ? sr.CURRENCY
                                                  : Er.includes(s)
                                                    ? sr.NUMBER
                                                    : gr.includes(s)
                                                      ? sr.PREMIUM_PLUS
                                                      : sr.STRING),
                                        tooltipArgs: hr({ tooltipId: n }, Number(o), { ignoreShowDelay: !0 }),
                                    };
                                    var s;
                                }),
                                d = (0, n.useState)(m),
                                E = d[0],
                                g = d[1],
                                b = (0, n.useRef)(m),
                                p = b.current;
                            (0, n.useEffect)(() => {
                                if (p.some((e, t) => e !== m[t])) return (b.current = m), (0, St.F)(() => g(m), 1e3);
                            }, [m, p]);
                            const A = (0, n.useMemo)(
                                    () => ({
                                        enter: Vo.content__enter,
                                        enterActive: Vo.content__enterActive,
                                        enterDone: Vo.content__enterDone,
                                    }),
                                    [],
                                ),
                                h = f()(
                                    Vo.content,
                                    t && !a && Vo.content__enter,
                                    i && Vo.content__notStarted,
                                    u && !l && Vo.content__premiumWithoutBP,
                                ),
                                v = (0, n.useMemo)(
                                    () => ({
                                        data: E,
                                        isVertical: 2 === E.length,
                                        isTaken: r,
                                        isTriple: 3 === E.length,
                                        isReverse: u,
                                        isInProgress: s,
                                        hasAnimation: _,
                                    }),
                                    [E, r, u, s, _],
                                );
                            return t
                                ? o().createElement(
                                      po.Z,
                                      { in: a, timeout: c, className: h, classNames: A },
                                      o().createElement('div', null, o().createElement(zo, v)),
                                  )
                                : o().createElement('div', { className: h }, o().createElement(zo, v));
                        },
                    );
                function Xo() {
                    return (
                        (Xo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Xo.apply(this, arguments)
                    );
                }
                const Yo = 100,
                    qo = 1800,
                    Zo = (0, te.Pi)(
                        ({
                            status: e,
                            potentialStatus: t,
                            isPremium: a,
                            isRare: r,
                            isPremiumActivated: u,
                            reward: s,
                            stepNumber: i,
                            totalPoints: l,
                            currentPoints: c,
                            currentLevel: _,
                            previousLevel: m,
                            isFinal: d,
                            showBuyAnimations: E,
                            showLevelsAnimations: g,
                            onFinalAnimationDone: b,
                            maxVisibleCards: p,
                            isTaken: A,
                            isButtonVisible: h,
                            isButtonDisabled: v,
                        }) => {
                            (0, n.useContext)(hs);
                            const C = Je().controls,
                                D = C.onTakeClick,
                                B = C.onFinishedAnimation,
                                w = e === dn.IN_PROGRESS,
                                S = e === dn.COMPLETED,
                                L = e === dn.COMPLETED_TROPHY_NOT_SELECTED,
                                k = e === dn.NOT_STARTED,
                                y = (0, n.useState)(!1),
                                N = y[0],
                                x = y[1],
                                T = (0, n.useState)(!1),
                                M = T[0],
                                I = T[1],
                                O = (0, n.useState)(!1),
                                H = O[0],
                                W = O[1],
                                $ = (0, n.useState)(!1),
                                G = $[0],
                                U = $[1],
                                z = (0, n.useCallback)(() => x(!0), []),
                                V = P().mediaSize <= F.Small ? $a.extraSmall : $a.small,
                                j = (0, n.useRef)(A),
                                X = (0, n.useRef)([]),
                                Y = j.current;
                            (0, n.useEffect)(() => {
                                j.current = A;
                            }),
                                (0, n.useEffect)(() => {
                                    if (Y && !A) {
                                        const e = window.setTimeout(() => {
                                                I(!1), W(!0), B();
                                            }, qo),
                                            t = window.setTimeout(() => {
                                                U(!1);
                                            }, 2300);
                                        I(!0), U(!0), X.current.push(e, t);
                                    }
                                }, [A, B, Y, s]),
                                (0, n.useEffect)(
                                    () => () => {
                                        X.current.forEach(clearTimeout);
                                    },
                                    [],
                                );
                            const q = (0, n.useMemo)(() => {
                                    let e,
                                        t = 0,
                                        r = 0,
                                        n = 0,
                                        o = 0,
                                        s = !1,
                                        l = !1,
                                        c = !1,
                                        d = !1,
                                        A = 500 * Math.ceil(_ / 25);
                                    if (p && E && u) {
                                        const e = Math.floor(0.5 * p);
                                        let a = _ - e,
                                            u = _ + e,
                                            n = 0;
                                        a <= 0 && ((n = 1 - a), (u += n), (a = 1));
                                        const m = i < _ && i >= a,
                                            E = i > _ && i <= u,
                                            g = i === a;
                                        m ? (t = (i - a + 1) * Yo) : E && (t = (i - a) * Yo),
                                            (s = Boolean(w || m || E || g)),
                                            (l = Boolean(w || g)),
                                            (c = Boolean(S && s)),
                                            (d = Boolean(L && s)),
                                            (r = (p - n - 1) * Yo),
                                            w && (o = (i - a + 1) * Yo * 2.5);
                                    }
                                    if (p && g) {
                                        const t = Math.min(_ - m, Math.floor(0.5 * p));
                                        let u = _ - t;
                                        u <= 0 && (u = 1);
                                        const o = i < _ && i >= u;
                                        o && ((r = (i - u + 1) * Yo), a && (r += Yo)),
                                            (c = Boolean(S && o)),
                                            (n = t * Yo + Yo * Math.trunc(t / 2) + A),
                                            g ? (e = b) : i === _ - 1 && (e = z);
                                    }
                                    return (
                                        G && ((A = 0), (r = qo), (c = Boolean(S)), (d = Boolean(L))),
                                        w ? (e = z) : i === _ - 1 && (e = b),
                                        {
                                            baseTimeout: o,
                                            playCompleteAnimation: c,
                                            playCompleteSelectRewardAnimation: d,
                                            playCompleteAnimationSound: c,
                                            playUnlockAnimation: s,
                                            playUnlockAnimationSound: l,
                                            unlockAnimationDelay: t,
                                            onAnimationDone: e,
                                            onCompleteAnimationStart: z,
                                            completeAnimationDelay: r,
                                            stageAnimationDelay: n,
                                            initialAnimationDelay: A,
                                        }
                                    );
                                }, [_, S, w, a, u, p, z, b, m, E, g, i, G, L]),
                                Z = (0, n.useCallback)(() => {
                                    D({ level: i });
                                }, [D, i]),
                                K = f()(Ro.base, w && !a ? Ro.base__inProgress : Ro.base__default),
                                Q = f()(Ro.buttonInner, v && Ro.buttonInner__disabled),
                                J = f()(Ro.button, v && Ro.button__disabled),
                                ee = (S || w) && (q.playUnlockAnimation || q.playCompleteAnimation),
                                te = e === dn.COMPLETED_TROPHY_NOT_SELECTED;
                            return o().createElement(
                                'div',
                                { className: K },
                                !a &&
                                    o().createElement(
                                        vo,
                                        Xo({ status: e, stepNumber: i, isFinal: d, showLevelsAnimations: g }, q),
                                    ),
                                h &&
                                    !a &&
                                    o().createElement(
                                        le.i,
                                        {
                                            isEnabled: v,
                                            body: R.strings.battle_pass.progression.btnRewardsUnavailable(),
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Ro.buttonHolder },
                                            !v && o().createElement('div', { className: Ro.buttonLight }),
                                            o().createElement(
                                                'div',
                                                { className: Q },
                                                o().createElement(
                                                    Ua,
                                                    { type: Wa.ghost, size: V, disabled: v, onClick: Z, mixClass: J },
                                                    !v && o().createElement('div', { className: Ro.buttonBlink }),
                                                    o().createElement(
                                                        'div',
                                                        { className: Ro.buttonText },
                                                        R.strings.battle_pass.progression.takeReward(),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                o().createElement(jo, {
                                    showHighlight: ee,
                                    rewards: s,
                                    completedIn: N,
                                    isTaken: A,
                                    isPremium: a,
                                    isInProgress: w,
                                    baseTimeout: q.baseTimeout,
                                    isNotStarted: k,
                                    isPremiumActivated: u,
                                    isRewardAnimationActive: M,
                                }),
                                o().createElement(
                                    'div',
                                    { className: Ro.status },
                                    o().createElement(
                                        xo,
                                        Xo(
                                            {
                                                status: e,
                                                potentialStatus: t,
                                                isPremium: Boolean(a),
                                                isRare: r,
                                                isPremiumActivated: u,
                                                totalPoints: l,
                                                currentPoints: c,
                                                isTaken: A,
                                                hasTrophySelectionToken: te,
                                                completedDuration: 500,
                                                isRewardAnimationEnd: H,
                                            },
                                            q,
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ko = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__fullBasic: 'Divider_base__fullBasic_b1',
                        base__fullPremium: 'Divider_base__fullPremium_0a',
                        inner: 'Divider_inner_40',
                        inner__basic: 'Divider_inner__basic_17',
                        inner__premium: 'Divider_inner__premium_28',
                    },
                    Qo = ({ position: e, isFull: t = !0, isPremium: a = !1 }) => {
                        const r = f()(Ko.base, Ko[`base__${e}`], t && (a ? Ko.base__fullPremium : Ko.base__fullBasic)),
                            u = f()(Ko.inner, a ? Ko.inner__premium : Ko.inner__basic);
                        return o().createElement('div', { className: r }, o().createElement('div', { className: u }));
                    },
                    Jo = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__inProgressNonPremium: 'Card_base__inProgressNonPremium_0c',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    es = (0, n.memo)(
                        (0, n.forwardRef)(
                            (
                                {
                                    status: e,
                                    potentialStatus: t,
                                    isPremium: a,
                                    isPremiumActivated: r,
                                    isRare: u,
                                    reward: s,
                                    stepNumber: i,
                                    totalPoints: l,
                                    totalPointsFinal: c,
                                    currentPoints: _,
                                    currentLevel: m,
                                    previousLevel: d,
                                    isFinal: E,
                                    maxVisibleCards: g,
                                    showBuyAnimations: b,
                                    showLevelsAnimations: p,
                                    onAnimationDone: A,
                                    isTaken: h,
                                    isButtonVisible: v,
                                    isButtonDisabled: C,
                                    isShadowVisible: D,
                                },
                                B,
                            ) => {
                                const F = J('model'),
                                    w = F.currentPointsInLevel,
                                    S = F.chapterState,
                                    P = (0, n.useRef)(null);
                                (0, n.useImperativeHandle)(B, () => ({
                                    width: () => {
                                        const e = P.current;
                                        return e ? e.offsetWidth : void 0;
                                    },
                                    offsetLeft: () => {
                                        const e = P.current;
                                        return e ? e.offsetLeft : void 0;
                                    },
                                    getOffsetLeftInArea: () => {
                                        const e = P.current;
                                        if (!e) return 0;
                                        const t = e.parentNode,
                                            a = t ? t.offsetLeft : 0;
                                        return e.offsetLeft + a;
                                    },
                                    getHTMLElement: () => P.current,
                                }));
                                const L = e === dn.NOT_STARTED,
                                    k = e === dn.IN_PROGRESS,
                                    y = e === dn.COMPLETED,
                                    N = e === dn.COMPLETED_TROPHY_NOT_SELECTED,
                                    x = y || k || N || (L && 1 === i),
                                    R = L || k || N || (y && E),
                                    T = f()(Jo.base, Jo[`base__${e}`], !a && Jo[`base__${e}NonPremium`]),
                                    M = f()(Jo.totalPoints, Jo.totalPoints__default),
                                    I = f()(Jo.totalPoints, Jo.totalPoints__final),
                                    O = ((e, t, a, r) =>
                                        e === dn.COMPLETED
                                            ? 100
                                            : e !== dn.IN_PROGRESS || (t !== ut.NotStarted && t !== ut.Paused)
                                              ? 0
                                              : (100 * a) / r)(e, S, w, l),
                                    H = { width: `${O}%` },
                                    W = {
                                        '--small-card-width': '140rem',
                                        '--small-current-card-width': '224rem',
                                        '--big-card-width': '220rem',
                                        '--big-current-card-width': '340rem',
                                    };
                                return o().createElement(
                                    'div',
                                    { className: T, ref: P, style: W },
                                    o().createElement(bo, {
                                        status: e,
                                        isPremium: a,
                                        isPremiumActivated: r,
                                        isRare: u,
                                    }),
                                    o().createElement(Zo, {
                                        status: e,
                                        potentialStatus: t,
                                        isPremium: a,
                                        isRare: u,
                                        isPremiumActivated: r,
                                        reward: s,
                                        stepNumber: i,
                                        totalPoints: l,
                                        currentPoints: _,
                                        currentLevel: m,
                                        previousLevel: d,
                                        isFinal: E,
                                        maxVisibleCards: g,
                                        showBuyAnimations: b,
                                        showLevelsAnimations: p,
                                        onFinalAnimationDone: A,
                                        isTaken: h,
                                        isButtonVisible: v,
                                        isButtonDisabled: C,
                                    }),
                                    a && o().createElement('div', { className: M }, l),
                                    a && E && o().createElement('div', { className: I }, c),
                                    D && o().createElement('div', { className: Jo.progressShadow, style: H }),
                                    x && o().createElement(Qo, { position: mn.left, isFull: !0, isPremium: a }),
                                    R && o().createElement(Qo, { position: mn.right, isFull: !0, isPremium: a }),
                                );
                            },
                        ),
                    );
                function ts() {
                    return (
                        (ts =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ts.apply(this, arguments)
                    );
                }
                const as = (e, t, a, r, u, n, o) =>
                        u === n && r === t
                            ? dn.COMPLETED
                            : e === u && ((o !== ut.NotStarted && o !== ut.Disabled) || r > 0)
                              ? dn.IN_PROGRESS
                              : e < u
                                ? 3 !== a || (o !== ut.Active && o !== ut.Completed)
                                    ? dn.COMPLETED
                                    : dn.COMPLETED_TROPHY_NOT_SELECTED
                                : dn.NOT_STARTED,
                    rs = (0, te.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            levels: r,
                            isPremium: u,
                            sectionKey: s,
                            maxVisibleCards: i,
                            isMarathon: l = !1,
                        }) => {
                            const c = Je().model.root.get(),
                                _ = c.chapterID,
                                m = c.chapterState,
                                d = c.currentPointsInLevel,
                                E = c.currentPointsInChapter,
                                g = c.freePointsInChapter,
                                b = c.freePointsInLevel,
                                p = c.currentLevel,
                                A = c.previousLevel,
                                h = c.potentialLevel,
                                v = c.isBattlePassPurchased,
                                C = c.showBuyAnimations,
                                D = c.showLevelsAnimations,
                                B = (0, n.useState)(!1),
                                F = B[0],
                                w = B[1],
                                S = (0, n.useCallback)(() => {
                                    w(!0);
                                }, [w]),
                                P = Boolean(i && u && C),
                                L = Boolean(i && D);
                            let k = 0;
                            const y = r.items,
                                N = y.length,
                                x = m === ut.NotStarted || m === ut.Paused,
                                R = y.map(({ value: r }, n) => {
                                    const c = r.level,
                                        C = r.levelPoints,
                                        f = r.state,
                                        D = r.isButtonDisabled;
                                    k += C;
                                    const B = u ? r.paidRewardItems : r.freeRewardItems,
                                        w = c === N,
                                        y = as(c, k, f, E, p, N, m),
                                        R = x ? as(c, k, f, g, h, N, m) : dn.NOT_STARTED,
                                        T = ((r, u, n) => (r === u ? e : r === n ? a : t))(c, p, h),
                                        M = B || [],
                                        I = !u && (y === dn.COMPLETED || y === dn.IN_PROGRESS);
                                    return o().createElement(
                                        es,
                                        ts(
                                            {
                                                key: `${_}_${s}_${n}`,
                                                showBuyAnimations: P && !F,
                                                showLevelsAnimations: L,
                                            },
                                            r,
                                            {
                                                ref: T,
                                                reward: M,
                                                currentPoints: x && !l ? b : d,
                                                currentLevel: p,
                                                previousLevel: A,
                                                stepNumber: c,
                                                status: y,
                                                potentialStatus: R,
                                                totalPoints: u ? k - C : C,
                                                totalPointsFinal: k,
                                                isPremium: u,
                                                isPremiumActivated: v,
                                                isFinal: w,
                                                isShadowVisible: I,
                                                maxVisibleCards: i,
                                                onAnimationDone: S,
                                                isTaken: u ? r.needTakePaid : r.needTakeFree,
                                                isButtonDisabled: D,
                                            },
                                        ),
                                    );
                                });
                            return o().createElement('div', { className: f()(jr.row, !u && jr.row__basic) }, R);
                        },
                    );
                function us() {
                    return (
                        (us =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        us.apply(this, arguments)
                    );
                }
                const ns = (0, te.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: r,
                            overScrollWidth: u,
                            widget3dStyleLeftRef: s,
                            shadowLipRef: l,
                            api: c,
                        }) => {
                            const _ = (0, n.useContext)(As).levels,
                                m = Je().model.root.get(),
                                d = m.showLevelsAnimations,
                                E = m.finalReward,
                                g = m.isStyleProgressive,
                                b = m.currentLevel,
                                p = m.currentPointsInLevel,
                                A = m.chapterType,
                                h = (0, n.useRef)({ update: () => {} }),
                                v = (0, n.useRef)({ update: () => {} }),
                                C = A === ct.Marathon;
                            c.current.moveProgressBars = (0, n.useCallback)((e) => {
                                h.current.update(e), v.current.update(e);
                            }, []);
                            const D = (0, n.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                B = D[0],
                                F = D[1],
                                w = (0, n.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            r = t.current,
                                            u = a ? a.width() : 0,
                                            n = r ? r.width() : 0;
                                        return !n && u
                                            ? { currentLevelWidth: u, levelWidth: 224 === u ? 140 : 220 }
                                            : { currentLevelWidth: u, levelWidth: n };
                                    }
                                }, [e, t]),
                                S = P().mediaSize;
                            (0, n.useEffect)(() => {
                                (0, G.Eu)().then(() => {
                                    const e = w();
                                    if (e) {
                                        const t = i.O.client.getSize(),
                                            a = Math.floor((t.width - e.currentLevelWidth) / e.levelWidth) + 1;
                                        F({
                                            levelWidth: e.levelWidth,
                                            currentLevelWidth: e.currentLevelWidth,
                                            maxCardsShown: a,
                                        });
                                    }
                                });
                            }, [S, w, _.items.length, b, p]),
                                (0, n.useEffect)(() => {
                                    d && (0, ee.G)(R.sounds.bp_progress_bar_start());
                                }, [d]),
                                (0, n.useEffect)(() => {
                                    r && r();
                                }, [b, p, r]);
                            const L = _.items.map((e) => {
                                    const t = e.value.isFreeRewardChoiceEnabled || e.value.isPaidRewardChoiceEnabled,
                                        a = e.value.needTakeFree || e.value.needTakePaid,
                                        r = a && !t;
                                    return {
                                        value: Object.assign({}, e.value, { isButtonDisabled: r, isButtonVisible: a }),
                                    };
                                }),
                                k = g ? 4 : 0,
                                y = !C && Dr(E) === lt.style,
                                N = Dr(E) === lt.tankman,
                                x = y && g,
                                T = y || N;
                            return o().createElement(
                                'div',
                                { className: jr.wrapper },
                                x &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(io, {
                                            widget3dStyleRef: s,
                                            overScrollWidth: u,
                                            level: 1,
                                            isShowTitle: !0,
                                        }),
                                        o().createElement(
                                            'div',
                                            { className: f()(jr.decor, jr.decor__left) },
                                            o().createElement('div', { className: jr.decorBackground }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: jr.bookmarkBackground, ref: l },
                                            o().createElement(_n, {
                                                isDisappeared: !0,
                                                mixClass: jr.bookmarkLeftResponsive,
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: jr.section },
                                    o().createElement(rs, {
                                        sectionKey: 'baseCard',
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        potentialLevelCardRef: a,
                                        levels: Object.assign({}, _, { items: L }),
                                        maxVisibleCards: d ? B.maxCardsShown : 0,
                                        currentLevel: b,
                                        isMarathon: C,
                                    }),
                                    o().createElement(
                                        Eo,
                                        us({ progressApi: h, freePointsApi: v, progressChange: r }, B),
                                    ),
                                    o().createElement(rs, {
                                        sectionKey: 'basePremiumCard',
                                        isPremium: !0,
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        levels: _,
                                        maxVisibleCards: B.maxCardsShown,
                                        currentLevel: b,
                                        isMarathon: C,
                                    }),
                                ),
                                T &&
                                    o().createElement(
                                        'div',
                                        { className: jr.decor },
                                        o().createElement('div', { className: jr.decorBackground }),
                                    ),
                                y && o().createElement(io, { overScrollWidth: u, level: k }),
                                N && o().createElement(Un, null),
                            );
                        },
                    ),
                    os = (0, n.memo)(ns);
                function ss() {
                    return (
                        (ss =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ss.apply(this, arguments)
                    );
                }
                function is(e, t, a, r, u, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(r, u);
                }
                const ls = { allowedButtons: [Gu.MainButton] },
                    cs = 0,
                    _s = R.strings.battle_pass.progression;
                let ms;
                !(function (e) {
                    (e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel');
                })(ms || (ms = {}));
                const ds = (0, te.Pi)(({ onScrollToEnd: e, onHorizontalScroll: t }) => {
                        const a = (0, n.useContext)(As).levels,
                            r = Je().model.root.get(),
                            u = r.currentLevel,
                            s = r.isBattlePassPurchased,
                            i = r.showBuyAnimations,
                            l = r.isStyleProgressive,
                            c = (0, n.useRef)({ moveProgressBars: () => {} }),
                            _ = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            A = (0, n.useRef)(0),
                            h = (0, n.useState)(ms.Hidden),
                            v = h[0],
                            C = h[1],
                            D = (0, n.useState)(ms.Hidden),
                            B = D[0],
                            F = D[1],
                            w = (0, n.useState)(!1),
                            S = w[0],
                            P = w[1],
                            L = l,
                            k = uu(),
                            y = k.animationScroll.scrollPosition,
                            N = k.applyScroll,
                            x = k.events,
                            R = k.handleMouseWheel,
                            T = k.getContainerSize,
                            M = k.getWrapperSize,
                            I = (function (e, t, a) {
                                const r = e.contentRef,
                                    u = e.wrapperRef,
                                    o = e.scrollPosition,
                                    s = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, n.useState)($u),
                                    _ = c[0],
                                    m = c[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = r.current;
                                        e && (e.style.cursor = _.type === Wu.Dragging ? 'move' : 'grab');
                                    }, [r, _.type]),
                                    (0, n.useEffect)(() => {
                                        if (_.type !== Wu.Dragging) return;
                                        const e = (e) => {
                                            const a = r.current,
                                                n = u.current;
                                            if (!a || !n) return;
                                            const l = _.positionFrom - e.screenX,
                                                c = _.previousScrollPosition + l;
                                            o.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(a, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        };
                                        function a() {
                                            window.removeEventListener('mousemove', e),
                                                document.body.removeEventListener('mouseleave', a),
                                                m({ type: 'scrollingToEnd' });
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
                                    }, [i.scrollPosition, s, r, _, o, u, t, a]),
                                    (0, n.useEffect)(() => {
                                        if (_.type !== Wu.End) return;
                                        const e = () => {
                                            m($u);
                                        };
                                        return i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [i.scrollPosition, _.type, l]),
                                    (0, n.useEffect)(() => {
                                        const e = r.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                m({
                                                    type: Wu.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, r, a]),
                                    [_, m]
                                );
                            })(k, void 0, ls),
                            O = I[0],
                            H = I[1],
                            $ = (e) => {
                                O.type === Wu.Dragging && H({ type: Wu.End }), R(e);
                            },
                            U = (0, n.useMemo)(() => Object.assign({}, k, { handleMouseWheel: $ }), []),
                            z = (0, n.useCallback)(
                                (e) => {
                                    const t = E.current ? E.current.offsetWidth : 0,
                                        a = g.current ? g.current.offsetWidth : 0;
                                    if (_.current) {
                                        const r = M();
                                        c.current.moveProgressBars({
                                            viewPort: _.current,
                                            horizontalScrollPosition: r ? e - r : e,
                                            leftOffset: t + cs + a,
                                        }),
                                            P(!L || e > t + cs + 0.5 * a);
                                    }
                                },
                                [M, L],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    z(e);
                                },
                                [z],
                            ),
                            j = (0, n.useCallback)((e = !1) => {
                                const t = m.current;
                                let a = 0,
                                    r = 0;
                                const u = E.current ? E.current.offsetWidth : 0,
                                    n = g.current ? g.current.offsetWidth : 0;
                                t && ((a = t.width()), (r = t.offsetLeft() + u + n));
                                const o = _.current;
                                let s = 0;
                                if (a && o) {
                                    const t = 0.5 * o.offsetWidth;
                                    e && A.current
                                        ? (s = r + a - 0.5 * A.current - t)
                                        : ((s = r + 0.5 * a - t), (A.current = a));
                                }
                                return (s = Math.round(s < 0 ? 0 : s)), s;
                            }, []),
                            X = (0, n.useCallback)((e) => {
                                let t = 0;
                                if (e && e.current && _ && _.current) {
                                    const a = e.current,
                                        r = E.current ? E.current.offsetWidth : 0,
                                        u = g.current ? g.current.offsetWidth : 0;
                                    let n = 0,
                                        o = 0;
                                    a && ((n = a.width()), (o = a.offsetLeft() + r + u));
                                    const s = _.current;
                                    if (n && s) {
                                        t = o + 0.5 * n - 0.5 * s.offsetWidth;
                                    }
                                    t = Math.round(t < 0 ? 0 : t);
                                }
                                return t;
                            }, []),
                            Y = (0, n.useCallback)(() => {
                                const e = _.current,
                                    t = m.current,
                                    a = d.current,
                                    r = E.current ? E.current.offsetWidth : 0,
                                    u = g.current ? g.current.offsetWidth : 0,
                                    n = t.offsetLeft() + r + u,
                                    o = (null == a ? void 0 : a.offsetLeft()) + r + u,
                                    s =
                                        y.goal < n - e.offsetWidth
                                            ? ms.NavToCurrentLevel
                                            : a && y.goal < o - e.offsetWidth
                                              ? ms.NavToPotentialLevel
                                              : ms.Hidden,
                                    i = (() => {
                                        switch (!0) {
                                            case a && y.goal > o + a.width():
                                                return ms.NavToPotentialLevel;
                                            case y.goal > n + t.width():
                                                return ms.NavToCurrentLevel;
                                            default:
                                                return ms.Hidden;
                                        }
                                    })();
                                C(s), F(i);
                            }, [y.goal]),
                            q = (0, n.useCallback)(
                                (e) => {
                                    const t = X(e);
                                    V(y.goal), N(t), Y();
                                },
                                [N, X, V, y.goal, Y],
                            ),
                            Z = (0, n.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case ms.NavToCurrentLevel:
                                            return q(m);
                                        case ms.NavToPotentialLevel:
                                            return q(d);
                                    }
                                },
                                [q],
                            ),
                            K = (e) => {
                                switch (e) {
                                    case ms.NavToCurrentLevel:
                                        return { type: zu.Default, tooltipBody: _s.backToCurrentStageArrow.descr() };
                                    case ms.NavToPotentialLevel:
                                        return { type: zu.Gray, tooltipBody: _s.backToPotentialStageArrow.descr() };
                                }
                            },
                            Q = (0, n.useCallback)(() => {
                                const t = k.getBounds()[1];
                                V(y.goal), Y(), y.goal === t ? e(!0) : e(!1);
                            }, [k, V, e, y.goal, Y]);
                        (0, n.useEffect)(
                            () =>
                                W(() => {
                                    s && i && N(j());
                                }),
                            [N, j, s, i],
                        ),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = T(),
                                                    t = y.goal;
                                                yield (0, G.Eu)(), yield Ja();
                                                const a = T(),
                                                    r = _.current,
                                                    u = k.getBounds()[1],
                                                    n = 0.25 * r.offsetWidth,
                                                    o = a && e && a !== e ? (t * a) / e : t;
                                                z(o), N(o > u - n ? u : o);
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (r, u) {
                                                    var n = e.apply(t, a);
                                                    function o(e) {
                                                        is(n, r, u, o, s, 'next', e);
                                                    }
                                                    function s(e) {
                                                        is(n, r, u, o, s, 'throw', e);
                                                    }
                                                    o(void 0);
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
                            (0, n.useEffect)(() => (0, St.F)(() => q(m), 700), [u]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                        t(!1), V(y.goal);
                                    },
                                    a = () => {
                                        t(!0), V(y.goal);
                                    };
                                return (
                                    x.on('rest', e),
                                    x.on('start', a),
                                    () => {
                                        x.off('rest', e), x.off('start', a);
                                    }
                                );
                            }, [O.type, x, V, t, y.goal]);
                        const J = f()(
                                jr.scrollToButton,
                                jr.scrollToButton__backward,
                                B !== ms.Hidden && jr.scrollToButton__visible,
                            ),
                            ee = f()(
                                jr.scrollToButton,
                                jr.scrollToButton__forward,
                                v !== ms.Hidden && jr.scrollToButton__visible,
                            );
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                'div',
                                { className: f()(jr.bookmark, jr.bookmark__start) },
                                o().createElement(_n, {
                                    chapterStep: a.items.length,
                                    mixClass: f()(jr.bookmarkLeftFixed, S && jr.bookmarkLeftFixed__active),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: jr.scrollWrapper, ref: _, onClick: Q, onMouseLeave: Y, onWheel: Q },
                                o().createElement(
                                    Hu.Horizontal.Area.Default,
                                    { api: U, barClassNames: { base: jr.scrollBarPosition }, onDrag: Q },
                                    o().createElement(os, {
                                        api: c,
                                        currentCardRef: m,
                                        freeProgressionCutCardRef: b,
                                        potentialLevelCardRef: d,
                                        separatorRef: p,
                                        overScrollWidth: cs,
                                        widget3dStyleLeftRef: E,
                                        shadowLipRef: g,
                                        onProgressChanged: () => {
                                            Q();
                                        },
                                    }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: J },
                                o().createElement(
                                    Vu,
                                    ss({ onClick: () => Z(B), direction: gn.back, className: jr.arrowButton }, K(B)),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: ee },
                                o().createElement(
                                    Vu,
                                    ss({ onClick: () => Z(v), direction: gn.forward, className: jr.arrowButton }, K(v)),
                                ),
                            ),
                        );
                    }),
                    Es = (0, te.Pi)(() => {
                        const e = Je().model.root.get(),
                            t = e.isPaused,
                            a = e.chapterType,
                            r = (0, n.useState)(!1),
                            u = r[0],
                            s = r[1],
                            i = (0, n.useState)(!1),
                            l = i[0],
                            c = i[1],
                            _ = (0, n.useCallback)((e) => {
                                s(e);
                            }, []),
                            m = (0, n.useCallback)((e) => {
                                c(e);
                            }, []),
                            d = f()(jr.base, jr[`base__${a}`]),
                            E = f()(jr.shadow, jr.shadow__left),
                            g = f()(jr.shadow, jr.shadow__right),
                            b = f()(jr.additionalShadow, jr.additionalShadow__active),
                            p = f()(jr.additionalShadow, !u && l && jr.additionalShadow__active);
                        return t
                            ? null
                            : o().createElement(
                                  'div',
                                  { className: d },
                                  o().createElement(
                                      'div',
                                      { className: E },
                                      o().createElement('div', { className: b }),
                                  ),
                                  o().createElement(
                                      'div',
                                      { className: g },
                                      o().createElement('div', { className: p }),
                                  ),
                                  o().createElement(ds, { onScrollToEnd: _, onHorizontalScroll: m }),
                              );
                    }),
                    gs = (0, n.memo)(Es),
                    bs = (0, n.memo)(({ chapterID: e, buttonState: t, handleChapterChoiceClick: a }) => {
                        const r = J('model'),
                            u = r.chapterState,
                            n = r.chapterType,
                            s = t !== nt.Hide,
                            i = u === ut.Disabled,
                            l = n === ct.Marathon,
                            c = R.strings.battle_pass.progression.btnAllChapters(),
                            _ = f()(_t.progression, _t[`progression__${n}`]);
                        return o().createElement(
                            'div',
                            { className: f()(_t.base, _t[`base__${n}`]), style: (0, it.W4)(e) },
                            o().createElement(
                                'div',
                                { className: _t.close },
                                o().createElement(rt, { caption: c, side: 'left', type: 'back', onClick: a }),
                            ),
                            o().createElement('div', { className: _t.header }, o().createElement(Vr, null)),
                            o().createElement('div', { className: _ }, o().createElement(gs, null)),
                            o().createElement(
                                'div',
                                { className: _t.footer },
                                s && o().createElement(Qa, { isDisabled: i }),
                            ),
                            l &&
                                o().createElement(
                                    Qe,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: _t.extraChapterWidget },
                                        o().createElement(Oa, null),
                                    ),
                                ),
                        );
                    }),
                    ps = 'BattlePassProgressionsViewApp_base_40',
                    As = (0, n.createContext)({}),
                    hs = o().createContext(!1),
                    vs = (0, te.Pi)(() => {
                        const e = Je(),
                            t = e.model,
                            a = e.controls,
                            r = t.root.get(),
                            u = r.showOffSeason,
                            s = r.showReplaceRewardsAnimations,
                            i = r.buttonState,
                            l = r.chapterID,
                            c = r.chapterState,
                            _ = r.currentPointsInLevel,
                            m = a.onChapterChoice,
                            d = a.onClose,
                            E = a.onViewLoaded,
                            g = J('model.levels'),
                            b = (0, n.useState)(u),
                            p = b[0],
                            A = b[1],
                            h = (0, n.useState)(!1),
                            v = h[0],
                            C = h[1];
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
                            (f = () => d()),
                            z($.n.ESCAPE, f);
                        const D = (0, n.useCallback)(() => {
                                v || (E(), C(!0));
                            }, [v, E]),
                            B = (0, n.useCallback)(() => {
                                m();
                            }, [m]);
                        (0, n.useEffect)(
                            () =>
                                W(() => {
                                    D();
                                }),
                            [D],
                        ),
                            (0, n.useEffect)(() => {
                                A(u);
                            }, [u]),
                            (0, n.useEffect)(() => {
                                s && (0, ee.G)('bp_pick_up_award');
                            }, [s]);
                        const F = { chapterState: c, levels: g, currentPointsInLevel: _ };
                        return o().createElement(
                            hs.Provider,
                            { value: s },
                            o().createElement(
                                'div',
                                { className: ps },
                                !p &&
                                    o().createElement(
                                        As.Provider,
                                        { value: F },
                                        o().createElement(bs, {
                                            chapterID: l,
                                            buttonState: i,
                                            handleChapterChoiceClick: B,
                                        }),
                                    ),
                                p && o().createElement(Ue, null),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(I, null, o().createElement(Qe, null, o().createElement(vs, null))),
                        document.getElementById('root'),
                    );
                });
            },
            903: (e, t, a) => {
                'use strict';
                a.d(t, { FL: () => s, W4: () => l, cs: () => o, fW: () => i, wD: () => n });
                var r = a(8546);
                const u = (e) => {
                        switch (e) {
                            case r.$u.Micro:
                                return 's';
                            case r.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    n = (e, t, a = '') => {
                        const r = a.length > 0 ? `_${a}` : a,
                            u = e.$dyn(`c_${t}${r}`),
                            n = e.$dyn(`common${r}`);
                        return u || n;
                    },
                    o = (e, t, a) => {
                        const r = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            o = t ? 'BP' : '',
                            s = `${u(a)}${o}`;
                        return { backgroundImage: `url(${n(r, e, s)})` };
                    },
                    s = (e, t, a, r) => {
                        const u = R.images.gui.maps.icons.battlePass.logo,
                            o = n(u, e, `emblem${r ? '_BP' : ''}${a ? '_open' : ''}${t}`);
                        return o ? { backgroundImage: `url(${o})` } : void 0;
                    },
                    i = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.flag,
                            r = u(t);
                        return { backgroundImage: `url(${n(a, e, r)})` };
                    },
                    l = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return { backgroundImage: `url(${n(t.chapter, e)})` };
                    };
            },
            2269: (e, t, a) => {
                'use strict';
                let r, u;
                a.d(t, { W: () => u, w: () => r }),
                    (function (e) {
                        (e.Award = 'Award'), (e.Coin = 'Coin'), (e.Point = 'Point'), (e.Collection = 'Collection');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(u || (u = {}));
            },
            3561: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => v });
                var r = a(6483),
                    u = a.n(r),
                    n = a(6179),
                    o = a.n(n);
                const s = {
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
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        a = e.value,
                        r = e.isEmpty,
                        n = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        m = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                u = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (a = n[r]), t.indexOf(a) >= 0 || (u[a] = e[a]);
                            return u;
                        })(e, i);
                    const E = r ? null : a,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const b = E && !g && E > _,
                        p = u()(
                            s.base,
                            s[`base__${t}`],
                            n && s.base__animated,
                            c && s.base__hidden,
                            !E && s.base__pattern,
                            r && s.base__empty,
                            m,
                        );
                    return o().createElement(
                        'div',
                        l({ className: p }, d),
                        o().createElement('div', { className: s.bg }),
                        o().createElement('div', { className: s.pattern }),
                        o().createElement(
                            'div',
                            { className: u()(s.value, g && s.value__text) },
                            b ? _ : E,
                            b && o().createElement('span', { className: s.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var _ = a(2372),
                    m = a(9766),
                    d = a(6373),
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
                        onClick: r,
                        size: s,
                        isLocked: i = !1,
                        hasTriger: l = !1,
                        hasMarathon: A = !1,
                        hasResource: h = !1,
                        maxCount: v = 0,
                        newItemsCount: C = 0,
                    }) => {
                        let f = '',
                            D = '';
                        const B = e === b.w.Collection && v === t,
                            F = s === b.W.Small && l;
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
                                    (D = B ? p.description.collectionCompleted() : p.description.collection());
                        }
                        const w = u()(
                                g.base,
                                g[`base__${s}`],
                                a && g.base__disabled,
                                i && g.base__locked,
                                e === b.w.Award && !a && g.base__hasAppearAnimation,
                            ),
                            S = u()(g.border, g[`border__${s}${e}`], F && g.border__triggered),
                            P = u()(g.borderHover, g[`borderHover__${s}${e}`]),
                            L = u()(g.borderDisabled, g[`borderDisabled__${s}`]),
                            k = u()(g.shine, g[`shine__${s}Left`]),
                            y = u()(g.shine, g[`shine__${s}Right`]),
                            N = u()(g.bg, g[`bg__${s}${e}`]),
                            x = u()(g.bgHover, g[`bgHover__${s}${e}`]),
                            R = u()(g.bgDisabled, g[`bgDisabled__${s}`]),
                            T = u()(g.locked, g[`locked__${s}`]),
                            M = u()(g.lockedHover, g[`lockedHover__${s}`]),
                            I = (0, n.useCallback)(() => {
                                a || (E.$.playClick(), r());
                            }, [a, r]),
                            O = (0, n.useCallback)(() => {
                                (0, E.G)('bp_highlight_02');
                            }, []);
                        return o().createElement(
                            d.i,
                            { body: D, isEnabled: Boolean(D) },
                            o().createElement(
                                'div',
                                { className: w, onMouseEnter: O, onClick: I },
                                C > 0 &&
                                    o().createElement(
                                        'div',
                                        { className: g.bubble },
                                        o().createElement(c, { size: 'small' }),
                                    ),
                                a
                                    ? o().createElement('div', { className: L })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: S }),
                                          o().createElement('div', { className: P }),
                                      ),
                                e === b.w.Award &&
                                    !a &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: k }),
                                        o().createElement('div', { className: y }),
                                    ),
                                a
                                    ? o().createElement('div', { className: R })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: N }),
                                          o().createElement('div', { className: x }),
                                      ),
                                i &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: T }),
                                        o().createElement('div', { className: M }),
                                    ),
                                e === b.w.Award && !a && o().createElement('div', { className: g.arrow }),
                                o().createElement('div', { className: u()(g.icon, g[`icon__${s}${e}`]) }),
                                o().createElement(
                                    'div',
                                    { className: g.count },
                                    e === b.w.Collection
                                        ? !B && o().createElement(m.z, { text: `${t || 0} / ${v}` })
                                        : o().createElement(_.A, { format: 'integral', value: t }),
                                    B && o().createElement('div', { className: g.completedCollectionIcon }),
                                ),
                                o().createElement('div', { className: u()(g.label, g[`label__${s}${e}`]) }, f),
                                e === b.w.Award &&
                                    !a &&
                                    o().createElement(
                                        'div',
                                        { className: g.blinkShape },
                                        o().createElement('div', { className: g.blink }),
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
                    v = ({
                        size: e = b.W.Small,
                        notChosenRewardCount: t,
                        pointsCount: a,
                        isPointsLocked: r,
                        isAwardDisabled: n,
                        coinCount: s,
                        collectionItemCount: i,
                        maxCollectionItemCount: l,
                        newCollectionItemCount: c,
                        isBPFirstEnter: _,
                        isCollectionsEnabled: m,
                        onPointsClick: d,
                        onCoinClick: E,
                        onTakeRewardsClick: g,
                        onCollectionClick: p,
                        hasMarathon: v,
                        hasResource: C = !1,
                    }) =>
                        o().createElement(
                            'div',
                            { className: u()(h.base, h[`base__${e}`]) },
                            t > 0 &&
                                o().createElement(
                                    'div',
                                    { className: h.award },
                                    o().createElement(A, {
                                        type: b.w.Award,
                                        size: e,
                                        count: t,
                                        disabled: n,
                                        onClick: g,
                                    }),
                                ),
                            o().createElement(
                                'div',
                                { className: h.award },
                                o().createElement(A, { type: b.w.Coin, count: s, onClick: E, size: e }),
                            ),
                            o().createElement(
                                'div',
                                { className: h.award },
                                o().createElement(A, {
                                    type: b.w.Point,
                                    count: a,
                                    onClick: d,
                                    size: e,
                                    isLocked: r,
                                    hasMarathon: v,
                                    hasResource: C,
                                }),
                            ),
                            m &&
                                o().createElement(
                                    'div',
                                    { className: u()(h.award, h.award__last) },
                                    o().createElement(A, {
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
                var r = a(6483),
                    u = a.n(r),
                    n = a(6179),
                    o = a.n(n);
                const s = {
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
                    m = (e, t) => {
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
                    d = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: r,
                            hasProgression: n,
                            isGolden: s,
                            labelAnimation: d,
                            newLabelAnimation: E,
                            isChapterChosen: g = !1,
                            chapterID: b = 0,
                            isProgressionCompleted: p = !1,
                            hasBeenActive: A = !1,
                            isChapterSelection: h = !1,
                            isProgression: v = !1,
                        }) => {
                            let C = '',
                                f = '';
                            a === c.$u.Small
                                ? ((C = 'Small'), (f = '__small'))
                                : a === c.$u.Micro && ((C = 'Micro'), (f = '__micro'));
                            const D = r === c.Bq.SwitchedChapterRightNow,
                                B = r === c.Bq.CompletedRightNow,
                                F = ((e, t, a, r, u) => (e || u ? t || !a : t || !r))(h, p, A, g, v),
                                w = !v && !h;
                            return o().createElement(
                                o().Fragment,
                                null,
                                F
                                    ? o().createElement('div', {
                                          className: u()(_.icon, f && _[`icon${f}`], B && _[`icon__animated${C}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = m(s, a);
                                                  if (w) {
                                                      if (p) return e.tank.$dyn(`tank_${t}`);
                                                      if (!g) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, i.wD)(e.chapterIcons, b, t);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: u()(
                                                  _.label,
                                                  _[`label${f}`],
                                                  D && _.label__new,
                                                  D && _[`label__new${C}`],
                                                  !B && p && _.label__disabled,
                                                  _[`label__${d}${C}`],
                                                  n && _[`label__hasProgress${C}`],
                                                  n && _[`label__hasProgress${C}${v ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(l._, {
                                              level: t,
                                              size: a,
                                              isGold: s,
                                              isFirstLevel: D,
                                              curState: d,
                                              showProgressionCompleted: B,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: u()(
                                                _.label,
                                                _[`label${f}`],
                                                D && _.label__new,
                                                D && _[`label__new${C}`],
                                                _[`label__${E}${C}`],
                                                n && _[`label__hasProgress${C}`],
                                            ),
                                        },
                                        o().createElement(l._, {
                                            level: e,
                                            size: a,
                                            isGold: s,
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
                            isProgressionCompleted: r,
                            size: n,
                        }) => {
                            const s = u()(g.base, g[`base__${n}`], a && g.base__completed, !a && r && g.base__hidden);
                            return o().createElement(
                                'div',
                                { className: s },
                                o().createElement(E.ko, {
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
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const A = (0, n.memo)((e) => {
                    const t = e.progression,
                        a = e.size,
                        r = e.battlePassState,
                        n = e.hasBattlePass,
                        l = e.isChapterChosen,
                        _ = e.hasBeenActive,
                        m = void 0 !== _ && _,
                        E = e.isChapterSelection,
                        g = void 0 !== E && E,
                        A = e.isOpen,
                        h = void 0 !== A && A,
                        v = e.isProgression,
                        C = void 0 !== v && v,
                        f = e.showProgressBar,
                        D = void 0 === f || f,
                        B = e.chapterType,
                        F = e.chapterID;
                    let w = '',
                        S = '',
                        P = '';
                    a === c.$u.Small
                        ? ((w = 'Small'), (S = '__small'), (P = '_small'))
                        : a === c.$u.Micro && ((w = 'Micro'), (S = '__micro'), (P = '_micro'));
                    const L = h ? 'Open' : '',
                        k = r === c.Bq.CompletedRightNow,
                        y = n || r === c.Bq.Bought,
                        N = (r === c.Bq.Completed || k) && y,
                        x = (r === c.Bq.Completed || k) && !y,
                        R = N || x,
                        T = u()(
                            s.image,
                            s[`image${S}`],
                            h && s[`image__open${w}`],
                            y && s[`image__battlePass${w}${L}`],
                            r === c.Bq.AwaitSeason && s[`image__seasonWaiting${w}`],
                            x && s[`image__completedFree${w}${L}`],
                        ),
                        M = u()(s[`${B}`], s[`${B}${S}`]),
                        I = void 0 !== t.from,
                        O = D && ((I && l) || m);
                    return o().createElement(
                        'div',
                        { className: s.base },
                        o().createElement('div', { className: M }),
                        o().createElement(
                            'div',
                            { className: T, style: (0, i.FL)(F, P, h, y) },
                            r !== c.Bq.AwaitSeason &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        d,
                                        p(
                                            {
                                                hasProgression: I,
                                                isGolden: y,
                                                isProgressionCompleted: R,
                                                isChapterChosen: l,
                                                hasBeenActive: m,
                                                isChapterSelection: g,
                                                isProgression: C,
                                            },
                                            e,
                                            t,
                                        ),
                                    ),
                                    O &&
                                        o().createElement(b, {
                                            key: t.to,
                                            progression: t,
                                            showProgressionCompleted: k,
                                            isProgressionCompleted: R,
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
                var r = a(6483),
                    u = a.n(r),
                    n = a(6179),
                    o = a.n(n);
                const s = {
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
                        isForRewardScreen: r,
                        curState: n,
                        isFirstLevel: i,
                        showProgressionCompleted: l,
                    }) => {
                        const c = u()(s.base, s[`base__${t}`]),
                            _ = u()(
                                s.text,
                                s.text__filtered,
                                s[`text__${t}`],
                                s[`text__${n}`],
                                l && s.text__hideWithDelay,
                                i && s.text__new,
                                r && s.text__rewardScreen,
                            ),
                            m = u()(
                                s.textWithBlend,
                                i && s.text__new,
                                l && s.text__hideWithDelay,
                                s[`textWithBlend__${n}`],
                            ),
                            d = u()(s.text, s.text__blended, s[`text__${t}`], r && s.text__rewardScreen),
                            E = u()(
                                s.textMask,
                                a && s.textMask__gold,
                                r && s.textMask__animated,
                                a && r && s.textMask__goldContrast,
                                s[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: c },
                            o().createElement('div', { className: _ }, e),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement('div', { className: d }, e),
                                o().createElement('div', { className: E }),
                            ),
                        );
                    };
            },
            8546: (e, t, a) => {
                'use strict';
                let r, u, n, o;
                a.d(t, { $u: () => r, Bq: () => n }),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(r || (r = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(u || (u = {})),
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
                    })(o || (o = {}));
            },
            1481: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => m });
                var r = a(6179),
                    u = a.n(r),
                    n = a(6483),
                    o = a.n(n),
                    s = a(7727);
                const i = 'LoupeButton_base_ba',
                    l = 'LoupeButton_icon_44',
                    c = 'LoupeButton_iconHover_91',
                    _ = 'LoupeButton_hoverArea_d0',
                    m = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, r.useCallback)(() => (0, s.G)('highlight'), []),
                            n = (0, r.useCallback)(() => {
                                (0, s.G)('play'), e();
                            }, [e]),
                            m = o()(_, t);
                        return u().createElement(
                            'div',
                            { className: i, onClick: n, onMouseEnter: a },
                            u().createElement('div', { className: l }),
                            u().createElement('div', { className: c }),
                            t && u().createElement('div', { className: m }),
                        );
                    };
            },
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                a.d(t, { Z: () => r });
                const r = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
            },
            6664: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                a.d(t, { Z: () => r });
                const r = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
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
        (__webpack_require__.O = (e, t, a, r) => {
            if (!t) {
                var u = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, r] = deferred[i], n = !0, o = 0; o < t.length; o++)
                        (!1 & r || u >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((n = !1), r < u && (u = r));
                    if (n) {
                        deferred.splice(i--, 1);
                        var s = a();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, r];
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
                    var r,
                        u,
                        [n, o, s] = a,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(a); i < n.length; i++)
                        (u = n[i]), __webpack_require__.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(2446));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
