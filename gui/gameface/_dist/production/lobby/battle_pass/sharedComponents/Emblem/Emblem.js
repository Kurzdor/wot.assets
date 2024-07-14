(() => {
    'use strict';
    var e,
        a = {
            1975: (e, a, l) => {
                l.d(a, { $u: () => c.$, ko: () => h });
                var t = l(6483),
                    s = l.n(t),
                    o = l(6179),
                    n = l.n(o),
                    r = l(2468),
                    _ = l(7442),
                    i = l(2407),
                    m = l(156),
                    c = l(7736),
                    d = l(1635);
                l(6823);
                const b = m.Gh,
                    g = {
                        freezed: !1,
                        withStack: !1,
                        type: c.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    h = (0, o.memo)(
                        ({
                            maxValue: e = 100,
                            theme: a = b,
                            size: l = c.$.Default,
                            animationSettings: t = g,
                            disabled: o = !1,
                            withoutBackground: h = !1,
                            value: u,
                            deltaFrom: p,
                            lineRef: E,
                            onChangeAnimationState: w,
                            onEndAnimation: f,
                            onComplete: v,
                        }) => {
                            const L = (0, d.S)(u, e, p);
                            return n().createElement(
                                'div',
                                { className: s()(r.Z.base, r.Z[`base__${l}`]), style: (0, m.VQ)(a) },
                                !h && n().createElement(_.J, { size: l }),
                                n().createElement(i.r, {
                                    size: l,
                                    lineRef: E,
                                    disabled: o,
                                    value: L.value,
                                    deltaFrom: L.deltaFrom,
                                    animationSettings: t,
                                    onEndAnimation: f,
                                    onChangeAnimationState: w,
                                    onComplete: v,
                                }),
                            );
                        },
                    );
            },
            7442: (e, a, l) => {
                l.d(a, { J: () => i });
                var t = l(6483),
                    s = l.n(t),
                    o = l(6179),
                    n = l.n(o),
                    r = l(2468),
                    _ = l(7736);
                const i = ({ size: e = _.$.Default }) =>
                    n().createElement('div', { className: s()(r.Z.background, r.Z[`background__${e}`]) });
            },
            8150: (e, a, l) => {
                l.d(a, { $: () => _ });
                var t = l(6179),
                    s = l.n(t),
                    o = l(6483),
                    n = l.n(o),
                    r = l(8804);
                const _ = ({ size: e }) => {
                    const a = n()(r.Z.base, r.Z[`base__${e}`]);
                    return s().createElement('div', { className: a });
                };
            },
            2407: (e, a, l) => {
                l.d(a, { r: () => i });
                var t = l(6179),
                    s = l.n(t),
                    o = l(5680),
                    n = l(6736),
                    r = l(2386);
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var l = arguments[a];
                                    for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const i = (0, t.memo)(
                    ({
                        size: e,
                        value: a,
                        lineRef: l,
                        disabled: t,
                        deltaFrom: i,
                        animationSettings: m,
                        onEndAnimation: c,
                        onChangeAnimationState: d,
                        onComplete: b,
                    }) => {
                        if (i === a)
                            return s().createElement(o.M, {
                                key: `${i}-${a}`,
                                size: e,
                                value: a,
                                lineRef: l,
                                disabled: t,
                                onComplete: b,
                            });
                        const g = {
                            from: i,
                            to: a,
                            size: e,
                            lineRef: l,
                            disabled: t,
                            animationSettings: m,
                            onComplete: b,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        };
                        return m.withStack
                            ? s().createElement(r.F, g)
                            : s().createElement(n.H, _({ key: `${i}-${a}` }, g));
                    },
                );
            },
            1848: (e, a, l) => {
                l.d(a, { t: () => i });
                var t = l(6179),
                    s = l.n(t),
                    o = l(6483),
                    n = l.n(o),
                    r = l(8150),
                    _ = l(6664);
                const i = (0, t.memo)(
                    ({ size: e, lineRef: a, disabled: l, baseStyles: t, isComplete: o, withoutBounce: i }) => {
                        const m = n()(
                                _.Z.base,
                                _.Z[`base__${e}`],
                                l && _.Z.base__disabled,
                                o && _.Z.base__finished,
                                i && _.Z.base__withoutBounce,
                            ),
                            c = !l && !o;
                        return s().createElement(
                            'div',
                            { className: m, style: t, ref: a },
                            s().createElement('div', { className: _.Z.pattern }),
                            s().createElement('div', { className: _.Z.gradient }),
                            c && s().createElement(r.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, a, l) => {
                l.d(a, { O: () => g });
                var t = l(6483),
                    s = l.n(t),
                    o = l(122),
                    n = l(6179),
                    r = l.n(n),
                    _ = l(8150),
                    i = l(6823),
                    m = l(6147);
                const c = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, a) => (e ? { right: 100 - a + '%' } : { left: `${a}%` }),
                    b = (e) => ({ transitionDuration: `${e}ms` }),
                    g = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: a,
                            freezed: l,
                            from: t,
                            size: g,
                            to: h,
                            onEndAnimation: u,
                            onChangeAnimationState: p,
                            className: E,
                        }) => {
                            const w = h < t,
                                f = (0, n.useState)(i.S.Idle),
                                v = f[0],
                                L = f[1],
                                S = v === i.S.End,
                                P = v === i.S.Idle,
                                $ = v === i.S.Grow,
                                x = v === i.S.Shrink,
                                M = (0, n.useCallback)(
                                    (e) => {
                                        L(e), p && p(e);
                                    },
                                    [p],
                                ),
                                B = (0, n.useCallback)(
                                    (e, a) =>
                                        (0, o.F)(() => {
                                            M(e);
                                        }, a),
                                    [M],
                                );
                            (0, n.useEffect)(() => {
                                if (!l)
                                    return P
                                        ? B(i.S.Grow, a)
                                        : $
                                          ? B(i.S.Shrink, e)
                                          : x
                                            ? B(i.S.End, e)
                                            : void (S && u && u());
                            }, [B, l, S, $, P, x, u, a, e]);
                            const y = (0, n.useMemo)(() => Object.assign({ width: '100%' }, b(e), c(w)), [w, e]),
                                C = (0, n.useMemo)(() => Object.assign({ width: '0%' }, b(e), c(w)), [w, e]),
                                k = (0, n.useMemo)(() => Object.assign({ width: '0%' }, d(w, t), b(e)), [t, w, e]),
                                I = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(h - t)}%` }, d(w, t), b(e)),
                                    [t, w, h, e],
                                );
                            if (S) return null;
                            const O = s()(m.Z.base, E, w && 0 === h && m.Z.base__withoutBounce);
                            return r().createElement(
                                'div',
                                { style: P ? k : I, className: O },
                                r().createElement(
                                    'div',
                                    { style: x ? C : y, className: m.Z.glow },
                                    r().createElement(_.$, { size: g }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, a, l) => {
                l.d(a, { x: () => i });
                var t = l(6179),
                    s = l.n(t),
                    o = l(122),
                    n = l(6823),
                    r = l(8150),
                    _ = l(9919);
                const i = (0, t.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: a,
                        freezed: l,
                        from: i,
                        size: m,
                        to: c,
                        onEndAnimation: d,
                        onChangeAnimationState: b,
                    }) => {
                        const g = c < i,
                            h = (0, t.useState)(n.V.Idle),
                            u = h[0],
                            p = h[1],
                            E = u === n.V.In,
                            w = u === n.V.End,
                            f = u === n.V.Idle,
                            v = (0, t.useCallback)(
                                (e) => {
                                    p(e), b && b(e);
                                },
                                [b],
                            );
                        (0, t.useEffect)(() => {
                            if (f && !l) {
                                const e = a;
                                return (0, o.F)(() => {
                                    v(n.V.In);
                                }, e);
                            }
                        }, [v, l, f, a]),
                            (0, t.useEffect)(() => {
                                if (E) {
                                    const l = e + a;
                                    return (0, o.F)(() => {
                                        d && d(), v(n.V.End);
                                    }, l);
                                }
                            }, [v, E, d, a, e]);
                        const L = (0, t.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${a}ms`,
                                    [g ? 'left' : 'right']: '0',
                                }),
                                [g, a, e],
                            ),
                            S = (0, t.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${a}ms`,
                                    [g ? 'left' : 'right']: '0',
                                }),
                                [g, a, e],
                            ),
                            P = (0, t.useMemo)(
                                () => ({ width: `${Math.abs(i - c)}%`, left: `${g ? c : i}%` }),
                                [i, g, c],
                            );
                        return w
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: _.Z.base, style: P },
                                  s().createElement(
                                      'div',
                                      { style: f ? L : S, className: _.Z.delta },
                                      s().createElement(r.$, { size: m }),
                                  ),
                              );
                    },
                );
            },
            538: (e, a, l) => {
                l.d(a, { F: () => _ });
                var t = l(6179),
                    s = l.n(t),
                    o = l(2434),
                    n = l(1848),
                    r = l(6823);
                const _ = (0, t.memo)(
                    ({
                        to: e,
                        size: a,
                        from: l,
                        lineRef: _,
                        disabled: i,
                        isComplete: m,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: b,
                    }) => {
                        const g = e < l,
                            h = (0, t.useState)(!1),
                            u = h[0],
                            p = h[1],
                            E = (0, t.useCallback)(
                                (e) => {
                                    e === r.S.Shrink && p(!0), b && b(e);
                                },
                                [b],
                            ),
                            w = (0, t.useMemo)(() => ({ width: `${l}%`, transitionProperty: 'none' }), [l]),
                            f = (0, t.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, {
                                size: a,
                                lineRef: _,
                                disabled: i,
                                isComplete: m,
                                withoutBounce: g && 0 === e,
                                baseStyles: u ? f : w,
                            }),
                            l >= 0 &&
                                s().createElement(o.O, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: E,
                                    freezed: c.freezed,
                                    onEndAnimation: d,
                                    from: l,
                                    size: a,
                                    to: e,
                                    className: c.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, a, l) => {
                l.d(a, { D: () => r });
                var t = l(6179),
                    s = l.n(t),
                    o = l(5913),
                    n = l(1848);
                const r = (0, t.memo)(
                    ({
                        to: e,
                        size: a,
                        from: l,
                        lineRef: r,
                        disabled: _,
                        isComplete: i,
                        animationSettings: m,
                        onChangeAnimationState: c,
                        onEndAnimation: d,
                    }) => {
                        const b = (0, t.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${m.line.duration}ms`,
                                transitionDelay: `${m.line.delay}ms`,
                            }),
                            [m.line.delay, m.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, { size: a, lineRef: r, disabled: _, isComplete: i, baseStyles: b }),
                            l >= 0 &&
                                s().createElement(o.x, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    freezed: m.freezed,
                                    from: l,
                                    size: a,
                                    to: e,
                                    onChangeAnimationState: c,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, a, l) => {
                l.d(a, { H: () => m });
                var t = l(6179),
                    s = l.n(t),
                    o = l(7736),
                    n = l(828),
                    r = l(538);
                const _ = ['onComplete', 'onEndAnimation'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var l = arguments[a];
                                    for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const m = (0, t.memo)((e) => {
                    let a = e.onComplete,
                        l = e.onEndAnimation,
                        m = (function (e, a) {
                            if (null == e) return {};
                            var l,
                                t,
                                s = {},
                                o = Object.keys(e);
                            for (t = 0; t < o.length; t++) (l = o[t]), a.indexOf(l) >= 0 || (s[l] = e[l]);
                            return s;
                        })(e, _);
                    const c = (0, t.useState)(!1),
                        d = c[0],
                        b = c[1],
                        g = (0, t.useCallback)(() => {
                            const e = 100 === m.to;
                            e !== d && b(e), e && a && a(), l && l();
                        }, [d, a, l, m.to]);
                    switch (m.animationSettings.type) {
                        case o.r.Simple:
                            return s().createElement(n.D, i({}, m, { onEndAnimation: g, isComplete: d }));
                        case o.r.Growing:
                            return s().createElement(r.F, i({}, m, { onEndAnimation: g, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, a, l) => {
                let t, s;
                l.d(a, { S: () => t, V: () => s }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(t || (t = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(s || (s = {}));
            },
            2386: (e, a, l) => {
                l.d(a, { F: () => _ });
                var t = l(6179),
                    s = l.n(t),
                    o = l(6736);
                const n = ['onEndAnimation'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var l = arguments[a];
                                    for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const _ = (0, t.memo)((e) => {
                    let a = e.onEndAnimation,
                        l = (function (e, a) {
                            if (null == e) return {};
                            var l,
                                t,
                                s = {},
                                o = Object.keys(e);
                            for (t = 0; t < o.length; t++) (l = o[t]), a.indexOf(l) >= 0 || (s[l] = e[l]);
                            return s;
                        })(e, n);
                    const _ = (0, t.useRef)({}),
                        i = (0, t.useCallback)(() => {
                            (_.current.from = void 0), a && a();
                        }, [a]),
                        m = 'number' == typeof _.current.from ? _.current.from : l.from;
                    return (
                        (_.current.from = m),
                        s().createElement(o.H, r({}, l, { onEndAnimation: i, key: `${m}-${l.to}`, from: m }))
                    );
                });
            },
            5680: (e, a, l) => {
                l.d(a, { M: () => n });
                var t = l(6179),
                    s = l.n(t),
                    o = l(1848);
                const n = ({ size: e, value: a, lineRef: l, disabled: n, onComplete: r }) => {
                    const _ = (0, t.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                        i = 100 === a;
                    return (
                        (0, t.useEffect)(() => {
                            i && r && r();
                        }, [i, r]),
                        s().createElement(o.t, { size: e, disabled: n, baseStyles: _, isComplete: i, lineRef: l })
                    );
                };
            },
            156: (e, a, l) => {
                l.d(a, { Gh: () => s, VQ: () => t });
                const t = (e) => ({
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
                    s = {
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
            7736: (e, a, l) => {
                let t, s;
                l.d(a, { $: () => t, r: () => s }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                    })(t || (t = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(s || (s = {}));
            },
            1635: (e, a, l) => {
                l.d(a, { S: () => n });
                var t = l(7515),
                    s = l(6179);
                const o = (e, a, l) => {
                        if ('number' == typeof l) {
                            return ((0, t.u)(0, a, l) / a) * 100;
                        }
                        return e;
                    },
                    n = (e, a, l) =>
                        (0, s.useMemo)(() => {
                            const s = ((0, t.u)(0, a, e) / a) * 100;
                            return { value: s, deltaFrom: o(s, a, l) };
                        }, [l, a, e]);
            },
            7515: (e, a, l) => {
                l.d(a, { u: () => t });
                const t = (e, a, l) => (l < e ? e : l > a ? a : l);
            },
            122: (e, a, l) => {
                l.d(a, { F: () => t });
                const t = (e, a) => {
                    let l;
                    const t = setTimeout(() => {
                        l = e();
                    }, a);
                    return () => {
                        'function' == typeof l && l(), clearTimeout(t);
                    };
                };
            },
            903: (e, a, l) => {
                l.d(a, { FL: () => s, wD: () => t });
                l(8546);
                const t = (e, a, l = '') => {
                        const t = l.length > 0 ? `_${l}` : l,
                            s = e.$dyn(`c_${a}${t}`),
                            o = e.$dyn(`common${t}`);
                        return s || o;
                    },
                    s = (e, a, l, s) => {
                        const o = R.images.gui.maps.icons.battlePass.logo,
                            n = t(o, e, `emblem${s ? '_BP' : ''}${l ? '_open' : ''}${a}`);
                        return n ? { backgroundImage: `url(${n})` } : void 0;
                    };
            },
            323: (e, a, l) => {
                var t = l(6483),
                    s = l.n(t),
                    o = l(6179),
                    n = l.n(o);
                const r = {
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
                var _ = l(903),
                    i = l(3044),
                    m = l(8546);
                const c = {
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
                    d = (e, a) => {
                        const l = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case m.$u.Small:
                                    return 'l';
                                case m.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(a)}${l}`;
                    },
                    b = (0, o.memo)(
                        ({
                            newLevel: e,
                            level: a,
                            size: l,
                            battlePassState: t,
                            hasProgression: o,
                            isGolden: r,
                            labelAnimation: b,
                            newLabelAnimation: g,
                            isChapterChosen: h = !1,
                            chapterID: u = 0,
                            isProgressionCompleted: p = !1,
                            hasBeenActive: E = !1,
                            isChapterSelection: w = !1,
                            isProgression: f = !1,
                        }) => {
                            let v = '',
                                L = '';
                            l === m.$u.Small
                                ? ((v = 'Small'), (L = '__small'))
                                : l === m.$u.Micro && ((v = 'Micro'), (L = '__micro'));
                            const S = t === m.Bq.SwitchedChapterRightNow,
                                P = t === m.Bq.CompletedRightNow,
                                $ = ((e, a, l, t, s) => (e || s ? a || !l : a || !t))(w, p, E, h, f),
                                x = !f && !w;
                            return n().createElement(
                                n().Fragment,
                                null,
                                $
                                    ? n().createElement('div', {
                                          className: s()(c.icon, L && c[`icon${L}`], P && c[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      a = d(r, l);
                                                  if (x) {
                                                      if (p) return e.tank.$dyn(`tank_${a}`);
                                                      if (!h) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, _.wD)(e.chapterIcons, u, a);
                                              })()})`,
                                          },
                                      })
                                    : n().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  c.label,
                                                  c[`label${L}`],
                                                  S && c.label__new,
                                                  S && c[`label__new${v}`],
                                                  !P && p && c.label__disabled,
                                                  c[`label__${b}${v}`],
                                                  o && c[`label__hasProgress${v}`],
                                                  o && c[`label__hasProgress${v}${f ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          n().createElement(i._, {
                                              level: a,
                                              size: l,
                                              isGold: r,
                                              isFirstLevel: S,
                                              curState: b,
                                              showProgressionCompleted: P,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                c.label,
                                                c[`label${L}`],
                                                S && c.label__new,
                                                S && c[`label__new${v}`],
                                                c[`label__${g}${v}`],
                                                o && c[`label__hasProgress${v}`],
                                            ),
                                        },
                                        n().createElement(i._, {
                                            level: e,
                                            size: l,
                                            isGold: r,
                                            isFirstLevel: S,
                                            curState: g,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var g = l(1975);
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
                    u = (0, o.memo)(
                        ({
                            progression: e,
                            isNoVehicles: a = !1,
                            showProgressionCompleted: l,
                            isProgressionCompleted: t,
                            size: o,
                        }) => {
                            const r = s()(h.base, h[`base__${o}`], l && h.base__completed, !l && t && h.base__hidden);
                            return n().createElement(
                                'div',
                                { className: r },
                                n().createElement(g.ko, {
                                    key: e.to,
                                    size: g.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: a,
                                }),
                            );
                        },
                    );
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var l = arguments[a];
                                    for (var t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                (0, o.memo)((e) => {
                    const a = e.progression,
                        l = e.size,
                        t = e.battlePassState,
                        o = e.hasBattlePass,
                        i = e.isChapterChosen,
                        c = e.hasBeenActive,
                        d = void 0 !== c && c,
                        g = e.isChapterSelection,
                        h = void 0 !== g && g,
                        E = e.isOpen,
                        w = void 0 !== E && E,
                        f = e.isProgression,
                        v = void 0 !== f && f,
                        L = e.showProgressBar,
                        S = void 0 === L || L,
                        P = e.chapterType,
                        $ = e.chapterID;
                    let x = '',
                        M = '',
                        B = '';
                    l === m.$u.Small
                        ? ((x = 'Small'), (M = '__small'), (B = '_small'))
                        : l === m.$u.Micro && ((x = 'Micro'), (M = '__micro'), (B = '_micro'));
                    const y = w ? 'Open' : '',
                        C = t === m.Bq.CompletedRightNow,
                        k = o || t === m.Bq.Bought,
                        I = (t === m.Bq.Completed || C) && k,
                        O = (t === m.Bq.Completed || C) && !k,
                        D = I || O,
                        F = s()(
                            r.image,
                            r[`image${M}`],
                            w && r[`image__open${x}`],
                            k && r[`image__battlePass${x}${y}`],
                            t === m.Bq.AwaitSeason && r[`image__seasonWaiting${x}`],
                            O && r[`image__completedFree${x}${y}`],
                        ),
                        A = s()(r[`${P}`], r[`${P}${M}`]),
                        N = void 0 !== a.from,
                        z = S && ((N && i) || d);
                    return n().createElement(
                        'div',
                        { className: r.base },
                        n().createElement('div', { className: A }),
                        n().createElement(
                            'div',
                            { className: F, style: (0, _.FL)($, B, w, k) },
                            t !== m.Bq.AwaitSeason &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        b,
                                        p(
                                            {
                                                hasProgression: N,
                                                isGolden: k,
                                                isProgressionCompleted: D,
                                                isChapterChosen: i,
                                                hasBeenActive: d,
                                                isChapterSelection: h,
                                                isProgression: v,
                                            },
                                            e,
                                            a,
                                        ),
                                    ),
                                    z &&
                                        n().createElement(u, {
                                            key: a.to,
                                            progression: a,
                                            showProgressionCompleted: C,
                                            isProgressionCompleted: D,
                                            size: l,
                                        }),
                                ),
                        ),
                    );
                });
            },
            3044: (e, a, l) => {
                l.d(a, { _: () => _ });
                var t = l(6483),
                    s = l.n(t),
                    o = l(6179),
                    n = l.n(o);
                const r = {
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
                        size: a,
                        isGold: l,
                        isForRewardScreen: t,
                        curState: o,
                        isFirstLevel: _,
                        showProgressionCompleted: i,
                    }) => {
                        const m = s()(r.base, r[`base__${a}`]),
                            c = s()(
                                r.text,
                                r.text__filtered,
                                r[`text__${a}`],
                                r[`text__${o}`],
                                i && r.text__hideWithDelay,
                                _ && r.text__new,
                                t && r.text__rewardScreen,
                            ),
                            d = s()(
                                r.textWithBlend,
                                _ && r.text__new,
                                i && r.text__hideWithDelay,
                                r[`textWithBlend__${o}`],
                            ),
                            b = s()(r.text, r.text__blended, r[`text__${a}`], t && r.text__rewardScreen),
                            g = s()(
                                r.textMask,
                                l && r.textMask__gold,
                                t && r.textMask__animated,
                                l && t && r.textMask__goldContrast,
                                r[`textMask__${a}`],
                            );
                        return n().createElement(
                            'div',
                            { className: m },
                            n().createElement('div', { className: c }, e),
                            n().createElement(
                                'div',
                                { className: d },
                                n().createElement('div', { className: b }, e),
                                n().createElement('div', { className: g }),
                            ),
                        );
                    };
            },
            8546: (e, a, l) => {
                let t, s, o, n;
                l.d(a, { $u: () => t, Bq: () => o }),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(t || (t = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(s || (s = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(o || (o = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(n || (n = {}));
            },
            2468: (e, a, l) => {
                l.d(a, { Z: () => t });
                const t = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, a, l) => {
                l.d(a, { Z: () => t });
                const t = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
            },
            6664: (e, a, l) => {
                l.d(a, { Z: () => t });
                const t = {
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
            6147: (e, a, l) => {
                l.d(a, { Z: () => t });
                const t = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, a, l) => {
                l.d(a, { Z: () => t });
                const t = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
        },
        l = {};
    function t(e) {
        var s = l[e];
        if (void 0 !== s) return s.exports;
        var o = (l[e] = { exports: {} });
        return a[e](o, o.exports, t), o.exports;
    }
    (t.m = a),
        (e = []),
        (t.O = (a, l, s, o) => {
            if (!l) {
                var n = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [l, s, o] = e[m], r = !0, _ = 0; _ < l.length; _++)
                        (!1 & o || n >= o) && Object.keys(t.O).every((e) => t.O[e](l[_]))
                            ? l.splice(_--, 1)
                            : ((r = !1), o < n && (n = o));
                    if (r) {
                        e.splice(m--, 1);
                        var i = s();
                        void 0 !== i && (a = i);
                    }
                }
                return a;
            }
            o = o || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > o; m--) e[m] = e[m - 1];
            e[m] = [l, s, o];
        }),
        (t.n = (e) => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return t.d(a, { a }), a;
        }),
        (t.d = (e, a) => {
            for (var l in a) t.o(a, l) && !t.o(e, l) && Object.defineProperty(e, l, { enumerable: !0, get: a[l] });
        }),
        (t.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
        (t.j = 730),
        (() => {
            var e = { 730: 0 };
            t.O.j = (a) => 0 === e[a];
            var a = (a, l) => {
                    var s,
                        o,
                        [n, r, _] = l,
                        i = 0;
                    if (n.some((a) => 0 !== e[a])) {
                        for (s in r) t.o(r, s) && (t.m[s] = r[s]);
                        if (_) var m = _(t);
                    }
                    for (a && a(l); i < n.length; i++) (o = n[i]), t.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return t.O(m);
                },
                l = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            l.forEach(a.bind(null, 0)), (l.push = a.bind(null, l.push.bind(l)));
        })();
    var s = t.O(void 0, [519], () => t(323));
    s = t.O(s);
})();
