(() => {
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => o });
                var a = t(6179),
                    r = t.n(a),
                    n = t(4179);
                class o extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const u = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var a = t(6179),
                    r = t.n(a),
                    n = t(6483),
                    o = t.n(n),
                    s = t(3649),
                    i = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: n = s.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              a.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  r().createElement(
                                      'div',
                                      { className: o()(i.Z.base, t), key: `${u}-${l}` },
                                      (0, s.Uw)(u, n, e).map((e, u) =>
                                          r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
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
            1975: (e, u, t) => {
                'use strict';
                t.d(u, { $u: () => c.$, ko: () => A });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n),
                    s = t(2468),
                    i = t(7442),
                    l = t(2407),
                    _ = t(156),
                    c = t(7736),
                    d = t(1635);
                t(6823);
                const m = _.Gh,
                    E = {
                        freezed: !1,
                        withStack: !1,
                        type: c.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = m,
                            size: t = c.$.Default,
                            animationSettings: a = E,
                            disabled: n = !1,
                            withoutBackground: A = !1,
                            value: F,
                            deltaFrom: C,
                            lineRef: b,
                            onChangeAnimationState: D,
                            onEndAnimation: h,
                            onComplete: g,
                        }) => {
                            const B = (0, d.S)(F, e, C);
                            return o().createElement(
                                'div',
                                { className: r()(s.Z.base, s.Z[`base__${t}`]), style: (0, _.VQ)(u) },
                                !A && o().createElement(i.J, { size: t }),
                                o().createElement(l.r, {
                                    size: t,
                                    lineRef: b,
                                    disabled: n,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: h,
                                    onChangeAnimationState: D,
                                    onComplete: g,
                                }),
                            );
                        },
                    );
            },
            7442: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => l });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n),
                    s = t(2468),
                    i = t(7736);
                const l = ({ size: e = i.$.Default }) =>
                    o().createElement('div', { className: r()(s.Z.background, s.Z[`background__${e}`]) });
            },
            8150: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => i });
                var a = t(6179),
                    r = t.n(a),
                    n = t(6483),
                    o = t.n(n),
                    s = t(8804);
                const i = ({ size: e }) => {
                    const u = o()(s.Z.base, s.Z[`base__${e}`]);
                    return r().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                'use strict';
                t.d(u, { r: () => l });
                var a = t(6179),
                    r = t.n(a),
                    n = t(5680),
                    o = t(6736),
                    s = t(2386);
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
                const l = (0, a.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: a,
                        deltaFrom: l,
                        animationSettings: _,
                        onEndAnimation: c,
                        onChangeAnimationState: d,
                        onComplete: m,
                    }) => {
                        if (l === u)
                            return r().createElement(n.M, {
                                key: `${l}-${u}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: a,
                                onComplete: m,
                            });
                        const E = {
                            from: l,
                            to: u,
                            size: e,
                            lineRef: t,
                            disabled: a,
                            animationSettings: _,
                            onComplete: m,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        };
                        return _.withStack
                            ? r().createElement(s.F, E)
                            : r().createElement(o.H, i({ key: `${l}-${u}` }, E));
                    },
                );
            },
            1848: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => l });
                var a = t(6179),
                    r = t.n(a),
                    n = t(6483),
                    o = t.n(n),
                    s = t(8150),
                    i = t(6664);
                const l = (0, a.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: l }) => {
                        const _ = o()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                t && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            c = !t && !n;
                        return r().createElement(
                            'div',
                            { className: _, style: a, ref: u },
                            r().createElement('div', { className: i.Z.pattern }),
                            r().createElement('div', { className: i.Z.gradient }),
                            c && r().createElement(s.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => E });
                var a = t(6483),
                    r = t.n(a),
                    n = t(122),
                    o = t(6179),
                    s = t.n(o),
                    i = t(8150),
                    l = t(6823),
                    _ = t(6147);
                const c = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: E,
                            to: A,
                            onEndAnimation: F,
                            onChangeAnimationState: C,
                            className: b,
                        }) => {
                            const D = A < a,
                                h = (0, o.useState)(l.S.Idle),
                                g = h[0],
                                B = h[1],
                                p = g === l.S.End,
                                v = g === l.S.Idle,
                                w = g === l.S.Grow,
                                f = g === l.S.Shrink,
                                S = (0, o.useCallback)(
                                    (e) => {
                                        B(e), C && C(e);
                                    },
                                    [C],
                                ),
                                L = (0, o.useCallback)(
                                    (e, u) =>
                                        (0, n.F)(() => {
                                            S(e);
                                        }, u),
                                    [S],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? L(l.S.Grow, u)
                                        : w
                                          ? L(l.S.Shrink, e)
                                          : f
                                            ? L(l.S.End, e)
                                            : void (p && F && F());
                            }, [L, t, p, w, v, f, F, u, e]);
                            const P = (0, o.useMemo)(() => Object.assign({ width: '100%' }, m(e), c(D)), [D, e]),
                                k = (0, o.useMemo)(() => Object.assign({ width: '0%' }, m(e), c(D)), [D, e]),
                                y = (0, o.useMemo)(() => Object.assign({ width: '0%' }, d(D, a), m(e)), [a, D, e]),
                                x = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, d(D, a), m(e)),
                                    [a, D, A, e],
                                );
                            if (p) return null;
                            const M = r()(_.Z.base, b, D && 0 === A && _.Z.base__withoutBounce);
                            return s().createElement(
                                'div',
                                { style: v ? y : x, className: M },
                                s().createElement(
                                    'div',
                                    { style: f ? k : P, className: _.Z.glow },
                                    s().createElement(i.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                'use strict';
                t.d(u, { x: () => l });
                var a = t(6179),
                    r = t.n(a),
                    n = t(122),
                    o = t(6823),
                    s = t(8150),
                    i = t(9919);
                const l = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: _,
                        to: c,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                    }) => {
                        const E = c < l,
                            A = (0, a.useState)(o.V.Idle),
                            F = A[0],
                            C = A[1],
                            b = F === o.V.In,
                            D = F === o.V.End,
                            h = F === o.V.Idle,
                            g = (0, a.useCallback)(
                                (e) => {
                                    C(e), m && m(e);
                                },
                                [m],
                            );
                        (0, a.useEffect)(() => {
                            if (h && !t) {
                                const e = u;
                                return (0, n.F)(() => {
                                    g(o.V.In);
                                }, e);
                            }
                        }, [g, t, h, u]),
                            (0, a.useEffect)(() => {
                                if (b) {
                                    const t = e + u;
                                    return (0, n.F)(() => {
                                        d && d(), g(o.V.End);
                                    }, t);
                                }
                            }, [g, b, d, u, e]);
                        const B = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, u, e],
                            ),
                            p = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, u, e],
                            ),
                            v = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(l - c)}%`, left: `${E ? c : l}%` }),
                                [l, E, c],
                            );
                        return D
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: i.Z.base, style: v },
                                  r().createElement(
                                      'div',
                                      { style: h ? B : p, className: i.Z.delta },
                                      r().createElement(s.$, { size: _ }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => i });
                var a = t(6179),
                    r = t.n(a),
                    n = t(2434),
                    o = t(1848),
                    s = t(6823);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: i,
                        disabled: l,
                        isComplete: _,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                    }) => {
                        const E = e < t,
                            A = (0, a.useState)(!1),
                            F = A[0],
                            C = A[1],
                            b = (0, a.useCallback)(
                                (e) => {
                                    e === s.S.Shrink && C(!0), m && m(e);
                                },
                                [m],
                            ),
                            D = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            h = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(o.t, {
                                size: u,
                                lineRef: i,
                                disabled: l,
                                isComplete: _,
                                withoutBounce: E && 0 === e,
                                baseStyles: F ? h : D,
                            }),
                            t >= 0 &&
                                r().createElement(n.O, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: b,
                                    freezed: c.freezed,
                                    onEndAnimation: d,
                                    from: t,
                                    size: u,
                                    to: e,
                                    className: c.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => s });
                var a = t(6179),
                    r = t.n(a),
                    n = t(5913),
                    o = t(1848);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: s,
                        disabled: i,
                        isComplete: l,
                        animationSettings: _,
                        onChangeAnimationState: c,
                        onEndAnimation: d,
                    }) => {
                        const m = (0, a.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${_.line.duration}ms`,
                                transitionDelay: `${_.line.delay}ms`,
                            }),
                            [_.line.delay, _.line.duration, e],
                        );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(o.t, { size: u, lineRef: s, disabled: i, isComplete: l, baseStyles: m }),
                            t >= 0 &&
                                r().createElement(n.x, {
                                    transitionDuration: _.delta.duration,
                                    transitionDelay: _.delta.delay,
                                    freezed: _.freezed,
                                    from: t,
                                    size: u,
                                    to: e,
                                    onChangeAnimationState: c,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => _ });
                var a = t(6179),
                    r = t.n(a),
                    n = t(7736),
                    o = t(828),
                    s = t(538);
                const i = ['onComplete', 'onEndAnimation'];
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
                const _ = (0, a.memo)((e) => {
                    let u = e.onComplete,
                        t = e.onEndAnimation,
                        _ = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, i);
                    const c = (0, a.useState)(!1),
                        d = c[0],
                        m = c[1],
                        E = (0, a.useCallback)(() => {
                            const e = 100 === _.to;
                            e !== d && m(e), e && u && u(), t && t();
                        }, [d, u, t, _.to]);
                    switch (_.animationSettings.type) {
                        case n.r.Simple:
                            return r().createElement(o.D, l({}, _, { onEndAnimation: E, isComplete: d }));
                        case n.r.Growing:
                            return r().createElement(s.F, l({}, _, { onEndAnimation: E, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
                'use strict';
                let a, r;
                t.d(u, { S: () => a, V: () => r }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(r || (r = {}));
            },
            2386: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => i });
                var a = t(6179),
                    r = t.n(a),
                    n = t(6736);
                const o = ['onEndAnimation'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, o);
                    const i = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            (i.current.from = void 0), u && u();
                        }, [u]),
                        _ = 'number' == typeof i.current.from ? i.current.from : t.from;
                    return (
                        (i.current.from = _),
                        r().createElement(n.H, s({}, t, { onEndAnimation: l, key: `${_}-${t.to}`, from: _ }))
                    );
                });
            },
            5680: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => o });
                var a = t(6179),
                    r = t.n(a),
                    n = t(1848);
                const o = ({ size: e, value: u, lineRef: t, disabled: o, onComplete: s }) => {
                    const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, a.useEffect)(() => {
                            l && s && s();
                        }, [l, s]),
                        r().createElement(n.t, { size: e, disabled: o, baseStyles: i, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                'use strict';
                t.d(u, { Gh: () => r, VQ: () => a });
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
            7736: (e, u, t) => {
                'use strict';
                let a, r;
                t.d(u, { $: () => a, r: () => r }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(r || (r = {}));
            },
            1635: (e, u, t) => {
                'use strict';
                t.d(u, { S: () => o });
                var a = t(7515),
                    r = t(6179);
                const n = (e, u, t) => {
                        if ('number' == typeof t) {
                            return ((0, a.u)(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    o = (e, u, t) =>
                        (0, r.useMemo)(() => {
                            const r = ((0, a.u)(0, u, e) / u) * 100;
                            return { value: r, deltaFrom: n(r, u, t) };
                        }, [t, u, e]);
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var a = t(2056),
                    r = t(6179),
                    n = t.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            _ = e.note,
                            c = e.alert,
                            d = e.args,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, o);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: _, alert: c });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [c, t, l, _, d]);
                        return n().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
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
                    r = t(4179),
                    n = t(6179);
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
                const i = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            C = e.decoratorId,
                            b = void 0 === C ? 0 : C,
                            D = e.isEnabled,
                            h = void 0 === D || D,
                            g = e.targetId,
                            B = void 0 === g ? 0 : g,
                            p = e.onShow,
                            v = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, o);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(() => B || (0, a.F)().resId, [B]),
                            L = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (i(t, b, { isMouseEvent: !0, on: !0, arguments: s(r) }, S),
                                    p && p(),
                                    (f.current.isVisible = !0));
                            }, [t, b, r, S, p]),
                            P = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        i(t, b, { on: !1 }, S),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, b, S, v]),
                            k = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === h && P();
                            }, [h, P]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        window.removeEventListener('mouseleave', P), P();
                                    }
                                ),
                                [P],
                            );
                        return h
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(L, E ? 100 : 400)),
                                                      l && l(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              P(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && P(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && P(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
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
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => s, onResize: () => n });
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${u}`,
                                        s = o[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    });
                var a = t(527);
                function r(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
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
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => n.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => h,
                        pxToRem: () => C,
                        remToPx: () => b,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    o = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: b(u.x), y: b(u.y) };
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
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    o = 32,
                    s = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(n, { isMouseEvent: !0, on: e });
                        },
                    };
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
            5521: (e, u, t) => {
                'use strict';
                let a, r;
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
            7727: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => r, G: () => a });
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
            3649: (e, u, t) => {
                'use strict';
                let a;
                function r(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                t.d(u, { BN: () => n, Uw: () => m, e: () => o, uF: () => r, v2: () => a }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    i = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    l = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? s : i, []),
                    _ = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? _(e)
                            : ((e, u = a.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return l(n, /( )/, u).forEach((e) => (t = t.concat(l(e, r, a.left)))), t;
                              })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : d(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => o, B0: () => i, ry: () => b });
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
                const r = a;
                var n = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    E = t(3138);
                const A = ['args'];
                function F(e, u, t, a, r, n, o) {
                    try {
                        var s = e[n](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(a, r);
                }
                const C = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function o(e) {
                                            F(n, a, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(n, a, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    h = () => D(i.CLOSE),
                    g = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var B = t(7572);
                const p = r.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                _ = s.y,
                                c = s.width,
                                d = s.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + o.x,
                                    y: E.O.view.pxToRem(_) + o.y,
                                    width: E.O.view.pxToRem(c),
                                    height: E.O.view.pxToRem(d),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: C(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, h);
                        },
                        handleViewEvent: D,
                        onBindingsReady: b,
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
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            1419: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
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
                        r = (function (e, u) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(i || (i = {}));
                const _ = o.O.client.getSize('rem'),
                    c = _.width,
                    d = _.height,
                    m = Object.assign({ width: c, height: d }, l(c, d, s)),
                    E = (0, a.createContext)(m),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, A);
                    const r = (0, a.useContext)(E),
                        o = r.extraLarge,
                        s = r.large,
                        i = r.medium,
                        l = r.small,
                        _ = r.extraSmall,
                        c = r.extraLargeWidth,
                        d = r.largeWidth,
                        m = r.mediumWidth,
                        F = r.smallWidth,
                        C = r.extraSmallWidth,
                        b = r.extraLargeHeight,
                        D = r.largeHeight,
                        h = r.mediumHeight,
                        g = r.smallHeight,
                        B = r.extraSmallHeight,
                        p = { extraLarge: b, large: D, medium: h, small: g, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && c) return n(u, t, p);
                        if (t.largeWidth && d) return n(u, t, p);
                        if (t.mediumWidth && m) return n(u, t, p);
                        if (t.smallWidth && F) return n(u, t, p);
                        if (t.extraSmallWidth && C) return n(u, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && b) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, a.memo)(F);
                const C = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    b = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(E),
                            t = (0, a.useState)(u),
                            n = t[0],
                            i = t[1],
                            _ = (0, a.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []);
                        C(() => {
                            engine.on('clientResized', _);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', _), [_]);
                        const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return r().createElement(E.Provider, { value: c }, e);
                    });
                var D = t(6483),
                    h = t.n(D),
                    g = t(926),
                    B = t.n(g);
                let p, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const f = () => {
                        const e = (0, a.useContext)(E),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL_WIDTH,
                        [v.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [v.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [w.ExtraSmall]: '',
                        [w.Small]: B().SMALL_HEIGHT,
                        [w.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [w.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [p.ExtraSmall]: '',
                        [p.Small]: B().SMALL,
                        [p.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [p.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [p.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, S);
                        const n = f(),
                            o = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', L({ className: h()(t, P[o], k[s], y[i]) }, a), u);
                    },
                    M = ['children'];
                const N = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, M);
                    return r().createElement(b, null, r().createElement(x, t, u));
                };
                var T = t(493),
                    I = t.n(T),
                    O = t(7727);
                const H = {
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
                    $ = [
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
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class W extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, O.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, O.G)(this.props.soundClick);
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
                            o = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            _ = e.onMouseDown,
                            c = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, $)),
                            m = h()(H.base, H[`base__${o}`], H[`base__${n}`], null == s ? void 0 : s.base),
                            E = h()(H.icon, H[`icon__${o}`], H[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = h()(H.glow, null == s ? void 0 : s.glow),
                            F = h()(H.caption, H[`caption__${o}`], null == s ? void 0 : s.caption),
                            C = h()(H.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            G(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== o && r().createElement('div', { className: H.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            a && r().createElement('div', { className: C }, a),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var U = t(5521);
                t(4179);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = U.n.NONE, u = z, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== U.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                function V(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const q = V;
                function X(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Y(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function Z(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(q(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function K(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(q(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                var Q = t(3403);
                let J, ee;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(J || (J = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(ee || (ee = {}));
                J.style, J.tankman;
                let ue, te, ae, re, ne, oe, se;
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
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.RacesPoint = 'races_point');
                })(ue || (ue = {})),
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
                    })(te || (te = {})),
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
                    })(ae || (ae = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(re || (re = {})),
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
                    })(ne || (ne = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(oe || (oe = {})),
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
                    })(se || (se = {}));
                t(2372);
                ue.Items,
                    ue.Equipment,
                    ue.Xp,
                    ue.XpFactor,
                    ue.Blueprints,
                    ue.BlueprintsAny,
                    ue.Goodies,
                    ue.Berths,
                    ue.Slots,
                    ue.Tokens,
                    ue.CrewSkins,
                    ue.CrewBooks,
                    ue.Customizations,
                    ue.CreditsFactor,
                    ue.TankmenXp,
                    ue.TankmenXpFactor,
                    ue.FreeXpFactor,
                    ue.BattleToken,
                    ue.PremiumUniversal,
                    ue.NaturalCover,
                    ue.BpCoin,
                    ue.BattlePassSelectToken,
                    ue.BattlaPassFinalAchievement,
                    ue.BattleBadge,
                    ue.BonusX5,
                    ue.CrewBonusX3,
                    ue.NewYearFillers,
                    ue.NewYearInvoice,
                    ue.EpicSelectToken,
                    ue.Comp7TokenWeeklyReward,
                    ue.Comp7TokenCouponReward,
                    ue.BattleBoosterGift,
                    ue.CosmicLootboxCommon,
                    ue.CosmicLootboxSilver,
                    ue.Gold,
                    ue.Credits,
                    ue.Crystal,
                    ue.FreeXp,
                    ue.BattlePassPoints,
                    ue.RacesPoint,
                    ue.PremiumPlus,
                    ue.Premium;
                let ie, le;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled');
                })(ie || (ie = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(le || (le = {}));
                var _e = t(8546);
                const ce = 'bp_highlight',
                    de = (e) => {
                        const u = J[e];
                        return u || console.warn('Unknown FinalReward key: ', e), u;
                    };
                var me = t(3561);
                const Ee = (e) => ({
                    level: (null == e ? void 0 : e.currentLevel) || 0,
                    to: null == e ? void 0 : e.levelProgression,
                    from: null == e ? void 0 : e.levelProgression,
                });
                let Ae;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(Ae || (Ae = {}));
                function Fe() {
                    return !1;
                }
                console.log;
                var Ce = t(9174);
                function be(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return De(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return De(e, u);
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
                function De(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const he = (e) => (0 === e ? window : window.subViews.get(e));
                var ge = t(3946);
                const Be = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: s, children: i, mocks: l }) {
                                const _ = (0, a.useRef)([]),
                                    c = (t, a, r) => {
                                        var n;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = he,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return r.set(l, t), e && t(s(n)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = be(r.keys()); !(e = t()).done; ) n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            c = (e) => _.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = Ce.LO.box(a, { equals: Fe });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Ce.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : l(e),
                                                            r = Ce.LO.box(a, { equals: Fe });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Ce.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Ce.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Ce.aD)((u) => {
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
                                                                n = Object.entries(r),
                                                                o = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = Ce.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Ce.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: t, model: d, externalModel: i, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    E = m[0],
                                    A = m[1],
                                    F = (0, a.useState)(() => c(n, s, l)),
                                    C = F[0],
                                    b = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? b(c(E, s, l)) : (d.current = !0);
                                    }, [l, E, s]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), _.current.forEach((e) => e());
                                        },
                                        [C],
                                    ),
                                    r().createElement(t.Provider, { value: C }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = e.array('chapters'),
                                t = {
                                    root: e.object(),
                                    collectionEntryPoint: e.object('collectionEntryPoint'),
                                    chapters: u,
                                },
                                a = (0, ge.Om)(() => K(u.get(), ({ chapterState: e }) => e === ie.Active)),
                                r = (0, ge.Om)(() => Z(u.get(), ({ chapterState: e }) => e === ie.Completed)),
                                n = (0, ge.Om)((e) =>
                                    (function (e, u) {
                                        for (let t = 0; t < e.length; t++) {
                                            const a = X(e[t]);
                                            if (u(a, t, e)) return a;
                                        }
                                    })(u.get(), (u) => u.chapterID === e),
                                ),
                                o = (0, ge.Om)(() => Y(u.get(), (e) => e), { equals: Fe }),
                                s = (0, ge.Om)((e) => K(t.chapters.get(), (u) => u.chapterType === e), { equals: Fe });
                            return Object.assign({}, t, {
                                computes: {
                                    getChapterById: n,
                                    hasChapter: s,
                                    hasActive: a,
                                    isCompleted: r,
                                    getChapters: o,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            selectChapter: e.createCallback((e) => ({ chapterID: e }), 'onChapterSelect'),
                            buyChapter: e.createCallback((e) => ({ chapterID: e }), 'onBuyClick'),
                            openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpPoints: e.createCallbackNoArgs('onBpbitClick'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            close: e.createCallbackNoArgs('onClose'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    pe = Be[0],
                    ve = Be[1],
                    we = {
                        base: 'App_base_26',
                        backgroundBlur: 'App_backgroundBlur_26',
                        background: 'App_background_6b',
                        background__hasMarathon: 'App_background__hasMarathon_e7',
                        infoButtons: 'App_infoButtons_78',
                        header: 'App_header_41',
                        flags: 'App_flags_d9',
                        chapters: 'App_chapters_8a',
                        chapters__medium: 'App_chapters__medium_d5',
                        chapters__small: 'App_chapters__small_9c',
                    };
                var fe = t(9766);
                const Se = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Le = [
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
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                let ke;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(ke || (ke = {}));
                const ye = (0, a.memo)((e) => {
                    let u = e.label,
                        t = e.isVisibleLabel,
                        n = void 0 !== t && t,
                        o = e.autofocus,
                        s = void 0 !== o && o,
                        i = e.soundHover,
                        l = void 0 === i ? 'highlight' : i,
                        _ = e.soundClick,
                        c = void 0 === _ ? 'play' : _,
                        d = e.size,
                        m = void 0 === d ? ke.NORMAL : d,
                        E = e.onClick,
                        A = e.onMouseEnter,
                        F = e.onMouseLeave,
                        C = e.onMouseDown,
                        b = e.onMouseUp,
                        D = e.onFocus,
                        g = e.onBlur,
                        B = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Le);
                    const p = (0, a.useState)(!1),
                        v = p[0],
                        w = p[1],
                        f = (0, a.useState)(!1),
                        S = f[0],
                        L = f[1],
                        P = (0, a.useState)(s),
                        k = P[0],
                        y = P[1],
                        x = (0, a.useRef)(null),
                        M = (0, a.useCallback)(() => {
                            x.current && (x.current.focus(), y(!0));
                        }, []),
                        N = (0, a.useCallback)(
                            (e) => {
                                k && null !== x.current && !x.current.contains(e.target) && y(!1);
                            },
                            [k],
                        );
                    (0, a.useEffect)(
                        () => (
                            document.addEventListener('mousedown', N),
                            () => {
                                document.removeEventListener('mousedown', N);
                            }
                        ),
                        [N],
                    ),
                        (0, a.useEffect)(() => {
                            y(s);
                        }, [s]);
                    const T = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                w(!0), C && C(e), c && (0, O.G)(c), s && M();
                            },
                            [s, C, M, c],
                        ),
                        R = (0, a.useCallback)(
                            (e) => {
                                w(!1), b && b(e);
                            },
                            [b],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                A && A(e), l && (0, O.G)(l), L(!0);
                            },
                            [A, l],
                        ),
                        $ = (0, a.useCallback)(
                            (e) => {
                                w(!1), L(!1), F && F(e);
                            },
                            [F],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                y(!0), D && D(e);
                            },
                            [D],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                y(!1), g && g(e);
                            },
                            [g],
                        ),
                        U = h()(
                            Se.base,
                            n && Se.base__visibleLabel,
                            v && Se.base__mouseDown,
                            S && Se.base__hovered,
                            k && Se.base__focused,
                        ),
                        z = h()(Se.icon, Se[`icon__${m}`]);
                    return r().createElement(
                        'div',
                        Pe(
                            {
                                ref: x,
                                className: U,
                                onClick: T,
                                onMouseEnter: H,
                                onMouseLeave: $,
                                onMouseDown: I,
                                onMouseUp: R,
                                onFocus: G,
                                onBlur: W,
                            },
                            B,
                        ),
                        r().createElement('div', { className: z }),
                        r().createElement('div', { className: Se.label }, u),
                    );
                });
                var xe = t(6373);
                const Me = [];
                function Ne(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Me)
                    );
                }
                var Te = t(3649),
                    Ie = t(903);
                const Oe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Re = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const He = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    $e = (e) =>
                        He
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Re.length - 1; t >= 0; t--)
                                      for (; e >= Re[t]; ) (u += Oe[t]), (e -= Re[t]);
                                  return u;
                              })(e),
                    Ge = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__elite: 'TankName_type__elite_cc',
                        base__sizeBig: 'TankName_base__sizeBig_2b',
                        name: 'TankName_name_56',
                        base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let We, Ue;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(We || (We = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Ue || (Ue = {}));
                const ze = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: a,
                    vehicleLvl: n,
                    tags: o,
                    isPremiumIGR: s,
                    size: i = We.extraSmall,
                    type: l = Ue.colored,
                    className: _,
                    classNames: c,
                    isShortName: d = !1,
                }) => {
                    const m = `${(0, Te.BN)(a)}${e ? '_elite' : ''}`,
                        E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                    return r().createElement(
                        'div',
                        {
                            className: h()(
                                Ge.base,
                                Ge[`base__size${(0, Te.e)(i)}`],
                                Ge[`base__type${(0, Te.e)(l)}`],
                                o && Y(o, (e) => Ge[`base__tag${(0, Te.e)(e)}`]),
                                _,
                            ),
                        },
                        r().createElement('div', { className: h()(Ge.level, null == c ? void 0 : c.level) }, $e(n)),
                        r().createElement('div', {
                            className: h()(Ge.type, e && Ge.type__elite, null == c ? void 0 : c.typeIcon),
                            style: { backgroundImage: `url(${E})` },
                        }),
                        s && r().createElement('div', { className: Ge.premiumIGR }),
                        r().createElement('div', { className: h()(Ge.name, null == c ? void 0 : c.name) }, d ? t : u),
                    );
                };
                var je = t(323);
                const Ve = 'Shield_base_ec',
                    qe = 'Shield_flag_a2',
                    Xe = 'Shield_flag__isChapterChosen_81',
                    Ye = 'Shield_flag__medium_78',
                    Ze = 'Shield_emblem_59',
                    Ke = 'Shield_chapterLogoIcon_4b',
                    Qe = (0, Q.Pi)(({ size: e, chapterID: u = 0, progression: t }) => {
                        const a = ve().model.computes.getChapterById(u);
                        if (!a) return null;
                        const n = a.isBought,
                            o = a.chapterState,
                            s = a.chapterType,
                            i = o === ie.Completed ? _e.Bq.Completed : n ? _e.Bq.Bought : _e.Bq.Free,
                            l = o === ie.Active,
                            _ = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(t),
                            c = _ || (o !== ie.NotStarted && o !== ie.Disabled),
                            d = c && i !== _e.Bq.Completed;
                        return r().createElement(
                            'div',
                            { className: Ve },
                            r().createElement('div', {
                                className: h()(qe, e === _e.$u.Medium && Ye, d && Xe),
                                style: (0, Ie.fW)(u, e),
                            }),
                            r().createElement(
                                'div',
                                { className: Ze },
                                r().createElement(je.G, {
                                    progression: t,
                                    size: e,
                                    chapterID: u,
                                    battlePassState: i,
                                    hasBattlePass: n,
                                    hasBeenActive: c,
                                    isChapterSelection: !0,
                                    isOpen: d,
                                    isChapterChosen: l,
                                    showProgressBar: l,
                                    chapterType: s,
                                }),
                                d && r().createElement('div', { className: Ke, style: (0, Ie.cs)(u, n, e) }),
                            ),
                        );
                    }),
                    Je = {
                        base: 'Chapter_base_f0',
                        bg: 'Chapter_bg_2e',
                        base__paused: 'Chapter_base__paused_ff',
                        base__notStarted: 'Chapter_base__notStarted_9b',
                        base__completed: 'Chapter_base__completed_88',
                        base__small: 'Chapter_base__small_32',
                        base__medium: 'Chapter_base__medium_e2',
                        bgHover: 'Chapter_bgHover_ac',
                        border: 'Chapter_border_5c',
                        frame: 'Chapter_frame_58',
                        content: 'Chapter_content_61',
                        vehicleImg: 'Chapter_vehicleImg_b1',
                        base__disabled: 'Chapter_base__disabled_6d',
                        shieldWrapper: 'Chapter_shieldWrapper_27',
                        shield: 'Chapter_shield_bc',
                        shieldShine: 'Chapter_shieldShine_3f',
                        rotate: 'Chapter_rotate_78',
                        disabledIcon: 'Chapter_disabledIcon_f3',
                        completedIcon: 'Chapter_completedIcon_f2',
                        title: 'Chapter_title_57',
                        base__active: 'Chapter_base__active_e5',
                        vehicleStyle: 'Chapter_vehicleStyle_85',
                        preview: 'Chapter_preview_1d',
                        previewWrapper: 'Chapter_previewWrapper_74',
                        styleTitle: 'Chapter_styleTitle_0d',
                        vehicleTitle: 'Chapter_vehicleTitle_10',
                        vehicleInHangar: 'Chapter_vehicleInHangar_61',
                        fadeOut: 'Chapter_fadeOut_82',
                        fadeIn: 'Chapter_fadeIn_f7',
                        fadeInWithScale: 'Chapter_fadeInWithScale_4c',
                        slideUp: 'Chapter_slideUp_71',
                        scale: 'Chapter_scale_96',
                    };
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = R.strings.battle_pass,
                    tu = (0, Q.Pi)(({ chapterID: e, progression: u, chapterSize: t = Ae.Medium }) => {
                        const n = ve(),
                            o = n.model,
                            s = n.controls,
                            i = f().mediaSize,
                            l = (0, a.useCallback)(
                                (u) => {
                                    s.openPreview(e), u.stopPropagation();
                                },
                                [e, s],
                            ),
                            _ = Ne(() => {
                                (0, O.G)(ce);
                            }),
                            c = o.computes.getChapterById(e);
                        if (!c) return null;
                        const d = c.chapterState,
                            m = c.styleName,
                            E = c.isVehicleInHangar,
                            A = c.vehicleInfo,
                            F = c.finalReward,
                            C = c.chapterType,
                            b = i <= p.Medium ? _e.$u.Small : _e.$u.Medium,
                            D = d === ie.Completed,
                            g = d === ie.Disabled,
                            B = d === ie.Active,
                            v = C === ee.Marathon,
                            w = de(F) === J.style,
                            S = uu.chapter.fullNameUppercased.$num(e) || `chapter/fullNameUppercased/${e}`,
                            L = uu.chapter.fullName.quoted.$num(e) || `chapter/fullName/quoted/${e}`,
                            P = h()(Je.base, Je[`base__${d}`], Je[`base__${t}`]);
                        return r().createElement(
                            xe.i,
                            {
                                header: uu.chapterChoice.tooltip.disabledChapter.header(),
                                body: (0, Te.uF)(uu.chapterChoice.tooltip.disabledChapter.body(), { chapterName: L }),
                                isEnabled: g,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: P,
                                    onMouseEnter: _,
                                    onClick: () => {
                                        O.$.playClick(), s.selectChapter(e);
                                    },
                                },
                                r().createElement(
                                    'div',
                                    { className: Je.bg, style: (0, Ie.TZ)(e) },
                                    r().createElement('div', { className: Je.vehicleImg, style: (0, Ie.OH)(e) }),
                                    w &&
                                        r().createElement(
                                            'div',
                                            { className: Je.preview },
                                            r().createElement(
                                                'div',
                                                { className: Je.previewWrapper },
                                                r().createElement(ye, {
                                                    label: '',
                                                    onClick: l,
                                                    size: i < p.Medium ? ke.SMALL : ke.NORMAL,
                                                }),
                                            ),
                                        ),
                                    r().createElement('div', { className: Je.bgHover }),
                                ),
                                B && r().createElement('div', { className: Je.frame }),
                                r().createElement(
                                    'div',
                                    { className: Je.content },
                                    r().createElement(
                                        'div',
                                        { className: Je.shieldWrapper },
                                        B && r().createElement('div', { className: Je.shieldShine }),
                                        r().createElement(
                                            'div',
                                            { className: Je.shield },
                                            r().createElement(Qe, { size: b, chapterID: e, progression: u }),
                                        ),
                                    ),
                                    D && r().createElement('div', { className: Je.completedIcon }),
                                    g && r().createElement('div', { className: Je.disabledIcon }),
                                    r().createElement('div', { className: Je.title }, S),
                                    w &&
                                        r().createElement(
                                            'div',
                                            { className: Je.vehicleStyle },
                                            r().createElement(
                                                'div',
                                                { className: Je.styleTitle },
                                                v
                                                    ? uu.chapterChoice.extraChapter.reward()
                                                    : r().createElement(fe.z, {
                                                          text: uu.chapterChoice.stylePreview.name(),
                                                          binding: { styleName: m },
                                                      }),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Je.vehicleTitle },
                                                r().createElement(fe.z, {
                                                    text: uu.chapterChoice.stylePreview.forLabel.$dyn(C),
                                                    binding: {
                                                        vehicleName: r().createElement(
                                                            ze,
                                                            eu({}, A, { type: Ue.white }),
                                                        ),
                                                    },
                                                }),
                                                E && r().createElement('div', { className: Je.vehicleInHangar }),
                                            ),
                                        ),
                                ),
                            ),
                        );
                    });
                var au = t(2269);
                const ru = {
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
                let nu, ou;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(nu || (nu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(ou || (ou = {}));
                const su = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: o,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: _,
                    onMouseMove: c,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        C = (0, a.useState)(t),
                        b = C[0],
                        D = C[1],
                        g = (0, a.useState)(!1),
                        B = g[0],
                        p = g[1],
                        v = (0, a.useState)(!1),
                        w = v[0],
                        f = v[1],
                        S = (0, a.useCallback)(() => {
                            o || (F.current && (F.current.focus(), D(!0)));
                        }, [o]),
                        L = (0, a.useCallback)(
                            (e) => {
                                b && null !== F.current && !F.current.contains(e.target) && D(!1);
                            },
                            [b],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                o || (A && A(e));
                            },
                            [o, A],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                o || (null !== i && (0, O.G)(i), _ && _(e), f(!0));
                            },
                            [o, i, _],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                c && c(e);
                            },
                            [c],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                o || (m && m(e), p(!1));
                            },
                            [o, m],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                o || (null !== l && (0, O.G)(l), d && d(e), t && S(), p(!0));
                            },
                            [o, l, d, S, t],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                o || (E && E(e), p(!1));
                            },
                            [o, E],
                        ),
                        T = h()(
                            ru.base,
                            ru[`base__${n}`],
                            {
                                [ru.base__disabled]: o,
                                [ru[`base__${u}`]]: u,
                                [ru.base__focus]: b,
                                [ru.base__highlightActive]: B,
                                [ru.base__firstHover]: w,
                            },
                            s,
                        ),
                        I = h()(ru.state, ru.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, a.useEffect)(() => {
                            D(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: T,
                                onMouseEnter: k,
                                onMouseMove: y,
                                onMouseUp: x,
                                onMouseDown: M,
                                onMouseLeave: N,
                                onClick: P,
                            },
                            n !== nu.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ru.back }),
                                    r().createElement('span', { className: ru.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: I },
                                r().createElement('span', { className: ru.stateDisabled }),
                                r().createElement('span', { className: ru.stateHighlightHover }),
                                r().createElement('span', { className: ru.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ru.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                su.defaultProps = { type: nu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const iu = (0, a.memo)(su);
                var lu = t(7030);
                const _u = 'ChapterCompleted_base_55',
                    cu = 'ChapterCompleted_effect_1e',
                    du = 'ChapterCompleted_shine_2f',
                    mu = 'ChapterCompleted_shield_af',
                    Eu = 'ChapterCompleted_title_1a',
                    Au = 'ChapterCompleted_boughtGlow_56',
                    Fu = 'ChapterCompleted_bought_b1',
                    Cu = 'ChapterCompleted_button_33',
                    bu = 'ChapterCompleted_buttonWrapper_04',
                    Du = R.strings.battle_pass,
                    hu = (0, Q.Pi)(({ chapterId: e, progression: u }) => {
                        const t = (0, a.useState)(!1),
                            n = t[0],
                            o = t[1],
                            s = ve(),
                            i = s.model,
                            l = s.controls,
                            _ = (0, lu.useSpring)({
                                from: { transform: 'rotate(0deg)' },
                                to: { transform: 'rotate(360deg)' },
                                reset: !0,
                                pause: !n,
                                config: { duration: 6e4 },
                            }),
                            c = f().mediaSize,
                            d = c <= p.Small ? _e.$u.Small : _e.$u.Medium,
                            m = c <= p.Small ? _e.$u.Small : _e.$u.Medium,
                            E = Ne(() => {
                                (0, O.G)('bp_highlight_02'), o(!0);
                            }),
                            A = Ne(() => {
                                o(!1);
                            }),
                            F = i.computes.getChapterById(e);
                        if (!F) return null;
                        const C = Du.chapter.fullNameUppercased.$num(e);
                        return r().createElement(
                            'div',
                            { className: _u },
                            r().createElement(
                                'div',
                                {
                                    className: cu,
                                    onClick: () => {
                                        (0, O.G)('play'), l.selectChapter(e);
                                    },
                                    onMouseEnter: E,
                                    onMouseOut: A,
                                },
                                r().createElement(lu.animated.div, { className: du, style: _ }),
                                r().createElement(
                                    'div',
                                    { className: mu },
                                    r().createElement(Qe, { size: m, chapterID: e, progression: u }),
                                ),
                            ),
                            r().createElement('div', { className: Eu }, C),
                            F.isBought
                                ? r().createElement(
                                      xe.i,
                                      { body: Du.chapterChoice.chapterBought.tooltip() },
                                      r().createElement(
                                          'div',
                                          { className: Au },
                                          r().createElement('div', { className: Fu }),
                                      ),
                                  )
                                : r().createElement(
                                      'div',
                                      { className: bu },
                                      r().createElement(
                                          'div',
                                          { className: Cu },
                                          r().createElement(
                                              iu,
                                              { onClick: () => l.buyChapter(e), type: nu.main, size: d },
                                              Du.chapterChoice.buy(),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    gu = 'Header_base_71',
                    Bu = 'Header_title_af',
                    pu = 'Header_description_cc',
                    vu = 'Header_freePoints_05',
                    wu = 'Header_freePointsInfo_f3',
                    fu = 'Header_freePointsCount_a8',
                    Su = 'Header_freePointsIcon_be',
                    Lu = R.strings.battle_pass.chapterChoice.freePoints,
                    Pu = (0, Q.Pi)(({ title: e, description: u }) => {
                        const t = ve().model,
                            a = t.root.get().freePoints,
                            n = !t.computes.isCompleted() && a > 0;
                        return r().createElement(
                            'div',
                            { className: gu },
                            r().createElement('div', { className: Bu }, e),
                            r().createElement(
                                'div',
                                { className: pu },
                                n
                                    ? r().createElement(
                                          'div',
                                          { className: vu },
                                          Lu.description(),
                                          r().createElement(
                                              xe.i,
                                              { header: Lu.tooltip.title(), body: Lu.tooltip.description() },
                                              r().createElement(
                                                  'div',
                                                  { className: wu },
                                                  r().createElement('span', { className: fu }, a),
                                                  r().createElement('span', { className: Su }),
                                              ),
                                          ),
                                      )
                                    : r().createElement('span', null, u),
                            ),
                        );
                    }),
                    ku = 'ChaptersCompleted_base_6f',
                    yu = 'ChaptersCompleted_chapters_8d',
                    xu = 'ChaptersCompleted_header_08',
                    Mu = 'ChaptersCompleted_awards_2b';
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                const Tu = R.strings.battle_pass,
                    Iu = (0, Q.Pi)(() => {
                        const e = ve(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            n = a.notChosenRewardCount,
                            o = a.bpbitCount,
                            s = a.bpcoinCount,
                            i = a.isBattlePassCompleted,
                            l = a.isChooseRewardsEnabled,
                            _ = u.collectionEntryPoint.get(),
                            c = _.collectionItemCount,
                            d = _.newCollectionItemCount,
                            m = _.maxCollectionItemCount,
                            E = _.isFirstEnter,
                            A = _.isCollectionsEnabled,
                            F = u.chapters.get(),
                            C = t.openGoodsForBpCoins,
                            b = t.takeRewards,
                            D = t.openGoodsForBpPoints,
                            h = t.openCollection;
                        return r().createElement(
                            'div',
                            { className: ku },
                            r().createElement(
                                'div',
                                { className: xu },
                                r().createElement(Pu, {
                                    title: Tu.chapterChoice.allChaptersCompleted.title(),
                                    description: Tu.chapterChoice.allChaptersCompleted.description(),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: yu },
                                Y(F, (e, t) =>
                                    r().createElement(hu, {
                                        key: t,
                                        chapterId: e.chapterID,
                                        progression: Ee(u.computes.getChapterById(e.chapterID)),
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Mu },
                                r().createElement(
                                    me.Z,
                                    Nu(
                                        {},
                                        {
                                            pointsCount: o,
                                            notChosenRewardCount: n,
                                            coinCount: s,
                                            collectionItemCount: c,
                                            maxCollectionItemCount: m,
                                            newCollectionItemCount: d,
                                            isBPFirstEnter: E,
                                            isCollectionsEnabled: A,
                                            isAwardDisabled: !l,
                                            isPointsLocked: !i,
                                            onPointsClick: D,
                                            onCoinClick: C,
                                            onTakeRewardsClick: b,
                                            onCollectionClick: h,
                                            hasMarathon: u.computes.hasChapter(ee.Marathon),
                                        },
                                        { size: au.W.Big },
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ou = 'Separator_base_8a',
                    Ru = 'Separator_base__qHDSize_bb',
                    Hu = 'Separator_line_97',
                    $u = 'Separator_line__top_a6',
                    Gu = 'Separator_line__bottom_a0',
                    Wu = 'Separator_plus_41',
                    Uu = () => {
                        const e = f(),
                            u = e.remScreenWidth,
                            t = e.remScreenHeight,
                            a = u >= 2560 && t >= 1440;
                        return r().createElement(
                            'div',
                            { className: h()(Ou, a && Ru) },
                            r().createElement('div', { className: h()(Hu, $u) }),
                            r().createElement('div', { className: Wu }),
                            r().createElement('div', { className: h()(Hu, Gu) }),
                        );
                    },
                    zu = R.strings.battle_pass,
                    ju = (0, Q.Pi)(() => {
                        const e = ve(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            o = n.notChosenRewardCount,
                            s = n.bpbitCount,
                            i = n.bpcoinCount,
                            l = n.isBattlePassCompleted,
                            _ = n.isChooseRewardsEnabled,
                            c = t.openCollection,
                            d = t.openAbout,
                            m = t.openPointsInfo,
                            E = t.openGoodsForBpPoints,
                            A = t.openGoodsForBpCoins,
                            F = t.onViewLoaded,
                            C = t.takeRewards,
                            b = t.close,
                            D = u.computes.getChapters(),
                            g = ((e) => (e < 3 ? Ae.Large : e > 4 ? Ae.Small : Ae.Medium))(D.length),
                            B = D.findIndex((e) => e.chapterType === ee.Marathon),
                            p = u.collectionEntryPoint.get(),
                            v = p.collectionItemCount,
                            w = p.newCollectionItemCount,
                            f = p.maxCollectionItemCount,
                            S = p.isFirstEnter,
                            L = p.isCollectionsEnabled,
                            P = (0, a.useState)(!1),
                            k = P[0],
                            y = P[1];
                        var x;
                        (x = b),
                            j(U.n.ESCAPE, x),
                            (0, a.useEffect)(
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
                                        k || (F(), y(!0));
                                    }),
                                [k, F],
                            );
                        const M = Z(D, (e) => de(e.finalReward) === J.tankman),
                            N = h()(we.chapters, we[`chapters__${g}`]),
                            T = u.computes.hasActive() ? zu.chapterChoice.activeTitle() : zu.chapterChoice.title(),
                            I = M ? J.tankman : J.style,
                            O = zu.chapterChoice.description.$dyn(I) || '',
                            R = u.computes.isCompleted(),
                            H = () => ({
                                pointsCount: s,
                                notChosenRewardCount: o,
                                coinCount: i,
                                collectionItemCount: v,
                                maxCollectionItemCount: f,
                                newCollectionItemCount: w,
                                isBPFirstEnter: S,
                                isCollectionsEnabled: L,
                                isAwardDisabled: !_,
                                isPointsLocked: !l,
                                onPointsClick: E,
                                onCoinClick: A,
                                onTakeRewardsClick: C,
                                onCollectionClick: c,
                                hasMarathon: u.computes.hasChapter(ee.Marathon),
                                hasResource: u.computes.hasChapter(ee.Resource),
                            }),
                            $ = h()(we.background, H().hasMarathon && we.background__hasMarathon);
                        return r().createElement(
                            'div',
                            { className: we.base },
                            r().createElement('div', { className: $ }),
                            R
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { className: we.backgroundBlur }),
                                      r().createElement(Iu, null),
                                  )
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement(
                                          'div',
                                          { className: we.infoButtons },
                                          r().createElement(W, {
                                              caption: zu.intro.aboutButton(),
                                              type: 'info',
                                              onClick: d,
                                          }),
                                          r().createElement(W, {
                                              caption: zu.howToEarnPoints.title(),
                                              type: 'info',
                                              onClick: m,
                                          }),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: we.header },
                                          r().createElement(Pu, { title: T, description: O }),
                                      ),
                                      r().createElement('div', { className: we.flags }, r().createElement(me.Z, H())),
                                      r().createElement(
                                          'div',
                                          { className: N },
                                          Y(D, ({ chapterID: e }, t) =>
                                              r().createElement(
                                                  r().Fragment,
                                                  { key: t },
                                                  t === B && r().createElement(Uu, null),
                                                  r().createElement(tu, {
                                                      chapterID: e,
                                                      chapterSize: g,
                                                      progression: Ee(u.computes.getChapterById(e)),
                                                  }),
                                              ),
                                          ),
                                      ),
                                  ),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        r().createElement(N, null, r().createElement(pe, null, r().createElement(ju, null))),
                        document.getElementById('root'),
                    );
                });
            },
            903: (e, u, t) => {
                'use strict';
                t.d(u, { FL: () => s, OH: () => _, TZ: () => l, cs: () => o, fW: () => i, wD: () => n });
                var a = t(8546);
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
                    n = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            r = e.$dyn(`c_${u}${a}`),
                            n = e.$dyn(`common${a}`);
                        return r || n;
                    },
                    o = (e, u, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            o = u ? 'BP' : '',
                            s = `${r(t)}${o}`;
                        return { backgroundImage: `url(${n(a, e, s)})` };
                    },
                    s = (e, u, t, a) => {
                        const r = R.images.gui.maps.icons.battlePass.logo,
                            o = n(r, e, `emblem${a ? '_BP' : ''}${t ? '_open' : ''}${u}`);
                        return o ? { backgroundImage: `url(${o})` } : void 0;
                    },
                    i = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = r(u);
                        return { backgroundImage: `url(${n(t, e, a)})` };
                    },
                    l = (e) => ({
                        backgroundImage: `url(${n(R.images.gui.maps.icons.battlePass.chapter_choice.commander, e)})`,
                    }),
                    _ = (e) => ({
                        backgroundImage: `url(${n(R.images.gui.maps.icons.battlePass.chapter_choice.tank, e)})`,
                    });
            },
            2269: (e, u, t) => {
                'use strict';
                let a, r;
                t.d(u, { W: () => r, w: () => a }),
                    (function (e) {
                        (e.Award = 'Award'), (e.Coin = 'Coin'), (e.Point = 'Point'), (e.Collection = 'Collection');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(r || (r = {}));
            },
            3561: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => h });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n);
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const _ = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        _ = e.hide,
                        c = e.maximumNumber,
                        d = e.className,
                        m = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, i);
                    const E = a ? null : t,
                        A = 'string' == typeof E;
                    if ((E && !A && E < 0) || 0 === E) return null;
                    const F = E && !A && E > c,
                        C = r()(
                            s.base,
                            s[`base__${u}`],
                            n && s.base__animated,
                            _ && s.base__hidden,
                            !E && s.base__pattern,
                            a && s.base__empty,
                            d,
                        );
                    return o().createElement(
                        'div',
                        l({ className: C }, m),
                        o().createElement('div', { className: s.bg }),
                        o().createElement('div', { className: s.pattern }),
                        o().createElement(
                            'div',
                            { className: r()(s.value, A && s.value__text) },
                            F ? c : E,
                            F && o().createElement('span', { className: s.plus }, '+'),
                        ),
                    );
                };
                _.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var c = t(2372),
                    d = t(9766),
                    m = t(6373),
                    E = t(7727);
                const A = {
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
                var F = t(2269);
                const C = R.strings.battle_pass.awardsWidget,
                    b = ({
                        type: e,
                        count: u,
                        disabled: t = !1,
                        onClick: a,
                        size: s,
                        isLocked: i = !1,
                        hasTriger: l = !1,
                        hasMarathon: b = !1,
                        hasResource: D = !1,
                        maxCount: h = 0,
                        newItemsCount: g = 0,
                    }) => {
                        let B = '',
                            p = '';
                        const v = e === F.w.Collection && h === u,
                            w = s === F.W.Small && l;
                        switch (e) {
                            case F.w.Award:
                                (B = 1 === u ? C.title.awardSingle() : C.title.awardMultiple()),
                                    (p = t ? C.description.awardDisabled() : C.description.award());
                                break;
                            case F.w.Coin:
                                (B = C.title.coin()), (p = C.description.coin());
                                break;
                            case F.w.Point:
                                (B = C.title.point()),
                                    (p = ((e, u, t) => {
                                        switch (!0) {
                                            case e && u && t:
                                                return C.description.pointLockedExceptExtraAndResource();
                                            case e && !u && t:
                                                return C.description.pointLockedExceptResource();
                                            case e && u:
                                                return C.description.pointLockedExceptExtra();
                                            case e && !u:
                                                return C.description.pointLocked();
                                            default:
                                                return C.description.point();
                                        }
                                    })(i, b, D));
                                break;
                            case F.w.Collection:
                                (B = C.title.collection()),
                                    (p = v ? C.description.collectionCompleted() : C.description.collection());
                        }
                        const f = r()(
                                A.base,
                                A[`base__${s}`],
                                t && A.base__disabled,
                                i && A.base__locked,
                                e === F.w.Award && !t && A.base__hasAppearAnimation,
                            ),
                            S = r()(A.border, A[`border__${s}${e}`], w && A.border__triggered),
                            L = r()(A.borderHover, A[`borderHover__${s}${e}`]),
                            P = r()(A.borderDisabled, A[`borderDisabled__${s}`]),
                            k = r()(A.shine, A[`shine__${s}Left`]),
                            y = r()(A.shine, A[`shine__${s}Right`]),
                            x = r()(A.bg, A[`bg__${s}${e}`]),
                            M = r()(A.bgHover, A[`bgHover__${s}${e}`]),
                            N = r()(A.bgDisabled, A[`bgDisabled__${s}`]),
                            T = r()(A.locked, A[`locked__${s}`]),
                            I = r()(A.lockedHover, A[`lockedHover__${s}`]),
                            O = (0, n.useCallback)(() => {
                                t || (E.$.playClick(), a());
                            }, [t, a]),
                            R = (0, n.useCallback)(() => {
                                (0, E.G)('bp_highlight_02');
                            }, []);
                        return o().createElement(
                            m.i,
                            { body: p, isEnabled: Boolean(p) },
                            o().createElement(
                                'div',
                                { className: f, onMouseEnter: R, onClick: O },
                                g > 0 &&
                                    o().createElement(
                                        'div',
                                        { className: A.bubble },
                                        o().createElement(_, { size: 'small' }),
                                    ),
                                t
                                    ? o().createElement('div', { className: P })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: S }),
                                          o().createElement('div', { className: L }),
                                      ),
                                e === F.w.Award &&
                                    !t &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: k }),
                                        o().createElement('div', { className: y }),
                                    ),
                                t
                                    ? o().createElement('div', { className: N })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', { className: x }),
                                          o().createElement('div', { className: M }),
                                      ),
                                i &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: T }),
                                        o().createElement('div', { className: I }),
                                    ),
                                e === F.w.Award && !t && o().createElement('div', { className: A.arrow }),
                                o().createElement('div', { className: r()(A.icon, A[`icon__${s}${e}`]) }),
                                o().createElement(
                                    'div',
                                    { className: A.count },
                                    e === F.w.Collection
                                        ? !v && o().createElement(d.z, { text: `${u || 0} / ${h}` })
                                        : o().createElement(c.A, { format: 'integral', value: u }),
                                    v && o().createElement('div', { className: A.completedCollectionIcon }),
                                ),
                                o().createElement('div', { className: r()(A.label, A[`label__${s}${e}`]) }, B),
                                e === F.w.Award &&
                                    !t &&
                                    o().createElement(
                                        'div',
                                        { className: A.blinkShape },
                                        o().createElement('div', { className: A.blink }),
                                    ),
                            ),
                        );
                    },
                    D = {
                        base: 'AwardsWidget_base_0f',
                        base__small: 'AwardsWidget_base__small_19',
                        award: 'AwardsWidget_award_c6',
                        base__big: 'AwardsWidget_base__big_f7',
                        award__last: 'AwardsWidget_award__last_0d',
                    },
                    h = ({
                        size: e = F.W.Small,
                        notChosenRewardCount: u,
                        pointsCount: t,
                        isPointsLocked: a,
                        isAwardDisabled: n,
                        coinCount: s,
                        collectionItemCount: i,
                        maxCollectionItemCount: l,
                        newCollectionItemCount: _,
                        isBPFirstEnter: c,
                        isCollectionsEnabled: d,
                        onPointsClick: m,
                        onCoinClick: E,
                        onTakeRewardsClick: A,
                        onCollectionClick: C,
                        hasMarathon: h,
                        hasResource: g = !1,
                    }) =>
                        o().createElement(
                            'div',
                            { className: r()(D.base, D[`base__${e}`]) },
                            u > 0 &&
                                o().createElement(
                                    'div',
                                    { className: D.award },
                                    o().createElement(b, {
                                        type: F.w.Award,
                                        size: e,
                                        count: u,
                                        disabled: n,
                                        onClick: A,
                                    }),
                                ),
                            o().createElement(
                                'div',
                                { className: D.award },
                                o().createElement(b, { type: F.w.Coin, count: s, onClick: E, size: e }),
                            ),
                            o().createElement(
                                'div',
                                { className: D.award },
                                o().createElement(b, {
                                    type: F.w.Point,
                                    count: t,
                                    onClick: m,
                                    size: e,
                                    isLocked: a,
                                    hasMarathon: h,
                                    hasResource: g,
                                }),
                            ),
                            d &&
                                o().createElement(
                                    'div',
                                    { className: r()(D.award, D.award__last) },
                                    o().createElement(b, {
                                        type: F.w.Collection,
                                        count: i,
                                        maxCount: l,
                                        newItemsCount: _,
                                        hasTriger: c,
                                        onClick: C,
                                        size: e,
                                    }),
                                ),
                        );
            },
            323: (e, u, t) => {
                'use strict';
                t.d(u, { G: () => b });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n);
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
                var i = t(903),
                    l = t(3044),
                    _ = t(8546);
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
                    d = (e, u) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case _.$u.Small:
                                    return 'l';
                                case _.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(u)}${t}`;
                    },
                    m = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: u,
                            size: t,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: s,
                            labelAnimation: m,
                            newLabelAnimation: E,
                            isChapterChosen: A = !1,
                            chapterID: F = 0,
                            isProgressionCompleted: C = !1,
                            hasBeenActive: b = !1,
                            isChapterSelection: D = !1,
                            isProgression: h = !1,
                        }) => {
                            let g = '',
                                B = '';
                            t === _.$u.Small
                                ? ((g = 'Small'), (B = '__small'))
                                : t === _.$u.Micro && ((g = 'Micro'), (B = '__micro'));
                            const p = a === _.Bq.SwitchedChapterRightNow,
                                v = a === _.Bq.CompletedRightNow,
                                w = ((e, u, t, a, r) => (e || r ? u || !t : u || !a))(D, C, b, A, h),
                                f = !h && !D;
                            return o().createElement(
                                o().Fragment,
                                null,
                                w
                                    ? o().createElement('div', {
                                          className: r()(c.icon, B && c[`icon${B}`], v && c[`icon__animated${g}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = d(s, t);
                                                  if (f) {
                                                      if (C) return e.tank.$dyn(`tank_${u}`);
                                                      if (!A) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, i.wD)(e.chapterIcons, F, u);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: r()(
                                                  c.label,
                                                  c[`label${B}`],
                                                  p && c.label__new,
                                                  p && c[`label__new${g}`],
                                                  !v && C && c.label__disabled,
                                                  c[`label__${m}${g}`],
                                                  n && c[`label__hasProgress${g}`],
                                                  n && c[`label__hasProgress${g}${h ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(l._, {
                                              level: u,
                                              size: t,
                                              isGold: s,
                                              isFirstLevel: p,
                                              curState: m,
                                              showProgressionCompleted: v,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.label,
                                                c[`label${B}`],
                                                p && c.label__new,
                                                p && c[`label__new${g}`],
                                                c[`label__${E}${g}`],
                                                n && c[`label__hasProgress${g}`],
                                            ),
                                        },
                                        o().createElement(l._, {
                                            level: e,
                                            size: t,
                                            isGold: s,
                                            isFirstLevel: p,
                                            curState: E,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var E = t(1975);
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
                    F = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: u = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const s = r()(A.base, A[`base__${n}`], t && A.base__completed, !t && a && A.base__hidden);
                            return o().createElement(
                                'div',
                                { className: s },
                                o().createElement(E.ko, {
                                    key: e.to,
                                    size: E.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: u,
                                }),
                            );
                        },
                    );
                function C() {
                    return (
                        (C =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        C.apply(this, arguments)
                    );
                }
                const b = (0, n.memo)((e) => {
                    const u = e.progression,
                        t = e.size,
                        a = e.battlePassState,
                        n = e.hasBattlePass,
                        l = e.isChapterChosen,
                        c = e.hasBeenActive,
                        d = void 0 !== c && c,
                        E = e.isChapterSelection,
                        A = void 0 !== E && E,
                        b = e.isOpen,
                        D = void 0 !== b && b,
                        h = e.isProgression,
                        g = void 0 !== h && h,
                        B = e.showProgressBar,
                        p = void 0 === B || B,
                        v = e.chapterType,
                        w = e.chapterID;
                    let f = '',
                        S = '',
                        L = '';
                    t === _.$u.Small
                        ? ((f = 'Small'), (S = '__small'), (L = '_small'))
                        : t === _.$u.Micro && ((f = 'Micro'), (S = '__micro'), (L = '_micro'));
                    const P = D ? 'Open' : '',
                        k = a === _.Bq.CompletedRightNow,
                        y = n || a === _.Bq.Bought,
                        x = (a === _.Bq.Completed || k) && y,
                        M = (a === _.Bq.Completed || k) && !y,
                        N = x || M,
                        T = r()(
                            s.image,
                            s[`image${S}`],
                            D && s[`image__open${f}`],
                            y && s[`image__battlePass${f}${P}`],
                            a === _.Bq.AwaitSeason && s[`image__seasonWaiting${f}`],
                            M && s[`image__completedFree${f}${P}`],
                        ),
                        I = r()(s[`${v}`], s[`${v}${S}`]),
                        O = void 0 !== u.from,
                        R = p && ((O && l) || d);
                    return o().createElement(
                        'div',
                        { className: s.base },
                        o().createElement('div', { className: I }),
                        o().createElement(
                            'div',
                            { className: T, style: (0, i.FL)(w, L, D, y) },
                            a !== _.Bq.AwaitSeason &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        m,
                                        C(
                                            {
                                                hasProgression: O,
                                                isGolden: y,
                                                isProgressionCompleted: N,
                                                isChapterChosen: l,
                                                hasBeenActive: d,
                                                isChapterSelection: A,
                                                isProgression: g,
                                            },
                                            e,
                                            u,
                                        ),
                                    ),
                                    R &&
                                        o().createElement(F, {
                                            key: u.to,
                                            progression: u,
                                            showProgressionCompleted: k,
                                            isProgressionCompleted: N,
                                            size: t,
                                        }),
                                ),
                        ),
                    );
                });
            },
            3044: (e, u, t) => {
                'use strict';
                t.d(u, { _: () => i });
                var a = t(6483),
                    r = t.n(a),
                    n = t(6179),
                    o = t.n(n);
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
                        size: u,
                        isGold: t,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: i,
                        showProgressionCompleted: l,
                    }) => {
                        const _ = r()(s.base, s[`base__${u}`]),
                            c = r()(
                                s.text,
                                s.text__filtered,
                                s[`text__${u}`],
                                s[`text__${n}`],
                                l && s.text__hideWithDelay,
                                i && s.text__new,
                                a && s.text__rewardScreen,
                            ),
                            d = r()(
                                s.textWithBlend,
                                i && s.text__new,
                                l && s.text__hideWithDelay,
                                s[`textWithBlend__${n}`],
                            ),
                            m = r()(s.text, s.text__blended, s[`text__${u}`], a && s.text__rewardScreen),
                            E = r()(
                                s.textMask,
                                t && s.textMask__gold,
                                a && s.textMask__animated,
                                t && a && s.textMask__goldContrast,
                                s[`textMask__${u}`],
                            );
                        return o().createElement(
                            'div',
                            { className: _ },
                            o().createElement('div', { className: c }, e),
                            o().createElement(
                                'div',
                                { className: d },
                                o().createElement('div', { className: m }, e),
                                o().createElement('div', { className: E }),
                            ),
                        );
                    };
            },
            8546: (e, u, t) => {
                'use strict';
                let a, r, n, o;
                t.d(u, { $u: () => a, Bq: () => n }),
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
                    })(o || (o = {}));
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
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], n = !0, o = 0; o < u.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
        (__webpack_require__.j = 201),
        (() => {
            var e = { 201: 0, 737: 0, 730: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, o, s] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(1419));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
