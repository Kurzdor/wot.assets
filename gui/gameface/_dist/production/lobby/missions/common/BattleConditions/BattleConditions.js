(() => {
    'use strict';
    var e,
        n = {
            1975: (e, n, t) => {
                t.d(n, { ko: () => b, uu: () => f });
                var a = t(6483),
                    r = t.n(a),
                    s = t(6179),
                    o = t.n(s),
                    i = t(2468),
                    l = t(7442),
                    m = t(2407),
                    d = t(156),
                    u = t(7736),
                    c = t(1635);
                t(6823);
                const g = d.Gh,
                    f = {
                        freezed: !1,
                        withStack: !1,
                        type: u.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    b = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: n = g,
                            size: t = u.$.Default,
                            animationSettings: a = f,
                            disabled: s = !1,
                            withoutBackground: b = !1,
                            value: p,
                            deltaFrom: _,
                            lineRef: h,
                            onChangeAnimationState: w,
                            onEndAnimation: v,
                            onComplete: E,
                        }) => {
                            const y = (0, c.S)(p, e, _);
                            return o().createElement(
                                'div',
                                { className: r()(i.Z.base, i.Z[`base__${t}`]), style: (0, d.VQ)(n) },
                                !b && o().createElement(l.J, { size: t }),
                                o().createElement(m.r, {
                                    size: t,
                                    lineRef: h,
                                    disabled: s,
                                    value: y.value,
                                    deltaFrom: y.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: v,
                                    onChangeAnimationState: w,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
            },
            7442: (e, n, t) => {
                t.d(n, { J: () => m });
                var a = t(6179),
                    r = t.n(a),
                    s = t(6483),
                    o = t.n(s),
                    i = t(7736),
                    l = t(2468);
                const m = ({ size: e = i.$.Default }) => {
                    const n = o()(l.Z.background, l.Z[`background__${e}`]);
                    return r().createElement('div', { className: n });
                };
            },
            8150: (e, n, t) => {
                t.d(n, { $: () => l });
                var a = t(6179),
                    r = t.n(a),
                    s = t(6483),
                    o = t.n(s),
                    i = t(8804);
                const l = ({ size: e }) => {
                    const n = o()(i.Z.base, i.Z[`base__${e}`]);
                    return r().createElement('div', { className: n });
                };
            },
            2407: (e, n, t) => {
                t.d(n, { r: () => m });
                var a = t(6179),
                    r = t.n(a),
                    s = t(5680),
                    o = t(6736),
                    i = t(2386);
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const m = (0, a.memo)(
                    ({
                        size: e,
                        value: n,
                        lineRef: t,
                        disabled: a,
                        deltaFrom: m,
                        animationSettings: d,
                        onEndAnimation: u,
                        onChangeAnimationState: c,
                        onComplete: g,
                    }) => {
                        if (m === n)
                            return r().createElement(s.M, {
                                key: `${m}-${n}`,
                                size: e,
                                value: n,
                                lineRef: t,
                                disabled: a,
                                onComplete: g,
                            });
                        const f = {
                            from: m,
                            to: n,
                            size: e,
                            lineRef: t,
                            disabled: a,
                            animationSettings: d,
                            onComplete: g,
                            onEndAnimation: u,
                            onChangeAnimationState: c,
                        };
                        return d.withStack
                            ? r().createElement(i.F, f)
                            : r().createElement(o.H, l({ key: `${m}-${n}` }, f));
                    },
                );
            },
            1848: (e, n, t) => {
                t.d(n, { t: () => m });
                var a = t(6179),
                    r = t.n(a),
                    s = t(6483),
                    o = t.n(s),
                    i = t(8150),
                    l = t(6664);
                const m = (0, a.memo)(
                    ({ size: e, lineRef: n, disabled: t, baseStyles: a, isComplete: s, withoutBounce: m }) => {
                        const d = o()(
                                l.Z.base,
                                l.Z[`base__${e}`],
                                t && l.Z.base__disabled,
                                s && l.Z.base__finished,
                                m && l.Z.base__withoutBounce,
                            ),
                            u = !t && !s;
                        return r().createElement(
                            'div',
                            { className: d, style: a, ref: n },
                            r().createElement('div', { className: l.Z.pattern }),
                            r().createElement('div', { className: l.Z.gradient }),
                            u && r().createElement(i.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, n, t) => {
                t.d(n, { O: () => f });
                var a = t(6483),
                    r = t.n(a),
                    s = t(122),
                    o = t(6179),
                    i = t.n(o),
                    l = t(8150),
                    m = t(6823),
                    d = t(6147);
                const u = (e) => (e ? { left: 0 } : { right: 0 }),
                    c = (e, n) => (e ? { right: 100 - n + '%' } : { left: `${n}%` }),
                    g = (e) => ({ transitionDuration: `${e}ms` }),
                    f = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: n,
                            freezed: t,
                            from: a,
                            size: f,
                            to: b,
                            onEndAnimation: p,
                            onChangeAnimationState: _,
                            className: h,
                        }) => {
                            const w = b < a,
                                v = (0, o.useState)(m.S.Idle),
                                E = v[0],
                                y = v[1],
                                S = E === m.S.End,
                                C = E === m.S.Idle,
                                $ = E === m.S.Grow,
                                I = E === m.S.Shrink,
                                B = (0, o.useCallback)(
                                    (e) => {
                                        y(e), _ && _(e);
                                    },
                                    [_],
                                ),
                                k = (0, o.useCallback)(
                                    (e, n) =>
                                        (0, s.F)(() => {
                                            B(e);
                                        }, n),
                                    [B],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return C
                                        ? k(m.S.Grow, n)
                                        : $
                                          ? k(m.S.Shrink, e)
                                          : I
                                            ? k(m.S.End, e)
                                            : void (S && p && p());
                            }, [k, t, S, $, C, I, p, n, e]);
                            const D = (0, o.useMemo)(() => Object.assign({ width: '100%' }, g(e), u(w)), [w, e]),
                                O = (0, o.useMemo)(() => Object.assign({ width: '0%' }, g(e), u(w)), [w, e]),
                                P = (0, o.useMemo)(() => Object.assign({ width: '0%' }, c(w, a), g(e)), [a, w, e]),
                                z = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(b - a)}%` }, c(w, a), g(e)),
                                    [a, w, b, e],
                                );
                            if (S) return null;
                            const A = r()(d.Z.base, h, w && 0 === b && d.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: C ? P : z, className: A },
                                i().createElement(
                                    'div',
                                    { style: I ? O : D, className: d.Z.glow },
                                    i().createElement(l.$, { size: f }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, n, t) => {
                t.d(n, { x: () => m });
                var a = t(6179),
                    r = t.n(a),
                    s = t(122),
                    o = t(6823),
                    i = t(8150),
                    l = t(9919);
                const m = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: n,
                        freezed: t,
                        from: m,
                        size: d,
                        to: u,
                        onEndAnimation: c,
                        onChangeAnimationState: g,
                    }) => {
                        const f = u < m,
                            b = (0, a.useState)(o.V.Idle),
                            p = b[0],
                            _ = b[1],
                            h = p === o.V.In,
                            w = p === o.V.End,
                            v = p === o.V.Idle,
                            E = (0, a.useCallback)(
                                (e) => {
                                    _(e), g && g(e);
                                },
                                [g],
                            );
                        (0, a.useEffect)(() => {
                            if (v && !t) {
                                const e = n;
                                return (0, s.F)(() => {
                                    E(o.V.In);
                                }, e);
                            }
                        }, [E, t, v, n]),
                            (0, a.useEffect)(() => {
                                if (h) {
                                    const t = e + n;
                                    return (0, s.F)(() => {
                                        c && c(), E(o.V.End);
                                    }, t);
                                }
                            }, [E, h, c, n, e]);
                        const y = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${n}ms`,
                                    [f ? 'left' : 'right']: '0',
                                }),
                                [f, n, e],
                            ),
                            S = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${n}ms`,
                                    [f ? 'left' : 'right']: '0',
                                }),
                                [f, n, e],
                            ),
                            C = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(m - u)}%`, left: `${f ? u : m}%` }),
                                [m, f, u],
                            );
                        return w
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: l.Z.base, style: C },
                                  r().createElement(
                                      'div',
                                      { style: v ? y : S, className: l.Z.delta },
                                      r().createElement(i.$, { size: d }),
                                  ),
                              );
                    },
                );
            },
            538: (e, n, t) => {
                t.d(n, { F: () => l });
                var a = t(6179),
                    r = t.n(a),
                    s = t(2434),
                    o = t(1848),
                    i = t(6823);
                const l = (0, a.memo)(
                    ({
                        to: e,
                        size: n,
                        from: t,
                        lineRef: l,
                        disabled: m,
                        isComplete: d,
                        animationSettings: u,
                        onEndAnimation: c,
                        onChangeAnimationState: g,
                    }) => {
                        const f = e < t,
                            b = (0, a.useState)(!1),
                            p = b[0],
                            _ = b[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    e === i.S.Shrink && _(!0), g && g(e);
                                },
                                [g],
                            ),
                            w = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            v = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${u.line.duration}ms` }),
                                [u.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(o.t, {
                                size: n,
                                lineRef: l,
                                disabled: m,
                                isComplete: d,
                                withoutBounce: f && 0 === e,
                                baseStyles: p ? v : w,
                            }),
                            t >= 0 &&
                                r().createElement(s.O, {
                                    transitionDuration: u.delta.duration,
                                    transitionDelay: u.delta.delay,
                                    onChangeAnimationState: h,
                                    freezed: u.freezed,
                                    onEndAnimation: c,
                                    from: t,
                                    size: n,
                                    to: e,
                                    className: u.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, n, t) => {
                t.d(n, { D: () => i });
                var a = t(6179),
                    r = t.n(a),
                    s = t(5913),
                    o = t(1848);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: n,
                        from: t,
                        lineRef: i,
                        disabled: l,
                        isComplete: m,
                        animationSettings: d,
                        onChangeAnimationState: u,
                        onEndAnimation: c,
                    }) => {
                        const g = (0, a.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${d.line.duration}ms`,
                                transitionDelay: `${d.line.delay}ms`,
                            }),
                            [d.line.delay, d.line.duration, e],
                        );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(o.t, { size: n, lineRef: i, disabled: l, isComplete: m, baseStyles: g }),
                            t >= 0 &&
                                r().createElement(s.x, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    freezed: d.freezed,
                                    from: t,
                                    size: n,
                                    to: e,
                                    onChangeAnimationState: u,
                                    onEndAnimation: c,
                                }),
                        );
                    },
                );
            },
            6736: (e, n, t) => {
                t.d(n, { H: () => d });
                var a = t(6179),
                    r = t.n(a),
                    s = t(7736),
                    o = t(828),
                    i = t(538);
                const l = ['onComplete', 'onEndAnimation'];
                function m() {
                    return (
                        (m = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        m.apply(null, arguments)
                    );
                }
                const d = (0, a.memo)((e) => {
                    let n = e.onComplete,
                        t = e.onEndAnimation,
                        d = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (n.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, l);
                    const u = (0, a.useState)(!1),
                        c = u[0],
                        g = u[1],
                        f = (0, a.useCallback)(() => {
                            const e = 100 === d.to;
                            e !== c && g(e), e && n && n(), t && t();
                        }, [c, n, t, d.to]);
                    switch (d.animationSettings.type) {
                        case s.r.Simple:
                            return r().createElement(o.D, m({}, d, { onEndAnimation: f, isComplete: c }));
                        case s.r.Growing:
                            return r().createElement(i.F, m({}, d, { onEndAnimation: f, isComplete: c }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, n, t) => {
                let a, r;
                t.d(n, { S: () => a, V: () => r }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(r || (r = {}));
            },
            2386: (e, n, t) => {
                t.d(n, { F: () => l });
                var a = t(6179),
                    r = t.n(a),
                    s = t(6736);
                const o = ['onEndAnimation'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = (0, a.memo)((e) => {
                    let n = e.onEndAnimation,
                        t = (function (e, n) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (n.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, o);
                    const l = (0, a.useRef)({}),
                        m = (0, a.useCallback)(() => {
                            (l.current.from = void 0), n && n();
                        }, [n]),
                        d = 'number' == typeof l.current.from ? l.current.from : t.from;
                    return (
                        (l.current.from = d),
                        r().createElement(s.H, i({}, t, { onEndAnimation: m, key: `${d}-${t.to}`, from: d }))
                    );
                });
            },
            5680: (e, n, t) => {
                t.d(n, { M: () => o });
                var a = t(6179),
                    r = t.n(a),
                    s = t(1848);
                const o = ({ size: e, value: n, lineRef: t, disabled: o, onComplete: i }) => {
                    const l = (0, a.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                        m = 100 === n;
                    return (
                        (0, a.useEffect)(() => {
                            m && i && i();
                        }, [m, i]),
                        r().createElement(s.t, { size: e, disabled: o, baseStyles: l, isComplete: m, lineRef: t })
                    );
                };
            },
            156: (e, n, t) => {
                t.d(n, { Gh: () => r, VQ: () => a });
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
                    };
            },
            7736: (e, n, t) => {
                let a, r;
                t.d(n, { $: () => a, r: () => r }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(r || (r = {}));
            },
            1635: (e, n, t) => {
                t.d(n, { S: () => o });
                var a = t(6179),
                    r = t(7515);
                const s = (e, n, t) => {
                        if ('number' == typeof t) {
                            return ((0, r.u)(0, n, t) / n) * 100;
                        }
                        return e;
                    },
                    o = (e, n, t) =>
                        (0, a.useMemo)(() => {
                            const a = ((0, r.u)(0, n, e) / n) * 100;
                            return { value: a, deltaFrom: s(a, n, t) };
                        }, [t, n, e]);
            },
            7515: (e, n, t) => {
                t.d(n, { u: () => a });
                const a = (e, n, t) => (t < e ? e : t > n ? n : t);
            },
            122: (e, n, t) => {
                t.d(n, { F: () => a });
                const a = (e, n) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, n);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(a);
                    };
                };
            },
            3847: (e, n, t) => {
                t(6483), t(6179);
                t(1975), t(7736);
                R.strings.quests.dailyQuests.postBattle.genericAmpersand(),
                    R.strings.quests.dailyQuests.postBattle.and();
                var a = t(800);
                a.I.CENTER;
            },
            800: (e, n, t) => {
                let a, r;
                t.d(n, { $: () => r, I: () => a }),
                    (function (e) {
                        (e.LEFT = 'left'), (e.RIGHT = 'right'), (e.CENTER = 'center');
                    })(a || (a = {})),
                    (function (e) {
                        (e.BIG = 'big'), (e.HUGE = 'huge');
                    })(r || (r = {}));
            },
            2468: (e, n, t) => {
                t.d(n, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, n, t) => {
                t.d(n, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, n, t) => {
                t.d(n, { Z: () => a });
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
            6147: (e, n, t) => {
                t.d(n, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, n, t) => {
                t.d(n, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
        },
        t = {};
    function a(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var s = (t[e] = { exports: {} });
        return n[e](s, s.exports, a), s.exports;
    }
    (a.m = n),
        (e = []),
        (a.O = (n, t, r, s) => {
            if (!t) {
                var o = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, s] = e[d], i = !0, l = 0; l < t.length; l++)
                        (!1 & s || o >= s) && Object.keys(a.O).every((e) => a.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((i = !1), s < o && (o = s));
                    if (i) {
                        e.splice(d--, 1);
                        var m = r();
                        void 0 !== m && (n = m);
                    }
                }
                return n;
            }
            s = s || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
            e[d] = [t, r, s];
        }),
        (a.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return a.d(n, { a: n }), n;
        }),
        (a.d = (e, n) => {
            for (var t in n) a.o(n, t) && !a.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (a.j = 376),
        (() => {
            var e = { 376: 0 };
            a.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        s,
                        [o, i, l] = t,
                        m = 0;
                    if (o.some((n) => 0 !== e[n])) {
                        for (r in i) a.o(i, r) && (a.m[r] = i[r]);
                        if (l) var d = l(a);
                    }
                    for (n && n(t); m < o.length; m++) (s = o[m]), a.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return a.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = a.O(void 0, [45], () => a(3847));
    r = a.O(r);
})();
