(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                u.d(t, { L$: () => o.L, qE: () => o.q, u5: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7727),
                    i = u(6179),
                    s = u.n(i),
                    l = u(6880),
                    o = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: E,
                    onMouseEnter: _,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const p = (0, i.useRef)(null),
                        f = (0, i.useState)(u),
                        B = f[0],
                        C = f[1],
                        D = (0, i.useState)(!1),
                        b = D[0],
                        w = D[1],
                        k = (0, i.useState)(!1),
                        S = k[0],
                        y = k[1],
                        N = (0, i.useCallback)(() => {
                            c || (p.current && (p.current.focus(), C(!0)));
                        }, [c]),
                        x = (0, i.useCallback)(
                            (e) => {
                                B && null !== p.current && !p.current.contains(e.target) && C(!1);
                            },
                            [B],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                c || (v && v(e));
                            },
                            [c, v],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, a.G)(m), _ && _(e), y(!0));
                            },
                            [c, m, _],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (g && g(e), w(!1));
                            },
                            [c, g],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (null !== E && (0, a.G)(E), F && F(e), u && N(), w(!0));
                            },
                            [c, E, F, N, u],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                c || (h && h(e), w(!1));
                            },
                            [c, h],
                        ),
                        H = r()(
                            l.Z.base,
                            l.Z[`base__${n}`],
                            {
                                [l.Z.base__disabled]: c,
                                [l.Z[`base__${t}`]]: t,
                                [l.Z.base__focus]: B,
                                [l.Z.base__highlightActive]: b,
                                [l.Z.base__firstHover]: S,
                            },
                            d,
                        ),
                        W = r()(l.Z.state, l.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, i.useEffect)(() => {
                            C(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: I,
                                onMouseUp: P,
                                onMouseDown: M,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            n !== o.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l.Z.back }),
                                    s().createElement('span', { className: l.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: l.Z.stateDisabled }),
                                s().createElement('span', { className: l.Z.stateHighlightHover }),
                                s().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: o.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, i.memo)(c);
            },
            2106: (e, t, u) => {
                let n, r;
                u.d(t, { L: () => n, q: () => r }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(r || (r = {}));
            },
            3495: (e, t, u) => {
                u.d(t, { Y: () => d });
                var n = u(3138),
                    r = u(6179),
                    a = u(1043),
                    i = u(5262);
                const s = n.O.client.getSize('rem'),
                    l = s.width,
                    o = s.height,
                    c = Object.assign({ width: l, height: o }, (0, i.T)(l, o, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                var n = u(6179),
                    r = u.n(n),
                    a = u(6536),
                    i = u(3495),
                    s = u(1043),
                    l = u(5262),
                    o = u(3138);
                (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(i.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        d = u[1],
                        m = (0, n.useCallback)((e, t) => {
                            const u = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: n }, (0, l.T)(u, n, s.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', m), [m]);
                    const E = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(i.Y.Provider, { value: E }, e);
                });
            },
            6010: (e, t, u) => {
                var n = u(6179),
                    r = u(7382),
                    a = u(3495);
                const i = ['children'];
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, i);
                    const s = (0, n.useContext)(a.Y),
                        l = s.extraLarge,
                        o = s.large,
                        c = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        E = s.extraLargeWidth,
                        _ = s.largeWidth,
                        A = s.mediumWidth,
                        F = s.smallWidth,
                        g = s.extraSmallWidth,
                        h = s.extraLargeHeight,
                        v = s.largeHeight,
                        p = s.mediumHeight,
                        f = s.smallHeight,
                        B = s.extraSmallHeight,
                        C = { extraLarge: h, large: v, medium: p, small: f, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && l) return t;
                        if (u.large && o) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && E) return (0, r.H)(t, u, C);
                        if (u.largeWidth && _) return (0, r.H)(t, u, C);
                        if (u.mediumWidth && A) return (0, r.H)(t, u, C);
                        if (u.smallWidth && F) return (0, r.H)(t, u, C);
                        if (u.extraSmallWidth && g) return (0, r.H)(t, u, C);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && v) return t;
                            if (u.mediumHeight && p) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && B) return t;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, n.memo)(s);
            },
            7382: (e, t, u) => {
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                u.d(t, { YN: () => n.Y });
                u(6010), u(1039);
                var n = u(3495);
            },
            1043: (e, t, u) => {
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                var n;
                function r(e, t, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => r }),
                    (function (e) {
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
                    })(n || (n = {}));
            },
            2773: (e, t, u) => {
                u.d(t, { $Q: () => v });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    i = u(1856),
                    s = u(3815),
                    l = u(560),
                    o = u(7727),
                    c = u(6179),
                    d = u.n(c),
                    m = u(6358),
                    E = u(372);
                const _ = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    g = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    v = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = F, onDrag: n = g }) => {
                        const v = (0, c.useRef)(null),
                            p = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            D = e.stepTimeout || 100,
                            b = (0, c.useState)(A),
                            w = b[0],
                            k = b[1],
                            S = (0, c.useCallback)(
                                (e) => {
                                    k(e),
                                        C.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: C.current });
                                },
                                [n],
                            ),
                            y = () => {
                                const t = B.current,
                                    u = C.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    l = (0, a.u)(0, 1, i / (r - n)),
                                    o = (t.offsetWidth - h(t, s)) * l;
                                (u.style.transform = `translateX(${0 | o}px)`),
                                    ((e) => {
                                        if (p.current && f.current && B.current && C.current) {
                                            if (0 === e)
                                                return p.current.classList.add(_), void f.current.classList.remove(_);
                                            if (
                                                ((t = B.current),
                                                (u = C.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return p.current.classList.remove(_), void f.current.classList.add(_);
                                            var t, u;
                                            p.current.classList.remove(_), f.current.classList.remove(_);
                                        }
                                    })(o);
                            },
                            N = (0, s.z)(() => {
                                (() => {
                                    const t = C.current,
                                        u = B.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const a = Math.min(1, n / r);
                                    (t.style.width = `${h(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        v.current &&
                                            (1 === a
                                                ? v.current.classList.add(E.Z.base__nonActive)
                                                : v.current.classList.remove(E.Z.base__nonActive));
                                })(),
                                    y();
                            });
                        (0, c.useEffect)(() => (0, i.v)(N)),
                            (0, c.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            y();
                                        };
                                        let u = g;
                                        const n = () => {
                                            u(), (u = (0, i.v)(N));
                                        };
                                        return (
                                            e.events.on('recalculateContent', N),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', N),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = B.current,
                                            i = C.current;
                                        if (!r || !a || !i) return;
                                        const s = t.screenX - w.offset - a.getBoundingClientRect().x,
                                            l = (s / a.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: l });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), S(A);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, w.offset, w.pending, n, S]);
                        const x = (0, l.B)((t) => e.applyStepTo(t), D, [e]),
                            T = x[0],
                            L = x[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const R = (e) => {
                            e.target.classList.contains(_) || (0, o.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(E.Z.base, t.base), ref: v, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(E.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, o.G)('play'), T(m.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: p,
                                onMouseEnter: R,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = C.current;
                                        if (n && 0 === t.button)
                                            if (((0, o.G)('play'), t.target === n))
                                                S({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = C.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: B,
                                    onMouseEnter: R,
                                },
                                d().createElement('div', { ref: C, className: r()(E.Z.thumb, t.thumb) }),
                                d().createElement('div', { className: r()(E.Z.rail, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(E.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, o.G)('play'), T(m.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: f,
                                onMouseEnter: R,
                            }),
                        );
                    });
            },
            2840: (e, t, u) => {
                u.d(t, { K: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    i = u.n(a),
                    s = u(2773),
                    l = u(7950),
                    o = u(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(o.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(o.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(o.Z.defaultScrollArea, c) },
                            i().createElement(l.Area, { className: m, api: F, classNames: d }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: t, onDrag: _, classNames: A }),
                    );
                };
            },
            7950: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        Area: () => E,
                        Bar: () => l.$Q,
                        DefaultScroll: () => o.K,
                        Direction: () => m.Nm,
                        defaultSettings: () => m.he,
                        useHorizontalScrollApi: () => m.T5,
                    });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(6179),
                    s = u.n(i),
                    l = u(2773),
                    o = u(2840),
                    c = u(4682),
                    d = u(8579),
                    m = u(6358);
                const E = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(c.Z.base, t) },
                        s().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == u ? void 0 : u.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (E.Bar = l.$Q), (E.Default = o.K), (E.SeniorityAwards = d.Tm);
            },
            8579: (e, t, u) => {
                u.d(t, { Tm: () => o });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(6179),
                    s = u.n(i),
                    l = (u(2773), u(2840), u(4682));
                u(6358);
                const o = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(l.Z.base, t) },
                        s().createElement(
                            'div',
                            { className: r()(l.Z.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                            s().createElement(
                                'div',
                                { className: r()(l.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            },
            6358: (e, t, u) => {
                u.d(t, { Nm: () => n.Nm, T5: () => r, he: () => n.he });
                var n = u(7308);
                const r = (0, n.EO)({
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
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, u) => {
                u.d(t, { $Q: () => p });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    i = u(1856),
                    s = u(3815),
                    l = u(560),
                    o = u(7727),
                    c = u(6179),
                    d = u.n(c),
                    m = u(7701),
                    E = u(9168);
                const _ = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    g = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    v = (e, t) => Math.max(20, e.offsetHeight * t),
                    p = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = g, onDrag: n = A }) => {
                        const p = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, c.useState)(F),
                            k = w[0],
                            S = w[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    S(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            N = (0, s.z)(() => {
                                const t = D.current,
                                    u = C.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${v(u, a)}px`),
                                    t.classList.add(E.Z.thumb),
                                    p.current &&
                                        (1 === a
                                            ? p.current.classList.add(E.Z.base__nonActive)
                                            : p.current.classList.remove(E.Z.base__nonActive)),
                                    a
                                );
                            }),
                            x = (0, s.z)(() => {
                                const t = C.current,
                                    u = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    l = (0, a.u)(0, 1, i / (r - n)),
                                    o = (t.offsetHeight - v(t, s)) * l;
                                (u.style.transform = `translateY(${0 | o}px)`),
                                    ((e) => {
                                        if (f.current && B.current && C.current && D.current) {
                                            if (0 === e)
                                                return f.current.classList.add(_), void B.current.classList.remove(_);
                                            if (
                                                ((t = C.current),
                                                (u = D.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return f.current.classList.remove(_), void B.current.classList.add(_);
                                            var t, u;
                                            f.current.classList.remove(_), B.current.classList.remove(_);
                                        }
                                    })(o);
                            }),
                            T = (0, s.z)(() => {
                                h(e, () => {
                                    N(), x();
                                });
                            });
                        (0, c.useEffect)(() => (0, i.v)(T)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        x();
                                    });
                                };
                                let u = A;
                                const n = () => {
                                    u(), (u = (0, i.v)(T));
                                };
                                return (
                                    e.events.on('recalculateContent', T),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', T),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!k.pending) return;
                                const t = (t) => {
                                        h(e, (u) => {
                                            const r = C.current,
                                                a = D.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = t.screenY - k.offset - r.getBoundingClientRect().y,
                                                l = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: l });
                                        });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), y(F);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, k.offset, k.pending, n, y]);
                        const L = (0, l.B)((t) => e.applyStepTo(t), b, [e]),
                            R = L[0],
                            I = L[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', I, !0),
                                () => document.removeEventListener('mouseup', I, !0)
                            ),
                            [I],
                        );
                        const P = (e) => {
                            e.target.classList.contains(_) || (0, o.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(E.Z.base, t.base), ref: p, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(E.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, o.G)('play'), R(m.Nm.Next));
                                },
                                ref: f,
                                onMouseEnter: P,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = D.current;
                                        if (n && 0 === t.button)
                                            if (((0, o.G)('play'), t.target === n))
                                                y({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    D.current &&
                                                        h(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: C,
                                    onMouseEnter: P,
                                },
                                d().createElement('div', { ref: D, className: t.thumb }),
                                d().createElement('div', { className: r()(E.Z.rail, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(E.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, o.G)('play'), R(m.Nm.Prev));
                                },
                                onMouseUp: I,
                                ref: B,
                                onMouseEnter: P,
                            }),
                        );
                    });
            },
            1158: (e, t, u) => {
                u.d(t, { K: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    i = u.n(a),
                    s = u(6225),
                    l = u(9605),
                    o = u(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(o.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(o.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(o.Z.area, c) },
                            i().createElement(l.Area, { className: d, classNames: m, api: F }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: t, onDrag: _, classNames: A }),
                    );
                };
            },
            9605: (e, t, u) => {
                u.r(t),
                    u.d(t, { Area: () => m, Bar: () => l.$Q, Default: () => o.K, useVerticalScrollApi: () => c.c4 });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(6179),
                    s = u.n(i),
                    l = u(6225),
                    o = u(1158),
                    c = u(7701),
                    d = u(5636);
                const m = ({ className: e, classNames: t, children: u, api: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(d.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            u,
                        ),
                    )
                );
                m.Default = o.K;
            },
            7701: (e, t, u) => {
                u.d(t, { Nm: () => n.Nm, c4: () => r });
                var n = u(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, t, u) => {
                u.d(t, { EO: () => _, Nm: () => m, he: () => E });
                var n = u(7515),
                    r = u(1856),
                    a = u(3138),
                    i = u(4532),
                    s = u(9653),
                    l = u(3815),
                    o = u(4489),
                    c = u(6179),
                    d = u(7030);
                let m;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(m || (m = {}));
                const E = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _ = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: m,
                        getWrapperSize: _,
                        triggerMouseMoveOnUpdate: A = !1,
                    }) => {
                        const F = (e, u) => {
                            const r = t(e),
                                a = r[0],
                                i = r[1];
                            return (0, n.u)(a, i, u);
                        };
                        return (n = {}) => {
                            const g = n.settings,
                                h = void 0 === g ? E : g,
                                v = (0, c.useRef)(null),
                                p = (0, c.useRef)(null),
                                f = (0, s.q)(),
                                B = (0, o.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                C = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = v.current;
                                        t && (u(t, e), f.trigger('change', e), A && B());
                                    },
                                    onRest: (e) => f.trigger('rest', e),
                                    onStart: (e) => f.trigger('start', e),
                                    onPause: (e) => f.trigger('pause', e),
                                })),
                                D = C[0],
                                b = C[1],
                                w = (0, c.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return F(e, t * u + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                k = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = v.current;
                                        n &&
                                            b.start({
                                                scrollPosition: F(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: h.animationConfig,
                                                from: { scrollPosition: F(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [b, h.animationConfig, D.scrollPosition],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        const t = v.current,
                                            u = p.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return _(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, h.step),
                                            r = w(t, e, n);
                                        k(r);
                                    },
                                    [k, w, h.step],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && S(m(e)),
                                            v.current && f.trigger('mouseWheel', e, D.scrollPosition, t(v.current));
                                    },
                                    [D.scrollPosition, S, f],
                                ),
                                N = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (k(F(e, D.scrollPosition.goal), { immediate: !0 }),
                                                f.trigger('resizeHandled'));
                                        }),
                                    [k, D.scrollPosition.goal],
                                ),
                                x = (0, l.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const t = F(e, D.scrollPosition.goal);
                                    t !== D.scrollPosition.goal && k(t, { immediate: !0 }),
                                        f.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', N),
                                    () => {
                                        window.removeEventListener('resize', N);
                                    }
                                ),
                                [N],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (p.current ? _(p.current) : void 0),
                                    getContainerSize: () => (v.current ? e(v.current) : void 0),
                                    getBounds: () =>
                                        v.current
                                            ? t(v.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: h.step.clampedArrowStepTimeout,
                                    clampPosition: F,
                                    handleMouseWheel: y,
                                    applyScroll: k,
                                    applyStepTo: S,
                                    contentRef: v,
                                    wrapperRef: p,
                                    scrollPosition: b,
                                    animationScroll: D,
                                    recalculateContent: x,
                                    events: { on: f.on, off: f.off },
                                }),
                                [D.scrollPosition, k, S, f.off, f.on, x, y, b, h.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, u) => {
                u.d(t, { X: () => r });
                var n = u(7950);
                const r = { Vertical: u(9605), Horizontal: n };
            },
            7078: (e, t, u) => {
                u.d(t, { t: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(2056);
                const i = ['children'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, i);
                    return r().createElement(
                        a.u,
                        s(
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
            },
            3415: (e, t, u) => {
                u.d(t, { l: () => o });
                var n = u(6179),
                    r = u.n(n),
                    a = u(7078),
                    i = u(6373),
                    s = u(2056);
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
                const o = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, n);
                    const o = t.contentId,
                        c = t.args,
                        d = null == c ? void 0 : c.contentId;
                    return o || d
                        ? r().createElement(s.u, l({}, t, { contentId: o || d }), n)
                        : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                u.d(t, { i: () => o });
                var n = u(2056),
                    r = u(6179),
                    a = u.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, i);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: o, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, o, c, m]);
                        return a().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                E,
                            ),
                            t,
                        );
                        var A;
                    };
            },
            2056: (e, t, u) => {
                u.d(t, { u: () => o });
                var n = u(7902),
                    r = u(4179),
                    a = u(6179);
                const i = [
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
                const l = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    o = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            E = e.ignoreShowDelay,
                            _ = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            g = e.decoratorId,
                            h = void 0 === g ? 0 : g,
                            v = e.isEnabled,
                            p = void 0 === v || v,
                            f = e.targetId,
                            B = void 0 === f ? 0 : f,
                            C = e.onShow,
                            D = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, a.useMemo)(() => B || (0, n.F)().resId, [B]),
                            S = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (l(u, h, { isMouseEvent: !0, on: !0, arguments: s(r) }, k),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [u, h, r, k, C]),
                            y = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        l(u, h, { on: !1 }, k),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, h, k, D]),
                            N = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === p && y();
                            }, [p, y]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return p
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(S, _ ? 100 : 400)),
                                                      o && o(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === F && y(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === F && y(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var x;
                    };
            },
            7515: (e, t, u) => {
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1856: (e, t, u) => {
                u.d(t, { v: () => n });
                const n = (e) => {
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
            },
            8246: (e, t, u) => {
                u.d(t, { U: () => s });
                var n = u(3138);
                function r(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return a(e, t);
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
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = i, context: a = 'model' } = {}) {
                    const s = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = s.get(t);
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
                            const i = 'string' == typeof r ? `${a}.${r}` : a,
                                l = n.O.view.addModelObserver(i, t, !0);
                            return s.set(l, u), e && u(o(r)), l;
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
                            for (var e, u = r(s.keys()); !(e = u()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, u) => {
                u.d(t, { q: () => l });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    i = u.n(a),
                    s = u(8246);
                const l = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: o, children: c, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                E = (u, a, i) => {
                                    var l;
                                    const o = s.U(a),
                                        c =
                                            'real' === u
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (l = null == i ? void 0 : i.getter) ? l : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        E = (e) => m.current.push(e),
                                        _ = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
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
                                                            i = Object.entries(a),
                                                            s = i.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, u]) => {
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
                                            cleanup: E,
                                        }),
                                        A = { mode: u, model: _, externalModel: c, cleanup: E };
                                    return {
                                        model: _,
                                        controls: 'mocks' === u && i ? i.controls(A) : t(A),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                A = (0, a.useState)(l),
                                F = A[0],
                                g = A[1],
                                h = (0, a.useState)(() => E(l, o, d)),
                                v = h[0],
                                p = h[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? p(E(F, o, d)) : (_.current = !0);
                                }, [d, F, o]),
                                (0, a.useEffect)(() => {
                                    g(l);
                                }, [l]),
                                (0, a.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                i().createElement(u.Provider, { value: v }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                u.r(t), u.d(t, { mouse: () => s, onResize: () => a });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        s = i[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, l),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, l),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => D,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => B,
                        isFocused: () => p,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    i = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function _(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => o });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    o = {
                        close(e) {
                            l('popover' === e ? r : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                u.d(t, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                u.d(t, { F: () => n });
                const n = (e = 1) => {
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
                };
            },
            6536: (e, t, u) => {
                u.d(t, { Z: () => r });
                var n = u(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, u) => {
                u.d(t, { M: () => r });
                var n = u(6179);
                const r = (e, t = []) => {
                    const u = (0, n.useRef)(),
                        r = (0, n.useCallback)((...t) => {
                            u.current && u.current(), (u.current = e(...t));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                u.current && u.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            9653: (e, t, u) => {
                u.d(t, { q: () => i });
                var n = u(6179);
                function r(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return a(e, t);
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
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const i = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        a = (e, u) => {
                            t(e).delete(u);
                        },
                        i = (e, ...u) => {
                            for (var n, a = r(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: u, off: a, trigger: i }), []);
                };
            },
            3815: (e, t, u) => {
                u.d(t, { z: () => a });
                var n = u(6179);
                const r = [];
                function a(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), r)
                    );
                }
            },
            5415: (e, t, u) => {
                u.d(t, { GS: () => o, cJ: () => i });
                var n = u(6179),
                    r = u(7739),
                    a = u(1043);
                let i, s, l;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const o = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        o = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return l.ExtraLarge;
                                case e.largeHeight:
                                    return l.Large;
                                case e.mediumHeight:
                                    return l.Medium;
                                case e.smallHeight:
                                    return l.Small;
                                case e.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: o, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            560: (e, t, u) => {
                u.d(t, { B: () => r });
                var n = u(6179);
                function r(e, t, u = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), u || []);
                    (0, n.useEffect)(() => a, [a]);
                    const i = (null != u ? u : []).concat([t]);
                    return [
                        (0, n.useCallback)((u) => {
                            (r.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, i),
                        a,
                    ];
                }
            },
            4419: (e, t, u) => {
                u.d(t, { y: () => a });
                var n = u(8045),
                    r = u(6179);
                const a = (e, t, u = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const u = e[0];
                            t && t(u);
                        },
                        [t],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !u) return;
                        const t = new n.Z((e) => a(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [a, u, e]);
                };
            },
            4489: (e, t, u) => {
                u.d(t, { f: () => a });
                var n = u(5139),
                    r = u(6179);
                function a(e, t, u) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
            },
            5521: (e, t, u) => {
                let n, r;
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
                    })(r || (r = {}));
            },
            9480: (e, t, u) => {
                u.d(t, { UI: () => n });
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
            },
            4385: (e, t, u) => {
                u.d(t, { K: () => n });
                const n = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
            },
            1612: (e, t, u) => {
                u.d(t, { h: () => r });
                var n = u(9174);
                function r(e) {
                    const t = {};
                    for (const u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            const r = e[u];
                            t[u] = (0, n.aD)(r);
                        }
                    return t;
                }
            },
            9690: (e, t, u) => {
                u.d(t, { HG: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
                        a
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = r.length - 1; u >= 0; u--) for (; e >= r[u]; ) (t += n[u]), (e -= r[u]);
                                  return t;
                              })(e);
            },
            7727: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { $: () => r, G: () => n });
                const r = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, t, u) => {
                let n;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function a(e) {
                    return e.replace(/-/g, '_');
                }
                u.d(t, { BN: () => a, Eg: () => s, uF: () => r, z4: () => i }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e) => e.replace(/&zwnbsp;/g, '\ufeff');
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
            },
            5139: (e, t, u) => {
                function n(e, t, u, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function l(...l) {
                        const o = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), u.apply(o, l);
                        }
                        a ||
                            (n && !r && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (l.cancel = function () {
                            s(), (a = !0);
                        }),
                        l
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                u.d(t, { B0: () => l, ry: () => h });
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
                const r = n;
                var a = u(1358);
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    _ = u(3138);
                const A = ['args'];
                function F(e, t, u, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function i(e) {
                                            F(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    p = () => v(l.CLOSE),
                    f = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var B = u(7572);
                const C = r.instance,
                    D = {
                        DataTracker: a.Z,
                        ViewModel: B.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => v(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                o = s.x,
                                c = s.y,
                                d = s.width,
                                m = s.height,
                                E = {
                                    x: _.O.view.pxToRem(o) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: v,
                        onBindingsReady: h,
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
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = D;
            },
            3618: (e, t, u) => {
                u.d(t, { w: () => E });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3415),
                    i = u(4419),
                    s = u(6179),
                    l = u.n(s),
                    o = u(6143),
                    c = u(3310),
                    d = u(131),
                    m = u(9053);
                const E = l().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: _ = !1,
                        targetId: A,
                        justifyContent: F = m.v2.FlexStart,
                        alignContent: g = m.v2.FlexStart,
                        truncateIdentify: h = m.YA,
                    }) => {
                        const v = (0, s.useRef)(null),
                            p = (0, s.useRef)({ height: 0, width: 0 }),
                            f = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            B = f[0],
                            C = f[1],
                            D = (0, s.useMemo)(() => (0, c.s)(e, n), [n, e]),
                            b = (0, s.useMemo)(() => {
                                if (E && B.isTruncated)
                                    return {
                                        args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: A,
                                    };
                            }, [n, E, A, e, B.isTruncated]),
                            w = (0, s.useCallback)(
                                (e) => {
                                    (p.current.width = e.contentRect.width), (p.current.height = e.contentRect.height);
                                    const t = (0, d.T)(v, D, p.current, h),
                                        n = t[0],
                                        r = t[1];
                                    C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                },
                                [u, h, D],
                            ),
                            k = (0, s.useMemo)(() => ({ justifyContent: F, alignContent: g }), [g, F]);
                        return (
                            (0, i.y)(v, w, _),
                            l().createElement(
                                'div',
                                {
                                    className: r()(
                                        o.Z.base,
                                        t,
                                        o.Z.base__zeroPadding,
                                        _ && o.Z.base__isTruncationAvailable,
                                    ),
                                    style: k,
                                },
                                l().createElement('div', { className: o.Z.unTruncated, ref: v }, D),
                                l().createElement(
                                    a.l,
                                    { tooltipArgs: b },
                                    l().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                o.Z.truncated,
                                                !B.isTruncateFinished && _ && o.Z.truncated__hide,
                                            ),
                                            style: k,
                                        },
                                        B.isTruncateFinished && _ ? B.elementList : D,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                u.d(t, { s: () => d });
                var n = u(3649),
                    r = u(6799),
                    a = u(6960),
                    i = u(9053);
                const s = (e) => {
                        const t = /[\s\u002d]/g;
                        let u = t.exec(e);
                        if (!u) return [e];
                        const n = [];
                        let r = 0;
                        for (; u; ) n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (u = t.exec(e));
                        return r !== e.length && n.push(e.slice(r)), n;
                    },
                    l = (e, t = '') => {
                        const u = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: i.kH.Word, colorTag: t, childList: s(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = i.aF[n.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : u.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            u
                        );
                    },
                    o = (e, t, u = '') => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...l(e, u));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...l(String(a), u))
                                        : n.push({ blockType: i.kH.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    d = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...c(t.pop(), e)))
                                        : (u ? t.push(...c(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...o(e, t));
                                        },
                                        (e) => {
                                            u.push(...o(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t),
                        );
                        return (0, r.w)(u);
                    };
            },
            6799: (e, t, u) => {
                u.d(t, { w: () => i });
                var n = u(597),
                    r = u(9053);
                const a = (e, t, u) => {
                        const i = [];
                        return (
                            e.childList.forEach((s, l) => {
                                const o = `${u}_${l}`;
                                if ((0, r.dz)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        r = a(e, u, o);
                                    i.push(...r);
                                } else i.push(t({ elementList: [s], textBlock: e, key: o }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            i = e.blockType,
                                            s = n.IY[i],
                                            l = a(e, s, t);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? u.push(s({ elementList: l, textBlock: e, key: `${t}` }))
                                                : u.push(...l),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = (e, t, u, n) => {
                    let r = t.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                    a !== e.length && u(e.slice(a));
                };
            },
            131: (e, t, u) => {
                u.d(t, { T: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(9053);
                const i = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    s = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    l = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = s(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const l = Math.max(u + i, 0);
                        return r < l ? [!1, 0] : [!0, l];
                    },
                    o = (e, t, u, n, i, s) => {
                        let c = -1,
                            d = null;
                        for (let m = u; m >= 0; m--) {
                            const u = e[m],
                                E = Number(e[m].getAttribute(a.bF));
                            if (E === a.kH.LineBreak || E === a.kH.NewLine || E === a.kH.Binding) continue;
                            const _ = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = l(u, n, i),
                                    a = e[0],
                                    o = e[1];
                                if (!a) {
                                    o > 0 && (i -= o);
                                    continue;
                                }
                                const E = _.slice(0, _.length - o) + s,
                                    A = t[m];
                                (d = r().cloneElement(A, A.props, E)), (c = m);
                                break;
                            }
                            {
                                const e = u.children,
                                    a = t[m],
                                    l = a.props.children,
                                    E = o(e, l, e.length - 1, n, i, s),
                                    A = E[0],
                                    F = E[1];
                                if (!(A < 0)) {
                                    const e = l.slice(0, A);
                                    (d = r().cloneElement(a, a.props, e, F)), (c = m);
                                    break;
                                }
                                i -= _.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, t, u, n = a.YA) => {
                        const r = [...t],
                            l = e.current;
                        if (!l) return [r, !1];
                        const c = u.height,
                            d = u.width,
                            m = l.lastElementChild;
                        if (!i(m, c) && s(m, d) <= 0) return [r, !1];
                        const E = l.children,
                            _ = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    i(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(E, c);
                        if (_ < 0) return [r, !1];
                        const A = o(E, r, _, d, n.length, n),
                            F = A[0],
                            g = A[1];
                        return g && (r.splice(F, 1, g), r.splice(F + 1)), [r, !0];
                    };
            },
            9053: (e, t, u) => {
                let n, r, a;
                u.d(t, { YA: () => s, aF: () => o, bF: () => l, dz: () => i, kH: () => n, v2: () => r }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(n || (n = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(r || (r = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(a || (a = {}));
                const i = (e) => void 0 !== e.childList,
                    s = '...',
                    l = 'data-block-type',
                    o = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak };
            },
            597: (e, t, u) => {
                u.d(t, { IY: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(9053),
                    i = u(9627),
                    s = u(7629);
                const l = (e) => ({ color: `#${e}` }),
                    o = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? i.Z[n]
                                ? r().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: i.Z[n] },
                                      e,
                                  )
                                : r().createElement('span', { key: u, 'data-block-type': t.blockType, style: l(n) }, e)
                            : r().createElement('span', { key: u, 'data-block-type': t.blockType }, e);
                    },
                    c = {
                        [a.kH.Word]: o,
                        [a.kH.NoBreakSymbol]: o,
                        [a.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: u }, e)),
                            ),
                        [a.kH.LineBreak]: ({ key: e }) =>
                            r().createElement('span', {
                                key: e,
                                'data-block-type': a.kH.LineBreak,
                                className: s.Z.lineBreak,
                            }),
                        [a.kH.NewLine]: ({ elementList: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': a.kH.NewLine, className: s.Z.newLine },
                                e,
                            ),
                        [a.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': a.kH.NoBreakWrapper, className: s.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            3458: (e, t, u) => {
                let n;
                u.d(t, { Z0: () => r, in: () => n, sx: () => a }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const r = 'tooltip_watched',
                    a = 2;
                let i;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(i || (i = {}));
            },
            4828: (e, t, u) => {
                u.d(t, { D9: () => n, eX: () => r, sC: () => a, sk: () => s });
                const n = 'crew';
                let r, a, i, s, l, o, c;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(r || (r = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(a || (a = {})),
                    (function (e) {
                        e.DocumentChange = 'document_change_dialog';
                    })(i || (i = {})),
                    (function (e) {
                        (e.PremiumTooltip = 'personal_file_view_premium_tooltip'),
                            (e.MstlTooltip = 'personal_file_view_mstl_tooltip');
                    })(s || (s = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.MstlTooltip = 'crew_widget_mstl_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(l || (l = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(o || (o = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(c || (c = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    a.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    a.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    a.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    a.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    a.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    a.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    a.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    a.QuickTraining;
            },
            1943: (e, t, u) => {
                u.d(t, { Sr: () => m });
                var n = u(6179),
                    r = u(3458);
                const a = ['action', 'timeLimit'];
                const i = 'metrics',
                    s = () => Date.now(),
                    l = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    o = (e, t) => {
                        const u = (0, n.useCallback)(
                            (u, n = r.in.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => u(e, t, n);
                    },
                    c = (e, t) => {
                        const u = o(e, t),
                            r = (0, n.useRef)(new Map()),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, s());
                                },
                                [r],
                            ),
                            l = (0, n.useCallback)(() => {
                                r.current.clear(), a.current.clear();
                            }, [r, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === a.current.get(e) &&
                                        a.current.set(e, s());
                                },
                                [r, a],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    a.current.delete(e);
                                    const n = s() - u;
                                    r.current.set(e, t + n);
                                },
                                [r, a],
                            ),
                            m = (0, n.useCallback)(
                                (e, t = 0, n, i) => {
                                    const l = r.current.get(e);
                                    if (void 0 === l) return;
                                    void 0 !== a.current.get(e) && d(e), r.current.delete(e);
                                    const o = (s() - l) / 1e3;
                                    o <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, o)),
                                        u(e, n, i));
                                },
                                [r, a, u, d],
                            );
                        return [(e) => i(e), (e, t, u, n) => m(e, t, u, n), () => l(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = c(e, i),
                            u = t[0],
                            r = t[1],
                            a = t[2],
                            s = t[3],
                            o = t[4],
                            d = (0, n.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        n = e.logLevel;
                                    r(t, u, n, l(e));
                                },
                                [r],
                            );
                        return [(e) => u(e), (e) => d(e), () => a(), (e) => s(e), (e) => o(e)];
                    },
                    m = (e, t) => {
                        const u = d(e),
                            i = u[0],
                            s = u[1],
                            l = t.action,
                            o = t.timeLimit,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(t, a);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => i(l || r.Z0),
                                onHide: () => s(Object.assign({ action: l || r.Z0, timeLimit: o || r.sx }, c)),
                            }),
                            [l, o, c, i, s],
                        );
                    };
            },
            7077: (e, t, u) => {
                u.d(t, { G: () => c, U: () => o });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    i = u(6179),
                    s = u.n(i),
                    l = u(3938);
                let o;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(o || (o = {}));
                const c = ({ name: e, size: t = o.c100x60, classMix: u, isSkin: n = !1 }) => {
                    const c = (0, i.useMemo)(() => {
                            try {
                                let u = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                                n && (u = u.$dyn('crewSkins'));
                                const r = u.$dyn((0, a.BN)(e));
                                if (!r) throw Error;
                                return { backgroundImage: `url(${r})` };
                            } catch (t) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, t, n]),
                        d = t === o.c204x256;
                    return s().createElement(
                        'div',
                        { style: c, className: r()(l.Z.base, l.Z[`base__${t}`], u) },
                        d && s().createElement('div', { className: l.Z.innerShadow }),
                    );
                };
            },
            8018: (e, t, u) => {
                u.d(t, { Gc: () => l, T3: () => a });
                var n = u(3649);
                const r = R.strings.common.percentValue(),
                    a = (e) => (0, n.uF)(r, { value: e });
                let i;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(i || (i = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let s;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(s || (s = {}));
                const l = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
            },
            3293: (e, t, u) => {
                u.d(t, { PERSONAL_FILE_VIEW_RES_ID: () => Pe });
                var n = u(6179),
                    r = u.n(n),
                    a = u(5415),
                    i = u(3403),
                    s = u(3215),
                    l = u(4598),
                    o = u(9480),
                    c = u(1612),
                    d = u(9174),
                    m = u(3946);
                const E = (0, s.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'skillsState',
                                        'selectAvailableSkillsCount',
                                        'isResetDisable',
                                        'isFemale',
                                        'hasIncreaseDiscount',
                                        'hasDropSkillDiscount',
                                        'isTankmanWithDescription',
                                        'isTankmanInVehicle',
                                    ]),
                                    {
                                        relevantGroupedSkills: e.array('relevantGroupedSkills'),
                                        irrelevantGroupedSkills: e.array('irrelevantGroupedSkills'),
                                        commonSkills: e.array('commonSkills'),
                                        isTTCVisible: d.LO.box(!1),
                                    },
                                ),
                                u = (e) => o.UI(e, (e) => Object.assign({}, e)),
                                n = (e) => o.UI(e, (e) => Object.assign({}, e, { skills: u(e.skills) })),
                                r = (0, m.Om)(() => n(t.relevantGroupedSkills.get()), { equals: l.jv }),
                                a = (0, m.Om)(() => n(t.irrelevantGroupedSkills.get()), { equals: l.jv }),
                                i = (0, m.Om)(() => u(t.commonSkills.get()), { equals: l.jv }),
                                s = (0, m.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get(), !0);
                            return Object.assign({}, t, {
                                computes: {
                                    relevantSkillsGroups: r,
                                    irrelevantSkillsGroups: a,
                                    commonSkills: i,
                                    isTTCVisible: s,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    increase: e.createCallbackNoArgs('onIncrease'),
                                    reset: e.createCallbackNoArgs('onReset'),
                                    hoverSkill: e.createCallback((e) => ({ skillId: e }), 'onHoverSkill'),
                                    leaveSkill: e.createCallback((e) => ({ skillId: e }), 'onLeaveSkill'),
                                    clickSkill: e.createCallback((e) => ({ skillId: e }), 'onClickSkill'),
                                },
                                (0, c.h)({ setTTCVisible: (e) => t.isTTCVisible.set(e) }),
                            ),
                    ),
                    _ = E[0],
                    A = E[1];
                var F = u(4022),
                    g = u(6483),
                    h = u.n(g),
                    v = u(2106),
                    p = u(6373),
                    f = u(3457);
                const B = 'ButtonWithDiscountIndicator_base_6c',
                    C = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    D = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    b = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const w = r().memo(function (e) {
                        let t = e.hasDiscount,
                            u = e.className,
                            n = e.children,
                            a = e.wrapperId,
                            i = e.isSmall,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, b);
                        return r().createElement(
                            'div',
                            { id: a, className: h()(B, u) },
                            r().createElement(f.u5, s, n),
                            t && r().createElement('div', { className: h()(C, i && D) }),
                        );
                    }),
                    k = 'Buttons_base_ec',
                    S = 'Buttons_increaseBtnContainer_e9',
                    y = 'Buttons_increaseButton_75',
                    N = 'Buttons_resetButton_0a',
                    x = 'Buttons_resetButton__disabled_b9',
                    T = 'Buttons_resetButton__small_fb',
                    L = 'Buttons_resetIcon_fa',
                    I = 'Buttons_buttonWrapper_de',
                    P = (0, i.Pi)(function ({ className: e, style: t }) {
                        const u = A(),
                            n = u.controls,
                            i = u.model,
                            s = (0, a.GS)().mediaSize,
                            l = i.isResetDisable.get(),
                            o = s === a.cJ.ExtraSmall || s === a.cJ.Small,
                            c = l
                                ? R.strings.crew.matrix.resetTooltip.disable
                                : R.strings.crew.matrix.resetTooltip.enable;
                        return r().createElement(
                            'div',
                            { className: h()(k, e), style: t },
                            r().createElement(
                                'div',
                                { className: I },
                                r().createElement(
                                    p.i,
                                    {
                                        header: R.strings.crew.matrix.increaseTooltip.enable.header(),
                                        body: R.strings.crew.matrix.increaseTooltip.enable.body(),
                                    },
                                    r().createElement(
                                        w,
                                        {
                                            onClick: () => n.increase(),
                                            type: v.L.ghost,
                                            mixClass: y,
                                            hasDiscount: i.hasIncreaseDiscount.get(),
                                            className: S,
                                        },
                                        R.strings.crew.matrix.increaseButton(),
                                    ),
                                ),
                            ),
                            r().createElement(
                                p.i,
                                { header: c.header(), body: c.body(), ignoreMouseClick: l },
                                r().createElement(
                                    'div',
                                    { className: I, id: 'matrix_drop_skills_btn' },
                                    r().createElement(
                                        w,
                                        {
                                            hasDiscount: i.hasDropSkillDiscount.get(),
                                            soundHover: l ? null : 'highlight',
                                            soundClick: l ? null : 'play',
                                            onClick: () => !l && n.reset(),
                                            type: v.L.ghost,
                                            mixClass: h()(N, l && x, o && T),
                                            disabled: l,
                                            isSmall: o,
                                        },
                                        o
                                            ? r().createElement('div', { className: L })
                                            : R.strings.crew.matrix.resetButton(),
                                    ),
                                ),
                            ),
                        );
                    });
                var M = u(7701);
                let O;
                !(function (e) {
                    (e.LearnAvailable = 'available'),
                        (e.Training = 'training'),
                        (e.Achieve = 'achieve'),
                        (e.ZeroSkills = 'zeroSkills'),
                        (e.AllSkills = 'allSkills');
                })(O || (O = {}));
                var H = u(3961);
                const W = 'SkillRoleIcon_base_6b',
                    V = 'SkillRoleIcon_base__irrelevant_22',
                    z = (0, i.Pi)(function ({ role: e, isIrrelevant: t, className: u }) {
                        const n = ((e, t, u) =>
                            e
                                ? R.strings.crew.matrix.irrelevantQualification.header()
                                : t
                                  ? R.strings.crew.matrix.skills.roles.female.$dyn(u)
                                  : R.strings.crew.matrix.skills.roles.$dyn(u))(t, A().model.isFemale.get(), e);
                        return r().createElement(
                            p.i,
                            { body: n },
                            r().createElement('div', {
                                style: {
                                    backgroundImage: `url(${t ? R.images.gui.maps.icons.tankmen.roles.c_30x30_red.$dyn(e) : R.images.gui.maps.icons.tankmen.roles.c_30x30.$dyn(e)})`,
                                },
                                className: h()(W, t && V, u),
                            }),
                        );
                    });
                var Z = u(4385),
                    j = u(5139);
                function U(e, t, u) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, t, u) {
                                return void 0 === u ? (0, j.Z)(e, t, !1) : (0, j.Z)(e, u, !1 !== t);
                            })(u, e),
                        t,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var G = u(7078),
                    $ = u(2603),
                    q = u(7727);
                const Y = {
                    base: 'SkillIcon_base_43',
                    base__small: 'SkillIcon_base__small_d0',
                    base__c22x22: 'SkillIcon_base__c22x22_e5',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c36x36_flat: 'SkillIcon_base__c36x36_flat_88',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let K;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(K || (K = {}));
                const X = r().memo(function ({ iconName: e, size: t = K.c24x24, className: u }) {
                    var n;
                    return r().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e)})`,
                        },
                        className: h()(Y.base, Y[`base__${t}`], u),
                    });
                });
                var Q = u(8018);
                const J = {
                    base: 'Skill_base_8e',
                    base__hover: 'Skill_base__hover_14',
                    base__inProgress: 'Skill_base__inProgress_d4',
                    base__clickable: 'Skill_base__clickable_6c',
                    progressBar: 'Skill_progressBar_2e',
                    stateBg: 'Skill_stateBg_7d',
                    base__learned: 'Skill_base__learned_34',
                    disabledPattern: 'Skill_disabledPattern_68',
                    progressText: 'Skill_progressText_df',
                    base__disabled: 'Skill_base__disabled_9d',
                    skillIcon: 'Skill_skillIcon_26',
                    skillName: 'Skill_skillName_dd',
                    zeroSkill: 'Skill_zeroSkill_b3',
                };
                let ee, te;
                !(function (e) {
                    (e.UnLearned = ''), (e.InProgress = 'inProgress'), (e.Learned = 'learned');
                })(ee || (ee = {})),
                    (function (e) {
                        (e.Default = ''), (e.Selectable = 'selectable'), (e.Disable = 'disable');
                    })(te || (te = {}));
                const ue = r().memo(function ({
                        skillId: e,
                        skillIcon: t,
                        skillUserName: u,
                        isZero: a,
                        skillProgress: i,
                        progressState: s,
                        onClick: l,
                        onHover: o,
                        onLeave: c,
                        skillState: d,
                        className: m,
                        canBeRelearnedAsZeroSkill: E,
                    }) {
                        const _ = (0, n.useState)(!1),
                            A = _[0],
                            F = _[1],
                            g = s === ee.InProgress,
                            v = d === te.Disable,
                            p = ((e, t, u) => {
                                switch (e) {
                                    case ee.UnLearned:
                                        return [t === te.Selectable, t !== te.Disable];
                                    case ee.InProgress:
                                        return [u, t !== te.Disable];
                                    case ee.Learned:
                                        return [u, u];
                                    default:
                                        return [!1, !1];
                                }
                            })(s, d, E),
                            f = p[0],
                            B = p[1],
                            C = (0, n.useCallback)(() => {
                                q.$.playHighlight(), F(!0), null == o || o();
                            }, [o]),
                            D = (0, n.useCallback)(() => {
                                F(!1), null == c || c();
                            }, [c]),
                            b = (0, n.useCallback)(() => {
                                q.$.playClick(), l(e);
                            }, [l, e]),
                            w = (0, n.useMemo)(() => ({ height: i + '%' }), [i]),
                            k = (0, n.useMemo)(() => ({ skillName: e, tooltipId: $.HZ }), [e]);
                        return r().createElement(
                            G.t,
                            { targetId: Pe, args: k, ignoreMouseClick: !0 },
                            r().createElement(
                                'div',
                                {
                                    onMouseEnter: B ? C : void 0,
                                    onMouseLeave: B ? D : void 0,
                                    onClick: f ? b : void 0,
                                    className: h()(
                                        J.base,
                                        J[`base__${s}`],
                                        A && J.base__hover,
                                        v ? J.base__disabled : f && J.base__clickable,
                                        m,
                                    ),
                                },
                                g && r().createElement('div', { style: w, className: J.progressBar }),
                                r().createElement('div', { className: J.stateBg }),
                                v && r().createElement('div', { className: J.disabledPattern }),
                                g && r().createElement('div', { className: J.progressText }, (0, Q.T3)(i)),
                                r().createElement(X, { iconName: t, size: K.c52x52, className: J.skillIcon }),
                                r().createElement('div', { className: J.skillName }, u),
                                a && r().createElement('div', { className: J.zeroSkill }),
                            ),
                        );
                    }),
                    ne = [
                        'isIrrelevant',
                        'className',
                        'skillId',
                        'skillProgress',
                        'isInProgress',
                        'isLockedByZeroPerks',
                    ];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ae = (0, i.Pi)(function (e) {
                        let t = e.isIrrelevant,
                            u = e.className,
                            a = e.skillId,
                            i = e.skillProgress,
                            s = e.isInProgress,
                            l = e.isLockedByZeroPerks,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ne);
                        const c = (0, n.useRef)(!1),
                            d = (0, n.useRef)(!1),
                            m = A(),
                            E = m.model,
                            _ = m.controls,
                            F = E.isTTCVisible.get(),
                            g = ((e, t, u, n) => {
                                switch (!0) {
                                    case t:
                                    case n:
                                        return te.Disable;
                                    case u:
                                        return te.Default;
                                    case e > 0:
                                        return te.Selectable;
                                    default:
                                        return te.Default;
                                }
                            })(E.selectAvailableSkillsCount.get(), t, s, l),
                            h = ((e, t) => {
                                switch (!0) {
                                    case 100 === e:
                                        return ee.Learned;
                                    case t:
                                        return ee.InProgress;
                                    default:
                                        return ee.UnLearned;
                                }
                            })(i, s),
                            v = U(
                                () => {
                                    c.current && ((d.current = !0), _.hoverSkill(a));
                                },
                                [a],
                                250,
                            ),
                            p = (0, n.useCallback)(() => {
                                (c.current = !0), v();
                            }, [v]),
                            f = (0, n.useCallback)(() => {
                                (c.current = !1), d.current && ((d.current = !1), _.leaveSkill(a));
                            }, [_, a]);
                        return r().createElement(
                            ue,
                            re({}, o, {
                                skillId: a,
                                onClick: _.clickSkill,
                                onHover: F ? p : void 0,
                                onLeave: F ? f : void 0,
                                skillState: g,
                                progressState: h,
                                skillProgress: i,
                                className: u,
                                canBeRelearnedAsZeroSkill:
                                    !t && !l && !o.isZero && E.skillsState.get() === O.ZeroSkills,
                            }),
                        );
                    }),
                    ie = 'SkillsRow_base_1e',
                    se = 'SkillsRow_skill_df',
                    le = 'SkillsRow_emptySkill_b5';
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const ce = ({ skills: e, isIrrelevant: t, className: u, isLockedByZeroPerks: n }) =>
                        r().createElement(
                            'div',
                            { className: h()(ie, u) },
                            o.UI(e, (e) =>
                                r().createElement(
                                    ae,
                                    oe({ key: e.skillId }, e, {
                                        isIrrelevant: t,
                                        className: se,
                                        isLockedByZeroPerks: n,
                                    }),
                                ),
                            ),
                            (0, Z.K)(6 - e.length, (e) => r().createElement('div', { className: le, key: e })),
                        ),
                    de = 'SkillsGroup_base_1e',
                    me = 'SkillsGroup_title_5c',
                    Ee = 'SkillsGroup_qualificationContainer_18',
                    _e = 'SkillsGroup_alertIcon_77',
                    Ae = 'SkillsGroup_qualification_90',
                    Fe = 'SkillsGroup_qualification__locked_57',
                    ge = 'SkillsGroup_container_04',
                    he = 'SkillsGroup_rowsContainer_a3',
                    ve = 'SkillsGroup_row_ad',
                    pe = 'SkillsGroup_roleIcon_b0';
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const Be = ({
                        group: e,
                        qualificationNumber: t,
                        isIrrelevant: u,
                        additionalSkills: n,
                        className: a,
                        isLockedByZeroPerks: i = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: h()(de, a) },
                            r().createElement(
                                'div',
                                { className: me },
                                i
                                    ? r().createElement(
                                          'div',
                                          { className: Ee },
                                          r().createElement('div', { className: _e }),
                                          r().createElement(
                                              'div',
                                              { className: h()(Ae, Fe) },
                                              R.strings.crew.matrix.qualification.lockByZeroPerks.$num(t),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: Ae },
                                          R.strings.crew.matrix.qualification.$num(t),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: ge },
                                r().createElement(z, fe({}, e, { isIrrelevant: u, className: pe })),
                                r().createElement(
                                    'div',
                                    { className: he },
                                    n &&
                                        r().createElement(ce, {
                                            skills: n,
                                            isIrrelevant: u,
                                            className: ve,
                                            isLockedByZeroPerks: i,
                                        }),
                                    r().createElement(
                                        ce,
                                        fe({}, e, { isIrrelevant: u, className: ve, isLockedByZeroPerks: i }),
                                    ),
                                ),
                            ),
                        ),
                    Ce = 'SkillsGroupsList_base_1d',
                    De = 'SkillsGroupsList_base__manyRoles_ba',
                    be = 'SkillsGroupsList_scroll_e3',
                    we = 'SkillsGroupsList_group_ed',
                    ke = (0, i.Pi)(() => {
                        const e = A().model,
                            t = e.computes.relevantSkillsGroups(),
                            u = e.computes.irrelevantSkillsGroups(),
                            a = (0, M.c4)();
                        (0, n.useEffect)(() => {
                            a.recalculateContent();
                        }, [t, u, a]);
                        const i = t.length + u.length >= 2;
                        return r().createElement(
                            'div',
                            { className: h()(Ce, i && De) },
                            r().createElement(
                                H.z,
                                { className: be },
                                r().createElement(
                                    'div',
                                    { id: 'matrix_skills_list' },
                                    o.UI(t, (t, u) =>
                                        r().createElement(Be, {
                                            key: `relevantGroup_${u}`,
                                            group: t,
                                            qualificationNumber: u + 1,
                                            isIrrelevant: !1,
                                            className: we,
                                            additionalSkills: 0 === u ? e.commonSkills.get() : void 0,
                                            isLockedByZeroPerks: e.skillsState.get() === O.ZeroSkills && u > 0,
                                        }),
                                    ),
                                    o.UI(u, (e, u) =>
                                        r().createElement(Be, {
                                            key: `irrelevantGroup_${u}`,
                                            group: e,
                                            qualificationNumber: t.length + u + 1,
                                            isIrrelevant: !0,
                                            className: we,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Se = u(2056);
                const ye = {
                        base: 'SkillsStateInfo_base_de',
                        state: 'SkillsStateInfo_state_56',
                        state__achieve: 'SkillsStateInfo_state__achieve_e8',
                        state__allSkills: 'SkillsStateInfo_state__allSkills_a6',
                        state__training: 'SkillsStateInfo_state__training_60',
                        countContainer: 'SkillsStateInfo_countContainer_da',
                        count: 'SkillsStateInfo_count_87',
                        skillIcon: 'SkillsStateInfo_skillIcon_e2',
                        spinGlow: 'SkillsStateInfo_spinGlow_23',
                        rotation: 'SkillsStateInfo_rotation_58',
                    },
                    Ne = (0, i.Pi)(({ className: e }) => {
                        const t = A().model,
                            u = t.selectAvailableSkillsCount.get(),
                            n = t.skillsState.get();
                        return r().createElement(
                            'div',
                            { className: h()(ye.base, e) },
                            r().createElement(
                                'div',
                                { className: h()(ye.state, ye[`state__${n}`]) },
                                R.strings.crew.matrix.skills.$dyn(n),
                            ),
                            u > 0 &&
                                r().createElement(
                                    'div',
                                    { className: ye.countContainer },
                                    r().createElement('div', { className: ye.count }, u),
                                    r().createElement(
                                        Se.u,
                                        {
                                            targetId: Pe,
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ye.skillIcon },
                                            r().createElement('div', { className: ye.spinGlow }),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    xe = 'SkillsMatrix_base_2a',
                    Te = 'SkillsMatrix_topContainer_09',
                    Le = 'SkillsMatrix_skillsStateInfo_2e',
                    Re = () =>
                        r().createElement(
                            'div',
                            { className: xe },
                            r().createElement(
                                'div',
                                { className: Te },
                                r().createElement(Ne, { className: Le }),
                                r().createElement(P, null),
                            ),
                            r().createElement(ke, null),
                        ),
                    Ie = (0, i.Pi)(({ setTTCVisibility: e }) => {
                        const t = (0, a.GS)().mediaSize,
                            u = A(),
                            i = u.model,
                            s = u.controls,
                            l = i.computes.isTTCVisible();
                        return (
                            (0, n.useEffect)(() => {
                                s.setTTCVisible(t >= a.cJ.Small), e && e(l);
                            }, [s, l, t, e]),
                            r().createElement(F.d, { isLoggingEnabled: !0 }, r().createElement(Re, null))
                        );
                    }),
                    Pe = R.views.lobby.crew.personal_case.PersonalFileView('resId');
                r().memo(({ setTTCVisibility: e }) =>
                    r().createElement(_, { options: { rootId: Pe } }, r().createElement(Ie, { setTTCVisibility: e })),
                );
            },
            3961: (e, t, u) => {
                u.d(t, { z: () => A });
                var n = u(6483),
                    r = u.n(n),
                    a = u(794),
                    i = u(7701),
                    s = u(6179),
                    l = u.n(s);
                const o = 'ScrollWithLips_base_81',
                    c = 'ScrollWithLips_fadeTop_3d',
                    d = 'ScrollWithLips_fadeBottom_44',
                    m = 'ScrollWithLips_bar_52',
                    E = 'ScrollWithLips_content_fb';
                let _;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(_ || (_ = {}));
                const A = ({ children: e, className: t, classNames: u }) => {
                    const n = (0, s.useState)(_.None),
                        A = n[0],
                        F = n[1],
                        g = A === _.Both,
                        h = (0, i.c4)();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = h.getBounds()[1],
                                    t = h.animationScroll.scrollPosition.get();
                                0 === e
                                    ? F(_.None)
                                    : t > 1 && t < e - 21
                                      ? F(_.Both)
                                      : t <= 1
                                        ? F(_.Bottom)
                                        : t >= e - 21 && F(_.Top);
                            };
                            return (
                                h.events.on('change', e),
                                h.events.on('resizeHandled', e),
                                h.events.on('recalculateContent', e),
                                () => {
                                    h.events.off('change', e),
                                        h.events.off('resizeHandled', e),
                                        h.events.off('recalculateContent', e);
                                }
                            );
                        }, [h]),
                        l().createElement(
                            'div',
                            { className: r()(o, t) },
                            l().createElement(
                                a.X.Vertical.Default,
                                {
                                    api: h,
                                    barClassNames: { base: r()(m, null == u ? void 0 : u.bar) },
                                    scrollClassNames: { content: E },
                                },
                                e,
                            ),
                            (A === _.Top || g) && l().createElement('div', { className: c }),
                            (A === _.Bottom || g) && l().createElement('div', { className: d }),
                        )
                    );
                };
            },
            4022: (e, t, u) => {
                u.d(t, { d: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(3055);
                const i = 'TankmanInfoWrapper_base_5a',
                    s = 'TankmanInfoWrapper_content_b4',
                    l = 'TankmanInfoWrapper_tankmanInfo_80',
                    o = 'TankmanInfoWrapper_children_66',
                    c = ({ children: e, isLoggingEnabled: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: i },
                            r().createElement(
                                'div',
                                { className: s },
                                r().createElement(a.JW, { className: l, isLoggingEnabled: t }),
                                r().createElement('div', { className: o }, e),
                            ),
                        );
            },
            3055: (e, t, u) => {
                u.d(t, { Zk: () => qe, zn: () => $e, JW: () => Ye });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    i = u.n(a),
                    s = u(3403),
                    l = u(3618),
                    o = u(3649),
                    c = u(7077);
                const d = 'TankmanFolder_base_00',
                    m = 'TankmanFolder_folder_f5',
                    E = 'TankmanFolder_photoFrame_ae',
                    _ = 'TankmanFolder_base__big_60',
                    A = 'TankmanFolder_icon_74',
                    F = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    g = r().memo(function ({ name: e, className: t, isSkin: u = !1 }) {
                        const a = (0, n.useMemo)(() => {
                            const t = (0, o.BN)(String(e));
                            return null !== (u ? F.$dyn('crewSkins') : F).$dyn(t) ? c.U.c204x256 : c.U.c158x118;
                        }, [e, u]);
                        return r().createElement(
                            'div',
                            { className: i()(d, a === c.U.c204x256 && _, t) },
                            r().createElement('div', { className: m }),
                            r().createElement(
                                'div',
                                { className: E },
                                r().createElement(c.G, { name: e, size: a, isSkin: u, classMix: A }),
                            ),
                        );
                    });
                var h = u(3215),
                    v = u(3946);
                const p = (0, h.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'realRoleLevel',
                                        'nativeTankRealRoleLevel',
                                        'roleLevel',
                                        'hasRetrainDiscount',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'hasUniqueSound',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                        currentVehicleTags: e.array('currentVehicle.tags'),
                                    },
                                ),
                                u = (0, v.Om)(() => {
                                    const e = t.currentVehicle.get(),
                                        u = t.nativeVehicle.get(),
                                        n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: n && !(e.type === u.type && e.isPremium),
                                        isWrongVehicle: n && e.name !== u.name,
                                    };
                                }),
                                n = (0, v.Om)(() => {
                                    const e = u(),
                                        t = e.isWrongVehicle,
                                        n = e.isWrongVehicleType;
                                    return t && n;
                                }),
                                r = (0, v.Om)(() =>
                                    t.hasRetrainDiscount.get()
                                        ? { args: { tooltipId: 'actionPrice' }, targetId: $e }
                                        : {
                                              contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                              targetId: $e,
                                          },
                                );
                            return Object.assign({}, t, {
                                computes: { vehicleValidator: u, isRoleLevelPenaltyActive: n, discountTooltipArgs: r },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    f = p[0],
                    B = p[1];
                var C = u(3457),
                    D = u(3415),
                    b = u(2056),
                    w = u(5415),
                    k = u(4828),
                    S = u(1943),
                    y = u(8018);
                const N = 'CurrentVehicleTrain_base_22',
                    x = 'CurrentVehicleTrain_tooltipHoverArea_cc',
                    T = 'CurrentVehicleTrain_currentVehicle_9d',
                    L = 'CurrentVehicleTrain_currentVehicleName_19',
                    I = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    P = 'CurrentVehicleTrain_retrainContainer_6a',
                    M = 'CurrentVehicleTrain_roleLevelContainer_95',
                    O = 'CurrentVehicleTrain_roleLevelLabel_31',
                    H = 'CurrentVehicleTrain_roleLevelLabel__red_0e',
                    W = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    V = 'CurrentVehicleTrain_discountIcon_04',
                    z = 'CurrentVehicleTrain_discountIcon__forText_d9',
                    Z = 'CurrentVehicleTrain_retrainBtn_3e',
                    j = 'CurrentVehicleTrain_frameGlow_80',
                    U = 'CurrentVehicleTrain_trainLevelRateContainer_5c',
                    G = 'CurrentVehicleTrain_trainLevelNumber_b0',
                    $ = 'CurrentVehicleTrain_trainLevelNumber__red_07',
                    q = 'CurrentVehicleTrain_trainLevelInfoIcon_27',
                    Y = 'CurrentVehicleTrain_discountContainer_24',
                    K = 'CurrentVehicleTrain_discountText_45';
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Q = (0, s.Pi)(function ({ className: e }) {
                    const t = B(),
                        u = t.model,
                        a = t.controls,
                        s = (0, w.GS)().mediaSize,
                        o = u.currentVehicle.get(),
                        c = o.name,
                        d = Boolean(c),
                        m = u.computes.vehicleValidator().isWrongVehicle,
                        E = u.computes.discountTooltipArgs(),
                        _ = u.hasRetrainDiscount.get(),
                        A = u.computes.isRoleLevelPenaltyActive(),
                        F = (0, n.useContext)(qe),
                        g = (0, S.Sr)(k.D9, {
                            item: k.sk.MstlTooltip,
                            action: k.eX.Viewed,
                            parentScreen: k.sC.PersonalFile,
                        });
                    return r().createElement(
                        'div',
                        { className: i()(N, e) },
                        r().createElement(l.w, {
                            classMix: T,
                            text: d ? R.strings.crew.personalFile.inVehicle() : R.strings.crew.common.inBarracks(),
                            binding: { vehicle: r().createElement('div', { className: i()(L, o.isPremium && I) }, c) },
                        }),
                        r().createElement(
                            'div',
                            { className: M },
                            r().createElement(
                                'div',
                                { className: i()(O, A && H) },
                                R.strings.crew.personalFile.retrainLevel(),
                            ),
                            r().createElement(
                                'div',
                                { className: U },
                                r().createElement(
                                    'div',
                                    { className: i()(G, A && $) },
                                    (0, y.T3)(u.realRoleLevel.get()),
                                ),
                                !A && r().createElement('div', { className: q }),
                            ),
                        ),
                        r().createElement(
                            b.u,
                            X(
                                {
                                    targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                    contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    ignoreMouseClick: !0,
                                },
                                F ? g : void 0,
                            ),
                            r().createElement('div', { className: x }),
                        ),
                        A &&
                            r().createElement(
                                D.l,
                                { tooltipArgs: E },
                                r().createElement(
                                    'div',
                                    { className: P },
                                    r().createElement(
                                        'div',
                                        { className: W },
                                        _ && r().createElement('div', { className: V }),
                                        r().createElement(
                                            C.u5,
                                            { onClick: a.retrain, type: C.L$.secondary, mixClass: Z },
                                            m && r().createElement('div', { className: j }),
                                            R.strings.crew.personalFile.retrain(),
                                        ),
                                    ),
                                ),
                            ),
                        _ &&
                            !A &&
                            r().createElement(
                                D.l,
                                { tooltipArgs: E },
                                r().createElement(
                                    'div',
                                    { className: Y },
                                    r().createElement('div', { className: i()(V, z) }),
                                    r().createElement(
                                        'div',
                                        { className: K },
                                        s === w.cJ.ExtraSmall
                                            ? R.strings.crew.personalFile.discount.short()
                                            : R.strings.crew.personalFile.discount.full(),
                                    ),
                                ),
                            ),
                    );
                });
                var J = u(6373);
                const ee = 'Name_base_2d',
                    te = 'Name_label_31',
                    ue = 'Name_voiceButton_00',
                    ne = 'Name_soundIcon_2a',
                    re = (0, s.Pi)(function ({ className: e }) {
                        const t = B(),
                            u = t.model,
                            a = t.controls,
                            s = (0, n.useCallback)(() => {
                                a.playUniqueVoice();
                            }, [a]);
                        return r().createElement(
                            'div',
                            { className: i()(ee, e) },
                            r().createElement(
                                'div',
                                null,
                                r().createElement('div', { className: te }, u.fullName.get()),
                                u.hasUniqueSound.get() &&
                                    r().createElement(
                                        J.i,
                                        {
                                            header: R.strings.crew.personalFile.voiceTooltip.header(),
                                            body: R.strings.crew.personalFile.voiceTooltip.body(),
                                        },
                                        r().createElement(
                                            C.u5,
                                            { size: C.qE.extraSmall, type: C.L$.ghost, mixClass: ue, onClick: s },
                                            r().createElement('div', { className: ne }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ae = u(7078),
                    ie = u(2603);
                const se = 'Role_base_e0',
                    le = 'Role_role_2a',
                    oe = 'Role_roleIcon_e6',
                    ce = 'Role_roleName_79',
                    de = 'Role_commanderFeature_e2',
                    me = 'Role_sense_21',
                    Ee = 'Role_commanderBonus_99',
                    _e = (0, s.Pi)(function ({ className: e }) {
                        const t = B().model,
                            u = t.role.get();
                        return r().createElement(
                            'div',
                            { className: i()(se, e) },
                            r().createElement(
                                ae.t,
                                { args: { tooltipId: ie.v$ }, targetId: $e },
                                r().createElement(
                                    'div',
                                    { className: le },
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(u)})`,
                                        },
                                        className: oe,
                                    }),
                                    r().createElement('div', { className: ce }, (0, y.Gc)(u, t.isFemale.get())),
                                ),
                            ),
                            'commander' === u &&
                                r().createElement(
                                    'div',
                                    { className: de },
                                    r().createElement(
                                        ae.t,
                                        {
                                            args: { skillName: 'commander_sixthSense', tooltipId: ie.HZ, level: 100 },
                                            targetId: $e,
                                        },
                                        r().createElement('div', { className: me }),
                                    ),
                                    r().createElement(
                                        ae.t,
                                        { args: { tooltipId: ie.uN }, targetId: $e },
                                        r().createElement('div', { className: Ee }),
                                    ),
                                ),
                        );
                    });
                var Ae = u(9690),
                    Fe = u(7727);
                const ge = 'SpecializationSlots_base_1a',
                    he = 'SpecializationSlots_frame_85',
                    ve = 'SpecializationSlots_frame__first_23',
                    pe = 'SpecializationSlots_frame__crewLocked_de',
                    fe = 'SpecializationSlots_darkFrame_34',
                    Be = 'SpecializationSlots_frame__hover_06',
                    Ce = 'SpecializationSlots_shadow_4a',
                    De = 'SpecializationSlots_arrows_6e',
                    be = 'SpecializationSlots_arrowsIcon_fc',
                    we = 'SpecializationSlots_changeVehicle_58',
                    ke = 'SpecializationSlots_tier_68',
                    Se = 'SpecializationSlots_vehicle_b6',
                    ye = 'SpecializationSlots_vehicleTypeIcon_77',
                    Ne = 'SpecializationSlots_info_7c',
                    xe = 'SpecializationSlots_flag_84',
                    Te = 'SpecializationSlots_vehicleIcon_ec',
                    Le = 'SpecializationSlots_premVehicle_c3';
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Ie = (0, s.Pi)(function ({ className: e }) {
                        const t = B(),
                            u = t.model,
                            a = t.controls,
                            s = u.nativeVehicle.get(),
                            l = u.isCrewLocked.get(),
                            c = (0, n.useState)(!1),
                            d = c[0],
                            m = c[1],
                            E = (0, n.useContext)(qe),
                            _ = (0, S.Sr)(k.D9, {
                                item: k.sk.PremiumTooltip,
                                action: k.eX.Viewed,
                                parentScreen: k.sC.PersonalFile,
                            }),
                            A = (0, n.useCallback)(() => {
                                Fe.$.playHighlight(), m(!0);
                            }, []),
                            F = (0, n.useCallback)(() => m(!1), []),
                            g = (0, n.useCallback)(() => {
                                Fe.$.playClick(), a.changeVehicle();
                            }, [a]),
                            h = (0, n.useCallback)(
                                (e) => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.$dyn(e ? 'c_48x48_elite' : 'c_48x48_specSlot').$dyn((0, o.BN)(s.type))})`,
                                }),
                                [s.type],
                            ),
                            v = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.nations.c_155x31.$dyn(s.nation)})`,
                                }),
                                [s.nation],
                            );
                        return r().createElement(
                            'div',
                            { className: i()(ge, e) },
                            r().createElement(
                                J.i,
                                {
                                    header: l
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: l ? R.strings.crew.personalFile.crewLockedTooltip.body() : s.name,
                                    ignoreMouseClick: l,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: l ? void 0 : A,
                                        onMouseLeave: l ? void 0 : F,
                                        onClick: l ? void 0 : g,
                                        className: i()(he, ve, d && Be, l && pe),
                                    },
                                    r().createElement('div', { className: fe }),
                                    r().createElement('div', { style: v, className: xe }),
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, o.BN)(`${s.nation}-${s.techName}`))})`,
                                        },
                                        className: Te,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Ne },
                                        r().createElement('div', { className: ke }, (0, Ae.HG)(s.tier)),
                                        r().createElement('div', { style: h(s.isPremium), className: ye }),
                                        r().createElement('div', { className: Se }, s.name),
                                    ),
                                    r().createElement('div', { className: Ce }),
                                    r().createElement(
                                        'div',
                                        { className: De },
                                        r().createElement('div', { className: be }),
                                        r().createElement(
                                            'div',
                                            { className: we },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                b.u,
                                Re(
                                    {
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                    },
                                    E ? _ : void 0,
                                ),
                                r().createElement(
                                    'div',
                                    { className: he },
                                    r().createElement('div', { style: v, className: xe }),
                                    r().createElement(
                                        'div',
                                        { className: Ne },
                                        r().createElement('div', { style: h(!0), className: ye }),
                                        r().createElement(
                                            'div',
                                            { className: Le },
                                            R.strings.crew.personalFile.premiumVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Pe = 'TankmanInfoApp_base_8a',
                    Me = 'TankmanInfoApp_tankmanFolder_2d',
                    Oe = 'TankmanInfoApp_descriptionBlock_f2',
                    He = 'TankmanInfoApp_role_71',
                    We = 'TankmanInfoApp_name_68',
                    Ve = 'TankmanInfoApp_description_a6',
                    ze = 'TankmanInfoApp_currentVehicle_06',
                    Ze = 'TankmanInfoApp_nativeVehicle_5c',
                    je = 'TankmanInfoApp_nativeVehicle__withDescription_03',
                    Ue = 'TankmanInfoApp_slots_a1',
                    Ge = (0, s.Pi)(function ({ className: e }) {
                        const t = B().model,
                            u = t.description.get(),
                            n = Boolean(u);
                        return r().createElement(
                            'div',
                            { className: i()(Pe, e) },
                            r().createElement(g, { name: t.iconName.get(), isSkin: t.isInSkin.get(), className: Me }),
                            r().createElement(
                                'div',
                                { className: Oe },
                                r().createElement(_e, { className: He }),
                                r().createElement(re, { className: We }),
                                n &&
                                    r().createElement(l.w, {
                                        classMix: Ve,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        text: u,
                                    }),
                                r().createElement(
                                    'div',
                                    { className: i()(Ze, n && je) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                r().createElement(Ie, { className: Ue }),
                                r().createElement(Q, { className: ze }),
                            ),
                        );
                    }),
                    $e = R.views.lobby.crew.widgets.TankmanInfo('resId'),
                    qe = (0, n.createContext)(!1),
                    Ye = r().memo(function ({ rootId: e = $e, className: t, isLoggingEnabled: u = !1 }) {
                        return r().createElement(
                            f,
                            { options: { rootId: e } },
                            r().createElement(qe.Provider, { value: u }, r().createElement(Ge, { className: t })),
                        );
                    });
            },
            2603: (e, t, u) => {
                u.d(t, { HZ: () => n, uN: () => r, v$: () => a });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    a = 'tankman';
            },
            6880: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
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
            },
            372: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            6143: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                };
            },
            9627: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    blackReal: 'colors_blackReal_fc',
                    whiteReal: 'colors_whiteReal_31',
                    white: 'colors_white_45',
                    whiteOrange: 'colors_whiteOrange_81',
                    whiteSpanish: 'colors_whiteSpanish_c3',
                    par: 'colors_par_5b',
                    parSecondary: 'colors_parSecondary_fd',
                    parTertiary: 'colors_parTertiary_97',
                    red: 'colors_red_79',
                    redDark: 'colors_redDark_73',
                    yellow: 'colors_yellow_76',
                    orange: 'colors_orange_cd',
                    cream: 'colors_cream_0f',
                    brown: 'colors_brown_82',
                    greenBright: 'colors_greenBright_68',
                    green: 'colors_green_fa',
                    greenDark: 'colors_greenDark_a9',
                    blueBooster: 'colors_blueBooster_26',
                    blueTeamkiller: 'colors_blueTeamkiller_86',
                    cred: 'colors_cred_35',
                    gold: 'colors_gold_c3',
                    bond: 'colors_bond_ce',
                    prom: 'colors_prom_83',
                };
            },
            7629: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                };
            },
            3938: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    innerShadow: 'TankmanIcon_innerShadow_c6',
                };
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
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, n] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, n];
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
        (__webpack_require__.j = 640),
        (() => {
            var e = { 640: 0, 987: 0, 938: 0, 695: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, i, s] = u,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (t && t(u); l < a.length; l++)
                        (r = a[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(3293));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
