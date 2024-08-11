(() => {
    var __webpack_modules__ = {
            1975: (e, t, u) => {
                'use strict';
                u.d(t, { ko: () => g, uu: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    o = u(2468),
                    i = u(7442),
                    l = u(2407),
                    c = u(156),
                    d = u(7736),
                    m = u(1635);
                u(6823);
                const E = c.Gh,
                    _ = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = E,
                            size: u = d.$.Default,
                            animationSettings: n = _,
                            disabled: r = !1,
                            withoutBackground: g = !1,
                            value: A,
                            deltaFrom: p,
                            lineRef: F,
                            onChangeAnimationState: D,
                            onEndAnimation: C,
                            onComplete: B,
                        }) => {
                            const f = (0, m.S)(A, e, p);
                            return s().createElement(
                                'div',
                                { className: a()(o.Z.base, o.Z[`base__${u}`]), style: (0, c.VQ)(t) },
                                !g && s().createElement(i.J, { size: u }),
                                s().createElement(l.r, {
                                    size: u,
                                    lineRef: F,
                                    disabled: r,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: C,
                                    onChangeAnimationState: D,
                                    onComplete: B,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(7736),
                    i = u(2468);
                const l = ({ size: e = o.$.Default }) => {
                    const t = s()(i.Z.background, i.Z[`background__${e}`]);
                    return a().createElement('div', { className: t });
                };
            },
            8150: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(8804);
                const i = ({ size: e }) => {
                    const t = s()(o.Z.base, o.Z[`base__${e}`]);
                    return a().createElement('div', { className: t });
                };
            },
            2407: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(5680),
                    s = u(6736),
                    o = u(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, n.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: n,
                        deltaFrom: l,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: m,
                        onComplete: E,
                    }) => {
                        if (l === t)
                            return a().createElement(r.M, {
                                key: `${l}-${t}`,
                                size: e,
                                value: t,
                                lineRef: u,
                                disabled: n,
                                onComplete: E,
                            });
                        const _ = {
                            from: l,
                            to: t,
                            size: e,
                            lineRef: u,
                            disabled: n,
                            animationSettings: c,
                            onComplete: E,
                            onEndAnimation: d,
                            onChangeAnimationState: m,
                        };
                        return c.withStack
                            ? a().createElement(o.F, _)
                            : a().createElement(s.H, i({ key: `${l}-${t}` }, _));
                    },
                );
            },
            1848: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    o = u(8150),
                    i = u(6664);
                const l = (0, n.memo)(
                    ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: r, withoutBounce: l }) => {
                        const c = s()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                u && i.Z.base__disabled,
                                r && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            d = !u && !r;
                        return a().createElement(
                            'div',
                            { className: c, style: n, ref: t },
                            a().createElement('div', { className: i.Z.pattern }),
                            a().createElement('div', { className: i.Z.gradient }),
                            d && a().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(122),
                    s = u(6179),
                    o = u.n(s),
                    i = u(8150),
                    l = u(6823),
                    c = u(6147);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    m = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    E = (e) => ({ transitionDuration: `${e}ms` }),
                    _ = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: n,
                            size: _,
                            to: g,
                            onEndAnimation: A,
                            onChangeAnimationState: p,
                            className: F,
                        }) => {
                            const D = g < n,
                                C = (0, s.useState)(l.S.Idle),
                                B = C[0],
                                f = C[1],
                                h = B === l.S.End,
                                v = B === l.S.Idle,
                                b = B === l.S.Grow,
                                w = B === l.S.Shrink,
                                y = (0, s.useCallback)(
                                    (e) => {
                                        f(e), p && p(e);
                                    },
                                    [p],
                                ),
                                S = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, r.F)(() => {
                                            y(e);
                                        }, t),
                                    [y],
                                );
                            (0, s.useEffect)(() => {
                                if (!u)
                                    return v
                                        ? S(l.S.Grow, t)
                                        : b
                                          ? S(l.S.Shrink, e)
                                          : w
                                            ? S(l.S.End, e)
                                            : void (h && A && A());
                            }, [S, u, h, b, v, w, A, t, e]);
                            const T = (0, s.useMemo)(() => Object.assign({ width: '100%' }, E(e), d(D)), [D, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, E(e), d(D)), [D, e]),
                                x = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(D, n), E(e)), [n, D, e]),
                                N = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - n)}%` }, m(D, n), E(e)),
                                    [n, D, g, e],
                                );
                            if (h) return null;
                            const P = a()(c.Z.base, F, D && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: v ? x : N, className: P },
                                o().createElement(
                                    'div',
                                    { style: w ? R : T, className: c.Z.glow },
                                    o().createElement(i.$, { size: _ }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(122),
                    s = u(6823),
                    o = u(8150),
                    i = u(9919);
                const l = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: u,
                        from: l,
                        size: c,
                        to: d,
                        onEndAnimation: m,
                        onChangeAnimationState: E,
                    }) => {
                        const _ = d < l,
                            g = (0, n.useState)(s.V.Idle),
                            A = g[0],
                            p = g[1],
                            F = A === s.V.In,
                            D = A === s.V.End,
                            C = A === s.V.Idle,
                            B = (0, n.useCallback)(
                                (e) => {
                                    p(e), E && E(e);
                                },
                                [E],
                            );
                        (0, n.useEffect)(() => {
                            if (C && !u) {
                                const e = t;
                                return (0, r.F)(() => {
                                    B(s.V.In);
                                }, e);
                            }
                        }, [B, u, C, t]),
                            (0, n.useEffect)(() => {
                                if (F) {
                                    const u = e + t;
                                    return (0, r.F)(() => {
                                        m && m(), B(s.V.End);
                                    }, u);
                                }
                            }, [B, F, m, t, e]);
                        const f = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, t, e],
                            ),
                            h = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [_ ? 'left' : 'right']: '0',
                                }),
                                [_, t, e],
                            ),
                            v = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${_ ? d : l}%` }),
                                [l, _, d],
                            );
                        return D
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: i.Z.base, style: v },
                                  a().createElement(
                                      'div',
                                      { style: C ? f : h, className: i.Z.delta },
                                      a().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2434),
                    s = u(1848),
                    o = u(6823);
                const i = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: d,
                        onEndAnimation: m,
                        onChangeAnimationState: E,
                    }) => {
                        const _ = e < u,
                            g = (0, n.useState)(!1),
                            A = g[0],
                            p = g[1],
                            F = (0, n.useCallback)(
                                (e) => {
                                    e === o.S.Shrink && p(!0), E && E(e);
                                },
                                [E],
                            ),
                            D = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            C = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(s.t, {
                                size: t,
                                lineRef: i,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: _ && 0 === e,
                                baseStyles: A ? C : D,
                            }),
                            u >= 0 &&
                                a().createElement(r.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: F,
                                    freezed: d.freezed,
                                    onEndAnimation: m,
                                    from: u,
                                    size: t,
                                    to: e,
                                    className: d.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, u) => {
                'use strict';
                u.d(t, { D: () => o });
                var n = u(6179),
                    a = u.n(n),
                    r = u(5913),
                    s = u(1848);
                const o = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: o,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: d,
                        onEndAnimation: m,
                    }) => {
                        const E = (0, n.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(s.t, { size: t, lineRef: o, disabled: i, isComplete: l, baseStyles: E }),
                            u >= 0 &&
                                a().createElement(r.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: u,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: m,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(7736),
                    s = u(828),
                    o = u(538);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, n.memo)((e) => {
                    let t = e.onComplete,
                        u = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    const d = (0, n.useState)(!1),
                        m = d[0],
                        E = d[1],
                        _ = (0, n.useCallback)(() => {
                            const e = 100 === c.to;
                            e !== m && E(e), e && t && t(), u && u();
                        }, [m, t, u, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return a().createElement(s.D, l({}, c, { onEndAnimation: _, isComplete: m }));
                        case r.r.Growing:
                            return a().createElement(o.F, l({}, c, { onEndAnimation: _, isComplete: m }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { S: () => n, V: () => a }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(a || (a = {}));
            },
            2386: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => i });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6736);
                const s = ['onEndAnimation'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    const i = (0, n.useRef)({}),
                        l = (0, n.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        c = 'number' == typeof i.current.from ? i.current.from : u.from;
                    return (
                        (i.current.from = c),
                        a().createElement(r.H, o({}, u, { onEndAnimation: l, key: `${c}-${u.to}`, from: c }))
                    );
                });
            },
            5680: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => s });
                var n = u(6179),
                    a = u.n(n),
                    r = u(1848);
                const s = ({ size: e, value: t, lineRef: u, disabled: s, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, n.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        a().createElement(r.t, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: u })
                    );
                };
            },
            156: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => a, VQ: () => n });
                const n = (e) => ({
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
                    a = {
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
                let n, a;
                u.d(t, { $: () => n, r: () => a }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(n || (n = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(a || (a = {}));
            },
            1635: (e, t, u) => {
                'use strict';
                u.d(t, { S: () => s });
                var n = u(6179),
                    a = u(7515);
                const r = (e, t, u) => {
                        if ('number' == typeof u) {
                            return ((0, a.u)(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    s = (e, t, u) =>
                        (0, n.useMemo)(() => {
                            const n = ((0, a.u)(0, t, e) / t) * 100;
                            return { value: n, deltaFrom: r(n, t, u) };
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
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            122: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e, t) => {
                    let u;
                    const n = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        'function' == typeof u && u(), clearTimeout(n);
                    };
                };
            },
            7044: (e, t, u) => {
                'use strict';
                u.d(t, { dV: () => s, f8: () => i, s_: () => a, yR: () => r });
                u(3649), u(9916);
                var n = u(8613);
                const a = 1e3,
                    r = 60,
                    s = 60 * r,
                    o = 24 * s;
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
                function i(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / o);
                    t -= u * o;
                    const n = Math.trunc(t / s);
                    t -= n * s;
                    const a = Math.trunc(t / r);
                    return (t -= a * r), { days: u, hours: n, minutes: a, seconds: t };
                }
            },
            9768: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => te });
                var n = {};
                u.r(n),
                    u.d(n, { mouse: () => _, off: () => m, on: () => d, onResize: () => l, onScaleUpdated: () => c });
                var a = {};
                u.r(a),
                    u.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => F,
                        getSize: () => p,
                        graphicsQuality: () => D,
                        playSound: () => g,
                        setRTPC: () => A,
                    });
                var r = {};
                u.r(r), u.d(r, { getBgUrl: () => v, getTextureUrl: () => h });
                var s = {};
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.r(s),
                    u.d(s, {
                        addModelObserver: () => M,
                        addPreloadTexture: () => I,
                        children: () => r,
                        displayStatus: () => b,
                        displayStatusIs: () => K,
                        events: () => w,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => Z,
                        getScale: () => G,
                        getSize: () => H,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => Y,
                        isFocused: () => Q,
                        pxToRem: () => z,
                        remToPx: () => q,
                        resize: () => U,
                        sendEvent: () => P,
                        setAnimateWindow: () => V,
                        setEventHandled: () => j,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => ee,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    E = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && i(!1);
                    }
                    function u() {
                        e.enabled && i(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : i(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        s = E[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function g(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function A(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const D = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    B = Object.keys(C).reduce((e, t) => ((e[t] = () => g(C[t])), e), {}),
                    f = { play: Object.assign({}, B, { sound: g }), setRTPC: A };
                function h(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function v(e, t, u) {
                    return `url(${h(e, t, u)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    y = ['args'];
                const S = 2,
                    T = 16,
                    R = 32,
                    x = 64,
                    N = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, y);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    P = {
                        close(e) {
                            N('popover' === e ? S : R);
                        },
                        minimize() {
                            N(x);
                        },
                        move(e) {
                            N(T, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function M(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function z(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function V(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function j() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    J = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: s, client: a, sound: f };
            },
            4649: (e, t, u) => {
                'use strict';
                u.d(t, { au: () => E, tp: () => _, D9: () => m });
                var n = u(6179);
                const a = (e, t) => {
                    const u = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
                var r = u(7044);
                const s = () => {},
                    o = (e = 0, t, u = 0, a = s) => {
                        const o = (0, n.useState)(e),
                            i = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        s = t || (e > 2 * r.yR ? r.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - n) / r.s_);
                                            null !== u && t <= u ? (l(u), a && a(), clearInterval(o)) : l(t);
                                        }, s * r.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, u, a]),
                            i
                        );
                    };
                var i = u(122);
                const l = (e, t) => {
                    const u = (0, n.useState)(e),
                        a = u[0],
                        r = u[1];
                    return (0, n.useEffect)(() => (0, i.F)(() => r(e), t), [e, t]), a;
                };
                u(9768);
                u(6536);
                var c = u(9916);
                c.Sw.instance;
                let d;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(d || (d = {}));
                c.Sw.instance;
                const m = a,
                    E = o,
                    _ = l;
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {}));
            },
            3649: (e, t, u) => {
                'use strict';
                u.d(t, { BN: () => o, Uw: () => g, WU: () => r, uF: () => s, v2: () => a });
                var n = u(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    c = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    d = (e, t, u = a.left) => e.split(t).reduce(u === a.left ? l : c, []),
                    m = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, t = a.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(u)) return m(e);
                        if ('ja' === u) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, t = a.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = i(e);
                            return d(r, /( )/, t).forEach((e) => (u = u.concat(d(e, n, a.left)))), u;
                        })(e, t);
                    },
                    g = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : _(e, t)));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(9768);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
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
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                u.d(t, { Sw: () => r.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => p });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = u(1358);
                var s = u(8613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    E = u(9768);
                const _ = ['args'];
                function g(e, t, u, n, a, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            g(r, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, _);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    D = () => F(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var B = u(7572);
                const f = a.instance,
                    h = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => F(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => F(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                m = i.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            F(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: A(_),
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
                            C(e, D);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            7619: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => Yt,
                        Bar: () => Vt,
                        DefaultScroll: () => jt,
                        Direction: () => Rt,
                        defaultSettings: () => xt,
                        useHorizontalScrollApi: () => Pt,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => Eu, Bar: () => cu, Default: () => mu, useVerticalScrollApi: () => Xt });
                var r = u(6179),
                    s = u.n(r);
                const o = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(9768);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
                    const n = (function (e, t) {
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
                        a = (function (e, t) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
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
                    E = m.width,
                    _ = m.height,
                    g = Object.assign({ width: E, height: _ }, d(E, _, l)),
                    A = (0, r.createContext)(g),
                    p = ['children'];
                const F = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, p);
                    const n = (0, r.useContext)(A),
                        a = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        E = n.mediumWidth,
                        _ = n.smallWidth,
                        g = n.extraSmallWidth,
                        F = n.extraLargeHeight,
                        D = n.largeHeight,
                        C = n.mediumHeight,
                        B = n.smallHeight,
                        f = n.extraSmallHeight,
                        h = { extraLarge: F, large: D, medium: C, small: B, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && a) return t;
                        if (u.large && s) return t;
                        if (u.medium && i) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return o(t, u, h);
                        if (u.largeWidth && m) return o(t, u, h);
                        if (u.mediumWidth && E) return o(t, u, h);
                        if (u.smallWidth && _) return o(t, u, h);
                        if (u.extraSmallWidth && g) return o(t, u, h);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && D) return t;
                            if (u.mediumHeight && C) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && f) return t;
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
                (0, r.memo)(F);
                var D = u(6536);
                const C = ({ children: e }) => {
                    const t = (0, r.useContext)(A),
                        u = (0, r.useState)(t),
                        n = u[0],
                        a = u[1],
                        o = (0, r.useCallback)((e, t) => {
                            const u = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(t);
                            a(Object.assign({ width: u, height: n }, d(u, n, l)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    (0, D.Z)(() => {
                        i.O.client.events.on('clientResized', o), i.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                i.O.client.events.off('clientResized', o),
                                    i.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [o, c],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(A.Provider, { value: m }, e);
                };
                var B = u(6483),
                    f = u.n(B),
                    h = u(926),
                    v = u.n(h);
                let b, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
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
                    })(y || (y = {}));
                const S = () => {
                        const e = (0, r.useContext)(A),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
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
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    T = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [y.ExtraSmall]: '',
                        [y.Small]: v().SMALL_HEIGHT,
                        [y.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [y.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    I = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, T);
                        const a = S(),
                            r = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return s().createElement('div', x({ className: f()(u, N[r], P[o], I[i]) }, n), t);
                    },
                    O = ['children'];
                const M = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, O);
                    return s().createElement(C, null, s().createElement(k, u, t));
                };
                var L = u(493),
                    H = u.n(L);
                let U, W;
                !(function (e) {
                    (e.Default = 'default'), (e.Winback = 'winback');
                })(U || (U = {})),
                    (function (e) {
                        (e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers');
                    })(W || (W = {}));
                var $ = u(5521),
                    G = u(9916);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(e = $.n.NONE, t = z, u = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                var V = u(3403),
                    Q = u(7030);
                let j, Y, X, Z, K, J, ee, te;
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
                })(j || (j = {})),
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
                    })(Y || (Y = {})),
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
                    })(X || (X = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Z || (Z = {})),
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
                    })(K || (K = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(J || (J = {})),
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
                    })(ee || (ee = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(te || (te = {}));
                class ue extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = G.B3.GOLD;
                        else e = G.B3.INTEGRAL;
                        const t = G.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                ue.defaultProps = { format: 'integral' };
                const ne = [
                        j.Items,
                        j.Equipment,
                        j.Xp,
                        j.XpFactor,
                        j.Blueprints,
                        j.BlueprintsAny,
                        j.Goodies,
                        j.Berths,
                        j.Slots,
                        j.Tokens,
                        j.CrewSkins,
                        j.CrewBooks,
                        j.Customizations,
                        j.CreditsFactor,
                        j.TankmenXp,
                        j.TankmenXpFactor,
                        j.FreeXpFactor,
                        j.BattleToken,
                        j.PremiumUniversal,
                        j.NaturalCover,
                        j.BpCoin,
                        j.BattlePassSelectToken,
                        j.BattlaPassFinalAchievement,
                        j.BattleBadge,
                        j.BonusX5,
                        j.CrewBonusX3,
                        j.NewYearInvoice,
                        j.EpicSelectToken,
                        j.Comp7TokenWeeklyReward,
                        j.DeluxeGift,
                        j.BattleBoosterGift,
                        j.OptionalDevice,
                    ],
                    ae = [j.Gold, j.Credits, j.Crystal, j.FreeXp],
                    re = [j.BattlePassPoints, j.EquipCoin],
                    se = [j.PremiumPlus, j.Premium],
                    oe = (e) =>
                        ne.includes(e)
                            ? Z.MULTI
                            : ae.includes(e)
                              ? Z.CURRENCY
                              : re.includes(e)
                                ? Z.NUMBER
                                : se.includes(e)
                                  ? Z.PREMIUM_PLUS
                                  : Z.STRING,
                    ie = ['engravings', 'backgrounds'],
                    le = ['engraving', 'background'],
                    ce = (e, t = X.Small) => {
                        const u = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case X.S600x450:
                                        return 'c_600x450';
                                    case X.S400x300:
                                        return 'c_400x300';
                                    case X.S296x222:
                                        return 'c_296x222';
                                    case X.S232x174:
                                        return 'c_232x174';
                                    case X.Big:
                                        return 'c_80x80';
                                    case X.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const n = ie[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(le[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    de = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    me = [X.Small, X.Big];
                let Ee;
                !(function (e) {
                    (e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = '');
                })(Ee || (Ee = {}));
                const _e = 'tooltipId';
                let ge, Ae;
                !(function (e) {
                    (e.WELCOME = 'welcome'),
                        (e.PROGRESSION_STEP = 'progressionStep'),
                        (e.SELECTED_REWARDS = 'selectedRewards'),
                        (e.WINBACK_PROGRESSION_COMPLETED = 'winbackProgressionCompleted'),
                        (e.REGULAR_PROGRESSION_COMPLETED = 'regularProgressionCompleted');
                })(ge || (ge = {})),
                    (function (e) {
                        (e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                            (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                            (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                            (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                            (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount');
                    })(Ae || (Ae = {}));
                var pe = u(7044);
                function Fe(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const De = Fe;
                function Ce(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function Be(e, t, u) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const r = De(e, a);
                        t(r, a, e) && n.push(u(r, a, e));
                    }
                    return n;
                }
                const fe = ['from', 'enter', 'leave'],
                    he = ['from', 'enter', 'leave'],
                    ve = ['from', 'enter', 'leave'];
                function be(e, t) {
                    if (null == e) return {};
                    var u,
                        n,
                        a = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                    return a;
                }
                let we, ye;
                !(function (e) {
                    (e[(e.ExtraSmall = 32)] = 'ExtraSmall'),
                        (e[(e.Small = 48)] = 'Small'),
                        (e[(e.Medium = 64)] = 'Medium'),
                        (e[(e.Large = 80)] = 'Large'),
                        (e[(e.ExtraLarge = 100)] = 'ExtraLarge');
                })(we || (we = {})),
                    (function (e) {
                        (e[(e.DailyQuests = 0)] = 'DailyQuests'), (e[(e.PremiumQuests = 1)] = 'PremiumQuests');
                    })(ye || (ye = {}));
                const Se = { [ye.DailyQuests]: 'dailyQuests', [ye.PremiumQuests]: 'premiumQuests' },
                    Te = (e) => {
                        if (void 0 !== e)
                            return (
                                void 0 === Se[e] &&
                                    console.error(`Content resource name was not found for tab index ${e}`),
                                Se[e]
                            );
                    },
                    Re = (e, t, u) => {
                        const n = R.images.gui.maps.icons.missions.missionIcons.$num(
                                ((e) => {
                                    switch (!0) {
                                        case e >= b.ExtraLarge:
                                            return we.ExtraLarge;
                                        case e >= b.Large:
                                            return we.Large;
                                        case e >= b.Medium:
                                            return we.Medium;
                                        default:
                                            return we.ExtraSmall;
                                    }
                                })(e),
                            ),
                            a = u ? '_gold' : '_silver';
                        return { backgroundImage: `url(${n.$dyn(`${t}${a}`)})` };
                    },
                    xe = (e, t, u) =>
                        Ce(e, (e) => ({
                            name: e.name,
                            image: ce(e, u),
                            special: e.overlayType,
                            value: e.value,
                            valueType: oe(e.name),
                            tooltipArgs: de({ tooltipId: `${t}:${e.index}` }, Number(e.tooltipContentId)),
                        })),
                    Ne = (e, t) => (e.items.length >= 1 ? e : t.items.length >= 1 ? t : void 0),
                    Pe = (e) =>
                        (function (e, t) {
                            if (Array.isArray(e)) return e.filter(t);
                            const u = [];
                            for (let a = 0; a < e.length; a++) {
                                var n;
                                const r = null == (n = e[a]) ? void 0 : n.value;
                                t(r, a, e) && u.push(r);
                            }
                            return u;
                        })(e, (e) => e.status === Ee.Done).length,
                    Ie = (e) => e.filter((e) => e.value).length,
                    ke = (Object.values(K), (e) => (e.overlayType, e.overlayType)),
                    Oe = [Ae.VEHICLE_FOR_GIFT, Ae.VEHICLE_DISCOUNT, Ae.VEHICLE_FOR_RENT],
                    Me = [Ae.SELECTABLE_VEHICLE_FOR_GIFT, Ae.SELECTABLE_VEHICLE_DISCOUNT],
                    Le = (e) => Me.includes(e.name),
                    He = [Ae.VEHICLE_DISCOUNT, Ae.SELECTABLE_VEHICLE_DISCOUNT],
                    Ue = (e) => He.includes(e.name),
                    We = (e, t) => ({
                        name: e.name,
                        image: ce(e, t),
                        value: e.value,
                        valueType: oe(e.name),
                        special: ke(e),
                        tooltipArgs: de({ [_e]: e.tooltipId }, Number(e.tooltipContentId), { ignoreShowDelay: !0 }),
                    });
                We.ImageSize = X;
                const $e = {
                        easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
                        easeInCubic: (e) => e * e * e,
                        easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
                        easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
                        easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    },
                    Ge = (e, t = {}) => {
                        let u = t.from,
                            n = void 0 === u ? {} : u,
                            a = t.enter,
                            r = void 0 === a ? {} : a,
                            s = t.leave,
                            o = void 0 === s ? {} : s,
                            i = be(t, fe);
                        return (0, Q.useTransition)(
                            e,
                            Object.assign(
                                {
                                    from: Object.assign({ opacity: 0, pointerEvents: 'none' }, n),
                                    enter: Object.assign(
                                        {
                                            opacity: 1,
                                            pointerEvents: 'auto',
                                            config: { duration: 400, easing: $e.easeInSine },
                                        },
                                        r,
                                    ),
                                    leave: Object.assign(
                                        {
                                            opacity: 0,
                                            pointerEvents: 'none',
                                            config: { duration: 400, easing: $e.easeOutSine },
                                        },
                                        o,
                                    ),
                                    expires: !1,
                                },
                                i,
                            ),
                        );
                    },
                    ze = (e, t, u = {}) => {
                        let n = u.from,
                            a = void 0 === n ? {} : n,
                            r = u.enter,
                            s = void 0 === r ? {} : r,
                            o = u.leave,
                            i = void 0 === o ? {} : o,
                            l = be(u, he);
                        return (0, Q.useTransition)(
                            e,
                            Object.assign(
                                {
                                    from: Object.assign(
                                        { opacity: 0, transform: `translateY(${t}rem)`, pointerEvents: 'none' },
                                        a,
                                    ),
                                    enter: Object.assign(
                                        {
                                            opacity: 1,
                                            transform: 'translateY(0rem)',
                                            pointerEvents: 'auto',
                                            config: { duration: 200, easing: $e.easeOutCirc },
                                        },
                                        s,
                                    ),
                                    leave: Object.assign(
                                        {
                                            opacity: 0,
                                            transform: `translateY(${t}rem)`,
                                            pointerEvents: 'none',
                                            config: { duration: 300, easing: $e.easeInCirc },
                                        },
                                        i,
                                    ),
                                    expires: !1,
                                },
                                l,
                            ),
                        );
                    },
                    qe = (e, t, u = {}) => {
                        let n = u.from,
                            a = void 0 === n ? {} : n,
                            r = u.enter,
                            s = void 0 === r ? {} : r,
                            o = u.leave,
                            i = void 0 === o ? {} : o,
                            l = be(u, ve);
                        return (0, Q.useTransition)(
                            e,
                            Object.assign(
                                {
                                    from: Object.assign(
                                        { opacity: 0, transform: `translateX(${t}rem)`, pointerEvents: 'none' },
                                        a,
                                    ),
                                    enter: Object.assign(
                                        {
                                            opacity: 1,
                                            transform: 'translateX(0rem)',
                                            pointerEvents: 'auto',
                                            config: { duration: 300, easing: $e.easeOutQuint },
                                        },
                                        s,
                                    ),
                                    leave: Object.assign(
                                        {
                                            opacity: 0,
                                            transform: `translateX(${t}rem)`,
                                            pointerEvents: 'none',
                                            config: { duration: 300, easing: $e.easeInCubic },
                                        },
                                        i,
                                    ),
                                    expires: !1,
                                },
                                l,
                            ),
                        );
                    };
                function Ve() {}
                function Qe() {
                    return !1;
                }
                console.log;
                var je = u(9174);
                function Ye(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Xe(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Xe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Xe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const Ze = (e) => (0 === e ? window : window.subViews.get(e));
                const Ke = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: n = 'real', options: a, children: o, mocks: l }) {
                            const c = (0, r.useRef)([]),
                                d = (u, n, a) => {
                                    var r;
                                    const s = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: u = Ze,
                                            context: n = 'model',
                                        } = {}) {
                                            const a = new Map();
                                            function r(e, t = 0) {
                                                viewEnv.removeDataChangedCallback(e, t)
                                                    ? a.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                    u.forEach((t) => {
                                                        const u = a.get(t);
                                                        void 0 !== u && u(e);
                                                    });
                                                });
                                            });
                                            const s = (e) => {
                                                const a = u(t),
                                                    r = n.split('.').reduce((e, t) => e[t], a);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? r
                                                    : e.split('.').reduce((e, t) => {
                                                          const u = e[t];
                                                          return 'function' == typeof u ? u.bind(e) : u;
                                                      }, r);
                                            };
                                            return {
                                                subscribe: (u, r) => {
                                                    const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                        l = i.O.view.addModelObserver(o, t, !0);
                                                    return a.set(l, u), e && u(s(r)), l;
                                                },
                                                readByPath: s,
                                                createCallback: (e, t) => {
                                                    const u = s(t);
                                                    return (...t) => {
                                                        u(e(...t));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const t = s(e);
                                                    return () => {
                                                        t();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, u = Ye(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(n),
                                        o =
                                            'real' === u
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (r = null == a ? void 0 : a.getter) ? r : () => {},
                                                  }),
                                        l = (e) =>
                                            'mocks' === u ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                        d = (e) => c.current.push(e),
                                        m = e({
                                            mode: u,
                                            readByPath: l,
                                            externalModel: o,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const n = null != t ? t : l(e),
                                                        a = je.LO.box(n, { equals: Qe });
                                                    return (
                                                        'real' === u &&
                                                            o.subscribe(
                                                                (0, je.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const n = null != t ? t : l(e),
                                                        a = je.LO.box(n, { equals: Qe });
                                                    return (
                                                        'real' === u &&
                                                            o.subscribe(
                                                                (0, je.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = l(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = je.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, je.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            r = Object.entries(a),
                                                            s = r.reduce(
                                                                (e, [t, u]) => ((e[u] = je.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, je.aD)((e) => {
                                                                        r.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        E = { mode: u, model: m, externalModel: o, cleanup: d };
                                    return {
                                        model: m,
                                        controls: 'mocks' === u && a ? a.controls(E) : t(E),
                                        externalModel: o,
                                        mode: u,
                                    };
                                },
                                m = (0, r.useRef)(!1),
                                E = (0, r.useState)(n),
                                _ = E[0],
                                g = E[1],
                                A = (0, r.useState)(() => d(n, a, l)),
                                p = A[0],
                                F = A[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? F(d(_, a, l)) : (m.current = !0);
                                }, [l, _, a]),
                                (0, r.useEffect)(() => {
                                    g(n);
                                }, [n]),
                                (0, r.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), c.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                s().createElement(u.Provider, { value: p }, o)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
                var Je = u(3946),
                    et = u(2993),
                    tt = u(5572);
                const ut = Ke()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    primitives: e.primitives(['currentTabIdx']),
                                    rerollCooldown: e.primitives(['rerollCountDown'], 'dailyQuests').rerollCountDown,
                                    daily: e.object('dailyQuests'),
                                    dailyQuests: e.array('dailyQuests.quests', []),
                                    dailyQuestsCompletedVisited: e.array('dailyQuests.missionsCompletedVisited', []),
                                    premium: e.object('premiumMissions'),
                                    premiumQuests: e.array('premiumMissions.missions', []),
                                    premiumQuestsCompletedVisited: e.array(
                                        'premiumMissions.missionsCompletedVisited',
                                        [],
                                    ),
                                    epicQuest: e.object('epicQuest'),
                                    epicQuestBonuses: e.array('epicQuest.bonuses'),
                                    rerollTimer: je.LO.box(0),
                                },
                                u = (0, Je.Om)(() => {
                                    const e = t.root.get().premMissionsTabDiscovered;
                                    return [
                                        { id: ye.DailyQuests, title: R.strings.quests.dailyQuests.tab.label() },
                                        {
                                            id: ye.PremiumQuests,
                                            title: R.strings.quests.premiumQuests.tab.label(),
                                            notification: e ? void 0 : { type: 'dot' },
                                        },
                                    ];
                                }),
                                n = (0, Je.Om)(() =>
                                    [
                                        { tabIndex: ye.DailyQuests, isEnabled: t.daily.get().isEnabled },
                                        { tabIndex: ye.PremiumQuests, isEnabled: t.premium.get().isEnabled },
                                    ].filter((e) => e.isEnabled),
                                ),
                                a = (0, Je.Om)(() => {
                                    var e;
                                    const u = t.primitives.currentTabIdx.get(),
                                        a = n(),
                                        r = a.find((e) => e.tabIndex === u);
                                    return r ? r.tabIndex : null == (e = a[0]) ? void 0 : e.tabIndex;
                                }),
                                r = (0, Je.Om)((e, u) => {
                                    const n = u >= b.Large ? X.Big : X.Small,
                                        a = (e) =>
                                            Ce(e, (e) =>
                                                Object.assign({}, e, {
                                                    rewardSize: n,
                                                    bonuses: xe(e.bonuses, e.id, n),
                                                }),
                                            );
                                    switch (e) {
                                        case ye.DailyQuests:
                                            return a(t.dailyQuests.get()).slice(0, 3);
                                        case ye.PremiumQuests:
                                            return a(t.premiumQuests.get());
                                        default:
                                            return [];
                                    }
                                }),
                                s = (0, Je.Om)(() => t.dailyQuestsCompletedVisited.get(), { equals: Qe }),
                                o = (0, Je.Om)(() => t.premiumQuestsCompletedVisited.get(), { equals: Qe }),
                                i = (0, Je.Om)((e, t) => {
                                    switch (e) {
                                        case ye.DailyQuests:
                                            return Fe(s(), t);
                                        case ye.PremiumQuests:
                                            return Fe(o(), t);
                                        default:
                                            return void console.error(`Unreachable branch in tabIndex ${e}`);
                                    }
                                }),
                                l = (0, Je.Om)(() => t.rerollTimer.get() > 0),
                                c = (0, Je.Om)(() => {
                                    const e = t.rerollTimer.get(),
                                        u =
                                            (n = e) < pe.yR
                                                ? R.strings.quests.general.countdown.text.timer_sec()
                                                : n < pe.dV
                                                  ? R.strings.quests.general.countdown.text.timer_min()
                                                  : R.strings.quests.general.countdown.text.timer_hrs();
                                    var n;
                                    return (0, tt.G)(u, e);
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getEnabledFeatures: n,
                                    getCurrentTabIndex: a,
                                    getTabs: u,
                                    getQuests: r,
                                    isCardVisited: i,
                                    getDailyQuestsCompletedVisited: s,
                                    getPremiumQuestsCompletedVisited: o,
                                    rerollInCooldown: l,
                                    formattedTimer: c,
                                },
                            });
                        },
                        ({ externalModel: e, model: t, cleanup: u }) => {
                            const n = (0, je.aD)((e) => t.rerollTimer.set(e)),
                                a = e.createCallbackNoArgs('onRerollEnabled');
                            let r;
                            const s = (0, je.EH)(() => {
                                const e = t.rerollCooldown.get();
                                if ((clearInterval(r), n(e), 0 === e)) return;
                                const u = Date.now();
                                r = setInterval(() => {
                                    const t = Math.floor((Date.now() - u) / 1e3),
                                        s = Math.max(e - t, 0);
                                    n(s), 0 === s && (a(), clearInterval(r));
                                }, 1e3);
                            });
                            return (
                                u(() => {
                                    s(), clearInterval(r);
                                }),
                                {
                                    close: e.createCallbackNoArgs('onClose'),
                                    reroll: e.createCallback((e) => ({ questId: e }), 'onReroll'),
                                    tabClick: e.createCallback((e) => ({ tabIdx: e }), 'onTabClick'),
                                    infoToggle: e.createCallbackNoArgs('onInfoToggle'),
                                    buyPremiumBtnClick: e.createCallbackNoArgs('onBuyPremiumBtnClick'),
                                    claimRewards: e.createCallbackNoArgs('onClaimRewards'),
                                }
                            );
                        },
                    ),
                    nt = ut[0],
                    at = ut[1],
                    rt = {
                        base: 'App_base_32',
                        background: 'App_background_15',
                        background__dailyQuests: 'App_background__dailyQuests_8b',
                        background__premiumQuests: 'App_background__premiumQuests_e8',
                        infoButton: 'App_infoButton_2e',
                        infoButton__info: 'App_infoButton__info_b3',
                        fadeIn: 'App_fadeIn_13',
                        rewardsButton: 'App_rewardsButton_d9',
                    };
                function st(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const ot = {
                        playHighlight() {
                            st('highlight');
                        },
                        playClick() {
                            st('play');
                        },
                        playYes() {
                            st('yes1');
                        },
                    },
                    it = {
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
                    lt = [
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
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                class dt extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && st(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && st(this.props.soundClick);
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
                            u = e.onClick,
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, lt)),
                            E = f()(it.base, it[`base__${r}`], it[`base__${a}`], null == o ? void 0 : o.base),
                            _ = f()(it.icon, it[`icon__${r}`], it[`icon__${a}`], null == o ? void 0 : o.icon),
                            g = f()(it.glow, null == o ? void 0 : o.glow),
                            A = f()(it.caption, it[`caption__${r}`], null == o ? void 0 : o.caption),
                            p = f()(it.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            ct(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== r && s().createElement('div', { className: it.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, t),
                            n && s().createElement('div', { className: p }, n),
                        );
                    }
                }
                dt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const mt = [
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
                function Et(e) {
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
                const _t = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: G.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    gt = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            p = e.targetId,
                            F = void 0 === p ? 0 : p,
                            D = e.onShow,
                            C = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, mt);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, r.useMemo)(
                                () =>
                                    F ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [F],
                            ),
                            v = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (_t(u, _, { isMouseEvent: !0, on: !0, arguments: Et(n) }, h),
                                    D && D(),
                                    (f.current.isVisible = !0));
                            }, [u, _, n, h, D]),
                            b = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        _t(u, _, { on: !1 }, h),
                                        f.current.isVisible && C && C(),
                                        (f.current.isVisible = !1);
                                }
                            }, [u, _, h, C]),
                            w = (0, r.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === A && b();
                            }, [A, b]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return A
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              b(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && b(), null == i || i(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && b(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    At = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const Ft = R.views.common.tooltip_window.simple_tooltip_content,
                    Dt = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            a = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, At);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: u, header: n, note: a, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, n, a, i]);
                        return s().createElement(
                            gt,
                            pt(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Ft.SimpleTooltipHtmlContent('resId') : Ft.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ct = R.strings.quests.infoPage,
                    Bt = (0, V.Pi)(({ className: e }) => {
                        const t = at(),
                            u = t.model,
                            n = t.controls,
                            a = u.root.get(),
                            r = a.infoVisible,
                            o = a.dailyType,
                            i = S().mediaSize;
                        return s().createElement(
                            'div',
                            { className: e },
                            r
                                ? s().createElement(dt, {
                                      type: 'back',
                                      caption: Ct.infoButton.back.title(),
                                      goto: i >= b.Small ? Ct.infoButton.back.goto() : void 0,
                                      onClick: n.infoToggle,
                                  })
                                : s().createElement(
                                      Dt,
                                      {
                                          body: Ct.infoButtonTooltip.body(),
                                          header: Ct.infoButtonTooltip.header.$dyn(o),
                                      },
                                      s().createElement(dt, {
                                          type: 'info',
                                          caption: Ct.infoButton.$dyn(o),
                                          onClick: n.infoToggle,
                                      }),
                                  ),
                        );
                    }),
                    ft = (e) => {
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
                    };
                var ht = u(7515);
                const vt = [];
                function bt(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), vt)
                    );
                }
                function wt(e, t, u = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, s),
                        a,
                    ];
                }
                function yt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return St(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return St(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function St(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function Tt(e, t, u) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let a,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    a && clearTimeout(a);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), u.apply(l, i);
                                    }
                                    r ||
                                        (n && !a && d(),
                                        o(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (i.cancel = function () {
                                        o(), (r = !0);
                                    }),
                                    i
                                );
                            })(u, e),
                        t,
                    );
                    return (0, r.useEffect)(() => n.cancel, [n]), n;
                }
                let Rt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Rt || (Rt = {}));
                const xt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Nt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : (0, ht.u)(a, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? xt : c,
                                m = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        a = (e, ...u) => {
                                            for (var n, a = yt(t(e).values()); !(n = a()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                                })(),
                                g = Tt(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, Q.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), _.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                p = A[0],
                                F = A[1],
                                D = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = p.scrollPosition.get(),
                                            r = (null != (n = p.scrollPosition.goal) ? n : 0) - a;
                                        return o(e, t * u + r + a);
                                    },
                                    [p.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            F.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(n, p.scrollPosition.get()) },
                                            });
                                    },
                                    [F, d.animationConfig, p.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = E.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            r = D(t, e, n);
                                        C(r);
                                    },
                                    [C, D, d.step],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(n(e)),
                                            m.current && _.trigger('mouseWheel', e, p.scrollPosition, t(m.current));
                                    },
                                    [p.scrollPosition, B, _],
                                ),
                                h = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        ft(() => {
                                            const e = m.current;
                                            e &&
                                                (C(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, p.scrollPosition.goal],
                                ),
                                v = bt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && C(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? a(E.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: C,
                                    applyStepTo: B,
                                    contentRef: m,
                                    wrapperRef: E,
                                    scrollPosition: F,
                                    animationScroll: p,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [p.scrollPosition, C, B, _.off, _.on, v, f, F, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Pt = Nt({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Rt.Next : Rt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    It = 'HorizontalBar_base_49',
                    kt = 'HorizontalBar_base__nonActive_82',
                    Ot = 'HorizontalBar_leftButton_5f',
                    Mt = 'HorizontalBar_rightButton_03',
                    Lt = 'HorizontalBar_track_0d',
                    Ht = 'HorizontalBar_thumb_fd',
                    Ut = 'HorizontalBar_rail_32',
                    Wt = 'disable',
                    $t = { pending: !1, offset: 0 },
                    Gt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    zt = () => {},
                    qt = (e, t) => Math.max(20, e.offsetWidth * t),
                    Vt = (0, r.memo)(
                        ({
                            api: e,
                            classNames: t = {},
                            getStepByRailClick: u = Gt,
                            onDrag: n = zt,
                            onClick: a = zt,
                        }) => {
                            const o = (0, r.useRef)(null),
                                l = (0, r.useRef)(null),
                                c = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                E = e.stepTimeout || 100,
                                _ = (0, r.useState)($t),
                                g = _[0],
                                A = _[1],
                                p = (0, r.useCallback)(
                                    (e) => {
                                        A(e),
                                            m.current &&
                                                n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                    },
                                    [n],
                                ),
                                F = () => {
                                    const t = d.current,
                                        u = m.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(n && t && u && a)) return;
                                    const r = e.animationScroll.scrollPosition.get(),
                                        s = Math.min(1, n / a),
                                        o = (0, ht.u)(0, 1, r / (a - n)),
                                        i = (t.offsetWidth - qt(t, s)) * o;
                                    (u.style.transform = `translateX(${0 | i}px)`),
                                        ((e) => {
                                            if (l.current && c.current && d.current && m.current) {
                                                if (0 === e)
                                                    return (
                                                        l.current.classList.add(Wt), void c.current.classList.remove(Wt)
                                                    );
                                                if (
                                                    ((t = d.current),
                                                    (u = m.current),
                                                    e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        l.current.classList.remove(Wt), void c.current.classList.add(Wt)
                                                    );
                                                var t, u;
                                                l.current.classList.remove(Wt), c.current.classList.remove(Wt);
                                            }
                                        })(i);
                                },
                                D = bt(() => {
                                    (() => {
                                        const t = m.current,
                                            u = d.current,
                                            n = e.getWrapperSize(),
                                            a = e.getContainerSize();
                                        if (!(a && t && n && u)) return;
                                        const r = Math.min(1, n / a);
                                        (t.style.width = `${qt(u, r)}px`),
                                            (t.style.display = 'flex'),
                                            o.current &&
                                                (1 === r
                                                    ? o.current.classList.add(kt)
                                                    : o.current.classList.remove(kt));
                                    })(),
                                        F();
                                });
                            (0, r.useEffect)(() => ft(D)),
                                (0, r.useEffect)(
                                    () =>
                                        ft(() => {
                                            const t = () => {
                                                F();
                                            };
                                            let u = zt;
                                            const n = () => {
                                                u(), (u = ft(D));
                                            };
                                            return (
                                                e.events.on('recalculateContent', D),
                                                e.events.on('rest', t),
                                                e.events.on('change', t),
                                                e.events.on('resizeHandled', n),
                                                () => {
                                                    u(),
                                                        e.events.off('recalculateContent', D),
                                                        e.events.off('rest', t),
                                                        e.events.off('change', t),
                                                        e.events.off('resizeHandled', n);
                                                }
                                            );
                                        }),
                                    [e],
                                ),
                                (0, r.useEffect)(() => {
                                    if (!g.pending) return;
                                    const t = i.O.client.events.mouse.move(([t, u]) => {
                                            var a;
                                            const r = e.contentRef.current,
                                                s = e.wrapperRef.current;
                                            if (!r || !s) return;
                                            const o = d.current,
                                                i = m.current;
                                            if (!o || !i) return;
                                            if ('inside' === u && t.clientX < 0) return;
                                            const l = t.clientX - g.offset - o.getBoundingClientRect().x,
                                                c = (l / o.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(r, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                        }),
                                        u = i.O.client.events.mouse.up(() => {
                                            t(), p($t);
                                        });
                                    return () => {
                                        t(), u();
                                    };
                                }, [e, g.offset, g.pending, n, p]);
                            const C = wt(
                                    (t) => {
                                        e.applyStepTo(t), a(t);
                                    },
                                    E,
                                    [e],
                                ),
                                B = C[0],
                                h = C[1];
                            (0, r.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', h, !0),
                                    () => document.removeEventListener('mouseup', h, !0)
                                ),
                                [h],
                            );
                            const v = (e) => {
                                e.target.classList.contains(Wt) || st('highlight');
                            };
                            return s().createElement(
                                'div',
                                { className: f()(It, t.base), ref: o, onWheel: e.handleMouseWheel },
                                s().createElement('div', {
                                    className: f()(Ot, t.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Wt) || 0 !== e.button || (st('play'), B(Rt.Next));
                                    },
                                    onMouseUp: h,
                                    ref: l,
                                    onMouseEnter: v,
                                }),
                                s().createElement(
                                    'div',
                                    {
                                        className: f()(Lt, t.track),
                                        onMouseDown: (t) => {
                                            const n = m.current;
                                            if (n && 0 === t.button)
                                                if ((st('play'), t.target === n))
                                                    p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                                else {
                                                    ((t) => {
                                                        const n = m.current,
                                                            a = e.contentRef.current;
                                                        if (!n || !a) return;
                                                        const r = u(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                    })(t.screenX > n.getBoundingClientRect().x ? Rt.Prev : Rt.Next);
                                                }
                                        },
                                        ref: d,
                                        onMouseEnter: v,
                                    },
                                    s().createElement('div', { ref: m, className: f()(Ht, t.thumb) }),
                                    s().createElement('div', { className: f()(Ut, t.rail) }),
                                ),
                                s().createElement('div', {
                                    className: f()(Mt, t.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Wt) || 0 !== e.button || (st('play'), B(Rt.Prev));
                                    },
                                    onMouseUp: h,
                                    ref: c,
                                    onMouseEnter: v,
                                }),
                            );
                        },
                    ),
                    Qt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    jt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: f()(Qt.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: f()(Qt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(Qt.defaultScrollArea, a) },
                                s().createElement(Yt, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(Vt, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Yt = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, r.useEffect)(() => ft(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(Qt.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: f()(Qt.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: f()(Qt.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Yt.Bar = Vt), (Yt.Default = jt);
                const Xt = Nt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Rt.Next : Rt.Prev),
                    }),
                    Zt = 'VerticalBar_base_f3',
                    Kt = 'VerticalBar_base__nonActive_42',
                    Jt = 'VerticalBar_topButton_d7',
                    eu = 'VerticalBar_bottomButton_06',
                    tu = 'VerticalBar_track_df',
                    uu = 'VerticalBar_thumb_32',
                    nu = 'VerticalBar_rail_43',
                    au = 'disable',
                    ru = () => {},
                    su = { pending: !1, offset: 0 },
                    ou = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    iu = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    lu = (e, t) => Math.max(20, e.offsetHeight * t),
                    cu = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ou, onDrag: n = ru }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, r.useState)(su),
                            _ = E[0],
                            g = E[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            p = bt(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${lu(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(Kt) : a.current.classList.remove(Kt)),
                                    s
                                );
                            }),
                            F = bt(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / a),
                                    i = (0, ht.u)(0, 1, r / (a - n)),
                                    m = (t.offsetHeight - lu(t, s)) * i;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(au), void l.current.classList.remove(au);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(au), void l.current.classList.add(au);
                                            var t, u;
                                            o.current.classList.remove(au), l.current.classList.remove(au);
                                        }
                                    })(m);
                            }),
                            D = bt(() => {
                                iu(e, () => {
                                    p(), F();
                                });
                            });
                        (0, r.useEffect)(() => ft(D)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    iu(e, () => {
                                        F();
                                    });
                                };
                                let u = ru;
                                const n = () => {
                                    u(), (u = ft(D));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        A(su);
                                    }),
                                    u = i.O.client.events.mouse.move(([t]) => {
                                        iu(e, (u) => {
                                            const a = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const o = t.screenY - _.offset - a.getBoundingClientRect().y,
                                                i = (o / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, _.offset, _.pending, n, A]);
                        const C = wt((t) => e.applyStepTo(t), m, [e]),
                            B = C[0],
                            h = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(au) || st('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: f()(Zt, t.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: f()(Jt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(au) || 0 !== e.button || (st('play'), B(Rt.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: f()(tu, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if ((st('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        iu(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Rt.Prev : Rt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: d, className: f()(uu, t.thumb) }),
                                s().createElement('div', { className: f()(nu, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: f()(eu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(au) || 0 !== e.button || (st('play'), B(Rt.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    du = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    mu = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: f()(du.base, e.base) });
                            }, [n]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: f()(du.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(du.area, a) },
                                s().createElement(Eu, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(cu, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Eu = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, r.useEffect)(() => ft(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: f()(du.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: f()(du.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Eu.Default = mu;
                const _u = { Vertical: a, Horizontal: n };
                var gu = u(3649);
                const Au = 'FormatText_base_d0',
                    pu = ({
                        binding: e,
                        text: t = '',
                        classMix: u,
                        alignment: n = gu.v2.left,
                        formatWithBrackets: a,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const o = a && e ? (0, gu.WU)(t, e) : t;
                        return s().createElement(
                            r.Fragment,
                            null,
                            o.split('\n').map((t, a) =>
                                s().createElement(
                                    'div',
                                    { className: f()(Au, u), key: `${t}-${a}` },
                                    (0, gu.Uw)(t, n, e).map((e, t) =>
                                        s().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Fu = {
                        base: 'InfoCard_base_e3',
                        base__general: 'InfoCard_base__general_47',
                        base__horizontal: 'InfoCard_base__horizontal_04',
                        base__horizontalReversed: 'InfoCard_base__horizontalReversed_0b',
                        image: 'InfoCard_image_87',
                        container: 'InfoCard_container_50',
                        title: 'InfoCard_title_f1',
                        content: 'InfoCard_content_07',
                    };
                let Du;
                !(function (e) {
                    (e.Horizontal = 'horizontal'),
                        (e.HorizontalReversed = 'horizontalReversed'),
                        (e.General = 'general');
                })(Du || (Du = {}));
                const Cu = ({ icon: e, title: t, paragraph: u, cardType: n = Du.General }) =>
                        s().createElement(
                            'div',
                            { className: f()(Fu.base, Fu[`base__${n}`]) },
                            s().createElement('div', { className: Fu.image, style: { backgroundImage: `url(${e})` } }),
                            s().createElement(
                                'div',
                                { className: Fu.container },
                                s().createElement(pu, { text: t, classMix: Fu.title }),
                                s().createElement(pu, { text: u, classMix: Fu.content }),
                            ),
                        ),
                    Bu = R.strings.quests.infoPage,
                    fu = R.images.gui.maps.icons.missions.icons,
                    hu = 'InfoPage_base_97',
                    vu = 'InfoPage_scrollContent_17',
                    bu = 'InfoPage_scrollBar_b1',
                    wu = 'InfoPage_content_cd',
                    yu = 'InfoPage_missionsDescription_6d',
                    Su = 'InfoPage_generalDescription_37',
                    Tu = 'InfoPage_separator_04',
                    Ru = 'InfoPage_title_f3';
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Nu = R.strings.quests.infoPage,
                    Pu = (0, V.Pi)(() => {
                        const e = at().model,
                            t = e.root.get(),
                            u = t.dailyType,
                            n = t.isBattlePassActive,
                            a = t.isComp7Active,
                            r = e.daily.get().rerollTimeout,
                            o = Xt(),
                            i = S().mediaSize,
                            l =
                                u === U.Default
                                    ? ((e, t, u) => {
                                          const n = u >= b.Medium ? fu.big : fu;
                                          return {
                                              missionsDescription: [
                                                  {
                                                      cardType: Du.HorizontalReversed,
                                                      icon: e ? n.daily_bp_active() : n.daily(),
                                                      title: Bu.dailyMissionTitle(),
                                                      paragraph: e
                                                          ? Bu.dailyMissions.battlePassDailyMissions.default()
                                                          : Bu.dailyMissions.default(),
                                                  },
                                                  {
                                                      cardType: Du.Horizontal,
                                                      icon: n.premium(),
                                                      title: Bu.premiumMissionsTitle(),
                                                      paragraph: Bu.premiumMissions.default(),
                                                  },
                                              ],
                                              generalDescription: [
                                                  {
                                                      icon: fu.pm_info_2(),
                                                      title: Bu.conditionsTitle(),
                                                      paragraph: Bu.conditions.default(),
                                                  },
                                                  {
                                                      icon: fu.dq_info_3(),
                                                      title: Bu.bonusMissionTitle(),
                                                      paragraph: Bu.bonusMission.default(),
                                                  },
                                                  {
                                                      icon: fu.pm_info_3(),
                                                      title: Bu.epicRewardsTitle(),
                                                      paragraph: Bu.epicRewards.default(),
                                                  },
                                                  {
                                                      icon: fu.dq_info_2(),
                                                      title: Bu.missionSwitchTitle(),
                                                      paragraph: (0, tt.G)(
                                                          ((a = t),
                                                          a % 3600 > 0
                                                              ? Bu.missionSwitch_min()
                                                              : Bu.missionSwitch_hrs()),
                                                          t,
                                                      ),
                                                  },
                                              ],
                                          };
                                          var a;
                                      })(n, r, i)
                                    : ((e, t, u, n) => {
                                          const a = n >= b.Medium ? fu.big : fu;
                                          return {
                                              missionsDescription: [
                                                  {
                                                      cardType: Du.HorizontalReversed,
                                                      icon: u ? a.daily_bp_active() : a.daily(),
                                                      title: Bu.dailyMissionTitle(),
                                                      paragraph: u
                                                          ? Bu.dailyMissions.battlePassDailyMissions.winback()
                                                          : Bu.dailyMissions.winback(),
                                                  },
                                                  {
                                                      cardType: Du.Horizontal,
                                                      icon: a.premium(),
                                                      title: Bu.premiumMissionsTitle(),
                                                      paragraph: t
                                                          ? Bu.premiumMissions.winback_comp7Active()
                                                          : Bu.premiumMissions.winback(),
                                                  },
                                              ],
                                              generalDescription: [
                                                  {
                                                      icon: fu.pm_info_2(),
                                                      title: Bu.conditionsTitle(),
                                                      paragraph: t
                                                          ? Bu.conditions.winback_comp7Active()
                                                          : Bu.conditions.winback(),
                                                  },
                                                  {
                                                      icon: fu.dq_info_3(),
                                                      title: Bu.bonusMissionTitle(),
                                                      paragraph: Bu.bonusMission.winback(),
                                                  },
                                                  {
                                                      icon: fu.pm_info_3(),
                                                      title: Bu.epicRewardsTitle(),
                                                      paragraph: Bu.epicRewards.winback(),
                                                  },
                                                  {
                                                      icon: fu.dq_info_2(),
                                                      title: Bu.missionSwitchTitle(),
                                                      paragraph: Bu.missionSwitch.winback(),
                                                  },
                                              ],
                                          };
                                      })(0, a, n, i);
                        return s().createElement(
                            'div',
                            { className: hu },
                            s().createElement(
                                _u.Vertical.Area.Default,
                                { api: o, scrollClassNames: { content: vu }, barClassNames: { base: bu } },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement('div', { className: Ru }, Nu.header.$dyn(u)),
                                    s().createElement(
                                        'div',
                                        { className: wu },
                                        s().createElement(
                                            'div',
                                            { className: yu },
                                            l.missionsDescription.map((e, t) =>
                                                s().createElement(Cu, xu({ key: t }, e)),
                                            ),
                                        ),
                                        s().createElement('div', { className: Tu }),
                                        s().createElement(
                                            'div',
                                            { className: Su },
                                            l.generalDescription.map((e, t) =>
                                                s().createElement(Cu, xu({ key: t }, e)),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Iu = 'Disabled_base_56',
                    ku = 'Disabled_alert_93',
                    Ou = 'Disabled_icon_c0',
                    Mu = 'Disabled_info_6b',
                    Lu = R.strings.menu.browser.dataUnavailable,
                    Hu = () =>
                        s().createElement(
                            'div',
                            { className: Iu },
                            s().createElement(
                                'div',
                                { className: ku },
                                s().createElement('div', { className: Ou }),
                                Lu.header(),
                            ),
                            s().createElement('div', { className: Mu }, Lu.description()),
                        ),
                    Uu = s().memo;
                const Wu = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    $u = { mouseEnter: 'highlight', click: 'play' },
                    Gu = (e, { active: t, enableInteractiveActiveTab: u = !1 }) => !!u || e !== t,
                    zu = Uu(function (e) {
                        const t = e.active,
                            u = e.tabs,
                            n = e.onClick,
                            a = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.className,
                            i = e.classNames,
                            l = e.sounds,
                            c = void 0 === l ? $u : l,
                            d = (t) => () => {
                                Gu(t, e) && (c.click && st(c.click), null == n || n(t));
                            },
                            m = (t) => () => {
                                Gu(t, e) && (c.mouseEnter && st(c.mouseEnter), null == a || a(t));
                            },
                            E = (t) => () => {
                                Gu(t, e) && (c.mouseLeave && st(c.mouseLeave), null == r || r(t));
                            };
                        return s().createElement(
                            'div',
                            { className: f()(Wu.base, o) },
                            u.map(({ id: n, title: a, notification: r }, o) => {
                                var l;
                                return s().createElement(
                                    'div',
                                    {
                                        className: f()(
                                            Wu.tab,
                                            n === t && f()(Wu.tab__active, null == i ? void 0 : i.activeTab),
                                            !Gu(n, e) && Wu.tab__nonInteractive,
                                            null == i ? void 0 : i.tab,
                                        ),
                                        key: n,
                                        onClick: d(n),
                                        onMouseEnter: m(n),
                                        onMouseLeave: E(n),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(u, o) &&
                                        s().createElement('div', {
                                            className: f()(Wu.divider, null == i ? void 0 : i.divider),
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: f()(Wu.state, null == i ? void 0 : i.state) },
                                        s().createElement('div', {
                                            className: f()(Wu.highlight, null == i ? void 0 : i.highlight),
                                        }),
                                        s().createElement('div', {
                                            className: f()(
                                                Wu.border,
                                                Wu.border__left,
                                                null == i ? void 0 : i.border,
                                                null == i ? void 0 : i.borderLeft,
                                            ),
                                        }),
                                        s().createElement('div', {
                                            className: f()(
                                                Wu.border,
                                                Wu.border__right,
                                                null == i ? void 0 : i.border,
                                                null == i ? void 0 : i.borderRight,
                                            ),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: f()(Wu.title, null == i ? void 0 : i.title) },
                                        a,
                                    ),
                                    void 0 !== r &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    Wu.notification,
                                                    Wu[`notification__${r.type}`],
                                                    Wu[`notification__${null != (l = r.size) ? l : 'medium'}`],
                                                    null == i ? void 0 : i.notification,
                                                ),
                                            },
                                            'dot' !== r.type && r.value,
                                        ),
                                );
                            }),
                        );
                    });
                var qu = u(4649),
                    Vu = u(122);
                const Qu = {
                        questsContainer: 'styles_questsContainer_18',
                        questsContainer__winback: 'styles_questsContainer__winback_83',
                    },
                    ju = 'BonusCard_base_ea',
                    Yu = 'BonusCard_glow_13',
                    Xu = 'BonusCard_wrapper_2b',
                    Zu = 'BonusCard_flag_83',
                    Ku = 'BonusCard_content_42',
                    Ju = ['children'];
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const tn = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Ju);
                    return s().createElement(
                        gt,
                        en(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const nn = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = s().createElement('div', { className: u }, e);
                        if (t.header || t.body) return s().createElement(Dt, t, n);
                        const a = t.contentId;
                        return a ? s().createElement(gt, un({}, t, { contentId: a }), n) : s().createElement(tn, t, n);
                    },
                    an = {
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
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    rn = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = X.Big,
                        special: a,
                        value: r,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const _ = ((e, t) => {
                                if (void 0 === t || !me.includes(e)) return null;
                                switch (t) {
                                    case K.BATTLE_BOOSTER:
                                    case K.BATTLE_BOOSTER_REPLACE:
                                        return J.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case K.BATTLE_BOOSTER:
                                        return ee.BATTLE_BOOSTER;
                                    case K.BATTLE_BOOSTER_REPLACE:
                                        return ee.BATTLE_BOOSTER_REPLACE;
                                    case K.BUILT_IN_EQUIPMENT:
                                        return ee.BUILT_IN_EQUIPMENT;
                                    case K.EQUIPMENT_PLUS:
                                        return ee.EQUIPMENT_PLUS;
                                    case K.EQUIPMENT_TROPHY_BASIC:
                                        return ee.EQUIPMENT_TROPHY_BASIC;
                                    case K.EQUIPMENT_TROPHY_UPGRADED:
                                        return ee.EQUIPMENT_TROPHY_UPGRADED;
                                    case K.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case K.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case K.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ee.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case K.PROGRESSION_STYLE_UPGRADED_1:
                                        return ee.PROGRESSION_STYLE_UPGRADED_1;
                                    case K.PROGRESSION_STYLE_UPGRADED_2:
                                        return ee.PROGRESSION_STYLE_UPGRADED_2;
                                    case K.PROGRESSION_STYLE_UPGRADED_3:
                                        return ee.PROGRESSION_STYLE_UPGRADED_3;
                                    case K.PROGRESSION_STYLE_UPGRADED_4:
                                        return ee.PROGRESSION_STYLE_UPGRADED_4;
                                    case K.PROGRESSION_STYLE_UPGRADED_5:
                                        return ee.PROGRESSION_STYLE_UPGRADED_5;
                                    case K.PROGRESSION_STYLE_UPGRADED_6:
                                        return ee.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            A = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Z.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Z.CURRENCY:
                                    case Z.NUMBER:
                                        return s().createElement(ue, { format: 'integral', value: Number(e) });
                                    case Z.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, o);
                        return s().createElement(
                            'div',
                            { className: f()(an.base, an[`base__${n}`], c), style: l },
                            s().createElement(
                                nn,
                                { tooltipArgs: m, className: an.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: f()(an.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: f()(an.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: f()(an.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            s().createElement('div', {
                                                className: f()(an.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    an.info,
                                                    an[`info__${e}`],
                                                    o === Z.MULTI && an.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    i && s().createElement('div', { className: an.title }, i),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    nn,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: f()(an.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    sn = 'Rewards_base_26',
                    on = 'Rewards_base__vertical_9f',
                    ln = 'Rewards_reward_7b',
                    cn = 'Rewards_reward__vertical_c6';
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const mn = s().memo(
                    ({
                        data: e,
                        size: t = X.Big,
                        isVertical: u = !1,
                        count: n,
                        classMix: a,
                        rewardItemClassMix: o,
                        boxRewardTooltip: i,
                        boxRewardValue: l,
                        boxRewardClassName: c,
                        boxRewardClassNames: d,
                    }) => {
                        const m = (0, r.useMemo)(
                                () => (n && n < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : ''),
                                [n, e.length, t],
                            ),
                            E =
                                l ||
                                (0, gu.uF)(R.strings.tooltips.quests.awards.additional.bottom(), {
                                    count: e.length - (n || 0),
                                }),
                            _ = f()(sn, u && on, a),
                            g = f()(ln, u && cn, o);
                        return s().createElement(
                            'div',
                            { className: _ },
                            m
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      e
                                          .slice(0, n)
                                          .map((e, u) =>
                                              s().createElement(
                                                  'div',
                                                  { key: u, className: g },
                                                  s().createElement(rn, dn({ size: t }, e)),
                                              ),
                                          ),
                                      s().createElement(
                                          'div',
                                          { className: g },
                                          s().createElement(rn, {
                                              name: 'more',
                                              image: m,
                                              size: t,
                                              value: E,
                                              tooltipArgs: i,
                                              className: c,
                                              classNames: d,
                                          }),
                                      ),
                                  )
                                : e.map((e, u) =>
                                      s().createElement(
                                          'div',
                                          { key: u, className: g },
                                          s().createElement(rn, dn({ size: t }, e)),
                                      ),
                                  ),
                        );
                    },
                );
                var En = u(3847);
                const _n = 'Content_base_63',
                    gn = 'Content_header_a7',
                    An = 'Content_title_0b',
                    pn = 'Content_countDownContainer_2c',
                    Fn = 'Content_timer_e8',
                    Dn = 'Content_countDown_f3',
                    Cn = 'Content_missionIcon_74',
                    Bn = 'Content_battleConditions_33',
                    fn = 'Content_text_a7',
                    hn = 'Content_progressInfo_fc',
                    vn = 'Content_progressBar_07',
                    bn = 'Content_rewards_67';
                let wn;
                !(function (e) {
                    (e[(e.BIG = 80)] = 'BIG'), (e[(e.MEDIUM = 48)] = 'MEDIUM'), (e[(e.SMALL = 32)] = 'SMALL');
                })(wn || (wn = {}));
                const yn = R.images.gui.maps.icons.missions.icons,
                    Sn = R.strings.quests.dailyQuests.bonusQuest,
                    Tn = (e) => (e >= b.Large ? wn.BIG : e >= b.Medium ? wn.MEDIUM : wn.SMALL),
                    Rn = (0, V.Pi)(() => {
                        const e = at().model,
                            t = e.root.get().countDown,
                            u = io().isExiting,
                            n = S().mediaSize,
                            a = Fe(e.dailyQuests.get(), 3);
                        if (void 0 === a) throw new Error('There is no bonus quest in daily quests');
                        const r = a.bonusCondition,
                            o = a.id,
                            i = a.postBattleCondition,
                            l = a.bonuses,
                            c = a.icon,
                            d = Ne(r, i),
                            m = n >= b.Large ? X.Big : X.Small,
                            E = xe(l, o, m),
                            _ = ze(u, -10, {
                                leave: { opacity: 1, config: { duration: 400, easing: $e.easeInCubic } },
                                delay: u ? 100 : 300,
                            });
                        return s().createElement(
                            'div',
                            { className: _n },
                            _(
                                (e, u) =>
                                    !u &&
                                    s().createElement(
                                        Q.animated.div,
                                        { style: e, className: gn },
                                        s().createElement('div', { className: An }, Sn.bonusMissionTitle()),
                                        s().createElement(
                                            'div',
                                            { className: pn },
                                            s().createElement('div', { className: Fn }),
                                            s().createElement(et.Z, {
                                                startValue: t,
                                                hourFormat: Sn.countDown_hrs(),
                                                minuteFormat: Sn.countDown_minSec(),
                                                pendingDotCount: 8,
                                                className: Dn,
                                            }),
                                        ),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: Bn },
                                s().createElement('div', {
                                    className: Cn,
                                    style: { backgroundImage: `url(${yn.$dyn(`c_${Tn(n)}_${c}_silver`)})` },
                                }),
                                void 0 !== d &&
                                    s().createElement(En.L, {
                                        conditions: d,
                                        missionId: o,
                                        columns: !0,
                                        reverse: !0,
                                        swapProgress: !0,
                                        classNames: { text: fn, progressInfo: hn, progressBar: vn },
                                    }),
                            ),
                            s().createElement(mn, {
                                size: m,
                                data: E,
                                classMix: bn,
                                count: ((g = E.length), (A = 3), g > A ? A - 1 : void 0),
                            }),
                        );
                        var g, A;
                    }),
                    xn = {
                        from: { opacity: 0, transform: 'translateY(-200rem) scaleX(0.15) scaleY(0.15)' },
                        enter: {
                            opacity: 1,
                            transform: 'translateY(0rem) scaleX(1) scaleY(1)',
                            config: { duration: 800, easing: $e.easeOutQuint },
                        },
                        leave: {
                            opacity: 0,
                            transform: 'translateY(0rem) scaleX(1) scaleY(1)',
                            config: { duration: 100, easing: $e.easeInCubic },
                            delay: 300,
                        },
                    },
                    Nn = ({ bonusQuestCompleted: e, isFirstAppearing: t }) => {
                        const u = io().isExiting,
                            n = u || e,
                            a = Ge(n, {
                                enter: { pointerEvents: 'none', config: { duration: 400, easing: $e.easeOutCirc } },
                                leave: { config: { duration: 300, easing: $e.easeInCubic } },
                                delay: n ? (e ? 2300 : 0) : 600,
                            }),
                            r = ze(e, 20, {
                                from: { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                                delay: e ? 2300 : 0,
                            }),
                            o = ze(
                                u,
                                20,
                                Object.assign(
                                    {},
                                    t ? xn : { from: { transform: 'translateY(0rem)' }, delay: u ? 100 : 200 },
                                ),
                            ),
                            i = ze(
                                u,
                                -30,
                                Object.assign(
                                    {},
                                    t
                                        ? {
                                              enter: { config: { duration: 800, easing: $e.easeOutQuint } },
                                              leave: {
                                                  transform: 'translateY(-20rem)',
                                                  opacity: 0,
                                                  config: { duration: 300, easing: $e.easeInCubic },
                                              },
                                          }
                                        : {
                                              from: { transform: 'translateY(-20rem)' },
                                              enter: {
                                                  transform: 'translateY(0rem)',
                                                  config: { duration: 600, easing: $e.easeOutCirc },
                                              },
                                              leave: { transform: 'translateY(20rem)' },
                                          },
                                    { delay: u ? 100 : 400 },
                                ),
                            );
                        return s().createElement(
                            'div',
                            { className: ju },
                            a((e, t) => !t && s().createElement(Q.animated.div, { style: e, className: Yu })),
                            r(
                                (e, t) =>
                                    !t &&
                                    s().createElement(
                                        Q.animated.div,
                                        { style: e, className: Xu },
                                        o(
                                            (e, t) =>
                                                !t && s().createElement(Q.animated.div, { style: e, className: Zu }),
                                        ),
                                        i(
                                            (e, t) =>
                                                !t &&
                                                s().createElement(
                                                    Q.animated.div,
                                                    { style: e, className: Ku },
                                                    s().createElement(Rn, null),
                                                ),
                                        ),
                                    ),
                            ),
                        );
                    },
                    Pn = 'AllCompleteCountdown_base_61',
                    In = 'AllCompleteCountdown_title_06',
                    kn = 'AllCompleteCountdown_subTitle_78',
                    On = 'AllCompleteCountdown_timer_a1',
                    Mn = 'AllCompleteCountdown_timerDecoration_3a',
                    Ln = 'AllCompleteCountdown_timerDecoration__left_68',
                    Hn = 'AllCompleteCountdown_timerCountdown_72',
                    Un = (0, V.Pi)(() => {
                        const e = at().model,
                            t = io(),
                            u = t.previousTabIndex,
                            n = t.isExiting,
                            a = e.root.get().countDown,
                            r = Te(u);
                        if (void 0 === r) throw new Error('Can not show content for undefined content resource name.');
                        const o = R.strings.quests.$dyn(r).$dyn('countDown'),
                            i = ze(n, 50, { delay: n ? 300 : 200 }),
                            l = qe(n, -50),
                            c = qe(n, 50);
                        return i(
                            (e, t) =>
                                !t &&
                                s().createElement(
                                    Q.animated.div,
                                    { style: e, className: Pn },
                                    s().createElement('div', { className: In }, o.$dyn('title')),
                                    s().createElement(
                                        'div',
                                        { className: On },
                                        l(
                                            (e, t) =>
                                                !t &&
                                                s().createElement(
                                                    Q.animated.div,
                                                    { style: e },
                                                    s().createElement('div', { className: f()(Mn, Ln) }),
                                                ),
                                        ),
                                        s().createElement(et.Z, { startValue: a, className: Hn }),
                                        c(
                                            (e, t) =>
                                                !t &&
                                                s().createElement(
                                                    Q.animated.div,
                                                    { style: e },
                                                    s().createElement('div', { className: Mn }),
                                                ),
                                        ),
                                    ),
                                    s().createElement('div', { className: kn }, o.$dyn('remainingText')),
                                ),
                        );
                    }),
                    Wn = {
                        bonusCard: 'DailyQuests_bonusCard_eb',
                        bonusCard__winback: 'DailyQuests_bonusCard__winback_1c',
                    };
                var $n = u(800);
                const Gn = 'BattleCondition_base_96',
                    zn = 'BattleCondition_text_64',
                    qn = 'BattleCondition_base__prem_1a',
                    Vn = 'BattleCondition_progressInfo_8a',
                    Qn = 'BattleCondition_progressBar_2b',
                    jn = (0, V.Pi)(({ quest: e, className: t, isPremium: u }) => {
                        const n = Ne(e.bonusCondition, e.postBattleCondition);
                        return n
                            ? s().createElement(
                                  'div',
                                  { className: f()(Gn, u && qn, t) },
                                  s().createElement(En.L, {
                                      conditions: n,
                                      inlineOperator: !0,
                                      columns: !0,
                                      size: $n.$.BIG,
                                      missionId: e.id,
                                      swapProgress: !0,
                                      reverse: !0,
                                      classNames: { text: zn, progressInfo: Vn, progressBar: Qn },
                                  }),
                              )
                            : null;
                    }),
                    Yn = {
                        base: 'Card_base_0c',
                        base__done: 'Card_base__done_63',
                        base__notAvailable: 'Card_base__notAvailable_de',
                        base__prem: 'Card_base__prem_ce',
                        borderTop: 'Card_borderTop_a2',
                        borderAnimationWrapper: 'Card_borderAnimationWrapper_f3',
                        borderAnimation: 'Card_borderAnimation_36',
                        'border-anim': 'Card_border-anim_26',
                        completedAnimationBg: 'Card_completedAnimationBg_76',
                        'bg-blink': 'Card_bg-blink_c4',
                        cardIcon: 'Card_cardIcon_4d',
                        condition: 'Card_condition_70',
                        rewardsWrapper: 'Card_rewardsWrapper_d9',
                        premiumLock: 'Card_premiumLock_e7',
                        rerollButton: 'Card_rerollButton_09',
                        statusIcon: 'Card_statusIcon_b3',
                        statusIcon__animated: 'Card_statusIcon__animated_ed',
                        'completed-icon': 'Card_completed-icon_13',
                        arrow: 'Card_arrow_18',
                        arrow__done: 'Card_arrow__done_04',
                    },
                    Xn = 'RerollButton_base_96',
                    Zn = 'RerollButton_base__disabled_00',
                    Kn = 'RerollButton_text_20',
                    Jn = 'RerollButton_icons_6b',
                    ea = 'RerollButton_icon_3d',
                    ta = 'RerollButton_iconHover_a2',
                    ua = 'RerollButton_iconDisabled_ac',
                    na = (0, V.Pi)(({ questId: e, className: t }) => {
                        const u = at(),
                            n = u.model,
                            a = u.controls,
                            r = io().isExiting,
                            o = !1 === n.computes.rerollInCooldown();
                        return s().createElement(
                            gt,
                            {
                                ignoreMouseClick: !0,
                                contentId: R.views.lobby.missions.RerollTooltipWithCountdown('resId'),
                                isEnabled: !r && !o,
                            },
                            s().createElement(
                                'div',
                                {
                                    className: f()(Xn, t, !o && Zn),
                                    onClick: o ? () => a.reroll(e) : void 0,
                                    onMouseEnter: o ? () => st(R.sounds.highlight()) : void 0,
                                },
                                o &&
                                    s().createElement(
                                        'div',
                                        { className: Kn },
                                        R.strings.quests.dailyQuests.body.reroll(),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Jn },
                                    o
                                        ? s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement('div', { className: ea }),
                                              s().createElement('div', { className: ta }),
                                          )
                                        : s().createElement('div', { className: ua }),
                                ),
                            ),
                        );
                    }),
                    aa = (e, t) => (e === Ee.Active && t ? 'prem' : e),
                    ra = R.strings.quests.premiumQuests.tooltips.locked,
                    sa = ({
                        quest: e,
                        isRerolling: t,
                        isRerollEnabled: u,
                        isVisited: n,
                        isPremium: a,
                        className: r,
                        index: o,
                    }) => {
                        const i = S().mediaSize,
                            l = io().isExiting,
                            c = !a && u && e.status === Ee.Active,
                            d = l || t;
                        return ze(d, 20, {
                            enter: { config: { duration: 300, easing: $e.easeOutCirc } },
                            delay: d ? (t ? 1e3 : 100 * o) : t ? 0 : 400 + 100 * o,
                        })(
                            (t, u) =>
                                !u &&
                                s().createElement(
                                    Q.animated.div,
                                    { style: t, className: f()(Yn.base, r, Yn[`base__${aa(e.status, a)}`]) },
                                    s().createElement('div', { className: Yn.borderTop }),
                                    e.status === Ee.Done &&
                                        !n &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: Yn.borderAnimationWrapper },
                                                s().createElement('div', { className: Yn.borderAnimation }),
                                            ),
                                            s().createElement('div', { className: f()(Yn.completedAnimationBg) }),
                                        ),
                                    s().createElement('div', { className: Yn.cardIcon, style: Re(i, e.icon, a) }),
                                    s().createElement(jn, { className: Yn.condition, quest: e, isPremium: a }),
                                    s().createElement(
                                        'div',
                                        { className: Yn.rewardsWrapper },
                                        s().createElement(mn, { size: e.rewardSize, data: e.bonuses }),
                                    ),
                                    a &&
                                        e.status === Ee.Locked &&
                                        s().createElement(
                                            Dt,
                                            {
                                                ignoreMouseClick: !0,
                                                isEnabled: !l,
                                                body: ra.body(),
                                                header: ra.header(),
                                            },
                                            s().createElement('div', { className: Yn.premiumLock }),
                                        ),
                                    c && s().createElement(na, { className: Yn.rerollButton, questId: e.id }),
                                    e.status === Ee.Done &&
                                        s().createElement('div', {
                                            className: f()(Yn.statusIcon, !n && Yn.statusIcon__animated),
                                        }),
                                    a &&
                                        2 !== o &&
                                        s().createElement('div', {
                                            className: f()(Yn.arrow, Yn[`arrow__${e.status}`]),
                                        }),
                                ),
                        );
                    },
                    oa = 'Cards_base_6c',
                    ia = 'Cards_card_9f',
                    la = { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                    ca = (0, V.Pi)(({ isOutAnimation: e, delayOut: t }) => {
                        const u = S().mediaSize,
                            n = at().model,
                            a = io().previousTabIndex,
                            o = n.computes.getQuests(a, u),
                            i = (0, r.useState)(o),
                            l = i[0],
                            c = i[1],
                            d = (0, r.useState)([]),
                            m = d[0],
                            E = d[1];
                        (0, r.useEffect)(() => {
                            const e =
                                ((t = o),
                                Be(
                                    l,
                                    (e, u) => {
                                        const n = t[u];
                                        return (
                                            void 0 !== n &&
                                            (e.id !== n.id || (e.status === Ee.Done && n.status !== Ee.Done))
                                        );
                                    },
                                    (e) => e.id,
                                ));
                            var t;
                            if (e.length > 0)
                                return (
                                    st(R.sounds.dq_screen_quest_reroll()),
                                    E(e),
                                    (0, Vu.F)(() => {
                                        c(o), E([]);
                                    }, 1500)
                                );
                            c(o);
                        }, [l, o]);
                        const _ = (0, Q.useSpring)(() => la),
                            g = _[0],
                            A = _[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e)
                                    return (0, Vu.F)(() => {
                                        A.start({
                                            opacity: 0,
                                            transform: 'translateY(20rem)',
                                            pointerEvents: 'none',
                                            config: { duration: 300, easing: $e.easeInCirc },
                                        });
                                    }, t);
                                A.start(Object.assign({}, la, { config: { duration: 200, easing: $e.easeOutCirc } }));
                            }, [A, e, t]),
                            s().createElement(
                                Q.animated.div,
                                { style: g, className: oa },
                                l.map((e, t) => {
                                    var u;
                                    return s().createElement(sa, {
                                        key: e.id,
                                        className: ia,
                                        isPremium: a === ye.PremiumQuests,
                                        index: t,
                                        quest: e,
                                        isRerolling: m.includes(e.id),
                                        isRerollEnabled: n.daily.get().rerollEnabled,
                                        isVisited: null == (u = n.computes.isCardVisited(a, t)) || u,
                                    });
                                }),
                            )
                        );
                    }),
                    da = 'AnimatedFlag_base_77',
                    ma = s().memo(({ baseQuestsCompleted: e }) => {
                        const t = S().mediaSize >= b.Medium,
                            u = (0, Q.useSpring)({
                                x: e ? 1 : 0,
                                transform: e
                                    ? `translateY(${t ? '-450rem' : '-240rem'}) scale(1.3, 1.3)`
                                    : `translateY(0rem) scale(${t ? '0.8, 0.8' : '0.6, 0.6'})`,
                                config: { duration: 1e3, easing: $e.easeOutCubic },
                                delay: 2e3,
                            }),
                            n = u.x,
                            a = u.transform;
                        return s().createElement(Q.animated.div, {
                            style: { opacity: n.to({ range: [0, 0.4, 0.7, 1], output: [0, 0, 0.8, 0] }), transform: a },
                            className: da,
                        });
                    }),
                    Ea = 'LockedBonusQuest_base_43',
                    _a = 'LockedBonusQuest_flag_a1',
                    ga = 'LockedBonusQuest_bonusMissionDescription_d0',
                    Aa = 'LockedBonusQuest_lockIcon_e6',
                    pa = 'LockedBonusQuest_text_ba',
                    Fa = 'LockedBonusQuest_styleLine_e4',
                    Da = 'LockedBonusQuest_styleLine__left_68',
                    Ca = 'LockedBonusQuest_styleLine__right_d5',
                    Ba = R.strings.quests.dailyQuests,
                    fa = s().memo(({ baseQuestsCompleted: e }) => {
                        const t = io().isExiting,
                            u = ze(t, 20, { delay: t ? 0 : 150 }),
                            n = (0, Q.useSpring)({
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                cancel: !e,
                                reset: !e,
                                config: { duration: 300, easing: $e.easeInCirc },
                                delay: 1700,
                            });
                        return s().createElement(
                            Q.animated.div,
                            { style: n },
                            u(
                                (e, t) =>
                                    !t &&
                                    s().createElement(
                                        Q.animated.div,
                                        { style: e, className: Ea },
                                        s().createElement('div', { className: _a }),
                                        s().createElement(
                                            Dt,
                                            {
                                                ignoreMouseClick: !0,
                                                isEnabled: !t,
                                                header: Ba.bonus.tooltipTitle(),
                                                body: Ba.bonus.tooltipDescription(),
                                            },
                                            s().createElement(
                                                'div',
                                                { className: ga },
                                                s().createElement('div', { className: Aa }),
                                                s().createElement(
                                                    'div',
                                                    { className: pa },
                                                    Ba.bonusQuest.bonusMissionTitle(),
                                                ),
                                            ),
                                        ),
                                        s().createElement('div', { className: f()(Fa, Da) }),
                                        s().createElement('div', { className: f()(Fa, Ca) }),
                                    ),
                            ),
                        );
                    }),
                    ha = 'MainContent_base_3b',
                    va = 'MainContent_lockedBonusQuest_b8',
                    ba = 'MainContent_animatedFlag_f2',
                    wa = 'MainContent_rerollTimer_2f',
                    ya = 'RerollTimer_base_40',
                    Sa = 'RerollTimer_icon_f8',
                    Ta = 'RerollTimer_countDown_e3',
                    Ra = (0, V.Pi)(({ baseQuestsCompleted: e, className: t }) => {
                        const u = at().model,
                            n = io().isExiting,
                            a = u.computes.rerollInCooldown(),
                            r = u.computes.formattedTimer();
                        return Ge(!e && !n && a)(
                            (e, u) =>
                                u &&
                                s().createElement(
                                    gt,
                                    {
                                        ignoreMouseClick: !0,
                                        isEnabled: !n && a,
                                        contentId: R.views.lobby.missions.RerollTooltip('resId'),
                                    },
                                    s().createElement(
                                        Q.animated.div,
                                        { style: e, className: f()(ya, t) },
                                        s().createElement('div', { className: Sa }),
                                        s().createElement('div', { className: Ta }, r),
                                    ),
                                ),
                        );
                    }),
                    xa = (0, V.Pi)(({ baseQuestsCompleted: e }) =>
                        s().createElement(
                            'div',
                            { className: ha },
                            s().createElement(Ra, { baseQuestsCompleted: e, className: wa }),
                            s().createElement(ca, { isOutAnimation: e, delayOut: 1500 }),
                            s().createElement(
                                'div',
                                { className: va },
                                s().createElement(
                                    'div',
                                    { className: ba },
                                    s().createElement(ma, { baseQuestsCompleted: e }),
                                ),
                                s().createElement(fa, { baseQuestsCompleted: e }),
                            ),
                        ),
                    ),
                    Na = (0, V.Pi)(() => {
                        var e, t;
                        const u = at().model,
                            n = io().isExiting,
                            a = u.root.get().dailyType,
                            o = u.daily.get().bonusMissionVisited,
                            i = u.computes.getDailyQuestsCompletedVisited(),
                            l = u.dailyQuests.get(),
                            c = Pe(l),
                            d = null != (e = (0, qu.D9)(c)) ? e : c,
                            m = 4 === c,
                            E = 3 === c,
                            _ = Ie(i) >= 3,
                            g = (0, r.useState)(!1),
                            A = g[0],
                            p = g[1],
                            F = (0, r.useState)(!!(c >= 3 && i[3]) && o),
                            D = F[0],
                            C = F[1],
                            B = (0, r.useState)(m && null != (t = u.computes.isCardVisited(ye.DailyQuests, 3)) && t),
                            h = B[0],
                            v = B[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (E && l.length > 3) {
                                    if ((p(!0), !o)) {
                                        const e = (0, Vu.F)(() => st(R.sounds.dq_screen_bonus_quest_unlock()), 1600),
                                            t = (0, Vu.F)(() => C(!0), 3e3);
                                        return () => {
                                            e(), t();
                                        };
                                    }
                                    C(!0);
                                }
                            }, [o, E, l.length]),
                            (0, r.useEffect)(() => {
                                void 0 !== d &&
                                    d >= 3 &&
                                    c < 3 &&
                                    (st(R.sounds.dq_screen_switch()), p(!1), C(!1), v(!1));
                            }, [c, d]),
                            (0, r.useEffect)(() => {
                                if (m && !i[3].value)
                                    return (
                                        st(R.sounds.dq_screen_bonus_quest_complete()),
                                        (0, Vu.F)(() => {
                                            v(!0);
                                        }, 2600)
                                    );
                            }, [m, i]),
                            (0, r.useEffect)(() => {
                                n || m || (_ && !(c > d)) || st(R.sounds.dq_screen_quest_complete());
                            }, [n, m, _, c, d]),
                            h
                                ? s().createElement(Un, null)
                                : D && l.length > 3
                                  ? s().createElement(
                                        'div',
                                        { className: f()(Wn.bonusCard, Wn[`bonusCard__${a}`]) },
                                        s().createElement(Nn, { bonusQuestCompleted: m, isFirstAppearing: !o }),
                                    )
                                  : s().createElement(
                                        'div',
                                        { className: f()(Qu.questsContainer, Qu[`questsContainer__${a}`]) },
                                        s().createElement(xa, { baseQuestsCompleted: A }),
                                    )
                        );
                    }),
                    Pa = {
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
                        base__large: 'CButton_base__large_5c',
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let Ia, ka;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ia || (Ia = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(ka || (ka = {}));
                const Oa = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: a,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: _,
                    onClick: g,
                }) => {
                    const A = (0, r.useRef)(null),
                        p = (0, r.useState)(u),
                        F = p[0],
                        D = p[1],
                        C = (0, r.useState)(!1),
                        B = C[0],
                        h = C[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                F && null !== A.current && !A.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, r.useEffect)(() => {
                            D(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: f()(
                                    Pa.base,
                                    Pa[`base__${n}`],
                                    a && Pa.base__disabled,
                                    t && Pa[`base__${t}`],
                                    F && Pa.base__focus,
                                    B && Pa.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== i && st(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    a || (E && E(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== l && st(l),
                                        m && m(e),
                                        u && (a || (A.current && (A.current.focus(), D(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (_ && _(e), h(!1));
                                },
                                onClick: function (e) {
                                    a || (g && g(e));
                                },
                            },
                            n !== Ia.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Pa.back }),
                                    s().createElement('span', { className: Pa.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: f()(Pa.state, Pa.state__default) },
                                s().createElement('span', { className: Pa.stateDisabled }),
                                s().createElement('span', { className: Pa.stateHighlightHover }),
                                s().createElement('span', { className: Pa.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Pa.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Oa.defaultProps = { type: Ia.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ma = Oa,
                    La = 'NotPremiumAccount_base_a5',
                    Ha = 'NotPremiumAccount_image_16',
                    Ua = 'NotPremiumAccount_title_97',
                    Wa = 'NotPremiumAccount_text_f5',
                    $a = 'NotPremiumAccount_button_3f',
                    Ga = R.strings.quests.premiumQuests.notPremiumAccount,
                    za = (0, V.Pi)(({ isPremiumChanging: e }) => {
                        const t = at().controls,
                            u = io().isExiting;
                        return ze(u || e, 20, {
                            delay: 100,
                            enter: { config: { duration: 300, easing: $e.easeOutCirc } },
                        })(
                            (e, u) =>
                                !u &&
                                s().createElement(
                                    Q.animated.div,
                                    { style: e, className: La },
                                    s().createElement('div', { className: Ha }),
                                    s().createElement(pu, { text: Ga.title(), classMix: Ua }),
                                    s().createElement(pu, { text: Ga.paragraph(), classMix: Wa }),
                                    s().createElement(
                                        Ma,
                                        { type: Ia.main, size: ka.medium, mixClass: $a, onClick: t.buyPremiumBtnClick },
                                        Ga.button(),
                                    ),
                                ),
                        );
                    }),
                    qa = (0, V.Pi)(() => {
                        const e = at().model,
                            t = e.root.get().dailyType,
                            u = e.premium.get().isPremiumAccount,
                            n = e.computes.getPremiumQuestsCompletedVisited(),
                            a = e.premiumQuests.get(),
                            o = Pe(a),
                            i = (0, qu.D9)(o),
                            l = 3 === o,
                            c = Ie(n),
                            d = e.computes.isCardVisited(ye.PremiumQuests, 2),
                            m = void 0 !== d && !d,
                            E = (0, r.useState)(l && !m),
                            _ = E[0],
                            g = E[1];
                        (0, r.useEffect)(() => {
                            if (l && m)
                                return (
                                    st(R.sounds.dq_screen_premium_missions_all_complete()),
                                    (0, Vu.F)(() => {
                                        g(!0);
                                    }, 3500)
                                );
                        }, [l, m]),
                            (0, r.useEffect)(() => {
                                3 === i && o < 3 && (st(R.sounds.dq_screen_switch()), g(!1));
                            }, [i, o]),
                            (0, r.useEffect)(() => {
                                const e = o - c;
                                e > 0 && e < 3 && st(R.sounds.dq_screen_premium_missions_complete());
                            }, [o, c]);
                        const A = (0, qu.tp)(u, 500),
                            p = A !== u;
                        return A
                            ? _
                                ? s().createElement(Un, null)
                                : s().createElement(
                                      'div',
                                      { className: f()(Qu.questsContainer, Qu[`questsContainer__${t}`]) },
                                      s().createElement(ca, { isOutAnimation: l || p, delayOut: p ? 0 : 2400 }),
                                  )
                            : s().createElement(za, { isPremiumChanging: p });
                    });
                var Va = u(1975);
                const Qa = 'Progress_base_ff',
                    ja = 'Progress_infoContainer_26',
                    Ya = 'Progress_missionsCompleted_a3',
                    Xa = 'Progress_title_63',
                    Za = 'Progress_description_4a',
                    Ka = 'Progress_current_dd',
                    Ja = 'Progress_separator_4d',
                    er = 'Progress_checkIcon_15',
                    tr = 'Progress_rewardsWrapper_24',
                    ur = 'Progress_progressWrapper_6d',
                    nr = 'Progress_footerSeparator_a4',
                    ar = 'Progress_disabled_a2',
                    rr = 'Progress_alertIcon_9d',
                    sr = 'Progress_alertText_ae',
                    or = Object.assign({}, Va.uu, {
                        delta: { delay: 100, duration: 2e3 },
                        line: { delay: 100, duration: 2e3 },
                    }),
                    ir = R.strings.quests.dailyQuests.footer,
                    lr = (0, V.Pi)(() => {
                        const e = at().model,
                            t = S().mediaSize,
                            u = e.epicQuest.get(),
                            n = u.id,
                            a = u.earned,
                            o = u.total,
                            i = u.isEnabled,
                            l = u.current,
                            c = e.epicQuestBonuses.get(),
                            d = t >= b.Large ? X.Big : X.Small;
                        (0, r.useEffect)(() => {
                            a > 0 && i && st(R.sounds.dq_screen_progress_bar());
                        }, [a, i]);
                        const m = (0, Q.useSpring)({
                            from: { opacity: 0, transform: 'translateY(20rem)' },
                            to: { opacity: 1, transform: 'translateY(0rem)' },
                            config: { duration: 600, easing: $e.easeOutQuint },
                        });
                        return s().createElement(
                            Q.animated.div,
                            { style: m, className: Qa },
                            s().createElement('div', { className: nr }),
                            i
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: ja },
                                          s().createElement(
                                              'div',
                                              { className: Ya },
                                              s().createElement(
                                                  'div',
                                                  { className: Xa },
                                                  ir.title(),
                                                  s().createElement('div', { className: Ka }, l),
                                                  s().createElement('div', { className: Ja }, '/'),
                                                  o,
                                                  s().createElement('div', { className: er }),
                                              ),
                                              s().createElement('div', { className: Za }, ir.paragraph()),
                                          ),
                                          s().createElement(mn, {
                                              data: xe(c, n, d),
                                              size: t >= b.Large ? X.Big : X.Small,
                                              classMix: tr,
                                          }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: ur },
                                          s().createElement(Va.ko, {
                                              animationSettings: or,
                                              value: l,
                                              deltaFrom: l - a,
                                              maxValue: o,
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: ar },
                                      s().createElement('div', { className: rr }),
                                      s().createElement(
                                          'div',
                                          { className: sr },
                                          R.strings.menu.browser.dataUnavailable.description(),
                                      ),
                                  ),
                        );
                    });
                let cr;
                !(function (e) {
                    (e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers');
                })(cr || (cr = {}));
                const dr = {
                        getter: ((e) => (t) => (t ? t.split('.').reduce((e, t) => e[t], e) : e))({
                            countCompleted: 1,
                            previousCompletedQuests: 1,
                            totalQuests: 45,
                            quests: [
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 6,
                                            nation: 'france',
                                            vehicleType: 'heavyTank',
                                            userName: 'ARL 44',
                                            vehicleName: 'F06_ARL_44',
                                            isElite: !1,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleForGift',
                                            index: 0,
                                        },
                                        {
                                            label: 'Слотов в Ангаре',
                                            tooltipContentId: '',
                                            tooltipId: '1',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 1,
                                        },
                                    ],
                                    questNumber: 3,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 7,
                                            nation: 'france',
                                            vehicleType: 'heavyTank',
                                            userName: 'AMX M4 45',
                                            vehicleName: 'F07_AMX_M4_1945',
                                            isElite: !1,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleDiscount',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 6,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 8,
                                            nation: 'france',
                                            vehicleType: 'heavyTank',
                                            userName: 'AMX 65 t',
                                            vehicleName: 'F81_Char_de_65t',
                                            isElite: !1,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleDiscount',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 9,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 9,
                                            nation: 'france',
                                            vehicleType: 'heavyTank',
                                            userName: 'AMX M4 51',
                                            vehicleName: 'F83_AMX_M4_Mle1949_Bis',
                                            isElite: !1,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleDiscount',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 12,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 10,
                                            nation: 'france',
                                            vehicleType: 'heavyTank',
                                            userName: 'AMX M4 54',
                                            vehicleName: 'F82_AMX_M4_Mle1949_Ter',
                                            isElite: !1,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleDiscount',
                                            index: 0,
                                        },
                                        {
                                            rentDuration: 7,
                                            rentType: 'time',
                                            vehicleLvl: 8,
                                            nation: 'usa',
                                            vehicleType: 'heavyTank',
                                            userName: 'M-IV-Y',
                                            vehicleName: 'A141_M_IV_Y',
                                            isElite: !0,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '1',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleForRent',
                                            index: 1,
                                        },
                                        {
                                            label: 'Слотов в Ангаре',
                                            tooltipContentId: '',
                                            tooltipId: '2',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 2,
                                        },
                                    ],
                                    questNumber: 15,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 6,
                                            nation: 'usa',
                                            vehicleType: 'heavyTank',
                                            userName: 'Pawlack Tank',
                                            vehicleName: 'A142_Pawlack_Tank',
                                            isElite: !1,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleForGift',
                                            index: 0,
                                        },
                                        {
                                            label: 'Слотов в Ангаре',
                                            tooltipContentId: '',
                                            tooltipId: '1',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 1,
                                        },
                                    ],
                                    questNumber: 18,
                                },
                                {
                                    rewards: [
                                        {
                                            type: 'BlueprintVehicleFragmentCongrats',
                                            icon: 'vehicle',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '4',
                                            name: 'blueprints',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 21,
                                },
                                {
                                    rewards: [
                                        {
                                            type: 'BlueprintVehicleFragmentCongrats',
                                            icon: 'vehicle',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '4',
                                            name: 'blueprints',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 24,
                                },
                                {
                                    rewards: [
                                        {
                                            type: 'BlueprintVehicleFragmentCongrats',
                                            icon: 'vehicle',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '3',
                                            name: 'blueprints',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 27,
                                },
                                {
                                    rewards: [
                                        {
                                            rentDuration: 7,
                                            rentType: 'time',
                                            vehicleLvl: 8,
                                            nation: 'italy',
                                            vehicleType: 'AT-SPG',
                                            userName: 'Vipera',
                                            vehicleName: 'It30_CC_mod_64_Prem',
                                            isElite: !0,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'vehicleForRent',
                                            index: 0,
                                        },
                                        {
                                            type: 'BlueprintVehicleFragmentCongrats',
                                            icon: 'vehicle',
                                            label: '',
                                            tooltipContentId: '',
                                            tooltipId: '1',
                                            isCompensation: !1,
                                            value: '4',
                                            name: 'blueprints',
                                            index: 1,
                                        },
                                        {
                                            label: 'Слотов в Ангаре',
                                            tooltipContentId: '',
                                            tooltipId: '2',
                                            isCompensation: !1,
                                            value: '1',
                                            name: 'slots',
                                            index: 2,
                                        },
                                    ],
                                    questNumber: 30,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 6,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '410',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'selectableVehicleForGift',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 33,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 7,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '410',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'selectableVehicleDiscount',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 36,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 8,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '410',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'selectableVehicleDiscount',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 39,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 9,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '410',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'selectableVehicleDiscount',
                                            index: 0,
                                        },
                                    ],
                                    questNumber: 42,
                                },
                                {
                                    rewards: [
                                        {
                                            vehicleLvl: 10,
                                            overlayType: '',
                                            item: '',
                                            label: '',
                                            tooltipContentId: '410',
                                            tooltipId: '0',
                                            isCompensation: !1,
                                            value: '',
                                            name: 'selectableVehicleDiscount',
                                            index: 0,
                                        },
                                        {
                                            label: 'Боны',
                                            tooltipContentId: '',
                                            tooltipId: '1',
                                            isCompensation: !1,
                                            value: '100',
                                            name: 'crystal',
                                            index: 1,
                                        },
                                        {
                                            icon: 'booster_xp',
                                            label: 'Дополнительный опыт за бой',
                                            tooltipContentId: '',
                                            tooltipId: '2',
                                            isCompensation: !1,
                                            value: '3',
                                            name: 'goodies',
                                            index: 2,
                                        },
                                        {
                                            icon: 'common',
                                            label: 'Демонтажный набор',
                                            tooltipContentId: '',
                                            tooltipId: '3',
                                            isCompensation: !1,
                                            value: '3',
                                            name: 'goodies',
                                            index: 3,
                                        },
                                    ],
                                    questNumber: 45,
                                },
                            ],
                            isBattlePassActive: !0,
                            onTakeReward: Ve,
                            offersState: cr.AVAILABLE,
                        }),
                        controls: ({ cleanup: e, model: t }) => {
                            const u = (0, je.aD)((e) => {
                                    t.prevCompleted.set(t.completed.get()), t.completed.set(e);
                                }),
                                n = (e) => {
                                    e.keyCode === $.n.ARROW_DOWN && u(t.completed.get() - 1),
                                        e.keyCode === $.n.ARROW_UP && u(t.completed.get() + 1);
                                };
                            return (
                                window.addEventListener('keydown', n),
                                e(() => window.removeEventListener('keydown', n)),
                                { takeReward: Ve }
                            );
                        },
                    },
                    mr = { equals: Qe },
                    Er = Ke()(
                        ({ observableModel: e, externalModel: t }) => {
                            const u = e.object(),
                                n = je.LO.box([]),
                                a = Object.assign(
                                    {},
                                    e.primitives({
                                        countCompleted: 'completed',
                                        previousCompletedQuests: 'prevCompleted',
                                        totalQuests: 'total',
                                        isBattlePassActive: 'hasBattlePass',
                                    }),
                                ),
                                r = (0, je.aD)((e) => {
                                    n.set(e);
                                });
                            t.subscribe((e) => {
                                r(
                                    Ce(e, (e) =>
                                        Object.assign({}, e, { rewards: Ce(e.rewards, (e) => Object.assign({}, e)) }),
                                    ),
                                );
                            }, 'quests');
                            const s = (0, Je.Om)(() => n.get().length),
                                o = (0, Je.Om)((e) => {
                                    const t = Fe(n.get(), e);
                                    if (t) return { number: t.questNumber, rewards: t.rewards };
                                }, mr),
                                i = (0, Je.Om)(() => u.get().offersState === cr.AVAILABLE);
                            return Object.assign({}, a, {
                                computes: { questsLength: s, questByIndex: o, takeRewardAvailable: i },
                            });
                        },
                        ({ externalModel: e }) => ({
                            takeReward: e.createCallback((e) => ({ questNumber: e }), 'onTakeReward'),
                        }),
                    ),
                    _r = Er[0],
                    gr = Er[1];
                function Ar() {
                    const e = (0, r.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, r.useEffect)(() => t, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const pr = { type: 'idle' };
                function Fr(e, t) {
                    const u = e.contentRef,
                        n = e.wrapperRef,
                        a = e.scrollPosition,
                        s = e.clampPosition,
                        o = e.animationScroll,
                        l = e.events,
                        c = (0, r.useState)(pr),
                        d = c[0],
                        m = c[1],
                        E = Ar(),
                        _ = bt(() => {
                            E.run(() => {
                                const t = e.contentRef.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                t &&
                                    u &&
                                    n &&
                                    (t.style.cursor =
                                        n <= u
                                            ? 'auto'
                                            : 'dragging' === d.type || 'moseDown' === d.type
                                              ? 'move'
                                              : 'grab');
                            });
                        });
                    var g, A;
                    return (
                        (0, r.useEffect)(() => {
                            _();
                        }, [d.type, _]),
                        (g = () => {
                            _();
                        }),
                        (A = []),
                        (0, r.useEffect)(
                            () => (window.addEventListener('resize', g), () => window.removeEventListener('resize', g)),
                            A,
                        ),
                        (0, r.useEffect)(() => {
                            if ('dragging' !== d.type && 'moseDown' !== d.type) return;
                            const e = i.O.client.events.mouse.move(([e, r]) => {
                                const i = u.current,
                                    l = n.current;
                                if (!i || !l) return;
                                if ('inside' === r && e.clientX < 0) return;
                                if (e.clientX === d.positionFrom) return;
                                const c = 'inside' === r ? e.clientX : e.clientX - l.offsetLeft,
                                    E = d.positionFrom - c,
                                    _ = d.previousScrollPosition + E;
                                a.start(
                                    Object.assign(
                                        { scrollPosition: s(i, _), from: { scrollPosition: o.scrollPosition.get() } },
                                        t && { config: t },
                                    ),
                                ),
                                    'moseDown' === d.type &&
                                        m({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: o.scrollPosition.get(),
                                        });
                            });
                            const r = i.O.client.events.mouse.up(function () {
                                m({ type: 'dragging' === d.type ? 'scrollingToEnd' : 'idle' });
                            });
                            return () => {
                                e(), r();
                            };
                        }, [o.scrollPosition, s, u, d, a, n, t]),
                        (0, r.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                m(pr);
                            };
                            return o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                        }, [o.scrollPosition, d.type, l]),
                        (0, r.useEffect)(() => {
                            const e = u.current;
                            if (!e) return;
                            const t = (e) => {
                                o.scrollPosition.isAnimating && o.scrollPosition.stop(),
                                    m({
                                        type: 'moseDown',
                                        positionFrom: e.screenX,
                                        previousScrollPosition: o.scrollPosition.get(),
                                    });
                            };
                            return e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t);
                        }, [o.scrollPosition, u]),
                        d
                    );
                }
                const Dr = 'CompletedIcon_base_ae',
                    Cr = ({ className: e, width: t = i.O.view.remToPx(20), height: u = i.O.view.remToPx(20) }) =>
                        s().createElement(
                            'svg',
                            {
                                width: t,
                                height: u,
                                className: e,
                                viewBox: '0 0 20 20',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                            },
                            s().createElement(
                                'g',
                                { filter: 'url(#filter0_di_11469_17044)' },
                                s().createElement('path', {
                                    d: 'M3 9.83333L8.31109 14.9375L16.4896 4',
                                    stroke: '#E9E2BF',
                                    strokeWidth: '2.5',
                                }),
                            ),
                            s().createElement(
                                'defs',
                                null,
                                s().createElement(
                                    'filter',
                                    {
                                        id: 'filter0_di_11469_17044',
                                        x: '0.133789',
                                        y: '2.25',
                                        width: '19.3569',
                                        height: '17.5703',
                                        filterUnits: 'userSpaceOnUse',
                                        colorInterpolationFilters: 'sRGB',
                                    },
                                    s().createElement('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
                                    s().createElement('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha',
                                    }),
                                    s().createElement('feOffset', { dy: '1' }),
                                    s().createElement('feGaussianBlur', { stdDeviation: '1' }),
                                    s().createElement('feColorMatrix', {
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0',
                                    }),
                                    s().createElement('feBlend', {
                                        mode: 'normal',
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_11469_17044',
                                    }),
                                    s().createElement('feBlend', {
                                        mode: 'normal',
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_11469_17044',
                                        result: 'shape',
                                    }),
                                    s().createElement('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha',
                                    }),
                                    s().createElement('feOffset', null),
                                    s().createElement('feGaussianBlur', { stdDeviation: '0.5' }),
                                    s().createElement('feComposite', {
                                        in2: 'hardAlpha',
                                        operator: 'arithmetic',
                                        k2: '-1',
                                        k3: '1',
                                    }),
                                    s().createElement('feColorMatrix', {
                                        type: 'matrix',
                                        values: '0 0 0 0 1 0 0 0 0 0.866667 0 0 0 0 0.6 0 0 0 1 0',
                                    }),
                                    s().createElement('feBlend', {
                                        mode: 'normal',
                                        in2: 'shape',
                                        result: 'effect2_innerShadow_11469_17044',
                                    }),
                                ),
                            ),
                        ),
                    Br = (e) => s().createElement('div', { className: f()(Dr, e.className) }),
                    fr = 'Counter_counter_58',
                    hr = 'Counter_currentAmount_58',
                    vr = 'Counter_icon_e2',
                    br = (0, V.Pi)((e) => {
                        const t = gr().model,
                            u = S(),
                            n = i.O.view.remToPx(u.mediaSize < b.Medium ? 16 : 20);
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(pu, {
                                text: e.text,
                                classMix: fr,
                                binding: {
                                    completed: s().createElement('div', { className: hr }, t.completed.get()),
                                    total: t.total.get(),
                                },
                            }),
                            ' ',
                            s().createElement(Cr, { className: vr, width: n, height: n }),
                        );
                    }),
                    wr = 'Header_base_9a',
                    yr = 'Header_title_ca',
                    Sr = 'Header_description_2a',
                    Tr = {
                        title: R.strings.winback.progression.title(),
                        counter: R.strings.winback.progression.counter(),
                        description: R.strings.winback.progression.description(),
                    },
                    Rr = s().memo(function (e) {
                        return s().createElement(
                            'div',
                            { className: f()(wr, e.className) },
                            s().createElement(
                                'div',
                                { className: yr },
                                s().createElement(pu, {
                                    text: Tr.title,
                                    binding: { counter: s().createElement(br, { text: Tr.counter }) },
                                }),
                            ),
                            s().createElement(pu, { text: Tr.description, classMix: Sr }),
                        );
                    }),
                    xr = 'MainReward_base_44',
                    Nr = 'MainReward_base__withBattlePass_5f',
                    Pr = (e) => s().createElement('div', { className: f()(xr, e.hasBattlePass && Nr, e.className) });
                var Ir = u(7736);
                function kr() {
                    const e = (0, r.useRef)(!0);
                    var t;
                    return (
                        (t = () => {
                            e.current = !1;
                        }),
                        (0, r.useEffect)(t, []),
                        e.current
                    );
                }
                const Or = {
                        some: function (e, t) {
                            for (let u = 0; u < e.length; u++) {
                                if (t(De(e, u))) return !0;
                            }
                            return !1;
                        },
                    },
                    Mr = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Lr = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Hr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ur = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Wr = (0, r.memo)(({ text: e, binding: t, classMix: u }) => {
                        const n = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, r.useMemo)(() => t || {}, [t]);
                        let o = Lr.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const u = o[0],
                                r = Hr.exec(u),
                                c = Ur.exec(u),
                                d = o[1];
                            if (r && c) {
                                const e = r[0],
                                    o = e + l++ + e;
                                (i = i.replace(u, `%(${o})`)),
                                    (a[o] = Mr[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Mr[e] },
                                              s().createElement(pu, { text: d, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: n(e) },
                                              s().createElement(pu, { text: d, binding: t }),
                                          ));
                            }
                            o = Lr.exec(e);
                        }
                        return s().createElement(pu, { text: i, classMix: u, binding: a });
                    }),
                    $r = (e, t = !0) =>
                        e.days > 7 && t
                            ? (0, gu.WU)(R.strings.common.duration.days(), { days: e.days })
                            : e.days >= 1
                              ? 0 === e.hours
                                  ? (0, gu.WU)(R.strings.common.duration.days(), { days: e.days })
                                  : (0, gu.WU)(R.strings.common.duration.days(), { days: e.days + 1 })
                              : e.hours >= 1
                                ? 0 === e.minutes
                                    ? (0, gu.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                    : (0, gu.WU)(R.strings.common.duration.hours(), { hours: e.hours + 1 })
                                : (0, gu.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }),
                    Gr = {
                        base: 'TakeRewards_base_ae',
                        base__disabled: 'TakeRewards_base__disabled_d4',
                        button: 'TakeRewards_button_86',
                        base__default: 'TakeRewards_base__default_e7',
                        base__minimalistic: 'TakeRewards_base__minimalistic_87',
                        border: 'TakeRewards_border_cf',
                        glow: 'TakeRewards_glow_e3',
                        glow__top: 'TakeRewards_glow__top_ac',
                        glow__bottom: 'TakeRewards_glow__bottom_22',
                        content: 'TakeRewards_content_f0',
                        buttonIcon: 'TakeRewards_buttonIcon_be',
                        highlightWrapper: 'TakeRewards_highlightWrapper_c3',
                        highlight: 'TakeRewards_highlight_e8',
                        slide: 'TakeRewards_slide_cb',
                        countdown: 'TakeRewards_countdown_f1',
                        countdownIcon: 'TakeRewards_countdownIcon_80',
                    },
                    zr = { minimalistic: 'minimalistic', default: 'default' },
                    qr = s().memo(function (e) {
                        var t;
                        const u = null != (t = e.kind) ? t : zr.default;
                        return s().createElement(
                            'div',
                            { className: f()(Gr.base, e.className, e.disabled && Gr.base__disabled, Gr[`base__${u}`]) },
                            s().createElement('div', { className: Gr.border }),
                            s().createElement(
                                'div',
                                {
                                    className: Gr.button,
                                    onClick: e.disabled ? void 0 : e.onClick,
                                    onMouseEnter: e.disabled ? void 0 : ot.playHighlight,
                                },
                                !e.disabled &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        'minimalistic' === e.kind &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', {
                                                    className: f()(Gr.shinyBorder, Gr.shinyBorder__top),
                                                }),
                                                s().createElement('div', {
                                                    className: f()(Gr.shinyBorder, Gr.shinyBorder__bottom),
                                                }),
                                            ),
                                        s().createElement('div', { className: f()(Gr.glow, Gr.glow__top) }),
                                        s().createElement('div', { className: f()(Gr.glow, Gr.glow__bottom) }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Gr.content },
                                    s().createElement('div', { className: Gr.buttonIcon }),
                                    e.children,
                                ),
                                !e.disabled &&
                                    s().createElement(
                                        'div',
                                        { className: Gr.highlightWrapper },
                                        s().createElement('div', { className: Gr.highlight }),
                                    ),
                            ),
                            e.timer &&
                                s().createElement(
                                    'div',
                                    { className: Gr.countdown },
                                    s().createElement('div', { className: Gr.countdownIcon }),
                                    s().createElement(Wr, {
                                        text: e.timer.text,
                                        binding: { secondsLeft: $r((0, pe.f8)(e.timer.secondsLeft), !1) },
                                    }),
                                ),
                        );
                    });
                (qr.kinds = zr), (qr.useTimer = (e, t) => s().useMemo(() => ({ text: e, secondsLeft: t }), [e, t]));
                const Vr = 'Bonus_base_50',
                    Qr = 'Bonus_number_fd',
                    jr = 'Bonus_notch_36',
                    Yr = 'Bonus_bonuses_d9',
                    Xr = 'Bonus_takeRewardText_04',
                    Zr = 'Bonus_takeReward_2f',
                    Kr = 'Bonus_reward_7a',
                    Jr = 'VehicleImage_base_bc',
                    es = R.images.gui.maps.icons.vehicle.c_420x307,
                    ts = s().memo(function (e) {
                        const t = (0, gu.BN)(e.name).toLocaleLowerCase();
                        return es[t]
                            ? s().createElement('div', {
                                  className: f()(Jr, e.className),
                                  style: { backgroundImage: `url(${es[t]()})` },
                              })
                            : (console.error(`VehicleImage: image for ${e.name} not found, resource: ${t}`), null);
                    }),
                    us = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ns = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const as = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    rs = (e) =>
                        as
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = ns.length - 1; u >= 0; u--)
                                      for (; e >= ns[u]; ) (t += us[u]), (e -= ns[u]);
                                  return t;
                              })(e),
                    ss = 'VehicleLevel_base_09',
                    os = {
                        Level: (e) => s().createElement('div', { className: f()(ss, e.className) }, rs(e.level)),
                        Image: ts,
                    },
                    is = 'VehicleDecorator_base_34',
                    ls = 'VehicleDecorator_level_a3',
                    cs = 'VehicleDecorator_discount_f1',
                    ds = (e) =>
                        s().createElement(
                            'div',
                            { className: f()(is, e.className) },
                            e.children,
                            s().createElement(os.Level, { className: ls, level: e.level }),
                            e.hasDiscount && s().createElement('div', { className: cs }),
                        ),
                    ms = 'RentVehicleBonus_base_47',
                    Es = 'RentVehicleBonus_vehicle_5e',
                    _s = 'RentVehicleBonus_base__eliteRent_54',
                    gs = (e) =>
                        e.reward.isElite && e.reward.rentDuration
                            ? s().createElement(
                                  'div',
                                  { className: f()(ms, _s, e.className) },
                                  s().createElement(rn, {
                                      className: Es,
                                      image: ce(Object.assign({}, e.reward, { name: 'vehicles_rent' }), X.Small),
                                      name: e.reward.vehicleName,
                                  }),
                              )
                            : s().createElement(
                                  ds,
                                  {
                                      hasDiscount: Ue(e.reward),
                                      level: e.reward.vehicleLvl,
                                      className: f()(ms, e.className),
                                  },
                                  s().createElement(os.Image, { className: Es, name: e.reward.vehicleName }),
                              ),
                    As = 33,
                    ps = 0,
                    Fs = !0,
                    Ds = 'play';
                const Cs = [
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
                function Bs() {
                    return (
                        (Bs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Bs.apply(this, arguments)
                    );
                }
                const fs = (0, r.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            n = e.getImageSource,
                            a = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? As : i,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? ps : c,
                            m = e.lastFrameIndex,
                            E = void 0 === m ? a - 1 : m,
                            _ = e.loop,
                            g = void 0 === _ ? Fs : _,
                            A = e.state,
                            p = void 0 === A ? Ds : A,
                            F = e.onAnimationDone,
                            D = e.onAnimationComplete,
                            C = e.poster,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Cs);
                        const f = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const e = f.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (p) {
                                    case 'play':
                                        return (function () {
                                            const e = bs(d, E, n),
                                                t = hs(d, E),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == o || o(n, r),
                                                          u(r),
                                                          n === E &&
                                                              (null == D || D(),
                                                              g || (null == F || F(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && C ? { path: C, x: 0, y: 0 } : n(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => u(vs(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, d, E, g, o, D, F, C, p]),
                            s().createElement('canvas', Bs({}, B, { width: t, height: u, ref: f }))
                        );
                    }),
                    hs = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    vs = (e, t) => Object.assign({}, e, { img: t }),
                    bs = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, vs(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, vs(e, t));
                            }
                        }
                        return n;
                    },
                    ws = 'SelectableVehicleReward_base_0f',
                    ys = 'SelectableVehicleReward_icon_86',
                    Ss = 'SelectableVehicleReward_sunShineAnimation_3c',
                    Ts = {
                        width: 250,
                        height: 250,
                        frameCount: 75,
                        chunk: { count: 2, columns: 7, rows: 6 },
                        getChunkPath:
                            ((Rs = 'R.images.gui.maps.icons.sequence.sun_shine_sprite.sprite_'), (e) => `${Rs}${e}`),
                    };
                var Rs;
                const xs = (function (e) {
                        const t = e.chunk,
                            u = t.rows * t.columns;
                        return (n) => {
                            const a = n % u,
                                r = (a % t.columns) * e.width,
                                s = Math.trunc(a / t.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: s };
                        };
                    })(Ts),
                    Ns = (e) =>
                        s().createElement(
                            ds,
                            { hasDiscount: Ue(e.reward), level: e.reward.vehicleLvl },
                            s().createElement(
                                'div',
                                { className: ws },
                                e.showAnimation &&
                                    s().createElement(fs, {
                                        width: Ts.width,
                                        height: Ts.height,
                                        frameCount: Ts.frameCount,
                                        getImageSource: xs,
                                        frameTime: 50,
                                        className: Ss,
                                    }),
                                s().createElement('div', { className: ys }),
                            ),
                        );
                function Ps() {
                    return (
                        (Ps =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ps.apply(this, arguments)
                    );
                }
                const Is = (0, V.Pi)((e) => {
                        const t = gr(),
                            u = t.model,
                            n = t.controls,
                            a = u.computes.questByIndex(e.index),
                            r = u.completed.get();
                        if (!a) throw new Error(`Quest with index ${e.index} not found`);
                        const o = bt(() => {
                                ot.playClick(), n.takeReward(a.number);
                            }),
                            i = r < a.number ? 'progress' : Or.some(a.rewards, Le) ? 'await-select' : 'completed',
                            l = !1 === u.computes.takeRewardAvailable();
                        return s().createElement(
                            'div',
                            { className: Vr, style: { left: (a.number / u.total.get()) * 100 + '%' } },
                            s().createElement(
                                'div',
                                { className: Qr },
                                (() => {
                                    switch (i) {
                                        case 'progress':
                                            return a.number;
                                        case 'await-select':
                                            return s().createElement(
                                                qr,
                                                { onClick: o, kind: qr.kinds.minimalistic, disabled: l, className: Zr },
                                                s().createElement(pu, {
                                                    text: R.strings.winback.takeReward.buttonText(),
                                                    classMix: Xr,
                                                }),
                                            );
                                        case 'completed':
                                            return s().createElement(Br, null);
                                        default:
                                            return console.error(`Unknown header state: ${i}`), null;
                                    }
                                })(),
                                s().createElement('div', { className: jr }),
                            ),
                            s().createElement(
                                'div',
                                { className: Yr },
                                Ce(a.rewards, (e, t) => {
                                    return (
                                        (u = e),
                                        Oe.includes(u.name)
                                            ? s().createElement(
                                                  nn,
                                                  {
                                                      tooltipArgs: de(
                                                          { [_e]: e.tooltipId },
                                                          Number(e.tooltipContentId),
                                                      ),
                                                      className: Kr,
                                                      key: t,
                                                  },
                                                  s().createElement(gs, { reward: e }),
                                              )
                                            : Le(e)
                                              ? s().createElement(
                                                    nn,
                                                    {
                                                        tooltipArgs: {
                                                            contentId:
                                                                R.views.lobby.winback.tooltips.SelectableRewardTooltip(
                                                                    'resId',
                                                                ),
                                                            args: { [_e]: e.tooltipId },
                                                        },
                                                        className: Kr,
                                                        key: t,
                                                    },
                                                    s().createElement(Ns, {
                                                        reward: e,
                                                        showAnimation: 'await-select' === i && !l,
                                                    }),
                                                )
                                              : s().createElement(
                                                    rn,
                                                    Ps(
                                                        { className: Kr, key: t, size: X.S48x48 },
                                                        We(e, We.ImageSize.Small),
                                                    ),
                                                )
                                    );
                                    var u;
                                }),
                            ),
                        );
                    }),
                    ks = 'Bonuses_base_ee',
                    Os = (0, V.Pi)((e) => {
                        const t = gr().model;
                        return s().createElement(
                            'div',
                            { className: f()(ks, e.className) },
                            ((e, t) => {
                                const u = [];
                                for (let n = 0; n < e; n++) u.push(t(n));
                                return u;
                            })(t.computes.questsLength(), (e) => s().createElement(Is, { index: e, key: e })),
                        );
                    }),
                    Ms = 'Progression_base_32',
                    Ls = 'Progression_progressBar_27',
                    Hs = 'Progression_bonuses_40',
                    Us = (0, V.Pi)(() => {
                        const e = gr().model,
                            t = kr(),
                            u = s().useMemo(
                                () =>
                                    Object.assign({}, Va.uu, {
                                        type: t ? Ir.r.Simple : Ir.r.Growing,
                                        delta: { duration: t ? 2e3 : 1e3, delay: 0 },
                                    }),
                                [t],
                            );
                        return s().createElement(
                            'div',
                            { className: Ms },
                            s().createElement(Os, { className: Hs }),
                            s().createElement(
                                'div',
                                { className: Ls },
                                s().createElement(Va.ko, {
                                    value: e.completed.get(),
                                    deltaFrom: e.prevCompleted.get(),
                                    maxValue: e.total.get(),
                                    animationSettings: u,
                                }),
                            ),
                        );
                    }),
                    Ws = 'ProgressWinback_base_3c',
                    $s = 'ProgressWinback_header_e7',
                    Gs = 'ProgressWinback_progressArea_eb',
                    zs = 'ProgressWinback_progress_6f',
                    qs = 'ProgressWinback_scrollArea_53',
                    Vs = 'ProgressWinback_bar_f4',
                    Qs = 'ProgressWinback_maskEffect_71',
                    js = 'ProgressWinback_scrollWrapper_d7',
                    Ys = 'ProgressWinback_scrollContent_5c',
                    Xs = 'ProgressWinback_progression_e8',
                    Zs = 'ProgressWinback_mainRewardContainer_44',
                    Ks = 'ProgressWinback_shadowLeft_c0',
                    Js = 'ProgressWinback_base__withShadow_0c',
                    eo = _u.Horizontal.useHorizontalScrollApi,
                    to = { wrapper: js, content: Ys },
                    uo = (0, V.Pi)(() => {
                        const e = s().useRef(null),
                            t = s().useRef(null),
                            u = s().useState(!1),
                            n = u[0],
                            a = u[1],
                            o = Ar(),
                            i = eo();
                        Fr(i);
                        const l = gr().model;
                        return (
                            (0, r.useEffect)(() => {
                                t.current && (t.current.style.visibility = 'hidden');
                                const u = (0, je.EH)(() => {
                                    if (!e.current || !t.current) return;
                                    const u = t.current,
                                        n = 'hidden' === u.style.visibility,
                                        a = e.current,
                                        r = l.completed.get() / l.total.get();
                                    o.run(() => {
                                        const e = u.offsetWidth / 2;
                                        i.applyScroll(a.offsetWidth * r - e, { immediate: n }),
                                            n &&
                                                o.run(() => {
                                                    u.style.visibility = '';
                                                });
                                    });
                                });
                                return () => {
                                    u();
                                };
                            }, [i, l, o]),
                            (0, r.useEffect)(() => {
                                const e = (e) => {
                                    a(e.value.scrollPosition > 1);
                                };
                                return (
                                    i.events.on('change', e),
                                    () => {
                                        i.events.off('change', e);
                                    }
                                );
                            }, [i]),
                            s().createElement(
                                'div',
                                { className: f()(Ws, n && Js) },
                                s().createElement(Rr, { className: $s }),
                                s().createElement(
                                    'div',
                                    { className: Gs },
                                    s().createElement(
                                        'div',
                                        { className: zs },
                                        s().createElement(
                                            'div',
                                            { className: qs, ref: t },
                                            s().createElement(
                                                'div',
                                                { className: Qs },
                                                s().createElement(
                                                    _u.Horizontal.Area,
                                                    { api: i, classNames: to },
                                                    s().createElement(
                                                        'div',
                                                        { className: Xs, ref: e },
                                                        s().createElement(Us, null),
                                                    ),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: Vs },
                                                s().createElement(_u.Horizontal.Bar, { api: i }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Zs },
                                            s().createElement(
                                                nn,
                                                {
                                                    tooltipArgs: {
                                                        contentId:
                                                            R.views.lobby.winback.tooltips.MainRewardTooltip('resId'),
                                                    },
                                                },
                                                s().createElement(
                                                    'div',
                                                    null,
                                                    s().createElement(Pr, { hasBattlePass: l.hasBattlePass.get() }),
                                                ),
                                            ),
                                        ),
                                        s().createElement('div', { className: Ks }),
                                    ),
                                ),
                            )
                        );
                    }),
                    no = { context: 'model.winbackProgression' },
                    ao = s().memo(function () {
                        return s().createElement(
                            _r,
                            { options: no, mode: 'real', mocks: dr },
                            s().createElement(uo, null),
                        );
                    }),
                    ro = {
                        base: 'QuestsContent_base_fa',
                        header: 'QuestsContent_header_78',
                        fadeIn: 'QuestsContent_fadeIn_ac',
                        title: 'QuestsContent_title_47',
                        tab: 'QuestsContent_tab_dd',
                        content: 'QuestsContent_content_13',
                    },
                    so = R.strings.quests,
                    oo = (0, r.createContext)({});
                function io() {
                    const e = (0, r.useContext)(oo);
                    if (!e) throw new Error('Quests tabs context must be used only within its provider');
                    return e;
                }
                const lo = (0, V.Pi)(() => {
                        const e = at(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get().dailyType,
                            a = t.computes.getCurrentTabIndex(),
                            o = t.computes.getTabs();
                        if (void 0 === a) throw new Error('Can not show quests for undefined tab index.');
                        const i = (0, qu.tp)(a, 500),
                            l = (0, r.useMemo)(() => ({ isExiting: i !== a, previousTabIndex: i }), [i, a]);
                        return s().createElement(
                            oo.Provider,
                            { value: l },
                            s().createElement(
                                'div',
                                { className: ro.base },
                                s().createElement(
                                    'div',
                                    { className: ro.header },
                                    s().createElement('div', { className: ro.title }, so.dailyQuests.header.$dyn(n)),
                                    s().createElement(zu, {
                                        tabs: o,
                                        active: a,
                                        onClick: (e) => {
                                            st(R.sounds.dq_screen_switch()), u.tabClick(e);
                                        },
                                        classNames: { tab: ro.tab },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ro.content },
                                    (() => {
                                        switch (i) {
                                            case ye.DailyQuests:
                                                return s().createElement(Na, null);
                                            case ye.PremiumQuests:
                                                return s().createElement(qa, null);
                                            default:
                                                return console.error(`Unreachable branch in tabs index: ${i}`), null;
                                        }
                                    })(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ro.progress },
                                    (() => {
                                        switch (n) {
                                            case U.Default:
                                                return s().createElement(lr, null);
                                            case U.Winback:
                                                return s().createElement(ao, null);
                                            default:
                                                return console.error(`Unreachable branch in progress type: ${n}`), null;
                                        }
                                    })(),
                                ),
                            ),
                        );
                    }),
                    co = {
                        base: 'TakeRewards_base_0f',
                        base__disabled: 'TakeRewards_base__disabled_10',
                        button: 'TakeRewards_button_be',
                        border: 'TakeRewards_border_af',
                        glow: 'TakeRewards_glow_1a',
                        content: 'TakeRewards_content_8d',
                        buttonIcon: 'TakeRewards_buttonIcon_aa',
                        hightlightWrapper: 'TakeRewards_hightlightWrapper_7c',
                        hightlight: 'TakeRewards_hightlight_b0',
                        slide: 'TakeRewards_slide_23',
                        countdown: 'TakeRewards_countdown_60',
                        countdownIcon: 'TakeRewards_countdownIcon_c8',
                    },
                    mo = { [W.AVAILABLE]: 'active', [W.NO_OFFERS]: 'hidden', [W.DISABLED]: 'disabled' },
                    Eo = R.strings.quests.dailyQuests.takeRewardsButton,
                    _o = (0, V.Pi)(({ className: e }) => {
                        const t = at(),
                            u = t.model,
                            n = t.controls,
                            a = u.root.get(),
                            r = a.getRewardsTimeLeft,
                            o = a.offersState,
                            i = o === W.DISABLED,
                            l = $r((0, pe.f8)(r), !1);
                        return s().createElement(
                            'div',
                            { className: f()(co.base, e, co[`base__${mo[o]}`]) },
                            s().createElement(
                                Dt,
                                { body: i ? Eo.tooltipDisable() : Eo.tooltip() },
                                s().createElement(
                                    'div',
                                    {
                                        className: co.button,
                                        onClick: i
                                            ? void 0
                                            : () => {
                                                  ot.playClick(), n.claimRewards();
                                              },
                                        onMouseEnter: i ? void 0 : ot.playHighlight,
                                    },
                                    !i &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: co.border }),
                                            s().createElement('div', { className: co.glow }),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: co.content },
                                        s().createElement('div', { className: co.buttonIcon }),
                                        Eo.text(),
                                    ),
                                    !i &&
                                        s().createElement(
                                            'div',
                                            { className: co.hightlightWrapper },
                                            s().createElement('div', { className: co.hightlight }),
                                        ),
                                ),
                            ),
                            !i &&
                                r > 0 &&
                                s().createElement(
                                    'div',
                                    { className: co.countdown },
                                    s().createElement('div', { className: co.countdownIcon }),
                                    s().createElement(Wr, { text: Eo.countdown(), binding: { leftTime: l } }),
                                ),
                        );
                    }),
                    go = (0, V.Pi)(() => {
                        var e;
                        const t = at(),
                            u = t.model,
                            n = t.controls,
                            a = u.root.get(),
                            r = a.infoVisible,
                            o = a.offersState;
                        var i;
                        (i = r ? n.infoToggle : n.close), q($.n.ESCAPE, i);
                        const l = null != (e = Te(u.computes.getCurrentTabIndex())) ? e : '',
                            c = (0, Q.useTransition)(l, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                delay: 200,
                            });
                        return 0 === u.computes.getEnabledFeatures().length
                            ? s().createElement(Hu, null)
                            : s().createElement(
                                  'div',
                                  { className: f()(rt.base, rt[`base__${l}`]) },
                                  c((e, t) =>
                                      s().createElement(Q.animated.div, {
                                          style: e,
                                          className: f()(rt.background, rt[`background__${t}`]),
                                      }),
                                  ),
                                  r
                                      ? s().createElement(Pu, null)
                                      : s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(lo, null),
                                            o !== W.NO_OFFERS && s().createElement(_o, { className: rt.rewardsButton }),
                                        ),
                                  s().createElement(Bt, { className: f()(rt.infoButton, !r && rt.infoButton__info) }),
                              );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(M, null, s().createElement(nt, null, s().createElement(go, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3847: (e, t, u) => {
                'use strict';
                u.d(t, { L: () => I });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r);
                const o = 'BattleConditions_base_8f',
                    i = 'BattleConditions_base__big_4a',
                    l = 'BattleConditions_description_9c',
                    c = 'BattleConditions_operator_da',
                    d = 'BattleConditions_base__huge_a2',
                    m = 'BattleConditions_base__reverse_ad',
                    E = 'BattleConditions_condition_26',
                    _ = 'BattleConditions_base__bolded_55',
                    g = 'BattleConditions_conditionBlockColumn_46',
                    A = 'BattleConditions_conditionBlockRow_b5',
                    p = 'BattleConditions_description_inlineOperator_27',
                    F = 'BattleConditions_progress_e2',
                    D = 'BattleConditions_progress__completed_e8',
                    C = 'BattleConditions_progress_current_dd',
                    B = 'BattleConditions_progress_separator_f0',
                    f = 'BattleConditions_progress_total_c5',
                    h = 'BattleConditions_progressBarWrapper_b3',
                    v = 'BattleConditions_timingFunction_ec';
                var b = u(1975),
                    w = u(7736);
                const y = ({
                        conditionData: e,
                        children: t,
                        swapProgress: u,
                        progressBarStyles: n,
                        progressInfoStyles: o,
                        classNames: i,
                    }) => {
                        const l = e.current,
                            c = e.earned,
                            d = e.total,
                            m = a()(F, { [D]: l === d }),
                            _ = (0, r.useMemo)(
                                () =>
                                    Object.assign({}, b.uu, {
                                        line: { delay: 1e3, duration: 1e3 },
                                        delta: { className: v, delay: 200, duration: 1e3 },
                                    }),
                                [],
                            ),
                            g = u
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: a()(h, null == i ? void 0 : i.progressBar), style: n },
                                          s().createElement(b.ko, {
                                              size: w.$.Small,
                                              value: l,
                                              deltaFrom: l - c,
                                              maxValue: d,
                                              animationSettings: _,
                                          }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: a()(m, null == i ? void 0 : i.progressInfo), style: o },
                                          s().createElement('div', { className: C }, l),
                                          s().createElement('div', { className: B }, '/'),
                                          s().createElement('div', { className: f }, d),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: a()(m, null == i ? void 0 : i.progressInfo), style: o },
                                          s().createElement('div', { className: C }, l),
                                          s().createElement('div', { className: B }, '/'),
                                          s().createElement('div', { className: f }, d),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: a()(h, null == i ? void 0 : i.progressBar), style: n },
                                          s().createElement(b.ko, {
                                              size: w.$.Small,
                                              value: l,
                                              deltaFrom: l - c,
                                              maxValue: d,
                                              animationSettings: _,
                                          }),
                                      ),
                                  );
                        return s().createElement('div', { className: E }, d > 0 && g, t);
                    },
                    S = R.strings.quests.dailyQuests.postBattle.genericAmpersand(),
                    T = R.strings.quests.dailyQuests.postBattle.and(),
                    x = ({
                        conditions: e,
                        missionId: t,
                        columns: u,
                        depth: n,
                        inlineOperator: r,
                        align: o,
                        swapProgress: i,
                        progressBarStyles: d,
                        textStyles: m,
                        progressInfoStyles: E,
                        inlineOperatorStyles: _,
                        useAmpersand: F,
                        classNames: D,
                    }) => {
                        if (e.items.length <= 0 || (void 0 !== n && 0 === n)) return null;
                        const C = Object.assign({}, m, { textAlign: `${o}` });
                        return s().createElement(
                            'div',
                            { className: u ? g : A },
                            e.items.map(({ value: g }, A) => {
                                const B = ((e, t, u, n) => {
                                    const a = { processMore: !0, showOperator: !1, isFirstCondition: !1 };
                                    if (t.items) u < e.items.length - 1 && (a.showOperator = !0);
                                    else {
                                        if (void 0 !== n) {
                                            for (let t = u + 1; t < e.items.length; t++)
                                                if (!e.items[t].value.items || (e.items[t].value.items && n - 1 != 0)) {
                                                    a.showOperator = !0;
                                                    break;
                                                }
                                        } else u < e.items.length - 1 && (a.showOperator = !0);
                                        (a.processMore = !1), u || (a.isFirstCondition = !0);
                                    }
                                    return a;
                                })(e, g, A, n);
                                let f = g.descrData;
                                if (f && B.isFirstCondition) {
                                    f = `${systemLocale.toUpperCase(f[0])}${f.slice(1)}`;
                                }
                                return s().createElement(
                                    s().Fragment,
                                    { key: `${t}_${A}` },
                                    B.processMore
                                        ? s().createElement(x, {
                                              conditions: g,
                                              missionId: t,
                                              columns: !u,
                                              depth: n ? n - 1 : void 0,
                                              inlineOperator: r,
                                              align: o,
                                              swapProgress: i,
                                              progressBarStyles: d,
                                              textStyles: m,
                                              progressInfoStyles: E,
                                              inlineOperatorStyles: _,
                                              useAmpersand: F,
                                              classNames: D,
                                          })
                                        : s().createElement(
                                              y,
                                              {
                                                  conditionData: g,
                                                  swapProgress: i,
                                                  progressBarStyles: d,
                                                  progressInfoStyles: E,
                                                  classNames: {
                                                      progressBar: null == D ? void 0 : D.progressBar,
                                                      progressInfo: null == D ? void 0 : D.progressInfo,
                                                  },
                                              },
                                              B.showOperator && r
                                                  ? s().createElement(
                                                        'div',
                                                        { className: a()(l, null == D ? void 0 : D.text), style: m },
                                                        f,
                                                        s().createElement(
                                                            'span',
                                                            { className: p, style: _ },
                                                            'and' === e.conditionType && F ? S : T,
                                                        ),
                                                    )
                                                  : s().createElement(
                                                        'div',
                                                        { className: a()(l, null == D ? void 0 : D.text), style: C },
                                                        f,
                                                    ),
                                          ),
                                    B.showOperator &&
                                        !r &&
                                        s().createElement(
                                            'div',
                                            { className: c },
                                            'and' === e.conditionType && F ? S : T,
                                        ),
                                );
                            }),
                        );
                    },
                    N = x;
                var P = u(800);
                const I = ({
                    conditions: e,
                    columns: t,
                    depth: u,
                    size: n,
                    reverse: r,
                    isBold: l,
                    inlineOperator: c,
                    align: E,
                    swapProgress: g,
                    missionId: A,
                    progressBarStyles: p,
                    textStyles: F,
                    progressInfoStyles: D,
                    inlineOperatorStyles: C,
                    useAmpersand: B,
                    className: f,
                    classNames: h,
                }) => {
                    if (0 === e.items.length) return null;
                    const v = a()(o, f, { [i]: n === P.$.BIG, [d]: n === P.$.HUGE, [m]: r, [_]: l });
                    return s().createElement(
                        'div',
                        { className: v },
                        s().createElement(N, {
                            conditions: e,
                            missionId: A,
                            columns: t,
                            depth: u,
                            inlineOperator: c,
                            align: E,
                            swapProgress: g,
                            progressBarStyles: p,
                            inlineOperatorStyles: C,
                            textStyles: F,
                            progressInfoStyles: D,
                            useAmpersand: B,
                            classNames: h,
                        }),
                    );
                };
                I.defaultProps = { align: P.I.CENTER, swapProgress: !1, isBold: !1, columns: !1 };
            },
            800: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { $: () => a, I: () => n }),
                    (function (e) {
                        (e.LEFT = 'left'), (e.RIGHT = 'right'), (e.CENTER = 'center');
                    })(n || (n = {})),
                    (function (e) {
                        (e.BIG = 'big'), (e.HUGE = 'huge');
                    })(a || (a = {}));
            },
            2993: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(7044),
                    a = u(4649),
                    r = u(6179),
                    s = u.n(r),
                    o = u(5572),
                    i = u(1272);
                const l = ({
                    startValue: e,
                    hourFormat: t = R.strings.quests.general.countdown.timer_hrs(),
                    minuteFormat: u = R.strings.quests.general.countdown.timer_min(),
                    roundUpHours: r = !1,
                    pendingDotCount: l = 5,
                    className: c,
                }) => {
                    const d = e > n.dV + n.yR ? n.yR : 1,
                        m = (0, a.au)(e, d);
                    return s().createElement(
                        'div',
                        { className: c },
                        m > 0
                            ? ((e, t, u, a) => {
                                  const r = e < n.dV ? u : t;
                                  return (0, o.G)(r, e, a);
                              })(m, t, u, r)
                            : s().createElement(i.Z, { count: l, delay: 500 }),
                    );
                };
            },
            1272: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(6179),
                    a = u.n(n);
                const r = ({ className: e, count: t, delay: u }) => {
                    const r = (0, n.useState)(1),
                        s = r[0],
                        o = r[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = setInterval(() => {
                                o((e) => (e <= t ? e + 1 : 1));
                            }, u);
                            return () => {
                                clearInterval(e);
                            };
                        }),
                        a().createElement('span', { className: e }, '. '.repeat(s))
                    );
                };
            },
            5572: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => n });
                const n = (e, t, u) => {
                    const n = Math.floor(t / 3600).toString(),
                        a = Math.floor((t % 3600) / 60).toString(),
                        r = Math.floor(t % 60).toString();
                    return e
                        .replace('%HH', n.padStart(2, '0'))
                        .replace('%H', u && Number(a) >= 30 ? (Number(n) + 1).toString() : n)
                        .replace('%MM', a.padStart(2, '0'))
                        .replace('%M', a.toString())
                        .replace('%SS', r.padStart(2, '0'))
                        .replace('%S', r);
                };
            },
            2468: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
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
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
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
        (__webpack_require__.j = 693),
        (() => {
            var e = { 693: 0, 376: 0, 224: 0, 536: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, s, o] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [45], () => __webpack_require__(7619));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
