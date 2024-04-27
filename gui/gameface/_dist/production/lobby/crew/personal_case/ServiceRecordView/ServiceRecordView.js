(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    i = t(6179),
                    o = t.n(i),
                    s = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
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
                        B = (0, i.useState)(t),
                        C = B[0],
                        D = B[1],
                        f = (0, i.useState)(!1),
                        b = f[0],
                        w = f[1],
                        k = (0, i.useState)(!1),
                        y = k[0],
                        S = k[1],
                        N = (0, i.useCallback)(() => {
                            c || (p.current && (p.current.focus(), D(!0)));
                        }, [c]),
                        x = (0, i.useCallback)(
                            (e) => {
                                C && null !== p.current && !p.current.contains(e.target) && D(!1);
                            },
                            [C],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                c || (v && v(e));
                            },
                            [c, v],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, a.G)(m), _ && _(e), S(!0));
                            },
                            [c, m, _],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                c || (g && g(e), w(!1));
                            },
                            [c, g],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (null !== E && (0, a.G)(E), F && F(e), t && N(), w(!0));
                            },
                            [c, E, F, N, t],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                c || (h && h(e), w(!1));
                            },
                            [c, h],
                        ),
                        H = r()(
                            s.Z.base,
                            s.Z[`base__${n}`],
                            {
                                [s.Z.base__disabled]: c,
                                [s.Z[`base__${u}`]]: u,
                                [s.Z.base__focus]: C,
                                [s.Z.base__highlightActive]: b,
                                [s.Z.base__firstHover]: y,
                            },
                            d,
                        ),
                        W = r()(s.Z.state, s.Z.state__default);
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
                            D(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: p,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: M,
                                onMouseUp: O,
                                onMouseDown: P,
                                onMouseLeave: I,
                                onClick: T,
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s.Z.back }),
                                    o().createElement('span', { className: s.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: W },
                                o().createElement('span', { className: s.Z.stateDisabled }),
                                o().createElement('span', { className: s.Z.stateHighlightHover }),
                                o().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, i.memo)(c);
            },
            2106: (e, u, t) => {
                let n, r;
                t.d(u, { L: () => n, q: () => r }),
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
            3495: (e, u, t) => {
                t.d(u, { Y: () => d });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                var n = t(6179),
                    r = t.n(n),
                    a = t(6536),
                    i = t(3495),
                    o = t(1043),
                    s = t(5262),
                    l = t(3138);
                (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(i.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        d = t[1],
                        m = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: n }, (0, s.T)(t, n, o.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', m), [m]);
                    const E = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(i.Y.Provider, { value: E }, e);
                });
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, i);
                    const o = (0, n.useContext)(a.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        m = o.extraSmall,
                        E = o.extraLargeWidth,
                        _ = o.largeWidth,
                        A = o.mediumWidth,
                        F = o.smallWidth,
                        g = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        v = o.largeHeight,
                        p = o.mediumHeight,
                        B = o.smallHeight,
                        C = o.extraSmallHeight,
                        D = { extraLarge: h, large: v, medium: p, small: B, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, r.H)(u, t, D);
                        if (t.largeWidth && _) return (0, r.H)(u, t, D);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, D);
                        if (t.smallWidth && F) return (0, r.H)(u, t, D);
                        if (t.extraSmallWidth && g) return (0, r.H)(u, t, D);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && v) return u;
                            if (t.mediumHeight && p) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, n.memo)(o);
            },
            7382: (e, u, t) => {
                t.d(u, { H: () => n });
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
            },
            7739: (e, u, t) => {
                t.d(u, { YN: () => n.Y });
                t(6010), t(1039);
                var n = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var n;
                function r(e, u, t) {
                    const n = (function (e, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => r }),
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
            2773: (e, u, t) => {
                t.d(u, { $Q: () => v });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    i = t(1856),
                    o = t(3815),
                    s = t(560),
                    l = t(7727),
                    c = t(6179),
                    d = t.n(c),
                    m = t(6358),
                    E = t(372);
                const _ = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    g = () => {},
                    h = (e, u) => Math.max(20, e.offsetWidth * u),
                    v = (0, c.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = F, onDrag: n = g }) => {
                        const v = (0, c.useRef)(null),
                            p = (0, c.useRef)(null),
                            B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            f = e.stepTimeout || 100,
                            b = (0, c.useState)(A),
                            w = b[0],
                            k = b[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    k(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            S = () => {
                                const u = C.current,
                                    t = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    s = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetWidth - h(u, o)) * s;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (p.current && B.current && C.current && D.current) {
                                            if (0 === e)
                                                return p.current.classList.add(_), void B.current.classList.remove(_);
                                            if (
                                                ((u = C.current),
                                                (t = D.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return p.current.classList.remove(_), void B.current.classList.add(_);
                                            var u, t;
                                            p.current.classList.remove(_), B.current.classList.remove(_);
                                        }
                                    })(l);
                            },
                            N = (0, o.z)(() => {
                                (() => {
                                    const u = D.current,
                                        t = C.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    (u.style.width = `${h(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        v.current &&
                                            (1 === a
                                                ? v.current.classList.add(E.Z.base__nonActive)
                                                : v.current.classList.remove(E.Z.base__nonActive));
                                })(),
                                    S();
                            });
                        (0, c.useEffect)(() => (0, i.v)(N)),
                            (0, c.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const u = () => {
                                            S();
                                        };
                                        let t = g;
                                        const n = () => {
                                            t(), (t = (0, i.v)(N));
                                        };
                                        return (
                                            e.events.on('recalculateContent', N),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', N),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = C.current,
                                            i = D.current;
                                        if (!r || !a || !i) return;
                                        const o = u.screenX - w.offset - a.getBoundingClientRect().x,
                                            s = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: s });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), y(A);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, w.offset, w.pending, n, y]);
                        const x = (0, s.B)((u) => e.applyStepTo(u), f, [e]),
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
                            e.target.classList.contains(_) || (0, l.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(E.Z.base, u.base), ref: v, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(E.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), T(m.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: p,
                                onMouseEnter: R,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = D.current;
                                        if (n && 0 === u.button)
                                            if (((0, l.G)('play'), u.target === n))
                                                y({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = D.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: C,
                                    onMouseEnter: R,
                                },
                                d().createElement('div', { ref: D, className: r()(E.Z.thumb, u.thumb) }),
                                d().createElement('div', { className: r()(E.Z.rail, u.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(E.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), T(m.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: B,
                                onMouseEnter: R,
                            }),
                        );
                    });
            },
            2840: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(2773),
                    s = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            i().createElement(s.Area, { className: m, api: F, classNames: d }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: E, api: u, onDrag: _, classNames: A }),
                    );
                };
            },
            7950: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        Area: () => E,
                        Bar: () => s.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => m.Nm,
                        defaultSettings: () => m.he,
                        useHorizontalScrollApi: () => m.T5,
                    });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    o = t.n(i),
                    s = t(2773),
                    l = t(2840),
                    c = t(4682),
                    d = t(8579),
                    m = t(6358);
                const E = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(c.Z.base, u) },
                        o().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (E.Bar = s.$Q), (E.Default = l.K), (E.SeniorityAwards = d.Tm);
            },
            8579: (e, u, t) => {
                t.d(u, { Tm: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    o = t.n(i),
                    s = (t(2773), t(2840), t(4682));
                t(6358);
                const l = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(s.Z.base, u) },
                        o().createElement(
                            'div',
                            { className: r()(s.Z.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                            o().createElement(
                                'div',
                                { className: r()(s.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            },
            6358: (e, u, t) => {
                t.d(u, { Nm: () => n.Nm, T5: () => r, he: () => n.he });
                var n = t(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => {
                        var u, t;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, u) => {
                        e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, u, t) => {
                t.d(u, { $Q: () => p });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    i = t(1856),
                    o = t(3815),
                    s = t(560),
                    l = t(7727),
                    c = t(6179),
                    d = t.n(c),
                    m = t(7701),
                    E = t(9168);
                const _ = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    g = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    h = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    v = (e, u) => Math.max(20, e.offsetHeight * u),
                    p = (0, c.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = g, onDrag: n = A }) => {
                        const p = (0, c.useRef)(null),
                            B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            D = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, c.useState)(F),
                            k = w[0],
                            y = w[1],
                            S = (0, c.useCallback)(
                                (e) => {
                                    y(e),
                                        f.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: f.current });
                                },
                                [n],
                            ),
                            N = (0, o.z)(() => {
                                const u = f.current,
                                    t = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${v(t, a)}px`),
                                    u.classList.add(E.Z.thumb),
                                    p.current &&
                                        (1 === a
                                            ? p.current.classList.add(E.Z.base__nonActive)
                                            : p.current.classList.remove(E.Z.base__nonActive)),
                                    a
                                );
                            }),
                            x = (0, o.z)(() => {
                                const u = D.current,
                                    t = f.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    s = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetHeight - v(u, o)) * s;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (B.current && C.current && D.current && f.current) {
                                            if (0 === e)
                                                return B.current.classList.add(_), void C.current.classList.remove(_);
                                            if (
                                                ((u = D.current),
                                                (t = f.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return B.current.classList.remove(_), void C.current.classList.add(_);
                                            var u, t;
                                            B.current.classList.remove(_), C.current.classList.remove(_);
                                        }
                                    })(l);
                            }),
                            T = (0, o.z)(() => {
                                h(e, () => {
                                    N(), x();
                                });
                            });
                        (0, c.useEffect)(() => (0, i.v)(T)),
                            (0, c.useEffect)(() => {
                                const u = () => {
                                    h(e, () => {
                                        x();
                                    });
                                };
                                let t = A;
                                const n = () => {
                                    t(), (t = (0, i.v)(T));
                                };
                                return (
                                    e.events.on('recalculateContent', T),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', T),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!k.pending) return;
                                const u = (u) => {
                                        h(e, (t) => {
                                            const r = D.current,
                                                a = f.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const o = u.screenY - k.offset - r.getBoundingClientRect().y,
                                                s = (o / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), S(F);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, k.offset, k.pending, n, S]);
                        const L = (0, s.B)((u) => e.applyStepTo(u), b, [e]),
                            R = L[0],
                            M = L[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', M, !0),
                                () => document.removeEventListener('mouseup', M, !0)
                            ),
                            [M],
                        );
                        const O = (e) => {
                            e.target.classList.contains(_) || (0, l.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(E.Z.base, u.base), ref: p, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(E.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), R(m.Nm.Next));
                                },
                                ref: B,
                                onMouseEnter: O,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = f.current;
                                        if (n && 0 === u.button)
                                            if (((0, l.G)('play'), u.target === n))
                                                S({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    f.current &&
                                                        h(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: D,
                                    onMouseEnter: O,
                                },
                                d().createElement('div', { ref: f, className: u.thumb }),
                                d().createElement('div', { className: r()(E.Z.rail, u.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(E.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), R(m.Nm.Prev));
                                },
                                onMouseUp: M,
                                ref: C,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            1158: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(6225),
                    s = t(9605),
                    l = t(5636);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            i().createElement(s.Area, { className: d, classNames: m, api: F }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: E, api: u, onDrag: _, classNames: A }),
                    );
                };
            },
            9605: (e, u, t) => {
                t.r(u),
                    t.d(u, { Area: () => m, Bar: () => s.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    o = t.n(i),
                    s = t(6225),
                    l = t(1158),
                    c = t(7701),
                    d = t(5636);
                const m = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(d.Z.content, null == u ? void 0 : u.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
                m.Default = l.K;
            },
            7701: (e, u, t) => {
                t.d(u, { Nm: () => n.Nm, c4: () => r });
                var n = t(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, u) => {
                        e.scrollTop = u.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, u, t) => {
                t.d(u, { EO: () => _, Nm: () => m, he: () => E });
                var n = t(7515),
                    r = t(1856),
                    a = t(3138),
                    i = t(4532),
                    o = t(9653),
                    s = t(3815),
                    l = t(4489),
                    c = t(6179),
                    d = t(7030);
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
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: m,
                        getWrapperSize: _,
                        triggerMouseMoveOnUpdate: A = !1,
                    }) => {
                        const F = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                i = r[1];
                            return (0, n.u)(a, i, t);
                        };
                        return (n = {}) => {
                            const g = n.settings,
                                h = void 0 === g ? E : g,
                                v = (0, c.useRef)(null),
                                p = (0, c.useRef)(null),
                                B = (0, o.q)(),
                                C = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = v.current;
                                        u && (t(u, e), B.trigger('change', e), A && C());
                                    },
                                    onRest: (e) => B.trigger('rest', e),
                                    onStart: (e) => B.trigger('start', e),
                                    onPause: (e) => B.trigger('pause', e),
                                })),
                                f = D[0],
                                b = D[1],
                                w = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = f.scrollPosition.get(),
                                            a = (null != (n = f.scrollPosition.goal) ? n : 0) - r;
                                        return F(e, u * t + a + r);
                                    },
                                    [f.scrollPosition],
                                ),
                                k = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = v.current;
                                        n &&
                                            b.start({
                                                scrollPosition: F(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: h.animationConfig,
                                                from: { scrollPosition: F(n, f.scrollPosition.get()) },
                                            });
                                    },
                                    [b, h.animationConfig, f.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        const u = v.current,
                                            t = p.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return _(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, h.step),
                                            r = w(u, e, n);
                                        k(r);
                                    },
                                    [k, w, h.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && y(m(e)),
                                            v.current && B.trigger('mouseWheel', e, f.scrollPosition, u(v.current));
                                    },
                                    [f.scrollPosition, y, B],
                                ),
                                N = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (k(F(e, f.scrollPosition.goal), { immediate: !0 }),
                                                B.trigger('resizeHandled'));
                                        }),
                                    [k, f.scrollPosition.goal],
                                ),
                                x = (0, s.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const u = F(e, f.scrollPosition.goal);
                                    u !== f.scrollPosition.goal && k(u, { immediate: !0 }),
                                        B.trigger('recalculateContent');
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
                                            ? u(v.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: h.step.clampedArrowStepTimeout,
                                    clampPosition: F,
                                    handleMouseWheel: S,
                                    applyScroll: k,
                                    applyStepTo: y,
                                    contentRef: v,
                                    wrapperRef: p,
                                    scrollPosition: b,
                                    animationScroll: f,
                                    recalculateContent: x,
                                    events: { on: B.on, off: B.off },
                                }),
                                [f.scrollPosition, k, y, B.off, B.on, x, S, b, h.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, u, t) => {
                t.d(u, { X: () => r });
                var n = t(7950);
                const r = { Vertical: t(9605), Horizontal: n };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => s });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, i);
                    return r().createElement(
                        a.u,
                        o(
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
                };
            },
            3415: (e, u, t) => {
                t.d(u, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    i = t(6373),
                    o = t(2056);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(i.i, u, n);
                    const l = u.contentId,
                        c = u.args,
                        d = null == c ? void 0 : c.contentId;
                    return l || d
                        ? r().createElement(o.u, s({}, u, { contentId: l || d }), n)
                        : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, i);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, m]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                E,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(4179),
                    a = t(6179);
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
                function o(e) {
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
                const s = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
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
                            B = e.targetId,
                            C = void 0 === B ? 0 : B,
                            D = e.onShow,
                            f = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, a.useMemo)(() => C || (0, n.F)().resId, [C]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, h, { isMouseEvent: !0, on: !0, arguments: o(r) }, k),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [t, h, r, k, D]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, h, { on: !1 }, k),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, h, k, f]),
                            N = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
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
                                !1 === p && S();
                            }, [p, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return p
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, _ ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && S(), null == m || m(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && S(), null == d || d(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var x;
                    };
            },
            7515: (e, u, t) => {
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                t.d(u, { v: () => n });
                const n = (e) => {
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
                };
            },
            8246: (e, u, t) => {
                t.d(u, { U: () => o });
                var n = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: a = 'model' } = {}) {
                    const o = new Map();
                    function s(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = o.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            r = a.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const i = 'string' == typeof r ? `${a}.${r}` : a,
                                s = n.O.view.addModelObserver(i, u, !0);
                            return o.set(s, t), e && t(l(r)), s;
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = r(o.keys()); !(e = t()).done; ) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => s });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                E = (t, a, i) => {
                                    var s;
                                    const l = o.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        E = (e) => m.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = d(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            i = Object.entries(a),
                                                            o = i.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
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
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: _, externalModel: c, cleanup: E };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                A = (0, a.useState)(s),
                                F = A[0],
                                g = A[1],
                                h = (0, a.useState)(() => E(s, l, d)),
                                v = h[0],
                                p = h[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? p(E(F, l, d)) : (_.current = !0);
                                }, [d, F, l]),
                                (0, a.useEffect)(() => {
                                    g(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                i().createElement(t.Provider, { value: v }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                t.r(u), t.d(u, { mouse: () => o, onResize: () => a });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        o = i[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
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
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => C,
                        isFocused: () => p,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
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
                function v(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => r, yR: () => n });
                function n(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
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
                };
            },
            6536: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            4532: (e, u, t) => {
                t.d(u, { M: () => r });
                var n = t(6179);
                const r = (e, u = []) => {
                    const t = (0, n.useRef)(),
                        r = (0, n.useCallback)((...u) => {
                            t.current && t.current(), (t.current = e(...u));
                        }, u);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            9653: (e, u, t) => {
                t.d(u, { q: () => i });
                var n = t(6179);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        i = (e, ...t) => {
                            for (var n, a = r(u(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: i }), []);
                };
            },
            3815: (e, u, t) => {
                t.d(u, { z: () => a });
                var n = t(6179);
                const r = [];
                function a(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), r)
                    );
                }
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => i });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let i, o, s;
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
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
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
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            560: (e, u, t) => {
                t.d(u, { B: () => r });
                var n = t(6179);
                function r(e, u, t = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, n.useEffect)(() => a, [a]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        a,
                    ];
                }
            },
            4419: (e, u, t) => {
                t.d(u, { y: () => a });
                var n = t(8045),
                    r = t(6179);
                const a = (e, u, t = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const t = e[0];
                            u && u(t);
                        },
                        [u],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !t) return;
                        const u = new n.Z((e) => a(e));
                        return (
                            u.observe(e.current),
                            () => {
                                u.disconnect();
                            }
                        );
                    }, [a, t, e]);
                };
            },
            4489: (e, u, t) => {
                t.d(u, { f: () => a });
                var n = t(5139),
                    r = t(6179);
                function a(e, u, t) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(t, e), u);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
            },
            5521: (e, u, t) => {
                let n, r;
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
            9480: (e, u, t) => {
                t.d(u, { UI: () => n });
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
            },
            1612: (e, u, t) => {
                t.d(u, { h: () => r });
                var n = t(9174);
                function r(e) {
                    const u = {};
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            const r = e[t];
                            u[t] = (0, n.aD)(r);
                        }
                    return u;
                }
            },
            9690: (e, u, t) => {
                t.d(u, { HG: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
                        a
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) (u += n[t]), (e -= r[t]);
                                  return u;
                              })(e);
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => r, G: () => n });
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
            3649: (e, u, t) => {
                let n;
                function r(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function a(e) {
                    return e.replace(/-/g, '_');
                }
                t.d(u, { BN: () => a, Eg: () => o, uF: () => r, z4: () => i }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff');
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
            5139: (e, u, t) => {
                function n(e, u, t, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        a ||
                            (n && !r && d(),
                            o(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== u &&
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
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            o(), (a = !0);
                        }),
                        s
                    );
                }
                t.d(u, { Z: () => n });
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
            4179: (e, u, t) => {
                t.d(u, { B0: () => s, ry: () => h });
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
                const r = n;
                var a = t(1358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            F(a, n, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(a, n, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    v = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => v(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(7572);
                const D = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, p);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            3618: (e, u, t) => {
                t.d(u, { w: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3415),
                    i = t(4419),
                    o = t(6179),
                    s = t.n(o),
                    l = t(6143),
                    c = t(3310),
                    d = t(131),
                    m = t(9053);
                const E = s().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: _ = !1,
                        targetId: A,
                        justifyContent: F = m.v2.FlexStart,
                        alignContent: g = m.v2.FlexStart,
                        truncateIdentify: h = m.YA,
                    }) => {
                        const v = (0, o.useRef)(null),
                            p = (0, o.useRef)({ height: 0, width: 0 }),
                            B = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            C = B[0],
                            D = B[1],
                            f = (0, o.useMemo)(() => (0, c.s)(e, n), [n, e]),
                            b = (0, o.useMemo)(() => {
                                if (E && C.isTruncated)
                                    return {
                                        args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: A,
                                    };
                            }, [n, E, A, e, C.isTruncated]),
                            w = (0, o.useCallback)(
                                (e) => {
                                    (p.current.width = e.contentRect.width), (p.current.height = e.contentRect.height);
                                    const u = (0, d.T)(v, f, p.current, h),
                                        n = u[0],
                                        r = u[1];
                                    D({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                },
                                [t, h, f],
                            ),
                            k = (0, o.useMemo)(() => ({ justifyContent: F, alignContent: g }), [g, F]);
                        return (
                            (0, i.y)(v, w, _),
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        u,
                                        l.Z.base__zeroPadding,
                                        _ && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: k,
                                },
                                s().createElement('div', { className: l.Z.unTruncated, ref: v }, f),
                                s().createElement(
                                    a.l,
                                    { tooltipArgs: b },
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !C.isTruncateFinished && _ && l.Z.truncated__hide,
                                            ),
                                            style: k,
                                        },
                                        C.isTruncateFinished && _ ? C.elementList : f,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, u, t) => {
                t.d(u, { s: () => d });
                var n = t(3649),
                    r = t(6799),
                    a = t(6960),
                    i = t(9053);
                const o = (e) => {
                        const u = /[\s\u002d]/g;
                        let t = u.exec(e);
                        if (!t) return [e];
                        const n = [];
                        let r = 0;
                        for (; t; ) n.push(e.slice(r, u.lastIndex)), (r = u.lastIndex), (t = u.exec(e));
                        return r !== e.length && n.push(e.slice(r)), n;
                    },
                    s = (e, u = '') => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: i.kH.Word, colorTag: u, childList: o(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = i.aF[n.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: r, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    l = (e, u, t = '') => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...s(e, t));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...s(String(a), t))
                                        : n.push({ blockType: i.kH.Binding, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    d = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), u.push(...c(u.pop(), e)))
                                        : (t ? u.push(...c(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...l(e, u));
                                        },
                                        (e) => {
                                            t.push(...l(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })((0, n.Eg)((0, n.z4)(e)), u),
                        );
                        return (0, r.w)(t);
                    };
            },
            6799: (e, u, t) => {
                t.d(u, { w: () => i });
                var n = t(597),
                    r = t(9053);
                const a = (e, u, t) => {
                        const i = [];
                        return (
                            e.childList.forEach((o, s) => {
                                const l = `${t}_${s}`;
                                if ((0, r.dz)(o)) {
                                    const e = o,
                                        u = e.blockType,
                                        t = n.IY[u],
                                        r = a(e, t, l);
                                    i.push(...r);
                                } else i.push(u({ elementList: [o], textBlock: e, key: l }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            i = e.blockType,
                                            o = n.IY[i],
                                            s = a(e, o, u);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? t.push(o({ elementList: s, textBlock: e, key: `${u}` }))
                                                : t.push(...s),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    };
            },
            6960: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = (e, u, t, n) => {
                    let r = u.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                    a !== e.length && t(e.slice(a));
                };
            },
            131: (e, u, t) => {
                t.d(u, { T: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053);
                const i = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    o = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    s = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = o(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    l = (e, u, t, n, i, o) => {
                        let c = -1,
                            d = null;
                        for (let m = t; m >= 0; m--) {
                            const t = e[m],
                                E = Number(e[m].getAttribute(a.bF));
                            if (E === a.kH.LineBreak || E === a.kH.NewLine || E === a.kH.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = s(t, n, i),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const E = _.slice(0, _.length - l) + o,
                                    A = u[m];
                                (d = r().cloneElement(A, A.props, E)), (c = m);
                                break;
                            }
                            {
                                const e = t.children,
                                    a = u[m],
                                    s = a.props.children,
                                    E = l(e, s, e.length - 1, n, i, o),
                                    A = E[0],
                                    F = E[1];
                                if (!(A < 0)) {
                                    const e = s.slice(0, A);
                                    (d = r().cloneElement(a, a.props, e, F)), (c = m);
                                    break;
                                }
                                i -= _.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, u, t, n = a.YA) => {
                        const r = [...u],
                            s = e.current;
                        if (!s) return [r, !1];
                        const c = t.height,
                            d = t.width,
                            m = s.lastElementChild;
                        if (!i(m, c) && o(m, d) <= 0) return [r, !1];
                        const E = s.children,
                            _ = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    i(e[r], u) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(E, c);
                        if (_ < 0) return [r, !1];
                        const A = l(E, r, _, d, n.length, n),
                            F = A[0],
                            g = A[1];
                        return g && (r.splice(F, 1, g), r.splice(F + 1)), [r, !0];
                    };
            },
            9053: (e, u, t) => {
                let n, r, a;
                t.d(u, { YA: () => o, aF: () => l, bF: () => s, dz: () => i, kH: () => n, v2: () => r }),
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
                    o = '...',
                    s = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak };
            },
            597: (e, u, t) => {
                t.d(u, { IY: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053),
                    i = t(9627),
                    o = t(7629);
                const s = (e) => ({ color: `#${e}` }),
                    l = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? i.Z[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: i.Z[n] },
                                      e,
                                  )
                                : r().createElement('span', { key: t, 'data-block-type': u.blockType, style: s(n) }, e)
                            : r().createElement('span', { key: t, 'data-block-type': u.blockType }, e);
                    },
                    c = {
                        [a.kH.Word]: l,
                        [a.kH.NoBreakSymbol]: l,
                        [a.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => r().createElement(r().Fragment, { key: t }, e)),
                            ),
                        [a.kH.LineBreak]: ({ key: e }) =>
                            r().createElement('span', {
                                key: e,
                                'data-block-type': a.kH.LineBreak,
                                className: o.Z.lineBreak,
                            }),
                        [a.kH.NewLine]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': a.kH.NewLine, className: o.Z.newLine },
                                e,
                            ),
                        [a.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            r().createElement(
                                'span',
                                { key: u, 'data-block-type': a.kH.NoBreakWrapper, className: o.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            3458: (e, u, t) => {
                let n;
                t.d(u, { Z0: () => r, in: () => n, sx: () => a }),
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
            4828: (e, u, t) => {
                t.d(u, { D9: () => n, eX: () => r, sC: () => a, sk: () => o });
                const n = 'crew';
                let r, a, i, o, s, l, c;
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
                    })(o || (o = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.MstlTooltip = 'crew_widget_mstl_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(s || (s = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(l || (l = {})),
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
            1943: (e, u, t) => {
                t.d(u, { Sr: () => m });
                var n = t(6179),
                    r = t(3458);
                const a = ['action', 'timeLimit'];
                const i = 'metrics',
                    o = () => Date.now(),
                    s = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: r }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    l = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = r.in.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    c = (e, u) => {
                        const t = l(e, u),
                            r = (0, n.useRef)(new Map()),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = r.current.get(e);
                                    (void 0 !== u && u > 0) || r.current.set(e, o());
                                },
                                [r],
                            ),
                            s = (0, n.useCallback)(() => {
                                r.current.clear(), a.current.clear();
                            }, [r, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === a.current.get(e) &&
                                        a.current.set(e, o());
                                },
                                [r, a],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    a.current.delete(e);
                                    const n = o() - t;
                                    r.current.set(e, u + n);
                                },
                                [r, a],
                            ),
                            m = (0, n.useCallback)(
                                (e, u = 0, n, i) => {
                                    const s = r.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== a.current.get(e) && d(e), r.current.delete(e);
                                    const l = (o() - s) / 1e3;
                                    l <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, l)),
                                        t(e, n, i));
                                },
                                [r, a, t, d],
                            );
                        return [(e) => i(e), (e, u, t, n) => m(e, u, t, n), () => s(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const u = c(e, i),
                            t = u[0],
                            r = u[1],
                            a = u[2],
                            o = u[3],
                            l = u[4],
                            d = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    r(u, t, n, s(e));
                                },
                                [r],
                            );
                        return [(e) => t(e), (e) => d(e), () => a(), (e) => o(e), (e) => l(e)];
                    },
                    m = (e, u) => {
                        const t = d(e),
                            i = t[0],
                            o = t[1],
                            s = u.action,
                            l = u.timeLimit,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(u, a);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => i(s || r.Z0),
                                onHide: () => o(Object.assign({ action: s || r.Z0, timeLimit: l || r.sx }, c)),
                            }),
                            [s, l, c, i, o],
                        );
                    };
            },
            7077: (e, u, t) => {
                t.d(u, { G: () => c, U: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    i = t(6179),
                    o = t.n(i),
                    s = t(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: u = l.c100x60, classMix: t, isSkin: n = !1 }) => {
                    const c = (0, i.useMemo)(() => {
                            try {
                                let t = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                                n && (t = t.$dyn('crewSkins'));
                                const r = t.$dyn((0, a.BN)(e));
                                if (!r) throw Error;
                                return { backgroundImage: `url(${r})` };
                            } catch (u) {
                                console.error('Cant find resource in TankmanIcon: ', e);
                            }
                        }, [e, u, n]),
                        d = u === l.c204x256;
                    return o().createElement(
                        'div',
                        { style: c, className: r()(s.Z.base, s.Z[`base__${u}`], t) },
                        d && o().createElement('div', { className: s.Z.innerShadow }),
                    );
                };
            },
            8018: (e, u, t) => {
                t.d(u, { Gc: () => s, T3: () => a });
                var n = t(3649);
                const r = R.strings.common.percentValue(),
                    a = (e) => (0, n.uF)(r, { value: e });
                let i;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(i || (i = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let o;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(o || (o = {}));
                const s = (e, u = !1, t = null) => {
                    const n = u ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(e);
                };
            },
            894: (e, u, t) => {
                var n = t(6179),
                    r = t.n(n),
                    a = t(3403),
                    i = t(4022),
                    o = t(3215),
                    s = t(4598),
                    l = t(9480),
                    c = t(1612),
                    d = t(9174),
                    m = t(3946);
                const E = (0, o.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'rankName',
                                        'rankIcon',
                                        'battlesCount',
                                        'averageXP',
                                        'isTankmanInVehicle',
                                    ]),
                                    { achievementsList: e.array('achievementsList'), isTTCVisible: d.LO.box(!1) },
                                ),
                                t = (0, m.Om)(() => l.UI(u.achievementsList.get(), s.yR)),
                                n = (0, m.Om)(() => u.isTankmanInVehicle.get() && u.isTTCVisible.get(), !0),
                                r = (0, m.Om)(() => u.achievementsList.get().length > 0);
                            return Object.assign({}, u, {
                                computes: { getAchievementsList: t, isTTCVisible: n, hasAchievements: r },
                            });
                        },
                        ({ model: e }) => Object.assign({}, (0, c.h)({ setTTCVisible: (u) => e.isTTCVisible.set(u) })),
                    ),
                    _ = E[0],
                    A = E[1];
                var F = t(6483),
                    g = t.n(F),
                    h = t(5415),
                    v = t(3961);
                const p = 'AchievementsList_base_90',
                    B = 'AchievementsList_title_f4',
                    C = 'AchievementsList_container_a7',
                    D = 'AchievementsList_item_10',
                    f = 'AchievementsList_bar_4a';
                var b = t(7078),
                    w = t(2603);
                const k = {
                    base: 'AchievementItem_base_45',
                    base__small: 'AchievementItem_base__small_b4',
                    icon: 'AchievementItem_icon_91',
                    amountBG: 'AchievementItem_amountBG_46',
                    amount: 'AchievementItem_amount_65',
                };
                let y;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(y || (y = {}));
                const S = ({ name: e, amount: u, block: t, isRare: n, size: a, className: i }) => {
                    const o =
                        a === y.Small ? R.images.gui.maps.icons.achievement : R.images.gui.maps.icons.achievement.big;
                    return r().createElement(
                        b.t,
                        {
                            args: { tooltipId: w.Th, name: e, block: t, isRare: n },
                            targetId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                        },
                        r().createElement(
                            'div',
                            { className: g()(k.base, k[`base__${a}`], i) },
                            r().createElement('div', {
                                className: k.icon,
                                style: { backgroundImage: `url(${o.$dyn(e)})` },
                            }),
                            u > 1 &&
                                r().createElement(
                                    'div',
                                    { className: k.amountBG },
                                    r().createElement('div', { className: k.amount }, u),
                                ),
                        ),
                    );
                };
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
                const x = (0, a.Pi)(({ className: e }) => {
                    const u = A().model,
                        t = (0, h.GS)().mediaSize,
                        n = t === h.cJ.Small || t === h.cJ.ExtraSmall ? y.Small : y.Big;
                    return r().createElement(
                        'div',
                        { className: g()(p, e) },
                        r().createElement(
                            v.z,
                            { classNames: { bar: f } },
                            r().createElement(
                                'div',
                                { className: B },
                                R.strings.crew.serviceRecord.achievementsList.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: C },
                                (0, l.UI)(u.computes.getAchievementsList(), (e, u) =>
                                    r().createElement(S, N({}, e, { size: n, key: `achievement_${u}`, className: D })),
                                ),
                            ),
                        ),
                    );
                });
                var T = t(6373);
                const L = 'BattlesInfo_base_25',
                    M = 'BattlesInfo_container_da',
                    O = 'Item_base_e0',
                    P = 'Item_icon_81',
                    I = 'Item_value_28',
                    H = 'Item_name_35',
                    W = ({ name: e, icon: u, value: t }) =>
                        r().createElement(
                            'div',
                            { className: O },
                            r().createElement('div', { className: P, style: { backgroundImage: `url(${u})` } }),
                            r().createElement('div', { className: I }, t),
                            r().createElement('div', { className: H }, e),
                        );
                var V = t(3649);
                const z = 'RankItem_base_19',
                    j = 'RankItem_icon_10',
                    Z = 'RankItem_name_9d',
                    U = ({ name: e, icon: u }) =>
                        r().createElement(
                            T.i,
                            {
                                header: R.strings.crew.serviceRecord.tooltip.rank.header(),
                                body: R.strings.crew.serviceRecord.tooltip.rank.body(),
                            },
                            r().createElement(
                                'div',
                                { className: z },
                                r().createElement('div', {
                                    className: j,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.tankmen.ranks.big.$dyn((0, V.BN)(u))})`,
                                    },
                                }),
                                r().createElement('div', { className: Z }, e),
                            ),
                        ),
                    G = (0, a.Pi)(() => {
                        const e = A().model;
                        return r().createElement(
                            'div',
                            { className: L },
                            r().createElement(
                                'div',
                                { className: M },
                                r().createElement(U, { name: e.rankName.get(), icon: e.rankIcon.get() }),
                                r().createElement(
                                    T.i,
                                    {
                                        header: R.strings.tooltips.battlesDetails.header(),
                                        body: R.strings.tooltips.battlesDetails.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(W, {
                                            name: R.strings.crew.serviceRecord.battlesCounter(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.battlesCountIcon(),
                                            value: e.battlesCount.get(),
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    T.i,
                                    {
                                        header: R.strings.crew.serviceRecord.tooltip.averageXP.header(),
                                        body: R.strings.crew.serviceRecord.tooltip.averageXP.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(W, {
                                            name: R.strings.crew.serviceRecord.averageXP(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.averageXPIcon(),
                                            value: e.averageXP.get(),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    $ = 'NoAchievements_base_a5',
                    q = 'NoAchievements_icon_c7',
                    Y = 'NoAchievements_text_34',
                    K = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: g()($, e) },
                            r().createElement('div', { className: q }),
                            r().createElement('div', { className: Y }, R.strings.crew.serviceRecord.noAchievements()),
                        ),
                    X = 'ServiceRecordApp_achievementsList_fd',
                    Q = 'ServiceRecordApp_noAchievements_07',
                    J = (0, a.Pi)(({ setTTCVisibility: e }) => {
                        e(!1);
                        const u = A().model.computes.hasAchievements();
                        return r().createElement(
                            i.d,
                            null,
                            r().createElement(G, null),
                            u ? r().createElement(x, { className: X }) : r().createElement(K, { className: Q }),
                        );
                    }),
                    ee = R.views.lobby.crew.personal_case.ServiceRecordView('resId');
                r().memo(({ setTTCVisibility: e }) =>
                    r().createElement(_, { options: { rootId: ee } }, r().createElement(J, { setTTCVisibility: e })),
                );
            },
            3961: (e, u, t) => {
                t.d(u, { z: () => A });
                var n = t(6483),
                    r = t.n(n),
                    a = t(794),
                    i = t(7701),
                    o = t(6179),
                    s = t.n(o);
                const l = 'ScrollWithLips_base_81',
                    c = 'ScrollWithLips_fadeTop_3d',
                    d = 'ScrollWithLips_fadeBottom_44',
                    m = 'ScrollWithLips_bar_52',
                    E = 'ScrollWithLips_content_fb';
                let _;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(_ || (_ = {}));
                const A = ({ children: e, className: u, classNames: t }) => {
                    const n = (0, o.useState)(_.None),
                        A = n[0],
                        F = n[1],
                        g = A === _.Both,
                        h = (0, i.c4)();
                    return (
                        (0, o.useEffect)(() => {
                            const e = () => {
                                const e = h.getBounds()[1],
                                    u = h.animationScroll.scrollPosition.get();
                                0 === e
                                    ? F(_.None)
                                    : u > 1 && u < e - 21
                                      ? F(_.Both)
                                      : u <= 1
                                        ? F(_.Bottom)
                                        : u >= e - 21 && F(_.Top);
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
                        s().createElement(
                            'div',
                            { className: r()(l, u) },
                            s().createElement(
                                a.X.Vertical.Default,
                                {
                                    api: h,
                                    barClassNames: { base: r()(m, null == t ? void 0 : t.bar) },
                                    scrollClassNames: { content: E },
                                },
                                e,
                            ),
                            (A === _.Top || g) && s().createElement('div', { className: c }),
                            (A === _.Bottom || g) && s().createElement('div', { className: d }),
                        )
                    );
                };
            },
            4022: (e, u, t) => {
                t.d(u, { d: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3055);
                const i = 'TankmanInfoWrapper_base_5a',
                    o = 'TankmanInfoWrapper_content_b4',
                    s = 'TankmanInfoWrapper_tankmanInfo_80',
                    l = 'TankmanInfoWrapper_children_66',
                    c = ({ children: e, isLoggingEnabled: u = !1 }) =>
                        r().createElement(
                            'div',
                            { className: i },
                            r().createElement(
                                'div',
                                { className: o },
                                r().createElement(a.JW, { className: s, isLoggingEnabled: u }),
                                r().createElement('div', { className: l }, e),
                            ),
                        );
            },
            3055: (e, u, t) => {
                t.d(u, { Zk: () => qe, zn: () => $e, JW: () => Ye });
                var n = t(6179),
                    r = t.n(n),
                    a = t(6483),
                    i = t.n(a),
                    o = t(3403),
                    s = t(3618),
                    l = t(3649),
                    c = t(7077);
                const d = 'TankmanFolder_base_00',
                    m = 'TankmanFolder_folder_f5',
                    E = 'TankmanFolder_photoFrame_ae',
                    _ = 'TankmanFolder_base__big_60',
                    A = 'TankmanFolder_icon_74',
                    F = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    g = r().memo(function ({ name: e, className: u, isSkin: t = !1 }) {
                        const a = (0, n.useMemo)(() => {
                            const u = (0, l.BN)(String(e));
                            return null !== (t ? F.$dyn('crewSkins') : F).$dyn(u) ? c.U.c204x256 : c.U.c158x118;
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: i()(d, a === c.U.c204x256 && _, u) },
                            r().createElement('div', { className: m }),
                            r().createElement(
                                'div',
                                { className: E },
                                r().createElement(c.G, { name: e, size: a, isSkin: t, classMix: A }),
                            ),
                        );
                    });
                var h = t(3215),
                    v = t(3946);
                const p = (0, h.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
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
                                t = (0, v.Om)(() => {
                                    const e = u.currentVehicle.get(),
                                        t = u.nativeVehicle.get(),
                                        n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: n && !(e.type === t.type && e.isPremium),
                                        isWrongVehicle: n && e.name !== t.name,
                                    };
                                }),
                                n = (0, v.Om)(() => {
                                    const e = t(),
                                        u = e.isWrongVehicle,
                                        n = e.isWrongVehicleType;
                                    return u && n;
                                }),
                                r = (0, v.Om)(() =>
                                    u.hasRetrainDiscount.get()
                                        ? { args: { tooltipId: 'actionPrice' }, targetId: $e }
                                        : {
                                              contentId: R.views.lobby.crew.tooltips.TrainingLevelTooltip('resId'),
                                              targetId: $e,
                                          },
                                );
                            return Object.assign({}, u, {
                                computes: { vehicleValidator: t, isRoleLevelPenaltyActive: n, discountTooltipArgs: r },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    B = p[0],
                    C = p[1];
                var D = t(3457),
                    f = t(3415),
                    b = t(2056),
                    w = t(5415),
                    k = t(4828),
                    y = t(1943),
                    S = t(8018);
                const N = 'CurrentVehicleTrain_base_22',
                    x = 'CurrentVehicleTrain_tooltipHoverArea_cc',
                    T = 'CurrentVehicleTrain_currentVehicle_9d',
                    L = 'CurrentVehicleTrain_currentVehicleName_19',
                    M = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    O = 'CurrentVehicleTrain_retrainContainer_6a',
                    P = 'CurrentVehicleTrain_roleLevelContainer_95',
                    I = 'CurrentVehicleTrain_roleLevelLabel_31',
                    H = 'CurrentVehicleTrain_roleLevelLabel__red_0e',
                    W = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    V = 'CurrentVehicleTrain_discountIcon_04',
                    z = 'CurrentVehicleTrain_discountIcon__forText_d9',
                    j = 'CurrentVehicleTrain_retrainBtn_3e',
                    Z = 'CurrentVehicleTrain_frameGlow_80',
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Q = (0, o.Pi)(function ({ className: e }) {
                    const u = C(),
                        t = u.model,
                        a = u.controls,
                        o = (0, w.GS)().mediaSize,
                        l = t.currentVehicle.get(),
                        c = l.name,
                        d = Boolean(c),
                        m = t.computes.vehicleValidator().isWrongVehicle,
                        E = t.computes.discountTooltipArgs(),
                        _ = t.hasRetrainDiscount.get(),
                        A = t.computes.isRoleLevelPenaltyActive(),
                        F = (0, n.useContext)(qe),
                        g = (0, y.Sr)(k.D9, {
                            item: k.sk.MstlTooltip,
                            action: k.eX.Viewed,
                            parentScreen: k.sC.PersonalFile,
                        });
                    return r().createElement(
                        'div',
                        { className: i()(N, e) },
                        r().createElement(s.w, {
                            classMix: T,
                            text: d ? R.strings.crew.personalFile.inVehicle() : R.strings.crew.common.inBarracks(),
                            binding: { vehicle: r().createElement('div', { className: i()(L, l.isPremium && M) }, c) },
                        }),
                        r().createElement(
                            'div',
                            { className: P },
                            r().createElement(
                                'div',
                                { className: i()(I, A && H) },
                                R.strings.crew.personalFile.retrainLevel(),
                            ),
                            r().createElement(
                                'div',
                                { className: U },
                                r().createElement(
                                    'div',
                                    { className: i()(G, A && $) },
                                    (0, S.T3)(t.realRoleLevel.get()),
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
                                f.l,
                                { tooltipArgs: E },
                                r().createElement(
                                    'div',
                                    { className: O },
                                    r().createElement(
                                        'div',
                                        { className: W },
                                        _ && r().createElement('div', { className: V }),
                                        r().createElement(
                                            D.u5,
                                            { onClick: a.retrain, type: D.L$.secondary, mixClass: j },
                                            m && r().createElement('div', { className: Z }),
                                            R.strings.crew.personalFile.retrain(),
                                        ),
                                    ),
                                ),
                            ),
                        _ &&
                            !A &&
                            r().createElement(
                                f.l,
                                { tooltipArgs: E },
                                r().createElement(
                                    'div',
                                    { className: Y },
                                    r().createElement('div', { className: i()(V, z) }),
                                    r().createElement(
                                        'div',
                                        { className: K },
                                        o === w.cJ.ExtraSmall
                                            ? R.strings.crew.personalFile.discount.short()
                                            : R.strings.crew.personalFile.discount.full(),
                                    ),
                                ),
                            ),
                    );
                });
                var J = t(6373);
                const ee = 'Name_base_2d',
                    ue = 'Name_label_31',
                    te = 'Name_voiceButton_00',
                    ne = 'Name_soundIcon_2a',
                    re = (0, o.Pi)(function ({ className: e }) {
                        const u = C(),
                            t = u.model,
                            a = u.controls,
                            o = (0, n.useCallback)(() => {
                                a.playUniqueVoice();
                            }, [a]);
                        return r().createElement(
                            'div',
                            { className: i()(ee, e) },
                            r().createElement(
                                'div',
                                null,
                                r().createElement('div', { className: ue }, t.fullName.get()),
                                t.hasUniqueSound.get() &&
                                    r().createElement(
                                        J.i,
                                        {
                                            header: R.strings.crew.personalFile.voiceTooltip.header(),
                                            body: R.strings.crew.personalFile.voiceTooltip.body(),
                                        },
                                        r().createElement(
                                            D.u5,
                                            { size: D.qE.extraSmall, type: D.L$.ghost, mixClass: te, onClick: o },
                                            r().createElement('div', { className: ne }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ae = t(7078),
                    ie = t(2603);
                const oe = 'Role_base_e0',
                    se = 'Role_role_2a',
                    le = 'Role_roleIcon_e6',
                    ce = 'Role_roleName_79',
                    de = 'Role_commanderFeature_e2',
                    me = 'Role_sense_21',
                    Ee = 'Role_commanderBonus_99',
                    _e = (0, o.Pi)(function ({ className: e }) {
                        const u = C().model,
                            t = u.role.get();
                        return r().createElement(
                            'div',
                            { className: i()(oe, e) },
                            r().createElement(
                                ae.t,
                                { args: { tooltipId: ie.v$ }, targetId: $e },
                                r().createElement(
                                    'div',
                                    { className: se },
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(t)})`,
                                        },
                                        className: le,
                                    }),
                                    r().createElement('div', { className: ce }, (0, S.Gc)(t, u.isFemale.get())),
                                ),
                            ),
                            'commander' === t &&
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
                var Ae = t(9690),
                    Fe = t(7727);
                const ge = 'SpecializationSlots_base_1a',
                    he = 'SpecializationSlots_frame_85',
                    ve = 'SpecializationSlots_frame__first_23',
                    pe = 'SpecializationSlots_frame__crewLocked_de',
                    Be = 'SpecializationSlots_darkFrame_34',
                    Ce = 'SpecializationSlots_frame__hover_06',
                    De = 'SpecializationSlots_shadow_4a',
                    fe = 'SpecializationSlots_arrows_6e',
                    be = 'SpecializationSlots_arrowsIcon_fc',
                    we = 'SpecializationSlots_changeVehicle_58',
                    ke = 'SpecializationSlots_tier_68',
                    ye = 'SpecializationSlots_vehicle_b6',
                    Se = 'SpecializationSlots_vehicleTypeIcon_77',
                    Ne = 'SpecializationSlots_info_7c',
                    xe = 'SpecializationSlots_flag_84',
                    Te = 'SpecializationSlots_vehicleIcon_ec',
                    Le = 'SpecializationSlots_premVehicle_c3';
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Me = (0, o.Pi)(function ({ className: e }) {
                        const u = C(),
                            t = u.model,
                            a = u.controls,
                            o = t.nativeVehicle.get(),
                            s = t.isCrewLocked.get(),
                            c = (0, n.useState)(!1),
                            d = c[0],
                            m = c[1],
                            E = (0, n.useContext)(qe),
                            _ = (0, y.Sr)(k.D9, {
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
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.$dyn(e ? 'c_48x48_elite' : 'c_48x48_specSlot').$dyn((0, l.BN)(o.type))})`,
                                }),
                                [o.type],
                            ),
                            v = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.nations.c_155x31.$dyn(o.nation)})`,
                                }),
                                [o.nation],
                            );
                        return r().createElement(
                            'div',
                            { className: i()(ge, e) },
                            r().createElement(
                                J.i,
                                {
                                    header: s
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: s ? R.strings.crew.personalFile.crewLockedTooltip.body() : o.name,
                                    ignoreMouseClick: s,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: s ? void 0 : A,
                                        onMouseLeave: s ? void 0 : F,
                                        onClick: s ? void 0 : g,
                                        className: i()(he, ve, d && Ce, s && pe),
                                    },
                                    r().createElement('div', { className: Be }),
                                    r().createElement('div', { style: v, className: xe }),
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, l.BN)(`${o.nation}-${o.techName}`))})`,
                                        },
                                        className: Te,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Ne },
                                        r().createElement('div', { className: ke }, (0, Ae.HG)(o.tier)),
                                        r().createElement('div', { style: h(o.isPremium), className: Se }),
                                        r().createElement('div', { className: ye }, o.name),
                                    ),
                                    r().createElement('div', { className: De }),
                                    r().createElement(
                                        'div',
                                        { className: fe },
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
                                        r().createElement('div', { style: h(!0), className: Se }),
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
                    Oe = 'TankmanInfoApp_base_8a',
                    Pe = 'TankmanInfoApp_tankmanFolder_2d',
                    Ie = 'TankmanInfoApp_descriptionBlock_f2',
                    He = 'TankmanInfoApp_role_71',
                    We = 'TankmanInfoApp_name_68',
                    Ve = 'TankmanInfoApp_description_a6',
                    ze = 'TankmanInfoApp_currentVehicle_06',
                    je = 'TankmanInfoApp_nativeVehicle_5c',
                    Ze = 'TankmanInfoApp_nativeVehicle__withDescription_03',
                    Ue = 'TankmanInfoApp_slots_a1',
                    Ge = (0, o.Pi)(function ({ className: e }) {
                        const u = C().model,
                            t = u.description.get(),
                            n = Boolean(t);
                        return r().createElement(
                            'div',
                            { className: i()(Oe, e) },
                            r().createElement(g, { name: u.iconName.get(), isSkin: u.isInSkin.get(), className: Pe }),
                            r().createElement(
                                'div',
                                { className: Ie },
                                r().createElement(_e, { className: He }),
                                r().createElement(re, { className: We }),
                                n &&
                                    r().createElement(s.w, {
                                        classMix: Ve,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        text: t,
                                    }),
                                r().createElement(
                                    'div',
                                    { className: i()(je, n && Ze) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                r().createElement(Me, { className: Ue }),
                                r().createElement(Q, { className: ze }),
                            ),
                        );
                    }),
                    $e = R.views.lobby.crew.widgets.TankmanInfo('resId'),
                    qe = (0, n.createContext)(!1),
                    Ye = r().memo(function ({ rootId: e = $e, className: u, isLoggingEnabled: t = !1 }) {
                        return r().createElement(
                            B,
                            { options: { rootId: e } },
                            r().createElement(qe.Provider, { value: t }, r().createElement(Ge, { className: u })),
                        );
                    });
            },
            2603: (e, u, t) => {
                t.d(u, { HZ: () => n, Th: () => a, uN: () => r, v$: () => i });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    a = 'achievement',
                    i = 'tankman';
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            372: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            4682: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            5636: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            6143: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                };
            },
            9627: (e, u, t) => {
                t.d(u, { Z: () => n });
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
            7629: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                };
            },
            3938: (e, u, t) => {
                t.d(u, { Z: () => n });
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 2),
        (() => {
            var e = { 2: 0, 987: 0, 938: 0, 695: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(894));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
