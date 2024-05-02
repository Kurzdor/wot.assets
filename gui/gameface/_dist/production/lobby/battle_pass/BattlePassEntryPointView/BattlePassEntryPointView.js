(() => {
    var __webpack_modules__ = {
            1975: (e, t, u) => {
                'use strict';
                u.d(t, { $u: () => m.$, ko: () => A });
                var a = u(6483),
                    n = u.n(a),
                    r = u(6179),
                    o = u.n(r),
                    l = u(2468),
                    s = u(7442),
                    i = u(2407),
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
                    A = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = E,
                            size: u = m.$.Default,
                            animationSettings: a = d,
                            disabled: r = !1,
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
                                { className: n()(l.Z.base, l.Z[`base__${u}`]), style: (0, _.VQ)(t) },
                                !A && o().createElement(s.J, { size: u }),
                                o().createElement(i.r, {
                                    size: u,
                                    lineRef: p,
                                    disabled: r,
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
                u.d(t, { J: () => i });
                var a = u(6179),
                    n = u.n(a),
                    r = u(6483),
                    o = u.n(r),
                    l = u(7736),
                    s = u(2468);
                const i = ({ size: e = l.$.Default }) => {
                    const t = o()(s.Z.background, s.Z[`background__${e}`]);
                    return n().createElement('div', { className: t });
                };
            },
            8150: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => s });
                var a = u(6179),
                    n = u.n(a),
                    r = u(6483),
                    o = u.n(r),
                    l = u(8804);
                const s = ({ size: e }) => {
                    const t = o()(l.Z.base, l.Z[`base__${e}`]);
                    return n().createElement('div', { className: t });
                };
            },
            2407: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => i });
                var a = u(6179),
                    n = u.n(a),
                    r = u(5680),
                    o = u(6736),
                    l = u(2386);
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
                const i = (0, a.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: a,
                        deltaFrom: i,
                        animationSettings: _,
                        onEndAnimation: m,
                        onChangeAnimationState: c,
                        onComplete: E,
                    }) => {
                        if (i === t)
                            return n().createElement(r.M, {
                                key: `${i}-${t}`,
                                size: e,
                                value: t,
                                lineRef: u,
                                disabled: a,
                                onComplete: E,
                            });
                        const d = {
                            from: i,
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
                            ? n().createElement(l.F, d)
                            : n().createElement(o.H, s({ key: `${i}-${t}` }, d));
                    },
                );
            },
            1848: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => i });
                var a = u(6179),
                    n = u.n(a),
                    r = u(6483),
                    o = u.n(r),
                    l = u(8150),
                    s = u(6664);
                const i = (0, a.memo)(
                    ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: r, withoutBounce: i }) => {
                        const _ = o()(
                                s.Z.base,
                                s.Z[`base__${e}`],
                                u && s.Z.base__disabled,
                                r && s.Z.base__finished,
                                i && s.Z.base__withoutBounce,
                            ),
                            m = !u && !r;
                        return n().createElement(
                            'div',
                            { className: _, style: a, ref: t },
                            n().createElement('div', { className: s.Z.pattern }),
                            n().createElement('div', { className: s.Z.gradient }),
                            m && n().createElement(l.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => d });
                var a = u(6483),
                    n = u.n(a),
                    r = u(122),
                    o = u(6179),
                    l = u.n(o),
                    s = u(8150),
                    i = u(6823),
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
                                C = (0, o.useState)(i.S.Idle),
                                B = C[0],
                                b = C[1],
                                S = B === i.S.End,
                                D = B === i.S.Idle,
                                f = B === i.S.Grow,
                                v = B === i.S.Shrink,
                                w = (0, o.useCallback)(
                                    (e) => {
                                        b(e), g && g(e);
                                    },
                                    [g],
                                ),
                                L = (0, o.useCallback)(
                                    (e, t) =>
                                        (0, r.F)(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, o.useEffect)(() => {
                                if (!u)
                                    return D
                                        ? L(i.S.Grow, t)
                                        : f
                                          ? L(i.S.Shrink, e)
                                          : v
                                            ? L(i.S.End, e)
                                            : void (S && h && h());
                            }, [L, u, S, f, D, v, h, t, e]);
                            const O = (0, o.useMemo)(() => Object.assign({ width: '100%' }, E(e), m(F)), [F, e]),
                                P = (0, o.useMemo)(() => Object.assign({ width: '0%' }, E(e), m(F)), [F, e]),
                                y = (0, o.useMemo)(() => Object.assign({ width: '0%' }, c(F, a), E(e)), [a, F, e]),
                                T = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, c(F, a), E(e)),
                                    [a, F, A, e],
                                );
                            if (S) return null;
                            const I = n()(_.Z.base, p, F && 0 === A && _.Z.base__withoutBounce);
                            return l().createElement(
                                'div',
                                { style: D ? y : T, className: I },
                                l().createElement(
                                    'div',
                                    { style: v ? P : O, className: _.Z.glow },
                                    l().createElement(s.$, { size: d }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => i });
                var a = u(6179),
                    n = u.n(a),
                    r = u(122),
                    o = u(6823),
                    l = u(8150),
                    s = u(9919);
                const i = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: u,
                        from: i,
                        size: _,
                        to: m,
                        onEndAnimation: c,
                        onChangeAnimationState: E,
                    }) => {
                        const d = m < i,
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
                                return (0, r.F)(() => {
                                    B(o.V.In);
                                }, e);
                            }
                        }, [B, u, C, t]),
                            (0, a.useEffect)(() => {
                                if (p) {
                                    const u = e + t;
                                    return (0, r.F)(() => {
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
                                () => ({ width: `${Math.abs(i - m)}%`, left: `${d ? m : i}%` }),
                                [i, d, m],
                            );
                        return F
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: s.Z.base, style: D },
                                  n().createElement(
                                      'div',
                                      { style: C ? b : S, className: s.Z.delta },
                                      n().createElement(l.$, { size: _ }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => s });
                var a = u(6179),
                    n = u.n(a),
                    r = u(2434),
                    o = u(1848),
                    l = u(6823);
                const s = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: s,
                        disabled: i,
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
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(o.t, {
                                size: t,
                                lineRef: s,
                                disabled: i,
                                isComplete: _,
                                withoutBounce: d && 0 === e,
                                baseStyles: h ? C : F,
                            }),
                            u >= 0 &&
                                n().createElement(r.O, {
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
                    n = u.n(a),
                    r = u(5913),
                    o = u(1848);
                const l = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: l,
                        disabled: s,
                        isComplete: i,
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
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(o.t, { size: t, lineRef: l, disabled: s, isComplete: i, baseStyles: E }),
                            u >= 0 &&
                                n().createElement(r.x, {
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
                    n = u.n(a),
                    r = u(7736),
                    o = u(828),
                    l = u(538);
                const s = ['onComplete', 'onEndAnimation'];
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
                const _ = (0, a.memo)((e) => {
                    let t = e.onComplete,
                        u = e.onEndAnimation,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, s);
                    const m = (0, a.useState)(!1),
                        c = m[0],
                        E = m[1],
                        d = (0, a.useCallback)(() => {
                            const e = 100 === _.to;
                            e !== c && E(e), e && t && t(), u && u();
                        }, [c, t, u, _.to]);
                    switch (_.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(o.D, i({}, _, { onEndAnimation: d, isComplete: c }));
                        case r.r.Growing:
                            return n().createElement(l.F, i({}, _, { onEndAnimation: d, isComplete: c }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, u) => {
                'use strict';
                let a, n;
                u.d(t, { S: () => a, V: () => n }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(n || (n = {}));
            },
            2386: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => s });
                var a = u(6179),
                    n = u.n(a),
                    r = u(6736);
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
                const s = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, o);
                    const s = (0, a.useRef)({}),
                        i = (0, a.useCallback)(() => {
                            (s.current.from = void 0), t && t();
                        }, [t]),
                        _ = 'number' == typeof s.current.from ? s.current.from : u.from;
                    return (
                        (s.current.from = _),
                        n().createElement(r.H, l({}, u, { onEndAnimation: i, key: `${_}-${u.to}`, from: _ }))
                    );
                });
            },
            5680: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => o });
                var a = u(6179),
                    n = u.n(a),
                    r = u(1848);
                const o = ({ size: e, value: t, lineRef: u, disabled: o, onComplete: l }) => {
                    const s = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        i = 100 === t;
                    return (
                        (0, a.useEffect)(() => {
                            i && l && l();
                        }, [i, l]),
                        n().createElement(r.t, { size: e, disabled: o, baseStyles: s, isComplete: i, lineRef: u })
                    );
                };
            },
            156: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => n, VQ: () => a });
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
            7736: (e, t, u) => {
                'use strict';
                let a, n;
                u.d(t, { $: () => a, r: () => n }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(n || (n = {}));
            },
            1635: (e, t, u) => {
                'use strict';
                u.d(t, { S: () => o });
                var a = u(6179),
                    n = u(7515);
                const r = (e, t, u) => {
                        if ('number' == typeof u) {
                            return ((0, n.u)(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    o = (e, t, u) =>
                        (0, a.useMemo)(() => {
                            const a = ((0, n.u)(0, t, e) / t) * 100;
                            return { value: a, deltaFrom: r(a, t, u) };
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
                u.r(t),
                    u.d(t, { mouse: () => _, off: () => s, on: () => l, onResize: () => r, onScaleUpdated: () => o });
                var a = u(2472),
                    n = u(1176);
                const r = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${t}`,
                                        o = i[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, l),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, l),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    });
                var a = u(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                u.d(t, { O: () => n });
                var a = u(5959);
                const n = { view: u(7641), client: a };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function n(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => n });
                var a = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => v,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => i,
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
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => w,
                    });
                var a = u(3722),
                    n = u(6112),
                    r = u(6538),
                    o = u(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function i(e, t, u, a = 1) {
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
                const f = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
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
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => i });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    o = 32,
                    l = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                    return n;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    i = {
                        close(e) {
                            s('popover' === e ? n : o);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let a, n;
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
                    })(n || (n = {}));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(3138);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => s, Z5: () => o.Z5, B0: () => l, ry: () => g });
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
                const n = a;
                var r = u(1358);
                var o = u(8613);
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    i = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var c = u(5521),
                    E = u(3138);
                const d = ['args'];
                function A(e, t, u, a, n, r, o) {
                    try {
                        var l = e[r](o),
                            s = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(a, n);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function o(e) {
                                            A(r, a, n, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            A(r, a, n, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                    return n;
                                })(t, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    F = () => p(l.CLOSE),
                    C = (e, t) => {
                        e.keyCode === c.n.ESCAPE && t();
                    };
                var B = u(7572);
                const b = n.instance,
                    S = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: i,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                i = s.x,
                                _ = s.y,
                                m = s.width,
                                c = s.height,
                                d = {
                                    x: E.O.view.pxToRem(i) + o.x,
                                    y: E.O.view.pxToRem(_) + o.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(c),
                                };
                            p(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: h(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, F);
                        },
                        handleViewEvent: p,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            2311: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    n = u.n(a),
                    r = u(493),
                    o = u.n(r);
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
                var s = u(3138);
                const i = {
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
                        n = (function (e, t) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: n === u.extraLarge.weight,
                        largeHeight: n === u.large.weight,
                        mediumHeight: n === u.medium.weight,
                        smallHeight: n === u.small.weight,
                        extraSmallHeight: n === u.extraSmall.weight,
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
                const c = s.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, m(E, d, i)),
                    h = (0, a.createContext)(A),
                    g = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, g);
                    const n = (0, a.useContext)(h),
                        r = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        i = n.small,
                        _ = n.extraSmall,
                        m = n.extraLargeWidth,
                        c = n.largeWidth,
                        E = n.mediumWidth,
                        d = n.smallWidth,
                        A = n.extraSmallWidth,
                        p = n.extraLargeHeight,
                        F = n.largeHeight,
                        C = n.mediumHeight,
                        B = n.smallHeight,
                        b = n.extraSmallHeight,
                        S = { extraLarge: p, large: F, medium: C, small: B, extraSmall: b };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && r) return t;
                        if (u.large && o) return t;
                        if (u.medium && s) return t;
                        if (u.small && i) return t;
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
                    C = ({ children: e }) => {
                        const t = (0, a.useContext)(h),
                            u = (0, a.useState)(t),
                            r = u[0],
                            o = u[1],
                            l = (0, a.useCallback)((e, t) => {
                                const u = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(t);
                                o(Object.assign({ width: u, height: a }, m(u, a, i)));
                            }, []),
                            _ = (0, a.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                l(e.width, e.height);
                            }, [l]);
                        F(() => {
                            s.O.client.events.on('clientResized', l), s.O.client.events.on('self.onScaleUpdated', _);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', l),
                                        s.O.client.events.off('self.onScaleUpdated', _);
                                },
                                [l, _],
                            );
                        const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(h.Provider, { value: c }, e);
                    };
                var B = u(6483),
                    b = u.n(B),
                    S = u(926),
                    D = u.n(S);
                let f, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const L = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
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
                            r = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    O = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
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
                    I = {
                        [f.ExtraSmall]: '',
                        [f.Small]: D().SMALL,
                        [f.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [f.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [f.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    x = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, O);
                        const r = L(),
                            o = r.mediaWidth,
                            l = r.mediaHeight,
                            s = r.mediaSize;
                        return n().createElement('div', P({ className: b()(u, y[o], T[l], I[s]) }, a), t);
                    },
                    M = ['children'];
                const N = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, M);
                        return n().createElement(C, null, n().createElement(x, u, t));
                    },
                    k = 33,
                    H = 0,
                    U = !0,
                    W = 'play';
                function $(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const n = a % u,
                            r = (n % t.columns) * e.width,
                            o = Math.trunc(n / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: r, y: o };
                    };
                }
                const G = [
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
                            r = e.getImageSource,
                            o = e.frameCount,
                            l = e.onAnimate,
                            s = e.frameTime,
                            i = void 0 === s ? k : s,
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
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, G);
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
                                            const e = q(m, E, r),
                                                t = z(m, E),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == l || l(n, r),
                                                          u(r),
                                                          n === E &&
                                                              (null == F || F(),
                                                              A || (null == p || p(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, i);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && C ? { path: C, x: 0, y: 0 } : r(m),
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
                            }, [i, r, m, E, A, l, F, p, C, g]),
                            n().createElement('canvas', j({}, B, { width: t, height: u, ref: b }))
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
                            n = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = n[e.path];
                            if (t) a.set(r, V(e, t));
                            else {
                                const t = new Image();
                                (n[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(r, V(e, t));
                            }
                        }
                        return a;
                    };
                let Y, Z;
                !(function (e) {
                    (e.NORMAL = 'normal'),
                        (e.NEW_LEVEL = 'newLevel'),
                        (e.BUY_BATTLE_PASS = 'buyBattlePass'),
                        (e.NOT_TAKEN_REWARDS = 'notTakenRewards'),
                        (e.PROGRESSION_COMPLETED = 'progressionCompleted'),
                        (e.NEW_CHAPTER = 'newChapter'),
                        (e.CHANGE_PROGRESS = 'changeProgress'),
                        (e.CHAPTER_NOT_CHOSEN = 'chapterNotChosen');
                })(Y || (Y = {})),
                    (function (e) {
                        (e.DISABLED = 'disabled'),
                            (e.SEASON_WAITING = 'seasonWaiting'),
                            (e.NORMAL = 'normal'),
                            (e.ATTENTION = 'attention');
                    })(Z || (Z = {}));
                var K = u(3403);
                function Q() {
                    return !1;
                }
                console.log;
                var J = u(9174);
                function ee(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return te(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return te(e, t);
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
                function te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                const ae = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: l, mocks: i }) {
                                const _ = (0, a.useRef)([]),
                                    m = (u, a, n) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ue,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const l = 'string' == typeof r ? `${a}.${r}` : a,
                                                            i = s.O.view.addModelObserver(l, t, !0);
                                                        return n.set(i, u), e && u(o(r)), i;
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
                                                        for (var e, u = ee(n.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            l =
                                                'real' === u
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : l.readByPath(e),
                                            m = (e) => _.current.push(e),
                                            c = e({
                                                mode: u,
                                                readByPath: i,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : i(e),
                                                            n = J.LO.box(a, { equals: Q });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : i(e),
                                                            n = J.LO.box(a, { equals: Q });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = J.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((t) => {
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
                                                                r = Object.entries(n),
                                                                o = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = J.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
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
                                            controls: 'mocks' === u && n ? n.controls(E) : t(E),
                                            externalModel: l,
                                            mode: u,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    E = (0, a.useState)(r),
                                    d = E[0],
                                    A = E[1],
                                    h = (0, a.useState)(() => m(r, o, i)),
                                    g = h[0],
                                    p = h[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? p(m(d, o, i)) : (c.current = !0);
                                    }, [i, d, o]),
                                    (0, a.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), _.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    n().createElement(u.Provider, { value: g }, l)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({ openBattlePass: e.createCallbackNoArgs('onClick') }),
                    ),
                    ne = ae[0],
                    re = ae[1];
                var oe = u(9916);
                const le = [
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
                function se(e) {
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
                const ie = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: oe.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    _e = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            l = e.onMouseDown,
                            s = e.onClick,
                            i = e.ignoreShowDelay,
                            _ = void 0 !== i && i,
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
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, le);
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
                                    (ie(u, d, { isMouseEvent: !0, on: !0, arguments: se(n) }, S),
                                    F && F(),
                                    (b.current.isVisible = !0));
                            }, [u, d, n, S, F]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        ie(u, d, { on: !1 }, S),
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
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              f(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === c && f(), null == s || s(t), null == e || e(t);
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
                    me = (e) => {
                        const t = (0, a.useRef)();
                        return (
                            (0, a.useEffect)(() => {
                                t.current = e;
                            }, [e]),
                            t.current
                        );
                    };
                u(1281);
                let ce;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ce || (ce = {}));
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
                var Ee = u(8613);
                Date.now(), Ee.Ew.getRegionalDateTime, Ee.Ew.getFormattedDateTime;
                oe.Sw.instance;
                let de;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(de || (de = {}));
                oe.Sw.instance;
                const Ae = me,
                    he = [];
                function ge(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), he)
                    );
                }
                function pe(e) {
                    engine.call('PlaySound', e);
                }
                const Fe = 'Blink_base_88',
                    Ce = 'Blink_shadowWrapper_49',
                    Be = 'Blink_blinkWrapper_33',
                    be = 'Blink_blinkInner_82',
                    Se = 'Blink_blink_68',
                    De = (0, K.Pi)(({ isInfinite: e = !1, children: t }) => {
                        const u = re().model.root.get().isSmall,
                            a = e ? 'infinite' : 1;
                        return n().createElement(
                            'div',
                            { className: Fe },
                            n().createElement('div', {
                                className: Ce,
                                style: {
                                    maskImage: `url('R.images.gui.maps.icons.battlePass.logo.full_widget_mask${u ? '_small' : ''}')`,
                                    animationIterationCount: a,
                                },
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: Be,
                                    style: {
                                        maskImage: `url('R.images.gui.maps.icons.battlePass.logo.widget_mask${u ? '_small' : ''}')`,
                                    },
                                },
                                n().createElement(
                                    'div',
                                    { className: be, style: { animationIterationCount: a } },
                                    n().createElement('div', { className: Se }),
                                ),
                            ),
                            t,
                        );
                    });
                var fe = u(122),
                    ve = u(9485);
                let we, Le, Oe, Pe, ye, Te, Ie;
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
                })(we || (we = {})),
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
                    })(Le || (Le = {})),
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
                    })(Oe || (Oe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Pe || (Pe = {})),
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
                    })(ye || (ye = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Te || (Te = {})),
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
                    })(Ie || (Ie = {}));
                class xe extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = oe.B3.GOLD;
                        else e = oe.B3.INTEGRAL;
                        const t = oe.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                xe.defaultProps = { format: 'integral' };
                we.Items,
                    we.Equipment,
                    we.Xp,
                    we.XpFactor,
                    we.Blueprints,
                    we.BlueprintsAny,
                    we.Goodies,
                    we.Berths,
                    we.Slots,
                    we.Tokens,
                    we.CrewSkins,
                    we.CrewBooks,
                    we.Customizations,
                    we.CreditsFactor,
                    we.TankmenXp,
                    we.TankmenXpFactor,
                    we.FreeXpFactor,
                    we.BattleToken,
                    we.PremiumUniversal,
                    we.NaturalCover,
                    we.BpCoin,
                    we.BattlePassSelectToken,
                    we.BattlaPassFinalAchievement,
                    we.BattleBadge,
                    we.BonusX5,
                    we.CrewBonusX3,
                    we.NewYearFillers,
                    we.NewYearInvoice,
                    we.EpicSelectToken,
                    we.Comp7TokenWeeklyReward,
                    we.BattleBoosterGift,
                    we.OptionalDevice,
                    we.FragmentAntimatter,
                    we.CosmicLootbox,
                    we.Gold,
                    we.Credits,
                    we.Crystal,
                    we.FreeXp,
                    we.BattlePassPoints,
                    we.PremiumPlus,
                    we.Premium,
                    Oe.Small,
                    Oe.Big;
                let Me;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(Me || (Me = {}));
                var Re = u(8546);
                let Ne;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(Ne || (Ne = {}));
                Ne.style, Ne.tankman;
                var ke = u(8596);
                const He = 'StateNormal_base_0d',
                    Ue = 'StateNormal_flag_f8',
                    We = 'StateNormal_base__medium_e3',
                    $e = 'StateNormal_emblem_0f',
                    Ge = 'StateNormal_counter_cd',
                    je = 'StateNormal_chapterLogoIcon_26',
                    Xe = 'StateNormal_base__smallX2_07',
                    ze = 'StateNormal_freePoints_37',
                    Ve = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = t ? 'm' : 'l';
                        return { backgroundImage: `url(${(0, ve.wD)(u, e, a)})` };
                    },
                    qe = ({
                        chapterID: e,
                        seasonNum: t,
                        isSmall: u,
                        scale: r,
                        progressionState: o,
                        hasBattlePass: l,
                        stateClasses: s,
                        onFinish: i,
                        duration: _,
                        progressInfo: m,
                        emblem: c,
                        notChosenRewardCount: E,
                        isSeasonWaiting: d,
                        isChapterChosen: A,
                        freePoints: h,
                        hasExtra: g,
                        children: p,
                    }) => {
                        const F = L().mediaSize;
                        (0, a.useEffect)(() => {
                            if (void 0 !== _ && void 0 !== i)
                                return (0, fe.F)(() => {
                                    i();
                                }, _);
                        }, [_, i]);
                        const C = (0, a.useMemo)(
                                () =>
                                    d
                                        ? Re.Bq.AwaitSeason
                                        : A || o === Re.Tj.ACTIVE || o === Re.Bq.Completed
                                          ? o === Re.Tj.ACTIVE
                                              ? l
                                                  ? Re.Bq.Bought
                                                  : Re.Bq.Free
                                              : Re.Bq.Completed
                                          : Re.Bq.ChapterNotChosen,
                                [l, o, d, A],
                            ),
                            B = C === Re.Bq.Completed,
                            S = Boolean(A) && C !== Re.Bq.ChapterNotChosen,
                            D = Boolean(A) && !B,
                            v = B && Boolean(h),
                            w = S || v,
                            O = u ? Re.$u.Small : Re.$u.Medium;
                        return n().createElement(
                            'div',
                            { className: b()(He, !u && We, F <= f.Small && 2 === r && Xe) },
                            D &&
                                n().createElement('div', {
                                    className: b()(Ue, null == s ? void 0 : s.flag),
                                    style: Ve(e, u),
                                }),
                            n().createElement(
                                'div',
                                { className: b()($e, null == s ? void 0 : s.emblem) },
                                n().createElement(ke.G4, {
                                    chapterID: e,
                                    seasonNum: t,
                                    progression: m,
                                    size: u ? Re.$u.Small : Re.$u.Medium,
                                    battlePassState: c || C,
                                    hasBattlePass: l,
                                    isChapterChosen: A,
                                    isOpen: w,
                                    isExtra: g,
                                }),
                                o === Re.Tj.NOT_CHOSEN && n().createElement(De, { isInfinite: !0 }),
                                0 !== E &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: b()(Ge, s && s.counter),
                                            lang: R.strings.settings.LANGUAGE_CODE(),
                                        },
                                        E,
                                    ),
                                p,
                            ),
                            S &&
                                n().createElement('div', {
                                    className: b()(je, s && s.chapterLogoIcon),
                                    style: (0, ve.cs)(e, l, O),
                                }),
                            v &&
                                n().createElement(
                                    'div',
                                    { className: b()(ze, s && s.freePoints) },
                                    ((e = 0) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))(h),
                                ),
                        );
                    },
                    Ye = 'StateAttention_base_2e',
                    Ze = 'StateAttention_emblem_1b',
                    Ke = 'StateAttention_emblemCopy_17';
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Je = (e) => {
                        const t = (0, a.useMemo)(() => ({ emblem: Ze }), []);
                        return (
                            (0, a.useEffect)(() => {
                                pe('bp_attention_widget');
                            }, []),
                            n().createElement(
                                'div',
                                { className: Ye },
                                n().createElement('div', { className: Ke }),
                                n().createElement(
                                    qe,
                                    Qe({ stateClasses: t, duration: 2600 }, e),
                                    n().createElement(De, null),
                                ),
                            )
                        );
                    },
                    et = {
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
                    tt = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = L().mediaSize;
                        return n().createElement(
                            'div',
                            {
                                className: b()(
                                    et.base,
                                    !t && et.base__medium,
                                    a <= f.Small && 2 === u && et.base__smallX2,
                                ),
                            },
                            n().createElement(qe, e, n().createElement(De, null)),
                        );
                    },
                    ut = 'StateChapterNotChosen_base_ff',
                    at = 'StateChapterNotChosen_flag_e3',
                    nt = 'StateChapterNotChosen_emblem_38';
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const ot = (e) =>
                        n().createElement(
                            'div',
                            { className: ut },
                            n().createElement(
                                qe,
                                rt({}, e, { stateClasses: { emblem: e.isFirstShow ? nt : '', flag: at } }),
                            ),
                        ),
                    lt = {
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
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const it = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = L().mediaSize,
                            r = { emblem: lt.emblem, flag: lt.flag };
                        return n().createElement(
                            'div',
                            {
                                className: b()(
                                    lt.base,
                                    !t && lt.base__medium,
                                    a <= f.Small && 2 === u && lt.base__smallX2,
                                ),
                            },
                            n().createElement(qe, st({}, e, { stateClasses: r }), n().createElement(De, null)),
                        );
                    },
                    _t = {
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
                function mt() {
                    return (
                        (mt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        mt.apply(this, arguments)
                    );
                }
                const ct = (e) => {
                        const t = e.prevLevel,
                            u = e.progressInfo,
                            r = e.scale,
                            o = e.isSmall,
                            l = (0, a.useState)(0),
                            s = l[0],
                            i = l[1],
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
                            D = (0, a.useMemo)(() => (g ? { emblem: _t.emblem, flag: _t.flag } : void 0), [g]),
                            v = (0, a.useCallback)(() => {
                                A({
                                    from: t > u.level ? 99 : 0,
                                    to: u.to,
                                    level: u.level,
                                    labelAnimation: Re.ru.None,
                                    newLabelAnimation: Re.ru.None,
                                });
                            }, [u, t]),
                            w = (0, a.useCallback)(() => {
                                pe('bp_levelup_widget'),
                                    p(!0),
                                    A({
                                        from: t > u.level ? 99 : 0,
                                        to: u.to,
                                        level: t,
                                        newLevel: u.level,
                                        labelAnimation: Re.ru.HideLevel,
                                        newLabelAnimation: Re.ru.ShowLevel,
                                    }),
                                    c(window.setTimeout(v, 1200));
                            }, [u, t, v]);
                        return (
                            (0, a.useLayoutEffect)(() => {
                                C ||
                                    (i(window.setTimeout(w, 1200)),
                                    A({ from: u.from, to: t > u.level ? 0 : 99, level: t }),
                                    B(!0));
                            }, [w, u, t, C]),
                            (0, a.useEffect)(
                                () => () => {
                                    window.clearTimeout(s), window.clearTimeout(m);
                                },
                                [s, m],
                            ),
                            n().createElement(
                                'div',
                                {
                                    className: b()(
                                        _t.base,
                                        !o && _t.base__medium,
                                        S <= f.Small && 2 === r && _t.base__smallX2,
                                    ),
                                },
                                n().createElement(
                                    qe,
                                    mt({}, e, { progressInfo: d, stateClasses: D, duration: 3e3 }),
                                    g && n().createElement(De, null),
                                ),
                            )
                        );
                    },
                    Et = 'StateMouseOut_base_63',
                    dt = 'StateMouseOut_flag_b0',
                    At = 'StateMouseOut_emblem_cf',
                    ht = 'StateMouseOut_chapterLogoIcon_55',
                    gt = 'StateMouseOut_base__medium_89',
                    pt = 'StateMouseOut_base__smallX2_e5',
                    Ft = 'StateMouseOut_freePoints_fb';
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
                const Bt = (e) => {
                        const t = e.scale,
                            u = L().mediaSize,
                            a = { emblem: At, flag: dt, chapterLogoIcon: ht, freePoints: Ft };
                        return n().createElement(
                            'div',
                            { className: b()(Et, u <= f.Small && 2 === t && pt, u > f.Small && gt) },
                            n().createElement(qe, Ct({}, e, { stateClasses: a, duration: 200 })),
                        );
                    },
                    bt = 'StateMouseOver_base_95',
                    St = 'StateMouseOver_flag_34',
                    Dt = 'StateMouseOver_emblem_aa',
                    ft = 'StateMouseOver_chapterLogoIcon_a8',
                    vt = 'StateMouseOver_base__medium_d1',
                    wt = 'StateMouseOver_base__smallX2_b2',
                    Lt = 'StateMouseOver_freePoints_ff';
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Pt = (e) => {
                        const t = e.scale,
                            u = L().mediaSize,
                            r = { emblem: Dt, flag: St, chapterLogoIcon: ft, freePoints: Lt };
                        return (
                            (0, a.useEffect)(() => {
                                pe('highlight');
                            }, []),
                            n().createElement(
                                'div',
                                { className: b()(bt, u <= f.Small && 2 === t && wt, u > f.Small && vt) },
                                n().createElement(qe, Ot({}, e, { stateClasses: r })),
                            )
                        );
                    },
                    yt = 'StateNotTakenRewards_base_21',
                    Tt = 'StateNotTakenRewards_counter_dd';
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
                        const t = (0, a.useMemo)(() => ({ counter: Tt }), []);
                        return n().createElement(
                            'div',
                            { className: yt },
                            n().createElement(qe, It({ stateClasses: t, duration: 2600 }, e)),
                        );
                    },
                    Mt = 'StateProgressChange_base_b5';
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Nt = (e) =>
                        n().createElement(
                            'div',
                            { className: Mt },
                            n().createElement(qe, Rt({}, e, { duration: 1200 })),
                        ),
                    kt = 'StateShow_base_ef',
                    Ht = 'StateShow_flag_31',
                    Ut = 'StateShow_emblem_44',
                    Wt = 'StateShow_chapterLogoIcon_66',
                    $t = 'StateShow_freePoints_36';
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const jt = (e) => {
                        const t = e.isFirstShow,
                            u = e.progressionState,
                            r = (0, a.useMemo)(
                                () => ({ emblem: Ut, flag: Ht, chapterLogoIcon: Wt, freePoints: $t }),
                                [],
                            );
                        (0, a.useEffect)(() => {
                            pe(t || u === Re.Tj.NOT_CHOSEN ? 'bp_show_widget' : 'bp_show_widget_02');
                        }, [t, u]);
                        const o = u === Re.Tj.COMPLETED;
                        return n().createElement(
                            'div',
                            { className: kt },
                            n().createElement(
                                qe,
                                Gt({}, e, { stateClasses: r, duration: t ? 1650 : 600 }),
                                t && !o && n().createElement(De, null),
                            ),
                        );
                    },
                    Xt = {
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
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Vt = (e) => {
                    const t = e.progressInfo,
                        u = e.isSmall,
                        r = e.scale,
                        o = e.hasBattlePass,
                        l = (0, a.useState)(!1),
                        s = l[0],
                        i = l[1],
                        _ = L().mediaSize,
                        m = { emblem: Xt.emblem, flag: Xt.flag },
                        c = (0, a.useCallback)(() => {
                            i(!0);
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
                        n().createElement(
                            'div',
                            {
                                className: b()(
                                    Xt.base,
                                    !u && Xt.base__medium,
                                    _ <= f.Small && 2 === r && Xt.base__smallX2,
                                ),
                            },
                            n().createElement(
                                qe,
                                zt({}, e, {
                                    progressInfo: t,
                                    emblem: o ? Re.Bq.Bought : Re.Bq.Free,
                                    stateClasses: m,
                                    duration: 3500,
                                }),
                                s && n().createElement(De, null),
                            ),
                        )
                    );
                };
                let qt;
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
                })(qt || (qt = {}));
                const Yt = {
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
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Kt = R.strings.battle_pass.tooltips.entryPoint.disabled,
                    Qt = R.views.common.tooltip_window,
                    Jt = (e, t, u, a) => {
                        if (e) return qt.SHOW;
                        switch (t) {
                            case Y.BUY_BATTLE_PASS:
                                return qt.BUY_BP;
                            case Y.PROGRESSION_COMPLETED:
                                return qt.COMPLETE;
                            case Y.NEW_LEVEL:
                                return u === a ? qt.NORMAL : u < a ? qt.LEVEL_DOWN : qt.LEVEL_UP;
                            case Y.CHANGE_PROGRESS:
                                return u !== a ? qt.LEVEL_UP : qt.PROGRESS_CHANGE;
                            case Y.NEW_CHAPTER:
                                return u === a ? qt.NORMAL : qt.SWITCH_CHAPTER;
                            case Y.NOT_TAKEN_REWARDS:
                                return qt.SHOW_NOT_TAKEN_REWARDS;
                            case Y.NORMAL:
                                return qt.NORMAL;
                            case Y.CHAPTER_NOT_CHOSEN:
                                return qt.CHAPTER_NOT_CHOSEN;
                        }
                    },
                    eu = (0, K.Pi)(() => {
                        const e = re(),
                            t = e.model,
                            u = e.controls,
                            r = t.root.get(),
                            o = r.level,
                            l = r.prevLevel,
                            i = r.battlePassState,
                            _ = r.isSmall,
                            m = r.tooltipID,
                            c = r.progression,
                            E = r.prevProgression,
                            d = r.animState,
                            A = r.animStateKey,
                            h = r.hasBattlePass,
                            g = r.chapterID,
                            p = r.seasonNum,
                            F = r.isProgressionCompleted,
                            C = r.notChosenRewardCount,
                            B = r.battleType,
                            S = r.isChapterChosen,
                            D = r.freePoints,
                            v = r.hasExtra,
                            w = r.isFirstShow,
                            O = i !== Z.DISABLED,
                            P = (0, a.useState)(!0),
                            y = P[0],
                            T = P[1],
                            I = (0, a.useState)([y ? qt.SHOW : qt.NORMAL])[1],
                            x = (0, a.useState)(Jt(y, d, o, l)),
                            M = x[0],
                            R = x[1],
                            N = (0, a.useState)(h),
                            k = N[0],
                            H = N[1],
                            U = (0, a.useState)(d),
                            W = U[0],
                            $ = U[1],
                            G = (0, a.useState)(!1),
                            j = G[0],
                            X = G[1],
                            z = (0, a.useState)(!1),
                            V = z[0],
                            q = z[1],
                            K = (0, a.useState)(v),
                            Q = K[0],
                            J = K[1],
                            ee = Ae(v),
                            te = (() => {
                                const e = (0, a.useState)(s.O.view.getScale()),
                                    t = e[0],
                                    u = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            u(s.O.view.getScale());
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
                            ue = L().mediaSize,
                            ae = b()(
                                Yt.base,
                                Yt[`${Yt.base}__${i}`],
                                i === Z.DISABLED && Yt.base__disabled,
                                i === Z.SEASON_WAITING && Yt.base__seasonWaiting,
                                ue <= f.Small && 2 === te && Yt.base__smallX2,
                            ),
                            ne = i === Z.DISABLED,
                            oe = (0, a.useMemo)(
                                () => (ne ? Qt.simple_tooltip_content.SimpleTooltipContent('resId') : m),
                                [ne, m],
                            ),
                            le = (0, a.useMemo)(() => (ne ? Qt.tooltip_window.TooltipWindow('resId') : void 0), [ne]),
                            se = (0, a.useMemo)(
                                () => (ne ? { header: Kt.header(), body: Kt.$dyn(B) || Kt.body() } : void 0),
                                [B, ne],
                            ),
                            ie = (0, a.useCallback)(
                                (e) => {
                                    I((t) => {
                                        const u = t[0],
                                            a = t[t.length - 1];
                                        if (0 === t.length) R(e);
                                        else {
                                            if (1 === t.length && u === qt.NORMAL) return R(e), [e];
                                            if (a === qt.NORMAL) return t.splice(t.length - 1, 1).concat(e);
                                        }
                                        return t.concat(e);
                                    });
                                },
                                [I],
                            ),
                            me = (0, a.useCallback)(() => {
                                O && X(!0);
                            }, [O]),
                            ce = (0, a.useCallback)(() => {
                                O && X(!1);
                            }, [O]),
                            Ee = (0, a.useCallback)(() => {
                                O && (u.openBattlePass(), R(qt.MOUSE_OUT), I([]), X(!1), pe('play'));
                            }, [u, O, I]),
                            de = (0, a.useCallback)(
                                () => (F ? Re.Tj.COMPLETED : S ? Re.Tj.ACTIVE : Re.Tj.NOT_CHOSEN),
                                [F, S],
                            );
                        var he;
                        (he = () => {
                            T(!1);
                        }),
                            (0, a.useEffect)(he, []),
                            (0, a.useEffect)(() => {
                                $(d);
                            }, [d, A, c]),
                            (0, a.useEffect)(() => {
                                h !== k && H(h);
                            }, [k, h, M]);
                        const Fe = ge(() => {
                                R(qt.MOUSE_OVER), I([]);
                            }),
                            Ce = ge(() => {
                                R(qt.MOUSE_OUT), I([]);
                            }),
                            Be = ((e, t, u, n) => {
                                const r = (0, a.useState)(!1),
                                    o = r[0],
                                    l = r[1],
                                    s = (0, a.useRef)(!1);
                                return (
                                    (0, a.useEffect)(() => {
                                        if (o)
                                            return (0, fe.F)(() => {
                                                l(!1);
                                            }, t);
                                    }, [t, o]),
                                    (0, a.useEffect)(() => {
                                        o
                                            ? (s.current = !0)
                                            : !s.current || e
                                              ? ((s.current = !1), e ? u && u() : n && n())
                                              : (s.current = !1);
                                    }, [o, e, n, u]),
                                    { setIsAnimationPending: l }
                                );
                            })(j, 3200, Fe, Ce),
                            be = Be.setIsAnimationPending;
                        (0, a.useEffect)(() => {
                            if ((M !== Jt(y, W, o, l) || M === qt.SHOW) && M !== qt.MOUSE_OVER && M !== qt.MOUSE_OUT)
                                switch (W) {
                                    case Y.BUY_BATTLE_PASS:
                                        ie(qt.BUY_BP);
                                        break;
                                    case Y.PROGRESSION_COMPLETED:
                                        ie(qt.COMPLETE);
                                        break;
                                    case Y.NEW_LEVEL:
                                        be(!0), ie(o < l ? qt.LEVEL_DOWN : qt.LEVEL_UP);
                                        break;
                                    case Y.CHANGE_PROGRESS:
                                        ie(o !== l ? qt.LEVEL_UP : qt.PROGRESS_CHANGE);
                                        break;
                                    case Y.NEW_CHAPTER:
                                        I([]), ie(qt.SWITCH_CHAPTER);
                                        break;
                                    case Y.NOT_TAKEN_REWARDS:
                                        ie(qt.SHOW_NOT_TAKEN_REWARDS);
                                        break;
                                    case Y.NORMAL:
                                        ie(qt.NORMAL);
                                        break;
                                    case Y.CHAPTER_NOT_CHOSEN:
                                        ie(qt.CHAPTER_NOT_CHOSEN);
                                }
                        }, [W, ie, o, l, Q, y, M, I, be]),
                            (0, a.useEffect)(() => {
                                'boolean' == typeof ee &&
                                    ee !== v &&
                                    (q(!0),
                                    setTimeout(() => {
                                        J(v), q(!1);
                                    }, 800));
                            }, [ee, v]);
                        const Se = (0, a.useCallback)(() => {
                                (M === Jt(y, W, o, l) &&
                                    M !== qt.LEVEL_UP &&
                                    M !== qt.LEVEL_DOWN &&
                                    M !== qt.PROGRESS_CHANGE &&
                                    M !== qt.SHOW) ||
                                    I((e) => (e.length > 1 ? (R(e[1]), e.slice(1)) : ($(Y.NORMAL), [])));
                            }, [I, y, W, o, l, M]),
                            De = (0, a.useMemo)(() => {
                                const e = de(),
                                    t = {
                                        chapterID: g,
                                        seasonNum: p,
                                        isSmall: _,
                                        isMouseOver: j,
                                        progressInfo: { level: o, to: c, from: c },
                                        hasBattlePass: k,
                                        onFinish: Se,
                                        progressionState: e,
                                        notChosenRewardCount: C,
                                        isSeasonWaiting: i === Z.SEASON_WAITING,
                                        isDisabled: i === Z.DISABLED,
                                        isChapterChosen: S,
                                        freePoints: i !== Z.DISABLED ? D : 0,
                                        hasExtra: Q,
                                        duration: v !== ee ? 1650 : 0,
                                        scale: te,
                                    };
                                switch (M) {
                                    case qt.ATTENTION:
                                        return j ? n().createElement(Pt, t) : n().createElement(Je, t);
                                    case qt.SHOW:
                                        return (
                                            t.progressInfo.level !== l && -1 !== l && (t.progressInfo.level = l),
                                            n().createElement(jt, Zt({}, t, { isFirstShow: w }))
                                        );
                                    case qt.NORMAL:
                                        return n().createElement(qe, t);
                                    case qt.PROGRESS_CHANGE:
                                        return (t.progressInfo.from = E > c ? 0 : E), n().createElement(Nt, t);
                                    case qt.MOUSE_OVER:
                                        return n().createElement(Pt, t);
                                    case qt.MOUSE_OUT:
                                        return n().createElement(Bt, t);
                                    case qt.LEVEL_DOWN:
                                    case qt.LEVEL_UP:
                                        return (
                                            (t.progressInfo.from = E),
                                            n().createElement(ct, Zt({}, t, { prevLevel: l }))
                                        );
                                    case qt.BUY_BP:
                                        return n().createElement(tt, t);
                                    case qt.SWITCH_CHAPTER:
                                        return n().createElement(Vt, Zt({ prevLevel: l }, t));
                                    case qt.SHOW_NOT_TAKEN_REWARDS:
                                        return n().createElement(xt, t);
                                    case qt.COMPLETE:
                                        return e === Re.Tj.NOT_CHOSEN
                                            ? n().createElement(ot, t)
                                            : e === Re.Tj.COMPLETED
                                              ? n().createElement(it, t)
                                              : n().createElement(qe, t);
                                    case qt.CHAPTER_NOT_CHOSEN:
                                        return n().createElement(ot, Zt({}, t, { isFirstShow: y }));
                                }
                            }, [M, _, o, l, Se, c, E, y, w, k, j, g, C, i, D, S, de, Q, v, ee, te, p]);
                        return n().createElement(
                            _e,
                            { contentId: oe, decoratorId: le, args: se },
                            n().createElement(
                                'div',
                                {
                                    className: ae,
                                    style: { cursor: O ? 'pointer' : 'default' },
                                    onMouseEnter: me,
                                    onMouseLeave: ce,
                                    onClick: Ee,
                                },
                                n().createElement(
                                    'div',
                                    { className: b()(Yt.effects, Yt[`${Yt.effects}__${i}`]) },
                                    n().createElement(
                                        'div',
                                        { className: b()(Yt.componentWrapper, V && Yt.componentWrapper__hidden) },
                                        De,
                                    ),
                                ),
                            ),
                        );
                    }),
                    tu = 'App_base_f0',
                    uu = 'App_light_08',
                    au = 'App_light__chapterNotChosen_ff',
                    nu = {
                        width: 250,
                        height: 250,
                        frameCount: 75,
                        chunk: { count: 2, columns: 7, rows: 6 },
                        getChunkPath:
                            ((ru = 'R.images.gui.maps.icons.sequence.sun_shine_sprite.sprite_'), (e) => `${ru}${e}`),
                    };
                var ru;
                const ou = (0, K.Pi)(() => {
                    const e = re().model.root.get(),
                        t = e.isChapterChosen,
                        u = e.battlePassState,
                        a = e.isProgressionCompleted,
                        r = [Z.DISABLED, Z.SEASON_WAITING].includes(u);
                    return n().createElement(
                        'div',
                        { className: tu },
                        !t &&
                            !r &&
                            n().createElement(
                                'div',
                                { className: b()(uu, a && au) },
                                n().createElement(X, {
                                    width: nu.width,
                                    height: nu.height,
                                    frameCount: nu.frameCount,
                                    getImageSource: $(nu),
                                }),
                            ),
                        n().createElement(eu, null),
                    );
                });
                engine.whenReady.then(() => {
                    o().render(
                        n().createElement(ne, null, n().createElement(N, null, n().createElement(ou, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9485: (e, t, u) => {
                'use strict';
                u.d(t, { cs: () => o, wD: () => r });
                var a = u(8546);
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
                    r = (e, t, u = '') => {
                        const a = u.length > 0 ? `_${u}` : u,
                            n = e.$dyn(`c_${t}${a}`),
                            r = String(t).slice(-1),
                            o = e.$dyn(`default_${r}${a}`);
                        return n || o;
                    },
                    o = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            o = t ? 'BP' : '',
                            l = `${n(u)}${o}`;
                        return { backgroundImage: `url(${r(a, e, l)})` };
                    };
            },
            8596: (e, t, u) => {
                'use strict';
                u.d(t, { G4: () => f });
                var a = u(6483),
                    n = u.n(a),
                    r = u(6179),
                    o = u.n(r);
                const l = (e, t) => {
                    const u = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            u = e.path.$dyn('default');
                        return t || u;
                    })(e).$dyn(`${t.name}${u}`);
                };
                let s;
                !(function (e) {
                    (e.Season = 'season'), (e.Chapter = 'chapter');
                })(s || (s = {}));
                const i = {
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
                var _ = u(9485);
                const m = {
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
                    c = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: r,
                        isFirstLevel: l,
                        showProgressionCompleted: s,
                    }) => {
                        const i = n()(m.base, m[`base__${t}`]),
                            _ = n()(
                                m.text,
                                m.text__filtered,
                                m[`text__${t}`],
                                m[`text__${r}`],
                                s && m.text__hideWithDelay,
                                l && m.text__new,
                                a && m.text__rewardScreen,
                            ),
                            c = n()(
                                m.textWithBlend,
                                l && m.text__new,
                                s && m.text__hideWithDelay,
                                m[`textWithBlend__${r}`],
                            ),
                            E = n()(m.text, m.text__blended, m[`text__${t}`], a && m.text__rewardScreen),
                            d = n()(
                                m.textMask,
                                u && m.textMask__gold,
                                a && m.textMask__animated,
                                u && a && m.textMask__goldContrast,
                                m[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: i },
                            o().createElement('div', { className: _ }, e),
                            o().createElement(
                                'div',
                                { className: c },
                                o().createElement('div', { className: E }, e),
                                o().createElement('div', { className: d }),
                            ),
                        );
                    };
                var E = u(8546);
                const d = {
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
                    A = (e, t) => {
                        const u = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case E.$u.Small:
                                    return 'l';
                                case E.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${u}`;
                    },
                    h = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: r,
                            isGolden: i,
                            labelAnimation: m,
                            newLabelAnimation: h,
                            isChapterChosen: g = !1,
                            chapterID: p = 0,
                            seasonNum: F = -1,
                            isProgressionCompleted: C = !1,
                            hasBeenActive: B = !1,
                            isChapterSelection: b = !1,
                            isProgression: S = !1,
                        }) => {
                            let D = '',
                                f = '';
                            u === E.$u.Small
                                ? ((D = 'Small'), (f = '__small'))
                                : u === E.$u.Micro && ((D = 'Micro'), (f = '__micro'));
                            const v = a === E.Bq.SwitchedChapterRightNow,
                                w = a === E.Bq.CompletedRightNow,
                                L = ((e, t, u, a, n) => (e || n ? t || !u : t || !a))(b, C, B, g, S),
                                O = !S && !b;
                            return o().createElement(
                                o().Fragment,
                                null,
                                L
                                    ? o().createElement('div', {
                                          className: n()(d.icon, f && d[`icon${f}`], w && d[`icon__animated${D}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = A(i, u);
                                                  if (O) {
                                                      if (C) {
                                                          const u = { path: e.icon, name: s.Season, id: F };
                                                          return l(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!g) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, _.wD)(e.chapterIcons, p, t);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  d.label,
                                                  d[`label${f}`],
                                                  v && d.label__new,
                                                  v && d[`label__new${D}`],
                                                  !w && C && d.label__disabled,
                                                  d[`label__${m}${D}`],
                                                  r && d[`label__hasProgress${D}`],
                                                  r && d[`label__hasProgress${D}${S ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(c, {
                                              level: t,
                                              size: u,
                                              isGold: i,
                                              isFirstLevel: v,
                                              curState: m,
                                              showProgressionCompleted: w,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                d.label,
                                                d[`label${f}`],
                                                v && d.label__new,
                                                v && d[`label__new${D}`],
                                                d[`label__${h}${D}`],
                                                r && d[`label__hasProgress${D}`],
                                            ),
                                        },
                                        o().createElement(c, {
                                            level: e,
                                            size: u,
                                            isGold: i,
                                            isFirstLevel: v,
                                            curState: h,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var g = u(1975);
                const p = {
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
                    F = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: r,
                        }) => {
                            const l = n()(p.base, p[`base__${r}`], u && p.base__completed, !u && a && p.base__hidden);
                            return o().createElement(
                                'div',
                                { className: l },
                                o().createElement(g.ko, {
                                    key: e.to,
                                    size: g.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function C() {
                    return (
                        (C =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        C.apply(this, arguments)
                    );
                }
                let B, b;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(B || (B = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(b || (b = {}));
                const S = (e, t, u, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: s.Chapter, id: a },
                            o = e ? B.Open : B.Closed,
                            i = ((e, t) =>
                                e
                                    ? b.Gold
                                    : t === E.Bq.Completed || t === E.Bq.CompletedRightNow
                                      ? b.Completed
                                      : b.Initial)(t, u),
                            _ = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${l(r, { name: 'emblem', postfix: `${o}_${i}${_}` })})` };
                    },
                    D = (e, t) => {
                        const u = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: s.Season, id: e };
                        return { backgroundImage: `url(${l(u, { name: 'extra', postfix: t })})` };
                    },
                    f = (0, r.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            a = e.battlePassState,
                            r = e.hasBattlePass,
                            l = e.isChapterChosen,
                            s = e.hasBeenActive,
                            _ = void 0 !== s && s,
                            m = e.isChapterSelection,
                            c = void 0 !== m && m,
                            d = e.isOpen,
                            A = void 0 !== d && d,
                            g = e.isProgression,
                            p = void 0 !== g && g,
                            B = e.showProgressBar,
                            b = void 0 === B || B,
                            f = e.isExtra,
                            v = void 0 !== f && f,
                            w = e.chapterID,
                            L = e.seasonNum,
                            O = ((e) => {
                                switch (e) {
                                    case E.$u.Small:
                                        return 'small';
                                    case E.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(u),
                            P = a === E.Bq.CompletedRightNow,
                            y = r || a === E.Bq.Bought,
                            T = (a === E.Bq.Completed || P) && y,
                            I = (a === E.Bq.Completed || P) && !y,
                            x = T || I,
                            M = void 0 !== t.from,
                            R = b && ((M && l) || _);
                        return o().createElement(
                            'div',
                            { className: i.base },
                            v &&
                                o().createElement('div', {
                                    className: n()(i.extra, O && i[`extra__${O}`]),
                                    style: D(L, O),
                                }),
                            o().createElement(
                                'div',
                                { className: n()(i.image, O && i[`image__${O}`]), style: S(A, y, a, w, O) },
                                a !== E.Bq.AwaitSeason &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            h,
                                            C(
                                                {
                                                    hasProgression: M,
                                                    isGolden: y,
                                                    isProgressionCompleted: x,
                                                    isChapterChosen: l,
                                                    hasBeenActive: _,
                                                    isChapterSelection: c,
                                                    isProgression: p,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        R &&
                                            o().createElement(F, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: P,
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
                let a, n, r, o;
                u.d(t, { $u: () => a, Bq: () => r, Tj: () => n, ru: () => o }),
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
                    })(o || (o = {}));
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
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, a] = deferred[s], r = !0, o = 0; o < t.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var l = u();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, a];
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
        (__webpack_require__.j = 6229),
        (() => {
            var e = { 6229: 0, 1730: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, o, l] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (l) var i = l(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        (n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(i);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2311));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
