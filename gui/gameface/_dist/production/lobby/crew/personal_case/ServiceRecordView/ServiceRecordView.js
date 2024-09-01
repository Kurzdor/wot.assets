(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => c.L, qE: () => c.q, u5: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7727),
                    i = u(6179),
                    s = u.n(i),
                    o = u(6880),
                    c = u(2106);
                const l = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: l,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: h,
                    onMouseLeave: F,
                    onClick: f,
                }) => {
                    const p = (0, i.useRef)(null),
                        v = (0, i.useState)(u),
                        B = v[0],
                        C = v[1],
                        b = (0, i.useState)(!1),
                        D = b[0],
                        w = b[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                B && null !== p.current && !p.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, i.useEffect)(() => {
                            C(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: r()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    l && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    B && o.Z.base__focus,
                                    D && o.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    l || (null !== m && (0, a.G)(m), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    l || (h && h(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    l ||
                                        (null !== _ && (0, a.G)(_),
                                        A && A(e),
                                        u && (l || (p.current && (p.current.focus(), C(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    l || (F && F(e), w(!1));
                                },
                                onClick: function (e) {
                                    l || (f && f(e));
                                },
                            },
                            n !== c.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(o.Z.state, o.Z.state__default) },
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
                l.defaultProps = { type: c.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = l;
            },
            2106: (e, t, u) => {
                'use strict';
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(r || (r = {}));
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => d });
                var n = u(3138),
                    r = u(6179),
                    a = u(1043),
                    i = u(5262);
                const s = n.O.client.getSize('rem'),
                    o = s.width,
                    c = s.height,
                    l = Object.assign({ width: o, height: c }, (0, i.T)(o, c, a.j)),
                    d = (0, r.createContext)(l);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(3138),
                    r = u(6536),
                    a = u(6179),
                    i = u.n(a),
                    s = u(3495),
                    o = u(1043),
                    c = u(5262);
                const l = ({ children: e }) => {
                    const t = (0, a.useContext)(s.Y),
                        u = (0, a.useState)(t),
                        l = u[0],
                        d = u[1],
                        m = (0, a.useCallback)((e, t) => {
                            const u = n.O.view.pxToRem(e),
                                r = n.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: r }, (0, c.T)(u, r, o.j)));
                        }, []),
                        _ = (0, a.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', m), n.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', m),
                                    n.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [m, _],
                        );
                    const E = (0, a.useMemo)(() => Object.assign({}, l), [l]);
                    return i().createElement(s.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
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
                        o = s.extraLarge,
                        c = s.large,
                        l = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        _ = s.extraLargeWidth,
                        E = s.largeWidth,
                        g = s.mediumWidth,
                        A = s.smallWidth,
                        h = s.extraSmallWidth,
                        F = s.extraLargeHeight,
                        f = s.largeHeight,
                        p = s.mediumHeight,
                        v = s.smallHeight,
                        B = s.extraSmallHeight,
                        C = { extraLarge: F, large: f, medium: p, small: v, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && c) return t;
                        if (u.medium && l) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, r.H)(t, u, C);
                        if (u.largeWidth && E) return (0, r.H)(t, u, C);
                        if (u.mediumWidth && g) return (0, r.H)(t, u, C);
                        if (u.smallWidth && A) return (0, r.H)(t, u, C);
                        if (u.extraSmallWidth && h) return (0, r.H)(t, u, C);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && f) return t;
                            if (u.mediumHeight && p) return t;
                            if (u.smallHeight && v) return t;
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
                'use strict';
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
                'use strict';
                u.d(t, { YN: () => r.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    r = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                u.d(t, { $Q: () => p });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    i = u(1856),
                    s = u(3138),
                    o = u(3815),
                    c = u(560),
                    l = u(7727),
                    d = u(6179),
                    m = u.n(d),
                    _ = u(6358),
                    E = u(372);
                const g = 'disable',
                    A = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    F = () => {},
                    f = (e, t) => Math.max(20, e.offsetWidth * t),
                    p = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = h, onDrag: n = F }) => {
                        const p = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            D = e.stepTimeout || 100,
                            w = (0, d.useState)(A),
                            y = w[0],
                            k = w[1],
                            x = (0, d.useCallback)(
                                (e) => {
                                    k(e),
                                        b.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current });
                                },
                                [n],
                            ),
                            S = () => {
                                const t = C.current,
                                    u = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    c = (t.offsetWidth - f(t, s)) * o;
                                (u.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (v.current && B.current && C.current && b.current) {
                                            if (0 === e)
                                                return v.current.classList.add(g), void B.current.classList.remove(g);
                                            if (
                                                ((t = C.current),
                                                (u = b.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return v.current.classList.remove(g), void B.current.classList.add(g);
                                            var t, u;
                                            v.current.classList.remove(g), B.current.classList.remove(g);
                                        }
                                    })(c);
                            },
                            T = (0, o.z)(() => {
                                (() => {
                                    const t = b.current,
                                        u = C.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const a = Math.min(1, n / r);
                                    (t.style.width = `${f(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        p.current &&
                                            (1 === a
                                                ? p.current.classList.add(E.Z.base__nonActive)
                                                : p.current.classList.remove(E.Z.base__nonActive));
                                })(),
                                    S();
                            });
                        (0, d.useEffect)(() => (0, i.v)(T)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            S();
                                        };
                                        let u = F;
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
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const t = s.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = C.current,
                                            o = b.current;
                                        if (!s || !o) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const c = t.clientX - y.offset - s.getBoundingClientRect().x,
                                            l = (c / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: c, contentOffset: l });
                                    }),
                                    u = s.O.client.events.mouse.up(() => {
                                        t(), x(A);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, y.offset, y.pending, n, x]);
                        const R = (0, c.B)((t) => e.applyStepTo(t), D, [e]),
                            L = R[0],
                            N = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', N, !0),
                                () => document.removeEventListener('mouseup', N, !0)
                            ),
                            [N],
                        );
                        const I = (e) => {
                            e.target.classList.contains(g) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(E.Z.base, t.base), ref: p, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(E.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), L(_.Nm.Next));
                                },
                                onMouseUp: N,
                                ref: v,
                                onMouseEnter: I,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = b.current;
                                        if (n && 0 === t.button)
                                            if (((0, l.G)('play'), t.target === n))
                                                x({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = b.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: C,
                                    onMouseEnter: I,
                                },
                                m().createElement('div', { ref: b, className: r()(E.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(E.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(E.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), L(_.Nm.Prev));
                                },
                                onMouseUp: N,
                                ref: B,
                                onMouseEnter: I,
                            }),
                        );
                    });
            },
            2840: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    i = u.n(a),
                    s = u(2773),
                    o = u(7950),
                    c = u(4682);
                const l = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: l,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(c.Z.base, e.base) });
                        }, [n]),
                        A = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(c.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(c.Z.defaultScrollArea, l) },
                            i().createElement(o.Area, { className: m, api: A, classNames: d }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            7950: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        Area: () => m,
                        Bar: () => o.$Q,
                        DefaultScroll: () => c.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(6179),
                    s = u.n(i),
                    o = u(2773),
                    c = u(2840),
                    l = u(4682),
                    d = u(6358);
                const m = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(l.Z.base, t) },
                        s().createElement(
                            'div',
                            {
                                className: r()(l.Z.wrapper, null == u ? void 0 : u.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: r()(l.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (m.Bar = o.$Q), (m.Default = c.K);
            },
            6358: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { $Q: () => v });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    i = u(1856),
                    s = u(3138),
                    o = u(3815),
                    c = u(560),
                    l = u(7727),
                    d = u(6179),
                    m = u.n(d),
                    _ = u(7701),
                    E = u(9168);
                const g = 'disable',
                    A = () => {},
                    h = { pending: !1, offset: 0 },
                    F = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    f = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    p = (e, t) => Math.max(20, e.offsetHeight * t),
                    v = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = F, onDrag: n = A }) => {
                        const v = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(h),
                            k = y[0],
                            x = y[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    x(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            T = (0, o.z)(() => {
                                const t = D.current,
                                    u = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${p(u, a)}px`),
                                    (t.style.display = 'flex'),
                                    v.current &&
                                        (1 === a
                                            ? v.current.classList.add(E.Z.base__nonActive)
                                            : v.current.classList.remove(E.Z.base__nonActive)),
                                    a
                                );
                            }),
                            R = (0, o.z)(() => {
                                const t = b.current,
                                    u = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    c = (t.offsetHeight - p(t, s)) * o;
                                (u.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (B.current && C.current && b.current && D.current) {
                                            if (0 === Math.round(e))
                                                return B.current.classList.add(g), void C.current.classList.remove(g);
                                            if (
                                                ((t = b.current),
                                                (u = D.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return B.current.classList.remove(g), void C.current.classList.add(g);
                                            var t, u;
                                            B.current.classList.remove(g), C.current.classList.remove(g);
                                        }
                                    })(c);
                            }),
                            L = (0, o.z)(() => {
                                f(e, () => {
                                    T(), R();
                                });
                            });
                        (0, d.useEffect)(() => (0, i.v)(L)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    f(e, () => {
                                        R();
                                    });
                                };
                                let u = A;
                                const n = () => {
                                    u(), (u = (0, i.v)(L));
                                };
                                return (
                                    e.events.on('recalculateContent', L),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', L),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!k.pending) return;
                                const t = s.O.client.events.mouse.up(() => {
                                        S(h);
                                    }),
                                    u = s.O.client.events.mouse.move(([t]) => {
                                        f(e, (u) => {
                                            const r = b.current,
                                                a = D.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = t.screenY - k.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, k.offset, k.pending, n, S]);
                        const N = (0, c.B)((t) => e.applyStepTo(t), w, [e]),
                            I = N[0],
                            P = N[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', P, !0),
                                () => document.removeEventListener('mouseup', P, !0)
                            ),
                            [P],
                        );
                        const O = (e) => {
                            e.target.classList.contains(g) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(E.Z.base, t.base), ref: v, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(E.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), I(_.Nm.Next));
                                },
                                ref: B,
                                onMouseEnter: O,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = D.current;
                                        if (n && 0 === t.button)
                                            if (((0, l.G)('play'), t.target === n))
                                                S({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    D.current &&
                                                        f(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: b,
                                    onMouseEnter: O,
                                },
                                m().createElement('div', { ref: D, className: r()(E.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(E.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(E.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), I(_.Nm.Prev));
                                },
                                onMouseUp: P,
                                ref: C,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            1158: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    i = u.n(a),
                    s = u(6225),
                    o = u(9605),
                    c = u(5636);
                const l = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: l,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: _,
                    onDrag: E,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(c.Z.base, e.base) });
                        }, [n]),
                        A = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(c.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(c.Z.area, l) },
                            i().createElement(o.Area, { className: d, classNames: m, api: A }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: _, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            9605: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { Area: () => m, Bar: () => o.$Q, Default: () => c.K, useVerticalScrollApi: () => l.c4 });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(6179),
                    s = u.n(i),
                    o = u(6225),
                    c = u(1158),
                    l = u(7701),
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
                m.Default = c.K;
            },
            7701: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { EO: () => E, Nm: () => m, he: () => _ });
                var n = u(7515),
                    r = u(1856),
                    a = u(3138),
                    i = u(4532),
                    s = u(9653),
                    o = u(3815),
                    c = u(4489),
                    l = u(6179),
                    d = u(7030);
                let m;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(m || (m = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    E = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: m,
                        getWrapperSize: E,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const A = (e, u) => {
                            const r = t(e),
                                a = r[0],
                                i = r[1];
                            return i <= a ? 0 : (0, n.u)(a, i, u);
                        };
                        return (n = {}) => {
                            const h = n.settings,
                                F = void 0 === h ? _ : h,
                                f = (0, l.useRef)(null),
                                p = (0, l.useRef)(null),
                                v = (0, s.q)(),
                                B = (0, c.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                C = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = f.current;
                                        t && (u(t, e), v.trigger('change', e), g && B());
                                    },
                                    onRest: (e) => v.trigger('rest', e),
                                    onStart: (e) => v.trigger('start', e),
                                    onPause: (e) => v.trigger('pause', e),
                                })),
                                b = C[0],
                                D = C[1],
                                w = (0, l.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = b.scrollPosition.get(),
                                            a = (null != (n = b.scrollPosition.goal) ? n : 0) - r;
                                        return A(e, t * u + a + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = f.current;
                                        n &&
                                            D.start({
                                                scrollPosition: A(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: F.animationConfig,
                                                from: { scrollPosition: A(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [D, F.animationConfig, b.scrollPosition],
                                ),
                                k = (0, l.useCallback)(
                                    (e) => {
                                        const t = f.current,
                                            u = p.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return E(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, F.step),
                                            r = w(t, e, n);
                                        y(r);
                                    },
                                    [y, w, F.step],
                                ),
                                x = (0, l.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && k(m(e)),
                                            f.current && v.trigger('mouseWheel', e, b.scrollPosition, t(f.current));
                                    },
                                    [b.scrollPosition, k, v],
                                ),
                                S = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = f.current;
                                            e &&
                                                (y(A(e, b.scrollPosition.goal), { immediate: !0 }),
                                                v.trigger('resizeHandled'));
                                        }),
                                    [y, b.scrollPosition.goal],
                                ),
                                T = (0, o.z)(() => {
                                    const e = f.current;
                                    if (!e) return;
                                    const t = A(e, b.scrollPosition.goal);
                                    t !== b.scrollPosition.goal && y(t, { immediate: !0 }),
                                        v.trigger('recalculateContent');
                                });
                            (0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', S),
                                    () => {
                                        window.removeEventListener('resize', S);
                                    }
                                ),
                                [S],
                            );
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (p.current ? E(p.current) : void 0),
                                    getContainerSize: () => (f.current ? e(f.current) : void 0),
                                    getBounds: () =>
                                        f.current
                                            ? t(f.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: F.step.clampedArrowStepTimeout,
                                    clampPosition: A,
                                    handleMouseWheel: x,
                                    applyScroll: y,
                                    applyStepTo: k,
                                    contentRef: f,
                                    wrapperRef: p,
                                    scrollPosition: D,
                                    animationScroll: b,
                                    recalculateContent: T,
                                    events: { on: v.on, off: v.off },
                                }),
                                [b.scrollPosition, y, k, v.off, v.on, T, x, D, F.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => r });
                var n = u(7950);
                const r = { Vertical: u(9605), Horizontal: n };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
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
                const o = (e) => {
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
                'use strict';
                u.d(t, { l: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(7078),
                    i = u(6373),
                    s = u(2056);
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
                const c = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, n);
                    const c = t.contentId;
                    return c ? r().createElement(s.u, o({}, t, { contentId: c }), n) : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => c });
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
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (e) => {
                        let t = e.children,
                            u = e.body,
                            c = e.header,
                            l = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, i);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: c, note: l, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, c, l, m]);
                        return a().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => c });
                var n = u(7902),
                    r = u(9916),
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
                const o = (e, t, u = {}, n = 0) => {
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
                    c = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            c = e.onMouseEnter,
                            l = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            h = e.decoratorId,
                            F = void 0 === h ? 0 : h,
                            f = e.isEnabled,
                            p = void 0 === f || f,
                            v = e.targetId,
                            B = void 0 === v ? 0 : v,
                            C = e.onShow,
                            b = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => B || (0, n.F)().resId, [B]),
                            k = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(u, F, { isMouseEvent: !0, on: !0, arguments: s(r) }, y),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [u, F, r, y, C]),
                            x = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(u, F, { on: !1 }, y),
                                        w.current.isVisible && b && b(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, F, y, b]),
                            S = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === p && x();
                            }, [p, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return p
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      c && c(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              x(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === A && x(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === A && x(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var T;
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
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1856: (e, t, u) => {
                'use strict';
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
            8246: (e, t, u) => {
                'use strict';
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
                    function o(e, t = 0) {
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
                    const c = (e) => {
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
                                o = n.O.view.addModelObserver(i, t, !0);
                            return s.set(o, u), e && u(c(r)), o;
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const u = c(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = r(s.keys()); !(e = u()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => o });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    i = u.n(a),
                    s = u(8246);
                const o = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: c, children: l, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                _ = (u, a, i) => {
                                    var o;
                                    const c = s.U(a),
                                        l =
                                            'real' === u
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == i ? void 0 : i.getter(e)) : l.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: l,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            l.subscribe(
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
                                                            l.subscribe(
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
                                                                l.subscribe(
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
                                                                l.subscribe(
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
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: l, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && i ? i.controls(g) : t(g),
                                        externalModel: l,
                                        mode: u,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                g = (0, a.useState)(o),
                                A = g[0],
                                h = g[1],
                                F = (0, a.useState)(() => _(o, c, d)),
                                f = F[0],
                                p = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? p(_(A, c, d)) : (E.current = !0);
                                }, [d, A, c]),
                                (0, a.useEffect)(() => {
                                    h(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                i().createElement(u.Provider, { value: f }, l)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => l, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const l = (function () {
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
                                        i = c[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = u(527),
                    r = u(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => r, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { O: () => a });
                var n = u(5959),
                    r = u(514);
                const a = { view: u(7641), client: n, sound: r.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => s, hY: () => i });
                var n = u(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    i = Object.assign({}, a, { sound: n.playSound }),
                    s = { play: i, setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => D,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => p,
                        pxToRem: () => h,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    i = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function l(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const D = Object.keys(r.W).reduce(
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => c });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    o = (e, t) => {
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
                    c = {
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
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                u.d(t, { ZT: () => n, jv: () => a, yR: () => r });
                function r(e) {
                    return e;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, u) => {
                'use strict';
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
                'use strict';
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
                'use strict';
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
                'use strict';
                u.d(t, { Aq: () => o, GS: () => c, cJ: () => i, fd: () => s });
                var n = u(6179),
                    r = u(7739),
                    a = u(1043);
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
                const c = () => {
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
                        c = ((e) => {
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
                        l = ((e) => {
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
                    return { mediaSize: a, mediaWidth: c, mediaHeight: l, remScreenWidth: t, remScreenHeight: u };
                };
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => r });
                var n = u(6179);
                const r = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            560: (e, t, u) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                u.d(t, { f: () => a });
                var n = u(5139),
                    r = u(6179);
                function a(e, t, u) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
            },
            5521: (e, t, u) => {
                'use strict';
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
            9480: (e, t, u) => {
                'use strict';
                u.d(t, { UI: () => n });
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
            },
            9690: (e, t, u) => {
                'use strict';
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
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { G: () => n });
            },
            3649: (e, t, u) => {
                'use strict';
                u.d(t, { BN: () => r, Eg: () => i, dL: () => s, z4: () => a });
                u(1281);
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
                                (t = R.strings.common.percentValue()),
                                (u = { value: e }),
                                t.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]))
                            );
                            var t, u;
                        });
            },
            5139: (e, t, u) => {
                'use strict';
                function n(e, t, u, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const c = this,
                            l = Date.now() - i;
                        function d() {
                            (i = Date.now()), u.apply(c, o);
                        }
                        a ||
                            (n && !r && d(),
                            s(),
                            void 0 === n && l > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - l : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (o.cancel = function () {
                            s(), (a = !0);
                        }),
                        o
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                'use strict';
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
                u.d(t, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => h });
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
                var i = u(8613);
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                            g(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
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
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, E);
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
                    f = () => F(s.CLOSE),
                    p = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var v = u(7572);
                const B = r.instance,
                    C = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => F(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => F(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(c) + i.x,
                                    y: _.O.view.pxToRem(l) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            F(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: A(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: F,
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
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            1504: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => o });
                var n = u(7739),
                    r = u(6179),
                    a = u.n(r),
                    i = u(2849);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, s);
                    return a().createElement(n.ZN, null, a().createElement(i.l, u, t));
                };
            },
            2849: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => g });
                var n = u(6483),
                    r = u.n(n),
                    a = u(926),
                    i = u.n(a),
                    s = u(6179),
                    o = u.n(s),
                    c = u(5415);
                const l = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: i().SMALL_WIDTH,
                        [c.fd.Medium]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH} ${i().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: i().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT} ${i().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: i().SMALL,
                        [c.cJ.Medium]: `${i().SMALL} ${i().MEDIUM}`,
                        [c.cJ.Large]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE}`,
                        [c.cJ.ExtraLarge]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE} ${i().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, l);
                        const a = (0, c.GS)(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            g = a.mediaSize;
                        return o().createElement('div', d({ className: r()(u, m[i], _[s], E[g]) }, n), t);
                    };
            },
            4029: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n.z });
                var n = u(1504);
            },
            3618: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3415),
                    i = u(4419),
                    s = u(6179),
                    o = u.n(s),
                    c = u(6143),
                    l = u(3310),
                    d = u(131),
                    m = u(9053);
                const _ = o().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: _ = !1,
                        isTruncationAvailable: E = !1,
                        customTooltipArgs: g,
                        targetId: A,
                        justifyContent: h = m.v2.FlexStart,
                        alignContent: F = m.v2.FlexStart,
                        truncateIdentify: f = m.YA,
                    }) => {
                        const p = (0, s.useRef)(null),
                            v = (0, s.useRef)({ height: 0, width: 0 }),
                            B = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            C = B[0],
                            b = B[1],
                            D = (0, s.useMemo)(() => (0, l.s)(e, n, { justifyContent: h }), [n, h, e]),
                            w = (0, s.useMemo)(() => {
                                if (_ && C.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, g, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: A,
                                    };
                            }, [n, _, A, e, g, C.isTruncated]),
                            y = (0, s.useCallback)(
                                (e) => {
                                    (v.current.width = e.contentRect.width), (v.current.height = e.contentRect.height);
                                    const t = (0, d.T)(p, D, v.current, f),
                                        n = t[0],
                                        r = t[1];
                                    b({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                },
                                [u, f, D],
                            ),
                            k = (0, s.useMemo)(() => ({ justifyContent: h, alignContent: F }), [F, h]);
                        return (
                            (0, i.y)(p, y, E),
                            o().createElement(
                                'div',
                                {
                                    className: r()(
                                        c.Z.base,
                                        t,
                                        c.Z.base__zeroPadding,
                                        E && c.Z.base__isTruncationAvailable,
                                    ),
                                    style: k,
                                },
                                o().createElement('div', { className: c.Z.unTruncated, ref: p }, D),
                                o().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            c.Z.tooltip,
                                            c.Z[`tooltip__justify-${h}`],
                                            c.Z[`tooltip__align-${F}`],
                                        ),
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.Z.truncated,
                                                !C.isTruncateFinished && E && c.Z.truncated__hide,
                                            ),
                                            style: k,
                                        },
                                        C.isTruncateFinished && E ? C.elementList : D,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => _ });
                var n = u(3649),
                    r = u(6799),
                    a = u(6960),
                    i = u(9053);
                const s = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    o = (e) => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? t.push(...((u = e), u.match(s) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    c = i.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...o(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const s = t.justifyContent === i.v2.FlexEnd ? n.index : u.lastIndex;
                                  r.push(e.slice(a, s)), (a = s), (n = u.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    l = (e, t = '', u) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: i.kH.Word, colorTag: t, childList: c(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        r = i.aF[u.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? n.push(
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
                                              })(u),
                                          )
                                        : n.push({ blockType: r, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    d = (e, t, u = '', n) => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...l(e, u, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        s = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...l(String(s), u, n))
                                        : r.push({ blockType: i.kH.Binding, colorTag: u, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    m = (e, t) => {
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
                    _ = (e, t = {}, u) => {
                        if (!e) return [];
                        const s = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...m(t.pop(), e)))
                                        : (u ? t.push(...m(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...d(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...d(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t, u),
                        );
                        return (0, r.w)(s);
                    };
            },
            6799: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => i });
                var n = u(597),
                    r = u(9053);
                const a = (e, t, u) => {
                        const i = [];
                        return (
                            e.childList.forEach((s, o) => {
                                const c = `${u}_${o}`;
                                if ((0, r.dz)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        r = a(e, u, c);
                                    i.push(...r);
                                } else i.push(t({ elementList: [s], textBlock: e, key: c }));
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
                                            o = a(e, s, t);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? u.push(s({ elementList: o, textBlock: e, key: `${t}` }))
                                                : u.push(...o),
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
                'use strict';
                u.d(t, { Z: () => n });
                const n = (e, t, u, n) => {
                    let r = t.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                    a !== e.length && u(e.slice(a));
                };
            },
            131: (e, t, u) => {
                'use strict';
                u.d(t, { T: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(9053);
                const i = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    s = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    o = (e, t, u) => {
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
                        const o = Math.max(u + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    c = (e, t, u, n, i, s) => {
                        let l = -1,
                            d = null;
                        for (let m = u; m >= 0; m--) {
                            const u = e[m],
                                _ = Number(e[m].getAttribute(a.bF));
                            if (_ === a.kH.LineBreak || _ === a.kH.NewLine || _ === a.kH.Binding) continue;
                            const E = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = o(u, n, i),
                                    a = e[0],
                                    c = e[1];
                                if (!a) {
                                    c > 0 && (i -= c);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - c) + s,
                                    g = t[m];
                                (d = r().cloneElement(g, g.props, _)), (l = m);
                                break;
                            }
                            {
                                const e = u.children,
                                    a = t[m],
                                    o = a.props.children,
                                    _ = c(e, o, e.length - 1, n, i, s),
                                    g = _[0],
                                    A = _[1];
                                if (!(g < 0)) {
                                    const e = o.slice(0, g);
                                    (d = r().cloneElement(a, a.props, e, A)), (l = m);
                                    break;
                                }
                                i -= E.length;
                            }
                        }
                        return [l, d];
                    },
                    l = (e, t, u, n = a.YA) => {
                        const r = [...t],
                            o = e.current;
                        if (!o) return [r, !1];
                        const l = u.height,
                            d = u.width,
                            m = o.lastElementChild;
                        if (!i(m, l) && s(m, d) <= 0) return [r, !1];
                        const _ = o.children,
                            E = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    i(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(_, l);
                        if (E < 0) return [r, !1];
                        const g = c(_, r, E, d, n.length, n),
                            A = g[0],
                            h = g[1];
                        return h && (r.splice(A, 1, h), r.splice(A + 1)), [r, !0];
                    };
            },
            9053: (e, t, u) => {
                'use strict';
                let n, r, a;
                u.d(t, {
                    Co: () => l,
                    YA: () => s,
                    aF: () => c,
                    bF: () => o,
                    dz: () => i,
                    kH: () => n,
                    u6: () => d,
                    v2: () => r,
                }),
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
                    c = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    l = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', l].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, u) => {
                'use strict';
                u.d(t, { IY: () => m });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    i = u.n(a),
                    s = u(9053),
                    o = u(9627),
                    c = u(7629);
                const l = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? o.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: r()(c.Z.word, o.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: c.Z.word, style: l(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: u, 'data-block-type': t.blockType, className: c.Z.word },
                                  e,
                              );
                    },
                    m = {
                        [s.kH.Word]: d,
                        [s.kH.NoBreakSymbol]: d,
                        [s.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [s.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': s.kH.LineBreak,
                                className: c.Z.lineBreak,
                            }),
                        [s.kH.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': s.kH.NewLine, className: c.Z.newLine },
                                e,
                            ),
                        [s.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': s.kH.NoBreakWrapper, className: c.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            7493: (e, t, u) => {
                'use strict';
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
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            4828: (e, t, u) => {
                'use strict';
                u.d(t, { D9: () => n, eX: () => r, sC: () => a, sk: () => s });
                const n = 'crew';
                let r, a, i, s, o, c, l, d;
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
                    })(c || (c = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(l || (l = {})),
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
            1943: (e, t, u) => {
                'use strict';
                u.d(t, { Sr: () => d });
                var n = u(6179),
                    r = u(7493);
                const a = ['action', 'timeLimit'];
                const i = 'metrics',
                    s = () => Date.now(),
                    o = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    c = (e, t) => {
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
                    l = (e, t) => {
                        const u = c(e, t),
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
                            o = (0, n.useCallback)(() => {
                                r.current.clear(), a.current.clear();
                            }, [r, a]),
                            l = (0, n.useCallback)(
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
                                    const o = r.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== a.current.get(e) && d(e), r.current.delete(e);
                                    const c = (s() - o) / 1e3;
                                    c <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, c)),
                                        u(e, n, i));
                                },
                                [r, a, u, d],
                            );
                        return [(e) => i(e), (e, t, u, n) => m(e, t, u, n), () => o(), (e) => l(e), (e) => d(e)];
                    },
                    d = (e, t) => {
                        const u = ((e) => {
                                const t = l(e, i),
                                    u = t[0],
                                    r = t[1],
                                    a = t[2],
                                    s = t[3],
                                    c = t[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                u = e.timeLimit,
                                                n = e.logLevel;
                                            r(t, u, n, o(e));
                                        },
                                        [r],
                                    );
                                return [(e) => u(e), (e) => d(e), () => a(), (e) => s(e), (e) => c(e)];
                            })(e),
                            s = u[0],
                            c = u[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
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
                                onShow: () => s(d || r.Z0),
                                onHide: () => c(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, _)),
                            }),
                            [d, m, _, s, c],
                        );
                    };
            },
            8032: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => n });
                const n = (e, t) => e.split(',').includes(t);
            },
            5640: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => o, U: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    i = u.n(a),
                    s = u(8236);
                let o;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(o || (o = {}));
                const c = {
                        [o.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [o.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [o.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    l = i().memo(({ nation: e, size: t, className: u }) =>
                        i().createElement('div', {
                            className: r()(s.Z.base, s.Z[`base__${t}`], u),
                            style: { backgroundImage: `url('${c[t].$dyn(e)}')` },
                        }),
                    );
            },
            1530: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => l, S: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    i = u(6179),
                    s = u.n(i),
                    o = u(8386);
                let c;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(c || (c = {}));
                const l = s().memo(function ({ role: e, size: t = c.c30x30, className: u }) {
                    const n = (0, i.useMemo)(() => {
                        try {
                            var u;
                            const n =
                                null == (u = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                    ? void 0
                                    : u.$dyn((0, a.BN)(e));
                            if (!n) throw Error;
                            return { backgroundImage: `url(${n})` };
                        } catch (t) {
                            console.error('Cant find resource in RoleIcon: ', e);
                        }
                    }, [e, t]);
                    return s().createElement('div', { style: n, className: r()(o.Z.base, o.Z[`base__${t}`], u) });
                });
            },
            9216: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(794),
                    i = u(7701),
                    s = u(6179),
                    o = u.n(s),
                    c = u(7734);
                let l;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(l || (l = {}));
                const d = ({ children: e, className: t, classNames: u }) => {
                    const n = (0, s.useState)(l.None),
                        d = n[0],
                        m = n[1],
                        _ = d === l.Both,
                        E = (0, i.c4)();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = E.getBounds()[1],
                                    t = E.animationScroll.scrollPosition.get();
                                0 === e
                                    ? m(l.None)
                                    : t > 1 && t < e - 21
                                      ? m(l.Both)
                                      : t <= 1
                                        ? m(l.Bottom)
                                        : t >= e - 21 && m(l.Top);
                            };
                            return (
                                E.events.on('change', e),
                                E.events.on('resizeHandled', e),
                                E.events.on('recalculateContent', e),
                                () => {
                                    E.events.off('change', e),
                                        E.events.off('resizeHandled', e),
                                        E.events.off('recalculateContent', e);
                                }
                            );
                        }, [E]),
                        o().createElement(
                            'div',
                            { className: r()(c.Z.base, t) },
                            o().createElement(
                                a.X.Vertical.Default,
                                {
                                    api: E,
                                    barClassNames: { base: r()(c.Z.bar, null == u ? void 0 : u.bar) },
                                    scrollClassNames: { content: r()(c.Z.content, null == u ? void 0 : u.content) },
                                },
                                e,
                            ),
                            (d === l.Top || _) &&
                                o().createElement(
                                    'div',
                                    { className: r()(c.Z.fadeContainerTop, null == u ? void 0 : u.lips) },
                                    o().createElement('div', { className: c.Z.fade }),
                                ),
                            (d === l.Bottom || _) &&
                                o().createElement(
                                    'div',
                                    { className: r()(c.Z.fadeContainerBottom, null == u ? void 0 : u.lips) },
                                    o().createElement('div', { className: c.Z.fade }),
                                ),
                        )
                    );
                };
            },
            7077: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => l, U: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    i = u(6179),
                    s = u.n(i),
                    o = u(3938);
                let c;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(c || (c = {}));
                const l = ({ name: e, size: t = c.c100x60, classMix: u, isSkin: n = !1 }) => {
                    const l = (0, i.useMemo)(() => {
                        try {
                            let u = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            n && (u = u.$dyn('crewSkins'));
                            const r = u.$dyn((0, a.BN)(e));
                            if (!r) throw Error;
                            return { backgroundImage: `url(${r})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, n]);
                    return s().createElement('div', { style: l, className: r()(o.Z.base, o.Z[`base__${t}`], u) });
                };
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { to: () => n });
                const n = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2);
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => a, gO: () => r });
                u(771), u(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const a = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
            },
            2418: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    r = u.n(n),
                    a = u(3403),
                    i = u(6035),
                    s = u(3215),
                    o = u(4598),
                    c = u(9480),
                    l = u(3946);
                const d = (0, s.q)()(({ observableModel: e }) => {
                        const t = Object.assign(
                            {},
                            e.primitives(['rankName', 'rankIcon', 'battlesCount', 'averageXP', 'isTankmanInVehicle']),
                            { achievementsList: e.array('achievementsList') },
                        );
                        return Object.assign({}, t, {
                            computes: {
                                getAchievementsList: (0, l.Om)(() => c.UI(t.achievementsList.get(), o.yR)),
                                hasAchievements: (0, l.Om)(() => t.achievementsList.get().length > 0),
                            },
                        });
                    }, o.ZT),
                    m = d[0],
                    _ = d[1];
                var E = u(5415),
                    g = u(9216);
                const A = 'AchievementsList_base_90',
                    h = 'AchievementsList_scrollableContent_5c',
                    F = 'AchievementsList_title_f4',
                    f = 'AchievementsList_container_a7',
                    p = 'AchievementsList_item_10',
                    v = 'AchievementsList_bar_4a';
                var B = u(6483),
                    C = u.n(B),
                    b = u(7078),
                    D = u(2603);
                const w = {
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
                const k = ({ name: e, amount: t, block: u, isRare: n, size: a, className: i }) => {
                        const s =
                            a === y.Small
                                ? R.images.gui.maps.icons.achievement
                                : R.images.gui.maps.icons.achievement.big;
                        return r().createElement(
                            b.t,
                            {
                                args: { tooltipId: D.Th, name: e, block: u, isRare: n },
                                targetId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                            },
                            r().createElement(
                                'div',
                                { className: C()(w.base, w[`base__${a}`], i) },
                                r().createElement('div', {
                                    className: w.icon,
                                    style: { backgroundImage: `url(${s.$dyn(e)})` },
                                }),
                                t > 1 &&
                                    r().createElement(
                                        'div',
                                        { className: w.amountBG },
                                        r().createElement('div', { className: w.amount }, t),
                                    ),
                            ),
                        );
                    },
                    x = (0, n.memo)(({ achievements: e }) => {
                        const t = (0, E.GS)().mediaSize,
                            u = t === E.cJ.Small || t === E.cJ.ExtraSmall ? y.Small : y.Big;
                        return r().createElement(
                            'div',
                            { className: A },
                            r().createElement(
                                g.z,
                                { className: h, classNames: { bar: v } },
                                r().createElement(
                                    'div',
                                    { className: F },
                                    R.strings.crew.serviceRecord.achievementsList.title(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f },
                                    e.map((e, t) =>
                                        r().createElement(k, {
                                            key: `achievement_${t}`,
                                            size: u,
                                            name: e.name,
                                            amount: e.amount,
                                            block: e.block,
                                            isRare: e.isRare,
                                            className: p,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                var S = u(6373);
                const T = 'BattlesInfo_base_25',
                    L = 'BattlesInfo_container_da',
                    N = 'Item_base_e0',
                    I = 'Item_icon_81',
                    P = 'Item_value_28',
                    O = 'Item_name_35',
                    M = ({ name: e, icon: t, value: u }) =>
                        r().createElement(
                            'div',
                            { className: N },
                            r().createElement('div', { className: I, style: { backgroundImage: `url(${t})` } }),
                            r().createElement('div', { className: P }, u),
                            r().createElement('div', { className: O }, e),
                        );
                var H = u(3649);
                const W = {
                    base: 'RankIcon_base_a6',
                    base__big: 'RankIcon_base__big_51',
                    base__small: 'RankIcon_base__small_26',
                };
                let V;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(V || (V = {}));
                const z = (e, t) => R.images.gui.maps.icons.tankmen.ranks.$dyn(t).$dyn((0, H.BN)(e)),
                    Z = ({ icon: e, size: t, className: u }) =>
                        r().createElement('div', {
                            className: C()(W.base, W[`base__${t}`], u),
                            style: { backgroundImage: `url(${z(e, t)})` },
                        }),
                    j = 'RankItem_base_19',
                    G = 'RankItem_icon_10',
                    U = 'RankItem_name_9d',
                    $ = ({ name: e, icon: t }) =>
                        r().createElement(
                            S.i,
                            {
                                header: R.strings.crew.serviceRecord.tooltip.rank.header(),
                                body: R.strings.crew.serviceRecord.tooltip.rank.body(),
                            },
                            r().createElement(
                                'div',
                                { className: j },
                                r().createElement(Z, { icon: t, size: V.Big, className: G }),
                                r().createElement('div', { className: U }, e),
                            ),
                        ),
                    K = (0, n.memo)(({ rankName: e, rankIcon: t, battlesCount: u, averageXP: n, className: a }) =>
                        r().createElement(
                            'div',
                            { className: C()(T, a) },
                            r().createElement(
                                'div',
                                { className: L },
                                r().createElement($, { name: e, icon: t }),
                                r().createElement(
                                    S.i,
                                    {
                                        header: R.strings.tooltips.battlesDetails.header(),
                                        body: R.strings.tooltips.battlesDetails.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(M, {
                                            name: R.strings.crew.serviceRecord.battlesCounter(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.battlesCountIcon(),
                                            value: u,
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    S.i,
                                    {
                                        header: R.strings.crew.serviceRecord.tooltip.averageXP.header(),
                                        body: R.strings.crew.serviceRecord.tooltip.averageXP.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(M, {
                                            name: R.strings.crew.serviceRecord.averageXP(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.averageXPIcon(),
                                            value: n,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    q = 'NoAchievements_base_a5',
                    Y = 'NoAchievements_icon_c7',
                    X = 'NoAchievements_text_34',
                    J = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: C()(q, e) },
                            r().createElement('div', { className: Y }),
                            r().createElement('div', { className: X }, R.strings.crew.serviceRecord.noAchievements()),
                        ),
                    Q = 'ServiceRecordApp_base_3d',
                    ee = 'ServiceRecordApp_content_08',
                    te = 'ServiceRecordApp_battlesInfo_ff',
                    ue = 'ServiceRecordApp_noAchievements_07',
                    ne = (0, a.Pi)(({ setTTCVisibility: e }) => {
                        e(!1);
                        const t = _().model,
                            u = t.computes.hasAchievements();
                        return r().createElement(
                            'div',
                            { className: Q },
                            r().createElement(
                                'div',
                                { className: ee },
                                r().createElement(i.J, {
                                    rootId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                                }),
                                r().createElement(K, {
                                    rankName: t.rankName.get(),
                                    rankIcon: t.rankIcon.get(),
                                    battlesCount: t.battlesCount.get(),
                                    averageXP: t.averageXP.get(),
                                    className: te,
                                }),
                                u
                                    ? r().createElement(x, { achievements: t.computes.getAchievementsList() })
                                    : r().createElement(J, { className: ue }),
                            ),
                        );
                    }),
                    re = R.views.lobby.crew.personal_case.ServiceRecordView('resId');
                r().memo(({ setTTCVisibility: e }) =>
                    r().createElement(m, { options: { rootId: re } }, r().createElement(ne, { setTTCVisibility: e })),
                );
            },
            6035: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => pt });
                var n = u(4029),
                    r = u(6179),
                    a = u.n(r),
                    i = u(6483),
                    s = u.n(i),
                    o = u(3403),
                    c = u(3618),
                    l = u(7515),
                    d = u(1856),
                    m = u(3138),
                    _ = u(6112),
                    E = u(4598);
                var g = u(2039);
                const A = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const F = (0, r.forwardRef)(function (e, t) {
                        let u = e.src,
                            n = e.className,
                            i = e.autoplay,
                            s = void 0 !== i && i,
                            o = e.style,
                            c = e.loop,
                            F = void 0 !== c && c,
                            f = e.isPrebufferKeyframes,
                            p = e.keyframesNameConfig,
                            v = e.onClick,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, A);
                        const C = t,
                            b = (0, r.useRef)(null);
                        return (
                            (0, g.b)(() =>
                                m.O.view.events.onDisplayChanged((e, t) => {
                                    var u, n;
                                    t === _.W.hidden && (null == (u = b.current) || u.pause());
                                    t === _.W.shown && (null == (n = b.current) || n.play());
                                }),
                            ),
                            (0, r.useEffect)(
                                () =>
                                    (0, d.v)(() => {
                                        const e = b.current;
                                        if (!C || !e || !f)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [f, C],
                            ),
                            (0, r.useEffect)(() => {
                                if (C && b.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: E.ZT,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const u = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function u() {
                                                            e(), (t = requestAnimationFrame(u));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (b.current) {
                                                        const u = b.current,
                                                            n = u.currentTime,
                                                            r = u.duration;
                                                        if (
                                                            (t !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: r }),
                                                                ),
                                                                (t = n)),
                                                            b.current.paused || !C || !f)
                                                        )
                                                            return;
                                                        const a = b.current.cohGetKeyframeTimestamps();
                                                        a.forEach((t, u) => {
                                                            n > a[u] - 0.02 &&
                                                                n < a[u] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != p ? p : {})[u];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${p ? n : `Point_${u}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = u[0],
                                                r = u[1];
                                            return n(), r;
                                        };
                                    e.changeTimeLoop = t();
                                    const u = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const u = e.changeTimeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const u = e.changeKeyframeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.currentTime;
                                        },
                                        a = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            b.current && (b.current.currentTime = (0, l.u)(0, b.current.duration, e));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            o(), i(0);
                                        },
                                        d = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = b.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            i(e), s();
                                        },
                                        _ = (e) => {
                                            i(e), o();
                                        },
                                        g = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        A = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = b.current) || u.addEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = b.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        h = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = b.current) || u.removeEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = b.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (C.current = {
                                            on: A,
                                            off: h,
                                            play: s,
                                            pause: o,
                                            stop: c,
                                            cleanup: g,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: d,
                                            goToAndPlay: m,
                                            goToAndStop: _,
                                            setCurrentTime: i,
                                            domRef: b.current,
                                            onChangeTime: u,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            g(), (C.current = null);
                                        }
                                    );
                                }
                            }, [p, C, f]),
                            (0, r.useEffect)(() => {
                                b.current && s && b.current.play();
                            }, [s, F]),
                            (0, r.useEffect)(() => {
                                if (b.current)
                                    return () => {
                                        b.current && b.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                h({ src: u, className: n, style: o, loop: F, ref: b, onClick: v }, B),
                            )
                        );
                    }),
                    f = (0, r.memo)(F);
                var p = u(122),
                    v = u(514),
                    B = u(7641),
                    C = u(3649),
                    b = u(7030),
                    D = u(7160),
                    w = u(7077),
                    y = u(8018);
                const k = 'TankmanFolder_base_00',
                    x = 'TankmanFolder_folder_f5',
                    S = 'TankmanFolder_folder__postProgression_07',
                    T = 'TankmanFolder_photoFrame_ae',
                    L = 'TankmanFolder_base__big_60',
                    N = 'TankmanFolder_veteranBlick_14',
                    I = 'TankmanFolder_veteranFrame_9c',
                    P = 'TankmanFolder_icon_74',
                    O = 'TankmanFolder_innerShadow_44',
                    M = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    H = (0, B.remToPx)(50),
                    W = a().memo(function ({
                        name: e,
                        isSkin: t = !1,
                        hasPostProgression: u = !1,
                        isPostProgressionAnimated: n = !1,
                        className: i,
                    }) {
                        const o = (0, r.useState)(u && !n),
                            c = o[0],
                            l = o[1],
                            d = (0, r.useMemo)(() => {
                                const u = (0, C.BN)(String(e));
                                return null !== (t ? M.$dyn('crewSkins') : M).$dyn(u) ? w.U.c204x256 : w.U.c158x118;
                            }, [e, t]),
                            m = d === w.U.c204x256,
                            _ = (0, b.useSpring)({
                                from: { opacity: 1, y: 0 },
                                to: { opacity: 0, y: H },
                                config: { duration: 700, easing: D.to },
                                delay: 300,
                            }),
                            E = (0, b.useSpring)({
                                from: { opacity: 0, y: H },
                                to: { opacity: 1, y: 0 },
                                config: { duration: 700, easing: D.to },
                                delay: 1100,
                            });
                        return (
                            (0, r.useEffect)(() => {
                                if (n) {
                                    const e = (0, p.F)(() => v.hY.sound(y.gO.CREW_PROFILE_UPGRADE), 300),
                                        t = (0, p.F)(() => l(!0), 1400);
                                    return () => {
                                        e(), t();
                                    };
                                }
                            }, [n]),
                            a().createElement(
                                'div',
                                { className: s()(k, m && L, i) },
                                n && a().createElement(b.animated.div, { style: _, className: x }),
                                a().createElement(b.animated.div, { style: n ? E : void 0, className: s()(x, u && S) }),
                                c &&
                                    a().createElement(f, {
                                        src: R.videos.crew.profile.veteran_blick(),
                                        className: N,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                                a().createElement(
                                    'div',
                                    { className: T },
                                    a().createElement(w.G, { name: e, size: d, isSkin: t, classMix: P }),
                                    m && a().createElement('div', { className: O }),
                                ),
                                c &&
                                    a().createElement(f, {
                                        src: m
                                            ? R.videos.crew.profile.veteran_frame_big()
                                            : R.videos.crew.profile.veteran_frame_small(),
                                        className: I,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                            )
                        );
                    });
                var V = u(5716),
                    z = u(771),
                    Z = u(3215),
                    j = u(3946),
                    G = u(8032);
                const U = (0, Z.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'skillsEfficiency',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'isPostProgressionAnimated',
                                        'hasPostProgression',
                                        'hasUniqueSound',
                                        'hasRetrainDiscount',
                                        'componentKey',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                    },
                                ),
                                u = (0, j.Om)(() => t.skillsEfficiency.get() === z.sU, !0),
                                n = (0, j.Om)(() => t.skillsEfficiency.get() < z.yb),
                                r = (0, j.Om)(() => {
                                    const e = t.currentVehicle.get(),
                                        u = t.nativeVehicle.get();
                                    if (void 0 === e && void 0 === u)
                                        return { isWrongVehicleType: !0, isWrongVehicle: !0 };
                                    const n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: n && e.type !== u.type && !(0, G.f)(e.tags, V.Yl),
                                        isWrongVehicle: n && e.name !== u.name && !e.isPremium,
                                    };
                                }),
                                a = (0, j.Om)(() =>
                                    t.hasRetrainDiscount.get()
                                        ? {
                                              args: { tooltipId: 'actionPrice', componentKey: t.componentKey.get() },
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          }
                                        : {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                              args: { componentKey: t.componentKey.get() },
                                              body: u()
                                                  ? R.strings.tooltips.buttons.retrain.body()
                                                  : R.strings.tooltips.buttons.increase.body(),
                                          },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: u,
                                    isLowPerksEfficiency: n,
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
                    $ = U[0],
                    K = U[1];
                var q = u(3457),
                    Y = u(3415),
                    X = u(5415),
                    J = u(7078),
                    Q = u(2603),
                    ee = u(9916);
                const te = 'RetrainAndEfficiency_base_71',
                    ue = 'RetrainAndEfficiency_canNotRetrainIcon_82',
                    ne = 'RetrainAndEfficiency_retrainWarningLabel_af',
                    re = 'RetrainAndEfficiency_skillsEfficiencyLabel_45',
                    ae = 'RetrainAndEfficiency_skillsEfficiencyLabel__red_e9',
                    ie = 'RetrainAndEfficiency_skillsEfficiencyRateContainer_5c',
                    se = 'RetrainAndEfficiency_skillsEfficiencyNumber_9a',
                    oe = 'RetrainAndEfficiency_skillsEfficiencyNumber__red_a1',
                    ce = 'RetrainAndEfficiency_skillsEfficiencyInfoIcon_76',
                    le = a().memo(
                        ({
                            tankmanID: e,
                            efficiencyValue: t,
                            componentKey: u,
                            isWrongVehicle: n,
                            isPenaltyActive: r,
                            isWrongVehicleType: i,
                        }) =>
                            n || i
                                ? a().createElement(
                                      J.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { componentKey: u, tooltipId: Q.M4 },
                                      },
                                      a().createElement(
                                          'div',
                                          { className: te },
                                          a().createElement('div', { className: ue }),
                                          a().createElement(
                                              'div',
                                              { className: ne },
                                              R.strings.crew.personalFile.isUntrained(),
                                          ),
                                      ),
                                  )
                                : a().createElement(
                                      J.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { tankmanID: e, componentKey: u, tooltipId: Q.Br },
                                      },
                                      a().createElement(
                                          'div',
                                          { className: te },
                                          a().createElement(
                                              'div',
                                              { className: s()(re, r && ae) },
                                              R.strings.crew.personalFile.skillsEfficiency(),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: ie },
                                              a().createElement(
                                                  'div',
                                                  { className: s()(se, r && oe) },
                                                  (0, C.dL)(ee.Z5.getNumberFormat(t * z.I, ee.B3.INTEGRAL)),
                                              ),
                                              !r && a().createElement('div', { className: ce }),
                                          ),
                                      ),
                                  ),
                    ),
                    de = 'CurrentVehicleTrain_base_22',
                    me = 'CurrentVehicleTrain_currentVehicle_9d',
                    _e = 'CurrentVehicleTrain_currentVehicleName_19',
                    Ee = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    ge = 'CurrentVehicleTrain_retrainContainer_6a',
                    Ae = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    he = 'CurrentVehicleTrain_retrainBtn_3e',
                    Fe = 'CurrentVehicleTrain_discountContainer_24',
                    fe = 'CurrentVehicleTrain_discountText_45',
                    pe = 'CurrentVehicleTrain_retrainDiscountIcon_91',
                    ve = 'CurrentVehicleTrain_penaltyDiscountIcon_33',
                    Be = (0, r.memo)(
                        ({
                            tankmanId: e,
                            skillsEfficiency: t,
                            componentKey: u,
                            isUntrained: n,
                            isLowPerksEfficiency: r,
                            isWrongVehicle: i,
                            isWrongVehicleType: o,
                            hasRetrainDiscount: l,
                            currentVehicle: d,
                            tooltipArgs: m,
                            onRetrainClick: _,
                        }) => {
                            const E = (0, X.GS)().mediaSize;
                            return a().createElement(
                                'div',
                                { className: de },
                                a().createElement(
                                    'div',
                                    { className: me },
                                    a().createElement(c.w, {
                                        text: d.name
                                            ? R.strings.crew.personalFile.inVehicle()
                                            : R.strings.crew.common.inBarracks(),
                                        binding: {
                                            vehicle: a().createElement(
                                                'div',
                                                { className: s()(_e, d.isPremium && Ee) },
                                                d.name,
                                            ),
                                        },
                                    }),
                                ),
                                a().createElement(le, {
                                    isWrongVehicle: i,
                                    isPenaltyActive: r,
                                    isWrongVehicleType: o,
                                    tankmanID: e,
                                    efficiencyValue: t,
                                    componentKey: u,
                                }),
                                r &&
                                    a().createElement(
                                        Y.l,
                                        { tooltipArgs: m },
                                        a().createElement(
                                            'div',
                                            { className: ge },
                                            a().createElement(
                                                'div',
                                                { className: Ae },
                                                a().createElement(
                                                    q.u5,
                                                    { onClick: _, type: q.L$.secondary, mixClass: he },
                                                    n
                                                        ? R.strings.crew.personalFile.retrain()
                                                        : R.strings.crew.personalFile.increase(),
                                                ),
                                            ),
                                            l && a().createElement('div', { className: ve }),
                                        ),
                                    ),
                                l &&
                                    !r &&
                                    a().createElement(
                                        Y.l,
                                        { tooltipArgs: m },
                                        a().createElement(
                                            'div',
                                            { className: Fe },
                                            a().createElement(
                                                'div',
                                                { className: fe },
                                                E < X.cJ.Large
                                                    ? R.strings.crew.personalFile.discount.short()
                                                    : R.strings.crew.personalFile.discount.full(),
                                            ),
                                            a().createElement('div', { className: pe }),
                                        ),
                                    ),
                            );
                        },
                    );
                var Ce = u(6373);
                const be = 'Name_base_2d',
                    De = 'Name_labelWrapper_a0',
                    we = 'Name_labelHiglight_7d',
                    ye = 'Name_voiceButton_00',
                    ke = 'Name_soundIcon_2a',
                    xe = 'Name_animationGlow_08',
                    Se = (0, r.memo)(
                        ({
                            fullName: e,
                            hasUniqueSound: t,
                            hasPostProgression: u,
                            isPostProgressionAnimated: n,
                            onVoiceBtnClick: r,
                        }) => {
                            const i = (0, b.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.5, config: { duration: 600 } },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: D.to },
                                }),
                                s = (0, b.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 600 } },
                                        { opacity: 0.8, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: D.to },
                                });
                            return a().createElement(
                                'div',
                                { className: be },
                                a().createElement(
                                    'div',
                                    { className: De },
                                    u && a().createElement(b.animated.div, { style: n ? s : void 0, className: we }, e),
                                    a().createElement('div', null, e),
                                    n && a().createElement(b.animated.div, { style: i, className: xe }),
                                    t &&
                                        a().createElement(
                                            Ce.i,
                                            {
                                                header: R.strings.crew.personalFile.voiceTooltip.header(),
                                                body: R.strings.crew.personalFile.voiceTooltip.body(),
                                            },
                                            a().createElement(
                                                q.u5,
                                                { size: q.qE.extraSmall, type: q.L$.ghost, mixClass: ye, onClick: r },
                                                a().createElement('div', { className: ke }),
                                            ),
                                        ),
                                ),
                            );
                        },
                    );
                var Te = u(1530);
                const Re = 'Role_base_e0',
                    Le = 'Role_role_2a',
                    Ne = 'Role_roleName_79',
                    Ie = 'Role_commanderFeature_e2',
                    Pe = 'Role_sense_21',
                    Oe = 'Role_commanderBonus_99',
                    Me = (0, r.memo)(({ role: e, componentKey: t, isFemale: u }) => {
                        const n = (0, X.GS)().mediaSize;
                        return a().createElement(
                            'div',
                            { className: Re },
                            a().createElement(
                                J.t,
                                {
                                    args: { componentKey: t, tooltipId: Q.v$ },
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                },
                                a().createElement(
                                    'div',
                                    { className: Le },
                                    a().createElement(Te.M, {
                                        role: e,
                                        size: n === X.cJ.ExtraLarge ? Te.S.c30x30 : Te.S.c18x18,
                                    }),
                                    a().createElement('div', { className: Ne }, (0, y.Gc)(e, u)),
                                ),
                            ),
                            'commander' === e &&
                                a().createElement(
                                    'div',
                                    { className: Ie },
                                    a().createElement(
                                        J.t,
                                        {
                                            args: {
                                                componentKey: t,
                                                skillName: 'commander_sixthSense',
                                                tooltipId: Q.HZ,
                                                level: 100,
                                            },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        a().createElement('div', { className: Pe }),
                                    ),
                                    a().createElement(
                                        J.t,
                                        {
                                            args: { componentKey: t, tooltipId: Q.uN },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        a().createElement('div', { className: Oe }),
                                    ),
                                ),
                        );
                    });
                var He = u(2056),
                    We = u(9690),
                    Ve = u(9053),
                    ze = u(4828),
                    Ze = u(1943),
                    je = u(5640);
                const Ge = {
                    base: 'VehicleTypeIcon_base_80',
                    base__big: 'VehicleTypeIcon_base__big_01',
                    base__c_44x44: 'VehicleTypeIcon_base__c_44x44_80',
                    base__c_48x48_specSlot: 'VehicleTypeIcon_base__c_48x48_specSlot_c4',
                    base__c_60x54: 'VehicleTypeIcon_base__c_60x54_08',
                };
                let Ue;
                !(function (e) {
                    (e.c83x74 = 'big'),
                        (e.c60x54 = 'c_60x54'),
                        (e.c44x44 = 'c_44x44'),
                        (e.c48x48_specSlot = 'c_48x48_specSlot');
                })(Ue || (Ue = {}));
                const $e = a().memo(function ({ vehicleType: e, isElite: t, className: u, iconSize: n = Ue.c44x44 }) {
                        const r = `${(0, C.BN)(e)}${t ? '_elite' : ''}`,
                            i = R.images.gui.maps.icons.vehicleTypes.$dyn(n);
                        return a().createElement('div', {
                            className: s()(Ge.base, Ge[`base__${n}`], u),
                            style: { backgroundImage: `url(${null == i ? void 0 : i.$dyn(r)})` },
                        });
                    }),
                    Ke = 'SpecializationSlots_base_1a',
                    qe = 'SpecializationSlots_frame_85',
                    Ye = 'SpecializationSlots_frameChange_c6',
                    Xe = 'SpecializationSlots_darkFrame_34',
                    Je = 'SpecializationSlots_shadow_4a',
                    Qe = 'SpecializationSlots_arrows_6e',
                    et = 'SpecializationSlots_info_7c',
                    tt = 'SpecializationSlots_arrowsIcon_fc',
                    ut = 'SpecializationSlots_changeVehicle_58',
                    nt = 'SpecializationSlots_tier_68',
                    rt = 'SpecializationSlots_vehicle_b6',
                    at = 'SpecializationSlots_vehicleTypeIcon_77',
                    it = 'SpecializationSlots_flag_84',
                    st = 'SpecializationSlots_vehicleIcon_ec',
                    ot = 'SpecializationSlots_premVehicle_c3',
                    ct = 'SpecializationSlots_premVehicleTypeIcon_c9';
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const dt = (0, o.Pi)(({ componentKey: e }) => {
                        const t = K(),
                            u = t.model,
                            n = t.controls,
                            r = u.isCrewLocked.get(),
                            i = u.nativeVehicle.get();
                        return a().createElement(
                            'div',
                            { className: Ke },
                            a().createElement(
                                Ce.i,
                                {
                                    header: r
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: r ? R.strings.crew.personalFile.crewLockedTooltip.body() : i.name,
                                    ignoreMouseClick: r,
                                },
                                a().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: () => !r && v.hY.highlight(),
                                        onClick: () => {
                                            r || (v.hY.click(), n.changeVehicle());
                                        },
                                        className: s()(r ? qe : Ye),
                                    },
                                    a().createElement('div', { className: Xe }),
                                    a().createElement(je.U, { size: je.$.c155x31, nation: i.nation, className: it }),
                                    a().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, C.BN)(`${i.nation}-${i.techName}`))})`,
                                        },
                                        className: st,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: et },
                                        a().createElement('div', { className: nt }, (0, We.HG)(i.tier)),
                                        a().createElement($e, {
                                            isElite: i.isPremium,
                                            vehicleType: i.type,
                                            className: at,
                                            iconSize: i.isPremium ? Ue.c44x44 : Ue.c48x48_specSlot,
                                        }),
                                        a().createElement('div', { className: rt }, i.name),
                                    ),
                                    a().createElement('div', { className: Je }),
                                    a().createElement(
                                        'div',
                                        { className: Qe },
                                        a().createElement('div', { className: tt }),
                                        a().createElement(
                                            'div',
                                            { className: ut },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                He.u,
                                lt(
                                    {
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                        args: { componentKey: e },
                                    },
                                    (0, Ze.Sr)(ze.D9, {
                                        item: ze.sk.PremiumTooltip,
                                        action: ze.eX.Viewed,
                                        parentScreen: ze.sC.PersonalFile,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: qe },
                                    a().createElement(je.U, { size: je.$.c155x31, nation: i.nation, className: it }),
                                    a().createElement(
                                        'div',
                                        { className: et },
                                        a().createElement(c.w, {
                                            alignContent: Ve.v2.Center,
                                            justifyContent: Ve.v2.Center,
                                            classMix: ot,
                                            text: R.strings.crew.personalFile.premiumVehicle(),
                                            binding: {
                                                icon: a().createElement($e, {
                                                    isElite: !0,
                                                    vehicleType: i.type,
                                                    className: ct,
                                                }),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    mt = 'TankmanInfoApp_base_bc',
                    _t = 'TankmanInfoApp_tankmanFolder_6d',
                    Et = 'TankmanInfoApp_descriptionBlock_00',
                    gt = 'TankmanInfoApp_description_3c',
                    At = 'TankmanInfoApp_specializationLabel_a3',
                    ht = 'TankmanInfoApp_specializationLabel__withDescription_2e',
                    Ft = (0, o.Pi)(() => {
                        const e = K(),
                            t = e.model,
                            u = e.controls,
                            n = t.invId.get(),
                            r = t.description.get(),
                            i = t.componentKey.get(),
                            o = t.hasPostProgression.get(),
                            l = t.isPostProgressionAnimated.get(),
                            d = t.computes.vehicleValidator(),
                            m = d.isWrongVehicle,
                            _ = d.isWrongVehicleType,
                            E = Boolean(r);
                        return a().createElement(
                            'div',
                            { className: mt },
                            a().createElement(W, {
                                key: `${[n, o, l].join()}`,
                                name: t.iconName.get(),
                                isSkin: t.isInSkin.get(),
                                hasPostProgression: o,
                                isPostProgressionAnimated: l,
                                className: _t,
                            }),
                            a().createElement(
                                'div',
                                { className: Et },
                                a().createElement(Me, {
                                    role: t.role.get(),
                                    componentKey: i,
                                    isFemale: t.isFemale.get(),
                                }),
                                a().createElement(Se, {
                                    key: n,
                                    fullName: t.fullName.get(),
                                    hasUniqueSound: t.hasUniqueSound.get(),
                                    hasPostProgression: o,
                                    isPostProgressionAnimated: l,
                                    onVoiceBtnClick: u.playUniqueVoice,
                                }),
                                E &&
                                    a().createElement(c.w, {
                                        isTooltipEnable: !0,
                                        isTruncationAvailable: !0,
                                        text: r,
                                        customTooltipArgs: { componentKey: i },
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        classMix: gt,
                                    }),
                                a().createElement(
                                    'div',
                                    { className: s()(At, E && ht) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                a().createElement(dt, { componentKey: i }),
                                a().createElement(Be, {
                                    tankmanId: n,
                                    skillsEfficiency: t.skillsEfficiency.get(),
                                    componentKey: i,
                                    isUntrained: t.computes.isUntrained(),
                                    isLowPerksEfficiency: t.computes.isLowPerksEfficiency(),
                                    isWrongVehicle: m,
                                    isWrongVehicleType: _,
                                    hasRetrainDiscount: t.hasRetrainDiscount.get(),
                                    currentVehicle: t.currentVehicle.get(),
                                    tooltipArgs: t.computes.discountTooltipArgs(),
                                    onRetrainClick: u.retrain,
                                }),
                            ),
                        );
                    }),
                    ft = (0, r.createContext)(!1),
                    pt = (0, r.memo)(({ rootId: e, withLogging: t = !1 }) =>
                        a().createElement(
                            n.z,
                            null,
                            a().createElement(
                                $,
                                { options: { rootId: e, context: 'model.tankmanInfo' } },
                                a().createElement(ft.Provider, { value: t }, a().createElement(Ft, null)),
                            ),
                        ),
                    );
            },
            5716: (e, t, u) => {
                'use strict';
                u.d(t, { Yl: () => n });
                const n = 'wotPlus';
            },
            2603: (e, t, u) => {
                'use strict';
                u.d(t, { Br: () => s, HZ: () => n, M4: () => o, Th: () => a, uN: () => r, v$: () => i });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    a = 'achievement',
                    i = 'tankman',
                    s = 'skillsEfficiency',
                    o = 'crewSkillUntrained';
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { I: () => a, sU: () => n, yb: () => r });
                const n = -1,
                    r = 1,
                    a = 100;
                let i;
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
                })(i || (i = {}));
            },
            6880: (e, t, u) => {
                'use strict';
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
            },
            372: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            6143: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
            },
            9627: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            8236: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    base__c_155x31: 'FlagIcon_base__c_155x31_41',
                };
            },
            8386: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'RoleIcon_base_51',
                    base__small: 'RoleIcon_base__small_68',
                    base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                    base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                    base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                    base__c_24x24: 'RoleIcon_base__c_24x24_52',
                    base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                    base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                    base__c_40x40: 'RoleIcon_base__c_40x40_99',
                    base__medium: 'RoleIcon_base__medium_5d',
                    base__white: 'RoleIcon_base__white_2a',
                    base__big: 'RoleIcon_base__big_b4',
                };
            },
            7734: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ScrollWithLips_base_a2',
                    bar: 'ScrollWithLips_bar_67',
                    content: 'ScrollWithLips_content_6d',
                    fadeContainerTop: 'ScrollWithLips_fadeContainerTop_6d',
                    fadeContainerBottom: 'ScrollWithLips_fadeContainerBottom_43',
                    fade: 'ScrollWithLips_fade_5e',
                };
            },
            3938: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], a = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
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
        (__webpack_require__.j = 1002),
        (() => {
            var e = { 1002: 0, 2695: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, i, s] = u,
                        o = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(u); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(2418));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
