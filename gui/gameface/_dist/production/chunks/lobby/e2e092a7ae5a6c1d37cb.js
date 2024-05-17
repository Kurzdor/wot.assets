'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [131],
    {
        131: (u, e, t) => {
            t.r(e), t.d(e, { default: () => Gn });
            var n = {};
            t.r(n),
                t.d(n, {
                    Area: () => W,
                    Bar: () => M,
                    DefaultScroll: () => H,
                    Direction: () => _,
                    defaultSettings: () => f,
                    useHorizontalScrollApi: () => v,
                });
            var a = {};
            t.r(a), t.d(a, { Area: () => au, Bar: () => eu, Default: () => nu, useVerticalScrollApi: () => z });
            var r = t(6179),
                s = t.n(r),
                l = t(6483),
                o = t.n(l);
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
                c = (u, e, t) => (t < u ? u : t > e ? e : t);
            var E = t(3138);
            const A = [];
            function F(u) {
                const e = (0, r.useRef)(u);
                return (
                    (0, r.useLayoutEffect)(() => {
                        e.current = u;
                    }),
                    (0, r.useCallback)((...u) => (0, e.current)(...u), A)
                );
            }
            function D(u, e, t = []) {
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
                            function l() {
                                a && clearTimeout(a);
                            }
                            function o(...o) {
                                const i = this,
                                    c = Date.now() - s;
                                function E() {
                                    (s = Date.now()), t.apply(i, o);
                                }
                                r ||
                                    (n && !a && E(),
                                    l(),
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
                                (o.cancel = function () {
                                    l(), (r = !0);
                                }),
                                o
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
                p = ({
                    getContainerSize: u,
                    getBounds: e,
                    setScrollPosition: t,
                    getDirection: n,
                    getWrapperSize: a,
                    triggerMouseMoveOnUpdate: s = !1,
                }) => {
                    const l = (u, t) => {
                        const n = e(u),
                            a = n[0],
                            r = n[1];
                        return r <= a ? 0 : c(a, r, t);
                    };
                    return (o = {}) => {
                        const c = o.settings,
                            A = void 0 === c ? f : c,
                            D = (0, r.useRef)(null),
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
                                    E.O.view.forceTriggerMouseMove();
                                },
                                [],
                                150,
                            ),
                            p = (0, g.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (u) => {
                                    const e = D.current;
                                    e && (t(e, u), C.trigger('change', u), s && _());
                                },
                                onRest: (u) => C.trigger('rest', u),
                                onStart: (u) => C.trigger('start', u),
                                onPause: (u) => C.trigger('pause', u),
                            })),
                            v = p[0],
                            h = p[1],
                            b = (0, r.useCallback)(
                                (u, e, t) => {
                                    var n;
                                    const a = v.scrollPosition.get(),
                                        r = (null != (n = v.scrollPosition.goal) ? n : 0) - a;
                                    return l(u, e * t + r + a);
                                },
                                [v.scrollPosition],
                            ),
                            y = (0, r.useCallback)(
                                (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                    const n = D.current;
                                    n &&
                                        h.start({
                                            scrollPosition: l(n, u),
                                            immediate: e,
                                            reset: t,
                                            config: A.animationConfig,
                                            from: { scrollPosition: l(n, v.scrollPosition.get()) },
                                        });
                                },
                                [h, A.animationConfig, v.scrollPosition],
                            ),
                            N = (0, r.useCallback)(
                                (u) => {
                                    const e = D.current,
                                        t = m.current;
                                    if (!e || !t) return;
                                    const n = ((u, e) => {
                                            switch (e.type) {
                                                case 'proportional':
                                                    return a(u) / e.factor;
                                                case 'fixed':
                                                    return e.value;
                                            }
                                        })(t, A.step),
                                        r = b(e, u, n);
                                    y(r);
                                },
                                [y, b, A.step],
                            ),
                            S = (0, r.useCallback)(
                                (u) => {
                                    0 !== u.deltaY && N(n(u)),
                                        D.current && C.trigger('mouseWheel', u, v.scrollPosition, e(D.current));
                                },
                                [v.scrollPosition, N, C],
                            ),
                            w = ((u, e = []) => {
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
                                        const u = D.current;
                                        u &&
                                            (y(l(u, v.scrollPosition.goal), { immediate: !0 }),
                                            C.trigger('resizeHandled'));
                                    }),
                                [y, v.scrollPosition.goal],
                            ),
                            P = F(() => {
                                const u = D.current;
                                if (!u) return;
                                const e = l(u, v.scrollPosition.goal);
                                e !== v.scrollPosition.goal && y(e, { immediate: !0 }), C.trigger('recalculateContent');
                            });
                        (0, r.useEffect)(
                            () => (
                                window.addEventListener('resize', w),
                                () => {
                                    window.removeEventListener('resize', w);
                                }
                            ),
                            [w],
                        );
                        return (0, r.useMemo)(
                            () => ({
                                getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                getContainerSize: () => (D.current ? u(D.current) : void 0),
                                getBounds: () =>
                                    D.current
                                        ? e(D.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: A.step.clampedArrowStepTimeout,
                                clampPosition: l,
                                handleMouseWheel: S,
                                applyScroll: y,
                                applyStepTo: N,
                                contentRef: D,
                                wrapperRef: m,
                                scrollPosition: h,
                                animationScroll: v,
                                recalculateContent: P,
                                events: { on: C.on, off: C.off },
                            }),
                            [v.scrollPosition, y, N, C.off, C.on, P, S, h, A.step.clampedArrowStepTimeout],
                        );
                    };
                },
                v = p({
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
                N = 'HorizontalBar_rightButton_03',
                S = 'HorizontalBar_track_0d',
                w = 'HorizontalBar_thumb_fd',
                P = 'HorizontalBar_rail_32',
                I = 'disable',
                x = { pending: !1, offset: 0 },
                T = (u) => {
                    var e;
                    return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                },
                L = () => {},
                k = (u, e) => Math.max(20, u.offsetWidth * e),
                M = (0, r.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = T, onDrag: n = L }) => {
                    const a = (0, r.useRef)(null),
                        l = (0, r.useRef)(null),
                        A = (0, r.useRef)(null),
                        B = (0, r.useRef)(null),
                        C = (0, r.useRef)(null),
                        d = u.stepTimeout || 100,
                        g = (0, r.useState)(x),
                        f = g[0],
                        p = g[1],
                        v = (0, r.useCallback)(
                            (u) => {
                                p(u), C.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: C.current });
                            },
                            [n],
                        ),
                        R = () => {
                            const e = B.current,
                                t = C.current,
                                n = u.getWrapperSize(),
                                a = u.getContainerSize();
                            if (!(n && e && t && a)) return;
                            const r = u.animationScroll.scrollPosition.get(),
                                s = Math.min(1, n / a),
                                o = c(0, 1, r / (a - n)),
                                i = (e.offsetWidth - k(e, s)) * o;
                            (t.style.transform = `translateX(${0 | i}px)`),
                                ((u) => {
                                    if (l.current && A.current && B.current && C.current) {
                                        if (0 === u)
                                            return l.current.classList.add(I), void A.current.classList.remove(I);
                                        if (
                                            ((e = B.current),
                                            (t = C.current),
                                            u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                        )
                                            return l.current.classList.remove(I), void A.current.classList.add(I);
                                        var e, t;
                                        l.current.classList.remove(I), A.current.classList.remove(I);
                                    }
                                })(i);
                        },
                        M = F(() => {
                            (() => {
                                const e = C.current,
                                    t = B.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(r && e && n && t)) return;
                                const s = Math.min(1, n / r);
                                (e.style.width = `${k(t, s)}px`),
                                    (e.style.display = 'flex'),
                                    a.current && (1 === s ? a.current.classList.add(b) : a.current.classList.remove(b));
                            })(),
                                R();
                        });
                    (0, r.useEffect)(() => i(M)),
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    const e = () => {
                                        R();
                                    };
                                    let t = L;
                                    const n = () => {
                                        t(), (t = i(M));
                                    };
                                    return (
                                        u.events.on('recalculateContent', M),
                                        u.events.on('rest', e),
                                        u.events.on('change', e),
                                        u.events.on('resizeHandled', n),
                                        () => {
                                            t(),
                                                u.events.off('recalculateContent', M),
                                                u.events.off('rest', e),
                                                u.events.off('change', e),
                                                u.events.off('resizeHandled', n);
                                        }
                                    );
                                }),
                            [u],
                        ),
                        (0, r.useEffect)(() => {
                            if (!f.pending) return;
                            const e = E.O.client.events.mouse.move(([e, t]) => {
                                    var a;
                                    const r = u.contentRef.current,
                                        s = u.wrapperRef.current;
                                    if (!r || !s) return;
                                    const l = B.current,
                                        o = C.current;
                                    if (!l || !o) return;
                                    if ('inside' === t && e.clientX < 0) return;
                                    const i = e.clientX - f.offset - l.getBoundingClientRect().x,
                                        c = (i / l.offsetWidth) * (null != (a = u.getContainerSize()) ? a : 0);
                                    u.scrollPosition.start({
                                        scrollPosition: u.clampPosition(r, c),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: c });
                                }),
                                t = E.O.client.events.mouse.up(() => {
                                    e(), v(x);
                                });
                            return () => {
                                e(), t();
                            };
                        }, [u, f.offset, f.pending, n, v]);
                    const O = D((e) => u.applyStepTo(e), d, [u]),
                        H = O[0],
                        W = O[1];
                    (0, r.useEffect)(
                        () => (
                            document.addEventListener('mouseup', W, !0),
                            () => document.removeEventListener('mouseup', W, !0)
                        ),
                        [W],
                    );
                    const z = (u) => {
                        u.target.classList.contains(I) || m('highlight');
                    };
                    return s().createElement(
                        'div',
                        { className: o()(h, e.base), ref: a, onWheel: u.handleMouseWheel },
                        s().createElement('div', {
                            className: o()(y, e.leftButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(I) || 0 !== u.button || (m('play'), H(_.Next));
                            },
                            onMouseUp: W,
                            ref: l,
                            onMouseEnter: z,
                        }),
                        s().createElement(
                            'div',
                            {
                                className: o()(S, e.track),
                                onMouseDown: (e) => {
                                    const n = C.current;
                                    if (n && 0 === e.button)
                                        if ((m('play'), e.target === n))
                                            v({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                        else {
                                            ((e) => {
                                                const n = C.current,
                                                    a = u.contentRef.current;
                                                if (!n || !a) return;
                                                const r = t(u);
                                                u.applyScroll(u.animationScroll.scrollPosition.get() + r * e);
                                            })(e.screenX > n.getBoundingClientRect().x ? _.Prev : _.Next);
                                        }
                                },
                                ref: B,
                                onMouseEnter: z,
                            },
                            s().createElement('div', { ref: C, className: o()(w, e.thumb) }),
                            s().createElement('div', { className: o()(P, e.rail) }),
                        ),
                        s().createElement('div', {
                            className: o()(N, e.rightButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(I) || 0 !== u.button || (m('play'), H(_.Prev));
                            },
                            onMouseUp: W,
                            ref: A,
                            onMouseEnter: z,
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
                    classNames: l,
                    scrollClassName: i,
                    getStepByRailClick: c,
                    onDrag: E,
                }) => {
                    const A = (0, r.useMemo)(() => {
                            const u = n || {};
                            return Object.assign({}, u, { base: o()(O.base, u.base) });
                        }, [n]),
                        F = (0, r.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                    return s().createElement(
                        'div',
                        { className: o()(O.defaultScroll, t), onWheel: e.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(O.defaultScrollArea, a) },
                            s().createElement(W, { className: i, api: F, classNames: l }, u),
                        ),
                        s().createElement(M, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                    );
                },
                W = ({ api: u, className: e, classNames: t, children: n }) => (
                    (0, r.useEffect)(() => i(u.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: o()(O.base, e) },
                        s().createElement(
                            'div',
                            {
                                className: o()(O.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: u.handleMouseWheel,
                                ref: u.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: o()(O.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            (W.Bar = M), (W.Default = H);
            const z = p({
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
                X = 'disable',
                q = () => {},
                J = { pending: !1, offset: 0 },
                Z = (u) => {
                    var e;
                    return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                },
                Q = (u, e) => {
                    u.contentRef.current && e(u.contentRef.current);
                },
                uu = (u, e) => Math.max(20, u.offsetHeight * e),
                eu = (0, r.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Z, onDrag: n = q }) => {
                    const a = (0, r.useRef)(null),
                        l = (0, r.useRef)(null),
                        A = (0, r.useRef)(null),
                        B = (0, r.useRef)(null),
                        C = (0, r.useRef)(null),
                        d = u.stepTimeout || 100,
                        g = (0, r.useState)(J),
                        f = g[0],
                        p = g[1],
                        v = (0, r.useCallback)(
                            (u) => {
                                p(u), C.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: C.current });
                            },
                            [n],
                        ),
                        h = F(() => {
                            const e = C.current,
                                t = B.current,
                                n = u.getWrapperSize(),
                                r = u.getContainerSize();
                            if (!(n && r && e && t)) return;
                            const s = Math.min(1, n / r);
                            return (
                                (e.style.height = `${uu(t, s)}px`),
                                (e.style.display = 'flex'),
                                a.current && (1 === s ? a.current.classList.add(V) : a.current.classList.remove(V)),
                                s
                            );
                        }),
                        b = F(() => {
                            const e = B.current,
                                t = C.current,
                                n = u.getWrapperSize(),
                                a = u.getContainerSize();
                            if (!(n && e && t && a)) return;
                            const r = u.animationScroll.scrollPosition.get(),
                                s = Math.min(1, n / a),
                                o = c(0, 1, r / (a - n)),
                                i = (e.offsetHeight - uu(e, s)) * o;
                            (t.style.transform = `translateY(${0 | i}px)`),
                                ((u) => {
                                    if (l.current && A.current && B.current && C.current) {
                                        if (0 === Math.round(u))
                                            return l.current.classList.add(X), void A.current.classList.remove(X);
                                        if (
                                            ((e = B.current),
                                            (t = C.current),
                                            u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                        )
                                            return l.current.classList.remove(X), void A.current.classList.add(X);
                                        var e, t;
                                        l.current.classList.remove(X), A.current.classList.remove(X);
                                    }
                                })(i);
                        }),
                        y = F(() => {
                            Q(u, () => {
                                h(), b();
                            });
                        });
                    (0, r.useEffect)(() => i(y)),
                        (0, r.useEffect)(() => {
                            const e = () => {
                                Q(u, () => {
                                    b();
                                });
                            };
                            let t = q;
                            const n = () => {
                                t(), (t = i(y));
                            };
                            return (
                                u.events.on('recalculateContent', y),
                                u.events.on('rest', e),
                                u.events.on('change', e),
                                u.events.on('resizeHandled', n),
                                () => {
                                    t(),
                                        u.events.off('recalculateContent', y),
                                        u.events.off('rest', e),
                                        u.events.off('change', e),
                                        u.events.off('resizeHandled', n);
                                }
                            );
                        }, [u]),
                        (0, r.useEffect)(() => {
                            if (!f.pending) return;
                            const e = E.O.client.events.mouse.up(() => {
                                    v(J);
                                }),
                                t = E.O.client.events.mouse.move(([e]) => {
                                    Q(u, (t) => {
                                        const a = B.current,
                                            r = C.current,
                                            s = u.getContainerSize();
                                        if (!a || !r || !s) return;
                                        const l = e.screenY - f.offset - a.getBoundingClientRect().y,
                                            o = (l / a.offsetHeight) * s;
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(t, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: t.scrollTop },
                                        }),
                                            n({ type: 'dragging', thumb: r, thumbOffset: l, contentOffset: o });
                                    });
                                });
                            return () => {
                                e(), t();
                            };
                        }, [u, f.offset, f.pending, n, v]);
                    const N = D((e) => u.applyStepTo(e), d, [u]),
                        S = N[0],
                        w = N[1];
                    (0, r.useEffect)(
                        () => (
                            document.addEventListener('mouseup', w, !0),
                            () => document.removeEventListener('mouseup', w, !0)
                        ),
                        [w],
                    );
                    const P = (u) => {
                        u.target.classList.contains(X) || m('highlight');
                    };
                    return s().createElement(
                        'div',
                        { className: o()($, e.base), ref: a, onWheel: u.handleMouseWheel },
                        s().createElement('div', {
                            className: o()(j, e.topButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(X) || 0 !== u.button || (m('play'), S(_.Next));
                            },
                            ref: l,
                            onMouseEnter: P,
                        }),
                        s().createElement(
                            'div',
                            {
                                className: o()(G, e.track),
                                onMouseDown: (e) => {
                                    const n = C.current;
                                    if (n && 0 === e.button)
                                        if ((m('play'), e.target === n))
                                            v({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                        else {
                                            ((e) => {
                                                C.current &&
                                                    Q(u, (n) => {
                                                        if (!n) return;
                                                        const a = t(u),
                                                            r = u.clampPosition(n, n.scrollTop + a * e);
                                                        u.applyScroll(r);
                                                    });
                                            })(e.screenY > n.getBoundingClientRect().y ? _.Prev : _.Next);
                                        }
                                },
                                ref: B,
                                onMouseEnter: P,
                            },
                            s().createElement('div', { ref: C, className: o()(K, e.thumb) }),
                            s().createElement('div', { className: o()(Y, e.rail) }),
                        ),
                        s().createElement('div', {
                            className: o()(U, e.bottomButton),
                            onMouseDown: (u) => {
                                u.target.classList.contains(X) || 0 !== u.button || (m('play'), S(_.Prev));
                            },
                            onMouseUp: w,
                            ref: A,
                            onMouseEnter: P,
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
                    scrollClassName: l,
                    scrollClassNames: i,
                    getStepByRailClick: c,
                    onDrag: E,
                }) => {
                    const A = (0, r.useMemo)(() => {
                            const u = n || {};
                            return Object.assign({}, u, { base: o()(tu.base, u.base) });
                        }, [n]),
                        F = (0, r.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                    return s().createElement(
                        'div',
                        { className: o()(tu.defaultScroll, t), onWheel: e.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(tu.area, a) },
                            s().createElement(au, { className: l, classNames: i, api: F }, u),
                        ),
                        s().createElement(eu, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                    );
                },
                au = ({ className: u, classNames: e, children: t, api: n }) => (
                    (0, r.useEffect)(() => i(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: o()(tu.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(tu.content, null == e ? void 0 : e.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
            au.Default = nu;
            const ru = { Vertical: a, Horizontal: n };
            var su = t(1281);
            let lu;
            function ou(u, e) {
                return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
            }
            function iu(u, e) {
                return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                    const t = 0 === u.indexOf('%') ? 2 : 1;
                    return String(e[u.slice(t, -t)]);
                });
            }
            !(function (u) {
                (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
            })(lu || (lu = {}));
            const cu = (u) => u.replace(/&nbsp;/g, ' '),
                Eu = (u, e, t) => {
                    if (t % 2) {
                        const t = u.pop();
                        return [...u, t + e];
                    }
                    return [...u, e];
                },
                Au = (u, e, t) => {
                    if (0 === t) return [e];
                    if (t % 2) return [...u, ' ' === e ? ' ' : e];
                    {
                        const t = u.pop();
                        return [...u, t + e];
                    }
                },
                Fu = (u, e, t = lu.left) => u.split(e).reduce(t === lu.left ? Eu : Au, []),
                Du = (() => {
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
                mu = ['zh_cn', 'zh_sg', 'zh_tw'],
                Bu = (u, e = lu.left) => {
                    const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                    if (mu.includes(t)) return Du(u);
                    if ('ja' === t) {
                        return (0, su.D4)()
                            .parse(u)
                            .map((u) => cu(u));
                    }
                    return ((u, e = lu.left) => {
                        let t = [];
                        const n =
                                /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                            a = cu(u);
                        return Fu(a, /( )/, e).forEach((u) => (t = t.concat(Fu(u, n, lu.left)))), t;
                    })(u, e);
                };
            var Cu = t(3403);
            const du = (u) => (
                u.lastIndexOf(R.strings.common.common.dot()) !== u.length - 1 && (u += R.strings.common.common.dot()), u
            );
            let gu;
            !(function (u) {
                (u.AVAILABLE = 'available'),
                    (u.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (u.DISABLED = 'disabled');
            })(gu || (gu = {}));
            var _u = t(3215),
                fu = t(4598);
            function pu(u, e) {
                var t;
                if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
            }
            function vu(u, e) {
                return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
            }
            var hu = t(3946);
            let bu;
            !(function (u) {
                (u.Init = 'init'), (u.Static = 'static'), (u.LevelUp = 'levelUp'), (u.Downgrade = 'downgrade');
            })(bu || (bu = {}));
            const yu = (0, _u.q)()(
                    ({ observableModel: u }) => {
                        const e = {
                                root: u.object(),
                                otherPlayerInfo: u.object('otherPlayerInfo'),
                                dogTagModel: u.object('otherPlayerInfo.dogTagModel'),
                                statistic: u.array('statistic'),
                                significantAchievements: u.array('significantAchievements'),
                            },
                            t = (0, hu.Om)(() => vu(e.statistic.get(), (u) => Object.assign({}, u, { type: u.type })), {
                                equals: fu.jv,
                            }),
                            n = (0, hu.Om)(
                                () =>
                                    Array(e.root.get().achievementRibbonLength)
                                        .fill({})
                                        .map((u, t) => pu(e.significantAchievements.get(), t)),
                                { equals: fu.jv },
                            ),
                            a = (0, hu.Om)(() => {
                                const u = e.root.get(),
                                    t = u.currentRatingRank,
                                    n = u.prevCurrentRatingRank,
                                    a = u.currentRatingSubRank,
                                    r = u.prevCurrentRatingSubRank,
                                    s = u.isWTREnabled,
                                    l = u.isOtherPlayer,
                                    o = u.battlesLeftCount;
                                if (!s || l || o > 0) return bu.Static;
                                if (t === n) {
                                    if (a > r) return bu.LevelUp;
                                    if (a < r) return bu.Downgrade;
                                }
                                return t > n ? bu.LevelUp : t < n ? bu.Downgrade : bu.Static;
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
                    }),
                ),
                Nu = yu[0],
                Su = yu[1];
            var wu = t(5415);
            var Pu = t(4179);
            const Iu = [
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
            function Ru(u) {
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
            const xu = (u, e, t = {}, n = 0) => {
                    viewEnv.handleViewEvent(
                        Object.assign(
                            {
                                __Type: 'GFViewEventProxy',
                                type: Pu.B0.TOOLTIP,
                                contentID: u,
                                decoratorID: e,
                                targetID: n,
                            },
                            t,
                        ),
                    );
                },
                Tu = (u) => {
                    let e = u.children,
                        t = u.contentId,
                        n = u.args,
                        a = u.onMouseEnter,
                        s = u.onMouseLeave,
                        l = u.onMouseDown,
                        o = u.onClick,
                        i = u.ignoreShowDelay,
                        c = void 0 !== i && i,
                        E = u.ignoreMouseClick,
                        A = void 0 !== E && E,
                        F = u.decoratorId,
                        D = void 0 === F ? 0 : F,
                        m = u.isEnabled,
                        B = void 0 === m || m,
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
                        })(u, Iu);
                    const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                        v = (0, r.useMemo)(
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
                            (p.current.isVisible && p.current.timeoutId) ||
                                (xu(t, D, { isMouseEvent: !0, on: !0, arguments: Ru(n) }, v),
                                g && g(),
                                (p.current.isVisible = !0));
                        }, [t, D, n, v, g]),
                        b = (0, r.useCallback)(() => {
                            if (p.current.isVisible || p.current.timeoutId) {
                                const u = p.current.timeoutId;
                                u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                    xu(t, D, { on: !1 }, v),
                                    p.current.isVisible && _ && _(),
                                    (p.current.isVisible = !1);
                            }
                        }, [t, D, v, _]),
                        y = (0, r.useCallback)((u) => {
                            p.current.isVisible &&
                                ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                (p.current.hideTimerId = window.setTimeout(() => {
                                    const e = document.elementFromPoint(u.clientX, u.clientY);
                                    e && !e.isSameNode(p.current.prevTarget) && b();
                                }, 200)));
                        }, []);
                    (0, r.useEffect)(() => {
                        const u = p.current.hideTimerId;
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
                                          ((N = e.props.onMouseEnter),
                                          (u) => {
                                              (u.clientX === window.innerWidth && u.clientY === window.innerHeight) ||
                                                  ((p.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                  a && a(u),
                                                  N && N(u));
                                          }),
                                      onMouseLeave: ((u) => (e) => {
                                          b(), null == s || s(e), null == u || u(e);
                                      })(e.props.onMouseLeave),
                                      onClick: ((u) => (e) => {
                                          !1 === A && b(), null == o || o(e), null == u || u(e);
                                      })(e.props.onClick),
                                      onMouseDown: ((u) => (e) => {
                                          !1 === A && b(), null == l || l(e), null == u || u(e);
                                      })(e.props.onMouseDown),
                                  },
                                  f,
                              ),
                          )
                        : e;
                    var N;
                },
                Lu = ['children'];
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
            const Mu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Lu);
                    return s().createElement(
                        Tu,
                        ku(
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
                Ou = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
            const Wu = R.views.common.tooltip_window.simple_tooltip_content,
                zu = (u) => {
                    let e = u.children,
                        t = u.body,
                        n = u.header,
                        a = u.note,
                        l = u.alert,
                        o = u.args,
                        i = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Ou);
                    const c = (0, r.useMemo)(() => {
                        const u = Object.assign({}, o, { body: t, header: n, note: a, alert: l });
                        for (const e in u) void 0 === u[e] && delete u[e];
                        return u;
                    }, [l, t, n, a, o]);
                    return s().createElement(
                        Tu,
                        Hu(
                            {
                                contentId:
                                    ((E = null == o ? void 0 : o.hasHtmlContent),
                                    E ? Wu.SimpleTooltipHtmlContent('resId') : Wu.SimpleTooltipContent('resId')),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                args: c,
                            },
                            i,
                        ),
                        e,
                    );
                    var E;
                };
            function $u() {
                return (
                    ($u =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    $u.apply(this, arguments)
                );
            }
            const Vu = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = s().createElement('div', { className: t }, u);
                    if (e.header || e.body) return s().createElement(zu, e, n);
                    const a = e.contentId;
                    return a ? s().createElement(Tu, $u({}, e, { contentId: a }), n) : s().createElement(Mu, e, n);
                },
                ju = 'AchievementTooltip_base_4d',
                Uu = ({ children: u, name: e, block: t, isEnabled: n = !0 }) =>
                    s().createElement(
                        Vu,
                        { tooltipArgs: { args: { name: e, block: t }, isEnabled: n }, className: ju },
                        u,
                    );
            let Gu, Ku, Yu;
            !(function (u) {
                (u.Repeatable = 'repeatable'),
                    (u.Class = 'class'),
                    (u.Custom = 'custom'),
                    (u.Series = 'series'),
                    (u.Single = 'single'),
                    (u.Rare = 'rare');
            })(Gu || (Gu = {})),
                (function (u) {
                    (u.None = 'none'), (u.Simple = 'simple'), (u.Series = 'series'), (u.Stages = 'stages');
                })(Ku || (Ku = {})),
                (function (u) {
                    (u.ExtraSmall = 'extraSmall'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.ExtraLarge = 'extraLarge');
                })(Yu || (Yu = {}));
            const Xu = {
                base: 'Achievement_base_1a',
                image: 'Achievement_image_09',
                base__small: 'Achievement_base__small_c8',
                base__medium: 'Achievement_base__medium_e1',
                base__large: 'Achievement_base__large_1d',
                base__extraLarge: 'Achievement_base__extraLarge_1b',
                counter: 'Achievement_counter_97',
            };
            class qu extends s().PureComponent {
                render() {
                    let u;
                    if ('gold' === this.props.format) u = Pu.B3.GOLD;
                    else u = Pu.B3.INTEGRAL;
                    const e = Pu.Z5.getNumberFormat(this.props.value, u);
                    return void 0 !== this.props.value && void 0 !== e ? e : null;
                }
            }
            qu.defaultProps = { format: 'integral' };
            const Ju = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                Zu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
            const Qu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                ue = (u) =>
                    Qu
                        ? `${u}`
                        : (function (u) {
                              let e = '';
                              for (let t = Zu.length - 1; t >= 0; t--) for (; u >= Zu[t]; ) (e += Ju[t]), (u -= Zu[t]);
                              return e;
                          })(u),
                ee = {
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
            let te;
            !(function (u) {
                (u.Small = 'small'), (u.Medium = 'medium'), (u.Large = 'large');
            })(te || (te = {}));
            const ne = ({ value: u, type: e = Ku.Simple, size: t = te.Medium, className: n }) =>
                    s().createElement(
                        'div',
                        { className: o()(ee.base, ee[`base__${e}`], ee[`base__${t}`], n) },
                        s().createElement(
                            'div',
                            { className: ee.background },
                            s().createElement(
                                'div',
                                { className: ee.count },
                                e === Ku.Stages ? ue(u) : s().createElement(qu, { value: u, format: 'integral' }),
                            ),
                            e === Ku.Series &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o()(ee.arrow, ee.arrow__left) }),
                                    s().createElement('div', { className: o()(ee.arrow, ee.arrow__right) }),
                                ),
                        ),
                    ),
                ae = R.images.gui.maps.icons.achievement,
                re =
                    (R.strings.achievements,
                    ({ name: u, resourceName: e, type: t, rareIconId: n, rareBigIconId: a, value: r, size: s }) => {
                        if (n && a) return s === Yu.ExtraSmall ? n : a;
                        const l = viewEnv.getScale(),
                            o = ((u, e, t, n) => (t === Gu.Class ? `${u}${n}` : u.match(/^\d/) ? `c_${u}` : e))(
                                u,
                                e,
                                t,
                                r,
                            );
                        return s === Yu.ExtraSmall && l < 2 ? ae.$dyn(o) : ae.big.$dyn(o);
                    }),
                se = {
                    [Yu.ExtraSmall]: te.Small,
                    [Yu.Small]: te.Small,
                    [Yu.Medium]: te.Medium,
                    [Yu.Large]: te.Medium,
                    [Yu.ExtraLarge]: te.Large,
                },
                le = ({
                    name: u,
                    resourceName: e,
                    block: t,
                    type: n,
                    counterType: a,
                    size: r,
                    value: l,
                    rareIconId: i,
                    rareBigIconId: c,
                    isTooltipEnabled: E = !0,
                    className: A,
                }) => {
                    const F = re({
                        name: u,
                        resourceName: e,
                        type: n,
                        size: r,
                        value: l,
                        rareIconId: i,
                        rareBigIconId: c,
                    });
                    return s().createElement(
                        Uu,
                        { name: u, block: t, isEnabled: E },
                        s().createElement(
                            'div',
                            { className: o()(Xu.base, Xu[`base__${r}`], A) },
                            s().createElement(
                                'div',
                                { className: Xu.image, style: { backgroundImage: `url(${F})` } },
                                a !== Ku.None &&
                                    s().createElement(ne, { type: a, size: se[r], value: l, className: Xu.counter }),
                            ),
                        ),
                    );
                };
            let oe;
            !(function (u) {
                (u.DISABLED_LAYOUT = 'disabledLayout'),
                    (u.NOT_ENOUGH_ACHIEVEMENTS = 'notEnoughAchievements'),
                    (u.DISABLED = 'disabled'),
                    (u.OTHER_PLAYER = 'otherPlayer');
            })(oe || (oe = {}));
            const ie = {
                    base: 'AchievementPlaceholder_base_06',
                    image: 'AchievementPlaceholder_image_92',
                    base__small: 'AchievementPlaceholder_base__small_b7',
                    base__medium: 'AchievementPlaceholder_base__medium_ef',
                    base__large: 'AchievementPlaceholder_base__large_c5',
                    base__extraLarge: 'AchievementPlaceholder_base__extraLarge_d5',
                },
                ce = ({ size: u, isOtherPlayer: e = !1 }) =>
                    s().createElement(
                        Tu,
                        {
                            contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                            args: { tooltipType: e ? oe.OTHER_PLAYER : oe.DISABLED_LAYOUT },
                        },
                        s().createElement(
                            'div',
                            { className: o()(ie.base, ie[`base__${u}`]) },
                            s().createElement('div', { className: ie.image }),
                        ),
                    ),
                Ee = {
                    [wu.cJ.ExtraSmall]: Yu.Small,
                    [wu.cJ.Small]: Yu.Small,
                    [wu.cJ.Medium]: Yu.Large,
                    [wu.cJ.Large]: Yu.Large,
                    [wu.cJ.ExtraLarge]: Yu.ExtraLarge,
                },
                Ae = 'Achievements_base_96',
                Fe = 'Achievements_base__visibleWithAnimation_0a',
                De = 'Achievements_base__hide_33',
                me = 'Achievements_header_a9',
                Be = 'Achievements_ribbon_06',
                Ce = 'Achievements_base__fullAnimation_10',
                de = 'Achievements_list_55',
                ge = 'Achievements_item_a4',
                _e = 'Achievements_item__fixedIndent_0c',
                fe = 'Achievements_achievement_64',
                pe = 'Achievements_achievementPlaceholder_42',
                ve = {
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
            let he, be;
            !(function (u) {
                (u.main = 'main'),
                    (u.primary = 'primary'),
                    (u.primaryGreen = 'primaryGreen'),
                    (u.primaryRed = 'primaryRed'),
                    (u.secondary = 'secondary'),
                    (u.ghost = 'ghost');
            })(he || (he = {})),
                (function (u) {
                    (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                })(be || (be = {}));
            const ye = ({
                children: u,
                size: e,
                isFocused: t,
                type: n,
                disabled: a,
                mixClass: l,
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
                    p = (0, r.useState)(!1),
                    v = p[0],
                    h = p[1],
                    b = (0, r.useState)(!1),
                    y = b[0],
                    N = b[1],
                    S = (0, r.useCallback)(() => {
                        a || (d.current && (d.current.focus(), f(!0)));
                    }, [a]),
                    w = (0, r.useCallback)(
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
                            a || (null !== i && m(i), E && E(u), N(!0));
                        },
                        [a, i, E],
                    ),
                    x = (0, r.useCallback)(
                        (u) => {
                            A && A(u);
                        },
                        [A],
                    ),
                    T = (0, r.useCallback)(
                        (u) => {
                            a || (D && D(u), h(!1));
                        },
                        [a, D],
                    ),
                    L = (0, r.useCallback)(
                        (u) => {
                            a || (null !== c && m(c), F && F(u), t && S(), h(!0));
                        },
                        [a, c, F, S, t],
                    ),
                    k = (0, r.useCallback)(
                        (u) => {
                            a || (B && B(u), h(!1));
                        },
                        [a, B],
                    ),
                    M = o()(
                        ve.base,
                        ve[`base__${n}`],
                        {
                            [ve.base__disabled]: a,
                            [ve[`base__${e}`]]: e,
                            [ve.base__focus]: _,
                            [ve.base__highlightActive]: v,
                            [ve.base__firstHover]: y,
                        },
                        l,
                    ),
                    O = o()(ve.state, ve.state__default);
                return (
                    (0, r.useEffect)(
                        () => (
                            document.addEventListener('mousedown', w),
                            () => {
                                document.removeEventListener('mousedown', w);
                            }
                        ),
                        [w],
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
                            onMouseMove: x,
                            onMouseUp: T,
                            onMouseDown: L,
                            onMouseLeave: k,
                            onClick: P,
                        },
                        n !== he.ghost &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement('div', { className: ve.back }),
                                s().createElement('span', { className: ve.texture }),
                            ),
                        s().createElement(
                            'span',
                            { className: O },
                            s().createElement('span', { className: ve.stateDisabled }),
                            s().createElement('span', { className: ve.stateHighlightHover }),
                            s().createElement('span', { className: ve.stateHighlightActive }),
                        ),
                        s().createElement(
                            'span',
                            { className: ve.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            u,
                        ),
                    )
                );
            };
            ye.defaultProps = { type: he.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const Ne = (0, r.memo)(ye),
                Se = 'FormatText_base_d0',
                we = ({ binding: u, text: e = '', classMix: t, alignment: n = lu.left, formatWithBrackets: a }) => {
                    if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                    const l = a && u ? ou(e, u) : e;
                    return s().createElement(
                        r.Fragment,
                        null,
                        l.split('\n').map((e, a) =>
                            s().createElement(
                                'div',
                                { className: o()(Se, t), key: `${e}-${a}` },
                                ((u, e, t) =>
                                    u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Bu(u, e))))(
                                    e,
                                    n,
                                    u,
                                ).map((u, e) => s().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                            ),
                        ),
                    );
                },
                Pe = {
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
                Ie = R.strings.achievements_page.summary.achievements,
                Re = (u) => {
                    switch (u) {
                        case gu.DISABLED:
                            return { tooltipType: oe.DISABLED };
                        case gu.NOT_ENOUGH_ACHIEVEMENTS:
                            return { tooltipType: oe.NOT_ENOUGH_ACHIEVEMENTS };
                        default:
                            return { tooltipType: oe.DISABLED };
                    }
                },
                xe = (0, Cu.Pi)(() => {
                    const u = Su(),
                        e = u.model,
                        t = u.controls,
                        n = e.root.get(),
                        a = n.editState,
                        r = n.numberOfUniqueAwards,
                        l = n.totalAwards,
                        i = n.isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: o()(Pe.base, Pe[`base__${a}`]) },
                        s().createElement('div', { className: Pe.title }, Ie.title()),
                        !i &&
                            s().createElement(
                                Tu,
                                {
                                    contentId: R.views.lobby.achievements.tooltips.EditingTooltip('resId'),
                                    args: Re(a),
                                    isEnabled: a !== gu.AVAILABLE,
                                },
                                s().createElement(
                                    'div',
                                    {
                                        className: Pe.buttonContainer,
                                        id: a === gu.AVAILABLE ? 'summary-customization-button' : void 0,
                                    },
                                    s().createElement(
                                        Ne,
                                        {
                                            type: he.ghost,
                                            size: be.medium,
                                            disabled: a !== gu.AVAILABLE,
                                            onClick: t.onAchievementsSettings,
                                            mixClass: Pe.editButton,
                                        },
                                        s().createElement('div', { className: Pe.buttonIcon }),
                                    ),
                                    a === gu.DISABLED &&
                                        s().createElement(
                                            'div',
                                            { className: Pe.alert },
                                            s().createElement('div', { className: Pe.alertIcon }),
                                        ),
                                ),
                            ),
                        r > 0 &&
                            l > 0 &&
                            s().createElement(
                                'div',
                                { className: o()(Pe.info, i && Pe.info__inline) },
                                s().createElement(we, {
                                    text: Ie.uniqueAwards(),
                                    binding: {
                                        value: s().createElement(
                                            'div',
                                            { className: Pe.accent },
                                            s().createElement(qu, { value: r }),
                                        ),
                                    },
                                }),
                                s().createElement(we, {
                                    classMix: Pe.infoItem,
                                    text: Ie.totalAwards(),
                                    binding: {
                                        value: s().createElement(
                                            'div',
                                            { className: Pe.accent },
                                            s().createElement(qu, { value: l }),
                                        ),
                                    },
                                }),
                            ),
                    );
                });
            function Te() {
                return (
                    (Te =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    Te.apply(this, arguments)
                );
            }
            const Le = (u) => {
                    u.target === u.currentTarget && m(R.sounds.achievements_medal());
                },
                ke = (0, Cu.Pi)(() => {
                    const u = Su().model,
                        e = u.computes,
                        t = u.root.get(),
                        n = t.editState,
                        a = t.isSuccessfullyEdited,
                        r = t.isOtherPlayer,
                        l = t.isEditOpened,
                        i = (0, wu.GS)().mediaSize;
                    let c = 0;
                    const E = r ? Yu.Small : Ee[i],
                        A = n === gu.AVAILABLE && a;
                    return s().createElement(
                        'div',
                        { className: o()(Ae, A && Ce, !l && A && Fe, l && De) },
                        s().createElement('div', { className: me }, s().createElement(xe, null)),
                        s().createElement(
                            'div',
                            { className: Be },
                            s().createElement(
                                'div',
                                { className: de },
                                vu(e.getSignificantAchievementsList(), (u, e) =>
                                    s().createElement(
                                        'div',
                                        {
                                            className: o()(ge, r && _e),
                                            key: e,
                                            style: A && !r ? { animationDelay: 150 * (e + 1) + 'ms' } : void 0,
                                            onAnimationStart: Le,
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
                                                                  className: fe,
                                                                  style: { animationDelay: 300 * c + 'ms' },
                                                                  onAnimationStart: Le,
                                                              },
                                                              s().createElement(le, Te({}, u, { size: E })),
                                                          ),
                                                          s().createElement(
                                                              'div',
                                                              {
                                                                  className: pe,
                                                                  style: { animationDelay: 300 * c + 'ms' },
                                                              },
                                                              s().createElement(ce, { size: E, isOtherPlayer: r }),
                                                          ),
                                                      ))
                                                    : s().createElement(le, Te({}, u, { size: E }))
                                                : s().createElement(ce, { size: E, isOtherPlayer: r });
                                        })(),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                Me = 'Header_base_90',
                Oe = 'Header_iconInfo_20',
                He = R.strings.achievements_page.summary,
                We = ({ isWTREnabled: u }) =>
                    u
                        ? s().createElement(
                              Tu,
                              { contentId: R.views.lobby.achievements.tooltips.WTRInfoTooltip('resId') },
                              s().createElement(
                                  'div',
                                  { className: Me },
                                  He.statistic.title(),
                                  s().createElement('div', { className: Oe }),
                              ),
                          )
                        : s().createElement('div', { className: Me }, He.withoutWTR.statistic.title()),
                ze = 'TextOverflow_base_3b',
                $e = ({ content: u, classMix: e }) => {
                    const t = (0, r.useRef)(null),
                        n = (0, r.useState)(!0),
                        a = n[0],
                        l = n[1];
                    return (
                        (0, r.useEffect)(() =>
                            i(() => {
                                const u = t.current;
                                u && u.offsetWidth >= u.scrollWidth && l(!1);
                            }),
                        ),
                        s().createElement(
                            zu,
                            { isEnabled: a, body: u },
                            s().createElement('div', { ref: t, className: o()(ze, e) }, u),
                        )
                    );
                },
                Ve = 'Clan_base_98',
                je = 'Clan_title_88',
                Ue = 'Clan_icon_46',
                Ge = 'Clan_row_e6',
                Ke = 'Clan_caption_1a',
                Ye = 'Clan_buttonBox_bc',
                Xe = 'Clan_button_1d',
                qe = R.strings.achievements_page.playerInfo.clan,
                Je = (0, Cu.Pi)(() => {
                    const u = Su(),
                        e = u.model,
                        t = u.controls,
                        n = e.otherPlayerInfo.get(),
                        a = n.clanEmblem,
                        r = n.clanName,
                        l = n.clanPost,
                        o = n.clanJoiningTime;
                    return s().createElement(
                        'div',
                        { className: Ve },
                        s().createElement(
                            'div',
                            { className: je },
                            a && s().createElement('div', { className: Ue, style: { backgroundImage: `url(${a})` } }),
                            s().createElement($e, { content: r }),
                        ),
                        s().createElement(
                            'div',
                            null,
                            s().createElement(
                                'div',
                                { className: Ge },
                                s().createElement('div', { className: Ke }, qe.post()),
                                s().createElement('div', null, l),
                            ),
                            s().createElement(
                                'div',
                                { className: Ge },
                                s().createElement('div', { className: Ke }, qe.date()),
                                s().createElement('div', null, o),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: Ye },
                            s().createElement(Ne, { onClick: t.onOpenProfile, mixClass: Xe }, qe.button()),
                        ),
                    );
                }),
                Ze = 33,
                Qe = 0,
                ut = !0,
                et = 'play';
            const tt = [
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
            function nt() {
                return (
                    (nt =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    nt.apply(this, arguments)
                );
            }
            const at = (0, r.memo)(function (u) {
                    let e = u.width,
                        t = u.height,
                        n = u.getImageSource,
                        a = u.frameCount,
                        l = u.onAnimate,
                        o = u.frameTime,
                        i = void 0 === o ? Ze : o,
                        c = u.initialFrameIndex,
                        E = void 0 === c ? Qe : c,
                        A = u.lastFrameIndex,
                        F = void 0 === A ? a - 1 : A,
                        D = u.loop,
                        m = void 0 === D ? ut : D,
                        B = u.state,
                        C = void 0 === B ? et : B,
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
                        })(u, tt);
                    const p = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(() => {
                            const u = p.current;
                            if (!u) return;
                            const e = u.getContext('2d'),
                                t = (t) => {
                                    e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                };
                            switch (C) {
                                case 'play':
                                    return (function () {
                                        const u = lt(E, F, n),
                                            e = rt(E, F),
                                            a = window.setInterval(() => {
                                                const n = e(),
                                                    r = u.get(n);
                                                r
                                                    ? (null == l || l(n, r),
                                                      t(r),
                                                      n === F &&
                                                          (null == g || g(),
                                                          m || (null == d || d(), window.clearInterval(a))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, i);
                                        return () => window.clearInterval(a);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const u = 0 === E && _ ? { path: _, x: 0, y: 0 } : n(E),
                                            e = new Image();
                                        e.src = u.path;
                                        const a = () => t(st(u, e));
                                        return e.addEventListener('load', a), () => e.removeEventListener('load', a);
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [i, n, E, F, m, l, g, d, _, C]),
                        s().createElement('canvas', nt({}, f, { width: e, height: t, ref: p }))
                    );
                }),
                rt = (u, e) => {
                    let t = u;
                    return () => {
                        const n = t;
                        return (t += 1), t > e && (t = u), n;
                    };
                },
                st = (u, e) => Object.assign({}, u, { img: e }),
                lt = (u, e, t) => {
                    const n = new Map(),
                        a = {};
                    for (let r = u; r <= e; r++) {
                        const u = t(r),
                            e = a[u.path];
                        if (e) n.set(r, st(u, e));
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
                                n.set(r, st(u, e));
                        }
                    }
                    return n;
                },
                ot = 'DogTag_base_75',
                it = 'DogTag_glow_47',
                ct = 'DogTag_icon_ff',
                Et = 'DogTag_frame_fd',
                At = 'DogTag_tooltipHitZone_1e',
                Ft = {
                    width: 300,
                    height: 200,
                    frameCount: 42,
                    chunk: { count: 3, rows: 5, columns: 3 },
                    getChunkPath:
                        ((Dt = 'R.images.gui.maps.icons.achievements.summary.dog_tag.frame_sequence_'),
                        (u) => `${Dt}${u}`),
                };
            var Dt;
            const mt = (function (u) {
                    const e = u.chunk,
                        t = e.rows * e.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % e.columns) * u.width,
                            s = Math.trunc(a / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(n / t)), x: r, y: s };
                    };
                })(Ft),
                Bt = (0, Cu.Pi)(() => {
                    const u = Su().model.dogTagModel.get(),
                        e = u.background,
                        t = u.engraving,
                        n = u.isHighlighted,
                        a = u.engravingCompId,
                        r = u.backgroundCompId;
                    return s().createElement(
                        'div',
                        { className: ot },
                        s().createElement('div', { className: it }),
                        s().createElement('div', {
                            className: ct,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.backgrounds.$dyn(e)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: ct,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.dogtags.small.engravings.$dyn(t)})`,
                            },
                        }),
                        n &&
                            s().createElement(at, {
                                width: Ft.width,
                                height: Ft.height,
                                frameCount: Ft.frameCount,
                                getImageSource: mt,
                                className: Et,
                            }),
                        s().createElement(
                            Vu,
                            { tooltipArgs: { args: { compId: r } } },
                            s().createElement('div', { className: At }),
                        ),
                        s().createElement(
                            Vu,
                            { tooltipArgs: { args: { compId: a } } },
                            s().createElement('div', { className: At }),
                        ),
                    );
                }),
                Ct = {
                    base: 'PlayerInfo_base_ed',
                    dogTag: 'PlayerInfo_dogTag_17',
                    iconLock: 'PlayerInfo_iconLock_ab',
                    dogTagStatus: 'PlayerInfo_dogTagStatus_f8',
                    separator: 'PlayerInfo_separator_83',
                    clan: 'PlayerInfo_clan_87',
                },
                dt = R.strings.achievements_page.playerInfo,
                gt = (0, Cu.Pi)(() => {
                    const u = Su().model,
                        e = u.dogTagModel.get().isEnabled,
                        t = u.otherPlayerInfo.get().isInClan;
                    return s().createElement(
                        'div',
                        { className: Ct.base },
                        s().createElement(
                            'div',
                            { className: Ct.dogTag },
                            e
                                ? s().createElement(Bt, null)
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('div', { className: Ct.iconLock }),
                                      s().createElement('div', { className: Ct.dogTagStatus }, dt.dogTag.unavailable()),
                                  ),
                        ),
                        s().createElement('div', { className: Ct.separator }),
                        s().createElement(
                            'div',
                            { className: Ct.clan },
                            t
                                ? s().createElement(Je, null)
                                : s().createElement('div', { className: Ct.clanStatus }, dt.clan.noClan()),
                        ),
                    );
                });
            const _t = [
                'src',
                'className',
                'autoplay',
                'style',
                'loop',
                'isPrebufferKeyframes',
                'keyframesNameConfig',
                'onClick',
            ];
            function ft() {
                return (
                    (ft =
                        Object.assign ||
                        function (u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                            }
                            return u;
                        }),
                    ft.apply(this, arguments)
                );
            }
            const pt = (0, r.forwardRef)(function (u, e) {
                    let t = u.src,
                        n = u.className,
                        a = u.autoplay,
                        l = void 0 !== a && a,
                        o = u.style,
                        E = u.loop,
                        A = void 0 !== E && E,
                        F = u.isPrebufferKeyframes,
                        D = u.keyframesNameConfig,
                        m = u.onClick,
                        B = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, _t);
                    const C = e,
                        d = (0, r.useRef)(null);
                    return (
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    const u = d.current;
                                    if (!C || !u || !F)
                                        return void (null != u && u.cohFastSeek && (u.cohFastSeek = !1));
                                    const e = u.cohGetKeyframeTimestamps();
                                    e.length > 0
                                        ? ((u.cohFastSeek = !0),
                                          e.map((e) => {
                                              null == u || u.cohPrebufferKeyframe(e);
                                          }))
                                        : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                }),
                            [F, C],
                        ),
                        (0, r.useEffect)(() => {
                            if (C && d.current) {
                                const u = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: fu.ZT },
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
                                                if (d.current) {
                                                    const t = d.current,
                                                        n = t.currentTime,
                                                        a = t.duration;
                                                    if (
                                                        (e !== n &&
                                                            (u.changeTimeHandlers.forEach((u) =>
                                                                u({ currentTime: n, duration: a }),
                                                            ),
                                                            (e = n)),
                                                        d.current.paused || !C || !F)
                                                    )
                                                        return;
                                                    const r = d.current.cohGetKeyframeTimestamps();
                                                    r.forEach((e, t) => {
                                                        n > r[t] - 0.02 &&
                                                            n < r[t] &&
                                                            u.changeKeyframeHandlers.forEach((u) => {
                                                                const n = Object.keys(null != D ? D : {})[t];
                                                                return u({ time: e, name: `${D ? n : `Point_${t}`}` });
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
                                        return null == (u = d.current) ? void 0 : u.currentTime;
                                    },
                                    r = () => {
                                        var u;
                                        return null == (u = d.current) ? void 0 : u.duration;
                                    },
                                    s = (u) => {
                                        d.current && (d.current.currentTime = c(0, d.current.duration, u));
                                    },
                                    l = () => {
                                        var u;
                                        return null == (u = d.current) ? void 0 : u.play();
                                    },
                                    o = () => {
                                        var u;
                                        return null == (u = d.current) ? void 0 : u.pause();
                                    },
                                    i = () => {
                                        o(), s(0);
                                    },
                                    E = () => {
                                        var u, e;
                                        return null !=
                                            (u = null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                            ? u
                                            : [];
                                    },
                                    A = (u) => {
                                        s(u), l();
                                    },
                                    m = (u) => {
                                        s(u), o();
                                    },
                                    B = () => {
                                        (u.changeTimeHandlers = []),
                                            (u.changeKeyframeHandlers = []),
                                            null == u.changeTimeLoop || u.changeTimeLoop();
                                    },
                                    g = (u, e) => {
                                        var t;
                                        return (
                                            null == (t = d.current) || t.addEventListener(u, e),
                                            () => {
                                                var t;
                                                return null == (t = d.current) ? void 0 : t.removeEventListener(u, e);
                                            }
                                        );
                                    },
                                    _ = (u, e) => {
                                        var t;
                                        return (
                                            null == (t = d.current) || t.removeEventListener(u, e),
                                            () => {
                                                var t;
                                                return null == (t = d.current) ? void 0 : t.removeEventListener(u, e);
                                            }
                                        );
                                    };
                                return (
                                    (C.current = {
                                        on: g,
                                        off: _,
                                        play: l,
                                        pause: o,
                                        stop: i,
                                        cleanup: B,
                                        getCurrentTime: a,
                                        getDuration: r,
                                        getCachedKeyframes: E,
                                        goToAndPlay: A,
                                        goToAndStop: m,
                                        setCurrentTime: s,
                                        domRef: d.current,
                                        onChangeTime: t,
                                        onKeyframes: n,
                                    }),
                                    () => {
                                        B(), (C.current = null);
                                    }
                                );
                            }
                        }, [D, C, F]),
                        (0, r.useEffect)(() => {
                            d.current && l && d.current.play();
                        }, [l, A]),
                        (0, r.useEffect)(() => {
                            if (d.current)
                                return () => {
                                    d.current && d.current.pause();
                                };
                        }, []),
                        s().createElement(
                            'video',
                            ft({ src: t, className: n, style: o, loop: A, ref: d, onClick: m }, B),
                        )
                    );
                }),
                vt = (0, r.memo)(pt),
                ht = 600,
                bt = (u, e) => {
                    let t;
                    const n = setTimeout(() => {
                        t = u();
                    }, e);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                },
                yt = 'DowngradeAnimation_base_1c',
                Nt = 'DowngradeAnimation_oldElement_48',
                St = 'DowngradeAnimation_newElement_d5',
                wt = ({ oldElement: u, newElement: e, delay: t = 0 }) => (
                    (0, r.useEffect)(() => bt(() => m(R.sounds.achievements_leveldown()), t), [t]),
                    s().createElement(
                        'div',
                        { className: yt },
                        s().createElement(
                            'div',
                            { className: Nt, style: { animationDelay: `${t}ms`, animationDuration: '300ms' } },
                            u,
                        ),
                        s().createElement(
                            'div',
                            { className: St, style: { animationDelay: `${t + 300}ms`, animationDuration: '300ms' } },
                            e,
                        ),
                    )
                ),
                Pt = 'LevelUpAnimation_base_8a',
                It = 'LevelUpAnimation_particlesAnim_e9',
                Rt = 'LevelUpAnimation_oldElement_08',
                xt = 'LevelUpAnimation_newElement_4a',
                Tt = (u) => u * u,
                Lt = ({ oldElement: u, newElement: e, delay: t = 0 }) => {
                    const n = (0, r.useRef)(null),
                        a = (0, r.useRef)(null),
                        l = (0, r.useState)(!0),
                        o = l[0],
                        i = l[1],
                        c = (0, r.useRef)(null),
                        E = (0, g.useSpring)(() => ({
                            progress: 0,
                            onChange: (u) => {
                                if (!a.current || !n.current) return;
                                const e = u.value.progress;
                                (n.current.style.maskImage = `linear-gradient(55deg, transparent ${e}%, #000 ${e}%)`),
                                    (a.current.style.maskImage = `linear-gradient(55deg, #000 ${e}%, transparent ${e}%)`);
                            },
                        }))[1];
                    return (
                        (0, r.useEffect)(
                            () =>
                                bt(() => {
                                    var u;
                                    null == (u = c.current) || u.play(), m(R.sounds.achievements_levelup());
                                }, t),
                            [t, c],
                        ),
                        (0, r.useEffect)(() => {
                            E.start({
                                from: { progress: 0 },
                                to: { progress: 100 },
                                delay: t,
                                config: { duration: 1700, easing: Tt },
                            });
                        }, [E, t]),
                        s().createElement(
                            'div',
                            { className: Pt },
                            o &&
                                s().createElement(vt, {
                                    ref: c,
                                    onEnded: () => i(!1),
                                    className: It,
                                    src: R.videos.achievements.up_particles(),
                                }),
                            s().createElement('div', { className: Rt, ref: n }, u),
                            s().createElement('div', { className: xt, ref: a }, e),
                        )
                    );
                },
                kt = 'Content_icon_bd',
                Mt = R.images.gui.maps.icons.achievements.rating,
                Ot = (u, e = !1) =>
                    e
                        ? Mt.c_180x180
                        : u >= wu.cJ.Large
                          ? Mt.c_360x360
                          : u >= wu.cJ.Medium
                            ? Mt.c_280x280
                            : Mt.c_180x180,
                Ht = (u, e, t, n = !0, a = !1) => ({
                    backgroundImage: n ? `url(${Ot(t, a).$dyn(`rating_${u}_${e}`)})` : `url(${Ot(t, a).wotpr()})`,
                }),
                Wt = (0, Cu.Pi)(() => {
                    const u = Su().model,
                        e = u.root.get(),
                        t = e.currentRatingRank,
                        n = e.prevCurrentRatingRank,
                        a = e.currentRatingSubRank,
                        l = e.prevCurrentRatingSubRank,
                        o = e.isWTREnabled,
                        c = e.battlesLeftCount,
                        E = e.isOtherPlayer,
                        A = u.computes.getRatingWidgetState,
                        F = (0, wu.GS)().mediaSize,
                        D = (0, r.useState)(bu.Init),
                        m = D[0],
                        B = D[1],
                        C = 0 === c,
                        d = C ? t : 0,
                        g = C ? a : 0;
                    return (
                        (0, r.useEffect)(
                            () =>
                                i(() => {
                                    B(A());
                                }),
                            [A],
                        ),
                        s().createElement(
                            'div',
                            null,
                            (() => {
                                switch (m) {
                                    case bu.LevelUp:
                                        return s().createElement(Lt, {
                                            oldElement: s().createElement('div', {
                                                className: kt,
                                                style: Ht(n, l, F, o, E),
                                            }),
                                            newElement: s().createElement('div', {
                                                className: kt,
                                                style: Ht(t, a, F, o, E),
                                            }),
                                            delay: 900,
                                        });
                                    case bu.Downgrade:
                                        return s().createElement(wt, {
                                            oldElement: s().createElement('div', {
                                                className: kt,
                                                style: Ht(n, l, F, o, E),
                                            }),
                                            newElement: s().createElement('div', {
                                                className: kt,
                                                style: Ht(t, a, F, o, E),
                                            }),
                                            delay: ht,
                                        });
                                    case bu.Static:
                                        return s().createElement('div', { className: kt, style: Ht(d, g, F, o, E) });
                                    default:
                                        return null;
                                }
                            })(),
                        )
                    );
                }),
                zt = {
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
            let $t;
            !(function (u) {
                (u.Init = 'init'), (u.Increase = 'increase'), (u.Decrease = 'decrease');
            })($t || ($t = {}));
            const Vt = (0, Cu.Pi)(() => {
                    const u = Su().model,
                        e = u.root.get(),
                        t = e.personalScore,
                        n = e.prevPersonalScore,
                        a = e.isWTREnabled,
                        l = u.computes.getRatingWidgetState,
                        i = (0, r.useState)($t.Init),
                        c = i[0],
                        E = i[1],
                        A = l() === bu.LevelUp || l() === bu.Downgrade;
                    return (
                        (0, r.useEffect)(() => {
                            A && (t > n ? E($t.Increase) : t < n && E($t.Decrease));
                        }, [A, t, n]),
                        s().createElement(
                            'div',
                            { className: o()(zt.base, zt[`base__${c}`], !a && zt.base__wotpr) },
                            A
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          'div',
                                          { className: o()(zt.prevPoints), style: { animationDelay: '600ms' } },
                                          s().createElement(qu, { value: n }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: o()(zt.newPoints), style: { animationDelay: '600ms' } },
                                          s().createElement(qu, { value: t }),
                                      ),
                                  )
                                : s().createElement(qu, { value: t }),
                        )
                    );
                }),
                jt = 'RatingWidget_base_dc',
                Ut = 'RatingWidget_image_7d',
                Gt = 'RatingWidget_decoration_9f',
                Kt = 'RatingWidget_decoration__otherPlayer_95',
                Yt = 'RatingWidget_particlesBox_8d',
                Xt = 'RatingWidget_particles_36',
                qt = 'RatingWidget_footer_0e',
                Jt = 'Status_base_48',
                Zt = 'Status_statusText_33',
                Qt = 'Status_caption_5f',
                un = R.strings.achievements_page.ratingWidget.status;
            var en;
            !(function (u) {
                (u.Initial = 'initial'),
                    (u.Progress = 'progress'),
                    (u.WTRDisabled = 'WTRDisabled'),
                    (u.OtherPlayer = 'otherPlayer'),
                    (u.OtherPlayerWithProgress = 'otherPlayerWithProgress');
            })(en || (en = {}));
            const tn = (0, Cu.Pi)(() => {
                    const u = Su().model.root.get(),
                        e = u.requiredNumberOfBattles,
                        t = u.battlesLeftCount,
                        n = u.isWTREnabled,
                        a = u.isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: Jt },
                        (() => {
                            switch (
                                ((u, e, t, n) =>
                                    n
                                        ? t
                                            ? en.OtherPlayerWithProgress
                                            : en.OtherPlayer
                                        : t
                                          ? u === e
                                              ? en.Initial
                                              : en.Progress
                                          : en.WTRDisabled)(e, t, n, a)
                            ) {
                                case en.Initial:
                                    return s().createElement(we, {
                                        classMix: Zt,
                                        text: un.initial(),
                                        binding: { amount: s().createElement('div', { className: Qt }, e) },
                                    });
                                case en.Progress:
                                    return s().createElement(we, {
                                        classMix: Zt,
                                        text: un.progress(),
                                        binding: { amount: s().createElement('div', { className: Qt }, t) },
                                    });
                                case en.WTRDisabled:
                                    return s().createElement(we, { classMix: Zt, text: un.withoutWTR() });
                                case en.OtherPlayer:
                                    return s().createElement(we, { classMix: Zt, text: un.otherPlayer() });
                                case en.OtherPlayerWithProgress:
                                    return s().createElement(we, {
                                        classMix: Zt,
                                        text: un.OtherPlayerWithProgress(),
                                        binding: { amount: s().createElement('div', { className: Qt }, e) },
                                    });
                                default:
                                    return s().createElement('div', null);
                            }
                        })(),
                    );
                }),
                nn = (0, Cu.Pi)(() => {
                    const u = Su().model,
                        e = u.root.get(),
                        t = e.battlesLeftCount,
                        n = e.isWTREnabled,
                        a = e.isOtherPlayer,
                        r = 0 === t,
                        l = (0, u.computes.getRatingWidgetState)() === bu.Downgrade;
                    return s().createElement(
                        Tu,
                        {
                            contentId: n
                                ? R.views.lobby.achievements.tooltips.WTRMainTooltip('resId')
                                : R.views.lobby.achievements.tooltips.WOTPRMainTooltip('resId'),
                        },
                        s().createElement(
                            'div',
                            { className: jt },
                            s().createElement(
                                'div',
                                { className: Ut },
                                s().createElement('div', { className: o()(Gt, a && Kt) }),
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: Yt, style: l ? { animationDelay: '1200ms' } : void 0 },
                                        s().createElement(vt, {
                                            className: Xt,
                                            src: R.videos.achievements.particles(),
                                            autoplay: !0,
                                            loop: !0,
                                        }),
                                    ),
                                s().createElement(Wt, null),
                            ),
                            s().createElement(
                                'div',
                                { className: qt },
                                r ? s().createElement(Vt, null) : s().createElement(tn, null),
                            ),
                        ),
                    );
                }),
                an = 'Statistic_base_79',
                rn = 'Statistic_list_41',
                sn = 'Statistic_part_90',
                ln = 'Statistic_item_87',
                on = 'Statistic_ratingWidget_9d',
                cn = 'StatisticItem_base_d9',
                En = 'StatisticItem_icon_4e',
                An = 'StatisticItem_amount_de',
                Fn = 'StatisticItem_title_f7',
                Dn = 'StatisticItem_caption_65',
                mn = 'StatisticItem_footer_61',
                Bn = 'StatisticItem_footerText_2f',
                Cn = R.strings.achievements_page.summary,
                dn = (u, e, t) =>
                    t
                        ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(u)})` }
                        : e >= wu.cJ.Large
                          ? { backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.big.$dyn(u)})` }
                          : e >= wu.cJ.Medium
                            ? {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.medium.$dyn(u)})`,
                              }
                            : {
                                  backgroundImage: `url(${R.images.gui.maps.icons.achievements.summary.kpi.small.$dyn(u)})`,
                              },
                gn = (0, r.memo)(({ type: u, mainValue: e, additionalValue: t, isOtherPlayer: n }) => {
                    const a = (0, wu.GS)().mediaSize;
                    return s().createElement(
                        Tu,
                        { contentId: R.views.lobby.achievements.tooltips.KPITooltip('resId'), args: { kpiType: u } },
                        s().createElement(
                            'div',
                            { className: cn },
                            s().createElement('div', { className: En, style: dn(u, a, n) }),
                            s().createElement('div', { className: An }, e),
                            s().createElement('div', { className: Fn }, Cn.main.$dyn(u)),
                            s().createElement(
                                'div',
                                { className: mn },
                                s().createElement(we, {
                                    classMix: Bn,
                                    text: Cn.additional.$dyn(u),
                                    binding: { value: s().createElement('div', { className: Dn }, t) },
                                }),
                            ),
                        ),
                    );
                }),
                _n = (0, Cu.Pi)(() => {
                    const u = Su().model,
                        e = u.computes,
                        t = Math.floor(e.getStatisticList().length / 2),
                        n = e.getStatisticList().slice(0, t),
                        a = e.getStatisticList().slice(t);
                    return s().createElement(
                        'div',
                        { className: an },
                        s().createElement(
                            'div',
                            { className: rn },
                            s().createElement(
                                'div',
                                { className: sn },
                                n.map(({ type: e, mainValue: t, additionalValue: n }, a) =>
                                    s().createElement(
                                        'div',
                                        { className: ln, key: a },
                                        s().createElement(gn, {
                                            type: e,
                                            mainValue: t,
                                            additionalValue: n,
                                            isOtherPlayer: u.root.get().isOtherPlayer,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: on }, s().createElement(nn, null)),
                            s().createElement(
                                'div',
                                { className: sn },
                                a.map(({ type: e, mainValue: t, additionalValue: n }, a) =>
                                    s().createElement(
                                        'div',
                                        { className: ln, key: a },
                                        s().createElement(gn, {
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
                fn = 'Content_base_3e',
                pn = 'Content_base__otherPlayer_61',
                vn = 'Content_header_2d',
                hn = 'Content_statistic_6c',
                bn = 'Content_playerInfo_62',
                yn = (0, Cu.Pi)(() => {
                    const u = Su().model.root.get(),
                        e = u.isWTREnabled,
                        t = u.isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: o()(fn, t && pn) },
                        s().createElement('div', { className: vn }, s().createElement(We, { isWTREnabled: e })),
                        s().createElement('div', { className: hn }, s().createElement(_n, null)),
                        s().createElement(ke, null),
                        t && s().createElement('div', { className: bn }, s().createElement(gt, null)),
                    );
                }),
                Nn = 'Error_base_e9',
                Sn = 'Error_icon_51',
                wn = 'Error_title_fe',
                Pn = 'Error_description_85',
                In = 'Error_caption_74',
                Rn = R.strings.achievements_page.summary.disabled,
                xn = (0, Cu.Pi)(() => {
                    const u = Su().model.root.get().isOtherPlayer;
                    return s().createElement(
                        'div',
                        { className: Nn },
                        s().createElement('div', { className: Sn }),
                        u
                            ? s().createElement('div', { className: In }, Rn.otherPlayer.caption())
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  s().createElement('div', { className: wn }, Rn.title()),
                                  s().createElement('div', { className: Pn }, Rn.description()),
                              ),
                    );
                }),
                Tn = 'App_base_bb',
                Ln = 'App_base__withScroll_05',
                kn = 'App_scroll_be',
                Mn = 'App_scrollContent_2a',
                On = 'App_bar_52',
                Hn = 'App_content_13',
                Wn = 'App_footer_b9',
                zn = 'App_errorWrapper_65',
                $n = 'App_error_a2',
                Vn = R.strings.achievements_page.summary.accountInfo,
                jn = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2),
                Un = (0, Cu.Pi)(() => {
                    const u = Su().model.root.get(),
                        e = u.registrationDate,
                        t = u.lastVisitDate,
                        n = u.lastVisitTime,
                        a = u.isSummaryEnabled,
                        r = u.isOtherPlayer,
                        l = z(),
                        i = (0, g.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            config: { duration: 200, easing: jn },
                        }),
                        c = iu(Vn.registrationDate(), { registrationDate: e }),
                        E = iu(Vn.lastVisit(), { lastVisitDate: t, lastVisitTime: n });
                    return s().createElement(
                        g.animated.div,
                        { className: o()(Tn, r && a && Ln), style: i },
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
                                                { api: l, className: kn, classNames: { content: Mn } },
                                                s().createElement(
                                                    'div',
                                                    { className: Hn },
                                                    s().createElement(yn, null),
                                                ),
                                            ),
                                            s().createElement(ru.Vertical.Bar, { api: l, classNames: { base: On } }),
                                        )
                                      : s().createElement(yn, null),
                                  s().createElement('div', { className: Wn }, `${du(c)}${t && n ? du(E) : ''}`),
                              )
                            : s().createElement(
                                  'div',
                                  { className: zn },
                                  s().createElement('div', { className: $n }, s().createElement(xn, null)),
                              ),
                    );
                }),
                Gn = () =>
                    s().createElement(Nu, { options: { context: 'model.summaryModel' } }, s().createElement(Un, null));
        },
    },
]);
