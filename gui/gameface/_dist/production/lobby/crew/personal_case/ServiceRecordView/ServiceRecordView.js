(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6880),
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
                    onMouseDown: g,
                    onMouseUp: F,
                    onMouseLeave: h,
                    onClick: f,
                }) => {
                    const v = (0, i.useRef)(null),
                        p = (0, i.useState)(t),
                        B = p[0],
                        C = p[1],
                        D = (0, i.useState)(!1),
                        b = D[0],
                        w = D[1],
                        y = (0, i.useState)(!1),
                        k = y[0],
                        S = y[1],
                        x = (0, i.useCallback)(() => {
                            c || (v.current && (v.current.focus(), C(!0)));
                        }, [c]),
                        N = (0, i.useCallback)(
                            (e) => {
                                B && null !== v.current && !v.current.contains(e.target) && C(!1);
                            },
                            [B],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                c || (f && f(e));
                            },
                            [c, f],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, a.G)(m), _ && _(e), S(!0));
                            },
                            [c, m, _],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                c || (F && F(e), w(!1));
                            },
                            [c, F],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (null !== E && (0, a.G)(E), g && g(e), t && x(), w(!0));
                            },
                            [c, E, g, x, t],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (h && h(e), w(!1));
                            },
                            [c, h],
                        ),
                        W = r()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${u}`]]: u,
                                [o.Z.base__focus]: B,
                                [o.Z.base__highlightActive]: b,
                                [o.Z.base__firstHover]: k,
                            },
                            d,
                        ),
                        H = r()(o.Z.state, o.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, i.useEffect)(() => {
                            C(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: v,
                                className: W,
                                onMouseEnter: L,
                                onMouseMove: O,
                                onMouseUp: I,
                                onMouseDown: P,
                                onMouseLeave: M,
                                onClick: T,
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: H },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(r || (r = {}));
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => d });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    i = t(5262);
                const s = n.O.client.getSize('rem'),
                    o = s.width,
                    l = s.height,
                    c = Object.assign({ width: o, height: l }, (0, i.T)(o, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const i = ['children'];
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
                    const s = (0, n.useContext)(a.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        E = s.extraLargeWidth,
                        _ = s.largeWidth,
                        A = s.mediumWidth,
                        g = s.smallWidth,
                        F = s.extraSmallWidth,
                        h = s.extraLargeHeight,
                        f = s.largeHeight,
                        v = s.mediumHeight,
                        p = s.smallHeight,
                        B = s.extraSmallHeight,
                        C = { extraLarge: h, large: f, medium: v, small: p, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, r.H)(u, t, C);
                        if (t.largeWidth && _) return (0, r.H)(u, t, C);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, C);
                        if (t.smallWidth && g) return (0, r.H)(u, t, C);
                        if (t.extraSmallWidth && F) return (0, r.H)(u, t, C);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && f) return u;
                            if (t.mediumHeight && v) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && B) return u;
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
                    s = t(3138),
                    o = t(3815),
                    l = t(560),
                    c = t(7727),
                    d = t(6179),
                    m = t.n(d),
                    E = t(6358),
                    _ = t(372);
                const A = 'disable',
                    g = { pending: !1, offset: 0 },
                    F = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    h = () => {},
                    f = (e, u) => Math.max(20, e.offsetWidth * u),
                    v = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = F, onDrag: n = h }) => {
                        const v = (0, d.useRef)(null),
                            p = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, d.useState)(g),
                            y = w[0],
                            k = w[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    k(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            x = () => {
                                const u = C.current,
                                    t = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetWidth - f(u, s)) * o;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (p.current && B.current && C.current && D.current) {
                                            if (0 === e)
                                                return p.current.classList.add(A), void B.current.classList.remove(A);
                                            if (
                                                ((u = C.current),
                                                (t = D.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return p.current.classList.remove(A), void B.current.classList.add(A);
                                            var u, t;
                                            p.current.classList.remove(A), B.current.classList.remove(A);
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
                                    (u.style.width = `${f(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        v.current &&
                                            (1 === a
                                                ? v.current.classList.add(_.Z.base__nonActive)
                                                : v.current.classList.remove(_.Z.base__nonActive));
                                })(),
                                    x();
                            });
                        (0, d.useEffect)(() => (0, i.v)(N)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const u = () => {
                                            x();
                                        };
                                        let t = h;
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
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = C.current,
                                            o = D.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - y.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        u(), S(g);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, y.offset, y.pending, n, S]);
                        const T = (0, l.B)((u) => e.applyStepTo(u), b, [e]),
                            L = T[0],
                            R = T[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const O = (e) => {
                            e.target.classList.contains(A) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: v, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(E.Nm.Next));
                                },
                                onMouseUp: R,
                                ref: p,
                                onMouseEnter: O,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = D.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                S({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = D.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? E.Nm.Prev : E.Nm.Next);
                                            }
                                    },
                                    ref: C,
                                    onMouseEnter: O,
                                },
                                m().createElement('div', { ref: D, className: r()(_.Z.thumb, u.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(E.Nm.Prev));
                                },
                                onMouseUp: R,
                                ref: B,
                                onMouseEnter: O,
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
                    s = t(2773),
                    o = t(7950),
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
                        g = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            i().createElement(o.Area, { className: m, api: g, classNames: d }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: u, onDrag: _, classNames: A }),
                    );
                };
            },
            7950: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        Area: () => m,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    s = t.n(i),
                    o = t(2773),
                    l = t(2840),
                    c = t(4682),
                    d = t(6358);
                const m = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(c.Z.base, u) },
                        s().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (m.Bar = o.$Q), (m.Default = l.K);
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
                    s = t(3138),
                    o = t(3815),
                    l = t(560),
                    c = t(7727),
                    d = t(6179),
                    m = t.n(d),
                    E = t(7701),
                    _ = t(9168);
                const A = 'disable',
                    g = () => {},
                    F = { pending: !1, offset: 0 },
                    h = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    f = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    v = (e, u) => Math.max(20, e.offsetHeight * u),
                    p = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = h, onDrag: n = g }) => {
                        const p = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(F),
                            k = y[0],
                            S = y[1],
                            x = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        b.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current });
                                },
                                [n],
                            ),
                            N = (0, o.z)(() => {
                                const u = b.current,
                                    t = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${v(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    p.current &&
                                        (1 === a
                                            ? p.current.classList.add(_.Z.base__nonActive)
                                            : p.current.classList.remove(_.Z.base__nonActive)),
                                    a
                                );
                            }),
                            T = (0, o.z)(() => {
                                const u = D.current,
                                    t = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetHeight - v(u, s)) * o;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (B.current && C.current && D.current && b.current) {
                                            if (0 === Math.round(e))
                                                return B.current.classList.add(A), void C.current.classList.remove(A);
                                            if (
                                                ((u = D.current),
                                                (t = b.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return B.current.classList.remove(A), void C.current.classList.add(A);
                                            var u, t;
                                            B.current.classList.remove(A), C.current.classList.remove(A);
                                        }
                                    })(l);
                            }),
                            L = (0, o.z)(() => {
                                f(e, () => {
                                    N(), T();
                                });
                            });
                        (0, d.useEffect)(() => (0, i.v)(L)),
                            (0, d.useEffect)(() => {
                                const u = () => {
                                    f(e, () => {
                                        T();
                                    });
                                };
                                let t = g;
                                const n = () => {
                                    t(), (t = (0, i.v)(L));
                                };
                                return (
                                    e.events.on('recalculateContent', L),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', L),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!k.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        x(F);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        f(e, (t) => {
                                            const r = D.current,
                                                a = b.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = u.screenY - k.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, k.offset, k.pending, n, x]);
                        const R = (0, l.B)((u) => e.applyStepTo(u), w, [e]),
                            O = R[0],
                            I = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', I, !0),
                                () => document.removeEventListener('mouseup', I, !0)
                            ),
                            [I],
                        );
                        const P = (e) => {
                            e.target.classList.contains(A) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: p, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), O(E.Nm.Next));
                                },
                                ref: B,
                                onMouseEnter: P,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = b.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                x({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    b.current &&
                                                        f(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? E.Nm.Prev : E.Nm.Next);
                                            }
                                    },
                                    ref: D,
                                    onMouseEnter: P,
                                },
                                m().createElement('div', { ref: b, className: r()(_.Z.thumb, u.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), O(E.Nm.Prev));
                                },
                                onMouseUp: I,
                                ref: C,
                                onMouseEnter: P,
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
                    s = t(6225),
                    o = t(9605),
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
                        g = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            i().createElement(o.Area, { className: d, classNames: m, api: g }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: u, onDrag: _, classNames: A }),
                    );
                };
            },
            9605: (e, u, t) => {
                t.r(u),
                    t.d(u, { Area: () => m, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6225),
                    l = t(1158),
                    c = t(7701),
                    d = t(5636);
                const m = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
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
                    s = t(9653),
                    o = t(3815),
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
                        const g = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                i = r[1];
                            return i <= a ? 0 : (0, n.u)(a, i, t);
                        };
                        return (n = {}) => {
                            const F = n.settings,
                                h = void 0 === F ? E : F,
                                f = (0, c.useRef)(null),
                                v = (0, c.useRef)(null),
                                p = (0, s.q)(),
                                B = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                C = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = f.current;
                                        u && (t(u, e), p.trigger('change', e), A && B());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                D = C[0],
                                b = C[1],
                                w = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return g(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = f.current;
                                        n &&
                                            b.start({
                                                scrollPosition: g(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: h.animationConfig,
                                                from: { scrollPosition: g(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [b, h.animationConfig, D.scrollPosition],
                                ),
                                k = (0, c.useCallback)(
                                    (e) => {
                                        const u = f.current,
                                            t = v.current;
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
                                        y(r);
                                    },
                                    [y, w, h.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && k(m(e)),
                                            f.current && p.trigger('mouseWheel', e, D.scrollPosition, u(f.current));
                                    },
                                    [D.scrollPosition, k, p],
                                ),
                                x = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = f.current;
                                            e &&
                                                (y(g(e, D.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [y, D.scrollPosition.goal],
                                ),
                                N = (0, o.z)(() => {
                                    const e = f.current;
                                    if (!e) return;
                                    const u = g(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && y(u, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (v.current ? _(v.current) : void 0),
                                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                                    getBounds: () =>
                                        f.current
                                            ? u(f.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: h.step.clampedArrowStepTimeout,
                                    clampPosition: g,
                                    handleMouseWheel: S,
                                    applyScroll: y,
                                    applyStepTo: k,
                                    contentRef: f,
                                    wrapperRef: v,
                                    scrollPosition: b,
                                    animationScroll: D,
                                    recalculateContent: N,
                                    events: { on: p.on, off: p.off },
                                }),
                                [D.scrollPosition, y, k, p.off, p.on, N, S, b, h.step.clampedArrowStepTimeout],
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
                t.d(u, { t: () => o });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const i = ['children'];
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
                    s = t(2056);
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
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(i.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(s.u, o({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const o = R.views.common.tooltip_window.simple_tooltip_content,
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
                            s(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
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
                    r = t(9916),
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
                const o = (e, u, t = {}, n = 0) => {
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
                            g = void 0 !== A && A,
                            F = e.decoratorId,
                            h = void 0 === F ? 0 : F,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            p = e.targetId,
                            B = void 0 === p ? 0 : p,
                            C = e.onShow,
                            D = e.onHide,
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
                            y = (0, a.useMemo)(() => B || (0, n.F)().resId, [B]),
                            k = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, h, { isMouseEvent: !0, on: !0, arguments: s(r) }, y),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [t, h, r, y, C]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, h, { on: !1 }, y),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, h, y, D]),
                            x = (0, a.useCallback)((e) => {
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
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return v
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, _ ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === g && S(), null == m || m(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === g && S(), null == d || d(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var N;
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
                t.d(u, { U: () => s });
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
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: a = 'model' } = {}) {
                    const s = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = s.get(u);
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
                                o = n.O.view.addModelObserver(i, u, !0);
                            return s.set(o, t), e && t(l(r)), o;
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
                            for (var e, t = r(s.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => o });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    s = t(8246);
                const o = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                E = (t, a, i) => {
                                    var o;
                                    const l = s.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
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
                                                            s = i.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            s[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            s
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
                                A = (0, a.useState)(o),
                                g = A[0],
                                F = A[1],
                                h = (0, a.useState)(() => E(o, l, d)),
                                f = h[0],
                                v = h[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? v(E(g, l, d)) : (_.current = !0);
                                }, [d, g, l]),
                                (0, a.useEffect)(() => {
                                    F(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                i().createElement(t.Provider, { value: f }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                                        i = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
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
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => B,
                        isFocused: () => v,
                        pxToRem: () => F,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function g() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function p() {
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
                    y = Promise.all([
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
                    s = 64,
                    o = (e, u) => {
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
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
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
                t(6179);
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
                let i, s, o;
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
                    })(o || (o = {}));
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
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
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
                t.d(u, { BN: () => r, Eg: () => i, dL: () => s, z4: () => a });
                t(1281);
                let n;
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
                const a = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    s =
                        ((() => {
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
                        })(),
                        (e) => {
                            return (
                                (u = R.strings.common.percentValue()),
                                (t = { value: e }),
                                u.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]))
                            );
                            var u, t;
                        });
            },
            5139: (e, u, t) => {
                function n(e, u, t, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), t.apply(l, o);
                        }
                        a ||
                            (n && !r && d(),
                            s(),
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
                        (o.cancel = function () {
                            s(), (a = !0);
                        }),
                        o
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
                t.d(u, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => F });
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
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    E = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                            A(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
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
                                })(u, _);
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
                    f = () => h(s.CLOSE),
                    v = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var p = t(7572);
                const B = r.instance,
                    C = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + i.x,
                                    y: E.O.view.pxToRem(c) + i.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, f);
                        },
                        handleViewEvent: h,
                        onBindingsReady: F,
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
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            3618: (e, u, t) => {
                t.d(u, { w: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3415),
                    i = t(4419),
                    s = t(6179),
                    o = t.n(s),
                    l = t(6143),
                    c = t(3310),
                    d = t(131),
                    m = t(9053);
                const E = o().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: _ = !1,
                        targetId: A,
                        justifyContent: g = m.v2.FlexStart,
                        alignContent: F = m.v2.FlexStart,
                        truncateIdentify: h = m.YA,
                    }) => {
                        const f = (0, s.useRef)(null),
                            v = (0, s.useRef)({ height: 0, width: 0 }),
                            p = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            B = p[0],
                            C = p[1],
                            D = (0, s.useMemo)(() => (0, c.s)(e, n), [n, e]),
                            b = (0, s.useMemo)(() => {
                                if (E && B.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: A,
                                    };
                            }, [n, E, A, e, B.isTruncated]),
                            w = (0, s.useCallback)(
                                (e) => {
                                    (v.current.width = e.contentRect.width), (v.current.height = e.contentRect.height);
                                    const u = (0, d.T)(f, D, v.current, h),
                                        n = u[0],
                                        r = u[1];
                                    C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                },
                                [t, h, D],
                            ),
                            y = (0, s.useMemo)(() => ({ justifyContent: g, alignContent: F }), [F, g]);
                        return (
                            (0, i.y)(f, w, _),
                            o().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        u,
                                        l.Z.base__zeroPadding,
                                        _ && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: y,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: f }, D),
                                o().createElement(
                                    a.l,
                                    { tooltipArgs: b },
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !B.isTruncateFinished && _ && l.Z.truncated__hide,
                                            ),
                                            style: y,
                                        },
                                        B.isTruncateFinished && _ ? B.elementList : D,
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
                const s = i.u6
                        ? (e) => {
                              const u = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      (0, a.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e) => {
                              const u = /[\s\u002d]/g;
                              let t = u.exec(e);
                              if (!t) return [e];
                              const n = [];
                              let r = 0;
                              for (; t; ) n.push(e.slice(r, u.lastIndex)), (r = u.lastIndex), (t = u.exec(e));
                              return r !== e.length && n.push(e.slice(r)), n;
                          },
                    o = (e, u = '') => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: i.kH.Word, colorTag: u, childList: s(e) });
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
                                    n.push(...o(e, t));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...o(String(a), t))
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
                            e.childList.forEach((s, o) => {
                                const l = `${t}_${o}`;
                                if ((0, r.dz)(s)) {
                                    const e = s,
                                        u = e.blockType,
                                        t = n.IY[u],
                                        r = a(e, t, l);
                                    i.push(...r);
                                } else i.push(u({ elementList: [s], textBlock: e, key: l }));
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
                                            s = n.IY[i],
                                            o = a(e, s, u);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? t.push(s({ elementList: o, textBlock: e, key: `${u}` }))
                                                : t.push(...o),
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
                    s = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    o = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = s(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const o = Math.max(t + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, u, t, n, i, s) => {
                        let c = -1,
                            d = null;
                        for (let m = t; m >= 0; m--) {
                            const t = e[m],
                                E = Number(e[m].getAttribute(a.bF));
                            if (E === a.kH.LineBreak || E === a.kH.NewLine || E === a.kH.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = o(t, n, i),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const E = _.slice(0, _.length - l) + s,
                                    A = u[m];
                                (d = r().cloneElement(A, A.props, E)), (c = m);
                                break;
                            }
                            {
                                const e = t.children,
                                    a = u[m],
                                    o = a.props.children,
                                    E = l(e, o, e.length - 1, n, i, s),
                                    A = E[0],
                                    g = E[1];
                                if (!(A < 0)) {
                                    const e = o.slice(0, A);
                                    (d = r().cloneElement(a, a.props, e, g)), (c = m);
                                    break;
                                }
                                i -= _.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, u, t, n = a.YA) => {
                        const r = [...u],
                            o = e.current;
                        if (!o) return [r, !1];
                        const c = t.height,
                            d = t.width,
                            m = o.lastElementChild;
                        if (!i(m, c) && s(m, d) <= 0) return [r, !1];
                        const E = o.children,
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
                            g = A[0],
                            F = A[1];
                        return F && (r.splice(g, 1, F), r.splice(g + 1)), [r, !0];
                    };
            },
            9053: (e, u, t) => {
                let n, r, a;
                t.d(u, { YA: () => s, aF: () => l, bF: () => o, dz: () => i, kH: () => n, u6: () => c, v2: () => r }),
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
                    o = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    );
            },
            597: (e, u, t) => {
                t.d(u, { IY: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    s = t(9053),
                    o = t(9627),
                    l = t(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? o.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(l.Z.word, o.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: t, 'data-block-type': u.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    m = {
                        [s.kH.Word]: d,
                        [s.kH.NoBreakSymbol]: d,
                        [s.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: t }, e)),
                            ),
                        [s.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': s.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [s.kH.NewLine]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': s.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [s.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': s.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
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
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            4828: (e, u, t) => {
                t.d(u, { D9: () => n, eX: () => r, sC: () => a, sk: () => s });
                const n = 'crew';
                let r, a, i, s, o, l, c, d;
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
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(i || (i = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(s || (s = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(o || (o = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(l || (l = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(c || (c = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(d || (d = {}));
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
                t.d(u, { Sr: () => d });
                var n = t(6179),
                    r = t(3458);
                const a = ['action', 'timeLimit'];
                const i = 'metrics',
                    s = () => Date.now(),
                    o = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: r }) => ({
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
                                    (void 0 !== u && u > 0) || r.current.set(e, s());
                                },
                                [r],
                            ),
                            o = (0, n.useCallback)(() => {
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
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    a.current.delete(e);
                                    const n = s() - t;
                                    r.current.set(e, u + n);
                                },
                                [r, a],
                            ),
                            m = (0, n.useCallback)(
                                (e, u = 0, n, i) => {
                                    const o = r.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== a.current.get(e) && d(e), r.current.delete(e);
                                    const l = (s() - o) / 1e3;
                                    l <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, l)),
                                        t(e, n, i));
                                },
                                [r, a, t, d],
                            );
                        return [(e) => i(e), (e, u, t, n) => m(e, u, t, n), () => o(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e, u) => {
                        const t = ((e) => {
                                const u = c(e, i),
                                    t = u[0],
                                    r = u[1],
                                    a = u[2],
                                    s = u[3],
                                    l = u[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const u = e.action,
                                                t = e.timeLimit,
                                                n = e.logLevel;
                                            r(u, t, n, o(e));
                                        },
                                        [r],
                                    );
                                return [(e) => t(e), (e) => d(e), () => a(), (e) => s(e), (e) => l(e)];
                            })(e),
                            s = t[0],
                            l = t[1],
                            d = u.action,
                            m = u.timeLimit,
                            E = (function (e, u) {
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
                                onShow: () => s(d || r.Z0),
                                onHide: () => l(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, E)),
                            }),
                            [d, m, E, s, l],
                        );
                    };
            },
            8032: (e, u, t) => {
                t.d(u, { f: () => n });
                const n = (e, u) => e.split(',').includes(u);
            },
            7077: (e, u, t) => {
                t.d(u, { G: () => c, U: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    i = t(6179),
                    s = t.n(i),
                    o = t(3938);
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
                    }, [e, u, n]);
                    return s().createElement('div', { style: c, className: r()(o.Z.base, o.Z[`base__${u}`], t) });
                };
            },
            8018: (e, u, t) => {
                t.d(u, { Gc: () => a });
                t(771), t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const a = (e, u = !1, t = null) => {
                    const n = u ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
            },
            894: (e, u, t) => {
                var n = t(6179),
                    r = t.n(n),
                    a = t(3403),
                    i = t(4022),
                    s = t(3215),
                    o = t(4598),
                    l = t(9480),
                    c = t(1612),
                    d = t(9174),
                    m = t(3946);
                const E = (0, s.q)()(
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
                                t = (0, m.Om)(() => l.UI(u.achievementsList.get(), o.yR)),
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
                var g = t(6483),
                    F = t.n(g),
                    h = t(5415),
                    f = t(3961);
                const v = 'AchievementsList_base_90',
                    p = 'AchievementsList_title_f4',
                    B = 'AchievementsList_container_a7',
                    C = 'AchievementsList_item_10',
                    D = 'AchievementsList_bar_4a';
                var b = t(7078),
                    w = t(2603);
                const y = {
                    base: 'AchievementItem_base_45',
                    base__small: 'AchievementItem_base__small_b4',
                    icon: 'AchievementItem_icon_91',
                    amountBG: 'AchievementItem_amountBG_46',
                    amount: 'AchievementItem_amount_65',
                };
                let k;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(k || (k = {}));
                const S = ({ name: e, amount: u, block: t, isRare: n, size: a, className: i }) => {
                    const s =
                        a === k.Small ? R.images.gui.maps.icons.achievement : R.images.gui.maps.icons.achievement.big;
                    return r().createElement(
                        b.t,
                        {
                            args: { tooltipId: w.Th, name: e, block: t, isRare: n },
                            targetId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                        },
                        r().createElement(
                            'div',
                            { className: F()(y.base, y[`base__${a}`], i) },
                            r().createElement('div', {
                                className: y.icon,
                                style: { backgroundImage: `url(${s.$dyn(e)})` },
                            }),
                            u > 1 &&
                                r().createElement(
                                    'div',
                                    { className: y.amountBG },
                                    r().createElement('div', { className: y.amount }, u),
                                ),
                        ),
                    );
                };
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const N = (0, a.Pi)(({ className: e }) => {
                    const u = A().model,
                        t = (0, h.GS)().mediaSize,
                        n = t === h.cJ.Small || t === h.cJ.ExtraSmall ? k.Small : k.Big;
                    return r().createElement(
                        'div',
                        { className: F()(v, e) },
                        r().createElement(
                            f.z,
                            { classNames: { bar: D } },
                            r().createElement(
                                'div',
                                { className: p },
                                R.strings.crew.serviceRecord.achievementsList.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: B },
                                (0, l.UI)(u.computes.getAchievementsList(), (e, u) =>
                                    r().createElement(S, x({}, e, { size: n, key: `achievement_${u}`, className: C })),
                                ),
                            ),
                        ),
                    );
                });
                var T = t(6373);
                const L = 'BattlesInfo_base_25',
                    O = 'BattlesInfo_container_da',
                    I = 'Item_base_e0',
                    P = 'Item_icon_81',
                    M = 'Item_value_28',
                    W = 'Item_name_35',
                    H = ({ name: e, icon: u, value: t }) =>
                        r().createElement(
                            'div',
                            { className: I },
                            r().createElement('div', { className: P, style: { backgroundImage: `url(${u})` } }),
                            r().createElement('div', { className: M }, t),
                            r().createElement('div', { className: W }, e),
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
                                { className: O },
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
                                        r().createElement(H, {
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
                                        r().createElement(H, {
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
                            { className: F()($, e) },
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
                            u ? r().createElement(N, { className: X }) : r().createElement(K, { className: Q }),
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
                    s = t(6179),
                    o = t.n(s);
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
                    const n = (0, s.useState)(_.None),
                        A = n[0],
                        g = n[1],
                        F = A === _.Both,
                        h = (0, i.c4)();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = h.getBounds()[1],
                                    u = h.animationScroll.scrollPosition.get();
                                0 === e
                                    ? g(_.None)
                                    : u > 1 && u < e - 21
                                      ? g(_.Both)
                                      : u <= 1
                                        ? g(_.Bottom)
                                        : u >= e - 21 && g(_.Top);
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
                        o().createElement(
                            'div',
                            { className: r()(l, u) },
                            o().createElement(
                                a.X.Vertical.Default,
                                {
                                    api: h,
                                    barClassNames: { base: r()(m, null == t ? void 0 : t.bar) },
                                    scrollClassNames: { content: E },
                                },
                                e,
                            ),
                            (A === _.Top || F) && o().createElement('div', { className: c }),
                            (A === _.Bottom || F) && o().createElement('div', { className: d }),
                        )
                    );
                };
            },
            4022: (e, u, t) => {
                t.d(u, { d: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(299);
                const i = 'TankmanInfoWrapper_base_5a',
                    s = 'TankmanInfoWrapper_content_b4',
                    o = 'TankmanInfoWrapper_tankmanInfo_80',
                    l = 'TankmanInfoWrapper_children_66',
                    c = ({ children: e, isLoggingEnabled: u = !1 }) =>
                        r().createElement(
                            'div',
                            { className: i },
                            r().createElement(
                                'div',
                                { className: s },
                                r().createElement(a.JW, { className: o, isLoggingEnabled: u }),
                                r().createElement('div', { className: l }, e),
                            ),
                        );
            },
            299: (e, u, t) => {
                t.d(u, { Zk: () => tu, zn: () => uu, JW: () => nu });
                var n = t(6179),
                    r = t.n(n),
                    a = t(6483),
                    i = t.n(a),
                    s = t(3403),
                    o = t(3618),
                    l = t(3649),
                    c = t(7077);
                const d = 'TankmanFolder_base_00',
                    m = 'TankmanFolder_folder_f5',
                    E = 'TankmanFolder_photoFrame_ae',
                    _ = 'TankmanFolder_base__big_60',
                    A = 'TankmanFolder_icon_74',
                    g = 'TankmanFolder_innerShadow_44',
                    F = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    h = r().memo(function ({ name: e, className: u, isSkin: t = !1 }) {
                        const a = (0, n.useMemo)(() => {
                                const u = (0, l.BN)(String(e));
                                return null !== (t ? F.$dyn('crewSkins') : F).$dyn(u) ? c.U.c204x256 : c.U.c158x118;
                            }, [e, t]),
                            s = a === c.U.c204x256;
                        return r().createElement(
                            'div',
                            { className: i()(d, s && _, u) },
                            r().createElement('div', { className: m }),
                            r().createElement(
                                'div',
                                { className: E },
                                r().createElement(c.G, { name: e, size: a, isSkin: t, classMix: A }),
                                s && r().createElement('div', { className: g }),
                            ),
                        );
                    });
                var f = t(5716),
                    v = t(771),
                    p = t(3215),
                    B = t(3946),
                    C = t(8032);
                const D = (0, p.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'skillsEfficiency',
                                        'hasRetrainDiscount',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'hasUniqueSound',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                    },
                                ),
                                t = (0, B.Om)(() => u.skillsEfficiency.get() < v.yb),
                                n = (0, B.Om)(() => u.skillsEfficiency.get() === v.sU),
                                r = (0, B.Om)(() => {
                                    const e = u.currentVehicle.get(),
                                        t = u.nativeVehicle.get(),
                                        n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType:
                                            n && e.type !== t.type && !(0, C.f)(u.currentVehicle.get().tags, f.Yl),
                                        isWrongVehicle: n && e.name !== t.name && !e.isPremium,
                                    };
                                }),
                                a = (0, B.Om)(() =>
                                    u.hasRetrainDiscount.get()
                                        ? { args: { tooltipId: 'actionPrice' }, targetId: uu }
                                        : {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              targetId: uu,
                                              body: n()
                                                  ? R.strings.tooltips.buttons.retrain.body()
                                                  : R.strings.tooltips.buttons.increase.body(),
                                          },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    isUntrained: n,
                                    isLowPerksEfficiency: t,
                                    vehicleValidator: r,
                                    discountTooltipArgs: a,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    b = D[0],
                    w = D[1];
                var y = t(3457),
                    k = t(3415),
                    S = t(5415),
                    x = t(7078),
                    N = t(2603),
                    T = t(9916);
                const L = 'RetrainAndEfficiency_base_71',
                    O = 'RetrainAndEfficiency_canNotRetrainIcon_82',
                    I = 'RetrainAndEfficiency_retrainWarningLabel_af',
                    P = 'RetrainAndEfficiency_skillsEfficiencyLabel_45',
                    M = 'RetrainAndEfficiency_skillsEfficiencyLabel__red_e9',
                    W = 'RetrainAndEfficiency_skillsEfficiencyRateContainer_5c',
                    H = 'RetrainAndEfficiency_skillsEfficiencyNumber_9a',
                    V = 'RetrainAndEfficiency_skillsEfficiencyNumber__red_a1',
                    z = 'RetrainAndEfficiency_skillsEfficiencyInfoIcon_76',
                    j = r().memo(function ({
                        isPenaltyActive: e,
                        efficiencyValue: u,
                        tankmanID: t,
                        isWrongVehicle: n,
                        isWrongVehicleType: a,
                    }) {
                        return n || a
                            ? r().createElement(
                                  x.t,
                                  {
                                      targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                      args: { tooltipId: N.M4 },
                                  },
                                  r().createElement(
                                      'div',
                                      { className: L },
                                      r().createElement('div', { className: O }),
                                      r().createElement(
                                          'div',
                                          { className: I },
                                          R.strings.crew.personalFile.isUntrained(),
                                      ),
                                  ),
                              )
                            : r().createElement(
                                  x.t,
                                  {
                                      targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                      args: { tooltipId: N.Br, tankmanID: t },
                                  },
                                  r().createElement(
                                      'div',
                                      { className: L },
                                      r().createElement(
                                          'div',
                                          { className: i()(P, e && M) },
                                          R.strings.crew.personalFile.skillsEfficiency(),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: W },
                                          r().createElement(
                                              'div',
                                              { className: i()(H, e && V) },
                                              (0, l.dL)(T.Z5.getNumberFormat(100 * u, T.B3.INTEGRAL)),
                                          ),
                                          !e && r().createElement('div', { className: z }),
                                      ),
                                  ),
                              );
                    }),
                    Z = 'CurrentVehicleTrain_base_22',
                    U = 'CurrentVehicleTrain_currentVehicle_9d',
                    G = 'CurrentVehicleTrain_currentVehicleName_19',
                    $ = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    q = 'CurrentVehicleTrain_retrainContainer_6a',
                    Y = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    K = 'CurrentVehicleTrain_discountIcon_04',
                    X = 'CurrentVehicleTrain_discountIcon__forText_d9',
                    Q = 'CurrentVehicleTrain_retrainBtn_3e',
                    J = 'CurrentVehicleTrain_frameGlow_80',
                    ee = 'CurrentVehicleTrain_discountContainer_24',
                    ue = 'CurrentVehicleTrain_discountText_45',
                    te = (0, s.Pi)(function ({ className: e }) {
                        const u = w(),
                            t = u.model,
                            n = u.controls,
                            a = (0, S.GS)().mediaSize,
                            s = t.currentVehicle.get(),
                            l = t.skillsEfficiency.get(),
                            c = s.name,
                            d = Boolean(c),
                            m = t.computes.vehicleValidator(),
                            E = m.isWrongVehicleType,
                            _ = m.isWrongVehicle,
                            A = t.computes.discountTooltipArgs(),
                            g = t.hasRetrainDiscount.get(),
                            F = t.computes.isLowPerksEfficiency();
                        return r().createElement(
                            'div',
                            { className: i()(Z, e) },
                            r().createElement(
                                'div',
                                { className: U },
                                r().createElement(o.w, {
                                    text: d
                                        ? R.strings.crew.personalFile.inVehicle()
                                        : R.strings.crew.common.inBarracks(),
                                    binding: {
                                        vehicle: r().createElement('div', { className: i()(G, s.isPremium && $) }, c),
                                    },
                                }),
                            ),
                            r().createElement(j, {
                                isPenaltyActive: F,
                                efficiencyValue: l,
                                isWrongVehicle: _,
                                isWrongVehicleType: E,
                                tankmanID: t.invId.get(),
                            }),
                            F &&
                                r().createElement(
                                    k.l,
                                    { tooltipArgs: A },
                                    r().createElement(
                                        'div',
                                        { className: q },
                                        r().createElement(
                                            'div',
                                            { className: Y },
                                            g && r().createElement('div', { className: K }),
                                            r().createElement(
                                                y.u5,
                                                { onClick: n.retrain, type: y.L$.secondary, mixClass: Q },
                                                _ && r().createElement('div', { className: J }),
                                                t.computes.isUntrained()
                                                    ? R.strings.crew.personalFile.retrain()
                                                    : R.strings.crew.personalFile.increase(),
                                            ),
                                        ),
                                    ),
                                ),
                            g &&
                                !F &&
                                r().createElement(
                                    k.l,
                                    { tooltipArgs: A },
                                    r().createElement(
                                        'div',
                                        { className: ee },
                                        r().createElement('div', { className: i()(K, X) }),
                                        r().createElement(
                                            'div',
                                            { className: ue },
                                            a < S.cJ.Large
                                                ? R.strings.crew.personalFile.discount.short()
                                                : R.strings.crew.personalFile.discount.full(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var ne = t(6373);
                const re = 'Name_base_2d',
                    ae = 'Name_label_31',
                    ie = 'Name_voiceButton_00',
                    se = 'Name_soundIcon_2a',
                    oe = (0, s.Pi)(function ({ className: e }) {
                        const u = w(),
                            t = u.model,
                            a = u.controls,
                            s = (0, n.useCallback)(() => {
                                a.playUniqueVoice();
                            }, [a]);
                        return r().createElement(
                            'div',
                            { className: i()(re, e) },
                            r().createElement(
                                'div',
                                null,
                                r().createElement('div', { className: ae }, t.fullName.get()),
                                t.hasUniqueSound.get() &&
                                    r().createElement(
                                        ne.i,
                                        {
                                            header: R.strings.crew.personalFile.voiceTooltip.header(),
                                            body: R.strings.crew.personalFile.voiceTooltip.body(),
                                        },
                                        r().createElement(
                                            y.u5,
                                            { size: y.qE.extraSmall, type: y.L$.ghost, mixClass: ie, onClick: s },
                                            r().createElement('div', { className: se }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var le = t(8018);
                const ce = 'Role_base_e0',
                    de = 'Role_role_2a',
                    me = 'Role_roleIcon_e6',
                    Ee = 'Role_roleName_79',
                    _e = 'Role_commanderFeature_e2',
                    Ae = 'Role_sense_21',
                    ge = 'Role_commanderBonus_99',
                    Fe = (0, s.Pi)(function ({ className: e }) {
                        const u = w().model,
                            t = u.role.get();
                        return r().createElement(
                            'div',
                            { className: i()(ce, e) },
                            r().createElement(
                                x.t,
                                { args: { tooltipId: N.v$ }, targetId: uu },
                                r().createElement(
                                    'div',
                                    { className: de },
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(t)})`,
                                        },
                                        className: me,
                                    }),
                                    r().createElement('div', { className: Ee }, (0, le.Gc)(t, u.isFemale.get())),
                                ),
                            ),
                            'commander' === t &&
                                r().createElement(
                                    'div',
                                    { className: _e },
                                    r().createElement(
                                        x.t,
                                        {
                                            args: { skillName: 'commander_sixthSense', tooltipId: N.HZ, level: 100 },
                                            targetId: uu,
                                        },
                                        r().createElement('div', { className: Ae }),
                                    ),
                                    r().createElement(
                                        x.t,
                                        { args: { tooltipId: N.uN }, targetId: uu },
                                        r().createElement('div', { className: ge }),
                                    ),
                                ),
                        );
                    });
                var he = t(2056),
                    fe = t(9690),
                    ve = t(7727),
                    pe = t(9053),
                    Be = t(4828),
                    Ce = t(1943);
                const De = 'SpecializationSlots_base_1a',
                    be = 'SpecializationSlots_frame_85',
                    we = 'SpecializationSlots_frame__first_23',
                    ye = 'SpecializationSlots_frame__crewLocked_de',
                    ke = 'SpecializationSlots_darkFrame_34',
                    Se = 'SpecializationSlots_frame__hover_06',
                    xe = 'SpecializationSlots_shadow_4a',
                    Ne = 'SpecializationSlots_arrows_6e',
                    Te = 'SpecializationSlots_arrowsIcon_fc',
                    Le = 'SpecializationSlots_changeVehicle_58',
                    Re = 'SpecializationSlots_tier_68',
                    Oe = 'SpecializationSlots_vehicle_b6',
                    Ie = 'SpecializationSlots_vehicleTypeIcon_77',
                    Pe = 'SpecializationSlots_info_7c',
                    Me = 'SpecializationSlots_flag_84',
                    We = 'SpecializationSlots_vehicleIcon_ec',
                    He = 'SpecializationSlots_premVehicle_c3',
                    Ve = 'SpecializationSlots_premVehicleTypeIcon_c9';
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const je = (0, s.Pi)(function ({ className: e }) {
                        const u = w(),
                            t = u.model,
                            a = u.controls,
                            s = t.nativeVehicle.get(),
                            c = t.isCrewLocked.get(),
                            d = (0, n.useState)(!1),
                            m = d[0],
                            E = d[1],
                            _ = (0, n.useContext)(tu),
                            A = (0, Ce.Sr)(Be.D9, {
                                item: Be.sk.PremiumTooltip,
                                action: Be.eX.Viewed,
                                parentScreen: Be.sC.PersonalFile,
                            }),
                            g = (0, n.useCallback)(() => {
                                ve.$.playHighlight(), E(!0);
                            }, []),
                            F = (0, n.useCallback)(() => E(!1), []),
                            h = (0, n.useCallback)(() => {
                                ve.$.playClick(), a.changeVehicle();
                            }, [a]),
                            f = (0, n.useCallback)(
                                (e) => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.$dyn(e ? 'c_48x48_elite' : 'c_48x48_specSlot').$dyn((0, l.BN)(s.type))})`,
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
                            { className: i()(De, e) },
                            r().createElement(
                                ne.i,
                                {
                                    header: c
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: c ? R.strings.crew.personalFile.crewLockedTooltip.body() : s.name,
                                    ignoreMouseClick: c,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: c ? void 0 : g,
                                        onMouseLeave: c ? void 0 : F,
                                        onClick: c ? void 0 : h,
                                        className: i()(be, we, m && Se, c && ye),
                                    },
                                    r().createElement('div', { className: ke }),
                                    r().createElement('div', { style: v, className: Me }),
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, l.BN)(`${s.nation}-${s.techName}`))})`,
                                        },
                                        className: We,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Pe },
                                        r().createElement('div', { className: Re }, (0, fe.HG)(s.tier)),
                                        r().createElement('div', { style: f(s.isPremium), className: Ie }),
                                        r().createElement('div', { className: Oe }, s.name),
                                    ),
                                    r().createElement('div', { className: xe }),
                                    r().createElement(
                                        'div',
                                        { className: Ne },
                                        r().createElement('div', { className: Te }),
                                        r().createElement(
                                            'div',
                                            { className: Le },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                he.u,
                                ze(
                                    {
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                    },
                                    _ ? A : void 0,
                                ),
                                r().createElement(
                                    'div',
                                    { className: be },
                                    r().createElement('div', { style: v, className: Me }),
                                    r().createElement(
                                        'div',
                                        { className: Pe },
                                        r().createElement(o.w, {
                                            alignContent: pe.v2.Center,
                                            justifyContent: pe.v2.Center,
                                            classMix: He,
                                            text: R.strings.crew.personalFile.premiumVehicle(),
                                            binding: {
                                                icon: r().createElement('div', { style: f(!0), className: Ve }),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ze = 'TankmanInfoApp_base_8a',
                    Ue = 'TankmanInfoApp_tankmanFolder_2d',
                    Ge = 'TankmanInfoApp_descriptionBlock_f2',
                    $e = 'TankmanInfoApp_role_71',
                    qe = 'TankmanInfoApp_name_68',
                    Ye = 'TankmanInfoApp_description_a6',
                    Ke = 'TankmanInfoApp_currentVehicle_06',
                    Xe = 'TankmanInfoApp_nativeVehicle_5c',
                    Qe = 'TankmanInfoApp_nativeVehicle__withDescription_03',
                    Je = 'TankmanInfoApp_slots_a1',
                    eu = (0, s.Pi)(function ({ className: e }) {
                        const u = w().model,
                            t = u.description.get(),
                            n = Boolean(t);
                        return r().createElement(
                            'div',
                            { className: i()(Ze, e) },
                            r().createElement(h, { name: u.iconName.get(), isSkin: u.isInSkin.get(), className: Ue }),
                            r().createElement(
                                'div',
                                { className: Ge },
                                r().createElement(Fe, { className: $e }),
                                r().createElement(oe, { className: qe }),
                                n &&
                                    r().createElement(o.w, {
                                        classMix: Ye,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        text: t,
                                    }),
                                r().createElement(
                                    'div',
                                    { className: i()(Xe, n && Qe) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                r().createElement(je, { className: Je }),
                                r().createElement(te, { className: Ke }),
                            ),
                        );
                    }),
                    uu = R.views.lobby.crew.widgets.TankmanInfo('resId'),
                    tu = (0, n.createContext)(!1),
                    nu = r().memo(function ({ rootId: e = uu, className: u, isLoggingEnabled: t = !1 }) {
                        const a = (0, n.useMemo)(() => ({ rootId: e }), [e]);
                        return r().createElement(
                            b,
                            { options: a },
                            r().createElement(tu.Provider, { value: t }, r().createElement(eu, { className: u })),
                        );
                    });
            },
            5716: (e, u, t) => {
                t.d(u, { Yl: () => n });
                const n = 'wotPlus';
            },
            2603: (e, u, t) => {
                t.d(u, { Br: () => s, HZ: () => n, M4: () => o, Th: () => a, uN: () => r, v$: () => i });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    a = 'achievement',
                    i = 'tankman',
                    s = 'skillsEfficiency',
                    o = 'crewSkillUntrained';
            },
            771: (e, u, t) => {
                t.d(u, { sU: () => n, yb: () => r });
                const n = -1,
                    r = 1;
                let a;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(a || (a = {}));
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
                    base__large: 'CButton_base__large_5c',
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
                    word: 'renderers_word_f3',
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(894));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
