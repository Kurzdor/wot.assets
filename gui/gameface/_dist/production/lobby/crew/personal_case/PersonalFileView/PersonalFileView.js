(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: E,
                    onMouseEnter: _,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: f,
                    onClick: p,
                }) => {
                    const D = (0, i.useRef)(null),
                        h = (0, i.useState)(t),
                        C = h[0],
                        B = h[1],
                        b = (0, i.useState)(!1),
                        v = b[0],
                        w = b[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                C && null !== D.current && !D.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, i.useEffect)(() => {
                            B(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: D,
                                className: r()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    c && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    C && o.Z.base__focus,
                                    v && o.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, a.G)(m), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    c || (F && F(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== E && (0, a.G)(E),
                                        A && A(e),
                                        t && (c || (D.current && (D.current.focus(), B(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (f && f(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (p && p(e));
                                },
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: o.Z.back }),
                                    s().createElement('span', { className: o.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(o.Z.state, o.Z.state__default) },
                                s().createElement('span', { className: o.Z.stateDisabled }),
                                s().createElement('span', { className: o.Z.stateHighlightHover }),
                                s().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
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
            2686: (e, u, t) => {
                'use strict';
                t.d(u, { At: () => o });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3458);
                t(2902);
                const i = [
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
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            o = e.getImageSource,
                            m = e.frameCount,
                            E = e.onAnimate,
                            _ = e.frameTime,
                            g = void 0 === _ ? a.O.FRAME_TIME : _,
                            A = e.initialFrameIndex,
                            F = void 0 === A ? a.O.INITIAL_FRAME_INDEX : A,
                            f = e.lastFrameIndex,
                            p = void 0 === f ? m - 1 : f,
                            D = e.loop,
                            h = void 0 === D ? a.O.LOOP : D,
                            C = e.state,
                            B = void 0 === C ? a.O.STATE : C,
                            b = e.onAnimationDone,
                            v = e.onAnimationComplete,
                            w = e.poster,
                            y = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const k = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = k.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (B) {
                                    case 'play':
                                        return (function () {
                                            const e = d(F, p, o),
                                                u = l(F, p),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == E || E(r, a),
                                                          t(a),
                                                          r === p &&
                                                              (null == v || v(),
                                                              h || (null == b || b(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, g);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === F && w ? { path: w, x: 0, y: 0 } : o(F),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(c(e, u));
                                            return (
                                                u.addEventListener('load', n), () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [g, o, F, p, h, E, v, b, w, B]),
                            r().createElement('canvas', s({}, y, { width: u, height: t, ref: k }))
                        );
                    }),
                    l = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    c = (e, u) => Object.assign({}, e, { img: u }),
                    d = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, c(e, u));
                            else {
                                const u = new Image();
                                (r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, c(e, u));
                            }
                        }
                        return n;
                    };
            },
            3458: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                const n = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, u, t) => {
                'use strict';
                function n(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const r = n % t,
                            a = (r % u.columns) * e.width,
                            i = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: i };
                    };
                }
                function r(e) {
                    return (u) => `${e}${u}`;
                }
                t.d(u, { V: () => r, q: () => n });
            },
            2902: (e, u, t) => {
                'use strict';
                t(6179), t(3458);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    i = t(5262);
                const s = n.O.client.getSize('rem'),
                    o = s.width,
                    l = s.height,
                    c = Object.assign({ width: o, height: l }, (0, i.T)(o, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3138),
                    r = t(6536),
                    a = t(6179),
                    i = t.n(a),
                    s = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, a.useContext)(s.Y),
                        t = (0, a.useState)(u),
                        c = t[0],
                        d = t[1],
                        m = (0, a.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                r = n.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: r }, (0, l.T)(t, r, o.j)));
                        }, []),
                        E = (0, a.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', m), n.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', m),
                                    n.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [m, E],
                        );
                    const _ = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(s.Y.Provider, { value: _ }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const i = ['children'];
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
                        })(e, i);
                    const s = (0, n.useContext)(a.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        E = s.extraLargeWidth,
                        _ = s.largeWidth,
                        g = s.mediumWidth,
                        A = s.smallWidth,
                        F = s.extraSmallWidth,
                        f = s.extraLargeHeight,
                        p = s.largeHeight,
                        D = s.mediumHeight,
                        h = s.smallHeight,
                        C = s.extraSmallHeight,
                        B = { extraLarge: f, large: p, medium: D, small: h, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, r.H)(u, t, B);
                        if (t.largeWidth && _) return (0, r.H)(u, t, B);
                        if (t.mediumWidth && g) return (0, r.H)(u, t, B);
                        if (t.smallWidth && A) return (0, r.H)(u, t, B);
                        if (t.extraSmallWidth && F) return (0, r.H)(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && f) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, n.memo)(s);
            },
            7382: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { YN: () => r.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    r = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
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
                'use strict';
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
                'use strict';
                t.d(u, { $Q: () => D });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    i = t(1856),
                    s = t(3138),
                    o = t(3815),
                    l = t(560),
                    c = t(7727),
                    d = t(6179),
                    m = t.n(d),
                    E = t(6358),
                    _ = t(372);
                const g = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    f = () => {},
                    p = (e, u) => Math.max(20, e.offsetWidth * u),
                    D = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = F, onDrag: n = f }) => {
                        const D = (0, d.useRef)(null),
                            h = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            v = e.stepTimeout || 100,
                            w = (0, d.useState)(A),
                            y = w[0],
                            k = w[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    k(e),
                                        b.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current });
                                },
                                [n],
                            ),
                            x = () => {
                                const u = B.current,
                                    t = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetWidth - p(u, s)) * o;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (h.current && C.current && B.current && b.current) {
                                            if (0 === e)
                                                return h.current.classList.add(g), void C.current.classList.remove(g);
                                            if (
                                                ((u = B.current),
                                                (t = b.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return h.current.classList.remove(g), void C.current.classList.add(g);
                                            var u, t;
                                            h.current.classList.remove(g), C.current.classList.remove(g);
                                        }
                                    })(l);
                            },
                            T = (0, o.z)(() => {
                                (() => {
                                    const u = b.current,
                                        t = B.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    (u.style.width = `${p(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        D.current &&
                                            (1 === a
                                                ? D.current.classList.add(_.Z.base__nonActive)
                                                : D.current.classList.remove(_.Z.base__nonActive));
                                })(),
                                    x();
                            });
                        (0, d.useEffect)(() => (0, i.v)(T)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const u = () => {
                                            x();
                                        };
                                        let t = f;
                                        const n = () => {
                                            t(), (t = (0, i.v)(T));
                                        };
                                        return (
                                            e.events.on('recalculateContent', T),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', T),
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
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = B.current,
                                            o = b.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - y.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        u(), S(A);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, y.offset, y.pending, n, S]);
                        const R = (0, l.B)((u) => e.applyStepTo(u), v, [e]),
                            N = R[0],
                            I = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', I, !0),
                                () => document.removeEventListener('mouseup', I, !0)
                            ),
                            [I],
                        );
                        const L = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: D, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(E.Nm.Next));
                                },
                                onMouseUp: I,
                                ref: h,
                                onMouseEnter: L,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = b.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                S({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = b.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? E.Nm.Prev : E.Nm.Next);
                                            }
                                    },
                                    ref: B,
                                    onMouseEnter: L,
                                },
                                m().createElement('div', { ref: b, className: r()(_.Z.thumb, u.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(E.Nm.Prev));
                                },
                                onMouseUp: I,
                                ref: C,
                                onMouseEnter: L,
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
                    s = t(2773),
                    o = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        A = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            i().createElement(o.Area, { className: m, api: A, classNames: d }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: u, onDrag: _, classNames: g }),
                    );
                };
            },
            7950: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        Area: () => m,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    s = t.n(i),
                    o = t(2773),
                    l = t(2840),
                    c = t(4682),
                    d = t(6358);
                const m = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(c.Z.base, u) },
                        s().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (m.Bar = o.$Q), (m.Default = l.K);
            },
            6358: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { $Q: () => h });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    i = t(1856),
                    s = t(3138),
                    o = t(3815),
                    l = t(560),
                    c = t(7727),
                    d = t(6179),
                    m = t.n(d),
                    E = t(7701),
                    _ = t(9168);
                const g = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    f = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    p = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    D = (e, u) => Math.max(20, e.offsetHeight * u),
                    h = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = f, onDrag: n = A }) => {
                        const h = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(F),
                            k = y[0],
                            S = y[1],
                            x = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        v.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current });
                                },
                                [n],
                            ),
                            T = (0, o.z)(() => {
                                const u = v.current,
                                    t = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${D(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    h.current &&
                                        (1 === a
                                            ? h.current.classList.add(_.Z.base__nonActive)
                                            : h.current.classList.remove(_.Z.base__nonActive)),
                                    a
                                );
                            }),
                            R = (0, o.z)(() => {
                                const u = b.current,
                                    t = v.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    l = (u.offsetHeight - D(u, s)) * o;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && B.current && b.current && v.current) {
                                            if (0 === Math.round(e))
                                                return C.current.classList.add(g), void B.current.classList.remove(g);
                                            if (
                                                ((u = b.current),
                                                (t = v.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return C.current.classList.remove(g), void B.current.classList.add(g);
                                            var u, t;
                                            C.current.classList.remove(g), B.current.classList.remove(g);
                                        }
                                    })(l);
                            }),
                            N = (0, o.z)(() => {
                                p(e, () => {
                                    T(), R();
                                });
                            });
                        (0, d.useEffect)(() => (0, i.v)(N)),
                            (0, d.useEffect)(() => {
                                const u = () => {
                                    p(e, () => {
                                        R();
                                    });
                                };
                                let t = A;
                                const n = () => {
                                    t(), (t = (0, i.v)(N));
                                };
                                return (
                                    e.events.on('recalculateContent', N),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', N),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!k.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        x(F);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        p(e, (t) => {
                                            const r = b.current,
                                                a = v.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = u.screenY - k.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, k.offset, k.pending, n, x]);
                        const I = (0, l.B)((u) => e.applyStepTo(u), w, [e]),
                            L = I[0],
                            P = I[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', P, !0),
                                () => document.removeEventListener('mouseup', P, !0)
                            ),
                            [P],
                        );
                        const O = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: h, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(E.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: O,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = v.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                x({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    v.current &&
                                                        p(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? E.Nm.Prev : E.Nm.Next);
                                            }
                                    },
                                    ref: b,
                                    onMouseEnter: O,
                                },
                                m().createElement('div', { ref: v, className: r()(_.Z.thumb, u.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(E.Nm.Prev));
                                },
                                onMouseUp: P,
                                ref: B,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            1158: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    s = t(6225),
                    o = t(9605),
                    l = t(5636);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        A = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            i().createElement(o.Area, { className: d, classNames: m, api: A }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: u, onDrag: _, classNames: g }),
                    );
                };
            },
            9605: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { Area: () => m, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6225),
                    l = t(1158),
                    c = t(7701),
                    d = t(5636);
                const m = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(d.Z.content, null == u ? void 0 : u.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
                m.Default = l.K;
            },
            7701: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { EO: () => _, Nm: () => m, he: () => E });
                var n = t(7515),
                    r = t(1856),
                    a = t(3138),
                    i = t(4532),
                    s = t(9653),
                    o = t(3815),
                    l = t(4489),
                    c = t(6179),
                    d = t(7030);
                let m;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(m || (m = {}));
                const E = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _ = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: m,
                        getWrapperSize: _,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const A = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                i = r[1];
                            return i <= a ? 0 : (0, n.u)(a, i, t);
                        };
                        return (n = {}) => {
                            const F = n.settings,
                                f = void 0 === F ? E : F,
                                p = (0, c.useRef)(null),
                                D = (0, c.useRef)(null),
                                h = (0, s.q)(),
                                C = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = p.current;
                                        u && (t(u, e), h.trigger('change', e), g && C());
                                    },
                                    onRest: (e) => h.trigger('rest', e),
                                    onStart: (e) => h.trigger('start', e),
                                    onPause: (e) => h.trigger('pause', e),
                                })),
                                b = B[0],
                                v = B[1],
                                w = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = b.scrollPosition.get(),
                                            a = (null != (n = b.scrollPosition.goal) ? n : 0) - r;
                                        return A(e, u * t + a + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = p.current;
                                        n &&
                                            v.start({
                                                scrollPosition: A(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: f.animationConfig,
                                                from: { scrollPosition: A(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [v, f.animationConfig, b.scrollPosition],
                                ),
                                k = (0, c.useCallback)(
                                    (e) => {
                                        const u = p.current,
                                            t = D.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return _(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, f.step),
                                            r = w(u, e, n);
                                        y(r);
                                    },
                                    [y, w, f.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && k(m(e)),
                                            p.current && h.trigger('mouseWheel', e, b.scrollPosition, u(p.current));
                                    },
                                    [b.scrollPosition, k, h],
                                ),
                                x = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = p.current;
                                            e &&
                                                (y(A(e, b.scrollPosition.goal), { immediate: !0 }),
                                                h.trigger('resizeHandled'));
                                        }),
                                    [y, b.scrollPosition.goal],
                                ),
                                T = (0, o.z)(() => {
                                    const e = p.current;
                                    if (!e) return;
                                    const u = A(e, b.scrollPosition.goal);
                                    u !== b.scrollPosition.goal && y(u, { immediate: !0 }),
                                        h.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (D.current ? _(D.current) : void 0),
                                    getContainerSize: () => (p.current ? e(p.current) : void 0),
                                    getBounds: () =>
                                        p.current
                                            ? u(p.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: f.step.clampedArrowStepTimeout,
                                    clampPosition: A,
                                    handleMouseWheel: S,
                                    applyScroll: y,
                                    applyStepTo: k,
                                    contentRef: p,
                                    wrapperRef: D,
                                    scrollPosition: v,
                                    animationScroll: b,
                                    recalculateContent: T,
                                    events: { on: h.on, off: h.off },
                                }),
                                [b.scrollPosition, y, k, h.off, h.on, T, S, v, f.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, u, t) => {
                'use strict';
                t.d(u, { X: () => r });
                var n = t(7950);
                const r = { Vertical: t(9605), Horizontal: n };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const i = ['children'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = (e) => {
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
                        })(e, i);
                    return r().createElement(
                        a.u,
                        s(
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    i = t(6373),
                    s = t(2056);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(i.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(s.u, o({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, m]);
                        return a().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                E,
                            ),
                            u,
                        );
                        var g;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
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
                function s(e) {
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
                const o = (e, u, t = {}, n = 0) => {
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
                            m = e.onClick,
                            E = e.ignoreShowDelay,
                            _ = void 0 !== E && E,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            F = e.decoratorId,
                            f = void 0 === F ? 0 : F,
                            p = e.isEnabled,
                            D = void 0 === p || p,
                            h = e.targetId,
                            C = void 0 === h ? 0 : h,
                            B = e.onShow,
                            b = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => C || (0, n.F)().resId, [C]),
                            k = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, f, { isMouseEvent: !0, on: !0, arguments: s(r) }, y),
                                    B && B(),
                                    (w.current.isVisible = !0));
                            }, [t, f, r, y, B]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, f, { on: !1 }, y),
                                        w.current.isVisible && b && b(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, f, y, b]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === D && S();
                            }, [D, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return D
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, _ ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === A && S(), null == m || m(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === A && S(), null == d || d(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
                        var T;
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
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var n = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return a(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(e, u)
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
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: a = 'model' } = {}) {
                    const s = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = s.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            r = a.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const i = 'string' == typeof r ? `${a}.${r}` : a,
                                o = n.O.view.addModelObserver(i, u, !0);
                            return s.set(o, t), e && t(l(r)), o;
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
                            for (var e, t = r(s.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    s = t(8246);
                const o = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                E = (t, a, i) => {
                                    var o;
                                    const l = s.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        E = (e) => m.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
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
                                                            i = Object.entries(a),
                                                            s = i.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            s[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        g = { mode: t, model: _, externalModel: c, cleanup: E };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && i ? i.controls(g) : u(g),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                g = (0, a.useState)(o),
                                A = g[0],
                                F = g[1],
                                f = (0, a.useState)(() => E(o, l, d)),
                                p = f[0],
                                D = f[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? D(E(A, l, d)) : (_.current = !0);
                                }, [d, A, l]),
                                (0, a.useEffect)(() => {
                                    F(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                i().createElement(t.Provider, { value: p }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t.d(u, { f8: () => c, s_: () => i, wB: () => d, yR: () => s });
                var n = t(3649),
                    r = (t(9916), t(8613));
                const a = 24,
                    i = 1e3,
                    s = 60,
                    o = 60 * s,
                    l = a * o;
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
                function c(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / l);
                    u -= t * l;
                    const n = Math.trunc(u / o);
                    u -= n * o;
                    const r = Math.trunc(u / s);
                    return (u -= r * s), { days: t, hours: n, minutes: r, seconds: u };
                }
                const d = (e, u = !0) =>
                    e.days > 7 && u
                        ? (0, n.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, n.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, n.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, n.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, n.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
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
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                        graphicsQuality: () => s,
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
                const s = {
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
                t.d(u, { ZP: () => s, hY: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = Object.assign({}, a, { sound: n.playSound }),
                    s = { play: i, setRTPC: n.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => B,
                        isFocused: () => h,
                        pxToRem: () => f,
                        remToPx: () => p,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => k,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function g(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
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
                    k = Promise.all([
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
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
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
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                t.d(u, { ZT: () => n, jv: () => r });
                function r() {
                    return !1;
                }
                console.log;
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
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { au: () => r });
                var n = t(3469);
                t(2133), t(2790), t(579), t(5360), t(9056);
                const r = n.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            4532: (e, u, t) => {
                'use strict';
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
            3469: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(7044),
                    r = t(6179);
                const a = () => {},
                    i = (e = 0, u, t = 0, i = a) => {
                        const s = (0, r.useState)(e),
                            o = s[0],
                            l = s[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        a = u || (e > 2 * n.yR ? n.yR : 1),
                                        s = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - r) / n.s_);
                                            null !== t && u <= t ? (l(t), i && i(), clearInterval(s)) : l(u);
                                        }, a * n.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, u, t, i]),
                            o
                        );
                    };
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            9653: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => i });
                var n = t(6179);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return a(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(e, u)
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
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        i = (e, ...t) => {
                            for (var n, a = r(u(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: i }), []);
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
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => i, fd: () => s });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let i, s, o;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5360: (e, u, t) => {
                'use strict';
                t(6536);
                var n = t(9916);
                t(6179);
                n.Sw.instance;
                let r;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(r || (r = {}));
            },
            9056: (e, u, t) => {
                'use strict';
                var n = t(9916);
                t(6179);
                n.Sw.instance;
            },
            2039: (e, u, t) => {
                'use strict';
                t.d(u, { b: () => r });
                var n = t(6179);
                const r = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            2790: (e, u, t) => {
                'use strict';
                t(6179);
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
            4419: (e, u, t) => {
                'use strict';
                t.d(u, { y: () => a });
                var n = t(8045),
                    r = t(6179);
                const a = (e, u, t = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const t = e[0];
                            u && u(t);
                        },
                        [u],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !t) return;
                        const u = new n.Z((e) => a(e));
                        return (
                            u.observe(e.current),
                            () => {
                                u.disconnect();
                            }
                        );
                    }, [a, t, e]);
                };
            },
            3112: (e, u, t) => {
                'use strict';
                t.d(u, { V: () => a });
                var n = t(6179),
                    r = t(3138);
                const a = () => {
                    const e = (0, n.useState)(r.O.view.getScale()),
                        u = e[0],
                        t = e[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                t(r.O.view.getScale());
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
                };
            },
            579: (e, u, t) => {
                'use strict';
                t(3138), t(6179);
            },
            4489: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => a });
                var n = t(5139),
                    r = t(6179);
                function a(e, u, t) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(t, e), u);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
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
            9480: (e, u, t) => {
                'use strict';
                t.d(u, { UI: () => n });
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
            },
            1612: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => r });
                var n = t(9174);
                function r(e) {
                    const u = {};
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            const r = e[t];
                            u[t] = (0, n.aD)(r);
                        }
                    return u;
                }
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
                        a
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) (u += n[t]), (e -= r[t]);
                                  return u;
                              })(e);
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => n });
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => i, Eg: () => o, Uw: () => g, WU: () => a, dL: () => A, v2: () => r, z4: () => s });
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
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    c = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    d = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? l : c, []),
                    m = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return m(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = s(e);
                            return d(a, /( )/, u).forEach((e) => (t = t.concat(d(e, n, r.left)))), t;
                        })(e, u);
                    },
                    g = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _(e, u))),
                    A = (e) => a(R.strings.common.percentValue(), { value: e });
            },
            5139: (e, u, t) => {
                'use strict';
                function n(e, u, t, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), t.apply(l, o);
                        }
                        a ||
                            (n && !r && d(),
                            s(),
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
                        (o.cancel = function () {
                            s(), (a = !0);
                        }),
                        o
                    );
                }
                t.d(u, { Z: () => n });
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
                'use strict';
                t.d(u, { Sw: () => a.Z, B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => F });
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
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    E = t(3138);
                const _ = ['args'];
                function g(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                            g(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    f = (e, u) => {
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
                                })(u, _);
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
                    p = () => f(s.CLOSE),
                    D = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var h = t(7572);
                const C = r.instance,
                    B = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => f(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => f(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            f(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + i.x,
                                    y: E.O.view.pxToRem(c) + i.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            f(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: A(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => D(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, p);
                        },
                        handleViewEvent: f,
                        onBindingsReady: F,
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
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
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
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            1504: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => o });
                var n = t(7739),
                    r = t(6179),
                    a = t.n(r),
                    i = t(2849);
                const s = ['children'];
                const o = (e) => {
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
                        })(e, s);
                    return a().createElement(n.ZN, null, a().createElement(i.l, t, u));
                };
            },
            2849: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => g });
                var n = t(6483),
                    r = t.n(n),
                    a = t(926),
                    i = t.n(a),
                    s = t(6179),
                    o = t.n(s),
                    l = t(5415);
                const c = ['children', 'className'];
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
                const m = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: i().SMALL_WIDTH,
                        [l.fd.Medium]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH} ${i().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: i().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT} ${i().EXTRA_LARGE_HEIGHT}`,
                    },
                    _ = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: i().SMALL,
                        [l.cJ.Medium]: `${i().SMALL} ${i().MEDIUM}`,
                        [l.cJ.Large]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE}`,
                        [l.cJ.ExtraLarge]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE} ${i().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, c);
                        const a = (0, l.GS)(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            g = a.mediaSize;
                        return o().createElement('div', d({ className: r()(t, m[i], E[s], _[g]) }, n), u);
                    };
            },
            4029: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => n.z });
                var n = t(1504);
            },
            3618: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3415),
                    i = t(4419),
                    s = t(6179),
                    o = t.n(s),
                    l = t(6143),
                    c = t(3310),
                    d = t(131),
                    m = t(9053);
                const E = o().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: _ = !1,
                        customTooltipArgs: g,
                        targetId: A,
                        justifyContent: F = m.v2.FlexStart,
                        alignContent: f = m.v2.FlexStart,
                        truncateIdentify: p = m.YA,
                    }) => {
                        const D = (0, s.useRef)(null),
                            h = (0, s.useRef)({ height: 0, width: 0 }),
                            C = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            B = C[0],
                            b = C[1],
                            v = (0, s.useMemo)(() => (0, c.s)(e, n, { justifyContent: F }), [n, F, e]),
                            w = (0, s.useMemo)(() => {
                                if (E && B.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, g, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: A,
                                    };
                            }, [n, E, A, e, g, B.isTruncated]),
                            y = (0, s.useCallback)(
                                (e) => {
                                    (h.current.width = e.contentRect.width), (h.current.height = e.contentRect.height);
                                    const u = (0, d.T)(D, v, h.current, p),
                                        n = u[0],
                                        r = u[1];
                                    b({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                },
                                [t, p, v],
                            ),
                            k = (0, s.useMemo)(() => ({ justifyContent: F, alignContent: f }), [f, F]);
                        return (
                            (0, i.y)(D, y, _),
                            o().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        u,
                                        l.Z.base__zeroPadding,
                                        _ && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: k,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: D }, v),
                                o().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${F}`],
                                            l.Z[`tooltip__align-${f}`],
                                        ),
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !B.isTruncateFinished && _ && l.Z.truncated__hide,
                                            ),
                                            style: k,
                                        },
                                        B.isTruncateFinished && _ ? B.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, u, t) => {
                'use strict';
                t.d(u, { s: () => E });
                var n = t(3649),
                    r = t(6799),
                    a = t(6960),
                    i = t(9053);
                const s = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    o = (e) => {
                        const u = [];
                        return (
                            (0, a.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? u.push(...((t = e), t.match(s) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    l = i.u6
                        ? (e) => {
                              const u = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...o(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const s = u.justifyContent === i.v2.FlexEnd ? n.index : t.lastIndex;
                                  r.push(e.slice(a, s)), (a = s), (n = t.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    c = (e, u = '', t) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: i.kH.Word, colorTag: u, childList: l(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = i.aF[t.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    d = (e, u, t = '', n) => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...c(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        s = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...c(String(s), t, n))
                                        : r.push({ blockType: i.kH.Binding, colorTag: t, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    m = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    E = (e, u = {}, t) => {
                        if (!e) return [];
                        const s = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), u.push(...m(u.pop(), e)))
                                        : (t ? u.push(...m(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...d(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...d(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), u, t),
                        );
                        return (0, r.w)(s);
                    };
            },
            6799: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => i });
                var n = t(597),
                    r = t(9053);
                const a = (e, u, t) => {
                        const i = [];
                        return (
                            e.childList.forEach((s, o) => {
                                const l = `${t}_${o}`;
                                if ((0, r.dz)(s)) {
                                    const e = s,
                                        u = e.blockType,
                                        t = n.IY[u],
                                        r = a(e, t, l);
                                    i.push(...r);
                                } else i.push(u({ elementList: [s], textBlock: e, key: l }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            i = e.blockType,
                                            s = n.IY[i],
                                            o = a(e, s, u);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? t.push(s({ elementList: o, textBlock: e, key: `${u}` }))
                                                : t.push(...o),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    };
            },
            6960: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = (e, u, t, n) => {
                    let r = u.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                    a !== e.length && t(e.slice(a));
                };
            },
            131: (e, u, t) => {
                'use strict';
                t.d(u, { T: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053);
                const i = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    s = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    o = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = s(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const o = Math.max(t + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, u, t, n, i, s) => {
                        let c = -1,
                            d = null;
                        for (let m = t; m >= 0; m--) {
                            const t = e[m],
                                E = Number(e[m].getAttribute(a.bF));
                            if (E === a.kH.LineBreak || E === a.kH.NewLine || E === a.kH.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = o(t, n, i),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const E = _.slice(0, _.length - l) + s,
                                    g = u[m];
                                (d = r().cloneElement(g, g.props, E)), (c = m);
                                break;
                            }
                            {
                                const e = t.children,
                                    a = u[m],
                                    o = a.props.children,
                                    E = l(e, o, e.length - 1, n, i, s),
                                    g = E[0],
                                    A = E[1];
                                if (!(g < 0)) {
                                    const e = o.slice(0, g);
                                    (d = r().cloneElement(a, a.props, e, A)), (c = m);
                                    break;
                                }
                                i -= _.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, u, t, n = a.YA) => {
                        const r = [...u],
                            o = e.current;
                        if (!o) return [r, !1];
                        const c = t.height,
                            d = t.width,
                            m = o.lastElementChild;
                        if (!i(m, c) && s(m, d) <= 0) return [r, !1];
                        const E = o.children,
                            _ = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    i(e[r], u) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(E, c);
                        if (_ < 0) return [r, !1];
                        const g = l(E, r, _, d, n.length, n),
                            A = g[0],
                            F = g[1];
                        return F && (r.splice(A, 1, F), r.splice(A + 1)), [r, !0];
                    };
            },
            9053: (e, u, t) => {
                'use strict';
                let n, r, a;
                t.d(u, {
                    Co: () => c,
                    YA: () => s,
                    aF: () => l,
                    bF: () => o,
                    dz: () => i,
                    kH: () => n,
                    u6: () => d,
                    v2: () => r,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(n || (n = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(r || (r = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(a || (a = {}));
                const i = (e) => void 0 !== e.childList,
                    s = '...',
                    o = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, u, t) => {
                'use strict';
                t.d(u, { IY: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    s = t(9053),
                    o = t(9627),
                    l = t(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? o.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(l.Z.word, o.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: t, 'data-block-type': u.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    m = {
                        [s.kH.Word]: d,
                        [s.kH.NoBreakSymbol]: d,
                        [s.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: t }, e)),
                            ),
                        [s.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': s.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [s.kH.NewLine]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': s.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [s.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': s.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            7493: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { Z0: () => r, in: () => n, sx: () => a }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const r = 'tooltip_watched',
                    a = 2;
                let i;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            4828: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => n, eX: () => r, sC: () => a, sk: () => s });
                const n = 'crew';
                let r, a, i, s, o, l, c, d;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(r || (r = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(a || (a = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(i || (i = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(s || (s = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(o || (o = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(l || (l = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(c || (c = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(d || (d = {}));
                R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    a.PersonalFile,
                    R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    a.PersonalData,
                    R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    a.ServiceRecord,
                    R.views.lobby.crew.BarracksView('resId'),
                    a.Barracks,
                    R.views.lobby.crew.HangarCrewWidget('resId'),
                    a.Hangar,
                    R.views.lobby.crew.MemberChangeView('resId'),
                    a.MemberChange,
                    R.views.lobby.crew.TankChangeView('resId'),
                    a.TankChange,
                    R.views.lobby.crew.QuickTrainingView('resId'),
                    a.QuickTraining;
            },
            1943: (e, u, t) => {
                'use strict';
                t.d(u, { Sr: () => d });
                var n = t(6179),
                    r = t(7493);
                const a = ['action', 'timeLimit'];
                const i = 'metrics',
                    s = () => Date.now(),
                    o = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: r }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    l = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = r.in.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    c = (e, u) => {
                        const t = l(e, u),
                            r = (0, n.useRef)(new Map()),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = r.current.get(e);
                                    (void 0 !== u && u > 0) || r.current.set(e, s());
                                },
                                [r],
                            ),
                            o = (0, n.useCallback)(() => {
                                r.current.clear(), a.current.clear();
                            }, [r, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === a.current.get(e) &&
                                        a.current.set(e, s());
                                },
                                [r, a],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    a.current.delete(e);
                                    const n = s() - t;
                                    r.current.set(e, u + n);
                                },
                                [r, a],
                            ),
                            m = (0, n.useCallback)(
                                (e, u = 0, n, i) => {
                                    const o = r.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== a.current.get(e) && d(e), r.current.delete(e);
                                    const l = (s() - o) / 1e3;
                                    l <= u ||
                                        ((i = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(i, l)),
                                        t(e, n, i));
                                },
                                [r, a, t, d],
                            );
                        return [(e) => i(e), (e, u, t, n) => m(e, u, t, n), () => o(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e, u) => {
                        const t = ((e) => {
                                const u = c(e, i),
                                    t = u[0],
                                    r = u[1],
                                    a = u[2],
                                    s = u[3],
                                    l = u[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const u = e.action,
                                                t = e.timeLimit,
                                                n = e.logLevel;
                                            r(u, t, n, o(e));
                                        },
                                        [r],
                                    );
                                return [(e) => t(e), (e) => d(e), () => a(), (e) => s(e), (e) => l(e)];
                            })(e),
                            s = t[0],
                            l = t[1],
                            d = u.action,
                            m = u.timeLimit,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(u, a);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => s(d || r.Z0),
                                onHide: () => l(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, E)),
                            }),
                            [d, m, E, s, l],
                        );
                    };
            },
            8032: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => n });
                const n = (e, u) => e.split(',').includes(u);
            },
            5640: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => o, U: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    s = t(8236);
                let o;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(o || (o = {}));
                const l = {
                        [o.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [o.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [o.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    c = i().memo(({ nation: e, size: u, className: t }) =>
                        i().createElement('div', {
                            className: r()(s.Z.base, s.Z[`base__${u}`], t),
                            style: { backgroundImage: `url('${l[u].$dyn(e)}')` },
                        }),
                    );
            },
            1530: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => c, S: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    i = t(6179),
                    s = t.n(i),
                    o = t(8386);
                let l;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(l || (l = {}));
                const c = s().memo(function ({ role: e, size: u = l.c30x30, className: t }) {
                    const n = (0, i.useMemo)(() => {
                        try {
                            var t;
                            const n =
                                null == (t = R.images.gui.maps.icons.tankmen.roles.$dyn(u))
                                    ? void 0
                                    : t.$dyn((0, a.BN)(e));
                            if (!n) throw Error;
                            return { backgroundImage: `url(${n})` };
                        } catch (u) {
                            console.error('Cant find resource in RoleIcon: ', e);
                        }
                    }, [e, u]);
                    return s().createElement('div', { style: n, className: r()(o.Z.base, o.Z[`base__${u}`], t) });
                });
            },
            9216: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(794),
                    i = t(7701),
                    s = t(6179),
                    o = t.n(s),
                    l = t(7734);
                let c;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(c || (c = {}));
                const d = ({ children: e, className: u, classNames: t }) => {
                    const n = (0, s.useState)(c.None),
                        d = n[0],
                        m = n[1],
                        E = d === c.Both,
                        _ = (0, i.c4)();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = _.getBounds()[1],
                                    u = _.animationScroll.scrollPosition.get();
                                0 === e
                                    ? m(c.None)
                                    : u > 1 && u < e - 21
                                      ? m(c.Both)
                                      : u <= 1
                                        ? m(c.Bottom)
                                        : u >= e - 21 && m(c.Top);
                            };
                            return (
                                _.events.on('change', e),
                                _.events.on('resizeHandled', e),
                                _.events.on('recalculateContent', e),
                                () => {
                                    _.events.off('change', e),
                                        _.events.off('resizeHandled', e),
                                        _.events.off('recalculateContent', e);
                                }
                            );
                        }, [_]),
                        o().createElement(
                            'div',
                            { className: r()(l.Z.base, u) },
                            o().createElement(
                                a.X.Vertical.Default,
                                {
                                    api: _,
                                    barClassNames: { base: r()(l.Z.bar, null == t ? void 0 : t.bar) },
                                    scrollClassNames: { content: r()(l.Z.content, null == t ? void 0 : t.content) },
                                },
                                e,
                            ),
                            (d === c.Top || E) &&
                                o().createElement(
                                    'div',
                                    { className: r()(l.Z.fadeContainerTop, null == t ? void 0 : t.lips) },
                                    o().createElement('div', { className: l.Z.fade }),
                                ),
                            (d === c.Bottom || E) &&
                                o().createElement(
                                    'div',
                                    { className: r()(l.Z.fadeContainerBottom, null == t ? void 0 : t.lips) },
                                    o().createElement('div', { className: l.Z.fade }),
                                ),
                        )
                    );
                };
            },
            2768: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => o, y: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    s = t(4458);
                let o;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(o || (o = {}));
                const l = i().memo(function ({ iconName: e, size: u = o.c24x24, className: t }) {
                    var n;
                    const a = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e);
                    return i().createElement('div', {
                        style: null !== a ? { backgroundImage: `url(${a})` } : void 0,
                        className: r()(s.Z.base, s.Z[`base__${u}`], t),
                    });
                });
            },
            7077: (e, u, t) => {
                'use strict';
                t.d(u, { G: () => c, U: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    i = t(6179),
                    s = t.n(i),
                    o = t(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = (0, i.memo)(function ({ name: e, size: u = l.c100x60, classMix: t, isSkin: n = !1 }) {
                    let i = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                    n && (i = i.$dyn('crewSkins'));
                    const c = i.$dyn((0, a.BN)(e));
                    return (
                        c ||
                            console.error(
                                `Can't find ${(0, a.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${u}${n ? '.crewSkins' : ''}`,
                            ),
                        s().createElement('div', {
                            style: { backgroundImage: `url(${c})` },
                            className: r()(o.Z.base, o.Z[`base__${u}`], t),
                        })
                    );
                });
            },
            7160: (e, u, t) => {
                'use strict';
                t.d(u, { to: () => n });
                const n = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2);
            },
            8018: (e, u, t) => {
                'use strict';
                t.d(u, { Gc: () => a, gO: () => r });
                t(771), t(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let n;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(n || (n = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let r;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(r || (r = {}));
                const a = (e, u = !1, t = null) => {
                    const n = u ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (t ? n.$dyn(`${t}Case`) : n).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
            },
            4591: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n),
                    a = t(5415),
                    i = t(3403),
                    s = t(6035),
                    o = t(771),
                    l = t(3215),
                    c = t(4598),
                    d = t(9480),
                    m = t(1612),
                    E = t(9174),
                    _ = t(3946);
                const g = (0, l.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'tankmanId',
                                        'skillsEfficiency',
                                        'isTankmanInVehicle',
                                        'hasPostProgression',
                                        'isPostProgressionAnimated',
                                    ]),
                                    {
                                        isTTCVisible: E.LO.box(!1),
                                        skillsMatrix: Object.assign(
                                            {},
                                            e.primitives(
                                                [
                                                    'componentKey',
                                                    'isResetDisable',
                                                    'hasResetDiscount',
                                                    'hasIncreaseDiscount',
                                                    'resetGracePeriodLeft',
                                                ],
                                                'skills',
                                            ),
                                            {
                                                main: Object.assign(
                                                    {},
                                                    e.primitives(
                                                        ['role', 'directiveId', 'directiveName', 'selectedSkillsCount'],
                                                        'skills.mainSkills',
                                                    ),
                                                    { skills: e.array('skills.mainSkills.skills') },
                                                ),
                                                bonus: e.array('skills.bonusSkills'),
                                            },
                                        ),
                                        postProgression: Object.assign(
                                            {},
                                            e.primitives(
                                                [
                                                    'componentKey',
                                                    'icon',
                                                    'progressCurrent',
                                                    'progressMax',
                                                    'hasWarning',
                                                ],
                                                'postProgression',
                                            ),
                                        ),
                                    },
                                ),
                                t = (e) => d.UI(e, (e) => Object.assign({}, e)),
                                n = (0, _.Om)(
                                    () => ({
                                        role: u.skillsMatrix.main.role.get(),
                                        selectedSkillsCount: u.skillsMatrix.main.selectedSkillsCount.get(),
                                        directiveId: u.skillsMatrix.main.directiveId.get(),
                                        directiveName: u.skillsMatrix.main.directiveName.get(),
                                        skills: t(u.skillsMatrix.main.skills.get()),
                                    }),
                                    { equals: c.jv },
                                ),
                                r = (0, _.Om)(
                                    () =>
                                        d.UI(u.skillsMatrix.bonus.get(), (e) =>
                                            Object.assign({}, e, {
                                                directiveId: e.directiveId,
                                                directiveName: e.directiveName,
                                                skills: t(e.skills),
                                            }),
                                        ),
                                    { equals: c.jv },
                                ),
                                a = (0, _.Om)(() => u.isTankmanInVehicle.get() && u.isTTCVisible.get()),
                                i = (0, _.Om)(() => u.skillsEfficiency.get() === o.sU, !0),
                                s = (0, _.Om)(() => u.skillsEfficiency.get() < o.yb);
                            return Object.assign({}, u, {
                                computes: {
                                    isUntrained: i,
                                    isTTCVisible: a,
                                    mainSkills: n,
                                    bonusSkills: r,
                                    isLowPerksEfficiency: s,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) =>
                            Object.assign(
                                {
                                    reset: e.createCallbackNoArgs('skills.onReset'),
                                    increase: e.createCallbackNoArgs('skills.onIncrease'),
                                    setAnimationInProgress: e.createCallback(
                                        (e) => ({ isEnabled: e }),
                                        'skills.onSetAnimationInProgress',
                                    ),
                                    clickSkill: e.createCallback((e) => ({ role: e }), 'skills.onSkillClick'),
                                    openPostProgression: e.createCallbackNoArgs('postProgression.onWidgetClick'),
                                },
                                (0, m.h)({ setTTCVisible: (e) => u.isTTCVisible.set(e) }),
                            ),
                    ),
                    A = g[0],
                    F = g[1];
                var f = t(6483),
                    p = t.n(f);
                const D = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let h, C;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(h || (h = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(C || (C = {}));
                const B = ({ size: e = h.Default }) => {
                        const u = p()(D.background, D[`background__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    b = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    v = ({ size: e }) => {
                        const u = p()(b.base, b[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    w = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    y = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: i }) => {
                            const s = p()(
                                    w.base,
                                    w[`base__${e}`],
                                    t && w.base__disabled,
                                    a && w.base__finished,
                                    i && w.base__withoutBounce,
                                ),
                                o = !t && !a;
                            return r().createElement(
                                'div',
                                { className: s, style: n, ref: u },
                                r().createElement('div', { className: w.pattern }),
                                r().createElement('div', { className: w.gradient }),
                                o && r().createElement(v, { size: e }),
                            );
                        },
                    ),
                    k = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: i }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            r().createElement(y, { size: e, disabled: a, baseStyles: s, isComplete: o, lineRef: t })
                        );
                    };
                var S = t(122);
                let x, T;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(x || (x = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(T || (T = {}));
                const N = 'ProgressBarDeltaSimple_base_6c',
                    I = 'ProgressBarDeltaSimple_delta_99',
                    L = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < a,
                                d = (0, n.useState)(T.Idle),
                                m = d[0],
                                E = d[1],
                                _ = m === T.In,
                                g = m === T.End,
                                A = m === T.Idle,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (A && !t) {
                                    const e = u;
                                    return (0, S.F)(() => {
                                        F(T.In);
                                    }, e);
                                }
                            }, [F, t, A, u]),
                                (0, n.useEffect)(() => {
                                    if (_) {
                                        const t = e + u;
                                        return (0, S.F)(() => {
                                            o && o(), F(T.End);
                                        }, t);
                                    }
                                }, [F, _, o, u, e]);
                            const f = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${c ? s : a}%` }),
                                    [a, c, s],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: N, style: D },
                                      r().createElement(
                                          'div',
                                          { style: A ? f : p, className: I },
                                          r().createElement(v, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    P = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(y, {
                                    size: u,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    r().createElement(L, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    O = 'ProgressBarDeltaGrow_base_7e',
                    M = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    W = 'ProgressBarDeltaGrow_glow_68',
                    H = (e) => (e ? { left: 0 } : { right: 0 }),
                    z = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    V = (e) => ({ transitionDuration: `${e}ms` }),
                    $ = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = s < a,
                                m = (0, n.useState)(x.Idle),
                                E = m[0],
                                _ = m[1],
                                g = E === x.End,
                                A = E === x.Idle,
                                F = E === x.Grow,
                                f = E === x.Shrink,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                ),
                                h = (0, n.useCallback)(
                                    (e, u) =>
                                        (0, S.F)(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? h(x.Grow, u)
                                        : F
                                          ? h(x.Shrink, e)
                                          : f
                                            ? h(x.End, e)
                                            : void (g && o && o());
                            }, [h, t, g, F, A, f, o, u, e]);
                            const C = (0, n.useMemo)(() => Object.assign({ width: '100%' }, V(e), H(d)), [d, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, V(e), H(d)), [d, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, z(d, a), V(e)), [a, d, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, z(d, a), V(e)),
                                    [a, d, s, e],
                                );
                            if (g) return null;
                            const y = p()(O, c, d && 0 === s && M);
                            return r().createElement(
                                'div',
                                { style: A ? b : w, className: y },
                                r().createElement(
                                    'div',
                                    { style: f ? B : C, className: W },
                                    r().createElement(v, { size: i }),
                                ),
                            );
                        },
                    ),
                    G = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, n.useState)(!1),
                                E = m[0],
                                _ = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        e === x.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                A = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(y, {
                                    size: u,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: E ? F : A,
                                }),
                                t >= 0 &&
                                    r().createElement($, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    U = ['onComplete', 'onEndAnimation'];
                function j() {
                    return (
                        (j = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        j.apply(null, arguments)
                    );
                }
                const Z = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, U);
                        const i = (0, n.useState)(!1),
                            s = i[0],
                            o = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== s && o(e), e && u && u(), t && t();
                            }, [s, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case C.Simple:
                                return r().createElement(P, j({}, a, { onEndAnimation: l, isComplete: s }));
                            case C.Growing:
                                return r().createElement(G, j({}, a, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    K = ['onEndAnimation'];
                function q() {
                    return (
                        (q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        q.apply(null, arguments)
                    );
                }
                const Y = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, K);
                    const a = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (a.current.from = void 0), u && u();
                        }, [u]),
                        s = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = s),
                        r().createElement(Z, q({}, t, { onEndAnimation: i, key: `${s}-${t.to}`, from: s }))
                    );
                });
                function X() {
                    return (
                        (X = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        X.apply(null, arguments)
                    );
                }
                const J = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return r().createElement(k, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return i.withStack
                                ? r().createElement(Y, c)
                                : r().createElement(Z, X({ key: `${a}-${u}` }, c));
                        },
                    ),
                    Q = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    });
                var ee = t(7515);
                const ue = (e, u, t) => {
                        if ('number' == typeof t) {
                            return ((0, ee.u)(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    te = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    ne = {
                        freezed: !1,
                        withStack: !1,
                        type: C.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    re = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = te,
                            size: t = h.Default,
                            animationSettings: a = ne,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: E,
                        }) => {
                            const _ = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = ((0, ee.u)(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: ue(n, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return r().createElement(
                                'div',
                                { className: p()(D.base, D[`base__${t}`]), style: Q(u) },
                                !s && r().createElement(B, { size: t }),
                                r().createElement(J, {
                                    size: t,
                                    lineRef: c,
                                    disabled: i,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
                var ae = t(2056),
                    ie = t(3138),
                    se = t(9916),
                    oe = t(7030),
                    le = t(3649);
                const ce = 'FormatText_base_d0',
                    de = ({
                        binding: e,
                        text: u = '',
                        classMix: t,
                        alignment: a = le.v2.left,
                        formatWithBrackets: i,
                    }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && e ? (0, le.WU)(u, e) : u;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                r().createElement(
                                    'div',
                                    { className: p()(ce, t), key: `${u}-${i}` },
                                    (0, le.Uw)(u, a, e).map((e, u) =>
                                        r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    me = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Ee = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    _e = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    ge = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Ae = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => u || {}, [u]);
                        let s = Ee.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = _e.exec(t),
                                c = ge.exec(t),
                                d = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + l++ + e;
                                (o = o.replace(t, `%(${s})`)),
                                    (i[s] = me[e]
                                        ? r().createElement(
                                              'span',
                                              { className: me[e] },
                                              r().createElement(de, { text: d, binding: u }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: a(e) },
                                              r().createElement(de, { text: d, binding: u }),
                                          ));
                            }
                            s = Ee.exec(e);
                        }
                        return r().createElement(de, { text: o, classMix: t, binding: i });
                    });
                var Fe = t(7160),
                    fe = t(8018);
                const pe = 'PostProgressionWidget_base_6f',
                    De = 'PostProgressionWidget_animationGlow_13',
                    he = 'PostProgressionWidget_animationReflectionWrapper_cd',
                    Ce = 'PostProgressionWidget_animationReflection_05',
                    Be = 'PostProgressionWidget_progress_64',
                    be = 'PostProgressionWidget_label_80',
                    ve = 'PostProgressionWidget_xpIcon_ab',
                    we = 'PostProgressionWidget_progressBar_f6',
                    ye = 'PostProgressionWidget_icon_34',
                    ke = 'PostProgressionWidget_warning_6d',
                    Se = 'PostProgressionWidget_warningGlow_d3',
                    xe = 'PostProgressionWidget_warningIcon_b5',
                    Te = 1800,
                    Re = (0, i.Pi)(function () {
                        const e = F(),
                            u = e.model,
                            t = u.postProgression,
                            a = u.isPostProgressionAnimated,
                            i = e.controls,
                            s = a.get(),
                            o = t.progressCurrent.get(),
                            l = t.progressMax.get(),
                            c = (0, n.useState)(o),
                            d = c[0],
                            m = c[1],
                            E = (0, n.useCallback)(() => m(o), [o]),
                            _ = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 0, x: ie.O.view.remToPx(60) },
                                    to: [
                                        {
                                            opacity: 0.9,
                                            x: ie.O.view.remToPx(-10),
                                            delay: Te,
                                            config: { duration: 500 },
                                        },
                                        { opacity: 1, x: 0, config: { duration: 250 } },
                                    ],
                                    config: { easing: Fe.to },
                                }),
                                [],
                            )[0],
                            g = (0, oe.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 0.8, delay: Te, config: { duration: 500 } },
                                    { opacity: 0, config: { duration: 2e3 } },
                                ],
                                config: { easing: Fe.to },
                            }),
                            A = (0, oe.useSpring)({
                                from: { x: 0 },
                                to: [{ x: ie.O.view.remToPx(600) }],
                                delay: 2700,
                                config: { easing: Fe.to, duration: 1700 },
                            });
                        return (
                            (0, n.useEffect)(() => {
                                if (s) return (0, S.F)(() => ie.O.sound.play.sound(fe.gO.CREW_POSTPROG_WIDGET), Te);
                            }, [s]),
                            r().createElement(
                                ae.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.PostProgressionTooltip('resId'),
                                    args: { componentKey: t.componentKey.get() },
                                },
                                r().createElement(
                                    oe.animated.div,
                                    {
                                        style: s ? _ : void 0,
                                        className: pe,
                                        onMouseEnter: () => {
                                            ie.O.sound.play.highlight();
                                        },
                                        onClick: () => {
                                            ie.O.sound.play.click(), i.openPostProgression();
                                        },
                                    },
                                    s &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(oe.animated.div, { style: g, className: De }),
                                            r().createElement(
                                                'div',
                                                { className: he },
                                                r().createElement(oe.animated.div, { style: A, className: Ce }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: Be },
                                        r().createElement(Ae, {
                                            text: R.strings.crew.postProgression.progress(),
                                            binding: {
                                                currentValue: se.Z5.getNumberFormat(o, se.B3.INTEGRAL),
                                                maxValue: se.Z5.getNumberFormat(l, se.B3.INTEGRAL),
                                                icon: r().createElement('div', { className: ve }),
                                            },
                                            classMix: be,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: we },
                                            r().createElement(re, {
                                                value: o,
                                                deltaFrom: d,
                                                maxValue: l,
                                                onEndAnimation: E,
                                                size: h.Small,
                                            }),
                                        ),
                                    ),
                                    r().createElement('div', {
                                        className: ye,
                                        style: { backgroundImage: `url(${t.icon.get()})` },
                                    }),
                                    t.hasWarning.get() &&
                                        r().createElement(
                                            'div',
                                            { className: ke },
                                            r().createElement('div', { className: Se }),
                                            r().createElement('div', { className: xe }),
                                        ),
                                ),
                            )
                        );
                    });
                let Ne;
                !(function (e) {
                    (e.None = 'none'), (e.Unlocked = 'unlocked'), (e.Selected = 'selected');
                })(Ne || (Ne = {}));
                var Ie = t(9216),
                    Le = t(2106),
                    Pe = t(7044),
                    Oe = t(2344),
                    Me = t(3112);
                const We = 'Countdown_base_fe',
                    He = 'Countdown_icon_8b',
                    ze = 'Countdown_description_8d';
                let Ve, $e;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Ve || (Ve = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })($e || ($e = {}));
                const Ge = (e) => e.toString().padStart(2, '0'),
                    Ue = R.images.gui.maps.icons.components.countdown,
                    je = (e, u) => {
                        const t = 2 === u ? Ue.big : Ue;
                        switch (e) {
                            case Ve.Timer:
                                return t.clock();
                            case Ve.Countdown:
                                return t.hourglass();
                            case Ve.Cooldown:
                                return t.lock();
                        }
                    },
                    Ze = (0, n.memo)(
                        ({
                            duration: e,
                            icon: u = Ve.Timer,
                            style: t = $e.Description,
                            onTimeReached: n,
                            className: a = '',
                            classNames: i = {},
                        }) => {
                            const s = t !== $e.Description ? 1 : void 0,
                                o = (0, Oe.au)(e, s),
                                l = (0, Me.V)();
                            n && n[o] && n[o]();
                            const c = ((e, u) => {
                                switch (u) {
                                    case $e.Description:
                                        return (0, Pe.wB)(e);
                                    case $e.Short:
                                        return `${Ge(e.minutes)}:${Ge(e.seconds)}`;
                                    case $e.Long:
                                        return `${Ge(e.hours)}:${Ge(e.minutes)}:${Ge(e.seconds)}`;
                                    case $e.Extended:
                                        return `${(0, le.WU)(R.strings.common.duration.days(), { days: e.days })} | ${Ge(e.hours)}:${Ge(e.minutes)}:${Ge(e.seconds)}`;
                                }
                            })((0, Pe.f8)(o), t);
                            return r().createElement(
                                'div',
                                { className: p()(We, a) },
                                u !== Ve.None &&
                                    r().createElement('div', {
                                        className: p()(He, i.icon),
                                        style: { backgroundImage: `url('${je(u, l)}')` },
                                    }),
                                r().createElement('div', { className: p()(ze, i.text) }, c),
                            );
                        },
                    );
                var Ke = t(6373),
                    qe = t(3457);
                const Ye = 'ButtonWithDiscountIndicator_base_6c',
                    Xe = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    Je = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    Qe = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const eu = r().memo(function (e) {
                        let u = e.hasDiscount,
                            t = e.className,
                            n = e.children,
                            a = e.wrapperId,
                            i = e.isSmall,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Qe);
                        return r().createElement(
                            'div',
                            { id: a, className: p()(Ye, t) },
                            r().createElement(qe.u5, s, n),
                            u && r().createElement('div', { className: p()(Xe, i && Je) }),
                        );
                    }),
                    uu = 'ButtonsSection_base_9a',
                    tu = 'ButtonsSection_base__withBonusRoles_e6',
                    nu = 'ButtonsSection_increaseBtnContainer_6b',
                    ru = 'ButtonsSection_resetBtnContainer_6f',
                    au = 'ButtonsSection_increaseButton_6b',
                    iu = 'ButtonsSection_resetButton_f2',
                    su = 'ButtonsSection_increaseButton__accented_a2',
                    ou = 'ButtonsSection_resetButton__accented_57',
                    lu = 'ButtonsSection_resetButton__disabled_da',
                    cu = 'ButtonsSection_countdown_df',
                    du = 'ButtonsSection_countdownIcon_ff',
                    mu = 'ButtonsSection_countdownText_a0',
                    Eu = (e) => Math.floor(Date.now() / Pe.s_ + e),
                    _u = (0, n.memo)(
                        ({
                            mediaSize: e,
                            bonusSkillsCount: u,
                            resetGracePeriodLeft: t,
                            isResetDisable: i,
                            hasResetDiscount: s,
                            hasIncreaseDiscount: o,
                            hasPostProgression: l,
                            allSkillsLearned: c,
                            onIncreaseClick: d,
                            onResetClick: m,
                        }) => {
                            const E = e <= a.cJ.Small,
                                _ = (e < a.cJ.Large && u >= 2) || (e >= a.cJ.Large && u >= 3),
                                g = (e <= a.cJ.Small && u >= 1) || (e === a.cJ.Medium && u >= 2),
                                A = i
                                    ? R.strings.crew.matrix.resetTooltip.disable
                                    : R.strings.crew.matrix.resetTooltip.enable,
                                F = l
                                    ? R.strings.crew.matrix.increaseTooltip.disable
                                    : R.strings.crew.matrix.increaseTooltip.enable,
                                f = (0, n.useRef)(Eu(t)),
                                D = (0, n.useState)(t),
                                h = D[0],
                                C = D[1];
                            return (
                                (0, n.useEffect)(() => {
                                    f.current = Eu(t);
                                }, [t]),
                                (0, n.useEffect)(() => {
                                    C(f.current - Math.floor(Date.now() / Pe.s_));
                                }, [t, f]),
                                r().createElement(
                                    'div',
                                    { className: p()(uu, _ && tu) },
                                    r().createElement(
                                        Ke.i,
                                        { header: F.header(), body: F.body() },
                                        r().createElement(
                                            'div',
                                            { className: nu },
                                            r().createElement(
                                                eu,
                                                {
                                                    type: Le.L.ghost,
                                                    isSmall: E,
                                                    disabled: l,
                                                    hasDiscount: o,
                                                    mixClass: p()(au, !(c || s) && su),
                                                    onClick: d,
                                                },
                                                R.strings.crew.matrix.increaseButton(),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: ru },
                                        r().createElement(
                                            Ke.i,
                                            { header: A.header(), body: A.body(), ignoreMouseClick: i },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    eu,
                                                    {
                                                        type: Le.L.ghost,
                                                        isSmall: E,
                                                        disabled: i,
                                                        hasDiscount: s,
                                                        wrapperId: i ? void 0 : 'matrix_drop_skills_btn',
                                                        mixClass: p()(iu, s && ou, i && lu),
                                                        onClick: m,
                                                    },
                                                    s
                                                        ? R.strings.crew.matrix.freeResetButton()
                                                        : R.strings.crew.matrix.resetButton(),
                                                ),
                                            ),
                                        ),
                                        !(g || i) &&
                                            h > 0 &&
                                            r().createElement(Ze, {
                                                className: cu,
                                                classNames: { icon: du, text: mu },
                                                duration: h,
                                            }),
                                    ),
                                )
                            );
                        },
                    );
                var gu = t(7078),
                    Au = t(2603);
                let Fu;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'),
                        (e[(e.Started = 1)] = 'Started'),
                        (e[(e.DisplayActualState = 2)] = 'DisplayActualState'),
                        (e[(e.Finished = 3)] = 'Finished');
                })(Fu || (Fu = {}));
                const fu = 1300,
                    pu = {
                        [Ne.Unlocked]: {
                            [Fu.Started]: [0, 0],
                            [Fu.DisplayActualState]: [700, 700],
                            [Fu.Finished]: [600, 1900],
                        },
                        [Ne.Selected]: {
                            [Fu.Started]: [0, 0],
                            [Fu.DisplayActualState]: [1e3, 1e3],
                            [Fu.Finished]: [700, 700],
                        },
                    },
                    Du = {
                        [Ne.Unlocked]: { isLocked: !0, iconName: '' },
                        [Ne.Selected]: { isLocked: !1, iconName: '' },
                    },
                    hu = (e, u, t) => {
                        var n;
                        const r = null == (n = pu[e]) ? void 0 : n[u];
                        return t ? (null == r ? void 0 : r[1]) : null == r ? void 0 : r[0];
                    },
                    Cu = (e, u) => (e === Ne.Unlocked ? (u ? 2600 : fu) : u ? 400 : 200),
                    Bu = (e, u, t, n, r) => {
                        let a = 0;
                        const i = e.length - 1;
                        return e.map((e, s) => {
                            let o;
                            return (
                                e.animationType !== Ne.None &&
                                    ((o = ((e, u, t, n, r) => {
                                        let a = 300;
                                        const i = Cu(e, t);
                                        return (
                                            e === Ne.Selected ? (a += 100 * n) : t && r && r % 2 == 1 && (a += fu),
                                            u * i + a
                                        );
                                    })(e.animationType, a, u, t, n)),
                                    a++),
                                r(e, s, o, i !== s)
                            );
                        });
                    },
                    bu = (e, u, t, n, r, a, i) => {
                        return n
                            ? {
                                  targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                  args: { componentKey: e, tooltipId: Au.HZ, skillName: u, isBonus: r, level: i },
                              }
                            : r
                              ? a
                                  ? {
                                        header: R.strings.crew.matrix.skillTooltip.bonus.unavailable.header(),
                                        body:
                                            null ==
                                            (s = R.strings.crew.matrix.skillTooltip.bonus.unavailable.text.$dyn(
                                                `c_${t + 1}`,
                                            ))
                                                ? void 0
                                                : s.toString(),
                                    }
                                  : {
                                        header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                        body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                    }
                              : {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                    args: { skillIndex: t, componentKey: e },
                                };
                        var s;
                    };
                var vu = t(3618),
                    wu = t(9053),
                    yu = t(1530);
                const ku = 'QualificationIcon_base_54',
                    Su = 'QualificationIcon_base__main_a0',
                    xu = 'QualificationIcon_icon_10',
                    Tu = 'QualificationIcon_counters_3a',
                    Ru = 'QualificationIcon_current_cd',
                    Nu = (0, n.memo)(
                        ({
                            role: e,
                            componentKey: u,
                            totalPerksCount: t,
                            currentPerksCount: n,
                            qualificationIndex: i,
                            isBonusQualification: s,
                        }) => {
                            const o = (0, a.GS)().mediaSize;
                            return r().createElement(
                                ae.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.QualificationTooltip('resId'),
                                    args: { role: e, componentKey: u, isBonusQualification: s, index: i },
                                },
                                r().createElement(
                                    'div',
                                    { className: p()(ku, !s && Su) },
                                    r().createElement(yu.M, {
                                        role: e,
                                        size: o === a.cJ.ExtraLarge ? yu.S.c40x40 : yu.S.c30x30,
                                        className: xu,
                                    }),
                                    r().createElement(vu.w, {
                                        classMix: Tu,
                                        text: R.strings.crew.matrix.skills.counters(),
                                        justifyContent: wu.v2.Center,
                                        binding: {
                                            currentCount: r().createElement('div', { className: Ru }, n),
                                            totalCount: t,
                                        },
                                    }),
                                ),
                            );
                        },
                    );
                var Iu = t(3415),
                    Lu = t(4150);
                const Pu = 'AvailableSkill_base_70',
                    Ou = () => r().createElement('div', { className: Pu }),
                    Mu = 'Animations_base_45',
                    Wu = 'Animations_childrenWrapper_01',
                    Hu = 'Animations_unlockAnimationWrapper_e5',
                    zu = 'Animations_glow_89',
                    Vu = 'Animations_base__bonus_34',
                    $u = ({ children: e, isAnimationStarted: u, isBonus: t, animationDelay: n }) => {
                        const a = (0, oe.useSpring)(
                                () => ({
                                    from: { y: ie.O.view.remToPx(-10), opacity: 0 },
                                    to: [{ y: 0, opacity: 1, config: { duration: 250 }, delay: 550 + n }],
                                }),
                                [n],
                            )[0],
                            i = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.8, config: { duration: 500 }, delay: 200 + n },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                }),
                                [n],
                            )[0],
                            s = (0, oe.useSpring)(
                                () => ({
                                    from: { scale: 1, opacity: 1 },
                                    to: [{ scale: 2.2, opacity: 0, config: { duration: 900 }, delay: n }],
                                }),
                                [n],
                            )[0];
                        return r().createElement(
                            'div',
                            { className: p()(Mu, t && Vu) },
                            u &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(oe.animated.div, { style: a, className: Wu }, e),
                                    r().createElement(oe.animated.div, { style: i, className: zu }),
                                ),
                            r().createElement(oe.animated.div, { style: s }, r().createElement(Ou, null)),
                        );
                    };
                var Gu = t(2686),
                    Uu = t(126);
                const ju = 'EmptySkill_base_38',
                    Zu = () => r().createElement('div', { className: ju });
                var Ku;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Ku || (Ku = {}));
                const qu = ({ animationDelay: e, isAnimationStarted: u, isBonus: t }) => {
                        const i = (0, n.useState)(null),
                            s = i[0],
                            o = i[1],
                            l = (0, Me.V)(),
                            c = (0, a.GS)().mediaSize >= a.cJ.ExtraLarge,
                            d = (0, n.useMemo)(
                                () =>
                                    ((e) => ({
                                        width: 72,
                                        height: 72,
                                        frameCount: 39,
                                        chunk: { count: 1, columns: 28, rows: 2 },
                                        getChunkPath: (0, Uu.V)(
                                            `R.images.gui.maps.icons.sequence.unlock.${e ? 'big' : 'small'}_`,
                                        ),
                                    }))(c),
                                [c],
                            ),
                            m = (0, n.useMemo)(() => (0, Uu.q)(d), [d]),
                            E = (0, n.useCallback)(() => o(Ku.Stop), []),
                            _ = (0, oe.useSpring)(
                                () => ({
                                    from: { scale: 2, opacity: 0 },
                                    to: [
                                        { scale: 2.2, opacity: 0.3, config: { duration: 150 }, delay: 1e3 + e },
                                        { scale: 1, opacity: 1, config: { duration: 500 } },
                                    ],
                                }),
                                [e],
                            )[0],
                            g = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 150 }, delay: 1e3 + e },
                                        { opacity: 0, config: { duration: 500 } },
                                    ],
                                }),
                                [e],
                            )[0];
                        return (
                            (0, n.useEffect)(() => (0, S.F)(() => o(Ku.Play), e), [e]),
                            r().createElement(
                                'div',
                                { className: p()(Mu, t && Vu) },
                                !s && r().createElement('div', { className: Wu }, r().createElement(Zu, null)),
                                s === Ku.Play &&
                                    r().createElement(
                                        'div',
                                        { className: Hu },
                                        r().createElement(Gu.At, {
                                            width: d.width,
                                            height: d.height,
                                            frameCount: d.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: s,
                                            onAnimationDone: E,
                                            style: { transform: `scale(${l})` },
                                        }),
                                    ),
                                u &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(oe.animated.div, { style: g, className: zu }),
                                        r().createElement(oe.animated.div, { style: _ }, r().createElement(Ou, null)),
                                    ),
                            )
                        );
                    },
                    Yu = ['children', 'animationType'];
                const Xu = (e) => {
                    let u = e.children,
                        t = e.animationType,
                        n = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Yu);
                    return t === Ne.Selected
                        ? r().createElement($u, n, u)
                        : t === Ne.Unlocked
                          ? r().createElement(qu, n)
                          : u;
                };
                var Ju = t(2768);
                const Qu = 'SelectedSkill_base_53',
                    et = 'SelectedSkill_base__main_dc',
                    ut = 'SelectedSkill_name_79',
                    tt = 'SelectedSkill_name__progress_64',
                    nt = ({ icon: e, name: u, isInProgress: t, mediaSize: n, isBonus: i }) =>
                        r().createElement(
                            'div',
                            { className: p()(Qu, !i && et) },
                            r().createElement(Ju.y, {
                                size: n >= a.cJ.ExtraLarge ? Ju.F.c80x80 : Ju.F.c52x52,
                                iconName: e,
                            }),
                            !i && n >= a.cJ.Medium && r().createElement('div', { className: p()(ut, t && tt) }, u),
                        ),
                    rt = 'SkillContent_base_7b',
                    at = 'SkillContent_base__disabled_34',
                    it = (0, n.memo)(
                        ({
                            name: e,
                            icon: u,
                            mediaSize: t,
                            isBonus: n,
                            isLocked: a,
                            isDisabled: i,
                            isInProgress: s,
                        }) => {
                            let o;
                            return (
                                (o = u
                                    ? r().createElement(nt, {
                                          name: e,
                                          mediaSize: t,
                                          isBonus: n,
                                          icon: u,
                                          isInProgress: s,
                                      })
                                    : a
                                      ? r().createElement(Zu, null)
                                      : r().createElement(Ou, null)),
                                r().createElement('div', { className: p()(rt, i && at) }, o)
                            );
                        },
                    ),
                    st = 'Skill_base_8e',
                    ot = 'Skill_base__bonus_8a',
                    lt = 'Skill_bonusBorder_4e',
                    ct = 'Skill_base__withAnimation_38',
                    dt = 'Skill_base__progress_1f',
                    mt = 'Skill_base__selected_d2',
                    Et = 'Skill_base__disabled_9d',
                    _t = 'Skill_base__enabled_fd',
                    gt = 'Skill_base__full_33',
                    At = 'Skill_base__inefficient_2d',
                    Ft = 'Skill_bonusBorder__progress_12',
                    ft = 'Skill_bonusBorder__inefficient_27',
                    pt = 'Skill_progressLayer_5b',
                    Dt = 'Skill_progressLayer__inefficient_dd',
                    ht = 'Skill_progressLayer__disabled_0a',
                    Ct = 'Skill_progressLayer__full_5a',
                    Bt = 'Skill_disabledLayer_76',
                    bt = 'Skill_topContent_d1',
                    vt = 'Skill_levelLabel_07',
                    wt = 'Skill_levelLabel__full_58',
                    yt = 'Skill_levelLabel__inefficient_58',
                    kt = 'Skill_zeroIcon_2a',
                    St = 'Skill_zeroIcon__disabled_68',
                    xt = 'Skill_directiveIcon_4f',
                    Tt = 'Skill_directiveIcon__progress_f6',
                    Rt = (0, n.memo)(
                        ({
                            role: e,
                            skillIndex: u,
                            mediaSize: t,
                            componentKey: a,
                            name: i,
                            userName: s,
                            iconName: l,
                            level: c,
                            isZero: d,
                            isLocked: m,
                            isDisabled: E,
                            isIrrelevant: _,
                            isUntrained: g,
                            isLowEfficiency: A,
                            battleBooster: F,
                            isBonusSkill: f = !1,
                            animationType: D,
                            animationDelay: h = 0,
                            onSkillClick: C,
                        }) => {
                            const B = F !== Lu.S.None,
                                b = F === Lu.S.Improved,
                                v = Du[D],
                                w = (0, n.useState)(Fu.None),
                                y = w[0],
                                k = w[1],
                                x = y < Fu.DisplayActualState,
                                T = v && x ? v : { isLocked: m, iconName: l },
                                R = Boolean(T.iconName),
                                N = c === o.I,
                                I = _ || ((E || g) && !(T.isLocked || B)),
                                L = !(I || B) && A && R,
                                P = !(T.isLocked || (N && R)),
                                O = y === Fu.Finished ? Ne.None : D;
                            (0, n.useEffect)(() => {
                                const e = ((e, u, t) => {
                                    if (u === Fu.Finished) return;
                                    let n = u + 1,
                                        r = hu(e, n, t);
                                    for (; n < Fu.Finished && void 0 === r; ) n++, (r = hu(e, n, t));
                                    return void 0 !== r ? { nextStage: n, delay: r } : void 0;
                                })(D, y, f);
                                if (e) {
                                    const u = (y === Fu.None ? h : 0) + e.delay,
                                        t = () => {
                                            f || D !== Ne.Unlocked
                                                ? D === Ne.Selected &&
                                                  e.nextStage === Fu.Started &&
                                                  (0, S.F)(
                                                      () => ie.O.sound.play.sound(fe.gO.CREW_SETTING_UP_MAJOR_PERK),
                                                      300,
                                                  )
                                                : (e.nextStage === Fu.Started &&
                                                      ie.O.sound.play.sound(fe.gO.CREW_UNLOCK_MAJOR_PERK_START),
                                                  e.nextStage === Fu.Finished &&
                                                      ie.O.sound.play.sound(fe.gO.CREW_UNLOCK_MAJOR_PERK_STOP)),
                                                k(e.nextStage);
                                        };
                                    if (u > 0) return (0, S.F)(t, u);
                                    t();
                                }
                            }, [D, y, h, f]);
                            const M = (0, oe.useSpring)(() => {
                                    const e = {
                                        from: { opacity: 0, x: ie.O.view.remToPx(-10) },
                                        to: { opacity: 1, x: 0 },
                                    };
                                    return D !== Ne.None && N
                                        ? D === Ne.Selected
                                            ? {
                                                  from: { opacity: 1 },
                                                  to: { opacity: 0 },
                                                  config: { duration: 250 },
                                                  delay: 800 + h,
                                              }
                                            : Object.assign({}, e, { config: { duration: 200 }, delay: 1300 + h })
                                        : Object.assign({}, e, { immediate: !0 });
                                }, [D])[0],
                                W = (0, oe.useSpring)(() => {
                                    const e = { from: { val: 0 }, to: { val: c } };
                                    return D !== Ne.Unlocked
                                        ? Object.assign({}, e, { immediate: !0 })
                                        : Object.assign({}, e, {
                                              config: { duration: ((u = c), (t = f), u / (t ? 0.05 : 0.15)) },
                                              delay: 900 + h,
                                          });
                                    var u, t;
                                }, [c, D, h])[0];
                            return r().createElement(
                                Iu.l,
                                { tooltipArgs: bu(a, i, u, Boolean(l), f, m, c) },
                                r().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            st,
                                            O !== Ne.None && ct,
                                            f && ot,
                                            !(T.isLocked || I) && _t,
                                            I && Et,
                                            P && dt,
                                            (N || d) && gt,
                                            R && mt,
                                            L && At,
                                        ),
                                        onClick: () => {
                                            m || (ie.O.sound.play.click(), C(e));
                                        },
                                        onMouseEnter: () => !I && ie.O.sound.play.highlight(),
                                    },
                                    f && r().createElement('div', { className: p()(lt, P && Ft, L && ft) }),
                                    I && r().createElement('div', { className: Bt }),
                                    P &&
                                        r().createElement(oe.animated.div, {
                                            style: { width: d ? '100%' : W.val.to((e) => `${e}%`) },
                                            className: p()(pt, (N || d) && Ct, I && ht, L && Dt),
                                        }),
                                    r().createElement(
                                        Xu,
                                        {
                                            animationType: O,
                                            animationDelay: h,
                                            isAnimationStarted: y > Fu.None,
                                            isBonus: f,
                                        },
                                        r().createElement(it, {
                                            name: s,
                                            icon: l,
                                            mediaSize: t,
                                            isBonus: f,
                                            isLocked: m,
                                            isDisabled: I,
                                            isInProgress: P,
                                        }),
                                    ),
                                    (P || d) &&
                                        r().createElement(
                                            'div',
                                            { className: bt },
                                            d
                                                ? r().createElement('div', { className: p()(kt, I && St) })
                                                : r().createElement(
                                                      oe.animated.div,
                                                      { style: M, className: p()(vt, N && wt, L && yt) },
                                                      (0, le.dL)(c),
                                                  ),
                                        ),
                                    !(_ || E) && B && r().createElement('div', { className: p()(xt, !b && Tt) }),
                                ),
                            );
                        },
                    ),
                    Nt = 'SkillsGroup_base_1e',
                    It = 'SkillsGroup_base__main_7d',
                    Lt = 'SkillsGroup_base__untrained_b4',
                    Pt = 'SkillsGroup_base__bonus_9f',
                    Ot = 'SkillsGroup_skillsRow_02',
                    Mt = 'SkillsGroup_untrainedLayer_fb',
                    Wt = 'SkillsGroup_connectorLine_4b',
                    Ht = 'SkillsGroup_connectorLine__long_92',
                    zt = 'SkillsGroup_directive_7c',
                    Vt = (0, n.memo)(
                        ({
                            role: e,
                            directiveId: u,
                            directiveName: t,
                            componentKey: n,
                            mediaSize: a,
                            selectedSkillsCount: i,
                            skills: s,
                            isUntrained: o,
                            isLowEfficiency: l,
                            qualificationIndex: c = 0,
                            isBonusQualification: d = !1,
                            tankmanId: m,
                            selectedMajorSkillsAmount: E,
                            onSkillClick: _,
                        }) => {
                            const g = !d && o;
                            return r().createElement(
                                'div',
                                { className: p()(Nt, d ? Pt : It, g && Lt) },
                                g && r().createElement('div', { className: Mt }),
                                r().createElement(Nu, {
                                    role: e,
                                    componentKey: n,
                                    totalPerksCount: s.length,
                                    currentPerksCount: i,
                                    qualificationIndex: c,
                                    isBonusQualification: d,
                                }),
                                r().createElement(
                                    'div',
                                    { className: Ot },
                                    Bu(s, d, c, E, (u, t, i, s) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: t },
                                            r().createElement(Rt, {
                                                role: e,
                                                skillIndex: t,
                                                mediaSize: a,
                                                componentKey: n,
                                                isBonusSkill: d,
                                                isUntrained: o,
                                                isLowEfficiency: l,
                                                name: u.name,
                                                iconName: u.iconName,
                                                userName: u.userName,
                                                level: u.level,
                                                isZero: u.isZero,
                                                isLocked: u.isLocked,
                                                isDisabled: u.isDisabled,
                                                isIrrelevant: u.isIrrelevant,
                                                battleBooster: u.battleBooster,
                                                animationType: u.animationType,
                                                onSkillClick: _,
                                                animationDelay: i,
                                                key: `${m}-${u.animationType}`,
                                            }),
                                            s && r().createElement('div', { className: p()(Wt, d && Ht) }),
                                        ),
                                    ),
                                    0 !== u &&
                                        '' !== t &&
                                        r().createElement(
                                            gu.t,
                                            {
                                                targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                                args: { tooltipId: Au.OU, intCD: u, componentKey: n },
                                            },
                                            r().createElement('div', {
                                                className: zt,
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.quests.bonuses.big.$dyn(t)})`,
                                                },
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    $t = 'SkillsGroupTitle_base_e4',
                    Gt = 'SkillsGroupTitle_base__withBonus_b1',
                    Ut = 'SkillsGroupTitle_titleText_06',
                    jt = 'SkillsGroupTitle_titleText__untrained_a7',
                    Zt = 'SkillsGroupTitle_infoIcon_b4',
                    Kt = (0, n.memo)(({ title: e, componentKey: u, isUntrained: t, isBonusQualifications: n = !1 }) =>
                        r().createElement(
                            'div',
                            { className: p()($t, n && Gt) },
                            r().createElement('div', { className: p()(Ut, t && jt) }, e),
                            n &&
                                r().createElement(
                                    ae.u,
                                    {
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        contentId: R.views.lobby.crew.tooltips.BonusPerksTooltip('resId'),
                                        args: { componentKey: u },
                                    },
                                    r().createElement('div', { className: Zt }),
                                ),
                        ),
                    ),
                    qt = 'SkillsMatrix_base_2a',
                    Yt = 'SkillsMatrix_scrollableSection_24',
                    Xt = 'SkillsMatrix_bonusScrollBar_b7',
                    Jt = 'SkillsMatrix_bonusScrollContent_06',
                    Qt = (0, i.Pi)(() => {
                        const e = (0, a.GS)().mediaSize,
                            u = F(),
                            t = u.model,
                            i = u.controls,
                            s = t.tankmanId.get(),
                            l = t.skillsMatrix.componentKey.get(),
                            c = t.computes.mainSkills(),
                            d = t.computes.bonusSkills(),
                            m = t.computes.isUntrained(),
                            E = t.computes.isLowPerksEfficiency(),
                            _ = c.skills.reduce((e, u) => (u.level === o.I ? ++e : e), 0),
                            g = c.skills.findIndex((e) => e.animationType !== Ne.None),
                            A =
                                ((f = [c.skills, ...d.map((e) => e.skills)]),
                                (p = g),
                                Math.max(
                                    ...f.map((e, u) => {
                                        const t = u > 0;
                                        return Math.max(
                                            ...Bu(e, t, u, p, (e, u, n) =>
                                                void 0 === n ? 0 : n + Cu(e.animationType, t),
                                            ),
                                        );
                                    }),
                                ));
                        var f, p;
                        (0, n.useEffect)(() => {
                            if (A > 0) {
                                i.setAnimationInProgress(!0);
                                const e = (0, S.F)(() => i.setAnimationInProgress(!1), A);
                                return () => {
                                    i.setAnimationInProgress(!1), e();
                                };
                            }
                        }, [A, s, i]);
                        const D = (0, n.useCallback)((e) => i.clickSkill(e), [i]);
                        return r().createElement(
                            'div',
                            { className: qt },
                            r().createElement(Kt, {
                                title: m
                                    ? R.strings.crew.matrix.skills.main.disabled()
                                    : R.strings.crew.matrix.skills.main.enabled(),
                                componentKey: l,
                                isUntrained: m,
                            }),
                            r().createElement(Vt, {
                                mediaSize: e,
                                componentKey: l,
                                isUntrained: m,
                                isLowEfficiency: E,
                                role: c.role,
                                directiveId: c.directiveId,
                                directiveName: c.directiveName,
                                selectedSkillsCount: c.selectedSkillsCount,
                                skills: c.skills,
                                onSkillClick: D,
                                tankmanId: s,
                            }),
                            t.isTankmanInVehicle.get() &&
                                d.length > 0 &&
                                r().createElement(
                                    Ie.z,
                                    { className: Yt, classNames: { bar: Xt, content: Jt } },
                                    r().createElement(Kt, {
                                        isBonusQualifications: !0,
                                        title: R.strings.crew.matrix.skills.bonus(),
                                        componentKey: l,
                                        isUntrained: m,
                                    }),
                                    d.map((u, t) =>
                                        r().createElement(Vt, {
                                            isBonusQualification: !0,
                                            key: `${u.role}-${t}`,
                                            mediaSize: e,
                                            componentKey: l,
                                            isUntrained: m,
                                            isLowEfficiency: E,
                                            qualificationIndex: t + 1,
                                            role: u.role,
                                            directiveId: u.directiveId,
                                            directiveName: u.directiveName,
                                            selectedSkillsCount: u.selectedSkillsCount,
                                            skills: u.skills,
                                            onSkillClick: D,
                                            selectedMajorSkillsAmount: g,
                                            tankmanId: s,
                                        }),
                                    ),
                                ),
                            r().createElement(_u, {
                                mediaSize: e,
                                bonusSkillsCount: d.length,
                                hasPostProgression: t.hasPostProgression.get(),
                                resetGracePeriodLeft: t.skillsMatrix.resetGracePeriodLeft.get(),
                                isResetDisable: t.skillsMatrix.isResetDisable.get(),
                                hasResetDiscount: t.skillsMatrix.hasResetDiscount.get(),
                                hasIncreaseDiscount: t.skillsMatrix.hasIncreaseDiscount.get(),
                                onIncreaseClick: i.increase,
                                onResetClick: i.reset,
                                allSkillsLearned: _ === c.skills.length,
                            }),
                        );
                    }),
                    en = 'PersonalFileViewApp_base_23',
                    un = 'PersonalFileViewApp_content_ad',
                    tn = (0, i.Pi)(({ setTTCVisibility: e }) => {
                        const u = (0, a.GS)().mediaSize,
                            t = F(),
                            i = t.model,
                            o = t.controls,
                            l = i.computes.isTTCVisible();
                        (0, n.useEffect)(() => {
                            o.setTTCVisible(u >= a.cJ.Small), e && e(l);
                        }, [o, l, u, e]);
                        const c = i.tankmanId.get();
                        return (
                            (0, n.useEffect)(() => {
                                window.tutorialApi.updateComponents();
                            }, [c]),
                            r().createElement(
                                'div',
                                { className: en },
                                r().createElement(
                                    'div',
                                    { className: un },
                                    r().createElement(s.J, {
                                        withLogging: !0,
                                        rootId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    }),
                                    i.hasPostProgression.get() && r().createElement(Re, null),
                                    r().createElement(Qt, null),
                                ),
                            )
                        );
                    }),
                    nn = R.views.lobby.crew.personal_case.PersonalFileView('resId');
                r().memo(({ setTTCVisibility: e }) =>
                    r().createElement(A, { options: { rootId: nn } }, r().createElement(tn, { setTTCVisibility: e })),
                );
            },
            6035: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => Du });
                var n = t(4029),
                    r = t(6179),
                    a = t.n(r),
                    i = t(6483),
                    s = t.n(i),
                    o = t(3403),
                    l = t(3618),
                    c = t(7515),
                    d = t(1856),
                    m = t(3138),
                    E = t(6112),
                    _ = t(4598);
                var g = t(2039);
                const A = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function F() {
                    return (
                        (F = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        F.apply(null, arguments)
                    );
                }
                const f = (0, r.forwardRef)(function (e, u) {
                        let t = e.src,
                            n = e.className,
                            i = e.autoplay,
                            s = void 0 !== i && i,
                            o = e.style,
                            l = e.loop,
                            f = void 0 !== l && l,
                            p = e.isPrebufferKeyframes,
                            D = e.keyframesNameConfig,
                            h = e.onClick,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, A);
                        const B = u,
                            b = (0, r.useRef)(null);
                        return (
                            (0, g.b)(() =>
                                m.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    u === E.W.hidden && (null == (t = b.current) || t.pause());
                                    u === E.W.shown && (null == (n = b.current) || n.play());
                                }),
                            ),
                            (0, r.useEffect)(
                                () =>
                                    (0, d.v)(() => {
                                        const e = b.current;
                                        if (!B || !e || !p)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [p, B],
                            ),
                            (0, r.useEffect)(() => {
                                if (B && b.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: _.ZT,
                                        },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (e) {
                                                    let u = 0;
                                                    return [
                                                        function t() {
                                                            e(), (u = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (b.current) {
                                                        const t = b.current,
                                                            n = t.currentTime,
                                                            r = t.duration;
                                                        if (
                                                            (u !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: r }),
                                                                ),
                                                                (u = n)),
                                                            b.current.paused || !B || !p)
                                                        )
                                                            return;
                                                        const a = b.current.cohGetKeyframeTimestamps();
                                                        a.forEach((u, t) => {
                                                            n > a[t] - 0.02 &&
                                                                n < a[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != D ? D : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${D ? n : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = t[0],
                                                r = t[1];
                                            return n(), r;
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.currentTime;
                                        },
                                        a = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            b.current && (b.current.currentTime = (0, c.u)(0, b.current.duration, e));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            o(), i(0);
                                        },
                                        d = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = b.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            i(e), s();
                                        },
                                        E = (e) => {
                                            i(e), o();
                                        },
                                        g = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        A = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = b.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = b.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        F = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = b.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = b.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (B.current = {
                                            on: A,
                                            off: F,
                                            play: s,
                                            pause: o,
                                            stop: l,
                                            cleanup: g,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: d,
                                            goToAndPlay: m,
                                            goToAndStop: E,
                                            setCurrentTime: i,
                                            domRef: b.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            g(), (B.current = null);
                                        }
                                    );
                                }
                            }, [D, B, p]),
                            (0, r.useEffect)(() => {
                                b.current && s && b.current.play();
                            }, [s, f]),
                            (0, r.useEffect)(() => {
                                if (b.current)
                                    return () => {
                                        b.current && b.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                F({ src: t, className: n, style: o, loop: f, ref: b, onClick: h }, C),
                            )
                        );
                    }),
                    p = (0, r.memo)(f);
                var D = t(122),
                    h = t(514),
                    C = t(7641),
                    B = t(3649),
                    b = t(7030),
                    v = t(7160),
                    w = t(7077),
                    y = t(8018);
                const k = 'TankmanFolder_base_00',
                    S = 'TankmanFolder_folder_f5',
                    x = 'TankmanFolder_folder__postProgression_07',
                    T = 'TankmanFolder_photoFrame_ae',
                    N = 'TankmanFolder_base__big_60',
                    I = 'TankmanFolder_veteranBlick_14',
                    L = 'TankmanFolder_veteranFrame_9c',
                    P = 'TankmanFolder_icon_74',
                    O = 'TankmanFolder_innerShadow_44',
                    M = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    W = (0, C.remToPx)(50),
                    H = a().memo(function ({
                        name: e,
                        isSkin: u = !1,
                        hasPostProgression: t = !1,
                        isPostProgressionAnimated: n = !1,
                        className: i,
                    }) {
                        const o = (0, r.useState)(t && !n),
                            l = o[0],
                            c = o[1],
                            d = (0, r.useMemo)(() => {
                                const t = (0, B.BN)(String(e));
                                return null !== (u ? M.$dyn('crewSkins') : M).$dyn(t) ? w.U.c204x256 : w.U.c158x118;
                            }, [e, u]),
                            m = d === w.U.c204x256,
                            E = (0, b.useSpring)({
                                from: { opacity: 1, y: 0 },
                                to: { opacity: 0, y: W },
                                config: { duration: 700, easing: v.to },
                                delay: 300,
                            }),
                            _ = (0, b.useSpring)({
                                from: { opacity: 0, y: W },
                                to: { opacity: 1, y: 0 },
                                config: { duration: 700, easing: v.to },
                                delay: 1100,
                            });
                        return (
                            (0, r.useEffect)(() => {
                                if (n) {
                                    const e = (0, D.F)(() => h.hY.sound(y.gO.CREW_PROFILE_UPGRADE), 300),
                                        u = (0, D.F)(() => c(!0), 1400);
                                    return () => {
                                        e(), u();
                                    };
                                }
                            }, [n]),
                            a().createElement(
                                'div',
                                { className: s()(k, m && N, i) },
                                n && a().createElement(b.animated.div, { style: E, className: S }),
                                a().createElement(b.animated.div, { style: n ? _ : void 0, className: s()(S, t && x) }),
                                l &&
                                    a().createElement(p, {
                                        src: R.videos.crew.profile.veteran_blick(),
                                        className: I,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                                a().createElement(
                                    'div',
                                    { className: T },
                                    a().createElement(w.G, { name: e, size: d, isSkin: u, classMix: P }),
                                    m && a().createElement('div', { className: O }),
                                ),
                                l &&
                                    a().createElement(p, {
                                        src: m
                                            ? R.videos.crew.profile.veteran_frame_big()
                                            : R.videos.crew.profile.veteran_frame_small(),
                                        className: L,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                            )
                        );
                    });
                var z = t(5716),
                    V = t(771),
                    $ = t(3215),
                    G = t(3946),
                    U = t(8032);
                const j = (0, $.q)()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'skillsEfficiency',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'isPostProgressionAnimated',
                                        'hasPostProgression',
                                        'hasUniqueSound',
                                        'hasRetrainDiscount',
                                        'componentKey',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                    },
                                ),
                                t = (0, G.Om)(() => u.skillsEfficiency.get() === V.sU, !0),
                                n = (0, G.Om)(() => u.skillsEfficiency.get() < V.yb),
                                r = (0, G.Om)(() => {
                                    const e = u.currentVehicle.get(),
                                        t = u.nativeVehicle.get();
                                    if (void 0 === e && void 0 === t)
                                        return { isWrongVehicleType: !0, isWrongVehicle: !0 };
                                    const n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: n && e.type !== t.type && !(0, U.f)(e.tags, z.Yl),
                                        isWrongVehicle: n && e.name !== t.name && !e.isPremium,
                                    };
                                }),
                                a = (0, G.Om)(() =>
                                    u.hasRetrainDiscount.get()
                                        ? {
                                              args: { tooltipId: 'actionPrice', componentKey: u.componentKey.get() },
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          }
                                        : {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                              args: { componentKey: u.componentKey.get() },
                                              body: t()
                                                  ? R.strings.tooltips.buttons.retrain.body()
                                                  : R.strings.tooltips.buttons.increase.body(),
                                          },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    isUntrained: t,
                                    isLowPerksEfficiency: n,
                                    vehicleValidator: r,
                                    discountTooltipArgs: a,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    Z = j[0],
                    K = j[1];
                var q = t(3457),
                    Y = t(3415),
                    X = t(5415),
                    J = t(7078),
                    Q = t(2603),
                    ee = t(9916);
                const ue = 'RetrainAndEfficiency_base_71',
                    te = 'RetrainAndEfficiency_canNotRetrainIcon_82',
                    ne = 'RetrainAndEfficiency_retrainWarningLabel_af',
                    re = 'RetrainAndEfficiency_skillsEfficiencyLabel_45',
                    ae = 'RetrainAndEfficiency_skillsEfficiencyLabel__red_e9',
                    ie = 'RetrainAndEfficiency_skillsEfficiencyRateContainer_5c',
                    se = 'RetrainAndEfficiency_skillsEfficiencyNumber_9a',
                    oe = 'RetrainAndEfficiency_skillsEfficiencyNumber__red_a1',
                    le = 'RetrainAndEfficiency_skillsEfficiencyInfoIcon_76',
                    ce = a().memo(
                        ({
                            tankmanID: e,
                            efficiencyValue: u,
                            componentKey: t,
                            isWrongVehicle: n,
                            isPenaltyActive: r,
                            isWrongVehicleType: i,
                        }) =>
                            n || i
                                ? a().createElement(
                                      J.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { componentKey: t, tooltipId: Q.M4 },
                                      },
                                      a().createElement(
                                          'div',
                                          { className: ue },
                                          a().createElement('div', { className: te }),
                                          a().createElement(
                                              'div',
                                              { className: ne },
                                              R.strings.crew.personalFile.isUntrained(),
                                          ),
                                      ),
                                  )
                                : a().createElement(
                                      J.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { tankmanID: e, componentKey: t, tooltipId: Q.Br },
                                      },
                                      a().createElement(
                                          'div',
                                          { className: ue },
                                          a().createElement(
                                              'div',
                                              { className: s()(re, r && ae) },
                                              R.strings.crew.personalFile.skillsEfficiency(),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: ie },
                                              a().createElement(
                                                  'div',
                                                  { className: s()(se, r && oe) },
                                                  (0, B.dL)(ee.Z5.getNumberFormat(u * V.I, ee.B3.INTEGRAL)),
                                              ),
                                              !r && a().createElement('div', { className: le }),
                                          ),
                                      ),
                                  ),
                    ),
                    de = 'CurrentVehicleTrain_base_22',
                    me = 'CurrentVehicleTrain_currentVehicle_9d',
                    Ee = 'CurrentVehicleTrain_currentVehicleName_19',
                    _e = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    ge = 'CurrentVehicleTrain_retrainContainer_6a',
                    Ae = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    Fe = 'CurrentVehicleTrain_retrainBtn_3e',
                    fe = 'CurrentVehicleTrain_discountContainer_24',
                    pe = 'CurrentVehicleTrain_discountText_45',
                    De = 'CurrentVehicleTrain_retrainDiscountIcon_91',
                    he = 'CurrentVehicleTrain_penaltyDiscountIcon_33',
                    Ce = (0, r.memo)(
                        ({
                            tankmanId: e,
                            skillsEfficiency: u,
                            componentKey: t,
                            isUntrained: n,
                            isLowPerksEfficiency: r,
                            isWrongVehicle: i,
                            isWrongVehicleType: o,
                            hasRetrainDiscount: c,
                            currentVehicle: d,
                            tooltipArgs: m,
                            onRetrainClick: E,
                        }) => {
                            const _ = (0, X.GS)().mediaSize;
                            return a().createElement(
                                'div',
                                { className: de },
                                a().createElement(
                                    'div',
                                    { className: me },
                                    a().createElement(l.w, {
                                        text: d.name
                                            ? R.strings.crew.personalFile.inVehicle()
                                            : R.strings.crew.common.inBarracks(),
                                        binding: {
                                            vehicle: a().createElement(
                                                'div',
                                                { className: s()(Ee, d.isPremium && _e) },
                                                d.name,
                                            ),
                                        },
                                    }),
                                ),
                                a().createElement(ce, {
                                    isWrongVehicle: i,
                                    isPenaltyActive: r,
                                    isWrongVehicleType: o,
                                    tankmanID: e,
                                    efficiencyValue: u,
                                    componentKey: t,
                                }),
                                r &&
                                    a().createElement(
                                        Y.l,
                                        { tooltipArgs: m },
                                        a().createElement(
                                            'div',
                                            { className: ge },
                                            a().createElement(
                                                'div',
                                                { className: Ae },
                                                a().createElement(
                                                    q.u5,
                                                    { onClick: E, type: q.L$.secondary, mixClass: Fe },
                                                    n
                                                        ? R.strings.crew.personalFile.retrain()
                                                        : R.strings.crew.personalFile.increase(),
                                                ),
                                            ),
                                            c && a().createElement('div', { className: he }),
                                        ),
                                    ),
                                c &&
                                    !r &&
                                    a().createElement(
                                        Y.l,
                                        { tooltipArgs: m },
                                        a().createElement(
                                            'div',
                                            { className: fe },
                                            a().createElement(
                                                'div',
                                                { className: pe },
                                                _ < X.cJ.Large
                                                    ? R.strings.crew.personalFile.discount.short()
                                                    : R.strings.crew.personalFile.discount.full(),
                                            ),
                                            a().createElement('div', { className: De }),
                                        ),
                                    ),
                            );
                        },
                    );
                var Be = t(6373);
                const be = 'Name_base_2d',
                    ve = 'Name_labelWrapper_a0',
                    we = 'Name_labelHiglight_7d',
                    ye = 'Name_voiceButton_00',
                    ke = 'Name_soundIcon_2a',
                    Se = 'Name_animationGlow_08',
                    xe = (0, r.memo)(
                        ({
                            fullName: e,
                            hasUniqueSound: u,
                            hasPostProgression: t,
                            isPostProgressionAnimated: n,
                            onVoiceBtnClick: r,
                        }) => {
                            const i = (0, b.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.5, config: { duration: 600 } },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: v.to },
                                }),
                                s = (0, b.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 600 } },
                                        { opacity: 0.8, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: v.to },
                                });
                            return a().createElement(
                                'div',
                                { className: be },
                                a().createElement(
                                    'div',
                                    { className: ve },
                                    t && a().createElement(b.animated.div, { style: n ? s : void 0, className: we }, e),
                                    a().createElement('div', null, e),
                                    n && a().createElement(b.animated.div, { style: i, className: Se }),
                                    u &&
                                        a().createElement(
                                            Be.i,
                                            {
                                                header: R.strings.crew.personalFile.voiceTooltip.header(),
                                                body: R.strings.crew.personalFile.voiceTooltip.body(),
                                            },
                                            a().createElement(
                                                q.u5,
                                                { size: q.qE.extraSmall, type: q.L$.ghost, mixClass: ye, onClick: r },
                                                a().createElement('div', { className: ke }),
                                            ),
                                        ),
                                ),
                            );
                        },
                    );
                var Te = t(1530);
                const Re = 'Role_base_e0',
                    Ne = 'Role_role_2a',
                    Ie = 'Role_roleName_79',
                    Le = 'Role_commanderFeature_e2',
                    Pe = 'Role_sense_21',
                    Oe = 'Role_commanderBonus_99',
                    Me = (0, r.memo)(({ role: e, componentKey: u, isFemale: t }) => {
                        const n = (0, X.GS)().mediaSize;
                        return a().createElement(
                            'div',
                            { className: Re },
                            a().createElement(
                                J.t,
                                {
                                    args: { componentKey: u, tooltipId: Q.v$ },
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                },
                                a().createElement(
                                    'div',
                                    { className: Ne },
                                    a().createElement(Te.M, {
                                        role: e,
                                        size: n === X.cJ.ExtraLarge ? Te.S.c30x30 : Te.S.c18x18,
                                    }),
                                    a().createElement('div', { className: Ie }, (0, y.Gc)(e, t)),
                                ),
                            ),
                            'commander' === e &&
                                a().createElement(
                                    'div',
                                    { className: Le },
                                    a().createElement(
                                        J.t,
                                        {
                                            args: {
                                                componentKey: u,
                                                skillName: 'commander_sixthSense',
                                                tooltipId: Q.HZ,
                                                level: 100,
                                            },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        a().createElement('div', { className: Pe }),
                                    ),
                                    a().createElement(
                                        J.t,
                                        {
                                            args: { componentKey: u, tooltipId: Q.uN },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        a().createElement('div', { className: Oe }),
                                    ),
                                ),
                        );
                    });
                var We = t(2056),
                    He = t(9690),
                    ze = t(9053),
                    Ve = t(4828),
                    $e = t(1943),
                    Ge = t(5640);
                const Ue = {
                    base: 'VehicleTypeIcon_base_80',
                    base__big: 'VehicleTypeIcon_base__big_01',
                    base__c_44x44: 'VehicleTypeIcon_base__c_44x44_80',
                    base__c_48x48_specSlot: 'VehicleTypeIcon_base__c_48x48_specSlot_c4',
                    base__c_60x54: 'VehicleTypeIcon_base__c_60x54_08',
                };
                let je;
                !(function (e) {
                    (e.c83x74 = 'big'),
                        (e.c60x54 = 'c_60x54'),
                        (e.c44x44 = 'c_44x44'),
                        (e.c48x48_specSlot = 'c_48x48_specSlot');
                })(je || (je = {}));
                const Ze = a().memo(function ({ vehicleType: e, isElite: u, className: t, iconSize: n = je.c44x44 }) {
                        const r = `${(0, B.BN)(e)}${u ? '_elite' : ''}`,
                            i = R.images.gui.maps.icons.vehicleTypes.$dyn(n);
                        return a().createElement('div', {
                            className: s()(Ue.base, Ue[`base__${n}`], t),
                            style: { backgroundImage: `url(${null == i ? void 0 : i.$dyn(r)})` },
                        });
                    }),
                    Ke = 'SpecializationSlots_base_1a',
                    qe = 'SpecializationSlots_frame_85',
                    Ye = 'SpecializationSlots_frameChange_c6',
                    Xe = 'SpecializationSlots_darkFrame_34',
                    Je = 'SpecializationSlots_shadow_4a',
                    Qe = 'SpecializationSlots_arrows_6e',
                    eu = 'SpecializationSlots_info_7c',
                    uu = 'SpecializationSlots_arrowsIcon_fc',
                    tu = 'SpecializationSlots_changeVehicle_58',
                    nu = 'SpecializationSlots_tier_68',
                    ru = 'SpecializationSlots_vehicle_b6',
                    au = 'SpecializationSlots_vehicleTypeIcon_77',
                    iu = 'SpecializationSlots_flag_84',
                    su = 'SpecializationSlots_vehicleIcon_ec',
                    ou = 'SpecializationSlots_premVehicle_c3',
                    lu = 'SpecializationSlots_premVehicleTypeIcon_c9';
                function cu() {
                    return (
                        (cu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        cu.apply(null, arguments)
                    );
                }
                const du = (0, o.Pi)(({ componentKey: e }) => {
                        const u = K(),
                            t = u.model,
                            n = u.controls,
                            r = t.isCrewLocked.get(),
                            i = t.nativeVehicle.get();
                        return a().createElement(
                            'div',
                            { className: Ke },
                            a().createElement(
                                Be.i,
                                {
                                    header: r
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: r ? R.strings.crew.personalFile.crewLockedTooltip.body() : i.name,
                                    ignoreMouseClick: r,
                                },
                                a().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: () => !r && h.hY.highlight(),
                                        onClick: () => {
                                            r || (h.hY.click(), n.changeVehicle());
                                        },
                                        className: s()(r ? qe : Ye),
                                    },
                                    a().createElement('div', { className: Xe }),
                                    a().createElement(Ge.U, { size: Ge.$.c155x31, nation: i.nation, className: iu }),
                                    a().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, B.BN)(`${i.nation}-${i.techName}`))})`,
                                        },
                                        className: su,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: eu },
                                        a().createElement('div', { className: nu }, (0, He.HG)(i.tier)),
                                        a().createElement(Ze, {
                                            isElite: i.isPremium,
                                            vehicleType: i.type,
                                            className: au,
                                            iconSize: i.isPremium ? je.c44x44 : je.c48x48_specSlot,
                                        }),
                                        a().createElement('div', { className: ru }, i.name),
                                    ),
                                    a().createElement('div', { className: Je }),
                                    a().createElement(
                                        'div',
                                        { className: Qe },
                                        a().createElement('div', { className: uu }),
                                        a().createElement(
                                            'div',
                                            { className: tu },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                We.u,
                                cu(
                                    {
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                        args: { componentKey: e },
                                    },
                                    (0, $e.Sr)(Ve.D9, {
                                        item: Ve.sk.PremiumTooltip,
                                        action: Ve.eX.Viewed,
                                        parentScreen: Ve.sC.PersonalFile,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: qe },
                                    a().createElement(Ge.U, { size: Ge.$.c155x31, nation: i.nation, className: iu }),
                                    a().createElement(
                                        'div',
                                        { className: eu },
                                        a().createElement(l.w, {
                                            alignContent: ze.v2.Center,
                                            justifyContent: ze.v2.Center,
                                            classMix: ou,
                                            text: R.strings.crew.personalFile.premiumVehicle(),
                                            binding: {
                                                icon: a().createElement(Ze, {
                                                    isElite: !0,
                                                    vehicleType: i.type,
                                                    className: lu,
                                                }),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    mu = 'TankmanInfoApp_base_bc',
                    Eu = 'TankmanInfoApp_tankmanFolder_6d',
                    _u = 'TankmanInfoApp_descriptionBlock_00',
                    gu = 'TankmanInfoApp_description_3c',
                    Au = 'TankmanInfoApp_specializationLabel_a3',
                    Fu = 'TankmanInfoApp_specializationLabel__withDescription_2e',
                    fu = (0, o.Pi)(() => {
                        const e = K(),
                            u = e.model,
                            t = e.controls,
                            n = u.invId.get(),
                            r = u.description.get(),
                            i = u.componentKey.get(),
                            o = u.hasPostProgression.get(),
                            c = u.isPostProgressionAnimated.get(),
                            d = u.computes.vehicleValidator(),
                            m = d.isWrongVehicle,
                            E = d.isWrongVehicleType,
                            _ = Boolean(r);
                        return a().createElement(
                            'div',
                            { className: mu },
                            a().createElement(H, {
                                key: `${[n, o, c].join()}`,
                                name: u.iconName.get(),
                                isSkin: u.isInSkin.get(),
                                hasPostProgression: o,
                                isPostProgressionAnimated: c,
                                className: Eu,
                            }),
                            a().createElement(
                                'div',
                                { className: _u },
                                a().createElement(Me, {
                                    role: u.role.get(),
                                    componentKey: i,
                                    isFemale: u.isFemale.get(),
                                }),
                                a().createElement(xe, {
                                    key: n,
                                    fullName: u.fullName.get(),
                                    hasUniqueSound: u.hasUniqueSound.get(),
                                    hasPostProgression: o,
                                    isPostProgressionAnimated: c,
                                    onVoiceBtnClick: t.playUniqueVoice,
                                }),
                                _ &&
                                    a().createElement(l.w, {
                                        isTooltipEnable: !0,
                                        isTruncationAvailable: !0,
                                        text: r,
                                        customTooltipArgs: { componentKey: i },
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        classMix: gu,
                                    }),
                                a().createElement(
                                    'div',
                                    { className: s()(Au, _ && Fu) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                a().createElement(du, { componentKey: i }),
                                a().createElement(Ce, {
                                    tankmanId: n,
                                    skillsEfficiency: u.skillsEfficiency.get(),
                                    componentKey: i,
                                    isUntrained: u.computes.isUntrained(),
                                    isLowPerksEfficiency: u.computes.isLowPerksEfficiency(),
                                    isWrongVehicle: m,
                                    isWrongVehicleType: E,
                                    hasRetrainDiscount: u.hasRetrainDiscount.get(),
                                    currentVehicle: u.currentVehicle.get(),
                                    tooltipArgs: u.computes.discountTooltipArgs(),
                                    onRetrainClick: t.retrain,
                                }),
                            ),
                        );
                    }),
                    pu = (0, r.createContext)(!1),
                    Du = (0, r.memo)(({ rootId: e, withLogging: u = !1 }) =>
                        a().createElement(
                            n.z,
                            null,
                            a().createElement(
                                Z,
                                { options: { rootId: e, context: 'model.tankmanInfo' } },
                                a().createElement(pu.Provider, { value: u }, a().createElement(fu, null)),
                            ),
                        ),
                    );
            },
            5716: (e, u, t) => {
                'use strict';
                t.d(u, { Yl: () => n });
                const n = 'wotPlus';
            },
            4150: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { S: () => n }),
                    (function (e) {
                        (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                    })(n || (n = {}));
            },
            2603: (e, u, t) => {
                'use strict';
                t.d(u, { Br: () => s, HZ: () => n, M4: () => o, OU: () => a, uN: () => r, v$: () => i });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    a = 'directive',
                    i = 'tankman',
                    s = 'skillsEfficiency',
                    o = 'crewSkillUntrained';
            },
            771: (e, u, t) => {
                'use strict';
                t.d(u, { I: () => a, sU: () => n, yb: () => r });
                const n = -1,
                    r = 1,
                    a = 100;
                let i;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(i || (i = {}));
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
            },
            372: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            6143: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
            },
            9627: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    blackReal: 'colors_blackReal_fc',
                    whiteReal: 'colors_whiteReal_31',
                    white: 'colors_white_45',
                    whiteOrange: 'colors_whiteOrange_81',
                    whiteSpanish: 'colors_whiteSpanish_c3',
                    par: 'colors_par_5b',
                    parSecondary: 'colors_parSecondary_fd',
                    parTertiary: 'colors_parTertiary_97',
                    red: 'colors_red_79',
                    redDark: 'colors_redDark_73',
                    yellow: 'colors_yellow_76',
                    orange: 'colors_orange_cd',
                    cream: 'colors_cream_0f',
                    brown: 'colors_brown_82',
                    greenBright: 'colors_greenBright_68',
                    green: 'colors_green_fa',
                    greenDark: 'colors_greenDark_a9',
                    blueBooster: 'colors_blueBooster_26',
                    blueTeamkiller: 'colors_blueTeamkiller_86',
                    cred: 'colors_cred_35',
                    gold: 'colors_gold_c3',
                    bond: 'colors_bond_ce',
                    prom: 'colors_prom_83',
                };
            },
            7629: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            8236: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    base__c_155x31: 'FlagIcon_base__c_155x31_41',
                };
            },
            8386: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'RoleIcon_base_51',
                    base__small: 'RoleIcon_base__small_68',
                    base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                    base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                    base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                    base__c_24x24: 'RoleIcon_base__c_24x24_52',
                    base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                    base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                    base__c_40x40: 'RoleIcon_base__c_40x40_99',
                    base__medium: 'RoleIcon_base__medium_5d',
                    base__white: 'RoleIcon_base__white_2a',
                    base__big: 'RoleIcon_base__big_b4',
                };
            },
            7734: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ScrollWithLips_base_a2',
                    bar: 'ScrollWithLips_bar_67',
                    content: 'ScrollWithLips_content_6d',
                    fadeContainerTop: 'ScrollWithLips_fadeContainerTop_6d',
                    fadeContainerBottom: 'ScrollWithLips_fadeContainerBottom_43',
                    fade: 'ScrollWithLips_fade_5e',
                };
            },
            4458: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
            },
            3938: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 8640),
        (() => {
            var e = { 8640: 0, 2695: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(4591));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
