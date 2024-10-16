(() => {
    'use strict';
    var __webpack_modules__ = {
            3495: (e, u, t) => {
                t.d(u, { Y: () => d });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    o = t(5262);
                const i = n.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, o.T)(s, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const o = ['children'],
                    i = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, o);
                        const i = (0, n.useContext)(a.Y),
                            s = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            d = i.small,
                            E = i.extraSmall,
                            A = i.extraLargeWidth,
                            F = i.largeWidth,
                            m = i.mediumWidth,
                            _ = i.smallWidth,
                            D = i.extraSmallWidth,
                            g = i.extraLargeHeight,
                            h = i.largeHeight,
                            B = i.mediumHeight,
                            C = i.smallHeight,
                            v = i.extraSmallHeight,
                            f = { extraLarge: g, large: h, medium: B, small: C, extraSmall: v };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && d) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && A) return (0, r.H)(u, t, f);
                            if (t.largeWidth && F) return (0, r.H)(u, t, f);
                            if (t.mediumWidth && m) return (0, r.H)(u, t, f);
                            if (t.smallWidth && _) return (0, r.H)(u, t, f);
                            if (t.extraSmallWidth && D) return (0, r.H)(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && h) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && v) return u;
                            }
                        }
                        return null;
                    };
                (i.defaultProps = {
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
                }),
                    (0, n.memo)(i);
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
                t.d(u, { YN: () => n.Y }), t(6010), t(1039);
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
                t.d(u, { $Q: () => B });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    o = t(1856),
                    i = t(3138),
                    s = t(3815),
                    l = t(560),
                    c = t(7727),
                    d = t(6179),
                    E = t.n(d),
                    A = t(6358),
                    F = t(372);
                const m = 'disable',
                    _ = { pending: !1, offset: 0 },
                    D = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    g = () => {},
                    h = (e, u) => Math.max(20, e.offsetWidth * u),
                    B = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = D, onDrag: n = g }) => {
                        const B = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            p = (0, d.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, d.useState)(_),
                            y = w[0],
                            x = w[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    x(e),
                                        p.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
                                },
                                [n],
                            ),
                            O = () => {
                                const u = f.current,
                                    t = p.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    s = (0, a.u)(0, 1, o / (r - n)),
                                    l = (u.offsetWidth - h(u, i)) * s;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && v.current && f.current && p.current) {
                                            if (0 === e)
                                                return C.current.classList.add(m), void v.current.classList.remove(m);
                                            if (
                                                ((u = f.current),
                                                (t = p.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return C.current.classList.remove(m), void v.current.classList.add(m);
                                            var u, t;
                                            C.current.classList.remove(m), v.current.classList.remove(m);
                                        }
                                    })(l);
                            },
                            L = (0, s.z)(() => {
                                (() => {
                                    const u = p.current,
                                        t = f.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    (u.style.width = `${h(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        B.current &&
                                            (1 === a
                                                ? B.current.classList.add(F.Z.base__nonActive)
                                                : B.current.classList.remove(F.Z.base__nonActive));
                                })(),
                                    O();
                            });
                        (0, d.useEffect)(() => (0, o.v)(L)),
                            (0, d.useEffect)(
                                () =>
                                    (0, o.v)(() => {
                                        const u = () => {
                                            O();
                                        };
                                        let t = g;
                                        const n = () => {
                                            t(), (t = (0, o.v)(L));
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
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = f.current,
                                            s = p.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - y.offset - i.getBoundingClientRect().x,
                                            c = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        u(), S(_);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, y.offset, y.pending, n, S]);
                        const k = (0, l.B)((u) => e.applyStepTo(u), b, [e]),
                            P = k[0],
                            M = k[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', M, !0),
                                () => document.removeEventListener('mouseup', M, !0)
                            ),
                            [M],
                        );
                        const T = (e) => {
                            e.target.classList.contains(m) || (0, c.G)('highlight');
                        };
                        return E().createElement(
                            'div',
                            { className: r()(F.Z.base, u.base), ref: B, onWheel: e.handleMouseWheel },
                            E().createElement('div', {
                                className: r()(F.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), P(A.Nm.Next));
                                },
                                onMouseUp: M,
                                ref: C,
                                onMouseEnter: T,
                            }),
                            E().createElement(
                                'div',
                                {
                                    className: r()(F.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = p.current;
                                        n &&
                                            0 === u.button &&
                                            ((0, c.G)('play'),
                                            u.target === n
                                                ? S({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = p.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? A.Nm.Prev : A.Nm.Next));
                                    },
                                    ref: f,
                                    onMouseEnter: T,
                                },
                                E().createElement('div', { ref: p, className: r()(F.Z.thumb, u.thumb) }),
                                E().createElement('div', { className: r()(F.Z.rail, u.rail) }),
                            ),
                            E().createElement('div', {
                                className: r()(F.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), P(A.Nm.Prev));
                                },
                                onMouseUp: M,
                                ref: v,
                                onMouseEnter: T,
                            }),
                        );
                    });
            },
            2840: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    o = t.n(a),
                    i = t(2773),
                    s = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: E,
                    getStepByRailClick: A,
                    onDrag: F,
                }) => {
                    const m = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return o().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            o().createElement(s.Area, { className: E, api: _, classNames: d }, e),
                        ),
                        o().createElement(i.$Q, { getStepByRailClick: A, api: u, onDrag: F, classNames: m }),
                    );
                };
            },
            7950: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        Area: () => E,
                        Bar: () => s.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    o = t(6179),
                    i = t.n(o),
                    s = t(2773),
                    l = t(2840),
                    c = t(4682),
                    d = t(6358);
                const E = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, o.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: r()(c.Z.base, u) },
                        i().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (E.Bar = s.$Q), (E.Default = l.K);
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
                t.d(u, { $Q: () => C });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    o = t(1856),
                    i = t(3138),
                    s = t(3815),
                    l = t(560),
                    c = t(7727),
                    d = t(6179),
                    E = t.n(d),
                    A = t(7701),
                    F = t(9168);
                const m = 'disable',
                    _ = () => {},
                    D = { pending: !1, offset: 0 },
                    g = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    h = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    B = (e, u) => Math.max(20, e.offsetHeight * u),
                    C = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = g, onDrag: n = _ }) => {
                        const C = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            p = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(D),
                            x = y[0],
                            S = y[1],
                            O = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        b.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current });
                                },
                                [n],
                            ),
                            L = (0, s.z)(() => {
                                const u = b.current,
                                    t = p.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${B(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    C.current &&
                                        (1 === a
                                            ? C.current.classList.add(F.Z.base__nonActive)
                                            : C.current.classList.remove(F.Z.base__nonActive)),
                                    a
                                );
                            }),
                            k = (0, s.z)(() => {
                                const u = p.current,
                                    t = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    s = (0, a.u)(0, 1, o / (r - n)),
                                    l = (u.offsetHeight - B(u, i)) * s;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (v.current && f.current && p.current && b.current) {
                                            if (0 === Math.round(e))
                                                return v.current.classList.add(m), void f.current.classList.remove(m);
                                            if (
                                                ((u = p.current),
                                                (t = b.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return v.current.classList.remove(m), void f.current.classList.add(m);
                                            var u, t;
                                            v.current.classList.remove(m), f.current.classList.remove(m);
                                        }
                                    })(l);
                            }),
                            P = (0, s.z)(() => {
                                h(e, () => {
                                    L(), k();
                                });
                            });
                        (0, d.useEffect)(() => (0, o.v)(P)),
                            (0, d.useEffect)(() => {
                                const u = () => {
                                    h(e, () => {
                                        k();
                                    });
                                };
                                let t = _;
                                const n = () => {
                                    t(), (t = (0, o.v)(P));
                                };
                                return (
                                    e.events.on('recalculateContent', P),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', P),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!x.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        O(D);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        h(e, (t) => {
                                            const r = p.current,
                                                a = b.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - x.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, x.offset, x.pending, n, O]);
                        const M = (0, l.B)((u) => e.applyStepTo(u), w, [e]),
                            T = M[0],
                            N = M[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', N, !0),
                                () => document.removeEventListener('mouseup', N, !0)
                            ),
                            [N],
                        );
                        const R = (e) => {
                            e.target.classList.contains(m) || (0, c.G)('highlight');
                        };
                        return E().createElement(
                            'div',
                            { className: r()(F.Z.base, u.base), ref: C, onWheel: e.handleMouseWheel },
                            E().createElement('div', {
                                className: r()(F.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(A.Nm.Next));
                                },
                                ref: v,
                                onMouseEnter: R,
                            }),
                            E().createElement(
                                'div',
                                {
                                    className: r()(F.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = b.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            ((0, c.G)('play'),
                                            u.target === n
                                                ? O({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r =
                                                      u.screenY > n.getBoundingClientRect().y ? A.Nm.Prev : A.Nm.Next),
                                                  b.current &&
                                                      h(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: p,
                                    onMouseEnter: R,
                                },
                                E().createElement('div', { ref: b, className: r()(F.Z.thumb, u.thumb) }),
                                E().createElement('div', { className: r()(F.Z.rail, u.rail) }),
                            ),
                            E().createElement('div', {
                                className: r()(F.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(A.Nm.Prev));
                                },
                                onMouseUp: N,
                                ref: f,
                                onMouseEnter: R,
                            }),
                        );
                    });
            },
            1158: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    o = t.n(a),
                    i = t(6225),
                    s = t(9605),
                    l = t(5636);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: E,
                    getStepByRailClick: A,
                    onDrag: F,
                }) => {
                    const m = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return o().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            o().createElement(s.Area, { className: d, classNames: E, api: _ }, e),
                        ),
                        o().createElement(i.$Q, { getStepByRailClick: A, api: u, onDrag: F, classNames: m }),
                    );
                };
            },
            9605: (e, u, t) => {
                t.r(u),
                    t.d(u, { Area: () => E, Bar: () => s.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    o = t(6179),
                    i = t.n(o),
                    s = t(6225),
                    l = t(1158),
                    c = t(7701),
                    d = t(5636);
                const E = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, o.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(d.Z.content, null == u ? void 0 : u.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
                E.Default = l.K;
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
                t.d(u, { EO: () => F, Nm: () => E, he: () => A });
                var n = t(7515),
                    r = t(1856),
                    a = t(3138),
                    o = t(4532),
                    i = t(9653),
                    s = t(3815),
                    l = t(4489),
                    c = t(6179),
                    d = t(7030);
                let E;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(E || (E = {}));
                const A = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    F = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: E,
                        getWrapperSize: F,
                        triggerMouseMoveOnUpdate: m = !1,
                    }) => {
                        const _ = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                o = r[1];
                            return o <= a ? 0 : (0, n.u)(a, o, t);
                        };
                        return (n = {}) => {
                            const D = n.settings,
                                g = void 0 === D ? A : D,
                                h = (0, c.useRef)(null),
                                B = (0, c.useRef)(null),
                                C = (0, i.q)(),
                                v = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = h.current;
                                        u && (t(u, e), C.trigger('change', e), m && v());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                p = f[0],
                                b = f[1],
                                w = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = p.scrollPosition.get(),
                                            a = (null != (n = p.scrollPosition.goal) ? n : 0) - r;
                                        return _(e, u * t + a + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = h.current;
                                        n &&
                                            b.start({
                                                scrollPosition: _(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: g.animationConfig,
                                                from: { scrollPosition: _(n, p.scrollPosition.get()) },
                                            });
                                    },
                                    [b, g.animationConfig, p.scrollPosition],
                                ),
                                x = (0, c.useCallback)(
                                    (e) => {
                                        const u = h.current,
                                            t = B.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return F(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, g.step),
                                            r = w(u, e, n);
                                        y(r);
                                    },
                                    [y, w, g.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && x(E(e)),
                                            h.current && C.trigger('mouseWheel', e, p.scrollPosition, u(h.current));
                                    },
                                    [p.scrollPosition, x, C],
                                ),
                                O = (0, o.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (y(_(e, p.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [y, p.scrollPosition.goal],
                                ),
                                L = (0, s.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const u = _(e, p.scrollPosition.goal);
                                    u !== p.scrollPosition.goal && y(u, { immediate: !0 }),
                                        C.trigger('recalculateContent');
                                });
                            return (
                                (0, c.useEffect)(
                                    () => (
                                        window.addEventListener('resize', O),
                                        () => {
                                            window.removeEventListener('resize', O);
                                        }
                                    ),
                                    [O],
                                ),
                                (0, c.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (B.current ? F(B.current) : void 0),
                                        getContainerSize: () => (h.current ? e(h.current) : void 0),
                                        getBounds: () =>
                                            h.current
                                                ? u(h.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: g.step.clampedArrowStepTimeout,
                                        clampPosition: _,
                                        handleMouseWheel: S,
                                        applyScroll: y,
                                        applyStepTo: x,
                                        contentRef: h,
                                        wrapperRef: B,
                                        scrollPosition: b,
                                        animationScroll: p,
                                        recalculateContent: L,
                                        events: { on: C.on, off: C.off },
                                    }),
                                    [p.scrollPosition, y, x, C.off, C.on, L, S, b, g.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    };
            },
            794: (e, u, t) => {
                t.d(u, { X: () => r });
                var n = t(7950);
                const r = { Vertical: t(9605), Horizontal: n };
            },
            6349: (e, u, t) => {
                t.d(u, { l: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6373),
                    o = t(1856),
                    i = t(6179),
                    s = t.n(i),
                    l = t(1699);
                const c = ['content', 'classMix', 'className'];
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const E = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        n = e.className,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, c);
                    const A = (0, i.useRef)(null),
                        F = (0, i.useState)(!0),
                        m = F[0],
                        _ = F[1];
                    return (
                        (0, i.useEffect)(() =>
                            (0, o.v)(() => {
                                const e = A.current;
                                e && e.offsetWidth >= e.scrollWidth && _(!1);
                            }),
                        ),
                        s().createElement(
                            a.i,
                            { isEnabled: m, body: u },
                            s().createElement('div', d({}, E, { ref: A, className: r()(l.Z.base, n, t) }), u),
                        )
                    );
                };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => s });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const o = ['children'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, o);
                    return r().createElement(
                        a.u,
                        i(
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
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            E = e.args,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, o);
                        const F = (0, r.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, E]);
                        return a().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((m = null == E ? void 0 : E.hasHtmlContent),
                                        m ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                A,
                            ),
                            u,
                        );
                        var m;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
                    a = t(6179);
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
                function i(e) {
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
                            E = e.onClick,
                            A = e.ignoreShowDelay,
                            F = void 0 !== A && A,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            D = e.decoratorId,
                            g = void 0 === D ? 0 : D,
                            h = e.isEnabled,
                            B = void 0 === h || h,
                            C = e.targetId,
                            v = void 0 === C ? 0 : C,
                            f = e.onShow,
                            p = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, o);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => v || (0, n.F)().resId, [v]),
                            x = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, g, { isMouseEvent: !0, on: !0, arguments: i(r) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, g, r, y, f]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, g, { on: !1 }, y),
                                        w.current.isVisible && p && p(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, g, y, p]),
                            O = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', O, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', O, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === B && S();
                            }, [B, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            ),
                            B
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((L = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(x, F ? 100 : 400)),
                                                          l && l(e),
                                                          L && L(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  S(), null == c || c(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === _ && S(), null == E || E(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === _ && S(), null == d || d(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var L;
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
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: o = 'model' } = {}) {
                    const i = new Map();
                    function s(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            r = o.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const a = 'string' == typeof r ? `${o}.${r}` : o,
                                s = n.O.view.addModelObserver(a, u, !0);
                            return i.set(s, t), e && t(l(r)), s;
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
                            for (
                                var e,
                                    t = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, u);
                                                    var t = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? r(e, u)
                                                              : void 0
                                                    );
                                                }
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
                                    })(i.keys());
                                !(e = t()).done;

                            )
                                s(e.value, u);
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
                    o = t.n(a),
                    i = t(8246);
                const s = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const E = (0, a.useRef)([]),
                                A = (t, a, o) => {
                                    var s;
                                    const l = i.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        A = (e) => E.current.push(e),
                                        F = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
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
                                                            o = Object.entries(a),
                                                            i = o.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: A,
                                        }),
                                        m = { mode: t, model: F, externalModel: c, cleanup: A };
                                    return {
                                        model: F,
                                        controls: 'mocks' === t && o ? o.controls(m) : u(m),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                F = (0, a.useRef)(!1),
                                m = (0, a.useState)(s),
                                _ = m[0],
                                D = m[1],
                                g = (0, a.useState)(() => A(s, l, d)),
                                h = g[0],
                                B = g[1];
                            return (
                                (0, a.useEffect)(() => {
                                    F.current ? B(A(_, l, d)) : (F.current = !0);
                                }, [d, _, l]),
                                (0, a.useEffect)(() => {
                                    D(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), E.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                o().createElement(t.Provider, { value: h }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7522: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc(e) {
                        const u = Math.sqrt,
                            t = Math.pow;
                        return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                    bezier: (e, u, t, n) => (r) =>
                        (1 - r) * (1 - r) * (1 - r) * e +
                        3 * (1 - r) * (1 - r) * r * u +
                        3 * (1 - r) * r * r * t +
                        r * r * r * n,
                };
            },
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => a, onScaleUpdated: () => o });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                                            o = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
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
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => F,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                const i = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                function n() {
                    return !1;
                }
                t.d(u, { jv: () => n }), console.log;
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
                t.d(u, { q: () => a });
                var n = t(6179);
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        o = (e, ...t) => {
                            for (
                                var n,
                                    a = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, u);
                                                    var t = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? r(e, u)
                                                              : void 0
                                                    );
                                                }
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
                                    })(u(e).values());
                                !(n = a()).done;

                            )
                                (0, n.value)(...t);
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: o }), []);
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
                t.d(u, { GS: () => l });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let o, i, s;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
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
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
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
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        a,
                    ];
                }
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
                t.d(u, { UI: () => r, cx: () => o, yW: () => a });
                const n = function (e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                };
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function a(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) if (!u(n(e, t), t, e)) return !1;
                    return !0;
                }
                function o(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(n(e, t), t, e)) return t;
                }
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => n });
            },
            3649: (e, u, t) => {
                let n;
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                t.d(u, { BN: () => r }),
                    t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {})),
                    new RegExp(
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
            },
            5139: (e, u, t) => {
                function n(e, u, t, n) {
                    let r,
                        a = !1,
                        o = 0;
                    function i() {
                        r && clearTimeout(r);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            (o = Date.now()), t.apply(l, s);
                        }
                        a ||
                            (n && !r && d(),
                            i(),
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
                            i(), (a = !0);
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
                t.d(u, { B0: () => i, ry: () => g });
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
                var a = t(1358),
                    o = t(8613);
                let i;
                var s;
                ((s = i || (i = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const m = ['args'];
                function _(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        function o(e) {
                                            _(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            _(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
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
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, m);
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
                    B = () => h(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var v = t(7572);
                const f = r.instance,
                    p = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                A = {
                                    x: F.O.view.pxToRem(l) + o.x,
                                    y: F.O.view.pxToRem(c) + o.y,
                                    width: F.O.view.pxToRem(d),
                                    height: F.O.view.pxToRem(E),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(A),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, B);
                        },
                        handleViewEvent: h,
                        onBindingsReady: g,
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
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = p;
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
            7621: (e, u, t) => {
                t.d(u, { G: () => l, _: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(2056),
                    o = t(6179),
                    i = t.n(o),
                    s = t(9831);
                let l;
                !(function (e) {
                    (e.C28x28 = 'c28x28'),
                        (e.C30x30 = 'c30x30'),
                        (e.C36x36 = 'c36x36'),
                        (e.C44x44 = 'c44x44'),
                        (e.C70x70 = 'c70x70'),
                        (e.C110x110 = 'c110x110');
                })(l || (l = {}));
                const c = i().memo(function ({ size: e, gray: u = !1, isTooltipEnable: t = !1, className: n }) {
                    return i().createElement(
                        a.u,
                        { contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'), isEnabled: t },
                        i().createElement('div', {
                            className: r()(s.Z.base, s.Z[`base__${e}`], u && s.Z.base__gray, n),
                        }),
                    );
                });
            },
            481: (e, u, t) => {
                t.d(u, { G: () => r, m: () => i });
                var n = t(6179);
                let r;
                !(function (e) {
                    (e.MouseDown = 'mouseDown'),
                        (e.Dragging = 'dragging'),
                        (e.End = 'scrollingToEnd'),
                        (e.Idle = 'idle');
                })(r || (r = {}));
                const a = { type: r.Idle },
                    o = 5;
                function i(e, u) {
                    const t = e.contentRef,
                        i = e.wrapperRef,
                        s = e.scrollPosition,
                        l = e.clampPosition,
                        c = e.animationScroll,
                        d = e.events,
                        E = (0, n.useState)(a),
                        A = E[0],
                        F = E[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = t.current;
                            e && (e.style.cursor = A.type === r.Dragging ? 'move' : 'grab');
                        }, [t, A.type]),
                        (0, n.useEffect)(() => {
                            if (A.type !== r.MouseDown && A.type !== r.Dragging) return;
                            const e = (e) => {
                                const n = t.current,
                                    a = i.current;
                                if (!n || !a) return;
                                const d = A.positionFrom - e.screenX,
                                    E = A.previousScrollPosition + d;
                                A.type === r.MouseDown &&
                                    Math.abs(d) > o &&
                                    F({
                                        type: r.Dragging,
                                        positionFrom: A.positionFrom,
                                        previousScrollPosition: A.previousScrollPosition,
                                    }),
                                    A.type === r.Dragging &&
                                        s.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: l(n, E),
                                                    from: { scrollPosition: c.scrollPosition.get() },
                                                },
                                                u && { config: u },
                                            ),
                                        );
                            };
                            function n() {
                                window.removeEventListener('mousemove', e),
                                    document.body.removeEventListener('mouseleave', n),
                                    F({ type: r.End });
                            }
                            return (
                                window.addEventListener('mousemove', e),
                                window.addEventListener('mouseup', n),
                                document.body.addEventListener('mouseleave', n),
                                () => {
                                    window.removeEventListener('mousemove', e),
                                        window.removeEventListener('mouseup', n),
                                        document.body.removeEventListener('mouseleave', n);
                                }
                            );
                        }, [c.scrollPosition, l, t, A, s, i, u]),
                        (0, n.useEffect)(() => {
                            if (A.type !== r.End) return;
                            const e = () => {
                                F(a);
                            };
                            return c.scrollPosition.idle && e(), d.on('rest', e), () => d.off('rest', e);
                        }, [c.scrollPosition, A.type, d]),
                        (0, n.useEffect)(() => {
                            const e = t.current;
                            if (!e) return;
                            const u = (e) => {
                                0 === e.button &&
                                    F({
                                        type: r.MouseDown,
                                        positionFrom: e.screenX,
                                        previousScrollPosition: c.scrollPosition.get(),
                                    });
                            };
                            return e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u);
                        }, [c.scrollPosition, t]),
                        A
                    );
                }
            },
            7505: (e, u, t) => {
                t.d(u, { lr: () => I });
                var n = t(6483),
                    r = t.n(n),
                    a = t(794),
                    o = t(6358),
                    i = t(1856),
                    s = t(3815),
                    l = t(5415),
                    c = t(481),
                    d = t(9480),
                    E = t(3403),
                    A = t(6179),
                    F = t.n(A);
                const m = {
                    base: 'Carousel_base_15',
                    leftBtn: 'Carousel_leftBtn_09',
                    rightBtn: 'Carousel_rightBtn_bf',
                    scroll: 'Carousel_scroll_38',
                    content__noScroll: 'Carousel_content__noScroll_e7',
                    items: 'Carousel_items_fc',
                    item: 'Carousel_item_9a',
                };
                var _ = t(7621),
                    D = t(3649);
                const g = {
                    base: 'VehicleType_base_13',
                    base__c_24x24: 'VehicleType_base__c_24x24_8a',
                    base__c_38x38: 'VehicleType_base__c_38x38_c5',
                    base__c_48x48: 'VehicleType_base__c_48x48_83',
                    base__c_83x74: 'VehicleType_base__c_83x74_a3',
                };
                let h, B;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C38x38 = 'c_38x38'), (e.C48x48 = 'c_48x48'), (e.C83x74 = 'c_83x74');
                })(h || (h = {})),
                    (function (e) {
                        (e.Silver = 'silver'),
                            (e.Gray = 'gray'),
                            (e.Elite = 'elite'),
                            (e.WhiteSpanish = 'whitespanish'),
                            (e.WhiteSpanishBright = 'whitespanish_bright');
                    })(B || (B = {}));
                const C = (0, A.memo)(function ({ type: e, color: u, className: t, size: n = h.C24x24 }) {
                    return F().createElement('div', {
                        className: r()(g.base, g[`base__${n}`], t),
                        style: {
                            backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.${u}.${n}.${(0, D.BN)(e)}')`,
                        },
                    });
                });
                var v = t(6349),
                    f = t(7078),
                    p = t(2056),
                    b = t(3138),
                    w = t(2112),
                    y = t(7522),
                    x = t(7030),
                    S = t(824);
                const O = {
                        base: 'Card_base_6b',
                        base__selected: 'Card_base__selected_0c',
                        base__dragging: 'Card_base__dragging_b9',
                        icon: 'Card_icon_b6',
                        base__hover: 'Card_base__hover_e9',
                        selected: 'Card_selected_f8',
                        placeholder: 'Card_placeholder_aa',
                        base__active: 'Card_base__active_75',
                        disabled: 'Card_disabled_91',
                        disableBackground: 'Card_disableBackground_52',
                        daily: 'Card_daily_b7',
                        state: 'Card_state_a2',
                        stateText: 'Card_stateText_d3',
                        stateIcon: 'Card_stateIcon_7b',
                        base__inPlatoon: 'Card_base__inPlatoon_c8',
                        base__inBattle: 'Card_base__inBattle_a6',
                        base__locked: 'Card_base__locked_b6',
                        cload: 'Card_cload_05',
                        vehName: 'Card_vehName_ec',
                        vehName__light: 'Card_vehName__light_c3',
                        vehType: 'Card_vehType_e5',
                        label: 'Card_label_ff',
                    },
                    L = {
                        france_F17_AMX_13_90_Halloween_event: S.UA,
                        uk_GB24_Centurion_Mk3_Halloween_event: S.SV,
                        ussr_R171_IS_3_II_hw21: S.nJ,
                        usa_A100_T49_Halloween_event: S._k,
                        ussr_R40_T_54_Halloween_event: S.mM,
                        italy_It19_Progetto_C50_mod_66_hw21: S.TL,
                    },
                    k = { ja: 14, zh_sg: 14, zh_tw: 14, zh_cn: 14, ko: 12 }[R.strings.settings.LANGUAGE_CODE()] || 7,
                    P = F().memo(
                        ({
                            intCD: e,
                            invID: u,
                            name: t,
                            iconName: n,
                            vehicleType: a,
                            vehicleState: o,
                            isSelected: i,
                            hasDaily: s,
                            isLockedCarousel: l = !1,
                            isDragging: c,
                            className: d,
                            onClick: E,
                        }) => {
                            const m = (0, A.useState)(!1),
                                D = m[0],
                                g = m[1],
                                S = o !== w.g.Default,
                                P = S ? R.strings.halloween_lobby.carousel.card.$dyn(o) : '',
                                M = () => {
                                    l || i || (n in L && b.O.sound.play.sound(L[n]), E(u));
                                },
                                T = (0, x.useSpring)({
                                    to: { width: i || D ? P.length * k + 'rem' : '0', maxWidth: '120rem' },
                                    from: { width: '0' },
                                    delay: i ? 0 : 150,
                                    immediate: i,
                                    config: { duration: 300, easing: y.Z.easeInOutCubic },
                                });
                            return F().createElement(
                                'div',
                                {
                                    className: r()(
                                        O.base,
                                        i && O.base__selected,
                                        O[`base__${o}`],
                                        !l && !i && O.base__active,
                                        D && O.base__hover,
                                        c && O.base__dragging,
                                        d,
                                    ),
                                },
                                s &&
                                    F().createElement(
                                        p.u,
                                        {
                                            targetId: R.views.halloween.lobby.widgets.CarouselView('resId'),
                                            contentId: R.views.halloween.lobby.tooltips.SimpleFormatTooltip('resId'),
                                            args: { id: 'dailyQuest' },
                                        },
                                        F().createElement(
                                            'div',
                                            { onClick: M },
                                            F().createElement(_._, { size: _.G.C36x36, className: O.daily, gray: !i }),
                                        ),
                                    ),
                                F().createElement('div', {
                                    className: O.icon,
                                    style: {
                                        backgroundImage: `url('${R.images.gui.maps.icons.vehicle.$dyn(`${n}${S ? '_inactive' : ''}`)}')`,
                                    },
                                }),
                                F().createElement('div', { className: O.selected }),
                                F().createElement(
                                    f.t,
                                    {
                                        targetId: R.views.halloween.lobby.widgets.CarouselView('resId'),
                                        args: { tooltipId: 'halloweenCarouselVehicle', intCD: e },
                                        isEnabled: !0,
                                    },
                                    F().createElement('div', {
                                        className: O.placeholder,
                                        onClick: M,
                                        onMouseEnter: () => {
                                            i || l || (g(!0), b.O.sound.play.highlight());
                                        },
                                        onMouseLeave: () => g(!1),
                                    }),
                                ),
                                S &&
                                    F().createElement(
                                        'div',
                                        { className: O.disabled },
                                        F().createElement('div', { className: O.disableBackground }),
                                        F().createElement(
                                            'div',
                                            { className: O.state },
                                            F().createElement('div', { className: O.stateIcon }),
                                            F().createElement(
                                                x.animated.div,
                                                {
                                                    className: O.stateText,
                                                    style: T,
                                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                                },
                                                F().createElement(v.l, { content: P }),
                                            ),
                                        ),
                                    ),
                                i && F().createElement('div', { className: O.cload }),
                                F().createElement(
                                    'div',
                                    { className: r()(O.vehName, i && O.vehName__light) },
                                    F().createElement(C, {
                                        size: h.C38x38,
                                        color: i ? B.WhiteSpanishBright : B.WhiteSpanish,
                                        type: a,
                                        className: O.vehType,
                                    }),
                                    t,
                                ),
                            );
                        },
                    );
                var M = t(4205),
                    T = t(9216);
                function N() {
                    return (
                        (N = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        N.apply(null, arguments)
                    );
                }
                let W;
                !(function (e) {
                    (e.Left = 'left'), (e.Center = 'center'), (e.Right = 'right');
                })(W || (W = {}));
                const I = (0, E.Pi)(({ className: e }) => {
                    const u = (0, T.t)(),
                        t = u.model,
                        n = u.controls,
                        E = (0, l.GS)(),
                        _ = t.root.get().selectedVehicle,
                        D = (0, o.T5)(),
                        g = (0, c.m)(D),
                        h = (0, A.useRef)(null),
                        B = (0, A.useRef)(null),
                        C = (0, A.useState)(!1),
                        v = C[0],
                        f = C[1],
                        p = (0, A.useState)(W.Left),
                        b = p[0],
                        w = p[1],
                        y = (0, A.useCallback)(() => {
                            D.applyStepTo(o.Nm.Next);
                        }, [D]),
                        x = (0, A.useCallback)(() => {
                            D.applyStepTo(o.Nm.Prev);
                        }, [D]),
                        S = (0, A.useCallback)(() => {
                            if (B.current && h.current) {
                                const e = D.getContainerSize(),
                                    u = D.getWrapperSize() < e;
                                f(u), (B.current.style.cursor = u ? '' : 'auto');
                            }
                        }, [D]),
                        O = (0, A.useCallback)(() => {
                            const e = D.getBounds(),
                                u = e[0],
                                t = e[1],
                                n = D.animationScroll.scrollPosition.goal;
                            w(n === u ? W.Left : n === t ? W.Right : W.Center);
                        }, [D]),
                        L = (0, A.useCallback)(() => {
                            const e = d.cx(t.vehicles.get(), (e) => e.invID === _);
                            void 0 !== e && v && D.applyScroll(160 * e, { immediate: !1 });
                        }, [v, t.vehicles, D, _]),
                        k = (0, s.z)(O);
                    (0, A.useEffect)(
                        () => (
                            D.events.on('change', k),
                            D.events.on('recalculateContent', S),
                            D.events.on('resizeHandled', S),
                            () => {
                                D.events.off('change', k),
                                    D.events.off('recalculateContent', S),
                                    D.events.off('resizeHandled', S);
                            }
                        ),
                        [D.events, k, S],
                    ),
                        (0, A.useEffect)(
                            () =>
                                (0, i.v)(() =>
                                    (0, i.v)(() => {
                                        S();
                                    }),
                                ),
                            [S, E],
                        ),
                        (0, A.useEffect)(
                            () =>
                                (0, i.v)(() => {
                                    L();
                                }),
                            [L],
                        );
                    const R = (0, A.useCallback)(
                        (e) => {
                            n.changeVehicle(e);
                        },
                        [n],
                    );
                    return F().createElement(
                        'div',
                        { className: r()(m.base, e) },
                        v &&
                            F().createElement(M.A, {
                                className: m.leftBtn,
                                type: M.q.Left,
                                isDisabled: b === W.Left,
                                onClick: y,
                            }),
                        F().createElement(
                            'div',
                            { className: m.scroll, ref: h },
                            F().createElement(
                                a.X.Horizontal.Area.Default,
                                { api: D, classNames: { wrapper: r()(m.content, !v && m.content__noScroll) } },
                                F().createElement(
                                    'div',
                                    { className: m.items, ref: B },
                                    d.UI(t.vehicles.get(), (e) =>
                                        F().createElement(
                                            P,
                                            N(
                                                {
                                                    key: e.invID,
                                                    className: m.item,
                                                    isSelected: _ === e.invID,
                                                    isLockedCarousel: t.computes.getCarouselLock(),
                                                    isDragging: v && g.type === c.G.Dragging,
                                                    onClick: R,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        v &&
                            F().createElement(M.A, {
                                className: m.rightBtn,
                                type: M.q.Right,
                                isDisabled: b === W.Right,
                                onClick: x,
                            }),
                    );
                });
            },
            8849: (e, u, t) => {
                var n = t(6179),
                    r = t.n(n),
                    a = t(7505),
                    o = t(9216);
                (0, n.memo)(function (e) {
                    const u = (0, n.useMemo)(
                        () => ({ rootId: R.views.halloween.lobby.widgets.CarouselView('resId') }),
                        [],
                    );
                    return r().createElement(o.k, { options: u }, r().createElement(a.lr, e));
                });
            },
            4205: (e, u, t) => {
                t.d(u, { A: () => c, q: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3138),
                    o = t(6179),
                    i = t.n(o);
                const s = {
                    base: 'SliderBtn_base_1e',
                    base__left: 'SliderBtn_base__left_1d',
                    base__right: 'SliderBtn_base__right_c8',
                    base__disabled: 'SliderBtn_base__disabled_6d',
                    base__hover: 'SliderBtn_base__hover_2f',
                    hover: 'SliderBtn_hover_b2',
                    base__active: 'SliderBtn_base__active_a9',
                    active: 'SliderBtn_active_4f',
                };
                let l;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(l || (l = {}));
                const c = i().memo(function ({ type: e, className: u, isDisabled: t = !1, onClick: n }) {
                    const l = (0, o.useState)(!1),
                        c = l[0],
                        d = l[1],
                        E = (0, o.useState)(!1),
                        A = E[0],
                        F = E[1];
                    return i().createElement(
                        'div',
                        {
                            className: r()(
                                s.base,
                                s[`base__${e}`],
                                A && s.base__hover,
                                c && s.base__active,
                                t && s.base__disabled,
                                u,
                            ),
                            onMouseEnter: () => {
                                t || (a.O.sound.play.highlight(), F(!0));
                            },
                            onMouseLeave: () => {
                                F(!1), d(!1);
                            },
                            onClick: () => {
                                t || (a.O.sound.play.click(), n());
                            },
                            onMouseUp: () => d(!1),
                            onMouseDown: () => d(!0),
                        },
                        !t && i().createElement('div', { className: s.hover }),
                        !t && i().createElement('div', { className: s.active }),
                    );
                });
            },
            9216: (e, u, t) => {
                t.d(u, { k: () => s, t: () => l });
                var n = t(3215),
                    r = t(2112),
                    a = t(9480),
                    o = t(3946);
                const i = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), vehicles: e.array('vehicles', []) },
                                t = (0, o.Om)(() => !a.yW(u.vehicles.get(), (e) => e.vehicleState !== r.g.InPlatoon));
                            return Object.assign({}, u, { computes: { getCarouselLock: t } });
                        },
                        ({ externalModel: e }) => ({
                            changeVehicle: e.createCallback((e) => ({ invID: e }), 'onChangeVehicle'),
                        }),
                    ),
                    s = i[0],
                    l = i[1];
            },
            824: (e, u, t) => {
                t.d(u, { SV: () => r, TL: () => s, UA: () => n, _k: () => o, mM: () => i, nJ: () => a });
                const n = 'ev_hw_hangar_ui_tank_hornet',
                    r = 'ev_hw_hangar_ui_tank_cerberus',
                    a = 'ev_hw_hangar_ui_tank_double',
                    o = 'ev_hw_hangar_ui_tank_grenadier',
                    i = 'ev_hw_hangar_ui_tank_malachite',
                    s = 'ev_hw_hangar_ui_tank_ferrata';
            },
            2112: (e, u, t) => {
                let n, r;
                t.d(u, { g: () => r }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.LightTank = 'lightTank'),
                            (e.MediumTank = 'mediumTank'),
                            (e.HeavyTank = 'heavyTank'),
                            (e.SPG = 'SPG'),
                            (e.AT_SPG = 'AT-SPG');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Default = 'default'),
                            (e.Locked = 'locked'),
                            (e.InBattle = 'inBattle'),
                            (e.InPlatoon = 'inPlatoon');
                    })(r || (r = {}));
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
            1699: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'TextOverflow_base_3b' };
            },
            9831: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'KeyIcon_base_5a',
                    base__c28x28: 'KeyIcon_base__c28x28_d5',
                    base__c30x30: 'KeyIcon_base__c30x30_ba',
                    base__c36x36: 'KeyIcon_base__c36x36_dd',
                    base__gray: 'KeyIcon_base__gray_fc',
                    base__c44x44: 'KeyIcon_base__c44x44_bd',
                    base__c70x70: 'KeyIcon_base__c70x70_61',
                    base__c110x110: 'KeyIcon_base__c110x110_7c',
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
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 581),
        (() => {
            var e = { 581: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8849));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
