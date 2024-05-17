'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [328],
    {
        4442: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Kn });
            var n = {};
            a.r(n),
                a.d(n, {
                    Area: () => H,
                    Bar: () => O,
                    DefaultScroll: () => z,
                    Direction: () => h,
                    defaultSettings: () => y,
                    useHorizontalScrollApi: () => S,
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
                N = ({
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
                            N = (0, E.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (a(t, e), p.trigger('change', e), l && h());
                                },
                                onRest: (e) => p.trigger('rest', e),
                                onStart: (e) => p.trigger('start', e),
                                onPause: (e) => p.trigger('pause', e),
                            })),
                            S = N[0],
                            C = N[1],
                            A = (0, s.useCallback)(
                                (e, t, a) => {
                                    var n;
                                    const r = S.scrollPosition.get(),
                                        s = (null != (n = S.scrollPosition.goal) ? n : 0) - r;
                                    return i(e, t * a + s + r);
                                },
                                [S.scrollPosition],
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
                                            from: { scrollPosition: i(n, S.scrollPosition.get()) },
                                        });
                                },
                                [C, d.animationConfig, S.scrollPosition],
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
                                        g.current && p.trigger('mouseWheel', e, S.scrollPosition, t(g.current));
                                },
                                [S.scrollPosition, R, p],
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
                                            (P(i(e, S.scrollPosition.goal), { immediate: !0 }),
                                            p.trigger('resizeHandled'));
                                    }),
                                [P, S.scrollPosition.goal],
                            ),
                            k = _(() => {
                                const e = g.current;
                                if (!e) return;
                                const t = i(e, S.scrollPosition.goal);
                                t !== S.scrollPosition.goal && P(t, { immediate: !0 }), p.trigger('recalculateContent');
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
                                animationScroll: S,
                                recalculateContent: k,
                                events: { on: p.on, off: p.off },
                            }),
                            [S.scrollPosition, P, R, p.off, p.on, k, I, C, d.step.clampedArrowStepTimeout],
                        );
                    };
                },
                S = N({
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
                D = () => {},
                B = (e, t) => Math.max(20, e.offsetWidth * t),
                O = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = T, onDrag: n = D }) => {
                    const r = (0, s.useRef)(null),
                        i = (0, s.useRef)(null),
                        d = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        p = (0, s.useRef)(null),
                        b = e.stepTimeout || 100,
                        E = (0, s.useState)(x),
                        y = E[0],
                        N = E[1],
                        S = (0, s.useCallback)(
                            (e) => {
                                N(e), p.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
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
                                c = (t.offsetWidth - B(t, l)) * o;
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
                                (t.style.width = `${B(a, l)}px`),
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
                                    let a = D;
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
                                    t(), S(x);
                                });
                            return () => {
                                t(), a();
                            };
                        }, [e, y.offset, y.pending, n, S]);
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
                                            S({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
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
            const $ = N({
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
                        N = E[1],
                        S = (0, s.useCallback)(
                            (e) => {
                                N(e), p.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
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
                                    S(K);
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
                        }, [e, y.offset, y.pending, n, S]);
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
                                            S({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
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
            let Ne, Se, Ce;
            !(function (e) {
                (e.Repeatable = 'repeatable'),
                    (e.Class = 'class'),
                    (e.Custom = 'custom'),
                    (e.Series = 'series'),
                    (e.Single = 'single'),
                    (e.Rare = 'rare');
            })(Ne || (Ne = {})),
                (function (e) {
                    (e.None = 'none'), (e.Simple = 'simple'), (e.Series = 'series'), (e.Stages = 'stages');
                })(Se || (Se = {})),
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
            var Pe = a(2372);
            const Re = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                Ie = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
            const we = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                ke = (e) =>
                    we
                        ? `${e}`
                        : (function (e) {
                              let t = '';
                              for (let a = Ie.length - 1; a >= 0; a--) for (; e >= Ie[a]; ) (t += Re[a]), (e -= Ie[a]);
                              return t;
                          })(e),
                Le = {
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
            let Me;
            !(function (e) {
                (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
            })(Me || (Me = {}));
            const xe = ({ value: e, type: t = Se.Simple, size: a = Me.Medium, className: n }) =>
                    l().createElement(
                        'div',
                        { className: o()(Le.base, Le[`base__${t}`], Le[`base__${a}`], n) },
                        l().createElement(
                            'div',
                            { className: Le.background },
                            l().createElement(
                                'div',
                                { className: Le.count },
                                t === Se.Stages ? ke(e) : l().createElement(Pe.A, { value: e, format: 'integral' }),
                            ),
                            t === Se.Series &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: o()(Le.arrow, Le.arrow__left) }),
                                    l().createElement('div', { className: o()(Le.arrow, Le.arrow__right) }),
                                ),
                        ),
                    ),
                Te = R.images.gui.maps.icons.achievement,
                De =
                    (R.strings.achievements,
                    ({ name: e, resourceName: t, type: a, rareIconId: n, rareBigIconId: r, value: s, size: l }) => {
                        if (n && r) return l === Ce.ExtraSmall ? n : r;
                        const i = viewEnv.getScale(),
                            o = ((e, t, a, n) => (a === Ne.Class ? `${e}${n}` : e.match(/^\d/) ? `c_${e}` : t))(
                                e,
                                t,
                                a,
                                s,
                            );
                        return l === Ce.ExtraSmall && i < 2 ? Te.$dyn(o) : Te.big.$dyn(o);
                    }),
                Be = {
                    [Ce.ExtraSmall]: Me.Small,
                    [Ce.Small]: Me.Small,
                    [Ce.Medium]: Me.Medium,
                    [Ce.Large]: Me.Medium,
                    [Ce.ExtraLarge]: Me.Large,
                },
                Oe = ({
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
                    const _ = De({
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
                                r !== Se.None &&
                                    l().createElement(xe, { type: r, size: Be[s], value: i, className: Ae.counter }),
                            ),
                        ),
                    );
                };
            var We = a(2056);
            let ze;
            !(function (e) {
                (e.DISABLED_LAYOUT = 'disabledLayout'),
                    (e.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (e.DISABLED = 'disabled'),
                    (e.OTHER_PLAYER = 'otherPlayer');
            })(ze || (ze = {}));
            const He = {
                    base: 'AchievementPlaceholder_base_06',
                    image: 'AchievementPlaceholder_image_92',
                    base__small: 'AchievementPlaceholder_base__small_b7',
                    base__medium: 'AchievementPlaceholder_base__medium_ef',
                    base__large: 'AchievementPlaceholder_base__large_c5',
                    base__extraLarge: 'AchievementPlaceholder_base__extraLarge_d5',
                },
                $e = ({ size: e, isOtherPlayer: t = !1 }) =>
                    l().createElement(
                        We.u,
                        {
                            contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                            args: { tooltipType: t ? ze.OTHER_PLAYER : ze.DISABLED_LAYOUT },
                        },
                        l().createElement(
                            'div',
                            { className: o()(He.base, He[`base__${e}`]) },
                            l().createElement('div', { className: He.image }),
                        ),
                    ),
                Ve = {
                    [be.cJ.ExtraSmall]: Ce.Small,
                    [be.cJ.Small]: Ce.Small,
                    [be.cJ.Medium]: Ce.Large,
                    [be.cJ.Large]: Ce.Large,
                    [be.cJ.ExtraLarge]: Ce.ExtraLarge,
                },
                Ge = 'Achievements_base_96',
                Ue = 'Achievements_base__visibleWithAnimation_0a',
                je = 'Achievements_base__hide_33',
                Fe = 'Achievements_header_a9',
                Ye = 'Achievements_ribbon_06',
                qe = 'Achievements_base__fullAnimation_10',
                Je = 'Achievements_list_55',
                Xe = 'Achievements_item_a4',
                Ke = 'Achievements_item__fixedIndent_0c',
                Ze = 'Achievements_achievement_64',
                Qe = 'Achievements_achievementPlaceholder_42',
                et = {
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
            let tt, at;
            !(function (e) {
                (e.main = 'main'),
                    (e.primary = 'primary'),
                    (e.primaryGreen = 'primaryGreen'),
                    (e.primaryRed = 'primaryRed'),
                    (e.secondary = 'secondary'),
                    (e.ghost = 'ghost');
            })(tt || (tt = {})),
                (function (e) {
                    (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                })(at || (at = {}));
            const nt = ({
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
                    N = (0, s.useState)(!1),
                    S = N[0],
                    C = N[1],
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
                    D = (0, s.useCallback)(
                        (e) => {
                            r || (null !== m && (0, v.G)(m), _ && _(e), a && w(), C(!0));
                        },
                        [r, m, _, w, a],
                    ),
                    B = (0, s.useCallback)(
                        (e) => {
                            r || (f && f(e), C(!1));
                        },
                        [r, f],
                    ),
                    O = o()(
                        et.base,
                        et[`base__${n}`],
                        {
                            [et.base__disabled]: r,
                            [et[`base__${t}`]]: t,
                            [et.base__focus]: h,
                            [et.base__highlightActive]: S,
                            [et.base__firstHover]: P,
                        },
                        i,
                    ),
                    W = o()(et.state, et.state__default);
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
                            onMouseDown: D,
                            onMouseLeave: B,
                            onClick: L,
                        },
                        n !== tt.ghost &&
                            l().createElement(
                                l().Fragment,
                                null,
                                l().createElement('div', { className: et.back }),
                                l().createElement('span', { className: et.texture }),
                            ),
                        l().createElement(
                            'span',
                            { className: W },
                            l().createElement('span', { className: et.stateDisabled }),
                            l().createElement('span', { className: et.stateHighlightHover }),
                            l().createElement('span', { className: et.stateHighlightActive }),
                        ),
                        l().createElement(
                            'span',
                            { className: et.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            nt.defaultProps = { type: tt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const rt = (0, s.memo)(nt);
            var st = a(9766);
            const lt = 'AchievementsStatistic_base_36',
                it = 'AchievementsStatistic_counter_fb',
                ot = 'AchievementsStatistic_base__otherPlayer_c3',
                ct = 'AchievementsStatistic_infoItem_10',
                mt = 'AchievementsStatistic_accent_94',
                ut = 'AchievementsStatistic_medalIcon_24',
                dt = 'AchievementsStatistic_medalIcon__received_d1',
                _t = R.strings.achievements_page.summary.achievements,
                gt = ({ isOtherPlayer: e, unique: t, total: a }) =>
                    l().createElement(
                        'div',
                        { className: o()(lt, e && ot) },
                        l().createElement('div', { className: o()(ut, a && dt) }),
                        l().createElement(
                            'div',
                            { className: it },
                            l().createElement(st.z, {
                                text: _t.unique(),
                                binding: {
                                    value: l().createElement(
                                        'div',
                                        { className: mt },
                                        l().createElement(Pe.A, { value: t }),
                                    ),
                                },
                            }),
                            l().createElement(st.z, {
                                classMix: ct,
                                text: _t.total(),
                                binding: {
                                    value: l().createElement(
                                        'div',
                                        { className: mt },
                                        l().createElement(Pe.A, { value: a }),
                                    ),
                                },
                            }),
                        ),
                    );
            var vt = a(6373);
            const ft = 'Mastery_base_a0',
                pt = 'Mastery_masteryIcon_17',
                bt = 'Mastery_masteryIcon__recieved_50',
                Et = ({ totalMastery: e, currentMastery: t }) =>
                    l().createElement(
                        vt.i,
                        {
                            header: R.strings.achievements_page.tooltips.mastery.header(),
                            body: R.strings.achievements_page.tooltips.mastery.body(),
                        },
                        l().createElement(
                            'div',
                            { className: ft },
                            l().createElement('div', { className: o()(pt, t && bt) }),
                            l().createElement(st.z, {
                                text: R.strings.achievements_page.summary.achievements.mastery.counter(),
                                binding: {
                                    current: l().createElement(Pe.A, { value: t }),
                                    total: l().createElement(Pe.A, { value: e }),
                                },
                            }),
                        ),
                    ),
                ht = {
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
                yt = (e) => {
                    switch (e) {
                        case ce.DISABLED:
                            return { tooltipType: ze.DISABLED };
                        case ce.NOT_ENOUGH_ACHIEVEMENTS:
                            return { tooltipType: ze.NOT_ENOUGH_ACHIEVEMENTS };
                        default:
                            return { tooltipType: ze.DISABLED };
                    }
                },
                Nt = (0, ie.Pi)(() => {
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
                        { className: o()(ht.base, ht[`base__${r}`], c && ht.base__otherPlayer) },
                        l().createElement(Et, { totalMastery: u, currentMastery: m }),
                        l().createElement(
                            'div',
                            { className: ht.awardsContainer },
                            l().createElement(
                                'div',
                                { className: ht.title },
                                R.strings.achievements_page.summary.achievements.title(),
                            ),
                            !c &&
                                l().createElement(
                                    We.u,
                                    {
                                        contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                                        args: yt(r),
                                        isEnabled: r !== ce.AVAILABLE,
                                    },
                                    l().createElement(
                                        'div',
                                        {
                                            className: ht.buttonContainer,
                                            id: r === ce.AVAILABLE ? 'summary-customization-button' : void 0,
                                        },
                                        l().createElement(
                                            rt,
                                            {
                                                type: tt.ghost,
                                                size: at.medium,
                                                disabled: r !== ce.AVAILABLE,
                                                onClick: a.onAchievementsSettings,
                                                mixClass: ht.editButton,
                                            },
                                            l().createElement('div', { className: ht.buttonIcon }),
                                        ),
                                        r === ce.DISABLED &&
                                            l().createElement(
                                                'div',
                                                { className: ht.alert },
                                                l().createElement('div', { className: ht.alertIcon }),
                                            ),
                                    ),
                                ),
                        ),
                        l().createElement(gt, { total: i, unique: s, isOtherPlayer: c }),
                    );
                });
            function St() {
                return (
                    (St =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    St.apply(this, arguments)
                );
            }
            const Ct = (e) => {
                    e.target === e.currentTarget && (0, v.G)(R.sounds.achievements_medal());
                },
                At = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.computes,
                        a = e.root.get(),
                        n = a.editState,
                        r = a.isSuccessfullyEdited,
                        s = a.isOtherPlayer,
                        i = a.isEditOpened,
                        c = (0, be.GS)().mediaSize;
                    let m = 0;
                    const u = s ? Ce.Small : Ve[c],
                        d = n === ce.AVAILABLE && r;
                    return l().createElement(
                        'div',
                        { className: o()(Ge, d && qe, !i && d && Ue, i && je) },
                        l().createElement('div', { className: Fe }, l().createElement(Nt, null)),
                        l().createElement(
                            'div',
                            { className: Ye },
                            l().createElement(
                                'div',
                                { className: Je },
                                de.UI(t.getSignificantAchievementsList(), (e, t) =>
                                    l().createElement(
                                        'div',
                                        {
                                            className: o()(Xe, s && Ke),
                                            key: t,
                                            style: d && !s ? { animationDelay: 150 * (t + 1) + 'ms' } : void 0,
                                            onAnimationStart: Ct,
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
                                                                  className: Ze,
                                                                  style: { animationDelay: 300 * m + 'ms' },
                                                                  onAnimationStart: Ct,
                                                              },
                                                              l().createElement(Oe, St({}, e, { size: u })),
                                                          ),
                                                          l().createElement(
                                                              'div',
                                                              {
                                                                  className: Qe,
                                                                  style: { animationDelay: 300 * m + 'ms' },
                                                              },
                                                              l().createElement($e, { size: u, isOtherPlayer: s }),
                                                          ),
                                                      ))
                                                    : l().createElement(Oe, St({}, e, { size: u }))
                                                : l().createElement($e, { size: u, isOtherPlayer: s });
                                        })(),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                Pt = 'Header_base_90',
                Rt = 'Header_iconInfo_20',
                It = R.strings.achievements_page.summary,
                wt = ({ isWTREnabled: e }) =>
                    e
                        ? l().createElement(
                              We.u,
                              { contentId: R.views.lobby.achievements.tooltips.WTRInfoTooltip('resId') },
                              l().createElement(
                                  'div',
                                  { className: Pt },
                                  It.statistic.title(),
                                  l().createElement('div', { className: Rt }),
                              ),
                          )
                        : l().createElement('div', { className: Pt }, It.withoutWTR.statistic.title());
            var kt = a(5959),
                Lt = a(8432);
            const Mt = 'DogTag_base_2b',
                xt = 'DogTag_engraving_eb',
                Tt = 'DogTag_background_7f',
                Dt = R.strings.settings.LANGUAGE_CODE(),
                Bt = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
            let Ot;
            !(function (e) {
                (e.Small = 'small'), (e.Big = 'big');
            })(Ot || (Ot = {}));
            const Wt = ({ background: e, engraving: t, size: a = Ot.Big, grade: n = 0, className: r }) => {
                    const s = Bt.includes(Dt) ? `_${Dt}` : '';
                    return l().createElement(
                        'div',
                        { className: o()(Mt, r) },
                        l().createElement('div', {
                            className: Tt,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.backgrounds.background_${e}_0)`,
                            },
                        }),
                        l().createElement('div', {
                            className: xt,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.engravings.engraving_${t}_${n}${s})`,
                            },
                        }),
                    );
                },
                zt = {
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
            var Ht = a(7522);
            const $t = {
                base: 'Counter_base_29',
                base__extraSmall: 'Counter_base__extraSmall_f8',
                text: 'Counter_text_73',
                base__medium: 'Counter_base__medium_78',
                base__large: 'Counter_base__large_88',
                count: 'Counter_count_ee',
                base__small: 'Counter_base__small_52',
            };
            let Vt;
            !(function (e) {
                (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
            })(Vt || (Vt = {}));
            const Gt = ({ engraving: e, count: t, size: a }) => {
                const n = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                return l().createElement(
                    'div',
                    { className: o()($t.base, $t[`base__${a}`]) },
                    l().createElement('div', { className: $t.text }, n),
                    l().createElement('div', { className: $t.count }, t),
                );
            };
            let Ut, jt;
            !(function (e) {
                (e.Static = 'static'),
                    (e.Intro = 'intro'),
                    (e.AutoShowing = 'autoShowing'),
                    (e.Showing = 'showing'),
                    (e.Loop = 'loop'),
                    (e.Hiding = 'hiding');
            })(Ut || (Ut = {})),
                (function (e) {
                    (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(jt || (jt = {}));
            const Ft = { duration: 500, easing: Ht.Z.easeOutBack },
                Yt = {
                    [jt.ExtraSmall]: Vt.ExtraSmall,
                    [jt.Small]: Vt.Small,
                    [jt.Medium]: Vt.Medium,
                    [jt.Large]: Vt.Large,
                },
                qt = { [jt.ExtraSmall]: 'small', [jt.Small]: 'big', [jt.Medium]: 'big', [jt.Large]: 's500x300' },
                Jt = {
                    vehicle_sparks_1: 'ach_dog_tag_animation_01',
                    vehicle_sparks_2: 'ach_dog_tag_animation_02',
                    vehicle_sparks_3: 'ach_dog_tag_animation_03',
                },
                Xt = ({
                    background: e,
                    engraving: t,
                    progress: a = 0,
                    animationState: n = Ut.Static,
                    animationName: r = '',
                    onAnimationEnd: i,
                    grade: m = 0,
                    showBackplate: u = !0,
                    size: d = jt.Medium,
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
                    const N = (0, E.useSpring)(() => ({ from: { opacity: 0 }, config: Ft }), [n]),
                        S = N[0],
                        C = N[1],
                        A = (0, E.useSpring)(() => ({
                            from: { opacity: 0, transform: 'translateY(-50%)' },
                            config: Ft,
                            onRest: () => {
                                n === Ut.Hiding && (null == i || i());
                            },
                        })),
                        P = A[0],
                        I = A[1],
                        w = (0, s.useCallback)(() => {
                            var e;
                            null == (e = f.current) || e.play(),
                                I.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                !g && (0, v.G)(R.sounds.$dyn(Jt[r]));
                        }, [r, I, g]);
                    (0, s.useEffect)(
                        () =>
                            (0, c.v)(() => {
                                switch (n) {
                                    case Ut.Intro:
                                        return void C.start({ to: { opacity: 1 }, immediate: !1 });
                                    case Ut.AutoShowing:
                                        return C.start({ to: { opacity: 1 }, immediate: !1 }), void w();
                                    case Ut.Showing:
                                        return void w();
                                    case Ut.Loop:
                                        return (
                                            k(),
                                            C.start({ to: { opacity: 1 }, immediate: !0 }),
                                            void I.start({
                                                to: { opacity: 1, transform: 'translateY(0%)' },
                                                immediate: !0,
                                            })
                                        );
                                    case Ut.Hiding:
                                        return (
                                            C.start({ to: { opacity: 0 } }),
                                            void I.start({
                                                to: { opacity: 0, transform: 'translateY(-50%)' },
                                                immediate: !1,
                                            })
                                        );
                                    case Ut.Static:
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
                        { className: o()(zt.base, zt[`base__${d}`], _), style: S },
                        u &&
                            l().createElement(
                                E.animated.div,
                                { className: zt.backplateBox, style: P },
                                l().createElement(
                                    'div',
                                    {
                                        className: zt.backplate,
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.dogtags.${qt[d]}.bottom_plates.bottom_plate_${e})`,
                                        },
                                    },
                                    l().createElement(Gt, { engraving: t, count: a, size: Yt[d] }),
                                ),
                            ),
                        l().createElement('div', { className: zt.shadow }),
                        n !== Ut.Static &&
                            kt.graphicsQuality.isHigh() &&
                            Boolean(y) &&
                            l().createElement(
                                'div',
                                { className: zt.videoBox },
                                l().createElement(Lt.n, {
                                    ref: f,
                                    className: zt.video,
                                    onEnded: k,
                                    isPrebufferKeyframes: Boolean(b.length),
                                    src: y,
                                }),
                            ),
                        l().createElement(Wt, {
                            background: e,
                            engraving: t,
                            grade: m,
                            size: Ot.Big,
                            className: zt.dogTag,
                        }),
                    );
                };
            var Kt = a(6349);
            const Zt = 'Clan_base_98',
                Qt = 'Clan_title_88',
                ea = 'Clan_icon_46',
                ta = 'Clan_row_e6',
                aa = 'Clan_caption_1a',
                na = 'Clan_buttonBox_bc',
                ra = 'Clan_button_1d',
                sa = R.strings.achievements_page.playerInfo.clan,
                la = (0, ie.Pi)(() => {
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
                        { className: Zt },
                        l().createElement(
                            'div',
                            { className: Qt },
                            r && l().createElement('div', { className: ea, style: { backgroundImage: `url(${r})` } }),
                            l().createElement(Kt.l, { content: s }),
                        ),
                        l().createElement(
                            'div',
                            null,
                            l().createElement(
                                'div',
                                { className: ta },
                                l().createElement('div', { className: aa }, sa.post()),
                                l().createElement('div', null, i),
                            ),
                            l().createElement(
                                'div',
                                { className: ta },
                                l().createElement('div', { className: aa }, sa.date()),
                                l().createElement('div', null, o),
                            ),
                        ),
                        l().createElement(
                            'div',
                            { className: na },
                            l().createElement(rt, { onClick: a.onOpenProfile, mixClass: ra }, sa.button()),
                        ),
                    );
                }),
                ia = 33,
                oa = 0,
                ca = !0,
                ma = 'play';
            const ua = [
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
            function da() {
                return (
                    (da =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    da.apply(this, arguments)
                );
            }
            const _a = (0, s.memo)(function (e) {
                    let t = e.width,
                        a = e.height,
                        n = e.getImageSource,
                        r = e.frameCount,
                        i = e.onAnimate,
                        o = e.frameTime,
                        c = void 0 === o ? ia : o,
                        m = e.initialFrameIndex,
                        u = void 0 === m ? oa : m,
                        d = e.lastFrameIndex,
                        _ = void 0 === d ? r - 1 : d,
                        g = e.loop,
                        v = void 0 === g ? ca : g,
                        f = e.state,
                        p = void 0 === f ? ma : f,
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
                        })(e, ua);
                    const N = (0, s.useRef)(null);
                    return (
                        (0, s.useEffect)(() => {
                            const e = N.current;
                            if (!e) return;
                            const t = e.getContext('2d'),
                                a = (a) => {
                                    t.clearRect(0, 0, e.width, e.height), t.drawImage(a.img, -a.x, -a.y);
                                };
                            switch (p) {
                                case 'play':
                                    return (function () {
                                        const e = fa(u, _, n),
                                            t = ga(u, _),
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
                                        const r = () => a(va(e, t));
                                        return t.addEventListener('load', r), () => t.removeEventListener('load', r);
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [c, n, u, _, v, i, E, b, h, p]),
                        l().createElement('canvas', da({}, y, { width: t, height: a, ref: N }))
                    );
                }),
                ga = (e, t) => {
                    let a = e;
                    return () => {
                        const n = a;
                        return (a += 1), a > t && (a = e), n;
                    };
                },
                va = (e, t) => Object.assign({}, e, { img: t }),
                fa = (e, t, a) => {
                    const n = new Map(),
                        r = {};
                    for (let s = e; s <= t; s++) {
                        const e = a(s),
                            t = r[e.path];
                        if (t) n.set(s, va(e, t));
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
                                n.set(s, va(e, t));
                        }
                    }
                    return n;
                },
                pa = 'DogTag_base_75',
                ba = 'DogTag_glow_47',
                Ea = 'DogTag_icon_ff',
                ha = 'DogTag_frame_fd',
                ya = 'DogTag_tooltipHitZone_1e',
                Na = {
                    width: 300,
                    height: 200,
                    frameCount: 42,
                    chunk: { count: 3, rows: 5, columns: 3 },
                    getChunkPath:
                        ((Sa = 'R.images.gui.maps.icons.achievements.summary.dog_tag.frame_sequence_'),
                        (e) => `${Sa}${e}`),
                };
            var Sa;
            const Ca = (function (e) {
                    const t = e.chunk,
                        a = t.rows * t.columns;
                    return (n) => {
                        const r = n % a,
                            s = (r % t.columns) * e.width,
                            l = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / a)), x: s, y: l };
                    };
                })(Na),
                Aa = (0, ie.Pi)(() => {
                    const e = pe().model.dogTagModel.get(),
                        t = e.background,
                        a = e.engraving,
                        n = e.isHighlighted,
                        r = e.engravingCompId,
                        s = e.backgroundCompId;
                    return l().createElement(
                        'div',
                        { className: pa },
                        l().createElement('div', { className: ba }),
                        l().createElement('div', {
                            className: Ea,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(t)})`,
                            },
                        }),
                        l().createElement('div', {
                            className: Ea,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(a)})`,
                            },
                        }),
                        n &&
                            l().createElement(_a, {
                                width: Na.width,
                                height: Na.height,
                                frameCount: Na.frameCount,
                                getImageSource: Ca,
                                className: ha,
                            }),
                        l().createElement(
                            Ee.l,
                            { tooltipArgs: { args: { compId: s } } },
                            l().createElement('div', { className: ya }),
                        ),
                        l().createElement(
                            Ee.l,
                            { tooltipArgs: { args: { compId: r } } },
                            l().createElement('div', { className: ya }),
                        ),
                    );
                }),
                Pa = {
                    base: 'PlayerInfo_base_ed',
                    dogTag: 'PlayerInfo_dogTag_17',
                    iconLock: 'PlayerInfo_iconLock_ab',
                    dogTagStatus: 'PlayerInfo_dogTagStatus_f8',
                    separator: 'PlayerInfo_separator_83',
                    clan: 'PlayerInfo_clan_87',
                    animatedDogTag: 'PlayerInfo_animatedDogTag_5f',
                },
                Ra = R.strings.achievements_page.playerInfo,
                Ia = (0, ie.Pi)(() => {
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
                        { className: Pa.base },
                        l().createElement(
                            'div',
                            { className: Pa.dogTag },
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
                                                className: Pa.animatedDogTag,
                                            },
                                            l().createElement(Xt, {
                                                background: r,
                                                engraving: s,
                                                size: jt.ExtraSmall,
                                                showBackplate: !1,
                                                animationName: i,
                                                animationState: Ut.Loop,
                                            }),
                                        );
                                    case a && !c:
                                        return l().createElement(Aa, null);
                                    default:
                                        return l().createElement(
                                            l().Fragment,
                                            null,
                                            l().createElement('div', { className: Pa.iconLock }),
                                            l().createElement(
                                                'div',
                                                { className: Pa.dogTagStatus },
                                                Ra.dogTag.unavailable(),
                                            ),
                                        );
                                }
                            })(),
                        ),
                        l().createElement('div', { className: Pa.separator }),
                        l().createElement(
                            'div',
                            { className: Pa.clan },
                            o
                                ? l().createElement(la, null)
                                : l().createElement('div', { className: Pa.clanStatus }, Ra.clan.noClan()),
                        ),
                    );
                }),
                wa = 600;
            var ka = a(122);
            const La = 'DowngradeAnimation_base_1c',
                Ma = 'DowngradeAnimation_oldElement_48',
                xa = 'DowngradeAnimation_newElement_d5',
                Ta = ({ oldElement: e, newElement: t, delay: a = 0 }) => (
                    (0, s.useEffect)(() => (0, ka.F)(() => (0, v.G)(R.sounds.achievements_leveldown()), a), [a]),
                    l().createElement(
                        'div',
                        { className: La },
                        l().createElement(
                            'div',
                            { className: Ma, style: { animationDelay: `${a}ms`, animationDuration: '300ms' } },
                            e,
                        ),
                        l().createElement(
                            'div',
                            { className: xa, style: { animationDelay: `${a + 300}ms`, animationDuration: '300ms' } },
                            t,
                        ),
                    )
                ),
                Da = 'LevelUpAnimation_base_8a',
                Ba = 'LevelUpAnimation_particlesAnim_e9',
                Oa = 'LevelUpAnimation_oldElement_08',
                Wa = 'LevelUpAnimation_newElement_4a',
                za = (e) => e * e,
                Ha = ({ oldElement: e, newElement: t, delay: a = 0 }) => {
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
                                (0, ka.F)(() => {
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
                                config: { duration: 1700, easing: za },
                            });
                        }, [u, a]),
                        l().createElement(
                            'div',
                            { className: Da },
                            o &&
                                l().createElement(Lt.n, {
                                    ref: m,
                                    onEnded: () => c(!1),
                                    className: Ba,
                                    src: R.videos.achievements.up_particles(),
                                }),
                            l().createElement('div', { className: Oa, ref: n }, e),
                            l().createElement('div', { className: Wa, ref: r }, t),
                        )
                    );
                },
                $a = 'Content_icon_bd',
                Va = R.images.gui.maps.icons.achievements.rating,
                Ga = (e, t = !1) =>
                    t
                        ? Va.c_180x180
                        : e >= be.cJ.Large
                          ? Va.c_360x360
                          : e >= be.cJ.Medium
                            ? Va.c_280x280
                            : Va.c_180x180,
                Ua = (e, t, a, n = !0, r = !1) => ({
                    backgroundImage: n ? `url(${Ga(a, r).$dyn(`rating_${e}_${t}`)})` : `url(${Ga(a, r).wotpr()})`,
                }),
                ja = (0, ie.Pi)(() => {
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
                                        return l().createElement(Ha, {
                                            oldElement: l().createElement('div', {
                                                className: $a,
                                                style: Ua(n, i, _, o, u),
                                            }),
                                            newElement: l().createElement('div', {
                                                className: $a,
                                                style: Ua(a, r, _, o, u),
                                            }),
                                            delay: 900,
                                        });
                                    case ge.Downgrade:
                                        return l().createElement(Ta, {
                                            oldElement: l().createElement('div', {
                                                className: $a,
                                                style: Ua(n, i, _, o, u),
                                            }),
                                            newElement: l().createElement('div', {
                                                className: $a,
                                                style: Ua(a, r, _, o, u),
                                            }),
                                            delay: wa,
                                        });
                                    case ge.Static:
                                        return l().createElement('div', { className: $a, style: Ua(b, E, _, o, u) });
                                    default:
                                        return null;
                                }
                            })(),
                        )
                    );
                }),
                Fa = {
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
            let Ya;
            !(function (e) {
                (e.Init = 'init'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
            })(Ya || (Ya = {}));
            const qa = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.root.get(),
                        a = t.personalScore,
                        n = t.prevPersonalScore,
                        r = t.isWTREnabled,
                        i = e.computes.getRatingWidgetState,
                        c = (0, s.useState)(Ya.Init),
                        m = c[0],
                        u = c[1],
                        d = i() === ge.LevelUp || i() === ge.Downgrade;
                    return (
                        (0, s.useEffect)(() => {
                            d && (a > n ? u(Ya.Increase) : a < n && u(Ya.Decrease));
                        }, [d, a, n]),
                        l().createElement(
                            'div',
                            { className: o()(Fa.base, Fa[`base__${m}`], !r && Fa.base__wotpr) },
                            d
                                ? l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(
                                          'div',
                                          { className: o()(Fa.prevPoints), style: { animationDelay: '600ms' } },
                                          l().createElement(Pe.A, { value: n }),
                                      ),
                                      l().createElement(
                                          'div',
                                          { className: o()(Fa.newPoints), style: { animationDelay: '600ms' } },
                                          l().createElement(Pe.A, { value: a }),
                                      ),
                                  )
                                : l().createElement(Pe.A, { value: a }),
                        )
                    );
                }),
                Ja = 'RatingWidget_base_dc',
                Xa = 'RatingWidget_image_7d',
                Ka = 'RatingWidget_decoration_9f',
                Za = 'RatingWidget_decoration__otherPlayer_95',
                Qa = 'RatingWidget_particlesBox_8d',
                en = 'RatingWidget_particles_36',
                tn = 'RatingWidget_footer_0e',
                an = 'Status_base_48',
                nn = 'Status_statusText_33',
                rn = 'Status_caption_5f',
                sn = R.strings.achievements_page.ratingWidget.status;
            var ln;
            !(function (e) {
                (e.Initial = 'initial'),
                    (e.Progress = 'progress'),
                    (e.WTRDisabled = 'WTRDisabled'),
                    (e.OtherPlayer = 'otherPlayer'),
                    (e.OtherPlayerWithProgress = 'otherPlayerWithProgress');
            })(ln || (ln = {}));
            const on = (0, ie.Pi)(() => {
                    const e = pe().model.root.get(),
                        t = e.requiredNumberOfBattles,
                        a = e.battlesLeftCount,
                        n = e.isWTREnabled,
                        r = e.isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: an },
                        (() => {
                            switch (
                                ((e, t, a, n) =>
                                    n
                                        ? a
                                            ? ln.OtherPlayerWithProgress
                                            : ln.OtherPlayer
                                        : a
                                          ? e === t
                                              ? ln.Initial
                                              : ln.Progress
                                          : ln.WTRDisabled)(t, a, n, r)
                            ) {
                                case ln.Initial:
                                    return l().createElement(st.z, {
                                        classMix: nn,
                                        text: sn.initial(),
                                        binding: { amount: l().createElement('div', { className: rn }, t) },
                                    });
                                case ln.Progress:
                                    return l().createElement(st.z, {
                                        classMix: nn,
                                        text: sn.progress(),
                                        binding: { amount: l().createElement('div', { className: rn }, a) },
                                    });
                                case ln.WTRDisabled:
                                    return l().createElement(st.z, { classMix: nn, text: sn.withoutWTR() });
                                case ln.OtherPlayer:
                                    return l().createElement(st.z, { classMix: nn, text: sn.otherPlayer() });
                                case ln.OtherPlayerWithProgress:
                                    return l().createElement(st.z, {
                                        classMix: nn,
                                        text: sn.OtherPlayerWithProgress(),
                                        binding: { amount: l().createElement('div', { className: rn }, t) },
                                    });
                                default:
                                    return l().createElement('div', null);
                            }
                        })(),
                    );
                }),
                cn = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.root.get(),
                        a = t.battlesLeftCount,
                        n = t.isWTREnabled,
                        r = t.isOtherPlayer,
                        s = 0 === a,
                        i = (0, e.computes.getRatingWidgetState)() === ge.Downgrade;
                    return l().createElement(
                        We.u,
                        {
                            contentId: n
                                ? R.views.lobby.achievements.tooltips.WTRMainTooltip('resId')
                                : R.views.lobby.achievements.tooltips.WOTPRMainTooltip('resId'),
                        },
                        l().createElement(
                            'div',
                            { className: Ja },
                            l().createElement(
                                'div',
                                { className: Xa },
                                l().createElement('div', { className: o()(Ka, r && Za) }),
                                s &&
                                    l().createElement(
                                        'div',
                                        { className: Qa, style: i ? { animationDelay: '1200ms' } : void 0 },
                                        l().createElement(Lt.n, {
                                            className: en,
                                            src: R.videos.achievements.particles(),
                                            autoplay: !0,
                                            loop: !0,
                                        }),
                                    ),
                                l().createElement(ja, null),
                            ),
                            l().createElement(
                                'div',
                                { className: tn },
                                s ? l().createElement(qa, null) : l().createElement(on, null),
                            ),
                        ),
                    );
                }),
                mn = 'Statistic_base_79',
                un = 'Statistic_list_41',
                dn = 'Statistic_part_90',
                _n = 'Statistic_item_87',
                gn = 'Statistic_ratingWidget_9d',
                vn = 'StatisticItem_base_d9',
                fn = 'StatisticItem_icon_4e',
                pn = 'StatisticItem_amount_de',
                bn = 'StatisticItem_title_f7',
                En = 'StatisticItem_caption_65',
                hn = 'StatisticItem_footer_61',
                yn = 'StatisticItem_footerText_2f',
                Nn = R.strings.achievements_page.summary,
                Sn = (e, t, a) =>
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
                Cn = (0, s.memo)(({ type: e, mainValue: t, additionalValue: a, isOtherPlayer: n }) => {
                    const r = (0, be.GS)().mediaSize;
                    return l().createElement(
                        We.u,
                        { contentId: R.views.lobby.achievements.tooltips.KPITooltip('resId'), args: { kpiType: e } },
                        l().createElement(
                            'div',
                            { className: vn },
                            l().createElement('div', { className: fn, style: Sn(e, r, n) }),
                            l().createElement('div', { className: pn }, t),
                            l().createElement('div', { className: bn }, Nn.main.$dyn(e)),
                            l().createElement(
                                'div',
                                { className: hn },
                                l().createElement(st.z, {
                                    classMix: yn,
                                    text: Nn.additional.$dyn(e),
                                    binding: { value: l().createElement('div', { className: En }, a) },
                                }),
                            ),
                        ),
                    );
                }),
                An = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.computes,
                        a = Math.floor(t.getStatisticList().length / 2),
                        n = t.getStatisticList().slice(0, a),
                        r = t.getStatisticList().slice(a);
                    return l().createElement(
                        'div',
                        { className: mn },
                        l().createElement(
                            'div',
                            { className: un },
                            l().createElement(
                                'div',
                                { className: dn },
                                n.map(({ type: t, mainValue: a, additionalValue: n }, r) =>
                                    l().createElement(
                                        'div',
                                        { className: _n, key: r },
                                        l().createElement(Cn, {
                                            type: t,
                                            mainValue: a,
                                            additionalValue: n,
                                            isOtherPlayer: e.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                            l().createElement('div', { className: gn }, l().createElement(cn, null)),
                            l().createElement(
                                'div',
                                { className: dn },
                                r.map(({ type: t, mainValue: a, additionalValue: n }, r) =>
                                    l().createElement(
                                        'div',
                                        { className: _n, key: r },
                                        l().createElement(Cn, {
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
                Pn = 'Content_base_3e',
                Rn = 'Content_base__otherPlayer_61',
                In = 'Content_header_2d',
                wn = 'Content_statistic_6c',
                kn = 'Content_playerInfo_62',
                Ln = (0, ie.Pi)(() => {
                    const e = pe().model.root.get(),
                        t = e.isWTREnabled,
                        a = e.isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: o()(Pn, a && Rn) },
                        l().createElement('div', { className: In }, l().createElement(wt, { isWTREnabled: t })),
                        l().createElement('div', { className: wn }, l().createElement(An, null)),
                        l().createElement(At, null),
                        a && l().createElement('div', { className: kn }, l().createElement(Ia, null)),
                    );
                }),
                Mn = 'Error_base_e9',
                xn = 'Error_icon_51',
                Tn = 'Error_title_fe',
                Dn = 'Error_description_85',
                Bn = 'Error_caption_74',
                On = R.strings.achievements_page.summary.disabled,
                Wn = (0, ie.Pi)(() => {
                    const e = pe().model.root.get().isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: Mn },
                        l().createElement('div', { className: xn }),
                        e
                            ? l().createElement('div', { className: Bn }, On.otherPlayer.caption())
                            : l().createElement(
                                  l().Fragment,
                                  null,
                                  l().createElement('div', { className: Tn }, On.title()),
                                  l().createElement('div', { className: Dn }, On.description()),
                              ),
                    );
                }),
                zn = 'App_base_bb',
                Hn = 'App_base__withScroll_05',
                $n = 'App_scroll_be',
                Vn = 'App_scrollContent_2a',
                Gn = 'App_bar_52',
                Un = 'App_content_13',
                jn = 'App_footer_b9',
                Fn = 'App_errorWrapper_65',
                Yn = 'App_error_a2',
                qn = R.strings.achievements_page.summary.accountInfo,
                Jn = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                Xn = (0, ie.Pi)(() => {
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
                            config: { duration: 200, easing: Jn },
                        }),
                        m = (0, le.uF)(qn.registrationDate(), { registrationDate: t }),
                        u = (0, le.uF)(qn.lastVisit(), { lastVisitDate: a, lastVisitTime: n });
                    return l().createElement(
                        E.animated.div,
                        { className: o()(zn, s && r && Hn), style: c },
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
                                                { api: i, className: $n, classNames: { content: Vn } },
                                                l().createElement(
                                                    'div',
                                                    { className: Un },
                                                    l().createElement(Ln, null),
                                                ),
                                            ),
                                            l().createElement(se.Vertical.Bar, { api: i, classNames: { base: Gn } }),
                                        )
                                      : l().createElement(Ln, null),
                                  l().createElement(
                                      'div',
                                      { className: jn },
                                      `${(0, oe.PI)(m)}${a && n ? (0, oe.PI)(u) : ''}`,
                                  ),
                              )
                            : l().createElement(
                                  'div',
                                  { className: Fn },
                                  l().createElement('div', { className: Yn }, l().createElement(Wn, null)),
                              ),
                    );
                }),
                Kn = () =>
                    l().createElement(fe, { options: { context: 'model.summaryModel' } }, l().createElement(Xn, null));
        },
    },
]);
