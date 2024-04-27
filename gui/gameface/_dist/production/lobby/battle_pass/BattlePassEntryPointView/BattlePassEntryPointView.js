(() => {
    var __webpack_modules__ = {
            1975: (e, t, u) => {
                'use strict';
                u.d(t, { $u: () => m.$, ko: () => A });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    o = u.n(n),
                    l = u(2468),
                    i = u(7442),
                    s = u(2407),
                    _ = u(156),
                    m = u(7736),
                    c = u(1635);
                u(6823);
                const E = _.Gh,
                    d = {
                        freezed: !1,
                        withStack: !1,
                        type: m.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = E,
                            size: u = m.$.Default,
                            animationSettings: a = d,
                            disabled: n = !1,
                            withoutBackground: A = !1,
                            value: h,
                            deltaFrom: g,
                            lineRef: p,
                            onChangeAnimationState: F,
                            onEndAnimation: C,
                            onComplete: B,
                        }) => {
                            const b = (0, c.S)(h, e, g);
                            return o().createElement(
                                'div',
                                { className: r()(l.Z.base, l.Z[`base__${u}`]), style: (0, _.VQ)(t) },
                                !A && o().createElement(i.J, { size: u }),
                                o().createElement(s.r, {
                                    size: u,
                                    lineRef: p,
                                    disabled: n,
                                    value: b.value,
                                    deltaFrom: b.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: C,
                                    onChangeAnimationState: F,
                                    onComplete: B,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => s });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    o = u.n(n),
                    l = u(2468),
                    i = u(7736);
                const s = ({ size: e = i.$.Default }) =>
                    o().createElement('div', { className: r()(l.Z.background, l.Z[`background__${e}`]) });
            },
            8150: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => i });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    o = u.n(n),
                    l = u(8804);
                const i = ({ size: e }) => {
                    const t = o()(l.Z.base, l.Z[`base__${e}`]);
                    return r().createElement('div', { className: t });
                };
            },
            2407: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => s });
                var a = u(6179),
                    r = u.n(a),
                    n = u(5680),
                    o = u(6736),
                    l = u(2386);
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
                const s = (0, a.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: a,
                        deltaFrom: s,
                        animationSettings: _,
                        onEndAnimation: m,
                        onChangeAnimationState: c,
                        onComplete: E,
                    }) => {
                        if (s === t)
                            return r().createElement(n.M, {
                                key: `${s}-${t}`,
                                size: e,
                                value: t,
                                lineRef: u,
                                disabled: a,
                                onComplete: E,
                            });
                        const d = {
                            from: s,
                            to: t,
                            size: e,
                            lineRef: u,
                            disabled: a,
                            animationSettings: _,
                            onComplete: E,
                            onEndAnimation: m,
                            onChangeAnimationState: c,
                        };
                        return _.withStack
                            ? r().createElement(l.F, d)
                            : r().createElement(o.H, i({ key: `${s}-${t}` }, d));
                    },
                );
            },
            1848: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => s });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    o = u.n(n),
                    l = u(8150),
                    i = u(6664);
                const s = (0, a.memo)(
                    ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                        const _ = o()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                u && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                s && i.Z.base__withoutBounce,
                            ),
                            m = !u && !n;
                        return r().createElement(
                            'div',
                            { className: _, style: a, ref: t },
                            r().createElement('div', { className: i.Z.pattern }),
                            r().createElement('div', { className: i.Z.gradient }),
                            m && r().createElement(l.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => d });
                var a = u(6483),
                    r = u.n(a),
                    n = u(122),
                    o = u(6179),
                    l = u.n(o),
                    i = u(8150),
                    s = u(6823),
                    _ = u(6147);
                const m = (e) => (e ? { left: 0 } : { right: 0 }),
                    c = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    E = (e) => ({ transitionDuration: `${e}ms` }),
                    d = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: d,
                            to: A,
                            onEndAnimation: h,
                            onChangeAnimationState: g,
                            className: p,
                        }) => {
                            const F = A < a,
                                C = (0, o.useState)(s.S.Idle),
                                B = C[0],
                                b = C[1],
                                S = B === s.S.End,
                                D = B === s.S.Idle,
                                f = B === s.S.Grow,
                                v = B === s.S.Shrink,
                                w = (0, o.useCallback)(
                                    (e) => {
                                        b(e), g && g(e);
                                    },
                                    [g],
                                ),
                                L = (0, o.useCallback)(
                                    (e, t) =>
                                        (0, n.F)(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, o.useEffect)(() => {
                                if (!u)
                                    return D
                                        ? L(s.S.Grow, t)
                                        : f
                                          ? L(s.S.Shrink, e)
                                          : v
                                            ? L(s.S.End, e)
                                            : void (S && h && h());
                            }, [L, u, S, f, D, v, h, t, e]);
                            const P = (0, o.useMemo)(() => Object.assign({ width: '100%' }, E(e), m(F)), [F, e]),
                                O = (0, o.useMemo)(() => Object.assign({ width: '0%' }, E(e), m(F)), [F, e]),
                                y = (0, o.useMemo)(() => Object.assign({ width: '0%' }, c(F, a), E(e)), [a, F, e]),
                                T = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, c(F, a), E(e)),
                                    [a, F, A, e],
                                );
                            if (S) return null;
                            const M = r()(_.Z.base, p, F && 0 === A && _.Z.base__withoutBounce);
                            return l().createElement(
                                'div',
                                { style: D ? y : T, className: M },
                                l().createElement(
                                    'div',
                                    { style: v ? O : P, className: _.Z.glow },
                                    l().createElement(i.$, { size: d }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => s });
                var a = u(6179),
                    r = u.n(a),
                    n = u(122),
                    o = u(6823),
                    l = u(8150),
                    i = u(9919);
                const s = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: u,
                        from: s,
                        size: _,
                        to: m,
                        onEndAnimation: c,
                        onChangeAnimationState: E,
                    }) => {
                        const d = m < s,
                            A = (0, a.useState)(o.V.Idle),
                            h = A[0],
                            g = A[1],
                            p = h === o.V.In,
                            F = h === o.V.End,
                            C = h === o.V.Idle,
                            B = (0, a.useCallback)(
                                (e) => {
                                    g(e), E && E(e);
                                },
                                [E],
                            );
                        (0, a.useEffect)(() => {
                            if (C && !u) {
                                const e = t;
                                return (0, n.F)(() => {
                                    B(o.V.In);
                                }, e);
                            }
                        }, [B, u, C, t]),
                            (0, a.useEffect)(() => {
                                if (p) {
                                    const u = e + t;
                                    return (0, n.F)(() => {
                                        c && c(), B(o.V.End);
                                    }, u);
                                }
                            }, [B, p, c, t, e]);
                        const b = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [d ? 'left' : 'right']: '0',
                                }),
                                [d, t, e],
                            ),
                            S = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [d ? 'left' : 'right']: '0',
                                }),
                                [d, t, e],
                            ),
                            D = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(s - m)}%`, left: `${d ? m : s}%` }),
                                [s, d, m],
                            );
                        return F
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: i.Z.base, style: D },
                                  r().createElement(
                                      'div',
                                      { style: C ? b : S, className: i.Z.delta },
                                      r().createElement(l.$, { size: _ }),
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
                    o = u(1848),
                    l = u(6823);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: i,
                        disabled: s,
                        isComplete: _,
                        animationSettings: m,
                        onEndAnimation: c,
                        onChangeAnimationState: E,
                    }) => {
                        const d = e < u,
                            A = (0, a.useState)(!1),
                            h = A[0],
                            g = A[1],
                            p = (0, a.useCallback)(
                                (e) => {
                                    e === l.S.Shrink && g(!0), E && E(e);
                                },
                                [E],
                            ),
                            F = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            C = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${m.line.duration}ms` }),
                                [m.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(o.t, {
                                size: t,
                                lineRef: i,
                                disabled: s,
                                isComplete: _,
                                withoutBounce: d && 0 === e,
                                baseStyles: h ? C : F,
                            }),
                            u >= 0 &&
                                r().createElement(n.O, {
                                    transitionDuration: m.delta.duration,
                                    transitionDelay: m.delta.delay,
                                    onChangeAnimationState: p,
                                    freezed: m.freezed,
                                    onEndAnimation: c,
                                    from: u,
                                    size: t,
                                    to: e,
                                    className: m.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, u) => {
                'use strict';
                u.d(t, { D: () => l });
                var a = u(6179),
                    r = u.n(a),
                    n = u(5913),
                    o = u(1848);
                const l = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: l,
                        disabled: i,
                        isComplete: s,
                        animationSettings: _,
                        onChangeAnimationState: m,
                        onEndAnimation: c,
                    }) => {
                        const E = (0, a.useMemo)(
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
                            r().createElement(o.t, { size: t, lineRef: l, disabled: i, isComplete: s, baseStyles: E }),
                            u >= 0 &&
                                r().createElement(n.x, {
                                    transitionDuration: _.delta.duration,
                                    transitionDelay: _.delta.delay,
                                    freezed: _.freezed,
                                    from: u,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: m,
                                    onEndAnimation: c,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => _ });
                var a = u(6179),
                    r = u.n(a),
                    n = u(7736),
                    o = u(828),
                    l = u(538);
                const i = ['onComplete', 'onEndAnimation'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const _ = (0, a.memo)((e) => {
                    let t = e.onComplete,
                        u = e.onEndAnimation,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, i);
                    const m = (0, a.useState)(!1),
                        c = m[0],
                        E = m[1],
                        d = (0, a.useCallback)(() => {
                            const e = 100 === _.to;
                            e !== c && E(e), e && t && t(), u && u();
                        }, [c, t, u, _.to]);
                    switch (_.animationSettings.type) {
                        case n.r.Simple:
                            return r().createElement(o.D, s({}, _, { onEndAnimation: d, isComplete: c }));
                        case n.r.Growing:
                            return r().createElement(l.F, s({}, _, { onEndAnimation: d, isComplete: c }));
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
                const o = ['onEndAnimation'];
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
                        })(e, o);
                    const i = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        _ = 'number' == typeof i.current.from ? i.current.from : u.from;
                    return (
                        (i.current.from = _),
                        r().createElement(n.H, l({}, u, { onEndAnimation: s, key: `${_}-${u.to}`, from: _ }))
                    );
                });
            },
            5680: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => o });
                var a = u(6179),
                    r = u.n(a),
                    n = u(1848);
                const o = ({ size: e, value: t, lineRef: u, disabled: o, onComplete: l }) => {
                    const i = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        s = 100 === t;
                    return (
                        (0, a.useEffect)(() => {
                            s && l && l();
                        }, [s, l]),
                        r().createElement(n.t, { size: e, disabled: o, baseStyles: i, isComplete: s, lineRef: u })
                    );
                };
            },
            156: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => r, VQ: () => a });
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
            7736: (e, t, u) => {
                'use strict';
                let a, r;
                u.d(t, { $: () => a, r: () => r }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(r || (r = {}));
            },
            1635: (e, t, u) => {
                'use strict';
                u.d(t, { S: () => o });
                var a = u(7515),
                    r = u(6179);
                const n = (e, t, u) => {
                        if ('number' == typeof u) {
                            return ((0, a.u)(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    o = (e, t, u) =>
                        (0, r.useMemo)(() => {
                            const r = ((0, a.u)(0, t, e) / t) * 100;
                            return { value: r, deltaFrom: n(r, t, u) };
                        }, [u, t, e]);
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
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => l, onResize: () => n });
                var a = u(2472),
                    r = u(1176);
                const n = (0, a.E)('clientResized'),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const l = (function () {
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
                                        l = o[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            r &&
                                                (l(),
                                                window.removeEventListener(n, i),
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
                        graphicsQuality: () => o,
                    });
                var a = u(527);
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
                        addModelObserver: () => _,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => v,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => D,
                        getScale: () => h,
                        getSize: () => c,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => b,
                        isFocused: () => C,
                        pxToRem: () => g,
                        remToPx: () => p,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => w,
                    });
                var a = u(3722),
                    r = u(6112),
                    n = u(6538),
                    o = u(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function _(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function d(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    v = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => s });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    o = 32,
                    l = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                o = (function (e, t) {
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
                                      Object.assign({ __Type: u, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    s = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(l);
                        },
                        move(e) {
                            i(n, { isMouseEvent: !0, on: e });
                        },
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => n.Z, B3: () => s, Z5: () => o, B0: () => i, ry: () => p });
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
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    d = u(3138);
                const A = ['args'];
                function h(e, t, u, a, r, n, o) {
                    try {
                        var l = e[n](o),
                            i = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        function o(e) {
                                            h(n, a, r, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            h(n, a, r, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = (e, t) => {
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
                                })(t, A);
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
                    C = () => F(i.CLOSE),
                    B = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var b = u(7572);
                const S = r.instance,
                    D = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: _,
                        TimeFormatType: m,
                        DateFormatType: c,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => F(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => F(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, r = R.invalid('resId'), n) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                s = l.x,
                                _ = l.y,
                                m = l.width,
                                c = l.height,
                                E = {
                                    x: d.O.view.pxToRem(s) + o.x,
                                    y: d.O.view.pxToRem(_) + o.y,
                                    width: d.O.view.pxToRem(m),
                                    height: d.O.view.pxToRem(c),
                                };
                            F(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: F,
                        onBindingsReady: p,
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
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = D;
            },
            3452: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    r = u.n(a),
                    n = u(493),
                    o = u.n(n);
                const l = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var _;
                function m(e, t, u) {
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
                })(_ || (_ = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, m(E, d, s)),
                    h = (0, a.createContext)(A),
                    g = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, g);
                    const r = (0, a.useContext)(h),
                        n = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        s = r.small,
                        _ = r.extraSmall,
                        m = r.extraLargeWidth,
                        c = r.largeWidth,
                        E = r.mediumWidth,
                        d = r.smallWidth,
                        A = r.extraSmallWidth,
                        p = r.extraLargeHeight,
                        F = r.largeHeight,
                        C = r.mediumHeight,
                        B = r.smallHeight,
                        b = r.extraSmallHeight,
                        S = { extraLarge: p, large: F, medium: C, small: B, extraSmall: b };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && n) return t;
                        if (u.large && o) return t;
                        if (u.medium && i) return t;
                        if (u.small && s) return t;
                        if (u.extraSmall && _) return t;
                    } else {
                        if (u.extraLargeWidth && m) return l(t, u, S);
                        if (u.largeWidth && c) return l(t, u, S);
                        if (u.mediumWidth && E) return l(t, u, S);
                        if (u.smallWidth && d) return l(t, u, S);
                        if (u.extraSmallWidth && A) return l(t, u, S);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && F) return t;
                            if (u.mediumHeight && C) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, a.memo)(p);
                const F = (e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    C = (0, a.memo)(({ children: e }) => {
                        const t = (0, a.useContext)(h),
                            u = (0, a.useState)(t),
                            n = u[0],
                            o = u[1],
                            l = (0, a.useCallback)((e, t) => {
                                const u = i.O.view.pxToRem(e),
                                    a = i.O.view.pxToRem(t);
                                o(Object.assign({ width: u, height: a }, m(u, a, s)));
                            }, []);
                        F(() => {
                            engine.on('clientResized', l);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', l), [l]);
                        const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return r().createElement(h.Provider, { value: _ }, e);
                    });
                var B = u(6483),
                    b = u.n(B),
                    S = u(926),
                    D = u.n(S);
                let f, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
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
                const L = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            u = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    P = ['children', 'className'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: D().SMALL_WIDTH,
                        [v.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [v.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_HEIGHT,
                        [w.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [w.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: D().SMALL,
                        [f.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [f.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [f.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    I = (e) => {
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
                            })(e, P);
                        const n = L(),
                            o = n.mediaWidth,
                            l = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', O({ className: b()(u, y[o], T[l], M[i]) }, a), t);
                    },
                    x = ['children'];
                const N = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, x);
                        return r().createElement(C, null, r().createElement(I, u, t));
                    },
                    k = 33,
                    H = 0,
                    U = !0,
                    W = 'play';
                function G(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const r = a % u,
                            n = (r % t.columns) * e.width,
                            o = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: n, y: o };
                    };
                }
                const $ = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const X = (0, a.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            n = e.getImageSource,
                            o = e.frameCount,
                            l = e.onAnimate,
                            i = e.frameTime,
                            s = void 0 === i ? k : i,
                            _ = e.initialFrameIndex,
                            m = void 0 === _ ? H : _,
                            c = e.lastFrameIndex,
                            E = void 0 === c ? o - 1 : c,
                            d = e.loop,
                            A = void 0 === d ? U : d,
                            h = e.state,
                            g = void 0 === h ? W : h,
                            p = e.onAnimationDone,
                            F = e.onAnimationComplete,
                            C = e.poster,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, $);
                        const b = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = q(m, E, n),
                                                t = z(m, E),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        n = e.get(r);
                                                    n
                                                        ? (null == l || l(r, n),
                                                          u(n),
                                                          r === E &&
                                                              (null == F || F(),
                                                              A || (null == p || p(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, s);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && C ? { path: C, x: 0, y: 0 } : n(m),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => u(V(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [s, n, m, E, A, l, F, p, C, g]),
                            r().createElement('canvas', j({}, B, { width: t, height: u, ref: b }))
                        );
                    }),
                    z = (e, t) => {
                        let u = e;
                        return () => {
                            const a = u;
                            return (u += 1), u > t && (u = e), a;
                        };
                    },
                    V = (e, t) => Object.assign({}, e, { img: t }),
                    q = (e, t, u) => {
                        const a = new Map(),
                            r = {};
                        for (let n = e; n <= t; n++) {
                            const e = u(n),
                                t = r[e.path];
                            if (t) a.set(n, V(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${n})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(n, V(e, t));
                            }
                        }
                        return a;
                    };
                var Y = u(3403);
                function K() {
                    return !1;
                }
                console.log;
                var Z = u(9174);
                function Q(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return J(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return J(e, t);
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
                function J(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const ee = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const ue = te;
                var ae = u(3946);
                let re, ne;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(re || (re = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(ne || (ne = {}));
                re.style, re.tankman;
                const oe = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: o, children: l, mocks: s }) {
                                const _ = (0, a.useRef)([]),
                                    m = (u, a, r) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ee,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = r.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = u(t),
                                                        n = a.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (u, n) => {
                                                        const l = 'string' == typeof n ? `${a}.${n}` : a,
                                                            s = i.O.view.addModelObserver(l, t, !0);
                                                        return r.set(s, u), e && u(o(n)), s;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const u = o(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = Q(r.keys()); !(e = u()).done; ) n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            l =
                                                'real' === u
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            m = (e) => _.current.push(e),
                                            c = e({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            r = Z.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, Z.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            r = Z.LO.box(a, { equals: K });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, Z.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Z.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, Z.aD)((t) => {
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
                                                                o = n.reduce(
                                                                    (e, [t, u]) => ((e[u] = Z.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, Z.aD)((e) => {
                                                                            n.forEach(([t, u]) => {
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
                                            E = { mode: u, model: c, externalModel: l, cleanup: m };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && r ? r.controls(E) : t(E),
                                            externalModel: l,
                                            mode: u,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    E = (0, a.useState)(n),
                                    d = E[0],
                                    A = E[1],
                                    h = (0, a.useState)(() => m(n, o, s)),
                                    g = h[0],
                                    p = h[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? p(m(d, o, s)) : (c.current = !0);
                                    }, [s, d, o]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), _.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    r().createElement(u.Provider, { value: g }, l)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), chapterTypes: e.array('availableChapterTypes') },
                                u = (0, ae.Om)(
                                    () => {
                                        return (
                                            (e = t.chapterTypes.get()),
                                            (u = (e) => e),
                                            Array.isArray(e)
                                                ? e.map(u)
                                                : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a))
                                        );
                                        var e, u;
                                    },
                                    { equals: K },
                                ),
                                a = (0, ae.Om)(
                                    () =>
                                        (function (e, t) {
                                            if (Array.isArray(e)) return e.some(t);
                                            for (let u = 0; u < e.length; u++) if (t(ue(e, u), u, e)) return !0;
                                            return !1;
                                        })(t.chapterTypes.get(), (e) => e === ne.Marathon),
                                    { equals: K },
                                );
                            return Object.assign({}, t, { computes: { getAvailableChapterTypes: u, hasMarathon: a } });
                        },
                        ({ externalModel: e }) => ({ openBattlePass: e.createCallbackNoArgs('onClick') }),
                    ),
                    le = oe[0],
                    ie = oe[1];
                let se, _e, me;
                !(function (e) {
                    (e.NORMAL = 'normal'),
                        (e.NEW_LEVEL = 'newLevel'),
                        (e.BUY_BATTLE_PASS = 'buyBattlePass'),
                        (e.NOT_TAKEN_REWARDS = 'notTakenRewards'),
                        (e.PROGRESSION_COMPLETED = 'progressionCompleted'),
                        (e.NEW_CHAPTER = 'newChapter'),
                        (e.CHANGE_PROGRESS = 'changeProgress'),
                        (e.CHAPTER_NOT_CHOSEN = 'chapterNotChosen');
                })(se || (se = {})),
                    (function (e) {
                        (e.DISABLED = 'disabled'),
                            (e.SEASON_WAITING = 'seasonWaiting'),
                            (e.NORMAL = 'normal'),
                            (e.ATTENTION = 'attention');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(me || (me = {}));
                var ce = u(4179);
                const Ee = [
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
                function de(e) {
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
                const Ae = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ce.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    he = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            l = e.onMouseDown,
                            i = e.onClick,
                            s = e.ignoreShowDelay,
                            _ = void 0 !== s && s,
                            m = e.ignoreMouseClick,
                            c = void 0 !== m && m,
                            E = e.decoratorId,
                            d = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            h = void 0 === A || A,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            F = e.onShow,
                            C = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Ee);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [p],
                            ),
                            D = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Ae(u, d, { isMouseEvent: !0, on: !0, arguments: de(r) }, S),
                                    F && F(),
                                    (b.current.isVisible = !0));
                            }, [u, d, r, S, F]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Ae(u, d, { on: !1 }, S),
                                        b.current.isVisible && C && C(),
                                        (b.current.isVisible = !1);
                                }
                            }, [u, d, S, C]),
                            v = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', v, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', v, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === h && f();
                            }, [h, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return h
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(D, _ ? 100 : 400)),
                                                      n && n(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              f(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === c && f(), null == i || i(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === c && f(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var w;
                    },
                    ge = (e) => {
                        const t = (0, a.useRef)();
                        return (
                            (0, a.useEffect)(() => {
                                t.current = e;
                            }, [e]),
                            t.current
                        );
                    };
                let pe;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(pe || (pe = {}));
                (() => {
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
                })();
                let Fe;
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
                })(Fe || (Fe = {}));
                Date.now();
                function Ce(e) {
                    engine.call('PlaySound', e);
                }
                ce.Sw.instance;
                let Be;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Be || (Be = {}));
                ce.Sw.instance;
                const be = ge,
                    Se = [];
                function De(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), Se)
                    );
                }
                let fe, ve, we, Le;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.BattlePassProgression = 'battle_pass_progression'),
                        (e.CollectionProgression = 'collection_progression');
                })(fe || (fe = {})),
                    (function (e) {
                        (e.CollectionEntryPointView = 'collection_entry_point_view'),
                            (e.BattlePassCollectionEntryPoint = 'battle_pass_collection_entry_point'),
                            (e.CollectionProgressTooltip = 'collection_progress_tooltip');
                    })(ve || (ve = {})),
                    (function (e) {
                        e.Click = 'click';
                    })(we || (we = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(Le || (Le = {}));
                let Pe;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(Pe || (Pe = {}));
                const Oe = 'metrics',
                    ye = ({ partnerID: e, item: t, parentScreen: u, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    Te = (e, t) => {
                        const u = (0, a.useCallback)(
                            (u, a = Le.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => u(e, t, a);
                    },
                    Me = 'Blink_base_88',
                    Ie = 'Blink_shadowWrapper_49',
                    xe = 'Blink_blinkWrapper_33',
                    Ne = 'Blink_blinkInner_82',
                    Re = 'Blink_blink_68',
                    ke = (0, Y.Pi)(({ isInfinite: e = !1, children: t }) => {
                        const u = ie().model.root.get().isSmall,
                            a = e ? 'infinite' : 1;
                        return r().createElement(
                            'div',
                            { className: Me },
                            r().createElement('div', {
                                className: Ie,
                                style: {
                                    maskImage: `url('R.images.gui.maps.icons.battlePass.logo.full_widget_mask${u ? '_small' : ''}')`,
                                    animationIterationCount: a,
                                },
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: xe,
                                    style: {
                                        maskImage: `url('R.images.gui.maps.icons.battlePass.logo.widget_mask${u ? '_small' : ''}')`,
                                    },
                                },
                                r().createElement(
                                    'div',
                                    { className: Ne, style: { animationIterationCount: a } },
                                    r().createElement('div', { className: Re }),
                                ),
                            ),
                            t,
                        );
                    });
                var He = u(122),
                    Ue = u(903);
                let We, Ge, $e, je, Xe, ze, Ve;
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
                        (e.HBVehicleUnlock = 'hbUnlockVehicles'),
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
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.MayEntitlement100 = 'historical_battles_100'),
                        (e.HistoricalBattleDiscount25 = 'historical_battles_25'),
                        (e.HistoricalBattleDiscount50 = 'historical_battles_50'),
                        (e.HistoricalBattleDiscount75 = 'historical_battles_75');
                })(We || (We = {})),
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
                    })(Ge || (Ge = {})),
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
                    })($e || ($e = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(je || (je = {})),
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
                    })(Xe || (Xe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ze || (ze = {})),
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
                    })(Ve || (Ve = {}));
                class qe extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = ce.B3.GOLD;
                        else e = ce.B3.INTEGRAL;
                        const t = ce.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                qe.defaultProps = { format: 'integral' };
                We.Items,
                    We.Equipment,
                    We.Xp,
                    We.XpFactor,
                    We.Blueprints,
                    We.BlueprintsAny,
                    We.Goodies,
                    We.Berths,
                    We.Slots,
                    We.Tokens,
                    We.CrewSkins,
                    We.CrewBooks,
                    We.Customizations,
                    We.CreditsFactor,
                    We.TankmenXp,
                    We.TankmenXpFactor,
                    We.FreeXpFactor,
                    We.BattleToken,
                    We.HBVehicleUnlock,
                    We.PremiumUniversal,
                    We.NaturalCover,
                    We.BpCoin,
                    We.BattlePassSelectToken,
                    We.BattlaPassFinalAchievement,
                    We.BattleBadge,
                    We.BonusX5,
                    We.CrewBonusX3,
                    We.NewYearFillers,
                    We.NewYearInvoice,
                    We.EpicSelectToken,
                    We.Comp7TokenWeeklyReward,
                    We.BattleBoosterGift,
                    We.CosmicLootboxCommon,
                    We.CosmicLootboxSilver,
                    We.Gold,
                    We.Credits,
                    We.Crystal,
                    We.FreeXp,
                    We.BattlePassPoints,
                    We.PremiumPlus,
                    We.Premium;
                let Ye, Ke;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'),
                        (e.Disabled = 'disabled');
                })(Ye || (Ye = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(Ke || (Ke = {}));
                var Ze = u(8546);
                var Qe = u(323);
                const Je = 'StateNormal_base_0d',
                    et = 'StateNormal_flag_f8',
                    tt = 'StateNormal_base__medium_e3',
                    ut = 'StateNormal_emblem_0f',
                    at = 'StateNormal_counter_cd',
                    rt = 'StateNormal_chapterLogoIcon_26',
                    nt = 'StateNormal_base__smallX2_07',
                    ot = 'StateNormal_freePoints_37',
                    lt = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = t ? 'm' : 'l';
                        return { backgroundImage: `url(${(0, Ue.wD)(u, e, a)})` };
                    },
                    it = ({
                        chapterID: e,
                        isSmall: t,
                        scale: u,
                        progressionState: n,
                        hasBattlePass: o,
                        stateClasses: l,
                        onFinish: i,
                        duration: s,
                        progressInfo: _,
                        emblem: m,
                        notChosenRewardCount: c,
                        isSeasonWaiting: E,
                        isChapterChosen: d,
                        freePoints: A,
                        chapterType: h,
                        children: g,
                    }) => {
                        const p = L().mediaSize;
                        (0, a.useEffect)(() => {
                            if (void 0 !== s && void 0 !== i)
                                return (0, He.F)(() => {
                                    i();
                                }, s);
                        }, [s, i]);
                        const F = (0, a.useMemo)(
                                () =>
                                    E
                                        ? Ze.Bq.AwaitSeason
                                        : d || n === Ze.Tj.ACTIVE || n === Ze.Bq.Completed
                                          ? n === Ze.Tj.ACTIVE
                                              ? o
                                                  ? Ze.Bq.Bought
                                                  : Ze.Bq.Free
                                              : Ze.Bq.Completed
                                          : Ze.Bq.ChapterNotChosen,
                                [o, n, E, d],
                            ),
                            C = F === Ze.Bq.Completed,
                            B = Boolean(d) && F !== Ze.Bq.ChapterNotChosen,
                            S = Boolean(d) && !C,
                            D = C && Boolean(A),
                            v = B || D,
                            w = t ? Ze.$u.Small : Ze.$u.Medium;
                        return r().createElement(
                            'div',
                            { className: b()(Je, !t && tt, p <= f.Small && 2 === u && nt) },
                            S &&
                                r().createElement('div', {
                                    className: b()(et, null == l ? void 0 : l.flag),
                                    style: lt(e, t),
                                }),
                            r().createElement(
                                'div',
                                { className: b()(ut, null == l ? void 0 : l.emblem) },
                                r().createElement(Qe.G, {
                                    chapterID: e,
                                    progression: _,
                                    size: t ? Ze.$u.Small : Ze.$u.Medium,
                                    battlePassState: m || F,
                                    hasBattlePass: o,
                                    isChapterChosen: d,
                                    isOpen: v,
                                    chapterType: h,
                                }),
                                n === Ze.Tj.NOT_CHOSEN && r().createElement(ke, { isInfinite: !0 }),
                                0 !== c &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: b()(at, l && l.counter),
                                            lang: R.strings.settings.LANGUAGE_CODE(),
                                        },
                                        c,
                                    ),
                                g,
                            ),
                            B &&
                                r().createElement('div', {
                                    className: b()(rt, l && l.chapterLogoIcon),
                                    style: (0, Ue.cs)(e, o, w),
                                }),
                            D &&
                                r().createElement(
                                    'div',
                                    { className: b()(ot, l && l.freePoints) },
                                    ((e = 0) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))(A),
                                ),
                        );
                    },
                    st = 'StateAttention_base_2e',
                    _t = 'StateAttention_emblem_1b',
                    mt = 'StateAttention_emblemCopy_17';
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                const Et = (e) => {
                        const t = (0, a.useMemo)(() => ({ emblem: _t }), []);
                        return (
                            (0, a.useEffect)(() => {
                                Ce('bp_attention_widget');
                            }, []),
                            r().createElement(
                                'div',
                                { className: st },
                                r().createElement('div', { className: mt }),
                                r().createElement(
                                    it,
                                    ct({ stateClasses: t, duration: 2600 }, e),
                                    r().createElement(ke, null),
                                ),
                            )
                        );
                    },
                    dt = {
                        base: 'StateBuyBP_base_7e',
                        flag: 'StateBuyBP_flag_30',
                        flagBuyBPIn: 'StateBuyBP_flagBuyBPIn_cc',
                        emblem: 'StateBuyBP_emblem_26',
                        emblemBuyBP: 'StateBuyBP_emblemBuyBP_13',
                        fadeInWithScale: 'StateBuyBP_fadeInWithScale_b4',
                        slideUp: 'StateBuyBP_slideUp_19',
                        wrapperHover: 'StateBuyBP_wrapperHover_f7',
                        wrapperOut: 'StateBuyBP_wrapperOut_56',
                        flagHover: 'StateBuyBP_flagHover_70',
                        emblemHover: 'StateBuyBP_emblemHover_0a',
                        logoIconHover: 'StateBuyBP_logoIconHover_6b',
                        logoIconHoverSmall: 'StateBuyBP_logoIconHoverSmall_91',
                        logoSmallX2IconHover: 'StateBuyBP_logoSmallX2IconHover_6c',
                        freePointsHover: 'StateBuyBP_freePointsHover_12',
                        freePointsSmallX2Hover: 'StateBuyBP_freePointsSmallX2Hover_c5',
                        flagOut: 'StateBuyBP_flagOut_e1',
                        emblemOut: 'StateBuyBP_emblemOut_e6',
                        freePointsOut: 'StateBuyBP_freePointsOut_f0',
                        freePointsSmallX2Out: 'StateBuyBP_freePointsSmallX2Out_57',
                        logoIconOut: 'StateBuyBP_logoIconOut_b2',
                        logoIconOutSmall: 'StateBuyBP_logoIconOutSmall_02',
                        logoSmallX2IconOut: 'StateBuyBP_logoSmallX2IconOut_91',
                        emblemLevelUp: 'StateBuyBP_emblemLevelUp_86',
                        emblemAttention: 'StateBuyBP_emblemAttention_ef',
                        emblemCopyAttention: 'StateBuyBP_emblemCopyAttention_2f',
                        flagLevelUp: 'StateBuyBP_flagLevelUp_ec',
                        flagLevelUpPosOut: 'StateBuyBP_flagLevelUpPosOut_ec',
                        flagLevelUpLightOut: 'StateBuyBP_flagLevelUpLightOut_96',
                        flareLevelUp: 'StateBuyBP_flareLevelUp_15',
                        flagSwitchChapter: 'StateBuyBP_flagSwitchChapter_c4',
                        lightBuyBP: 'StateBuyBP_lightBuyBP_18',
                        lightAttention: 'StateBuyBP_lightAttention_6f',
                        lightAttentionSmall: 'StateBuyBP_lightAttentionSmall_e3',
                        lightChapterNotChosen: 'StateBuyBP_lightChapterNotChosen_a6',
                        lightChapterNotChosenSmall: 'StateBuyBP_lightChapterNotChosenSmall_13',
                    },
                    At = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = L().mediaSize;
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    dt.base,
                                    !t && dt.base__medium,
                                    a <= f.Small && 2 === u && dt.base__smallX2,
                                ),
                            },
                            r().createElement(it, e, r().createElement(ke, null)),
                        );
                    },
                    ht = 'StateChapterNotChosen_base_ff',
                    gt = 'StateChapterNotChosen_flag_e3',
                    pt = 'StateChapterNotChosen_emblem_38';
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const Ct = (e) =>
                        r().createElement(
                            'div',
                            { className: ht },
                            r().createElement(
                                it,
                                Ft({}, e, { stateClasses: { emblem: e.isFirstShow ? pt : '', flag: gt } }),
                            ),
                        ),
                    Bt = {
                        base: 'StateComplete_base_c7',
                        flag: 'StateComplete_flag_4a',
                        flagLevelUp: 'StateComplete_flagLevelUp_f2',
                        emblem: 'StateComplete_emblem_0e',
                        emblemLevelUp: 'StateComplete_emblemLevelUp_86',
                        fadeInWithScale: 'StateComplete_fadeInWithScale_31',
                        slideUp: 'StateComplete_slideUp_e6',
                        wrapperHover: 'StateComplete_wrapperHover_67',
                        wrapperOut: 'StateComplete_wrapperOut_4b',
                        flagHover: 'StateComplete_flagHover_c2',
                        emblemHover: 'StateComplete_emblemHover_c8',
                        logoIconHover: 'StateComplete_logoIconHover_63',
                        logoIconHoverSmall: 'StateComplete_logoIconHoverSmall_a6',
                        logoSmallX2IconHover: 'StateComplete_logoSmallX2IconHover_0d',
                        freePointsHover: 'StateComplete_freePointsHover_b7',
                        freePointsSmallX2Hover: 'StateComplete_freePointsSmallX2Hover_52',
                        flagOut: 'StateComplete_flagOut_f0',
                        emblemOut: 'StateComplete_emblemOut_7f',
                        freePointsOut: 'StateComplete_freePointsOut_b5',
                        freePointsSmallX2Out: 'StateComplete_freePointsSmallX2Out_7c',
                        logoIconOut: 'StateComplete_logoIconOut_f1',
                        logoIconOutSmall: 'StateComplete_logoIconOutSmall_5d',
                        logoSmallX2IconOut: 'StateComplete_logoSmallX2IconOut_e0',
                        emblemAttention: 'StateComplete_emblemAttention_31',
                        emblemCopyAttention: 'StateComplete_emblemCopyAttention_7e',
                        flagLevelUpPosOut: 'StateComplete_flagLevelUpPosOut_5b',
                        flagLevelUpLightOut: 'StateComplete_flagLevelUpLightOut_04',
                        flareLevelUp: 'StateComplete_flareLevelUp_e2',
                        flagBuyBPIn: 'StateComplete_flagBuyBPIn_2e',
                        flagSwitchChapter: 'StateComplete_flagSwitchChapter_c3',
                        emblemBuyBP: 'StateComplete_emblemBuyBP_50',
                        lightBuyBP: 'StateComplete_lightBuyBP_86',
                        lightAttention: 'StateComplete_lightAttention_8e',
                        lightAttentionSmall: 'StateComplete_lightAttentionSmall_03',
                        lightChapterNotChosen: 'StateComplete_lightChapterNotChosen_49',
                        lightChapterNotChosenSmall: 'StateComplete_lightChapterNotChosenSmall_d6',
                    };
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const St = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = L().mediaSize,
                            n = { emblem: Bt.emblem, flag: Bt.flag };
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    Bt.base,
                                    !t && Bt.base__medium,
                                    a <= f.Small && 2 === u && Bt.base__smallX2,
                                ),
                            },
                            r().createElement(it, bt({}, e, { stateClasses: n }), r().createElement(ke, null)),
                        );
                    },
                    Dt = {
                        base: 'StateLevelUp_base_c1',
                        flag: 'StateLevelUp_flag_8f',
                        flagLevelUp: 'StateLevelUp_flagLevelUp_fa',
                        emblem: 'StateLevelUp_emblem_fe',
                        emblemLevelUp: 'StateLevelUp_emblemLevelUp_f4',
                        fadeInWithScale: 'StateLevelUp_fadeInWithScale_0b',
                        slideUp: 'StateLevelUp_slideUp_aa',
                        wrapperHover: 'StateLevelUp_wrapperHover_ca',
                        wrapperOut: 'StateLevelUp_wrapperOut_03',
                        flagHover: 'StateLevelUp_flagHover_bf',
                        emblemHover: 'StateLevelUp_emblemHover_b4',
                        logoIconHover: 'StateLevelUp_logoIconHover_07',
                        logoIconHoverSmall: 'StateLevelUp_logoIconHoverSmall_21',
                        logoSmallX2IconHover: 'StateLevelUp_logoSmallX2IconHover_55',
                        freePointsHover: 'StateLevelUp_freePointsHover_c9',
                        freePointsSmallX2Hover: 'StateLevelUp_freePointsSmallX2Hover_de',
                        flagOut: 'StateLevelUp_flagOut_5e',
                        emblemOut: 'StateLevelUp_emblemOut_a4',
                        freePointsOut: 'StateLevelUp_freePointsOut_70',
                        freePointsSmallX2Out: 'StateLevelUp_freePointsSmallX2Out_12',
                        logoIconOut: 'StateLevelUp_logoIconOut_44',
                        logoIconOutSmall: 'StateLevelUp_logoIconOutSmall_db',
                        logoSmallX2IconOut: 'StateLevelUp_logoSmallX2IconOut_c9',
                        emblemAttention: 'StateLevelUp_emblemAttention_1a',
                        emblemCopyAttention: 'StateLevelUp_emblemCopyAttention_0e',
                        flagLevelUpPosOut: 'StateLevelUp_flagLevelUpPosOut_c8',
                        flagLevelUpLightOut: 'StateLevelUp_flagLevelUpLightOut_25',
                        flareLevelUp: 'StateLevelUp_flareLevelUp_87',
                        flagBuyBPIn: 'StateLevelUp_flagBuyBPIn_3b',
                        flagSwitchChapter: 'StateLevelUp_flagSwitchChapter_61',
                        emblemBuyBP: 'StateLevelUp_emblemBuyBP_b4',
                        lightBuyBP: 'StateLevelUp_lightBuyBP_86',
                        lightAttention: 'StateLevelUp_lightAttention_64',
                        lightAttentionSmall: 'StateLevelUp_lightAttentionSmall_d2',
                        lightChapterNotChosen: 'StateLevelUp_lightChapterNotChosen_b5',
                        lightChapterNotChosenSmall: 'StateLevelUp_lightChapterNotChosenSmall_08',
                    };
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
                const vt = (e) => {
                        const t = e.prevLevel,
                            u = e.progressInfo,
                            n = e.scale,
                            o = e.isSmall,
                            l = (0, a.useState)(0),
                            i = l[0],
                            s = l[1],
                            _ = (0, a.useState)(0),
                            m = _[0],
                            c = _[1],
                            E = (0, a.useState)(u),
                            d = E[0],
                            A = E[1],
                            h = (0, a.useState)(!1),
                            g = h[0],
                            p = h[1],
                            F = (0, a.useState)(!1),
                            C = F[0],
                            B = F[1],
                            S = L().mediaSize,
                            D = (0, a.useMemo)(() => (g ? { emblem: Dt.emblem, flag: Dt.flag } : void 0), [g]),
                            v = (0, a.useCallback)(() => {
                                A({
                                    from: t > u.level ? 99 : 0,
                                    to: u.to,
                                    level: u.level,
                                    labelAnimation: Ze.ru.None,
                                    newLabelAnimation: Ze.ru.None,
                                });
                            }, [u, t]),
                            w = (0, a.useCallback)(() => {
                                Ce('bp_levelup_widget'),
                                    p(!0),
                                    A({
                                        from: t > u.level ? 99 : 0,
                                        to: u.to,
                                        level: t,
                                        newLevel: u.level,
                                        labelAnimation: Ze.ru.HideLevel,
                                        newLabelAnimation: Ze.ru.ShowLevel,
                                    }),
                                    c(window.setTimeout(v, 1200));
                            }, [u, t, v]);
                        return (
                            (0, a.useLayoutEffect)(() => {
                                C ||
                                    (s(window.setTimeout(w, 1200)),
                                    A({ from: u.from, to: t > u.level ? 0 : 99, level: t }),
                                    B(!0));
                            }, [w, u, t, C]),
                            (0, a.useEffect)(
                                () => () => {
                                    window.clearTimeout(i), window.clearTimeout(m);
                                },
                                [i, m],
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Dt.base,
                                        !o && Dt.base__medium,
                                        S <= f.Small && 2 === n && Dt.base__smallX2,
                                    ),
                                },
                                r().createElement(
                                    it,
                                    ft({}, e, { progressInfo: d, stateClasses: D, duration: 3e3 }),
                                    g && r().createElement(ke, null),
                                ),
                            )
                        );
                    },
                    wt = 'StateMouseOut_base_63',
                    Lt = 'StateMouseOut_flag_b0',
                    Pt = 'StateMouseOut_emblem_cf',
                    Ot = 'StateMouseOut_chapterLogoIcon_55',
                    yt = 'StateMouseOut_base__medium_89',
                    Tt = 'StateMouseOut_base__smallX2_e5',
                    Mt = 'StateMouseOut_freePoints_fb';
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const xt = (e) => {
                        const t = e.scale,
                            u = L().mediaSize,
                            a = { emblem: Pt, flag: Lt, chapterLogoIcon: Ot, freePoints: Mt };
                        return r().createElement(
                            'div',
                            { className: b()(wt, u <= f.Small && 2 === t && Tt, u > f.Small && yt) },
                            r().createElement(it, It({}, e, { stateClasses: a, duration: 200 })),
                        );
                    },
                    Nt = 'StateMouseOver_base_95',
                    Rt = 'StateMouseOver_flag_34',
                    kt = 'StateMouseOver_emblem_aa',
                    Ht = 'StateMouseOver_chapterLogoIcon_a8',
                    Ut = 'StateMouseOver_base__medium_d1',
                    Wt = 'StateMouseOver_base__smallX2_b2',
                    Gt = 'StateMouseOver_freePoints_ff';
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const jt = (e) => {
                        const t = e.scale,
                            u = L().mediaSize,
                            n = { emblem: kt, flag: Rt, chapterLogoIcon: Ht, freePoints: Gt };
                        return (
                            (0, a.useEffect)(() => {
                                Ce('highlight');
                            }, []),
                            r().createElement(
                                'div',
                                { className: b()(Nt, u <= f.Small && 2 === t && Wt, u > f.Small && Ut) },
                                r().createElement(it, $t({}, e, { stateClasses: n })),
                            )
                        );
                    },
                    Xt = 'StateNotTakenRewards_base_21',
                    zt = 'StateNotTakenRewards_counter_dd';
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const qt = (e) => {
                        const t = (0, a.useMemo)(() => ({ counter: zt }), []);
                        return r().createElement(
                            'div',
                            { className: Xt },
                            r().createElement(it, Vt({ stateClasses: t, duration: 2600 }, e)),
                        );
                    },
                    Yt = 'StateProgressChange_base_b5';
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                const Zt = (e) =>
                        r().createElement(
                            'div',
                            { className: Yt },
                            r().createElement(it, Kt({}, e, { duration: 1200 })),
                        ),
                    Qt = 'StateShow_base_ef',
                    Jt = 'StateShow_flag_31',
                    eu = 'StateShow_emblem_44',
                    tu = 'StateShow_chapterLogoIcon_66',
                    uu = 'StateShow_freePoints_36';
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const ru = (e) => {
                        const t = e.isFirstShow,
                            u = e.progressionState,
                            n = (0, a.useMemo)(
                                () => ({ emblem: eu, flag: Jt, chapterLogoIcon: tu, freePoints: uu }),
                                [],
                            );
                        (0, a.useEffect)(() => {
                            Ce(t || u === Ze.Tj.NOT_CHOSEN ? 'bp_show_widget' : 'bp_show_widget_02');
                        }, [t, u]);
                        const o = u === Ze.Tj.COMPLETED;
                        return r().createElement(
                            'div',
                            { className: Qt },
                            r().createElement(
                                it,
                                au({}, e, { stateClasses: n, duration: t ? 1650 : 600 }),
                                t && !o && r().createElement(ke, null),
                            ),
                        );
                    },
                    nu = {
                        base: 'StateSwitchChapter_base_05',
                        flag: 'StateSwitchChapter_flag_79',
                        flagSwitchChapter: 'StateSwitchChapter_flagSwitchChapter_8a',
                        emblem: 'StateSwitchChapter_emblem_d5',
                        slideUp: 'StateSwitchChapter_slideUp_0d',
                        fadeInWithScale: 'StateSwitchChapter_fadeInWithScale_2b',
                        wrapperHover: 'StateSwitchChapter_wrapperHover_2c',
                        wrapperOut: 'StateSwitchChapter_wrapperOut_e6',
                        flagHover: 'StateSwitchChapter_flagHover_69',
                        emblemHover: 'StateSwitchChapter_emblemHover_55',
                        logoIconHover: 'StateSwitchChapter_logoIconHover_25',
                        logoIconHoverSmall: 'StateSwitchChapter_logoIconHoverSmall_44',
                        logoSmallX2IconHover: 'StateSwitchChapter_logoSmallX2IconHover_b9',
                        freePointsHover: 'StateSwitchChapter_freePointsHover_6e',
                        freePointsSmallX2Hover: 'StateSwitchChapter_freePointsSmallX2Hover_5f',
                        flagOut: 'StateSwitchChapter_flagOut_13',
                        emblemOut: 'StateSwitchChapter_emblemOut_e8',
                        freePointsOut: 'StateSwitchChapter_freePointsOut_dc',
                        freePointsSmallX2Out: 'StateSwitchChapter_freePointsSmallX2Out_56',
                        logoIconOut: 'StateSwitchChapter_logoIconOut_dc',
                        logoIconOutSmall: 'StateSwitchChapter_logoIconOutSmall_c3',
                        logoSmallX2IconOut: 'StateSwitchChapter_logoSmallX2IconOut_1b',
                        emblemLevelUp: 'StateSwitchChapter_emblemLevelUp_c5',
                        emblemAttention: 'StateSwitchChapter_emblemAttention_9e',
                        emblemCopyAttention: 'StateSwitchChapter_emblemCopyAttention_4a',
                        flagLevelUp: 'StateSwitchChapter_flagLevelUp_72',
                        flagLevelUpPosOut: 'StateSwitchChapter_flagLevelUpPosOut_45',
                        flagLevelUpLightOut: 'StateSwitchChapter_flagLevelUpLightOut_b6',
                        flareLevelUp: 'StateSwitchChapter_flareLevelUp_50',
                        flagBuyBPIn: 'StateSwitchChapter_flagBuyBPIn_75',
                        emblemBuyBP: 'StateSwitchChapter_emblemBuyBP_ba',
                        lightBuyBP: 'StateSwitchChapter_lightBuyBP_19',
                        lightAttention: 'StateSwitchChapter_lightAttention_2a',
                        lightAttentionSmall: 'StateSwitchChapter_lightAttentionSmall_24',
                        lightChapterNotChosen: 'StateSwitchChapter_lightChapterNotChosen_da',
                        lightChapterNotChosenSmall: 'StateSwitchChapter_lightChapterNotChosenSmall_c5',
                    };
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const lu = (e) => {
                    const t = e.progressInfo,
                        u = e.isSmall,
                        n = e.scale,
                        o = e.hasBattlePass,
                        l = (0, a.useState)(!1),
                        i = l[0],
                        s = l[1],
                        _ = L().mediaSize,
                        m = { emblem: nu.emblem, flag: nu.flag },
                        c = (0, a.useCallback)(() => {
                            s(!0);
                        }, []),
                        E = (0, a.useCallback)(() => {
                            const e = window.setTimeout(c, 500);
                            return () => {
                                window.clearTimeout(e);
                            };
                        }, [c]);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            const e = window.setTimeout(E, 450);
                            return () => {
                                window.clearTimeout(e);
                            };
                        }, [E]),
                        r().createElement(
                            'div',
                            {
                                className: b()(
                                    nu.base,
                                    !u && nu.base__medium,
                                    _ <= f.Small && 2 === n && nu.base__smallX2,
                                ),
                            },
                            r().createElement(
                                it,
                                ou({}, e, {
                                    progressInfo: t,
                                    emblem: o ? Ze.Bq.Bought : Ze.Bq.Free,
                                    stateClasses: m,
                                    duration: 3500,
                                }),
                                i && r().createElement(ke, null),
                            ),
                        )
                    );
                };
                let iu;
                !(function (e) {
                    (e.NORMAL = 'NORMAL'),
                        (e.SHOW = 'SHOW'),
                        (e.PROGRESS_CHANGE = 'PROGRESS_CHANGE'),
                        (e.MOUSE_OVER = 'MOUSE_OVER'),
                        (e.MOUSE_OUT = 'MOUSE_OUT'),
                        (e.LEVEL_DOWN = 'LEVEL_DOWN'),
                        (e.LEVEL_UP = 'LEVEL_UP'),
                        (e.BUY_BP = 'BUY_BP'),
                        (e.SWITCH_CHAPTER = 'SWITCH_CHAPTER'),
                        (e.SHOW_NOT_TAKEN_REWARDS = 'SHOW_NOT_TAKEN_REWARDS'),
                        (e.COMPLETE = 'COMPLETE'),
                        (e.ATTENTION = 'ATTENTION'),
                        (e.CHAPTER_NOT_CHOSEN = 'CHAPTER_NOT_CHOSEN'),
                        (e.MARATHON_CHAPTER = 'MARATHON_CHAPTER');
                })(iu || (iu = {}));
                const su = {
                    base: 'Content_base_81',
                    base__smallX2: 'Content_base__smallX2_95',
                    base__disabled: 'Content_base__disabled_76',
                    base__seasonWaiting: 'Content_base__seasonWaiting_7c',
                    effects: 'Content_effects_0d',
                    effects__normal: 'Content_effects__normal_cd',
                    effects__disabled: 'Content_effects__disabled_44',
                    effects__seasonWaiting: 'Content_effects__seasonWaiting_4d',
                    componentWrapper: 'Content_componentWrapper_15',
                    componentWrapper__hidden: 'Content_componentWrapper__hidden_7a',
                    fadeInWithScale: 'Content_fadeInWithScale_fc',
                    slideUp: 'Content_slideUp_39',
                    wrapperHover: 'Content_wrapperHover_39',
                    wrapperOut: 'Content_wrapperOut_d1',
                    flagHover: 'Content_flagHover_73',
                    emblemHover: 'Content_emblemHover_1a',
                    logoIconHover: 'Content_logoIconHover_26',
                    logoIconHoverSmall: 'Content_logoIconHoverSmall_4e',
                    logoSmallX2IconHover: 'Content_logoSmallX2IconHover_ef',
                    freePointsHover: 'Content_freePointsHover_8d',
                    freePointsSmallX2Hover: 'Content_freePointsSmallX2Hover_2d',
                    flagOut: 'Content_flagOut_c3',
                    emblemOut: 'Content_emblemOut_01',
                    freePointsOut: 'Content_freePointsOut_31',
                    freePointsSmallX2Out: 'Content_freePointsSmallX2Out_73',
                    logoIconOut: 'Content_logoIconOut_f1',
                    logoIconOutSmall: 'Content_logoIconOutSmall_1d',
                    logoSmallX2IconOut: 'Content_logoSmallX2IconOut_49',
                    emblemLevelUp: 'Content_emblemLevelUp_38',
                    emblemAttention: 'Content_emblemAttention_40',
                    emblemCopyAttention: 'Content_emblemCopyAttention_53',
                    flagLevelUp: 'Content_flagLevelUp_85',
                    flagLevelUpPosOut: 'Content_flagLevelUpPosOut_66',
                    flagLevelUpLightOut: 'Content_flagLevelUpLightOut_fe',
                    flareLevelUp: 'Content_flareLevelUp_b6',
                    flagBuyBPIn: 'Content_flagBuyBPIn_49',
                    flagSwitchChapter: 'Content_flagSwitchChapter_7d',
                    emblemBuyBP: 'Content_emblemBuyBP_e7',
                    lightBuyBP: 'Content_lightBuyBP_d1',
                    lightAttention: 'Content_lightAttention_aa',
                    lightAttentionSmall: 'Content_lightAttentionSmall_80',
                    lightChapterNotChosen: 'Content_lightChapterNotChosen_56',
                    lightChapterNotChosenSmall: 'Content_lightChapterNotChosenSmall_12',
                };
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const mu = R.strings.battle_pass.tooltips.entryPoint.disabled,
                    cu = R.views.common.tooltip_window,
                    Eu = (e, t, u, a) => {
                        if (e) return iu.SHOW;
                        switch (t) {
                            case se.BUY_BATTLE_PASS:
                                return iu.BUY_BP;
                            case se.PROGRESSION_COMPLETED:
                                return iu.COMPLETE;
                            case se.NEW_LEVEL:
                                return u === a ? iu.NORMAL : u < a ? iu.LEVEL_DOWN : iu.LEVEL_UP;
                            case se.CHANGE_PROGRESS:
                                return u !== a ? iu.LEVEL_UP : iu.PROGRESS_CHANGE;
                            case se.NEW_CHAPTER:
                                return u === a ? iu.NORMAL : iu.SWITCH_CHAPTER;
                            case se.NOT_TAKEN_REWARDS:
                                return iu.SHOW_NOT_TAKEN_REWARDS;
                            case se.NORMAL:
                                return iu.NORMAL;
                            case se.CHAPTER_NOT_CHOSEN:
                                return iu.CHAPTER_NOT_CHOSEN;
                        }
                    },
                    du = (0, Y.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get(),
                            o = n.level,
                            l = n.prevLevel,
                            s = n.battlePassState,
                            _ = n.isSmall,
                            m = n.tooltipID,
                            c = n.progression,
                            E = n.prevProgression,
                            d = n.animState,
                            A = n.animStateKey,
                            h = n.hasBattlePass,
                            g = n.chapterID,
                            p = n.isProgressionCompleted,
                            F = n.notChosenRewardCount,
                            C = n.battleType,
                            B = n.isChapterChosen,
                            S = n.freePoints,
                            D = n.isResourceAvailable,
                            v = n.isFirstShow,
                            w = n.chapterType,
                            P = (0, a.useState)(!0),
                            O = P[0],
                            y = P[1],
                            T = (0, a.useState)(Eu(O, d, o, l)),
                            M = T[0],
                            I = T[1],
                            x = (0, a.useState)(h),
                            N = x[0],
                            R = x[1],
                            k = (0, a.useState)(d),
                            H = k[0],
                            U = k[1],
                            W = (0, a.useState)(!1),
                            G = W[0],
                            $ = W[1],
                            j = (0, a.useState)(!1),
                            X = j[0],
                            z = j[1],
                            V = (0, a.useState)([O ? iu.SHOW : iu.NORMAL])[1],
                            q = t.computes.hasMarathon(),
                            Y = ((e) => {
                                const t = Te(e, Oe),
                                    u = (0, a.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, ye(e));
                                        },
                                        [t],
                                    );
                                return (e) => u(e);
                            })('collection'),
                            K = s !== _e.DISABLED,
                            Z = be(q),
                            Q = (() => {
                                const e = (0, a.useState)(i.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            u(i.O.view.getScale());
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
                            J = L().mediaSize,
                            ee = b()(
                                su.base,
                                su[`${su.base}__${s}`],
                                s === _e.DISABLED && su.base__disabled,
                                s === _e.SEASON_WAITING && su.base__seasonWaiting,
                                J <= f.Small && 2 === Q && su.base__smallX2,
                            ),
                            te = s === _e.DISABLED,
                            ue = (0, a.useMemo)(
                                () => (te ? cu.simple_tooltip_content.SimpleTooltipContent('resId') : m),
                                [te, m],
                            ),
                            ae = (0, a.useMemo)(() => (te ? cu.tooltip_window.TooltipWindow('resId') : void 0), [te]),
                            re = (0, a.useMemo)(
                                () => (te ? { header: mu.header(), body: mu.$dyn(C) || mu.body() } : void 0),
                                [C, te],
                            ),
                            oe = (0, a.useCallback)(
                                (e) => {
                                    V((t) => {
                                        const u = t[0],
                                            a = t[t.length - 1];
                                        if (0 === t.length) I(e);
                                        else {
                                            if (1 === t.length && u === iu.NORMAL) return I(e), [e];
                                            if (a === iu.NORMAL) return t.splice(t.length - 1, 1).concat(e);
                                        }
                                        return t.concat(e);
                                    });
                                },
                                [V],
                            ),
                            le = (0, a.useCallback)(() => {
                                K && $(!0);
                            }, [K]),
                            me = (0, a.useCallback)(() => {
                                K && $(!1);
                            }, [K]),
                            ce = (0, a.useCallback)(() => {
                                K &&
                                    (u.openBattlePass(),
                                    I(iu.MOUSE_OUT),
                                    V([]),
                                    $(!1),
                                    Ce('play'),
                                    Y({
                                        item: ve.BattlePassCollectionEntryPoint,
                                        action: we.Click,
                                        parentScreen: fe.BattlePassProgression,
                                    }));
                            }, [u, K, Y, V]),
                            Ee = (0, a.useCallback)(
                                () => (p ? Ze.Tj.COMPLETED : B ? Ze.Tj.ACTIVE : Ze.Tj.NOT_CHOSEN),
                                [p, B],
                            );
                        var de;
                        (de = () => {
                            y(!1);
                        }),
                            (0, a.useEffect)(de, []),
                            (0, a.useEffect)(() => {
                                U(d);
                            }, [d, A, c]),
                            (0, a.useEffect)(() => {
                                h !== N && R(h);
                            }, [N, h, M]);
                        const Ae = De(() => {
                                I(iu.MOUSE_OVER), V([]);
                            }),
                            ge = De(() => {
                                I(iu.MOUSE_OUT), V([]);
                            }),
                            pe = ((e, t, u, r) => {
                                const n = (0, a.useState)(!1),
                                    o = n[0],
                                    l = n[1],
                                    i = (0, a.useRef)(!1);
                                return (
                                    (0, a.useEffect)(() => {
                                        if (o)
                                            return (0, He.F)(() => {
                                                l(!1);
                                            }, t);
                                    }, [t, o]),
                                    (0, a.useEffect)(() => {
                                        o
                                            ? (i.current = !0)
                                            : !i.current || e
                                              ? ((i.current = !1), e ? u && u() : r && r())
                                              : (i.current = !1);
                                    }, [o, e, r, u]),
                                    { setIsAnimationPending: l }
                                );
                            })(G, 3200, Ae, ge),
                            Fe = pe.setIsAnimationPending;
                        (0, a.useEffect)(() => {
                            if ((M !== Eu(O, H, o, l) || M === iu.SHOW) && M !== iu.MOUSE_OVER && M !== iu.MOUSE_OUT)
                                switch (H) {
                                    case se.BUY_BATTLE_PASS:
                                        oe(iu.BUY_BP);
                                        break;
                                    case se.PROGRESSION_COMPLETED:
                                        oe(iu.COMPLETE);
                                        break;
                                    case se.NEW_LEVEL:
                                        Fe(!0), oe(o < l ? iu.LEVEL_DOWN : iu.LEVEL_UP);
                                        break;
                                    case se.CHANGE_PROGRESS:
                                        oe(o !== l ? iu.LEVEL_UP : iu.PROGRESS_CHANGE);
                                        break;
                                    case se.NEW_CHAPTER:
                                        V([]), oe(iu.SWITCH_CHAPTER);
                                        break;
                                    case se.NOT_TAKEN_REWARDS:
                                        oe(iu.SHOW_NOT_TAKEN_REWARDS);
                                        break;
                                    case se.NORMAL:
                                        oe(iu.NORMAL);
                                        break;
                                    case se.CHAPTER_NOT_CHOSEN:
                                        oe(iu.CHAPTER_NOT_CHOSEN);
                                }
                        }, [H, oe, o, l, O, M, V, Fe]),
                            (0, a.useEffect)(() => {
                                'boolean' == typeof Z &&
                                    Z !== q &&
                                    (z(!0),
                                    setTimeout(() => {
                                        z(!1);
                                    }, 800));
                            }, [Z, q]);
                        const Be = (0, a.useCallback)(() => {
                                (M === Eu(O, H, o, l) &&
                                    M !== iu.LEVEL_UP &&
                                    M !== iu.LEVEL_DOWN &&
                                    M !== iu.PROGRESS_CHANGE &&
                                    M !== iu.SHOW) ||
                                    V((e) => (e.length > 1 ? (I(e[1]), e.slice(1)) : (U(se.NORMAL), [])));
                            }, [V, O, H, o, l, M]),
                            Se = (0, a.useMemo)(() => {
                                const e = Ee(),
                                    t = {
                                        chapterID: g,
                                        isSmall: _,
                                        isMouseOver: G,
                                        progressInfo: { level: o, to: c, from: c },
                                        hasBattlePass: N,
                                        onFinish: Be,
                                        progressionState: e,
                                        notChosenRewardCount: F,
                                        isSeasonWaiting: s === _e.SEASON_WAITING,
                                        isDisabled: s === _e.DISABLED,
                                        isChapterChosen: B,
                                        freePoints: s !== _e.DISABLED ? S : 0,
                                        duration: 0,
                                        scale: Q,
                                        chapterType: !q && D ? ne.Resource : w,
                                    };
                                switch (M) {
                                    case iu.ATTENTION:
                                        return G ? r().createElement(jt, t) : r().createElement(Et, t);
                                    case iu.SHOW:
                                        return (
                                            t.progressInfo.level !== l && -1 !== l && (t.progressInfo.level = l),
                                            r().createElement(ru, _u({}, t, { isFirstShow: v }))
                                        );
                                    case iu.NORMAL:
                                        return r().createElement(it, t);
                                    case iu.PROGRESS_CHANGE:
                                        return (t.progressInfo.from = E > c ? 0 : E), r().createElement(Zt, t);
                                    case iu.MOUSE_OVER:
                                        return r().createElement(jt, t);
                                    case iu.MOUSE_OUT:
                                        return r().createElement(xt, t);
                                    case iu.LEVEL_DOWN:
                                    case iu.LEVEL_UP:
                                        return (
                                            (t.progressInfo.from = E),
                                            r().createElement(vt, _u({}, t, { prevLevel: l }))
                                        );
                                    case iu.BUY_BP:
                                        return r().createElement(At, t);
                                    case iu.SWITCH_CHAPTER:
                                        return r().createElement(lu, _u({ prevLevel: l }, t));
                                    case iu.SHOW_NOT_TAKEN_REWARDS:
                                        return r().createElement(qt, t);
                                    case iu.COMPLETE:
                                        return e === Ze.Tj.NOT_CHOSEN
                                            ? r().createElement(Ct, t)
                                            : e === Ze.Tj.COMPLETED
                                              ? r().createElement(St, t)
                                              : r().createElement(it, t);
                                    case iu.CHAPTER_NOT_CHOSEN:
                                        return r().createElement(Ct, _u({}, t, { isFirstShow: O }));
                                }
                            }, [Ee, g, _, G, o, c, N, Be, F, s, B, S, Q, q, D, w, M, l, v, E, O]);
                        return r().createElement(
                            he,
                            { contentId: ue, decoratorId: ae, args: re },
                            r().createElement(
                                'div',
                                {
                                    className: ee,
                                    style: { cursor: K ? 'pointer' : 'default' },
                                    onMouseEnter: le,
                                    onMouseLeave: me,
                                    onClick: ce,
                                },
                                r().createElement(
                                    'div',
                                    { className: b()(su.effects, su[`${su.effects}__${s}`]) },
                                    r().createElement(
                                        'div',
                                        { className: b()(su.componentWrapper, X && su.componentWrapper__hidden) },
                                        Se,
                                    ),
                                ),
                            ),
                        );
                    }),
                    Au = 'App_base_f0',
                    hu = 'App_light_08',
                    gu = 'App_light__chapterNotChosen_ff',
                    pu = {
                        width: 250,
                        height: 250,
                        frameCount: 75,
                        chunk: { count: 2, columns: 7, rows: 6 },
                        getChunkPath:
                            ((Fu = 'R.images.gui.maps.icons.sequence.sun_shine_sprite.sprite_'), (e) => `${Fu}${e}`),
                    };
                var Fu;
                const Cu = (0, Y.Pi)(() => {
                    const e = ie().model.root.get(),
                        t = e.isChapterChosen,
                        u = e.battlePassState,
                        n = e.isProgressionCompleted,
                        o = [_e.DISABLED, _e.SEASON_WAITING].includes(u),
                        l = (0, a.useRef)(null),
                        i = L().mediaSize;
                    return (
                        (0, a.useEffect)(
                            () =>
                                ((e) => {
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
                                })(() => {
                                    if (l.current) {
                                        const e = l.current.getBoundingClientRect();
                                        viewEnv.setInputArea(
                                            viewEnv.pxToRem(e.x),
                                            viewEnv.pxToRem(e.y),
                                            viewEnv.pxToRem(e.width),
                                            viewEnv.pxToRem(e.height),
                                        );
                                    }
                                }),
                            [i],
                        ),
                        r().createElement(
                            'div',
                            { className: Au, ref: l },
                            !t &&
                                !o &&
                                r().createElement(
                                    'div',
                                    { className: b()(hu, n && gu) },
                                    r().createElement(X, {
                                        width: pu.width,
                                        height: pu.height,
                                        frameCount: pu.frameCount,
                                        getImageSource: G(pu),
                                    }),
                                ),
                            r().createElement(du, null),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    o().render(
                        r().createElement(le, null, r().createElement(N, null, r().createElement(Cu, null))),
                        document.getElementById('root'),
                    );
                });
            },
            903: (e, t, u) => {
                'use strict';
                u.d(t, { cs: () => o, wD: () => n });
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
                            n = e.$dyn(`common${a}`);
                        return r || n;
                    },
                    o = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            o = t ? 'BP' : '',
                            l = `${r(u)}${o}`;
                        return { backgroundImage: `url(${n(a, e, l)})` };
                    };
            },
            323: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => p });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    o = u.n(n);
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
                var i = u(903),
                    s = u(3044),
                    _ = u(8546);
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
                    c = (e, t) => {
                        const u = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case _.$u.Small:
                                    return 'l';
                                case _.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${u}`;
                    },
                    E = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: l,
                            labelAnimation: E,
                            newLabelAnimation: d,
                            isChapterChosen: A = !1,
                            chapterID: h = 0,
                            isProgressionCompleted: g = !1,
                            hasBeenActive: p = !1,
                            isChapterSelection: F = !1,
                            isProgression: C = !1,
                        }) => {
                            let B = '',
                                b = '';
                            u === _.$u.Small
                                ? ((B = 'Small'), (b = '__small'))
                                : u === _.$u.Micro && ((B = 'Micro'), (b = '__micro'));
                            const S = a === _.Bq.SwitchedChapterRightNow,
                                D = a === _.Bq.CompletedRightNow,
                                f = ((e, t, u, a, r) => (e || r ? t || !u : t || !a))(F, g, p, A, C),
                                v = !C && !F;
                            return o().createElement(
                                o().Fragment,
                                null,
                                f
                                    ? o().createElement('div', {
                                          className: r()(m.icon, b && m[`icon${b}`], D && m[`icon__animated${B}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = c(l, u);
                                                  if (v) {
                                                      if (g) return e.tank.$dyn(`tank_${t}`);
                                                      if (!A) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, i.wD)(e.chapterIcons, h, t);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: r()(
                                                  m.label,
                                                  m[`label${b}`],
                                                  S && m.label__new,
                                                  S && m[`label__new${B}`],
                                                  !D && g && m.label__disabled,
                                                  m[`label__${E}${B}`],
                                                  n && m[`label__hasProgress${B}`],
                                                  n && m[`label__hasProgress${B}${C ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(s._, {
                                              level: t,
                                              size: u,
                                              isGold: l,
                                              isFirstLevel: S,
                                              curState: E,
                                              showProgressionCompleted: D,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                m.label,
                                                m[`label${b}`],
                                                S && m.label__new,
                                                S && m[`label__new${B}`],
                                                m[`label__${d}${B}`],
                                                n && m[`label__hasProgress${B}`],
                                            ),
                                        },
                                        o().createElement(s._, {
                                            level: e,
                                            size: u,
                                            isGold: l,
                                            isFirstLevel: S,
                                            curState: d,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var d = u(1975);
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
                            const l = r()(A.base, A[`base__${n}`], u && A.base__completed, !u && a && A.base__hidden);
                            return o().createElement(
                                'div',
                                { className: l },
                                o().createElement(d.ko, {
                                    key: e.to,
                                    size: d.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const p = (0, n.memo)((e) => {
                    const t = e.progression,
                        u = e.size,
                        a = e.battlePassState,
                        n = e.hasBattlePass,
                        i = e.isChapterChosen,
                        s = e.hasBeenActive,
                        m = void 0 !== s && s,
                        c = e.isChapterSelection,
                        d = void 0 !== c && c,
                        A = e.isOpen,
                        p = void 0 !== A && A,
                        F = e.isProgression,
                        C = void 0 !== F && F,
                        B = e.showProgressBar,
                        b = void 0 === B || B,
                        S = e.chapterType;
                    let D = '',
                        f = '';
                    u === _.$u.Small
                        ? ((D = 'Small'), (f = '__small'))
                        : u === _.$u.Micro && ((D = 'Micro'), (f = '__micro'));
                    const v = p ? 'Open' : '',
                        w = a === _.Bq.CompletedRightNow,
                        L = n || a === _.Bq.Bought,
                        P = (a === _.Bq.Completed || w) && L,
                        O = (a === _.Bq.Completed || w) && !L,
                        y = P || O,
                        T = r()(
                            l.image,
                            l[`image${f}`],
                            p && l[`image__open${D}`],
                            L && l[`image__battlePass${D}${v}`],
                            a === _.Bq.AwaitSeason && l[`image__seasonWaiting${D}`],
                            O && l[`image__completedFree${D}${v}`],
                        ),
                        M = r()(l[`${S}`], l[`${S}${f}`]),
                        I = void 0 !== t.from,
                        x = b && ((I && i) || m);
                    return o().createElement(
                        'div',
                        { className: l.base },
                        o().createElement('div', { className: M }),
                        o().createElement(
                            'div',
                            { className: T },
                            a !== _.Bq.AwaitSeason &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        E,
                                        g(
                                            {
                                                hasProgression: I,
                                                isGolden: L,
                                                isProgressionCompleted: y,
                                                isChapterChosen: i,
                                                hasBeenActive: m,
                                                isChapterSelection: d,
                                                isProgression: C,
                                            },
                                            e,
                                            t,
                                        ),
                                    ),
                                    x &&
                                        o().createElement(h, {
                                            key: t.to,
                                            progression: t,
                                            showProgressionCompleted: w,
                                            isProgressionCompleted: y,
                                            size: u,
                                        }),
                                ),
                        ),
                    );
                });
            },
            3044: (e, t, u) => {
                'use strict';
                u.d(t, { _: () => i });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    o = u.n(n);
                const l = {
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
                        isGold: u,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: i,
                        showProgressionCompleted: s,
                    }) => {
                        const _ = r()(l.base, l[`base__${t}`]),
                            m = r()(
                                l.text,
                                l.text__filtered,
                                l[`text__${t}`],
                                l[`text__${n}`],
                                s && l.text__hideWithDelay,
                                i && l.text__new,
                                a && l.text__rewardScreen,
                            ),
                            c = r()(
                                l.textWithBlend,
                                i && l.text__new,
                                s && l.text__hideWithDelay,
                                l[`textWithBlend__${n}`],
                            ),
                            E = r()(l.text, l.text__blended, l[`text__${t}`], a && l.text__rewardScreen),
                            d = r()(
                                l.textMask,
                                u && l.textMask__gold,
                                a && l.textMask__animated,
                                u && a && l.textMask__goldContrast,
                                l[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: _ },
                            o().createElement('div', { className: m }, e),
                            o().createElement(
                                'div',
                                { className: c },
                                o().createElement('div', { className: E }, e),
                                o().createElement('div', { className: d }),
                            ),
                        );
                    };
            },
            8546: (e, t, u) => {
                'use strict';
                let a, r, n, o;
                u.d(t, { $u: () => a, Bq: () => n, Tj: () => r, ru: () => o }),
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
            2468: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
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
            8804: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBarBlink_base_24',
                    base__medium: 'ProgressBarBlink_base__medium_ec',
                    base__small: 'ProgressBarBlink_base__small_0f',
                };
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
                    for (var [t, u, a] = deferred[i], n = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var l = u();
                        void 0 !== l && (e = l);
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
        (__webpack_require__.j = 229),
        (() => {
            var e = { 229: 0, 730: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        r,
                        [n, o, l] = u,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (t && t(u); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(3452));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
