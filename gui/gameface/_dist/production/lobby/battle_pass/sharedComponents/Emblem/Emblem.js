(() => {
    'use strict';
    var e,
        a = {
            1975: (e, a, t) => {
                t.d(a, { $u: () => c.$, ko: () => g });
                var l = t(6483),
                    s = t.n(l),
                    n = t(6179),
                    o = t.n(n),
                    r = t(2468),
                    i = t(7442),
                    _ = t(2407),
                    m = t(156),
                    c = t(7736),
                    d = t(1635);
                t(6823);
                const b = m.Gh,
                    h = {
                        freezed: !1,
                        withStack: !1,
                        type: c.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: a = b,
                            size: t = c.$.Default,
                            animationSettings: l = h,
                            disabled: n = !1,
                            withoutBackground: g = !1,
                            value: u,
                            deltaFrom: p,
                            lineRef: f,
                            onChangeAnimationState: w,
                            onEndAnimation: v,
                            onComplete: E,
                        }) => {
                            const L = (0, d.S)(u, e, p);
                            return o().createElement(
                                'div',
                                { className: s()(r.Z.base, r.Z[`base__${t}`]), style: (0, m.VQ)(a) },
                                !g && o().createElement(i.J, { size: t }),
                                o().createElement(_.r, {
                                    size: t,
                                    lineRef: f,
                                    disabled: n,
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
            7442: (e, a, t) => {
                t.d(a, { J: () => _ });
                var l = t(6179),
                    s = t.n(l),
                    n = t(6483),
                    o = t.n(n),
                    r = t(7736),
                    i = t(2468);
                const _ = ({ size: e = r.$.Default }) => {
                    const a = o()(i.Z.background, i.Z[`background__${e}`]);
                    return s().createElement('div', { className: a });
                };
            },
            8150: (e, a, t) => {
                t.d(a, { $: () => i });
                var l = t(6179),
                    s = t.n(l),
                    n = t(6483),
                    o = t.n(n),
                    r = t(8804);
                const i = ({ size: e }) => {
                    const a = o()(r.Z.base, r.Z[`base__${e}`]);
                    return s().createElement('div', { className: a });
                };
            },
            2407: (e, a, t) => {
                t.d(a, { r: () => _ });
                var l = t(6179),
                    s = t.n(l),
                    n = t(5680),
                    o = t(6736),
                    r = t(2386);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var l in t) ({}).hasOwnProperty.call(t, l) && (e[l] = t[l]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const _ = (0, l.memo)(
                    ({
                        size: e,
                        value: a,
                        lineRef: t,
                        disabled: l,
                        deltaFrom: _,
                        animationSettings: m,
                        onEndAnimation: c,
                        onChangeAnimationState: d,
                        onComplete: b,
                    }) => {
                        if (_ === a)
                            return s().createElement(n.M, {
                                key: `${_}-${a}`,
                                size: e,
                                value: a,
                                lineRef: t,
                                disabled: l,
                                onComplete: b,
                            });
                        const h = {
                            from: _,
                            to: a,
                            size: e,
                            lineRef: t,
                            disabled: l,
                            animationSettings: m,
                            onComplete: b,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        };
                        return m.withStack
                            ? s().createElement(r.F, h)
                            : s().createElement(o.H, i({ key: `${_}-${a}` }, h));
                    },
                );
            },
            1848: (e, a, t) => {
                t.d(a, { t: () => _ });
                var l = t(6179),
                    s = t.n(l),
                    n = t(6483),
                    o = t.n(n),
                    r = t(8150),
                    i = t(6664);
                const _ = (0, l.memo)(
                    ({ size: e, lineRef: a, disabled: t, baseStyles: l, isComplete: n, withoutBounce: _ }) => {
                        const m = o()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                t && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                _ && i.Z.base__withoutBounce,
                            ),
                            c = !t && !n;
                        return s().createElement(
                            'div',
                            { className: m, style: l, ref: a },
                            s().createElement('div', { className: i.Z.pattern }),
                            s().createElement('div', { className: i.Z.gradient }),
                            c && s().createElement(r.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, a, t) => {
                t.d(a, { O: () => h });
                var l = t(6483),
                    s = t.n(l),
                    n = t(122),
                    o = t(6179),
                    r = t.n(o),
                    i = t(8150),
                    _ = t(6823),
                    m = t(6147);
                const c = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, a) => (e ? { right: 100 - a + '%' } : { left: `${a}%` }),
                    b = (e) => ({ transitionDuration: `${e}ms` }),
                    h = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: a,
                            freezed: t,
                            from: l,
                            size: h,
                            to: g,
                            onEndAnimation: u,
                            onChangeAnimationState: p,
                            className: f,
                        }) => {
                            const w = g < l,
                                v = (0, o.useState)(_.S.Idle),
                                E = v[0],
                                L = v[1],
                                S = E === _.S.End,
                                x = E === _.S.Idle,
                                $ = E === _.S.Grow,
                                P = E === _.S.Shrink,
                                C = (0, o.useCallback)(
                                    (e) => {
                                        L(e), p && p(e);
                                    },
                                    [p],
                                ),
                                y = (0, o.useCallback)(
                                    (e, a) =>
                                        (0, n.F)(() => {
                                            C(e);
                                        }, a),
                                    [C],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return x
                                        ? y(_.S.Grow, a)
                                        : $
                                          ? y(_.S.Shrink, e)
                                          : P
                                            ? y(_.S.End, e)
                                            : void (S && u && u());
                            }, [y, t, S, $, x, P, u, a, e]);
                            const B = (0, o.useMemo)(() => Object.assign({ width: '100%' }, b(e), c(w)), [w, e]),
                                M = (0, o.useMemo)(() => Object.assign({ width: '0%' }, b(e), c(w)), [w, e]),
                                k = (0, o.useMemo)(() => Object.assign({ width: '0%' }, d(w, l), b(e)), [l, w, e]),
                                I = (0, o.useMemo)(
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
            5913: (e, a, t) => {
                t.d(a, { x: () => _ });
                var l = t(6179),
                    s = t.n(l),
                    n = t(122),
                    o = t(6823),
                    r = t(8150),
                    i = t(9919);
                const _ = (0, l.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: a,
                        freezed: t,
                        from: _,
                        size: m,
                        to: c,
                        onEndAnimation: d,
                        onChangeAnimationState: b,
                    }) => {
                        const h = c < _,
                            g = (0, l.useState)(o.V.Idle),
                            u = g[0],
                            p = g[1],
                            f = u === o.V.In,
                            w = u === o.V.End,
                            v = u === o.V.Idle,
                            E = (0, l.useCallback)(
                                (e) => {
                                    p(e), b && b(e);
                                },
                                [b],
                            );
                        (0, l.useEffect)(() => {
                            if (v && !t) {
                                const e = a;
                                return (0, n.F)(() => {
                                    E(o.V.In);
                                }, e);
                            }
                        }, [E, t, v, a]),
                            (0, l.useEffect)(() => {
                                if (f) {
                                    const t = e + a;
                                    return (0, n.F)(() => {
                                        d && d(), E(o.V.End);
                                    }, t);
                                }
                            }, [E, f, d, a, e]);
                        const L = (0, l.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${a}ms`,
                                    [h ? 'left' : 'right']: '0',
                                }),
                                [h, a, e],
                            ),
                            S = (0, l.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${a}ms`,
                                    [h ? 'left' : 'right']: '0',
                                }),
                                [h, a, e],
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
            538: (e, a, t) => {
                t.d(a, { F: () => i });
                var l = t(6179),
                    s = t.n(l),
                    n = t(2434),
                    o = t(1848),
                    r = t(6823);
                const i = (0, l.memo)(
                    ({
                        to: e,
                        size: a,
                        from: t,
                        lineRef: i,
                        disabled: _,
                        isComplete: m,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: b,
                    }) => {
                        const h = e < t,
                            g = (0, l.useState)(!1),
                            u = g[0],
                            p = g[1],
                            f = (0, l.useCallback)(
                                (e) => {
                                    e === r.S.Shrink && p(!0), b && b(e);
                                },
                                [b],
                            ),
                            w = (0, l.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            v = (0, l.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(o.t, {
                                size: a,
                                lineRef: i,
                                disabled: _,
                                isComplete: m,
                                withoutBounce: h && 0 === e,
                                baseStyles: u ? v : w,
                            }),
                            t >= 0 &&
                                s().createElement(n.O, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: f,
                                    freezed: c.freezed,
                                    onEndAnimation: d,
                                    from: t,
                                    size: a,
                                    to: e,
                                    className: c.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, a, t) => {
                t.d(a, { D: () => r });
                var l = t(6179),
                    s = t.n(l),
                    n = t(5913),
                    o = t(1848);
                const r = (0, l.memo)(
                    ({
                        to: e,
                        size: a,
                        from: t,
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
                            s().createElement(o.t, { size: a, lineRef: r, disabled: i, isComplete: _, baseStyles: b }),
                            t >= 0 &&
                                s().createElement(n.x, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    freezed: m.freezed,
                                    from: t,
                                    size: a,
                                    to: e,
                                    onChangeAnimationState: c,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, a, t) => {
                t.d(a, { H: () => m });
                var l = t(6179),
                    s = t.n(l),
                    n = t(7736),
                    o = t(828),
                    r = t(538);
                const i = ['onComplete', 'onEndAnimation'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var l in t) ({}).hasOwnProperty.call(t, l) && (e[l] = t[l]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const m = (0, l.memo)((e) => {
                    let a = e.onComplete,
                        t = e.onEndAnimation,
                        m = (function (e, a) {
                            if (null == e) return {};
                            var t = {};
                            for (var l in e)
                                if ({}.hasOwnProperty.call(e, l)) {
                                    if (a.indexOf(l) >= 0) continue;
                                    t[l] = e[l];
                                }
                            return t;
                        })(e, i);
                    const c = (0, l.useState)(!1),
                        d = c[0],
                        b = c[1],
                        h = (0, l.useCallback)(() => {
                            const e = 100 === m.to;
                            e !== d && b(e), e && a && a(), t && t();
                        }, [d, a, t, m.to]);
                    switch (m.animationSettings.type) {
                        case n.r.Simple:
                            return s().createElement(o.D, _({}, m, { onEndAnimation: h, isComplete: d }));
                        case n.r.Growing:
                            return s().createElement(r.F, _({}, m, { onEndAnimation: h, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, a, t) => {
                let l, s;
                t.d(a, { S: () => l, V: () => s }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(l || (l = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(s || (s = {}));
            },
            2386: (e, a, t) => {
                t.d(a, { F: () => i });
                var l = t(6179),
                    s = t.n(l),
                    n = t(6736);
                const o = ['onEndAnimation'];
                function r() {
                    return (
                        (r = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var l in t) ({}).hasOwnProperty.call(t, l) && (e[l] = t[l]);
                                  }
                                  return e;
                              }),
                        r.apply(null, arguments)
                    );
                }
                const i = (0, l.memo)((e) => {
                    let a = e.onEndAnimation,
                        t = (function (e, a) {
                            if (null == e) return {};
                            var t = {};
                            for (var l in e)
                                if ({}.hasOwnProperty.call(e, l)) {
                                    if (a.indexOf(l) >= 0) continue;
                                    t[l] = e[l];
                                }
                            return t;
                        })(e, o);
                    const i = (0, l.useRef)({}),
                        _ = (0, l.useCallback)(() => {
                            (i.current.from = void 0), a && a();
                        }, [a]),
                        m = 'number' == typeof i.current.from ? i.current.from : t.from;
                    return (
                        (i.current.from = m),
                        s().createElement(n.H, r({}, t, { onEndAnimation: _, key: `${m}-${t.to}`, from: m }))
                    );
                });
            },
            5680: (e, a, t) => {
                t.d(a, { M: () => o });
                var l = t(6179),
                    s = t.n(l),
                    n = t(1848);
                const o = ({ size: e, value: a, lineRef: t, disabled: o, onComplete: r }) => {
                    const i = (0, l.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                        _ = 100 === a;
                    return (
                        (0, l.useEffect)(() => {
                            _ && r && r();
                        }, [_, r]),
                        s().createElement(n.t, { size: e, disabled: o, baseStyles: i, isComplete: _, lineRef: t })
                    );
                };
            },
            156: (e, a, t) => {
                t.d(a, { Gh: () => s, VQ: () => l });
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
            7736: (e, a, t) => {
                let l, s;
                t.d(a, { $: () => l, r: () => s }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(s || (s = {}));
            },
            1635: (e, a, t) => {
                t.d(a, { S: () => o });
                var l = t(6179),
                    s = t(7515);
                const n = (e, a, t) => {
                        if ('number' == typeof t) {
                            return ((0, s.u)(0, a, t) / a) * 100;
                        }
                        return e;
                    },
                    o = (e, a, t) =>
                        (0, l.useMemo)(() => {
                            const l = ((0, s.u)(0, a, e) / a) * 100;
                            return { value: l, deltaFrom: n(l, a, t) };
                        }, [t, a, e]);
            },
            7515: (e, a, t) => {
                t.d(a, { u: () => l });
                const l = (e, a, t) => (t < e ? e : t > a ? a : t);
            },
            122: (e, a, t) => {
                t.d(a, { F: () => l });
                const l = (e, a) => {
                    let t;
                    const l = setTimeout(() => {
                        t = e();
                    }, a);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(l);
                    };
                };
            },
            9485: (e, a, t) => {
                t.d(a, { wD: () => l });
                t(8546);
                const l = (e, a, t = '') => {
                    const l = t.length > 0 ? `_${t}` : t,
                        s = e.$dyn(`c_${a}${l}`),
                        n = String(a).slice(-1),
                        o = e.$dyn(`default_${n}${l}`);
                    return s || o;
                };
            },
            8596: (e, a, t) => {
                var l = t(6483),
                    s = t.n(l),
                    n = t(6179),
                    o = t.n(n);
                const r = (e, a) => {
                    const t = a.postfix ? `_${a.postfix}` : '';
                    return ((e) => {
                        const a = e.path.$dyn(`${e.name}_${e.id}`),
                            t = e.path.$dyn('default');
                        return a || t;
                    })(e).$dyn(`${a.name}${t}`);
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
                    image__clickable: 'Emblem_image__clickable_b7',
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
                var m = t(9485);
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
                        size: a,
                        isGold: t,
                        isForRewardScreen: l,
                        curState: n,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const _ = s()(c.base, c[`base__${a}`]),
                            m = s()(
                                c.text,
                                c.text__filtered,
                                c[`text__${a}`],
                                c[`text__${n}`],
                                i && c.text__hideWithDelay,
                                r && c.text__new,
                                l && c.text__rewardScreen,
                            ),
                            d = s()(
                                c.textWithBlend,
                                r && c.text__new,
                                i && c.text__hideWithDelay,
                                c[`textWithBlend__${n}`],
                            ),
                            b = s()(c.text, c.text__blended, c[`text__${a}`], l && c.text__rewardScreen),
                            h = s()(
                                c.textMask,
                                t && c.textMask__gold,
                                l && c.textMask__animated,
                                t && l && c.textMask__goldContrast,
                                c[`textMask__${a}`],
                            );
                        return o().createElement(
                            'div',
                            { className: _ },
                            o().createElement('div', { className: m }, e),
                            o().createElement(
                                'div',
                                { className: d },
                                o().createElement('div', { className: b }, e),
                                o().createElement('div', { className: h }),
                            ),
                        );
                    };
                var b = t(8546);
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
                    g = (e, a) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case b.$u.Small:
                                    return 'l';
                                case b.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(a)}${t}`;
                    },
                    u = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: a,
                            size: t,
                            battlePassState: l,
                            hasProgression: n,
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
                            t === b.$u.Small
                                ? ((x = 'Small'), ($ = '__small'))
                                : t === b.$u.Micro && ((x = 'Micro'), ($ = '__micro'));
                            const P = l === b.Bq.SwitchedChapterRightNow,
                                C = l === b.Bq.CompletedRightNow,
                                y = ((e, a, t, l, s) => (e || s ? a || !t : a || !l))(L, v, E, p, S),
                                B = !S && !L;
                            return o().createElement(
                                o().Fragment,
                                null,
                                y
                                    ? o().createElement('div', {
                                          className: s()(h.icon, $ && h[`icon${$}`], C && h[`icon__animated${x}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      a = g(_, t);
                                                  if (B) {
                                                      if (v) {
                                                          const t = { path: e.icon, name: i.Season, id: w };
                                                          return r(t, { name: 'icon', postfix: a });
                                                      }
                                                      if (!p) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, m.wD)(e.chapterIcons, f, a);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  h.label,
                                                  h[`label${$}`],
                                                  P && h.label__new,
                                                  P && h[`label__new${x}`],
                                                  !C && v && h.label__disabled,
                                                  h[`label__${c}${x}`],
                                                  n && h[`label__hasProgress${x}`],
                                                  n && h[`label__hasProgress${x}${S ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(d, {
                                              level: a,
                                              size: t,
                                              isGold: _,
                                              isFirstLevel: P,
                                              curState: c,
                                              showProgressionCompleted: C,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                h.label,
                                                h[`label${$}`],
                                                P && h.label__new,
                                                P && h[`label__new${x}`],
                                                h[`label__${u}${x}`],
                                                n && h[`label__hasProgress${x}`],
                                            ),
                                        },
                                        o().createElement(d, {
                                            level: e,
                                            size: t,
                                            isGold: _,
                                            isFirstLevel: P,
                                            curState: u,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var p = t(1975);
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
                    w = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: a = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: l,
                            size: n,
                        }) => {
                            const r = s()(f.base, f[`base__${n}`], t && f.base__completed, !t && l && f.base__hidden);
                            return o().createElement(
                                'div',
                                { className: r },
                                o().createElement(p.ko, {
                                    key: e.to,
                                    size: p.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: a,
                                }),
                            );
                        },
                    );
                function v() {
                    return (
                        (v = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var a = 1; a < arguments.length; a++) {
                                      var t = arguments[a];
                                      for (var l in t) ({}).hasOwnProperty.call(t, l) && (e[l] = t[l]);
                                  }
                                  return e;
                              }),
                        v.apply(null, arguments)
                    );
                }
                let E, L;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(E || (E = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(L || (L = {}));
                const S = (e, a, t, l, s) => {
                        const n = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: l },
                            o = e ? E.Open : E.Closed,
                            _ = ((e, a) =>
                                e
                                    ? L.Gold
                                    : a === b.Bq.Completed || a === b.Bq.CompletedRightNow
                                      ? L.Completed
                                      : L.Initial)(a, t),
                            m = s.length > 0 ? `_${s}` : '';
                        return { backgroundImage: `url(${r(n, { name: 'emblem', postfix: `${o}_${_}${m}` })})` };
                    },
                    x = (e, a) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${r(t, { name: 'extra', postfix: a })})` };
                    };
                (0, n.memo)((e) => {
                    const a = e.progression,
                        t = e.size,
                        l = e.battlePassState,
                        n = e.hasBattlePass,
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
                        B = e.clickable,
                        M = void 0 === B || B,
                        k = ((e) => {
                            switch (e) {
                                case b.$u.Small:
                                    return 'small';
                                case b.$u.Micro:
                                    return 'micro';
                                default:
                                    return '';
                            }
                        })(t),
                        I = l === b.Bq.CompletedRightNow,
                        D = n || l === b.Bq.Bought,
                        N = (l === b.Bq.Completed || I) && D,
                        A = (l === b.Bq.Completed || I) && !D,
                        O = N || A,
                        z = void 0 !== a.from,
                        R = L && ((z && r) || m);
                    return o().createElement(
                        'div',
                        { className: _.base },
                        P &&
                            o().createElement('div', {
                                className: s()(_.extra, k && _[`extra__${k}`]),
                                style: x(y, k),
                            }),
                        o().createElement(
                            'div',
                            {
                                className: s()(_.image, k && _[`image__${k}`], M && _.image__clickable),
                                style: S(g, D, l, C, k),
                            },
                            l !== b.Bq.AwaitSeason &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        u,
                                        v(
                                            {
                                                hasProgression: z,
                                                isGolden: D,
                                                isProgressionCompleted: O,
                                                isChapterChosen: r,
                                                hasBeenActive: m,
                                                isChapterSelection: d,
                                                isProgression: f,
                                            },
                                            e,
                                            a,
                                        ),
                                    ),
                                    R &&
                                        o().createElement(w, {
                                            key: a.to,
                                            progression: a,
                                            showProgressionCompleted: I,
                                            isProgressionCompleted: O,
                                            size: t,
                                        }),
                                ),
                        ),
                    );
                });
            },
            8546: (e, a, t) => {
                let l, s, n, o;
                t.d(a, { $u: () => l, Bq: () => n }),
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
                    })(n || (n = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(o || (o = {}));
            },
            2468: (e, a, t) => {
                t.d(a, { Z: () => l });
                const l = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, a, t) => {
                t.d(a, { Z: () => l });
                const l = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, a, t) => {
                t.d(a, { Z: () => l });
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
            6147: (e, a, t) => {
                t.d(a, { Z: () => l });
                const l = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, a, t) => {
                t.d(a, { Z: () => l });
                const l = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
        },
        t = {};
    function l(e) {
        var s = t[e];
        if (void 0 !== s) return s.exports;
        var n = (t[e] = { exports: {} });
        return a[e](n, n.exports, l), n.exports;
    }
    (l.m = a),
        (e = []),
        (l.O = (a, t, s, n) => {
            if (!t) {
                var o = 1 / 0;
                for (m = 0; m < e.length; m++) {
                    for (var [t, s, n] = e[m], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || o >= n) && Object.keys(l.O).every((e) => l.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        e.splice(m--, 1);
                        var _ = s();
                        void 0 !== _ && (a = _);
                    }
                }
                return a;
            }
            n = n || 0;
            for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
            e[m] = [t, s, n];
        }),
        (l.n = (e) => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return l.d(a, { a }), a;
        }),
        (l.d = (e, a) => {
            for (var t in a) l.o(a, t) && !l.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
        }),
        (l.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
        (l.j = 1730),
        (() => {
            var e = { 1730: 0 };
            l.O.j = (a) => 0 === e[a];
            var a = (a, t) => {
                    var s,
                        n,
                        [o, r, i] = t,
                        _ = 0;
                    if (o.some((a) => 0 !== e[a])) {
                        for (s in r) l.o(r, s) && (l.m[s] = r[s]);
                        if (i) var m = i(l);
                    }
                    for (a && a(t); _ < o.length; _++) (n = o[_]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return l.O(m);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(a.bind(null, 0)), (t.push = a.bind(null, t.push.bind(t)));
        })();
    var s = l.O(void 0, [1519], () => l(8596));
    s = l.O(s);
})();
