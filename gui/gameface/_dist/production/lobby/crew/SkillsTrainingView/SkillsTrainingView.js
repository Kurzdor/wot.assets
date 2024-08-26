(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => o.L, qE: () => o.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7727),
                    s = n(6179),
                    u = n.n(s),
                    l = n(6880),
                    o = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: m,
                    onMouseEnter: g,
                    onMouseMove: E,
                    onMouseDown: b,
                    onMouseUp: h,
                    onMouseLeave: p,
                    onClick: f,
                }) => {
                    const v = (0, s.useRef)(null),
                        A = (0, s.useState)(n),
                        k = A[0],
                        C = A[1],
                        w = (0, s.useState)(!1),
                        F = w[0],
                        y = w[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                k && null !== v.current && !v.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [k]),
                        (0, s.useEffect)(() => {
                            C(n);
                        }, [n]),
                        u().createElement(
                            'div',
                            {
                                ref: v,
                                className: r()(
                                    l.Z.base,
                                    l.Z[`base__${a}`],
                                    c && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    k && l.Z.base__focus,
                                    F && l.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, i.G)(_), g && g(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    c || (h && h(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, i.G)(m),
                                        b && b(e),
                                        n && (c || (v.current && (v.current.focus(), C(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (p && p(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (f && f(e));
                                },
                            },
                            a !== o.L.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: l.Z.back }),
                                    u().createElement('span', { className: l.Z.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: r()(l.Z.state, l.Z.state__default) },
                                u().createElement('span', { className: l.Z.stateDisabled }),
                                u().createElement('span', { className: l.Z.stateHighlightHover }),
                                u().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            u().createElement(
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
                    i = n(3458);
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
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            l = e.getImageSource,
                            _ = e.frameCount,
                            m = e.onAnimate,
                            g = e.frameTime,
                            E = void 0 === g ? i.O.FRAME_TIME : g,
                            b = e.initialFrameIndex,
                            h = void 0 === b ? i.O.INITIAL_FRAME_INDEX : b,
                            p = e.lastFrameIndex,
                            f = void 0 === p ? _ - 1 : p,
                            v = e.loop,
                            A = void 0 === v ? i.O.LOOP : v,
                            k = e.state,
                            C = void 0 === k ? i.O.STATE : k,
                            w = e.onAnimationDone,
                            F = e.onAnimationComplete,
                            y = e.poster,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const D = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = D.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (C) {
                                    case 'play':
                                        return (function () {
                                            const e = d(h, f, l),
                                                t = o(h, f),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        i = e.get(r);
                                                    i
                                                        ? (null == m || m(r, i),
                                                          n(i),
                                                          r === f &&
                                                              (null == F || F(),
                                                              A || (null == w || w(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === h && y ? { path: y, x: 0, y: 0 } : l(h),
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
                            }, [E, l, h, f, A, m, F, w, y, C]),
                            r().createElement('canvas', u({}, B, { width: t, height: n, ref: D }))
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
                        for (let i = e; i <= t; i++) {
                            const e = n(i),
                                t = r[e.path];
                            if (t) a.set(i, c(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(i, c(e, t));
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
                            i = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: i, y: s };
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
                    i = n(6179),
                    s = n.n(i),
                    u = n(8055);
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
                        i = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        _ = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, l);
                    const g = a ? null : n,
                        E = 'string' == typeof g;
                    if ((g && !E && g < 0) || 0 === g) return null;
                    const b = g && !E && g > d,
                        h = r()(
                            u.Z.base,
                            u.Z[`base__${t}`],
                            i && u.Z.base__animated,
                            c && u.Z.base__hidden,
                            !g && u.Z.base__pattern,
                            a && u.Z.base__empty,
                            _,
                        );
                    return s().createElement(
                        'div',
                        o({ className: h }, m),
                        s().createElement('div', { className: u.Z.bg }),
                        s().createElement('div', { className: u.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(u.Z.value, E && u.Z.value__text) },
                            b ? d : g,
                            b && s().createElement('span', { className: u.Z.plus }, '+'),
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
                    i = n(1043),
                    s = n(5262);
                const u = a.O.client.getSize('rem'),
                    l = u.width,
                    o = u.height,
                    c = Object.assign({ width: l, height: o }, (0, s.T)(l, o, i.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    r = n(6536),
                    i = n(6179),
                    s = n.n(i),
                    u = n(3495),
                    l = n(1043),
                    o = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, i.useContext)(u.Y),
                        n = (0, i.useState)(t),
                        c = n[0],
                        d = n[1],
                        _ = (0, i.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: r }, (0, o.T)(n, r, l.j)));
                        }, []),
                        m = (0, i.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, r.Z)(() => {
                        a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [_, m],
                        );
                    const g = (0, i.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(u.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    r = n(7382),
                    i = n(3495);
                const s = ['children'];
                const u = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    const u = (0, a.useContext)(i.Y),
                        l = u.extraLarge,
                        o = u.large,
                        c = u.medium,
                        d = u.small,
                        _ = u.extraSmall,
                        m = u.extraLargeWidth,
                        g = u.largeWidth,
                        E = u.mediumWidth,
                        b = u.smallWidth,
                        h = u.extraSmallWidth,
                        p = u.extraLargeHeight,
                        f = u.largeHeight,
                        v = u.mediumHeight,
                        A = u.smallHeight,
                        k = u.extraSmallHeight,
                        C = { extraLarge: p, large: f, medium: v, small: A, extraSmall: k };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && o) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && _) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, r.H)(t, n, C);
                        if (n.largeWidth && g) return (0, r.H)(t, n, C);
                        if (n.mediumWidth && E) return (0, r.H)(t, n, C);
                        if (n.smallWidth && b) return (0, r.H)(t, n, C);
                        if (n.extraSmallWidth && h) return (0, r.H)(t, n, C);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && k) return t;
                        }
                    }
                    return null;
                };
                u.defaultProps = {
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
                (0, a.memo)(u);
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
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
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
                    i = n.n(r),
                    s = n(6373),
                    u = n(3138),
                    l = n(2039),
                    o = n(5099),
                    c = n(7727),
                    d = n(9916),
                    _ = n(6179),
                    m = n.n(_),
                    g = n(4769),
                    E = n(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const b = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const h = (0, _.useRef)(null),
                            p = (0, _.useRef)(null),
                            f = (0, _.useRef)(null),
                            v = (0, _.useState)(window.decorator && window.decorator.directionType),
                            A = v[0],
                            k = v[1],
                            C = (0, _.useCallback)(() => {
                                c.$.playClick(), u.O.view.sendEvent.close();
                            }, []),
                            w = (0, _.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            F = i()(g.Z.arrow, g.Z[`arrow${b[A]}`]);
                        (0, l.b)(
                            () => (
                                u.O.client.events.mouse.enableOutside(),
                                u.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : u.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const y = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === h.current || t === f.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = u.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : u.O.view.sendEvent.close('popover');
                                },
                                [h, f, n],
                            ),
                            B = (0, E.w)(),
                            D = (0, _.useCallback)(() => {
                                const e = p.current;
                                if (e)
                                    return (
                                        u.O.view.freezeTextureBeforeResize(),
                                        B.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            u.O.view.resize(t, n), k(window.decorator.directionType);
                                        })
                                    );
                            }, [B]);
                        return (
                            (0, _.useImperativeHandle)(r, () => ({ updateSize: D })),
                            (0, l.b)(() => {
                                u.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', y, { capture: !0 });
                                const e = (0, o.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => D()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', y);
                                    }
                                );
                            }, [D, y, t]),
                            m().createElement(
                                'div',
                                { className: g.Z.base, ref: p },
                                m().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    m().createElement(
                                        'div',
                                        { className: g.Z.content, ref: h },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            m().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                m().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: C,
                                                    onMouseEnter: w,
                                                    ref: f,
                                                }),
                                            ),
                                    ),
                                    m().createElement('div', { className: F, style: a.arrow }),
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
                    i = n(6179),
                    s = n.n(i);
                const u = [
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
                        _ = e.args,
                        m = e.onClick,
                        g = e.children,
                        E = e.isEnabled,
                        b = void 0 === E || E,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    const p = (0, i.useRef)(null),
                        f = (0, i.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            p.current && (0, r.P3)(t, c, p.current, n, d, _);
                        }, [t, c, _, n, d]);
                    return s().createElement(
                        'div',
                        l(
                            {
                                ref: p,
                                onMouseDown:
                                    ((v = g.props.onClick),
                                    (e) => {
                                        b && (f(), m && m(e), v && v(e));
                                    }),
                            },
                            h,
                        ),
                        g,
                    );
                    var v;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => l });
                var a = n(6179),
                    r = n.n(a),
                    i = n(2056);
                const s = ['children'];
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    return r().createElement(
                        i.u,
                        u(
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
                    i = n(7078),
                    s = n(6373),
                    u = n(2056);
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
                    return o ? r().createElement(u.u, l({}, t, { contentId: o }), a) : r().createElement(i.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => o });
                var a = n(2056),
                    r = n(6179),
                    i = n.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: n, header: o, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, o, c, _]);
                        return i().createElement(
                            a.u,
                            u(
                                {
                                    contentId:
                                        ((E = null == _ ? void 0 : _.hasHtmlContent),
                                        E ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                m,
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
                    i = n(6179);
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
                function u(e) {
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
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            g = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            b = void 0 !== E && E,
                            h = e.decoratorId,
                            p = void 0 === h ? 0 : h,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            A = e.targetId,
                            k = void 0 === A ? 0 : A,
                            C = e.onShow,
                            w = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, s);
                        const y = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, i.useMemo)(() => k || (0, a.F)().resId, [k]),
                            D = (0, i.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (l(n, p, { isMouseEvent: !0, on: !0, arguments: u(r) }, B),
                                    C && C(),
                                    (y.current.isVisible = !0));
                            }, [n, p, r, B, C]),
                            S = (0, i.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        l(n, p, { on: !1 }, B),
                                        y.current.isVisible && w && w(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, p, B, w]),
                            L = (0, i.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return v
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(D, g ? 100 : 400)),
                                                      o && o(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && S(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
                        var x;
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
                n.d(t, { U: () => u });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
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
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function u({ initializer: e = !0, rootId: t = 0, getRoot: n = s, context: i = 'model' } = {}) {
                    const u = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? u.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = u.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const o = (e) => {
                        const a = n(t),
                            r = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const s = 'string' == typeof r ? `${i}.${r}` : i,
                                l = a.O.view.addModelObserver(s, t, !0);
                            return u.set(l, n), e && n(o(r)), l;
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
                            for (var e, n = r(u.keys()); !(e = n()).done; ) {
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
                    i = n(6179),
                    s = n.n(i),
                    u = n(8246);
                const l = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: o, children: c, mocks: d }) {
                            const _ = (0, i.useRef)([]),
                                m = (n, i, s) => {
                                    var l;
                                    const o = u.U(i),
                                        c =
                                            'real' === n
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (l = null == s ? void 0 : s.getter) ? l : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        s = r.LO.box(i, { equals: a.jv });
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
                                                    const i = null != t ? t : d(e),
                                                        s = r.LO.box(i, { equals: a.jv });
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
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            u = s.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, n]) => {
                                                                            u[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        E = { mode: n, model: g, externalModel: c, cleanup: m };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && s ? s.controls(E) : t(E),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, i.useRef)(!1),
                                E = (0, i.useState)(l),
                                b = E[0],
                                h = E[1],
                                p = (0, i.useState)(() => m(l, o, d)),
                                f = p[0],
                                v = p[1];
                            return (
                                (0, i.useEffect)(() => {
                                    g.current ? v(m(b, o, d)) : (g.current = !0);
                                }, [d, b, o]),
                                (0, i.useEffect)(() => {
                                    h(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                s().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, i.useContext)(n),
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
                    n.d(t, { mouse: () => c, off: () => l, on: () => u, onResize: () => i, onScaleUpdated: () => s });
                var a = n(2472),
                    r = n(1176);
                const i = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        s = o[t]((e) => n([e, 'outside']));
                                    function u(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, u),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(i, u),
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
                    return Object.assign({}, i, {
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
                        getSize: () => i,
                        graphicsQuality: () => u,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const u = {
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
                n.d(t, { O: () => i });
                var a = n(5959),
                    r = n(514);
                const i = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => s });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addPreloadTexture: () => u,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => F,
                        events: () => i.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => w,
                        getScale: () => b,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => k,
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => B,
                    });
                var a = n(3722),
                    r = n(6112),
                    i = n(6538),
                    s = n(8566);
                function u(e) {
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function k() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const F = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    B = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => o });
                const a = ['args'];
                const r = 2,
                    i = 16,
                    s = 32,
                    u = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = i),
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
                            l(u);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
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
                n.d(t, { Aq: () => l, GS: () => o, cJ: () => s, fd: () => u });
                var a = n(6179),
                    r = n(7739),
                    i = n(1043);
                let s, u, l;
                !(function (e) {
                    (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(u || (u = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const o = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        n = e.height,
                        i = ((e) => {
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
                                    return u.ExtraLarge;
                                case e.largeWidth:
                                    return u.Large;
                                case e.mediumWidth:
                                    return u.Medium;
                                case e.smallWidth:
                                    return u.Small;
                                case e.extraSmallWidth:
                                    return u.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), u.ExtraSmall;
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
                    return { mediaSize: i, mediaWidth: o, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
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
                n.d(t, { b: () => r, k: () => i });
                var a = n(6179);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    i = (e) => {
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
                n.d(t, { V: () => i });
                var a = n(6179),
                    r = n(3138);
                const i = () => {
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
                n.d(t, { w: () => i });
                var a = n(6179),
                    r = n(2039);
                function i() {
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
                n.d(t, { f: () => i });
                var a = n(5139),
                    r = n(6179);
                function i(e, t, n) {
                    const i = (0, r.useMemo)(() => (0, a.Z)(n, e), t);
                    return (0, r.useEffect)(() => i.cancel, [i]), i;
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
                n.d(t, { U2: () => a, UI: () => i, dF: () => l, lN: () => s, sE: () => o, tP: () => u });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function s(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function u(e, t = 0, n = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let a = Math.max(t, 0);
                            const i = Math.min(
                                n,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (a > i) return { done: !0, value: null };
                                    const t = e[a++];
                                    return t ? { value: r(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function l(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function o(e, t) {
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
                n.d(t, { BN: () => i, Eg: () => l, dL: () => o, e: () => s, uF: () => r, z4: () => u });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const u = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    o =
                        ((() => {
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
                        })(),
                        (e) => {
                            return (
                                (t = R.strings.common.percentValue()),
                                (n = { value: e }),
                                t.replace(/\{\w+\}/g, (e) => String(n[e.slice(1, -1)]))
                            );
                            var t, n;
                        });
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let r,
                        i = !1,
                        s = 0;
                    function u() {
                        r && clearTimeout(r);
                    }
                    function l(...l) {
                        const o = this,
                            c = Date.now() - s;
                        function d() {
                            (s = Date.now()), n.apply(o, l);
                        }
                        i ||
                            (a && !r && d(),
                            u(),
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
                            u(), (i = !0);
                        }),
                        l
                    );
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
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
                        const i = a.O.view.addModelObserver(e, n, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = r;
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
                    Sw: () => i.Z,
                    B3: () => l,
                    Z5: () => s.Z5,
                    B0: () => u,
                    c9: () => f,
                    wU: () => C,
                    ry: () => h,
                    Eu: () => p,
                    SW: () => A,
                    P3: () => k,
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
                var i = n(1358);
                var s = n(8613);
                let u;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(u || (u = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    m = n(3138);
                const g = ['args'];
                function E(e, t, n, a, r, i, s) {
                    try {
                        var u = e[i](s),
                            l = u.value;
                    } catch (e) {
                        return void n(e);
                    }
                    u.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        var i = e.apply(t, n);
                                        function s(e) {
                                            E(i, a, r, s, u, 'next', e);
                                        }
                                        function u(e) {
                                            E(i, a, r, s, u, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    v = () => f(u.CLOSE),
                    A = () => f(u.POP_OVER, { on: !1 }),
                    k = (e, t, n, a, r = R.invalid('resId'), i) => {
                        const s = m.O.view.getViewGlobalPosition(),
                            l = n.getBoundingClientRect(),
                            o = l.x,
                            c = l.y,
                            d = l.width,
                            _ = l.height,
                            g = {
                                x: m.O.view.pxToRem(o) + s.x,
                                y: m.O.view.pxToRem(c) + s.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(_),
                            };
                        f(u.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: b(g),
                            on: !0,
                            args: i,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(u.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var F = n(7572);
                const y = r.instance,
                    B = {
                        DataTracker: i.Z,
                        ViewModel: F.Z,
                        ViewEventType: u,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => f(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: k,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, v);
                        },
                        handleViewEvent: f,
                        onBindingsReady: h,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(u.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(u.CONTEXT_MENU),
                        isPopOverShown: C,
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
                        ClickOutsideManager: y,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => i, Z5: () => a, cy: () => r });
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
                    i = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            1504: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => l });
                var a = n(7739),
                    r = n(6179),
                    i = n.n(r),
                    s = n(2849);
                const u = ['children'];
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    return i().createElement(a.ZN, null, i().createElement(s.l, n, t));
                };
            },
            2849: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => E });
                var a = n(6483),
                    r = n.n(a),
                    i = n(926),
                    s = n.n(i),
                    u = n(6179),
                    l = n.n(u),
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
                const _ = {
                        [o.fd.ExtraSmall]: '',
                        [o.fd.Small]: s().SMALL_WIDTH,
                        [o.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [o.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [o.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
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
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const i = (0, o.GS)(),
                            s = i.mediaWidth,
                            u = i.mediaHeight,
                            E = i.mediaSize;
                        return l().createElement('div', d({ className: r()(n, _[s], m[u], g[E]) }, a), t);
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
                n.d(t, { Z0: () => r, in: () => a, sx: () => i }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(a || (a = {}));
                const r = 'tooltip_watched',
                    i = 2;
                let s;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(s || (s = {}));
            },
            4828: (e, t, n) => {
                'use strict';
                n.d(t, { AB: () => m, D9: () => a, eX: () => i, sC: () => s, tL: () => r, x3: () => o });
                const a = 'crew',
                    r = 2e3;
                let i, s, u, l, o, c, d, _;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(i || (i = {})),
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
                    })(u || (u = {})),
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
                    })(_ || (_ = {}));
                const m = {
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
                n.d(t, { Jp: () => d, Sr: () => _ });
                var a = n(6179),
                    r = n(7493);
                const i = ['action', 'timeLimit'];
                const s = 'metrics',
                    u = () => Date.now(),
                    l = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: r || null,
                    }),
                    o = (e, t) => {
                        const n = (0, a.useCallback)(
                            (n, a = r.in.Info, i) => {
                                i || (i = {}),
                                    Object.keys(i).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(i),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    c = (e, t) => {
                        const n = o(e, t),
                            r = (0, a.useRef)(new Map()),
                            i = (0, a.useRef)(new Map()),
                            s = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, u());
                                },
                                [r],
                            ),
                            l = (0, a.useCallback)(() => {
                                r.current.clear(), i.current.clear();
                            }, [r, i]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, u());
                                },
                                [r, i],
                            ),
                            d = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const n = i.current.get(e);
                                    if (void 0 === n) return;
                                    i.current.delete(e);
                                    const a = u() - n;
                                    r.current.set(e, t + a);
                                },
                                [r, i],
                            ),
                            _ = (0, a.useCallback)(
                                (e, t = 0, a, s) => {
                                    const l = r.current.get(e);
                                    if (void 0 === l) return;
                                    void 0 !== i.current.get(e) && d(e), r.current.delete(e);
                                    const o = (u() - l) / 1e3;
                                    o <= t ||
                                        ((s = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(s, o)),
                                        n(e, a, s));
                                },
                                [r, i, n, d],
                            );
                        return [(e) => s(e), (e, t, n, a) => _(e, t, n, a), () => l(), (e) => c(e), (e) => d(e)];
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
                    _ = (e, t) => {
                        const n = ((e) => {
                                const t = c(e, s),
                                    n = t[0],
                                    r = t[1],
                                    i = t[2],
                                    u = t[3],
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
                                return [(e) => n(e), (e) => d(e), () => i(), (e) => u(e), (e) => o(e)];
                            })(e),
                            u = n[0],
                            o = n[1],
                            d = t.action,
                            _ = t.timeLimit,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(t, i);
                        return (0, a.useMemo)(
                            () => ({
                                onShow: () => u(d || r.Z0),
                                onHide: () => o(Object.assign({ action: d || r.Z0, timeLimit: _ || r.sx }, m)),
                            }),
                            [d, _, m, u, o],
                        );
                    };
            },
            2582: (e, t, n) => {
                'use strict';
                n.d(t, { yZ: () => u });
                var a = n(6179),
                    r = n.n(a);
                const i = [
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
                let u;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(u || (u = {}));
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
                        _ = void 0 === d ? () => {} : d,
                        m = e.frameTime,
                        g = void 0 === m ? 33 : m,
                        E = e.initialFrameIndex,
                        b = void 0 === E ? 0 : E,
                        h = e.loop,
                        p = void 0 === h || h,
                        f = e.state,
                        v = void 0 === f ? u.Play : f,
                        A = e.onAnimationComplete,
                        k = void 0 === A ? () => {} : A,
                        C = e.revers,
                        w = void 0 !== C && C,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    const y = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = y.current;
                            if (!e) return;
                            const a = c - 1,
                                r = e.getContext('2d'),
                                i = (a) => {
                                    r.clearRect(0, 0, e.width, e.height), r.drawImage(a, 0, 0, t, n);
                                };
                            if ('stop' === v) {
                                const e = o(0),
                                    t = new Image();
                                t.src = e;
                                const n = () => i(t);
                                return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                            }
                            const s = ((e, t, n) => {
                                    const a = [];
                                    if (n) for (let n = e; n >= 0; n--) l(a, n, t);
                                    else for (let n = 0; n < e; n++) l(a, n, t);
                                    return a;
                                })(c, o, w),
                                u = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return (n += 1), n > e && (n = 0), t;
                                    };
                                })(a, b),
                                d = setInterval(() => {
                                    const e = u(),
                                        t = s[e];
                                    i(s[e]), _(e, t), e === a && (k(), p || clearInterval(d));
                                }, g);
                            return () => clearInterval(d);
                        }, [c, g, o, n, b, p, _, k, v, t, w]),
                        r().createElement('canvas', s({}, F, { width: t, height: n, ref: y }))
                    );
                });
            },
            2022: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => se,
                        Bar: () => ae,
                        DefaultScroll: () => ie,
                        Direction: () => j,
                        defaultSettings: () => z,
                        useHorizontalScrollApi: () => $,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => we, Bar: () => Ae, Default: () => Ce, useVerticalScrollApi: () => ue });
                var i = n(4029),
                    s = n(6179),
                    u = n.n(s),
                    l = n(493),
                    o = n.n(l),
                    c = n(6483),
                    d = n.n(c),
                    _ = n(7727);
                const m = {
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
                    g = [
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
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                class b extends u().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, _.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, _.G)(this.props.soundClick);
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
                            i = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            b =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, g)),
                            h = d()(m.base, m[`base__${i}`], m[`base__${r}`], null == s ? void 0 : s.base),
                            p = d()(m.icon, m[`icon__${i}`], m[`icon__${r}`], null == s ? void 0 : s.icon),
                            f = d()(m.glow, null == s ? void 0 : s.glow),
                            v = d()(m.caption, m[`caption__${i}`], null == s ? void 0 : s.caption),
                            A = d()(m.goto, null == s ? void 0 : s.goto);
                        return u().createElement(
                            'div',
                            E(
                                {
                                    className: h,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                b,
                            ),
                            'info' !== i && u().createElement('div', { className: m.shine }),
                            u().createElement('div', { className: p }, u().createElement('div', { className: f })),
                            u().createElement('div', { className: v }, t),
                            a && u().createElement('div', { className: A }, a),
                        );
                    }
                }
                b.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var h = n(3138),
                    p = n(5521);
                n(9916);
                const f = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function v(e = p.n.NONE, t = f, n = !1, a = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== p.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && h.O.view.isEventHandled()) return;
                                h.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var A = n(3403),
                    k = n(4119),
                    C = n(3215);
                let w, F, y, B;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(w || (w = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(F || (F = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(y || (y = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(B || (B = {}));
                w.Initialization, F.Initialization;
                const D = (0, C.q)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    S = D[0],
                    L = D[1],
                    x = (e) => {
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
                    T = (e, t, n) => (n < e ? e : n > t ? t : n),
                    N = [];
                function I(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), N)
                    );
                }
                function O(e, t, n = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, s.useEffect)(() => r, [r]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        r,
                    ];
                }
                function M(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return P(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t);
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
                function P(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                var H = n(4489),
                    W = n(7030);
                let j;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(j || (j = {}));
                const z = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    G = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const u = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                i = a[1];
                            return i <= r ? 0 : T(r, i, n);
                        };
                        return (l = {}) => {
                            const o = l.settings,
                                c = void 0 === o ? z : o,
                                d = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                m = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var a, r = M(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                g = (0, H.f)(
                                    () => {
                                        h.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, W.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), m.trigger('change', e), i && g());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                b = E[0],
                                p = E[1],
                                f = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = b.scrollPosition.get(),
                                            i = (null != (a = b.scrollPosition.goal) ? a : 0) - r;
                                        return u(e, t * n + i + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            p.start({
                                                scrollPosition: u(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: u(a, b.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, b.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        const t = d.current,
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
                                            i = f(t, e, a);
                                        v(i);
                                    },
                                    [v, f, c.step],
                                ),
                                k = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            d.current && m.trigger('mouseWheel', e, b.scrollPosition, t(d.current));
                                    },
                                    [b.scrollPosition, A, m],
                                ),
                                C = ((e, t = []) => {
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
                                        x(() => {
                                            const e = d.current;
                                            e &&
                                                (v(u(e, b.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [v, b.scrollPosition.goal],
                                ),
                                w = I(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = u(e, b.scrollPosition.goal);
                                    t !== b.scrollPosition.goal && v(t, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: u,
                                    handleMouseWheel: k,
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: p,
                                    animationScroll: b,
                                    recalculateContent: w,
                                    events: { on: m.on, off: m.off },
                                }),
                                [b.scrollPosition, v, A, m.off, m.on, w, k, p, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    $ = G({
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
                        getDirection: (e) => (e.deltaY > 1 ? j.Next : j.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Z = 'HorizontalBar_base_49',
                    U = 'HorizontalBar_base__nonActive_82',
                    V = 'HorizontalBar_leftButton_5f',
                    q = 'HorizontalBar_rightButton_03',
                    Y = 'HorizontalBar_track_0d',
                    K = 'HorizontalBar_thumb_fd',
                    Q = 'HorizontalBar_rail_32',
                    X = 'disable',
                    J = { pending: !1, offset: 0 },
                    ee = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    te = () => {},
                    ne = (e, t) => Math.max(20, e.offsetWidth * t),
                    ae = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ee, onDrag: a = te }) => {
                        const r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, s.useState)(J),
                            E = g[0],
                            b = g[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    b(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            f = () => {
                                const t = o.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / r),
                                    d = T(0, 1, s / (r - a)),
                                    _ = (t.offsetWidth - ne(t, u)) * d;
                                (n.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && o.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(X), void l.current.classList.remove(X);
                                            if (
                                                ((t = o.current),
                                                (n = c.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(X), void l.current.classList.add(X);
                                            var t, n;
                                            i.current.classList.remove(X), l.current.classList.remove(X);
                                        }
                                    })(_);
                            },
                            v = I(() => {
                                (() => {
                                    const t = c.current,
                                        n = o.current,
                                        a = e.getWrapperSize(),
                                        i = e.getContainerSize();
                                    if (!(i && t && a && n)) return;
                                    const s = Math.min(1, a / i);
                                    (t.style.width = `${ne(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(U) : r.current.classList.remove(U));
                                })(),
                                    f();
                            });
                        (0, s.useEffect)(() => x(v)),
                            (0, s.useEffect)(
                                () =>
                                    x(() => {
                                        const t = () => {
                                            f();
                                        };
                                        let n = te;
                                        const a = () => {
                                            n(), (n = x(v));
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
                                if (!E.pending) return;
                                const t = h.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const i = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!i || !s) return;
                                        const u = o.current,
                                            l = c.current;
                                        if (!u || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const d = t.clientX - E.offset - u.getBoundingClientRect().x,
                                            _ = (d / u.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: d, contentOffset: _ });
                                    }),
                                    n = h.O.client.events.mouse.up(() => {
                                        t(), p(J);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const A = O((t) => e.applyStepTo(t), m, [e]),
                            k = A[0],
                            C = A[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const w = (e) => {
                            e.target.classList.contains(X) || (0, _.G)('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: d()(Z, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: d()(V, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(X) || 0 !== e.button || ((0, _.G)('play'), k(j.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: w,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: d()(Y, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, _.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = c.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? j.Prev : j.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: w,
                                },
                                u().createElement('div', { ref: c, className: d()(K, t.thumb) }),
                                u().createElement('div', { className: d()(Q, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: d()(q, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(X) || 0 !== e.button || ((0, _.G)('play'), k(j.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    re = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ie = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(re.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: d()(re.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: d()(re.defaultScrollArea, r) },
                                u().createElement(se, { className: l, api: m, classNames: i }, e),
                            ),
                            u().createElement(ae, { getStepByRailClick: o, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    se = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => x(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: d()(re.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: d()(re.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: d()(re.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (se.Bar = ae), (se.Default = ie);
                const ue = G({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? j.Next : j.Prev),
                    }),
                    le = 'VerticalBar_base_f3',
                    oe = 'VerticalBar_base__nonActive_42',
                    ce = 'VerticalBar_topButton_d7',
                    de = 'VerticalBar_bottomButton_06',
                    _e = 'VerticalBar_track_df',
                    me = 'VerticalBar_thumb_32',
                    ge = 'VerticalBar_rail_43',
                    Ee = 'disable',
                    be = () => {},
                    he = { pending: !1, offset: 0 },
                    pe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    fe = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ve = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ae = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = pe, onDrag: a = be }) => {
                        const r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, s.useState)(he),
                            E = g[0],
                            b = g[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    b(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            f = I(() => {
                                const t = c.current,
                                    n = o.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && i && t && n)) return;
                                const s = Math.min(1, a / i);
                                return (
                                    (t.style.height = `${ve(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(oe) : r.current.classList.remove(oe)),
                                    s
                                );
                            }),
                            v = I(() => {
                                const t = o.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / r),
                                    d = T(0, 1, s / (r - a)),
                                    _ = (t.offsetHeight - ve(t, u)) * d;
                                (n.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && o.current && c.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Ee), void l.current.classList.remove(Ee);
                                            if (
                                                ((t = o.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ee), void l.current.classList.add(Ee);
                                            var t, n;
                                            i.current.classList.remove(Ee), l.current.classList.remove(Ee);
                                        }
                                    })(_);
                            }),
                            A = I(() => {
                                fe(e, () => {
                                    f(), v();
                                });
                            });
                        (0, s.useEffect)(() => x(A)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    fe(e, () => {
                                        v();
                                    });
                                };
                                let n = be;
                                const a = () => {
                                    n(), (n = x(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = h.O.client.events.mouse.up(() => {
                                        p(he);
                                    }),
                                    n = h.O.client.events.mouse.move(([t]) => {
                                        fe(e, (n) => {
                                            const r = o.current,
                                                i = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !i || !s) return;
                                            const u = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                l = (u / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: u, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const k = O((t) => e.applyStepTo(t), m, [e]),
                            C = k[0],
                            w = k[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Ee) || (0, _.G)('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: d()(le, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: d()(ce, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ee) || 0 !== e.button || ((0, _.G)('play'), C(j.Next));
                                },
                                ref: i,
                                onMouseEnter: F,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: d()(_e, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, _.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        fe(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                i = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? j.Prev : j.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: F,
                                },
                                u().createElement('div', { ref: c, className: d()(me, t.thumb) }),
                                u().createElement('div', { className: d()(ge, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: d()(de, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ee) || 0 !== e.button || ((0, _.G)('play'), C(j.Prev));
                                },
                                onMouseUp: w,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    ke = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ce = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(ke.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: d()(ke.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: d()(ke.area, r) },
                                u().createElement(we, { className: i, classNames: l, api: m }, e),
                            ),
                            u().createElement(Ae, { getStepByRailClick: o, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    we = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => x(a.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: d()(ke.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: d()(ke.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                we.Default = Ce;
                const Fe = { Vertical: r, Horizontal: a };
                var ye = n(9480),
                    Be = n(7078),
                    De = n(3415),
                    Se = n(8045);
                const Le = {
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
                var xe = n(3649);
                let Te, Ne, Ie;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Te || (Te = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ne || (Ne = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Ie || (Ie = {}));
                const Oe = { [Ie.NBSP]: Te.NoBreakSymbol, [Ie.ZWNBSP]: Te.NoBreakSymbol, [Ie.NEW_LINE]: Te.LineBreak },
                    Re = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Me = {
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
                    },
                    Pe = 'renderers_noBreakWrapper_10',
                    He = 'renderers_lineBreak_b5',
                    We = 'renderers_newLine_bd',
                    je = 'renderers_word_f3',
                    ze = (e) => ({ color: `#${e}` }),
                    Ge = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Me[a]
                                ? u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: d()(je, Me[a]) },
                                      e,
                                  )
                                : u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: je, style: ze(a) },
                                      e,
                                  )
                            : u().createElement('span', { key: n, 'data-block-type': t.blockType, className: je }, e);
                    },
                    $e = {
                        [Te.Word]: Ge,
                        [Te.NoBreakSymbol]: Ge,
                        [Te.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            u().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => u().createElement(u().Fragment, { key: n }, e)),
                            ),
                        [Te.LineBreak]: ({ key: e }) =>
                            u().createElement('span', { key: e, 'data-block-type': Te.LineBreak, className: He }),
                        [Te.NewLine]: ({ elementList: e, key: t }) =>
                            u().createElement('span', { key: t, 'data-block-type': Te.NewLine, className: We }, e),
                        [Te.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': Te.NoBreakWrapper, className: Pe },
                                e,
                            ),
                    },
                    Ze = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, i) => {
                                const s = `${n}_${i}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = Ze(e, $e[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    Ue = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = $e[a],
                                            i = Ze(e, r, t);
                                        return (
                                            a === Te.NoBreakWrapper
                                                ? n.push(r({ elementList: i, textBlock: e, key: `${t}` }))
                                                : n.push(...i),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    Ve = (e, t, n, a) => {
                        let r = t.exec(e),
                            i = 0;
                        for (; r; ) i !== r.index && n(e.slice(i, r.index)), a(r), (i = t.lastIndex), (r = t.exec(e));
                        i !== e.length && n(e.slice(i));
                    },
                    qe = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Ye = (e) => {
                        const t = [];
                        return (
                            Ve(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(qe) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Ke = Re
                        ? (e) => {
                              const t = [];
                              return (
                                  Ve(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Ye(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const r = [];
                              let i = 0;
                              for (; a; ) {
                                  const s = t.justifyContent === Ne.FlexEnd ? a.index : n.lastIndex;
                                  r.push(e.slice(i, s)), (i = s), (a = n.exec(e));
                              }
                              return i !== e.length && r.push(e.slice(i)), r;
                          },
                    Qe = (e, t = '', n) => {
                        const a = [];
                        return (
                            Ve(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Te.Word, colorTag: t, childList: Ke(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = Oe[n.charAt(0)];
                                    r === Te.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Te.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Te.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    Xe = (e, t, n = '', a) => {
                        const r = [];
                        return (
                            Ve(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Qe(e, n, a));
                                },
                                (e) => {
                                    const i = e[1],
                                        s = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...Qe(String(s), n, a))
                                        : r.push({ blockType: Te.Binding, colorTag: n, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    Je = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Te.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Te.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    et = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Te.NoBreakSymbol
                                        ? ((n = !0), t.push(...Je(t.pop(), e)))
                                        : (n ? t.push(...Je(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    Ve(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Xe(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...Xe(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, xe.Eg)((0, xe.z4)(e)), t, n),
                        );
                        return Ue(a);
                    },
                    tt = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    nt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    at = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = nt(e, t),
                            r = e.textContent.length,
                            i = e.offsetWidth / r,
                            s = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / i);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const u = Math.max(n + s, 0);
                        return r < u ? [!1, 0] : [!0, u];
                    },
                    rt = (e, t, n, a, r, i) => {
                        let s = -1,
                            l = null;
                        for (let o = n; o >= 0; o--) {
                            const n = e[o],
                                c = Number(e[o].getAttribute('data-block-type'));
                            if (c === Te.LineBreak || c === Te.NewLine || c === Te.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = at(n, a, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + i,
                                    g = t[o];
                                (l = u().cloneElement(g, g.props, m)), (s = o);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[o],
                                    _ = c.props.children,
                                    m = rt(e, _, e.length - 1, a, r, i),
                                    g = m[0],
                                    E = m[1];
                                if (!(g < 0)) {
                                    const e = _.slice(0, g);
                                    (l = u().cloneElement(c, c.props, e, E)), (s = o);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [s, l];
                    },
                    it = (e, t, n, a = '...') => {
                        const r = [...t],
                            i = e.current;
                        if (!i) return [r, !1];
                        const s = n.height,
                            u = n.width,
                            l = i.lastElementChild;
                        if (!tt(l, s) && nt(l, u) <= 0) return [r, !1];
                        const o = i.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    tt(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(o, s);
                        if (c < 0) return [r, !1];
                        const d = rt(o, r, c, u, a.length, a),
                            _ = d[0],
                            m = d[1];
                        return m && (r.splice(_, 1, m), r.splice(_ + 1)), [r, !0];
                    },
                    st = u().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: l,
                            targetId: o,
                            justifyContent: c = Ne.FlexStart,
                            alignContent: _ = Ne.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const g = (0, s.useRef)(null),
                                E = (0, s.useRef)({ height: 0, width: 0 }),
                                b = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                h = b[0],
                                p = b[1],
                                f = (0, s.useMemo)(() => et(e, a, { justifyContent: c }), [a, c, e]),
                                v = (0, s.useMemo)(() => {
                                    if (
                                        r &&
                                        h.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, l, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [a, r, o, e, l, h.isTruncated]),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = it(g, f, E.current, m),
                                            a = t[0],
                                            r = t[1];
                                        p({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                    },
                                    [n, m, f],
                                ),
                                k = (0, s.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, s.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, s.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Se.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(g, A, i),
                                u().createElement(
                                    'div',
                                    {
                                        className: d()(
                                            Le.base,
                                            t,
                                            Le.base__zeroPadding,
                                            i && Le.base__isTruncationAvailable,
                                        ),
                                        style: k,
                                    },
                                    u().createElement('div', { className: Le.unTruncated, ref: g }, f),
                                    u().createElement(
                                        De.l,
                                        {
                                            tooltipArgs: v,
                                            className: d()(
                                                Le.tooltip,
                                                Le[`tooltip__justify-${c}`],
                                                Le[`tooltip__align-${_}`],
                                            ),
                                        },
                                        u().createElement(
                                            'div',
                                            {
                                                className: d()(
                                                    Le.truncated,
                                                    !h.isTruncateFinished && i && Le.truncated__hide,
                                                ),
                                                style: k,
                                            },
                                            h.isTruncateFinished && i ? h.elementList : f,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let ut;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(ut || (ut = {}));
                const lt = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    ot = u().memo(function ({ buffIconType: e, className: t }) {
                        return e === ut.none
                            ? null
                            : u().createElement('div', { className: d()(lt.base, lt[`base__${ut[e]}`], t) });
                    }),
                    ct = 'Delta_base_3e',
                    dt = 'Delta_base__positive_82',
                    _t = 'Delta_base__negative_86',
                    mt = u().memo(function ({ isPositive: e, width: t, shift: n, isUseAnim: a }) {
                        const r = (0, W.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: kt },
                                delay: e ? 0 : kt,
                                immediate: !a,
                            }),
                            i = (0, W.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2 + n,
                                width: e ? t : 0,
                                config: { duration: kt },
                                delay: e || 0 === t ? kt : 0,
                                immediate: !a,
                            });
                        return u().createElement(
                            u().Fragment,
                            null,
                            u().createElement(W.animated.div, { className: d()(ct, _t), style: r }),
                            u().createElement(W.animated.div, { className: d()(ct, dt), style: i }),
                        );
                    }),
                    gt = 'Indicator_base_b9',
                    Et = 'Indicator_progress_ce',
                    bt = 'Indicator_progressMarker_b4',
                    ht = 'Indicator_indicator_bc',
                    pt = 'Indicator_indicator__start_80',
                    ft = 'Indicator_indicator__end_3b',
                    vt = 'Indicator_marker_f7',
                    At = 'Indicator_valueLine_1d',
                    kt = 300,
                    Ct = u().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: n,
                        markerValue: a,
                        delta: r,
                        isUseAnim: i,
                    }) {
                        const s = a === e ? 2 : (a / t) * 254,
                            l = (n / t) * 254,
                            o = (r / t) * 254,
                            c = r > 0,
                            _ = { config: { duration: kt }, immediate: !i },
                            m = (0, W.useSpring)(Object.assign({ from: { left: 2 }, to: { left: s }, delay: kt }, _)),
                            g = (0, W.useSpring)(Object.assign({ from: { width: e }, to: { width: l }, delay: kt }, _));
                        return u().createElement(
                            'div',
                            { className: gt },
                            u().createElement(
                                'div',
                                { className: Et },
                                u().createElement('div', { className: d()(ht, pt) }),
                                u().createElement(W.animated.div, { className: At, style: g }),
                                u().createElement(
                                    'div',
                                    { className: bt },
                                    u().createElement(
                                        W.animated.div,
                                        { className: vt, style: m },
                                        u().createElement(mt, {
                                            isPositive: c,
                                            width: o,
                                            shift: l - o - s,
                                            isUseAnim: i,
                                        }),
                                    ),
                                ),
                                u().createElement('div', { className: d()(ht, ft) }),
                            ),
                        );
                    });
                let wt;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational');
                })(wt || (wt = {}));
                var Ft = n(7160);
                const yt = {
                        base: 'Param_base_51',
                        valueWrapper: 'Param_valueWrapper_85',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                        highlight__situational: 'Param_highlight__situational_db',
                    },
                    Bt = u().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: n,
                        isEnabled: a,
                        highlightType: r,
                        localizedName: i,
                    }) {
                        const l = (0, W.useSpring)(() => ({ from: { opacity: 0 } })),
                            o = l[0],
                            c = l[1],
                            _ = r !== wt.None;
                        return (
                            (0, s.useEffect)(() => {
                                _ &&
                                    c.start({
                                        from: { opacity: 0 },
                                        to: [{ opacity: 1 }, { opacity: 0 }],
                                        delay: 100,
                                        config: { duration: 300, easing: Ft.Fs },
                                    });
                            }, [t, c, _]),
                            u().createElement(
                                Be.t,
                                {
                                    args: { tooltipId: n, paramId: e },
                                    targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    isEnabled: a,
                                },
                                u().createElement(
                                    'div',
                                    { className: yt.base },
                                    u().createElement(
                                        'div',
                                        { className: yt.valueWrapper },
                                        u().createElement(st, {
                                            justifyContent: Ne.FlexEnd,
                                            classMix: yt.value,
                                            text: t,
                                        }),
                                    ),
                                    u().createElement('div', {
                                        className: yt.icon,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')`,
                                        },
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: yt.name },
                                        i || R.strings.menu.tank_params.$dyn(e),
                                    ),
                                    _ &&
                                        u().createElement(W.animated.div, {
                                            className: d()(yt.highlight, yt[`highlight__${r}`]),
                                            style: o,
                                        }),
                                ),
                            )
                        );
                    }),
                    Dt = 'Group_base_66',
                    St = 'Group_group_07',
                    Lt = 'Group_hoverBg_97',
                    xt = 'Group_hoverBg__scrollable_2a',
                    Tt = 'Group_groupHeader_f5',
                    Nt = 'Group_name_21',
                    It = 'Group_arrow_96',
                    Ot = 'Group_arrow__opened_47',
                    Rt = 'Group_params_88',
                    Mt = 'Group_params__opened_9a',
                    Pt = 'Group_separator_b5',
                    Ht = 'Group_right_13',
                    Wt = 'Group_situational_55',
                    jt = 'Group_buff_fa',
                    zt = 'Group_value_00',
                    Gt = 'Group_value__additional_81';
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Zt = (0, A.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: n,
                            extraParams: a,
                            tooltipID: r,
                            indicator: i,
                            value: s,
                            additionalValue: l,
                            buffIconType: o,
                            isEnabled: c,
                            isScrollable: m,
                            isSituational: g,
                        }) => {
                            const E = L().controls,
                                b = a && a.length > 0;
                            return u().createElement(
                                'div',
                                { className: Dt },
                                u().createElement(
                                    Be.t,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: c,
                                    },
                                    u().createElement(
                                        'div',
                                        {
                                            className: St,
                                            onClick: () => E.onGroupClick(e),
                                            onMouseEnter: _.$.playHighlight,
                                        },
                                        u().createElement('div', { className: d()(Lt, m && xt) }),
                                        u().createElement(
                                            'div',
                                            { className: Tt },
                                            u().createElement('div', { className: d()(It, t && Ot) }),
                                            u().createElement(
                                                'div',
                                                { className: Nt },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            u().createElement(
                                                'div',
                                                { className: Ht },
                                                g && u().createElement('div', { className: Wt }),
                                                u().createElement(ot, { buffIconType: o, className: jt }),
                                                l && u().createElement(st, { classMix: d()(zt, Gt), text: l }),
                                                u().createElement(st, { classMix: zt, text: s }),
                                            ),
                                        ),
                                        u().createElement(Ct, i),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: d()(Rt, t && Mt) },
                                    ye.UI(n, (e) => u().createElement(Bt, $t({ key: e.id }, e))),
                                    b && u().createElement('div', { className: Pt }),
                                    ye.UI(a, (e) => u().createElement(Bt, $t({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    Ut = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const qt = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    Yt = (0, A.Pi)(({ showBackground: e = !0, className: t }) => {
                        const n = L().model,
                            a = (0, s.useState)(!1),
                            r = a[0],
                            i = a[1],
                            l = n.groups.get(),
                            o = ue(qt);
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    const e = o.getContainerSize(),
                                        t = o.getWrapperSize();
                                    e && t && i(e > t);
                                };
                                return (
                                    o.events.on('recalculateContent', e),
                                    () => {
                                        o.events.off('recalculateContent', e);
                                    }
                                );
                            }, [o]),
                            u().createElement(
                                'div',
                                { className: d()(Ut.base, e && Ut.base__bg, t) },
                                u().createElement(
                                    Fe.Vertical.Area.Default,
                                    {
                                        api: o,
                                        barClassNames: { base: Ut.barBase },
                                        scrollClassName: Ut.scroll,
                                        scrollClassNames: { content: Ut.content },
                                    },
                                    u().createElement(
                                        'div',
                                        { className: Ut.groups },
                                        ye.UI(l, (e) =>
                                            u().createElement(Zt, Vt({ key: e.id }, e, { isScrollable: r })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Kt = (0, s.memo)(function (e) {
                        const t = (0, s.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return u().createElement(S, { options: t }, u().createElement(Yt, e));
                    }),
                    Qt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Xt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Jt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    en = (e) =>
                        Jt
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = Xt.length - 1; n >= 0; n--)
                                      for (; e >= Xt[n]; ) (t += Qt[n]), (e -= Xt[n]);
                                  return t;
                              })(e),
                    tn = (e, t) => e.split(',').includes(t),
                    nn = {
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
                let an, rn;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(an || (an = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(rn || (rn = {}));
                const sn = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: i = '',
                        size: s = an.extraSmall,
                        type: l = rn.colored,
                        className: o,
                        classNames: c,
                        isShortName: _ = !1,
                    }) => {
                        const m = `${(0, xe.BN)(a)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return u().createElement(
                            'div',
                            {
                                className: d()(
                                    nn.base,
                                    nn[`base__size${(0, xe.e)(s)}`],
                                    nn[`base__type${(0, xe.e)(l)}`],
                                    o,
                                ),
                            },
                            u().createElement('div', { className: d()(nn.level, null == c ? void 0 : c.level) }, en(r)),
                            u().createElement('div', {
                                className: d()(
                                    nn.type,
                                    e && nn[`type__elite${(0, xe.e)(s)}`],
                                    nn[`type__${s}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${g})` } : void 0,
                            }),
                            tn(i, 'premiumIGR') && u().createElement('div', { className: nn.premiumIGR }),
                            u().createElement(
                                'div',
                                { className: d()(nn.name, null == c ? void 0 : c.name) },
                                _ ? n : t,
                            ),
                        );
                    },
                    un = 'VehicleParamsDecorator_base_32',
                    ln = 'VehicleParamsDecorator_vehicleInfo_02',
                    on = 'VehicleParamsDecorator_tankName_ac',
                    cn = 'VehicleParamsDecorator_tankLvl_26',
                    dn = 'VehicleParamsDecorator_type_e7',
                    _n = 'VehicleParamsDecorator_tip_6c',
                    mn = ['className', 'children', 'isPerkTipShown', 'tipText'];
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const En = (e) => {
                        let t = e.className,
                            n = e.children,
                            a = e.isPerkTipShown,
                            r = e.tipText,
                            i = void 0 === r ? R.strings.crew.vehicleParamsDecorator.perkTip() : r,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, mn);
                        return u().createElement(
                            'div',
                            { className: d()(un, t) },
                            u().createElement(
                                sn,
                                gn({ className: ln, classNames: { name: on, level: cn, typeIcon: dn } }, s, {
                                    isShortName: !0,
                                }),
                            ),
                            n,
                            a && u().createElement('div', { className: _n }, i),
                        );
                    },
                    bn = (0, C.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                {},
                                e.primitives([
                                    'isFemale',
                                    'isMajorQualification',
                                    'role',
                                    'currentSkillsAmount',
                                    'totalSkillsAmount',
                                    'availableSkillsAmount',
                                    'areAllSkillsLearned',
                                    'skillsEfficiency',
                                    'isAnySkillSelected',
                                ]),
                                {
                                    vehicleInfo: e.object('vehicleInfo'),
                                    skillsList: Object.assign({}, e.primitives(['componentKey'], 'skillsList'), {
                                        irrelevantSkillsList: e.array('skillsList.irrelevantSkillsList'),
                                        commonSkillsList: e.array('skillsList.commonSkillsList'),
                                        regularSkillsList: e.array('skillsList.regularSkillsList'),
                                    }),
                                },
                            );
                            return Object.assign({}, t, { computes: {} });
                        },
                        ({ externalModel: e }) => ({
                            clickOnSkill: e.createCallback((e) => ({ id: e }), 'skillsList.onSkillClick'),
                            hoverSkill: e.createCallback((e) => ({ id: e }), 'skillsList.onSkillHover'),
                            outSkill: e.createCallback((e) => ({ id: e }), 'skillsList.onSkillOut'),
                            train: e.createCallbackNoArgs('skillsList.onTrain'),
                            cancel: e.createCallbackNoArgs('skillsList.onCancel'),
                            close: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    hn = bn[0],
                    pn = bn[1];
                var fn = n(3457),
                    vn = n(5415);
                const An = 'Footer_base_8f',
                    kn = 'Footer_bonusDescription_89',
                    Cn = 'Footer_bonusDescriptionIcon_c6',
                    wn = 'Footer_bonusDescriptionText_ae',
                    Fn = 'Footer_buttonsContainer_fb',
                    yn = 'Footer_buttonsContainer__visible_f1',
                    Bn = 'Footer_btn_bb',
                    Dn = (0, A.Pi)(({ className: e }) => {
                        const t = pn(),
                            n = t.model,
                            a = t.controls,
                            r = (0, vn.GS)().mediaSize;
                        return u().createElement(
                            'div',
                            { className: d()(An, e) },
                            !n.isMajorQualification.get() &&
                                r >= vn.cJ.Medium &&
                                u().createElement(
                                    'div',
                                    { className: kn },
                                    u().createElement('div', { className: Cn }),
                                    u().createElement(
                                        'div',
                                        { className: wn },
                                        R.strings.crew.skillsTraining.bonusQualification.description(),
                                    ),
                                ),
                            u().createElement(
                                'div',
                                { className: d()(Fn, n.isAnySkillSelected.get() && yn) },
                                u().createElement(
                                    fn.u5,
                                    { size: fn.qE.small, mixClass: Bn, onClick: a.train },
                                    R.strings.crew.skillsTraining.btnTrain.label(),
                                ),
                                u().createElement(
                                    fn.u5,
                                    { type: fn.L$.secondary, size: fn.qE.small, mixClass: Bn, onClick: a.cancel },
                                    R.strings.crew.skillsTraining.btnCancel.label(),
                                ),
                            ),
                        );
                    });
                var Sn = n(771);
                const Ln = {
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
                let xn;
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
                })(xn || (xn = {}));
                const Tn = u().memo(function ({ role: e, size: t = xn.c30x30, className: n }) {
                        const a = (0, s.useMemo)(() => {
                            try {
                                var n;
                                const a =
                                    null == (n = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                        ? void 0
                                        : n.$dyn((0, xe.BN)(e));
                                if (!a) throw Error;
                                return { backgroundImage: `url(${a})` };
                            } catch (t) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, t]);
                        return u().createElement('div', { style: a, className: d()(Ln.base, Ln[`base__${t}`], n) });
                    }),
                    Nn = {
                        base: 'Header_base_bd',
                        title: 'Header_title_21',
                        pointsContainer: 'Header_pointsContainer_13',
                        selectedPointsContainer: 'Header_selectedPointsContainer_37',
                        roleNameAndPointsContainer: 'Header_roleNameAndPointsContainer_7d',
                        roleIcon: 'Header_roleIcon_5d',
                        roleName: 'Header_roleName_ee',
                        selectedPointsProgressContainer: 'Header_selectedPointsProgressContainer_99',
                        selectedPointsProgress: 'Header_selectedPointsProgress_7e',
                        selectedPointsCurrent: 'Header_selectedPointsCurrent_96',
                        availablePointsContainer: 'Header_availablePointsContainer_0b',
                        availablePointsTitle: 'Header_availablePointsTitle_fd',
                        availablePointsTitle__allSkillsLearned: 'Header_availablePointsTitle__allSkillsLearned_db',
                        availablePointsTitle__disabled: 'Header_availablePointsTitle__disabled_53',
                        countContainer: 'Header_countContainer_a3',
                        count: 'Header_count_81',
                        skillIcon: 'Header_skillIcon_0b',
                        spinGlow: 'Header_spinGlow_4c',
                        rotation: 'Header_rotation_2e',
                    };
                var In;
                !(function (e) {
                    (e.AllSkillsLearned = 'allSkillsLearned'), (e.Available = 'available'), (e.Disabled = 'disabled');
                })(In || (In = {}));
                const On = (0, A.Pi)(() => {
                        const e = pn().model,
                            t = e.role.get(),
                            n = e.areAllSkillsLearned.get(),
                            a = e.availableSkillsAmount.get(),
                            r = a > 0,
                            i = ((e, t) => (e ? In.AllSkillsLearned : t === Sn.sU ? In.Disabled : In.Available))(
                                n,
                                e.skillsEfficiency.get(),
                            ),
                            s = (0, vn.GS)().mediaSize;
                        return u().createElement(
                            'div',
                            { className: Nn.base },
                            u().createElement(
                                'div',
                                { className: Nn.title },
                                e.isMajorQualification.get()
                                    ? R.strings.crew.skillsTraining.title.majorQualification()
                                    : R.strings.crew.skillsTraining.title.bonusQualification(),
                            ),
                            u().createElement(
                                'div',
                                { className: Nn.pointsContainer },
                                u().createElement(
                                    'div',
                                    { className: Nn.selectedPointsContainer },
                                    u().createElement(Tn, {
                                        role: t,
                                        size: s < vn.cJ.Medium ? xn.c24x24 : xn.c30x30,
                                        className: s >= vn.cJ.Medium ? Nn.roleIcon : void 0,
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: Nn.roleNameAndPointsContainer },
                                        u().createElement(
                                            'div',
                                            { className: Nn.roleName },
                                            e.isFemale.get()
                                                ? R.strings.crew.matrix.skills.roles.female.$dyn(t)
                                                : R.strings.crew.matrix.skills.roles.$dyn(t),
                                        ),
                                        u().createElement(
                                            'div',
                                            { className: Nn.selectedPointsProgressContainer },
                                            u().createElement(st, {
                                                text: R.strings.common.progress(),
                                                classMix: Nn.selectedPointsProgress,
                                                binding: {
                                                    current: u().createElement(
                                                        'div',
                                                        { className: Nn.selectedPointsCurrent },
                                                        e.currentSkillsAmount.get(),
                                                    ),
                                                    total: u().createElement('div', null, e.totalSkillsAmount.get()),
                                                },
                                            }),
                                        ),
                                    ),
                                ),
                                (r || e.isAnySkillSelected.get() || n) &&
                                    u().createElement(
                                        'div',
                                        { className: Nn.availablePointsContainer },
                                        u().createElement(
                                            'div',
                                            {
                                                className: d()(
                                                    Nn.availablePointsTitle,
                                                    Nn[`availablePointsTitle__${i}`],
                                                ),
                                            },
                                            R.strings.crew.skillsTraining.availableSkillsTitle.$dyn(i),
                                        ),
                                        !n &&
                                            u().createElement(
                                                'div',
                                                { className: Nn.countContainer },
                                                u().createElement('div', { className: Nn.count }, a),
                                                u().createElement(
                                                    'div',
                                                    { className: Nn.skillIcon },
                                                    r && u().createElement('div', { className: Nn.spinGlow }),
                                                ),
                                            ),
                                    ),
                            ),
                        );
                    }),
                    Rn = 'ScrollWithLips_base_a2',
                    Mn = 'ScrollWithLips_bar_67',
                    Pn = 'ScrollWithLips_content_6d',
                    Hn = 'ScrollWithLips_fadeContainerTop_6d',
                    Wn = 'ScrollWithLips_fadeContainerBottom_43',
                    jn = 'ScrollWithLips_fade_5e';
                let zn;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(zn || (zn = {}));
                const Gn = ({ children: e, className: t, classNames: n }) => {
                    const a = (0, s.useState)(zn.None),
                        r = a[0],
                        i = a[1],
                        l = r === zn.Both,
                        o = ue();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = o.getBounds()[1],
                                    t = o.animationScroll.scrollPosition.get();
                                0 === e
                                    ? i(zn.None)
                                    : t > 1 && t < e - 21
                                      ? i(zn.Both)
                                      : t <= 1
                                        ? i(zn.Bottom)
                                        : t >= e - 21 && i(zn.Top);
                            };
                            return (
                                o.events.on('change', e),
                                o.events.on('resizeHandled', e),
                                o.events.on('recalculateContent', e),
                                () => {
                                    o.events.off('change', e),
                                        o.events.off('resizeHandled', e),
                                        o.events.off('recalculateContent', e);
                                }
                            );
                        }, [o]),
                        u().createElement(
                            'div',
                            { className: d()(Rn, t) },
                            u().createElement(
                                Fe.Vertical.Default,
                                {
                                    api: o,
                                    barClassNames: { base: d()(Mn, null == n ? void 0 : n.bar) },
                                    scrollClassNames: { content: d()(Pn, null == n ? void 0 : n.content) },
                                },
                                e,
                            ),
                            (r === zn.Top || l) &&
                                u().createElement(
                                    'div',
                                    { className: d()(Hn, null == n ? void 0 : n.lips) },
                                    u().createElement('div', { className: jn }),
                                ),
                            (r === zn.Bottom || l) &&
                                u().createElement(
                                    'div',
                                    { className: d()(Wn, null == n ? void 0 : n.lips) },
                                    u().createElement('div', { className: jn }),
                                ),
                        )
                    );
                };
                var $n = n(2603),
                    Zn = n(6373);
                const Un = 'ListCardAlert_base_52',
                    Vn = 'ListCardAlert_glow_1c',
                    qn = 'ListCardAlert_icon_d2',
                    Yn = ({ className: e, tooltipArgs: t }) =>
                        u().createElement(
                            'div',
                            { className: d()(Un, e) },
                            u().createElement('div', { className: Vn }),
                            t
                                ? u().createElement(Zn.i, t, u().createElement('div', { className: qn }))
                                : u().createElement('div', { className: qn }),
                        );
                var Kn = n(2768),
                    Qn = n(8018);
                const Xn = 'SkillCardBackground_base_f0',
                    Jn = 'SkillCardBackground_background_77',
                    ea = 'SkillCardBackground_base__selected_02',
                    ta = 'SkillCardBackground_base__fullyLearned_f5',
                    na = 'SkillCardBackground_base__lowEfficiency_1e',
                    aa = 'SkillCardBackground_base__inProgress_71',
                    ra = 'SkillCardBackground_frame_db',
                    ia = 'SkillCardBackground_progress_22',
                    sa = 'SkillCardBackground_disabled_68',
                    ua = (0, s.memo)(({ level: e, isSelected: t, isLearned: n, hasLowEfficiency: a, isDisabled: r }) =>
                        u().createElement(
                            'div',
                            { className: d()(Xn, n && (e === Sn.I ? ta : aa), t && ea, !r && a && na) },
                            u().createElement('div', { className: Jn }),
                            n &&
                                e > 0 &&
                                e < Sn.I &&
                                u().createElement('div', { className: ia, style: { width: `${e}%` } }),
                            r && u().createElement('div', { className: sa }),
                            u().createElement('div', { className: ra }),
                        ),
                    ),
                    la = 'SkillCard_base_1a',
                    oa = 'SkillCard_base__clickable_8b',
                    ca = 'SkillCard_container_11',
                    da = 'SkillCard_icon_a1',
                    _a = 'SkillCard_description_26',
                    ma = 'SkillCard_content_76',
                    ga = 'SkillCard_base__disabled_af',
                    Ea = 'SkillCard_name_c8',
                    ba = 'SkillCard_zeroSign_a1',
                    ha = 'SkillCard_directiveSign_cd',
                    pa = 'SkillCard_boosterSign_30',
                    fa = 'SkillCard_level_91',
                    va = 'SkillCard_level__selectedFull_ff',
                    Aa = 'SkillCard_level__selectedNotFul_87',
                    ka = 'SkillCard_level__inProgress_97',
                    Ca = 'SkillCard_base__untrained_eb',
                    wa = 'SkillCard_base__lowEfficiency_f0',
                    Fa = 'SkillCard_level__fullyLearned_a1',
                    ya = 'SkillCard_warning_9c',
                    Ba = (0, Qn.Ds)();
                let Da = !1;
                const Sa = (0, A.Pi)(
                        ({
                            id: e,
                            icon: t,
                            name: n,
                            description: a,
                            isSelected: r,
                            level: i,
                            isZero: l,
                            isIrrelevant: o,
                            hasAvailableSkills: c,
                            isLearned: m,
                            skillsEfficiency: g,
                            isImprovedByDirective: E,
                            isDirectiveFull: b,
                            isExtraLarge: p,
                            componentKey: f,
                        }) => {
                            const v = (0, s.useRef)(null),
                                A = pn().controls,
                                k = (0, vn.GS)().mediaWidth === vn.fd.ExtraSmall,
                                C = (0, s.useMemo)(
                                    () =>
                                        ((e, t) => ({
                                            toString: () => {
                                                if (!e.current) return '';
                                                const n = h.O.view.getSize('rem'),
                                                    a = h.O.view.getViewGlobalPosition(),
                                                    r = e.current.getBoundingClientRect(),
                                                    i = h.O.view.pxToRem(r.x) + a.x,
                                                    s = h.O.view.pxToRem(r.width),
                                                    u = i > n.width / 2 || t ? -370 : s - 30;
                                                return Math.round(i + u).toString();
                                            },
                                        }))(v, k),
                                    [k],
                                ),
                                w = i === Sn.I,
                                F = !l && (r || m),
                                y = (0, Qn.Y4)(g),
                                B = y === Qn.H$.Low,
                                D = y === Qn.H$.Untrained,
                                S = o || (D && !(m && E)),
                                L = (c || r) && !m && !S;
                            return u().createElement(
                                Be.t,
                                {
                                    args: { skillName: e, tooltipId: $n._K, componentKey: f, positionX: C },
                                    ignoreMouseClick: !0,
                                },
                                u().createElement(
                                    'div',
                                    {
                                        className: d()(la, L && oa, S && ga, B && wa, Ca),
                                        onClick: () => {
                                            L && (_.$.playClick(), A.clickOnSkill(e));
                                        },
                                        onMouseEnter: () => {
                                            S ||
                                                (_.$.playHighlight(),
                                                Ba(() => {
                                                    (Da = !0), A.hoverSkill(e);
                                                }, 300));
                                        },
                                        onMouseLeave: () => {
                                            S || (Ba.cancel(), Da && (A.outSkill(e), (Da = !1)));
                                        },
                                        ref: v,
                                    },
                                    u().createElement(ua, {
                                        level: i,
                                        isSelected: r,
                                        isLearned: m,
                                        isDisabled: S,
                                        hasLowEfficiency: B,
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: ma },
                                        u().createElement(Kn.y, {
                                            iconName: t,
                                            size: p ? Kn.F.c120x90 : Kn.F.c80x80,
                                            className: da,
                                        }),
                                        u().createElement(
                                            'div',
                                            { className: ca },
                                            u().createElement('div', { className: Ea }, n),
                                            u().createElement(st, { classMix: _a, text: a, isTruncationAvailable: !0 }),
                                        ),
                                    ),
                                    l && u().createElement('div', { className: ba }),
                                    !o && E && m && u().createElement('div', { className: b ? pa : ha }),
                                    F &&
                                        u().createElement(
                                            'div',
                                            { className: d()(fa, m && (w ? Fa : ka), r && (w ? va : Aa)) },
                                            (0, xe.uF)(R.strings.common.percentValue(), { value: i }),
                                        ),
                                    o && !D && u().createElement(Yn, { className: ya }),
                                ),
                            );
                        },
                    ),
                    La = 'SkillsGroup_base_58',
                    xa = ['list'];
                function Ta() {
                    return (
                        (Ta =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ta.apply(this, arguments)
                    );
                }
                const Na = (e) => {
                        let t = e.list,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, xa);
                        return u().createElement(
                            'div',
                            { className: La },
                            (0, ye.UI)(t, (e, t) => u().createElement(Sa, Ta({}, e, n, { key: `skill_${t}_${e.id}` }))),
                        );
                    },
                    Ia = 'SkillsList_base_23',
                    Oa = 'SkillsList_line_28',
                    Ra = 'SkillsList_scrollArea_db',
                    Ma = 'SkillsList_bar_e3',
                    Pa = 'SkillsList_lips_a9',
                    Ha = (0, A.Pi)(({ className: e }) => {
                        const t = pn().model,
                            n = t.availableSkillsAmount.get(),
                            a = t.skillsList.irrelevantSkillsList.get(),
                            r = t.skillsList.commonSkillsList.get(),
                            i = t.skillsList.regularSkillsList.get(),
                            s = (0, vn.GS)().mediaSize,
                            l = [];
                        return (
                            s < vn.cJ.Medium
                                ? l.push([...ye.tP(a), ...ye.tP(r), ...ye.tP(i)])
                                : (a.length > 0 && l.push(a), r.length > 0 && l.push(r), i.length > 0 && l.push(i)),
                            u().createElement(
                                'div',
                                { className: d()(Ia, e) },
                                u().createElement('div', { className: Oa }),
                                u().createElement(
                                    Gn,
                                    { className: Ra, classNames: { bar: Ma, lips: Pa } },
                                    (0, ye.UI)(l, (e, a) =>
                                        u().createElement(
                                            u().Fragment,
                                            { key: `block_${a}` },
                                            u().createElement(Na, {
                                                list: e,
                                                skillsEfficiency: t.skillsEfficiency.get(),
                                                hasAvailableSkills: n > 0,
                                                isExtraLarge: s >= vn.cJ.ExtraLarge,
                                                componentKey: t.skillsList.componentKey.get(),
                                            }),
                                            a !== l.length - 1 && u().createElement('div', { className: Oa }),
                                        ),
                                    ),
                                ),
                                u().createElement('div', { className: Oa }),
                            )
                        );
                    }),
                    Wa = 'SkillsTrainingViewApp_base_f2',
                    ja = 'SkillsTrainingViewApp_closeBtn_b8',
                    za = 'SkillsTrainingViewApp_crewWidget_52',
                    Ga = 'SkillsTrainingViewApp_ttcWidget_f0',
                    $a = 'SkillsTrainingViewApp_content_14',
                    Za = 'SkillsTrainingViewApp_skillsList_9f',
                    Ua = 'SkillsTrainingViewApp_footer_fa';
                function Va() {
                    return (
                        (Va =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Va.apply(this, arguments)
                    );
                }
                const qa = (0, A.Pi)(() => {
                    const e = pn(),
                        t = e.model,
                        n = e.controls,
                        a = () => {
                            n.close();
                        };
                    var r;
                    return (
                        (r = a),
                        v(p.n.ESCAPE, r),
                        u().createElement(
                            'div',
                            { className: Wa },
                            u().createElement(
                                'div',
                                { className: ja },
                                u().createElement(b, {
                                    caption: R.strings.common.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: a,
                                }),
                            ),
                            u().createElement('div', { className: za }, u().createElement(k.O, null)),
                            u().createElement(
                                'div',
                                { className: Ga },
                                u().createElement(
                                    En,
                                    Va({}, t.vehicleInfo.get(), { isPerkTipShown: !0 }),
                                    u().createElement(Kt, {
                                        showBackground: !1,
                                        resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: $a },
                                u().createElement(On, null),
                                u().createElement(Ha, { className: Za }),
                                u().createElement(Dn, { className: Ua }),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    o().render(
                        u().createElement(i.z, null, u().createElement(hn, null, u().createElement(qa, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2857: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => o });
                var a = n(6483),
                    r = n.n(a),
                    i = n(6373),
                    s = n(6179),
                    u = n.n(s),
                    l = n(8699);
                const o = (0, s.memo)(({ classMix: e, targetId: t }) =>
                    u().createElement(
                        i.i,
                        {
                            header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                            body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            targetId: t,
                        },
                        u().createElement(
                            'div',
                            { className: r()(l.Z.base, e) },
                            u().createElement('div', { className: l.Z.icon }),
                        ),
                    ),
                );
            },
            5563: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => g, r: () => m });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7078),
                    s = n(2603),
                    u = n(771),
                    l = n(3649),
                    o = n(9916),
                    c = n(6179),
                    d = n.n(c),
                    _ = n(130);
                let m;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(m || (m = {}));
                const g = (0, c.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = u.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: c = m.Normal,
                    }) => {
                        const g = e === u.sU,
                            E = g ? { tooltipId: s.M4 } : { tooltipId: s.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            i.t,
                            { targetId: a, args: E, isEnabled: t !== u.y$ },
                            d().createElement(
                                'div',
                                { className: r()(_.Z.base, _.Z[`base__${c}`], g && _.Z.base__untrained, n) },
                                g
                                    ? d().createElement('div', { className: _.Z.icon })
                                    : d().createElement(
                                          'div',
                                          { className: r()(_.Z.percent, e === u.yb && _.Z.percent__full) },
                                          (0, l.dL)(o.Z5.getNumberFormat(100 * e, o.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
            },
            2768: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => l, y: () => o });
                var a = n(6483),
                    r = n.n(a),
                    i = n(6179),
                    s = n.n(i),
                    u = n(4458);
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
                    const i = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                    return s().createElement('div', {
                        style: null !== i ? { backgroundImage: `url(${i})` } : void 0,
                        className: r()(u.Z.base, u.Z[`base__${t}`], n),
                    });
                });
            },
            8617: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => p });
                var a = n(6483),
                    r = n.n(a),
                    i = n(771),
                    s = n(9480),
                    u = n(6179),
                    l = n.n(u),
                    o = n(5563),
                    c = n(8018),
                    d = n(5108),
                    _ = n(4091),
                    m = n(552),
                    g = n(8326),
                    E = n(5855),
                    b = n(3591);
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
                const p = ({
                    data: e,
                    dataToCompare: t,
                    classes: n,
                    tankmanID: a = i.y$,
                    size: u = E.Ow.c24x24,
                    collapseType: p = E.t6.None,
                    isSkillTooltipEnabled: f = !1,
                    isAcceleratedTrainingVisible: v = !1,
                    isNewSkillAnimated: A = !1,
                    isEfficiencyVisible: k = !1,
                    isBonusSkillsVisible: C = !0,
                    tooltipsTargetId: w = R.invalid('resId'),
                    tooltipArgs: F,
                    blinkStyle: y,
                    children: B,
                }) => {
                    const D = e.majorSkills,
                        S = e.bonusSkills,
                        L = e.skillsEfficiency,
                        x = (null == t ? void 0 : t.skillsEfficiency) || L,
                        T = (0, c.Y4)(L),
                        N = void 0 !== t && t.skillsEfficiency !== L,
                        I = T !== c.H$.Normal || k || N,
                        O = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        P = M || S,
                        H = s.lN(P),
                        W = C && P.length > 0,
                        j = A || void 0 !== t,
                        z = (null == O ? void 0 : O.length) === i.GT,
                        G = (0, b.Ld)(p, P.length, I, T !== c.H$.Low && void 0 !== H && H.level < i.I),
                        $ = {
                            size: u,
                            efficiencyState: T,
                            tooltipData: { targetId: w, isEnabled: f, tankmanID: a, args: F },
                        };
                    return l().createElement(
                        'div',
                        { className: r()(g.Z.base, g.Z[`base__${u}`], null == n ? void 0 : n.base) },
                        I &&
                            l().createElement(
                                d.r,
                                { blinkStyle: y, isEnabled: N && j },
                                l().createElement(o.A, {
                                    efficiencyValue: x,
                                    tankmanID: a,
                                    className: g.Z.efficiency,
                                    size: (0, b.h7)(u, W),
                                    targetId: w,
                                }),
                            ),
                        B,
                        l().createElement(
                            'div',
                            { className: g.Z.rows },
                            j
                                ? l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(
                                          _.s,
                                          h(
                                              {
                                                  skills: D,
                                                  possibleSkills: O,
                                                  blinkStyle: y,
                                                  isAcceleratedTrainingVisible: v,
                                                  isNewSkillAnimated: A,
                                                  isSkillsEfficiencyLearning: N,
                                              },
                                              $,
                                          ),
                                      ),
                                      W &&
                                          l().createElement(
                                              _.s,
                                              h(
                                                  {
                                                      skills: S,
                                                      skillType: E.W.Bonus,
                                                      possibleSkills: M,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: G,
                                                      blinkStyle: y,
                                                      isNewSkillAnimated: A,
                                                      isAllMajorSkillsLearned: z,
                                                  },
                                                  $,
                                              ),
                                          ),
                                  )
                                : l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(m.X, h({ skills: D, isAcceleratedTrainingVisible: v }, $)),
                                      W &&
                                          l().createElement(
                                              m.X,
                                              h(
                                                  {
                                                      skills: S,
                                                      skillType: E.W.Bonus,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: G,
                                                  },
                                                  $,
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
                    i = n(2686),
                    s = n(126),
                    u = n(6373),
                    l = n(3138),
                    o = n(3112),
                    c = n(6179),
                    d = n.n(c),
                    _ = n(7030),
                    m = n(2582),
                    g = n(7160),
                    E = n(5855),
                    b = n(1890);
                const h = d().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: h }) {
                    const p = (0, c.useState)(m.yZ.Stop),
                        f = p[0],
                        v = p[1],
                        A = (0, o.V)(),
                        k =
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
                        C = (0, s.q)(k),
                        w = h === E.Ow.c44x44 ? 60 : 36,
                        F = (0, _.useSpring)(
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
                            const e = setTimeout(() => v(m.yZ.Play), 100 * (n - 1) - 100 * t);
                            return () => clearTimeout(e);
                        }, [t, n]),
                        d().createElement(
                            u.i,
                            { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                            d().createElement(
                                _.animated.div,
                                { style: F, className: r()(b.Z.base, b.Z[`base__${h}`], a) },
                                d().createElement(
                                    'div',
                                    { className: b.Z.icon },
                                    d().createElement(i.At, {
                                        width: k.width,
                                        height: k.height,
                                        frameCount: k.frameCount,
                                        getImageSource: C,
                                        loop: !1,
                                        state: f,
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
                    i = n(6179),
                    s = n.n(i),
                    u = n(2582),
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
                        d = (0, i.useState)(u.yZ.Stop),
                        _ = d[0],
                        m = d[1];
                    return (
                        (0, i.useEffect)(() => {
                            const e = () => {
                                m(u.yZ.Play);
                            };
                            return (0, o.L)(e), () => (0, o.r)(e);
                        }, []),
                        s().createElement(a.At, {
                            width: n.width,
                            height: n.height,
                            frameCount: n.frameCount,
                            getImageSource: c,
                            loop: !1,
                            state: _,
                            onAnimationDone: () => {
                                m(u.yZ.Stop);
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
                const i = new Map();
                let s = null;
                const u = () => {
                        i.size
                            ? s ||
                              (s = window.setInterval(() => {
                                  for (var e, t = a(i.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : s && (clearInterval(s), (s = null));
                    },
                    l = (e) => {
                        i.set(e, e), u();
                    },
                    o = (e) => {
                        i.delete(e), u();
                    };
            },
            3413: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => l, r: () => u });
                var a = n(6179),
                    r = n.n(a),
                    i = n(8147),
                    s = n(9108);
                let u;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(u || (u = {}));
                const l = r().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: n,
                    className: a,
                    children: l,
                }) {
                    return n === u.Scale
                        ? r().createElement(s.Y, { isEnabled: !0, className: a }, l)
                        : n === u.FadeIn
                          ? r().createElement(i.U, { size: e, key: t, className: a }, l)
                          : r().createElement('div', { className: a }, l);
                });
            },
            5108: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => s });
                var a = n(6179),
                    r = n.n(a),
                    i = n(7030);
                const s = r().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return r().createElement(i.animated.div, { style: t && e ? e : void 0 }, n);
                });
            },
            8147: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(3112),
                    r = n(6179),
                    i = n.n(r),
                    s = n(7030),
                    u = n(7160),
                    l = n(5855);
                const o = ({ size: e, children: t, className: n }) => {
                    const r = (0, a.V)(),
                        o = e === l.Ow.c44x44 ? 48 : 26,
                        c = (0, s.useSpring)({
                            from: { opacity: 0, marginRight: -o * r },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: u.Fs },
                            delay: 800,
                        });
                    return i().createElement(s.animated.div, { style: c, className: n }, t);
                };
            },
            7765: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3138),
                    s = n(3649),
                    u = n(6179),
                    l = n.n(u),
                    o = n(7030),
                    c = n(7160),
                    d = n(8110);
                const _ = l().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                    const a = (0, o.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        u = (0, o.useSpring)(() => ({
                            from: { x: i.O.view.remToPx(-5), opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            config: { duration: 300, easing: c.qb },
                            delay: 700,
                        }))[0],
                        _ = (0, o.useSpring)(
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
                            { style: n ? u : void 0, className: r()(d.Z.level, d.Z.level__skillLost) },
                            a.val.to((e) => (0, s.dL)(Math.floor(e))),
                        ),
                        l().createElement(
                            o.animated.div,
                            { style: n ? Object.assign({}, u, _) : _, className: r()(d.Z.level, d.Z.level__skillBlur) },
                            a.val.to((e) => (0, s.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => u });
                var a = n(6179),
                    r = n.n(a),
                    i = n(7030),
                    s = n(7160);
                const u = r().memo(function ({ isEnabled: e, className: t, children: n }) {
                    const u = (0, i.useSpring)(() => ({ from: { scale: 1 } })),
                        l = u[0],
                        o = u[1];
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
                        r().createElement(i.animated.div, { style: e ? l : void 0, className: t }, n)
                    );
                });
            },
            4055: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => o });
                var a = n(3112),
                    r = n(6179),
                    i = n.n(r),
                    s = n(7030),
                    u = n(7160),
                    l = n(5855);
                const o = i().memo(function ({ size: e, className: t, children: n }) {
                    const r = e === l.Ow.c44x44 ? 48 : 26,
                        o = (0, a.V)(),
                        c = (0, s.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -r * o }],
                                config: { duration: 400, easing: u.Fs },
                            }),
                            [o, r],
                        )[0];
                    return i().createElement(s.animated.div, { style: c, className: t }, n);
                });
            },
            4091: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => f });
                var a = n(6483),
                    r = n.n(a),
                    i = n(2344),
                    s = n(9480),
                    u = n(4385),
                    l = n(3649),
                    o = n(6179),
                    c = n.n(o),
                    d = n(2857),
                    _ = n(8018),
                    m = n(5855),
                    g = n(3591),
                    E = n(6177),
                    b = n(7713),
                    h = n(9772),
                    p = n(4722);
                const f = ({
                    skills: e,
                    skillType: t = m.W.Major,
                    possibleSkills: n,
                    isAcceleratedTrainingVisible: a = !1,
                    collapseLayout: o = m.hj.None,
                    efficiencyState: f,
                    size: v,
                    tooltipData: A,
                    blinkStyle: k,
                    isSkillsEfficiencyLearning: C = !1,
                    isAllMajorSkillsLearned: w = !1,
                    isNewSkillAnimated: F = !1,
                    className: y,
                }) => {
                    const B = void 0 === n ? e : n,
                        D = (0, i.D9)(e),
                        S = (0, i.D9)(B),
                        L = D && s.lN(D),
                        x = s.lN(e),
                        T = (0, g.dv)(B),
                        N = s.lN(B),
                        I = n ? e.length - n.length : 0,
                        O = f !== _.H$.Low || C,
                        R = (0, g.Nn)(B);
                    return c().createElement(
                        'div',
                        { className: r()(p.Z.base, p.Z[`base__${v}`], p.Z[`base__collapse${(0, l.e)(o)}`], y) },
                        (0, g.oo)(e, D, B, S, (e, n, a) => {
                            const i = (0, g.mg)(e);
                            return c().createElement(b.k, {
                                key: a,
                                index: a,
                                skill: e,
                                skillState: i,
                                skillType: t,
                                previousSkill: S && s.U2(S, a),
                                skillAnimationType: n,
                                size: v,
                                skillsSignature: R,
                                efficiencyState: f,
                                tooltipData: A,
                                blinkStyle: k,
                                isNewSkillAnimated: F,
                                className: r()(
                                    p.Z.skill,
                                    p.Z[`skill__state${(0, l.e)(i)}`],
                                    e === N && p.Z.skill__last,
                                    e === T && p.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        O &&
                            c().createElement(h.H, {
                                skillsAmountDiff: I,
                                size: v,
                                wasLearned: L && x && L.level !== x.level,
                                skillType: t,
                                isAllMajorSkillsLearned: w,
                                skill: x,
                                possibleSkill: N,
                                blinkStyle: k,
                                className: p.Z.level,
                            }),
                        a &&
                            c().createElement(d.L, {
                                classMix: p.Z.acceleratedTrainingIcon,
                                targetId: null == A ? void 0 : A.targetId,
                            }),
                        I > 0 &&
                            (0, u.K)(I, (e) =>
                                c().createElement(E.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: I,
                                    type: t,
                                    className: p.Z.lostSkill,
                                    size: v,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => f });
                var a = n(6483),
                    r = n.n(a),
                    i = n(771),
                    s = n(9480),
                    u = n(3649),
                    l = n(6179),
                    o = n.n(l),
                    c = n(2857),
                    d = n(8018),
                    _ = n(5855),
                    m = n(3591),
                    g = n(1606),
                    E = n(9561),
                    b = n(2202),
                    h = n(4722);
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const f = ({
                    skills: e,
                    collapseLayout: t = _.hj.None,
                    skillType: n = _.W.Major,
                    efficiencyState: a,
                    size: l,
                    tooltipData: f,
                    className: v,
                    isAcceleratedTrainingVisible: A,
                }) => {
                    const k = s.lN(e),
                        C = (0, m.dv)(e),
                        w = a !== d.H$.Low && (null == k ? void 0 : k.level) !== i.I;
                    return o().createElement(
                        'div',
                        { className: r()(h.Z.base, h.Z[`base__${l}`], h.Z[`base__collapse${(0, u.e)(t)}`], v) },
                        s.UI(e, (e, t) => {
                            const i = (0, m.mg)(e);
                            return o().createElement(
                                b.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: f,
                                    skillType: n,
                                    className: r()(
                                        h.Z.skill,
                                        h.Z[`skill__state${(0, u.e)(i)}`],
                                        e === k && h.Z.skill__last,
                                        e === C && h.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                o().createElement(g.U, p({ size: l, type: n, efficiencyState: a, skillState: i }, e)),
                            );
                        }),
                        w && k && o().createElement(E.T, { skillLevel: k.level, className: h.Z.level }),
                        A &&
                            o().createElement(c.L, {
                                classMix: h.Z.acceleratedTrainingIcon,
                                targetId: null == f ? void 0 : f.targetId,
                            }),
                    );
                };
            },
            9772: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => d });
                var a = n(771),
                    r = n(6179),
                    i = n.n(r),
                    s = n(5855),
                    u = n(5108),
                    l = n(7765),
                    o = n(9108),
                    c = n(9561);
                const d = ({
                    skillsAmountDiff: e,
                    size: t,
                    skillType: n,
                    wasLearned: r,
                    isAllMajorSkillsLearned: d,
                    skill: _,
                    possibleSkill: m,
                    blinkStyle: g,
                    className: E,
                }) => {
                    const b = m || _,
                        h = void 0 !== _ && void 0 !== m ? m.level - _.level : 0,
                        p = e > 0,
                        f = e < 0 || h > 0;
                    return !b ||
                        (b.level === a.I && 0 === h) ||
                        ((null == m ? void 0 : m.level) === a.I && n === s.W.Bonus && h > 0 && !d)
                        ? null
                        : p || (h < 0 && 0 === e)
                          ? i().createElement(l.G, { size: t, level: b.level, withSlideOut: p })
                          : i().createElement(
                                o.Y,
                                { isEnabled: Boolean(r) },
                                i().createElement(
                                    u.r,
                                    { blinkStyle: g, isEnabled: f },
                                    i().createElement(c.T, { skillLevel: b.level, isHighlighted: f, className: E }),
                                ),
                            );
                };
            },
            9561: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3649),
                    s = n(6179),
                    u = n.n(s),
                    l = n(3591),
                    o = n(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                    u().createElement(
                        'div',
                        { className: r()(o.Z.base, t && o.Z.base__highlighted, n) },
                        (0, i.dL)(e > 0 && e < 0.01 ? 0.01 : (0, l.iv)(e)),
                    );
            },
            2202: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => l });
                var a = n(3415),
                    r = n(6179),
                    i = n.n(r),
                    s = n(3591);
                const u = ['className', 'children'];
                const l = (e) => {
                    let t = e.className,
                        n = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    return i().createElement(a.l, { tooltipArgs: (0, s.iR)(r), className: t }, n);
                };
            },
            7713: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => E });
                var a = n(771),
                    r = n(6179),
                    i = n.n(r),
                    s = n(5855),
                    u = n(9152),
                    l = n(3413),
                    o = n(5108),
                    c = n(4055),
                    d = n(2202),
                    _ = n(1606);
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
                const g = (e, t) => (e ? l.r.Scale : t ? l.r.FadeIn : l.r.None),
                    E = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: r,
                        skillType: E,
                        size: b,
                        efficiencyState: h,
                        tooltipData: p,
                        skillsSignature: f,
                        blinkStyle: v,
                        isNewSkillAnimated: A = !1,
                        skillAnimationType: k = s.Qm.None,
                        className: C,
                    }) => {
                        const w = k === s.Qm.Blink || k === s.Qm.SlideOutAndBlink,
                            F = k === s.Qm.SlideOutAndBlink || k === s.Qm.SlideOut,
                            y = k === s.Qm.FadeIn,
                            B = {
                                skillIndex: e,
                                name: t.name,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: p,
                                skillType: E,
                            };
                        return A && t.name === a.jw && b === s.Ow.c24x24
                            ? i().createElement(
                                  d.O,
                                  m({}, B, { className: C }),
                                  i().createElement(u.E, { type: E, state: r }),
                              )
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  n &&
                                      F &&
                                      i().createElement(
                                          c.w,
                                          { size: b, className: C, key: n.name },
                                          i().createElement(
                                              o.r,
                                              { blinkStyle: v, isEnabled: w },
                                              i().createElement(
                                                  _.U,
                                                  m({ size: b, type: E, efficiencyState: h, skillState: r }, n),
                                              ),
                                          ),
                                      ),
                                  i().createElement(
                                      l.L,
                                      {
                                          size: b,
                                          skillsSignature: f,
                                          className: C,
                                          animationType: g(k === s.Qm.ScaleUp, y),
                                      },
                                      i().createElement(
                                          d.O,
                                          B,
                                          i().createElement(
                                              o.r,
                                              { blinkStyle: v, isEnabled: w },
                                              i().createElement(
                                                  _.U,
                                                  m({ size: b, type: E, efficiencyState: h, skillState: r }, t),
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
                    i = n(771),
                    s = n(3649),
                    u = n(6179),
                    l = n.n(u),
                    o = n(2768),
                    c = n(8018),
                    d = n(5855),
                    _ = n(3591),
                    m = n(699);
                const g = { [d.Ow.c24x24]: o.F.c22x22, [d.Ow.c44x44]: o.F.c52x52 },
                    E = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        icon: u,
                        name: E,
                        skillState: b,
                        hasInstruction: h,
                        className: p,
                    }) => {
                        const f = (0, _.Ot)(E, b, h, t, n),
                            v = (!h && n === c.H$.Untrained) || t,
                            A = u === i.jw;
                        return l().createElement(
                            'div',
                            {
                                className: r()(
                                    m.Z.base,
                                    m.Z[`base__type${(0, s.e)(a)}`],
                                    m.Z[`base__state${(0, s.e)(b)}`],
                                    m.Z[`base__border${(0, s.e)(f)}`],
                                    m.Z[`base__${e}`],
                                    v && m.Z.base__disabled,
                                    p,
                                ),
                            },
                            l().createElement('div', {
                                className: m.Z.background,
                                style:
                                    a === d.W.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${f}')`,
                                          }
                                        : void 0,
                            }),
                            A && b === d.Lm.Learned && l().createElement('div', { className: m.Z.newSkillHighLight }),
                            l().createElement(o.y, { iconName: u, size: g[e], className: m.Z.icon }),
                            v && l().createElement('div', { className: m.Z.disabledOverlay }),
                        );
                    };
            },
            5855: (e, t, n) => {
                'use strict';
                let a, r, i, s, u, l, o;
                n.d(t, { Lm: () => o, Ow: () => u, Qm: () => r, W: () => l, hj: () => i, t6: () => a, u0: () => s }),
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
                    })(i || (i = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(s || (s = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(u || (u = {})),
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
                    Ot: () => _,
                    dv: () => d,
                    h7: () => g,
                    iR: () => m,
                    iv: () => f,
                    mg: () => c,
                    oo: () => p,
                });
                var a = n(2603),
                    r = n(771),
                    i = n(9480),
                    s = n(5563),
                    u = n(8018),
                    l = n(5855);
                const o = (e) => i.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < r.I ? l.Lm.Learning : l.Lm.Learned),
                    d = (e) => i.dF(e, (e) => e.level === r.I),
                    _ = (e, t, n, a, i = u.H$.Normal) =>
                        e === r.jw
                            ? l.u0.LightYellow
                            : i === u.H$.Untrained || a
                              ? t === l.Lm.Learning
                                  ? l.u0.Yellow
                                  : l.u0.Grey
                              : i === u.H$.Low
                                ? n
                                    ? l.u0.Grey
                                    : l.u0.Red
                                : t === l.Lm.Learning
                                  ? l.u0.Yellow
                                  : l.u0.Grey,
                    m = ({ name: e, level: t, customName: n, skillType: i, skillIndex: s, tooltipData: u }) => {
                        const o = { targetId: u.targetId, isEnabled: u.isEnabled };
                        return e === r.jw
                            ? i === l.W.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: u.tankmanID, skillIndex: s }, u.args),
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
                                              tankmanID: u.tankmanID,
                                              skillName: e,
                                              isBonus: i === l.W.Bonus,
                                              level: t,
                                              customName: n,
                                          },
                                          u.args,
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
                    b = (e, t) => {
                        const n = i.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    h = (e, t) => {
                        const n = i.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    p = (e, t, n, a, s) => {
                        if (!a || !t) return i.UI(n, (e, t) => s(e, l.Qm.None, t));
                        const u = new Map(i.UI(t, ({ name: e, level: t }) => [e, t])),
                            o = new Map(i.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return i.UI(n, (i, d) => {
                            const _ = i.name,
                                m = i.level,
                                g = _ === r.jw,
                                E = b(e, d),
                                p = g ? h(e, d) : o.get(_),
                                f = g ? h(t, d) : u.get(_),
                                v = b(n, d - 1),
                                A = b(a, d),
                                k = b(a, d + 1);
                            let C = l.Qm.None;
                            return (
                                c || _ !== k || v === A || g || E !== r.jw
                                    ? g && d === n.length - 1 && c
                                        ? (C = l.Qm.FadeIn)
                                        : (!g && !o.has(_)) || (void 0 === E && g) || (p !== m && m === r.I)
                                          ? (C = l.Qm.Blink)
                                          : f !== p && (C = l.Qm.ScaleUp)
                                    : ((c = !0), (C = o.has(_) ? l.Qm.SlideOut : l.Qm.SlideOutAndBlink)),
                                s(i, C, d)
                            );
                        });
                    },
                    f = (e, t = 2) => {
                        const n = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * n) / n : e;
                    };
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => o });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3649),
                    s = n(6179),
                    u = n.n(s),
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
                            const r = n.$dyn((0, i.BN)(e));
                            if (!r) throw Error;
                            return { backgroundImage: `url(${r})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, a]);
                    return u().createElement('div', { style: c, className: r()(l.Z.base, l.Z[`base__${t}`], n) });
                };
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => m });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3457),
                    s = n(2106),
                    u = n(9987),
                    l = n(6179),
                    o = n.n(l),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
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
                const m = o().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        l = e.children,
                        m = e.type,
                        g = void 0 === m ? s.L.secondary : m,
                        E = e.size,
                        b = void 0 === E ? s.q.small : E,
                        h = e.hasIndicator,
                        p = void 0 === h || h,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, d);
                    return o().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        o().createElement(i.u5, _({ type: g, size: b, mixClass: c.Z.button }, f), l),
                        o().createElement('div', { className: c.Z.overlay }),
                        p && o().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            o().createElement(
                                'div',
                                { className: c.Z.counter },
                                o().createElement(u.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, n) => {
                'use strict';
                n.d(t, { BH: () => i, Fs: () => s, ei: () => a, qb: () => r });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    i = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    s = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { Ds: () => o, Gc: () => s, H$: () => u, Y4: () => l, gO: () => i, wP: () => r });
                var a = n(771);
                n(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let i;
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
                })(i || (i = {}));
                const s = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let u;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(u || (u = {}));
                const l = (e) => (e === a.sU ? u.Untrained : e < a.yb ? u.Low : u.Normal),
                    o = function () {
                        let e, t;
                        const n = function (n, a) {
                            e && clearTimeout(e),
                                (t = n),
                                (e = setTimeout(function () {
                                    t.call(this), clearTimeout(e);
                                }, a));
                        };
                        return (
                            (n.cancel = function () {
                                e && clearTimeout(e);
                            }),
                            n
                        );
                    };
            },
            4119: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => sn });
                var a = n(4029),
                    r = n(6179),
                    i = n.n(r),
                    s = n(5415),
                    u = n(3403),
                    l = n(3215),
                    o = n(4598),
                    c = n(9480),
                    d = n(3946),
                    _ = n(4828);
                const m = [
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
                                i = (0, d.Om)((e) => t.selectedSlotIdx.get() === e),
                                s = (0, d.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                u = (0, d.Om)((e) => {
                                    var t;
                                    return null == (t = c.U2(n(), e)) ? void 0 : t.tankman;
                                }),
                                l = (0, d.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (n = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: m.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isCurrentLayoutSkillsTraining:
                                                e === R.views.lobby.crew.SkillsTrainingView('resId'),
                                            isPreviousLayoutHangar: n === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: m.includes(n),
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
                                b = (0, d.Om)(() => {
                                    return (e = t.currentLayoutID.get()), _.AB[e] || _.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: n,
                                    isSlotSelected: i,
                                    isAnySlotSelected: s,
                                    getSlotTankman: u,
                                    isAnyEmptySlots: a,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: E,
                                    getLayoutInfo: l,
                                    getUiLoggingParentScreen: b,
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
                    b = g[1];
                var h = n(6483),
                    p = n.n(h),
                    f = n(6373),
                    v = n(2056);
                let A;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(A || (A = {}));
                const k = 'ButtonsBar_base_9c',
                    C = 'ButtonsBar_button_d1',
                    w = 'ButtonsBar_button__crewOperaions_70',
                    F = 'ButtonsBar_button__crewBooks_b4',
                    y = 'ButtonsBar_button__toggle_64';
                var B = n(3457),
                    D = n(9987),
                    S = n(3649);
                const L = 'CrewBookButton_base_da',
                    x = 'CrewBookButton_button_ee',
                    T = 'CrewBookButton_icon_11',
                    N = 'CrewBookButton_discount_6b',
                    I = 'CrewBookButton_counter_5d',
                    O = (0, u.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = b(),
                            a = n.model,
                            r = n.controls,
                            s = a.crewBooks.get(),
                            u = r.onCrewBooksClick,
                            l = s.isDisabled || t;
                        return i().createElement(
                            f.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, S.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: s.totalAmount,
                                }),
                            },
                            i().createElement(
                                'div',
                                { id: 'crew_book_button', className: p()(L, e) },
                                i().createElement(
                                    B.u5,
                                    { type: B.L$.primary, mixClass: x, disabled: l, onClick: u },
                                    i().createElement('div', { className: T }),
                                ),
                                !l &&
                                    '0' !== s.newAmount &&
                                    i().createElement(
                                        'div',
                                        { className: I },
                                        i().createElement(D.A, { value: s.newAmount }),
                                    ),
                                !l && s.hasDiscount && i().createElement('div', { className: N }),
                            ),
                        );
                    });
                var M = n(3616);
                const P = ['children'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, P);
                    return i().createElement(
                        M.Z,
                        H(
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
                var G = n(1943);
                const $ = 'CrewOperationsButton_base_e3',
                    Z = 'CrewOperationsButton_button_8e',
                    U = 'CrewOperationsButton_icon_0c',
                    V = 'CrewOperationsButton_autoReturnIcon_f0',
                    q = (0, u.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = b().model,
                            a = ((e) => {
                                const t = (0, G.Jp)(_.D9);
                                return (n) => t({ action: _.eX.Click, parentScreen: e, item: n });
                            })(n.computes.getUiLoggingParentScreen()),
                            r = n.crewOperations.get();
                        return i().createElement(
                            'div',
                            { id: 'crew_operations_button', className: p()($, e) },
                            i().createElement(
                                W,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => a(_.x3.CrewOperationsButton),
                                },
                                i().createElement(
                                    f.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(
                                            B.u5,
                                            { type: B.L$.primary, mixClass: Z, disabled: t },
                                            i().createElement('div', { className: U }),
                                        ),
                                        r.isAutoReturnOn && i().createElement('div', { className: V }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Y = n(9631);
                const K = 'CrewToggleButton_base_03',
                    Q = 'CrewToggleButton_button_89',
                    X = 'CrewToggleButton_iconContainer_f9',
                    J = 'CrewToggleButton_icon_a7';
                let ee;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(ee || (ee = {}));
                const te = (0, r.memo)(({ type: e, state: t, isDisabled: n, onClick: a, classMix: s }) => {
                        const u = (0, r.useMemo)(() => {
                            const n = t === A.Disabled ? A.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return i().createElement(
                            'div',
                            { className: p()(K, s) },
                            i().createElement(
                                Y.C,
                                {
                                    type: B.L$.primary,
                                    isActive: t === A.On,
                                    disabled: n || t === A.Disabled,
                                    className: Q,
                                    onClick: a,
                                },
                                i().createElement(
                                    'div',
                                    { className: X },
                                    i().createElement('div', { className: J, style: u }),
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
                    ae = (0, u.Pi)(({ isWidgetDisabled: e }) => {
                        const t = b(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            s = n.wotPlus.get(),
                            u = a.onAcceleratedTrainingClick,
                            l = a.onWotPlusClick,
                            o = ne[r.state];
                        return i().createElement(
                            'div',
                            { className: k },
                            i().createElement(q, { classMix: p()(C, w), isWidgetDisabled: e }),
                            i().createElement(O, { classMix: p()(C, F), isWidgetDisabled: e }),
                            r.state !== A.Hidden &&
                                i().createElement(
                                    f.i,
                                    { header: o.header(), body: o.body() },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(te, {
                                            type: ee.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: u,
                                            classMix: p()(C, y),
                                        }),
                                    ),
                                ),
                            s.state !== A.Hidden &&
                                i().createElement(
                                    v.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(te, {
                                            type: ee.WotPlus,
                                            state: s.state,
                                            isDisabled: e || s.isDisabled,
                                            onClick: l,
                                            classMix: p()(C, y),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    re = 'CrewWidgetApp_base_cc',
                    ie = 'CrewWidgetApp_buttonsBar_e5',
                    se = 'CrewWidgetApp_slotsList_ee';
                var ue = n(7727),
                    le = n(7030),
                    oe = n(8018),
                    ce = n(7160),
                    de = n(7077);
                const _e = 'WidgetTankmanIcon_icon_0f',
                    me = 'WidgetTankmanIcon_icon__small_24',
                    ge = 'WidgetTankmanIcon_icon__cropped_bd',
                    Ee = ({ name: e, isSkin: t = !1, isCropped: n = !1, className: a }) => {
                        const r = (0, s.GS)().mediaSize < s.cJ.Large;
                        return i().createElement(de.G, {
                            name: e,
                            size: r && n ? de.U.c100x60Barracks : de.U.c158x118,
                            isSkin: t,
                            classMix: p()(_e, r && n && me, !r && n && ge, a),
                        });
                    },
                    be = {
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
                const pe = ({ type: e, size: t, isHigh: n, className: a, isVisible: r = !0 }) => {
                        const s = n ? e + 'High' : e;
                        return i().createElement('div', {
                            className: p()(be.base, be[`base__${s}`], r && be.base__visible, a),
                            style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${s})` },
                        });
                    },
                    fe = 'BaseSlot_base_97',
                    ve = 'BaseSlot_base__hovered_61',
                    Ae = 'BaseSlot_base__inactive_7e',
                    ke = 'BaseSlot_base__high_2c',
                    Ce = 'BaseSlot_delimiter_f8',
                    we = 'BaseSlot_layer_cb',
                    Fe = ({
                        isHigh: e,
                        size: t,
                        onClick: n,
                        children: a,
                        isSelected: s = !1,
                        isDisabled: u,
                        isEnabledForMouse: l,
                        isEmpty: o = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, r.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            g = _ && (!s || (!o && c.isCurrentLayoutMemberChange)),
                            E = g && !o && !c.isCurrentLayoutHangar;
                        return i().createElement(
                            'div',
                            {
                                className: p()(
                                    fe,
                                    e && ke,
                                    (_ || s) && !c.isCurrentLayoutHangar && ve,
                                    (s || !l) && Ae,
                                ),
                                onClick: n,
                                onMouseEnter: () => {
                                    l && !s && (ue.$.playHighlight(), m(!0));
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            !c.isCurrentLayoutMemberChange &&
                                i().createElement(pe, {
                                    type: he.SelectedGlow,
                                    size: t,
                                    isHigh: e,
                                    isVisible: s,
                                    className: we,
                                }),
                            i().createElement(pe, {
                                type: he.HoverGlow,
                                size: t,
                                isHigh: e,
                                isVisible: E,
                                className: we,
                            }),
                            i().createElement(pe, {
                                type: he.TankmanSlotHover,
                                size: t,
                                isHigh: e,
                                isVisible: g,
                                className: we,
                            }),
                            u &&
                                i().createElement(pe, {
                                    type: he.Disabled,
                                    size: t,
                                    isHigh: e,
                                    isVisible: !0,
                                    className: we,
                                }),
                            a,
                            i().createElement('div', { className: Ce }),
                        );
                    },
                    ye = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: a = !1,
                        children: s,
                        className: u,
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
                        return i().createElement(le.animated.div, { className: u, style: c }, s);
                    },
                    Be = 'DogSlot_base_8f',
                    De = 'DogSlot_icon_ba',
                    Se = 'DogSlot_container_63',
                    Le = 'DogSlot_roleAndName_c9',
                    xe = 'DogSlot_role_5c',
                    Te = 'DogSlot_name_9c',
                    Ne = 'DogSlot_btnDetails_b7',
                    Ie = { transform: 'translateX(0rem)' },
                    Oe = (0, u.Pi)(({ isDisabled: e, layoutInfo: t, size: n }) => {
                        const a = b(),
                            s = a.model,
                            u = a.controls,
                            l = s.nation.get(),
                            o = u.onDogMoreInfoClick,
                            c = (0, r.useCallback)(() => {
                                !e && (0, ue.G)(oe.gO.RUDY);
                            }, [e]),
                            d = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && o();
                                },
                                [o, e],
                            ),
                            _ = (0, le.useSpring)(
                                () => ({
                                    from: Ie,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: ce.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(l);
                        return i().createElement(
                            f.i,
                            { header: m.header(), body: m.body() },
                            i().createElement(
                                'div',
                                null,
                                i().createElement(
                                    Fe,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        size: n,
                                    },
                                    i().createElement(
                                        ye,
                                        {
                                            startState: Ie,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: Be,
                                            isTankmanMode: !1,
                                        },
                                        i().createElement(
                                            le.animated.div,
                                            { style: _ },
                                            i().createElement(Ee, { name: 'ussr_dog_1', isCropped: !0, className: De }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: Se },
                                            i().createElement(
                                                'div',
                                                { className: Le },
                                                i().createElement('div', { className: xe }),
                                                i().createElement(
                                                    'div',
                                                    { className: Te },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(l).name(),
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: Ne },
                                                i().createElement(
                                                    B.u5,
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
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: u,
                    }) => {
                        const l = (0, r.useCallback)(() => {
                                (0, Re.c9)(Re.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    ue.$.playYes();
                            }, [i, t, n, a]),
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
                                    u && u(e), ((e) => e.button === z.RIGHT)(e) && l();
                                },
                                [u, l],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && o();
                            }, [s, o]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Pe = ['children'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const We = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Pe);
                        return i().createElement(
                            Me,
                            He({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    je = 'ChangeCrewButton_base_0f',
                    ze = 'ChangeCrewButton_base__inactive_77',
                    Ge = 'ChangeCrewButton_normalState_07',
                    $e = 'ChangeCrewButton_normalState__hide_db',
                    Ze = 'ChangeCrewButton_hoverState_68',
                    Ue = 'ChangeCrewButton_hoverState__show_89',
                    Ve = (0, u.Pi)(({ isSelected: e, isLocked: t, mainRole: n, isFemale: a }) => {
                        const s = b().model,
                            u = (0, r.useState)(!1),
                            l = u[0],
                            o = u[1],
                            c = (0, G.Sr)(_.D9, {
                                item: _.x3.ChangeButtonTooltip,
                                action: _.eX.Viewed,
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
                            m = d[0],
                            g = d[1];
                        return i().createElement(
                            f.i,
                            {
                                header: m,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            i().createElement(
                                'div',
                                {
                                    className: p()(je, (t || e) && ze),
                                    onMouseEnter: () => {
                                        c.onShow(), t || e || (ue.$.playHighlight(), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        c.onHide(), o(!1);
                                    },
                                },
                                i().createElement('div', { className: p()(Ge, l && $e) }),
                                i().createElement('div', { className: p()(Ze, (e || l) && Ue) }),
                            ),
                        );
                    }),
                    qe = 'CrewSlot_base_ac',
                    Ye = 'CrewSlot_changeCrew_02',
                    Ke = 'CrewSlot_content_5b',
                    Qe = 'CrewSlot_content__withChangeCrewButton_4e',
                    Xe = 'CrewSlot_layer_49';
                var Je = n(7078),
                    et = n(2603),
                    tt = n(771);
                const nt = 'SpecializationAndName_base_ef',
                    at = 'SpecializationAndName_roleWrapper_87',
                    rt = 'SpecializationAndName_role_55',
                    it = 'SpecializationAndName_role__withGap_35',
                    st = 'SpecializationAndName_name_aa',
                    ut = 'SpecializationAndName_name__highlighted_1b',
                    lt = ({ roles: e, tankmanID: t = tt.y$, slotIdx: n, name: a, hasPostProgression: r = !1 }) =>
                        i().createElement(
                            'div',
                            { className: nt },
                            i().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.rs, slotIdx: n, tankmanID: t },
                                },
                                i().createElement(
                                    'div',
                                    { className: at },
                                    c.UI(e, (e, t) =>
                                        i().createElement('div', {
                                            key: `role__${e}`,
                                            className: p()(rt, t > 0 && it),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            i().createElement('div', { className: p()(st, r && ut) }, a),
                        ),
                    ot = 'EmptySlotContent_base_77',
                    ct = 'EmptySlotContent_base__high_d7',
                    dt = 'EmptySlotContent_tankmanIcon_07',
                    _t = 'EmptySlotContent_icon_a8',
                    mt = 'EmptySlotContent_iconContainer_25',
                    gt = 'EmptySlotContent_specialization_1f',
                    Et = 'EmptySlotContent_specialization__disabled_3d',
                    bt = 'EmptySlotContent_vehicle_55',
                    ht = { transform: 'translateX(0rem)', opacity: 1 },
                    pt = { transform: 'translateX(-70rem)', opacity: 0 },
                    ft = (0, r.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: a,
                            isDisabled: s,
                            isSelected: u,
                            slotIdx: l,
                            blinkStyle: o,
                            qtTankmanIconStyle: d,
                            isHigh: _,
                        }) => {
                            const m = (0, le.useSpring)(
                                    () => ({
                                        from: ht,
                                        to: pt,
                                        config: { duration: 200, easing: ce.ei },
                                        immediate: !0,
                                        pause: u,
                                    }),
                                    [u],
                                ),
                                g = m[0],
                                E = m[1],
                                b = (0, r.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || E.start({ reset: !0, reverse: !0 });
                                }, [E, t]),
                                h = c.U2(e, 0) || '',
                                f = R.strings.crew_widget.vehicleWithName.$dyn((0, S.BN)(a)),
                                v = (0, S.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(h),
                                });
                            return i().createElement(
                                'div',
                                { className: p()(ot, _ && ct), onMouseEnter: b, onMouseLeave: b },
                                i().createElement(
                                    'div',
                                    { className: dt },
                                    i().createElement(
                                        le.animated.div,
                                        { className: mt, style: d },
                                        i().createElement(Ee, { name: 'empty', className: _t, isCropped: !_ }),
                                        i().createElement(
                                            le.animated.div,
                                            { className: mt, style: s ? void 0 : o },
                                            i().createElement(Ee, { name: 'emptyRed', className: _t, isCropped: !_ }),
                                        ),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(gt, s && Et) },
                                    i().createElement(lt, { slotIdx: l, roles: e, name: v }),
                                ),
                                i().createElement(
                                    le.animated.div,
                                    { className: bt, style: u ? void 0 : g },
                                    (0, S.uF)(f, { name: n }),
                                ),
                            );
                        },
                    );
                var vt = n(8617),
                    At = n(5855);
                const kt = 'TankmanInfo_base_69',
                    Ct = 'TankmanInfo_base__disabled_36',
                    wt = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    Ft = 'TankmanInfo_specialization_77',
                    yt = 'TankmanInfo_specialization__withBonusSkills_b1',
                    Bt = 'TankmanInfo_skillsContainer_17',
                    Dt = 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    St = (e, t) => (e ? At.t6.None : t < s.cJ.Large ? At.t6.ExtraOverlap : At.t6.Overlap),
                    Lt = ({ slotIdx: e, tankman: t, isDisabled: n, layoutInfo: a, blinkStyle: r }) => {
                        const u = t.skills.bonusSkills.length > 0,
                            l = (0, s.GS)().mediaSize;
                        return i().createElement(
                            'div',
                            { className: p()(kt, n && Ct) },
                            i().createElement(
                                Je.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: et.v$, tankmanID: t.tankmanID },
                                },
                                i().createElement('div', { className: wt }),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(Ft, u && yt) },
                                i().createElement(lt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: p()(Bt, u && Dt) },
                                i().createElement(vt.n, {
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
                    xt = 'QuickTrainingTankmanSlotContent_base_8d',
                    Tt = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Nt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    It = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Ot = 'QuickTrainingTankmanSlotContent_layer_10',
                    Rt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    Mt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    Pt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Ht = { opacity: 0 },
                    Wt = [{ opacity: 1 }, { opacity: 0 }],
                    jt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: a,
                            layoutInfo: s,
                            isDisabled: u,
                            size: l,
                        }) => {
                            const o = (0, r.useRef)(t.lastSkillLevelFull),
                                c = (0, r.useRef)(t.skills.majorSkills.length),
                                d = (0, le.useSpring)(() => ({ from: Rt })),
                                _ = d[0],
                                m = d[1],
                                g = (0, le.useSpring)(() => ({ from: Ht })),
                                E = g[0],
                                b = g[1],
                                h = (0, r.useRef)(!1);
                            return (
                                (0, r.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? h.current ||
                                          (m.start({
                                              from: Rt,
                                              to: Mt,
                                              reverse: false,
                                              config: { duration: 300, easing: ce.BH },
                                          }),
                                          (h.current = !0))
                                        : h.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > o.current
                                                ? (m.start({
                                                      from: Mt,
                                                      to: Pt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }),
                                                  (o.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  b.start({
                                                      from: Ht,
                                                      to: Wt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ce.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (h.current = !1))
                                          : ((o.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [m, b, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                i().createElement(
                                    'div',
                                    { className: xt },
                                    i().createElement(
                                        le.animated.div,
                                        { style: E },
                                        i().createElement(pe, {
                                            type: he.SelectedHighlight,
                                            size: l,
                                            isHigh: t.roles.length > 1,
                                            className: Ot,
                                        }),
                                    ),
                                    i().createElement(
                                        le.animated.div,
                                        { className: Nt, style: a },
                                        i().createElement(Ee, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            className: It,
                                        }),
                                    ),
                                    i().createElement(le.animated.div, { className: Tt, style: _ }),
                                    i().createElement(Lt, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: s,
                                        blinkStyle: n,
                                        isDisabled: u,
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
                                    for (let i = 0; i < n; i++) {
                                        var a, r;
                                        if (
                                            (null == (a = c.U2(e, i)) ? void 0 : a.name) !==
                                            (null == (r = c.U2(t, i)) ? void 0 : r.name)
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
                    Gt = 'TankmanSlotContent_icon_ef',
                    $t = (0, r.memo)(({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a, blinkStyle: r }) =>
                        i().createElement(
                            'div',
                            { className: zt },
                            i().createElement(Ee, {
                                name: t.icon,
                                isCropped: 0 === t.skills.bonusSkills.length,
                                isSkin: t.isInSkin,
                                className: Gt,
                            }),
                            i().createElement(Lt, {
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
                            isDisabled: u,
                            isSelected: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            size: _,
                            isHigh: m,
                        }) =>
                            -1 === n.tankmanID
                                ? i().createElement(ft, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: r,
                                      vehicleType: s,
                                      isDisabled: u,
                                      isSelected: l,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: m,
                                  })
                                : a.isCurrentLayoutQuickTraining
                                  ? i().createElement(jt, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: o,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: u,
                                        size: _,
                                    })
                                  : i().createElement($t, {
                                        slotIdx: e,
                                        tankman: n,
                                        layoutInfo: a,
                                        isDisabled: u,
                                        blinkStyle: o,
                                    }),
                    ),
                    Ut = { transform: 'translateX(0rem)' },
                    Vt = { transform: 'translateX(41rem)' },
                    qt = { opacity: 0 },
                    Yt = { opacity: 1 },
                    Kt = (0, u.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            isSelected: s,
                            isAnySlotSelected: u,
                            isDisabled: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: d,
                            qtTankmanIconStyle: m,
                            size: g,
                        }) => {
                            const E = b(),
                                h = E.model,
                                f = E.controls,
                                v = ((e, t) => {
                                    const n = (0, G.Jp)(_.D9),
                                        a = (0, j.f)(
                                            () => n({ action: _.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            _.tL,
                                        );
                                    return (e) => {
                                        e.button === z.RIGHT && a();
                                    };
                                })(h.computes.getUiLoggingParentScreen(), _.x3.SlotContextMenu),
                                A = f.onSlotClick,
                                k = f.onChangeCrewClick,
                                C = h.computes.isChangeCrewButtonVisible(),
                                w = h.computes.isTankmanMode(),
                                F = h.isCrewLocked.get(),
                                y = h.vehicleName.get(),
                                B = h.vehicleType.get(),
                                D = -1 === n.tankmanID ? t.length > 1 : n.skills.bonusSkills.length > 0,
                                S = !l && n.isInteractive && (!a.isCurrentLayoutQuickTraining || u),
                                L = (0, r.useCallback)(() => {
                                    S && !w && ((0, ue.G)(R.sounds.yes1()), A(e, n.tankmanID));
                                }, [e, n, A, w, S]),
                                x = (0, r.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), F || ((0, ue.G)(R.sounds.yes1()), k(e, n.tankmanID));
                                    },
                                    [e, n, k, F],
                                ),
                                T = (0, r.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return i().createElement(
                                We,
                                {
                                    args: T,
                                    isEnabled: !l && !a.isCurrentLayoutSkillsTraining,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: v,
                                },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(
                                        Fe,
                                        {
                                            isHigh: D,
                                            onClick: L,
                                            isSelected: s,
                                            isDisabled: l,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: S,
                                            size: g,
                                        },
                                        i().createElement(
                                            'div',
                                            { className: qe },
                                            n.hasWarning &&
                                                i().createElement(pe, {
                                                    type: he.UntrainedTankmanHighlight,
                                                    size: g,
                                                    isHigh: D,
                                                    className: Xe,
                                                }),
                                            s &&
                                                i().createElement(pe, {
                                                    type: w ? he.SelectedHighlight2 : he.SelectedHighlight,
                                                    size: g,
                                                    isHigh: D,
                                                    className: Xe,
                                                }),
                                            i().createElement(
                                                ye,
                                                {
                                                    startState: Ut,
                                                    endState: Vt,
                                                    layoutInfo: a,
                                                    isPaused: !C,
                                                    className: p()(Ke, C && Qe),
                                                    isTankmanMode: w,
                                                },
                                                i().createElement(Zt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: a,
                                                    isDisabled: l,
                                                    vehicleName: y,
                                                    vehicleType: B,
                                                    blinkSlotStyle: o,
                                                    blinkTankmanStyle: d,
                                                    qtTankmanIconStyle: m,
                                                    isSelected: s,
                                                    size: g,
                                                    isHigh: D,
                                                }),
                                            ),
                                            C &&
                                                i().createElement(
                                                    'div',
                                                    { onClick: x },
                                                    i().createElement(
                                                        ye,
                                                        {
                                                            startState: qt,
                                                            endState: Yt,
                                                            layoutInfo: a,
                                                            className: Ye,
                                                            isTankmanMode: w,
                                                        },
                                                        i().createElement(Ve, {
                                                            isSelected: a.isCurrentLayoutMemberChange && s,
                                                            isLocked: F,
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
                    Qt = 'SlotsList_base_5f',
                    Xt = 'SlotsList_base__hangar_8b';
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
                    nn = (0, u.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n, size: a }) => {
                        const s = b().model,
                            u = s.computes.isAnyEmptySlots(),
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
                            u ? c.resume() : c.pause();
                        }, [c, u]);
                        const d = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: ce.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            _ = d[0],
                            m = d[1];
                        (0, r.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining || e.isCurrentLayoutSkillsTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining, e.isCurrentLayoutSkillsTraining]);
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
                        return i().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: p()(Qt, e.isCurrentLayoutHangar && Xt, n) },
                            s.computes
                                .getSlots()
                                .map((t, n) =>
                                    i().createElement(
                                        Kt,
                                        Jt({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${n}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (s.computes.isSlotSelected(t.slotIdx) || s.computes.isTankmanMode()),
                                            isAnySlotSelected: s.computes.isAnySlotSelected(),
                                            isDisabled: E(t.tankman.tankmanID),
                                            blinkSlotStyle: _,
                                            blinkTankmanStyle: o,
                                            qtTankmanIconStyle: g,
                                            size: a,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    an = (0, u.Pi)(() => {
                        const e = b().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo(),
                            r = (0, s.GS)().mediaSize < s.cJ.Large ? 'small' : 'big';
                        return i().createElement(
                            'div',
                            { className: re },
                            e.computes.isButtonBarVisible() &&
                                i().createElement(
                                    'div',
                                    { className: ie },
                                    i().createElement(ae, { isWidgetDisabled: t }),
                                ),
                            i().createElement(nn, { layoutInfo: a, isWidgetDisabled: t, className: se, size: r }),
                            n && i().createElement(Oe, { layoutInfo: a, isDisabled: t, size: r }),
                        );
                    }),
                    rn = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    sn = (0, r.memo)(() =>
                        i().createElement(
                            a.z,
                            null,
                            i().createElement(E, { options: rn }, i().createElement(an, null)),
                        ),
                    );
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => s, HZ: () => a, M4: () => u, _K: () => r, rs: () => l, v$: () => i });
                const a = 'crewPerkGf',
                    r = 'crewPerkAltGf',
                    i = 'tankman',
                    s = 'skillsEfficiency',
                    u = 'crewSkillUntrained',
                    l = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => l, I: () => i, jw: () => s, sU: () => a, vA: () => u, y$: () => o, yb: () => r });
                const a = -1,
                    r = 1,
                    i = 100,
                    s = 'new_skill',
                    u = 9,
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
                    for (var [t, n, a] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var u = n();
                        void 0 !== u && (e = u);
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
        (__webpack_require__.j = 4275),
        (() => {
            var e = { 4275: 0, 8003: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [i, s, u] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (u) var o = u(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(o);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(2022));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
