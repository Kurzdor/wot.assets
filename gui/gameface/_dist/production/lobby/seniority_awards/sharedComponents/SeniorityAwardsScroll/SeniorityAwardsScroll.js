(() => {
    'use strict';
    var e,
        t = {
            9911: (e, t, n) => {
                n.d(t, { $Q: () => x });
                var r = n(6483),
                    o = n.n(r),
                    i = n(7515),
                    s = n(1856),
                    a = n(3138),
                    l = n(3815),
                    c = n(560),
                    u = n(7727),
                    d = n(6179),
                    f = n.n(d),
                    v = n(6358);
                const m = 'HorizontalBar_base_49',
                    g = 'HorizontalBar_base__nonActive_82',
                    p = 'HorizontalBar_leftButton_5f',
                    w = 'HorizontalBar_rightButton_03',
                    h = 'HorizontalBar_track_0d',
                    E = 'HorizontalBar_thumb_fd',
                    b = 'HorizontalBar_rail_32',
                    y = 'disable',
                    S = { pending: !1, offset: 0 },
                    P = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    R = () => {},
                    z = (e, t) => Math.max(20, e.offsetWidth * t),
                    x = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = P, onDrag: r = R }) => {
                        const x = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            M = (0, d.useRef)(null),
                            T = (0, d.useRef)(null),
                            O = (0, d.useRef)(null),
                            _ = e.stepTimeout || 100,
                            N = (0, d.useState)(S),
                            B = N[0],
                            W = N[1],
                            L = (0, d.useCallback)(
                                (e) => {
                                    W(e),
                                        O.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: O.current });
                                },
                                [r],
                            ),
                            A = () => {
                                const t = T.current,
                                    n = O.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, i.u)(0, 1, s / (o - r)),
                                    c = (t.offsetWidth - z(t, a)) * l;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (C.current && M.current && T.current && O.current) {
                                            if (0 === e)
                                                return C.current.classList.add(y), void M.current.classList.remove(y);
                                            if (
                                                ((t = T.current),
                                                (n = O.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return C.current.classList.remove(y), void M.current.classList.add(y);
                                            var t, n;
                                            C.current.classList.remove(y), M.current.classList.remove(y);
                                        }
                                    })(c);
                            },
                            k = (0, l.z)(() => {
                                (() => {
                                    const t = O.current,
                                        n = T.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && r && n)) return;
                                    const i = Math.min(1, r / o);
                                    (t.style.width = `${z(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        x.current &&
                                            (1 === i ? x.current.classList.add(g) : x.current.classList.remove(g));
                                })(),
                                    A();
                            });
                        (0, d.useEffect)(() => (0, s.v)(k)),
                            (0, d.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            A();
                                        };
                                        let n = R;
                                        const r = () => {
                                            n(), (n = (0, s.v)(k));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!B.pending) return;
                                const t = a.O.client.events.mouse.move(([t, n]) => {
                                        var o;
                                        const i = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!i || !s) return;
                                        const a = T.current,
                                            l = O.current;
                                        if (!a || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - B.offset - a.getBoundingClientRect().x,
                                            u = (c / a.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u });
                                    }),
                                    n = a.O.client.events.mouse.up(() => {
                                        t(), L(S);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, B.offset, B.pending, r, L]);
                        const j = (0, c.B)((t) => e.applyStepTo(t), _, [e]),
                            H = j[0],
                            D = j[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const G = (e) => {
                            e.target.classList.contains(y) || (0, u.G)('highlight');
                        };
                        return f().createElement(
                            'div',
                            { className: o()(m, t.base), ref: x, onWheel: e.handleMouseWheel },
                            f().createElement('div', {
                                className: o()(p, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(y) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), H(v.Nm.Next));
                                },
                                onMouseUp: D,
                                ref: C,
                                onMouseEnter: G,
                            }),
                            f().createElement(
                                'div',
                                {
                                    className: o()(h, t.track),
                                    onMouseDown: (t) => {
                                        const r = O.current;
                                        if (r && 0 === t.button)
                                            if (((0, u.G)('play'), t.target === r))
                                                L({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = O.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? v.Nm.Prev : v.Nm.Next);
                                            }
                                    },
                                    ref: T,
                                    onMouseEnter: G,
                                },
                                f().createElement('div', { ref: O, className: o()(E, t.thumb) }),
                                f().createElement('div', { className: o()(b, t.rail) }),
                            ),
                            f().createElement('div', {
                                className: o()(w, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(y) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), H(v.Nm.Prev));
                                },
                                onMouseUp: D,
                                ref: M,
                                onMouseEnter: G,
                            }),
                        );
                    });
            },
            2840: (e, t, n) => {
                n.d(t, { K: () => u });
                var r = n(6483),
                    o = n.n(r),
                    i = n(6179),
                    s = n.n(i),
                    a = n(9911),
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
                    getStepByRailClick: v,
                    onDrag: m,
                }) => {
                    const g = (0, i.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: o()(c.Z.base, e.base) });
                        }, [r]),
                        p = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: o()(c.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(c.Z.defaultScrollArea, u) },
                            s().createElement(l.Area, { className: f, api: p, classNames: d }, e),
                        ),
                        s().createElement(a.$Q, { getStepByRailClick: v, api: t, onDrag: m, classNames: g }),
                    );
                };
            },
            7950: (e, t, n) => {
                n.d(t, { Area: () => d });
                var r = n(6483),
                    o = n.n(r),
                    i = n(1856),
                    s = n(6179),
                    a = n.n(s),
                    l = n(9911),
                    c = n(2840),
                    u = n(4682);
                n(6358);
                const d = ({ api: e, className: t, classNames: n, children: r }) => (
                    (0, s.useEffect)(() => (0, i.v)(e.recalculateContent)),
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
                (d.Bar = l.$Q), (d.Default = c.K);
            },
            6358: (e, t, n) => {
                n.d(t, { Nm: () => r.Nm });
                var r = n(9482);
                (0, r.EO)({
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
            9482: (e, t, n) => {
                n.d(t, { Nm: () => f, EO: () => m });
                var r = n(7515),
                    o = n(1856),
                    i = n(3138),
                    s = n(6179);
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
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
                function l(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                var c = n(3815);
                function u(e, t, n) {
                    const r = (0, s.useMemo)(
                        () =>
                            (function (e, t, n, r) {
                                let o,
                                    i = !1,
                                    s = 0;
                                function a() {
                                    o && clearTimeout(o);
                                }
                                function l(...l) {
                                    const c = this,
                                        u = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), n.apply(c, l);
                                    }
                                    i ||
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
                                        a(), (i = !0);
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return (0, s.useEffect)(() => r.cancel, [r]), r;
                }
                var d = n(7030);
                let f;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(f || (f = {}));
                const v = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    m = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: l,
                        getWrapperSize: f,
                        triggerMouseMoveOnUpdate: m = !1,
                    }) => {
                        const g = (e, n) => {
                            const o = t(e),
                                i = o[0],
                                s = o[1];
                            return s <= i ? 0 : (0, r.u)(i, s, n);
                        };
                        return (r = {}) => {
                            const p = r.settings,
                                w = void 0 === p ? v : p,
                                h = (0, s.useRef)(null),
                                E = (0, s.useRef)(null),
                                b = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        r = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        o = (e, ...n) => {
                                            for (var r, o = a(t(e).values()); !(r = o()).done; ) (0, r.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: r, trigger: o }), []);
                                })(),
                                y = u(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                S = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (n(t, e), b.trigger('change', e), m && y());
                                    },
                                    onRest: (e) => b.trigger('rest', e),
                                    onStart: (e) => b.trigger('start', e),
                                    onPause: (e) => b.trigger('pause', e),
                                })),
                                P = S[0],
                                R = S[1],
                                z = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = P.scrollPosition.get(),
                                            i = (null != (r = P.scrollPosition.goal) ? r : 0) - o;
                                        return g(e, t * n + i + o);
                                    },
                                    [P.scrollPosition],
                                ),
                                x = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = h.current;
                                        r &&
                                            R.start({
                                                scrollPosition: g(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: w.animationConfig,
                                                from: { scrollPosition: g(r, P.scrollPosition.get()) },
                                            });
                                    },
                                    [R, w.animationConfig, P.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            n = E.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return f(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, w.step),
                                            o = z(t, e, r);
                                        x(o);
                                    },
                                    [x, z, w.step],
                                ),
                                M = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(l(e)),
                                            h.current && b.trigger('mouseWheel', e, P.scrollPosition, t(h.current));
                                    },
                                    [P.scrollPosition, C, b],
                                ),
                                T = ((e, t = []) => {
                                    const n = (0, s.useRef)(),
                                        r = (0, s.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        (0, o.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (x(g(e, P.scrollPosition.goal), { immediate: !0 }),
                                                b.trigger('resizeHandled'));
                                        }),
                                    [x, P.scrollPosition.goal],
                                ),
                                O = (0, c.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = g(e, P.scrollPosition.goal);
                                    t !== P.scrollPosition.goal && x(t, { immediate: !0 }),
                                        b.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', T),
                                    () => {
                                        window.removeEventListener('resize', T);
                                    }
                                ),
                                [T],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? f(E.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: w.step.clampedArrowStepTimeout,
                                    clampPosition: g,
                                    handleMouseWheel: M,
                                    applyScroll: x,
                                    applyStepTo: C,
                                    contentRef: h,
                                    wrapperRef: E,
                                    scrollPosition: R,
                                    animationScroll: P,
                                    recalculateContent: O,
                                    events: { on: b.on, off: b.off },
                                }),
                                [P.scrollPosition, x, C, b.off, b.on, O, M, R, w.step.clampedArrowStepTimeout],
                            );
                        };
                    };
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
                    n.d(t, { mouse: () => u, off: () => l, on: () => a, onResize: () => i, onScaleUpdated: () => s });
                var r = n(2472),
                    o = n(1176);
                const i = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        s = c[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(i, a),
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
                    return Object.assign({}, i, {
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => o,
                        graphicsQuality: () => s,
                    });
                var r = n(527);
                function o(e = 'px') {
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
                        displayStatusIs: () => z,
                        events: () => i.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => R,
                        getScale: () => p,
                        getSize: () => f,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => S,
                        isFocused: () => b,
                        pxToRem: () => w,
                        remToPx: () => h,
                        resize: () => v,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => C,
                    });
                var r = n(3722),
                    o = n(6112),
                    i = n(6538),
                    s = n(8566);
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
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
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
                function R() {
                    return viewEnv.getShowingStatus();
                }
                const z = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
                        {},
                    ),
                    x = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    C = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const r = ['args'];
                const o = 2,
                    i = 16,
                    s = 32,
                    a = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((o = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? o : s);
                        },
                        minimize() {
                            l(a);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            3815: (e, t, n) => {
                n.d(t, { z: () => i });
                var r = n(6179);
                const o = [];
                function i(e) {
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
                        i = (0, r.useCallback)(() => window.clearInterval(o.current), n || []);
                    (0, r.useEffect)(() => i, [i]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, r.useCallback)((n) => {
                            (o.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        i,
                    ];
                }
            },
            7727: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { G: () => r });
            },
            7712: (e, t, n) => {
                n(6483), n(6179), n(9911), n(2840), n(4682), n(6358);
            },
            4682: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], a = !0, l = 0; l < n.length; l++)
                        (!1 & i || s >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((a = !1), i < s && (s = i));
                    if (a) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
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
        (r.j = 679),
        (() => {
            var e = { 679: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [s, a, l] = n,
                        c = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < s.length; c++) (i = s[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [851], () => r(7712));
    o = r.O(o);
})();
