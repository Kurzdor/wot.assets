'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [154],
    {
        7910: (e, t, a) => {
            a.r(t), a.d(t, { default: () => qn });
            var n = {};
            a.r(n),
                a.d(n, {
                    Area: () => $,
                    Bar: () => O,
                    DefaultScroll: () => z,
                    Direction: () => h,
                    defaultSettings: () => y,
                    useHorizontalScrollApi: () => S,
                });
            var r = {};
            a.r(r), a.d(r, { Area: () => re, Bar: () => te, Default: () => ne, useVerticalScrollApi: () => H });
            var s = a(6179),
                l = a.n(s),
                i = a(6483),
                o = a.n(i),
                c = a(1856),
                m = a(7515),
                u = a(3138);
            const d = [];
            function g(e) {
                const t = (0, s.useRef)(e);
                return (
                    (0, s.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, s.useCallback)((...e) => (0, t.current)(...e), d)
                );
            }
            function _(e, t, a = []) {
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
                        if (e) {
                            if ('string' == typeof e) return p(e, t);
                            var a = {}.toString.call(e).slice(8, -1);
                            return (
                                'Object' === a && e.constructor && (a = e.constructor.name),
                                'Map' === a || 'Set' === a
                                    ? Array.from(e)
                                    : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                      ? p(e, t)
                                      : void 0
                            );
                        }
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
                for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
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
                            _ = (0, s.useRef)(null),
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
                                    const t = _.current;
                                    t && (a(t, e), p.trigger('change', e), l && h());
                                },
                                onRest: (e) => p.trigger('rest', e),
                                onStart: (e) => p.trigger('start', e),
                                onPause: (e) => p.trigger('pause', e),
                            })),
                            S = N[0],
                            A = N[1],
                            C = (0, s.useCallback)(
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
                                    const n = _.current;
                                    n &&
                                        A.start({
                                            scrollPosition: i(n, e),
                                            immediate: t,
                                            reset: a,
                                            config: d.animationConfig,
                                            from: { scrollPosition: i(n, S.scrollPosition.get()) },
                                        });
                                },
                                [A, d.animationConfig, S.scrollPosition],
                            ),
                            R = (0, s.useCallback)(
                                (e) => {
                                    const t = _.current,
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
                                        s = C(t, e, n);
                                    P(s);
                                },
                                [P, C, d.step],
                            ),
                            I = (0, s.useCallback)(
                                (e) => {
                                    0 !== e.deltaY && R(n(e)),
                                        _.current && p.trigger('mouseWheel', e, S.scrollPosition, t(_.current));
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
                                        const e = _.current;
                                        e &&
                                            (P(i(e, S.scrollPosition.goal), { immediate: !0 }),
                                            p.trigger('resizeHandled'));
                                    }),
                                [P, S.scrollPosition.goal],
                            ),
                            L = g(() => {
                                const e = _.current;
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
                                getContainerSize: () => (_.current ? e(_.current) : void 0),
                                getBounds: () =>
                                    _.current
                                        ? t(_.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: d.step.clampedArrowStepTimeout,
                                clampPosition: i,
                                handleMouseWheel: I,
                                applyScroll: P,
                                applyStepTo: R,
                                contentRef: _,
                                wrapperRef: v,
                                scrollPosition: A,
                                animationScroll: S,
                                recalculateContent: L,
                                events: { on: p.on, off: p.off },
                            }),
                            [S.scrollPosition, P, R, p.off, p.on, L, I, A, d.step.clampedArrowStepTimeout],
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
                A = 'HorizontalBar_base_49',
                C = 'HorizontalBar_base__nonActive_82',
                P = 'HorizontalBar_leftButton_5f',
                I = 'HorizontalBar_rightButton_03',
                w = 'HorizontalBar_track_0d',
                L = 'HorizontalBar_thumb_fd',
                M = 'HorizontalBar_rail_32',
                x = 'disable',
                T = { pending: !1, offset: 0 },
                k = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                B = () => {},
                D = (e, t) => Math.max(20, e.offsetWidth * t),
                O = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = k, onDrag: n = B }) => {
                    const r = (0, s.useRef)(null),
                        i = (0, s.useRef)(null),
                        d = (0, s.useRef)(null),
                        f = (0, s.useRef)(null),
                        p = (0, s.useRef)(null),
                        b = e.stepTimeout || 100,
                        E = (0, s.useState)(T),
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
                                c = (t.offsetWidth - D(t, l)) * o;
                            (a.style.transform = `translateX(${0 | c}px)`),
                                ((e) => {
                                    if (i.current && d.current && f.current && p.current) {
                                        if (0 === e)
                                            return i.current.classList.add(x), void d.current.classList.remove(x);
                                        if (
                                            ((t = f.current),
                                            (a = p.current),
                                            e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                        )
                                            return i.current.classList.remove(x), void d.current.classList.add(x);
                                        var t, a;
                                        i.current.classList.remove(x), d.current.classList.remove(x);
                                    }
                                })(c);
                        },
                        O = g(() => {
                            (() => {
                                const t = p.current,
                                    a = f.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(s && t && n && a)) return;
                                const l = Math.min(1, n / s);
                                (t.style.width = `${D(a, l)}px`),
                                    (t.style.display = 'flex'),
                                    r.current && (1 === l ? r.current.classList.add(C) : r.current.classList.remove(C));
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
                                    t(), S(T);
                                });
                            return () => {
                                t(), a();
                            };
                        }, [e, y.offset, y.pending, n, S]);
                    const W = _((t) => e.applyStepTo(t), b, [e]),
                        z = W[0],
                        $ = W[1];
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mouseup', $, !0),
                            () => document.removeEventListener('mouseup', $, !0)
                        ),
                        [$],
                    );
                    const H = (e) => {
                        e.target.classList.contains(x) || (0, v.G)('highlight');
                    };
                    return l().createElement(
                        'div',
                        { className: o()(A, t.base), ref: r, onWheel: e.handleMouseWheel },
                        l().createElement('div', {
                            className: o()(P, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(x) || 0 !== e.button || ((0, v.G)('play'), z(h.Next));
                            },
                            onMouseUp: $,
                            ref: i,
                            onMouseEnter: H,
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
                                onMouseEnter: H,
                            },
                            l().createElement('div', { ref: p, className: o()(L, t.thumb) }),
                            l().createElement('div', { className: o()(M, t.rail) }),
                        ),
                        l().createElement('div', {
                            className: o()(I, t.rightButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(x) || 0 !== e.button || ((0, v.G)('play'), z(h.Prev));
                            },
                            onMouseUp: $,
                            ref: d,
                            onMouseEnter: H,
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
                        g = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return l().createElement(
                        'div',
                        { className: o()(W.defaultScroll, a), onWheel: t.handleMouseWheel },
                        l().createElement(
                            'div',
                            { className: o()(W.defaultScrollArea, r) },
                            l().createElement($, { className: c, api: g, classNames: i }, e),
                        ),
                        l().createElement(O, { getStepByRailClick: m, api: t, onDrag: u, classNames: d }),
                    );
                },
                $ = ({ api: e, className: t, classNames: a, children: n }) => (
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
            ($.Bar = O), ($.Default = z);
            const H = N({
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
                        A = g(() => {
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
                        C = g(() => {
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
                        P = g(() => {
                            Q(e, () => {
                                A(), C();
                            });
                        });
                    (0, s.useEffect)(() => (0, c.v)(P)),
                        (0, s.useEffect)(() => {
                            const t = () => {
                                Q(e, () => {
                                    C();
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
                    const R = _((t) => e.applyStepTo(t), b, [e]),
                        I = R[0],
                        w = R[1];
                    (0, s.useEffect)(
                        () => (
                            document.addEventListener('mouseup', w, !0),
                            () => document.removeEventListener('mouseup', w, !0)
                        ),
                        [w],
                    );
                    const L = (e) => {
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
                            onMouseEnter: L,
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
                                onMouseEnter: L,
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
                            onMouseEnter: L,
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
                        g = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return l().createElement(
                        'div',
                        { className: o()(ae.defaultScroll, a), onWheel: t.handleMouseWheel },
                        l().createElement(
                            'div',
                            { className: o()(ae.area, r) },
                            l().createElement(re, { className: i, classNames: c, api: g }, e),
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
                ge = a(3946);
            let _e;
            !(function (e) {
                (e.Init = 'init'), (e.Static = 'static'), (e.LevelUp = 'levelUp'), (e.Downgrade = 'downgrade');
            })(_e || (_e = {}));
            const ve = (0, me.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                otherPlayerInfo: e.object('otherPlayerInfo'),
                                dogTagModel: e.object('otherPlayerInfo.dogTagModel'),
                                statistic: e.array('statistic'),
                                significantAchievements: e.array('significantAchievements'),
                            },
                            a = (0, ge.Om)(
                                () => de.UI(t.statistic.get(), (e) => Object.assign({}, e, { type: e.type })),
                                { equals: ue.jv },
                            ),
                            n = (0, ge.Om)(
                                () =>
                                    Array(t.root.get().achievementRibbonLength)
                                        .fill({})
                                        .map((e, a) => de.U2(t.significantAchievements.get(), a)),
                                { equals: ue.jv },
                            ),
                            r = (0, ge.Om)(() => {
                                const e = t.root.get(),
                                    a = e.currentRatingRank,
                                    n = e.prevCurrentRatingRank,
                                    r = e.currentRatingSubRank,
                                    s = e.prevCurrentRatingSubRank,
                                    l = e.isWTREnabled,
                                    i = e.isOtherPlayer,
                                    o = e.battlesLeftCount;
                                if (!l || i || o > 0) return _e.Static;
                                if (a === n) {
                                    if (r > s) return _e.LevelUp;
                                    if (r < s) return _e.Downgrade;
                                }
                                return a > n ? _e.LevelUp : a < n ? _e.Downgrade : _e.Static;
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
            let Ne, Se, Ae;
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
                })(Ae || (Ae = {}));
            const Ce = {
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
            const Le = ({ value: e, type: t = Se.Simple, size: a = we.Medium, className: n }) =>
                    l().createElement(
                        'div',
                        { className: o()(Ie.base, Ie[`base__${t}`], Ie[`base__${a}`], n) },
                        l().createElement(
                            'div',
                            { className: Ie.background },
                            l().createElement(
                                'div',
                                { className: Ie.count },
                                t === Se.Stages
                                    ? (0, Re.HG)(e)
                                    : l().createElement(Pe.A, { value: e, format: 'integral' }),
                            ),
                            t === Se.Series &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: o()(Ie.arrow, Ie.arrow__left) }),
                                    l().createElement('div', { className: o()(Ie.arrow, Ie.arrow__right) }),
                                ),
                        ),
                    ),
                Me = R.images.gui.maps.icons.achievement,
                xe =
                    (R.strings.achievements,
                    ({ name: e, resourceName: t, type: a, rareIconId: n, rareBigIconId: r, value: s, size: l }) => {
                        if (n && r) return l === Ae.ExtraSmall ? n : r;
                        const i = viewEnv.getScale(),
                            o = ((e, t, a, n) => (a === Ne.Class ? `${e}${n}` : e.match(/^\d/) ? `c_${e}` : t))(
                                e,
                                t,
                                a,
                                s,
                            );
                        return l === Ae.ExtraSmall && i < 2 ? Me.$dyn(o) : Me.big.$dyn(o);
                    }),
                Te = {
                    [Ae.ExtraSmall]: we.Small,
                    [Ae.Small]: we.Small,
                    [Ae.Medium]: we.Medium,
                    [Ae.Large]: we.Medium,
                    [Ae.ExtraLarge]: we.Large,
                },
                ke = ({
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
                    const g = xe({
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
                            { className: o()(Ce.base, Ce[`base__${s}`], d) },
                            l().createElement(
                                'div',
                                { className: Ce.image, style: { backgroundImage: `url(${g})` } },
                                r !== Se.None &&
                                    l().createElement(Le, { type: r, size: Te[s], value: i, className: Ce.counter }),
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
                    [be.cJ.ExtraSmall]: Ae.Small,
                    [be.cJ.Small]: Ae.Small,
                    [be.cJ.Medium]: Ae.Large,
                    [be.cJ.Large]: Ae.Large,
                    [be.cJ.ExtraLarge]: Ae.ExtraLarge,
                },
                $e = 'Achievements_base_96',
                He = 'Achievements_base__visibleWithAnimation_0a',
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
                onMouseDown: g,
                onMouseUp: _,
                onMouseLeave: f,
                onClick: p,
            }) => {
                const b = (0, s.useRef)(null),
                    E = (0, s.useState)(a),
                    h = E[0],
                    y = E[1],
                    N = (0, s.useState)(!1),
                    S = N[0],
                    A = N[1];
                return (
                    (0, s.useEffect)(() => {
                        function e(e) {
                            h && null !== b.current && !b.current.contains(e.target) && y(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [h]),
                    (0, s.useEffect)(() => {
                        y(a);
                    }, [a]),
                    l().createElement(
                        'div',
                        {
                            ref: b,
                            className: o()(
                                Ke.base,
                                Ke[`base__${n}`],
                                r && Ke.base__disabled,
                                t && Ke[`base__${t}`],
                                h && Ke.base__focus,
                                S && Ke.base__highlightActive,
                                i,
                            ),
                            onMouseEnter: function (e) {
                                r || (null !== c && (0, v.G)(c), u && u(e));
                            },
                            onMouseMove: function (e) {
                                d && d(e);
                            },
                            onMouseUp: function (e) {
                                r || (_ && _(e), A(!1));
                            },
                            onMouseDown: function (e) {
                                r ||
                                    (null !== m && (0, v.G)(m),
                                    g && g(e),
                                    a && (r || (b.current && (b.current.focus(), y(!0)))),
                                    A(!0));
                            },
                            onMouseLeave: function (e) {
                                r || (f && f(e), A(!1));
                            },
                            onClick: function (e) {
                                r || (p && p(e));
                            },
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
                            { className: o()(Ke.state, Ke.state__default) },
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
            const tt = et;
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
            const gt = 'Mastery_base_a0',
                _t = 'Mastery_masteryIcon_17',
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
                            { className: gt },
                            l().createElement('div', { className: o()(_t, t && vt) }),
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
                    (ht = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    ht.apply(null, arguments)
                );
            }
            const yt = (e) => {
                    e.target === e.currentTarget && (0, v.G)(R.sounds.achievements_medal());
                },
                Nt = (0, ie.Pi)(() => {
                    const e = pe().model,
                        t = e.computes,
                        a = e.root.get(),
                        n = a.editState,
                        r = a.isSuccessfullyEdited,
                        s = a.isOtherPlayer,
                        i = a.isEditOpened,
                        c = (0, be.GS)().mediaSize;
                    let m = 0;
                    const u = s ? Ae.Small : ze[c],
                        d = n === ce.AVAILABLE && r;
                    return l().createElement(
                        'div',
                        { className: o()($e, d && je, !i && d && He, i && Ve) },
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
                                                              l().createElement(ke, ht({}, e, { size: u })),
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
                                                    : l().createElement(ke, ht({}, e, { size: u }))
                                                : l().createElement(We, { size: u, isOtherPlayer: s });
                                        })(),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                St = 'Header_base_90',
                At = 'Header_iconInfo_20',
                Ct = R.strings.achievements_page.summary,
                Pt = ({ isWTREnabled: e }) =>
                    e
                        ? l().createElement(
                              Be.u,
                              { contentId: R.views.lobby.achievements.tooltips.WTRInfoTooltip('resId') },
                              l().createElement(
                                  'div',
                                  { className: St },
                                  Ct.statistic.title(),
                                  l().createElement('div', { className: At }),
                              ),
                          )
                        : l().createElement('div', { className: St }, Ct.withoutWTR.statistic.title());
            var Rt = a(5959),
                It = a(8432);
            const wt = 'DogTag_base_2b',
                Lt = 'DogTag_engraving_eb',
                Mt = 'DogTag_background_7f',
                xt = R.strings.settings.LANGUAGE_CODE(),
                Tt = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
            let kt;
            !(function (e) {
                (e.Small = 'small'), (e.Big = 'big');
            })(kt || (kt = {}));
            const Bt = ({ background: e, engraving: t, size: a = kt.Big, grade: n = 0, className: r }) => {
                    const s = Tt.includes(xt) ? `_${xt}` : '';
                    return l().createElement(
                        'div',
                        { className: o()(wt, r) },
                        l().createElement('div', {
                            className: Mt,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${a}.backgrounds.background_${e}_0)`,
                            },
                        }),
                        l().createElement('div', {
                            className: Lt,
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
            const $t = ({ engraving: e, count: t, size: a }) => {
                const n = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                return l().createElement(
                    'div',
                    { className: o()(Wt.base, Wt[`base__${a}`]) },
                    l().createElement('div', { className: Wt.text }, n),
                    l().createElement('div', { className: Wt.count }, t),
                );
            };
            let Ht, Vt;
            !(function (e) {
                (e.Static = 'static'),
                    (e.Intro = 'intro'),
                    (e.AutoShowing = 'autoShowing'),
                    (e.Showing = 'showing'),
                    (e.Loop = 'loop'),
                    (e.Hiding = 'hiding');
            })(Ht || (Ht = {})),
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
                    animationState: n = Ht.Static,
                    animationName: r = '',
                    onAnimationEnd: i,
                    grade: m = 0,
                    showBackplate: u = !0,
                    size: d = Vt.Medium,
                    className: g,
                    isSoundOff: _,
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
                    const N = (0, E.useSpring)(() => ({ from: { opacity: 0 }, config: Gt }), [n]),
                        S = N[0],
                        A = N[1],
                        C = (0, E.useSpring)(() => ({
                            from: { opacity: 0, transform: 'translateY(-50%)' },
                            config: Gt,
                            onRest: () => {
                                n === Ht.Hiding && (null == i || i());
                            },
                        })),
                        P = C[0],
                        I = C[1],
                        w = (0, s.useCallback)(() => {
                            var e;
                            null == (e = f.current) || e.play(),
                                I.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                !_ && (0, v.G)(R.sounds.$dyn(Ft[r]));
                        }, [r, I, _]);
                    (0, s.useEffect)(
                        () =>
                            (0, c.v)(() => {
                                switch (n) {
                                    case Ht.Intro:
                                        return void A.start({ to: { opacity: 1 }, immediate: !1 });
                                    case Ht.AutoShowing:
                                        return A.start({ to: { opacity: 1 }, immediate: !1 }), void w();
                                    case Ht.Showing:
                                        return void w();
                                    case Ht.Loop:
                                        return (
                                            L(),
                                            A.start({ to: { opacity: 1 }, immediate: !0 }),
                                            void I.start({
                                                to: { opacity: 1, transform: 'translateY(0%)' },
                                                immediate: !0,
                                            })
                                        );
                                    case Ht.Hiding:
                                        return (
                                            A.start({ to: { opacity: 0 } }),
                                            void I.start({
                                                to: { opacity: 0, transform: 'translateY(-50%)' },
                                                immediate: !1,
                                            })
                                        );
                                    case Ht.Static:
                                        A.start({ to: { opacity: 1 }, immediate: !0 }),
                                            I.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !0 });
                                }
                            }),
                        [n, I, A, w],
                    );
                    const L = () => {
                        f.current && (f.current.goToAndPlay(5), (0, v.G)(R.sounds.ach_dog_tag_idle()));
                    };
                    return l().createElement(
                        E.animated.div,
                        { className: o()(Dt.base, Dt[`base__${d}`], g), style: S },
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
                                    l().createElement($t, { engraving: t, count: a, size: Ut[d] }),
                                ),
                            ),
                        l().createElement('div', { className: Dt.shadow }),
                        n !== Ht.Static &&
                            Rt.graphicsQuality.isHigh() &&
                            Boolean(y) &&
                            l().createElement(
                                'div',
                                { className: Dt.videoBox },
                                l().createElement(It.n, {
                                    ref: f,
                                    className: Dt.video,
                                    onEnded: L,
                                    isPrebufferKeyframes: Boolean(b.length),
                                    src: y,
                                }),
                            ),
                        l().createElement(Bt, {
                            background: e,
                            engraving: t,
                            grade: m,
                            size: kt.Big,
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
                        o = n.clanJoiningTime,
                        c = n.showClanButton;
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
                        c &&
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
                    (ca = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    ca.apply(null, arguments)
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
                        g = void 0 === d ? r - 1 : d,
                        _ = e.loop,
                        v = void 0 === _ ? la : _,
                        f = e.state,
                        p = void 0 === f ? ia : f,
                        b = e.onAnimationDone,
                        E = e.onAnimationComplete,
                        h = e.poster,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    a[n] = e[n];
                                }
                            return a;
                        })(e, oa);
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
                                        const e = ga(u, g, n),
                                            t = ua(u, g),
                                            r = window.setInterval(() => {
                                                const n = t(),
                                                    s = e.get(n);
                                                s
                                                    ? (null == i || i(n, s),
                                                      a(s),
                                                      n === g &&
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
                        }, [c, n, u, g, v, i, E, b, h, p]),
                        l().createElement('canvas', ca({}, y, { width: t, height: a, ref: N }))
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
                ga = (e, t, a) => {
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
                _a = 'DogTag_base_75',
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
                Na = (0, ie.Pi)(() => {
                    const e = pe().model.dogTagModel.get(),
                        t = e.background,
                        a = e.engraving,
                        n = e.isHighlighted,
                        r = e.engravingCompId,
                        s = e.backgroundCompId;
                    return l().createElement(
                        'div',
                        { className: _a },
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
                Sa = {
                    base: 'PlayerInfo_base_ed',
                    dogTag: 'PlayerInfo_dogTag_17',
                    iconLock: 'PlayerInfo_iconLock_ab',
                    dogTagStatus: 'PlayerInfo_dogTagStatus_f8',
                    separator: 'PlayerInfo_separator_83',
                    clan: 'PlayerInfo_clan_87',
                    animatedDogTag: 'PlayerInfo_animatedDogTag_5f',
                },
                Aa = R.strings.achievements_page.playerInfo,
                Ca = (0, ie.Pi)(() => {
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
                        { className: Sa.base },
                        l().createElement(
                            'div',
                            { className: Sa.dogTag },
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
                                                className: Sa.animatedDogTag,
                                            },
                                            l().createElement(Yt, {
                                                background: r,
                                                engraving: s,
                                                size: Vt.ExtraSmall,
                                                showBackplate: !1,
                                                animationName: i,
                                                animationState: Ht.Loop,
                                            }),
                                        );
                                    case a && !c:
                                        return l().createElement(Na, null);
                                    default:
                                        return l().createElement(
                                            l().Fragment,
                                            null,
                                            l().createElement('div', { className: Sa.iconLock }),
                                            l().createElement(
                                                'div',
                                                { className: Sa.dogTagStatus },
                                                Aa.dogTag.unavailable(),
                                            ),
                                        );
                                }
                            })(),
                        ),
                        l().createElement('div', { className: Sa.separator }),
                        l().createElement(
                            'div',
                            { className: Sa.clan },
                            o
                                ? l().createElement(na, null)
                                : l().createElement('div', { className: Sa.clanStatus }, Aa.clan.noClan()),
                        ),
                    );
                }),
                Pa = 600;
            var Ra = a(122);
            const Ia = 'DowngradeAnimation_base_1c',
                wa = 'DowngradeAnimation_oldElement_48',
                La = 'DowngradeAnimation_newElement_d5',
                Ma = ({ oldElement: e, newElement: t, delay: a = 0 }) => (
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
                            { className: La, style: { animationDelay: `${a + 300}ms`, animationDuration: '300ms' } },
                            t,
                        ),
                    )
                ),
                xa = 'LevelUpAnimation_base_8a',
                Ta = 'LevelUpAnimation_particlesAnim_e9',
                ka = 'LevelUpAnimation_oldElement_08',
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
                            { className: xa },
                            o &&
                                l().createElement(It.n, {
                                    ref: m,
                                    onEnded: () => c(!1),
                                    className: Ta,
                                    src: R.videos.achievements.up_particles(),
                                }),
                            l().createElement('div', { className: ka, ref: n }, e),
                            l().createElement('div', { className: Ba, ref: r }, t),
                        )
                    );
                },
                Wa = 'Content_icon_bd',
                za = R.images.gui.maps.icons.achievements.rating,
                $a = (e, t = !1) =>
                    t
                        ? za.c_180x180
                        : e >= be.cJ.Large
                          ? za.c_360x360
                          : e >= be.cJ.Medium
                            ? za.c_280x280
                            : za.c_180x180,
                Ha = (e, t, a, n = !0, r = !1) => ({
                    backgroundImage: n ? `url(${$a(a, r).$dyn(`rating_${e}_${t}`)})` : `url(${$a(a, r).wotpr()})`,
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
                        g = (0, be.GS)().mediaSize,
                        _ = (0, s.useState)(_e.Init),
                        v = _[0],
                        f = _[1],
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
                                    case _e.LevelUp:
                                        return l().createElement(Oa, {
                                            oldElement: l().createElement('div', {
                                                className: Wa,
                                                style: Ha(n, i, g, o, u),
                                            }),
                                            newElement: l().createElement('div', {
                                                className: Wa,
                                                style: Ha(a, r, g, o, u),
                                            }),
                                            delay: 900,
                                        });
                                    case _e.Downgrade:
                                        return l().createElement(Ma, {
                                            oldElement: l().createElement('div', {
                                                className: Wa,
                                                style: Ha(n, i, g, o, u),
                                            }),
                                            newElement: l().createElement('div', {
                                                className: Wa,
                                                style: Ha(a, r, g, o, u),
                                            }),
                                            delay: Pa,
                                        });
                                    case _e.Static:
                                        return l().createElement('div', { className: Wa, style: Ha(b, E, g, o, u) });
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
                        d = i() === _e.LevelUp || i() === _e.Downgrade;
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
                        i = (0, e.computes.getRatingWidgetState)() === _e.Downgrade;
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
                gn = 'StatisticItem_icon_4e',
                _n = 'StatisticItem_amount_de',
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
                            l().createElement('div', { className: gn, style: hn(e, r, n) }),
                            l().createElement('div', { className: _n }, t),
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
                Nn = (0, ie.Pi)(() => {
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
                Sn = 'Content_base_3e',
                An = 'Content_base__otherPlayer_61',
                Cn = 'Content_header_2d',
                Pn = 'Content_statistic_6c',
                Rn = 'Content_playerInfo_62',
                In = (0, ie.Pi)(() => {
                    const e = pe().model.root.get(),
                        t = e.isWTREnabled,
                        a = e.isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: o()(Sn, a && An) },
                        l().createElement('div', { className: Cn }, l().createElement(Pt, { isWTREnabled: t })),
                        l().createElement('div', { className: Pn }, l().createElement(Nn, null)),
                        l().createElement(Nt, null),
                        a && l().createElement('div', { className: Rn }, l().createElement(Ca, null)),
                    );
                }),
                wn = 'Error_base_e9',
                Ln = 'Error_icon_51',
                Mn = 'Error_title_fe',
                xn = 'Error_description_85',
                Tn = 'Error_caption_74',
                kn = R.strings.achievements_page.summary.disabled,
                Bn = (0, ie.Pi)(() => {
                    const e = pe().model.root.get().isOtherPlayer;
                    return l().createElement(
                        'div',
                        { className: wn },
                        l().createElement('div', { className: Ln }),
                        e
                            ? l().createElement('div', { className: Tn }, kn.otherPlayer.caption())
                            : l().createElement(
                                  l().Fragment,
                                  null,
                                  l().createElement('div', { className: Mn }, kn.title()),
                                  l().createElement('div', { className: xn }, kn.description()),
                              ),
                    );
                }),
                Dn = 'App_base_bb',
                On = 'App_base__withScroll_05',
                Wn = 'App_scroll_be',
                zn = 'App_scrollContent_2a',
                $n = 'App_bar_52',
                Hn = 'App_content_13',
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
                        i = H(),
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
                                                    { className: Hn },
                                                    l().createElement(In, null),
                                                ),
                                            ),
                                            l().createElement(se.Vertical.Bar, { api: i, classNames: { base: $n } }),
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
