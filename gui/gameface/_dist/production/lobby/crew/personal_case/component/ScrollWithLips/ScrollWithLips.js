(() => {
    'use strict';
    var e,
        t = {
            2773: (e, t, n) => {
                n.d(t, { $Q: () => w });
                var r = n(6483),
                    o = n.n(r),
                    s = n(7515),
                    i = n(1856),
                    a = n(3138),
                    l = n(3815),
                    c = n(560),
                    u = n(7727),
                    d = n(6179),
                    f = n.n(d),
                    m = n(6358),
                    v = n(372);
                const g = 'disable',
                    p = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    b = () => {},
                    E = (e, t) => Math.max(20, e.offsetWidth * t),
                    w = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = h, onDrag: r = b }) => {
                        const w = (0, d.useRef)(null),
                            y = (0, d.useRef)(null),
                            S = (0, d.useRef)(null),
                            P = (0, d.useRef)(null),
                            _ = (0, d.useRef)(null),
                            R = e.stepTimeout || 100,
                            N = (0, d.useState)(p),
                            z = N[0],
                            B = N[1],
                            C = (0, d.useCallback)(
                                (e) => {
                                    B(e),
                                        _.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [r],
                            ),
                            M = () => {
                                const t = P.current,
                                    n = _.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, s.u)(0, 1, i / (o - r)),
                                    c = (t.offsetWidth - E(t, a)) * l;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (y.current && S.current && P.current && _.current) {
                                            if (0 === e)
                                                return y.current.classList.add(g), void S.current.classList.remove(g);
                                            if (
                                                ((t = P.current),
                                                (n = _.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return y.current.classList.remove(g), void S.current.classList.add(g);
                                            var t, n;
                                            y.current.classList.remove(g), S.current.classList.remove(g);
                                        }
                                    })(c);
                            },
                            x = (0, l.z)(() => {
                                (() => {
                                    const t = _.current,
                                        n = P.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && r && n)) return;
                                    const s = Math.min(1, r / o);
                                    (t.style.width = `${E(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        w.current &&
                                            (1 === s
                                                ? w.current.classList.add(v.Z.base__nonActive)
                                                : w.current.classList.remove(v.Z.base__nonActive));
                                })(),
                                    M();
                            });
                        (0, d.useEffect)(() => (0, i.v)(x)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            M();
                                        };
                                        let n = b;
                                        const r = () => {
                                            n(), (n = (0, i.v)(x));
                                        };
                                        return (
                                            e.events.on('recalculateContent', x),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', x),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!z.pending) return;
                                const t = a.O.client.events.mouse.move(([t, n]) => {
                                        var o;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const a = P.current,
                                            l = _.current;
                                        if (!a || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - z.offset - a.getBoundingClientRect().x,
                                            u = (c / a.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u });
                                    }),
                                    n = a.O.client.events.mouse.up(() => {
                                        t(), C(p);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, z.offset, z.pending, r, C]);
                        const T = (0, c.B)((t) => e.applyStepTo(t), R, [e]),
                            O = T[0],
                            W = T[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', W, !0),
                                () => document.removeEventListener('mouseup', W, !0)
                            ),
                            [W],
                        );
                        const L = (e) => {
                            e.target.classList.contains(g) || (0, u.G)('highlight');
                        };
                        return f().createElement(
                            'div',
                            { className: o()(v.Z.base, t.base), ref: w, onWheel: e.handleMouseWheel },
                            f().createElement('div', {
                                className: o()(v.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), O(m.Nm.Next));
                                },
                                onMouseUp: W,
                                ref: y,
                                onMouseEnter: L,
                            }),
                            f().createElement(
                                'div',
                                {
                                    className: o()(v.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = _.current;
                                        if (r && 0 === t.button)
                                            if (((0, u.G)('play'), t.target === r))
                                                C({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = _.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: P,
                                    onMouseEnter: L,
                                },
                                f().createElement('div', { ref: _, className: o()(v.Z.thumb, t.thumb) }),
                                f().createElement('div', { className: o()(v.Z.rail, t.rail) }),
                            ),
                            f().createElement('div', {
                                className: o()(v.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), O(m.Nm.Prev));
                                },
                                onMouseUp: W,
                                ref: S,
                                onMouseEnter: L,
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
                        Area: () => f,
                        Bar: () => l.$Q,
                        DefaultScroll: () => c.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var r = n(6483),
                    o = n.n(r),
                    s = n(1856),
                    i = n(6179),
                    a = n.n(i),
                    l = n(2773),
                    c = n(2840),
                    u = n(4682),
                    d = n(6358);
                const f = ({ api: e, className: t, classNames: n, children: r }) => (
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
                (f.Bar = l.$Q), (f.Default = c.K);
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
                n.d(t, { $Q: () => y });
                var r = n(6483),
                    o = n.n(r),
                    s = n(7515),
                    i = n(1856),
                    a = n(3138),
                    l = n(3815),
                    c = n(560),
                    u = n(7727),
                    d = n(6179),
                    f = n.n(d),
                    m = n(7701),
                    v = n(9168);
                const g = 'disable',
                    p = () => {},
                    h = { pending: !1, offset: 0 },
                    b = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    E = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    w = (e, t) => Math.max(20, e.offsetHeight * t),
                    y = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = b, onDrag: r = p }) => {
                        const y = (0, d.useRef)(null),
                            S = (0, d.useRef)(null),
                            P = (0, d.useRef)(null),
                            _ = (0, d.useRef)(null),
                            R = (0, d.useRef)(null),
                            N = e.stepTimeout || 100,
                            z = (0, d.useState)(h),
                            B = z[0],
                            C = z[1],
                            M = (0, d.useCallback)(
                                (e) => {
                                    C(e),
                                        R.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: R.current });
                                },
                                [r],
                            ),
                            x = (0, l.z)(() => {
                                const t = R.current,
                                    n = _.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && o && t && n)) return;
                                const s = Math.min(1, r / o);
                                return (
                                    (t.style.height = `${w(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    y.current &&
                                        (1 === s
                                            ? y.current.classList.add(v.Z.base__nonActive)
                                            : y.current.classList.remove(v.Z.base__nonActive)),
                                    s
                                );
                            }),
                            T = (0, l.z)(() => {
                                const t = _.current,
                                    n = R.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, s.u)(0, 1, i / (o - r)),
                                    c = (t.offsetHeight - w(t, a)) * l;
                                (n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (S.current && P.current && _.current && R.current) {
                                            if (0 === Math.round(e))
                                                return S.current.classList.add(g), void P.current.classList.remove(g);
                                            if (
                                                ((t = _.current),
                                                (n = R.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return S.current.classList.remove(g), void P.current.classList.add(g);
                                            var t, n;
                                            S.current.classList.remove(g), P.current.classList.remove(g);
                                        }
                                    })(c);
                            }),
                            O = (0, l.z)(() => {
                                E(e, () => {
                                    x(), T();
                                });
                            });
                        (0, d.useEffect)(() => (0, i.v)(O)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    E(e, () => {
                                        T();
                                    });
                                };
                                let n = p;
                                const r = () => {
                                    n(), (n = (0, i.v)(O));
                                };
                                return (
                                    e.events.on('recalculateContent', O),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', O),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!B.pending) return;
                                const t = a.O.client.events.mouse.up(() => {
                                        M(h);
                                    }),
                                    n = a.O.client.events.mouse.move(([t]) => {
                                        E(e, (n) => {
                                            const o = _.current,
                                                s = R.current,
                                                i = e.getContainerSize();
                                            if (!o || !s || !i) return;
                                            const a = t.screenY - B.offset - o.getBoundingClientRect().y,
                                                l = (a / o.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: s, thumbOffset: a, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, B.offset, B.pending, r, M]);
                        const W = (0, c.B)((t) => e.applyStepTo(t), N, [e]),
                            L = W[0],
                            A = W[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const k = (e) => {
                            e.target.classList.contains(g) || (0, u.G)('highlight');
                        };
                        return f().createElement(
                            'div',
                            { className: o()(v.Z.base, t.base), ref: y, onWheel: e.handleMouseWheel },
                            f().createElement('div', {
                                className: o()(v.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), L(m.Nm.Next));
                                },
                                ref: S,
                                onMouseEnter: k,
                            }),
                            f().createElement(
                                'div',
                                {
                                    className: o()(v.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = R.current;
                                        if (r && 0 === t.button)
                                            if (((0, u.G)('play'), t.target === r))
                                                M({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    R.current &&
                                                        E(e, (r) => {
                                                            if (!r) return;
                                                            const o = n(e),
                                                                s = e.clampPosition(r, r.scrollTop + o * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: k,
                                },
                                f().createElement('div', { ref: R, className: o()(v.Z.thumb, t.thumb) }),
                                f().createElement('div', { className: o()(v.Z.rail, t.rail) }),
                            ),
                            f().createElement('div', {
                                className: o()(v.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), L(m.Nm.Prev));
                                },
                                onMouseUp: A,
                                ref: P,
                                onMouseEnter: k,
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
                            return i <= s ? 0 : (0, r.u)(s, i, n);
                        };
                        return (r = {}) => {
                            const h = r.settings,
                                b = void 0 === h ? m : h,
                                E = (0, u.useRef)(null),
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
                                        const t = E.current;
                                        t && (n(t, e), y.trigger('change', e), g && S());
                                    },
                                    onRest: (e) => y.trigger('rest', e),
                                    onStart: (e) => y.trigger('start', e),
                                    onPause: (e) => y.trigger('pause', e),
                                })),
                                _ = P[0],
                                R = P[1],
                                N = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = _.scrollPosition.get(),
                                            s = (null != (r = _.scrollPosition.goal) ? r : 0) - o;
                                        return p(e, t * n + s + o);
                                    },
                                    [_.scrollPosition],
                                ),
                                z = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            R.start({
                                                scrollPosition: p(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: b.animationConfig,
                                                from: { scrollPosition: p(r, _.scrollPosition.get()) },
                                            });
                                    },
                                    [R, b.animationConfig, _.scrollPosition],
                                ),
                                B = (0, u.useCallback)(
                                    (e) => {
                                        const t = E.current,
                                            n = w.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return v(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, b.step),
                                            o = N(t, e, r);
                                        z(o);
                                    },
                                    [z, N, b.step],
                                ),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(f(e)),
                                            E.current && y.trigger('mouseWheel', e, _.scrollPosition, t(E.current));
                                    },
                                    [_.scrollPosition, B, y],
                                ),
                                M = (0, i.M)(
                                    () =>
                                        (0, o.v)(() => {
                                            const e = E.current;
                                            e &&
                                                (z(p(e, _.scrollPosition.goal), { immediate: !0 }),
                                                y.trigger('resizeHandled'));
                                        }),
                                    [z, _.scrollPosition.goal],
                                ),
                                x = (0, l.z)(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const t = p(e, _.scrollPosition.goal);
                                    t !== _.scrollPosition.goal && z(t, { immediate: !0 }),
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
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? t(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: b.step.clampedArrowStepTimeout,
                                    clampPosition: p,
                                    handleMouseWheel: C,
                                    applyScroll: z,
                                    applyStepTo: B,
                                    contentRef: E,
                                    wrapperRef: w,
                                    scrollPosition: R,
                                    animationScroll: _,
                                    recalculateContent: x,
                                    events: { on: y.on, off: y.off },
                                }),
                                [_.scrollPosition, z, B, y.off, y.on, x, C, R, b.step.clampedArrowStepTimeout],
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
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => a, onResize: () => s, onScaleUpdated: () => i });
                var r = n(2472),
                    o = n(1176);
                const s = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    a = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
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
                                        i = c[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, a),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(s, a),
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
                        displayStatusIs: () => R,
                        events: () => s.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => _,
                        getScale: () => p,
                        getSize: () => f,
                        getViewGlobalPosition: () => v,
                        isEventHandled: () => S,
                        isFocused: () => w,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => E,
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
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
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
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
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
                function _() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
                        {},
                    ),
                    N = {
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
