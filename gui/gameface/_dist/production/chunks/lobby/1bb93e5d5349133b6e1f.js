'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [312],
    {
        8312: (u, e, t) => {
            t.r(e), t.d(e, { default: () => Vn });
            var n = {};
            t.r(n),
                t.d(n, {
                    Area: () => W,
                    Bar: () => M,
                    DefaultScroll: () => H,
                    Direction: () => _,
                    defaultSettings: () => f,
                    useHorizontalScrollApi: () => p,
                });
            var a = {};
            t.r(a), t.d(a, { Area: () => au, Bar: () => eu, Default: () => nu, useVerticalScrollApi: () => z });
            var r = t(6179),
                s = t.n(r),
                o = t(6483),
                l = t.n(o);
            const i = (u) => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                (t = null), (e = u());
                            });
                        })),
                        () => {
                            'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                        }
                    );
                },
                c = (u, e, t) => (t < u ? u : t > e ? e : t),
                E = [];
            function A(u) {
                const e = (0, r.useRef)(u);
                return (
                    (0, r.useLayoutEffect)(() => {
                        e.current = u;
                    }),
                    (0, r.useCallback)((...u) => (0, e.current)(...u), E)
                );
            }
            function F(u, e, t = []) {
                const n = (0, r.useRef)(0),
                    a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                (0, r.useEffect)(() => a, [a]);
                const s = (null != t ? t : []).concat([e]);
                return [
                    (0, r.useCallback)((t) => {
                        (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                    }, s),
                    a,
                ];
            }
            function m(u) {
                engine.call('PlaySound', u);
            }
            var D = t(3138);
            function B(u, e) {
                var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                if (t) return (t = t.call(u)).next.bind(t);
                if (
                    Array.isArray(u) ||
                    (t = (function (u, e) {
                        if (!u) return;
                        if ('string' == typeof u) return C(u, e);
                        var t = Object.prototype.toString.call(u).slice(8, -1);
                        'Object' === t && u.constructor && (t = u.constructor.name);
                        if ('Map' === t || 'Set' === t) return Array.from(u);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return C(u, e);
                    })(u)) ||
                    (e && u && 'number' == typeof u.length)
                ) {
                    t && (u = t);
                    var n = 0;
                    return function () {
                        return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            function C(u, e) {
                (null == e || e > u.length) && (e = u.length);
                for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                return n;
            }
            function d(u, e, t) {
                const n = (0, r.useMemo)(
                    () =>
                        (function (u, e, t, n) {
                            let a,
                                r = !1,
                                s = 0;
                            function o() {
                                a && clearTimeout(a);
                            }
                            function l(...l) {
                                const i = this,
                                    c = Date.now() - s;
                                function E() {
                                    (s = Date.now()), t.apply(i, l);
                                }
                                r ||
                                    (n && !a && E(),
                                    o(),
                                    void 0 === n && c > u
                                        ? E()
                                        : !0 !== e &&
                                          (a = setTimeout(
                                              n
                                                  ? function () {
                                                        a = void 0;
                                                    }
                                                  : E,
                                              void 0 === n ? u - c : u,
                                          )));
                            }
                            return (
                                'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                                (l.cancel = function () {
                                    o(), (r = !0);
                                }),
                                l
                            );
                        })(t, u),
                    e,
                );
                return (0, r.useEffect)(() => n.cancel, [n]), n;
            }
            var g = t(7030);
            let _;
            !(function (u) {
                (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
            })(_ || (_ = {}));
            const f = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                },
                v = ({
                    getContainerSize: u,
                    getBounds: e,
                    setScrollPosition: t,
                    getDirection: n,
                    getWrapperSize: a,
                    triggerMouseMoveOnUpdate: s = !1,
                }) => {
                    const o = (u, t) => {
                        const n = e(u),
                            a = n[0],
                            r = n[1];
                        return c(a, r, t);
                    };
                    return (l = {}) => {
                        const c = l.settings,
                            E = void 0 === c ? f : c,
                            F = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            C = (() => {
                                const u = (0, r.useMemo)(() => ({}), []),
                                    e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                    t = (u, t) => {
                                        e(u).set(t, t);
                                    },
                                    n = (u, t) => {
                                        e(u).delete(t);
                                    },
                                    a = (u, ...t) => {
                                        for (var n, a = B(e(u).values()); !(n = a()).done; ) (0, n.value)(...t);
                                    };
                                return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                            })(),
                            _ = d(
                                () => {
                                    D.O.view.forceTriggerMouseMove();
                                },
                                [],
                                150,
                            ),
                            v = (0, g.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (u) => {
                                    const e = F.current;
                                    e && (t(e, u), C.trigger('change', u), s && _());
                                },
                                onRest: (u) => C.trigger('rest', u),
                                onStart: (u) => C.trigger('start', u),
                                onPause: (u) => C.trigger('pause', u),
                            })),
                            p = v[0],
                            h = v[1],
                            b = (0, r.useCallback)(
                                (u, e, t) => {
                                    var n;
                                    const a = p.scrollPosition.get(),
                                        r = (null != (n = p.scrollPosition.goal) ? n : 0) - a;
                                    return o(u, e * t + r + a);
                                },
                                [p.scrollPosition],
                            ),
                            y = (0, r.useCallback)(
                                (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                    const n = F.current;
                                    n &&
                                        h.start({
                                            scrollPosition: o(n, u),
                                            immediate: e,
                                            reset: t,
                                            config: E.animationConfig,
                                            from: { scrollPosition: o(n, p.scrollPosition.get()) },
                                        });
                                },
                                [h, E.animationConfig, p.scrollPosition],
                            ),
                            w = (0, r.useCallback)(
                                (u) => {
                                    const e = F.current,
                                        t = m.current;
                                    if (!e || !t) return;
                                    const n = ((u, e) => {
                                            switch (e.type) {
                                                case 'proportional':
                                                    return a(u) / e.factor;
                                                case 'fixed':
                                                    return e.value;
                                            }
                                        })(t, E.step),
                                        r = b(e, u, n);
                                    y(r);
                                },
                                [y, b, E.step],
                            ),
                            N = (0, r.useCallback)(
                                (u) => {
                                    0 !== u.deltaY && w(n(u)),
                                        F.current && C.trigger('mouseWheel', u, p.scrollPosition, e(F.current));
                                },
                                [p.scrollPosition, w, C],
                            ),
                            S = ((u, e = []) => {
                                const t = (0, r.useRef)(),
                                    n = (0, r.useCallback)((...e) => {
                                        t.current && t.current(), (t.current = u(...e));
                                    }, e);
                                return (
                                    (0, r.useEffect)(
                                        () => () => {
                                            t.current && t.current();
                                        },
                                        [n],
                                    ),
                                    n
                                );
                            })(
                                () =>
                                    i(() => {
                                        const u = F.current;
                                        u &&
                                            (y(o(u, p.scrollPosition.goal), { immediate: !0 }),
                                            C.trigger('resizeHandled'));
                                    }),
                                [y, p.scrollPosition.goal],
                            ),
                            P = A(() => {
                                const u = F.current;
                                if (!u) return;
                                const e = o(u, p.scrollPosition.goal);
                                e !== p.scrollPosition.goal && y(e, { immediate: !0 }), C.trigger('recalculateContent');
                            });
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('resize', S),
                                () => {
                                    window.removeEventListener('resize', S);
                                }
                            ),
                            [S],
                        );
                        return (0, r.useMemo)(
                            () => ({
                                getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                getContainerSize: () => (F.current ? u(F.current) : void 0),
                                getBounds: () =>
                                    F.current
                                        ? e(F.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: E.step.clampedArrowStepTimeout,
                                clampPosition: o,
                                handleMouseWheel: N,
                                applyScroll: y,
                                applyStepTo: w,
                                contentRef: F,
                                wrapperRef: m,
                                scrollPosition: h,
                                animationScroll: p,
                                recalculateContent: P,
                                events: { on: C.on, off: C.off },
                            }),
                            [p.scrollPosition, y, w, C.off, C.on, P, N, h, E.step.clampedArrowStepTimeout],
                        );
                    };
                },
                p = v({
                    getBounds: (u) => {
                        var e, t;
                        return [
                            0,
                            u.offsetWidth -
                                (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                        ];
                    },
                    getContainerSize: (u) => u.offsetWidth,
                    getWrapperSize: (u) => u.offsetWidth,
                    setScrollPosition: (u, e) => {
                        u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                    },
                    getDirection: (u) => (u.deltaY > 1 ? _.Next : _.Prev),
                    triggerMouseMoveOnUpdate: !0,
                }),
                h = 'HorizontalBar_base_49',
                b = 'HorizontalBar_base__nonActive_82',
                y = 'HorizontalBar_leftButton_5f',
                w = 'HorizontalBar_rightButton_03',
                N = 'HorizontalBar_track_0d',
                S = 'HorizontalBar_thumb_fd',
                P = 'HorizontalBar_rail_32',
                I = 'disable',
                L = { pending: !1, offset: 0 },
                x = (u) => {
                    var e;
                    return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                },
                T = () => {},
                k = (u, e) => Math.max(20, u.offsetWidth * e),
                M = (0, r.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = x, onDrag: n = T }) => {
                    const a = (0, r.useRef)(null),
                        o = (0, r.useRef)(null),
                        E = (0, r.useRef)(null),
                        D = (0, r.useRef)(null),
                        B = (0, r.useRef)(null),
                        C = u.stepTimeout || 100,
                        d = (0, r.useState)(L),
                        g = d[0],
                        f = d[1],
                        v = (0, r.useCallback)(
                            (u) => {
                                f(u), B.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: B.current });
                            },
                            [n],
                        ),
                        p = () => {
                            const e = D.current,
                                t = B.current,
                                n = u.getWrapperSize(),
                                a = u.getContainerSize();
                            if (!(n && e && t && a)) return;
                            const r = u.animationScroll.scrollPosition.get(),
                                s = Math.min(1, n / a),
                                l = c(0, 1, r / (a - n)),
                                i = (e.offsetWidth - k(e, s)) * l;
                            (t.style.transform = `translateX(${0 | i}px)`),
                                ((u) => {
                                    if (o.current && E.current && D.current && B.current) {
                                        if (0 === u)
                                            return o.current.classList.add(I), void E.current.classList.remove(I);
                                        if (
                                            ((e = D.current),
                                            (t = B.current),
                                            u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                        )
                                            return o.current.classList.remove(I), void E.current.classList.add(I);
                                        var e, t;
                                        o.current.classList.remove(I), E.current.classList.remove(I);
                                    }
                                })(i);
                        },
                        R = A(() => {
                            (() => {
                                const e = B.current,
                                    t = D.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(r && e && n && t)) return;
                                const s = Math.min(1, n / r);
                                (e.style.width = `${k(t, s)}px`),
                                    (e.style.display = 'flex'),
                                    a.current && (1 === s ? a.current.classList.add(b) : a.current.classList.remove(b));
                            })(),
                                p();
                        });
                    (0, r.useEffect)(() => i(R)),
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    const e = () => {
                                        p();
                                    };
                                    let t = T;
                                    const n = () => {
                                        t(), (t = i(R));
                                    };
                                    return (
                                        u.events.on('recalculateContent', R),
                                        u.events.on('rest', e),
                                        u.events.on('change', e),
                                        u.events.on('resizeHandled', n),
                                        () => {
                                            t(),
                                                u.events.off('recalculateContent', R),
                                                u.events.off('rest', e),
                                                u.events.off('change', e),
                                                u.events.off('resizeHandled', n);
                                        }
                                    );
                                }),
                            [u],
                        ),
                        (0, r.useEffect)(() => {
                            if (!g.pending) return;
                            const e = (e) => {
                                    var t;
                                    const a = u.contentRef.current;
                                    if (!a) return;
                                    const r = D.current,
                                        s = B.current;
                                    if (!a || !r || !s) return;
                                    const o = e.screenX - g.offset - r.getBoundingClientRect().x,
                                        l = (o / r.offsetWidth) * (null != (t = u.getContainerSize()) ? t : 0);
                                    u.scrollPosition.start({
                                        scrollPosition: u.clampPosition(a, l),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: l });
                                },
                                t = () => {
                                    window.removeEventListener('mousemove', e), v(L);
                                };
                            return (
                                window.addEventListener('mousemove', e),
                                window.addEventListener('mouseup', t),
                                () => {
                                    window.removeEventListener('mousemove', e),
                                        window.removeEventListener('mouseup', t);
                                }
                            );
                        }, [u, g.offset, g.pending, n, v]);
                    const M = F((e) => u.applyStepTo(e), C, [u]),
                        O = M[0],
                        H = M[1];
                    (0, r.useEffect)(
                        () => (
                            document.addEventListener('mouseup', H, !0),
                            () => document.removeEventListener('mouseup', H, !0)
                        ),
                        [H],
                    );
                    const W = (u) => {
                        u.target.classList.contains(I) || m('highlight');
                    };
                    return s().createElement(
                        'div',
                        { className: l()(h, e.base), ref: a, onWheel: u.handleMouseWheel },
                        s().createElement('div', {
                            className: l()(y, e.leftButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(I) || 0 !== u.button || (m('play'), O(_.Next));
                            },
                            onMouseUp: H,
                            ref: o,
                            onMouseEnter: W,
                        }),
                        s().createElement(
                            'div',
                            {
                                className: l()(N, e.track),
                                onMouseDown: (e) => {
                                    const n = B.current;
                                    if (n && 0 === e.button)
                                        if ((m('play'), e.target === n))
                                            v({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                        else {
                                            ((e) => {
                                                const n = B.current,
                                                    a = u.contentRef.current;
                                                if (!n || !a) return;
                                                const r = t(u);
                                                u.applyScroll(u.animationScroll.scrollPosition.get() + r * e);
                                            })(e.screenX > n.getBoundingClientRect().x ? _.Prev : _.Next);
                                        }
                                },
                                ref: D,
                                onMouseEnter: W,
                            },
                            s().createElement('div', { ref: B, className: l()(S, e.thumb) }),
                            s().createElement('div', { className: l()(P, e.rail) }),
                        ),
                        s().createElement('div', {
                            className: l()(w, e.rightButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(I) || 0 !== u.button || (m('play'), O(_.Prev));
                            },
                            onMouseUp: H,
                            ref: E,
                            onMouseEnter: W,
                        }),
                    );
                }),
                O = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                },
                H = ({
                    children: u,
                    api: e,
                    className: t,
                    barClassNames: n,
                    areaClassName: a,
                    classNames: o,
                    scrollClassName: i,
                    getStepByRailClick: c,
                    onDrag: E,
                }) => {
                    const A = (0, r.useMemo)(() => {
                            const u = n || {};
                            return Object.assign({}, u, { base: l()(O.base, u.base) });
                        }, [n]),
                        F = (0, r.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                    return s().createElement(
                        'div',
                        { className: l()(O.defaultScroll, t), onWheel: e.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: l()(O.defaultScrollArea, a) },
                            s().createElement(W, { className: i, api: F, classNames: o }, u),
                        ),
                        s().createElement(M, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                    );
                },
                W = ({ api: u, className: e, classNames: t, children: n }) => (
                    (0, r.useEffect)(() => i(u.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: l()(O.base, e) },
                        s().createElement(
                            'div',
                            {
                                className: l()(O.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: u.handleMouseWheel,
                                ref: u.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: l()(O.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            (W.Bar = M),
                (W.Default = H),
                (W.SeniorityAwards = ({ api: u, className: e, classNames: t, children: n }) => (
                    (0, r.useEffect)(() => i(u.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: l()(O.base, e) },
                        s().createElement(
                            'div',
                            { className: l()(O.wrapper, null == t ? void 0 : t.wrapper), ref: u.wrapperRef },
                            s().createElement(
                                'div',
                                { className: l()(O.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                n,
                            ),
                        ),
                    )
                ));
            const z = v({
                    getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                    getContainerSize: (u) => u.scrollHeight,
                    getWrapperSize: (u) => u.offsetHeight,
                    setScrollPosition: (u, e) => {
                        u.scrollTop = e.value.scrollPosition;
                    },
                    getDirection: (u) => (u.deltaY > 1 ? _.Next : _.Prev),
                }),
                $ = 'VerticalBar_base_f3',
                V = 'VerticalBar_base__nonActive_42',
                j = 'VerticalBar_topButton_d7',
                U = 'VerticalBar_bottomButton_06',
                G = 'VerticalBar_track_df',
                K = 'VerticalBar_thumb_32',
                Y = 'VerticalBar_rail_43',
                q = 'disable',
                X = () => {},
                J = { pending: !1, offset: 0 },
                Z = (u) => {
                    var e;
                    return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                },
                Q = (u, e) => {
                    u.contentRef.current && e(u.contentRef.current);
                },
                uu = (u, e) => Math.max(20, u.offsetHeight * e),
                eu = (0, r.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Z, onDrag: n = X }) => {
                    const a = (0, r.useRef)(null),
                        o = (0, r.useRef)(null),
                        E = (0, r.useRef)(null),
                        D = (0, r.useRef)(null),
                        B = (0, r.useRef)(null),
                        C = u.stepTimeout || 100,
                        d = (0, r.useState)(J),
                        g = d[0],
                        f = d[1],
                        v = (0, r.useCallback)(
                            (u) => {
                                f(u), B.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: B.current });
                            },
                            [n],
                        ),
                        p = A(() => {
                            const e = B.current,
                                t = D.current,
                                n = u.getWrapperSize(),
                                r = u.getContainerSize();
                            if (!(n && r && e && t)) return;
                            const s = Math.min(1, n / r);
                            return (
                                (e.style.height = `${uu(t, s)}px`),
                                e.classList.add(K),
                                a.current && (1 === s ? a.current.classList.add(V) : a.current.classList.remove(V)),
                                s
                            );
                        }),
                        h = A(() => {
                            const e = D.current,
                                t = B.current,
                                n = u.getWrapperSize(),
                                a = u.getContainerSize();
                            if (!(n && e && t && a)) return;
                            const r = u.animationScroll.scrollPosition.get(),
                                s = Math.min(1, n / a),
                                l = c(0, 1, r / (a - n)),
                                i = (e.offsetHeight - uu(e, s)) * l;
                            (t.style.transform = `translateY(${0 | i}px)`),
                                ((u) => {
                                    if (o.current && E.current && D.current && B.current) {
                                        if (0 === u)
                                            return o.current.classList.add(q), void E.current.classList.remove(q);
                                        if (
                                            ((e = D.current),
                                            (t = B.current),
                                            u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                        )
                                            return o.current.classList.remove(q), void E.current.classList.add(q);
                                        var e, t;
                                        o.current.classList.remove(q), E.current.classList.remove(q);
                                    }
                                })(i);
                        }),
                        b = A(() => {
                            Q(u, () => {
                                p(), h();
                            });
                        });
                    (0, r.useEffect)(() => i(b)),
                        (0, r.useEffect)(() => {
                            const e = () => {
                                Q(u, () => {
                                    h();
                                });
                            };
                            let t = X;
                            const n = () => {
                                t(), (t = i(b));
                            };
                            return (
                                u.events.on('recalculateContent', b),
                                u.events.on('rest', e),
                                u.events.on('change', e),
                                u.events.on('resizeHandled', n),
                                () => {
                                    t(),
                                        u.events.off('recalculateContent', b),
                                        u.events.off('rest', e),
                                        u.events.off('change', e),
                                        u.events.off('resizeHandled', n);
                                }
                            );
                        }, [u]),
                        (0, r.useEffect)(() => {
                            if (!g.pending) return;
                            const e = (e) => {
                                    Q(u, (t) => {
                                        const a = D.current,
                                            r = B.current,
                                            s = u.getContainerSize();
                                        if (!a || !r || !s) return;
                                        const o = e.screenY - g.offset - a.getBoundingClientRect().y,
                                            l = (o / a.offsetHeight) * s;
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(t, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: t.scrollTop },
                                        }),
                                            n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: l });
                                    });
                                },
                                t = () => {
                                    window.removeEventListener('mousemove', e), v(J);
                                };
                            return (
                                window.addEventListener('mousemove', e),
                                window.addEventListener('mouseup', t),
                                () => {
                                    window.removeEventListener('mousemove', e),
                                        window.removeEventListener('mouseup', t);
                                }
                            );
                        }, [u, g.offset, g.pending, n, v]);
                    const y = F((e) => u.applyStepTo(e), C, [u]),
                        w = y[0],
                        N = y[1];
                    (0, r.useEffect)(
                        () => (
                            document.addEventListener('mouseup', N, !0),
                            () => document.removeEventListener('mouseup', N, !0)
                        ),
                        [N],
                    );
                    const S = (u) => {
                        u.target.classList.contains(q) || m('highlight');
                    };
                    return s().createElement(
                        'div',
                        { className: l()($, e.base), ref: a, onWheel: u.handleMouseWheel },
                        s().createElement('div', {
                            className: l()(j, e.topButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(q) || 0 !== u.button || (m('play'), w(_.Next));
                            },
                            ref: o,
                            onMouseEnter: S,
                        }),
                        s().createElement(
                            'div',
                            {
                                className: l()(G, e.track),
                                onMouseDown: (e) => {
                                    const n = B.current;
                                    if (n && 0 === e.button)
                                        if ((m('play'), e.target === n))
                                            v({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                        else {
                                            ((e) => {
                                                B.current &&
                                                    Q(u, (n) => {
                                                        if (!n) return;
                                                        const a = t(u),
                                                            r = u.clampPosition(n, n.scrollTop + a * e);
                                                        u.applyScroll(r);
                                                    });
                                            })(e.screenY > n.getBoundingClientRect().y ? _.Prev : _.Next);
                                        }
                                },
                                ref: D,
                                onMouseEnter: S,
                            },
                            s().createElement('div', { ref: B, className: e.thumb }),
                            s().createElement('div', { className: l()(Y, e.rail) }),
                        ),
                        s().createElement('div', {
                            className: l()(U, e.bottomButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(q) || 0 !== u.button || (m('play'), w(_.Prev));
                            },
                            onMouseUp: N,
                            ref: E,
                            onMouseEnter: S,
                        }),
                    );
                }),
                tu = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                },
                nu = ({
                    children: u,
                    api: e,
                    className: t,
                    barClassNames: n,
                    areaClassName: a,
                    scrollClassName: o,
                    scrollClassNames: i,
                    getStepByRailClick: c,
                    onDrag: E,
                }) => {
                    const A = (0, r.useMemo)(() => {
                            const u = n || {};
                            return Object.assign({}, u, { base: l()(tu.base, u.base) });
                        }, [n]),
                        F = (0, r.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                    return s().createElement(
                        'div',
                        { className: l()(tu.defaultScroll, t), onWheel: e.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: l()(tu.area, a) },
                            s().createElement(au, { className: o, classNames: i, api: F }, u),
                        ),
                        s().createElement(eu, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                    );
                },
                au = ({ className: u, classNames: e, children: t, api: n }) => (
                    (0, r.useEffect)(() => i(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: l()(tu.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: l()(tu.content, null == e ? void 0 : e.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
            au.Default = nu;
            const ru = { Vertical: a, Horizontal: n };
            let su;
            function ou(u, e) {
                return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                    const t = 0 === u.indexOf('%') ? 2 : 1;
                    return String(e[u.slice(t, -t)]);
                });
            }
            !(function (u) {
                (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
            })(su || (su = {}));
            const lu = (u, e, t) => {
                    if (t % 2) {
                        const t = u.pop();
                        return [...u, t + e];
                    }
                    return [...u, e];
                },
                iu = (u, e, t) => {
                    if (0 === t) return [e];
                    if (t % 2) return [...u, ' ' === e ? ' ' : e];
                    {
                        const t = u.pop();
                        return [...u, t + e];
                    }
                },
                cu = (u, e, t = su.left) => u.split(e).reduce(t === su.left ? lu : iu, []),
                Eu = (() => {
                    const u = new RegExp(
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
                    return (e) =>
                        e
                            .replace(/&nbsp;/g, ' ')
                            .replace(/ /g, ' ')
                            .match(u);
                })(),
                Au = ['zh_cn', 'zh_sg', 'zh_tw'],
                Fu = (u, e = su.left) => {
                    const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                    return Au.includes(t)
                        ? Eu(u)
                        : ((u, e = su.left) => {
                              let t = [];
                              const n =
                                      /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                  a = u.replace(/&nbsp;/g, ' ');
                              return cu(a, /( )/, e).forEach((u) => (t = t.concat(cu(u, n, su.left)))), t;
                          })(u, e);
                };
            var mu = t(3403);
            const Du = (u) => (
                u.lastIndexOf(R.strings.common.common.dot()) !== u.length - 1 && (u += R.strings.common.common.dot()), u
            );
            let Bu;
            !(function (u) {
                (u.AVAILABLE = 'available'),
                    (u.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (u.DISABLED = 'disabled');
            })(Bu || (Bu = {}));
            var Cu = t(3215),
                du = t(4598);
            function gu(u, e) {
                var t;
                if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
            }
            function _u(u, e) {
                return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
            }
            var fu = t(3946);
            let vu;
            !(function (u) {
                (u.Init = 'init'), (u.Static = 'static'), (u.LevelUp = 'levelUp'), (u.Downgrade = 'downgrade');
            })(vu || (vu = {}));
            const pu = (0, Cu.q)()(
                    ({ observableModel: u }) => {
                        const e = {
                                root: u.object(),
                                otherPlayerInfo: u.object('otherPlayerInfo'),
                                dogTagModel: u.object('otherPlayerInfo.dogTagModel'),
                                statistic: u.array('statistic'),
                                significantAchievements: u.array('significantAchievements'),
                            },
                            t = (0, fu.Om)(() => _u(e.statistic.get(), (u) => Object.assign({}, u, { type: u.type })), {
                                equals: du.jv,
                            }),
                            n = (0, fu.Om)(
                                () =>
                                    Array(e.root.get().achievementRibbonLength)
                                        .fill({})
                                        .map((u, t) => gu(e.significantAchievements.get(), t)),
                                { equals: du.jv },
                            ),
                            a = (0, fu.Om)(() => {
                                const u = e.root.get(),
                                    t = u.currentRatingRank,
                                    n = u.prevCurrentRatingRank,
                                    a = u.currentRatingSubRank,
                                    r = u.prevCurrentRatingSubRank,
                                    s = u.isWTREnabled,
                                    o = u.isOtherPlayer,
                                    l = u.battlesLeftCount;
                                if (!s || o || l > 0) return vu.Static;
                                if (t === n) {
                                    if (a > r) return vu.LevelUp;
                                    if (a < r) return vu.Downgrade;
                                }
                                return t > n ? vu.LevelUp : t < n ? vu.Downgrade : vu.Static;
                            });
                        return Object.assign({}, e, {
                            computes: {
                                getStatisticList: t,
                                getSignificantAchievementsList: n,
                                getRatingWidgetState: a,
                            },
                        });
                    },
                    ({ externalModel: u }) => ({
                        onAchievementsSettings: u.createCallbackNoArgs('onAchievementsSettings'),
                        onOpenProfile: u.createCallbackNoArgs('otherPlayerInfo.onOpenProfile'),
                        onError: u.createCallback((u) => ({ errorFilePath: u }), 'onError'),
                    }),
                ),
                hu = pu[0],
                bu = pu[1];
            var yu = t(5415);
            var wu = t(4179);
            const Nu = [
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
            function Su(u) {
                return Object.entries(u || {}).map(([u, e]) => {
                    const t = { __Type: 'GFValueProxy', name: u };
                    switch (typeof e) {
                        case 'number':
                            t.number = e;
                            break;
                        case 'boolean':
                            t.bool = e;
                            break;
                        case 'undefined':
                            break;
                        default:
                            t.string = e.toString();
                    }
                    return t;
                });
            }
            const Pu = (u, e, t = {}, n = 0) => {
                    viewEnv.handleViewEvent(
                        Object.assign(
                            {
                                __Type: 'GFViewEventProxy',
                                type: wu.B0.TOOLTIP,
                                contentID: u,
                                decoratorID: e,
                                targetID: n,
                            },
                            t,
                        ),
                    );
                },
                Iu = (u) => {
                    let e = u.children,
                        t = u.contentId,
                        n = u.args,
                        a = u.onMouseEnter,
                        s = u.onMouseLeave,
                        o = u.onMouseDown,
                        l = u.onClick,
                        i = u.ignoreShowDelay,
                        c = void 0 !== i && i,
                        E = u.ignoreMouseClick,
                        A = void 0 !== E && E,
                        F = u.decoratorId,
                        m = void 0 === F ? 0 : F,
                        D = u.isEnabled,
                        B = void 0 === D || D,
                        C = u.targetId,
                        d = void 0 === C ? 0 : C,
                        g = u.onShow,
                        _ = u.onHide,
                        f = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Nu);
                    const v = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                        p = (0, r.useMemo)(
                            () =>
                                d ||
                                ((u = 1) => {
                                    const e = new Error().stack;
                                    let t,
                                        n = R.invalid('resId');
                                    return (
                                        e &&
                                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                            window.__feature &&
                                                window.__feature !== t &&
                                                window.subViews[t] &&
                                                (n = window.subViews[t].id)),
                                        { caller: t, stack: e, resId: n }
                                    );
                                })().resId,
                            [d],
                        ),
                        h = (0, r.useCallback)(() => {
                            (v.current.isVisible && v.current.timeoutId) ||
                                (Pu(t, m, { isMouseEvent: !0, on: !0, arguments: Su(n) }, p),
                                g && g(),
                                (v.current.isVisible = !0));
                        }, [t, m, n, p, g]),
                        b = (0, r.useCallback)(() => {
                            if (v.current.isVisible || v.current.timeoutId) {
                                const u = v.current.timeoutId;
                                u > 0 && (clearTimeout(u), (v.current.timeoutId = 0)),
                                    Pu(t, m, { on: !1 }, p),
                                    v.current.isVisible && _ && _(),
                                    (v.current.isVisible = !1);
                            }
                        }, [t, m, p, _]),
                        y = (0, r.useCallback)((u) => {
                            v.current.isVisible &&
                                ((v.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                (v.current.hideTimerId = window.setTimeout(() => {
                                    const e = document.elementFromPoint(u.clientX, u.clientY);
                                    e && !e.isSameNode(v.current.prevTarget) && b();
                                }, 200)));
                        }, []);
                    (0, r.useEffect)(() => {
                        const u = v.current.hideTimerId;
                        return (
                            document.addEventListener('wheel', y, { capture: !0 }),
                            () => {
                                document.removeEventListener('wheel', y, { capture: !0 }), u && window.clearTimeout(u);
                            }
                        );
                    }, []),
                        (0, r.useEffect)(() => {
                            !1 === B && b();
                        }, [B, b]),
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('mouseleave', b),
                                () => {
                                    window.removeEventListener('mouseleave', b), b();
                                }
                            ),
                            [b],
                        );
                    return B
                        ? (0, r.cloneElement)(
                              e,
                              Object.assign(
                                  {
                                      onMouseEnter:
                                          ((w = e.props.onMouseEnter),
                                          (u) => {
                                              (u.clientX === window.innerWidth && u.clientY === window.innerHeight) ||
                                                  ((v.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                  a && a(u),
                                                  w && w(u));
                                          }),
                                      onMouseLeave: ((u) => (e) => {
                                          b(), null == s || s(e), null == u || u(e);
                                      })(e.props.onMouseLeave),
                                      onClick: ((u) => (e) => {
                                          !1 === A && b(), null == l || l(e), null == u || u(e);
                                      })(e.props.onClick),
                                      onMouseDown: ((u) => (e) => {
                                          !1 === A && b(), null == o || o(e), null == u || u(e);
                                      })(e.props.onMouseDown),
                                  },
                                  f,
                              ),
                          )
                        : e;
                    var w;
                },
                Ru = ['children'];
            function Lu() {
                return (
                    (Lu =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    Lu.apply(this, arguments)
                );
            }
            const xu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Ru);
                    return s().createElement(
                        Iu,
                        Lu(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        e,
                    );
                },
                Tu = ['children', 'body', 'header', 'note', 'alert', 'args'];
            function ku() {
                return (
                    (ku =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    ku.apply(this, arguments)
                );
            }
            const Mu = R.views.common.tooltip_window.simple_tooltip_content,
                Ou = (u) => {
                    let e = u.children,
                        t = u.body,
                        n = u.header,
                        a = u.note,
                        o = u.alert,
                        l = u.args,
                        i = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Tu);
                    const c = (0, r.useMemo)(() => {
                        const u = Object.assign({}, l, { body: t, header: n, note: a, alert: o });
                        for (const e in u) void 0 === u[e] && delete u[e];
                        return u;
                    }, [o, t, n, a, l]);
                    return s().createElement(
                        Iu,
                        ku(
                            {
                                contentId:
                                    ((E = null == l ? void 0 : l.hasHtmlContent),
                                    E ? Mu.SimpleTooltipHtmlContent('resId') : Mu.SimpleTooltipContent('resId')),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                args: c,
                            },
                            i,
                        ),
                        e,
                    );
                    var E;
                };
            function Hu() {
                return (
                    (Hu =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    Hu.apply(this, arguments)
                );
            }
            const Wu = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = s().createElement('div', { className: t }, u);
                    if (e.header || e.body) return s().createElement(Ou, e, n);
                    const a = e.contentId,
                        r = e.args,
                        o = null == r ? void 0 : r.contentId;
                    return a || o
                        ? s().createElement(Iu, Hu({}, e, { contentId: a || o }), n)
                        : s().createElement(xu, e, n);
                },
                zu = 'AchievementTooltip_base_4d',
                $u = ({ children: u, name: e, block: t, isEnabled: n = !0 }) =>
                    s().createElement(
                        Wu,
                        { tooltipArgs: { args: { name: e, block: t }, isEnabled: n }, className: zu },
                        u,
                    );
            let Vu, ju, Uu;
            !(function (u) {
                (u.Repeatable = 'repeatable'),
                    (u.Class = 'class'),
                    (u.Custom = 'custom'),
                    (u.Series = 'series'),
                    (u.Single = 'single'),
                    (u.Rare = 'rare');
            })(Vu || (Vu = {})),
                (function (u) {
                    (u.None = 'none'), (u.Simple = 'simple'), (u.Series = 'series'), (u.Stages = 'stages');
                })(ju || (ju = {})),
                (function (u) {
                    (u.ExtraSmall = 'extraSmall'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.ExtraLarge = 'extraLarge');
                })(Uu || (Uu = {}));
            const Gu = {
                    base: 'Achievement_base_1a',
                    image: 'Achievement_image_09',
                    base__small: 'Achievement_base__small_c8',
                    base__medium: 'Achievement_base__medium_e1',
                    base__large: 'Achievement_base__large_1d',
                    base__extraLarge: 'Achievement_base__extraLarge_1b',
                    counter: 'Achievement_counter_97',
                },
                Ku = ({ format: u, value: e }) => {
                    const t = ((u, e = 'integral') => {
                        let t;
                        t = 'gold' === e ? wu.B3.GOLD : wu.B3.INTEGRAL;
                        return void 0 === u ? '' : wu.Z5.getNumberFormat(u, t);
                    })(e, u);
                    return t ? s().createElement('span', null, t) : null;
                },
                Yu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                qu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
            const Xu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                Ju = (u) =>
                    Xu
                        ? `${u}`
                        : (function (u) {
                              let e = '';
                              for (let t = qu.length - 1; t >= 0; t--) for (; u >= qu[t]; ) (e += Yu[t]), (u -= qu[t]);
                              return e;
                          })(u),
                Zu = {
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
            let Qu;
            !(function (u) {
                (u.Small = 'small'), (u.Medium = 'medium'), (u.Large = 'large');
            })(Qu || (Qu = {}));
            const ue = ({ value: u, type: e = ju.Simple, size: t = Qu.Medium, className: n }) =>
                    s().createElement(
                        'div',
                        { className: l()(Zu.base, Zu[`base__${e}`], Zu[`base__${t}`], n) },
                        s().createElement(
                            'div',
                            { className: Zu.background },
                            s().createElement(
                                'div',
                                { className: Zu.count },
                                e === ju.Stages ? Ju(u) : s().createElement(Ku, { value: u, format: 'integral' }),
                            ),
                            e === ju.Series &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l()(Zu.arrow, Zu.arrow__left) }),
                                    s().createElement('div', { className: l()(Zu.arrow, Zu.arrow__right) }),
                                ),
                        ),
                    ),
                ee = R.images.gui.maps.icons.achievement,
                te =
                    (R.strings.achievements,
                    ({ name: u, resourceName: e, type: t, rareIconId: n, rareBigIconId: a, value: r, size: s }) => {
                        if (n && a) return s === Uu.ExtraSmall ? n : a;
                        const o = viewEnv.getScale(),
                            l = ((u, e, t, n) => (t === Vu.Class ? `${u}${n}` : u.match(/^\d/) ? `c_${u}` : e))(
                                u,
                                e,
                                t,
                                r,
                            );
                        return s === Uu.ExtraSmall && o < 2 ? ee.$dyn(l) : ee.big.$dyn(l);
                    }),
                ne = {
                    [Uu.ExtraSmall]: Qu.Small,
                    [Uu.Small]: Qu.Small,
                    [Uu.Medium]: Qu.Medium,
                    [Uu.Large]: Qu.Medium,
                    [Uu.ExtraLarge]: Qu.Large,
                },
                ae = ({
                    name: u,
                    resourceName: e,
                    block: t,
                    type: n,
                    counterType: a,
                    size: r,
                    value: o,
                    rareIconId: i,
                    rareBigIconId: c,
                    isTooltipEnabled: E = !0,
                    className: A,
                }) => {
                    const F = te({
                        name: u,
                        resourceName: e,
                        type: n,
                        size: r,
                        value: o,
                        rareIconId: i,
                        rareBigIconId: c,
                    });
                    return s().createElement(
                        $u,
                        { name: u, block: t, isEnabled: E },
                        s().createElement(
                            'div',
                            { className: l()(Gu.base, Gu[`base__${r}`], A) },
                            s().createElement(
                                'div',
                                { className: Gu.image, style: { backgroundImage: `url(${F})` } },
                                a !== ju.None &&
                                    s().createElement(ue, { type: a, size: ne[r], value: o, className: Gu.counter }),
                            ),
                        ),
                    );
                };
            let re;
            !(function (u) {
                (u.DISABLED_LAYOUT = 'disabledLayout'),
                    (u.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (u.DISABLED = 'disabled'),
                    (u.OTHER_PLAYER = 'otherPlayer');
            })(re || (re = {}));
            const se = {
                    base: 'AchievementPlaceholder_base_06',
                    image: 'AchievementPlaceholder_image_92',
                    base__small: 'AchievementPlaceholder_base__small_b7',
                    base__medium: 'AchievementPlaceholder_base__medium_ef',
                    base__large: 'AchievementPlaceholder_base__large_c5',
                    base__extraLarge: 'AchievementPlaceholder_base__extraLarge_d5',
                },
                oe = ({ size: u, isOtherPlayer: e = !1 }) =>
                    s().createElement(
                        Iu,
                        {
                            contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                            args: { tooltipType: e ? re.OTHER_PLAYER : re.DISABLED_LAYOUT },
                        },
                        s().createElement(
                            'div',
                            { className: l()(se.base, se[`base__${u}`]) },
                            s().createElement('div', { className: se.image }),
                        ),
                    ),
                le = {
                    [yu.cJ.ExtraSmall]: Uu.Small,
                    [yu.cJ.Small]: Uu.Small,
                    [yu.cJ.Medium]: Uu.Large,
                    [yu.cJ.Large]: Uu.Large,
                    [yu.cJ.ExtraLarge]: Uu.ExtraLarge,
                },
                ie = 'Achievements_base_96',
                ce = 'Achievements_base__visibleWithAnimation_0a',
                Ee = 'Achievements_base__hide_33',
                Ae = 'Achievements_header_a9',
                Fe = 'Achievements_ribbon_06',
                me = 'Achievements_base__fullAnimation_10',
                De = 'Achievements_list_55',
                Be = 'Achievements_item_a4',
                Ce = 'Achievements_item__fixedIndent_0c',
                de = 'Achievements_achievement_64',
                ge = 'Achievements_achievementPlaceholder_42',
                _e = {
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
            let fe, ve;
            !(function (u) {
                (u.main = 'main'),
                    (u.primary = 'primary'),
                    (u.primaryGreen = 'primaryGreen'),
                    (u.primaryRed = 'primaryRed'),
                    (u.secondary = 'secondary'),
                    (u.ghost = 'ghost');
            })(fe || (fe = {})),
                (function (u) {
                    (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                })(ve || (ve = {}));
            const pe = ({
                children: u,
                size: e,
                isFocused: t,
                type: n,
                disabled: a,
                mixClass: o,
                soundHover: i,
                soundClick: c,
                onMouseEnter: E,
                onMouseMove: A,
                onMouseDown: F,
                onMouseUp: D,
                onMouseLeave: B,
                onClick: C,
            }) => {
                const d = (0, r.useRef)(null),
                    g = (0, r.useState)(t),
                    _ = g[0],
                    f = g[1],
                    v = (0, r.useState)(!1),
                    p = v[0],
                    h = v[1],
                    b = (0, r.useState)(!1),
                    y = b[0],
                    w = b[1],
                    N = (0, r.useCallback)(() => {
                        a || (d.current && (d.current.focus(), f(!0)));
                    }, [a]),
                    S = (0, r.useCallback)(
                        (u) => {
                            _ && null !== d.current && !d.current.contains(u.target) && f(!1);
                        },
                        [_],
                    ),
                    P = (0, r.useCallback)(
                        (u) => {
                            a || (C && C(u));
                        },
                        [a, C],
                    ),
                    I = (0, r.useCallback)(
                        (u) => {
                            a || (null !== i && m(i), E && E(u), w(!0));
                        },
                        [a, i, E],
                    ),
                    L = (0, r.useCallback)(
                        (u) => {
                            A && A(u);
                        },
                        [A],
                    ),
                    x = (0, r.useCallback)(
                        (u) => {
                            a || (D && D(u), h(!1));
                        },
                        [a, D],
                    ),
                    T = (0, r.useCallback)(
                        (u) => {
                            a || (null !== c && m(c), F && F(u), t && N(), h(!0));
                        },
                        [a, c, F, N, t],
                    ),
                    k = (0, r.useCallback)(
                        (u) => {
                            a || (B && B(u), h(!1));
                        },
                        [a, B],
                    ),
                    M = l()(
                        _e.base,
                        _e[`base__${n}`],
                        {
                            [_e.base__disabled]: a,
                            [_e[`base__${e}`]]: e,
                            [_e.base__focus]: _,
                            [_e.base__highlightActive]: p,
                            [_e.base__firstHover]: y,
                        },
                        o,
                    ),
                    O = l()(_e.state, _e.state__default);
                return (
                    (0, r.useEffect)(
                        () => (
                            document.addEventListener('mousedown', S),
                            () => {
                                document.removeEventListener('mousedown', S);
                            }
                        ),
                        [S],
                    ),
                    (0, r.useEffect)(() => {
                        f(t);
                    }, [t]),
                    s().createElement(
                        'div',
                        {
                            ref: d,
                            className: M,
                            onMouseEnter: I,
                            onMouseMove: L,
                            onMouseUp: x,
                            onMouseDown: T,
                            onMouseLeave: k,
                            onClick: P,
                        },
                        n !== fe.ghost &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement('div', { className: _e.back }),
                                s().createElement('span', { className: _e.texture }),
                            ),
                        s().createElement(
                            'span',
                            { className: O },
                            s().createElement('span', { className: _e.stateDisabled }),
                            s().createElement('span', { className: _e.stateHighlightHover }),
                            s().createElement('span', { className: _e.stateHighlightActive }),
                        ),
                        s().createElement(
                            'span',
                            { className: _e.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            u,
                        ),
                    )
                );
            };
            pe.defaultProps = { type: fe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const he = (0, r.memo)(pe),
                be = 'FormatText_base_d0',
                ye = ({ binding: u, text: e = '', classMix: t, alignment: n = su.left }) =>
                    null === e
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : s().createElement(
                              r.Fragment,
                              null,
                              e.split('\n').map((e, a) =>
                                  s().createElement(
                                      'div',
                                      { className: l()(be, t), key: `${e}-${a}` },
                                      ((u, e, t) =>
                                          u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Fu(u, e))))(
                                          e,
                                          n,
                                          u,
                                      ).map((u, e) => s().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                                  ),
                              ),
                          ),
                we = {
                    base: 'Header_base_95',
                    title: 'Header_title_71',
                    buttonContainer: 'Header_buttonContainer_38',
                    editButton: 'Header_editButton_0c',
                    buttonIcon: 'Header_buttonIcon_6d',
                    base__available: 'Header_base__available_43',
                    alert: 'Header_alert_fc',
                    alertIcon: 'Header_alertIcon_9d',
                    info: 'Header_info_f5',
                    info__inline: 'Header_info__inline_68',
                    infoItem: 'Header_infoItem_a8',
                    accent: 'Header_accent_52',
                },
                Ne = R.strings.achievements_page.summary.achievements,
                Se = (u) => {
                    switch (u) {
                        case Bu.DISABLED:
                            return { tooltipType: re.DISABLED };
                        case Bu.NOT_ENOUGH_ACHIEVEMENTS:
                            return { tooltipType: re.NOT_ENOUGH_ACHIEVEMENTS };
                        default:
                            return { tooltipType: re.DISABLED };
                    }
                },
                Pe = (0, mu.Pi)(() => {
                    const u = bu(),
                        e = u.model,
                        t = u.controls,
                        n = e.root.get(),
                        a = n.editState,
                        r = n.numberOfUniqueAwards,
                        o = n.totalAwards,
                        i = n.isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: l()(we.base, we[`base__${a}`]) },
                        s().createElement('div', { className: we.title }, Ne.title()),
                        !i &&
                            s().createElement(
                                Iu,
                                {
                                    contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                                    args: Se(a),
                                    isEnabled: a !== Bu.AVAILABLE,
                                },
                                s().createElement(
                                    'div',
                                    {
                                        className: we.buttonContainer,
                                        id: a === Bu.AVAILABLE ? 'summary-customization-button' : void 0,
                                    },
                                    s().createElement(
                                        he,
                                        {
                                            type: fe.ghost,
                                            size: ve.medium,
                                            disabled: a !== Bu.AVAILABLE,
                                            onClick: t.onAchievementsSettings,
                                            mixClass: we.editButton,
                                        },
                                        s().createElement('div', { className: we.buttonIcon }),
                                    ),
                                    a === Bu.DISABLED &&
                                        s().createElement(
                                            'div',
                                            { className: we.alert },
                                            s().createElement('div', { className: we.alertIcon }),
                                        ),
                                ),
                            ),
                        r > 0 &&
                            o > 0 &&
                            s().createElement(
                                'div',
                                { className: l()(we.info, i && we.info__inline) },
                                s().createElement(ye, {
                                    text: Ne.uniqueAwards(),
                                    binding: {
                                        value: s().createElement(
                                            'div',
                                            { className: we.accent },
                                            s().createElement(Ku, { value: r }),
                                        ),
                                    },
                                }),
                                s().createElement(ye, {
                                    classMix: we.infoItem,
                                    text: Ne.totalAwards(),
                                    binding: {
                                        value: s().createElement(
                                            'div',
                                            { className: we.accent },
                                            s().createElement(Ku, { value: o }),
                                        ),
                                    },
                                }),
                            ),
                    );
                });
            function Ie() {
                return (
                    (Ie =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    Ie.apply(this, arguments)
                );
            }
            const Re = (u) => {
                    u.target === u.currentTarget && m(R.sounds.achievements_medal());
                },
                Le = (0, mu.Pi)(() => {
                    const u = bu().model,
                        e = u.computes,
                        t = u.root.get(),
                        n = t.editState,
                        a = t.isSuccessfullyEdited,
                        r = t.isOtherPlayer,
                        o = t.isEditOpened,
                        i = (0, yu.GS)().mediaSize;
                    let c = 0;
                    const E = r ? Uu.Small : le[i],
                        A = n === Bu.AVAILABLE && a;
                    return s().createElement(
                        'div',
                        { className: l()(ie, A && me, !o && A && ce, o && Ee) },
                        s().createElement('div', { className: Ae }, s().createElement(Pe, null)),
                        s().createElement(
                            'div',
                            { className: Fe },
                            s().createElement(
                                'div',
                                { className: De },
                                _u(e.getSignificantAchievementsList(), (u, e) =>
                                    s().createElement(
                                        'div',
                                        {
                                            className: l()(Be, r && Ce),
                                            key: e,
                                            style: A && !r ? { animationDelay: 150 * (e + 1) + 'ms' } : void 0,
                                            onAnimationStart: Re,
                                        },
                                        (() => {
                                            const e = !A && !r;
                                            return u
                                                ? u.isNew && e
                                                    ? (c++,
                                                      s().createElement(
                                                          s().Fragment,
                                                          null,
                                                          s().createElement(
                                                              'div',
                                                              {
                                                                  className: de,
                                                                  style: { animationDelay: 300 * c + 'ms' },
                                                                  onAnimationStart: Re,
                                                              },
                                                              s().createElement(ae, Ie({}, u, { size: E })),
                                                          ),
                                                          s().createElement(
                                                              'div',
                                                              {
                                                                  className: ge,
                                                                  style: { animationDelay: 300 * c + 'ms' },
                                                              },
                                                              s().createElement(oe, { size: E, isOtherPlayer: r }),
                                                          ),
                                                      ))
                                                    : s().createElement(ae, Ie({}, u, { size: E }))
                                                : s().createElement(oe, { size: E, isOtherPlayer: r });
                                        })(),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                xe = 'Header_base_90',
                Te = 'Header_iconInfo_20',
                ke = R.strings.achievements_page.summary,
                Me = ({ isWTREnabled: u }) =>
                    u
                        ? s().createElement(
                              Iu,
                              { contentId: R.views.lobby.achievements.tooltips.WTRInfoTooltip('resId') },
                              s().createElement(
                                  'div',
                                  { className: xe },
                                  ke.statistic.title(),
                                  s().createElement('div', { className: Te }),
                              ),
                          )
                        : s().createElement('div', { className: xe }, ke.withoutWTR.statistic.title()),
                Oe = 'TextOverflow_base_3b',
                He = ({ content: u, classMix: e }) => {
                    const t = (0, r.useRef)(null),
                        n = (0, r.useState)(!0),
                        a = n[0],
                        o = n[1];
                    return (
                        (0, r.useEffect)(() =>
                            i(() => {
                                const u = t.current;
                                u && u.offsetWidth >= u.scrollWidth && o(!1);
                            }),
                        ),
                        s().createElement(
                            Ou,
                            { isEnabled: a, body: u },
                            s().createElement('div', { ref: t, className: l()(Oe, e) }, u),
                        )
                    );
                },
                We = 'Clan_base_98',
                ze = 'Clan_title_88',
                $e = 'Clan_icon_46',
                Ve = 'Clan_row_e6',
                je = 'Clan_caption_1a',
                Ue = 'Clan_buttonBox_bc',
                Ge = 'Clan_button_1d',
                Ke = R.strings.achievements_page.playerInfo.clan,
                Ye = (0, mu.Pi)(() => {
                    const u = bu(),
                        e = u.model,
                        t = u.controls,
                        n = e.otherPlayerInfo.get(),
                        a = n.clanEmblem,
                        r = n.clanName,
                        o = n.clanPost,
                        l = n.clanJoiningTime;
                    return s().createElement(
                        'div',
                        { className: We },
                        s().createElement(
                            'div',
                            { className: ze },
                            a && s().createElement('div', { className: $e, style: { backgroundImage: `url(${a})` } }),
                            s().createElement(He, { content: r }),
                        ),
                        s().createElement(
                            'div',
                            null,
                            s().createElement(
                                'div',
                                { className: Ve },
                                s().createElement('div', { className: je }, Ke.post()),
                                s().createElement('div', null, o),
                            ),
                            s().createElement(
                                'div',
                                { className: Ve },
                                s().createElement('div', { className: je }, Ke.date()),
                                s().createElement('div', null, l),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: Ue },
                            s().createElement(he, { onClick: t.onOpenProfile, mixClass: Ge }, Ke.button()),
                        ),
                    );
                }),
                qe = 33,
                Xe = 0,
                Je = !0,
                Ze = 'play';
            const Qe = [
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
            function ut() {
                return (
                    (ut =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    ut.apply(this, arguments)
                );
            }
            const et = (0, r.memo)(function (u) {
                    let e = u.width,
                        t = u.height,
                        n = u.getImageSource,
                        a = u.frameCount,
                        o = u.onAnimate,
                        l = u.frameTime,
                        i = void 0 === l ? qe : l,
                        c = u.initialFrameIndex,
                        E = void 0 === c ? Xe : c,
                        A = u.lastFrameIndex,
                        F = void 0 === A ? a - 1 : A,
                        m = u.loop,
                        D = void 0 === m ? Je : m,
                        B = u.state,
                        C = void 0 === B ? Ze : B,
                        d = u.onAnimationDone,
                        g = u.onAnimationComplete,
                        _ = u.poster,
                        f = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Qe);
                    const v = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            const u = v.current;
                            if (!u) return;
                            const e = u.getContext('2d'),
                                t = (t) => {
                                    e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                };
                            switch (C) {
                                case 'play':
                                    return (function () {
                                        const u = at(E, F, n),
                                            e = tt(E, F),
                                            a = window.setInterval(() => {
                                                const n = e(),
                                                    r = u.get(n);
                                                r
                                                    ? (null == o || o(n, r),
                                                      t(r),
                                                      n === F &&
                                                          (null == g || g(),
                                                          D || (null == d || d(), window.clearInterval(a))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, i);
                                        return () => window.clearInterval(a);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const u = 0 === E && _ ? { path: _, x: 0, y: 0 } : n(E),
                                            e = new Image();
                                        e.src = u.path;
                                        const a = () => t(nt(u, e));
                                        return e.addEventListener('load', a), () => e.removeEventListener('load', a);
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [i, n, E, F, D, o, g, d, _, C]),
                        s().createElement('canvas', ut({}, f, { width: e, height: t, ref: v }))
                    );
                }),
                tt = (u, e) => {
                    let t = u;
                    return () => {
                        const n = t;
                        return (t += 1), t > e && (t = u), n;
                    };
                },
                nt = (u, e) => Object.assign({}, u, { img: e }),
                at = (u, e, t) => {
                    const n = new Map(),
                        a = {};
                    for (let r = u; r <= e; r++) {
                        const u = t(r),
                            e = a[u.path];
                        if (e) n.set(r, nt(u, e));
                        else {
                            const e = new Image();
                            (a[u.path] = e),
                                (e.src = u.path),
                                (e.onerror = () => {
                                    console.error(
                                        `[CanvasSequence] Error loading image(${r})`,
                                        u.path,
                                        `(${u.x},${u.y})`,
                                    );
                                }),
                                n.set(r, nt(u, e));
                        }
                    }
                    return n;
                },
                rt = 'DogTag_base_75',
                st = 'DogTag_glow_47',
                ot = 'DogTag_icon_ff',
                lt = 'DogTag_frame_fd',
                it = 'DogTag_tooltipHitZone_1e',
                ct = {
                    width: 300,
                    height: 200,
                    frameCount: 42,
                    chunk: { count: 3, rows: 5, columns: 3 },
                    getChunkPath:
                        ((Et = 'R.images.gui.maps.icons.achievements.summary.dog_tag.frame_sequence_'),
                        (u) => `${Et}${u}`),
                };
            var Et;
            const At = (function (u) {
                    const e = u.chunk,
                        t = e.rows * e.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % e.columns) * u.width,
                            s = Math.trunc(a / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(n / t)), x: r, y: s };
                    };
                })(ct),
                Ft = (0, mu.Pi)(() => {
                    const u = bu().model.dogTagModel.get(),
                        e = u.background,
                        t = u.engraving,
                        n = u.isHighlighted,
                        a = u.engravingCompId,
                        r = u.backgroundCompId;
                    return s().createElement(
                        'div',
                        { className: rt },
                        s().createElement('div', { className: st }),
                        s().createElement('div', {
                            className: ot,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(e)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: ot,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(t)})`,
                            },
                        }),
                        n &&
                            s().createElement(et, {
                                width: ct.width,
                                height: ct.height,
                                frameCount: ct.frameCount,
                                getImageSource: At,
                                className: lt,
                            }),
                        s().createElement(
                            Wu,
                            { tooltipArgs: { args: { compId: r } } },
                            s().createElement('div', { className: it }),
                        ),
                        s().createElement(
                            Wu,
                            { tooltipArgs: { args: { compId: a } } },
                            s().createElement('div', { className: it }),
                        ),
                    );
                }),
                mt = {
                    base: 'PlayerInfo_base_ed',
                    dogTag: 'PlayerInfo_dogTag_17',
                    iconLock: 'PlayerInfo_iconLock_ab',
                    dogTagStatus: 'PlayerInfo_dogTagStatus_f8',
                    separator: 'PlayerInfo_separator_83',
                    clan: 'PlayerInfo_clan_87',
                },
                Dt = R.strings.achievements_page.playerInfo,
                Bt = (0, mu.Pi)(() => {
                    const u = bu().model,
                        e = u.dogTagModel.get().isEnabled,
                        t = u.otherPlayerInfo.get().isInClan;
                    return s().createElement(
                        'div',
                        { className: mt.base },
                        s().createElement(
                            'div',
                            { className: mt.dogTag },
                            e
                                ? s().createElement(Ft, null)
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('div', { className: mt.iconLock }),
                                      s().createElement('div', { className: mt.dogTagStatus }, Dt.dogTag.unavailable()),
                                  ),
                        ),
                        s().createElement('div', { className: mt.separator }),
                        s().createElement(
                            'div',
                            { className: mt.clan },
                            t
                                ? s().createElement(Ye, null)
                                : s().createElement('div', { className: mt.clanStatus }, Dt.clan.noClan()),
                        ),
                    );
                }),
                Ct = 600,
                dt = (u, e) => {
                    let t;
                    const n = setTimeout(() => {
                        t = u();
                    }, e);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                },
                gt = 'DowngradeAnimation_base_1c',
                _t = 'DowngradeAnimation_oldElement_48',
                ft = 'DowngradeAnimation_newElement_d5',
                vt = ({ oldElement: u, newElement: e, delay: t = 0 }) => (
                    (0, r.useEffect)(() => dt(() => m(R.sounds.achievements_leveldown()), t), [t]),
                    s().createElement(
                        'div',
                        { className: gt },
                        s().createElement(
                            'div',
                            { className: _t, style: { animationDelay: `${t}ms`, animationDuration: '300ms' } },
                            u,
                        ),
                        s().createElement(
                            'div',
                            { className: ft, style: { animationDelay: `${t + 300}ms`, animationDuration: '300ms' } },
                            e,
                        ),
                    )
                );
            const pt = [
                'src',
                'className',
                'autoplay',
                'style',
                'loop',
                'isPrebufferKeyframes',
                'keyframesNameConfig',
                'onClick',
                'onError',
            ];
            function ht() {
                return (
                    (ht =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    ht.apply(this, arguments)
                );
            }
            const bt = (0, r.forwardRef)(function (u, e) {
                    let t = u.src,
                        n = u.className,
                        a = u.autoplay,
                        o = void 0 !== a && a,
                        l = u.style,
                        E = u.loop,
                        A = void 0 !== E && E,
                        F = u.isPrebufferKeyframes,
                        m = u.keyframesNameConfig,
                        D = u.onClick,
                        B = u.onError,
                        C = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, pt);
                    const d = e,
                        g = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    const u = g.current;
                                    if (!d || !u || !F)
                                        return void (null != u && u.cohFastSeek && (u.cohFastSeek = !1));
                                    const e = u.cohGetKeyframeTimestamps();
                                    e.length > 0
                                        ? ((u.cohFastSeek = !0),
                                          e.map((e) => {
                                              null == u || u.cohPrebufferKeyframe(e);
                                          }))
                                        : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                }),
                            [F, d],
                        ),
                        (0, r.useEffect)(() => {
                            if (d && g.current) {
                                const u = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: du.ZT },
                                    e = () => {
                                        let e = 0;
                                        const t = (function (u) {
                                                let e = 0;
                                                return [
                                                    function t() {
                                                        u(), (e = requestAnimationFrame(t));
                                                    },
                                                    function () {
                                                        cancelAnimationFrame(e);
                                                    },
                                                ];
                                            })(() => {
                                                if (g.current) {
                                                    const t = g.current,
                                                        n = t.currentTime,
                                                        a = t.duration;
                                                    if (
                                                        (e !== n &&
                                                            (u.changeTimeHandlers.forEach((u) =>
                                                                u({ currentTime: n, duration: a }),
                                                            ),
                                                            (e = n)),
                                                        g.current.paused || !d || !F)
                                                    )
                                                        return;
                                                    const r = g.current.cohGetKeyframeTimestamps();
                                                    r.forEach((e, t) => {
                                                        n > r[t] - 0.02 &&
                                                            n < r[t] &&
                                                            u.changeKeyframeHandlers.forEach((u) => {
                                                                const n = Object.keys(null != m ? m : {})[t];
                                                                return u({ time: e, name: `${m ? n : `Point_${t}`}` });
                                                            });
                                                    });
                                                }
                                            }),
                                            n = t[0],
                                            a = t[1];
                                        return n(), a;
                                    };
                                u.changeTimeLoop = e();
                                const t = (e) => (
                                        u.changeTimeHandlers.push(e),
                                        () => {
                                            const t = u.changeTimeHandlers,
                                                n = t.indexOf(e);
                                            n < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                  )
                                                : t.splice(n, 1);
                                        }
                                    ),
                                    n = (e) => (
                                        u.changeKeyframeHandlers.push(e),
                                        () => {
                                            const t = u.changeKeyframeHandlers,
                                                n = t.indexOf(e);
                                            n < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                  )
                                                : t.splice(n, 1);
                                        }
                                    ),
                                    a = () => {
                                        var u;
                                        return null == (u = g.current) ? void 0 : u.currentTime;
                                    },
                                    r = () => {
                                        var u;
                                        return null == (u = g.current) ? void 0 : u.duration;
                                    },
                                    s = (u) => {
                                        g.current && (g.current.currentTime = c(0, g.current.duration, u));
                                    },
                                    o = () => {
                                        var u;
                                        return null == (u = g.current) ? void 0 : u.play();
                                    },
                                    l = () => {
                                        var u;
                                        return null == (u = g.current) ? void 0 : u.pause();
                                    },
                                    i = () => {
                                        l(), s(0);
                                    },
                                    E = () => {
                                        var u, e;
                                        return null !=
                                            (u = null == (e = g.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                            ? u
                                            : [];
                                    },
                                    A = (u) => {
                                        s(u), o();
                                    },
                                    D = (u) => {
                                        s(u), l();
                                    },
                                    B = () => {
                                        (u.changeTimeHandlers = []),
                                            (u.changeKeyframeHandlers = []),
                                            null == u.changeTimeLoop || u.changeTimeLoop();
                                    },
                                    C = (u, e) => {
                                        var t;
                                        return (
                                            null == (t = g.current) || t.addEventListener(u, e),
                                            () => {
                                                var t;
                                                return null == (t = g.current) ? void 0 : t.removeEventListener(u, e);
                                            }
                                        );
                                    },
                                    _ = (u, e) => {
                                        var t;
                                        return (
                                            null == (t = g.current) || t.removeEventListener(u, e),
                                            () => {
                                                var t;
                                                return null == (t = g.current) ? void 0 : t.removeEventListener(u, e);
                                            }
                                        );
                                    };
                                return (
                                    (d.current = {
                                        on: C,
                                        off: _,
                                        play: o,
                                        pause: l,
                                        stop: i,
                                        cleanup: B,
                                        getCurrentTime: a,
                                        getDuration: r,
                                        getCachedKeyframes: E,
                                        goToAndPlay: A,
                                        goToAndStop: D,
                                        setCurrentTime: s,
                                        domRef: g.current,
                                        onChangeTime: t,
                                        onKeyframes: n,
                                    }),
                                    () => {
                                        B(), (d.current = null);
                                    }
                                );
                            }
                        }, [m, d, F]),
                        (0, r.useEffect)(() => {
                            g.current && o && g.current.play();
                        }, [o, A]),
                        (0, r.useEffect)(() => {
                            if (g.current)
                                return () => {
                                    g.current && g.current.pause();
                                };
                        }, []),
                        s().createElement(
                            'video',
                            ht({ src: t, className: n, style: l, loop: A, ref: g, onClick: D, onError: B }, C),
                        )
                    );
                }),
                yt = (0, r.memo)(bt),
                wt = 'LevelUpAnimation_base_8a',
                Nt = 'LevelUpAnimation_particlesAnim_e9',
                St = 'LevelUpAnimation_oldElement_08',
                Pt = 'LevelUpAnimation_newElement_4a',
                It = (u) => u * u,
                Rt = ({ oldElement: u, newElement: e, delay: t = 0, onError: n }) => {
                    const a = (0, r.useRef)(null),
                        o = (0, r.useRef)(null),
                        l = R.videos.achievements.$dyn('up_particles'),
                        i = (0, r.useState)(l.length > 0),
                        c = i[0],
                        E = i[1],
                        A = (0, r.useRef)(null),
                        F = (0, g.useSpring)(() => ({
                            progress: 0,
                            onChange: (u) => {
                                if (!o.current || !a.current) return;
                                const e = u.value.progress;
                                (a.current.style.maskImage = `linear-gradient(55deg, transparent ${e}%, #000 ${e}%)`),
                                    (o.current.style.maskImage = `linear-gradient(55deg, #000 ${e}%, transparent ${e}%)`);
                            },
                        }))[1];
                    (0, r.useEffect)(
                        () =>
                            dt(() => {
                                var u;
                                null == (u = A.current) || u.play(), m(R.sounds.achievements_levelup());
                            }, t),
                        [t, A],
                    ),
                        (0, r.useEffect)(() => {
                            F.start({
                                from: { progress: 0 },
                                to: { progress: 100 },
                                delay: t,
                                config: { duration: 1700, easing: It },
                            });
                        }, [F, t]);
                    const D = (0, r.useCallback)(() => {
                        n && n('R.videos.achievements.up_particles'), E(!1);
                    }, [n, E]);
                    return s().createElement(
                        'div',
                        { className: wt },
                        c && s().createElement(yt, { ref: A, onEnded: () => E(!1), className: Nt, src: l, onError: D }),
                        s().createElement('div', { className: St, ref: a }, u),
                        s().createElement('div', { className: Pt, ref: o }, e),
                    );
                },
                Lt = 'Content_icon_bd',
                xt = R.images.gui.maps.icons.achievements.rating,
                Tt = (u, e = !1) =>
                    e
                        ? xt.c_180x180
                        : u >= yu.cJ.Large
                          ? xt.c_360x360
                          : u >= yu.cJ.Medium
                            ? xt.c_280x280
                            : xt.c_180x180,
                kt = (u, e, t, n = !0, a = !1) => ({
                    backgroundImage: n ? `url(${Tt(t, a).$dyn(`rating_${u}_${e}`)})` : `url(${Tt(t, a).wotpr()})`,
                }),
                Mt = (0, mu.Pi)(() => {
                    const u = bu(),
                        e = u.model,
                        t = u.controls,
                        n = e.root.get(),
                        a = n.currentRatingRank,
                        o = n.prevCurrentRatingRank,
                        l = n.currentRatingSubRank,
                        c = n.prevCurrentRatingSubRank,
                        E = n.isWTREnabled,
                        A = n.battlesLeftCount,
                        F = n.isOtherPlayer,
                        m = e.computes.getRatingWidgetState,
                        D = (0, yu.GS)().mediaSize,
                        B = (0, r.useState)(vu.Init),
                        C = B[0],
                        d = B[1],
                        g = 0 === A,
                        _ = g ? a : 0,
                        f = g ? l : 0;
                    return (
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    d(m());
                                }),
                            [m],
                        ),
                        s().createElement(
                            'div',
                            null,
                            (() => {
                                switch (C) {
                                    case vu.LevelUp:
                                        return s().createElement(Rt, {
                                            oldElement: s().createElement('div', {
                                                className: Lt,
                                                style: kt(o, c, D, E, F),
                                            }),
                                            newElement: s().createElement('div', {
                                                className: Lt,
                                                style: kt(a, l, D, E, F),
                                            }),
                                            delay: 900,
                                            onError: t.onError,
                                        });
                                    case vu.Downgrade:
                                        return s().createElement(vt, {
                                            oldElement: s().createElement('div', {
                                                className: Lt,
                                                style: kt(o, c, D, E, F),
                                            }),
                                            newElement: s().createElement('div', {
                                                className: Lt,
                                                style: kt(a, l, D, E, F),
                                            }),
                                            delay: Ct,
                                        });
                                    case vu.Static:
                                        return s().createElement('div', { className: Lt, style: kt(_, f, D, E, F) });
                                    default:
                                        return null;
                                }
                            })(),
                        )
                    );
                }),
                Ot = {
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
            let Ht;
            !(function (u) {
                (u.Init = 'init'), (u.Increase = 'increase'), (u.Decrease = 'decrease');
            })(Ht || (Ht = {}));
            const Wt = (0, mu.Pi)(() => {
                    const u = bu().model,
                        e = u.root.get(),
                        t = e.personalScore,
                        n = e.prevPersonalScore,
                        a = e.isWTREnabled,
                        o = u.computes.getRatingWidgetState,
                        i = (0, r.useState)(Ht.Init),
                        c = i[0],
                        E = i[1],
                        A = o() === vu.LevelUp || o() === vu.Downgrade;
                    return (
                        (0, r.useEffect)(() => {
                            A && (t > n ? E(Ht.Increase) : t < n && E(Ht.Decrease));
                        }, [A, t, n]),
                        s().createElement(
                            'div',
                            { className: l()(Ot.base, Ot[`base__${c}`], !a && Ot.base__wotpr) },
                            A
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: l()(Ot.prevPoints), style: { animationDelay: '600ms' } },
                                          s().createElement(Ku, { value: n }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: l()(Ot.newPoints), style: { animationDelay: '600ms' } },
                                          s().createElement(Ku, { value: t }),
                                      ),
                                  )
                                : s().createElement(Ku, { value: t }),
                        )
                    );
                }),
                zt = 'Status_base_48',
                $t = 'Status_statusText_33',
                Vt = 'Status_caption_5f',
                jt = R.strings.achievements_page.ratingWidget.status;
            var Ut;
            !(function (u) {
                (u.Initial = 'initial'),
                    (u.Progress = 'progress'),
                    (u.WTRDisabled = 'WTRDisabled'),
                    (u.OtherPlayer = 'otherPlayer'),
                    (u.OtherPlayerWithProgress = 'otherPlayerWithProgress');
            })(Ut || (Ut = {}));
            const Gt = (0, mu.Pi)(() => {
                    const u = bu().model.root.get(),
                        e = u.requiredNumberOfBattles,
                        t = u.battlesLeftCount,
                        n = u.isWTREnabled,
                        a = u.isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: zt },
                        (() => {
                            switch (
                                ((u, e, t, n) =>
                                    n
                                        ? t
                                            ? Ut.OtherPlayerWithProgress
                                            : Ut.OtherPlayer
                                        : t
                                          ? u === e
                                              ? Ut.Initial
                                              : Ut.Progress
                                          : Ut.WTRDisabled)(e, t, n, a)
                            ) {
                                case Ut.Initial:
                                    return s().createElement(ye, {
                                        classMix: $t,
                                        text: jt.initial(),
                                        binding: { amount: s().createElement('div', { className: Vt }, e) },
                                    });
                                case Ut.Progress:
                                    return s().createElement(ye, {
                                        classMix: $t,
                                        text: jt.progress(),
                                        binding: { amount: s().createElement('div', { className: Vt }, t) },
                                    });
                                case Ut.WTRDisabled:
                                    return s().createElement(ye, { classMix: $t, text: jt.withoutWTR() });
                                case Ut.OtherPlayer:
                                    return s().createElement(ye, { classMix: $t, text: jt.otherPlayer() });
                                case Ut.OtherPlayerWithProgress:
                                    return s().createElement(ye, {
                                        classMix: $t,
                                        text: jt.OtherPlayerWithProgress(),
                                        binding: { amount: s().createElement('div', { className: Vt }, e) },
                                    });
                                default:
                                    return s().createElement('div', null);
                            }
                        })(),
                    );
                }),
                Kt = 'RatingWidget_base_dc',
                Yt = 'RatingWidget_image_7d',
                qt = 'RatingWidget_decoration_9f',
                Xt = 'RatingWidget_decoration__otherPlayer_95',
                Jt = 'RatingWidget_particlesBox_8d',
                Zt = 'RatingWidget_particles_36',
                Qt = 'RatingWidget_footer_0e',
                un = (0, mu.Pi)(() => {
                    const u = bu().model,
                        e = u.root.get(),
                        t = e.battlesLeftCount,
                        n = e.isWTREnabled,
                        a = e.isOtherPlayer,
                        o = u.computes.getRatingWidgetState,
                        c = (0, r.useState)(!1),
                        E = c[0],
                        A = c[1],
                        F = 0 === t,
                        m = o() === vu.Downgrade;
                    return (
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    A(!0);
                                }),
                            [],
                        ),
                        s().createElement(
                            Iu,
                            {
                                contentId: n
                                    ? R.views.lobby.achievements.tooltips.WTRMainTooltip('resId')
                                    : R.views.lobby.achievements.tooltips.WOTPRMainTooltip('resId'),
                            },
                            s().createElement(
                                'div',
                                { className: Kt },
                                s().createElement(
                                    'div',
                                    { className: Yt },
                                    s().createElement('div', { className: l()(qt, a && Xt) }),
                                    F &&
                                        E &&
                                        s().createElement(
                                            'div',
                                            { className: Jt, style: m ? { animationDelay: '1200ms' } : void 0 },
                                            s().createElement('div', { className: Zt }),
                                        ),
                                    s().createElement(Mt, null),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Qt },
                                    F ? s().createElement(Wt, null) : s().createElement(Gt, null),
                                ),
                            ),
                        )
                    );
                }),
                en = 'Statistic_base_79',
                tn = 'Statistic_list_41',
                nn = 'Statistic_part_90',
                an = 'Statistic_item_87',
                rn = 'Statistic_ratingWidget_9d',
                sn = 'StatisticItem_base_d9',
                on = 'StatisticItem_icon_4e',
                ln = 'StatisticItem_amount_de',
                cn = 'StatisticItem_title_f7',
                En = 'StatisticItem_caption_65',
                An = 'StatisticItem_footer_61',
                Fn = 'StatisticItem_footerText_2f',
                mn = R.strings.achievements_page.summary,
                Dn = (u, e, t) =>
                    t
                        ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(u)})` }
                        : e >= yu.cJ.Large
                          ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.big.$dyn(u)})` }
                          : e >= yu.cJ.Medium
                            ? {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.medium.$dyn(u)})`,
                              }
                            : {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(u)})`,
                              },
                Bn = (0, r.memo)(({ type: u, mainValue: e, additionalValue: t, isOtherPlayer: n }) => {
                    const a = (0, yu.GS)().mediaSize;
                    return s().createElement(
                        Iu,
                        { contentId: R.views.lobby.achievements.tooltips.KPITooltip('resId'), args: { kpiType: u } },
                        s().createElement(
                            'div',
                            { className: sn },
                            s().createElement('div', { className: on, style: Dn(u, a, n) }),
                            s().createElement('div', { className: ln }, e),
                            s().createElement('div', { className: cn }, mn.main.$dyn(u)),
                            s().createElement(
                                'div',
                                { className: An },
                                s().createElement(ye, {
                                    classMix: Fn,
                                    text: mn.additional.$dyn(u),
                                    binding: { value: s().createElement('div', { className: En }, t) },
                                }),
                            ),
                        ),
                    );
                }),
                Cn = (0, mu.Pi)(() => {
                    const u = bu().model,
                        e = u.computes,
                        t = Math.floor(e.getStatisticList().length / 2),
                        n = e.getStatisticList().slice(0, t),
                        a = e.getStatisticList().slice(t);
                    return s().createElement(
                        'div',
                        { className: en },
                        s().createElement(
                            'div',
                            { className: tn },
                            s().createElement(
                                'div',
                                { className: nn },
                                n.map(({ type: e, mainValue: t, additionalValue: n }, a) =>
                                    s().createElement(
                                        'div',
                                        { className: an, key: a },
                                        s().createElement(Bn, {
                                            type: e,
                                            mainValue: t,
                                            additionalValue: n,
                                            isOtherPlayer: u.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: rn }, s().createElement(un, null)),
                            s().createElement(
                                'div',
                                { className: nn },
                                a.map(({ type: e, mainValue: t, additionalValue: n }, a) =>
                                    s().createElement(
                                        'div',
                                        { className: an, key: a },
                                        s().createElement(Bn, {
                                            type: e,
                                            mainValue: t,
                                            additionalValue: n,
                                            isOtherPlayer: u.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                dn = 'Content_base_3e',
                gn = 'Content_base__otherPlayer_61',
                _n = 'Content_header_2d',
                fn = 'Content_statistic_6c',
                vn = 'Content_playerInfo_62',
                pn = (0, mu.Pi)(() => {
                    const u = bu().model.root.get(),
                        e = u.isWTREnabled,
                        t = u.isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: l()(dn, t && gn) },
                        s().createElement('div', { className: _n }, s().createElement(Me, { isWTREnabled: e })),
                        s().createElement('div', { className: fn }, s().createElement(Cn, null)),
                        s().createElement(Le, null),
                        t && s().createElement('div', { className: vn }, s().createElement(Bt, null)),
                    );
                }),
                hn = 'Error_base_e9',
                bn = 'Error_icon_51',
                yn = 'Error_title_fe',
                wn = 'Error_description_85',
                Nn = 'Error_caption_74',
                Sn = R.strings.achievements_page.summary.disabled,
                Pn = (0, mu.Pi)(() => {
                    const u = bu().model.root.get().isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: hn },
                        s().createElement('div', { className: bn }),
                        u
                            ? s().createElement('div', { className: Nn }, Sn.otherPlayer.caption())
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  s().createElement('div', { className: yn }, Sn.title()),
                                  s().createElement('div', { className: wn }, Sn.description()),
                              ),
                    );
                }),
                In = 'App_base_bb',
                Rn = 'App_base__withScroll_05',
                Ln = 'App_scroll_be',
                xn = 'App_scrollContent_2a',
                Tn = 'App_bar_52',
                kn = 'App_content_13',
                Mn = 'App_footer_b9',
                On = 'App_errorWrapper_65',
                Hn = 'App_error_a2',
                Wn = R.strings.achievements_page.summary.accountInfo,
                zn = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2),
                $n = (0, mu.Pi)(() => {
                    const u = bu().model.root.get(),
                        e = u.registrationDate,
                        t = u.lastVisitDate,
                        n = u.lastVisitTime,
                        a = u.isSummaryEnabled,
                        r = u.isOtherPlayer,
                        o = z(),
                        i = (0, g.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            config: { duration: 200, easing: zn },
                        }),
                        c = ou(Wn.registrationDate(), { registrationDate: e }),
                        E = ou(Wn.lastVisit(), { lastVisitDate: t, lastVisitTime: n });
                    return s().createElement(
                        g.animated.div,
                        { className: l()(In, r && a && Rn), style: i },
                        a
                            ? s().createElement(
                                  s().Fragment,
                                  null,
                                  r
                                      ? s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                ru.Vertical.Area,
                                                { api: o, className: Ln, classNames: { content: xn } },
                                                s().createElement(
                                                    'div',
                                                    { className: kn },
                                                    s().createElement(pn, null),
                                                ),
                                            ),
                                            s().createElement(ru.Vertical.Bar, { api: o, classNames: { base: Tn } }),
                                        )
                                      : s().createElement(pn, null),
                                  s().createElement('div', { className: Mn }, `${Du(c)}${t && n ? Du(E) : ''}`),
                              )
                            : s().createElement(
                                  'div',
                                  { className: On },
                                  s().createElement('div', { className: Hn }, s().createElement(Pn, null)),
                              ),
                    );
                }),
                Vn = () =>
                    s().createElement(hu, { options: { context: 'model.summaryModel' } }, s().createElement($n, null));
        },
    },
]);
