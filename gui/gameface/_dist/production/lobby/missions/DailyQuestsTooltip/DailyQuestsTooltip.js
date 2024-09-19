(() => {
    'use strict';
    var __webpack_modules__ = {
            1975: (e, u, t) => {
                t.d(u, { ko: () => _, uu: () => F });
                var n = t(6483),
                    s = t.n(n),
                    r = t(6179),
                    o = t.n(r),
                    a = t(2468),
                    i = t(7442),
                    l = t(2407),
                    E = t(156),
                    c = t(7736),
                    d = t(1635);
                t(6823);
                const A = E.Gh,
                    F = {
                        freezed: !1,
                        withStack: !1,
                        type: c.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    _ = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = A,
                            size: t = c.$.Default,
                            animationSettings: n = F,
                            disabled: r = !1,
                            withoutBackground: _ = !1,
                            value: m,
                            deltaFrom: D,
                            lineRef: B,
                            onChangeAnimationState: C,
                            onEndAnimation: p,
                            onComplete: g,
                        }) => {
                            const v = (0, d.S)(m, e, D);
                            return o().createElement(
                                'div',
                                { className: s()(a.Z.base, a.Z[`base__${t}`]), style: (0, E.VQ)(u) },
                                !_ && o().createElement(i.J, { size: t }),
                                o().createElement(l.r, {
                                    size: t,
                                    lineRef: B,
                                    disabled: r,
                                    value: v.value,
                                    deltaFrom: v.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: p,
                                    onChangeAnimationState: C,
                                    onComplete: g,
                                }),
                            );
                        },
                    );
            },
            7442: (e, u, t) => {
                t.d(u, { J: () => l });
                var n = t(6179),
                    s = t.n(n),
                    r = t(6483),
                    o = t.n(r),
                    a = t(7736),
                    i = t(2468);
                const l = ({ size: e = a.$.Default }) => {
                    const u = o()(i.Z.background, i.Z[`background__${e}`]);
                    return s().createElement('div', { className: u });
                };
            },
            8150: (e, u, t) => {
                t.d(u, { $: () => i });
                var n = t(6179),
                    s = t.n(n),
                    r = t(6483),
                    o = t.n(r),
                    a = t(8804);
                const i = ({ size: e }) => {
                    const u = o()(a.Z.base, a.Z[`base__${e}`]);
                    return s().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                t.d(u, { r: () => l });
                var n = t(6179),
                    s = t.n(n),
                    r = t(5680),
                    o = t(6736),
                    a = t(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, n.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: n,
                        deltaFrom: l,
                        animationSettings: E,
                        onEndAnimation: c,
                        onChangeAnimationState: d,
                        onComplete: A,
                    }) => {
                        if (l === u)
                            return s().createElement(r.M, {
                                key: `${l}-${u}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: n,
                                onComplete: A,
                            });
                        const F = {
                            from: l,
                            to: u,
                            size: e,
                            lineRef: t,
                            disabled: n,
                            animationSettings: E,
                            onComplete: A,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        };
                        return E.withStack
                            ? s().createElement(a.F, F)
                            : s().createElement(o.H, i({ key: `${l}-${u}` }, F));
                    },
                );
            },
            1848: (e, u, t) => {
                t.d(u, { t: () => l });
                var n = t(6179),
                    s = t.n(n),
                    r = t(6483),
                    o = t.n(r),
                    a = t(8150),
                    i = t(6664);
                const l = (0, n.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: l }) => {
                        const E = o()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                t && i.Z.base__disabled,
                                r && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            c = !t && !r;
                        return s().createElement(
                            'div',
                            { className: E, style: n, ref: u },
                            s().createElement('div', { className: i.Z.pattern }),
                            s().createElement('div', { className: i.Z.gradient }),
                            c && s().createElement(a.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                t.d(u, { O: () => F });
                var n = t(6483),
                    s = t.n(n),
                    r = t(122),
                    o = t(6179),
                    a = t.n(o),
                    i = t(8150),
                    l = t(6823),
                    E = t(6147);
                const c = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    A = (e) => ({ transitionDuration: `${e}ms` }),
                    F = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: F,
                            to: _,
                            onEndAnimation: m,
                            onChangeAnimationState: D,
                            className: B,
                        }) => {
                            const C = _ < n,
                                p = (0, o.useState)(l.S.Idle),
                                g = p[0],
                                v = p[1],
                                b = g === l.S.End,
                                w = g === l.S.Idle,
                                f = g === l.S.Grow,
                                h = g === l.S.Shrink,
                                R = (0, o.useCallback)(
                                    (e) => {
                                        v(e), D && D(e);
                                    },
                                    [D],
                                ),
                                S = (0, o.useCallback)(
                                    (e, u) =>
                                        (0, r.F)(() => {
                                            R(e);
                                        }, u),
                                    [R],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return w
                                        ? S(l.S.Grow, u)
                                        : f
                                          ? S(l.S.Shrink, e)
                                          : h
                                            ? S(l.S.End, e)
                                            : void (b && m && m());
                            }, [S, t, b, f, w, h, m, u, e]);
                            const y = (0, o.useMemo)(() => Object.assign({ width: '100%' }, A(e), c(C)), [C, e]),
                                P = (0, o.useMemo)(() => Object.assign({ width: '0%' }, A(e), c(C)), [C, e]),
                                T = (0, o.useMemo)(() => Object.assign({ width: '0%' }, d(C, n), A(e)), [n, C, e]),
                                O = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(_ - n)}%` }, d(C, n), A(e)),
                                    [n, C, _, e],
                                );
                            if (b) return null;
                            const k = s()(E.Z.base, B, C && 0 === _ && E.Z.base__withoutBounce);
                            return a().createElement(
                                'div',
                                { style: w ? T : O, className: k },
                                a().createElement(
                                    'div',
                                    { style: h ? P : y, className: E.Z.glow },
                                    a().createElement(i.$, { size: F }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                t.d(u, { x: () => l });
                var n = t(6179),
                    s = t.n(n),
                    r = t(122),
                    o = t(6823),
                    a = t(8150),
                    i = t(9919);
                const l = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: E,
                        to: c,
                        onEndAnimation: d,
                        onChangeAnimationState: A,
                    }) => {
                        const F = c < l,
                            _ = (0, n.useState)(o.V.Idle),
                            m = _[0],
                            D = _[1],
                            B = m === o.V.In,
                            C = m === o.V.End,
                            p = m === o.V.Idle,
                            g = (0, n.useCallback)(
                                (e) => {
                                    D(e), A && A(e);
                                },
                                [A],
                            );
                        (0, n.useEffect)(() => {
                            if (p && !t) {
                                const e = u;
                                return (0, r.F)(() => {
                                    g(o.V.In);
                                }, e);
                            }
                        }, [g, t, p, u]),
                            (0, n.useEffect)(() => {
                                if (B) {
                                    const t = e + u;
                                    return (0, r.F)(() => {
                                        d && d(), g(o.V.End);
                                    }, t);
                                }
                            }, [g, B, d, u, e]);
                        const v = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [F ? 'left' : 'right']: '0',
                                }),
                                [F, u, e],
                            ),
                            b = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [F ? 'left' : 'right']: '0',
                                }),
                                [F, u, e],
                            ),
                            w = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(l - c)}%`, left: `${F ? c : l}%` }),
                                [l, F, c],
                            );
                        return C
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: i.Z.base, style: w },
                                  s().createElement(
                                      'div',
                                      { style: p ? v : b, className: i.Z.delta },
                                      s().createElement(a.$, { size: E }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                t.d(u, { F: () => i });
                var n = t(6179),
                    s = t.n(n),
                    r = t(2434),
                    o = t(1848),
                    a = t(6823);
                const i = (0, n.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: i,
                        disabled: l,
                        isComplete: E,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: A,
                    }) => {
                        const F = e < t,
                            _ = (0, n.useState)(!1),
                            m = _[0],
                            D = _[1],
                            B = (0, n.useCallback)(
                                (e) => {
                                    e === a.S.Shrink && D(!0), A && A(e);
                                },
                                [A],
                            ),
                            C = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            p = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(o.t, {
                                size: u,
                                lineRef: i,
                                disabled: l,
                                isComplete: E,
                                withoutBounce: F && 0 === e,
                                baseStyles: m ? p : C,
                            }),
                            t >= 0 &&
                                s().createElement(r.O, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: B,
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
                t.d(u, { D: () => a });
                var n = t(6179),
                    s = t.n(n),
                    r = t(5913),
                    o = t(1848);
                const a = (0, n.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: a,
                        disabled: i,
                        isComplete: l,
                        animationSettings: E,
                        onChangeAnimationState: c,
                        onEndAnimation: d,
                    }) => {
                        const A = (0, n.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${E.line.duration}ms`,
                                transitionDelay: `${E.line.delay}ms`,
                            }),
                            [E.line.delay, E.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(o.t, { size: u, lineRef: a, disabled: i, isComplete: l, baseStyles: A }),
                            t >= 0 &&
                                s().createElement(r.x, {
                                    transitionDuration: E.delta.duration,
                                    transitionDelay: E.delta.delay,
                                    freezed: E.freezed,
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
                t.d(u, { H: () => E });
                var n = t(6179),
                    s = t.n(n),
                    r = t(7736),
                    o = t(828),
                    a = t(538);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const E = (0, n.memo)((e) => {
                    let u = e.onComplete,
                        t = e.onEndAnimation,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s;
                        })(e, i);
                    const c = (0, n.useState)(!1),
                        d = c[0],
                        A = c[1],
                        F = (0, n.useCallback)(() => {
                            const e = 100 === E.to;
                            e !== d && A(e), e && u && u(), t && t();
                        }, [d, u, t, E.to]);
                    switch (E.animationSettings.type) {
                        case r.r.Simple:
                            return s().createElement(o.D, l({}, E, { onEndAnimation: F, isComplete: d }));
                        case r.r.Growing:
                            return s().createElement(a.F, l({}, E, { onEndAnimation: F, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
                let n, s;
                t.d(u, { S: () => n, V: () => s }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(s || (s = {}));
            },
            2386: (e, u, t) => {
                t.d(u, { F: () => i });
                var n = t(6179),
                    s = t.n(n),
                    r = t(6736);
                const o = ['onEndAnimation'];
                function a() {
                    return (
                        (a =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        a.apply(this, arguments)
                    );
                }
                const i = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s;
                        })(e, o);
                    const i = (0, n.useRef)({}),
                        l = (0, n.useCallback)(() => {
                            (i.current.from = void 0), u && u();
                        }, [u]),
                        E = 'number' == typeof i.current.from ? i.current.from : t.from;
                    return (
                        (i.current.from = E),
                        s().createElement(r.H, a({}, t, { onEndAnimation: l, key: `${E}-${t.to}`, from: E }))
                    );
                });
            },
            5680: (e, u, t) => {
                t.d(u, { M: () => o });
                var n = t(6179),
                    s = t.n(n),
                    r = t(1848);
                const o = ({ size: e, value: u, lineRef: t, disabled: o, onComplete: a }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, n.useEffect)(() => {
                            l && a && a();
                        }, [l, a]),
                        s().createElement(r.t, { size: e, disabled: o, baseStyles: i, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                t.d(u, { Gh: () => s, VQ: () => n });
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
            7736: (e, u, t) => {
                let n, s;
                t.d(u, { $: () => n, r: () => s }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(n || (n = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(s || (s = {}));
            },
            1635: (e, u, t) => {
                t.d(u, { S: () => o });
                var n = t(6179),
                    s = t(7515);
                const r = (e, u, t) => {
                        if ('number' == typeof t) {
                            return ((0, s.u)(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    o = (e, u, t) =>
                        (0, n.useMemo)(() => {
                            const n = ((0, s.u)(0, u, e) / u) * 100;
                            return { value: n, deltaFrom: r(n, u, t) };
                        }, [t, u, e]);
            },
            7515: (e, u, t) => {
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            122: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
            },
            9768: (e, u, t) => {
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => F, off: () => d, on: () => c, onResize: () => l, onScaleUpdated: () => E });
                var s = {};
                t.r(s),
                    t.d(s, {
                        events: () => n,
                        getMouseGlobalPosition: () => B,
                        getSize: () => D,
                        graphicsQuality: () => C,
                        playSound: () => _,
                        setRTPC: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => w, getTextureUrl: () => b });
                var o = {};
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => M,
                        addPreloadTexture: () => I,
                        children: () => r,
                        displayStatus: () => f,
                        displayStatusIs: () => K,
                        events: () => h,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => z,
                        getBrowserTexturePath: () => x,
                        getDisplayStatus: () => Q,
                        getScale: () => q,
                        getSize: () => U,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => H,
                        isFocused: () => W,
                        pxToRem: () => V,
                        remToPx: () => Y,
                        resize: () => G,
                        sendEvent: () => k,
                        setAnimateWindow: () => j,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => ee,
                    });
                const l = a('clientResized'),
                    E = a('self.onScaleUpdated'),
                    c = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    A = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const F = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : i(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const r = `mouse${u}`,
                                        o = A[u]((e) => t([e, 'outside']));
                                    function a(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, a),
                                        n(),
                                        () => {
                                            s &&
                                                (o(),
                                                window.removeEventListener(r, a),
                                                (e.listeners -= 1),
                                                n(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
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
                function _(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function m(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(p).reduce((e, u) => ((e[u] = () => _(p[u])), e), {}),
                    v = { play: Object.assign({}, g, { sound: _ }), setRTPC: m };
                function b(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function w(e, u, t) {
                    return `url(${b(e, u, t)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    h = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    R = ['args'];
                const S = 2,
                    y = 16,
                    P = 32,
                    T = 64,
                    O = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const s = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                                    return s;
                                })(u, R);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = s),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    k = {
                        close(e) {
                            O('popover' === e ? S : P);
                        },
                        minimize() {
                            O(T);
                        },
                        move(e) {
                            O(y, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function x(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function M(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function $(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: Y(u.x), y: Y(u.y) };
                }
                function z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function V(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function W() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function H() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(f).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === f[u]), e), {}),
                    J = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : h.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: o, client: s, sound: v };
            },
            5521: (e, u, t) => {
                let n, s;
                t.d(u, { n: () => n }),
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
                    })(s || (s = {}));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(9768);
                class s {
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
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, s);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                s.__instance = void 0;
                const r = s;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, u, t) => {
                t.d(u, { Sw: () => r.Z, B3: () => i, Z5: () => o.Z5, B0: () => a, SU: () => g, ry: () => D });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                const s = n;
                var r = t(1358);
                var o = t(8613);
                let a;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(a || (a = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(9768);
                const F = ['args'];
                function _(e, u, t, n, s, r, o) {
                    try {
                        var a = e[r](o),
                            i = a.value;
                    } catch (e) {
                        return void t(e);
                    }
                    a.done ? u(i) : Promise.resolve(i).then(n, s);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, s) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            _(r, n, s, o, a, 'next', e);
                                        }
                                        function a(e) {
                                            _(r, n, s, o, a, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const s = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                                    return s;
                                })(u, F);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = s),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => B(a.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    },
                    g = (e) => {
                        p(e, C);
                    };
                var v = t(7572);
                const b = s.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: a,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => B(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, s = R.invalid('resId'), r) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                E = i.y,
                                c = i.width,
                                d = i.height,
                                F = {
                                    x: A.O.view.pxToRem(l) + o.x,
                                    y: A.O.view.pxToRem(E) + o.y,
                                    width: A.O.view.pxToRem(c),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: s,
                                direction: u,
                                bbox: m(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: g,
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const s = Object.prototype.toString.call(u[n]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < s.length; u++) t[n].push({ value: e(s[u].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => s });
                const n = {
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
            },
            9840: (e, u, t) => {
                var n = t(9768),
                    s = t(6179),
                    r = t.n(s),
                    o = t(493),
                    a = t.n(o),
                    i = t(6483),
                    l = t.n(i);
                function E() {
                    const e = (0, s.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => u, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (u) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                u(), (e.current = 0);
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
                const c = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    d = ['children', 'className', 'theme'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const F = r().forwardRef(function (e, u) {
                    let t = e.children,
                        o = e.className,
                        a = e.theme,
                        i = void 0 === a ? 'default' : a,
                        F = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                            return s;
                        })(e, d);
                    const _ = E(),
                        m = r().useRef(null);
                    var D;
                    return (
                        (D = () => {
                            _.run(() => {
                                const e = m.current;
                                if (!e) return;
                                const u = e.scrollWidth,
                                    t = e.scrollHeight;
                                n.O.view.resize(u, t);
                                const s = window.getComputedStyle(e);
                                n.O.view.setSidePaddingsRem({
                                    left: parseInt(s.getPropertyValue('padding-left'), 10),
                                    top: parseInt(s.getPropertyValue('padding-top'), 10),
                                    right: parseInt(s.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(s.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, s.useEffect)(D, []),
                        r().createElement(
                            'div',
                            A({}, F, {
                                className: l()(c.base, c[`base__theme-${i}`], o),
                                ref: function (e) {
                                    (m.current = e), 'function' == typeof u ? u(e) : u && (u.current = e);
                                },
                            }),
                            r().createElement('div', { className: c.decorator }, t),
                        )
                    );
                });
                var _ = t(9916),
                    m = t(3847);
                t(1281);
                let D;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(D || (D = {}));
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
                let B, C, p, g, v, b, w, f;
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
                        (e.WtHunterLootbox = 'wt_hunter'),
                        (e.WtBossLootbox = 'wt_boss'),
                        (e.WtProgressPoints = 'stamp'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (e.WTCommanderClaimed = 'wtCommanderClaimed');
                })(B || (B = {})),
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
                    })(C || (C = {})),
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
                    })(p || (p = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(g || (g = {})),
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
                    })(v || (v = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(b || (b = {})),
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
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(f || (f = {}));
                const h = [
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
                function S(e) {
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
                const y = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    P = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            a = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = e.ignoreMouseClick,
                            d = void 0 !== c && c,
                            A = e.decoratorId,
                            F = void 0 === A ? 0 : A,
                            _ = e.isEnabled,
                            m = void 0 === _ || _,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            p = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                                return s;
                            })(e, h);
                        const v = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, s.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            w = (0, s.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (y(t, F, { isMouseEvent: !0, on: !0, arguments: S(n) }, b),
                                    C && C(),
                                    (v.current.isVisible = !0));
                            }, [t, F, n, b, C]),
                            f = (0, s.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        y(t, F, { on: !1 }, b),
                                        v.current.isVisible && p && p(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, F, b, p]),
                            P = (0, s.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === m && f();
                            }, [m, f]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return m
                            ? (0, s.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && f(), null == a || a(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var T;
                    },
                    T = ['children'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                                return s;
                            })(e, T);
                        return r().createElement(
                            P,
                            O(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    I = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const x = R.views.common.tooltip_window.simple_tooltip_content,
                    M = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            o = e.note,
                            a = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (s[t] = e[t]);
                                return s;
                            })(e, I);
                        const E = (0, s.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: o, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, n, o, i]);
                        return r().createElement(
                            P,
                            N(
                                {
                                    contentId:
                                        ((c = null == i ? void 0 : i.hasHtmlContent),
                                        c ? x.SimpleTooltipHtmlContent('resId') : x.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            u,
                        );
                        var c;
                    };
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const U = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(M, u, n);
                        const s = u.contentId;
                        return s ? r().createElement(P, L({}, u, { contentId: s }), n) : r().createElement(k, u, n);
                    },
                    G = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? _.B3.GOLD : _.B3.INTEGRAL;
                            return void 0 === e ? '' : _.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? r().createElement('span', null, t) : null;
                    },
                    $ = [
                        B.Items,
                        B.Equipment,
                        B.Xp,
                        B.XpFactor,
                        B.Blueprints,
                        B.BlueprintsAny,
                        B.Goodies,
                        B.Berths,
                        B.Slots,
                        B.Tokens,
                        B.CrewSkins,
                        B.CrewBooks,
                        B.Customizations,
                        B.CreditsFactor,
                        B.TankmenXp,
                        B.TankmenXpFactor,
                        B.FreeXpFactor,
                        B.BattleToken,
                        B.PremiumUniversal,
                        B.NaturalCover,
                        B.BpCoin,
                        B.BattlePassSelectToken,
                        B.BattlaPassFinalAchievement,
                        B.BattleBadge,
                        B.BonusX5,
                        B.CrewBonusX3,
                        B.NewYearInvoice,
                        B.EpicSelectToken,
                        B.WtHunterLootbox,
                        B.WtBossLootbox,
                        B.WtProgressPoints,
                        B.Comp7TokenWeeklyReward,
                        B.DeluxeGift,
                        B.BattleBoosterGift,
                        B.OptionalDevice,
                    ],
                    z = [B.Gold, B.Credits, B.Crystal, B.FreeXp],
                    q = [B.BattlePassPoints, B.EquipCoin],
                    V = [B.PremiumPlus, B.Premium],
                    Y = ['engravings', 'backgrounds'],
                    j = ['engraving', 'background'],
                    W = (e, u = p.Small) => {
                        const t = e.name,
                            n = e.type,
                            s = e.value,
                            r = e.icon,
                            o = e.item,
                            a = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case p.S600x450:
                                        return 'c_600x450';
                                    case p.S400x300:
                                        return 'c_400x300';
                                    case p.S296x222:
                                        return 'c_296x222';
                                    case p.S232x174:
                                        return 'c_232x174';
                                    case p.Big:
                                        return 'c_80x80';
                                    case p.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${s}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${s}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Y[e];
                                    if (n) {
                                        const s = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = s.$dyn(t);
                                        return r ? `${r}` : `${s.$dyn(j[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(a, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Z = [p.Small, p.Big],
                    H = {
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
                    X = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = p.Big,
                        special: s,
                        value: o,
                        valueType: a,
                        title: i,
                        style: E,
                        className: c,
                        classNames: d,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: F,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Z.includes(e)) return null;
                                switch (u) {
                                    case v.BATTLE_BOOSTER:
                                    case v.BATTLE_BOOSTER_REPLACE:
                                        return b.BATTLE_BOOSTER;
                                }
                            })(n, s),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case v.BATTLE_BOOSTER:
                                        return w.BATTLE_BOOSTER;
                                    case v.BATTLE_BOOSTER_REPLACE:
                                        return w.BATTLE_BOOSTER_REPLACE;
                                    case v.BUILT_IN_EQUIPMENT:
                                        return w.BUILT_IN_EQUIPMENT;
                                    case v.EQUIPMENT_PLUS:
                                        return w.EQUIPMENT_PLUS;
                                    case v.EQUIPMENT_TROPHY_BASIC:
                                        return w.EQUIPMENT_TROPHY_BASIC;
                                    case v.EQUIPMENT_TROPHY_UPGRADED:
                                        return w.EQUIPMENT_TROPHY_UPGRADED;
                                    case v.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return w.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case v.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return w.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case v.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return w.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case v.PROGRESSION_STYLE_UPGRADED_1:
                                        return w.PROGRESSION_STYLE_UPGRADED_1;
                                    case v.PROGRESSION_STYLE_UPGRADED_2:
                                        return w.PROGRESSION_STYLE_UPGRADED_2;
                                    case v.PROGRESSION_STYLE_UPGRADED_3:
                                        return w.PROGRESSION_STYLE_UPGRADED_3;
                                    case v.PROGRESSION_STYLE_UPGRADED_4:
                                        return w.PROGRESSION_STYLE_UPGRADED_4;
                                    case v.PROGRESSION_STYLE_UPGRADED_5:
                                        return w.PROGRESSION_STYLE_UPGRADED_5;
                                    case v.PROGRESSION_STYLE_UPGRADED_6:
                                        return w.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(s),
                            D = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case g.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case g.CURRENCY:
                                    case g.NUMBER:
                                        return r().createElement(G, { format: 'integral', value: Number(e) });
                                    case g.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, a);
                        return r().createElement(
                            'div',
                            { className: l()(H.base, H[`base__${n}`], c), style: E },
                            r().createElement(
                                U,
                                { tooltipArgs: A, className: H.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: l()(H.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            r().createElement('div', {
                                                className: l()(H.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: l()(H.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            r().createElement('div', {
                                                className: l()(H.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    H.info,
                                                    H[`info__${e}`],
                                                    a === g.MULTI && H.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            D,
                                        ),
                                    i && r().createElement('div', { className: H.title }, i),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    U,
                                    { tooltipArgs: F },
                                    r().createElement('div', {
                                        className: l()(H.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Q = 'Rewards_base_26',
                    K = 'Rewards_base__vertical_9f',
                    J = 'Rewards_reward_7b',
                    ee = 'Rewards_reward__vertical_c6';
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const te = r().memo(
                        ({
                            data: e,
                            size: u = p.Big,
                            isVertical: t = !1,
                            count: n,
                            classMix: o,
                            rewardItemClassMix: a,
                            boxRewardTooltip: i,
                            boxRewardValue: E,
                            boxRewardClassName: c,
                            boxRewardClassNames: d,
                        }) => {
                            const A = (0, s.useMemo)(
                                    () =>
                                        n && n < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : '',
                                    [n, e.length, u],
                                ),
                                F =
                                    E ||
                                    ((_ = R.strings.tooltips.quests.awards.additional.bottom()),
                                    (m = { count: e.length - (n || 0) }),
                                    _.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(m[e.slice(u, -u)]);
                                    }));
                            var _, m;
                            const D = l()(Q, t && K, o),
                                B = l()(J, t && ee, a);
                            return r().createElement(
                                'div',
                                { className: D },
                                A
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, n)
                                              .map((e, t) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: t, className: B },
                                                      r().createElement(X, ue({ size: u }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: B },
                                              r().createElement(X, {
                                                  name: 'more',
                                                  image: A,
                                                  size: u,
                                                  value: F,
                                                  tooltipArgs: i,
                                                  className: c,
                                                  classNames: d,
                                              }),
                                          ),
                                      )
                                    : e.map((e, t) =>
                                          r().createElement(
                                              'div',
                                              { key: t, className: B },
                                              r().createElement(X, ue({ size: u }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    ne = 'DailyQuestsTooltipContent_base_65',
                    se = 'DailyQuestsTooltipContent_rewards_wrapper_72',
                    re = 'DailyQuestsTooltipContent_info_82',
                    oe = 'DailyQuestsTooltipContent_icon_86',
                    ae = 'DailyQuestsTooltipContent_status_e0',
                    ie = 'DailyQuestsTooltipContent_statusIcon_4d',
                    le = 'DailyQuestsTooltipContent_status_completed_8d',
                    Ee = 'DailyQuestsTooltipContent_separator_00',
                    ce = 'DailyQuestsTooltipContent_conditions_operator_ac',
                    de = { color: '#fff', fontSize: '20rem' },
                    Ae = { marginLeft: '10rem', marginRight: '10rem' },
                    Fe = ({ model: e }) => {
                        const u = e.bonusCondition,
                            t = e.bonuses,
                            n = e.icon,
                            o = e.id,
                            a = e.postBattleCondition,
                            i = e.status,
                            E = l()(ne),
                            c = l()(ae, { [le]: 'done' === i }),
                            d = (0, s.useMemo)(
                                () =>
                                    ((e) =>
                                        'done' === e
                                            ? R.strings.quests.battleCondition.state.completed()
                                            : R.strings.quests.battleCondition.state.in_progress())(i),
                                [i],
                            ),
                            A = (0, s.useMemo)(
                                () =>
                                    t.map(({ value: e }) => {
                                        return {
                                            name: e.item || e.name,
                                            image: W(e, p.Big),
                                            special: e.overlayType,
                                            value: e.value,
                                            valueType:
                                                ((u = e.name),
                                                $.includes(u)
                                                    ? g.MULTI
                                                    : z.includes(u)
                                                      ? g.CURRENCY
                                                      : q.includes(u)
                                                        ? g.NUMBER
                                                        : V.includes(u)
                                                          ? g.PREMIUM_PLUS
                                                          : g.STRING),
                                        };
                                        var u;
                                    }),
                                [t],
                            ),
                            F = (0, s.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.missions.icons.conditions.c_80_${n}_silver)`,
                                }),
                                [n],
                            );
                        return r().createElement(
                            'div',
                            { className: E },
                            r().createElement('div', { className: oe, style: F }),
                            r().createElement(
                                'div',
                                { className: re },
                                r().createElement(m.L, {
                                    conditions: u,
                                    columns: !0,
                                    progressBarStyles: Ae,
                                    textStyles: de,
                                    progressInfoStyles: de,
                                    missionId: o,
                                    swapProgress: !0,
                                    reverse: !0,
                                }),
                                u.items.length > 0 &&
                                    a.items.length > 0 &&
                                    r().createElement('div', { className: ce }, '&'),
                                r().createElement(m.L, {
                                    conditions: a,
                                    columns: !0,
                                    progressBarStyles: Ae,
                                    textStyles: de,
                                    progressInfoStyles: de,
                                    missionId: o,
                                    swapProgress: !0,
                                    reverse: !0,
                                }),
                            ),
                            r().createElement('div', { className: se }, r().createElement(te, { data: A })),
                            r().createElement('div', { className: Ee }),
                            r().createElement('div', { className: c }, r().createElement('div', { className: ie }), d),
                        );
                    };
                class _e extends r().Component {
                    constructor(...e) {
                        super(...e),
                            (this.state = { model: window.model }),
                            (this.tracker = new _.Sw()),
                            (this.modelCallbackID = 0);
                    }
                    componentDidMount() {
                        const e = () => {
                            this.modelCallbackID = this.tracker.addCallback('model', (e) => {
                                this.setState({ model: e });
                            });
                        };
                        engine._BindingsReady && engine._WindowLoaded ? e() : engine.on('Ready', e),
                            window.addEventListener('keydown', _.SU);
                    }
                    componentWillUnmount() {
                        this.tracker.clear(),
                            this.modelCallbackID > 0 &&
                                (this.tracker.removeCallback(this.modelCallbackID), (this.modelCallbackID = 0)),
                            window.removeEventListener('keydown', _.SU);
                    }
                    render() {
                        return r().createElement(
                            'div',
                            null,
                            r().createElement(F, null, r().createElement(Fe, { model: this.state.model })),
                        );
                    }
                }
                n.O.view.extraSize.set(0, 0),
                    engine.whenReady.then(() => {
                        a().render(r().createElement(_e, null), document.getElementById('root'));
                    });
            },
            3847: (e, u, t) => {
                t.d(u, { L: () => I });
                var n = t(6483),
                    s = t.n(n),
                    r = t(6179),
                    o = t.n(r);
                const a = 'BattleConditions_base_8f',
                    i = 'BattleConditions_base__big_4a',
                    l = 'BattleConditions_description_9c',
                    E = 'BattleConditions_operator_da',
                    c = 'BattleConditions_base__huge_a2',
                    d = 'BattleConditions_base__reverse_ad',
                    A = 'BattleConditions_condition_26',
                    F = 'BattleConditions_base__bolded_55',
                    _ = 'BattleConditions_conditionBlockColumn_46',
                    m = 'BattleConditions_conditionBlockRow_b5',
                    D = 'BattleConditions_description_inlineOperator_27',
                    B = 'BattleConditions_progress_e2',
                    C = 'BattleConditions_progress__completed_e8',
                    p = 'BattleConditions_progress_current_dd',
                    g = 'BattleConditions_progress_separator_f0',
                    v = 'BattleConditions_progress_total_c5',
                    b = 'BattleConditions_progressBarWrapper_b3',
                    w = 'BattleConditions_timingFunction_ec';
                var f = t(1975),
                    h = t(7736);
                const S = ({
                        conditionData: e,
                        children: u,
                        swapProgress: t,
                        progressBarStyles: n,
                        progressInfoStyles: a,
                        classNames: i,
                    }) => {
                        const l = e.current,
                            E = e.earned,
                            c = e.total,
                            d = s()(B, { [C]: l === c }),
                            F = (0, r.useMemo)(
                                () =>
                                    Object.assign({}, f.uu, {
                                        line: { delay: 1e3, duration: 1e3 },
                                        delta: { className: w, delay: 200, duration: 1e3 },
                                    }),
                                [],
                            ),
                            _ = t
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(
                                          'div',
                                          { className: s()(b, null == i ? void 0 : i.progressBar), style: n },
                                          o().createElement(f.ko, {
                                              size: h.$.Small,
                                              value: l,
                                              deltaFrom: l - E,
                                              maxValue: c,
                                              animationSettings: F,
                                          }),
                                      ),
                                      o().createElement(
                                          'div',
                                          { className: s()(d, null == i ? void 0 : i.progressInfo), style: a },
                                          o().createElement('div', { className: p }, l),
                                          o().createElement('div', { className: g }, '/'),
                                          o().createElement('div', { className: v }, c),
                                      ),
                                  )
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(
                                          'div',
                                          { className: s()(d, null == i ? void 0 : i.progressInfo), style: a },
                                          o().createElement('div', { className: p }, l),
                                          o().createElement('div', { className: g }, '/'),
                                          o().createElement('div', { className: v }, c),
                                      ),
                                      o().createElement(
                                          'div',
                                          { className: s()(b, null == i ? void 0 : i.progressBar), style: n },
                                          o().createElement(f.ko, {
                                              size: h.$.Small,
                                              value: l,
                                              deltaFrom: l - E,
                                              maxValue: c,
                                              animationSettings: F,
                                          }),
                                      ),
                                  );
                        return o().createElement('div', { className: A }, c > 0 && _, u);
                    },
                    y = R.strings.quests.dailyQuests.postBattle.genericAmpersand(),
                    P = R.strings.quests.dailyQuests.postBattle.and(),
                    T = ({
                        conditions: e,
                        missionId: u,
                        columns: t,
                        depth: n,
                        inlineOperator: r,
                        align: a,
                        swapProgress: i,
                        progressBarStyles: c,
                        textStyles: d,
                        progressInfoStyles: A,
                        inlineOperatorStyles: F,
                        useAmpersand: B,
                        classNames: C,
                    }) => {
                        if (e.items.length <= 0 || (void 0 !== n && 0 === n)) return null;
                        const p = Object.assign({}, d, { textAlign: `${a}` });
                        return o().createElement(
                            'div',
                            { className: t ? _ : m },
                            e.items.map(({ value: _ }, m) => {
                                const g = ((e, u, t, n) => {
                                    const s = { processMore: !0, showOperator: !1, isFirstCondition: !1 };
                                    if (u.items) t < e.items.length - 1 && (s.showOperator = !0);
                                    else {
                                        if (void 0 !== n) {
                                            for (let u = t + 1; u < e.items.length; u++)
                                                if (!e.items[u].value.items || (e.items[u].value.items && n - 1 != 0)) {
                                                    s.showOperator = !0;
                                                    break;
                                                }
                                        } else t < e.items.length - 1 && (s.showOperator = !0);
                                        (s.processMore = !1), t || (s.isFirstCondition = !0);
                                    }
                                    return s;
                                })(e, _, m, n);
                                let v = _.descrData;
                                if (v && g.isFirstCondition) {
                                    v = `${systemLocale.toUpperCase(v[0])}${v.slice(1)}`;
                                }
                                return o().createElement(
                                    o().Fragment,
                                    { key: `${u}_${m}` },
                                    g.processMore
                                        ? o().createElement(T, {
                                              conditions: _,
                                              missionId: u,
                                              columns: !t,
                                              depth: n ? n - 1 : void 0,
                                              inlineOperator: r,
                                              align: a,
                                              swapProgress: i,
                                              progressBarStyles: c,
                                              textStyles: d,
                                              progressInfoStyles: A,
                                              inlineOperatorStyles: F,
                                              useAmpersand: B,
                                              classNames: C,
                                          })
                                        : o().createElement(
                                              S,
                                              {
                                                  conditionData: _,
                                                  swapProgress: i,
                                                  progressBarStyles: c,
                                                  progressInfoStyles: A,
                                                  classNames: {
                                                      progressBar: null == C ? void 0 : C.progressBar,
                                                      progressInfo: null == C ? void 0 : C.progressInfo,
                                                  },
                                              },
                                              g.showOperator && r
                                                  ? o().createElement(
                                                        'div',
                                                        { className: s()(l, null == C ? void 0 : C.text), style: d },
                                                        v,
                                                        o().createElement(
                                                            'span',
                                                            { className: D, style: F },
                                                            'and' === e.conditionType && B ? y : P,
                                                        ),
                                                    )
                                                  : o().createElement(
                                                        'div',
                                                        { className: s()(l, null == C ? void 0 : C.text), style: p },
                                                        v,
                                                    ),
                                          ),
                                    g.showOperator &&
                                        !r &&
                                        o().createElement(
                                            'div',
                                            { className: E },
                                            'and' === e.conditionType && B ? y : P,
                                        ),
                                );
                            }),
                        );
                    },
                    O = T;
                var k = t(800);
                const I = ({
                    conditions: e,
                    columns: u,
                    depth: t,
                    size: n,
                    reverse: r,
                    isBold: l,
                    inlineOperator: E,
                    align: A,
                    swapProgress: _,
                    missionId: m,
                    progressBarStyles: D,
                    textStyles: B,
                    progressInfoStyles: C,
                    inlineOperatorStyles: p,
                    useAmpersand: g,
                    className: v,
                    classNames: b,
                }) => {
                    if (0 === e.items.length) return null;
                    const w = s()(a, v, { [i]: n === k.$.BIG, [c]: n === k.$.HUGE, [d]: r, [F]: l });
                    return o().createElement(
                        'div',
                        { className: w },
                        o().createElement(O, {
                            conditions: e,
                            missionId: m,
                            columns: u,
                            depth: t,
                            inlineOperator: E,
                            align: A,
                            swapProgress: _,
                            progressBarStyles: D,
                            inlineOperatorStyles: p,
                            textStyles: B,
                            progressInfoStyles: C,
                            useAmpersand: g,
                            classNames: b,
                        }),
                    );
                };
                I.defaultProps = { align: k.I.CENTER, swapProgress: !1, isBold: !1, columns: !1 };
            },
            800: (e, u, t) => {
                let n, s;
                t.d(u, { $: () => s, I: () => n }),
                    (function (e) {
                        (e.LEFT = 'left'), (e.RIGHT = 'right'), (e.CENTER = 'center');
                    })(n || (n = {})),
                    (function (e) {
                        (e.BIG = 'big'), (e.HUGE = 'huge');
                    })(s || (s = {}));
            },
            2468: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            6147: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var s = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || s >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < s && (s = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var a = t();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 369),
        (() => {
            var e = { 369: 0, 376: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        s,
                        [r, o, a] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        (s = r[i]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [45], () => __webpack_require__(9840));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
