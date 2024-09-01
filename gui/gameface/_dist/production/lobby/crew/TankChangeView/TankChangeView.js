(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => o.L, qE: () => o.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7727),
                    s = n(6179),
                    i = n.n(s),
                    l = n(6880),
                    o = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: g,
                    onMouseMove: E,
                    onMouseDown: p,
                    onMouseUp: h,
                    onMouseLeave: b,
                    onClick: v,
                }) => {
                    const f = (0, s.useRef)(null),
                        A = (0, s.useState)(n),
                        C = A[0],
                        F = A[1],
                        w = (0, s.useState)(!1),
                        y = w[0],
                        k = w[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                C && null !== f.current && !f.current.contains(e.target) && F(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, s.useEffect)(() => {
                            F(n);
                        }, [n]),
                        i().createElement(
                            'div',
                            {
                                ref: f,
                                className: r()(
                                    l.Z.base,
                                    l.Z[`base__${a}`],
                                    c && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    C && l.Z.base__focus,
                                    y && l.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, u.G)(m), g && g(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    c || (h && h(e), k(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== _ && (0, u.G)(_),
                                        p && p(e),
                                        n && (c || (f.current && (f.current.focus(), F(!0)))),
                                        k(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (b && b(e), k(!1));
                                },
                                onClick: function (e) {
                                    c || (v && v(e));
                                },
                            },
                            a !== o.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: l.Z.back }),
                                    i().createElement('span', { className: l.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: r()(l.Z.state, l.Z.state__default) },
                                i().createElement('span', { className: l.Z.stateDisabled }),
                                i().createElement('span', { className: l.Z.stateHighlightHover }),
                                i().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: o.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { L: () => a, q: () => r }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(r || (r = {}));
            },
            2686: (e, t, n) => {
                'use strict';
                n.d(t, { At: () => l });
                var a = n(6179),
                    r = n.n(a),
                    u = n(3458);
                n(2902);
                const s = [
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
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            l = e.getImageSource,
                            m = e.frameCount,
                            _ = e.onAnimate,
                            g = e.frameTime,
                            E = void 0 === g ? u.O.FRAME_TIME : g,
                            p = e.initialFrameIndex,
                            h = void 0 === p ? u.O.INITIAL_FRAME_INDEX : p,
                            b = e.lastFrameIndex,
                            v = void 0 === b ? m - 1 : b,
                            f = e.loop,
                            A = void 0 === f ? u.O.LOOP : f,
                            C = e.state,
                            F = void 0 === C ? u.O.STATE : C,
                            w = e.onAnimationDone,
                            y = e.onAnimationComplete,
                            k = e.poster,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const B = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (F) {
                                    case 'play':
                                        return (function () {
                                            const e = d(h, v, l),
                                                t = o(h, v),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        u = e.get(r);
                                                    u
                                                        ? (null == _ || _(r, u),
                                                          n(u),
                                                          r === v &&
                                                              (null == y || y(),
                                                              A || (null == w || w(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === h && k ? { path: k, x: 0, y: 0 } : l(h),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(c(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, l, h, v, A, _, y, w, k, F]),
                            r().createElement('canvas', i({}, D, { width: t, height: n, ref: B }))
                        );
                    }),
                    o = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    c = (e, t) => Object.assign({}, e, { img: t }),
                    d = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let u = e; u <= t; u++) {
                            const e = n(u),
                                t = r[e.path];
                            if (t) a.set(u, c(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${u})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(u, c(e, t));
                            }
                        }
                        return a;
                    };
            },
            3458: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => a });
                const a = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, t, n) => {
                'use strict';
                function a(e) {
                    const t = e.chunk,
                        n = t.rows * t.columns;
                    return (a) => {
                        const r = a % n,
                            u = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: u, y: s };
                    };
                }
                function r(e) {
                    return (t) => `${e}${t}`;
                }
                n.d(t, { V: () => r, q: () => a });
            },
            2902: (e, t, n) => {
                'use strict';
                n(6179), n(3458);
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u),
                    i = n(8055);
                const l = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        u = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, l);
                    const g = a ? null : n,
                        E = 'string' == typeof g;
                    if ((g && !E && g < 0) || 0 === g) return null;
                    const p = g && !E && g > d,
                        h = r()(
                            i.Z.base,
                            i.Z[`base__${t}`],
                            u && i.Z.base__animated,
                            c && i.Z.base__hidden,
                            !g && i.Z.base__pattern,
                            a && i.Z.base__empty,
                            m,
                        );
                    return s().createElement(
                        'div',
                        o({ className: h }, _),
                        s().createElement('div', { className: i.Z.bg }),
                        s().createElement('div', { className: i.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(i.Z.value, E && i.Z.value__text) },
                            p ? d : g,
                            p && s().createElement('span', { className: i.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => d });
                var a = n(3138),
                    r = n(6179),
                    u = n(1043),
                    s = n(5262);
                const i = a.O.client.getSize('rem'),
                    l = i.width,
                    o = i.height,
                    c = Object.assign({ width: l, height: o }, (0, s.T)(l, o, u.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    r = n(6536),
                    u = n(6179),
                    s = n.n(u),
                    i = n(3495),
                    l = n(1043),
                    o = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, u.useContext)(i.Y),
                        n = (0, u.useState)(t),
                        c = n[0],
                        d = n[1],
                        m = (0, u.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: r }, (0, o.T)(n, r, l.j)));
                        }, []),
                        _ = (0, u.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, r.Z)(() => {
                        a.O.client.events.on('clientResized', m), a.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, u.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', m),
                                    a.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [m, _],
                        );
                    const g = (0, u.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    r = n(7382),
                    u = n(3495);
                const s = ['children'];
                const i = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    const i = (0, a.useContext)(u.Y),
                        l = i.extraLarge,
                        o = i.large,
                        c = i.medium,
                        d = i.small,
                        m = i.extraSmall,
                        _ = i.extraLargeWidth,
                        g = i.largeWidth,
                        E = i.mediumWidth,
                        p = i.smallWidth,
                        h = i.extraSmallWidth,
                        b = i.extraLargeHeight,
                        v = i.largeHeight,
                        f = i.mediumHeight,
                        A = i.smallHeight,
                        C = i.extraSmallHeight,
                        F = { extraLarge: b, large: v, medium: f, small: A, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && o) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && m) return t;
                    } else {
                        if (n.extraLargeWidth && _) return (0, r.H)(t, n, F);
                        if (n.largeWidth && g) return (0, r.H)(t, n, F);
                        if (n.mediumWidth && E) return (0, r.H)(t, n, F);
                        if (n.smallWidth && p) return (0, r.H)(t, n, F);
                        if (n.extraSmallWidth && h) return (0, r.H)(t, n, F);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, a.memo)(i);
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => r.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    r = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function r(e, t, n) {
                    const a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, n),
                        r = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, n),
                        u = Math.min(a, r);
                    return {
                        extraLarge: u === n.extraLarge.weight,
                        large: u === n.large.weight,
                        medium: u === n.medium.weight,
                        small: u === n.small.weight,
                        extraSmall: u === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => r }),
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
                    })(a || (a = {}));
            },
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    r = n(6483),
                    u = n.n(r),
                    s = n(6373),
                    i = n(3138),
                    l = n(2039),
                    o = n(5099),
                    c = n(7727),
                    d = n(9916),
                    m = n(6179),
                    _ = n.n(m),
                    g = n(4769),
                    E = n(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const h = (0, m.useRef)(null),
                            b = (0, m.useRef)(null),
                            v = (0, m.useRef)(null),
                            f = (0, m.useState)(window.decorator && window.decorator.directionType),
                            A = f[0],
                            C = f[1],
                            F = (0, m.useCallback)(() => {
                                c.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            w = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            y = u()(g.Z.arrow, g.Z[`arrow${p[A]}`]);
                        (0, l.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const k = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === h.current || t === v.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = i.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : i.O.view.sendEvent.close('popover');
                                },
                                [h, v, n],
                            ),
                            D = (0, E.w)(),
                            B = (0, m.useCallback)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        i.O.view.freezeTextureBeforeResize(),
                                        D.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            i.O.view.resize(t, n), C(window.decorator.directionType);
                                        })
                                    );
                            }, [D]);
                        return (
                            (0, m.useImperativeHandle)(r, () => ({ updateSize: B })),
                            (0, l.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', k, { capture: !0 });
                                const e = (0, o.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => B()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', k);
                                    }
                                );
                            }, [B, k, t]),
                            _().createElement(
                                'div',
                                { className: g.Z.base, ref: b },
                                _().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: g.Z.content, ref: h },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: F,
                                                    onMouseEnter: w,
                                                    ref: v,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: y, style: a.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => o });
                var a = n(1037),
                    r = n(9916),
                    u = n(6179),
                    s = n.n(u);
                const i = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        o = e.direction,
                        c = void 0 === o ? a.IC.Top : o,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        g = e.children,
                        E = e.isEnabled,
                        p = void 0 === E || E,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    const b = (0, u.useRef)(null),
                        v = (0, u.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            b.current && (0, r.P3)(t, c, b.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return s().createElement(
                        'div',
                        l(
                            {
                                ref: b,
                                onMouseDown:
                                    ((f = g.props.onClick),
                                    (e) => {
                                        p && (v(), _ && _(e), f && f(e));
                                    }),
                            },
                            h,
                        ),
                        g,
                    );
                    var f;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => l });
                var a = n(6179),
                    r = n.n(a),
                    u = n(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    return r().createElement(
                        u.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => o });
                var a = n(6179),
                    r = n.n(a),
                    u = n(7078),
                    s = n(6373),
                    i = n(2056);
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const o = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, a);
                    const o = t.contentId;
                    return o ? r().createElement(i.u, l({}, t, { contentId: o }), a) : r().createElement(u.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => o });
                var a = n(2056),
                    r = n(6179),
                    u = n.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: n, header: o, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, o, c, m]);
                        return u().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((E = null == m ? void 0 : m.hasHtmlContent),
                                        E ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                _,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => o });
                var a = n(7902),
                    r = n(9916),
                    u = n(6179);
                const s = [
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
                function i(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const l = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    o = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            g = void 0 !== _ && _,
                            E = e.ignoreMouseClick,
                            p = void 0 !== E && E,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            F = e.onShow,
                            w = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const k = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, u.useMemo)(() => C || (0, a.F)().resId, [C]),
                            B = (0, u.useCallback)(() => {
                                (k.current.isVisible && k.current.timeoutId) ||
                                    (l(n, b, { isMouseEvent: !0, on: !0, arguments: i(r) }, D),
                                    F && F(),
                                    (k.current.isVisible = !0));
                            }, [n, b, r, D, F]),
                            S = (0, u.useCallback)(() => {
                                if (k.current.isVisible || k.current.timeoutId) {
                                    const e = k.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (k.current.timeoutId = 0)),
                                        l(n, b, { on: !1 }, D),
                                        k.current.isVisible && w && w(),
                                        (k.current.isVisible = !1);
                                }
                            }, [n, b, D, w]),
                            I = (0, u.useCallback)((e) => {
                                k.current.isVisible &&
                                    ((k.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (k.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(k.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, u.useEffect)(() => {
                            const e = k.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return f
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((k.current.timeoutId = window.setTimeout(B, g ? 100 : 400)),
                                                      o && o(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
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
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => i });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: n = s, context: u = 'model' } = {}) {
                    const i = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = i.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const o = (e) => {
                        const a = n(t),
                            r = u.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const s = 'string' == typeof r ? `${u}.${r}` : u,
                                l = a.O.view.addModelObserver(s, t, !0);
                            return i.set(l, n), e && n(o(r)), l;
                        },
                        readByPath: o,
                        createCallback: (e, t) => {
                            const n = o(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = o(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(i.keys()); !(e = n()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => l });
                var a = n(4598),
                    r = n(9174),
                    u = n(6179),
                    s = n.n(u),
                    i = n(8246);
                const l = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: o, children: c, mocks: d }) {
                            const m = (0, u.useRef)([]),
                                _ = (n, u, s) => {
                                    var l;
                                    const o = i.U(u),
                                        c =
                                            'real' === n
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (l = null == s ? void 0 : s.getter) ? l : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        s = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const u = null != t ? t : d(e),
                                                        s = r.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const u = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            u[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                    {
                                                        const u = e,
                                                            s = Object.entries(u),
                                                            i = s.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, n]) => {
                                                                            i[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        E = { mode: n, model: g, externalModel: c, cleanup: _ };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && s ? s.controls(E) : t(E),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, u.useRef)(!1),
                                E = (0, u.useState)(l),
                                p = E[0],
                                h = E[1],
                                b = (0, u.useState)(() => _(l, o, d)),
                                v = b[0],
                                f = b[1];
                            return (
                                (0, u.useEffect)(() => {
                                    g.current ? f(_(p, o, d)) : (g.current = !0);
                                }, [d, p, o]),
                                (0, u.useEffect)(() => {
                                    h(l);
                                }, [l]),
                                (0, u.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                s().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                n(3649), n(9916);
                var a = n(8613);
                Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime;
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => l, on: () => i, onResize: () => u, onScaleUpdated: () => s });
                var a = n(2472),
                    r = n(1176);
                const u = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const u = `mouse${t}`,
                                        s = o[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, i),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(u, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, u, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => u,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function u(e = 'px') {
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
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => u });
                var a = n(5959),
                    r = n(514);
                const u = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => s });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    u = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    s = { play: Object.assign({}, u, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => u.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => w,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => D,
                    });
                var a = n(3722),
                    r = n(6112),
                    u = n(6538),
                    s = n(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function o(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function E() {
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
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    D = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => o });
                const a = ['args'];
                const r = 2,
                    u = 16,
                    s = 32,
                    i = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = u),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    o = {
                        close(e) {
                            l('popover' === e ? r : s);
                        },
                        minimize() {
                            l(i);
                        },
                        move(e) {
                            l(u, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            2344: (e, t, n) => {
                'use strict';
                n.d(t, { D9: () => r });
                var a = n(2790);
                n(3469), n(2133), n(579), n(5360), n(9056);
                const r = a.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, n) => {
                'use strict';
                n(7044), n(6179);
            },
            2133: (e, t, n) => {
                'use strict';
                n(6179);
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => l, GS: () => o, cJ: () => s, fd: () => i });
                var a = n(6179),
                    r = n(7739),
                    u = n(1043);
                let s, i, l;
                !(function (e) {
                    (e[(e.ExtraSmall = u.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = u.j.small.width)] = 'Small'),
                        (e[(e.Medium = u.j.medium.width)] = 'Medium'),
                        (e[(e.Large = u.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = u.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = u.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = u.j.small.width)] = 'Small'),
                            (e[(e.Medium = u.j.medium.width)] = 'Medium'),
                            (e[(e.Large = u.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = u.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = u.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = u.j.small.height)] = 'Small'),
                            (e[(e.Medium = u.j.medium.height)] = 'Medium'),
                            (e[(e.Large = u.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = u.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const o = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        n = e.height,
                        u = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        o = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return l.ExtraLarge;
                                case e.largeHeight:
                                    return l.Large;
                                case e.mediumHeight:
                                    return l.Medium;
                                case e.smallHeight:
                                    return l.Small;
                                case e.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: u, mediaWidth: o, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            5360: (e, t, n) => {
                'use strict';
                n(6536);
                var a = n(9916);
                n(6179);
                a.Sw.instance;
                let r;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(r || (r = {}));
            },
            9056: (e, t, n) => {
                'use strict';
                var a = n(9916);
                n(6179);
                a.Sw.instance;
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => r, k: () => u });
                var a = n(6179);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    u = (e) => {
                        (0, a.useEffect)(() => e, []);
                    };
            },
            2790: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(6179);
                const r = (e, t) => {
                    const n = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (t && !t(e)) || (n.current = e);
                        }, [t, e]),
                        n.current
                    );
                };
            },
            3112: (e, t, n) => {
                'use strict';
                n.d(t, { V: () => u });
                var a = n(6179),
                    r = n(3138);
                const u = () => {
                    const e = (0, a.useState)(r.O.view.getScale()),
                        t = e[0],
                        n = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                n(r.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                        t
                    );
                };
            },
            579: (e, t, n) => {
                'use strict';
                n(3138), n(6179);
            },
            8475: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => u });
                var a = n(6179),
                    r = n(2039);
                function u() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, r.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            4489: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => u });
                var a = n(5139),
                    r = n(6179);
                function u(e, t, n) {
                    const u = (0, r.useMemo)(() => (0, a.Z)(n, e), t);
                    return (0, r.useEffect)(() => u.cancel, [u]), u;
                }
            },
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
            9480: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => u, dF: () => i, lN: () => s, sE: () => l });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function u(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function s(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function i(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function l(e, t) {
                    for (let n = 0; n < e.length; n++) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
            },
            5099: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => a });
                const a = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((n, a) => {
                            e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => a });
                const a = (e, t) => {
                    const n = [];
                    for (let a = 0; a < e; a++) n.push(t(a));
                    return n;
                };
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => s });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const u = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) =>
                        u
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) (t += a[n]), (e -= r[n]);
                                  return t;
                              })(e);
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => r, G: () => a });
                const r = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, t, n) => {
                'use strict';
                n.d(t, { BN: () => u, dL: () => i, e: () => s, uF: () => r });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function u(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                (() => {
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
                })();
                const i = (e) => {
                    return (
                        (t = R.strings.common.percentValue()),
                        (n = { value: e }),
                        t.replace(/\{\w+\}/g, (e) => String(n[e.slice(1, -1)]))
                    );
                    var t, n;
                };
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let r,
                        u = !1,
                        s = 0;
                    function i() {
                        r && clearTimeout(r);
                    }
                    function l(...l) {
                        const o = this,
                            c = Date.now() - s;
                        function d() {
                            (s = Date.now()), n.apply(o, l);
                        }
                        u ||
                            (a && !r && d(),
                            i(),
                            void 0 === a && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      a
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === a ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                        (l.cancel = function () {
                            i(), (u = !0);
                        }),
                        l
                    );
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, r);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const u = r;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => u.Z,
                    B3: () => l,
                    Z5: () => s.Z5,
                    B0: () => i,
                    c9: () => v,
                    wU: () => F,
                    ry: () => h,
                    Eu: () => b,
                    SW: () => A,
                    P3: () => C,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                a.__instance = void 0;
                const r = a;
                var u = n(1358);
                var s = n(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const g = ['args'];
                function E(e, t, n, a, r, u, s) {
                    try {
                        var i = e[u](s),
                            l = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var u = e.apply(t, n);
                                        function s(e) {
                                            E(u, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            E(u, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    f = () => v(i.CLOSE),
                    A = () => v(i.POP_OVER, { on: !1 }),
                    C = (e, t, n, a, r = R.invalid('resId'), u) => {
                        const s = _.O.view.getViewGlobalPosition(),
                            l = n.getBoundingClientRect(),
                            o = l.x,
                            c = l.y,
                            d = l.width,
                            m = l.height,
                            g = {
                                x: _.O.view.pxToRem(o) + s.x,
                                y: _.O.view.pxToRem(c) + s.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        v(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: p(g),
                            on: !0,
                            args: u,
                        });
                    },
                    F = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = n(7572);
                const k = r.instance,
                    D = {
                        DataTracker: u.Z,
                        ViewModel: y.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: C,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: h,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: F,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: k,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = D;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => u, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    u = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            1504: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => l });
                var a = n(7739),
                    r = n(6179),
                    u = n.n(r),
                    s = n(2849);
                const i = ['children'];
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    return u().createElement(a.ZN, null, u().createElement(s.l, n, t));
                };
            },
            2849: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => E });
                var a = n(6483),
                    r = n.n(a),
                    u = n(926),
                    s = n.n(u),
                    i = n(6179),
                    l = n.n(i),
                    o = n(5415);
                const c = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = {
                        [o.fd.ExtraSmall]: '',
                        [o.fd.Small]: s().SMALL_WIDTH,
                        [o.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [o.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [o.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [o.Aq.ExtraSmall]: '',
                        [o.Aq.Small]: s().SMALL_HEIGHT,
                        [o.Aq.Medium]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT}`,
                        [o.Aq.Large]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT}`,
                        [o.Aq.ExtraLarge]:
                            `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT} ${s().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [o.cJ.ExtraSmall]: '',
                        [o.cJ.Small]: s().SMALL,
                        [o.cJ.Medium]: `${s().SMALL} ${s().MEDIUM}`,
                        [o.cJ.Large]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE}`,
                        [o.cJ.ExtraLarge]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE} ${s().EXTRA_LARGE}`,
                    },
                    E = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const u = (0, o.GS)(),
                            s = u.mediaWidth,
                            i = u.mediaHeight,
                            E = u.mediaSize;
                        return l().createElement('div', d({ className: r()(n, m[s], _[i], g[E]) }, a), t);
                    };
            },
            4029: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => a.z });
                var a = n(1504);
            },
            7493: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { Z0: () => r, in: () => a, sx: () => u }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(a || (a = {}));
                const r = 'tooltip_watched',
                    u = 2;
                let s;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(s || (s = {}));
            },
            4828: (e, t, n) => {
                'use strict';
                n.d(t, { AB: () => _, D9: () => a, eX: () => u, sC: () => s, tL: () => r, x3: () => o });
                const a = 'crew',
                    r = 2e3;
                let u, s, i, l, o, c, d, m;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(u || (u = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(s || (s = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(i || (i = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(l || (l = {})),
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
                    })(c || (c = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(d || (d = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(m || (m = {}));
                const _ = {
                    [R.views.lobby.crew.personal_case.PersonalFileView('resId')]: s.PersonalFile,
                    [R.views.lobby.crew.personal_case.PersonalDataView('resId')]: s.PersonalData,
                    [R.views.lobby.crew.personal_case.ServiceRecordView('resId')]: s.ServiceRecord,
                    [R.views.lobby.crew.BarracksView('resId')]: s.Barracks,
                    [R.views.lobby.crew.HangarCrewWidget('resId')]: s.Hangar,
                    [R.views.lobby.crew.MemberChangeView('resId')]: s.MemberChange,
                    [R.views.lobby.crew.TankChangeView('resId')]: s.TankChange,
                    [R.views.lobby.crew.QuickTrainingView('resId')]: s.QuickTraining,
                };
            },
            1943: (e, t, n) => {
                'use strict';
                n.d(t, { Jp: () => d, Sr: () => m });
                var a = n(6179),
                    r = n(7493);
                const u = ['action', 'timeLimit'];
                const s = 'metrics',
                    i = () => Date.now(),
                    l = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    o = (e, t) => {
                        const n = (0, a.useCallback)(
                            (n, a = r.in.Info, u) => {
                                u || (u = {}),
                                    Object.keys(u).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(u),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    c = (e, t) => {
                        const n = o(e, t),
                            r = (0, a.useRef)(new Map()),
                            u = (0, a.useRef)(new Map()),
                            s = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, i());
                                },
                                [r],
                            ),
                            l = (0, a.useCallback)(() => {
                                r.current.clear(), u.current.clear();
                            }, [r, u]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === u.current.get(e) &&
                                        u.current.set(e, i());
                                },
                                [r, u],
                            ),
                            d = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const n = u.current.get(e);
                                    if (void 0 === n) return;
                                    u.current.delete(e);
                                    const a = i() - n;
                                    r.current.set(e, t + a);
                                },
                                [r, u],
                            ),
                            m = (0, a.useCallback)(
                                (e, t = 0, a, s) => {
                                    const l = r.current.get(e);
                                    if (void 0 === l) return;
                                    void 0 !== u.current.get(e) && d(e), r.current.delete(e);
                                    const o = (i() - l) / 1e3;
                                    o <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, o)),
                                        n(e, a, s));
                                },
                                [r, u, n, d],
                            );
                        return [(e) => s(e), (e, t, n, a) => m(e, t, n, a), () => l(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = o(e, s),
                            n = (0, a.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, l(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    m = (e, t) => {
                        const n = ((e) => {
                                const t = c(e, s),
                                    n = t[0],
                                    r = t[1],
                                    u = t[2],
                                    i = t[3],
                                    o = t[4],
                                    d = (0, a.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                n = e.timeLimit,
                                                a = e.logLevel;
                                            r(t, n, a, l(e));
                                        },
                                        [r],
                                    );
                                return [(e) => n(e), (e) => d(e), () => u(), (e) => i(e), (e) => o(e)];
                            })(e),
                            i = n[0],
                            o = n[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(t, u);
                        return (0, a.useMemo)(
                            () => ({
                                onShow: () => i(d || r.Z0),
                                onHide: () => o(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, _)),
                            }),
                            [d, m, _, i, o],
                        );
                    };
            },
            2582: (e, t, n) => {
                'use strict';
                n.d(t, { yZ: () => i });
                var a = n(6179),
                    r = n.n(a);
                const u = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                    'revers',
                ];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                let i;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(i || (i = {}));
                const l = (e, t, n) => {
                    const a = new Image();
                    (a.src = n(t)), e.push(a);
                };
                (0, a.memo)((e) => {
                    let t = e.width,
                        n = e.height,
                        o = e.getSrcByFrame,
                        c = e.frameCount,
                        d = e.onAnimate,
                        m = void 0 === d ? () => {} : d,
                        _ = e.frameTime,
                        g = void 0 === _ ? 33 : _,
                        E = e.initialFrameIndex,
                        p = void 0 === E ? 0 : E,
                        h = e.loop,
                        b = void 0 === h || h,
                        v = e.state,
                        f = void 0 === v ? i.Play : v,
                        A = e.onAnimationComplete,
                        C = void 0 === A ? () => {} : A,
                        F = e.revers,
                        w = void 0 !== F && F,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    const k = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = k.current;
                            if (!e) return;
                            const a = c - 1,
                                r = e.getContext('2d'),
                                u = (a) => {
                                    r.clearRect(0, 0, e.width, e.height), r.drawImage(a, 0, 0, t, n);
                                };
                            if ('stop' === f) {
                                const e = o(0),
                                    t = new Image();
                                t.src = e;
                                const n = () => u(t);
                                return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                            }
                            const s = ((e, t, n) => {
                                    const a = [];
                                    if (n) for (let n = e; n >= 0; n--) l(a, n, t);
                                    else for (let n = 0; n < e; n++) l(a, n, t);
                                    return a;
                                })(c, o, w),
                                i = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return (n += 1), n > e && (n = 0), t;
                                    };
                                })(a, p),
                                d = setInterval(() => {
                                    const e = i(),
                                        t = s[e];
                                    u(s[e]), m(e, t), e === a && (C(), b || clearInterval(d));
                                }, g);
                            return () => clearInterval(d);
                        }, [c, g, o, n, p, b, m, C, f, t, w]),
                        r().createElement('canvas', s({}, y, { width: t, height: n, ref: k }))
                    );
                });
            },
            1860: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => Le,
                        Bar: () => Ie,
                        DefaultScroll: () => Ne,
                        Direction: () => ge,
                        defaultSettings: () => Ee,
                        useHorizontalScrollApi: () => he,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => Ke, Bar: () => qe, Default: () => Xe, useVerticalScrollApi: () => xe });
                var u = n(4029),
                    s = n(6179),
                    i = n.n(s),
                    l = n(493),
                    o = n.n(l),
                    c = n(1037),
                    d = n(3138),
                    m = n(5521);
                n(9916);
                const _ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function g(e = m.n.NONE, t = _, n = !1, a = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== m.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && d.O.view.isEventHandled()) return;
                                d.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var E = n(5415),
                    p = n(6483),
                    h = n.n(p);
                const b = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    base__c_155x31: 'FlagIcon_base__c_155x31_41',
                };
                let v;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(v || (v = {}));
                const f = {
                        [v.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [v.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [v.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    A = i().memo(({ nation: e, size: t, className: n }) =>
                        i().createElement('div', {
                            className: h()(b.base, b[`base__${t}`], n),
                            style: { backgroundImage: `url('${f[t].$dyn(e)}')` },
                        }),
                    ),
                    C = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let F;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(F || (F = {}));
                const w = ({ title: e, theme: t = F.Barracks, className: n, children: a }) =>
                    i().createElement(
                        'div',
                        { className: h()(C.base, C[`base__${t}`], n) },
                        i().createElement('div', { className: C.title }, e),
                        a,
                    );
                var y = n(7727);
                const k = {
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
                    D = [
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
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                class S extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, y.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, y.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            r = e.side,
                            u = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, D)),
                            _ = h()(k.base, k[`base__${u}`], k[`base__${r}`], null == s ? void 0 : s.base),
                            g = h()(k.icon, k[`icon__${u}`], k[`icon__${r}`], null == s ? void 0 : s.icon),
                            E = h()(k.glow, null == s ? void 0 : s.glow),
                            p = h()(k.caption, k[`caption__${u}`], null == s ? void 0 : s.caption),
                            b = h()(k.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            B(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                m,
                            ),
                            'info' !== u && i().createElement('div', { className: k.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: E })),
                            i().createElement('div', { className: p }, t),
                            a && i().createElement('div', { className: b }, a),
                        );
                    }
                }
                S.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const I = ({ onClick: e }) =>
                        i().createElement(S, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    T = 'common_close_0e',
                    N = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        i().createElement(S, {
                            onClick: e,
                            classNames: { base: T },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    L = 'TopButtons_base_ef',
                    x = 'TopButtons_leftButtons_9e',
                    O = 'TopButtons_rightButtons_33',
                    M = i().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: n,
                        onAboutClick: a,
                        onCloseClick: r,
                        className: u,
                        classNames: s,
                    }) {
                        return i().createElement(
                            'div',
                            { className: h()(L, u) },
                            e &&
                                n &&
                                i().createElement(
                                    'div',
                                    { className: h()(x, null == s ? void 0 : s.leftButtons) },
                                    i().createElement(S, { onClick: n, caption: e, type: 'back' }),
                                ),
                            i().createElement(
                                'div',
                                { className: h()(O, null == s ? void 0 : s.rightButtons) },
                                a && i().createElement(I, { onClick: a }),
                                r && i().createElement(N, { onClick: r, label: t }),
                            ),
                        );
                    });
                var H = n(4119),
                    P = n(5801);
                const W = (0, n(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                { vehicleList: e.array('vehicleList') },
                                e.primitives(['nation', 'backButtonLabel', 'isButtonBarVisible']),
                            ),
                        ({ externalModel: e }) => ({
                            back: e.createCallbackNoArgs('onBack'),
                            hangar: e.createCallbackNoArgs('onHangar'),
                            closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                            selectVehicle: e.createCallback((e) => ({ vehicleID: e }), 'onVehicleSelected'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                        }),
                    ),
                    j = W[0],
                    z = W[1];
                var $ = n(2106),
                    G = n(3403),
                    Z = n(3457),
                    V = n(6373),
                    U = n(8018);
                const q = 'WarningText_base_13',
                    Y = 'WarningText_icon_5d',
                    X = 'WarningText_label_c6',
                    K = i().memo(function ({ label: e }) {
                        return i().createElement(
                            'div',
                            { className: q },
                            i().createElement('div', { className: Y }),
                            i().createElement('div', { className: X }, e),
                        );
                    }),
                    Q = 'ListEmptyState_base_ae',
                    J = 'ListEmptyState_content_1e',
                    ee = 'ListEmptyState_shadow_ae',
                    te = 'ListEmptyState_buttonWrapper_78',
                    ne = 'ListEmptyState_button_f1',
                    ae = i().memo(function ({
                        warningText: e,
                        buttonType: t = Z.L$.secondary,
                        tooltipArgs: n = U.Xd,
                        isBtnDisabled: a = !1,
                        className: r,
                        onClick: u,
                        children: s,
                    }) {
                        return i().createElement(
                            'div',
                            { className: h()(Q, r) },
                            i().createElement(
                                'div',
                                { className: J },
                                i().createElement('div', { className: ee }),
                                i().createElement(K, { label: e }),
                                s &&
                                    i().createElement(
                                        'div',
                                        { className: te },
                                        i().createElement(
                                            V.i,
                                            n,
                                            i().createElement(
                                                'div',
                                                null,
                                                i().createElement(
                                                    Z.u5,
                                                    {
                                                        size: Z.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: u,
                                                        mixClass: ne,
                                                    },
                                                    s,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    re = (e) => {
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
                    },
                    ue = (e, t, n) => (n < e ? e : n > t ? t : n),
                    se = [];
                function ie(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), se)
                    );
                }
                function le(e, t, n = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, s.useEffect)(() => r, [r]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, u),
                        r,
                    ];
                }
                function oe(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ce(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return ce(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ce(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const de = () => {
                    const e = (0, s.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        r = (e, ...n) => {
                            for (var a, r = oe(t(e).values()); !(a = r()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                };
                var me = n(4489),
                    _e = n(7030);
                let ge;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(ge || (ge = {}));
                const Ee = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    pe = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const i = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                u = a[1];
                            return u <= r ? 0 : ue(r, u, n);
                        };
                        return (l = {}) => {
                            const o = l.settings,
                                c = void 0 === o ? Ee : o,
                                m = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                g = de(),
                                E = (0, me.f)(
                                    () => {
                                        d.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, _e.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (n(t, e), g.trigger('change', e), u && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                h = p[0],
                                b = p[1],
                                v = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = h.scrollPosition.get(),
                                            u = (null != (a = h.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, t * n + u + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                f = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            b.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(a, h.scrollPosition.get()) },
                                            });
                                    },
                                    [b, c.animationConfig, h.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            n = _.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            u = v(t, e, a);
                                        f(u);
                                    },
                                    [f, v, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            m.current && g.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, A, g],
                                ),
                                F = ((e, t = []) => {
                                    const n = (0, s.useRef)(),
                                        a = (0, s.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        re(() => {
                                            const e = m.current;
                                            e &&
                                                (f(i(e, h.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [f, h.scrollPosition.goal],
                                ),
                                w = ie(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && f(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', F),
                                    () => {
                                        window.removeEventListener('resize', F);
                                    }
                                ),
                                [F],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: A,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: b,
                                    animationScroll: h,
                                    recalculateContent: w,
                                    events: { on: g.on, off: g.off },
                                }),
                                [h.scrollPosition, f, A, g.off, g.on, w, C, b, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    he = pe({
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
                        getDirection: (e) => (e.deltaY > 1 ? ge.Next : ge.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    be = 'HorizontalBar_base_49',
                    ve = 'HorizontalBar_base__nonActive_82',
                    fe = 'HorizontalBar_leftButton_5f',
                    Ae = 'HorizontalBar_rightButton_03',
                    Ce = 'HorizontalBar_track_0d',
                    Fe = 'HorizontalBar_thumb_fd',
                    we = 'HorizontalBar_rail_32',
                    ye = 'disable',
                    ke = { pending: !1, offset: 0 },
                    De = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Be = () => {},
                    Se = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ie = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = De, onDrag: a = Be }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(ke),
                            g = _[0],
                            E = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            b = () => {
                                const t = o.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    d = ue(0, 1, s / (r - a)),
                                    m = (t.offsetWidth - Se(t, i)) * d;
                                (n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && o.current && c.current) {
                                            if (0 === e)
                                                return u.current.classList.add(ye), void l.current.classList.remove(ye);
                                            if (
                                                ((t = o.current),
                                                (n = c.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return u.current.classList.remove(ye), void l.current.classList.add(ye);
                                            var t, n;
                                            u.current.classList.remove(ye), l.current.classList.remove(ye);
                                        }
                                    })(m);
                            },
                            v = ie(() => {
                                (() => {
                                    const t = c.current,
                                        n = o.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const s = Math.min(1, a / u);
                                    (t.style.width = `${Se(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(ve) : r.current.classList.remove(ve));
                                })(),
                                    b();
                            });
                        (0, s.useEffect)(() => re(v)),
                            (0, s.useEffect)(
                                () =>
                                    re(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let n = Be;
                                        const a = () => {
                                            n(), (n = re(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!g.pending) return;
                                const t = d.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const u = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!u || !s) return;
                                        const i = o.current,
                                            l = c.current;
                                        if (!i || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const d = t.clientX - g.offset - i.getBoundingClientRect().x,
                                            m = (d / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: d, contentOffset: m });
                                    }),
                                    n = d.O.client.events.mouse.up(() => {
                                        t(), p(ke);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, a, p]);
                        const f = le((t) => e.applyStepTo(t), m, [e]),
                            A = f[0],
                            C = f[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const F = (e) => {
                            e.target.classList.contains(ye) || (0, y.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: h()(be, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: h()(fe, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ye) || 0 !== e.button || ((0, y.G)('play'), A(ge.Next));
                                },
                                onMouseUp: C,
                                ref: u,
                                onMouseEnter: F,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: h()(Ce, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, y.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = c.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? ge.Prev : ge.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: F,
                                },
                                i().createElement('div', { ref: c, className: h()(Fe, t.thumb) }),
                                i().createElement('div', { className: h()(we, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: h()(Ae, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ye) || 0 !== e.button || ((0, y.G)('play'), A(ge.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    Te = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ne = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: u,
                        scrollClassName: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(Te.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: h()(Te.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(Te.defaultScrollArea, r) },
                                i().createElement(Le, { className: l, api: m, classNames: u }, e),
                            ),
                            i().createElement(Ie, { getStepByRailClick: o, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Le = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => re(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(Te.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: h()(Te.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: h()(Te.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Le.Bar = Ie), (Le.Default = Ne);
                const xe = pe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ge.Next : ge.Prev),
                    }),
                    Oe = 'VerticalBar_base_f3',
                    Re = 'VerticalBar_base__nonActive_42',
                    Me = 'VerticalBar_topButton_d7',
                    He = 'VerticalBar_bottomButton_06',
                    Pe = 'VerticalBar_track_df',
                    We = 'VerticalBar_thumb_32',
                    je = 'VerticalBar_rail_43',
                    ze = 'disable',
                    $e = () => {},
                    Ge = { pending: !1, offset: 0 },
                    Ze = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ve = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ue = (e, t) => Math.max(20, e.offsetHeight * t),
                    qe = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Ze, onDrag: a = $e }) => {
                        const r = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(Ge),
                            g = _[0],
                            E = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            b = ie(() => {
                                const t = c.current,
                                    n = o.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${Ue(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Re) : r.current.classList.remove(Re)),
                                    s
                                );
                            }),
                            v = ie(() => {
                                const t = o.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    d = ue(0, 1, s / (r - a)),
                                    m = (t.offsetHeight - Ue(t, i)) * d;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && o.current && c.current) {
                                            if (0 === Math.round(e))
                                                return u.current.classList.add(ze), void l.current.classList.remove(ze);
                                            if (
                                                ((t = o.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return u.current.classList.remove(ze), void l.current.classList.add(ze);
                                            var t, n;
                                            u.current.classList.remove(ze), l.current.classList.remove(ze);
                                        }
                                    })(m);
                            }),
                            f = ie(() => {
                                Ve(e, () => {
                                    b(), v();
                                });
                            });
                        (0, s.useEffect)(() => re(f)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Ve(e, () => {
                                        v();
                                    });
                                };
                                let n = $e;
                                const a = () => {
                                    n(), (n = re(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!g.pending) return;
                                const t = d.O.client.events.mouse.up(() => {
                                        p(Ge);
                                    }),
                                    n = d.O.client.events.mouse.move(([t]) => {
                                        Ve(e, (n) => {
                                            const r = o.current,
                                                u = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !u || !s) return;
                                            const i = t.screenY - g.offset - r.getBoundingClientRect().y,
                                                l = (i / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: i, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, a, p]);
                        const A = le((t) => e.applyStepTo(t), m, [e]),
                            C = A[0],
                            F = A[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', F, !0),
                                () => document.removeEventListener('mouseup', F, !0)
                            ),
                            [F],
                        );
                        const w = (e) => {
                            e.target.classList.contains(ze) || (0, y.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: h()(Oe, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: h()(Me, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ze) || 0 !== e.button || ((0, y.G)('play'), C(ge.Next));
                                },
                                ref: u,
                                onMouseEnter: w,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: h()(Pe, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, y.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Ve(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? ge.Prev : ge.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: w,
                                },
                                i().createElement('div', { ref: c, className: h()(We, t.thumb) }),
                                i().createElement('div', { className: h()(je, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: h()(He, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ze) || 0 !== e.button || ((0, y.G)('play'), C(ge.Prev));
                                },
                                onMouseUp: F,
                                ref: l,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Ye = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Xe = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: u,
                        scrollClassNames: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(Ye.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: h()(Ye.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(Ye.area, r) },
                                i().createElement(Ke, { className: u, classNames: l, api: m }, e),
                            ),
                            i().createElement(qe, { getStepByRailClick: o, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Ke = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => re(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(Ye.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(Ye.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Ke.Default = Xe;
                const Qe = { Vertical: r, Horizontal: a };
                var Je = n(4385);
                const et = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: r,
                        itemsAmountPerRow: u,
                        visibleRowsAmount: s,
                    }) => {
                        const i = Math.ceil(r / u) * t,
                            l = s * t,
                            o = e * t;
                        return { paddingTop: `${o + n}rem`, paddingBottom: `${Math.max(i - o - l, 0) + a}rem` };
                    },
                    tt = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            r = e.visibleRowsAmount,
                            u = e.startRowIndex,
                            s = e.amount,
                            l = u * a,
                            o = Math.min(r * a, s - l);
                        return i().createElement(
                            'div',
                            { className: t, style: et(e) },
                            (0, Je.K)(o, (e) => n(l + e)),
                        );
                    },
                    nt = 'VirtualGrid_base_52',
                    at = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: r,
                        classNames: u,
                        preloadedRows: l = 1,
                        paddingTop: o = 0,
                        paddingBottom: c = 0,
                    }) => {
                        const m = r.scrollApi,
                            _ = (0, s.useRef)(0),
                            g = (0, s.useState)(0),
                            E = g[0],
                            p = g[1],
                            b = (0, s.useState)(null),
                            v = b[0],
                            f = b[1],
                            A = (0, s.useState)(null),
                            C = A[0],
                            F = A[1];
                        return (
                            (0, s.useEffect)(() => {
                                const t = (t) => {
                                    if (!v) return;
                                    const a = Math.floor((d.O.view.pxToRem(t.value.scrollPosition) - o) / n + 1),
                                        u = Math.ceil(e / v),
                                        s = Math.max(0, Math.min(a - l, u));
                                    p(s), r.startRowIndexChanged(s);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [r, m, n, o, v, e, l]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                u =
                                                    d.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(u / t),
                                                i = Math.ceil(d.O.view.pxToRem(a.height) / n) + 2 * l;
                                            (_.current = s), f(s), F(i), r.layoutCalculated(s, i);
                                        }
                                    },
                                    a = () => {
                                        const t = _.current;
                                        e(), r.scrollToIndex(E * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', a),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', a);
                                    }
                                );
                            }, [r, m, n, t, l, E]),
                            (0, s.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    v && m.applyScroll(Math.floor(e / v) * n + o, { immediate: t });
                                };
                                return r.events.on('scrollToIndex', e), () => r.events.off('scrollToIndex', e);
                            }, [r, n, v, o, m]),
                            i().createElement(
                                Qe.Vertical.Default,
                                {
                                    api: m,
                                    className: null == u ? void 0 : u.scroll,
                                    areaClassName: null == u ? void 0 : u.areaClassName,
                                    scrollClassName: null == u ? void 0 : u.scrollClassName,
                                    scrollClassNames: {
                                        content: null == u ? void 0 : u.content,
                                        wrapper: null == u ? void 0 : u.wrapper,
                                    },
                                },
                                null !== v &&
                                    null !== C &&
                                    i().createElement(
                                        tt,
                                        {
                                            className: h()(nt, null == u ? void 0 : u.inner),
                                            paddingBottom: c,
                                            paddingTop: o,
                                            amount: e,
                                            itemsAmountPerRow: v,
                                            visibleRowsAmount: C,
                                            startRowIndex: E,
                                            cellHeight: n,
                                        },
                                        a,
                                    ),
                            )
                        );
                    },
                    rt = 'VirtualGridWithFade_scrollAreaFade_94',
                    ut = ['api', 'children', 'classNames'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const it = (e) => {
                    let t = e.api,
                        n = e.children,
                        a = e.classNames,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, ut);
                    const u = (0, s.useState)(!0),
                        l = u[0],
                        o = u[1],
                        c = t.scrollApi;
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = c.getBounds()[1];
                                o(Math.abs(e - c.animationScroll.scrollPosition.goal) > 0.1);
                            };
                            return (
                                c.events.on('change', e),
                                c.events.on('recalculateContent', e),
                                () => {
                                    c.events.off('change', e), c.events.off('recalculateContent', e);
                                }
                            );
                        }, [c]),
                        i().createElement(
                            at,
                            st(
                                {
                                    api: t,
                                    classNames: Object.assign({}, a, {
                                        scrollClassName: h()(null == a ? void 0 : a.scrollClassName, l && rt),
                                    }),
                                },
                                r,
                            ),
                            n,
                        )
                    );
                };
                var lt = n(9480),
                    ot = n(7078);
                var ct = n(9690),
                    dt = n(3649);
                const mt = (e, t) => e.split(',').includes(t),
                    _t = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let gt, Et;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(gt || (gt = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(Et || (Et = {}));
                const pt = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: u = '',
                        size: s = gt.extraSmall,
                        type: l = Et.colored,
                        className: o,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, dt.BN)(a)}${e ? '_elite' : ''}`,
                            _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return i().createElement(
                            'div',
                            {
                                className: h()(
                                    _t.base,
                                    _t[`base__size${(0, dt.e)(s)}`],
                                    _t[`base__type${(0, dt.e)(l)}`],
                                    o,
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: h()(_t.level, null == c ? void 0 : c.level) },
                                (0, ct.HG)(r),
                            ),
                            i().createElement('div', {
                                className: h()(
                                    _t.type,
                                    e && _t[`type__elite${(0, dt.e)(s)}`],
                                    _t[`type__${s}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${_})` } : void 0,
                            }),
                            mt(u, 'premiumIGR') && i().createElement('div', { className: _t.premiumIGR }),
                            i().createElement(
                                'div',
                                { className: h()(_t.name, null == c ? void 0 : c.name) },
                                d ? n : t,
                            ),
                        );
                    },
                    ht = 'ListCardAlert_base_52',
                    bt = 'ListCardAlert_glow_1c',
                    vt = 'ListCardAlert_icon_d2',
                    ft = ({ className: e, tooltipArgs: t }) =>
                        i().createElement(
                            'div',
                            { className: h()(ht, e) },
                            i().createElement('div', { className: bt }),
                            t
                                ? i().createElement(V.i, t, i().createElement('div', { className: vt }))
                                : i().createElement('div', { className: vt }),
                        ),
                    At = 'VehicleIcon_base_80',
                    Ct = 'VehicleIcon_icon_cc',
                    Ft = 'VehicleIcon_noImageLabel_dc',
                    wt = i().memo(function ({ techName: e, className: t }) {
                        const n = R.images.gui.maps.shop.vehicles.c_180x135.$dyn(e);
                        return i().createElement(
                            'div',
                            { className: h()(At, t) },
                            i().createElement('div', {
                                className: Ct,
                                style: {
                                    backgroundImage: `url(${null != n ? n : R.images.gui.maps.shop.vehicles.c_180x135.empty_tank()})`,
                                },
                            }),
                            !n &&
                                i().createElement('div', { className: Ft }, R.strings.crew.common.imageNotAvailable()),
                        );
                    }),
                    yt = 'Content_base_23',
                    kt = 'Content_base__default_f7',
                    Dt = 'Content_base__selected_0c',
                    Bt = 'Content_base__unclickable_b6',
                    St = 'Content_vehicleIcon_bd',
                    It = 'Content_tooltipLayer_e4',
                    Tt = 'Content_selectedBackground_53',
                    Nt = 'Content_isInInventory_7d',
                    Lt = 'Content_premiumIcon_43',
                    xt = 'Content_vehicle_dd',
                    Ot = 'Content_vehicleType_a4',
                    Rt = 'Content_premiumVehicleName_d3',
                    Mt = ({
                        isSelected: e,
                        isPremium: t,
                        isElite: n,
                        techName: a,
                        isInInventory: r,
                        isTrainingAvailable: u,
                        name: s,
                        type: l,
                        nation: o,
                        tier: c,
                        tags: d,
                        vehicleCD: m,
                        onClick: _,
                        className: g,
                    }) =>
                        i().createElement(
                            'div',
                            {
                                className: h()(yt, e ? Dt : kt, !u && Bt, g),
                                onMouseEnter: () => {
                                    u && y.$.playHighlight();
                                },
                                onClick: () => {
                                    u && _ && (_(), y.$.playClick());
                                },
                            },
                            e && i().createElement('div', { className: Tt }),
                            i().createElement(wt, { techName: a, className: St }),
                            r && i().createElement('div', { className: Nt }),
                            i().createElement(pt, {
                                isElite: n,
                                vehicleName: s,
                                vehicleShortName: s,
                                vehicleType: l,
                                vehicleNation: o,
                                vehicleLvl: c,
                                tags: d,
                                className: xt,
                                classNames: { typeIcon: Ot, name: t ? Rt : void 0 },
                                type: Et.whiteSpanish,
                            }),
                            i().createElement(
                                ot.t,
                                { args: { tooltipId: 'inventoryVehicle', vehicleCD: m } },
                                i().createElement('div', { className: It }),
                            ),
                            t &&
                                i().createElement(ft, {
                                    tooltipArgs: {
                                        header: R.strings.crew.tankChange.tooltip.premium.header(),
                                        body: R.strings.crew.tankChange.tooltip.premium.body(),
                                    },
                                    className: Lt,
                                }),
                        );
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const Pt = (0, G.Pi)(({ index: e, className: t }) => {
                        const n = z(),
                            a = n.model,
                            r = n.controls,
                            u = lt.U2(a.vehicleList.get(), e);
                        if (!u) throw Error(`Index ${e} is out of vehicle list range`);
                        return i().createElement(
                            Mt,
                            Ht({}, u, { className: t, onClick: () => r.selectVehicle(u.vehicleCD) }),
                        );
                    }),
                    Wt = 'VehicleList_base_20',
                    jt = 'VehicleList_grid_f5',
                    zt = 'VehicleList_gridWrapper_a7',
                    $t = 'VehicleList_emptyState_33',
                    Gt = 'VehicleList_item_c8',
                    Zt = (0, G.Pi)(() => {
                        const e = (() => {
                                const e = Qe.Vertical.useVerticalScrollApi(),
                                    t = de(),
                                    n = (0, s.useCallback)((e, n = !0) => t.trigger('scrollToIndex', e, n), [t]),
                                    a = (0, s.useCallback)((e, n) => t.trigger('layoutCalculated', e, n), [t]),
                                    r = (0, s.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, s.useMemo)(
                                    () => ({
                                        scrollToIndex: n,
                                        layoutCalculated: a,
                                        startRowIndexChanged: r,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [n, a, r, e, t.off, t.on],
                                );
                            })(),
                            t = z(),
                            n = t.model,
                            a = t.controls,
                            r = n.vehicleList.get().length;
                        return i().createElement(
                            'div',
                            { id: 'vehicles_list', className: Wt },
                            i().createElement(
                                'div',
                                { className: zt },
                                r > 0
                                    ? i().createElement(
                                          it,
                                          {
                                              amount: r,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: jt },
                                              api: e,
                                          },
                                          (e) => i().createElement(Pt, { key: e, index: e, className: Gt }),
                                      )
                                    : i().createElement(
                                          ae,
                                          {
                                              warningText: R.strings.crew.tankmanList.emptyState.noFilteredItems(),
                                              buttonType: $.L.primary,
                                              onClick: a.resetFilters,
                                              className: $t,
                                          },
                                          R.strings.crew.tankmanList.emptyState.button.resetFilers(),
                                      ),
                            ),
                        );
                    }),
                    Vt = 'TankChangeApp_base_2b',
                    Ut = 'TankChangeApp_widget_22',
                    qt = 'TankChangeApp_flagIcon_6c',
                    Yt = 'TankChangeApp_topButtons_98',
                    Xt = 'TankChangeApp_content_4f',
                    Kt = i().memo(function () {
                        const e = z(),
                            t = e.model,
                            n = e.controls,
                            a = (0, E.GS)().mediaHeight;
                        var r;
                        return (
                            (r = n.closeWithEsc),
                            g(m.n.ESCAPE, r),
                            i().createElement(
                                'div',
                                { className: Vt },
                                i().createElement(A, { className: qt, nation: t.nation.get(), size: v.c1080x454 }),
                                i().createElement(
                                    'div',
                                    { className: Xt },
                                    i().createElement(w, {
                                        title: R.strings.crew.tankChange.title(),
                                        theme: F.TankChange,
                                    }),
                                    i().createElement(P.p, {
                                        popoverDirection: a < E.Aq.Medium ? c.IC.Left : c.IC.Bottom,
                                    }),
                                    i().createElement(Zt, null),
                                ),
                                i().createElement('div', { className: Ut }, i().createElement(H.O, null)),
                                i().createElement(M, {
                                    onBackClick: n.back,
                                    backButtonLabel: t.backButtonLabel.get(),
                                    onCloseClick: n.hangar,
                                    closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                                    className: t.isButtonBarVisible.get() && Yt,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        i().createElement(j, null, i().createElement(u.z, null, i().createElement(Kt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2857: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => o });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6373),
                    s = n(6179),
                    i = n.n(s),
                    l = n(8699);
                const o = (0, s.memo)(({ classMix: e, targetId: t }) =>
                    i().createElement(
                        u.i,
                        {
                            header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                            body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            targetId: t,
                        },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.base, e) },
                            i().createElement('div', { className: l.Z.icon }),
                        ),
                    ),
                );
            },
            9367: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => d });
                var a = n(6483),
                    r = n.n(a),
                    u = n(9987),
                    s = n(6179),
                    i = n.n(s);
                const l = 'AlertCounter_base_f3',
                    o = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: r()(l, t) },
                            i().createElement(u.A, { value: e, className: o }),
                            !e && i().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            5563: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => g, r: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(7078),
                    s = n(2603),
                    i = n(771),
                    l = n(3649),
                    o = n(9916),
                    c = n(6179),
                    d = n.n(c),
                    m = n(130);
                let _;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(_ || (_ = {}));
                const g = (0, c.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = i.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: c = _.Normal,
                    }) => {
                        const g = e === i.sU,
                            E = g ? { tooltipId: s.M4 } : { tooltipId: s.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            u.t,
                            { targetId: a, args: E, isEnabled: t !== i.y$ },
                            d().createElement(
                                'div',
                                { className: r()(m.Z.base, m.Z[`base__${c}`], g && m.Z.base__untrained, n) },
                                g
                                    ? d().createElement('div', { className: m.Z.icon })
                                    : d().createElement(
                                          'div',
                                          { className: r()(m.Z.percent, e === i.yb && m.Z.percent__full) },
                                          (0, l.dL)(o.Z5.getNumberFormat(100 * e, o.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => h });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u);
                const i = 'NumberRange_base_5e',
                    l = 'NumberRange_base__animation_79',
                    o = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = s().memo(function ({ from: e, to: t, className: n }) {
                        return s().createElement(
                            'div',
                            { className: r()(i, e <= 0 && l, n) },
                            s().createElement('div', { className: r()(o, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: d }, '/'),
                                    s().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    g = 'NumberRangeWithLabel_title_94',
                    E = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
                    h = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: i, to: l }) => {
                        const o = (0, u.useMemo)(
                            () => ({
                                left: i !== l ? 7 * String(i).length + 4 : Math.round((7 * String(i).length) / 2),
                            }),
                            [i, l],
                        );
                        return s().createElement(
                            'div',
                            { className: r()(_, n) },
                            s().createElement('div', { className: g }, e),
                            s().createElement(
                                'div',
                                { className: E },
                                s().createElement(m, { from: i, to: l }),
                                t &&
                                    s().createElement('div', {
                                        style: o,
                                        className: r()(p, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            2768: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => l, y: () => o });
                var a = n(6483),
                    r = n.n(a),
                    u = n(6179),
                    s = n.n(u),
                    i = n(4458);
                let l;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(l || (l = {}));
                const o = s().memo(function ({ iconName: e, size: t = l.c24x24, className: n }) {
                    var a;
                    const u = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                    return s().createElement('div', {
                        style: null !== u ? { backgroundImage: `url(${u})` } : void 0,
                        className: r()(i.Z.base, i.Z[`base__${t}`], n),
                    });
                });
            },
            8617: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => b });
                var a = n(6483),
                    r = n.n(a),
                    u = n(771),
                    s = n(9480),
                    i = n(6179),
                    l = n.n(i),
                    o = n(5563),
                    c = n(8018),
                    d = n(5108),
                    m = n(4091),
                    _ = n(552),
                    g = n(8326),
                    E = n(5855),
                    p = n(3591);
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const b = ({
                    data: e,
                    dataToCompare: t,
                    classes: n,
                    tankmanID: a = u.y$,
                    size: i = E.Ow.c24x24,
                    collapseType: b = E.t6.None,
                    isSkillTooltipEnabled: v = !1,
                    isAcceleratedTrainingVisible: f = !1,
                    isNewSkillAnimated: A = !1,
                    isEfficiencyVisible: C = !1,
                    isBonusSkillsVisible: F = !0,
                    tooltipsTargetId: w = R.invalid('resId'),
                    tooltipArgs: y,
                    blinkStyle: k,
                    children: D,
                }) => {
                    const B = e.majorSkills,
                        S = e.bonusSkills,
                        I = e.skillsEfficiency,
                        T = (null == t ? void 0 : t.skillsEfficiency) || I,
                        N = (0, c.Y4)(I),
                        L = void 0 !== t && t.skillsEfficiency !== I,
                        x = N !== c.H$.Normal || C || L,
                        O = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        H = M || S,
                        P = s.lN(H),
                        W = F && H.length > 0,
                        j = A || void 0 !== t,
                        z = (null == O ? void 0 : O.length) === u.GT,
                        $ = (0, p.Ld)(b, H.length, x, N !== c.H$.Low && void 0 !== P && P.level < u.I),
                        G = {
                            size: i,
                            efficiencyState: N,
                            tooltipData: { targetId: w, isEnabled: v, tankmanID: a, args: y },
                        };
                    return l().createElement(
                        'div',
                        { className: r()(g.Z.base, g.Z[`base__${i}`], null == n ? void 0 : n.base) },
                        x &&
                            l().createElement(
                                d.r,
                                { blinkStyle: k, isEnabled: L && j },
                                l().createElement(o.A, {
                                    efficiencyValue: T,
                                    tankmanID: a,
                                    className: g.Z.efficiency,
                                    size: (0, p.h7)(i, W),
                                    targetId: w,
                                }),
                            ),
                        D,
                        l().createElement(
                            'div',
                            { className: g.Z.rows },
                            j
                                ? l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(
                                          m.s,
                                          h(
                                              {
                                                  skills: B,
                                                  possibleSkills: O,
                                                  blinkStyle: k,
                                                  isAcceleratedTrainingVisible: f,
                                                  isNewSkillAnimated: A,
                                                  isSkillsEfficiencyLearning: L,
                                              },
                                              G,
                                          ),
                                      ),
                                      W &&
                                          l().createElement(
                                              m.s,
                                              h(
                                                  {
                                                      skills: S,
                                                      skillType: E.W.Bonus,
                                                      possibleSkills: M,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: $,
                                                      blinkStyle: k,
                                                      isNewSkillAnimated: A,
                                                      isAllMajorSkillsLearned: z,
                                                  },
                                                  G,
                                              ),
                                          ),
                                  )
                                : l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(_.X, h({ skills: B, isAcceleratedTrainingVisible: f }, G)),
                                      W &&
                                          l().createElement(
                                              _.X,
                                              h(
                                                  {
                                                      skills: S,
                                                      skillType: E.W.Bonus,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: $,
                                                  },
                                                  G,
                                              ),
                                          ),
                                  ),
                        ),
                    );
                };
            },
            6177: (e, t, n) => {
                'use strict';
                n.d(t, { I: () => h });
                var a = n(6483),
                    r = n.n(a),
                    u = n(2686),
                    s = n(126),
                    i = n(6373),
                    l = n(3138),
                    o = n(3112),
                    c = n(6179),
                    d = n.n(c),
                    m = n(7030),
                    _ = n(2582),
                    g = n(7160),
                    E = n(5855),
                    p = n(1890);
                const h = d().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: h }) {
                    const b = (0, c.useState)(_.yZ.Stop),
                        v = b[0],
                        f = b[1],
                        A = (0, o.V)(),
                        C =
                            h === E.Ow.c44x44
                                ? ((e) => ({
                                      width: 96,
                                      height: 96,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 2, columns: 21 },
                                      getChunkPath: (0, s.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                      ),
                                  }))(e)
                                : ((e) => ({
                                      width: 64,
                                      height: 64,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 1, columns: 24 },
                                      getChunkPath: (0, s.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                      ),
                                  }))(e),
                        F = (0, s.q)(C),
                        w = h === E.Ow.c44x44 ? 60 : 36,
                        y = (0, m.useSpring)(
                            () => ({
                                from: { x: 0 },
                                to: { x: l.O.view.remToPx(w) },
                                config: { duration: 300, easing: g.qb },
                                delay: 600 - 100 * t,
                            }),
                            [t, w, A],
                        )[0];
                    return (
                        (0, c.useEffect)(() => {
                            const e = setTimeout(() => f(_.yZ.Play), 100 * (n - 1) - 100 * t);
                            return () => clearTimeout(e);
                        }, [t, n]),
                        d().createElement(
                            i.i,
                            { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                            d().createElement(
                                m.animated.div,
                                { style: y, className: r()(p.Z.base, p.Z[`base__${h}`], a) },
                                d().createElement(
                                    'div',
                                    { className: p.Z.icon },
                                    d().createElement(u.At, {
                                        width: C.width,
                                        height: C.height,
                                        frameCount: C.frameCount,
                                        getImageSource: F,
                                        loop: !1,
                                        state: v,
                                        style: { transform: `scale(${A})` },
                                    }),
                                ),
                            ),
                        )
                    );
                });
            },
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { E: () => c });
                var a = n(2686),
                    r = n(126),
                    u = n(6179),
                    s = n.n(u),
                    i = n(2582),
                    l = n(6253),
                    o = n(5147);
                const c = ({ type: e, state: t }) => {
                    const n = ((e, t) => ({
                            width: 24,
                            height: 24,
                            frameCount: 42,
                            chunk: { count: 1, columns: 42, rows: 1 },
                            getChunkPath: (0, r.V)(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                        }))(e, t),
                        c = (0, r.q)(n),
                        d = (0, u.useState)(i.yZ.Stop),
                        m = d[0],
                        _ = d[1];
                    return (
                        (0, u.useEffect)(() => {
                            const e = () => {
                                _(i.yZ.Play);
                            };
                            return (0, o.L)(e), () => (0, o.r)(e);
                        }, []),
                        s().createElement(a.At, {
                            width: n.width,
                            height: n.height,
                            frameCount: n.frameCount,
                            getImageSource: c,
                            loop: !1,
                            state: m,
                            onAnimationDone: () => {
                                _(i.yZ.Stop);
                            },
                            className: l.Z.base,
                        })
                    );
                };
            },
            5147: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                n.d(t, { L: () => l, r: () => o });
                const u = new Map();
                let s = null;
                const i = () => {
                        u.size
                            ? s ||
                              (s = window.setInterval(() => {
                                  for (var e, t = a(u.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : s && (clearInterval(s), (s = null));
                    },
                    l = (e) => {
                        u.set(e, e), i();
                    },
                    o = (e) => {
                        u.delete(e), i();
                    };
            },
            3413: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => l, r: () => i });
                var a = n(6179),
                    r = n.n(a),
                    u = n(8147),
                    s = n(9108);
                let i;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(i || (i = {}));
                const l = r().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: n,
                    className: a,
                    children: l,
                }) {
                    return n === i.Scale
                        ? r().createElement(s.Y, { isEnabled: !0, className: a }, l)
                        : n === i.FadeIn
                          ? r().createElement(u.U, { size: e, key: t, className: a }, l)
                          : r().createElement('div', { className: a }, l);
                });
            },
            5108: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => s });
                var a = n(6179),
                    r = n.n(a),
                    u = n(7030);
                const s = r().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return r().createElement(u.animated.div, { style: t && e ? e : void 0 }, n);
                });
            },
            8147: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(3112),
                    r = n(6179),
                    u = n.n(r),
                    s = n(7030),
                    i = n(7160),
                    l = n(5855);
                const o = ({ size: e, children: t, className: n }) => {
                    const r = (0, a.V)(),
                        o = e === l.Ow.c44x44 ? 48 : 26,
                        c = (0, s.useSpring)({
                            from: { opacity: 0, marginRight: -o * r },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: i.Fs },
                            delay: 800,
                        });
                    return u().createElement(s.animated.div, { style: c, className: n }, t);
                };
            },
            7765: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => m });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3138),
                    s = n(3649),
                    i = n(6179),
                    l = n.n(i),
                    o = n(7030),
                    c = n(7160),
                    d = n(8110);
                const m = l().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                    const a = (0, o.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        i = (0, o.useSpring)(() => ({
                            from: { x: u.O.view.remToPx(-5), opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            config: { duration: 300, easing: c.qb },
                            delay: 700,
                        }))[0],
                        m = (0, o.useSpring)(
                            () => ({
                                from: { opacity: 0 },
                                to: [{ opacity: 1 }, { opacity: 0 }],
                                config: { duration: 150, easing: c.qb },
                            }),
                            [t],
                        )[0];
                    return l().createElement(
                        'div',
                        { className: r()(d.Z.base, d.Z[`base__${e}`]) },
                        l().createElement(
                            o.animated.div,
                            { style: n ? i : void 0, className: r()(d.Z.level, d.Z.level__skillLost) },
                            a.val.to((e) => (0, s.dL)(Math.floor(e))),
                        ),
                        l().createElement(
                            o.animated.div,
                            { style: n ? Object.assign({}, i, m) : m, className: r()(d.Z.level, d.Z.level__skillBlur) },
                            a.val.to((e) => (0, s.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => i });
                var a = n(6179),
                    r = n.n(a),
                    u = n(7030),
                    s = n(7160);
                const i = r().memo(function ({ isEnabled: e, className: t, children: n }) {
                    const i = (0, u.useSpring)(() => ({ from: { scale: 1 } })),
                        l = i[0],
                        o = i[1];
                    return (
                        (0, a.useEffect)(() => {
                            e &&
                                o.start({
                                    from: { scale: 1 },
                                    to: [{ scale: 1.2 }, { scale: 1 }],
                                    delay: 200,
                                    config: { duration: 400, easing: s.Fs },
                                });
                        }, [e, o]),
                        r().createElement(u.animated.div, { style: e ? l : void 0, className: t }, n)
                    );
                });
            },
            4055: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => o });
                var a = n(3112),
                    r = n(6179),
                    u = n.n(r),
                    s = n(7030),
                    i = n(7160),
                    l = n(5855);
                const o = u().memo(function ({ size: e, className: t, children: n }) {
                    const r = e === l.Ow.c44x44 ? 48 : 26,
                        o = (0, a.V)(),
                        c = (0, s.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -r * o }],
                                config: { duration: 400, easing: i.Fs },
                            }),
                            [o, r],
                        )[0];
                    return u().createElement(s.animated.div, { style: c, className: t }, n);
                });
            },
            4091: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => v });
                var a = n(6483),
                    r = n.n(a),
                    u = n(2344),
                    s = n(9480),
                    i = n(4385),
                    l = n(3649),
                    o = n(6179),
                    c = n.n(o),
                    d = n(2857),
                    m = n(8018),
                    _ = n(5855),
                    g = n(3591),
                    E = n(6177),
                    p = n(7713),
                    h = n(9772),
                    b = n(4722);
                const v = ({
                    skills: e,
                    skillType: t = _.W.Major,
                    possibleSkills: n,
                    isAcceleratedTrainingVisible: a = !1,
                    collapseLayout: o = _.hj.None,
                    efficiencyState: v,
                    size: f,
                    tooltipData: A,
                    blinkStyle: C,
                    isSkillsEfficiencyLearning: F = !1,
                    isAllMajorSkillsLearned: w = !1,
                    isNewSkillAnimated: y = !1,
                    className: k,
                }) => {
                    const D = void 0 === n ? e : n,
                        B = (0, u.D9)(e),
                        S = (0, u.D9)(D),
                        I = B && s.lN(B),
                        T = s.lN(e),
                        N = (0, g.dv)(D),
                        L = s.lN(D),
                        x = n ? e.length - n.length : 0,
                        O = v !== m.H$.Low || F,
                        R = (0, g.Nn)(D);
                    return c().createElement(
                        'div',
                        { className: r()(b.Z.base, b.Z[`base__${f}`], b.Z[`base__collapse${(0, l.e)(o)}`], k) },
                        (0, g.oo)(e, B, D, S, (e, n, a) => {
                            const u = (0, g.mg)(e);
                            return c().createElement(p.k, {
                                key: a,
                                index: a,
                                skill: e,
                                skillState: u,
                                skillType: t,
                                previousSkill: S && s.U2(S, a),
                                skillAnimationType: n,
                                size: f,
                                skillsSignature: R,
                                efficiencyState: v,
                                tooltipData: A,
                                blinkStyle: C,
                                isNewSkillAnimated: y,
                                className: r()(
                                    b.Z.skill,
                                    b.Z[`skill__state${(0, l.e)(u)}`],
                                    e === L && b.Z.skill__last,
                                    e === N && b.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        O &&
                            c().createElement(h.H, {
                                skillsAmountDiff: x,
                                size: f,
                                wasLearned: I && T && I.level !== T.level,
                                skillType: t,
                                isAllMajorSkillsLearned: w,
                                skill: T,
                                possibleSkill: L,
                                blinkStyle: C,
                                className: b.Z.level,
                            }),
                        a &&
                            c().createElement(d.L, {
                                classMix: b.Z.acceleratedTrainingIcon,
                                targetId: null == A ? void 0 : A.targetId,
                            }),
                        x > 0 &&
                            (0, i.K)(x, (e) =>
                                c().createElement(E.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: x,
                                    type: t,
                                    className: b.Z.lostSkill,
                                    size: f,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => v });
                var a = n(6483),
                    r = n.n(a),
                    u = n(771),
                    s = n(9480),
                    i = n(3649),
                    l = n(6179),
                    o = n.n(l),
                    c = n(2857),
                    d = n(8018),
                    m = n(5855),
                    _ = n(3591),
                    g = n(1606),
                    E = n(9561),
                    p = n(2202),
                    h = n(4722);
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const v = ({
                    skills: e,
                    collapseLayout: t = m.hj.None,
                    skillType: n = m.W.Major,
                    efficiencyState: a,
                    size: l,
                    tooltipData: v,
                    className: f,
                    isAcceleratedTrainingVisible: A,
                }) => {
                    const C = s.lN(e),
                        F = (0, _.dv)(e),
                        w = a !== d.H$.Low && (null == C ? void 0 : C.level) !== u.I;
                    return o().createElement(
                        'div',
                        { className: r()(h.Z.base, h.Z[`base__${l}`], h.Z[`base__collapse${(0, i.e)(t)}`], f) },
                        s.UI(e, (e, t) => {
                            const u = (0, _.mg)(e);
                            return o().createElement(
                                p.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: v,
                                    skillType: n,
                                    className: r()(
                                        h.Z.skill,
                                        h.Z[`skill__state${(0, i.e)(u)}`],
                                        e === C && h.Z.skill__last,
                                        e === F && h.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                o().createElement(g.U, b({ size: l, type: n, efficiencyState: a, skillState: u }, e)),
                            );
                        }),
                        w && C && o().createElement(E.T, { skillLevel: C.level, className: h.Z.level }),
                        A &&
                            o().createElement(c.L, {
                                classMix: h.Z.acceleratedTrainingIcon,
                                targetId: null == v ? void 0 : v.targetId,
                            }),
                    );
                };
            },
            9772: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => d });
                var a = n(771),
                    r = n(6179),
                    u = n.n(r),
                    s = n(5855),
                    i = n(5108),
                    l = n(7765),
                    o = n(9108),
                    c = n(9561);
                const d = ({
                    skillsAmountDiff: e,
                    size: t,
                    skillType: n,
                    wasLearned: r,
                    isAllMajorSkillsLearned: d,
                    skill: m,
                    possibleSkill: _,
                    blinkStyle: g,
                    className: E,
                }) => {
                    const p = _ || m,
                        h = void 0 !== m && void 0 !== _ ? _.level - m.level : 0,
                        b = e > 0,
                        v = e < 0 || h > 0;
                    return !p ||
                        (p.level === a.I && 0 === h) ||
                        ((null == _ ? void 0 : _.level) === a.I && n === s.W.Bonus && h > 0 && !d)
                        ? null
                        : b || (h < 0 && 0 === e)
                          ? u().createElement(l.G, { size: t, level: p.level, withSlideOut: b })
                          : u().createElement(
                                o.Y,
                                { isEnabled: Boolean(r) },
                                u().createElement(
                                    i.r,
                                    { blinkStyle: g, isEnabled: v },
                                    u().createElement(c.T, { skillLevel: p.level, isHighlighted: v, className: E }),
                                ),
                            );
                };
            },
            9561: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3649),
                    s = n(6179),
                    i = n.n(s),
                    l = n(3591),
                    o = n(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                    i().createElement(
                        'div',
                        { className: r()(o.Z.base, t && o.Z.base__highlighted, n) },
                        (0, u.dL)(e > 0 && e < 0.01 ? 0.01 : (0, l.iv)(e)),
                    );
            },
            2202: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => l });
                var a = n(3415),
                    r = n(6179),
                    u = n.n(r),
                    s = n(3591);
                const i = ['className', 'children'];
                const l = (e) => {
                    let t = e.className,
                        n = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    return u().createElement(a.l, { tooltipArgs: (0, s.iR)(r), className: t }, n);
                };
            },
            7713: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => E });
                var a = n(771),
                    r = n(6179),
                    u = n.n(r),
                    s = n(5855),
                    i = n(9152),
                    l = n(3413),
                    o = n(5108),
                    c = n(4055),
                    d = n(2202),
                    m = n(1606);
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const g = (e, t) => (e ? l.r.Scale : t ? l.r.FadeIn : l.r.None),
                    E = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: r,
                        skillType: E,
                        size: p,
                        efficiencyState: h,
                        tooltipData: b,
                        skillsSignature: v,
                        blinkStyle: f,
                        isNewSkillAnimated: A = !1,
                        skillAnimationType: C = s.Qm.None,
                        className: F,
                    }) => {
                        const w = C === s.Qm.Blink || C === s.Qm.SlideOutAndBlink,
                            y = C === s.Qm.SlideOutAndBlink || C === s.Qm.SlideOut,
                            k = C === s.Qm.FadeIn,
                            D = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: b,
                                skillType: E,
                            };
                        return A && t.name === a.jw && p === s.Ow.c24x24
                            ? u().createElement(
                                  d.O,
                                  _({}, D, { className: F }),
                                  u().createElement(i.E, { type: E, state: r }),
                              )
                            : u().createElement(
                                  u().Fragment,
                                  null,
                                  n &&
                                      y &&
                                      u().createElement(
                                          c.w,
                                          { size: p, className: F, key: n.name },
                                          u().createElement(
                                              o.r,
                                              { blinkStyle: f, isEnabled: w },
                                              u().createElement(
                                                  m.U,
                                                  _({ size: p, type: E, efficiencyState: h, skillState: r }, n),
                                              ),
                                          ),
                                      ),
                                  u().createElement(
                                      l.L,
                                      {
                                          size: p,
                                          skillsSignature: v,
                                          className: F,
                                          animationType: g(C === s.Qm.ScaleUp, k),
                                      },
                                      u().createElement(
                                          d.O,
                                          D,
                                          u().createElement(
                                              o.r,
                                              { blinkStyle: f, isEnabled: w },
                                              u().createElement(
                                                  m.U,
                                                  _({ size: p, type: E, efficiencyState: h, skillState: r }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    };
            },
            1606: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => E });
                var a = n(6483),
                    r = n.n(a),
                    u = n(771),
                    s = n(3649),
                    i = n(6179),
                    l = n.n(i),
                    o = n(2768),
                    c = n(8018),
                    d = n(5855),
                    m = n(3591),
                    _ = n(699);
                const g = { [d.Ow.c24x24]: o.F.c22x22, [d.Ow.c44x44]: o.F.c52x52 },
                    E = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        icon: i,
                        name: E,
                        skillState: p,
                        hasInstruction: h,
                        className: b,
                    }) => {
                        const v = (0, m.Ot)(E, p, h, t, n),
                            f = (!h && n === c.H$.Untrained) || t,
                            A = i === u.jw;
                        return l().createElement(
                            'div',
                            {
                                className: r()(
                                    _.Z.base,
                                    _.Z[`base__type${(0, s.e)(a)}`],
                                    _.Z[`base__state${(0, s.e)(p)}`],
                                    _.Z[`base__border${(0, s.e)(v)}`],
                                    _.Z[`base__${e}`],
                                    f && _.Z.base__disabled,
                                    b,
                                ),
                            },
                            l().createElement('div', {
                                className: _.Z.background,
                                style:
                                    a === d.W.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${v}')`,
                                          }
                                        : void 0,
                            }),
                            A && p === d.Lm.Learned && l().createElement('div', { className: _.Z.newSkillHighLight }),
                            l().createElement(o.y, { iconName: i, size: g[e], className: _.Z.icon }),
                            f && l().createElement('div', { className: _.Z.disabledOverlay }),
                        );
                    };
            },
            5855: (e, t, n) => {
                'use strict';
                let a, r, u, s, i, l, o;
                n.d(t, { Lm: () => o, Ow: () => i, Qm: () => r, W: () => l, hj: () => u, t6: () => a, u0: () => s }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.Default = 'default'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap');
                    })(a || (a = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(r || (r = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })(u || (u = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(s || (s = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(l || (l = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(o || (o = {}));
            },
            3591: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Ld: () => E,
                    Nn: () => o,
                    Ot: () => m,
                    dv: () => d,
                    h7: () => g,
                    iR: () => _,
                    iv: () => v,
                    mg: () => c,
                    oo: () => b,
                });
                var a = n(2603),
                    r = n(771),
                    u = n(9480),
                    s = n(5563),
                    i = n(8018),
                    l = n(5855);
                const o = (e) => u.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < r.I ? l.Lm.Learning : l.Lm.Learned),
                    d = (e) => u.dF(e, (e) => e.level === r.I),
                    m = (e, t, n, a, u = i.H$.Normal) =>
                        e === r.jw
                            ? l.u0.LightYellow
                            : u === i.H$.Untrained || a
                              ? t === l.Lm.Learning
                                  ? l.u0.Yellow
                                  : l.u0.Grey
                              : u === i.H$.Low
                                ? n
                                    ? l.u0.Grey
                                    : l.u0.Red
                                : t === l.Lm.Learning
                                  ? l.u0.Yellow
                                  : l.u0.Grey,
                    _ = ({ name: e, level: t, customName: n, skillType: u, skillIndex: s, tooltipData: i }) => {
                        const o = { targetId: i.targetId, isEnabled: i.isEnabled };
                        return e === r.jw
                            ? u === l.W.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: i.tankmanID, skillIndex: s }, i.args),
                                      },
                                      o,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      o,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: a.HZ,
                                              tankmanID: i.tankmanID,
                                              skillName: e,
                                              isBonus: u === l.W.Bonus,
                                              level: t,
                                              customName: n,
                                          },
                                          i.args,
                                      ),
                                  },
                                  o,
                              );
                    },
                    g = (e, t) => (e === l.Ow.c44x44 ? s.r.Large : t ? s.r.Big : s.r.Normal),
                    E = (e, t, n, a) => {
                        if (t !== r.vA) return l.hj.None;
                        switch (e) {
                            case l.t6.Default:
                                if (n && a) return l.hj.NoMargins;
                                break;
                            case l.t6.Overlap:
                                if (n) return a ? l.hj.Overlap : l.hj.ReducedMargins;
                                if (a) return l.hj.OnlyLearningOverlap;
                                break;
                            case l.t6.ExtraOverlap:
                                return n && a
                                    ? l.hj.ExtraOverlapWithLevelAndEfficiency
                                    : n
                                      ? l.hj.ExtraOverlapWithEfficiency
                                      : a
                                        ? l.hj.ExtraOverlapWithLevel
                                        : l.hj.ExtraOverlap;
                        }
                        return l.hj.None;
                    },
                    p = (e, t) => {
                        const n = u.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    h = (e, t) => {
                        const n = u.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    b = (e, t, n, a, s) => {
                        if (!a || !t) return u.UI(n, (e, t) => s(e, l.Qm.None, t));
                        const i = new Map(u.UI(t, ({ name: e, level: t }) => [e, t])),
                            o = new Map(u.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return u.UI(n, (u, d) => {
                            const m = u.name,
                                _ = u.level,
                                g = m === r.jw,
                                E = p(e, d),
                                b = g ? h(e, d) : o.get(m),
                                v = g ? h(t, d) : i.get(m),
                                f = p(n, d - 1),
                                A = p(a, d),
                                C = p(a, d + 1);
                            let F = l.Qm.None;
                            return (
                                c || m !== C || f === A || g || E !== r.jw
                                    ? g && d === n.length - 1 && c
                                        ? (F = l.Qm.FadeIn)
                                        : (!g && !o.has(m)) || (void 0 === E && g) || (b !== _ && _ === r.I)
                                          ? (F = l.Qm.Blink)
                                          : v !== b && (F = l.Qm.ScaleUp)
                                    : ((c = !0), (F = o.has(m) ? l.Qm.SlideOut : l.Qm.SlideOutAndBlink)),
                                s(u, F, d)
                            );
                        });
                    },
                    v = (e, t = 2) => {
                        const n = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * n) / n : e;
                    };
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => o });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3649),
                    s = n(6179),
                    i = n.n(s),
                    l = n(3938);
                let o;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(o || (o = {}));
                const c = ({ name: e, size: t = o.c100x60, classMix: n, isSkin: a = !1 }) => {
                    const c = (0, s.useMemo)(() => {
                        try {
                            let n = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            a && (n = n.$dyn('crewSkins'));
                            const r = n.$dyn((0, u.BN)(e));
                            if (!r) throw Error;
                            return { backgroundImage: `url(${r})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, a]);
                    return i().createElement('div', { style: c, className: r()(l.Z.base, l.Z[`base__${t}`], n) });
                };
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    u = n(3457),
                    s = n(2106),
                    i = n(9987),
                    l = n(6179),
                    o = n.n(l),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = o().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        l = e.children,
                        _ = e.type,
                        g = void 0 === _ ? s.L.secondary : _,
                        E = e.size,
                        p = void 0 === E ? s.q.small : E,
                        h = e.hasIndicator,
                        b = void 0 === h || h,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, d);
                    return o().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        o().createElement(u.u5, m({ type: g, size: p, mixClass: c.Z.button }, v), l),
                        o().createElement('div', { className: c.Z.overlay }),
                        b && o().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            o().createElement(
                                'div',
                                { className: c.Z.counter },
                                o().createElement(i.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, n) => {
                'use strict';
                n.d(t, { BH: () => u, Fs: () => s, ei: () => a, qb: () => r });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    u = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    s = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { Gc: () => i, H$: () => l, Xd: () => u, Y4: () => o, gO: () => s, wP: () => r });
                var a = n(771);
                n(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                const u = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let s;
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
                })(s || (s = {}));
                const i = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let l;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(l || (l = {}));
                const o = (e) => (e === a.sU ? l.Untrained : e < a.yb ? l.Low : l.Normal);
            },
            4119: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => un });
                var a = n(4029),
                    r = n(6179),
                    u = n.n(r),
                    s = n(5415),
                    i = n(3403),
                    l = n(3215),
                    o = n(4598),
                    c = n(9480),
                    d = n(3946),
                    m = n(4828);
                const _ = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    g = (0, l.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'selectedSlotIdx',
                                        'isDisabled',
                                        'hasDog',
                                        'vehicleName',
                                        'vehicleType',
                                        'currentLayoutID',
                                        'previousLayoutID',
                                        'isCrewLocked',
                                        'nation',
                                    ]),
                                    {
                                        slots: e.array('slots', []),
                                        buttonsBar: e.object('buttonsBar'),
                                        crewOperations: e.object('buttonsBar.crewOperations'),
                                        crewBooks: e.object('buttonsBar.crewBooks'),
                                        acceleratedTraining: e.object('buttonsBar.acceleratedTraining'),
                                        wotPlus: e.object('buttonsBar.wotPlus'),
                                    },
                                ),
                                n = (0, d.Om)(
                                    () =>
                                        c.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: c.UI(e.roles, o.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: c.UI(e.tankman.roles, o.yR),
                                                    skills: {
                                                        skillsEfficiency: e.tankman.skills.skillsEfficiency,
                                                        majorSkills: c.UI(e.tankman.skills.majorSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                        bonusSkills: c.UI(e.tankman.skills.bonusSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                    },
                                                    possibleSkills: {
                                                        skillsEfficiency: e.tankman.possibleSkills.skillsEfficiency,
                                                        majorSkills: c.UI(e.tankman.possibleSkills.majorSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                        bonusSkills: c.UI(e.tankman.possibleSkills.bonusSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                    },
                                                }),
                                            }),
                                        ),
                                    { equals: o.jv },
                                ),
                                a = (0, d.Om)(() => Boolean(c.sE(n(), (e) => -1 === e.tankman.tankmanID))),
                                r = (0, d.Om)(() => 1 === t.slots.get().length),
                                u = (0, d.Om)((e) => t.selectedSlotIdx.get() === e),
                                s = (0, d.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                i = (0, d.Om)((e) => {
                                    var t;
                                    return null == (t = c.U2(n(), e)) ? void 0 : t.tankman;
                                }),
                                l = (0, d.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (n = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: _.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isCurrentLayoutSkillsTraining:
                                                e === R.views.lobby.crew.SkillsTrainingView('resId'),
                                            isPreviousLayoutHangar: n === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: _.includes(n),
                                            isPreviousLayoutQuickTraining:
                                                n === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                n === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: n === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, n;
                                }),
                                g = (0, d.Om)(() => {
                                    const e = l(),
                                        t = e.isCurrentLayoutHangar,
                                        n = e.isCurrentLayoutQuickTraining,
                                        a = e.isCurrentLayoutSkillsTraining;
                                    return !(r() || t || n || a);
                                }),
                                E = (0, d.Om)(() => !r() && t.buttonsBar.get().isVisible),
                                p = (0, d.Om)(() => {
                                    return (e = t.currentLayoutID.get()), m.AB[e] || m.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: n,
                                    isSlotSelected: u,
                                    isAnySlotSelected: s,
                                    getSlotTankman: i,
                                    isAnyEmptySlots: a,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: E,
                                    getLayoutInfo: l,
                                    getUiLoggingParentScreen: p,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onSlotClick: e.createCallback((e, t) => ({ slotIdx: e, tankmanID: t }), 'onSlotClick'),
                            onChangeCrewClick: e.createCallback(
                                (e, t) => ({ slotIdx: e, tankmanID: t }),
                                'onChangeCrewClick',
                            ),
                            onCrewBooksClick: e.createCallbackNoArgs('buttonsBar.onCrewBooksClick'),
                            onAcceleratedTrainingClick: e.createCallbackNoArgs('buttonsBar.onAcceleratedTrainingClick'),
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    E = g[0],
                    p = g[1];
                var h = n(6483),
                    b = n.n(h),
                    v = n(6373),
                    f = n(2056);
                let A;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(A || (A = {}));
                const C = 'ButtonsBar_base_9c',
                    F = 'ButtonsBar_button_d1',
                    w = 'ButtonsBar_button__crewOperaions_70',
                    y = 'ButtonsBar_button__crewBooks_b4',
                    k = 'ButtonsBar_button__toggle_64';
                var D = n(3457),
                    B = n(9987),
                    S = n(3649);
                const I = 'CrewBookButton_base_da',
                    T = 'CrewBookButton_button_ee',
                    N = 'CrewBookButton_icon_11',
                    L = 'CrewBookButton_discount_6b',
                    x = 'CrewBookButton_counter_5d',
                    O = (0, i.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = p(),
                            a = n.model,
                            r = n.controls,
                            s = a.crewBooks.get(),
                            i = r.onCrewBooksClick,
                            l = s.isDisabled || t;
                        return u().createElement(
                            v.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, S.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: s.totalAmount,
                                }),
                            },
                            u().createElement(
                                'div',
                                { id: 'crew_book_button', className: b()(I, e) },
                                u().createElement(
                                    D.u5,
                                    { type: D.L$.primary, mixClass: T, disabled: l, onClick: i },
                                    u().createElement('div', { className: N }),
                                ),
                                !l &&
                                    '0' !== s.newAmount &&
                                    u().createElement(
                                        'div',
                                        { className: x },
                                        u().createElement(B.A, { value: s.newAmount }),
                                    ),
                                !l && s.hasDiscount && u().createElement('div', { className: L }),
                            ),
                        );
                    });
                var M = n(3616);
                const H = ['children'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, H);
                    return u().createElement(
                        M.Z,
                        P(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            n,
                        ),
                        t,
                    );
                };
                var j = n(4489);
                let z;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(z || (z = {}));
                var $ = n(1943);
                const G = 'CrewOperationsButton_base_e3',
                    Z = 'CrewOperationsButton_button_8e',
                    V = 'CrewOperationsButton_icon_0c',
                    U = 'CrewOperationsButton_autoReturnIcon_f0',
                    q = (0, i.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = p().model,
                            a = ((e) => {
                                const t = (0, $.Jp)(m.D9);
                                return (n) => t({ action: m.eX.Click, parentScreen: e, item: n });
                            })(n.computes.getUiLoggingParentScreen()),
                            r = n.crewOperations.get();
                        return u().createElement(
                            'div',
                            { id: 'crew_operations_button', className: b()(G, e) },
                            u().createElement(
                                W,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => a(m.x3.CrewOperationsButton),
                                },
                                u().createElement(
                                    v.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(
                                            D.u5,
                                            { type: D.L$.primary, mixClass: Z, disabled: t },
                                            u().createElement('div', { className: V }),
                                        ),
                                        r.isAutoReturnOn && u().createElement('div', { className: U }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Y = n(9631);
                const X = 'CrewToggleButton_base_03',
                    K = 'CrewToggleButton_button_89',
                    Q = 'CrewToggleButton_iconContainer_f9',
                    J = 'CrewToggleButton_icon_a7';
                let ee;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(ee || (ee = {}));
                const te = (0, r.memo)(({ type: e, state: t, isDisabled: n, onClick: a, classMix: s }) => {
                        const i = (0, r.useMemo)(() => {
                            const n = t === A.Disabled ? A.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return u().createElement(
                            'div',
                            { className: b()(X, s) },
                            u().createElement(
                                Y.C,
                                {
                                    type: D.L$.primary,
                                    isActive: t === A.On,
                                    disabled: n || t === A.Disabled,
                                    className: K,
                                    onClick: a,
                                },
                                u().createElement(
                                    'div',
                                    { className: Q },
                                    u().createElement('div', { className: J, style: i }),
                                ),
                            ),
                        );
                    }),
                    ne = {
                        [A.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [A.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [A.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [A.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    ae = (0, i.Pi)(({ isWidgetDisabled: e }) => {
                        const t = p(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            s = n.wotPlus.get(),
                            i = a.onAcceleratedTrainingClick,
                            l = a.onWotPlusClick,
                            o = ne[r.state];
                        return u().createElement(
                            'div',
                            { className: C },
                            u().createElement(q, { classMix: b()(F, w), isWidgetDisabled: e }),
                            u().createElement(O, { classMix: b()(F, y), isWidgetDisabled: e }),
                            r.state !== A.Hidden &&
                                u().createElement(
                                    v.i,
                                    { header: o.header(), body: o.body() },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(te, {
                                            type: ee.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: i,
                                            classMix: b()(F, k),
                                        }),
                                    ),
                                ),
                            s.state !== A.Hidden &&
                                u().createElement(
                                    f.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(te, {
                                            type: ee.WotPlus,
                                            state: s.state,
                                            isDisabled: e || s.isDisabled,
                                            onClick: l,
                                            classMix: b()(F, k),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    re = 'CrewWidgetApp_base_cc',
                    ue = 'CrewWidgetApp_buttonsBar_e5',
                    se = 'CrewWidgetApp_slotsList_ee';
                var ie = n(7727),
                    le = n(7030),
                    oe = n(8018),
                    ce = n(7160),
                    de = n(7077);
                const me = 'WidgetTankmanIcon_icon_0f',
                    _e = 'WidgetTankmanIcon_icon__small_24',
                    ge = 'WidgetTankmanIcon_icon__cropped_bd',
                    Ee = ({ name: e, isSkin: t = !1, isCropped: n = !1, className: a }) => {
                        const r = (0, s.GS)().mediaSize < s.cJ.Large;
                        return u().createElement(de.G, {
                            name: e,
                            size: r && n ? de.U.c100x60Barracks : de.U.c158x118,
                            isSkin: t,
                            classMix: b()(me, r && n && _e, !r && n && ge, a),
                        });
                    },
                    pe = {
                        base: 'Layer_base_ff',
                        base__hoverGlow: 'Layer_base__hoverGlow_11',
                        base__selectedGlow: 'Layer_base__selectedGlow_b7',
                        base__hoverGlowHigh: 'Layer_base__hoverGlowHigh_0e',
                        base__selectedGlowHigh: 'Layer_base__selectedGlowHigh_2f',
                        base__disabledLayer: 'Layer_base__disabledLayer_75',
                        base__disabledLayerHigh: 'Layer_base__disabledLayerHigh_51',
                        base__selectedTankmanHighlight: 'Layer_base__selectedTankmanHighlight_15',
                        base__selectedTankmanHighlight2: 'Layer_base__selectedTankmanHighlight2_36',
                        base__untrainedTankmanHighlight: 'Layer_base__untrainedTankmanHighlight_db',
                        base__selectedTankmanHighlightHigh: 'Layer_base__selectedTankmanHighlightHigh_47',
                        base__selectedTankmanHighlightHigh2: 'Layer_base__selectedTankmanHighlightHigh2_4f',
                        base__untrainedTankmanHighlightHigh: 'Layer_base__untrainedTankmanHighlightHigh_20',
                        base__tankmanSlotHover: 'Layer_base__tankmanSlotHover_a9',
                        base__tankmanSlotHoverHigh: 'Layer_base__tankmanSlotHoverHigh_4e',
                        base__visible: 'Layer_base__visible_fb',
                    };
                let he;
                !(function (e) {
                    (e.HoverGlow = 'hoverGlow'),
                        (e.SelectedGlow = 'selectedGlow'),
                        (e.Disabled = 'disabledLayer'),
                        (e.SelectedHighlight = 'selectedTankmanHighlight'),
                        (e.SelectedHighlight2 = 'selectedTankmanHighlight2'),
                        (e.TankmanSlotHover = 'tankmanSlotHover'),
                        (e.UntrainedTankmanHighlight = 'untrainedTankmanHighlight');
                })(he || (he = {}));
                const be = ({ type: e, size: t, isHigh: n, className: a, isVisible: r = !0 }) => {
                        const s = n ? e + 'High' : e;
                        return u().createElement('div', {
                            className: b()(pe.base, pe[`base__${s}`], r && pe.base__visible, a),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${s})` },
                        });
                    },
                    ve = 'BaseSlot_base_97',
                    fe = 'BaseSlot_base__hovered_61',
                    Ae = 'BaseSlot_base__inactive_7e',
                    Ce = 'BaseSlot_base__high_2c',
                    Fe = 'BaseSlot_delimiter_f8',
                    we = 'BaseSlot_layer_cb',
                    ye = ({
                        isHigh: e,
                        size: t,
                        onClick: n,
                        children: a,
                        isSelected: s = !1,
                        isDisabled: i,
                        isEnabledForMouse: l,
                        isEmpty: o = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, r.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            g = m && (!s || (!o && c.isCurrentLayoutMemberChange)),
                            E = g && !o && !c.isCurrentLayoutHangar;
                        return u().createElement(
                            'div',
                            {
                                className: b()(
                                    ve,
                                    e && Ce,
                                    (m || s) && !c.isCurrentLayoutHangar && fe,
                                    (s || !l) && Ae,
                                ),
                                onClick: n,
                                onMouseEnter: () => {
                                    l && !s && (ie.$.playHighlight(), _(!0));
                                },
                                onMouseLeave: () => {
                                    _(!1);
                                },
                            },
                            !c.isCurrentLayoutMemberChange &&
                                u().createElement(be, {
                                    type: he.SelectedGlow,
                                    size: t,
                                    isHigh: e,
                                    isVisible: s,
                                    className: we,
                                }),
                            u().createElement(be, {
                                type: he.HoverGlow,
                                size: t,
                                isHigh: e,
                                isVisible: E,
                                className: we,
                            }),
                            u().createElement(be, {
                                type: he.TankmanSlotHover,
                                size: t,
                                isHigh: e,
                                isVisible: g,
                                className: we,
                            }),
                            i &&
                                u().createElement(be, {
                                    type: he.Disabled,
                                    size: t,
                                    isHigh: e,
                                    isVisible: !0,
                                    className: we,
                                }),
                            a,
                            u().createElement('div', { className: Fe }),
                        );
                    },
                    ke = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: a = !1,
                        children: s,
                        className: i,
                        isTankmanMode: l,
                    }) => {
                        const o = (0, le.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: ce.qb }, pause: a }),
                                [a],
                            )[0],
                            c = (0, r.useMemo)(
                                () =>
                                    n.isCurrentLayoutHangar ||
                                    n.isCurrentLayoutQuickTraining ||
                                    n.isCurrentLayoutSkillsTraining ||
                                    l
                                        ? e
                                        : (!n.isPreviousLayoutHangar && !n.isPreviousLayoutBarrack) || a
                                          ? t
                                          : o,
                                [n, a, o, e, t, l],
                            );
                        return u().createElement(le.animated.div, { className: i, style: c }, s);
                    },
                    De = 'DogSlot_base_8f',
                    Be = 'DogSlot_icon_ba',
                    Se = 'DogSlot_container_63',
                    Ie = 'DogSlot_roleAndName_c9',
                    Te = 'DogSlot_role_5c',
                    Ne = 'DogSlot_name_9c',
                    Le = 'DogSlot_btnDetails_b7',
                    xe = { transform: 'translateX(0rem)' },
                    Oe = (0, i.Pi)(({ isDisabled: e, layoutInfo: t, size: n }) => {
                        const a = p(),
                            s = a.model,
                            i = a.controls,
                            l = s.nation.get(),
                            o = i.onDogMoreInfoClick,
                            c = (0, r.useCallback)(() => {
                                !e && (0, ie.G)(oe.gO.RUDY);
                            }, [e]),
                            d = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && o();
                                },
                                [o, e],
                            ),
                            m = (0, le.useSpring)(
                                () => ({
                                    from: xe,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: ce.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            _ = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(l);
                        return u().createElement(
                            v.i,
                            { header: _.header(), body: _.body() },
                            u().createElement(
                                'div',
                                null,
                                u().createElement(
                                    ye,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        size: n,
                                    },
                                    u().createElement(
                                        ke,
                                        {
                                            startState: xe,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: De,
                                            isTankmanMode: !1,
                                        },
                                        u().createElement(
                                            le.animated.div,
                                            { style: m },
                                            u().createElement(Ee, { name: 'ussr_dog_1', isCropped: !0, className: Be }),
                                        ),
                                        u().createElement(
                                            'div',
                                            { className: Se },
                                            u().createElement(
                                                'div',
                                                { className: Ie },
                                                u().createElement('div', { className: Te }),
                                                u().createElement(
                                                    'div',
                                                    { className: Ne },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(l).name(),
                                                ),
                                            ),
                                            u().createElement(
                                                'div',
                                                { className: Le },
                                                u().createElement(
                                                    D.u5,
                                                    { onClick: d },
                                                    R.strings.crew_widget.btnDetails(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Re = n(9916);
                const Me = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: u,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const l = (0, r.useCallback)(() => {
                                (0, Re.c9)(Re.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: u,
                                }),
                                    ie.$.playYes();
                            }, [u, t, n, a]),
                            o = (0, r.useCallback)(() => {
                                (0, Re.c9)(Re.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === z.RIGHT)(e) && l();
                                },
                                [i, l],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && o();
                            }, [s, o]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    He = ['children'];
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const We = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, He);
                        return u().createElement(
                            Me,
                            Pe({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    je = 'ChangeCrewButton_base_0f',
                    ze = 'ChangeCrewButton_base__inactive_77',
                    $e = 'ChangeCrewButton_normalState_07',
                    Ge = 'ChangeCrewButton_normalState__hide_db',
                    Ze = 'ChangeCrewButton_hoverState_68',
                    Ve = 'ChangeCrewButton_hoverState__show_89',
                    Ue = (0, i.Pi)(({ isSelected: e, isLocked: t, mainRole: n, isFemale: a }) => {
                        const s = p().model,
                            i = (0, r.useState)(!1),
                            l = i[0],
                            o = i[1],
                            c = (0, $.Sr)(m.D9, {
                                item: m.x3.ChangeButtonTooltip,
                                action: m.eX.Viewed,
                                parentScreen: s.computes.getUiLoggingParentScreen(),
                            }),
                            d = (0, r.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, S.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, oe.Gc)(n, a, oe.wP.Objective),
                                              }),
                                          ],
                                [t, a, n],
                            ),
                            _ = d[0],
                            g = d[1];
                        return u().createElement(
                            v.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            u().createElement(
                                'div',
                                {
                                    className: b()(je, (t || e) && ze),
                                    onMouseEnter: () => {
                                        c.onShow(), t || e || (ie.$.playHighlight(), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        c.onHide(), o(!1);
                                    },
                                },
                                u().createElement('div', { className: b()($e, l && Ge) }),
                                u().createElement('div', { className: b()(Ze, (e || l) && Ve) }),
                            ),
                        );
                    }),
                    qe = 'CrewSlot_base_ac',
                    Ye = 'CrewSlot_changeCrew_02',
                    Xe = 'CrewSlot_content_5b',
                    Ke = 'CrewSlot_content__withChangeCrewButton_4e',
                    Qe = 'CrewSlot_layer_49';
                var Je = n(7078),
                    et = n(2603),
                    tt = n(771);
                const nt = 'SpecializationAndName_base_ef',
                    at = 'SpecializationAndName_roleWrapper_87',
                    rt = 'SpecializationAndName_role_55',
                    ut = 'SpecializationAndName_role__withGap_35',
                    st = 'SpecializationAndName_name_aa',
                    it = 'SpecializationAndName_name__highlighted_1b',
                    lt = ({ roles: e, tankmanID: t = tt.y$, slotIdx: n, name: a, hasPostProgression: r = !1 }) =>
                        u().createElement(
                            'div',
                            { className: nt },
                            u().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.rs, slotIdx: n, tankmanID: t },
                                },
                                u().createElement(
                                    'div',
                                    { className: at },
                                    c.UI(e, (e, t) =>
                                        u().createElement('div', {
                                            key: `role__${e}`,
                                            className: b()(rt, t > 0 && ut),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            u().createElement('div', { className: b()(st, r && it) }, a),
                        ),
                    ot = 'EmptySlotContent_base_77',
                    ct = 'EmptySlotContent_base__high_d7',
                    dt = 'EmptySlotContent_tankmanIcon_07',
                    mt = 'EmptySlotContent_icon_a8',
                    _t = 'EmptySlotContent_iconContainer_25',
                    gt = 'EmptySlotContent_specialization_1f',
                    Et = 'EmptySlotContent_specialization__disabled_3d',
                    pt = 'EmptySlotContent_vehicle_55',
                    ht = { transform: 'translateX(0rem)', opacity: 1 },
                    bt = { transform: 'translateX(-70rem)', opacity: 0 },
                    vt = (0, r.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: a,
                            isDisabled: s,
                            isSelected: i,
                            slotIdx: l,
                            blinkStyle: o,
                            qtTankmanIconStyle: d,
                            isHigh: m,
                        }) => {
                            const _ = (0, le.useSpring)(
                                    () => ({
                                        from: ht,
                                        to: bt,
                                        config: { duration: 200, easing: ce.ei },
                                        immediate: !0,
                                        pause: i,
                                    }),
                                    [i],
                                ),
                                g = _[0],
                                E = _[1],
                                p = (0, r.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || E.start({ reset: !0, reverse: !0 });
                                }, [E, t]),
                                h = c.U2(e, 0) || '',
                                v = R.strings.crew_widget.vehicleWithName.$dyn((0, S.BN)(a)),
                                f = (0, S.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(h),
                                });
                            return u().createElement(
                                'div',
                                { className: b()(ot, m && ct), onMouseEnter: p, onMouseLeave: p },
                                u().createElement(
                                    'div',
                                    { className: dt },
                                    u().createElement(
                                        le.animated.div,
                                        { className: _t, style: d },
                                        u().createElement(Ee, { name: 'empty', className: mt, isCropped: !m }),
                                        u().createElement(
                                            le.animated.div,
                                            { className: _t, style: s ? void 0 : o },
                                            u().createElement(Ee, { name: 'emptyRed', className: mt, isCropped: !m }),
                                        ),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: b()(gt, s && Et) },
                                    u().createElement(lt, { slotIdx: l, roles: e, name: f }),
                                ),
                                u().createElement(
                                    le.animated.div,
                                    { className: pt, style: i ? void 0 : g },
                                    (0, S.uF)(v, { name: n }),
                                ),
                            );
                        },
                    );
                var ft = n(8617),
                    At = n(5855);
                const Ct = 'TankmanInfo_base_69',
                    Ft = 'TankmanInfo_base__disabled_36',
                    wt = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    yt = 'TankmanInfo_specialization_77',
                    kt = 'TankmanInfo_specialization__withBonusSkills_b1',
                    Dt = 'TankmanInfo_skillsContainer_17',
                    Bt = 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    St = (e, t) => (e ? At.t6.None : t < s.cJ.Large ? At.t6.ExtraOverlap : At.t6.Overlap),
                    It = ({ slotIdx: e, tankman: t, isDisabled: n, layoutInfo: a, blinkStyle: r }) => {
                        const i = t.skills.bonusSkills.length > 0,
                            l = (0, s.GS)().mediaSize;
                        return u().createElement(
                            'div',
                            { className: b()(Ct, n && Ft) },
                            u().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.v$, tankmanID: t.tankmanID },
                                },
                                u().createElement('div', { className: wt }),
                            ),
                            u().createElement(
                                'div',
                                { className: b()(yt, i && kt) },
                                u().createElement(lt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            u().createElement(
                                'div',
                                { className: b()(Dt, i && Bt) },
                                u().createElement(ft.n, {
                                    tankmanID: t.tankmanID,
                                    size: At.Ow.c24x24,
                                    data: t.skills,
                                    dataToCompare:
                                        a.isCurrentLayoutQuickTraining || a.isCurrentLayoutSkillsTraining
                                            ? t.possibleSkills
                                            : void 0,
                                    tooltipsTargetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isSkillTooltipEnabled: !0,
                                    blinkStyle: r,
                                    isNewSkillAnimated: a.isCurrentLayoutHangar,
                                    isAcceleratedTrainingVisible:
                                        !a.isCurrentLayoutQuickTraining && -1 !== t.tankmanID && t.isLessMastered,
                                    collapseType: St(a.isCurrentLayoutHangar, l),
                                }),
                            ),
                        );
                    },
                    Tt = 'QuickTrainingTankmanSlotContent_base_8d',
                    Nt = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Lt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    xt = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Ot = 'QuickTrainingTankmanSlotContent_layer_10',
                    Rt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Mt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Ht = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Pt = { opacity: 0 },
                    Wt = [{ opacity: 1 }, { opacity: 0 }],
                    jt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: a,
                            layoutInfo: s,
                            isDisabled: i,
                            size: l,
                        }) => {
                            const o = (0, r.useRef)(t.lastSkillLevelFull),
                                c = (0, r.useRef)(t.skills.majorSkills.length),
                                d = (0, le.useSpring)(() => ({ from: Rt })),
                                m = d[0],
                                _ = d[1],
                                g = (0, le.useSpring)(() => ({ from: Pt })),
                                E = g[0],
                                p = g[1],
                                h = (0, r.useRef)(!1);
                            return (
                                (0, r.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? h.current ||
                                          (_.start({
                                              from: Rt,
                                              to: Mt,
                                              reverse: false,
                                              config: { duration: 300, easing: ce.BH },
                                          }),
                                          (h.current = !0))
                                        : h.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > o.current
                                                ? (_.start({
                                                      from: Mt,
                                                      to: Ht,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }),
                                                  (o.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  p.start({
                                                      from: Pt,
                                                      to: Wt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }))
                                                : _.start({ reset: !0, reverse: !0 }),
                                            (h.current = !1))
                                          : ((o.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [_, p, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                u().createElement(
                                    'div',
                                    { className: Tt },
                                    u().createElement(
                                        le.animated.div,
                                        { style: E },
                                        u().createElement(be, {
                                            type: he.SelectedHighlight,
                                            size: l,
                                            isHigh: t.roles.length > 1,
                                            className: Ot,
                                        }),
                                    ),
                                    u().createElement(
                                        le.animated.div,
                                        { className: Lt, style: a },
                                        u().createElement(Ee, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            className: xt,
                                        }),
                                    ),
                                    u().createElement(le.animated.div, { className: Nt, style: m }),
                                    u().createElement(It, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: s,
                                        blinkStyle: n,
                                        isDisabled: i,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const n = e.tankman,
                                a = t.tankman;
                            return (
                                n.hasPossibleProgress === a.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const n = e.length;
                                    for (let u = 0; u < n; u++) {
                                        var a, r;
                                        if (
                                            (null == (a = c.U2(e, u)) ? void 0 : a.name) !==
                                            (null == (r = c.U2(t, u)) ? void 0 : r.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(n.skills.majorSkills, a.skills.majorSkills) &&
                                n.lastSkillLevelFull === a.lastSkillLevelFull &&
                                n.possibleSkillsAmount === a.possibleSkillsAmount &&
                                n.lastPossibleSkillLevel === a.lastPossibleSkillLevel &&
                                n.skillsEfficiency === a.skillsEfficiency &&
                                n.possibleSkillsEfficiency === a.possibleSkillsEfficiency
                            );
                        },
                    ),
                    zt = 'TankmanSlotContent_base_00',
                    $t = 'TankmanSlotContent_icon_ef',
                    Gt = (0, r.memo)(({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a, blinkStyle: r }) =>
                        u().createElement(
                            'div',
                            { className: zt },
                            u().createElement(Ee, {
                                name: t.icon,
                                isCropped: 0 === t.skills.bonusSkills.length,
                                isSkin: t.isInSkin,
                                className: $t,
                            }),
                            u().createElement(It, {
                                slotIdx: e,
                                tankman: t,
                                layoutInfo: n,
                                isDisabled: a,
                                blinkStyle: r,
                            }),
                        ),
                    ),
                    Zt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            vehicleName: r,
                            vehicleType: s,
                            isDisabled: i,
                            isSelected: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            size: m,
                            isHigh: _,
                        }) =>
                            -1 === n.tankmanID
                                ? u().createElement(vt, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: r,
                                      vehicleType: s,
                                      isDisabled: i,
                                      isSelected: l,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: _,
                                  })
                                : a.isCurrentLayoutQuickTraining
                                  ? u().createElement(jt, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: o,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: i,
                                        size: m,
                                    })
                                  : u().createElement(Gt, {
                                        slotIdx: e,
                                        tankman: n,
                                        layoutInfo: a,
                                        isDisabled: i,
                                        blinkStyle: o,
                                    }),
                    ),
                    Vt = { transform: 'translateX(0rem)' },
                    Ut = { transform: 'translateX(41rem)' },
                    qt = { opacity: 0 },
                    Yt = { opacity: 1 },
                    Xt = (0, i.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            isSelected: s,
                            isAnySlotSelected: i,
                            isDisabled: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: d,
                            qtTankmanIconStyle: _,
                            size: g,
                        }) => {
                            const E = p(),
                                h = E.model,
                                v = E.controls,
                                f = ((e, t) => {
                                    const n = (0, $.Jp)(m.D9),
                                        a = (0, j.f)(
                                            () => n({ action: m.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            m.tL,
                                        );
                                    return (e) => {
                                        e.button === z.RIGHT && a();
                                    };
                                })(h.computes.getUiLoggingParentScreen(), m.x3.SlotContextMenu),
                                A = v.onSlotClick,
                                C = v.onChangeCrewClick,
                                F = h.computes.isChangeCrewButtonVisible(),
                                w = h.computes.isTankmanMode(),
                                y = h.isCrewLocked.get(),
                                k = h.vehicleName.get(),
                                D = h.vehicleType.get(),
                                B = -1 === n.tankmanID ? t.length > 1 : n.skills.bonusSkills.length > 0,
                                S = !l && n.isInteractive && (!a.isCurrentLayoutQuickTraining || i),
                                I = (0, r.useCallback)(() => {
                                    S && !w && ((0, ie.G)(R.sounds.yes1()), A(e, n.tankmanID));
                                }, [e, n, A, w, S]),
                                T = (0, r.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), y || ((0, ie.G)(R.sounds.yes1()), C(e, n.tankmanID));
                                    },
                                    [e, n, C, y],
                                ),
                                N = (0, r.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return u().createElement(
                                We,
                                {
                                    args: N,
                                    isEnabled: !l && !a.isCurrentLayoutSkillsTraining,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: f,
                                },
                                u().createElement(
                                    'div',
                                    null,
                                    u().createElement(
                                        ye,
                                        {
                                            isHigh: B,
                                            onClick: I,
                                            isSelected: s,
                                            isDisabled: l,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: S,
                                            size: g,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: qe },
                                            n.hasWarning &&
                                                u().createElement(be, {
                                                    type: he.UntrainedTankmanHighlight,
                                                    size: g,
                                                    isHigh: B,
                                                    className: Qe,
                                                }),
                                            s &&
                                                u().createElement(be, {
                                                    type: w ? he.SelectedHighlight2 : he.SelectedHighlight,
                                                    size: g,
                                                    isHigh: B,
                                                    className: Qe,
                                                }),
                                            u().createElement(
                                                ke,
                                                {
                                                    startState: Vt,
                                                    endState: Ut,
                                                    layoutInfo: a,
                                                    isPaused: !F,
                                                    className: b()(Xe, F && Ke),
                                                    isTankmanMode: w,
                                                },
                                                u().createElement(Zt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: a,
                                                    isDisabled: l,
                                                    vehicleName: k,
                                                    vehicleType: D,
                                                    blinkSlotStyle: o,
                                                    blinkTankmanStyle: d,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: s,
                                                    size: g,
                                                    isHigh: B,
                                                }),
                                            ),
                                            F &&
                                                u().createElement(
                                                    'div',
                                                    { onClick: T },
                                                    u().createElement(
                                                        ke,
                                                        {
                                                            startState: qt,
                                                            endState: Yt,
                                                            layoutInfo: a,
                                                            className: Ye,
                                                            isTankmanMode: w,
                                                        },
                                                        u().createElement(Ue, {
                                                            isSelected: a.isCurrentLayoutMemberChange && s,
                                                            isLocked: y,
                                                            mainRole: c.U2(t, 0) || '',
                                                            isFemale: -1 !== n.tankmanID && n.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Kt = 'SlotsList_base_5f',
                    Qt = 'SlotsList_base__hangar_8b';
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const en = { transform: 'translateX(0rem)' },
                    tn = { transform: 'translateX(15rem)' },
                    nn = (0, i.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n, size: a }) => {
                        const s = p().model,
                            i = s.computes.isAnyEmptySlots(),
                            l = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: ce.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            o = l[0],
                            c = l[1];
                        (0, r.useEffect)(() => {
                            i ? c.resume() : c.pause();
                        }, [c, i]);
                        const d = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: ce.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            m = d[0],
                            _ = d[1];
                        (0, r.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining || e.isCurrentLayoutSkillsTraining ? _.resume() : _.pause();
                        }, [_, e.isCurrentLayoutQuickTraining, e.isCurrentLayoutSkillsTraining]);
                        const g = (0, le.useSpring)(() => ({
                                from: en,
                                to: tn,
                                delay: 200,
                                config: { duration: 300, easing: ce.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            E = (0, r.useCallback)(
                                (n) => t || (e.isCurrentLayoutQuickTraining && -1 === n),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return u().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: b()(Kt, e.isCurrentLayoutHangar && Qt, n) },
                            s.computes
                                .getSlots()
                                .map((t, n) =>
                                    u().createElement(
                                        Xt,
                                        Jt({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${n}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (s.computes.isSlotSelected(t.slotIdx) || s.computes.isTankmanMode()),
                                            isAnySlotSelected: s.computes.isAnySlotSelected(),
                                            isDisabled: E(t.tankman.tankmanID),
                                            blinkSlotStyle: m,
                                            blinkTankmanStyle: o,
                                            qtTankmanIconStyle: g,
                                            size: a,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    an = (0, i.Pi)(() => {
                        const e = p().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo(),
                            r = (0, s.GS)().mediaSize < s.cJ.Large ? 'small' : 'big';
                        return u().createElement(
                            'div',
                            { className: re },
                            e.computes.isButtonBarVisible() &&
                                u().createElement(
                                    'div',
                                    { className: ue },
                                    u().createElement(ae, { isWidgetDisabled: t }),
                                ),
                            u().createElement(nn, { layoutInfo: a, isWidgetDisabled: t, className: se, size: r }),
                            n && u().createElement(Oe, { layoutInfo: a, isDisabled: t, size: r }),
                        );
                    }),
                    rn = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    un = (0, r.memo)(() =>
                        u().createElement(
                            a.z,
                            null,
                            u().createElement(E, { options: rn }, u().createElement(an, null)),
                        ),
                    );
            },
            5801: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => Te });
                var a = n(6179),
                    r = n.n(a),
                    u = n(6483),
                    s = n.n(u),
                    i = n(2106),
                    l = n(6373);
                let o;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(o || (o = {}));
                var c = n(3403),
                    d = n(3415),
                    m = n(9480),
                    _ = n(9631);
                const g = 'FilterTitle_base_a7',
                    E = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    h = 'FilterTitle_discountIcon_30',
                    b = ({ label: e, hasDiscount: t, className: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(g, n) },
                            r().createElement('div', { className: E }, e),
                            t && r().createElement('div', { className: p }, r().createElement('div', { className: h })),
                        );
                let v;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Nation = 'nation'),
                        (e.Location = 'location'),
                        (e.TankmanRole = 'tankmanRole'),
                        (e.TankmanKind = 'tankmanKind'),
                        (e.VehicleGrade = 'vehicleGrade'),
                        (e.VehicleTier = 'vehicleTier'),
                        (e.VehicleType = 'vehicleType'),
                        (e.PersonalDataType = 'personalDataType'),
                        (e.VehicleCD = 'vehicle');
                })(v || (v = {}));
                var f = n(3649);
                const A = 'ToggleIcon_base_59',
                    C = 'ToggleIcon_base__small_3e',
                    F = 'ToggleIcon_icon_e7',
                    w = r().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return r().createElement(
                            'div',
                            { className: s()(A, t && C) },
                            r().createElement('div', {
                                className: s()(F, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var y = n(9690);
                const k = 'VehicleTier_base_9c',
                    D = 'VehicleTier_base__small_fc',
                    B = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: s()(k, t && D) }, (0, y.HG)(e)),
                    S = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_83',
                        icon__nation: 'ToggleButtonIcon_icon__nation_c1',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_d6',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_4b',
                        icon__selected: 'ToggleButtonIcon_icon__selected_ca',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_5e',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_26',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_3b',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_f6',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_a8',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_86',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_11',
                    },
                    I = ({ id: e, icon: t, type: n, isSmall: a = !0, isSelected: u = !1 }) =>
                        n === v.VehicleTier
                            ? r().createElement(B, { isSmall: a, level: Number(e) })
                            : r().createElement(w, {
                                  icon: t,
                                  isSmall: a,
                                  classNames: {
                                      icon: s()(S[`icon__${n}`], S[`icon__${n}${(0, f.e)(e)}`], u && S.icon__selected),
                                  },
                              }),
                    T = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        N.apply(this, arguments)
                    );
                }
                let L;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(L || (L = {}));
                const x = ({ header: e, body: t, contentId: n, targetId: a }) =>
                        n
                            ? { contentId: n, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    O = ({
                        id: e,
                        type: t,
                        label: n,
                        hasDiscount: a,
                        filters: u,
                        onClick: i,
                        className: l,
                        toggleProps: o,
                        theme: c = L.Default,
                    }) => {
                        const g = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: s()(T.base, T[`base__${c}`], l) },
                            g && r().createElement(b, { className: T.title, label: n, hasDiscount: a }),
                            r().createElement(
                                'div',
                                { className: T.content },
                                m.UI(u, ({ id: n, isSelected: a, tooltip: u, icon: l, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: x(u), className: T.toggle },
                                        r().createElement(
                                            _.C,
                                            N({}, o, {
                                                className: s()(T.toggle, null == o ? void 0 : o.className),
                                                isActive: a,
                                                onClick: () => (null == i ? void 0 : i(e, n)),
                                                counter: c,
                                            }),
                                            r().createElement(I, {
                                                id: n,
                                                icon: l,
                                                type: t,
                                                isSmall: g,
                                                isSelected: a,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var M = n(9197);
                const H = (0, n(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'isSearchEnabled',
                                    'searchString',
                                    'searchPlaceholder',
                                    'searchTooltipHeader',
                                    'searchTooltipBody',
                                    'isPopoverEnabled',
                                    'isPopoverHighlighted',
                                    'hasAppliedFilters',
                                    'panelType',
                                    'title',
                                    'popoverTooltipHeader',
                                    'popoverTooltipBody',
                                    'hasDiscountAlert',
                                ]),
                                {
                                    amountInfo: e.object('amountInfo'),
                                    filter: e.object('filter'),
                                    filters: e.array('filter.filters'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            search: e.createCallback((e) => ({ value: e }), 'onSearch'),
                            updateFilter: e.createCallback((e, t) => ({ groupID: e, toggleID: t }), 'onUpdateFilter'),
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        }),
                    ),
                    P = H[0],
                    W = H[1];
                var j = n(3457),
                    z = n(3616),
                    $ = n(1037),
                    G = n(9367);
                const Z = 'PopupButton_base_7c',
                    V = 'PopupButton_popupButtonLabel_ed',
                    U = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    X = 'PopupButton_discountAlert_c8',
                    K = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = $.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: Z },
                            r().createElement('div', { className: V }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                z.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: U },
                                    r().createElement(
                                        _.C,
                                        { type: j.L$.ghost, size: j.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: s()(q, e && Y) }),
                                    ),
                                    t && r().createElement(G.Q, { className: X }),
                                ),
                            ),
                        );
                var Q = n(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ne = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                l.i,
                                Q.Xd,
                                r().createElement(
                                    j.u5,
                                    { mixClass: ee, onClick: e, type: j.L$.ghost, size: j.qE.small },
                                    r().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ae = 'default',
                    re = 'search',
                    ue = 'email',
                    se = 'password',
                    ie = 'normal',
                    le = 'disabled',
                    oe = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ae]: '',
                        [ue]: R.strings.common.input.placeholder.email(),
                        [re]: R.strings.common.input.placeholder.search(),
                        [se]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ae]: 'text', [ue]: 'text', [re]: 'text', [se]: 'password' },
                    ge = { [ae]: '', [ue]: 'Invalid email', [re]: '', [se]: '' },
                    Ee = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
                    return (
                        t !== ue ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var he = n(7727);
                const be = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    ve = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = ae,
                            size: u = de,
                            variant: i = ie,
                            placeholder: l = '',
                            highlighted: o,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: g,
                            onMouseEnter: E,
                            onMouseLeave: p,
                            onMouseDown: h,
                            onMouseUp: b,
                            onClick: v,
                            onChange: f,
                            onClear: A,
                            onFocus: C,
                            onBlur: F,
                        }) => {
                            const w = (0, a.useState)(!1),
                                y = w[0],
                                k = w[1],
                                D = (0, a.useRef)(null),
                                B = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = i !== le,
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S && (k(!0), C && C(e));
                                    },
                                    [S, C],
                                ),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        S && !B.current.mouseOver && (k(!1), F && F(e));
                                    },
                                    [S, F],
                                );
                            (0, a.useEffect)(() => {
                                S && y && d && D.current && D.current.select();
                            }, [d, y, S]);
                            const N = (0, a.useCallback)(
                                    (e) => {
                                        S && f && f(e.target.value);
                                    },
                                    [S, f],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseOver = !0), E && E(e));
                                    },
                                    [S, E],
                                ),
                                x = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            D.current &&
                                            (B.current.mouseDown && D.current.focus(),
                                            (B.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseDown = !0), h && h(e));
                                    },
                                    [S, h],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        S && ((B.current.mouseDown = !1), b && b(e));
                                    },
                                    [S, b],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        if (S && D.current) {
                                            (!y || (y && e.target !== D.current)) && D.current.focus(), v && v(e);
                                        }
                                    },
                                    [y, S, v],
                                ),
                                H = l || me[n],
                                P = Boolean(_),
                                W = s()(
                                    be.base,
                                    be[`base__${u}`],
                                    o && be[`base__${i}`],
                                    y && be.base__focused,
                                    P && be.base__withIcon,
                                    g,
                                ),
                                j = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                z = s()(be.input, be[`input__${n}`]),
                                $ = s()(be.icon, be[`icon__${n}`]),
                                G = s()(be.placeholder, be[`placeholder__${n}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: O,
                                    onMouseUp: R,
                                    onMouseLeave: x,
                                    onClick: M,
                                },
                                !S && r().createElement('div', { className: be.disabled }),
                                j && r().createElement('div', { style: j, className: $ }),
                                r().createElement('input', {
                                    ref: D,
                                    className: z,
                                    type: _e[n],
                                    value: t,
                                    onChange: N,
                                    disabled: !S,
                                    onFocus: I,
                                    onBlur: T,
                                    maxLength: m,
                                }),
                                H && !t && !y && r().createElement('div', { className: G }, H),
                                c &&
                                    r().createElement('div', {
                                        className: be.clear,
                                        onClick: (e) => {
                                            he.$.playClick(), A && A(e);
                                        },
                                        onMouseEnter: he.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    fe = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ae = ({ variant: e, show: t = !0, helperText: n, helperIcon: u, classMix: i }) => {
                        const l = (0, a.useMemo)(() => {
                                const t =
                                    u ||
                                    (function (e) {
                                        return e === oe ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [u, e]),
                            o = s()(fe.base, t && fe.base__shown),
                            c = s()(fe.message, fe[`message__${e}`], i);
                        return r().createElement(
                            'div',
                            { className: o },
                            l && r().createElement('div', { className: fe.icon, style: l }),
                            r().createElement('div', { className: c }, n),
                        );
                    },
                    Ce = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Fe = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ye = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    ke = (e) => {
                        let t = e.componentId,
                            n = e.type,
                            u = void 0 === n ? ae : n,
                            i = e.variant,
                            l = void 0 === i ? ie : i,
                            o = e.size,
                            c = void 0 === o ? de : o,
                            m = e.value,
                            _ = e.tooltipArgs,
                            g = e.helperText,
                            E = void 0 === g ? '' : g,
                            p = e.isValidated,
                            h = void 0 === p || p,
                            b = e.showHelper,
                            v = void 0 === b || b,
                            f = e.error,
                            A = e.options,
                            C = e.onFocus,
                            F = e.onMouseEnter,
                            w = e.onMouseLeave,
                            y = e.onMouseUp,
                            k = e.onMouseDown,
                            D = e.onChange,
                            B = e.classMix,
                            S = e.controlClassMix,
                            I = e.helperClassMix,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Fe);
                        const N = (0, a.useState)(m),
                            L = N[0],
                            x = N[1],
                            O = (0, a.useState)(h),
                            R = O[0],
                            M = O[1],
                            H = (0, a.useMemo)(() => Object.assign({}, ye, A), [A]),
                            P = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: u }),
                            W = (0, a.useCallback)((e) => {
                                e !== P.current.value &&
                                    ((P.current.value = e), (P.current.isChangeHandled = !1), x(e));
                            }, []),
                            j = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    H.performChangeValidation &&
                                        (t = H.changesValidator ? H.changesValidator(e) : pe(e, P.current.type)),
                                        D && D(e, t);
                                },
                                [D, H],
                            ),
                            z = (0, a.useCallback)(() => {
                                P.current.debounceTimeout &&
                                    (window.clearTimeout(P.current.debounceTimeout), (P.current.debounceTimeout = 0));
                            }, []),
                            $ = (0, a.useCallback)(() => W(''), [W]);
                        (0, a.useEffect)(() => () => z(), [z]);
                        const G = (0, a.useCallback)(
                            (e) => {
                                z(),
                                    H.debounceTime
                                        ? (P.current.debounceTimeout = window.setTimeout(() => {
                                              j(e);
                                          }, H.debounceTime))
                                        : j(e);
                            },
                            [j, z, H.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            P.current.isChangeHandled ||
                                P.current.value !== L ||
                                (G(P.current.value), (P.current.isChangeHandled = !0));
                        }, [L, G]),
                            (0, a.useEffect)(() => {
                                P.current.isChangeHandled && m !== P.current.value && ((P.current.value = m), x(m)),
                                    (P.current.type = u);
                            }, [m, u]),
                            (0, a.useEffect)(() => {
                                M(h);
                            }, [h, l]);
                        const Z = (0, a.useCallback)((e) => F && F(e), [F]),
                            V = (0, a.useCallback)(
                                (e) => {
                                    H.disableHighlightOnFocus && R && M(!1), C && C(e);
                                },
                                [R, C, H.disableHighlightOnFocus],
                            ),
                            U = (0, a.useCallback)((e) => y && y(e), [y]),
                            q = (0, a.useCallback)((e) => k && k(e), [k]),
                            Y = (0, a.useCallback)((e) => w && w(e), [w]),
                            X = (0, a.useMemo)(
                                () =>
                                    H.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? Ee.$dyn(`search_${t}`) : '';
                                          })(u, c)
                                        : '',
                                [u, c, H.withTypeIcon],
                            ),
                            K = E || ge[u],
                            Q = Boolean(L),
                            J = f ? ce : l,
                            ee = Boolean(f) || R,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof H.withClear ? Q && H.withClear : Q && u === re),
                                [u, Q, H],
                            ),
                            ne = s()(Ce.base, Ce[`base__${c}`], Ce[`base__${l}`], B);
                        return r().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: Z, onMouseDown: q, onMouseUp: U, onMouseLeave: Y },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    ve,
                                    we(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: X,
                                            size: c,
                                            type: u,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: H.selectOnFocus,
                                            maxLength: H.maxLength,
                                            classMix: S,
                                            onFocus: V,
                                            onChange: W,
                                            onClear: $,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            K &&
                                r().createElement(
                                    'div',
                                    { className: Ce.helper },
                                    r().createElement(Ae, {
                                        variant: J,
                                        show: v && (H.isPermanentHelper || ee),
                                        helperText: f || K,
                                        helperIcon: H.helperIconSource,
                                        classMix: I,
                                    }),
                                ),
                        );
                    },
                    De = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: u, tooltipBody: s }) =>
                        r().createElement(
                            l.i,
                            { header: null != n ? n : void 0, body: s, isEnabled: Boolean(n || s) },
                            r().createElement(ke, {
                                type: re,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: u,
                                onChange: a,
                            }),
                        ),
                    Be = {
                        base: 'FilterPanelWidgetApp_base_1c',
                        titleWrapper: 'FilterPanelWidgetApp_titleWrapper_1b',
                        title: 'FilterPanelWidgetApp_title_ad',
                        filters: 'FilterPanelWidgetApp_filters_0d',
                        counterGlow: 'FilterPanelWidgetApp_counterGlow_df',
                        separator: 'FilterPanelWidgetApp_separator_9e',
                        filterLabel: 'FilterPanelWidgetApp_filterLabel_5b',
                        base__tankChange: 'FilterPanelWidgetApp_base__tankChange_ff',
                        base__memberChange: 'FilterPanelWidgetApp_base__memberChange_18',
                        popupButtonWrapper: 'FilterPanelWidgetApp_popupButtonWrapper_4c',
                        base__personalData: 'FilterPanelWidgetApp_base__personalData_1d',
                        search: 'FilterPanelWidgetApp_search_0e',
                    },
                    Se = (0, c.Pi)(({ popoverDirection: e }) => {
                        const t = W(),
                            n = t.model,
                            a = t.controls,
                            u = n.amountInfo.get(),
                            c = u.from,
                            d = u.to,
                            m = n.panelType.get(),
                            _ = n.filter.get(),
                            g = n.hasAppliedFilters.get(),
                            E = g || (0 === c && 0 === d),
                            p = n.popoverTooltipHeader.get(),
                            h = n.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: s()(Be.base, Be[`base__${m}`]) },
                            r().createElement(
                                'div',
                                { className: Be.titleWrapper },
                                r().createElement(M.C, {
                                    title: n.title.get(),
                                    isGlowVisible: E,
                                    from: c,
                                    to: d,
                                    className: Be.title,
                                    classNames: { counterGlow: Be.counterGlow },
                                }),
                                g && r().createElement(ne, { onClick: a.resetFilter }),
                            ),
                            r().createElement(
                                'div',
                                { className: Be.filters },
                                n.isSearchEnabled.get() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(De, {
                                            value: n.searchString.get(),
                                            onChange: a.search,
                                            className: Be.search,
                                            placeholder: n.searchPlaceholder.get(),
                                            tooltipHeader: n.searchTooltipHeader.get(),
                                            tooltipBody: n.searchTooltipBody.get(),
                                        }),
                                        m === o.Barracks && r().createElement('div', { className: Be.separator }),
                                    ),
                                _.label && r().createElement('div', { className: Be.filterLabel }, _.label),
                                r().createElement(O, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: n.filters.get(),
                                    toggleProps: { type: i.L.ghost },
                                    onClick: a.updateFilter,
                                }),
                                n.isPopoverEnabled.get() &&
                                    r().createElement(
                                        l.i,
                                        {
                                            header: null != p ? p : void 0,
                                            body: null != h ? h : void 0,
                                            isEnabled: Boolean(p || h),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Be.popupButtonWrapper },
                                            r().createElement(K, {
                                                isHighlighted: n.isPopoverHighlighted.get(),
                                                hasDiscountAlert: n.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ie = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Te = r().memo(function ({ popoverDirection: e }) {
                        return r().createElement(P, { options: Ie }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => u, HZ: () => a, M4: () => s, rs: () => i, v$: () => r });
                const a = 'crewPerkGf',
                    r = 'tankman',
                    u = 'skillsEfficiency',
                    s = 'crewSkillUntrained',
                    i = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => l, I: () => u, jw: () => s, sU: () => a, vA: () => i, y$: () => o, yb: () => r });
                const a = -1,
                    r = 1,
                    u = 100,
                    s = 'new_skill',
                    i = 9,
                    l = 6,
                    o = -1;
                let c;
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
                })(c || (c = {}));
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8055: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Counter_base_9e',
                    show: 'Counter_show_be',
                    base__big: 'Counter_base__big_19',
                    base__small: 'Counter_base__small_3b',
                    base__empty: 'Counter_base__empty_98',
                    base__animated: 'Counter_base__animated_40',
                    base__hidden: 'Counter_base__hidden_56',
                    hide: 'Counter_hide_b6',
                    bg: 'Counter_bg_74',
                    value: 'Counter_value_3e',
                    value__text: 'Counter_value__text_d6',
                    base__pattern: 'Counter_base__pattern_71',
                    plus: 'Counter_plus_15',
                    pattern: 'Counter_pattern_83',
                };
            },
            4769: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'PopoverDecorator_base_ed',
                    decorator: 'PopoverDecorator_decorator_d3',
                    arrow: 'PopoverDecorator_arrow_8a',
                    arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                    arrow__top: 'PopoverDecorator_arrow__top_6e',
                    arrow__left: 'PopoverDecorator_arrow__left_7a',
                    arrow__right: 'PopoverDecorator_arrow__right_b6',
                    closeBtn: 'PopoverDecorator_closeBtn_32',
                    content: 'PopoverDecorator_content_f0',
                };
            },
            8699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'AcceleratedTrainingIcon_base_4f', icon: 'AcceleratedTrainingIcon_icon_45' };
            },
            130: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8326: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Skills_base_ec',
                    efficiency: 'Skills_efficiency_d0',
                    base__c_44x44: 'Skills_base__c_44x44_c0',
                    rows: 'Skills_rows_e8',
                    bonusRow: 'Skills_bonusRow_4a',
                };
            },
            1890: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'AnimatedLostSkill_base_55',
                    base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                    base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                    icon: 'AnimatedLostSkill_icon_d4',
                };
            },
            6253: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'AnimatedNewSkill_base_0f' };
            },
            8110: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'LostLevelAnimation_base_f6',
                    level: 'LostLevelAnimation_level_f0',
                    level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                    level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                    base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                    base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                };
            },
            4722: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Row_base_bb',
                    skill: 'Row_skill_fb',
                    base__c_44x44: 'Row_base__c_44x44_4f',
                    base__c_24x24: 'Row_base__c_24x24_16',
                    base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                    base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                    base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                    skill__last: 'Row_skill__last_0a',
                    skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                    base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                    skill__stateLearning: 'Row_skill__stateLearning_5d',
                    base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                    base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                    base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                    base__collapseExtraOverlapWithLevelAndEfficiency:
                        'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                    level: 'Row_level_56',
                    acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                    lostSkill: 'Row_lostSkill_32',
                };
            },
            872: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'SkillLevel_base_d2', base__highlighted: 'SkillLevel_base__highlighted_e3' };
            },
            699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Skill_base_1f',
                    base__c_24x24: 'Skill_base__c_24x24_29',
                    base__c_44x44: 'Skill_base__c_44x44_5a',
                    background: 'Skill_background_02',
                    base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                    base__borderYellow: 'Skill_base__borderYellow_3e',
                    base__borderRed: 'Skill_base__borderRed_d2',
                    base__typeBonus: 'Skill_base__typeBonus_23',
                    base__disabled: 'Skill_base__disabled_85',
                    newSkillHighLight: 'Skill_newSkillHighLight_44',
                    icon: 'Skill_icon_b0',
                    disabledOverlay: 'Skill_disabledOverlay_3b',
                };
            },
            3938: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
            },
            4723: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'ToggleButton_base_09',
                    overlay: 'ToggleButton_overlay_76',
                    base__active: 'ToggleButton_base__active_05',
                    button: 'ToggleButton_button_14',
                    indicator: 'ToggleButton_indicator_c2',
                    counter: 'ToggleButton_counter_86',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], u = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((u = !1), a < r && (r = a));
                    if (u) {
                        deferred.splice(l--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 6587),
        (() => {
            var e = { 6587: 0, 8003: 0, 3595: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [u, s, i] = n,
                        l = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var o = i(__webpack_require__);
                    }
                    for (t && t(n); l < u.length; l++)
                        (r = u[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(o);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1860));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
