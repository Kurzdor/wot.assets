(() => {
    var __webpack_modules__ = {
            3638: (e, u, t) => {
                'use strict';
                t.d(u, { qE: () => l.q, L$: () => l.L, u5: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    i = t(6179),
                    o = t.n(i);
                const s = {
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
                var l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: E,
                    soundHover: d,
                    soundClick: A,
                    onMouseEnter: F,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: D,
                    onMouseLeave: C,
                    onClick: B,
                }) => {
                    const h = (0, i.useRef)(null),
                        g = (0, i.useState)(t),
                        v = g[0],
                        f = g[1],
                        p = (0, i.useState)(!1),
                        w = p[0],
                        b = p[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                v && null !== h.current && !h.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, i.useEffect)(() => {
                            f(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: r()(
                                    s.base,
                                    s[`base__${n}`],
                                    c && s.base__disabled,
                                    u && s[`base__${u}`],
                                    v && s.base__focus,
                                    w && s.base__highlightActive,
                                    E,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, a.G)(d), F && F(e));
                                },
                                onMouseMove: function (e) {
                                    m && m(e);
                                },
                                onMouseUp: function (e) {
                                    c || (D && D(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== A && (0, a.G)(A),
                                        _ && _(e),
                                        t && (c || (h.current && (h.current.focus(), f(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (C && C(e), b(!1));
                                },
                                onClick: function (e) {
                                    c || (B && B(e));
                                },
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s.back }),
                                    o().createElement('span', { className: s.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(s.state, s.state__default) },
                                o().createElement('span', { className: s.stateDisabled }),
                                o().createElement('span', { className: s.stateHighlightHover }),
                                o().createElement('span', { className: s.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: s.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const E = c;
            },
            2106: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { L: () => n, q: () => r }),
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
            6963: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    i = t(6179),
                    o = t.n(i);
                const s = 'FormatText_base_d0',
                    l = ({
                        binding: e,
                        text: u = '',
                        classMix: t,
                        alignment: n = a.v2.left,
                        formatWithBrackets: l,
                    }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const c = l && e ? (0, a.WU)(u, e) : u;
                        return o().createElement(
                            i.Fragment,
                            null,
                            c.split('\n').map((u, l) =>
                                o().createElement(
                                    'div',
                                    { className: r()(s, t), key: `${u}-${l}` },
                                    (0, a.Uw)(u, n, e).map((e, u) =>
                                        o().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
            },
            9911: (e, u, t) => {
                'use strict';
                t.d(u, { $Q: () => b });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    i = t(1856),
                    o = t(3138),
                    s = t(3815),
                    l = t(560),
                    c = t(7727),
                    E = t(6179),
                    d = t.n(E),
                    A = t(6358);
                const F = 'HorizontalBar_base_49',
                    m = 'HorizontalBar_base__nonActive_82',
                    _ = 'HorizontalBar_leftButton_5f',
                    D = 'HorizontalBar_rightButton_03',
                    C = 'HorizontalBar_track_0d',
                    B = 'HorizontalBar_thumb_fd',
                    h = 'HorizontalBar_rail_32',
                    g = 'disable',
                    v = { pending: !1, offset: 0 },
                    f = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    p = () => {},
                    w = (e, u) => Math.max(20, e.offsetWidth * u),
                    b = (0, E.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = f, onDrag: n = p }) => {
                        const b = (0, E.useRef)(null),
                            S = (0, E.useRef)(null),
                            y = (0, E.useRef)(null),
                            x = (0, E.useRef)(null),
                            L = (0, E.useRef)(null),
                            R = e.stepTimeout || 100,
                            N = (0, E.useState)(v),
                            T = N[0],
                            k = N[1],
                            M = (0, E.useCallback)(
                                (e) => {
                                    k(e),
                                        L.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: L.current });
                                },
                                [n],
                            ),
                            O = () => {
                                const u = x.current,
                                    t = L.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    s = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetWidth - w(u, o)) * s;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (S.current && y.current && x.current && L.current) {
                                            if (0 === e)
                                                return S.current.classList.add(g), void y.current.classList.remove(g);
                                            if (
                                                ((u = x.current),
                                                (t = L.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return S.current.classList.remove(g), void y.current.classList.add(g);
                                            var u, t;
                                            S.current.classList.remove(g), y.current.classList.remove(g);
                                        }
                                    })(l);
                            },
                            V = (0, s.z)(() => {
                                (() => {
                                    const u = L.current,
                                        t = x.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    (u.style.width = `${w(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        b.current &&
                                            (1 === a ? b.current.classList.add(m) : b.current.classList.remove(m));
                                })(),
                                    O();
                            });
                        (0, E.useEffect)(() => (0, i.v)(V)),
                            (0, E.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const u = () => {
                                            O();
                                        };
                                        let t = p;
                                        const n = () => {
                                            t(), (t = (0, i.v)(V));
                                        };
                                        return (
                                            e.events.on('recalculateContent', V),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', V),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, E.useEffect)(() => {
                                if (!T.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const o = x.current,
                                            s = L.current;
                                        if (!o || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - T.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), M(v);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, T.offset, T.pending, n, M]);
                        const H = (0, l.B)((u) => e.applyStepTo(u), R, [e]),
                            I = H[0],
                            P = H[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', P, !0),
                                () => document.removeEventListener('mouseup', P, !0)
                            ),
                            [P],
                        );
                        const W = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: r()(F, u.base), ref: b, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: r()(_, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), I(A.Nm.Next));
                                },
                                onMouseUp: P,
                                ref: S,
                                onMouseEnter: W,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: r()(C, u.track),
                                    onMouseDown: (u) => {
                                        const n = L.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                M({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = L.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? A.Nm.Prev : A.Nm.Next);
                                            }
                                    },
                                    ref: x,
                                    onMouseEnter: W,
                                },
                                d().createElement('div', { ref: L, className: r()(B, u.thumb) }),
                                d().createElement('div', { className: r()(h, u.rail) }),
                            ),
                            d().createElement('div', {
                                className: r()(D, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), I(A.Nm.Prev));
                                },
                                onMouseUp: P,
                                ref: y,
                                onMouseEnter: W,
                            }),
                        );
                    });
            },
            2840: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(9911),
                    s = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: E,
                    scrollClassName: d,
                    getStepByRailClick: A,
                    onDrag: F,
                }) => {
                    const m = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            i().createElement(s.Area, { className: d, api: _, classNames: E }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: A, api: u, onDrag: F, classNames: m }),
                    );
                };
            },
            7950: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        Area: () => d,
                        Bar: () => s.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => E.Nm,
                        defaultSettings: () => E.he,
                        useHorizontalScrollApi: () => E.T5,
                    });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    o = t.n(i),
                    s = t(9911),
                    l = t(2840),
                    c = t(4682),
                    E = t(6358);
                const d = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(c.Z.base, u) },
                        o().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (d.Bar = s.$Q), (d.Default = l.K);
            },
            6358: (e, u, t) => {
                'use strict';
                t.d(u, { Nm: () => n.Nm, T5: () => r, he: () => n.he });
                var n = t(9482);
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
            9482: (e, u, t) => {
                'use strict';
                t.d(u, { Nm: () => d, EO: () => F, he: () => A });
                var n = t(7515),
                    r = t(1856),
                    a = t(3138),
                    i = t(6179);
                function o(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, u);
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
                }
                function s(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var l = t(3815);
                function c(e, u, t) {
                    const n = (0, i.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    i = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function E() {
                                        (i = Date.now()), t.apply(l, s);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        o(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return (0, i.useEffect)(() => n.cancel, [n]), n;
                }
                var E = t(7030);
                let d;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(d || (d = {}));
                const A = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    F = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: s,
                        getWrapperSize: d,
                        triggerMouseMoveOnUpdate: F = !1,
                    }) => {
                        const m = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                i = r[1];
                            return i <= a ? 0 : (0, n.u)(a, i, t);
                        };
                        return (n = {}) => {
                            const _ = n.settings,
                                D = void 0 === _ ? A : _,
                                C = (0, i.useRef)(null),
                                B = (0, i.useRef)(null),
                                h = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = o(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                g = c(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                v = (0, E.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = C.current;
                                        u && (t(u, e), h.trigger('change', e), F && g());
                                    },
                                    onRest: (e) => h.trigger('rest', e),
                                    onStart: (e) => h.trigger('start', e),
                                    onPause: (e) => h.trigger('pause', e),
                                })),
                                f = v[0],
                                p = v[1],
                                w = (0, i.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = f.scrollPosition.get(),
                                            a = (null != (n = f.scrollPosition.goal) ? n : 0) - r;
                                        return m(e, u * t + a + r);
                                    },
                                    [f.scrollPosition],
                                ),
                                b = (0, i.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = C.current;
                                        n &&
                                            p.start({
                                                scrollPosition: m(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: D.animationConfig,
                                                from: { scrollPosition: m(n, f.scrollPosition.get()) },
                                            });
                                    },
                                    [p, D.animationConfig, f.scrollPosition],
                                ),
                                S = (0, i.useCallback)(
                                    (e) => {
                                        const u = C.current,
                                            t = B.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return d(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, D.step),
                                            r = w(u, e, n);
                                        b(r);
                                    },
                                    [b, w, D.step],
                                ),
                                y = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && S(s(e)),
                                            C.current && h.trigger('mouseWheel', e, f.scrollPosition, u(C.current));
                                    },
                                    [f.scrollPosition, S, h],
                                ),
                                x = ((e, u = []) => {
                                    const t = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = C.current;
                                            e &&
                                                (b(m(e, f.scrollPosition.goal), { immediate: !0 }),
                                                h.trigger('resizeHandled'));
                                        }),
                                    [b, f.scrollPosition.goal],
                                ),
                                L = (0, l.z)(() => {
                                    const e = C.current;
                                    if (!e) return;
                                    const u = m(e, f.scrollPosition.goal);
                                    u !== f.scrollPosition.goal && b(u, { immediate: !0 }),
                                        h.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (B.current ? d(B.current) : void 0),
                                    getContainerSize: () => (C.current ? e(C.current) : void 0),
                                    getBounds: () =>
                                        C.current
                                            ? u(C.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: D.step.clampedArrowStepTimeout,
                                    clampPosition: m,
                                    handleMouseWheel: y,
                                    applyScroll: b,
                                    applyStepTo: S,
                                    contentRef: C,
                                    wrapperRef: B,
                                    scrollPosition: p,
                                    animationScroll: f,
                                    recalculateContent: L,
                                    events: { on: h.on, off: h.off },
                                }),
                                [f.scrollPosition, b, S, h.off, h.on, L, y, p, D.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(4179),
                    a = t(6179);
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
                function o(e) {
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
                            E = e.onMouseDown,
                            d = e.onClick,
                            A = e.ignoreShowDelay,
                            F = void 0 !== A && A,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            h = void 0 === B || B,
                            g = e.targetId,
                            v = void 0 === g ? 0 : g,
                            f = e.onShow,
                            p = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, i);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => v || (0, n.F)().resId, [v]),
                            y = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (s(t, C, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    f && f(),
                                    (b.current.isVisible = !0));
                            }, [t, C, r, S, f]),
                            x = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        s(t, C, { on: !1 }, S),
                                        b.current.isVisible && p && p(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, C, S, p]),
                            L = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === h && x();
                            }, [h, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return h
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(y, F ? 100 : 400)),
                                                      l && l(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              x(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === _ && x(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === _ && x(), null == E || E(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
                        var R;
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                'use strict';
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
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, o),
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => p,
                        getScale: () => _,
                        getSize: () => d,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    b = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, u, t) => {
                'use strict';
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
            3815: (e, u, t) => {
                'use strict';
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
            560: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => r });
                var n = t(6179);
                function r(e, u, t = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, n.useEffect)(() => a, [a]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        a,
                    ];
                }
            },
            5521: (e, u, t) => {
                'use strict';
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
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => r, G: () => n });
                const r = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => i, Uw: () => F, WU: () => a, v2: () => r });
                var n = t(1281);
                let r;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    c = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? s : l, []),
                    E = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return E(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = o(e);
                            return c(a, /( )/, u).forEach((e) => (t = t.concat(c(e, n, r.left)))), t;
                        })(e, u);
                    },
                    F = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : A(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
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
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B0: () => s, ry: () => C, Sy: () => h });
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
                var a = t(1358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const m = ['args'];
                function _(e, u, t, n, r, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        function i(e) {
                                            _(a, n, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(a, n, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
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
                    h = () => B(s.CLOSE),
                    g = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var v = t(7572);
                const f = r.instance,
                    p = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                A = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
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
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, h);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
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
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = p;
            },
            6873: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n), t.d(n, { Area: () => Je, Bar: () => Xe, Default: () => Qe, useVerticalScrollApi: () => Oe });
                var r = t(6179),
                    a = t.n(r);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, u, t) {
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
                !(function (e) {
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
                })(l || (l = {}));
                const E = o.O.client.getSize('rem'),
                    d = E.width,
                    A = E.height,
                    F = Object.assign({ width: d, height: A }, c(d, A, s)),
                    m = (0, r.createContext)(F),
                    _ = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, _);
                    const n = (0, r.useContext)(m),
                        a = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        A = n.mediumWidth,
                        F = n.smallWidth,
                        D = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        B = n.largeHeight,
                        h = n.mediumHeight,
                        g = n.smallHeight,
                        v = n.extraSmallHeight,
                        f = { extraLarge: C, large: B, medium: h, small: g, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return u;
                        if (t.large && o) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return i(u, t, f);
                        if (t.largeWidth && d) return i(u, t, f);
                        if (t.mediumWidth && A) return i(u, t, f);
                        if (t.smallWidth && F) return i(u, t, f);
                        if (t.extraSmallWidth && D) return i(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && v) return u;
                        }
                    }
                    return null;
                };
                D.defaultProps = {
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
                (0, r.memo)(D);
                const C = (e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, r.useContext)(m),
                            t = (0, r.useState)(u),
                            n = t[0],
                            i = t[1],
                            l = (0, r.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: n }, c(t, n, s)));
                            }, []),
                            E = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                l(e.width, e.height);
                            }, [l]);
                        C(() => {
                            o.O.client.events.on('clientResized', l), o.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', l),
                                        o.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [l, E],
                            );
                        const d = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(m.Provider, { value: d }, e);
                    };
                var h = t(6483),
                    g = t.n(h),
                    v = t(926),
                    f = t.n(v);
                let p, w, b;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const S = () => {
                        const e = (0, r.useContext)(m),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_HEIGHT,
                        [b.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [b.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [p.ExtraSmall]: '',
                        [p.Small]: f().SMALL,
                        [p.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [p.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [p.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, y);
                        const r = S(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', x({ className: g()(t, L[i], N[o], T[s]) }, n), u);
                    },
                    M = ['children'];
                const O = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, M);
                    return a().createElement(B, null, a().createElement(k, t, u));
                };
                var V = t(493),
                    H = t.n(V),
                    I = t(9459),
                    P = t(7727);
                const W = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    z = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class U extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, P.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, P.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, z)),
                            A = g()(W.base, W[`base__${i}`], W[`base__${r}`], null == o ? void 0 : o.base),
                            F = g()(W.icon, W[`icon__${i}`], W[`icon__${r}`], null == o ? void 0 : o.icon),
                            m = g()(W.glow, null == o ? void 0 : o.glow),
                            _ = g()(W.caption, W[`caption__${i}`], null == o ? void 0 : o.caption),
                            D = g()(W.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            G(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && a().createElement('div', { className: W.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: m })),
                            a().createElement('div', { className: _ }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                U.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const $ = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
                var j = t(5521),
                    q = t(4179);
                const K = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = j.n.NONE, u = K, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var X = t(3403);
                let Z;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Z || (Z = {}));
                let Q;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Q || (Q = {}));
                const J = 'metrics',
                    ee = () => Date.now(),
                    ue = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: r }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    te = (e, u) => {
                        const t = (0, r.useCallback)(
                            (t, n = Z.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    ne = (e, u) => {
                        const t = te(e, u),
                            n = (0, r.useRef)([]),
                            a = (0, r.useCallback)(
                                (e, u, r) => {
                                    e && !n.current.includes(e) && (n.current.push(e), t(e, u, r));
                                },
                                [n, t],
                            );
                        return [
                            (e, u, t) => a(e, u, t),
                            () => {
                                n.current = [];
                            },
                        ];
                    },
                    re = (e, u) => {
                        const t = te(e, u),
                            n = (0, r.useRef)(new Map()),
                            a = (0, r.useRef)(new Map()),
                            i = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = n.current.get(e);
                                    (void 0 !== u && u > 0) || n.current.set(e, ee());
                                },
                                [n],
                            ),
                            o = (0, r.useCallback)(() => {
                                n.current.clear(), a.current.clear();
                            }, [n, a]),
                            s = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== n.current.get(e) &&
                                        void 0 === a.current.get(e) &&
                                        a.current.set(e, ee());
                                },
                                [n, a],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = n.current.get(e);
                                    if (void 0 === u) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    a.current.delete(e);
                                    const r = ee() - t;
                                    n.current.set(e, u + r);
                                },
                                [n, a],
                            ),
                            c = (0, r.useCallback)(
                                (e, u = 0, r, i) => {
                                    const o = n.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== a.current.get(e) && l(e), n.current.delete(e);
                                    const s = (ee() - o) / 1e3;
                                    s <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, s)),
                                        t(e, r, i));
                                },
                                [n, a, t, l],
                            );
                        return [(e) => i(e), (e, u, t, n) => c(e, u, t, n), () => o(), (e) => s(e), (e) => l(e)];
                    },
                    ae = (e) => {
                        const u = te(e, J),
                            t = (0, r.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, ue(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    ie = (e) => {
                        const u = re(e, J),
                            t = u[0],
                            n = u[1],
                            a = u[2],
                            i = u[3],
                            o = u[4],
                            s = (0, r.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        r = e.logLevel;
                                    n(u, t, r, ue(e));
                                },
                                [n],
                            );
                        return [(e) => t(e), (e) => s(e), () => a(), (e) => i(e), (e) => o(e)];
                    },
                    oe = 'seniority_awards',
                    se = oe + '_vehicle_selection';
                let le, ce, Ee;
                !(function (e) {
                    (e.RewardsScreen = 'sa_rewards_screen'), (e.VehicleSelectionView = 'sa_vehicle_selection_view');
                })(le || (le = {})),
                    (function (e) {
                        (e.GoToShopButton = 'goto_shop_button'),
                            (e.ShowMoreButton = 'show_more_button'),
                            (e.ConfirmButton = 'confirm_button'),
                            (e.GoToHangarButton = 'goto_hangar_button'),
                            (e.CloseButton = 'close_button'),
                            (e.SelectButton = 'select_button'),
                            (e.VehicleTabButton = 'vehicle_tab_button'),
                            (e.VehicleTooltip = 'vehicle_tooltip'),
                            (e.SeniorityAwardsTooltip = 'seniority_awards_tooltip');
                    })(ce || (ce = {})),
                    (function (e) {
                        (e.SELECTION = 'selection'),
                            (e.VIEW_REWARD_AFTER_SELECTION = 'viewRewardAfterSelection'),
                            (e.VIEW_REWARD = 'viewReward');
                    })(Ee || (Ee = {}));
                const de = (e) => (e === Ee.SELECTION ? se : oe);
                var Ae = t(5611),
                    Fe = t(476);
                function me() {
                    return !1;
                }
                console.log;
                var _e = t(9174);
                function De(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ce(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ce(e, u);
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
                }
                function Ce(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                var he = t(3946);
                const ge = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Be,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return r.set(l, t), e && t(i(a)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = De(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = _e.LO.box(n, { equals: me });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, _e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = _e.LO.box(n, { equals: me });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, _e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = _e.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, _e.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = _e.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, _e.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                                cleanup: E,
                                            }),
                                            A = { mode: t, model: d, externalModel: s, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(A) : u(A),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    A = (0, r.useState)(n),
                                    F = A[0],
                                    m = A[1],
                                    _ = (0, r.useState)(() => E(n, i, l)),
                                    D = _[0],
                                    C = _[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? C(E(F, i, l)) : (d.current = !0);
                                    }, [l, F, i]),
                                    (0, r.useEffect)(() => {
                                        m(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                root: e.object(),
                                vehicles: e.array('vehicles'),
                                previousVehicleIndex: _e.LO.box(0),
                                selectedVehicleIndex: _e.LO.box(0),
                                selectedVehicleId: _e.LO.box(e.array('vehicles').get()[0].value.vehicleId),
                            };
                            return Object.assign({}, u, {
                                computes: { vehiclesLength: (0, he.Om)(() => u.vehicles.get().length) },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            moreRewards: e.createCallbackNoArgs('onMoreRewards'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            selectVehicleReward: e.createCallback((e) => ({ selectedId: e }), 'onSelectVehicleReward'),
                            setPreviousVehicleIndex: (0, _e.aD)((e) => {
                                u.previousVehicleIndex.get() !== e && u.previousVehicleIndex.set(e);
                            }),
                            setSelectedVehicleIndex: (0, _e.aD)((e) => {
                                u.selectedVehicleIndex.get() !== e &&
                                    (u.previousVehicleIndex.set(u.selectedVehicleIndex.get()),
                                    u.selectedVehicleIndex.set(e));
                            }),
                        }),
                    ),
                    ve = ge[0],
                    fe = ge[1];
                var pe = t(9762);
                let we, be;
                !(function (e) {
                    (e.Selection = 'selection'),
                        (e.ViewRewardAfterSelection = 'viewRewardAfterSelection'),
                        (e.ViewReward = 'viewReward');
                })(we || (we = {})),
                    (function (e) {
                        (e.SELECTION_START = 'selectionStart'),
                            (e.SELECTED = 'selected'),
                            (e.VIEW_VEHICLES = 'viewVehicles');
                    })(be || (be = {}));
                const Se = (e) => {
                        switch (e) {
                            case Ee.SELECTION:
                                return we.Selection;
                            case Ee.VIEW_REWARD_AFTER_SELECTION:
                                return we.ViewRewardAfterSelection;
                            case Ee.VIEW_REWARD:
                                return we.ViewReward;
                        }
                    },
                    ye = {
                        [we.Selection]: {
                            firstEnter: R.sounds.gui_hangar_award_screen(),
                            enter: R.sounds.wdr_tank_screen(),
                            exit: R.sounds.wdr_tank_screen_stop(),
                        },
                        [we.ViewReward]: {
                            firstEnter: R.sounds.gui_hangar_award_screen(),
                            enter: R.sounds.wdr_tank_screen(),
                            exit: R.sounds.wdr_tank_screen_stop(),
                        },
                        [we.ViewRewardAfterSelection]: {
                            firstEnter: R.sounds.gui_hangar_award_screen(),
                            enter: R.sounds.wdr_tank_screen(),
                            exit: R.sounds.wdr_tank_screen_stop(),
                        },
                    },
                    xe = (e) => {
                        (0, P.G)(ye[e].exit);
                    };
                var Le = t(7950),
                    Re = t(1856),
                    Ne = t(7515),
                    Te = t(3815),
                    ke = t(560),
                    Me = t(9482);
                const Oe = (0, Me.EO)({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Me.Nm.Next : Me.Nm.Prev),
                    }),
                    Ve = 'VerticalBar_base_f3',
                    He = 'VerticalBar_base__nonActive_42',
                    Ie = 'VerticalBar_topButton_d7',
                    Pe = 'VerticalBar_bottomButton_06',
                    We = 'VerticalBar_track_df',
                    ze = 'VerticalBar_thumb_32',
                    Ge = 'VerticalBar_rail_43',
                    Ue = 'disable',
                    $e = () => {},
                    je = { pending: !1, offset: 0 },
                    qe = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ke = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Ye = (e, u) => Math.max(20, e.offsetHeight * u),
                    Xe = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = qe, onDrag: n = $e }) => {
                        const i = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            A = (0, r.useState)(je),
                            F = A[0],
                            m = A[1],
                            _ = (0, r.useCallback)(
                                (e) => {
                                    m(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            D = (0, Te.z)(() => {
                                const u = E.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${Ye(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    i.current &&
                                        (1 === a ? i.current.classList.add(He) : i.current.classList.remove(He)),
                                    a
                                );
                            }),
                            C = (0, Te.z)(() => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = (0, Ne.u)(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - Ye(u, i)) * o;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Ue), void l.current.classList.remove(Ue);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Ue), void l.current.classList.add(Ue);
                                            var u, t;
                                            s.current.classList.remove(Ue), l.current.classList.remove(Ue);
                                        }
                                    })(d);
                            }),
                            B = (0, Te.z)(() => {
                                Ke(e, () => {
                                    D(), C();
                                });
                            });
                        (0, r.useEffect)(() => (0, Re.v)(B)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Ke(e, () => {
                                        C();
                                    });
                                };
                                let t = $e;
                                const n = () => {
                                    t(), (t = (0, Re.v)(B));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!F.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        _(je);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Ke(e, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const o = u.screenY - F.offset - r.getBoundingClientRect().y,
                                                s = (o / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, F.offset, F.pending, n, _]);
                        const h = (0, ke.B)((u) => e.applyStepTo(u), d, [e]),
                            v = h[0],
                            f = h[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const p = (e) => {
                            e.target.classList.contains(Ue) || (0, P.G)('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: g()(Ve, u.base), ref: i, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: g()(Ie, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ue) ||
                                        0 !== e.button ||
                                        ((0, P.G)('play'), v(Me.Nm.Next));
                                },
                                ref: s,
                                onMouseEnter: p,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: g()(We, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if (((0, P.G)('play'), u.target === n))
                                                _({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        Ke(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Me.Nm.Prev : Me.Nm.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: p,
                                },
                                a().createElement('div', { ref: E, className: g()(ze, u.thumb) }),
                                a().createElement('div', { className: g()(Ge, u.rail) }),
                            ),
                            a().createElement('div', {
                                className: g()(Pe, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ue) ||
                                        0 !== e.button ||
                                        ((0, P.G)('play'), v(Me.Nm.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Ze = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Qe = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: i,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: g()(Ze.base, e.base) });
                            }, [n]),
                            d = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: g()(Ze.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: g()(Ze.area, i) },
                                a().createElement(Je, { className: o, classNames: s, api: d }, e),
                            ),
                            a().createElement(Xe, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Je = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => (0, Re.v)(n.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: g()(Ze.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: g()(Ze.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Je.Default = Qe;
                const eu = { Vertical: n, Horizontal: Le };
                function uu(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var tu = t(7030),
                    nu = t(3638),
                    ru = t(2056);
                const au = ['children'];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const ou = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, au);
                        return a().createElement(
                            ru.u,
                            iu(
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
                    },
                    su = 'TOOLTIP_VEHICLE_REWARD',
                    lu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    cu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Eu(e) {
                    let u = '';
                    for (let t = cu.length - 1; t >= 0; t--) for (; e >= cu[t]; ) (u += lu[t]), (e -= cu[t]);
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                var du = t(3649);
                const Au = (e) => --e * e * e + 1,
                    Fu = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    mu = (e) => {
                        const u = 2.5949095;
                        return e < 0.5
                            ? (Math.pow(2 * e, 2) * (7.189819 * e - u)) / 2
                            : (Math.pow(2 * e - 2, 2) * ((u + 1) * (2 * e - 2) + u) + 2) / 2;
                    },
                    _u = {
                        base: 'Vehicle_base_e9',
                        base__selection: 'Vehicle_base__selection_3a',
                        container: 'Vehicle_container_f0',
                        base__big: 'Vehicle_base__big_2f',
                        base__afterSelection: 'Vehicle_base__afterSelection_a0',
                        hitArea: 'Vehicle_hitArea_c2',
                        imageContainer: 'Vehicle_imageContainer_08',
                        image: 'Vehicle_image_5f',
                        base__submitted: 'Vehicle_base__submitted_bb',
                        blinkAndFadeOut: 'Vehicle_blinkAndFadeOut_7a',
                        vehicleInfo: 'Vehicle_vehicleInfo_46',
                        fadeOut: 'Vehicle_fadeOut_d2',
                        vehicleName: 'Vehicle_vehicleName_0b',
                        nation: 'Vehicle_nation_c7',
                        type: 'Vehicle_type_b2',
                        role: 'Vehicle_role_57',
                        desc: 'Vehicle_desc_4b',
                        desc__withRole: 'Vehicle_desc__withRole_8a',
                        button: 'Vehicle_button_ee',
                        buttonText: 'Vehicle_buttonText_2e',
                        effectContainer: 'Vehicle_effectContainer_ef',
                        smokeEffect: 'Vehicle_smokeEffect_48',
                        scaleAndFade: 'Vehicle_scaleAndFade_04',
                        raysAppearance: 'Vehicle_raysAppearance_3a',
                        rotate: 'Vehicle_rotate_37',
                        fadeInWithScale: 'Vehicle_fadeInWithScale_30',
                        slideUp: 'Vehicle_slideUp_f1',
                        fadeIn: 'Vehicle_fadeIn_ed',
                        scale: 'Vehicle_scale_9f',
                    };
                var Du = t(6963);
                const Cu = 'VehicleRole_base_9f',
                    Bu = 'VehicleRole_iconContainer_94',
                    hu = 'VehicleRole_icon_a4',
                    gu = 'VehicleRole_label_c8',
                    vu = R.images.gui.maps.icons.roleExp.roles.c_16x16,
                    fu = R.strings.menu.roleExp,
                    pu = ({ role: e }) => {
                        const u = (0, du.BN)(e);
                        return a().createElement(
                            'div',
                            { className: Cu },
                            a().createElement(
                                'div',
                                { className: Bu },
                                a().createElement('div', {
                                    className: hu,
                                    style: { backgroundImage: `url(${null == vu ? void 0 : vu.$dyn(u)})` },
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: gu },
                                a().createElement(Du.z, {
                                    text: `${fu.roleName.$dyn(u)}`,
                                    binding: { groupName: fu.roleGroupName.$dyn(u) },
                                }),
                            ),
                        );
                    },
                    wu = 'R.images.gui.maps.icons.seniorityAwards.rewards.vehicles',
                    bu = (e, u, t) =>
                        e
                            ? `url(R.images.gui.maps.icons.vehicleTypes.c_48x48.${u}${t ? '_elite' : ''})`
                            : `url(${wu}.types.${u}${t ? '_elite' : ''})`,
                    Su = ({
                        index: e,
                        name: u,
                        techName: t,
                        type: n,
                        tier: i,
                        isPremium: o,
                        nation: s,
                        vehicleCD: l,
                        roleKey: c,
                        description: E,
                        onRestAnimation: d,
                        size: A = 'medium',
                        state: F = we.ViewReward,
                        isEnabledSound: m = !0,
                        previousTechName: _ = null,
                        onSubmitBtnClick: D,
                    }) => {
                        const C = F === we.Selection,
                            B = F === we.ViewRewardAfterSelection,
                            h = (0, du.BN)(n),
                            v = t !== _,
                            f = (0, r.useState)(!1),
                            p = f[0],
                            w = f[1],
                            b = ae(se),
                            S = { backgroundImage: `url(${wu}.${_})` },
                            y = { backgroundImage: `url(${wu}.${t})` },
                            x = { backgroundImage: `url(${wu}.nations.${s})` },
                            L = { backgroundImage: bu(C, h, o) },
                            N = (0, tu.useTransition)(t, {
                                from: B ? { opacity: 0, scale: 0.5 } : { opacity: 0, transform: 'translate(30rem)' },
                                enter: B ? { opacity: 1, scale: 1 } : { opacity: 1, transform: 'translateX(0%)' },
                                delay: 1e3 * e,
                                config: { duration: B ? 700 : 1e3, easing: B ? mu : Fu },
                                onStart: () => {
                                    m && (0, P.G)(R.sounds.wdr_award_tank());
                                },
                                onRest: () => {
                                    d(e);
                                },
                            }),
                            T = (0, tu.useTransition)(t, {
                                from: { opacity: 1 },
                                enter: { opacity: 0 },
                                delay: 500 * e,
                                config: { duration: 1e3, easing: Fu },
                            }),
                            k = (0, tu.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                delay: 1e3 * e + (v ? 0 : 500),
                                config: { duration: 500, easing: Fu },
                                loop: { reverse: C && v, opacity: 1 },
                            });
                        return a().createElement(
                            'div',
                            {
                                className: g()(
                                    _u.base,
                                    _u[`base__${A}`],
                                    C && _u.base__selection,
                                    B && _u.base__afterSelection,
                                    p && _u.base__submitted,
                                ),
                            },
                            B &&
                                a().createElement(
                                    'div',
                                    { className: _u.effectContainer },
                                    a().createElement('div', { className: _u.smokeEffect }),
                                ),
                            a().createElement(
                                'div',
                                { className: _u.container },
                                a().createElement(
                                    ou,
                                    { args: { tooltipId: su, vehicleCD: l } },
                                    a().createElement('div', { className: _u.hitArea }),
                                ),
                                v &&
                                    T((e) =>
                                        a().createElement(
                                            tu.animated.div,
                                            { className: _u.imageContainer, style: e },
                                            a().createElement('div', { className: _u.image, style: S }),
                                        ),
                                    ),
                                N((e) =>
                                    a().createElement(
                                        tu.animated.div,
                                        { className: _u.imageContainer, style: e },
                                        a().createElement('div', { className: _u.image, style: y }),
                                    ),
                                ),
                            ),
                            a().createElement(
                                tu.animated.div,
                                { style: k, className: _u.vehicleInfo },
                                a().createElement(
                                    'div',
                                    { className: _u.vehicleName },
                                    a().createElement('div', { className: _u.nation, style: x }),
                                    Eu(i),
                                    a().createElement('div', { className: _u.type, style: L }),
                                    u,
                                ),
                                C &&
                                    a().createElement(
                                        'div',
                                        null,
                                        c &&
                                            a().createElement(
                                                ru.u,
                                                {
                                                    contentId:
                                                        R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView(
                                                            'resId',
                                                        ),
                                                    args: { tooltipId: 'vehicleRoles', vehicleCD: l },
                                                },
                                                a().createElement(
                                                    'div',
                                                    { className: _u.role },
                                                    a().createElement(pu, { role: c }),
                                                ),
                                            ),
                                        a().createElement(
                                            'div',
                                            { className: g()(_u.desc, c && _u.desc__withRole) },
                                            E,
                                        ),
                                        a().createElement(
                                            nu.u5,
                                            {
                                                size: nu.qE.medium,
                                                type: nu.L$.primary,
                                                onClick: () => {
                                                    w(!0),
                                                        D &&
                                                            (b({
                                                                action: Q.Click,
                                                                item: ce.SelectButton,
                                                                parentScreen: le.VehicleSelectionView,
                                                            }),
                                                            D());
                                                },
                                                soundClick: R.sounds.yes1(),
                                                mixClass: _u.button,
                                            },
                                            a().createElement(
                                                'div',
                                                { className: _u.buttonText },
                                                R.strings.seniority_awards.rewardsView.textButton.select(),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    },
                    yu = {
                        base: 'Vehicles_base_c3',
                        container: 'Vehicles_container_81',
                        scrollWrapper: 'Vehicles_scrollWrapper_ba',
                        scrollContent: 'Vehicles_scrollContent_47',
                        scrollList: 'Vehicles_scrollList_61',
                        scrollList__disabled: 'Vehicles_scrollList__disabled_19',
                        scrollLeftButton: 'Vehicles_scrollLeftButton_51',
                        scrollRightButton: 'Vehicles_scrollRightButton_65',
                        scrollTrack: 'Vehicles_scrollTrack_6a',
                        item: 'Vehicles_item_e7',
                        item__offset: 'Vehicles_item__offset_84',
                        item__big: 'Vehicles_item__big_a0',
                        vehicle: 'Vehicles_vehicle_56',
                        bar: 'Vehicles_bar_cd',
                        bar__visible: 'Vehicles_bar__visible_99',
                        titleContainer: 'Vehicles_titleContainer_20',
                        title: 'Vehicles_title_e4',
                        slideUp: 'Vehicles_slideUp_71',
                        fadeOut: 'Vehicles_fadeOut_d6',
                        raysAppearance: 'Vehicles_raysAppearance_49',
                        rotate: 'Vehicles_rotate_39',
                        fadeInWithScale: 'Vehicles_fadeInWithScale_db',
                        fadeIn: 'Vehicles_fadeIn_b3',
                        scale: 'Vehicles_scale_34',
                        blinkAndFadeOut: 'Vehicles_blinkAndFadeOut_a3',
                    };
                var xu = t(7712);
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                let Ru, Nu;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Pause = 'pause'),
                        (e.ActiveWithoutScroll = 'activeWithoutScroll'),
                        (e.End = 'end');
                })(Ru || (Ru = {})),
                    (function (e) {
                        (e.Medium = 'medium'), (e.Big = 'big');
                    })(Nu || (Nu = {}));
                const Tu = (0, X.Pi)(({ isStoppedScrolling: e, onScrollChange: u, onAnimationEnd: t }) => {
                        const n = fe().model,
                            i = n.root.get().viewState === Ee.VIEW_REWARD_AFTER_SELECTION,
                            o = n.vehicles.get(),
                            s = (0, Le.useHorizontalScrollApi)(),
                            l = (0, r.useRef)([]),
                            c = (0, r.useRef)(null),
                            E = (0, r.useState)(Ru.Active),
                            d = E[0],
                            A = E[1],
                            F = d === Ru.Active;
                        (0, r.useEffect)(() => {
                            e && A(Ru.ActiveWithoutScroll);
                        }, [e]);
                        const m = (0, r.useCallback)(() => {
                                const e = s.animationScroll.scrollPosition.get();
                                u(e);
                            }, [u, s.animationScroll.scrollPosition]),
                            _ = d === Ru.End,
                            D = (0, r.useCallback)(
                                (e) => {
                                    _ && s.handleMouseWheel(e);
                                },
                                [s, _],
                            );
                        (0, r.useEffect)(
                            () => (
                                s.events.on('change', m),
                                window.addEventListener('resize', m),
                                window.addEventListener('wheel', D),
                                () => {
                                    s.events.off('change', m),
                                        window.removeEventListener('resize', m),
                                        window.removeEventListener('wheel', D);
                                }
                            ),
                            [s.events, m, D],
                        );
                        const C = (0, r.useCallback)(
                                (e, u) => {
                                    const t = c.current;
                                    (t ? Math.round(t.getBoundingClientRect().right) : 0) < e &&
                                        (A(Ru.Pause),
                                        s.applyScroll(s.animationScroll.scrollPosition.goal + u),
                                        A(Ru.Active));
                                },
                                [s],
                            ),
                            B = (0, r.useCallback)(
                                (e) => {
                                    if (e + 1 === o.length) A(Ru.End);
                                    else if (F) {
                                        const u = l.current[e],
                                            t = l.current[e + 1];
                                        C(Math.round(t.getBoundingClientRect().right), u.offsetWidth);
                                    }
                                },
                                [F, C, o.length],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                _ && (null == t || t());
                            }, [t, _]),
                            a().createElement(
                                'div',
                                { className: yu.base },
                                a().createElement(
                                    'div',
                                    { className: yu.container, ref: c },
                                    i
                                        ? a().createElement(
                                              'div',
                                              null,
                                              a().createElement(
                                                  'div',
                                                  { className: yu.titleContainer },
                                                  a().createElement(
                                                      'div',
                                                      { className: yu.title },
                                                      R.strings.seniority_awards.rewardsView.selection.received(),
                                                  ),
                                              ),
                                              a().createElement(
                                                  'div',
                                                  { className: yu.vehicle },
                                                  a().createElement(
                                                      Su,
                                                      Lu({}, o[0].value, {
                                                          index: 0,
                                                          onRestAnimation: B,
                                                          size: 'big',
                                                          isEnabledSound: F,
                                                          state: we.ViewRewardAfterSelection,
                                                      }),
                                                  ),
                                              ),
                                          )
                                        : a().createElement(
                                              'div',
                                              {
                                                  className: g()(
                                                      yu.scrollList,
                                                      d !== Ru.End && yu.scrollList__disabled,
                                                  ),
                                              },
                                              a().createElement(
                                                  xu.Tm,
                                                  {
                                                      classNames: {
                                                          content: yu.scrollContent,
                                                          wrapper: yu.scrollWrapper,
                                                      },
                                                      api: s,
                                                  },
                                                  a().createElement(
                                                      tu.SpringContext,
                                                      { pause: d === Ru.Pause },
                                                      uu(o, (e, u) => {
                                                          const t = 1 === o.length ? Nu.Big : Nu.Medium;
                                                          return a().createElement(
                                                              'div',
                                                              {
                                                                  key: e.vehicleCD,
                                                                  ref: (e) => (l.current[u] = e),
                                                                  className: g()(
                                                                      yu.item,
                                                                      yu.item__offset,
                                                                      yu[`item__${t}`],
                                                                  ),
                                                              },
                                                              a().createElement(
                                                                  Su,
                                                                  Lu({}, e, {
                                                                      index: u,
                                                                      onRestAnimation: B,
                                                                      size: t,
                                                                      isEnabledSound: F,
                                                                  }),
                                                              ),
                                                          );
                                                      }),
                                                  ),
                                              ),
                                              a().createElement(
                                                  'div',
                                                  { className: g()(yu.bar, d === Ru.End && yu.bar__visible) },
                                                  a().createElement(eu.Horizontal.Bar, {
                                                      api: s,
                                                      classNames: {
                                                          leftButton: yu.scrollLeftButton,
                                                          rightButton: yu.scrollRightButton,
                                                          track: yu.scrollTrack,
                                                      },
                                                  }),
                                              ),
                                          ),
                                ),
                            )
                        );
                    }),
                    ku = 'Content_base_79',
                    Mu = 'Content_selectedVehicleResolver_aa',
                    Ou = 'Content_vehicles_8e',
                    Vu = 'Content_base__selection_e3',
                    Hu = 'SelectedVehicleResolver_base_63',
                    Iu = 'SelectedVehicleResolver_container_eb',
                    Pu = 'SelectedVehicleResolver_item_74',
                    Wu = 'SelectedVehicleResolver_shadowContainer_41',
                    zu = 'SelectedVehicleResolver_shadow_99',
                    Gu = 'SelectedVehicleResolver_base__submitted_16';
                function Uu() {
                    return (
                        (Uu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Uu.apply(this, arguments)
                    );
                }
                let $u;
                !(function (e) {
                    (e.Active = 'active'), (e.SelectionSubmitted = 'selectionSubmitted'), (e.End = 'end');
                })($u || ($u = {}));
                const ju = (0, X.Pi)(({ onAnimationEnd: e, onSelect: u }) => {
                        const t = fe().model,
                            n = t.vehicles.get(),
                            i = t.computes.vehiclesLength(),
                            o = t.selectedVehicleIndex.get() > i - 1 ? 0 : t.selectedVehicleIndex.get(),
                            s = t.previousVehicleIndex.get() > i - 1 ? 0 : t.previousVehicleIndex.get(),
                            l = n[o].value.techName,
                            c = n[s].value.techName,
                            E = l !== c,
                            d = (0, r.useState)($u.Active),
                            A = d[0],
                            F = d[1],
                            m = A === $u.Active,
                            _ = A === $u.End;
                        (0, r.useEffect)(() => {
                            _ && (null == e || e());
                        }, [e, _]);
                        const D = (0, tu.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: E ? 0 : 500,
                            config: { duration: 500, easing: Au },
                            loop: { reverse: E, opacity: 1 },
                        });
                        return a().createElement(
                            'div',
                            { className: g()(Hu, A === $u.SelectionSubmitted && Gu) },
                            a().createElement(
                                tu.animated.div,
                                { style: D, className: Wu },
                                a().createElement('div', { className: zu }),
                            ),
                            a().createElement(
                                'div',
                                { className: Iu },
                                a().createElement(
                                    'div',
                                    { className: Pu },
                                    a().createElement(
                                        Su,
                                        Uu({}, n[o].value, {
                                            index: 0,
                                            onRestAnimation: () => {
                                                F($u.End);
                                            },
                                            size: 'big',
                                            isEnabledSound: m,
                                            state: we.Selection,
                                            previousTechName: c,
                                            onSubmitBtnClick: () => {
                                                F($u.SelectionSubmitted), u && u();
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    qu = ({
                        machineState: e,
                        isFirstEnter: u,
                        isStoppedScrolling: t,
                        onScrollChange: n,
                        onAnimationEnd: i,
                        onSelectVehicle: o,
                    }) => {
                        const s = fe().model.root.get().viewState,
                            l = !u,
                            c = s === Ee.SELECTION;
                        return (
                            (0, r.useLayoutEffect)(() => {
                                const t = ye[e];
                                return u && (0, P.G)(t.firstEnter), (0, P.G)(t.enter), () => (0, P.G)(t.exit);
                            }, [u, e]),
                            (0, r.useEffect)(() => {
                                l && i();
                            }, [l, i]),
                            a().createElement(
                                'div',
                                { className: g()(ku, c && Vu) },
                                a().createElement(
                                    'div',
                                    { className: g()(Ou) },
                                    c
                                        ? a().createElement(
                                              'div',
                                              { className: Mu },
                                              a().createElement(ju, { onAnimationEnd: i, onSelect: o }),
                                          )
                                        : a().createElement(Tu, {
                                              isStoppedScrolling: t,
                                              onScrollChange: n,
                                              onAnimationEnd: i,
                                          }),
                                ),
                            )
                        );
                    },
                    Ku = {
                        base: 'App_base_11',
                        bgWrapper: 'App_bgWrapper_9f',
                        background: 'App_background_f9',
                        background__indent: 'App_background__indent_30',
                        shadow: 'App_shadow_71',
                        blackout: 'App_blackout_54',
                        gradient: 'App_gradient_50',
                        textButton: 'App_textButton_23',
                        fadeIn: 'App_fadeIn_10',
                        textButton__close: 'App_textButton__close_f1',
                        header: 'App_header_da',
                        slideUp: 'App_slideUp_0e',
                        footer: 'App_footer_1e',
                        vehiclesSelection: 'App_vehiclesSelection_78',
                        vehiclesSelection__hidden: 'App_vehiclesSelection__hidden_1e',
                        fadeOut: 'App_fadeOut_64',
                        raysAppearance: 'App_raysAppearance_2e',
                        rotate: 'App_rotate_0e',
                        fadeInWithScale: 'App_fadeInWithScale_85',
                        scale: 'App_scale_7b',
                        blinkAndFadeOut: 'App_blinkAndFadeOut_b4',
                    };
                let Yu;
                !(function (e) {
                    (e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z');
                })(Yu || (Yu = {}));
                const Xu = (e = {}) => {
                    (0, r.useEffect)(() => {
                        const u = (u) => {
                            if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                const t = e[u.keyCode];
                                'function' == typeof t && t(u);
                            }
                        };
                        return (
                            window.addEventListener('keyup', u),
                            () => {
                                window.removeEventListener('keyup', u);
                            }
                        );
                    }, [e]);
                };
                function Zu() {
                    const e = (0, r.useRef)(!0);
                    var u;
                    return (
                        (u = () => {
                            e.current = !1;
                        }),
                        (0, r.useEffect)(u, []),
                        e.current
                    );
                }
                const Qu = {
                        base: 'VehicleSlot_base_65',
                        bgContainer: 'VehicleSlot_bgContainer_a8',
                        bg: 'VehicleSlot_bg_b9',
                        base__selected: 'VehicleSlot_base__selected_a6',
                        nationContainer: 'VehicleSlot_nationContainer_4a',
                        nation: 'VehicleSlot_nation_f3',
                        imageContainer: 'VehicleSlot_imageContainer_ce',
                        image: 'VehicleSlot_image_15',
                        base__scaleX2: 'VehicleSlot_base__scaleX2_92',
                        vehicleInfoContainer: 'VehicleSlot_vehicleInfoContainer_b7',
                        vehicleName: 'VehicleSlot_vehicleName_50',
                        type: 'VehicleSlot_type_9c',
                        hitArea: 'VehicleSlot_hitArea_4c',
                        base__unselected: 'VehicleSlot_base__unselected_5f',
                        base__appearance: 'VehicleSlot_base__appearance_0d',
                        fadeIn: 'VehicleSlot_fadeIn_1d',
                    },
                    Ju = ({
                        index: e,
                        name: u,
                        techName: t,
                        type: n,
                        tier: i,
                        isPremium: s,
                        nation: l,
                        vehicleCD: c,
                        isSelected: E = !1,
                        onSelect: d,
                    }) => {
                        const A = Zu(),
                            F = (0, du.BN)(n),
                            m = {
                                backgroundImage: `url(R.images.gui.maps.icons.seniorityAwards.selection.vehicle.${t.toLowerCase()})`,
                            },
                            _ = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_160x100.${l})` },
                            D = ae(se),
                            C = ie(se),
                            B = C[0],
                            h = C[1],
                            v = (() => {
                                const e = (0, r.useState)(o.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = () => {
                                            t(o.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    u
                                );
                            })();
                        return a().createElement(
                            'div',
                            {
                                className: g()(
                                    Qu.base,
                                    E ? Qu.base__selected : Qu.base__unselected,
                                    A && Qu.base__appearance,
                                    Qu[`base__scaleX${v}`],
                                ),
                            },
                            a().createElement(
                                'div',
                                null,
                                a().createElement(
                                    'div',
                                    { className: Qu.bgContainer },
                                    a().createElement('div', { className: Qu.bg }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Qu.nationContainer },
                                    a().createElement('div', { className: Qu.nation, style: _ }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Qu.imageContainer },
                                    a().createElement('div', { className: Qu.image, style: m }),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: Qu.vehicleInfoContainer },
                                a().createElement(
                                    'div',
                                    { className: Qu.vehicleName },
                                    Eu(i),
                                    a().createElement('div', {
                                        className: Qu.type,
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.vehicleTypes.c_24x24.${F}${s ? '_elite' : ''})`,
                                        },
                                    }),
                                    u,
                                ),
                            ),
                            a().createElement(
                                ou,
                                {
                                    onShow: () => {
                                        B(Q.Viewed);
                                    },
                                    onHide: () => {
                                        h({
                                            action: Q.Viewed,
                                            item: ce.VehicleTooltip,
                                            parentScreen: le.VehicleSelectionView,
                                            info: `vehicle_${c}`,
                                            timeLimit: 0.5,
                                        });
                                    },
                                    args: { tooltipId: su, vehicleCD: c },
                                },
                                a().createElement('div', {
                                    className: Qu.hitArea,
                                    onMouseEnter: () => {
                                        E || P.$.playHighlight();
                                    },
                                    onClick: () => {
                                        E ||
                                            ((0, P.G)(R.sounds.gui_hangar_award_woosh()),
                                            d &&
                                                (D({
                                                    action: Q.Click,
                                                    item: ce.VehicleTabButton,
                                                    parentScreen: le.VehicleSelectionView,
                                                    info: `vehicle_${c}`,
                                                }),
                                                d(e)));
                                    },
                                }),
                            ),
                        );
                    },
                    et = 'VehiclesSelection_base_f8',
                    ut = 'VehiclesSelection_availableLabel_cc',
                    tt = 'VehiclesSelection_countLabel_3b',
                    nt = 'VehiclesSelection_glowContainer_29',
                    rt = 'VehiclesSelection_glow_f6',
                    at = 'VehiclesSelection_itemsContainer_35',
                    it = 'VehiclesSelection_item_63';
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const st = (0, X.Pi)(() => {
                        const e = fe(),
                            u = e.model,
                            t = e.controls,
                            n = u.vehicles.get(),
                            i = u.computes.vehiclesLength(),
                            o = u.selectedVehicleIndex.get() > i - 1 ? 0 : u.selectedVehicleIndex.get(),
                            s = (0, r.useCallback)(
                                (e) => {
                                    t.setSelectedVehicleIndex(e);
                                },
                                [t],
                            );
                        return a().createElement(
                            'div',
                            { className: et },
                            a().createElement(Du.z, {
                                text: R.strings.seniority_awards.rewardsView.selection.available(),
                                binding: {
                                    count: a().createElement(
                                        'div',
                                        null,
                                        a().createElement(
                                            'div',
                                            { className: nt },
                                            a().createElement('div', { className: rt }),
                                        ),
                                        a().createElement('span', { className: tt }, 1),
                                    ),
                                },
                                classMix: ut,
                            }),
                            a().createElement(
                                'div',
                                { className: at },
                                uu(n, (e, u) =>
                                    a().createElement(
                                        'div',
                                        { key: e.vehicleCD, className: it },
                                        a().createElement(
                                            Ju,
                                            ot({}, e, { index: u, isSelected: u === o, onSelect: s }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    lt = (e) => (e === Ee.VIEW_REWARD ? le.RewardsScreen : le.VehicleSelectionView),
                    ct = R.strings.seniority_awards.rewardsView;
                let Et;
                !(function (e) {
                    (e.ShowHeader = 'showHeader'),
                        (e.ShowContent = 'showContent'),
                        (e.ShowFooter = 'showFooter'),
                        (e.HideFooter = 'hideFooter'),
                        (e.Finished = 'finished');
                })(Et || (Et = {}));
                const dt = (0, X.Pi)(() => {
                    const e = fe(),
                        u = e.model,
                        t = e.controls,
                        n = u.root.get(),
                        i = n.category,
                        o = n.fromEntryPoint,
                        s = n.viewState,
                        l = !o,
                        c = ae(de(s));
                    (0,
                    ((e) => {
                        const u = ne(e, J),
                            t = u[0],
                            n = u[1],
                            a = (0, r.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        n = e.logLevel;
                                    t(u, n, ue(e));
                                },
                                [t],
                            );
                        return [(e) => a(e), () => n()];
                    })(de(s))[0])({ action: Q.Displayed, item: le.VehicleSelectionView });
                    const E = ie(de(s)),
                        d = E[0],
                        A = E[1];
                    d(Q.KeyDown), d(Q.Click);
                    const F = (0, r.useState)(0),
                        m = F[0],
                        _ = F[1],
                        D = (0, r.useState)(Et.ShowHeader),
                        C = D[0],
                        B = D[1],
                        h = (0, I.eO)(() =>
                            ((e) =>
                                (0, pe.C)({
                                    id: 'seniority-awards',
                                    initial: Se(e),
                                    context: { isFirstEnter: !0 },
                                    states: {
                                        [we.ViewReward]: { type: 'final' },
                                        [we.Selection]: {
                                            on: {
                                                [be.SELECTED]: { target: we.ViewRewardAfterSelection, internal: !0 },
                                                [be.VIEW_VEHICLES]: { target: we.ViewReward, internal: !0 },
                                            },
                                        },
                                        [we.ViewRewardAfterSelection]: { type: 'final' },
                                    },
                                }))(s),
                        ),
                        v = h[0],
                        f = (e = !1) => {
                            A({ action: e ? Q.KeyDown : Q.Click, item: ce.CloseButton, parentScreen: lt(s) }),
                                xe(v.value),
                                (0, q.Sy)();
                        };
                    var p;
                    (p = () => {
                        f(!0);
                    }),
                        Y(j.n.ESCAPE, p);
                    const w = () => {
                        f(true);
                    };
                    Xu({ [j.n.ENTER]: w, [j.n.SPACE]: w });
                    const b = (0, r.useCallback)((e) => _(e), []),
                        S = (0, r.useCallback)(() => {
                            B(Et.ShowFooter);
                        }, []),
                        y = u.vehicles.get().length >= 5,
                        x = s !== Ee.SELECTION && C === Et.ShowFooter;
                    (0, r.useEffect)(() => {
                        if (C === Et.ShowHeader) return $(() => B(Et.ShowContent), 1e3);
                    }, [C]);
                    return a().createElement(
                        'div',
                        { className: g()(Ku.base, Ku[`base__${v.value}`]) },
                        a().createElement(
                            'div',
                            { className: Ku.bgWrapper },
                            a().createElement('div', {
                                className: g()(Ku.background, y && Ku.background__indent),
                                style: { transform: `translateX(-${viewEnv.pxToRem(m)}rem)` },
                            }),
                        ),
                        a().createElement('div', { className: Ku.shadow }),
                        a().createElement('div', { className: Ku.blackout }),
                        a().createElement('div', { className: Ku.gradient }),
                        a().createElement(
                            'div',
                            { className: g()(Ku.textButton, Ku.textButton__close) },
                            a().createElement(U, {
                                caption: ct.textButton.close(),
                                type: 'close',
                                side: 'right',
                                onClick: () => f(),
                            }),
                        ),
                        a().createElement(
                            'div',
                            { className: Ku.header },
                            a().createElement(Fe.d, {
                                category: i,
                                onShowTooltip: () => {
                                    d(Q.Viewed);
                                },
                                onHideTooltip: () => {
                                    A({
                                        action: Q.Viewed,
                                        item: ce.SeniorityAwardsTooltip,
                                        parentScreen: lt(s),
                                        timeLimit: 0.5,
                                    });
                                },
                            }),
                        ),
                        C !== Et.ShowHeader &&
                            a().createElement(qu, {
                                machineState: v.value,
                                isFirstEnter: v.context.isFirstEnter,
                                isStoppedScrolling: !1,
                                onScrollChange: b,
                                onAnimationEnd: S,
                                onSelectVehicle: () => {
                                    B(Et.HideFooter),
                                        $(() => {
                                            const e = u.computes.vehiclesLength() - 1,
                                                n = u.selectedVehicleIndex.get() > e ? e : u.selectedVehicleIndex.get();
                                            t.selectVehicleReward(u.vehicles.get()[n].value.vehicleId);
                                        }, 500);
                                },
                            }),
                        (x || C === Et.Finished) &&
                            a().createElement(
                                'div',
                                { className: Ku.footer },
                                a().createElement(Ae.M, {
                                    hasMoreRewards: l,
                                    isGotoHangarAvailable: o,
                                    isShopAvailable: !1,
                                    onShowMoreClick: () => {
                                        c({ action: Q.Click, item: ce.ShowMoreButton, parentScreen: lt(s) }),
                                            xe(v.value),
                                            t.moreRewards();
                                    },
                                    onAcceptClick: () => {
                                        c({ action: Q.Click, item: ce.ConfirmButton, parentScreen: lt(s) }),
                                            xe(v.value),
                                            t.moreRewards();
                                    },
                                    onGotoHangarBtnClick: () => {
                                        c({ action: Q.Click, item: ce.GoToHangarButton, parentScreen: lt(s) }),
                                            xe(v.value),
                                            t.goToHangar();
                                    },
                                }),
                            ),
                        s === Ee.SELECTION &&
                            a().createElement(
                                'div',
                                {
                                    className: g()(
                                        Ku.vehiclesSelection,
                                        C === Et.HideFooter && Ku.vehiclesSelection__hidden,
                                    ),
                                },
                                a().createElement(st, null),
                            ),
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        a().createElement(O, null, a().createElement(ve, null, a().createElement(dt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1736: (e, u, t) => {
                'use strict';
                t.d(u, { T: () => A });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6963),
                    i = t(6179),
                    o = t.n(i);
                const s = 'FormatGradientText_gradientBox_c3',
                    l = 'FormatGradientText_gradientText_39',
                    c = 'FormatGradientText_gradientText__copied_f8',
                    E = '%(gradientStart)',
                    d = '%(gradientEnd)',
                    A = (0, i.memo)(({ text: e, binding: u, className: t, classNames: n }) => {
                        const i = u ? Object.assign({}, u) : {};
                        let A = e;
                        if (e) {
                            const u = E.length,
                                t = d.length,
                                a = e.indexOf(E),
                                F = e.indexOf(d),
                                m = e.substring(a, F + t),
                                _ = e.substring(a + u, F);
                            m &&
                                m.length &&
                                ((A = A.replace(m, '%(%)')),
                                (i['%'] = o().createElement(
                                    'div',
                                    { className: s },
                                    o().createElement('div', { className: r()(l, null == n ? void 0 : n.text) }, _),
                                    o().createElement(
                                        'div',
                                        { className: r()(l, c, null == n ? void 0 : n.copiedText) },
                                        _,
                                    ),
                                )));
                        }
                        return o().createElement(a.z, { classMix: t, text: A, binding: i });
                    });
            },
            7712: (e, u, t) => {
                'use strict';
                t.d(u, { Tm: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    o = t.n(i),
                    s = (t(9911), t(2840), t(4682));
                t(6358);
                const l = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(s.Z.base, u) },
                        o().createElement(
                            'div',
                            { className: r()(s.Z.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                            o().createElement(
                                'div',
                                { className: r()(s.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            },
            5611: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => A });
                var n = t(3638),
                    r = t(2106),
                    a = t(6179),
                    i = t.n(a);
                const o = 'SeniorityAwardsViewFooter_base_15',
                    s = 'SeniorityAwardsViewFooter_description_ad',
                    l = 'SeniorityAwardsViewFooter_buttonHolder_2e',
                    c = 'SeniorityAwardsViewFooter_button_0b',
                    E = 'SeniorityAwardsViewFooter_buttonText_f1',
                    d = R.strings.seniority_awards.rewardsView,
                    A = ({
                        isGotoHangarAvailable: e = !1,
                        hasMoreRewards: u,
                        isShopAvailable: t,
                        onShowMoreClick: a,
                        onAcceptClick: A,
                        onGotoHangarBtnClick: F,
                    }) => {
                        const m = !u && t ? d.gotoRewardsBtn() : d.applyBtn();
                        return i().createElement(
                            'div',
                            { className: o },
                            u
                                ? i().createElement(
                                      'div',
                                      { className: l },
                                      i().createElement(
                                          n.u5,
                                          { size: r.q.medium, onClick: a, soundClick: R.sounds.yes1(), mixClass: c },
                                          i().createElement('div', { className: E }, d.moreRewardsBtn()),
                                      ),
                                  )
                                : i().createElement(
                                      i().Fragment,
                                      null,
                                      t && i().createElement('div', { className: s }, d.exchangeCoins()),
                                      i().createElement(
                                          'div',
                                          { className: l },
                                          i().createElement(
                                              n.u5,
                                              {
                                                  size: r.q.medium,
                                                  type: t ? r.L.main : r.L.primary,
                                                  onClick: A,
                                                  soundClick: R.sounds.yes1(),
                                                  mixClass: c,
                                                  isFocused: !0,
                                              },
                                              i().createElement('div', { className: E }, m),
                                          ),
                                          e &&
                                              i().createElement(
                                                  n.u5,
                                                  {
                                                      size: r.q.medium,
                                                      type: r.L.secondary,
                                                      onClick: F,
                                                      soundClick: R.sounds.yes1(),
                                                      mixClass: c,
                                                      isFocused: !0,
                                                  },
                                                  i().createElement('div', { className: E }, d.gotoHangarBtn()),
                                              ),
                                      ),
                                  ),
                        );
                    };
            },
            476: (e, u, t) => {
                'use strict';
                t.d(u, { d: () => y });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(1736),
                    s = t(2056);
                const l = 'HeaderButton_base_a0',
                    c = 'HeaderButton_caption_06',
                    E = 'HeaderButton_icon_89',
                    d = ({ onShowTooltip: e, onHideTooltip: u }) =>
                        i().createElement(
                            s.u,
                            {
                                onShow: e,
                                onHide: u,
                                contentId: R.views.lobby.seniority_awards.SeniorityAwardsTooltip('resId'),
                            },
                            i().createElement(
                                'div',
                                { className: l },
                                i().createElement(
                                    'div',
                                    { className: c },
                                    R.strings.seniority_awards.rewardsView.info(),
                                ),
                                i().createElement('div', { className: E }),
                            ),
                        ),
                    A = 'SeniorityAwardsViewHeader_base_90',
                    F = 'SeniorityAwardsViewHeader_titleBox_0e',
                    m = 'SeniorityAwardsViewHeader_light_6e',
                    _ = 'SeniorityAwardsViewHeader_glow_4c',
                    D = 'SeniorityAwardsViewHeader_line_57',
                    C = 'SeniorityAwardsViewHeader_line__inverted_23',
                    B = 'SeniorityAwardsViewHeader_square_ca',
                    h = 'SeniorityAwardsViewHeader_title_f3',
                    g = 'SeniorityAwardsViewHeader_gradientText_2f',
                    v = 'SeniorityAwardsViewHeader_gradientText__copied_1e',
                    f = 'SeniorityAwardsViewHeader_subTitleBox_57',
                    p = 'SeniorityAwardsViewHeader_subTitle_27',
                    w = 'SeniorityAwardsViewHeader_headerButton_50',
                    b = R.strings.seniority_awards.rewardsView,
                    S = (e) => e.split('_')[0],
                    y = ({ category: e, onShowTooltip: u, onHideTooltip: t }) => {
                        var n;
                        const a = b.title();
                        return i().createElement(
                            'div',
                            { className: A },
                            i().createElement('div', { className: _ }),
                            i().createElement(
                                'div',
                                { className: F },
                                i().createElement('div', { className: m }),
                                i().createElement('div', { className: D }, i().createElement('div', { className: B })),
                                i().createElement(
                                    'div',
                                    { className: h },
                                    i().createElement('div', { className: g }, a),
                                    i().createElement('div', { className: r()(g, v) }, a),
                                ),
                                i().createElement(
                                    'div',
                                    { className: r()(D, C) },
                                    i().createElement('div', { className: B }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: f },
                                i().createElement(o.T, {
                                    className: p,
                                    text: null == (n = b.subTitle.$dyn(S(e))) ? void 0 : n.toString(),
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: w },
                                i().createElement(d, { onShowTooltip: u, onHideTooltip: t }),
                            ),
                        );
                    };
            },
            4682: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
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
                    for (var [u, t, n] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 194),
        (() => {
            var e = { 194: 0, 881: 0, 679: 0, 521: 0, 919: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [851], () => __webpack_require__(6873));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
