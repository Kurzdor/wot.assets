(() => {
    var __webpack_modules__ = {
            1975: (e, t, u) => {
                'use strict';
                u.d(t, { $u: () => c.$, ko: () => h });
                var a = u(6483),
                    n = u.n(a),
                    r = u(6179),
                    o = u.n(r),
                    l = u(2468),
                    s = u(7442),
                    i = u(2407),
                    _ = u(156),
                    c = u(7736),
                    m = u(1635);
                u(6823);
                const E = _.Gh,
                    d = {
                        freezed: !1,
                        withStack: !1,
                        type: c.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    h = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = E,
                            size: u = c.$.Default,
                            animationSettings: a = d,
                            disabled: r = !1,
                            withoutBackground: h = !1,
                            value: A,
                            deltaFrom: g,
                            lineRef: p,
                            onChangeAnimationState: C,
                            onEndAnimation: F,
                            onComplete: B,
                        }) => {
                            const S = (0, m.S)(A, e, g);
                            return o().createElement(
                                'div',
                                { className: n()(l.Z.base, l.Z[`base__${u}`]), style: (0, _.VQ)(t) },
                                !h && o().createElement(s.J, { size: u }),
                                o().createElement(i.r, {
                                    size: u,
                                    lineRef: p,
                                    disabled: r,
                                    value: S.value,
                                    deltaFrom: S.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: F,
                                    onChangeAnimationState: C,
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
                        onEndAnimation: c,
                        onChangeAnimationState: m,
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
                            onEndAnimation: c,
                            onChangeAnimationState: m,
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
                            c = !u && !r;
                        return n().createElement(
                            'div',
                            { className: _, style: a, ref: t },
                            n().createElement('div', { className: s.Z.pattern }),
                            n().createElement('div', { className: s.Z.gradient }),
                            c && n().createElement(l.$, { size: e }),
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
                const c = (e) => (e ? { left: 0 } : { right: 0 }),
                    m = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    E = (e) => ({ transitionDuration: `${e}ms` }),
                    d = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: d,
                            to: h,
                            onEndAnimation: A,
                            onChangeAnimationState: g,
                            className: p,
                        }) => {
                            const C = h < a,
                                F = (0, o.useState)(i.S.Idle),
                                B = F[0],
                                S = F[1],
                                b = B === i.S.End,
                                D = B === i.S.Idle,
                                f = B === i.S.Grow,
                                v = B === i.S.Shrink,
                                w = (0, o.useCallback)(
                                    (e) => {
                                        S(e), g && g(e);
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
                                            : void (b && A && A());
                            }, [L, u, b, f, D, v, A, t, e]);
                            const O = (0, o.useMemo)(() => Object.assign({ width: '100%' }, E(e), c(C)), [C, e]),
                                P = (0, o.useMemo)(() => Object.assign({ width: '0%' }, E(e), c(C)), [C, e]),
                                y = (0, o.useMemo)(() => Object.assign({ width: '0%' }, m(C, a), E(e)), [a, C, e]),
                                T = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(h - a)}%` }, m(C, a), E(e)),
                                    [a, C, h, e],
                                );
                            if (b) return null;
                            const I = n()(_.Z.base, p, C && 0 === h && _.Z.base__withoutBounce);
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
                        to: c,
                        onEndAnimation: m,
                        onChangeAnimationState: E,
                    }) => {
                        const d = c < i,
                            h = (0, a.useState)(o.V.Idle),
                            A = h[0],
                            g = h[1],
                            p = A === o.V.In,
                            C = A === o.V.End,
                            F = A === o.V.Idle,
                            B = (0, a.useCallback)(
                                (e) => {
                                    g(e), E && E(e);
                                },
                                [E],
                            );
                        (0, a.useEffect)(() => {
                            if (F && !u) {
                                const e = t;
                                return (0, r.F)(() => {
                                    B(o.V.In);
                                }, e);
                            }
                        }, [B, u, F, t]),
                            (0, a.useEffect)(() => {
                                if (p) {
                                    const u = e + t;
                                    return (0, r.F)(() => {
                                        m && m(), B(o.V.End);
                                    }, u);
                                }
                            }, [B, p, m, t, e]);
                        const S = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [d ? 'left' : 'right']: '0',
                                }),
                                [d, t, e],
                            ),
                            b = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [d ? 'left' : 'right']: '0',
                                }),
                                [d, t, e],
                            ),
                            D = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(i - c)}%`, left: `${d ? c : i}%` }),
                                [i, d, c],
                            );
                        return C
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: s.Z.base, style: D },
                                  n().createElement(
                                      'div',
                                      { style: F ? S : b, className: s.Z.delta },
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
                        animationSettings: c,
                        onEndAnimation: m,
                        onChangeAnimationState: E,
                    }) => {
                        const d = e < u,
                            h = (0, a.useState)(!1),
                            A = h[0],
                            g = h[1],
                            p = (0, a.useCallback)(
                                (e) => {
                                    e === l.S.Shrink && g(!0), E && E(e);
                                },
                                [E],
                            ),
                            C = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            F = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
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
                                baseStyles: A ? F : C,
                            }),
                            u >= 0 &&
                                n().createElement(r.O, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: p,
                                    freezed: c.freezed,
                                    onEndAnimation: m,
                                    from: u,
                                    size: t,
                                    to: e,
                                    className: c.delta.className,
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
                        onChangeAnimationState: c,
                        onEndAnimation: m,
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
                                    onChangeAnimationState: c,
                                    onEndAnimation: m,
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
                    const c = (0, a.useState)(!1),
                        m = c[0],
                        E = c[1],
                        d = (0, a.useCallback)(() => {
                            const e = 100 === _.to;
                            e !== m && E(e), e && t && t(), u && u();
                        }, [m, t, u, _.to]);
                    switch (_.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(o.D, i({}, _, { onEndAnimation: d, isComplete: m }));
                        case r.r.Growing:
                            return n().createElement(l.F, i({}, _, { onEndAnimation: d, isComplete: m }));
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => l,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = u(527),
                    n = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
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
            2493: (e, t, u) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => n, G: () => a });
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
                var a = u(5959),
                    n = u(514);
                const r = { view: u(7641), client: a, sound: n.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => o });
                var a = u(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    o = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => i,
                        getDisplayStatus: () => D,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => S,
                        isFocused: () => F,
                        pxToRem: () => g,
                        remToPx: () => p,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
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
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function d(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function b() {
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
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    E = u(3138);
                const d = ['args'];
                function h(e, t, u, a, n, r, o) {
                    try {
                        var l = e[r](o),
                            s = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(a, n);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            h(r, a, n, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            h(r, a, n, o, l, 'throw', e);
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
                    C = () => p(l.CLOSE),
                    F = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var B = u(7572);
                const S = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: l,
                        NumberFormatType: s,
                        RealFormatType: i,
                        TimeFormatType: _,
                        DateFormatType: c,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                i = s.x,
                                _ = s.y,
                                c = s.width,
                                m = s.height,
                                d = {
                                    x: E.O.view.pxToRem(i) + o.x,
                                    y: E.O.view.pxToRem(_) + o.y,
                                    width: E.O.view.pxToRem(c),
                                    height: E.O.view.pxToRem(m),
                                };
                            p(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: A(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, C);
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
                        ClickOutsideManager: S,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = b;
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
                function c(e, t, u) {
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
                const m = s.O.client.getSize('rem'),
                    E = m.width,
                    d = m.height,
                    h = Object.assign({ width: E, height: d }, c(E, d, i)),
                    A = (0, a.createContext)(h),
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
                    const n = (0, a.useContext)(A),
                        r = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        i = n.small,
                        _ = n.extraSmall,
                        c = n.extraLargeWidth,
                        m = n.largeWidth,
                        E = n.mediumWidth,
                        d = n.smallWidth,
                        h = n.extraSmallWidth,
                        p = n.extraLargeHeight,
                        C = n.largeHeight,
                        F = n.mediumHeight,
                        B = n.smallHeight,
                        S = n.extraSmallHeight,
                        b = { extraLarge: p, large: C, medium: F, small: B, extraSmall: S };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && r) return t;
                        if (u.large && o) return t;
                        if (u.medium && s) return t;
                        if (u.small && i) return t;
                        if (u.extraSmall && _) return t;
                    } else {
                        if (u.extraLargeWidth && c) return l(t, u, b);
                        if (u.largeWidth && m) return l(t, u, b);
                        if (u.mediumWidth && E) return l(t, u, b);
                        if (u.smallWidth && d) return l(t, u, b);
                        if (u.extraSmallWidth && h) return l(t, u, b);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && S) return t;
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
                const C = (e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    F = ({ children: e }) => {
                        const t = (0, a.useContext)(A),
                            u = (0, a.useState)(t),
                            r = u[0],
                            o = u[1],
                            l = (0, a.useCallback)((e, t) => {
                                const u = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(t);
                                o(Object.assign({ width: u, height: a }, c(u, a, i)));
                            }, []),
                            _ = (0, a.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                l(e.width, e.height);
                            }, [l]);
                        C(() => {
                            s.O.client.events.on('clientResized', l), s.O.client.events.on('self.onScaleUpdated', _);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', l),
                                        s.O.client.events.off('self.onScaleUpdated', _);
                                },
                                [l, _],
                            );
                        const m = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(A.Provider, { value: m }, e);
                    };
                var B = u(6483),
                    S = u.n(B),
                    b = u(926),
                    D = u.n(b);
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
                        const e = (0, a.useContext)(A),
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
                        return n().createElement('div', P({ className: S()(u, y[o], T[l], I[s]) }, a), t);
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
                        return n().createElement(F, null, n().createElement(x, u, t));
                    },
                    k = 33,
                    H = 0,
                    U = !0,
                    W = 'play';
                function G(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const n = a % u,
                            r = (n % t.columns) * e.width,
                            o = Math.trunc(n / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: r, y: o };
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
                            r = e.getImageSource,
                            o = e.frameCount,
                            l = e.onAnimate,
                            s = e.frameTime,
                            i = void 0 === s ? k : s,
                            _ = e.initialFrameIndex,
                            c = void 0 === _ ? H : _,
                            m = e.lastFrameIndex,
                            E = void 0 === m ? o - 1 : m,
                            d = e.loop,
                            h = void 0 === d ? U : d,
                            A = e.state,
                            g = void 0 === A ? W : A,
                            p = e.onAnimationDone,
                            C = e.onAnimationComplete,
                            F = e.poster,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, $);
                        const S = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = q(c, E, r),
                                                t = z(c, E),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == l || l(n, r),
                                                          u(r),
                                                          n === E &&
                                                              (null == C || C(),
                                                              h || (null == p || p(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, i);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === c && F ? { path: F, x: 0, y: 0 } : r(c),
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
                            }, [i, r, c, E, h, l, C, p, F, g]),
                            n().createElement('canvas', j({}, B, { width: t, height: u, ref: S }))
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
                                    c = (u, a, n) => {
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
                                            c = (e) => _.current.push(e),
                                            m = e({
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
                                                cleanup: c,
                                            }),
                                            E = { mode: u, model: m, externalModel: l, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === u && n ? n.controls(E) : t(E),
                                            externalModel: l,
                                            mode: u,
                                        };
                                    },
                                    m = (0, a.useRef)(!1),
                                    E = (0, a.useState)(r),
                                    d = E[0],
                                    h = E[1],
                                    A = (0, a.useState)(() => c(r, o, i)),
                                    g = A[0],
                                    p = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        m.current ? p(c(d, o, i)) : (m.current = !0);
                                    }, [i, d, o]),
                                    (0, a.useEffect)(() => {
                                        h(r);
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
                            c = e.ignoreMouseClick,
                            m = void 0 !== c && c,
                            E = e.decoratorId,
                            d = void 0 === E ? 0 : E,
                            h = e.isEnabled,
                            A = void 0 === h || h,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            C = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, le);
                        const S = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
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
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (ie(u, d, { isMouseEvent: !0, on: !0, arguments: se(n) }, b),
                                    C && C(),
                                    (S.current.isVisible = !0));
                            }, [u, d, n, b, C]),
                            f = (0, a.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        ie(u, d, { on: !1 }, b),
                                        S.current.isVisible && F && F(),
                                        (S.current.isVisible = !1);
                                }
                            }, [u, d, b, F]),
                            v = (0, a.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', v, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', v, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === A && f();
                            }, [A, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return A
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((S.current.timeoutId = window.setTimeout(D, _ ? 100 : 400)),
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              f(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && f(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && f(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var w;
                    },
                    ce = (e, t) => {
                        const u = (0, a.useRef)();
                        return (
                            (0, a.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    };
                u(1281);
                let me;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(me || (me = {}));
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
                const he = ce,
                    Ae = [];
                function ge(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), Ae)
                    );
                }
                function pe(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Ce = 'Blink_base_88',
                    Fe = 'Blink_shadowWrapper_49',
                    Be = 'Blink_blinkWrapper_33',
                    Se = 'Blink_blinkInner_82',
                    be = 'Blink_blink_68',
                    De = (0, K.Pi)(({ isInfinite: e = !1, children: t }) => {
                        const u = re().model.root.get().isSmall,
                            a = e ? 'infinite' : 1;
                        return n().createElement(
                            'div',
                            { className: Ce },
                            n().createElement('div', {
                                className: Fe,
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
                                    { className: Se, style: { animationIterationCount: a } },
                                    n().createElement('div', { className: be }),
                                ),
                            ),
                            t,
                        );
                    });
                var fe = u(122),
                    ve = u(9485);
                let we, Le, Oe, Pe, ye, Te, Ie, xe;
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
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
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
                            (e.S64x64 = 's64x64'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Ie || (Ie = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(xe || (xe = {}));
                class Re extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = oe.B3.GOLD;
                        else e = oe.B3.INTEGRAL;
                        const t = oe.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Re.defaultProps = { format: 'integral' };
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
                    we.NewYearInvoice,
                    we.EpicSelectToken,
                    we.Comp7TokenWeeklyReward,
                    we.DeluxeGift,
                    we.BattleBoosterGift,
                    we.OptionalDevice,
                    we.Gold,
                    we.Credits,
                    we.Crystal,
                    we.FreeXp,
                    we.BattlePassPoints,
                    we.EquipCoin,
                    we.PremiumPlus,
                    we.Premium,
                    Oe.Small,
                    Oe.Big;
                let Me, Ne;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(Me || (Me = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(Ne || (Ne = {}));
                var ke = u(8546);
                let He;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(He || (He = {}));
                He.style, He.tankman;
                var Ue = u(8596);
                const We = 'StateNormal_base_0d',
                    Ge = 'StateNormal_flag_f8',
                    $e = 'StateNormal_base__medium_e3',
                    je = 'StateNormal_emblem_0f',
                    Xe = 'StateNormal_counter_cd',
                    ze = 'StateNormal_chapterLogoIcon_26',
                    Ve = 'StateNormal_base__smallX2_07',
                    qe = 'StateNormal_freePoints_37',
                    Ye = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = t ? 'm' : 'l';
                        return { backgroundImage: `url(${(0, ve.wD)(u, e, a)})` };
                    },
                    Ze = ({
                        chapterID: e,
                        seasonNum: t,
                        isSmall: u,
                        scale: r,
                        progressionState: o,
                        hasBattlePass: l,
                        stateClasses: s,
                        onFinish: i,
                        duration: _,
                        progressInfo: c,
                        emblem: m,
                        notChosenRewardCount: E,
                        isSeasonWaiting: d,
                        isChapterChosen: h,
                        freePoints: A,
                        hasExtra: g,
                        children: p,
                    }) => {
                        const C = L().mediaSize;
                        (0, a.useEffect)(() => {
                            if (void 0 !== _ && void 0 !== i)
                                return (0, fe.F)(() => {
                                    i();
                                }, _);
                        }, [_, i]);
                        const F = (0, a.useMemo)(
                                () =>
                                    d
                                        ? ke.Bq.AwaitSeason
                                        : h || o === ke.Tj.ACTIVE || o === ke.Bq.Completed
                                          ? o === ke.Tj.ACTIVE
                                              ? l
                                                  ? ke.Bq.Bought
                                                  : ke.Bq.Free
                                              : ke.Bq.Completed
                                          : ke.Bq.ChapterNotChosen,
                                [l, o, d, h],
                            ),
                            B = F === ke.Bq.Completed,
                            b = Boolean(h) && F !== ke.Bq.ChapterNotChosen,
                            D = Boolean(h) && !B,
                            v = B && Boolean(A),
                            w = b || v,
                            O = u ? ke.$u.Small : ke.$u.Medium;
                        return n().createElement(
                            'div',
                            { className: S()(We, !u && $e, C <= f.Small && 2 === r && Ve) },
                            D &&
                                n().createElement('div', {
                                    className: S()(Ge, null == s ? void 0 : s.flag),
                                    style: Ye(e, u),
                                }),
                            n().createElement(
                                'div',
                                { className: S()(je, null == s ? void 0 : s.emblem) },
                                n().createElement(Ue.G4, {
                                    chapterID: e,
                                    seasonNum: t,
                                    progression: c,
                                    size: u ? ke.$u.Small : ke.$u.Medium,
                                    battlePassState: m || F,
                                    hasBattlePass: l,
                                    isChapterChosen: h,
                                    isOpen: w,
                                    isExtra: g,
                                }),
                                o === ke.Tj.NOT_CHOSEN && n().createElement(De, { isInfinite: !0 }),
                                0 !== E &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: S()(Xe, s && s.counter),
                                            lang: R.strings.settings.LANGUAGE_CODE(),
                                        },
                                        E,
                                    ),
                                p,
                            ),
                            b &&
                                n().createElement('div', {
                                    className: S()(ze, s && s.chapterLogoIcon),
                                    style: (0, ve.cs)(e, l, O),
                                }),
                            v &&
                                n().createElement(
                                    'div',
                                    { className: S()(qe, s && s.freePoints) },
                                    ((e = 0) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))(A),
                                ),
                        );
                    },
                    Ke = 'StateAttention_base_2e',
                    Qe = 'StateAttention_emblem_1b',
                    Je = 'StateAttention_emblemCopy_17';
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = (e) => {
                        const t = (0, a.useMemo)(() => ({ emblem: Qe }), []);
                        return (
                            (0, a.useEffect)(() => {
                                pe('bp_attention_widget');
                            }, []),
                            n().createElement(
                                'div',
                                { className: Ke },
                                n().createElement('div', { className: Je }),
                                n().createElement(
                                    Ze,
                                    et({ stateClasses: t, duration: 2600 }, e),
                                    n().createElement(De, null),
                                ),
                            )
                        );
                    },
                    ut = {
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
                    at = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = L().mediaSize;
                        return n().createElement(
                            'div',
                            {
                                className: S()(
                                    ut.base,
                                    !t && ut.base__medium,
                                    a <= f.Small && 2 === u && ut.base__smallX2,
                                ),
                            },
                            n().createElement(Ze, e, n().createElement(De, null)),
                        );
                    },
                    nt = 'StateChapterNotChosen_base_ff',
                    rt = 'StateChapterNotChosen_flag_e3',
                    ot = 'StateChapterNotChosen_emblem_38';
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const st = (e) =>
                        n().createElement(
                            'div',
                            { className: nt },
                            n().createElement(
                                Ze,
                                lt({}, e, { stateClasses: { emblem: e.isFirstShow ? ot : '', flag: rt } }),
                            ),
                        ),
                    it = {
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
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const ct = (e) => {
                        const t = e.isSmall,
                            u = e.scale,
                            a = L().mediaSize,
                            r = { emblem: it.emblem, flag: it.flag };
                        return n().createElement(
                            'div',
                            {
                                className: S()(
                                    it.base,
                                    !t && it.base__medium,
                                    a <= f.Small && 2 === u && it.base__smallX2,
                                ),
                            },
                            n().createElement(Ze, _t({}, e, { stateClasses: r }), n().createElement(De, null)),
                        );
                    },
                    mt = {
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
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const dt = (e) => {
                        const t = e.prevLevel,
                            u = e.progressInfo,
                            r = e.scale,
                            o = e.isSmall,
                            l = (0, a.useState)(0),
                            s = l[0],
                            i = l[1],
                            _ = (0, a.useState)(0),
                            c = _[0],
                            m = _[1],
                            E = (0, a.useState)(u),
                            d = E[0],
                            h = E[1],
                            A = (0, a.useState)(!1),
                            g = A[0],
                            p = A[1],
                            C = (0, a.useState)(!1),
                            F = C[0],
                            B = C[1],
                            b = L().mediaSize,
                            D = (0, a.useMemo)(() => (g ? { emblem: mt.emblem, flag: mt.flag } : void 0), [g]),
                            v = (0, a.useCallback)(() => {
                                h({
                                    from: t > u.level ? 99 : 0,
                                    to: u.to,
                                    level: u.level,
                                    labelAnimation: ke.ru.None,
                                    newLabelAnimation: ke.ru.None,
                                });
                            }, [u, t]),
                            w = (0, a.useCallback)(() => {
                                pe('bp_levelup_widget'),
                                    p(!0),
                                    h({
                                        from: t > u.level ? 99 : 0,
                                        to: u.to,
                                        level: t,
                                        newLevel: u.level,
                                        labelAnimation: ke.ru.HideLevel,
                                        newLabelAnimation: ke.ru.ShowLevel,
                                    }),
                                    m(window.setTimeout(v, 1200));
                            }, [u, t, v]);
                        return (
                            (0, a.useLayoutEffect)(() => {
                                F ||
                                    (i(window.setTimeout(w, 1200)),
                                    h({ from: u.from, to: t > u.level ? 0 : 99, level: t }),
                                    B(!0));
                            }, [w, u, t, F]),
                            (0, a.useEffect)(
                                () => () => {
                                    window.clearTimeout(s), window.clearTimeout(c);
                                },
                                [s, c],
                            ),
                            n().createElement(
                                'div',
                                {
                                    className: S()(
                                        mt.base,
                                        !o && mt.base__medium,
                                        b <= f.Small && 2 === r && mt.base__smallX2,
                                    ),
                                },
                                n().createElement(
                                    Ze,
                                    Et({}, e, { progressInfo: d, stateClasses: D, duration: 3e3 }),
                                    g && n().createElement(De, null),
                                ),
                            )
                        );
                    },
                    ht = 'StateMouseOut_base_63',
                    At = 'StateMouseOut_flag_b0',
                    gt = 'StateMouseOut_emblem_cf',
                    pt = 'StateMouseOut_chapterLogoIcon_55',
                    Ct = 'StateMouseOut_base__medium_89',
                    Ft = 'StateMouseOut_base__smallX2_e5',
                    Bt = 'StateMouseOut_freePoints_fb';
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const bt = (e) => {
                        const t = e.scale,
                            u = L().mediaSize,
                            a = { emblem: gt, flag: At, chapterLogoIcon: pt, freePoints: Bt };
                        return n().createElement(
                            'div',
                            { className: S()(ht, u <= f.Small && 2 === t && Ft, u > f.Small && Ct) },
                            n().createElement(Ze, St({}, e, { stateClasses: a, duration: 200 })),
                        );
                    },
                    Dt = 'StateMouseOver_base_95',
                    ft = 'StateMouseOver_flag_34',
                    vt = 'StateMouseOver_emblem_aa',
                    wt = 'StateMouseOver_chapterLogoIcon_a8',
                    Lt = 'StateMouseOver_base__medium_d1',
                    Ot = 'StateMouseOver_base__smallX2_b2',
                    Pt = 'StateMouseOver_freePoints_ff';
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const Tt = (e) => {
                        const t = e.scale,
                            u = L().mediaSize,
                            r = { emblem: vt, flag: ft, chapterLogoIcon: wt, freePoints: Pt };
                        return (
                            (0, a.useEffect)(() => {
                                pe('highlight');
                            }, []),
                            n().createElement(
                                'div',
                                { className: S()(Dt, u <= f.Small && 2 === t && Ot, u > f.Small && Lt) },
                                n().createElement(Ze, yt({}, e, { stateClasses: r })),
                            )
                        );
                    },
                    It = 'StateNotTakenRewards_base_21',
                    xt = 'StateNotTakenRewards_counter_dd';
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
                const Mt = (e) => {
                        const t = (0, a.useMemo)(() => ({ counter: xt }), []);
                        return n().createElement(
                            'div',
                            { className: It },
                            n().createElement(Ze, Rt({ stateClasses: t, duration: 2600 }, e)),
                        );
                    },
                    Nt = 'StateProgressChange_base_b5';
                function kt() {
                    return (
                        (kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        kt.apply(this, arguments)
                    );
                }
                const Ht = (e) =>
                        n().createElement(
                            'div',
                            { className: Nt },
                            n().createElement(Ze, kt({}, e, { duration: 1200 })),
                        ),
                    Ut = 'StateShow_base_ef',
                    Wt = 'StateShow_flag_31',
                    Gt = 'StateShow_emblem_44',
                    $t = 'StateShow_chapterLogoIcon_66',
                    jt = 'StateShow_freePoints_36';
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const zt = (e) => {
                        const t = e.isFirstShow,
                            u = e.progressionState,
                            r = (0, a.useMemo)(
                                () => ({ emblem: Gt, flag: Wt, chapterLogoIcon: $t, freePoints: jt }),
                                [],
                            );
                        (0, a.useEffect)(() => {
                            pe(t || u === ke.Tj.NOT_CHOSEN ? 'bp_show_widget' : 'bp_show_widget_02');
                        }, [t, u]);
                        const o = u === ke.Tj.COMPLETED;
                        return n().createElement(
                            'div',
                            { className: Ut },
                            n().createElement(
                                Ze,
                                Xt({}, e, { stateClasses: r, duration: t ? 1650 : 600 }),
                                t && !o && n().createElement(De, null),
                            ),
                        );
                    },
                    Vt = {
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
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Yt = (e) => {
                    const t = e.progressInfo,
                        u = e.isSmall,
                        r = e.scale,
                        o = e.hasBattlePass,
                        l = (0, a.useState)(!1),
                        s = l[0],
                        i = l[1],
                        _ = L().mediaSize,
                        c = { emblem: Vt.emblem, flag: Vt.flag },
                        m = (0, a.useCallback)(() => {
                            i(!0);
                        }, []),
                        E = (0, a.useCallback)(() => {
                            const e = window.setTimeout(m, 500);
                            return () => {
                                window.clearTimeout(e);
                            };
                        }, [m]);
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
                                className: S()(
                                    Vt.base,
                                    !u && Vt.base__medium,
                                    _ <= f.Small && 2 === r && Vt.base__smallX2,
                                ),
                            },
                            n().createElement(
                                Ze,
                                qt({}, e, {
                                    progressInfo: t,
                                    emblem: o ? ke.Bq.Bought : ke.Bq.Free,
                                    stateClasses: c,
                                    duration: 3500,
                                }),
                                s && n().createElement(De, null),
                            ),
                        )
                    );
                };
                let Zt;
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
                })(Zt || (Zt = {}));
                const Kt = {
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
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = R.strings.battle_pass.tooltips.entryPoint.disabled,
                    eu = R.views.common.tooltip_window,
                    tu = (e, t, u, a) => {
                        if (e) return Zt.SHOW;
                        switch (t) {
                            case Y.BUY_BATTLE_PASS:
                                return Zt.BUY_BP;
                            case Y.PROGRESSION_COMPLETED:
                                return Zt.COMPLETE;
                            case Y.NEW_LEVEL:
                                return u === a ? Zt.NORMAL : u < a ? Zt.LEVEL_DOWN : Zt.LEVEL_UP;
                            case Y.CHANGE_PROGRESS:
                                return u !== a ? Zt.LEVEL_UP : Zt.PROGRESS_CHANGE;
                            case Y.NEW_CHAPTER:
                                return u === a ? Zt.NORMAL : Zt.SWITCH_CHAPTER;
                            case Y.NOT_TAKEN_REWARDS:
                                return Zt.SHOW_NOT_TAKEN_REWARDS;
                            case Y.NORMAL:
                                return Zt.NORMAL;
                            case Y.CHAPTER_NOT_CHOSEN:
                                return Zt.CHAPTER_NOT_CHOSEN;
                        }
                    },
                    uu = (e) => {
                        var t;
                        return '' === e ? Jt.body() : null != (t = Jt.$dyn(e)) ? t : Jt.body();
                    },
                    au = (0, K.Pi)(() => {
                        const e = re(),
                            t = e.model,
                            u = e.controls,
                            r = t.root.get(),
                            o = r.level,
                            l = r.prevLevel,
                            i = r.battlePassState,
                            _ = r.isSmall,
                            c = r.tooltipID,
                            m = r.progression,
                            E = r.prevProgression,
                            d = r.animState,
                            h = r.animStateKey,
                            A = r.hasBattlePass,
                            g = r.chapterID,
                            p = r.seasonNum,
                            C = r.isProgressionCompleted,
                            F = r.notChosenRewardCount,
                            B = r.battleType,
                            b = r.isChapterChosen,
                            D = r.freePoints,
                            v = r.hasExtra,
                            w = r.isFirstShow,
                            O = i !== Z.DISABLED,
                            P = (0, a.useState)(!0),
                            y = P[0],
                            T = P[1],
                            I = (0, a.useState)([y ? Zt.SHOW : Zt.NORMAL])[1],
                            x = (0, a.useState)(tu(y, d, o, l)),
                            R = x[0],
                            M = x[1],
                            N = (0, a.useState)(A),
                            k = N[0],
                            H = N[1],
                            U = (0, a.useState)(d),
                            W = U[0],
                            G = U[1],
                            $ = (0, a.useState)(!1),
                            j = $[0],
                            X = $[1],
                            z = (0, a.useState)(!1),
                            V = z[0],
                            q = z[1],
                            K = (0, a.useState)(v),
                            Q = K[0],
                            J = K[1],
                            ee = he(v),
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
                            ae = i === Z.DISABLED,
                            ne = S()(
                                Kt.base,
                                Kt[`${Kt.base}__${i}`],
                                ae && Kt.base__disabled,
                                i === Z.SEASON_WAITING && Kt.base__seasonWaiting,
                                ue <= f.Small && 2 === te && Kt.base__smallX2,
                            ),
                            oe = (0, a.useMemo)(
                                () =>
                                    ae || R !== Zt.MOUSE_OVER
                                        ? eu.simple_tooltip_content.SimpleTooltipContent('resId')
                                        : c,
                                [ae, c, R],
                            ),
                            le = (0, a.useMemo)(() => (ae ? eu.tooltip_window.TooltipWindow('resId') : void 0), [ae]),
                            se = (0, a.useMemo)(() => (ae ? { header: Jt.header(), body: uu(B) } : void 0), [B, ae]),
                            ie = (0, a.useCallback)(
                                (e) => {
                                    I((t) => {
                                        const u = t[0],
                                            a = t[t.length - 1];
                                        if (0 === t.length) M(e);
                                        else {
                                            if (1 === t.length && u === Zt.NORMAL) return M(e), [e];
                                            if (a === Zt.NORMAL) return t.splice(t.length - 1, 1).concat(e);
                                        }
                                        return t.concat(e);
                                    });
                                },
                                [I],
                            ),
                            ce = (0, a.useCallback)(() => {
                                O && X(!0);
                            }, [O]),
                            me = (0, a.useCallback)(() => {
                                O && X(!1);
                            }, [O]),
                            Ee = (0, a.useCallback)(() => {
                                O && (u.openBattlePass(), M(Zt.MOUSE_OUT), I([]), X(!1), pe('play'));
                            }, [u, O, I]),
                            de = (0, a.useCallback)(
                                () => (C ? ke.Tj.COMPLETED : b ? ke.Tj.ACTIVE : ke.Tj.NOT_CHOSEN),
                                [C, b],
                            );
                        var Ae;
                        (Ae = () => {
                            T(!1);
                        }),
                            (0, a.useEffect)(Ae, []),
                            (0, a.useEffect)(() => {
                                G(d);
                            }, [d, h, o, m]),
                            (0, a.useEffect)(() => {
                                A !== k && H(A);
                            }, [k, A, R]);
                        const Ce = ge(() => {
                                M(Zt.MOUSE_OVER), I([]);
                            }),
                            Fe = ge(() => {
                                M(Zt.MOUSE_OUT), I([]);
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
                            })(j, 3200, Ce, Fe),
                            Se = Be.setIsAnimationPending;
                        (0, a.useEffect)(() => {
                            if (
                                !(
                                    (R === tu(y, W, o, l) && R !== Zt.SHOW) ||
                                    R === Zt.MOUSE_OVER ||
                                    (R === Zt.MOUSE_OUT && W === Y.NORMAL)
                                )
                            )
                                switch (W) {
                                    case Y.BUY_BATTLE_PASS:
                                        ie(Zt.BUY_BP);
                                        break;
                                    case Y.PROGRESSION_COMPLETED:
                                        ie(Zt.COMPLETE);
                                        break;
                                    case Y.NEW_LEVEL:
                                        Se(!0), ie(o < l ? Zt.LEVEL_DOWN : Zt.LEVEL_UP);
                                        break;
                                    case Y.CHANGE_PROGRESS:
                                        ie(o !== l ? Zt.LEVEL_UP : Zt.PROGRESS_CHANGE);
                                        break;
                                    case Y.NEW_CHAPTER:
                                        I([]), ie(Zt.SWITCH_CHAPTER);
                                        break;
                                    case Y.NOT_TAKEN_REWARDS:
                                        ie(Zt.SHOW_NOT_TAKEN_REWARDS);
                                        break;
                                    case Y.NORMAL:
                                        ie(Zt.NORMAL);
                                        break;
                                    case Y.CHAPTER_NOT_CHOSEN:
                                        ie(Zt.CHAPTER_NOT_CHOSEN);
                                }
                        }, [W, ie, o, l, Q, y, R, I, Se]),
                            (0, a.useEffect)(() => {
                                'boolean' == typeof ee &&
                                    ee !== v &&
                                    (q(!0),
                                    setTimeout(() => {
                                        J(v), q(!1);
                                    }, 800));
                            }, [ee, v]);
                        const be = (0, a.useCallback)(() => {
                                (R === tu(y, W, o, l) &&
                                    R !== Zt.LEVEL_UP &&
                                    R !== Zt.LEVEL_DOWN &&
                                    R !== Zt.PROGRESS_CHANGE &&
                                    R !== Zt.SHOW) ||
                                    I((e) => (e.length > 1 ? (M(e[1]), e.slice(1)) : (G(Y.NORMAL), [])));
                            }, [I, y, W, o, l, R]),
                            De = (0, a.useMemo)(() => {
                                const e = de(),
                                    t = {
                                        chapterID: g,
                                        seasonNum: p,
                                        isSmall: _,
                                        isMouseOver: j,
                                        progressInfo: { level: o, to: m, from: m },
                                        hasBattlePass: k,
                                        onFinish: be,
                                        progressionState: e,
                                        notChosenRewardCount: F,
                                        isSeasonWaiting: i === Z.SEASON_WAITING,
                                        isDisabled: ae,
                                        isChapterChosen: b,
                                        freePoints: i !== Z.DISABLED ? D : 0,
                                        hasExtra: Q,
                                        duration: v !== ee ? 1650 : 0,
                                        scale: te,
                                    };
                                switch (R) {
                                    case Zt.ATTENTION:
                                        return j ? n().createElement(Tt, t) : n().createElement(tt, t);
                                    case Zt.SHOW:
                                        return (
                                            t.progressInfo.level !== l && -1 !== l && (t.progressInfo.level = l),
                                            n().createElement(zt, Qt({}, t, { isFirstShow: w }))
                                        );
                                    case Zt.NORMAL:
                                        return n().createElement(Ze, t);
                                    case Zt.PROGRESS_CHANGE:
                                        return (t.progressInfo.from = E > m ? 0 : E), n().createElement(Ht, t);
                                    case Zt.MOUSE_OVER:
                                        return n().createElement(Tt, t);
                                    case Zt.MOUSE_OUT:
                                        return n().createElement(bt, t);
                                    case Zt.LEVEL_DOWN:
                                    case Zt.LEVEL_UP:
                                        return (
                                            (t.progressInfo.from = E),
                                            n().createElement(dt, Qt({}, t, { prevLevel: l }))
                                        );
                                    case Zt.BUY_BP:
                                        return n().createElement(at, t);
                                    case Zt.SWITCH_CHAPTER:
                                        return n().createElement(Yt, Qt({ prevLevel: l }, t));
                                    case Zt.SHOW_NOT_TAKEN_REWARDS:
                                        return n().createElement(Mt, t);
                                    case Zt.COMPLETE:
                                        return e === ke.Tj.NOT_CHOSEN
                                            ? n().createElement(st, t)
                                            : e === ke.Tj.COMPLETED
                                              ? n().createElement(ct, t)
                                              : n().createElement(Ze, t);
                                    case Zt.CHAPTER_NOT_CHOSEN:
                                        return n().createElement(st, Qt({}, t, { isFirstShow: y }));
                                }
                            }, [R, _, o, l, be, m, E, y, w, k, j, g, F, i, D, b, de, Q, v, ee, te, p, ae]);
                        return n().createElement(
                            _e,
                            { contentId: oe, decoratorId: le, args: se },
                            n().createElement(
                                'div',
                                {
                                    className: ne,
                                    style: { cursor: O ? 'pointer' : 'default' },
                                    onMouseEnter: ce,
                                    onMouseLeave: me,
                                    onClick: Ee,
                                },
                                n().createElement(
                                    'div',
                                    { className: S()(Kt.effects, Kt[`${Kt.effects}__${i}`]) },
                                    n().createElement(
                                        'div',
                                        { className: S()(Kt.componentWrapper, V && Kt.componentWrapper__hidden) },
                                        De,
                                    ),
                                ),
                            ),
                        );
                    }),
                    nu = 'App_base_f0',
                    ru = 'App_light_08',
                    ou = 'App_light__chapterNotChosen_ff',
                    lu = {
                        width: 250,
                        height: 250,
                        frameCount: 75,
                        chunk: { count: 2, columns: 7, rows: 6 },
                        getChunkPath:
                            ((su = 'R.images.gui.maps.icons.sequence.sun_shine_sprite.sprite_'), (e) => `${su}${e}`),
                    };
                var su;
                const iu = (0, K.Pi)(() => {
                    const e = re().model.root.get(),
                        t = e.isChapterChosen,
                        u = e.battlePassState,
                        a = e.isProgressionCompleted,
                        r = [Z.DISABLED, Z.SEASON_WAITING].includes(u);
                    return n().createElement(
                        'div',
                        { className: nu },
                        !t &&
                            !r &&
                            n().createElement(
                                'div',
                                { className: S()(ru, a && ou) },
                                n().createElement(X, {
                                    width: lu.width,
                                    height: lu.height,
                                    frameCount: lu.frameCount,
                                    getImageSource: G(lu),
                                }),
                            ),
                        n().createElement(au, null),
                    );
                });
                engine.whenReady.then(() => {
                    o().render(
                        n().createElement(ne, null, n().createElement(N, null, n().createElement(iu, null))),
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
                    m = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: r,
                        isFirstLevel: l,
                        showProgressionCompleted: s,
                    }) => {
                        const i = n()(c.base, c[`base__${t}`]),
                            _ = n()(
                                c.text,
                                c.text__filtered,
                                c[`text__${t}`],
                                c[`text__${r}`],
                                s && c.text__hideWithDelay,
                                l && c.text__new,
                                a && c.text__rewardScreen,
                            ),
                            m = n()(
                                c.textWithBlend,
                                l && c.text__new,
                                s && c.text__hideWithDelay,
                                c[`textWithBlend__${r}`],
                            ),
                            E = n()(c.text, c.text__blended, c[`text__${t}`], a && c.text__rewardScreen),
                            d = n()(
                                c.textMask,
                                u && c.textMask__gold,
                                a && c.textMask__animated,
                                u && a && c.textMask__goldContrast,
                                c[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: i },
                            o().createElement('div', { className: _ }, e),
                            o().createElement(
                                'div',
                                { className: m },
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
                    h = (e, t) => {
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
                    A = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: r,
                            isGolden: i,
                            labelAnimation: c,
                            newLabelAnimation: A,
                            isChapterChosen: g = !1,
                            chapterID: p = 0,
                            seasonNum: C = -1,
                            isProgressionCompleted: F = !1,
                            hasBeenActive: B = !1,
                            isChapterSelection: S = !1,
                            isProgression: b = !1,
                        }) => {
                            let D = '',
                                f = '';
                            u === E.$u.Small
                                ? ((D = 'Small'), (f = '__small'))
                                : u === E.$u.Micro && ((D = 'Micro'), (f = '__micro'));
                            const v = a === E.Bq.SwitchedChapterRightNow,
                                w = a === E.Bq.CompletedRightNow,
                                L = ((e, t, u, a, n) => (e || n ? t || !u : t || !a))(S, F, B, g, b),
                                O = !b && !S;
                            return o().createElement(
                                o().Fragment,
                                null,
                                L
                                    ? o().createElement('div', {
                                          className: n()(d.icon, f && d[`icon${f}`], w && d[`icon__animated${D}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = h(i, u);
                                                  if (O) {
                                                      if (F) {
                                                          const u = { path: e.icon, name: s.Season, id: C };
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
                                                  !w && F && d.label__disabled,
                                                  d[`label__${c}${D}`],
                                                  r && d[`label__hasProgress${D}`],
                                                  r && d[`label__hasProgress${D}${b ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(m, {
                                              level: t,
                                              size: u,
                                              isGold: i,
                                              isFirstLevel: v,
                                              curState: c,
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
                                                d[`label__${A}${D}`],
                                                r && d[`label__hasProgress${D}`],
                                            ),
                                        },
                                        o().createElement(m, {
                                            level: e,
                                            size: u,
                                            isGold: i,
                                            isFirstLevel: v,
                                            curState: A,
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
                    C = (0, r.memo)(
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
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                let B, S;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(B || (B = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(S || (S = {}));
                const b = (e, t, u, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: s.Chapter, id: a },
                            o = e ? B.Open : B.Closed,
                            i = ((e, t) =>
                                e
                                    ? S.Gold
                                    : t === E.Bq.Completed || t === E.Bq.CompletedRightNow
                                      ? S.Completed
                                      : S.Initial)(t, u),
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
                            c = e.isChapterSelection,
                            m = void 0 !== c && c,
                            d = e.isOpen,
                            h = void 0 !== d && d,
                            g = e.isProgression,
                            p = void 0 !== g && g,
                            B = e.showProgressBar,
                            S = void 0 === B || B,
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
                            R = void 0 !== t.from,
                            M = S && ((R && l) || _);
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
                                { className: n()(i.image, O && i[`image__${O}`]), style: b(h, y, a, w, O) },
                                a !== E.Bq.AwaitSeason &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            A,
                                            F(
                                                {
                                                    hasProgression: R,
                                                    isGolden: y,
                                                    isProgressionCompleted: x,
                                                    isChapterChosen: l,
                                                    hasBeenActive: _,
                                                    isChapterSelection: m,
                                                    isProgression: p,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        M &&
                                            o().createElement(C, {
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
