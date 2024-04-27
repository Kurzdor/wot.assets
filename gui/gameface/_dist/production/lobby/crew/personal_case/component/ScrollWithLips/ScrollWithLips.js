(() => {
    'use strict';
    var e,
        t = {
            2773: (e, t, n) => {
                n.d(t, { $Q: () => b });
                var r = n(6483),
                    o = n.n(r),
                    s = n(7515),
                    i = n(1856),
                    a = n(3815),
                    l = n(560),
                    c = n(7727),
                    u = n(6179),
                    d = n.n(u),
                    f = n(6358),
                    m = n(372);
                const v = 'disable',
                    g = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = () => {},
                    E = (e, t) => Math.max(20, e.offsetWidth * t),
                    b = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = p, onDrag: r = h }) => {
                        const b = (0, u.useRef)(null),
                            w = (0, u.useRef)(null),
                            y = (0, u.useRef)(null),
                            S = (0, u.useRef)(null),
                            P = (0, u.useRef)(null),
                            N = e.stepTimeout || 100,
                            _ = (0, u.useState)(g),
                            R = _[0],
                            z = _[1],
                            B = (0, u.useCallback)(
                                (e) => {
                                    z(e),
                                        P.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: P.current });
                                },
                                [r],
                            ),
                            C = () => {
                                const t = S.current,
                                    n = P.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, s.u)(0, 1, i / (o - r)),
                                    c = (t.offsetWidth - E(t, a)) * l;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (w.current && y.current && S.current && P.current) {
                                            if (0 === e)
                                                return w.current.classList.add(v), void y.current.classList.remove(v);
                                            if (
                                                ((t = S.current),
                                                (n = P.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return w.current.classList.remove(v), void y.current.classList.add(v);
                                            var t, n;
                                            w.current.classList.remove(v), y.current.classList.remove(v);
                                        }
                                    })(c);
                            },
                            M = (0, a.z)(() => {
                                (() => {
                                    const t = P.current,
                                        n = S.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && r && n)) return;
                                    const s = Math.min(1, r / o);
                                    (t.style.width = `${E(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        b.current &&
                                            (1 === s
                                                ? b.current.classList.add(m.Z.base__nonActive)
                                                : b.current.classList.remove(m.Z.base__nonActive));
                                })(),
                                    C();
                            });
                        (0, u.useEffect)(() => (0, i.v)(M)),
                            (0, u.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            C();
                                        };
                                        let n = h;
                                        const r = () => {
                                            n(), (n = (0, i.v)(M));
                                        };
                                        return (
                                            e.events.on('recalculateContent', M),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', M),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!R.pending) return;
                                const t = (t) => {
                                        var n;
                                        const o = e.contentRef.current;
                                        if (!o) return;
                                        const s = S.current,
                                            i = P.current;
                                        if (!o || !s || !i) return;
                                        const a = t.screenX - R.offset - s.getBoundingClientRect().x,
                                            l = (a / s.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: i, thumbOffset: a, contentOffset: l });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), B(g);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, R.offset, R.pending, r, B]);
                        const x = (0, l.B)((t) => e.applyStepTo(t), N, [e]),
                            T = x[0],
                            L = x[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const W = (e) => {
                            e.target.classList.contains(v) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: o()(m.Z.base, t.base), ref: b, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: o()(m.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(v) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(f.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: w,
                                onMouseEnter: W,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: o()(m.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = P.current;
                                        if (r && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === r))
                                                B({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = P.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? f.Nm.Prev : f.Nm.Next);
                                            }
                                    },
                                    ref: S,
                                    onMouseEnter: W,
                                },
                                d().createElement('div', { ref: P, className: o()(m.Z.thumb, t.thumb) }),
                                d().createElement('div', { className: o()(m.Z.rail, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: o()(m.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(v) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), T(f.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: y,
                                onMouseEnter: W,
                            }),
                        );
                    });
            },
            2840: (e, t, n) => {
                n.d(t, { K: () => u });
                var r = n(6483),
                    o = n.n(r),
                    s = n(6179),
                    i = n.n(s),
                    a = n(2773),
                    l = n(7950),
                    c = n(4682);
                const u = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: r,
                    areaClassName: u,
                    classNames: d,
                    scrollClassName: f,
                    getStepByRailClick: m,
                    onDrag: v,
                }) => {
                    const g = (0, s.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: o()(c.Z.base, e.base) });
                        }, [r]),
                        p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(c.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(c.Z.defaultScrollArea, u) },
                            i().createElement(l.Area, { className: f, api: p, classNames: d }, e),
                        ),
                        i().createElement(a.$Q, { getStepByRailClick: m, api: t, onDrag: v, classNames: g }),
                    );
                };
            },
            7950: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        Area: () => m,
                        Bar: () => l.$Q,
                        DefaultScroll: () => c.K,
                        Direction: () => f.Nm,
                        defaultSettings: () => f.he,
                        useHorizontalScrollApi: () => f.T5,
                    });
                var r = n(6483),
                    o = n.n(r),
                    s = n(1856),
                    i = n(6179),
                    a = n.n(i),
                    l = n(2773),
                    c = n(2840),
                    u = n(4682),
                    d = n(8579),
                    f = n(6358);
                const m = ({ api: e, className: t, classNames: n, children: r }) => (
                    (0, i.useEffect)(() => (0, s.v)(e.recalculateContent)),
                    a().createElement(
                        'div',
                        { className: o()(u.Z.base, t) },
                        a().createElement(
                            'div',
                            {
                                className: o()(u.Z.wrapper, null == n ? void 0 : n.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            a().createElement(
                                'div',
                                { className: o()(u.Z.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                (m.Bar = l.$Q), (m.Default = c.K), (m.SeniorityAwards = d.Tm);
            },
            8579: (e, t, n) => {
                n.d(t, { Tm: () => c });
                var r = n(6483),
                    o = n.n(r),
                    s = n(1856),
                    i = n(6179),
                    a = n.n(i),
                    l = (n(2773), n(2840), n(4682));
                n(6358);
                const c = ({ api: e, className: t, classNames: n, children: r }) => (
                    (0, i.useEffect)(() => (0, s.v)(e.recalculateContent)),
                    a().createElement(
                        'div',
                        { className: o()(l.Z.base, t) },
                        a().createElement(
                            'div',
                            { className: o()(l.Z.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                            a().createElement(
                                'div',
                                { className: o()(l.Z.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
            },
            6358: (e, t, n) => {
                n.d(t, { Nm: () => r.Nm, T5: () => o, he: () => r.he });
                var r = n(7308);
                const o = (0, r.EO)({
                    getBounds: (e) => {
                        var t, n;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, n) => {
                n.d(t, { $Q: () => w });
                var r = n(6483),
                    o = n.n(r),
                    s = n(7515),
                    i = n(1856),
                    a = n(3815),
                    l = n(560),
                    c = n(7727),
                    u = n(6179),
                    d = n.n(u),
                    f = n(7701),
                    m = n(9168);
                const v = 'disable',
                    g = () => {},
                    p = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    E = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    b = (e, t) => Math.max(20, e.offsetHeight * t),
                    w = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = h, onDrag: r = g }) => {
                        const w = (0, u.useRef)(null),
                            y = (0, u.useRef)(null),
                            S = (0, u.useRef)(null),
                            P = (0, u.useRef)(null),
                            N = (0, u.useRef)(null),
                            _ = e.stepTimeout || 100,
                            R = (0, u.useState)(p),
                            z = R[0],
                            B = R[1],
                            C = (0, u.useCallback)(
                                (e) => {
                                    B(e),
                                        N.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: N.current });
                                },
                                [r],
                            ),
                            M = (0, a.z)(() => {
                                const t = N.current,
                                    n = P.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && o && t && n)) return;
                                const s = Math.min(1, r / o);
                                return (
                                    (t.style.height = `${b(n, s)}px`),
                                    t.classList.add(m.Z.thumb),
                                    w.current &&
                                        (1 === s
                                            ? w.current.classList.add(m.Z.base__nonActive)
                                            : w.current.classList.remove(m.Z.base__nonActive)),
                                    s
                                );
                            }),
                            x = (0, a.z)(() => {
                                const t = P.current,
                                    n = N.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, s.u)(0, 1, i / (o - r)),
                                    c = (t.offsetHeight - b(t, a)) * l;
                                (n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (y.current && S.current && P.current && N.current) {
                                            if (0 === e)
                                                return y.current.classList.add(v), void S.current.classList.remove(v);
                                            if (
                                                ((t = P.current),
                                                (n = N.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return y.current.classList.remove(v), void S.current.classList.add(v);
                                            var t, n;
                                            y.current.classList.remove(v), S.current.classList.remove(v);
                                        }
                                    })(c);
                            }),
                            T = (0, a.z)(() => {
                                E(e, () => {
                                    M(), x();
                                });
                            });
                        (0, u.useEffect)(() => (0, i.v)(T)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    E(e, () => {
                                        x();
                                    });
                                };
                                let n = g;
                                const r = () => {
                                    n(), (n = (0, i.v)(T));
                                };
                                return (
                                    e.events.on('recalculateContent', T),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', T),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!z.pending) return;
                                const t = (t) => {
                                        E(e, (n) => {
                                            const o = P.current,
                                                s = N.current,
                                                i = e.getContainerSize();
                                            if (!o || !s || !i) return;
                                            const a = t.screenY - z.offset - o.getBoundingClientRect().y,
                                                l = (a / o.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: s, thumbOffset: a, contentOffset: l });
                                        });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), C(p);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, z.offset, z.pending, r, C]);
                        const L = (0, l.B)((t) => e.applyStepTo(t), _, [e]),
                            W = L[0],
                            O = L[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', O, !0),
                                () => document.removeEventListener('mouseup', O, !0)
                            ),
                            [O],
                        );
                        const A = (e) => {
                            e.target.classList.contains(v) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: o()(m.Z.base, t.base), ref: w, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: o()(m.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(v) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), W(f.Nm.Next));
                                },
                                ref: y,
                                onMouseEnter: A,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: o()(m.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = N.current;
                                        if (r && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === r))
                                                C({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    N.current &&
                                                        E(e, (r) => {
                                                            if (!r) return;
                                                            const o = n(e),
                                                                s = e.clampPosition(r, r.scrollTop + o * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? f.Nm.Prev : f.Nm.Next);
                                            }
                                    },
                                    ref: P,
                                    onMouseEnter: A,
                                },
                                d().createElement('div', { ref: N, className: t.thumb }),
                                d().createElement('div', { className: o()(m.Z.rail, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: o()(m.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(v) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), W(f.Nm.Prev));
                                },
                                onMouseUp: O,
                                ref: S,
                                onMouseEnter: A,
                            }),
                        );
                    });
            },
            1158: (e, t, n) => {
                n.d(t, { K: () => u });
                var r = n(6483),
                    o = n.n(r),
                    s = n(6179),
                    i = n.n(s),
                    a = n(6225),
                    l = n(9605),
                    c = n(5636);
                const u = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: r,
                    areaClassName: u,
                    scrollClassName: d,
                    scrollClassNames: f,
                    getStepByRailClick: m,
                    onDrag: v,
                }) => {
                    const g = (0, s.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: o()(c.Z.base, e.base) });
                        }, [r]),
                        p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(c.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(c.Z.area, u) },
                            i().createElement(l.Area, { className: d, classNames: f, api: p }, e),
                        ),
                        i().createElement(a.$Q, { getStepByRailClick: m, api: t, onDrag: v, classNames: g }),
                    );
                };
            },
            9605: (e, t, n) => {
                n.r(t),
                    n.d(t, { Area: () => f, Bar: () => l.$Q, Default: () => c.K, useVerticalScrollApi: () => u.c4 });
                var r = n(6483),
                    o = n.n(r),
                    s = n(1856),
                    i = n(6179),
                    a = n.n(i),
                    l = n(6225),
                    c = n(1158),
                    u = n(7701),
                    d = n(5636);
                const f = ({ className: e, classNames: t, children: n, api: r }) => (
                    (0, i.useEffect)(() => (0, s.v)(r.recalculateContent)),
                    a().createElement(
                        'div',
                        { className: o()(d.Z.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        a().createElement(
                            'div',
                            { className: o()(d.Z.content, null == t ? void 0 : t.content), ref: r.contentRef },
                            n,
                        ),
                    )
                );
                f.Default = c.K;
            },
            7701: (e, t, n) => {
                n.d(t, { Nm: () => r.Nm, c4: () => o });
                var r = n(7308);
                const o = (0, r.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                });
            },
            7308: (e, t, n) => {
                n.d(t, { EO: () => v, Nm: () => f, he: () => m });
                var r = n(7515),
                    o = n(1856),
                    s = n(3138),
                    i = n(4532),
                    a = n(9653),
                    l = n(3815),
                    c = n(4489),
                    u = n(6179),
                    d = n(7030);
                let f;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(f || (f = {}));
                const m = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    v = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: f,
                        getWrapperSize: v,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const p = (e, n) => {
                            const o = t(e),
                                s = o[0],
                                i = o[1];
                            return (0, r.u)(s, i, n);
                        };
                        return (r = {}) => {
                            const h = r.settings,
                                E = void 0 === h ? m : h,
                                b = (0, u.useRef)(null),
                                w = (0, u.useRef)(null),
                                y = (0, a.q)(),
                                S = (0, c.f)(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                P = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = b.current;
                                        t && (n(t, e), y.trigger('change', e), g && S());
                                    },
                                    onRest: (e) => y.trigger('rest', e),
                                    onStart: (e) => y.trigger('start', e),
                                    onPause: (e) => y.trigger('pause', e),
                                })),
                                N = P[0],
                                _ = P[1],
                                R = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = N.scrollPosition.get(),
                                            s = (null != (r = N.scrollPosition.goal) ? r : 0) - o;
                                        return p(e, t * n + s + o);
                                    },
                                    [N.scrollPosition],
                                ),
                                z = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = b.current;
                                        r &&
                                            _.start({
                                                scrollPosition: p(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: E.animationConfig,
                                                from: { scrollPosition: p(r, N.scrollPosition.get()) },
                                            });
                                    },
                                    [_, E.animationConfig, N.scrollPosition],
                                ),
                                B = (0, u.useCallback)(
                                    (e) => {
                                        const t = b.current,
                                            n = w.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return v(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, E.step),
                                            o = R(t, e, r);
                                        z(o);
                                    },
                                    [z, R, E.step],
                                ),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(f(e)),
                                            b.current && y.trigger('mouseWheel', e, N.scrollPosition, t(b.current));
                                    },
                                    [N.scrollPosition, B, y],
                                ),
                                M = (0, i.M)(
                                    () =>
                                        (0, o.v)(() => {
                                            const e = b.current;
                                            e &&
                                                (z(p(e, N.scrollPosition.goal), { immediate: !0 }),
                                                y.trigger('resizeHandled'));
                                        }),
                                    [z, N.scrollPosition.goal],
                                ),
                                x = (0, l.z)(() => {
                                    const e = b.current;
                                    if (!e) return;
                                    const t = p(e, N.scrollPosition.goal);
                                    t !== N.scrollPosition.goal && z(t, { immediate: !0 }),
                                        y.trigger('recalculateContent');
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', M),
                                    () => {
                                        window.removeEventListener('resize', M);
                                    }
                                ),
                                [M],
                            );
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (w.current ? v(w.current) : void 0),
                                    getContainerSize: () => (b.current ? e(b.current) : void 0),
                                    getBounds: () =>
                                        b.current
                                            ? t(b.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: p,
                                    handleMouseWheel: C,
                                    applyScroll: z,
                                    applyStepTo: B,
                                    contentRef: b,
                                    wrapperRef: w,
                                    scrollPosition: _,
                                    animationScroll: N,
                                    recalculateContent: x,
                                    events: { on: y.on, off: y.off },
                                }),
                                [N.scrollPosition, z, B, y.off, y.on, x, C, _, E.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, n) => {
                n(7950);
                n(9605);
            },
            7515: (e, t, n) => {
                n.d(t, { u: () => r });
                const r = (e, t, n) => (n < e ? e : n > t ? t : n);
            },
            1856: (e, t, n) => {
                n.d(t, { v: () => r });
                const r = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            527: (e, t, n) => {
                n.r(t), n.d(t, { mouse: () => a, onResize: () => s });
                var r = n(2472),
                    o = n(1176);
                const s = (0, r.E)('clientResized'),
                    i = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const a = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, o.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, o.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const s = `mouse${t}`,
                                        a = i[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, l),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(s, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => o,
                        graphicsQuality: () => i,
                    });
                var r = n(527);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => o });
                var r = n(5959);
                const o = { view: n(7641), client: r };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var r = n(2472);
                const o = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => a,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => _,
                        events: () => s.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => N,
                        getScale: () => p,
                        getSize: () => f,
                        getViewGlobalPosition: () => v,
                        isEventHandled: () => S,
                        isFocused: () => w,
                        pxToRem: () => h,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => z,
                    });
                var r = n(3722),
                    o = n(6112),
                    s = n(6538),
                    i = n(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function v(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function P() {
                    viewEnv.forceTriggerMouseMove();
                }
                function N() {
                    return viewEnv.getShowingStatus();
                }
                const _ = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const r = ['args'];
                const o = 2,
                    s = 16,
                    i = 32,
                    a = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, r);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = s),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? o : i);
                        },
                        minimize() {
                            l(a);
                        },
                        move(e) {
                            l(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4532: (e, t, n) => {
                n.d(t, { M: () => o });
                var r = n(6179);
                const o = (e, t = []) => {
                    const n = (0, r.useRef)(),
                        o = (0, r.useCallback)((...t) => {
                            n.current && n.current(), (n.current = e(...t));
                        }, t);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                n.current && n.current();
                            },
                            [o],
                        ),
                        o
                    );
                };
            },
            9653: (e, t, n) => {
                n.d(t, { q: () => i });
                var r = n(6179);
                function o(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const i = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        s = (e, n) => {
                            t(e).delete(n);
                        },
                        i = (e, ...n) => {
                            for (var r, s = o(t(e).values()); !(r = s()).done; ) {
                                (0, r.value)(...n);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: n, off: s, trigger: i }), []);
                };
            },
            3815: (e, t, n) => {
                n.d(t, { z: () => s });
                var r = n(6179);
                const o = [];
                function s(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), o)
                    );
                }
            },
            560: (e, t, n) => {
                n.d(t, { B: () => o });
                var r = n(6179);
                function o(e, t, n = []) {
                    const o = (0, r.useRef)(0),
                        s = (0, r.useCallback)(() => window.clearInterval(o.current), n || []);
                    (0, r.useEffect)(() => s, [s]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, r.useCallback)((n) => {
                            (o.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        s,
                    ];
                }
            },
            4489: (e, t, n) => {
                n.d(t, { f: () => s });
                var r = n(5139),
                    o = n(6179);
                function s(e, t, n) {
                    const s = (0, o.useMemo)(() => (0, r.Z)(n, e), t);
                    return (0, o.useEffect)(() => s.cancel, [s]), s;
                }
            },
            7727: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { G: () => r });
            },
            5139: (e, t, n) => {
                function r(e, t, n, r) {
                    let o,
                        s = !1,
                        i = 0;
                    function a() {
                        o && clearTimeout(o);
                    }
                    function l(...l) {
                        const c = this,
                            u = Date.now() - i;
                        function d() {
                            (i = Date.now()), n.apply(c, l);
                        }
                        s ||
                            (r && !o && d(),
                            a(),
                            void 0 === r && u > e
                                ? d()
                                : !0 !== t &&
                                  (o = setTimeout(
                                      r
                                          ? function () {
                                                o = void 0;
                                            }
                                          : d,
                                      void 0 === r ? e - u : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                        (l.cancel = function () {
                            a(), (s = !0);
                        }),
                        l
                    );
                }
                n.d(t, { Z: () => r });
            },
            3961: (e, t, n) => {
                n(6483), n(794), n(7701), n(6179);
                let r;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(r || (r = {}));
            },
            372: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var s = (n[e] = { exports: {} });
        return t[e](s, s.exports, r), s.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, s) => {
            if (!n) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, s] = e[u], a = !0, l = 0; l < n.length; l++)
                        (!1 & s || i >= s) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((a = !1), s < i && (i = s));
                    if (a) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
            e[u] = [n, o, s];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 987),
        (() => {
            var e = { 987: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        s,
                        [i, a, l] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < i.length; c++) (s = i[c]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [56], () => r(3961));
    o = r.O(o);
})();
