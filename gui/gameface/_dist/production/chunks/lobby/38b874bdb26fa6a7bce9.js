'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [154],
    {
        7910: (e, t, a) => {
            a.r(t), a.d(t, { default: () => qn });
            var n = {};
            a.r(n),
                a.d(n, {
                    Area: () => H,
                    Bar: () => O,
                    DefaultScroll: () => z,
                    Direction: () => h,
                    defaultSettings: () => y,
                    useHorizontalScrollApi: () => N,
                });
            var r = {};
            a.r(r), a.d(r, { Area: () => re, Bar: () => te, Default: () => ne, useVerticalScrollApi: () => $ });
            var s = a(6179),
                l = a.n(s),
                i = a(6483),
                o = a.n(i),
                c = a(1856),
                m = a(7515),
                u = a(3138);
            const d = [];
            function _(e) {
                const t = (0, s.useRef)(e);
                return (
                    (0, s.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, s.useCallback)((...e) => (0, t.current)(...e), d)
                );
            }
            function g(e, t, a = []) {
                const n = (0, s.useRef)(0),
                    r = (0, s.useCallback)(() => window.clearInterval(n.current), a || []);
                (0, s.useEffect)(() => r, [r]);
                const l = (null != a ? a : []).concat([t]);
                return [
                    (0, s.useCallback)((a) => {
                        (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                    }, l),
                    r,
                ];
            }
            var v = a(7727);
            function f(e, t) {
                var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (a) return (a = a.call(e)).next.bind(a);
                if (
                    Array.isArray(e) ||
                    (a = (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return p(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === a && e.constructor && (a = e.constructor.name);
                        if ('Map' === a || 'Set' === a) return Array.from(e);
                        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return p(e, t);
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                ) {
                    a && (e = a);
                    var n = 0;
                    return function () {
                        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n;
            }
            function b(e, t, a) {
                const n = (0, s.useMemo)(
                    () =>
                        (function (e, t, a, n) {
                            let r,
                                s = !1,
                                l = 0;
                            function i() {
                                r && clearTimeout(r);
                            }
                            function o(...o) {
                                const c = this,
                                    m = Date.now() - l;
                                function u() {
                                    (l = Date.now()), a.apply(c, o);
                                }
                                s ||
                                    (n && !r && u(),
                                    i(),
                                    void 0 === n && m > e
                                        ? u()
                                        : !0 !== t &&
                                          (r = setTimeout(
                                              n
                                                  ? function () {
                                                        r = void 0;
                                                    }
                                                  : u,
                                              void 0 === n ? e - m : e,
                                          )));
                            }
                            return (
                                'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                                (o.cancel = function () {
                                    i(), (s = !0);
                                }),
                                o
                            );
                        })(a, e),
                    t,
                );
                return (0, s.useEffect)(() => n.cancel, [n]), n;
            }
            var E = a(7030);
            let h;
            !(function (e) {
                (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
            })(h || (h = {}));
            const y = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                },
                S = ({
                    getContainerSize: e,
                    getBounds: t,
                    setScrollPosition: a,
                    getDirection: n,
                    getWrapperSize: r,
                    triggerMouseMoveOnUpdate: l = !1,
                }) => {
                    const i = (e, a) => {
                        const n = t(e),
                            r = n[0],
                            s = n[1];
                        return s <= r ? 0 : (0, m.u)(r, s, a);
                    };
                    return (o = {}) => {
                        const m = o.settings,
                            d = void 0 === m ? y : m,
                            g = (0, s.useRef)(null),
                            v = (0, s.useRef)(null),
                            p = (() => {
                                const e = (0, s.useMemo)(() => ({}), []),
                                    t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                    a = (e, a) => {
                                        t(e).set(a, a);
                                    },
                                    n = (e, a) => {
                                        t(e).delete(a);
                                    },
                                    r = (e, ...a) => {
                                        for (var n, r = f(t(e).values()); !(n = r()).done; ) (0, n.value)(...a);
                                    };
                                return (0, s.useMemo)(() => ({ on: a, off: n, trigger: r }), []);
                            })(),
                            h = b(
                                () => {
                                    u.O.view.forceTriggerMouseMove();
                                },
                                [],
                                150,
                            ),
                            S = (0, E.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (a(t, e), p.trigger('change', e), l && h());
                                },
                                onRest: (e) => p.trigger('rest', e),
                                onStart: (e) => p.trigger('start', e),
                                onPause: (e) => p.trigger('pause', e),
                            })),
                            N = S[0],
                            C = S[1],
                            A = (0, s.useCallback)(
                                (e, t, a) => {
                                    var n;
                                    const r = N.scrollPosition.get(),
                                        s = (null != (n = N.scrollPosition.goal) ? n : 0) - r;
                                    return i(e, t * a + s + r);
                                },
                                [N.scrollPosition],
                            ),
                            P = (0, s.useCallback)(
                                (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                    const n = g.current;
                                    n &&
                                        C.start({
                                            scrollPosition: i(n, e),
                                            immediate: t,
                                            reset: a,
                                            config: d.animationConfig,
                                            from: { scrollPosition: i(n, N.scrollPosition.get()) },
                                        });
                                },
                                [C, d.animationConfig, N.scrollPosition],
                            ),
                            R = (0, s.useCallback)(
                                (e) => {
                                    const t = g.current,
                                        a = v.current;
                                    if (!t || !a) return;
                                    const n = ((e, t) => {
                                            switch (t.type) {
                                                case 'proportional':
                                                    return r(e) / t.factor;
                                                case 'fixed':
                                                    return t.value;
                                            }
                                        })(a, d.step),
                                        s = A(t, e, n);
                                    P(s);
                                },
                                [P, A, d.step],
                            ),
                            I = (0, s.useCallback)(
                                (e) => {
                                    0 !== e.deltaY && R(n(e)),
                                        g.current && p.trigger('mouseWheel', e, N.scrollPosition, t(g.current));
                                },
                                [N.scrollPosition, R, p],
                            ),
                            w = ((e, t = []) => {
                                const a = (0, s.useRef)(),
                                    n = (0, s.useCallback)((...t) => {
                                        a.current && a.current(), (a.current = e(...t));
                                    }, t);
                                return (
                                    (0, s.useEffect)(
                                        () => () => {
                                            a.current && a.current();
                                        },
                                        [n],
                                    ),
                                    n
                                );
                            })(
                                () =>
                                    (0, c.v)(() => {
                                        const e = g.current;
                                        e &&
                                            (P(i(e, N.scrollPosition.goal), { immediate: !0 }),
                                            p.trigger('resizeHandled'));
                                    }),
                                [P, N.scrollPosition.goal],
                            ),
                            k = _(() => {
                                const e = g.current;
                                if (!e) return;
                                const t = i(e, N.scrollPosition.goal);
                                t !== N.scrollPosition.goal && P(t, { immediate: !0 }), p.trigger('recalculateContent');
                            });
                        (0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', w),
                                () => {
                                    window.removeEventListener('resize', w);
                                }
                            ),
                            [w],
                        );
                        return (0, s.useMemo)(
                            () => ({
                                getWrapperSize: () => (v.current ? r(v.current) : void 0),
                                getContainerSize: () => (g.current ? e(g.current) : void 0),
                                getBounds: () =>
                                    g.current
                                        ? t(g.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: d.step.clampedArrowStepTimeout,
                                clampPosition: i,
                                handleMouseWheel: I,
                                applyScroll: P,
                                applyStepTo: R,
                                contentRef: g,
                                wrapperRef: v,
                                scrollPosition: C,
                                animationScroll: N,
                                recalculateContent: k,
                                events: { on: p.on, off: p.off },
                            }),
                            [N.scrollPosition, P, R, p.off, p.on, k, I, C, d.step.clampedArrowStepTimeout],
                        );
                    };
                },
                N = S({
                    getBounds: (e) => {
                        var t, a;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? h.Next : h.Prev),
                    triggerMouseMoveOnUpdate: !0,
                }),
                C = 'HorizontalBar_base_49',
                A = 'HorizontalBar_base__nonActive_82',
                P = 'HorizontalBar_leftButton_5f',
                I = 'HorizontalBar_rightButton_03',
                w = 'HorizontalBar_track_0d',
                k = 'HorizontalBar_thumb_fd',
                L = 'HorizontalBar_rail_32',
                M = 'disable',
                x = { pending: !1, offset: 0 },
                T = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                B = () => {},
                D = (e, t) => Math.max(20, e.offsetWidth * t),
                O = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = T, onDrag: n = B }) => {
                    const r = (0, s.useRef)(null),
                        i = (0, s.useRef)(null),
                        d = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        p = (0, s.useRef)(null),
                        b = e.stepTimeout || 100,
                        E = (0, s.useState)(x),
                        y = E[0],
                        S = E[1],
                        N = (0, s.useCallback)(
                            (e) => {
                                S(e), p.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
                            },
                            [n],
                        ),
                        R = () => {
                            const t = f.current,
                                a = p.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && t && a && r)) return;
                            const s = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, n / r),
                                o = (0, m.u)(0, 1, s / (r - n)),
                                c = (t.offsetWidth - D(t, l)) * o;
                            (a.style.transform = `translateX(${0 | c}px)`),
                                ((e) => {
                                    if (i.current && d.current && f.current && p.current) {
                                        if (0 === e)
                                            return i.current.classList.add(M), void d.current.classList.remove(M);
                                        if (
                                            ((t = f.current),
                                            (a = p.current),
                                            e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                        )
                                            return i.current.classList.remove(M), void d.current.classList.add(M);
                                        var t, a;
                                        i.current.classList.remove(M), d.current.classList.remove(M);
                                    }
                                })(c);
                        },
                        O = _(() => {
                            (() => {
                                const t = p.current,
                                    a = f.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(s && t && n && a)) return;
                                const l = Math.min(1, n / s);
                                (t.style.width = `${D(a, l)}px`),
                                    (t.style.display = 'flex'),
                                    r.current && (1 === l ? r.current.classList.add(A) : r.current.classList.remove(A));
                            })(),
                                R();
                        });
                    (0, s.useEffect)(() => (0, c.v)(O)),
                        (0, s.useEffect)(
                            () =>
                                (0, c.v)(() => {
                                    const t = () => {
                                        R();
                                    };
                                    let a = B;
                                    const n = () => {
                                        a(), (a = (0, c.v)(O));
                                    };
                                    return (
                                        e.events.on('recalculateContent', O),
                                        e.events.on('rest', t),
                                        e.events.on('change', t),
                                        e.events.on('resizeHandled', n),
                                        () => {
                                            a(),
                                                e.events.off('recalculateContent', O),
                                                e.events.off('rest', t),
                                                e.events.off('change', t),
                                                e.events.off('resizeHandled', n);
                                        }
                                    );
                                }),
                            [e],
                        ),
                        (0, s.useEffect)(() => {
                            if (!y.pending) return;
                            const t = u.O.client.events.mouse.move(([t, a]) => {
                                    var r;
                                    const s = e.contentRef.current,
                                        l = e.wrapperRef.current;
                                    if (!s || !l) return;
                                    const i = f.current,
                                        o = p.current;
                                    if (!i || !o) return;
                                    if ('inside' === a && t.clientX < 0) return;
                                    const c = t.clientX - y.offset - i.getBoundingClientRect().x,
                                        m = (c / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                    e.scrollPosition.start({
                                        scrollPosition: e.clampPosition(s, m),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: o, thumbOffset: c, contentOffset: m });
                                }),
                                a = u.O.client.events.mouse.up(() => {
                                    t(), N(x);
                                });
                            return () => {
                                t(), a();
                            };
                        }, [e, y.offset, y.pending, n, N]);
                    const W = g((t) => e.applyStepTo(t), b, [e]),
                        z = W[0],
                        H = W[1];
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mouseup', H, !0),
                            () => document.removeEventListener('mouseup', H, !0)
                        ),
                        [H],
                    );
                    const $ = (e) => {
                        e.target.classList.contains(M) || (0, v.G)('highlight');
                    };
                    return l().createElement(
                        'div',
                        { className: o()(C, t.base), ref: r, onWheel: e.handleMouseWheel },
                        l().createElement('div', {
                            className: o()(P, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(M) || 0 !== e.button || ((0, v.G)('play'), z(h.Next));
                            },
                            onMouseUp: H,
                            ref: i,
                            onMouseEnter: $,
                        }),
                        l().createElement(
                            'div',
                            {
                                className: o()(w, t.track),
                                onMouseDown: (t) => {
                                    const n = p.current;
                                    if (n && 0 === t.button)
                                        if (((0, v.G)('play'), t.target === n))
                                            N({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                        else {
                                            ((t) => {
                                                const n = p.current,
                                                    r = e.contentRef.current;
                                                if (!n || !r) return;
                                                const s = a(e);
                                                e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                            })(t.screenX > n.getBoundingClientRect().x ? h.Prev : h.Next);
                                        }
                                },
                                ref: f,
                                onMouseEnter: $,
                            },
                            l().createElement('div', { ref: p, className: o()(k, t.thumb) }),
                            l().createElement('div', { className: o()(L, t.rail) }),
                        ),
                        l().createElement('div', {
                            className: o()(I, t.rightButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(M) || 0 !== e.button || ((0, v.G)('play'), z(h.Prev));
                            },
                            onMouseUp: H,
                            ref: d,
                            onMouseEnter: $,
                        }),
                    );
                }),
                W = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                },
                z = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: r,
                    classNames: i,
                    scrollClassName: c,
                    getStepByRailClick: m,
                    onDrag: u,
                }) => {
                    const d = (0, s.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: o()(W.base, e.base) });
                        }, [n]),
                        _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return l().createElement(
                        'div',
                        { className: o()(W.defaultScroll, a), onWheel: t.handleMouseWheel },
                        l().createElement(
                            'div',
                            { className: o()(W.defaultScrollArea, r) },
                            l().createElement(H, { className: c, api: _, classNames: i }, e),
                        ),
                        l().createElement(O, { getStepByRailClick: m, api: t, onDrag: u, classNames: d }),
                    );
                },
                H = ({ api: e, className: t, classNames: a, children: n }) => (
                    (0, s.useEffect)(() => (0, c.v)(e.recalculateContent)),
                    l().createElement(
                        'div',
                        { className: o()(W.base, t) },
                        l().createElement(
                            'div',
                            {
                                className: o()(W.wrapper, null == a ? void 0 : a.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            l().createElement(
                                'div',
                                { className: o()(W.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            (H.Bar = O), (H.Default = z);
            const $ = S({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? h.Next : h.Prev),
                }),
                V = 'VerticalBar_base_f3',
                G = 'VerticalBar_base__nonActive_42',
                U = 'VerticalBar_topButton_d7',
                j = 'VerticalBar_bottomButton_06',
                F = 'VerticalBar_track_df',
                Y = 'VerticalBar_thumb_32',
                q = 'VerticalBar_rail_43',
                J = 'disable',
                X = () => {},
                K = { pending: !1, offset: 0 },
                Z = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                Q = (e, t) => {
                    e.contentRef.current && t(e.contentRef.current);
                },
                ee = (e, t) => Math.max(20, e.offsetHeight * t),
                te = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Z, onDrag: n = X }) => {
                    const r = (0, s.useRef)(null),
                        i = (0, s.useRef)(null),
                        d = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        p = (0, s.useRef)(null),
                        b = e.stepTimeout || 100,
                        E = (0, s.useState)(K),
                        y = E[0],
                        S = E[1],
                        N = (0, s.useCallback)(
                            (e) => {
                                S(e), p.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
                            },
                            [n],
                        ),
                        C = _(() => {
                            const t = p.current,
                                a = f.current,
                                n = e.getWrapperSize(),
                                s = e.getContainerSize();
                            if (!(n && s && t && a)) return;
                            const l = Math.min(1, n / s);
                            return (
                                (t.style.height = `${ee(a, l)}px`),
                                (t.style.display = 'flex'),
                                r.current && (1 === l ? r.current.classList.add(G) : r.current.classList.remove(G)),
                                l
                            );
                        }),
                        A = _(() => {
                            const t = f.current,
                                a = p.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && t && a && r)) return;
                            const s = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, n / r),
                                o = (0, m.u)(0, 1, s / (r - n)),
                                c = (t.offsetHeight - ee(t, l)) * o;
                            (a.style.transform = `translateY(${0 | c}px)`),
                                ((e) => {
                                    if (i.current && d.current && f.current && p.current) {
                                        if (0 === Math.round(e))
                                            return i.current.classList.add(J), void d.current.classList.remove(J);
                                        if (
                                            ((t = f.current),
                                            (a = p.current),
                                            e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                        )
                                            return i.current.classList.remove(J), void d.current.classList.add(J);
                                        var t, a;
                                        i.current.classList.remove(J), d.current.classList.remove(J);
                                    }
                                })(c);
                        }),
                        P = _(() => {
                            Q(e, () => {
                                C(), A();
                            });
                        });
                    (0, s.useEffect)(() => (0, c.v)(P)),
                        (0, s.useEffect)(() => {
                            const t = () => {
                                Q(e, () => {
                                    A();
                                });
                            };
                            let a = X;
                            const n = () => {
                                a(), (a = (0, c.v)(P));
                            };
                            return (
                                e.events.on('recalculateContent', P),
                                e.events.on('rest', t),
                                e.events.on('change', t),
                                e.events.on('resizeHandled', n),
                                () => {
                                    a(),
                                        e.events.off('recalculateContent', P),
                                        e.events.off('rest', t),
                                        e.events.off('change', t),
                                        e.events.off('resizeHandled', n);
                                }
                            );
                        }, [e]),
                        (0, s.useEffect)(() => {
                            if (!y.pending) return;
                            const t = u.O.client.events.mouse.up(() => {
                                    N(K);
                                }),
                                a = u.O.client.events.mouse.move(([t]) => {
                                    Q(e, (a) => {
                                        const r = f.current,
                                            s = p.current,
                                            l = e.getContainerSize();
                                        if (!r || !s || !l) return;
                                        const i = t.screenY - y.offset - r.getBoundingClientRect().y,
                                            o = (i / r.offsetHeight) * l;
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: a.scrollTop },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    });
                                });
                            return () => {
                                t(), a();
                            };
                        }, [e, y.offset, y.pending, n, N]);
                    const R = g((t) => e.applyStepTo(t), b, [e]),
                        I = R[0],
                        w = R[1];
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mouseup', w, !0),
                            () => document.removeEventListener('mouseup', w, !0)
                        ),
                        [w],
                    );
                    const k = (e) => {
                        e.target.classList.contains(J) || (0, v.G)('highlight');
                    };
                    return l().createElement(
                        'div',
                        { className: o()(V, t.base), ref: r, onWheel: e.handleMouseWheel },
                        l().createElement('div', {
                            className: o()(U, t.topButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(J) || 0 !== e.button || ((0, v.G)('play'), I(h.Next));
                            },
                            ref: i,
                            onMouseEnter: k,
                        }),
                        l().createElement(
                            'div',
                            {
                                className: o()(F, t.track),
                                onMouseDown: (t) => {
                                    const n = p.current;
                                    if (n && 0 === t.button)
                                        if (((0, v.G)('play'), t.target === n))
                                            N({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                        else {
                                            ((t) => {
                                                p.current &&
                                                    Q(e, (n) => {
                                                        if (!n) return;
                                                        const r = a(e),
                                                            s = e.clampPosition(n, n.scrollTop + r * t);
                                                        e.applyScroll(s);
                                                    });
                                            })(t.screenY > n.getBoundingClientRect().y ? h.Prev : h.Next);
                                        }
                                },
                                ref: f,
                                onMouseEnter: k,
                            },
                            l().createElement('div', { ref: p, className: o()(Y, t.thumb) }),
                            l().createElement('div', { className: o()(q, t.rail) }),
                        ),
                        l().createElement('div', {
                            className: o()(j, t.bottomButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(J) || 0 !== e.button || ((0, v.G)('play'), I(h.Prev));
                            },
                            onMouseUp: w,
                            ref: d,
                            onMouseEnter: k,
                        }),
                    );
                }),
                ae = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                },
                ne = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: r,
                    scrollClassName: i,
                    scrollClassNames: c,
                    getStepByRailClick: m,
                    onDrag: u,
                }) => {
                    const d = (0, s.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: o()(ae.base, e.base) });
                        }, [n]),
                        _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return l().createElement(
                        'div',
                        { className: o()(ae.defaultScroll, a), onWheel: t.handleMouseWheel },
                        l().createElement(
                            'div',
                            { className: o()(ae.area, r) },
                            l().createElement(re, { className: i, classNames: c, api: _ }, e),
                        ),
                        l().createElement(te, { getStepByRailClick: m, api: t, onDrag: u, classNames: d }),
                    );
                },
                re = ({ className: e, classNames: t, children: a, api: n }) => (
                    (0, s.useEffect)(() => (0, c.v)(n.recalculateContent)),
                    l().createElement(
                        'div',
                        { className: o()(ae.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        l().createElement(
                            'div',
                            { className: o()(ae.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            a,
                        ),
                    )
                );
            re.Default = ne;
            const se = { Vertical: r, Horizontal: n };
            var le = a(3649),
                ie = a(3403),
                oe = a(1645);
            let ce;
            !(function (e) {
                (e.AVAILABLE = 'available'),
                    (e.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (e.DISABLED = 'disabled');
            })(ce || (ce = {}));
            var me = a(3215),
                ue = a(4598),
                de = a(9480),
                _e = a(3946);
            let ge;
            !(function (e) {
                (e.Init = 'init'), (e.Static = 'static'), (e.LevelUp = 'levelUp'), (e.Downgrade = 'downgrade');
            })(ge || (ge = {}));
            const ve = (0, me.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                otherPlayerInfo: e.object('otherPlayerInfo'),
                                dogTagModel: e.object('otherPlayerInfo.dogTagModel'),
                                statistic: e.array('statistic'),
                                significantAchievements: e.array('significantAchievements'),
                            },
                            a = (0, _e.Om)(
                                () => de.UI(t.statistic.get(), (e) => Object.assign({}, e, { type: e.type })),
                                { equals: ue.jv },
                            ),
                            n = (0, _e.Om)(
                                () =>
                                    Array(t.root.get().achievementRibbonLength)
                                        .fill({})
                                        .map((e, a) => de.U2(t.significantAchievements.get(), a)),
                                { equals: ue.jv },
                            ),
                            r = (0, _e.Om)(() => {
                                const e = t.root.get(),
                                    a = e.currentRatingRank,
                                    n = e.prevCurrentRatingRank,
                                    r = e.currentRatingSubRank,
                                    s = e.prevCurrentRatingSubRank,
                                    l = e.isWTREnabled,
                                    i = e.isOtherPlayer,
                                    o = e.battlesLeftCount;
                                if (!l || i || o > 0) return ge.Static;
                                if (a === n) {
                                    if (r > s) return ge.LevelUp;
                                    if (r < s) return ge.Downgrade;
                                }
                                return a > n ? ge.LevelUp : a < n ? ge.Downgrade : ge.Static;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                getStatisticList: a,
                                getSignificantAchievementsList: n,
                                getRatingWidgetState: r,
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        onAchievementsSettings: e.createCallbackNoArgs('onAchievementsSettings'),
                        onOpenProfile: e.createCallbackNoArgs('otherPlayerInfo.onOpenProfile'),
                    }),
                ),
                fe = ve[0],
                pe = ve[1];
            var be = a(5415),
                Ee = a(3415);
            const he = 'AchievementTooltip_base_4d',
                ye = ({ children: e, name: t, block: a, isEnabled: n = !0 }) =>
                    l().createElement(
                        Ee.l,
                        { tooltipArgs: { args: { name: t, block: a }, isEnabled: n }, className: he },
                        e,
                    );
            let Se, Ne, Ce;
            !(function (e) {
                (e.Repeatable = 'repeatable'),
                    (e.Class = 'class'),
                    (e.Custom = 'custom'),
                    (e.Series = 'series'),
                    (e.Single = 'single'),
                    (e.Rare = 'rare');
            })(Se || (Se = {})),
                (function (e) {
                    (e.None = 'none'), (e.Simple = 'simple'), (e.Series = 'series'), (e.Stages = 'stages');
                })(Ne || (Ne = {})),
                (function (e) {
                    (e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge');
                })(Ce || (Ce = {}));
            const Ae = {
                base: 'Achievement_base_1a',
                image: 'Achievement_image_09',
                base__small: 'Achievement_base__small_c8',
                base__medium: 'Achievement_base__medium_e1',
                base__large: 'Achievement_base__large_1d',
                base__extraLarge: 'Achievement_base__extraLarge_1b',
                counter: 'Achievement_counter_97',
            };
            var Pe = a(2372),
                Re = a(9690);
            const Ie = {
                base: 'Counter_base_03',
                base__medium: 'Counter_base__medium_55',
                base__large: 'Counter_base__large_0c',
                background: 'Counter_background_36',
                base__series: 'Counter_base__series_e9',
                base__stages: 'Counter_base__stages_c7',
                arrow: 'Counter_arrow_78',
                arrow__left: 'Counter_arrow__left_e6',
                count: 'Counter_count_f2',
            };
            let we;
            !(function (e) {
                (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
            })(we || (we = {}));
            const ke = ({ value: e, type: t = Ne.Simple, size: a = we.Medium, className: n }) =>
                    l().createElement(
                        'div',
                        { className: o()(Ie.base, Ie[`base__${t}`], Ie[`base__${a}`], n) },
                        l().createElement(
                            'div',
                            { className: Ie.background },
                            l().createElement(
                                'div',
                                { className: Ie.count },
                                t === Ne.Stages
                                    ? (0, Re.HG)(e)
                                    : l().createElement(Pe.A, { value: e, format: 'integral' }),
                            ),
                            t === Ne.Series &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: o()(Ie.arrow, Ie.arrow__left) }),
                                    l().createElement('div', { className: o()(Ie.arrow, Ie.arrow__right) }),
                                ),
                        ),
                    ),
                Le = R.images.gui.maps.icons.achievement,
                Me =
                    (R.strings.achievements,
                    ({ name: e, resourceName: t, type: a, rareIconId: n, rareBigIconId: r, value: s, size: l }) => {
                        if (n && r) return l === Ce.ExtraSmall ? n : r;
                        const i = viewEnv.getScale(),
                            o = ((e, t, a, n) => (a === Se.Class ? `${e}${n}` : e.match(/^\d/) ? `c_${e}` : t))(
                                e,
                                t,
                                a,
                                s,
                            );
                        return l === Ce.ExtraSmall && i < 2 ? Le.$dyn(o) : Le.big.$dyn(o);
                    }),
                xe = {
                    [Ce.ExtraSmall]: we.Small,
                    [Ce.Small]: we.Small,
                    [Ce.Medium]: we.Medium,
                    [Ce.Large]: we.Medium,
                    [Ce.ExtraLarge]: we.Large,
                },
                Te = ({
                    name: e,
                    resourceName: t,
                    block: a,
                    type: n,
                    counterType: r,
                    size: s,
                    value: i,
                    rareIconId: c,
                    rareBigIconId: m,
                    isTooltipEnabled: u = !0,
                    className: d,
                }) => {
                    const _ = Me({
                        name: e,
                        resourceName: t,
                        type: n,
                        size: s,
                        value: i,
                        rareIconId: c,
                        rareBigIconId: m,
                    });
                    return l().createElement(
                        ye,
                        { name: e, block: a, isEnabled: u },
                        l().createElement(
                            'div',
                            { className: o()(Ae.base, Ae[`base__${s}`], d) },
                            l().createElement(
                                'div',
                                { className: Ae.image, style: { backgroundImage: `url(${_})` } },
                                r !== Ne.None &&
                                    l().createElement(ke, { type: r, size: xe[s], value: i, className: Ae.counter }),
                            ),
                        ),
                    );
                };
            var Be = a(2056);
            let De;
            !(function (e) {
                (e.DISABLED_LAYOUT = 'disabledLayout'),
                    (e.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (e.DISABLED = 'disabled'),
                    (e.OTHER_PLAYER = 'otherPlayer');
            })(De || (De = {}));
            const Oe = {
                    base: 'AchievementPlaceholder_base_06',
                    image: 'AchievementPlaceholder_image_92',
                    base__small: 'AchievementPlaceholder_base__small_b7',
                    base__medium: 'AchievementPlaceholder_base__medium_ef',
                    base__large: 'AchievementPlaceholder_base__large_c5',
                    base__extraLarge: 'AchievementPlaceholder_base__extraLarge_d5',
                },
                We = ({ size: e, isOtherPlayer: t = !1 }) =>
                    l().createElement(
                        Be.u,
                        {
                            contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                            args: { tooltipType: t ? De.OTHER_PLAYER : De.DISABLED_LAYOUT },
                        },
                        l().createElement(
                            'div',
                            { className: o()(Oe.base, Oe[`base__${e}`]) },
                            l().createElement('div', { className: Oe.image }),
                        ),
                    ),
                ze = {
                    [be.cJ.ExtraSmall]: Ce.Small,
                    [be.cJ.Small]: Ce.Small,
                    [be.cJ.Medium]: Ce.Large,
                    [be.cJ.Large]: Ce.Large,
                    [be.cJ.ExtraLarge]: Ce.ExtraLarge,
                },
                He = 'Achievements_base_96',
                $e = 'Achievements_base__visibleWithAnimation_0a',
                Ve = 'Achievements_base__hide_33',
                Ge = 'Achievements_header_a9',
                Ue = 'Achievements_ribbon_06',
                je = 'Achievements_base__fullAnimation_10',
                Fe = 'Achievements_list_55',
                Ye = 'Achievements_item_a4',
                qe = 'Achievements_item__fixedIndent_0c',
                Je = 'Achievements_achievement_64',
                Xe = 'Achievements_achievementPlaceholder_42',
                Ke = {
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
            let Ze, Qe;
            !(function (e) {
                (e.main = 'main'),
                    (e.primary = 'primary'),
                    (e.primaryGreen = 'primaryGreen'),
                    (e.primaryRed = 'primaryRed'),
                    (e.secondary = 'secondary'),
                    (e.ghost = 'ghost');
            })(Ze || (Ze = {})),
                (function (e) {
                    (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                })(Qe || (Qe = {}));
            const et = ({
                children: e,
                size: t,
                isFocused: a,
                type: n,
                disabled: r,
                mixClass: i,
                soundHover: c,
                soundClick: m,
                onMouseEnter: u,
                onMouseMove: d,
                onMouseDown: _,
                onMouseUp: g,
                onMouseLeave: f,
                onClick: p,
            }) => {
                const b = (0, s.useRef)(null),
                    E = (0, s.useState)(a),
                    h = E[0],
                    y = E[1],
                    S = (0, s.useState)(!1),
                    N = S[0],
                    C = S[1],
                    A = (0, s.useState)(!1),
                    P = A[0],
                    I = A[1],
                    w = (0, s.useCallback)(() => {
                        r || (b.current && (b.current.focus(), y(!0)));
                    }, [r]),
                    k = (0, s.useCallback)(
                        (e) => {
                            h && null !== b.current && !b.current.contains(e.target) && y(!1);
                        },
                        [h],
                    ),
                    L = (0, s.useCallback)(
                        (e) => {
                            r || (p && p(e));
                        },
                        [r, p],
                    ),
                    M = (0, s.useCallback)(
                        (e) => {
                            r || (null !== c && (0, v.G)(c), u && u(e), I(!0));
                        },
                        [r, c, u],
                    ),
                    x = (0, s.useCallback)(
                        (e) => {
                            d && d(e);
                        },
                        [d],
                    ),
                    T = (0, s.useCallback)(
                        (e) => {
                            r || (g && g(e), C(!1));
                        },
                        [r, g],
                    ),
                    B = (0, s.useCallback)(
                        (e) => {
                            r || (null !== m && (0, v.G)(m), _ && _(e), a && w(), C(!0));
                        },
                        [r, m, _, w, a],
                    ),
                    D = (0, s.useCallback)(
                        (e) => {
                            r || (f && f(e), C(!1));
                        },
                        [r, f],
                    ),
                    O = o()(
                        Ke.base,
                        Ke[`base__${n}`],
                        {
                            [Ke.base__disabled]: r,
                            [Ke[`base__${t}`]]: t,
                            [Ke.base__focus]: h,
                            [Ke.base__highlightActive]: N,
                            [Ke.base__firstHover]: P,
                        },
                        i,
                    ),
                    W = o()(Ke.state, Ke.state__default);
                return (
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mousedown', k),
                            () => {
                                document.removeEventListener('mousedown', k);
                            }
                        ),
                        [k],
                    ),
                    (0, s.useEffect)(() => {
                        y(a);
                    }, [a]),
                    l().createElement(
                        'div',
                        {
                            ref: b,
                            className: O,
                            onMouseEnter: M,
                            onMouseMove: x,
                            onMouseUp: T,
                            onMouseDown: B,
                            onMouseLeave: D,
                            onClick: L,
                        },
                        n !== Ze.ghost &&
                            l().createElement(
                                l().Fragment,
                                null,
                                l().createElement('div', { className: Ke.back }),
                                l().createElement('span', { className: Ke.texture }),
                            ),
                        l().createElement(
                            'span',
                            { className: W },
                            l().createElement('span', { className: Ke.stateDisabled }),
                            l().createElement('span', { className: Ke.stateHighlightHover }),
                            l().createElement('span', { className: Ke.stateHighlightActive }),
                        ),
                        l().createElement(
                            'span',
                            { className: Ke.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            et.defaultProps = { type: Ze.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const tt = (0, s.memo)(et);
            var at = a(9766);
            const nt = 'AchievementsStatistic_base_36',
                rt = 'AchievementsStatistic_counter_fb',
                st = 'AchievementsStatistic_base__otherPlayer_c3',
                lt = 'AchievementsStatistic_infoItem_10',
                it = 'AchievementsStatistic_accent_94',
                ot = 'AchievementsStatistic_medalIcon_24',
                ct = 'AchievementsStatistic_medalIcon__received_d1',
                mt = R.strings.achievements_page.summary.achievements,
                ut = ({ isOtherPlayer: e, unique: t, total: a }) =>
                    l().createElement(
                        'div',
                        { className: o()(nt, e && st) },
                        l().createElement('div', { className: o()(ot, a && ct) }),
                        l().createElement(
                            'div',
                            { className: rt },
                            l().createElement(at.z, {
                                text: mt.unique(),
                                binding: {
                                    value: l().createElement(
                                        'div',
                                        { className: it },
                                        l().createElement(Pe.A, { value: t }),
                                    ),
                                },
                            }),
                            l().createElement(at.z, {
                                classMix: lt,
                                text: mt.total(),
                                binding: {
                                    value: l().createElement(
                                        'div',
                                        { className: it },
                                        l().createElement(Pe.A, { value: a }),
                                    ),
                                },
                            }),
                        ),
                    );
            var dt = a(6373);
            const _t = 'Mastery_base_a0',
                gt = 'Mastery_masteryIcon_17',
                vt = 'Mastery_masteryIcon__recieved_50',
                ft = ({ totalMastery: e, currentMastery: t }) =>
                    l().createElement(
                        dt.i,
                        {
                            header: R.strings.achievements_page.tooltips.mastery.header(),
                            body: R.strings.achievements_page.tooltips.mastery.body(),
                        },
                        l().createElement(
                            'div',
                            { className: _t },
                            l().createElement('div', { className: o()(gt, t && vt) }),
                            l().createElement(at.z, {
                                text: R.strings.achievements_page.summary.achievements.mastery.counter(),
                                binding: {
                                    current: l().createElement(Pe.A, { value: t }),
                                    total: l().createElement(Pe.A, { value: e }),
                                },
                            }),
                        ),
                    ),
                pt = {
                    base: 'Header_base_95',
                    base__otherPlayer: 'Header_base__otherPlayer_70',
                    awardsContainer: 'Header_awardsContainer_bd',
                    title: 'Header_title_71',
                    buttonContainer: 'Header_buttonContainer_38',
                    editButton: 'Header_editButton_0c',
                    buttonIcon: 'Header_buttonIcon_6d',
                    base__available: 'Header_base__available_43',
                    alert: 'Header_alert_fc',
                    alertIcon: 'Header_alertIcon_9d',
                },
                bt = (e) => {
                    switch (e) {
                        case ce.DISABLED:
                            return { tooltipType: De.DISABLED };
                        case ce.NOT_ENOUGH_ACHIEVEMENTS:
                            return { tooltipType: De.NOT_ENOUGH_ACHIEVEMENTS };
                        default:
                            return { tooltipType: De.DISABLED };
                    }
                },
                Et = (0, ie.Pi)(() => {
                    const e = pe(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.editState,
                        s = n.numberOfUniqueAwards,
                        i = n.totalAwards,
                        c = n.isOtherPlayer,
                        m = n.currentMastery,
                        u = n.totalMastery;
                    return l().createElement(
                        'div',
                        { className: o()(pt.base, pt[`base__${r}`], c && pt.base__otherPlayer) },
                        l().createElement(ft, { totalMastery: u, currentMastery: m }),
                        l().createElement(
                            'div',
                            { className: pt.awardsContainer },
                            l().createElement(
                                'div',
                                { className: pt.title },
                                R.strings.achievements_page.summary.achievements.title(),
                            ),
                            !c &&
                                l().createElement(
                                    Be.u,
                                    {
                                        contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                                        args: bt(r),
                                        isEnabled: r !== ce.AVAILABLE,
                                    },
                                    l().createElement(
                                        'div',
                                        {
                                            className: pt.buttonContainer,
                                            id: r === ce.AVAILABLE ? 'summary-customization-button' : void 0,
                                        },
                                        l().createElement(
                                            tt,
                                            {
                                                type: Ze.ghost,
                                                size: Qe.medium,
                                                disabled: r !== ce.AVAILABLE,
                                                onClick: a.onAchievementsSettings,
                                                mixClass: pt.editButton,
                                            },
                                            l().createElement('div', { className: pt.buttonIcon }),
                                        ),
                                        r === ce.DISABLED &&
                                            l().createElement(
                                                'div',
                                                { className: pt.alert },
                                                l().createElement('div', { className: pt.alertIcon }),
                                            ),
                                    ),
                                ),
                        ),
                        l().createElement(ut, { total: i, unique: s, isOtherPlayer: c }),
                    );
                });
            function ht() {
                return (
                    (ht =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    ht.apply(this, arguments)
                );
            }
            const yt = (e) => {
                    e.target === e.currentTarget && (0, v.G)(R.sounds.achievements_medal());
                },
                St = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.computes,
                        a = e.root.get(),
                        n = a.editState,
                        r = a.isSuccessfullyEdited,
                        s = a.isOtherPlayer,
                        i = a.isEditOpened,
                        c = (0, be.GS)().mediaSize;
                    let m = 0;
                    const u = s ? Ce.Small : ze[c],
                        d = n === ce.AVAILABLE && r;
                    return l().createElement(
                        'div',
                        { className: o()(He, d && je, !i && d && $e, i && Ve) },
                        l().createElement('div', { className: Ge }, l().createElement(Et, null)),
                        l().createElement(
                            'div',
                            { className: Ue },
                            l().createElement(
                                'div',
                                { className: Fe },
                                de.UI(t.getSignificantAchievementsList(), (e, t) =>
                                    l().createElement(
                                        'div',
                                        {
                                            className: o()(Ye, s && qe),
                                            key: t,
                                            style: d && !s ? { animationDelay: 150 * (t + 1) + 'ms' } : void 0,
                                            onAnimationStart: yt,
                                        },
                                        (() => {
                                            const t = !d && !s;
                                            return e
                                                ? e.isNew && t
                                                    ? (m++,
                                                      l().createElement(
                                                          l().Fragment,
                                                          null,
                                                          l().createElement(
                                                              'div',
                                                              {
                                                                  className: Je,
                                                                  style: { animationDelay: 300 * m + 'ms' },
                                                                  onAnimationStart: yt,
                                                              },
                                                              l().createElement(Te, ht({}, e, { size: u })),
                                                          ),
                                                          l().createElement(
                                                              'div',
                                                              {
                                                                  className: Xe,
                                                                  style: { animationDelay: 300 * m + 'ms' },
                                                              },
                                                              l().createElement(We, { size: u, isOtherPlayer: s }),
                                                          ),
                                                      ))
                                                    : l().createElement(Te, ht({}, e, { size: u }))
                                                : l().createElement(We, { size: u, isOtherPlayer: s });
                                        })(),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                Nt = 'Header_base_90',
                Ct = 'Header_iconInfo_20',
                At = R.strings.achievements_page.summary,
                Pt = ({ isWTREnabled: e }) =>
                    e
                        ? l().createElement(
                              Be.u,
                              { contentId: R.views.lobby.achievements.tooltips.WTRInfoTooltip('resId') },
                              l().createElement(
                                  'div',
                                  { className: Nt },
                                  At.statistic.title(),
                                  l().createElement('div', { className: Ct }),
                              ),
                          )
                        : l().createElement('div', { className: Nt }, At.withoutWTR.statistic.title());
            var Rt = a(5959),
                It = a(8432);
            const wt = 'DogTag_base_2b',
                kt = 'DogTag_engraving_eb',
                Lt = 'DogTag_background_7f',
                Mt = R.strings.settings.LANGUAGE_CODE(),
                xt = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
            let Tt;
            !(function (e) {
                (e.Small = 'small'), (e.Big = 'big');
            })(Tt || (Tt = {}));
            const Bt = ({ background: e, engraving: t, size: a = Tt.Big, grade: n = 0, className: r }) => {
                    const s = xt.includes(Mt) ? `_${Mt}` : '';
                    return l().createElement(
                        'div',
                        { className: o()(wt, r) },
                        l().createElement('div', {
                            className: Lt,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.backgrounds.background_${e}_0)`,
                            },
                        }),
                        l().createElement('div', {
                            className: kt,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.engravings.engraving_${t}_${n}${s})`,
                            },
                        }),
                    );
                },
                Dt = {
                    base: 'AnimatedDogTag_base_9e',
                    base__small: 'AnimatedDogTag_base__small_ce',
                    base__medium: 'AnimatedDogTag_base__medium_13',
                    base__large: 'AnimatedDogTag_base__large_04',
                    shadow: 'AnimatedDogTag_shadow_24',
                    backplateBox: 'AnimatedDogTag_backplateBox_a8',
                    backplate: 'AnimatedDogTag_backplate_2d',
                    base__extraSmall: 'AnimatedDogTag_base__extraSmall_64',
                    dogTag: 'AnimatedDogTag_dogTag_34',
                    videoBox: 'AnimatedDogTag_videoBox_10',
                    video: 'AnimatedDogTag_video_e4',
                };
            var Ot = a(7522);
            const Wt = {
                base: 'Counter_base_29',
                base__extraSmall: 'Counter_base__extraSmall_f8',
                text: 'Counter_text_73',
                base__medium: 'Counter_base__medium_78',
                base__large: 'Counter_base__large_88',
                count: 'Counter_count_ee',
                base__small: 'Counter_base__small_52',
            };
            let zt;
            !(function (e) {
                (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
            })(zt || (zt = {}));
            const Ht = ({ engraving: e, count: t, size: a }) => {
                const n = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                return l().createElement(
                    'div',
                    { className: o()(Wt.base, Wt[`base__${a}`]) },
                    l().createElement('div', { className: Wt.text }, n),
                    l().createElement('div', { className: Wt.count }, t),
                );
            };
            let $t, Vt;
            !(function (e) {
                (e.Static = 'static'),
                    (e.Intro = 'intro'),
                    (e.AutoShowing = 'autoShowing'),
                    (e.Showing = 'showing'),
                    (e.Loop = 'loop'),
                    (e.Hiding = 'hiding');
            })($t || ($t = {})),
                (function (e) {
                    (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(Vt || (Vt = {}));
            const Gt = { duration: 500, easing: Ot.Z.easeOutBack },
                Ut = {
                    [Vt.ExtraSmall]: zt.ExtraSmall,
                    [Vt.Small]: zt.Small,
                    [Vt.Medium]: zt.Medium,
                    [Vt.Large]: zt.Large,
                },
                jt = { [Vt.ExtraSmall]: 'small', [Vt.Small]: 'big', [Vt.Medium]: 'big', [Vt.Large]: 's500x300' },
                Ft = {
                    vehicle_sparks_1: 'ach_dog_tag_animation_01',
                    vehicle_sparks_2: 'ach_dog_tag_animation_02',
                    vehicle_sparks_3: 'ach_dog_tag_animation_03',
                },
                Yt = ({
                    background: e,
                    engraving: t,
                    progress: a = 0,
                    animationState: n = $t.Static,
                    animationName: r = '',
                    onAnimationEnd: i,
                    grade: m = 0,
                    showBackplate: u = !0,
                    size: d = Vt.Medium,
                    className: _,
                    isSoundOff: g,
                }) => {
                    const f = (0, s.useRef)(null),
                        p = (0, s.useState)([]),
                        b = p[0],
                        h = p[1],
                        y = R.videos.dogtags.$dyn(r);
                    (0, s.useEffect)(() => {
                        const e = f.current;
                        if (e)
                            return (0, c.v)(() => {
                                h(e.getCachedKeyframes());
                            });
                    }, [f]);
                    const S = (0, E.useSpring)(() => ({ from: { opacity: 0 }, config: Gt }), [n]),
                        N = S[0],
                        C = S[1],
                        A = (0, E.useSpring)(() => ({
                            from: { opacity: 0, transform: 'translateY(-50%)' },
                            config: Gt,
                            onRest: () => {
                                n === $t.Hiding && (null == i || i());
                            },
                        })),
                        P = A[0],
                        I = A[1],
                        w = (0, s.useCallback)(() => {
                            var e;
                            null == (e = f.current) || e.play(),
                                I.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                !g && (0, v.G)(R.sounds.$dyn(Ft[r]));
                        }, [r, I, g]);
                    (0, s.useEffect)(
                        () =>
                            (0, c.v)(() => {
                                switch (n) {
                                    case $t.Intro:
                                        return void C.start({ to: { opacity: 1 }, immediate: !1 });
                                    case $t.AutoShowing:
                                        return C.start({ to: { opacity: 1 }, immediate: !1 }), void w();
                                    case $t.Showing:
                                        return void w();
                                    case $t.Loop:
                                        return (
                                            k(),
                                            C.start({ to: { opacity: 1 }, immediate: !0 }),
                                            void I.start({
                                                to: { opacity: 1, transform: 'translateY(0%)' },
                                                immediate: !0,
                                            })
                                        );
                                    case $t.Hiding:
                                        return (
                                            C.start({ to: { opacity: 0 } }),
                                            void I.start({
                                                to: { opacity: 0, transform: 'translateY(-50%)' },
                                                immediate: !1,
                                            })
                                        );
                                    case $t.Static:
                                        C.start({ to: { opacity: 1 }, immediate: !0 }),
                                            I.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !0 });
                                }
                            }),
                        [n, I, C, w],
                    );
                    const k = () => {
                        f.current && (f.current.goToAndPlay(5), (0, v.G)(R.sounds.ach_dog_tag_idle()));
                    };
                    return l().createElement(
                        E.animated.div,
                        { className: o()(Dt.base, Dt[`base__${d}`], _), style: N },
                        u &&
                            l().createElement(
                                E.animated.div,
                                { className: Dt.backplateBox, style: P },
                                l().createElement(
                                    'div',
                                    {
                                        className: Dt.backplate,
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.dogtags.${jt[d]}.bottom_plates.bottom_plate_${e})`,
                                        },
                                    },
                                    l().createElement(Ht, { engraving: t, count: a, size: Ut[d] }),
                                ),
                            ),
                        l().createElement('div', { className: Dt.shadow }),
                        n !== $t.Static &&
                            Rt.graphicsQuality.isHigh() &&
                            Boolean(y) &&
                            l().createElement(
                                'div',
                                { className: Dt.videoBox },
                                l().createElement(It.n, {
                                    ref: f,
                                    className: Dt.video,
                                    onEnded: k,
                                    isPrebufferKeyframes: Boolean(b.length),
                                    src: y,
                                }),
                            ),
                        l().createElement(Bt, {
                            background: e,
                            engraving: t,
                            grade: m,
                            size: Tt.Big,
                            className: Dt.dogTag,
                        }),
                    );
                };
            var qt = a(6349);
            const Jt = 'Clan_base_98',
                Xt = 'Clan_title_88',
                Kt = 'Clan_icon_46',
                Zt = 'Clan_row_e6',
                Qt = 'Clan_caption_1a',
                ea = 'Clan_buttonBox_bc',
                ta = 'Clan_button_1d',
                aa = R.strings.achievements_page.playerInfo.clan,
                na = (0, ie.Pi)(() => {
                    const e = pe(),
                        t = e.model,
                        a = e.controls,
                        n = t.otherPlayerInfo.get(),
                        r = n.clanEmblem,
                        s = n.clanName,
                        i = n.clanPost,
                        o = n.clanJoiningTime;
                    return l().createElement(
                        'div',
                        { className: Jt },
                        l().createElement(
                            'div',
                            { className: Xt },
                            r && l().createElement('div', { className: Kt, style: { backgroundImage: `url(${r})` } }),
                            l().createElement(qt.l, { content: s }),
                        ),
                        l().createElement(
                            'div',
                            null,
                            l().createElement(
                                'div',
                                { className: Zt },
                                l().createElement('div', { className: Qt }, aa.post()),
                                l().createElement('div', null, i),
                            ),
                            l().createElement(
                                'div',
                                { className: Zt },
                                l().createElement('div', { className: Qt }, aa.date()),
                                l().createElement('div', null, o),
                            ),
                        ),
                        l().createElement(
                            'div',
                            { className: ea },
                            l().createElement(tt, { onClick: a.onOpenProfile, mixClass: ta }, aa.button()),
                        ),
                    );
                }),
                ra = 33,
                sa = 0,
                la = !0,
                ia = 'play';
            const oa = [
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
            function ca() {
                return (
                    (ca =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    ca.apply(this, arguments)
                );
            }
            const ma = (0, s.memo)(function (e) {
                    let t = e.width,
                        a = e.height,
                        n = e.getImageSource,
                        r = e.frameCount,
                        i = e.onAnimate,
                        o = e.frameTime,
                        c = void 0 === o ? ra : o,
                        m = e.initialFrameIndex,
                        u = void 0 === m ? sa : m,
                        d = e.lastFrameIndex,
                        _ = void 0 === d ? r - 1 : d,
                        g = e.loop,
                        v = void 0 === g ? la : g,
                        f = e.state,
                        p = void 0 === f ? ia : f,
                        b = e.onAnimationDone,
                        E = e.onAnimationComplete,
                        h = e.poster,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, oa);
                    const S = (0, s.useRef)(null);
                    return (
                        (0, s.useEffect)(() => {
                            const e = S.current;
                            if (!e) return;
                            const t = e.getContext('2d'),
                                a = (a) => {
                                    t.clearRect(0, 0, e.width, e.height), t.drawImage(a.img, -a.x, -a.y);
                                };
                            switch (p) {
                                case 'play':
                                    return (function () {
                                        const e = _a(u, _, n),
                                            t = ua(u, _),
                                            r = window.setInterval(() => {
                                                const n = t(),
                                                    s = e.get(n);
                                                s
                                                    ? (null == i || i(n, s),
                                                      a(s),
                                                      n === _ &&
                                                          (null == E || E(),
                                                          v || (null == b || b(), window.clearInterval(r))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, c);
                                        return () => window.clearInterval(r);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const e = 0 === u && h ? { path: h, x: 0, y: 0 } : n(u),
                                            t = new Image();
                                        t.src = e.path;
                                        const r = () => a(da(e, t));
                                        return t.addEventListener('load', r), () => t.removeEventListener('load', r);
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [c, n, u, _, v, i, E, b, h, p]),
                        l().createElement('canvas', ca({}, y, { width: t, height: a, ref: S }))
                    );
                }),
                ua = (e, t) => {
                    let a = e;
                    return () => {
                        const n = a;
                        return (a += 1), a > t && (a = e), n;
                    };
                },
                da = (e, t) => Object.assign({}, e, { img: t }),
                _a = (e, t, a) => {
                    const n = new Map(),
                        r = {};
                    for (let s = e; s <= t; s++) {
                        const e = a(s),
                            t = r[e.path];
                        if (t) n.set(s, da(e, t));
                        else {
                            const t = new Image();
                            (r[e.path] = t),
                                (t.src = e.path),
                                (t.onerror = () => {
                                    console.error(
                                        `[CanvasSequence] Error loading image(${s})`,
                                        e.path,
                                        `(${e.x},${e.y})`,
                                    );
                                }),
                                n.set(s, da(e, t));
                        }
                    }
                    return n;
                },
                ga = 'DogTag_base_75',
                va = 'DogTag_glow_47',
                fa = 'DogTag_icon_ff',
                pa = 'DogTag_frame_fd',
                ba = 'DogTag_tooltipHitZone_1e',
                Ea = {
                    width: 300,
                    height: 200,
                    frameCount: 42,
                    chunk: { count: 3, rows: 5, columns: 3 },
                    getChunkPath:
                        ((ha = 'R.images.gui.maps.icons.achievements.summary.dog_tag.frame_sequence_'),
                        (e) => `${ha}${e}`),
                };
            var ha;
            const ya = (function (e) {
                    const t = e.chunk,
                        a = t.rows * t.columns;
                    return (n) => {
                        const r = n % a,
                            s = (r % t.columns) * e.width,
                            l = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / a)), x: s, y: l };
                    };
                })(Ea),
                Sa = (0, ie.Pi)(() => {
                    const e = pe().model.dogTagModel.get(),
                        t = e.background,
                        a = e.engraving,
                        n = e.isHighlighted,
                        r = e.engravingCompId,
                        s = e.backgroundCompId;
                    return l().createElement(
                        'div',
                        { className: ga },
                        l().createElement('div', { className: va }),
                        l().createElement('div', {
                            className: fa,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(t)})`,
                            },
                        }),
                        l().createElement('div', {
                            className: fa,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(a)})`,
                            },
                        }),
                        n &&
                            l().createElement(ma, {
                                width: Ea.width,
                                height: Ea.height,
                                frameCount: Ea.frameCount,
                                getImageSource: ya,
                                className: pa,
                            }),
                        l().createElement(
                            Ee.l,
                            { tooltipArgs: { args: { compId: s } } },
                            l().createElement('div', { className: ba }),
                        ),
                        l().createElement(
                            Ee.l,
                            { tooltipArgs: { args: { compId: r } } },
                            l().createElement('div', { className: ba }),
                        ),
                    );
                }),
                Na = {
                    base: 'PlayerInfo_base_ed',
                    dogTag: 'PlayerInfo_dogTag_17',
                    iconLock: 'PlayerInfo_iconLock_ab',
                    dogTagStatus: 'PlayerInfo_dogTagStatus_f8',
                    separator: 'PlayerInfo_separator_83',
                    clan: 'PlayerInfo_clan_87',
                    animatedDogTag: 'PlayerInfo_animatedDogTag_5f',
                },
                Ca = R.strings.achievements_page.playerInfo,
                Aa = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.dogTagModel.get(),
                        a = t.isEnabled,
                        n = t.purpose,
                        r = t.backgroundCompId,
                        s = t.engravingCompId,
                        i = t.animation,
                        o = e.otherPlayerInfo.get().isInClan,
                        c = 'coupled' === n;
                    return l().createElement(
                        'div',
                        { className: Na.base },
                        l().createElement(
                            'div',
                            { className: Na.dogTag },
                            (() => {
                                switch (!0) {
                                    case a && c:
                                        return l().createElement(
                                            Ee.l,
                                            {
                                                tooltipArgs: {
                                                    contentId:
                                                        R.views.lobby.dog_tags.AnimatedDogTagGradeTooltip('resId'),
                                                    args: { backgroundId: r, engravingId: s },
                                                },
                                                className: Na.animatedDogTag,
                                            },
                                            l().createElement(Yt, {
                                                background: r,
                                                engraving: s,
                                                size: Vt.ExtraSmall,
                                                showBackplate: !1,
                                                animationName: i,
                                                animationState: $t.Loop,
                                            }),
                                        );
                                    case a && !c:
                                        return l().createElement(Sa, null);
                                    default:
                                        return l().createElement(
                                            l().Fragment,
                                            null,
                                            l().createElement('div', { className: Na.iconLock }),
                                            l().createElement(
                                                'div',
                                                { className: Na.dogTagStatus },
                                                Ca.dogTag.unavailable(),
                                            ),
                                        );
                                }
                            })(),
                        ),
                        l().createElement('div', { className: Na.separator }),
                        l().createElement(
                            'div',
                            { className: Na.clan },
                            o
                                ? l().createElement(na, null)
                                : l().createElement('div', { className: Na.clanStatus }, Ca.clan.noClan()),
                        ),
                    );
                }),
                Pa = 600;
            var Ra = a(122);
            const Ia = 'DowngradeAnimation_base_1c',
                wa = 'DowngradeAnimation_oldElement_48',
                ka = 'DowngradeAnimation_newElement_d5',
                La = ({ oldElement: e, newElement: t, delay: a = 0 }) => (
                    (0, s.useEffect)(() => (0, Ra.F)(() => (0, v.G)(R.sounds.achievements_leveldown()), a), [a]),
                    l().createElement(
                        'div',
                        { className: Ia },
                        l().createElement(
                            'div',
                            { className: wa, style: { animationDelay: `${a}ms`, animationDuration: '300ms' } },
                            e,
                        ),
                        l().createElement(
                            'div',
                            { className: ka, style: { animationDelay: `${a + 300}ms`, animationDuration: '300ms' } },
                            t,
                        ),
                    )
                ),
                Ma = 'LevelUpAnimation_base_8a',
                xa = 'LevelUpAnimation_particlesAnim_e9',
                Ta = 'LevelUpAnimation_oldElement_08',
                Ba = 'LevelUpAnimation_newElement_4a',
                Da = (e) => e * e,
                Oa = ({ oldElement: e, newElement: t, delay: a = 0 }) => {
                    const n = (0, s.useRef)(null),
                        r = (0, s.useRef)(null),
                        i = (0, s.useState)(!0),
                        o = i[0],
                        c = i[1],
                        m = (0, s.useRef)(null),
                        u = (0, E.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!r.current || !n.current) return;
                                const t = e.value.progress;
                                (n.current.style.maskImage = `linear-gradient(55deg, transparent ${t}%, #000 ${t}%)`),
                                    (r.current.style.maskImage = `linear-gradient(55deg, #000 ${t}%, transparent ${t}%)`);
                            },
                        }))[1];
                    return (
                        (0, s.useEffect)(
                            () =>
                                (0, Ra.F)(() => {
                                    var e;
                                    null == (e = m.current) || e.play(), (0, v.G)(R.sounds.achievements_levelup());
                                }, a),
                            [a, m],
                        ),
                        (0, s.useEffect)(() => {
                            u.start({
                                from: { progress: 0 },
                                to: { progress: 100 },
                                delay: a,
                                config: { duration: 1700, easing: Da },
                            });
                        }, [u, a]),
                        l().createElement(
                            'div',
                            { className: Ma },
                            o &&
                                l().createElement(It.n, {
                                    ref: m,
                                    onEnded: () => c(!1),
                                    className: xa,
                                    src: R.videos.achievements.up_particles(),
                                }),
                            l().createElement('div', { className: Ta, ref: n }, e),
                            l().createElement('div', { className: Ba, ref: r }, t),
                        )
                    );
                },
                Wa = 'Content_icon_bd',
                za = R.images.gui.maps.icons.achievements.rating,
                Ha = (e, t = !1) =>
                    t
                        ? za.c_180x180
                        : e >= be.cJ.Large
                          ? za.c_360x360
                          : e >= be.cJ.Medium
                            ? za.c_280x280
                            : za.c_180x180,
                $a = (e, t, a, n = !0, r = !1) => ({
                    backgroundImage: n ? `url(${Ha(a, r).$dyn(`rating_${e}_${t}`)})` : `url(${Ha(a, r).wotpr()})`,
                }),
                Va = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.root.get(),
                        a = t.currentRatingRank,
                        n = t.prevCurrentRatingRank,
                        r = t.currentRatingSubRank,
                        i = t.prevCurrentRatingSubRank,
                        o = t.isWTREnabled,
                        m = t.battlesLeftCount,
                        u = t.isOtherPlayer,
                        d = e.computes.getRatingWidgetState,
                        _ = (0, be.GS)().mediaSize,
                        g = (0, s.useState)(ge.Init),
                        v = g[0],
                        f = g[1],
                        p = 0 === m,
                        b = p ? a : 0,
                        E = p ? r : 0;
                    return (
                        (0, s.useEffect)(
                            () =>
                                (0, c.v)(() => {
                                    f(d());
                                }),
                            [d],
                        ),
                        l().createElement(
                            'div',
                            null,
                            (() => {
                                switch (v) {
                                    case ge.LevelUp:
                                        return l().createElement(Oa, {
                                            oldElement: l().createElement('div', {
                                                className: Wa,
                                                style: $a(n, i, _, o, u),
                                            }),
                                            newElement: l().createElement('div', {
                                                className: Wa,
                                                style: $a(a, r, _, o, u),
                                            }),
                                            delay: 900,
                                        });
                                    case ge.Downgrade:
                                        return l().createElement(La, {
                                            oldElement: l().createElement('div', {
                                                className: Wa,
                                                style: $a(n, i, _, o, u),
                                            }),
                                            newElement: l().createElement('div', {
                                                className: Wa,
                                                style: $a(a, r, _, o, u),
                                            }),
                                            delay: Pa,
                                        });
                                    case ge.Static:
                                        return l().createElement('div', { className: Wa, style: $a(b, E, _, o, u) });
                                    default:
                                        return null;
                                }
                            })(),
                        )
                    );
                }),
                Ga = {
                    base: 'Points_base_2a',
                    base__wotpr: 'Points_base__wotpr_fb',
                    prevPoints: 'Points_prevPoints_e8',
                    base__increase: 'Points_base__increase_fb',
                    increasePrev: 'Points_increasePrev_ad',
                    base__decrease: 'Points_base__decrease_dd',
                    decreasePrev: 'Points_decreasePrev_e6',
                    newPoints: 'Points_newPoints_6f',
                    increaseNew: 'Points_increaseNew_fc',
                    decreaseNew: 'Points_decreaseNew_d4',
                };
            let Ua;
            !(function (e) {
                (e.Init = 'init'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
            })(Ua || (Ua = {}));
            const ja = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.root.get(),
                        a = t.personalScore,
                        n = t.prevPersonalScore,
                        r = t.isWTREnabled,
                        i = e.computes.getRatingWidgetState,
                        c = (0, s.useState)(Ua.Init),
                        m = c[0],
                        u = c[1],
                        d = i() === ge.LevelUp || i() === ge.Downgrade;
                    return (
                        (0, s.useEffect)(() => {
                            d && (a > n ? u(Ua.Increase) : a < n && u(Ua.Decrease));
                        }, [d, a, n]),
                        l().createElement(
                            'div',
                            { className: o()(Ga.base, Ga[`base__${m}`], !r && Ga.base__wotpr) },
                            d
                                ? l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(
                                          'div',
                                          { className: o()(Ga.prevPoints), style: { animationDelay: '600ms' } },
                                          l().createElement(Pe.A, { value: n }),
                                      ),
                                      l().createElement(
                                          'div',
                                          { className: o()(Ga.newPoints), style: { animationDelay: '600ms' } },
                                          l().createElement(Pe.A, { value: a }),
                                      ),
                                  )
                                : l().createElement(Pe.A, { value: a }),
                        )
                    );
                }),
                Fa = 'RatingWidget_base_dc',
                Ya = 'RatingWidget_image_7d',
                qa = 'RatingWidget_decoration_9f',
                Ja = 'RatingWidget_decoration__otherPlayer_95',
                Xa = 'RatingWidget_particlesBox_8d',
                Ka = 'RatingWidget_particles_36',
                Za = 'RatingWidget_footer_0e',
                Qa = 'Status_base_48',
                en = 'Status_statusText_33',
                tn = 'Status_caption_5f',
                an = R.strings.achievements_page.ratingWidget.status;
            var nn;
            !(function (e) {
                (e.Initial = 'initial'),
                    (e.Progress = 'progress'),
                    (e.WTRDisabled = 'WTRDisabled'),
                    (e.OtherPlayer = 'otherPlayer'),
                    (e.OtherPlayerWithProgress = 'otherPlayerWithProgress');
            })(nn || (nn = {}));
            const rn = (0, ie.Pi)(() => {
                    const e = pe().model.root.get(),
                        t = e.requiredNumberOfBattles,
                        a = e.battlesLeftCount,
                        n = e.isWTREnabled,
                        r = e.isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: Qa },
                        (() => {
                            switch (
                                ((e, t, a, n) =>
                                    n
                                        ? a
                                            ? nn.OtherPlayerWithProgress
                                            : nn.OtherPlayer
                                        : a
                                          ? e === t
                                              ? nn.Initial
                                              : nn.Progress
                                          : nn.WTRDisabled)(t, a, n, r)
                            ) {
                                case nn.Initial:
                                    return l().createElement(at.z, {
                                        classMix: en,
                                        text: an.initial(),
                                        binding: { amount: l().createElement('div', { className: tn }, t) },
                                    });
                                case nn.Progress:
                                    return l().createElement(at.z, {
                                        classMix: en,
                                        text: an.progress(),
                                        binding: { amount: l().createElement('div', { className: tn }, a) },
                                    });
                                case nn.WTRDisabled:
                                    return l().createElement(at.z, { classMix: en, text: an.withoutWTR() });
                                case nn.OtherPlayer:
                                    return l().createElement(at.z, { classMix: en, text: an.otherPlayer() });
                                case nn.OtherPlayerWithProgress:
                                    return l().createElement(at.z, {
                                        classMix: en,
                                        text: an.OtherPlayerWithProgress(),
                                        binding: { amount: l().createElement('div', { className: tn }, t) },
                                    });
                                default:
                                    return l().createElement('div', null);
                            }
                        })(),
                    );
                }),
                sn = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.root.get(),
                        a = t.battlesLeftCount,
                        n = t.isWTREnabled,
                        r = t.isOtherPlayer,
                        s = 0 === a,
                        i = (0, e.computes.getRatingWidgetState)() === ge.Downgrade;
                    return l().createElement(
                        Be.u,
                        {
                            contentId: n
                                ? R.views.lobby.achievements.tooltips.WTRMainTooltip('resId')
                                : R.views.lobby.achievements.tooltips.WOTPRMainTooltip('resId'),
                        },
                        l().createElement(
                            'div',
                            { className: Fa },
                            l().createElement(
                                'div',
                                { className: Ya },
                                l().createElement('div', { className: o()(qa, r && Ja) }),
                                s &&
                                    l().createElement(
                                        'div',
                                        { className: Xa, style: i ? { animationDelay: '1200ms' } : void 0 },
                                        l().createElement(It.n, {
                                            className: Ka,
                                            src: R.videos.achievements.particles(),
                                            autoplay: !0,
                                            loop: !0,
                                        }),
                                    ),
                                l().createElement(Va, null),
                            ),
                            l().createElement(
                                'div',
                                { className: Za },
                                s ? l().createElement(ja, null) : l().createElement(rn, null),
                            ),
                        ),
                    );
                }),
                ln = 'Statistic_base_79',
                on = 'Statistic_list_41',
                cn = 'Statistic_part_90',
                mn = 'Statistic_item_87',
                un = 'Statistic_ratingWidget_9d',
                dn = 'StatisticItem_base_d9',
                _n = 'StatisticItem_icon_4e',
                gn = 'StatisticItem_amount_de',
                vn = 'StatisticItem_title_f7',
                fn = 'StatisticItem_caption_65',
                pn = 'StatisticItem_footer_61',
                bn = 'StatisticItem_footerText_2f',
                En = R.strings.achievements_page.summary,
                hn = (e, t, a) =>
                    a
                        ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(e)})` }
                        : t >= be.cJ.Large
                          ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.big.$dyn(e)})` }
                          : t >= be.cJ.Medium
                            ? {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.medium.$dyn(e)})`,
                              }
                            : {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(e)})`,
                              },
                yn = (0, s.memo)(({ type: e, mainValue: t, additionalValue: a, isOtherPlayer: n }) => {
                    const r = (0, be.GS)().mediaSize;
                    return l().createElement(
                        Be.u,
                        { contentId: R.views.lobby.achievements.tooltips.KPITooltip('resId'), args: { kpiType: e } },
                        l().createElement(
                            'div',
                            { className: dn },
                            l().createElement('div', { className: _n, style: hn(e, r, n) }),
                            l().createElement('div', { className: gn }, t),
                            l().createElement('div', { className: vn }, En.main.$dyn(e)),
                            l().createElement(
                                'div',
                                { className: pn },
                                l().createElement(at.z, {
                                    classMix: bn,
                                    text: En.additional.$dyn(e),
                                    binding: { value: l().createElement('div', { className: fn }, a) },
                                }),
                            ),
                        ),
                    );
                }),
                Sn = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.computes,
                        a = Math.floor(t.getStatisticList().length / 2),
                        n = t.getStatisticList().slice(0, a),
                        r = t.getStatisticList().slice(a);
                    return l().createElement(
                        'div',
                        { className: ln },
                        l().createElement(
                            'div',
                            { className: on },
                            l().createElement(
                                'div',
                                { className: cn },
                                n.map(({ type: t, mainValue: a, additionalValue: n }, r) =>
                                    l().createElement(
                                        'div',
                                        { className: mn, key: r },
                                        l().createElement(yn, {
                                            type: t,
                                            mainValue: a,
                                            additionalValue: n,
                                            isOtherPlayer: e.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                            l().createElement('div', { className: un }, l().createElement(sn, null)),
                            l().createElement(
                                'div',
                                { className: cn },
                                r.map(({ type: t, mainValue: a, additionalValue: n }, r) =>
                                    l().createElement(
                                        'div',
                                        { className: mn, key: r },
                                        l().createElement(yn, {
                                            type: t,
                                            mainValue: a,
                                            additionalValue: n,
                                            isOtherPlayer: e.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                Nn = 'Content_base_3e',
                Cn = 'Content_base__otherPlayer_61',
                An = 'Content_header_2d',
                Pn = 'Content_statistic_6c',
                Rn = 'Content_playerInfo_62',
                In = (0, ie.Pi)(() => {
                    const e = pe().model.root.get(),
                        t = e.isWTREnabled,
                        a = e.isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: o()(Nn, a && Cn) },
                        l().createElement('div', { className: An }, l().createElement(Pt, { isWTREnabled: t })),
                        l().createElement('div', { className: Pn }, l().createElement(Sn, null)),
                        l().createElement(St, null),
                        a && l().createElement('div', { className: Rn }, l().createElement(Aa, null)),
                    );
                }),
                wn = 'Error_base_e9',
                kn = 'Error_icon_51',
                Ln = 'Error_title_fe',
                Mn = 'Error_description_85',
                xn = 'Error_caption_74',
                Tn = R.strings.achievements_page.summary.disabled,
                Bn = (0, ie.Pi)(() => {
                    const e = pe().model.root.get().isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: wn },
                        l().createElement('div', { className: kn }),
                        e
                            ? l().createElement('div', { className: xn }, Tn.otherPlayer.caption())
                            : l().createElement(
                                  l().Fragment,
                                  null,
                                  l().createElement('div', { className: Ln }, Tn.title()),
                                  l().createElement('div', { className: Mn }, Tn.description()),
                              ),
                    );
                }),
                Dn = 'App_base_bb',
                On = 'App_base__withScroll_05',
                Wn = 'App_scroll_be',
                zn = 'App_scrollContent_2a',
                Hn = 'App_bar_52',
                $n = 'App_content_13',
                Vn = 'App_footer_b9',
                Gn = 'App_errorWrapper_65',
                Un = 'App_error_a2',
                jn = R.strings.achievements_page.summary.accountInfo,
                Fn = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                Yn = (0, ie.Pi)(() => {
                    const e = pe().model.root.get(),
                        t = e.registrationDate,
                        a = e.lastVisitDate,
                        n = e.lastVisitTime,
                        r = e.isSummaryEnabled,
                        s = e.isOtherPlayer,
                        i = $(),
                        c = (0, E.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            config: { duration: 200, easing: Fn },
                        }),
                        m = (0, le.uF)(jn.registrationDate(), { registrationDate: t }),
                        u = (0, le.uF)(jn.lastVisit(), { lastVisitDate: a, lastVisitTime: n });
                    return l().createElement(
                        E.animated.div,
                        { className: o()(Dn, s && r && On), style: c },
                        r
                            ? l().createElement(
                                  l().Fragment,
                                  null,
                                  s
                                      ? l().createElement(
                                            l().Fragment,
                                            null,
                                            l().createElement(
                                                se.Vertical.Area,
                                                { api: i, className: Wn, classNames: { content: zn } },
                                                l().createElement(
                                                    'div',
                                                    { className: $n },
                                                    l().createElement(In, null),
                                                ),
                                            ),
                                            l().createElement(se.Vertical.Bar, { api: i, classNames: { base: Hn } }),
                                        )
                                      : l().createElement(In, null),
                                  l().createElement(
                                      'div',
                                      { className: Vn },
                                      `${(0, oe.PI)(m)}${a && n ? (0, oe.PI)(u) : ''}`,
                                  ),
                              )
                            : l().createElement(
                                  'div',
                                  { className: Gn },
                                  l().createElement('div', { className: Un }, l().createElement(Bn, null)),
                              ),
                    );
                }),
                qn = () =>
                    l().createElement(fe, { options: { context: 'model.summaryModel' } }, l().createElement(Yn, null));
        },
    },
]);
