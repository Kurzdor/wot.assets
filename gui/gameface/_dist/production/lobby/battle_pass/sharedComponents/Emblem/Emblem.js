(() => {
    'use strict';
    var e,
        t = {
            1975: (e, t, a) => {
                a.d(t, { $u: () => c.$, ko: () => g });
                var l = a(6483),
                    s = a.n(l),
                    o = a(6179),
                    n = a.n(o),
                    r = a(2468),
                    i = a(7442),
                    _ = a(2407),
                    m = a(156),
                    c = a(7736),
                    d = a(1635);
                a(6823);
                const b = m.Gh,
                    h = {
                        freezed: !1,
                        withStack: !1,
                        type: c.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, o.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = b,
                            size: a = c.$.Default,
                            animationSettings: l = h,
                            disabled: o = !1,
                            withoutBackground: g = !1,
                            value: u,
                            deltaFrom: p,
                            lineRef: f,
                            onChangeAnimationState: w,
                            onEndAnimation: v,
                            onComplete: E,
                        }) => {
                            const L = (0, d.S)(u, e, p);
                            return n().createElement(
                                'div',
                                { className: s()(r.Z.base, r.Z[`base__${a}`]), style: (0, m.VQ)(t) },
                                !g && n().createElement(i.J, { size: a }),
                                n().createElement(_.r, {
                                    size: a,
                                    lineRef: f,
                                    disabled: o,
                                    value: L.value,
                                    deltaFrom: L.deltaFrom,
                                    animationSettings: l,
                                    onEndAnimation: v,
                                    onChangeAnimationState: w,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                a.d(t, { J: () => _ });
                var l = a(6179),
                    s = a.n(l),
                    o = a(6483),
                    n = a.n(o),
                    r = a(7736),
                    i = a(2468);
                const _ = ({ size: e = r.$.Default }) => {
                    const t = n()(i.Z.background, i.Z[`background__${e}`]);
                    return s().createElement('div', { className: t });
                };
            },
            8150: (e, t, a) => {
                a.d(t, { $: () => i });
                var l = a(6179),
                    s = a.n(l),
                    o = a(6483),
                    n = a.n(o),
                    r = a(8804);
                const i = ({ size: e }) => {
                    const t = n()(r.Z.base, r.Z[`base__${e}`]);
                    return s().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                a.d(t, { r: () => _ });
                var l = a(6179),
                    s = a.n(l),
                    o = a(5680),
                    n = a(6736),
                    r = a(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const _ = (0, l.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: l,
                        deltaFrom: _,
                        animationSettings: m,
                        onEndAnimation: c,
                        onChangeAnimationState: d,
                        onComplete: b,
                    }) => {
                        if (_ === t)
                            return s().createElement(o.M, {
                                key: `${_}-${t}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: l,
                                onComplete: b,
                            });
                        const h = {
                            from: _,
                            to: t,
                            size: e,
                            lineRef: a,
                            disabled: l,
                            animationSettings: m,
                            onComplete: b,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        };
                        return m.withStack
                            ? s().createElement(r.F, h)
                            : s().createElement(n.H, i({ key: `${_}-${t}` }, h));
                    },
                );
            },
            1848: (e, t, a) => {
                a.d(t, { t: () => _ });
                var l = a(6179),
                    s = a.n(l),
                    o = a(6483),
                    n = a.n(o),
                    r = a(8150),
                    i = a(6664);
                const _ = (0, l.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: l, isComplete: o, withoutBounce: _ }) => {
                        const m = n()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                a && i.Z.base__disabled,
                                o && i.Z.base__finished,
                                _ && i.Z.base__withoutBounce,
                            ),
                            c = !a && !o;
                        return s().createElement(
                            'div',
                            { className: m, style: l, ref: t },
                            s().createElement('div', { className: i.Z.pattern }),
                            s().createElement('div', { className: i.Z.gradient }),
                            c && s().createElement(r.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                a.d(t, { O: () => h });
                var l = a(6483),
                    s = a.n(l),
                    o = a(122),
                    n = a(6179),
                    r = a.n(n),
                    i = a(8150),
                    _ = a(6823),
                    m = a(6147);
                const c = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    b = (e) => ({ transitionDuration: `${e}ms` }),
                    h = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: l,
                            size: h,
                            to: g,
                            onEndAnimation: u,
                            onChangeAnimationState: p,
                            className: f,
                        }) => {
                            const w = g < l,
                                v = (0, n.useState)(_.S.Idle),
                                E = v[0],
                                L = v[1],
                                S = E === _.S.End,
                                x = E === _.S.Idle,
                                $ = E === _.S.Grow,
                                P = E === _.S.Shrink,
                                C = (0, n.useCallback)(
                                    (e) => {
                                        L(e), p && p(e);
                                    },
                                    [p],
                                ),
                                y = (0, n.useCallback)(
                                    (e, t) =>
                                        (0, o.F)(() => {
                                            C(e);
                                        }, t),
                                    [C],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return x
                                        ? y(_.S.Grow, t)
                                        : $
                                          ? y(_.S.Shrink, e)
                                          : P
                                            ? y(_.S.End, e)
                                            : void (S && u && u());
                            }, [y, a, S, $, x, P, u, t, e]);
                            const B = (0, n.useMemo)(() => Object.assign({ width: '100%' }, b(e), c(w)), [w, e]),
                                M = (0, n.useMemo)(() => Object.assign({ width: '0%' }, b(e), c(w)), [w, e]),
                                k = (0, n.useMemo)(() => Object.assign({ width: '0%' }, d(w, l), b(e)), [l, w, e]),
                                I = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - l)}%` }, d(w, l), b(e)),
                                    [l, w, g, e],
                                );
                            if (S) return null;
                            const D = s()(m.Z.base, f, w && 0 === g && m.Z.base__withoutBounce);
                            return r().createElement(
                                'div',
                                { style: x ? k : I, className: D },
                                r().createElement(
                                    'div',
                                    { style: P ? M : B, className: m.Z.glow },
                                    r().createElement(i.$, { size: h }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                a.d(t, { x: () => _ });
                var l = a(6179),
                    s = a.n(l),
                    o = a(122),
                    n = a(6823),
                    r = a(8150),
                    i = a(9919);
                const _ = (0, l.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: _,
                        size: m,
                        to: c,
                        onEndAnimation: d,
                        onChangeAnimationState: b,
                    }) => {
                        const h = c < _,
                            g = (0, l.useState)(n.V.Idle),
                            u = g[0],
                            p = g[1],
                            f = u === n.V.In,
                            w = u === n.V.End,
                            v = u === n.V.Idle,
                            E = (0, l.useCallback)(
                                (e) => {
                                    p(e), b && b(e);
                                },
                                [b],
                            );
                        (0, l.useEffect)(() => {
                            if (v && !a) {
                                const e = t;
                                return (0, o.F)(() => {
                                    E(n.V.In);
                                }, e);
                            }
                        }, [E, a, v, t]),
                            (0, l.useEffect)(() => {
                                if (f) {
                                    const a = e + t;
                                    return (0, o.F)(() => {
                                        d && d(), E(n.V.End);
                                    }, a);
                                }
                            }, [E, f, d, t, e]);
                        const L = (0, l.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [h ? 'left' : 'right']: '0',
                                }),
                                [h, t, e],
                            ),
                            S = (0, l.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [h ? 'left' : 'right']: '0',
                                }),
                                [h, t, e],
                            ),
                            x = (0, l.useMemo)(
                                () => ({ width: `${Math.abs(_ - c)}%`, left: `${h ? c : _}%` }),
                                [_, h, c],
                            );
                        return w
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: i.Z.base, style: x },
                                  s().createElement(
                                      'div',
                                      { style: v ? L : S, className: i.Z.delta },
                                      s().createElement(r.$, { size: m }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                a.d(t, { F: () => i });
                var l = a(6179),
                    s = a.n(l),
                    o = a(2434),
                    n = a(1848),
                    r = a(6823);
                const i = (0, l.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: _,
                        isComplete: m,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: b,
                    }) => {
                        const h = e < a,
                            g = (0, l.useState)(!1),
                            u = g[0],
                            p = g[1],
                            f = (0, l.useCallback)(
                                (e) => {
                                    e === r.S.Shrink && p(!0), b && b(e);
                                },
                                [b],
                            ),
                            w = (0, l.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            v = (0, l.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, {
                                size: t,
                                lineRef: i,
                                disabled: _,
                                isComplete: m,
                                withoutBounce: h && 0 === e,
                                baseStyles: u ? v : w,
                            }),
                            a >= 0 &&
                                s().createElement(o.O, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: f,
                                    freezed: c.freezed,
                                    onEndAnimation: d,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: c.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, a) => {
                a.d(t, { D: () => r });
                var l = a(6179),
                    s = a.n(l),
                    o = a(5913),
                    n = a(1848);
                const r = (0, l.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: i,
                        isComplete: _,
                        animationSettings: m,
                        onChangeAnimationState: c,
                        onEndAnimation: d,
                    }) => {
                        const b = (0, l.useMemo)(
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
                            s().createElement(n.t, { size: t, lineRef: r, disabled: i, isComplete: _, baseStyles: b }),
                            a >= 0 &&
                                s().createElement(o.x, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    freezed: m.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: c,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, a) => {
                a.d(t, { H: () => m });
                var l = a(6179),
                    s = a.n(l),
                    o = a(7736),
                    n = a(828),
                    r = a(538);
                const i = ['onComplete', 'onEndAnimation'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = (0, l.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                l,
                                s = {},
                                o = Object.keys(e);
                            for (l = 0; l < o.length; l++) (a = o[l]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, i);
                    const c = (0, l.useState)(!1),
                        d = c[0],
                        b = c[1],
                        h = (0, l.useCallback)(() => {
                            const e = 100 === m.to;
                            e !== d && b(e), e && t && t(), a && a();
                        }, [d, t, a, m.to]);
                    switch (m.animationSettings.type) {
                        case o.r.Simple:
                            return s().createElement(n.D, _({}, m, { onEndAnimation: h, isComplete: d }));
                        case o.r.Growing:
                            return s().createElement(r.F, _({}, m, { onEndAnimation: h, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                let l, s;
                a.d(t, { S: () => l, V: () => s }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(l || (l = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(s || (s = {}));
            },
            2386: (e, t, a) => {
                a.d(t, { F: () => i });
                var l = a(6179),
                    s = a.n(l),
                    o = a(6736);
                const n = ['onEndAnimation'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const i = (0, l.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                l,
                                s = {},
                                o = Object.keys(e);
                            for (l = 0; l < o.length; l++) (a = o[l]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, n);
                    const i = (0, l.useRef)({}),
                        _ = (0, l.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        m = 'number' == typeof i.current.from ? i.current.from : a.from;
                    return (
                        (i.current.from = m),
                        s().createElement(o.H, r({}, a, { onEndAnimation: _, key: `${m}-${a.to}`, from: m }))
                    );
                });
            },
            5680: (e, t, a) => {
                a.d(t, { M: () => n });
                var l = a(6179),
                    s = a.n(l),
                    o = a(1848);
                const n = ({ size: e, value: t, lineRef: a, disabled: n, onComplete: r }) => {
                    const i = (0, l.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        _ = 100 === t;
                    return (
                        (0, l.useEffect)(() => {
                            _ && r && r();
                        }, [_, r]),
                        s().createElement(o.t, { size: e, disabled: n, baseStyles: i, isComplete: _, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                a.d(t, { Gh: () => s, VQ: () => l });
                const l = (e) => ({
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
            7736: (e, t, a) => {
                let l, s;
                a.d(t, { $: () => l, r: () => s }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(s || (s = {}));
            },
            1635: (e, t, a) => {
                a.d(t, { S: () => n });
                var l = a(6179),
                    s = a(7515);
                const o = (e, t, a) => {
                        if ('number' == typeof a) {
                            return ((0, s.u)(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    n = (e, t, a) =>
                        (0, l.useMemo)(() => {
                            const l = ((0, s.u)(0, t, e) / t) * 100;
                            return { value: l, deltaFrom: o(l, t, a) };
                        }, [a, t, e]);
            },
            7515: (e, t, a) => {
                a.d(t, { u: () => l });
                const l = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            122: (e, t, a) => {
                a.d(t, { F: () => l });
                const l = (e, t) => {
                    let a;
                    const l = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        'function' == typeof a && a(), clearTimeout(l);
                    };
                };
            },
            9485: (e, t, a) => {
                a.d(t, { wD: () => l });
                a(8546);
                const l = (e, t, a = '') => {
                    const l = a.length > 0 ? `_${a}` : a,
                        s = e.$dyn(`c_${t}${l}`),
                        o = String(t).slice(-1),
                        n = e.$dyn(`default_${o}${l}`);
                    return s || n;
                };
            },
            8596: (e, t, a) => {
                var l = a(6483),
                    s = a.n(l),
                    o = a(6179),
                    n = a.n(o);
                const r = (e, t) => {
                    const a = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            a = e.path.$dyn('default');
                        return t || a;
                    })(e).$dyn(`${t.name}${a}`);
                };
                let i;
                !(function (e) {
                    (e.Season = 'season'), (e.Chapter = 'chapter');
                })(i || (i = {}));
                const _ = {
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
                var m = a(9485);
                const c = {
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
                        size: t,
                        isGold: a,
                        isForRewardScreen: l,
                        curState: o,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const _ = s()(c.base, c[`base__${t}`]),
                            m = s()(
                                c.text,
                                c.text__filtered,
                                c[`text__${t}`],
                                c[`text__${o}`],
                                i && c.text__hideWithDelay,
                                r && c.text__new,
                                l && c.text__rewardScreen,
                            ),
                            d = s()(
                                c.textWithBlend,
                                r && c.text__new,
                                i && c.text__hideWithDelay,
                                c[`textWithBlend__${o}`],
                            ),
                            b = s()(c.text, c.text__blended, c[`text__${t}`], l && c.text__rewardScreen),
                            h = s()(
                                c.textMask,
                                a && c.textMask__gold,
                                l && c.textMask__animated,
                                a && l && c.textMask__goldContrast,
                                c[`textMask__${t}`],
                            );
                        return n().createElement(
                            'div',
                            { className: _ },
                            n().createElement('div', { className: m }, e),
                            n().createElement(
                                'div',
                                { className: d },
                                n().createElement('div', { className: b }, e),
                                n().createElement('div', { className: h }),
                            ),
                        );
                    };
                var b = a(8546);
                const h = {
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
                        const a = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case b.$u.Small:
                                    return 'l';
                                case b.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${a}`;
                    },
                    u = (0, o.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: l,
                            hasProgression: o,
                            isGolden: _,
                            labelAnimation: c,
                            newLabelAnimation: u,
                            isChapterChosen: p = !1,
                            chapterID: f = 0,
                            seasonNum: w = -1,
                            isProgressionCompleted: v = !1,
                            hasBeenActive: E = !1,
                            isChapterSelection: L = !1,
                            isProgression: S = !1,
                        }) => {
                            let x = '',
                                $ = '';
                            a === b.$u.Small
                                ? ((x = 'Small'), ($ = '__small'))
                                : a === b.$u.Micro && ((x = 'Micro'), ($ = '__micro'));
                            const P = l === b.Bq.SwitchedChapterRightNow,
                                C = l === b.Bq.CompletedRightNow,
                                y = ((e, t, a, l, s) => (e || s ? t || !a : t || !l))(L, v, E, p, S),
                                B = !S && !L;
                            return n().createElement(
                                n().Fragment,
                                null,
                                y
                                    ? n().createElement('div', {
                                          className: s()(h.icon, $ && h[`icon${$}`], C && h[`icon__animated${x}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = g(_, a);
                                                  if (B) {
                                                      if (v) {
                                                          const a = { path: e.icon, name: i.Season, id: w };
                                                          return r(a, { name: 'icon', postfix: t });
                                                      }
                                                      if (!p) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, m.wD)(e.chapterIcons, f, t);
                                              })()})`,
                                          },
                                      })
                                    : n().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  h.label,
                                                  h[`label${$}`],
                                                  P && h.label__new,
                                                  P && h[`label__new${x}`],
                                                  !C && v && h.label__disabled,
                                                  h[`label__${c}${x}`],
                                                  o && h[`label__hasProgress${x}`],
                                                  o && h[`label__hasProgress${x}${S ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          n().createElement(d, {
                                              level: t,
                                              size: a,
                                              isGold: _,
                                              isFirstLevel: P,
                                              curState: c,
                                              showProgressionCompleted: C,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                h.label,
                                                h[`label${$}`],
                                                P && h.label__new,
                                                P && h[`label__new${x}`],
                                                h[`label__${u}${x}`],
                                                o && h[`label__hasProgress${x}`],
                                            ),
                                        },
                                        n().createElement(d, {
                                            level: e,
                                            size: a,
                                            isGold: _,
                                            isFirstLevel: P,
                                            curState: u,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var p = a(1975);
                const f = {
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
                    w = (0, o.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: l,
                            size: o,
                        }) => {
                            const r = s()(f.base, f[`base__${o}`], a && f.base__completed, !a && l && f.base__hidden);
                            return n().createElement(
                                'div',
                                { className: r },
                                n().createElement(p.ko, {
                                    key: e.to,
                                    size: p.$u.Small,
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
                                    var a = arguments[t];
                                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                let E, L;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(E || (E = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(L || (L = {}));
                const S = (e, t, a, l, s) => {
                        const o = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: l },
                            n = e ? E.Open : E.Closed,
                            _ = ((e, t) =>
                                e
                                    ? L.Gold
                                    : t === b.Bq.Completed || t === b.Bq.CompletedRightNow
                                      ? L.Completed
                                      : L.Initial)(t, a),
                            m = s.length > 0 ? `_${s}` : '';
                        return { backgroundImage: `url(${r(o, { name: 'emblem', postfix: `${n}_${_}${m}` })})` };
                    },
                    x = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${r(a, { name: 'extra', postfix: t })})` };
                    };
                (0, o.memo)((e) => {
                    const t = e.progression,
                        a = e.size,
                        l = e.battlePassState,
                        o = e.hasBattlePass,
                        r = e.isChapterChosen,
                        i = e.hasBeenActive,
                        m = void 0 !== i && i,
                        c = e.isChapterSelection,
                        d = void 0 !== c && c,
                        h = e.isOpen,
                        g = void 0 !== h && h,
                        p = e.isProgression,
                        f = void 0 !== p && p,
                        E = e.showProgressBar,
                        L = void 0 === E || E,
                        $ = e.isExtra,
                        P = void 0 !== $ && $,
                        C = e.chapterID,
                        y = e.seasonNum,
                        B = ((e) => {
                            switch (e) {
                                case b.$u.Small:
                                    return 'small';
                                case b.$u.Micro:
                                    return 'micro';
                                default:
                                    return '';
                            }
                        })(a),
                        M = l === b.Bq.CompletedRightNow,
                        k = o || l === b.Bq.Bought,
                        I = (l === b.Bq.Completed || M) && k,
                        D = (l === b.Bq.Completed || M) && !k,
                        N = I || D,
                        A = void 0 !== t.from,
                        O = L && ((A && r) || m);
                    return n().createElement(
                        'div',
                        { className: _.base },
                        P &&
                            n().createElement('div', {
                                className: s()(_.extra, B && _[`extra__${B}`]),
                                style: x(y, B),
                            }),
                        n().createElement(
                            'div',
                            { className: s()(_.image, B && _[`image__${B}`]), style: S(g, k, l, C, B) },
                            l !== b.Bq.AwaitSeason &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        u,
                                        v(
                                            {
                                                hasProgression: A,
                                                isGolden: k,
                                                isProgressionCompleted: N,
                                                isChapterChosen: r,
                                                hasBeenActive: m,
                                                isChapterSelection: d,
                                                isProgression: f,
                                            },
                                            e,
                                            t,
                                        ),
                                    ),
                                    O &&
                                        n().createElement(w, {
                                            key: t.to,
                                            progression: t,
                                            showProgressionCompleted: M,
                                            isProgressionCompleted: N,
                                            size: a,
                                        }),
                                ),
                        ),
                    );
                });
            },
            8546: (e, t, a) => {
                let l, s, o, n;
                a.d(t, { $u: () => l, Bq: () => o }),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(l || (l = {})),
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
            2468: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = {
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
                a.d(t, { Z: () => l });
                const l = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                a.d(t, { Z: () => l });
                const l = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
        },
        a = {};
    function l(e) {
        var s = a[e];
        if (void 0 !== s) return s.exports;
        var o = (a[e] = { exports: {} });
        return t[e](o, o.exports, l), o.exports;
    }
    (l.m = t),
        (e = []),
        (l.O = (t, a, s, o) => {
            if (!a) {
                var n = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [a, s, o] = e[m], r = !0, i = 0; i < a.length; i++)
                        (!1 & o || n >= o) && Object.keys(l.O).every((e) => l.O[e](a[i]))
                            ? a.splice(i--, 1)
                            : ((r = !1), o < n && (n = o));
                    if (r) {
                        e.splice(m--, 1);
                        var _ = s();
                        void 0 !== _ && (t = _);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > o; m--) e[m] = e[m - 1];
            e[m] = [a, s, o];
        }),
        (l.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return l.d(t, { a: t }), t;
        }),
        (l.d = (e, t) => {
            for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (l.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l.j = 1730),
        (() => {
            var e = { 1730: 0 };
            l.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var s,
                        o,
                        [n, r, i] = a,
                        _ = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (s in r) l.o(r, s) && (l.m[s] = r[s]);
                        if (i) var m = i(l);
                    }
                    for (t && t(a); _ < n.length; _++) (o = n[_]), l.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return l.O(m);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var s = l.O(void 0, [1519], () => l(8596));
    s = l.O(s);
})();
