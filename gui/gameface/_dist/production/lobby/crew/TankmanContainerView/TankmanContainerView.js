(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => u.L, qE: () => u.q, u5: () => d });
                var n = a(6483),
                    r = a.n(n),
                    s = a(7727),
                    i = a(6179),
                    l = a.n(i),
                    o = a(6880),
                    u = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: g,
                    onMouseMove: b,
                    onMouseDown: E,
                    onMouseUp: p,
                    onMouseLeave: v,
                    onClick: h,
                }) => {
                    const f = (0, i.useRef)(null),
                        C = (0, i.useState)(a),
                        k = C[0],
                        A = C[1],
                        w = (0, i.useState)(!1),
                        y = w[0],
                        B = w[1],
                        F = (0, i.useState)(!1),
                        D = F[0],
                        S = F[1],
                        I = (0, i.useCallback)(() => {
                            c || (f.current && (f.current.focus(), A(!0)));
                        }, [c]),
                        N = (0, i.useCallback)(
                            (e) => {
                                k && null !== f.current && !f.current.contains(e.target) && A(!1);
                            },
                            [k],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                c || (h && h(e));
                            },
                            [c, h],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, s.G)(m), g && g(e), S(!0));
                            },
                            [c, m, g],
                        ),
                        x = (0, i.useCallback)(
                            (e) => {
                                b && b(e);
                            },
                            [b],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (p && p(e), B(!1));
                            },
                            [c, p],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, s.G)(_), E && E(e), a && I(), B(!0));
                            },
                            [c, _, E, I, a],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                c || (v && v(e), B(!1));
                            },
                            [c, v],
                        ),
                        H = r()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: k,
                                [o.Z.base__highlightActive]: y,
                                [o.Z.base__firstHover]: D,
                            },
                            d,
                        ),
                        W = r()(o.Z.state, o.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, i.useEffect)(() => {
                            A(a);
                        }, [a]),
                        l().createElement(
                            'div',
                            {
                                ref: f,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: x,
                                onMouseUp: P,
                                onMouseDown: M,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            n !== u.L.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: o.Z.back }),
                                    l().createElement('span', { className: o.Z.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: W },
                                l().createElement('span', { className: o.Z.stateDisabled }),
                                l().createElement('span', { className: o.Z.stateHighlightHover }),
                                l().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: u.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, i.memo)(c);
            },
            2106: (e, t, a) => {
                'use strict';
                let n, r;
                a.d(t, { L: () => n, q: () => r }),
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
            9987: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => c });
                var n = a(6483),
                    r = a.n(n),
                    s = a(6179),
                    i = a.n(s),
                    l = a(8055);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        a = e.value,
                        n = e.isEmpty,
                        s = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, o);
                    const g = n ? null : a,
                        b = 'string' == typeof g;
                    if ((g && !b && g < 0) || 0 === g) return null;
                    const E = g && !b && g > d,
                        p = r()(
                            l.Z.base,
                            l.Z[`base__${t}`],
                            s && l.Z.base__animated,
                            c && l.Z.base__hidden,
                            !g && l.Z.base__pattern,
                            n && l.Z.base__empty,
                            m,
                        );
                    return i().createElement(
                        'div',
                        u({ className: p }, _),
                        i().createElement('div', { className: l.Z.bg }),
                        i().createElement('div', { className: l.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: r()(l.Z.value, b && l.Z.value__text) },
                            E ? d : g,
                            E && i().createElement('span', { className: l.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => d });
                var n = a(3138),
                    r = a(6179),
                    s = a(1043),
                    i = a(5262);
                const l = n.O.client.getSize('rem'),
                    o = l.width,
                    u = l.height,
                    c = Object.assign({ width: o, height: u }, (0, i.T)(o, u, s.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var n = a(3138),
                    r = a(6536),
                    s = a(6179),
                    i = a.n(s),
                    l = a(3495),
                    o = a(1043),
                    u = a(5262);
                const c = ({ children: e }) => {
                    const t = (0, s.useContext)(l.Y),
                        a = (0, s.useState)(t),
                        c = a[0],
                        d = a[1],
                        m = (0, s.useCallback)((e, t) => {
                            const a = n.O.view.pxToRem(e),
                                r = n.O.view.pxToRem(t);
                            d(Object.assign({ width: a, height: r }, (0, u.T)(a, r, o.j)));
                        }, []),
                        _ = (0, s.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', m), n.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, s.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', m),
                                    n.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [m, _],
                        );
                    const g = (0, s.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(l.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    r = a(7382),
                    s = a(3495);
                const i = ['children'];
                const l = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, i);
                    const l = (0, n.useContext)(s.Y),
                        o = l.extraLarge,
                        u = l.large,
                        c = l.medium,
                        d = l.small,
                        m = l.extraSmall,
                        _ = l.extraLargeWidth,
                        g = l.largeWidth,
                        b = l.mediumWidth,
                        E = l.smallWidth,
                        p = l.extraSmallWidth,
                        v = l.extraLargeHeight,
                        h = l.largeHeight,
                        f = l.mediumHeight,
                        C = l.smallHeight,
                        k = l.extraSmallHeight,
                        A = { extraLarge: v, large: h, medium: f, small: C, extraSmall: k };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && u) return t;
                        if (a.medium && c) return t;
                        if (a.small && d) return t;
                        if (a.extraSmall && m) return t;
                    } else {
                        if (a.extraLargeWidth && _) return (0, r.H)(t, a, A);
                        if (a.largeWidth && g) return (0, r.H)(t, a, A);
                        if (a.mediumWidth && b) return (0, r.H)(t, a, A);
                        if (a.smallWidth && E) return (0, r.H)(t, a, A);
                        if (a.extraSmallWidth && p) return (0, r.H)(t, a, A);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && h) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && k) return t;
                        }
                    }
                    return null;
                };
                l.defaultProps = {
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
                (0, n.memo)(l);
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => n });
                const n = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, a) => {
                'use strict';
                a.d(t, { YN: () => r.Y, ZN: () => n.Z });
                a(6010);
                var n = a(1039),
                    r = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var n;
                function r(e, t, a) {
                    const n = (function (e, t) {
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
                        })(e, a),
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
                        })(t, a),
                        s = Math.min(n, r);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => r }),
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
            1037: (e, t, a) => {
                'use strict';
                a.d(t, { IC: () => n });
                var n,
                    r = a(6483),
                    s = a.n(r),
                    i = a(6373),
                    l = a(1856),
                    o = a(3138),
                    u = a(2039),
                    c = a(5099),
                    d = a(7727),
                    m = a(9916),
                    _ = a(6179),
                    g = a.n(_),
                    b = a(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const E = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: a, customStyles: n = {} }, r) => {
                        const p = (0, _.useRef)(null),
                            v = (0, _.useRef)(null),
                            h = (0, _.useRef)(null),
                            f = (0, _.useState)(window.decorator && window.decorator.directionType),
                            C = f[0],
                            k = f[1],
                            A = (0, _.useCallback)(() => {
                                d.$.playClick(), o.O.view.sendEvent.close();
                            }, []),
                            w = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            y = s()(b.Z.arrow, b.Z[`arrow${E[C]}`]);
                        (0, u.b)(
                            () => (
                                o.O.client.events.mouse.enableOutside(),
                                o.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (a ? a() : o.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const B = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === p.current || t === h.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = o.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            a =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !a) return;
                                    }
                                    a ? a() : o.O.view.sendEvent.close('popover');
                                },
                                [p, h, a],
                            ),
                            F = (0, _.useCallback)(
                                () => (
                                    o.O.view.freezeTextureBeforeResize(),
                                    (0, l.v)(() => {
                                        if (v.current) {
                                            const e = v.current.scrollWidth,
                                                t = v.current.scrollHeight;
                                            o.O.view.resize(e, t), k(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(r, () => ({ updateSize: F })),
                            (0, u.b)(() => {
                                o.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', B, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !t && e.promise.then(() => F()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', B);
                                    }
                                );
                            }, [F, B, t]),
                            g().createElement(
                                'div',
                                { className: b.Z.base, ref: v },
                                g().createElement(
                                    'div',
                                    { className: b.Z.decorator },
                                    g().createElement(
                                        'div',
                                        { className: b.Z.content, ref: p },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            g().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                g().createElement('div', {
                                                    className: b.Z.closeBtn,
                                                    onClick: A,
                                                    onMouseEnter: w,
                                                    ref: h,
                                                }),
                                            ),
                                    ),
                                    g().createElement('div', { className: y, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                var n = a(1037),
                    r = a(9916),
                    s = a(6179),
                    i = a.n(s);
                const l = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.contentId,
                        a = e.decoratorId,
                        u = e.direction,
                        c = void 0 === u ? n.IC.Top : u,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        g = e.children,
                        b = e.isEnabled,
                        E = void 0 === b || b,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, l);
                    const v = (0, s.useRef)(null),
                        h = (0, s.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            v.current && (0, r.P3)(t, c, v.current, a, d, m);
                        }, [t, c, m, a, d]);
                    return i().createElement(
                        'div',
                        o(
                            {
                                ref: v,
                                onMouseDown:
                                    ((f = g.props.onClick),
                                    (e) => {
                                        E && (h(), _ && _(e), f && f(e));
                                    }),
                            },
                            p,
                        ),
                        g,
                    );
                    var f;
                };
            },
            2773: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => f });
                var n = a(6483),
                    r = a.n(n),
                    s = a(7515),
                    i = a(1856),
                    l = a(3138),
                    o = a(3815),
                    u = a(560),
                    c = a(7727),
                    d = a(6179),
                    m = a.n(d),
                    _ = a(6358),
                    g = a(372);
                const b = 'disable',
                    E = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    v = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    f = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = p, onDrag: n = v }) => {
                        const f = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            k = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            w = (0, d.useRef)(null),
                            y = e.stepTimeout || 100,
                            B = (0, d.useState)(E),
                            F = B[0],
                            D = B[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    D(e),
                                        w.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: w.current });
                                },
                                [n],
                            ),
                            I = () => {
                                const t = A.current,
                                    a = w.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, n / r),
                                    o = (0, s.u)(0, 1, i / (r - n)),
                                    u = (t.offsetWidth - h(t, l)) * o;
                                (a.style.transform = `translateX(${0 | u}px)`),
                                    ((e) => {
                                        if (C.current && k.current && A.current && w.current) {
                                            if (0 === e)
                                                return C.current.classList.add(b), void k.current.classList.remove(b);
                                            if (
                                                ((t = A.current),
                                                (a = w.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return C.current.classList.remove(b), void k.current.classList.add(b);
                                            var t, a;
                                            C.current.classList.remove(b), k.current.classList.remove(b);
                                        }
                                    })(u);
                            },
                            N = (0, o.z)(() => {
                                (() => {
                                    const t = w.current,
                                        a = A.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && a)) return;
                                    const s = Math.min(1, n / r);
                                    (t.style.width = `${h(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        f.current &&
                                            (1 === s
                                                ? f.current.classList.add(g.Z.base__nonActive)
                                                : f.current.classList.remove(g.Z.base__nonActive));
                                })(),
                                    I();
                            });
                        (0, d.useEffect)(() => (0, i.v)(N)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            I();
                                        };
                                        let a = v;
                                        const n = () => {
                                            a(), (a = (0, i.v)(N));
                                        };
                                        return (
                                            e.events.on('recalculateContent', N),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', N),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!F.pending) return;
                                const t = l.O.client.events.mouse.move(([t, a]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const l = A.current,
                                            o = w.current;
                                        if (!l || !o) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const u = t.clientX - F.offset - l.getBoundingClientRect().x,
                                            c = (u / l.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: u, contentOffset: c });
                                    }),
                                    a = l.O.client.events.mouse.up(() => {
                                        t(), S(E);
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, F.offset, F.pending, n, S]);
                        const T = (0, u.B)((t) => e.applyStepTo(t), y, [e]),
                            L = T[0],
                            x = T[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', x, !0),
                                () => document.removeEventListener('mouseup', x, !0)
                            ),
                            [x],
                        );
                        const R = (e) => {
                            e.target.classList.contains(b) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(g.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(g.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(b) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(_.Nm.Next));
                                },
                                onMouseUp: x,
                                ref: C,
                                onMouseEnter: R,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(g.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = w.current;
                                        if (n && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === n))
                                                S({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = w.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: A,
                                    onMouseEnter: R,
                                },
                                m().createElement('div', { ref: w, className: r()(g.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(g.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(g.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(b) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(_.Nm.Prev));
                                },
                                onMouseUp: x,
                                ref: k,
                                onMouseEnter: R,
                            }),
                        );
                    });
            },
            2840: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var n = a(6483),
                    r = a.n(n),
                    s = a(6179),
                    i = a.n(s),
                    l = a(2773),
                    o = a(7950),
                    u = a(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: _,
                    onDrag: g,
                }) => {
                    const b = (0, s.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(u.Z.base, e.base) });
                        }, [n]),
                        E = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(u.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(u.Z.defaultScrollArea, c) },
                            i().createElement(o.Area, { className: m, api: E, classNames: d }, e),
                        ),
                        i().createElement(l.$Q, { getStepByRailClick: _, api: t, onDrag: g, classNames: b }),
                    );
                };
            },
            7950: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        Area: () => m,
                        Bar: () => o.$Q,
                        DefaultScroll: () => u.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = a(6483),
                    r = a.n(n),
                    s = a(1856),
                    i = a(6179),
                    l = a.n(i),
                    o = a(2773),
                    u = a(2840),
                    c = a(4682),
                    d = a(6358);
                const m = ({ api: e, className: t, classNames: a, children: n }) => (
                    (0, i.useEffect)(() => (0, s.v)(e.recalculateContent)),
                    l().createElement(
                        'div',
                        { className: r()(c.Z.base, t) },
                        l().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == a ? void 0 : a.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            l().createElement(
                                'div',
                                { className: r()(c.Z.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (m.Bar = o.$Q), (m.Default = u.K);
            },
            6358: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => n.Nm, T5: () => r, he: () => n.he });
                var n = a(7308);
                const r = (0, n.EO)({
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
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => C });
                var n = a(6483),
                    r = a.n(n),
                    s = a(7515),
                    i = a(1856),
                    l = a(3138),
                    o = a(3815),
                    u = a(560),
                    c = a(7727),
                    d = a(6179),
                    m = a.n(d),
                    _ = a(7701),
                    g = a(9168);
                const b = 'disable',
                    E = () => {},
                    p = { pending: !1, offset: 0 },
                    v = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    f = (e, t) => Math.max(20, e.offsetHeight * t),
                    C = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = v, onDrag: n = E }) => {
                        const C = (0, d.useRef)(null),
                            k = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            w = (0, d.useRef)(null),
                            y = (0, d.useRef)(null),
                            B = e.stepTimeout || 100,
                            F = (0, d.useState)(p),
                            D = F[0],
                            S = F[1],
                            I = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        y.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: y.current });
                                },
                                [n],
                            ),
                            N = (0, o.z)(() => {
                                const t = y.current,
                                    a = w.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${f(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    C.current &&
                                        (1 === s
                                            ? C.current.classList.add(g.Z.base__nonActive)
                                            : C.current.classList.remove(g.Z.base__nonActive)),
                                    s
                                );
                            }),
                            T = (0, o.z)(() => {
                                const t = w.current,
                                    a = y.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, n / r),
                                    o = (0, s.u)(0, 1, i / (r - n)),
                                    u = (t.offsetHeight - f(t, l)) * o;
                                (a.style.transform = `translateY(${0 | u}px)`),
                                    ((e) => {
                                        if (k.current && A.current && w.current && y.current) {
                                            if (0 === Math.round(e))
                                                return k.current.classList.add(b), void A.current.classList.remove(b);
                                            if (
                                                ((t = w.current),
                                                (a = y.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return k.current.classList.remove(b), void A.current.classList.add(b);
                                            var t, a;
                                            k.current.classList.remove(b), A.current.classList.remove(b);
                                        }
                                    })(u);
                            }),
                            L = (0, o.z)(() => {
                                h(e, () => {
                                    N(), T();
                                });
                            });
                        (0, d.useEffect)(() => (0, i.v)(L)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        T();
                                    });
                                };
                                let a = E;
                                const n = () => {
                                    a(), (a = (0, i.v)(L));
                                };
                                return (
                                    e.events.on('recalculateContent', L),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', L),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!D.pending) return;
                                const t = l.O.client.events.mouse.up(() => {
                                        I(p);
                                    }),
                                    a = l.O.client.events.mouse.move(([t]) => {
                                        h(e, (a) => {
                                            const r = w.current,
                                                s = y.current,
                                                i = e.getContainerSize();
                                            if (!r || !s || !i) return;
                                            const l = t.screenY - D.offset - r.getBoundingClientRect().y,
                                                o = (l / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, D.offset, D.pending, n, I]);
                        const x = (0, u.B)((t) => e.applyStepTo(t), B, [e]),
                            R = x[0],
                            P = x[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', P, !0),
                                () => document.removeEventListener('mouseup', P, !0)
                            ),
                            [P],
                        );
                        const M = (e) => {
                            e.target.classList.contains(b) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(g.Z.base, t.base), ref: C, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(g.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(b) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), R(_.Nm.Next));
                                },
                                ref: k,
                                onMouseEnter: M,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(g.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = y.current;
                                        if (n && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === n))
                                                I({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    y.current &&
                                                        h(e, (n) => {
                                                            if (!n) return;
                                                            const r = a(e),
                                                                s = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: w,
                                    onMouseEnter: M,
                                },
                                m().createElement('div', { ref: y, className: r()(g.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(g.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(g.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(b) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), R(_.Nm.Prev));
                                },
                                onMouseUp: P,
                                ref: A,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            1158: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var n = a(6483),
                    r = a.n(n),
                    s = a(6179),
                    i = a.n(s),
                    l = a(6225),
                    o = a(9605),
                    u = a(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: _,
                    onDrag: g,
                }) => {
                    const b = (0, s.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(u.Z.base, e.base) });
                        }, [n]),
                        E = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(u.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(u.Z.area, c) },
                            i().createElement(o.Area, { className: d, classNames: m, api: E }, e),
                        ),
                        i().createElement(l.$Q, { getStepByRailClick: _, api: t, onDrag: g, classNames: b }),
                    );
                };
            },
            9605: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { Area: () => m, Bar: () => o.$Q, Default: () => u.K, useVerticalScrollApi: () => c.c4 });
                var n = a(6483),
                    r = a.n(n),
                    s = a(1856),
                    i = a(6179),
                    l = a.n(i),
                    o = a(6225),
                    u = a(1158),
                    c = a(7701),
                    d = a(5636);
                const m = ({ className: e, classNames: t, children: a, api: n }) => (
                    (0, i.useEffect)(() => (0, s.v)(n.recalculateContent)),
                    l().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        l().createElement(
                            'div',
                            { className: r()(d.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            a,
                        ),
                    )
                );
                m.Default = u.K;
            },
            7701: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => n.Nm, c4: () => r });
                var n = a(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, t, a) => {
                'use strict';
                a.d(t, { EO: () => g, Nm: () => m, he: () => _ });
                var n = a(7515),
                    r = a(1856),
                    s = a(3138),
                    i = a(4532),
                    l = a(9653),
                    o = a(3815),
                    u = a(4489),
                    c = a(6179),
                    d = a(7030);
                let m;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(m || (m = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    g = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: m,
                        getWrapperSize: g,
                        triggerMouseMoveOnUpdate: b = !1,
                    }) => {
                        const E = (e, a) => {
                            const r = t(e),
                                s = r[0],
                                i = r[1];
                            return i <= s ? 0 : (0, n.u)(s, i, a);
                        };
                        return (n = {}) => {
                            const p = n.settings,
                                v = void 0 === p ? _ : p,
                                h = (0, c.useRef)(null),
                                f = (0, c.useRef)(null),
                                C = (0, l.q)(),
                                k = (0, u.f)(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (a(t, e), C.trigger('change', e), b && k());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                w = A[0],
                                y = A[1],
                                B = (0, c.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = w.scrollPosition.get(),
                                            s = (null != (n = w.scrollPosition.goal) ? n : 0) - r;
                                        return E(e, t * a + s + r);
                                    },
                                    [w.scrollPosition],
                                ),
                                F = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = h.current;
                                        n &&
                                            y.start({
                                                scrollPosition: E(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: v.animationConfig,
                                                from: { scrollPosition: E(n, w.scrollPosition.get()) },
                                            });
                                    },
                                    [y, v.animationConfig, w.scrollPosition],
                                ),
                                D = (0, c.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            a = f.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return g(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, v.step),
                                            r = B(t, e, n);
                                        F(r);
                                    },
                                    [F, B, v.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && D(m(e)),
                                            h.current && C.trigger('mouseWheel', e, w.scrollPosition, t(h.current));
                                    },
                                    [w.scrollPosition, D, C],
                                ),
                                I = (0, i.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (F(E(e, w.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [F, w.scrollPosition.goal],
                                ),
                                N = (0, o.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = E(e, w.scrollPosition.goal);
                                    t !== w.scrollPosition.goal && F(t, { immediate: !0 }),
                                        C.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', I),
                                    () => {
                                        window.removeEventListener('resize', I);
                                    }
                                ),
                                [I],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (f.current ? g(f.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: v.step.clampedArrowStepTimeout,
                                    clampPosition: E,
                                    handleMouseWheel: S,
                                    applyScroll: F,
                                    applyStepTo: D,
                                    contentRef: h,
                                    wrapperRef: f,
                                    scrollPosition: y,
                                    animationScroll: w,
                                    recalculateContent: N,
                                    events: { on: C.on, off: C.off },
                                }),
                                [w.scrollPosition, F, D, C.off, C.on, N, S, y, v.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => r });
                var n = a(7950);
                const r = { Vertical: a(9605), Horizontal: n };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => o });
                var n = a(6179),
                    r = a.n(n),
                    s = a(2056);
                const i = ['children'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, i);
                    return r().createElement(
                        s.u,
                        l(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, a) => {
                'use strict';
                a.d(t, { l: () => u });
                var n = a(6179),
                    r = a.n(n),
                    s = a(7078),
                    i = a(6373),
                    l = a(2056);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: a }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, n);
                    const u = t.contentId;
                    return u ? r().createElement(l.u, o({}, t, { contentId: u }), n) : r().createElement(s.t, t, n);
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => u });
                var n = a(2056),
                    r = a(6179),
                    s = a.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    u = (e) => {
                        let t = e.children,
                            a = e.body,
                            u = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, i);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: a, header: u, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, a, u, c, m]);
                        return s().createElement(
                            n.u,
                            l(
                                {
                                    contentId:
                                        ((b = null == m ? void 0 : m.hasHtmlContent),
                                        b ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                _,
                            ),
                            t,
                        );
                        var b;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => u });
                var n = a(7902),
                    r = a(9916),
                    s = a(6179);
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
                function l(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const o = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    u = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            u = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            g = void 0 !== _ && _,
                            b = e.ignoreMouseClick,
                            E = void 0 !== b && b,
                            p = e.decoratorId,
                            v = void 0 === p ? 0 : p,
                            h = e.isEnabled,
                            f = void 0 === h || h,
                            C = e.targetId,
                            k = void 0 === C ? 0 : C,
                            A = e.onShow,
                            w = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, i);
                        const B = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, s.useMemo)(() => k || (0, n.F)().resId, [k]),
                            D = (0, s.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (o(a, v, { isMouseEvent: !0, on: !0, arguments: l(r) }, F),
                                    A && A(),
                                    (B.current.isVisible = !0));
                            }, [a, v, r, F, A]),
                            S = (0, s.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        o(a, v, { on: !1 }, F),
                                        B.current.isVisible && w && w(),
                                        (B.current.isVisible = !1);
                                }
                            }, [a, v, F, w]),
                            I = (0, s.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return f
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(D, g ? 100 : 400)),
                                                      u && u(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
                        var N;
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
            7515: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => n });
                const n = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                (a = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                        }
                    );
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => l });
                var n = a(3138);
                function r(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return s(e, t);
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
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function l({ initializer: e = !0, rootId: t = 0, getRoot: a = i, context: s = 'model' } = {}) {
                    const l = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? l.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = l.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const u = (e) => {
                        const n = a(t),
                            r = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, r);
                    };
                    return {
                        subscribe: (a, r) => {
                            const i = 'string' == typeof r ? `${s}.${r}` : s,
                                o = n.O.view.addModelObserver(i, t, !0);
                            return l.set(o, a), e && a(u(r)), o;
                        },
                        readByPath: u,
                        createCallback: (e, t) => {
                            const a = u(t);
                            return (...t) => {
                                a(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = u(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, a = r(l.keys()); !(e = a()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => o });
                var n = a(4598),
                    r = a(9174),
                    s = a(6179),
                    i = a.n(s),
                    l = a(8246);
                const o = () => (e, t) => {
                    const a = (0, s.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: u, children: c, mocks: d }) {
                            const m = (0, s.useRef)([]),
                                _ = (a, s, i) => {
                                    var o;
                                    const u = l.U(s),
                                        c =
                                            'real' === a
                                                ? u
                                                : Object.assign({}, u, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === a ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        g = e({
                                            mode: a,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = r.LO.box(s, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = r.LO.box(s, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            i = Object.entries(s),
                                                            l = i.reduce(
                                                                (e, [t, a]) => ((e[a] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, a]) => {
                                                                            l[a].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            l
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        b = { mode: a, model: g, externalModel: c, cleanup: _ };
                                    return {
                                        model: g,
                                        controls: 'mocks' === a && i ? i.controls(b) : t(b),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                g = (0, s.useRef)(!1),
                                b = (0, s.useState)(o),
                                E = b[0],
                                p = b[1],
                                v = (0, s.useState)(() => _(o, u, d)),
                                h = v[0],
                                f = v[1];
                            return (
                                (0, s.useEffect)(() => {
                                    g.current ? f(_(E, u, d)) : (g.current = !0);
                                }, [d, E, u]),
                                (0, s.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, s.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                i().createElement(a.Provider, { value: h }, c)
                            );
                        },
                        () => (0, s.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => c, off: () => o, on: () => l, onResize: () => s, onScaleUpdated: () => i });
                var n = a(2472),
                    r = a(1176);
                const s = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    u = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        i = u[t]((e) => a([e, 'outside']));
                                    function l(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, l),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(s, l),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                    });
                var n = a(527);
                function r(e = 'px') {
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
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var n = a(5959);
                const r = { view: a(7641), client: n };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
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
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => A,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => w,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => k,
                        isFocused: () => f,
                        pxToRem: () => p,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => F,
                    });
                var n = a(3722),
                    r = a(6112),
                    s = a(6538),
                    i = a(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function k() {
                    return viewEnv.isEventHandled();
                }
                function A() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    F = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => u });
                const n = ['args'];
                const r = 2,
                    s = 16,
                    i = 32,
                    l = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    u = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function n() {}
                a.d(t, { ZT: () => n, jv: () => s, yR: () => r });
                function r(e) {
                    return e;
                }
                function s() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (n = window.subViews[a].id)),
                        { caller: a, stack: t, resId: n }
                    );
                };
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                var n = a(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => r });
                var n = a(6179);
                const r = (e, t = []) => {
                    const a = (0, n.useRef)(),
                        r = (0, n.useCallback)((...t) => {
                            a.current && a.current(), (a.current = e(...t));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                a.current && a.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            9653: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => i });
                var n = a(6179);
                function r(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return s(e, t);
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
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const i = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        a = (e, a) => {
                            t(e).set(a, a);
                        },
                        s = (e, a) => {
                            t(e).delete(a);
                        },
                        i = (e, ...a) => {
                            for (var n, s = r(t(e).values()); !(n = s()).done; ) {
                                (0, n.value)(...a);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: a, off: s, trigger: i }), []);
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => s });
                var n = a(6179);
                const r = [];
                function s(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), r)
                    );
                }
            },
            5415: (e, t, a) => {
                'use strict';
                a.d(t, { Aq: () => o, GS: () => u, cJ: () => i, fd: () => l });
                var n = a(6179),
                    r = a(7739),
                    s = a(1043);
                let i, l, o;
                !(function (e) {
                    (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.j.small.width)] = 'Small'),
                        (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                        (e[(e.Large = s.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.width)] = 'Small'),
                            (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                            (e[(e.Large = s.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge');
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.height)] = 'Small'),
                            (e[(e.Medium = s.j.medium.height)] = 'Medium'),
                            (e[(e.Large = s.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const u = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        a = e.height,
                        s = ((e) => {
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
                        u = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return l.ExtraLarge;
                                case e.largeWidth:
                                    return l.Large;
                                case e.mediumWidth:
                                    return l.Medium;
                                case e.smallWidth:
                                    return l.Small;
                                case e.extraSmallWidth:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
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
                    return { mediaSize: s, mediaWidth: u, mediaHeight: c, remScreenWidth: t, remScreenHeight: a };
                };
            },
            2039: (e, t, a) => {
                'use strict';
                a.d(t, { b: () => r });
                var n = a(6179);
                const r = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            560: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => r });
                var n = a(6179);
                function r(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        s = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => s, [s]);
                    const i = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (r.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, i),
                        s,
                    ];
                }
            },
            4419: (e, t, a) => {
                'use strict';
                a.d(t, { y: () => s });
                var n = a(8045),
                    r = a(6179);
                const s = (e, t, a = !0) => {
                    const s = (0, r.useCallback)(
                        (e) => {
                            const a = e[0];
                            t && t(a);
                        },
                        [t],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !a) return;
                        const t = new n.Z((e) => s(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [s, a, e]);
                };
            },
            4489: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => s });
                var n = a(5139),
                    r = a(6179);
                function s(e, t, a) {
                    const s = (0, r.useMemo)(() => (0, n.Z)(a, e), t);
                    return (0, r.useEffect)(() => s.cancel, [s]), s;
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                a.d(t, { n: () => n }),
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
            9480: (e, t, a) => {
                'use strict';
                function n(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                a.d(t, { U2: () => n, UI: () => i, sE: () => o, tP: () => l, v_: () => u });
                const r = n;
                function s(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function l(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const r = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: s(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function o(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = s(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function u(e, t = ',') {
                    let a = '';
                    for (let n = 0; n < e.length; n++) {
                        n > 0 && (a += t);
                        const s = r(e, n);
                        a += null == s ? '' : String(s);
                    }
                    return a;
                }
            },
            5099: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => n });
                const n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((a, n) => {
                            e.then((e) => !t && a(e)).catch((e) => !t && n(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => n });
                const n = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
            },
            1612: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => r });
                var n = a(9174);
                function r(e) {
                    const t = {};
                    for (const a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            const r = e[a];
                            t[a] = (0, n.aD)(r);
                        }
                    return t;
                }
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
                        s
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = r.length - 1; a >= 0; a--) for (; e >= r[a]; ) (t += n[a]), (e -= r[a]);
                                  return t;
                              })(e);
            },
            7727: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => r, G: () => n });
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
            3649: (e, t, a) => {
                'use strict';
                a.d(t, { BN: () => s, Eg: () => o, dL: () => u, e: () => i, uF: () => r, z4: () => l });
                a(1281);
                let n;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    u =
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
                                (a = { value: e }),
                                t.replace(/\{\w+\}/g, (e) => String(a[e.slice(1, -1)]))
                            );
                            var t, a;
                        });
            },
            5139: (e, t, a) => {
                'use strict';
                function n(e, t, a, n) {
                    let r,
                        s = !1,
                        i = 0;
                    function l() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const u = this,
                            c = Date.now() - i;
                        function d() {
                            (i = Date.now()), a.apply(u, o);
                        }
                        s ||
                            (n && !r && d(),
                            l(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
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
                        'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                        (o.cancel = function () {
                            l(), (s = !0);
                        }),
                        o
                    );
                }
                a.d(t, { Z: () => n });
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    B3: () => o,
                    Z5: () => i.Z5,
                    B0: () => l,
                    c9: () => h,
                    wU: () => A,
                    ry: () => p,
                    Eu: () => v,
                    SW: () => C,
                    P3: () => k,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                var s = a(1358);
                var i = a(8613);
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = a(5521),
                    _ = a(3138);
                const g = ['args'];
                function b(e, t, a, n, r, s, i) {
                    try {
                        var l = e[s](i),
                            o = l.value;
                    } catch (e) {
                        return void a(e);
                    }
                    l.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var s = e.apply(t, a);
                                        function i(e) {
                                            b(s, n, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            b(s, n, r, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => h(l.CLOSE),
                    C = () => h(l.POP_OVER, { on: !1 }),
                    k = (e, t, a, n, r = R.invalid('resId'), s) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            o = a.getBoundingClientRect(),
                            u = o.x,
                            c = o.y,
                            d = o.width,
                            m = o.height,
                            g = {
                                x: _.O.view.pxToRem(u) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        h(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: E(g),
                            on: !0,
                            args: s,
                        });
                    },
                    A = () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = a(7572);
                const B = r.instance,
                    F = {
                        DataTracker: s.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: u,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => h(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: C,
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            h(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: k,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: A,
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
            },
            3618: (e, t, a) => {
                'use strict';
                a.d(t, { w: () => _ });
                var n = a(6483),
                    r = a.n(n),
                    s = a(3415),
                    i = a(4419),
                    l = a(6179),
                    o = a.n(l),
                    u = a(6143),
                    c = a(3310),
                    d = a(131),
                    m = a(9053);
                const _ = o().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: a,
                        binding: n,
                        isTooltipEnable: _ = !1,
                        isTruncationAvailable: g = !1,
                        targetId: b,
                        justifyContent: E = m.v2.FlexStart,
                        alignContent: p = m.v2.FlexStart,
                        truncateIdentify: v = m.YA,
                    }) => {
                        const h = (0, l.useRef)(null),
                            f = (0, l.useRef)({ height: 0, width: 0 }),
                            C = (0, l.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            k = C[0],
                            A = C[1],
                            w = (0, l.useMemo)(() => (0, c.s)(e, n), [n, e]),
                            y = (0, l.useMemo)(() => {
                                if (_ && k.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: b,
                                    };
                            }, [n, _, b, e, k.isTruncated]),
                            B = (0, l.useCallback)(
                                (e) => {
                                    (f.current.width = e.contentRect.width), (f.current.height = e.contentRect.height);
                                    const t = (0, d.T)(h, w, f.current, v),
                                        n = t[0],
                                        r = t[1];
                                    A({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), a && a(r);
                                },
                                [a, v, w],
                            ),
                            F = (0, l.useMemo)(() => ({ justifyContent: E, alignContent: p }), [p, E]);
                        return (
                            (0, i.y)(h, B, g),
                            o().createElement(
                                'div',
                                {
                                    className: r()(
                                        u.Z.base,
                                        t,
                                        u.Z.base__zeroPadding,
                                        g && u.Z.base__isTruncationAvailable,
                                    ),
                                    style: F,
                                },
                                o().createElement('div', { className: u.Z.unTruncated, ref: h }, w),
                                o().createElement(
                                    s.l,
                                    { tooltipArgs: y },
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                u.Z.truncated,
                                                !k.isTruncateFinished && g && u.Z.truncated__hide,
                                            ),
                                            style: F,
                                        },
                                        k.isTruncateFinished && g ? k.elementList : w,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, a) => {
                'use strict';
                a.d(t, { s: () => d });
                var n = a(3649),
                    r = a(6799),
                    s = a(6960),
                    i = a(9053);
                const l = i.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, s.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      (0, s.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e) => {
                              const t = /[\s\u002d]/g;
                              let a = t.exec(e);
                              if (!a) return [e];
                              const n = [];
                              let r = 0;
                              for (; a; ) n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (a = t.exec(e));
                              return r !== e.length && n.push(e.slice(r)), n;
                          },
                    o = (e, t = '') => {
                        const a = [];
                        return (
                            (0, s.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: i.kH.Word, colorTag: t, childList: l(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = i.aF[n.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let a = 0; a < e.length - 1; a++)
                                                      t.push({
                                                          blockType: i.kH.NewLine,
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
                    u = (e, t, a = '') => {
                        const n = [];
                        return (
                            (0, s.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...o(e, a));
                                },
                                (e) => {
                                    const r = e[1],
                                        s = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof s || 'number' == typeof s
                                        ? n.push(...o(String(s), a))
                                        : n.push({ blockType: i.kH.Binding, colorTag: a, childList: [s] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, t) => {
                        if (!e) return [t];
                        const a = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), a.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && a.push(e),
                                a.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && a.push(t), a;
                    },
                    d = (e, t = {}) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let a = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((a = !0), t.push(...c(t.pop(), e)))
                                        : (a ? t.push(...c(t.pop(), e)) : t.push(e), (a = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const a = [];
                                return (
                                    (0, s.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            a.push(...u(e, t));
                                        },
                                        (e) => {
                                            a.push(...u(e[2], t, e[1]));
                                        },
                                    ),
                                    a
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t),
                        );
                        return (0, r.w)(a);
                    };
            },
            6799: (e, t, a) => {
                'use strict';
                a.d(t, { w: () => i });
                var n = a(597),
                    r = a(9053);
                const s = (e, t, a) => {
                        const i = [];
                        return (
                            e.childList.forEach((l, o) => {
                                const u = `${a}_${o}`;
                                if ((0, r.dz)(l)) {
                                    const e = l,
                                        t = e.blockType,
                                        a = n.IY[t],
                                        r = s(e, a, u);
                                    i.push(...r);
                                } else i.push(t({ elementList: [l], textBlock: e, key: u }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, a) => {
                                t.push(
                                    ...((e, t) => {
                                        const a = [],
                                            i = e.blockType,
                                            l = n.IY[i],
                                            o = s(e, l, t);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? a.push(l({ elementList: o, textBlock: e, key: `${t}` }))
                                                : a.push(...o),
                                            a
                                        );
                                    })(e, a),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = (e, t, a, n) => {
                    let r = t.exec(e),
                        s = 0;
                    for (; r; ) s !== r.index && a(e.slice(s, r.index)), n(r), (s = t.lastIndex), (r = t.exec(e));
                    s !== e.length && a(e.slice(s));
                };
            },
            131: (e, t, a) => {
                'use strict';
                a.d(t, { T: () => c });
                var n = a(6179),
                    r = a.n(n),
                    s = a(9053);
                const i = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    l = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    o = (e, t, a) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = l(e, t),
                            r = e.textContent.length,
                            s = e.offsetWidth / r,
                            i = Math.ceil(n / s);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / s);
                            return n >= a ? [!0, a + i] : [!1, n];
                        }
                        const o = Math.max(a + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    u = (e, t, a, n, i, l) => {
                        let c = -1,
                            d = null;
                        for (let m = a; m >= 0; m--) {
                            const a = e[m],
                                _ = Number(e[m].getAttribute(s.bF));
                            if (_ === s.kH.LineBreak || _ === s.kH.NewLine || _ === s.kH.Binding) continue;
                            const g = a.textContent || '';
                            if (!(a.childElementCount > 1)) {
                                const e = o(a, n, i),
                                    s = e[0],
                                    u = e[1];
                                if (!s) {
                                    u > 0 && (i -= u);
                                    continue;
                                }
                                const _ = g.slice(0, g.length - u) + l,
                                    b = t[m];
                                (d = r().cloneElement(b, b.props, _)), (c = m);
                                break;
                            }
                            {
                                const e = a.children,
                                    s = t[m],
                                    o = s.props.children,
                                    _ = u(e, o, e.length - 1, n, i, l),
                                    b = _[0],
                                    E = _[1];
                                if (!(b < 0)) {
                                    const e = o.slice(0, b);
                                    (d = r().cloneElement(s, s.props, e, E)), (c = m);
                                    break;
                                }
                                i -= g.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, t, a, n = s.YA) => {
                        const r = [...t],
                            o = e.current;
                        if (!o) return [r, !1];
                        const c = a.height,
                            d = a.width,
                            m = o.lastElementChild;
                        if (!i(m, c) && l(m, d) <= 0) return [r, !1];
                        const _ = o.children,
                            g = ((e, t) => {
                                let a = 0,
                                    n = e.length - 1;
                                for (; n - a >= 0; ) {
                                    const r = a + Math.ceil(0.5 * (n - a));
                                    i(e[r], t) ? (n = r - 1) : (a = r + 1);
                                }
                                return a - 1;
                            })(_, c);
                        if (g < 0) return [r, !1];
                        const b = u(_, r, g, d, n.length, n),
                            E = b[0],
                            p = b[1];
                        return p && (r.splice(E, 1, p), r.splice(E + 1)), [r, !0];
                    };
            },
            9053: (e, t, a) => {
                'use strict';
                let n, r, s;
                a.d(t, { YA: () => l, aF: () => u, bF: () => o, dz: () => i, kH: () => n, u6: () => c, v2: () => r }),
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
                    })(s || (s = {}));
                const i = (e) => void 0 !== e.childList,
                    l = '...',
                    o = 'data-block-type',
                    u = { [s.NBSP]: n.NoBreakSymbol, [s.ZWNBSP]: n.NoBreakSymbol, [s.NEW_LINE]: n.LineBreak },
                    c = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    );
            },
            597: (e, t, a) => {
                'use strict';
                a.d(t, { IY: () => m });
                var n = a(6483),
                    r = a.n(n),
                    s = a(6179),
                    i = a.n(s),
                    l = a(9053),
                    o = a(9627),
                    u = a(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: t, key: a }) => {
                        const n = t.colorTag;
                        return n
                            ? o.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: r()(u.Z.word, o.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: u.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: a, 'data-block-type': t.blockType, className: u.Z.word },
                                  e,
                              );
                    },
                    m = {
                        [l.kH.Word]: d,
                        [l.kH.NoBreakSymbol]: d,
                        [l.kH.Binding]: ({ elementList: e, textBlock: t, key: a }) =>
                            i().createElement(
                                'span',
                                { key: a, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: a }, e)),
                            ),
                        [l.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': l.kH.LineBreak,
                                className: u.Z.lineBreak,
                            }),
                        [l.kH.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': l.kH.NewLine, className: u.Z.newLine },
                                e,
                            ),
                        [l.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': l.kH.NoBreakWrapper, className: u.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            3458: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { Z0: () => r, in: () => n, sx: () => s }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const r = 'tooltip_watched',
                    s = 2;
                let i;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            4828: (e, t, a) => {
                'use strict';
                a.d(t, { AB: () => _, D9: () => n, eX: () => s, sC: () => i, sk: () => o, tL: () => r, x3: () => u });
                const n = 'crew',
                    r = 2e3;
                let s, i, l, o, u, c, d, m;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(s || (s = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(i || (i = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(l || (l = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(o || (o = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(u || (u = {})),
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
                    [R.views.lobby.crew.personal_case.PersonalFileView('resId')]: i.PersonalFile,
                    [R.views.lobby.crew.personal_case.PersonalDataView('resId')]: i.PersonalData,
                    [R.views.lobby.crew.personal_case.ServiceRecordView('resId')]: i.ServiceRecord,
                    [R.views.lobby.crew.BarracksView('resId')]: i.Barracks,
                    [R.views.lobby.crew.HangarCrewWidget('resId')]: i.Hangar,
                    [R.views.lobby.crew.MemberChangeView('resId')]: i.MemberChange,
                    [R.views.lobby.crew.TankChangeView('resId')]: i.TankChange,
                    [R.views.lobby.crew.QuickTrainingView('resId')]: i.QuickTraining,
                };
            },
            1943: (e, t, a) => {
                'use strict';
                a.d(t, { Jp: () => d, Sr: () => m });
                var n = a(6179),
                    r = a(3458);
                const s = ['action', 'timeLimit'];
                const i = 'metrics',
                    l = () => Date.now(),
                    o = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    u = (e, t) => {
                        const a = (0, n.useCallback)(
                            (a, n = r.in.Info, s) => {
                                s || (s = {}),
                                    Object.keys(s).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: n,
                                            params: JSON.stringify(s),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => a(e, t, n);
                    },
                    c = (e, t) => {
                        const a = u(e, t),
                            r = (0, n.useRef)(new Map()),
                            s = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, l());
                                },
                                [r],
                            ),
                            o = (0, n.useCallback)(() => {
                                r.current.clear(), s.current.clear();
                            }, [r, s]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, l());
                                },
                                [r, s],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const a = s.current.get(e);
                                    if (void 0 === a) return;
                                    s.current.delete(e);
                                    const n = l() - a;
                                    r.current.set(e, t + n);
                                },
                                [r, s],
                            ),
                            m = (0, n.useCallback)(
                                (e, t = 0, n, i) => {
                                    const o = r.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== s.current.get(e) && d(e), r.current.delete(e);
                                    const u = (l() - o) / 1e3;
                                    u <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, u)),
                                        a(e, n, i));
                                },
                                [r, s, a, d],
                            );
                        return [(e) => i(e), (e, t, a, n) => m(e, t, a, n), () => o(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = u(e, i),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, o(e));
                                },
                                [t],
                            );
                        return (e) => a(e);
                    },
                    m = (e, t) => {
                        const a = ((e) => {
                                const t = c(e, i),
                                    a = t[0],
                                    r = t[1],
                                    s = t[2],
                                    l = t[3],
                                    u = t[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                a = e.timeLimit,
                                                n = e.logLevel;
                                            r(t, a, n, o(e));
                                        },
                                        [r],
                                    );
                                return [(e) => a(e), (e) => d(e), () => s(), (e) => l(e), (e) => u(e)];
                            })(e),
                            l = a[0],
                            u = a[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(t, s);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => l(d || r.Z0),
                                onHide: () => u(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, _)),
                            }),
                            [d, m, _, l, u],
                        );
                    };
            },
            8032: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => n });
                const n = (e, t) => e.split(',').includes(t);
            },
            7362: (e, t, a) => {
                'use strict';
                var n = a(7739),
                    r = a(6179),
                    s = a.n(r),
                    i = a(6483),
                    l = a.n(i),
                    o = a(926),
                    u = a.n(o),
                    c = a(5415);
                const d = ['children', 'className'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: u().SMALL_WIDTH,
                        [c.fd.Medium]: `${u().SMALL_WIDTH} ${u().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${u().SMALL_WIDTH} ${u().MEDIUM_WIDTH} ${u().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${u().SMALL_WIDTH} ${u().MEDIUM_WIDTH} ${u().LARGE_WIDTH} ${u().EXTRA_LARGE_WIDTH}`,
                    },
                    g = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: u().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${u().SMALL_HEIGHT} ${u().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${u().SMALL_HEIGHT} ${u().MEDIUM_HEIGHT} ${u().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${u().SMALL_HEIGHT} ${u().MEDIUM_HEIGHT} ${u().LARGE_HEIGHT} ${u().EXTRA_LARGE_HEIGHT}`,
                    },
                    b = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: u().SMALL,
                        [c.cJ.Medium]: `${u().SMALL} ${u().MEDIUM}`,
                        [c.cJ.Large]: `${u().SMALL} ${u().MEDIUM} ${u().LARGE}`,
                        [c.cJ.ExtraLarge]: `${u().SMALL} ${u().MEDIUM} ${u().LARGE} ${u().EXTRA_LARGE}`,
                    },
                    E = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, d);
                        const r = (0, c.GS)(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            u = r.mediaSize;
                        return s().createElement('div', m({ className: l()(a, _[i], g[o], b[u]) }, n), t);
                    },
                    p = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, p);
                    return s().createElement(n.ZN, null, s().createElement(E, a, t));
                };
                var h = a(493),
                    f = a.n(h),
                    C = a(7727);
                const k = s().memo;
                const A = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    w = { mouseEnter: 'highlight', click: 'play' },
                    y = (e, { active: t, enableInteractiveActiveTab: a = !1 }) => !!a || e !== t,
                    B = k(function (e) {
                        const t = e.active,
                            a = e.tabs,
                            n = e.onClick,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.className,
                            u = e.classNames,
                            c = e.sounds,
                            d = void 0 === c ? w : c,
                            m = (t) => () => {
                                y(t, e) && (d.click && (0, C.G)(d.click), null == n || n(t));
                            },
                            _ = (t) => () => {
                                y(t, e) && (d.mouseEnter && (0, C.G)(d.mouseEnter), null == r || r(t));
                            },
                            g = (t) => () => {
                                y(t, e) && (d.mouseLeave && (0, C.G)(d.mouseLeave), null == i || i(t));
                            };
                        return s().createElement(
                            'div',
                            { className: l()(A.base, o) },
                            a.map(({ id: n, title: r, notification: i }, o) => {
                                var c;
                                return s().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            A.tab,
                                            n === t && l()(A.tab__active, null == u ? void 0 : u.activeTab),
                                            !y(n, e) && A.tab__nonInteractive,
                                            null == u ? void 0 : u.tab,
                                        ),
                                        key: n,
                                        onClick: m(n),
                                        onMouseEnter: _(n),
                                        onMouseLeave: g(n),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(a, o) &&
                                        s().createElement('div', {
                                            className: l()(A.divider, null == u ? void 0 : u.divider),
                                        }),
                                    s().createElement(
                                        'div',
                                        { className: l()(A.state, null == u ? void 0 : u.state) },
                                        s().createElement('div', {
                                            className: l()(A.highlight, null == u ? void 0 : u.highlight),
                                        }),
                                        s().createElement('div', {
                                            className: l()(
                                                A.border,
                                                A.border__left,
                                                null == u ? void 0 : u.border,
                                                null == u ? void 0 : u.borderLeft,
                                            ),
                                        }),
                                        s().createElement('div', {
                                            className: l()(
                                                A.border,
                                                A.border__right,
                                                null == u ? void 0 : u.border,
                                                null == u ? void 0 : u.borderRight,
                                            ),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: l()(A.title, null == u ? void 0 : u.title) },
                                        r,
                                    ),
                                    void 0 !== i &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    A.notification,
                                                    A[`notification__${i.type}`],
                                                    A[`notification__${null != (c = i.size) ? c : 'medium'}`],
                                                    null == u ? void 0 : u.notification,
                                                ),
                                            },
                                            'dot' !== i.type && i.value,
                                        ),
                                );
                            }),
                        );
                    });
                var F = a(3138),
                    D = a(5521);
                a(9916);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function I(e = D.n.NONE, t = S, a = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== D.n.NONE)
                            return (
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && F.O.view.isEventHandled()) return;
                                F.O.view.setEventHandled(), t(r), a && r.stopPropagation();
                            }
                        }
                    }, [t, e, a, n]);
                }
                var N = a(3403),
                    T = a(3215);
                let L, x, P, M;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(L || (L = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(x || (x = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(P || (P = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(M || (M = {}));
                L.Initialization, x.Initialization;
                const O = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    H = O[0],
                    W = O[1];
                var V = a(794),
                    z = a(7701),
                    $ = a(9480),
                    G = a(7078),
                    j = a(3618);
                let Z;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
                })(Z || (Z = {}));
                const U = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    q = s().memo(function ({ buffIconType: e, className: t }) {
                        return e === Z.none
                            ? null
                            : s().createElement('div', { className: l()(U.base, U[`base__${Z[e]}`], t) });
                    });
                var Y = a(7030);
                const X = 'Delta_base_3e',
                    K = 'Delta_base__positive_82',
                    Q = 'Delta_base__negative_86',
                    J = s().memo(function ({ isPositive: e, width: t, isUseAnim: a }) {
                        const n = (0, Y.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: oe },
                                delay: e ? 0 : oe,
                                immediate: !a,
                            }),
                            r = (0, Y.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2,
                                width: e ? t : 0,
                                config: { duration: oe },
                                delay: e || 0 === t ? oe : 0,
                                immediate: !a,
                            });
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(Y.animated.div, { className: l()(X, Q), style: n }),
                            s().createElement(Y.animated.div, { className: l()(X, K), style: r }),
                        );
                    }),
                    ee = 'Indicator_base_b9',
                    te = 'Indicator_progress_ce',
                    ae = 'Indicator_progressMarker_b4',
                    ne = 'Indicator_indicator_bc',
                    re = 'Indicator_indicator__start_80',
                    se = 'Indicator_indicator__end_3b',
                    ie = 'Indicator_marker_f7',
                    le = 'Indicator_valueLine_1d',
                    oe = 300,
                    ue = s().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: a,
                        markerValue: n,
                        delta: r,
                        isUseAnim: i,
                    }) {
                        const o = n === e ? 2 : (n / t) * 254,
                            u = (a / t) * 254,
                            c = (r / t) * 254,
                            d = r > 0,
                            m = { config: { duration: oe }, immediate: !i },
                            _ = (0, Y.useSpring)(Object.assign({ from: { left: 2 }, to: { left: o }, delay: oe }, m)),
                            g = (0, Y.useSpring)(Object.assign({ from: { width: e }, to: { width: u }, delay: oe }, m));
                        return s().createElement(
                            'div',
                            { className: ee },
                            s().createElement(
                                'div',
                                { className: te },
                                s().createElement('div', { className: l()(ne, re) }),
                                s().createElement(Y.animated.div, { className: le, style: g }),
                                s().createElement(
                                    'div',
                                    { className: ae },
                                    s().createElement(
                                        Y.animated.div,
                                        { className: ie, style: _ },
                                        s().createElement(J, { isPositive: d, width: c, isUseAnim: i }),
                                    ),
                                ),
                                s().createElement('div', { className: l()(ne, se) }),
                            ),
                        );
                    });
                let ce;
                !(function (e) {
                    (e.None = 'none'), (e.Increase = 'increase'), (e.Decrease = 'decrease');
                })(ce || (ce = {}));
                var de = a(9053);
                const me = {
                        base: 'Param_base_51',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                    },
                    _e = s().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: a,
                        isEnabled: n,
                        highlightType: r,
                        localizedName: i,
                    }) {
                        return s().createElement(
                            G.t,
                            {
                                args: { tooltipId: a, paramId: e },
                                targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                isEnabled: n,
                            },
                            s().createElement(
                                'div',
                                { className: me.base },
                                s().createElement(j.w, { justifyContent: de.v2.FlexEnd, classMix: me.value, text: t }),
                                s().createElement('div', {
                                    className: me.icon,
                                    style: { backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')` },
                                }),
                                s().createElement(
                                    'div',
                                    { className: me.name },
                                    i || R.strings.menu.tank_params.$dyn(e),
                                ),
                                r !== ce.None &&
                                    s().createElement('div', { className: l()(me.highlight, me[`highlight__${r}`]) }),
                            ),
                        );
                    }),
                    ge = 'Group_base_66',
                    be = 'Group_group_07',
                    Ee = 'Group_hoverBg_97',
                    pe = 'Group_hoverBg__scrollable_2a',
                    ve = 'Group_groupHeader_f5',
                    he = 'Group_name_21',
                    fe = 'Group_arrow_96',
                    Ce = 'Group_arrow__opened_47',
                    ke = 'Group_params_88',
                    Ae = 'Group_params__opened_9a',
                    we = 'Group_separator_b5',
                    ye = 'Group_right_13',
                    Be = 'Group_buff_fa',
                    Fe = 'Group_value_00',
                    De = 'Group_value__additional_81';
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Ie = (0, N.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: a,
                            extraParams: n,
                            tooltipID: r,
                            indicator: i,
                            value: o,
                            additionalValue: u,
                            buffIconType: c,
                            isEnabled: d,
                            isScrollable: m,
                        }) => {
                            const _ = W().controls,
                                g = n && n.length > 0;
                            return s().createElement(
                                'div',
                                { className: ge },
                                s().createElement(
                                    G.t,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: d,
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: be,
                                            onClick: () => _.onGroupClick(e),
                                            onMouseEnter: C.$.playHighlight,
                                        },
                                        s().createElement('div', { className: l()(Ee, m && pe) }),
                                        s().createElement(
                                            'div',
                                            { className: ve },
                                            s().createElement('div', { className: l()(fe, t && Ce) }),
                                            s().createElement(
                                                'div',
                                                { className: he },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: ye },
                                                s().createElement(q, { buffIconType: c, className: Be }),
                                                u && s().createElement(j.w, { classMix: l()(Fe, De), text: u }),
                                                s().createElement(j.w, { classMix: Fe, text: o }),
                                            ),
                                        ),
                                        s().createElement(ue, i),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: l()(ke, t && Ae) },
                                    $.UI(a, (e) => s().createElement(_e, Se({ key: e.id }, e))),
                                    g && s().createElement('div', { className: we }),
                                    $.UI(n, (e) => s().createElement(_e, Se({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    Ne = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const Le = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    xe = (0, N.Pi)(({ showBackground: e = !0, className: t }) => {
                        const a = W().model,
                            n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            u = a.groups.get(),
                            c = (0, z.c4)(Le);
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    const e = c.getContainerSize(),
                                        t = c.getWrapperSize();
                                    e && t && o(e > t);
                                };
                                return (
                                    c.events.on('recalculateContent', e),
                                    () => {
                                        c.events.off('recalculateContent', e);
                                    }
                                );
                            }, [c]),
                            s().createElement(
                                'div',
                                { className: l()(Ne.base, e && Ne.base__bg, t) },
                                s().createElement(
                                    V.X.Vertical.Area.Default,
                                    {
                                        api: c,
                                        barClassNames: { base: Ne.barBase },
                                        scrollClassName: Ne.scroll,
                                        scrollClassNames: { content: Ne.content },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Ne.groups },
                                        $.UI(u, (e) =>
                                            s().createElement(Ie, Te({ key: e.id }, e, { isScrollable: i })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Re = (0, r.memo)(function (e) {
                        const t = (0, r.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return s().createElement(H, { options: t }, s().createElement(xe, e));
                    }),
                    Pe = {
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
                    Me = [
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
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                class He extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, C.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, C.G)(this.props.soundClick);
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
                            a = e.onClick,
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            o = e.classNames,
                            u = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, Me)),
                            g = l()(Pe.base, Pe[`base__${i}`], Pe[`base__${r}`], null == o ? void 0 : o.base),
                            b = l()(Pe.icon, Pe[`icon__${i}`], Pe[`icon__${r}`], null == o ? void 0 : o.icon),
                            E = l()(Pe.glow, null == o ? void 0 : o.glow),
                            p = l()(Pe.caption, Pe[`caption__${i}`], null == o ? void 0 : o.caption),
                            v = l()(Pe.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Oe(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(u),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                _,
                            ),
                            'info' !== i && s().createElement('div', { className: Pe.shine }),
                            s().createElement('div', { className: b }, s().createElement('div', { className: E })),
                            s().createElement('div', { className: p }, t),
                            n && s().createElement('div', { className: v }, n),
                        );
                    }
                }
                He.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const We = ({ onClick: e }) =>
                        s().createElement(He, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    Ve = 'common_close_0e',
                    ze = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        s().createElement(He, {
                            onClick: e,
                            classNames: { base: Ve },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    $e = 'TopButtons_base_ef',
                    Ge = 'TopButtons_leftButtons_9e',
                    je = 'TopButtons_rightButtons_33',
                    Ze = s().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: a,
                        onAboutClick: n,
                        onCloseClick: r,
                        className: i,
                        classNames: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: l()($e, i) },
                            e &&
                                a &&
                                s().createElement(
                                    'div',
                                    { className: l()(Ge, null == o ? void 0 : o.leftButtons) },
                                    s().createElement(He, { onClick: a, caption: e, type: 'back' }),
                                ),
                            s().createElement(
                                'div',
                                { className: l()(je, null == o ? void 0 : o.rightButtons) },
                                n && s().createElement(We, { onClick: n }),
                                r && s().createElement(ze, { onClick: r, label: t }),
                            ),
                        );
                    });
                var Ue = a(5716),
                    qe = a(9690),
                    Ye = a(3649),
                    Xe = a(8032);
                const Ke = {
                    base: 'TankName_base_f1',
                    base__sizeMedium: 'TankName_base__sizeMedium_3a',
                    base__sizBig: 'TankName_base__sizBig_a9',
                    base__typeWhite: 'TankName_base__typeWhite_32',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
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
                let Qe, Je;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Qe || (Qe = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Je || (Je = {}));
                const et = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: n,
                        vehicleLvl: r,
                        tags: i = '',
                        size: o = Qe.extraSmall,
                        type: u = Je.colored,
                        className: c,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const _ = `${(0, Ye.BN)(n)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return s().createElement(
                            'div',
                            {
                                className: l()(
                                    Ke.base,
                                    Ke[`base__size${(0, Ye.e)(o)}`],
                                    Ke[`base__type${(0, Ye.e)(u)}`],
                                    c,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: l()(Ke.level, null == d ? void 0 : d.level) },
                                (0, qe.HG)(r),
                            ),
                            s().createElement('div', {
                                className: l()(
                                    Ke.type,
                                    e && Ke[`type__elite${(0, Ye.e)(o)}`],
                                    Ke[`type__${o}`],
                                    null == d ? void 0 : d.typeIcon,
                                ),
                                style: { backgroundImage: `url(${g})` },
                            }),
                            (0, Xe.f)(i, Ue.f3) && s().createElement('div', { className: Ke.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: l()(Ke.name, null == d ? void 0 : d.name) },
                                m ? a : t,
                            ),
                        );
                    },
                    tt = 'VehicleParamsDecorator_base_32',
                    at = 'VehicleParamsDecorator_vehicleInfo_02',
                    nt = 'VehicleParamsDecorator_tankName_ac',
                    rt = 'VehicleParamsDecorator_tankLvl_26',
                    st = 'VehicleParamsDecorator_type_e7',
                    it = 'VehicleParamsDecorator_tip_6c',
                    lt = ['children', 'isPerkTipShown'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const ut = (e) => {
                    let t = e.children,
                        a = e.isPerkTipShown,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, lt);
                    return s().createElement(
                        'div',
                        { className: tt },
                        s().createElement(
                            et,
                            ot({ className: at, classNames: { name: nt, level: rt, typeIcon: st } }, n, {
                                isShortName: !0,
                            }),
                        ),
                        t,
                        a &&
                            s().createElement(
                                'div',
                                { className: it },
                                R.strings.crew.vehicleParamsDecorator.perkTip(),
                            ),
                    );
                };
                var ct = a(7321),
                    dt = a(4598),
                    mt = a(1612),
                    _t = a(9174),
                    gt = a(3946);
                const bt = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives(['currentTabId', 'background', 'nation', 'backButtonLabel']),
                                    {
                                        tabs: e.array('tabs'),
                                        vehicleInfo: e.object('vehicleInfo'),
                                        isTankmanContainerTTCVisible: _t.LO.box(!1),
                                    },
                                ),
                                a = (0, gt.Om)(() => $.UI(t.tabs.get(), dt.yR)),
                                n = (0, gt.Om)(() => {
                                    const e = a();
                                    return Boolean(e.length) && t.currentTabId.get() === e[0].id;
                                });
                            return Object.assign({}, t, { computes: { getTabs: a, isTTCPerkTipShown: n } });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    close: e.createCallbackNoArgs('onClose'),
                                    closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                                    back: e.createCallbackNoArgs('onBack'),
                                    hangar: e.createCallbackNoArgs('onHangar'),
                                    tabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                                    aboutCrew: e.createCallbackNoArgs('onAbout'),
                                },
                                (0, mt.h)({
                                    setTankmanContainerTTCVisible: (e) => t.isTankmanContainerTTCVisible.set(e),
                                }),
                            ),
                    ),
                    Et = bt[0],
                    pt = bt[1],
                    vt = 'Spinner_base_87',
                    ht = 'Spinner_caption_cf',
                    ft = 'Spinner_gear_c4',
                    Ct = 'Spinner_logo_bf',
                    kt = ({ message: e, className: t, classNames: a }) =>
                        s().createElement(
                            'div',
                            { className: l()(vt, t) },
                            e && s().createElement('div', { className: l()(ht, null == a ? void 0 : a.caption) }, e),
                            s().createElement('div', { className: l()(ft, null == a ? void 0 : a.gear) }),
                            s().createElement('div', { className: l()(Ct, null == a ? void 0 : a.logo) }),
                        );
                var At = a(3457);
                const wt = 'Error_base_46',
                    yt = 'Error_alertIcon_04',
                    Bt = 'Error_errorCaption_f2',
                    Ft = 'Error_button_cd',
                    Dt = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: a }) =>
                        s().createElement(
                            'div',
                            { className: wt },
                            s().createElement('div', { className: yt }),
                            s().createElement('div', { className: Bt }, a),
                            s().createElement(At.u5, { size: At.qE.medium, mixClass: Ft, onClick: t }, e),
                        );
                Dt.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const St = 'Waiting_base_c5',
                    It = 'Waiting_blackOverlay_55',
                    Nt = ({
                        message: e,
                        isError: t,
                        errorMessage: a,
                        errorBtnLabel: n,
                        errorBtnClickHandler: i,
                        overlayAlpha: l,
                    }) => {
                        const o = s().createRef();
                        return (
                            (0, r.useEffect)(() => {
                                const e = o.current;
                                e && l && (e.style.opacity = l);
                            }, [o, l]),
                            s().createElement(
                                'div',
                                { className: St },
                                s().createElement('div', { className: It, ref: o }),
                                t
                                    ? s().createElement(Dt, {
                                          errorBtnLabel: n,
                                          errorMessage: a,
                                          errorBtnClickHandler: i,
                                      })
                                    : s().createElement(kt, { message: e }),
                            )
                        );
                    };
                Nt.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var Tt = a(4462),
                    Lt = a(9023),
                    xt = a(894);
                const Rt = 'ViewMapper_base_42',
                    Pt = s().lazy(() => Promise.resolve().then(a.bind(a, 9023))),
                    Mt = s().lazy(() => Promise.resolve().then(a.bind(a, 4462))),
                    Ot = s().lazy(() => Promise.resolve().then(a.bind(a, 894))),
                    Ht = {
                        [Lt.PERSONAL_FILE_VIEW_RES_ID]: Pt,
                        [Tt.PERSONAL_DATA_RES_ID]: Mt,
                        [xt.SERVICE_RECORD_RES_ID]: Ot,
                    },
                    Wt = ({ id: e, setTTCVisibility: t, className: a }) => {
                        const n = Ht[e];
                        return s().createElement(
                            'div',
                            { className: l()(Rt, a) },
                            s().createElement(
                                r.Suspense,
                                {
                                    fallback: s().createElement(Nt, {
                                        errorBtnClickHandler: dt.ZT,
                                        message: R.strings.waiting.loading(),
                                        overlayAlpha: '0.5',
                                    }),
                                },
                                s().createElement(n, { setTTCVisibility: t }),
                            ),
                        );
                    },
                    Vt = 'TankmanContainerApp_base_42',
                    zt = 'TankmanContainerApp_tabs_59',
                    $t = 'TankmanContainerApp_widget_f9',
                    Gt = 'TankmanContainerApp_ttc_a4',
                    jt = 'TankmanContainerApp_ttc__withPerk_39',
                    Zt = 'TankmanContainerApp_flag_88';
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                const qt = (0, N.Pi)(() => {
                    const e = pt(),
                        t = e.model,
                        a = e.controls,
                        n = t.currentTabId.get(),
                        i = t.background.get(),
                        o = t.computes.getTabs(),
                        u = t.computes.isTTCPerkTipShown();
                    var c;
                    (c = a.closeWithEsc), I(D.n.ESCAPE, c);
                    const d = (0, r.useMemo)(
                        () =>
                            o.map(({ counter: e, title: t, id: a }) =>
                                Object.assign(
                                    { id: a, title: t },
                                    e > 0 ? { notification: { type: 'value', value: e > 99 ? '99+' : e } } : {},
                                ),
                            ),
                        [o],
                    );
                    return s().createElement(
                        'div',
                        { style: { backgroundImage: i && `url('${i}')` }, className: Vt },
                        s().createElement('div', {
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.crew.flags.$dyn(t.nation.get())})`,
                            },
                            className: Zt,
                        }),
                        s().createElement(Wt, { id: n, setTTCVisibility: a.setTankmanContainerTTCVisible }),
                        s().createElement('div', { className: $t }, s().createElement(ct.O, null)),
                        t.isTankmanContainerTTCVisible.get() &&
                            s().createElement(
                                'div',
                                { className: l()(Gt, u && jt) },
                                s().createElement(
                                    ut,
                                    Ut({}, t.vehicleInfo.get(), { isPerkTipShown: u }),
                                    s().createElement(Re, {
                                        showBackground: !1,
                                        resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    }),
                                ),
                            ),
                        s().createElement(B, { onClick: a.tabChange, tabs: d, active: n, className: zt }),
                        s().createElement(Ze, {
                            onBackClick: a.back,
                            backButtonLabel: t.backButtonLabel.get(),
                            onAboutClick: a.aboutCrew,
                            onCloseClick: a.hangar,
                            closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    f().render(
                        s().createElement(v, null, s().createElement(Et, null, s().createElement(qt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => d });
                var n = a(6483),
                    r = a.n(n),
                    s = a(9987),
                    i = a(6179),
                    l = a.n(i);
                const o = 'AlertCounter_base_f3',
                    u = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        l().createElement(
                            'div',
                            { className: r()(o, t) },
                            l().createElement(s.A, { value: e, className: u }),
                            !e && l().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            5563: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => _ });
                var n = a(6483),
                    r = a.n(n),
                    s = a(7078),
                    i = a(2603),
                    l = a(771),
                    o = a(3649),
                    u = a(9916),
                    c = a(6179),
                    d = a.n(c),
                    m = a(130);
                const _ = (0, c.memo)(({ efficiencyValue: e, tankmanID: t = l.y$, className: a }) => {
                    const n = e === l.sU,
                        c = n ? { tooltipId: i.M4 } : { tooltipId: i.Br, tankmanID: t };
                    return d().createElement(
                        s.t,
                        { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: c, isEnabled: t !== l.y$ },
                        d().createElement(
                            'div',
                            { className: r()(m.Z.base, a) },
                            n
                                ? d().createElement('div', { className: m.Z.icon })
                                : d().createElement(
                                      'div',
                                      { className: r()(m.Z.percent, e === l.yb && m.Z.percent__full) },
                                      (0, o.dL)(u.Z5.getNumberFormat(100 * e, u.B3.INTEGRAL)),
                                  ),
                        ),
                    );
                });
            },
            9197: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => p });
                var n = a(6483),
                    r = a.n(n),
                    s = a(6179),
                    i = a.n(s);
                const l = 'NumberRange_base_5e',
                    o = 'NumberRange_base__animation_79',
                    u = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = i().memo(function ({ from: e, to: t, className: a }) {
                        return i().createElement(
                            'div',
                            { className: r()(l, e <= 0 && o, a) },
                            i().createElement('div', { className: r()(u, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: d }, '/'),
                                    i().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    g = 'NumberRangeWithLabel_title_94',
                    b = 'NumberRangeWithLabel_counter_00',
                    E = 'NumberRangeWithLabel_counterGlow_1f',
                    p = ({ title: e, isGlowVisible: t = !1, className: a, classNames: n, from: l, to: o }) => {
                        const u = (0, s.useMemo)(
                            () => ({
                                left: l !== o ? 7 * String(l).length + 4 : Math.round((7 * String(l).length) / 2),
                            }),
                            [l, o],
                        );
                        return i().createElement(
                            'div',
                            { className: r()(_, a) },
                            i().createElement('div', { className: g }, e),
                            i().createElement(
                                'div',
                                { className: b },
                                i().createElement(m, { from: l, to: o }),
                                t &&
                                    i().createElement('div', {
                                        style: u,
                                        className: r()(E, null == n ? void 0 : n.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            2768: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => o, y: () => u });
                var n = a(6483),
                    r = a.n(n),
                    s = a(6179),
                    i = a.n(s),
                    l = a(4458);
                let o;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(o || (o = {}));
                const u = i().memo(function ({ iconName: e, size: t = o.c24x24, className: a }) {
                    var n;
                    return i().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e)})`,
                        },
                        className: r()(l.Z.base, l.Z[`base__${t}`], a),
                    });
                });
            },
            7077: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => c, U: () => u });
                var n = a(6483),
                    r = a.n(n),
                    s = a(3649),
                    i = a(6179),
                    l = a.n(i),
                    o = a(3938);
                let u;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(u || (u = {}));
                const c = ({ name: e, size: t = u.c100x60, classMix: a, isSkin: n = !1 }) => {
                    const c = (0, i.useMemo)(() => {
                        try {
                            let a = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            n && (a = a.$dyn('crewSkins'));
                            const r = a.$dyn((0, s.BN)(e));
                            if (!r) throw Error;
                            return { backgroundImage: `url(${r})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, n]);
                    return l().createElement('div', { style: c, className: r()(o.Z.base, o.Z[`base__${t}`], a) });
                };
            },
            8485: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => d, d: () => b });
                var n = a(6483),
                    r = a.n(n),
                    s = a(8271),
                    i = a(771),
                    l = a(6179),
                    o = a.n(l),
                    u = a(2768),
                    c = a(9426);
                let d;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(d || (d = {}));
                const m = { [d.Big]: u.F.c22x22, [d.Small]: u.F.c14x14 };
                var _;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(_ || (_ = {}));
                const g = (e, t, a) =>
                        e === s.W.Possible || e === s.W.New
                            ? _.LightYellow
                            : e === s.W.Irrelevant
                              ? _.Grey
                              : t === i.sU
                                ? e === s.W.Learning
                                    ? _.Yellow
                                    : _.Grey
                                : t < i.yb
                                  ? a
                                      ? _.Grey
                                      : _.Red
                                  : e === s.W.Learning
                                    ? _.Yellow
                                    : _.Grey,
                    b = o().memo(function ({
                        icon: e,
                        type: t,
                        size: a,
                        efficiency: n = i.yb,
                        hasInstruction: l = !1,
                    }) {
                        const d = (!l && n === i.sU) || t === s.W.Irrelevant;
                        return o().createElement(
                            'div',
                            { className: r()(c.Z.base, c.Z[`base__${a}`]) },
                            o().createElement('div', {
                                className: r()(c.Z.background, c.Z[`background__${g(t, n, l)}`]),
                            }),
                            e &&
                                o().createElement(
                                    'div',
                                    { className: c.Z.container },
                                    o().createElement(u.y, {
                                        iconName: e,
                                        size: m[a],
                                        className: r()(d && c.Z.disabledIcon),
                                    }),
                                    d && o().createElement('div', { className: c.Z.disabled }),
                                ),
                        );
                    });
            },
            9631: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => _ });
                var n = a(6483),
                    r = a.n(n),
                    s = a(3457),
                    i = a(2106),
                    l = a(9987),
                    o = a(6179),
                    u = a.n(o),
                    c = a(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = u().memo(function (e) {
                    let t = e.isActive,
                        a = e.counter,
                        n = e.className,
                        o = e.children,
                        _ = e.type,
                        g = void 0 === _ ? i.L.secondary : _,
                        b = e.size,
                        E = void 0 === b ? i.q.small : b,
                        p = e.hasIndicator,
                        v = void 0 === p || p,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, d);
                    return u().createElement(
                        'div',
                        { className: r()(c.Z.base, n, t && c.Z.base__active) },
                        u().createElement(s.u5, m({ type: g, size: E, mixClass: c.Z.button }, h), o),
                        u().createElement('div', { className: c.Z.overlay }),
                        v && u().createElement('div', { className: c.Z.indicator }),
                        Boolean(a) &&
                            u().createElement(
                                'div',
                                { className: c.Z.counter },
                                u().createElement(l.A, { value: a, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, a) => {
                'use strict';
                a.d(t, { BH: () => s, Fs: () => i, ei: () => n, qb: () => r });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    s = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, a) => {
                'use strict';
                a.d(t, { Gc: () => l, H$: () => o, Xd: () => s, Y4: () => u, gO: () => i, wP: () => r });
                var n = a(771);
                a(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                const s = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let i;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(i || (i = {}));
                const l = (e, t = !1, a = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (a ? n.$dyn(`${a}Case`) : n).$dyn(e);
                };
                let o;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(o || (o = {}));
                const u = (e) => (e === n.sU ? o.Untrained : e < n.yb ? o.Low : o.Normal);
            },
            4462: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { PERSONAL_DATA_RES_ID: () => $e, default: () => Ge });
                var n = a(6179),
                    r = a.n(n),
                    s = a(6483),
                    i = a.n(s),
                    l = a(1037),
                    o = a(5415);
                const u = {
                    base: 'ListHeader_base_ad',
                    title: 'ListHeader_title_a8',
                    base__memberChange: 'ListHeader_base__memberChange_c2',
                    base__tankChange: 'ListHeader_base__tankChange_fb',
                    base__personalData: 'ListHeader_base__personalData_aa',
                };
                let c;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(c || (c = {}));
                const d = ({ title: e, theme: t = c.Barracks, className: a, children: n }) =>
                    r().createElement(
                        'div',
                        { className: i()(u.base, u[`base__${t}`], a) },
                        r().createElement('div', { className: u.title }, e),
                        n,
                    );
                var m = a(5801),
                    _ = a(2106),
                    g = a(3403),
                    b = a(3457),
                    E = a(6373),
                    p = a(8018);
                const v = 'WarningText_base_13',
                    h = 'WarningText_icon_5d',
                    f = 'WarningText_label_c6',
                    C = r().memo(function ({ label: e }) {
                        return r().createElement(
                            'div',
                            { className: v },
                            r().createElement('div', { className: h }),
                            r().createElement('div', { className: f }, e),
                        );
                    }),
                    k = 'ListEmptyState_base_ae',
                    A = 'ListEmptyState_content_1e',
                    w = 'ListEmptyState_shadow_ae',
                    y = 'ListEmptyState_buttonWrapper_78',
                    B = 'ListEmptyState_button_f1',
                    F = r().memo(function ({
                        warningText: e,
                        buttonType: t = b.L$.secondary,
                        tooltipArgs: a = p.Xd,
                        isBtnDisabled: n = !1,
                        className: s,
                        onClick: l,
                        children: o,
                    }) {
                        return r().createElement(
                            'div',
                            { className: i()(k, s) },
                            r().createElement(
                                'div',
                                { className: A },
                                r().createElement('div', { className: w }),
                                r().createElement(C, { label: e }),
                                o &&
                                    r().createElement(
                                        'div',
                                        { className: y },
                                        r().createElement(
                                            E.i,
                                            a,
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    b.u5,
                                                    { size: b.qE.small, type: t, disabled: n, onClick: l, mixClass: B },
                                                    o,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var D = a(794),
                    S = a(9653);
                var I = a(3138),
                    N = a(4385);
                const T = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: a,
                        paddingBottom: n,
                        amount: r,
                        itemsAmountPerRow: s,
                        visibleRowsAmount: i,
                    }) => {
                        const l = Math.ceil(r / s) * t,
                            o = i * t,
                            u = e * t;
                        return { paddingTop: `${u + a}rem`, paddingBottom: `${Math.max(l - u - o, 0) + n}rem` };
                    },
                    L = (e) => {
                        const t = e.className,
                            a = e.children,
                            n = e.itemsAmountPerRow,
                            s = e.visibleRowsAmount,
                            i = e.startRowIndex,
                            l = e.amount,
                            o = i * n,
                            u = Math.min(s * n, l - o);
                        return r().createElement(
                            'div',
                            { className: t, style: T(e) },
                            (0, N.K)(u, (e) => a(o + e)),
                        );
                    },
                    x = 'VirtualGrid_base_52',
                    P = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: a,
                        children: s,
                        api: l,
                        classNames: o,
                        preloadedRows: u = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = l.scrollApi,
                            _ = (0, n.useRef)(0),
                            g = (0, n.useState)(0),
                            b = g[0],
                            E = g[1],
                            p = (0, n.useState)(null),
                            v = p[0],
                            h = p[1],
                            f = (0, n.useState)(null),
                            C = f[0],
                            k = f[1];
                        return (
                            (0, n.useEffect)(() => {
                                const t = (t) => {
                                    if (!v) return;
                                    const n = Math.floor((I.O.view.pxToRem(t.value.scrollPosition) - c) / a),
                                        r = Math.ceil(e / v),
                                        s = Math.max(0, Math.min(n - u, r));
                                    E(s), l.startRowIndexChanged(s);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [l, m, a, c, v, e, u]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                n = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    I.O.view.pxToRem(n.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                s = Math.floor(r / t),
                                                i = Math.ceil(I.O.view.pxToRem(n.height) / a) + 2 * u;
                                            (_.current = s), h(s), k(i), l.layoutCalculated(s, i);
                                        }
                                    },
                                    n = () => {
                                        const t = _.current;
                                        e(), l.scrollToIndex(b * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', n),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', n);
                                    }
                                );
                            }, [l, m, a, t, u, b]),
                            (0, n.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    v && m.applyScroll(Math.floor((e + 1) / v) * a + c, { immediate: t });
                                };
                                return l.events.on('scrollToIndex', e), () => l.events.off('scrollToIndex', e);
                            }, [l, a, v, c, m]),
                            r().createElement(
                                D.X.Vertical.Default,
                                {
                                    api: m,
                                    className: null == o ? void 0 : o.scroll,
                                    areaClassName: null == o ? void 0 : o.areaClassName,
                                    scrollClassName: null == o ? void 0 : o.scrollClassName,
                                    scrollClassNames: {
                                        content: null == o ? void 0 : o.content,
                                        wrapper: null == o ? void 0 : o.wrapper,
                                    },
                                },
                                null !== v &&
                                    null !== C &&
                                    r().createElement(
                                        L,
                                        {
                                            className: i()(x, null == o ? void 0 : o.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: v,
                                            visibleRowsAmount: C,
                                            startRowIndex: b,
                                            cellHeight: a,
                                        },
                                        s,
                                    ),
                            )
                        );
                    },
                    M = 'VirtualGridWithFade_scrollAreaFade_94',
                    O = ['api', 'children', 'classNames'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let t = e.api,
                        a = e.children,
                        s = e.classNames,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, O);
                    const o = (0, n.useState)(!0),
                        u = o[0],
                        c = o[1],
                        d = t.scrollApi;
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                const e = d.getBounds()[1];
                                c(Math.abs(e - d.animationScroll.scrollPosition.goal) > 0.1);
                            };
                            return (
                                d.events.on('change', e),
                                d.events.on('recalculateContent', e),
                                () => {
                                    d.events.off('change', e), d.events.off('recalculateContent', e);
                                }
                            );
                        }, [d]),
                        r().createElement(
                            P,
                            H(
                                {
                                    api: t,
                                    classNames: Object.assign({}, s, {
                                        scrollClassName: i()(null == s ? void 0 : s.scrollClassName, u && M),
                                    }),
                                },
                                l,
                            ),
                            a,
                        )
                    );
                };
                var V = a(3215),
                    z = a(9480),
                    $ = a(3946);
                const G = (0, V.q)()(
                        ({ observableModel: e }) => {
                            const t = e.array('cardList'),
                                a = (0, $.Om)((e) => {
                                    const a = z.U2(t.get(), e);
                                    if (a) return Object.assign({}, a, { restrictions: [...z.tP(a.restrictions)] });
                                });
                            return Object.assign({ cardList: t }, e.primitives(['isCardsLocked']), {
                                computes: { getCard: a },
                            });
                        },
                        ({ externalModel: e }) => ({
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                            selectCard: e.createCallback((e, t) => ({ cardID: e, isSkin: t }), 'onCardSelected'),
                            markAsViewed: e.createCallback((e) => ({ cardID: e }), 'onNewCardViewed'),
                        }),
                    ),
                    j = G[0],
                    Z = G[1];
                let U, q, Y;
                !(function (e) {
                    (e.Default = 'default'), (e.Selected = 'selected'), (e.Disabled = 'disabled');
                })(U || (U = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.Skin = 'skin');
                    })(q || (q = {})),
                    (function (e) {
                        (e.Document = 'document'), (e.SuitableSkin = 'suitableSkin');
                    })(Y || (Y = {}));
                var X = a(7727),
                    K = a(3649);
                const Q = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                };
                let J;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118');
                })(J || (J = {}));
                const ee = (e, t) => {
                        switch (t) {
                            case J.c1080x454:
                                return R.images.gui.maps.icons.crew.flags.$dyn(e);
                            case J.c240x118:
                                return R.images.gui.maps.icons.tankmen.card.nations.$dyn(e);
                        }
                    },
                    te = r().memo(function ({ nation: e, size: t, className: a }) {
                        return r().createElement('div', {
                            className: i()(Q.base, Q[`base__${t}`], a),
                            style: { backgroundImage: `url('${ee(e, t)}')` },
                        });
                    }),
                    ae = 'ListCardAlert_base_52',
                    ne = 'ListCardAlert_glow_1c',
                    re = 'ListCardAlert_icon_d2',
                    se = ({ className: e, tooltipArgs: t }) =>
                        r().createElement(
                            'div',
                            { className: i()(ae, e) },
                            r().createElement('div', { className: ne }),
                            r().createElement(E.i, t, r().createElement('div', { className: re })),
                        ),
                    ie = {
                        base: 'BaseCard_base_b0',
                        base__default: 'BaseCard_base__default_2d',
                        base__selected: 'BaseCard_base__selected_45',
                        base__disabled: 'BaseCard_base__disabled_47',
                        base__alertCardLocked: 'BaseCard_base__alertCardLocked_df',
                        selectedFrame: 'BaseCard_selectedFrame_0a',
                        flag: 'BaseCard_flag_b5',
                        icon: 'BaseCard_icon_f4',
                        separator: 'BaseCard_separator_02',
                        cardInfo: 'BaseCard_cardInfo_a6',
                        cardInfo__withAdditionalInfo: 'BaseCard_cardInfo__withAdditionalInfo_cf',
                        name: 'BaseCard_name_17',
                        typeIcon: 'BaseCard_typeIcon_71',
                        alertIcon: 'BaseCard_alertIcon_67',
                    };
                let le;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.CardLocked = 'cardLocked');
                })(le || (le = {}));
                const oe = ({ icon: e, typeIcon: t, name: a, nation: n, cardState: s, children: l, alertType: o }) =>
                        r().createElement(
                            'div',
                            {
                                onMouseEnter: X.$.playHighlight,
                                className: i()(ie.base, ie[`base__${s}`], ie[`base__alert${(0, K.e)(o)}`]),
                            },
                            s === U.Selected && r().createElement('div', { className: ie.selectedFrame }),
                            n && r().createElement(te, { nation: n, size: J.c240x118, className: ie.flag }),
                            r().createElement('div', { className: ie.icon, style: { backgroundImage: `url(${e})` } }),
                            r().createElement('div', { className: ie.separator }),
                            r().createElement(
                                'div',
                                { className: i()(ie.cardInfo, Boolean(l) && ie.cardInfo__withAdditionalInfo) },
                                r().createElement('div', { className: ie.name }, a),
                                l,
                            ),
                            r().createElement('div', {
                                className: ie.typeIcon,
                                style: { backgroundImage: `url(${t})` },
                            }),
                            o !== le.None &&
                                r().createElement(se, {
                                    className: ie.alertIcon,
                                    tooltipArgs: {
                                        header: R.strings.crew.personalData.card.tooltip.locked.title(),
                                        body: R.strings.crew.personalData.card.tooltip.locked.body(),
                                        isEnabled: o === le.CardLocked,
                                    },
                                }),
                        ),
                    ue = (0, g.Pi)(({ icon: e, name: t, cardState: a, className: n, onClick: s }) => {
                        const i = Z().model.isCardsLocked.get();
                        return r().createElement(
                            E.i,
                            {
                                header: R.strings.crew.personalData.card.tooltip.document.title(),
                                body: R.strings.crew.personalData.card.tooltip.document.body(),
                                isEnabled: !i,
                            },
                            r().createElement(
                                'div',
                                { className: n, onClick: s },
                                r().createElement(oe, {
                                    icon: e,
                                    typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.document(),
                                    name: t,
                                    cardState: a,
                                    alertType: i ? le.CardLocked : le.None,
                                }),
                            ),
                        );
                    });
                var ce = a(7078),
                    de = a(2603),
                    me = a(9367);
                const _e = 'InventoryInfo_base_c4',
                    ge = 'InventoryInfo_icon_f6',
                    be = 'InventoryInfo_amount_59',
                    Ee = r().memo(function ({ amount: e, className: t }) {
                        return r().createElement(
                            'div',
                            { className: i()(_e, t) },
                            r().createElement('div', { className: ge }),
                            r().createElement('div', { className: be }, e),
                        );
                    }),
                    pe = 'ResetButton_base_f1',
                    ve = 'ResetButton_iconWrapper_20',
                    he = 'ResetButton_icon_a2',
                    fe = 'ResetButton_label_f8',
                    Ce = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: i()(pe, e) },
                            r().createElement('div', { className: ve }, r().createElement('div', { className: he })),
                            r().createElement('div', { className: fe }, R.strings.crew.personalData.card.remove()),
                        ),
                    ke = ({ restrictions: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: t },
                            (0, K.uF)(R.strings.crew.personalData.card.restrictions(), { restrictions: z.v_(e, ', ') }),
                        ),
                    Ae = 'SkinCard_base_bb',
                    we = 'SkinCard_resetButton_ff',
                    ye = 'SkinCard_restrictions_e8',
                    Be = 'SkinCard_inventoryInfo_62',
                    Fe = 'SkinCard_newSkinMark_16',
                    De = (e, t) => (e ? le.CardLocked : t ? le.Default : le.None),
                    Se = (0, g.Pi)(
                        ({
                            id: e,
                            nation: t,
                            icon: a,
                            name: n,
                            restrictions: s,
                            inventoryCount: l,
                            cardState: o,
                            newAmount: u,
                            className: c,
                            onClick: d,
                        }) => {
                            const m = Z(),
                                _ = m.model,
                                g = m.controls,
                                b = s.length > 0,
                                E = u > 0;
                            return r().createElement(
                                ce.t,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                                    args: { tooltipId: de.lu, skinId: e },
                                },
                                r().createElement(
                                    'div',
                                    { className: i()(Ae, c), onClick: d, onMouseEnter: () => E && g.markAsViewed(e) },
                                    r().createElement(
                                        oe,
                                        {
                                            icon: a,
                                            typeIcon: R.images.gui.maps.icons.crew.personalData.c_24x24.skin(),
                                            name: n,
                                            nation: t,
                                            cardState: o,
                                            alertType: De(_.isCardsLocked.get(), b),
                                        },
                                        o === U.Selected && r().createElement(Ce, { className: we }),
                                        b && r().createElement(ke, { restrictions: s, className: ye }),
                                    ),
                                    r().createElement(Ee, { amount: l, className: Be }),
                                    E && r().createElement(me.Q, { value: u > 1 ? u : void 0, className: Fe }),
                                ),
                            );
                        },
                    );
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Ne = { [q.Skin]: Se, [q.Document]: ue },
                    Te = (0, g.Pi)(({ index: e, className: t }) => {
                        const a = Z(),
                            n = a.model,
                            s = a.controls,
                            i = n.computes.getCard(e);
                        if (!i) throw Error(`Index ${e} is out of data card list range`);
                        const l = i.cardState !== U.Disabled && !n.isCardsLocked.get(),
                            o = Ne[i.cardType];
                        return r().createElement(
                            o,
                            Ie({}, i, { className: t, onClick: () => l && s.selectCard(i.id, i.cardType === q.Skin) }),
                        );
                    }),
                    Le = 'DataCardList_base_0a',
                    xe = 'DataCardList_grid_63',
                    Re = 'DataCardList_gridWrapper_44',
                    Pe = 'DataCardList_emptyState_f2',
                    Me = 'DataCardList_item_b1',
                    Oe = (0, g.Pi)(() => {
                        const e = (() => {
                                const e = D.X.Vertical.useVerticalScrollApi(),
                                    t = (0, S.q)(),
                                    a = (0, n.useCallback)((e, a = !0) => t.trigger('scrollToIndex', e, a), [t]),
                                    r = (0, n.useCallback)((e, a) => t.trigger('layoutCalculated', e, a), [t]),
                                    s = (0, n.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, n.useMemo)(
                                    () => ({
                                        scrollToIndex: a,
                                        layoutCalculated: r,
                                        startRowIndexChanged: s,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [a, r, s, e, t.off, t.on],
                                );
                            })(),
                            t = Z(),
                            a = t.model,
                            s = t.controls,
                            l = a.cardList.get().length;
                        return r().createElement(
                            'div',
                            { className: i()(Le) },
                            r().createElement(
                                'div',
                                { className: Re },
                                l > 0
                                    ? r().createElement(
                                          W,
                                          {
                                              amount: l,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: xe },
                                              api: e,
                                          },
                                          (e) => r().createElement(Te, { key: e, index: e, className: Me }),
                                      )
                                    : r().createElement(
                                          F,
                                          {
                                              warningText: R.strings.crew.personalData.emptyState.noFilteredItems(),
                                              buttonType: _.L.primary,
                                              onClick: s.resetFilters,
                                              className: Pe,
                                          },
                                          R.strings.crew.filter.reset(),
                                      ),
                            ),
                        );
                    }),
                    He = 'PersonalDataApp_base_61',
                    We = 'PersonalDataApp_base__centered_a6',
                    Ve = 'PersonalDataApp_content_36',
                    ze = () => {
                        const e = (0, o.GS)().mediaHeight,
                            t = (0, o.GS)().remScreenWidth >= 2560;
                        return r().createElement(
                            'div',
                            { className: i()(He, t && We) },
                            r().createElement(
                                'div',
                                { className: Ve },
                                r().createElement(d, {
                                    title: R.strings.crew.personalData.title(),
                                    theme: c.PersonalData,
                                }),
                                r().createElement(m.p, { popoverDirection: e < o.Aq.Medium ? l.IC.Left : l.IC.Bottom }),
                                r().createElement(Oe, null),
                            ),
                        );
                    },
                    $e = R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                    Ge = r().memo(
                        ({ setTTCVisibility: e }) => (
                            e(!1), r().createElement(j, { options: { rootId: $e } }, r().createElement(ze, null))
                        ),
                    );
            },
            9023: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { PERSONAL_FILE_VIEW_RES_ID: () => Xe, default: () => Ke });
                var n = a(6179),
                    r = a.n(n),
                    s = a(5415),
                    i = a(3403),
                    l = a(771),
                    o = a(3215),
                    u = a(4598),
                    c = a(9480),
                    d = a(1612),
                    m = a(9174),
                    _ = a(3946);
                const g = (0, o.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'skillsState',
                                        'skillsEfficiency',
                                        'selectAvailableSkillsCount',
                                        'isResetDisable',
                                        'isFemale',
                                        'hasIncreaseDiscount',
                                        'hasDropSkillDiscount',
                                        'isTankmanWithDescription',
                                        'isTankmanInVehicle',
                                    ]),
                                    {
                                        relevantGroupedSkills: e.array('relevantGroupedSkills'),
                                        irrelevantGroupedSkills: e.array('irrelevantGroupedSkills'),
                                        commonSkills: e.array('commonSkills'),
                                        isTTCVisible: m.LO.box(!1),
                                    },
                                ),
                                a = (e) => c.UI(e, (e) => Object.assign({}, e)),
                                n = (e) => c.UI(e, (e) => Object.assign({}, e, { skills: a(e.skills) })),
                                r = (0, _.Om)(() => n(t.relevantGroupedSkills.get()), { equals: u.jv }),
                                s = (0, _.Om)(() => n(t.irrelevantGroupedSkills.get()), { equals: u.jv }),
                                i = (0, _.Om)(() => a(t.commonSkills.get()), { equals: u.jv }),
                                o = (0, _.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get(), !0),
                                d = (0, _.Om)(() => t.skillsEfficiency.get() === l.sU, !0);
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: d,
                                    relevantSkillsGroups: r,
                                    irrelevantSkillsGroups: s,
                                    commonSkills: i,
                                    isTTCVisible: o,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    increase: e.createCallbackNoArgs('onIncrease'),
                                    reset: e.createCallbackNoArgs('onReset'),
                                    hoverSkill: e.createCallback((e) => ({ skillId: e }), 'onHoverSkill'),
                                    leaveSkill: e.createCallback((e) => ({ skillId: e }), 'onLeaveSkill'),
                                    clickSkill: e.createCallback((e) => ({ skillId: e }), 'onClickSkill'),
                                },
                                (0, d.h)({ setTTCVisible: (e) => t.isTTCVisible.set(e) }),
                            ),
                    ),
                    b = g[0],
                    E = g[1];
                var p = a(4022),
                    v = a(6483),
                    h = a.n(v),
                    f = a(2106),
                    C = a(6373),
                    k = a(3457);
                const A = 'ButtonWithDiscountIndicator_base_6c',
                    w = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    y = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    B = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const F = r().memo(function (e) {
                        let t = e.hasDiscount,
                            a = e.className,
                            n = e.children,
                            s = e.wrapperId,
                            i = e.isSmall,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, B);
                        return r().createElement(
                            'div',
                            { id: s, className: h()(A, a) },
                            r().createElement(k.u5, l, n),
                            t && r().createElement('div', { className: h()(w, i && y) }),
                        );
                    }),
                    D = 'Buttons_base_ec',
                    S = 'Buttons_increaseBtnContainer_e9',
                    I = 'Buttons_increaseButton_75',
                    N = 'Buttons_resetButton_0a',
                    T = 'Buttons_resetButton__disabled_b9',
                    L = 'Buttons_resetButton__small_fb',
                    x = 'Buttons_resetIcon_fa',
                    P = 'Buttons_buttonWrapper_de',
                    M = (0, i.Pi)(function ({ className: e, style: t }) {
                        const a = E(),
                            n = a.controls,
                            i = a.model,
                            l = (0, s.GS)().mediaSize,
                            o = i.isResetDisable.get(),
                            u = l === s.cJ.ExtraSmall || l === s.cJ.Small,
                            c = o
                                ? R.strings.crew.matrix.resetTooltip.disable
                                : R.strings.crew.matrix.resetTooltip.enable;
                        return r().createElement(
                            'div',
                            { className: h()(D, e), style: t },
                            r().createElement(
                                'div',
                                { className: P },
                                r().createElement(
                                    C.i,
                                    {
                                        header: R.strings.crew.matrix.increaseTooltip.enable.header(),
                                        body: R.strings.crew.matrix.increaseTooltip.enable.body(),
                                    },
                                    r().createElement(
                                        F,
                                        {
                                            onClick: () => n.increase(),
                                            type: f.L.ghost,
                                            mixClass: I,
                                            hasDiscount: i.hasIncreaseDiscount.get(),
                                            className: S,
                                        },
                                        R.strings.crew.matrix.increaseButton(),
                                    ),
                                ),
                            ),
                            r().createElement(
                                C.i,
                                { header: c.header(), body: c.body(), ignoreMouseClick: o },
                                r().createElement(
                                    'div',
                                    { className: P, id: 'matrix_drop_skills_btn' },
                                    r().createElement(
                                        F,
                                        {
                                            hasDiscount: i.hasDropSkillDiscount.get(),
                                            soundHover: o ? null : 'highlight',
                                            soundClick: o ? null : 'play',
                                            onClick: () => !o && n.reset(),
                                            type: f.L.ghost,
                                            mixClass: h()(N, o && T, u && L),
                                            disabled: o,
                                            isSmall: u,
                                        },
                                        u
                                            ? r().createElement('div', { className: x })
                                            : R.strings.crew.matrix.resetButton(),
                                    ),
                                ),
                            ),
                        );
                    });
                var O = a(7701);
                let H;
                !(function (e) {
                    (e.LearnAvailable = 'available'),
                        (e.Reduced = 'reduced'),
                        (e.Training = 'training'),
                        (e.Disabled = 'disabled'),
                        (e.Locked = 'locked'),
                        (e.ZeroSkills = 'zeroSkills'),
                        (e.AllSkills = 'allSkills');
                })(H || (H = {}));
                var W = a(3961),
                    V = a(3649);
                const z = {
                    base: 'RoleIcon_base_51',
                    base__small: 'RoleIcon_base__small_68',
                    base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                    base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                    base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                    base__c_24x24: 'RoleIcon_base__c_24x24_52',
                    base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                    base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                    base__medium: 'RoleIcon_base__medium_5d',
                    base__white: 'RoleIcon_base__white_2a',
                    base__big: 'RoleIcon_base__big_b4',
                };
                let $;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })($ || ($ = {}));
                const G = r().memo(function ({ role: e, size: t = $.c30x30, className: a }) {
                        const s = (0, n.useMemo)(() => {
                            try {
                                var a;
                                const n =
                                    null == (a = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                        ? void 0
                                        : a.$dyn((0, V.BN)(e));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (t) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, t]);
                        return r().createElement('div', { style: s, className: h()(z.base, z[`base__${t}`], a) });
                    }),
                    j = 'SkillRoleIcon_base_6b',
                    Z = (0, i.Pi)(function ({ role: e, isFemale: t, className: a }) {
                        const n = ((e, t) =>
                            e
                                ? R.strings.crew.matrix.skills.roles.female.$dyn(t)
                                : R.strings.crew.matrix.skills.roles.$dyn(t))(t, e);
                        return r().createElement(
                            C.i,
                            { body: n },
                            r().createElement('div', { className: h()(j, a) }, r().createElement(G, { role: e })),
                        );
                    });
                var U = a(4385),
                    q = a(5139);
                function Y(e, t, a, r = !1) {
                    const s = (0, n.useMemo)(
                        () =>
                            (function (e, t, a) {
                                return void 0 === a ? (0, q.Z)(e, t, !1) : (0, q.Z)(e, a, !1 !== t);
                            })(a, r, e),
                        t,
                    );
                    return (0, n.useEffect)(() => s.cancel, [s]), s;
                }
                var X = a(7078),
                    K = a(2603),
                    Q = a(7727),
                    J = a(8018);
                const ee = {
                    base: 'Frame_base_05',
                    base__gray: 'Frame_base__gray_7b',
                    base__disabled: 'Frame_base__disabled_39',
                    base__red: 'Frame_base__red_4c',
                    base__yellow: 'Frame_base__yellow_b9',
                };
                let te;
                !(function (e) {
                    (e.Gray = 'gray'), (e.Red = 'red'), (e.Yellow = 'yellow');
                })(te || (te = {}));
                const ae = (e, t, a) =>
                        a === ge.Disabled
                            ? t === _e.InProgress
                                ? te.Yellow
                                : te.Gray
                            : e === J.H$.Low
                              ? te.Red
                              : t === _e.InProgress
                                ? te.Yellow
                                : te.Gray,
                    ne = (e, t, a, n) =>
                        t === ge.Disabled
                            ? e !== _e.Learned && e !== _e.InProgress
                            : t === ge.Default && a !== J.H$.Untrained && e === _e.UnLearned && !n,
                    re = r().memo(function ({
                        efficiencyState: e,
                        progressState: t,
                        skillState: a,
                        hasAvailableSkills: n,
                    }) {
                        return r().createElement('div', {
                            className: h()(ee.base, ee[`base__${ae(e, t, a)}`], ne(t, a, e, n) && ee.base__disabled),
                        });
                    });
                var se = a(2768);
                const ie = {
                    base: 'MainInfo_base_a2',
                    skillIcon: 'MainInfo_skillIcon_1a',
                    base__disabled: 'MainInfo_base__disabled_e2',
                    base__blocked: 'MainInfo_base__blocked_47',
                    skillName: 'MainInfo_skillName_63',
                    base__inProgress: 'MainInfo_base__inProgress_29',
                    base__learned: 'MainInfo_base__learned_1e',
                    base__hover: 'MainInfo_base__hover_1e',
                };
                let le;
                !(function (e) {
                    (e.Disabled = 'disabled'), (e.Blocked = 'blocked');
                })(le || (le = {}));
                const oe = (e, t, a, n) =>
                        t === ge.Disabled
                            ? e === _e.UnLearned
                                ? le.Blocked
                                : le.Disabled
                            : t !== ge.Default || a === J.H$.Untrained || e !== _e.UnLearned || n
                              ? ''
                              : le.Disabled,
                    ue = r().memo(function ({
                        efficiencyState: e,
                        skillIcon: t,
                        isHovered: a,
                        skillUserName: n,
                        progressState: s,
                        skillState: i,
                        hasAvailableSkills: l,
                    }) {
                        return r().createElement(
                            'div',
                            {
                                className: h()(
                                    ie.base,
                                    ie[`base__${s}`],
                                    a && ie.base__hover,
                                    ie[`base__${oe(s, i, e, l)}`],
                                ),
                            },
                            r().createElement(se.y, { iconName: t, size: se.F.c52x52, className: ie.skillIcon }),
                            r().createElement('div', { className: ie.skillName }, n),
                        );
                    }),
                    ce = {
                        base: 'StateBg_base_2d',
                        progressBar: 'StateBg_progressBar_eb',
                        base__isLowEfficiency: 'StateBg_base__isLowEfficiency_2c',
                        disabledPattern: 'StateBg_disabledPattern_ab',
                        backPlate: 'StateBg_backPlate_05',
                        base__learned: 'StateBg_base__learned_77',
                        base__inProgress: 'StateBg_base__inProgress_f7',
                        hover: 'StateBg_hover_38',
                    },
                    de = r().memo(function ({
                        efficiencyState: e,
                        progressState: t,
                        skillState: a,
                        isHovered: s,
                        skillProgress: i,
                    }) {
                        const l = (0, n.useMemo)(() => ({ height: i + '%' }), [i]),
                            o = a !== ge.Disabled,
                            u = t === _e.InProgress,
                            c = o && e === J.H$.Low && t !== _e.UnLearned;
                        return r().createElement(
                            'div',
                            { className: h()(ce.base, ce[`base__${t}`], c && ce.base__isLowEfficiency) },
                            u && r().createElement('div', { className: ce.progressBar, style: l }),
                            !o && r().createElement('div', { className: ce.disabledPattern }),
                            r().createElement('div', { className: ce.backPlate }),
                            s && r().createElement('div', { className: ce.hover }),
                        );
                    }),
                    me = {
                        base: 'Skill_base_8e',
                        base__clickable: 'Skill_base__clickable_6c',
                        progressText: 'Skill_progressText_df',
                        progressText__lowEfficiency: 'Skill_progressText__lowEfficiency_f9',
                        zeroSkill: 'Skill_zeroSkill_b3',
                    };
                let _e, ge;
                !(function (e) {
                    (e.UnLearned = ''), (e.InProgress = 'inProgress'), (e.Learned = 'learned');
                })(_e || (_e = {})),
                    (function (e) {
                        (e.Default = ''), (e.Selectable = 'selectable'), (e.Disabled = 'disabled');
                    })(ge || (ge = {}));
                const be = r().memo(function ({
                        skillId: e,
                        skillIcon: t,
                        skillUserName: a,
                        isZero: s,
                        skillProgress: i,
                        progressState: l,
                        hasAvailableSkills: o,
                        onClick: u,
                        onHover: c,
                        onLeave: d,
                        skillState: m,
                        className: _,
                        canBeRelearnedAsZeroSkill: g,
                        skillsEfficiency: b,
                    }) {
                        const E = (0, n.useState)(!1),
                            p = E[0],
                            v = E[1],
                            f = (0, J.Y4)(b),
                            C = ((e, t, a) => {
                                switch (e) {
                                    case _e.UnLearned:
                                        return [t === ge.Selectable, t !== ge.Disabled];
                                    case _e.InProgress:
                                        return [a, t !== ge.Disabled];
                                    case _e.Learned:
                                        return [a, a];
                                    default:
                                        return [!1, !1];
                                }
                            })(l, m, g),
                            k = C[0],
                            A = C[1],
                            w = m !== ge.Disabled && f === J.H$.Low,
                            y = (0, n.useCallback)(() => {
                                Q.$.playHighlight(), v(!0), null == c || c();
                            }, [c]),
                            B = (0, n.useCallback)(() => {
                                v(!1), null == d || d();
                            }, [d]),
                            F = (0, n.useCallback)(() => {
                                Q.$.playClick(), u(e);
                            }, [u, e]),
                            D = (0, n.useMemo)(() => ({ skillName: e, tooltipId: K.HZ }), [e]);
                        return r().createElement(
                            X.t,
                            { targetId: Xe, args: D, ignoreMouseClick: !0 },
                            r().createElement(
                                'div',
                                {
                                    onMouseEnter: A ? y : void 0,
                                    onMouseLeave: A ? B : void 0,
                                    onClick: k ? F : void 0,
                                    className: h()(me.base, me[`base__${l}`], k && me.base__clickable, _),
                                },
                                r().createElement(de, {
                                    skillState: m,
                                    isHovered: p,
                                    efficiencyState: f,
                                    progressState: l,
                                    skillProgress: i,
                                }),
                                r().createElement(re, {
                                    efficiencyState: f,
                                    skillState: m,
                                    progressState: l,
                                    hasAvailableSkills: o,
                                }),
                                l === _e.InProgress &&
                                    r().createElement(
                                        'div',
                                        { className: h()(me.progressText, w && me.progressText__lowEfficiency) },
                                        (0, V.dL)(i),
                                    ),
                                r().createElement(ue, {
                                    efficiencyState: f,
                                    skillState: m,
                                    progressState: l,
                                    skillIcon: t,
                                    isHovered: p,
                                    skillUserName: a,
                                    hasAvailableSkills: o,
                                }),
                                s && r().createElement('div', { className: me.zeroSkill }),
                            ),
                        );
                    }),
                    Ee = [
                        'isIrrelevant',
                        'className',
                        'skillId',
                        'skillProgress',
                        'isInProgress',
                        'isLockedByZeroPerks',
                    ];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const ve = (0, i.Pi)(function (e) {
                        let t = e.isIrrelevant,
                            a = e.className,
                            s = e.skillId,
                            i = e.skillProgress,
                            l = e.isInProgress,
                            o = e.isLockedByZeroPerks,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ee);
                        const c = (0, n.useRef)(!1),
                            d = (0, n.useRef)(!1),
                            m = E(),
                            _ = m.model,
                            g = m.controls,
                            b = _.isTTCVisible.get(),
                            p = ((e, t) => {
                                switch (!0) {
                                    case 100 === e:
                                        return _e.Learned;
                                    case t:
                                        return _e.InProgress;
                                    default:
                                        return _e.UnLearned;
                                }
                            })(i, l),
                            v = _.selectAvailableSkillsCount.get() > 0,
                            h = _.skillsEfficiency.get(),
                            f = ((e, t, a, n, r) => {
                                switch (!0) {
                                    case t:
                                    case a:
                                    case r:
                                        return ge.Disabled;
                                    case n:
                                        return ge.Default;
                                    case e > 0:
                                        return ge.Selectable;
                                    default:
                                        return ge.Default;
                                }
                            })(_.selectAvailableSkillsCount.get(), _.computes.isUntrained(), t, l, o),
                            C = Y(
                                () => {
                                    c.current && ((d.current = !0), g.hoverSkill(s));
                                },
                                [s],
                                250,
                            ),
                            k = (0, n.useCallback)(() => {
                                (c.current = !0), C();
                            }, [C]),
                            A = (0, n.useCallback)(() => {
                                (c.current = !1), d.current && ((d.current = !1), g.leaveSkill(s));
                            }, [g, s]);
                        return r().createElement(
                            be,
                            pe({}, u, {
                                skillId: s,
                                onClick: g.clickSkill,
                                onHover: b ? k : void 0,
                                onLeave: b ? A : void 0,
                                skillState: f,
                                progressState: p,
                                skillProgress: i,
                                skillsEfficiency: h,
                                hasAvailableSkills: v,
                                className: a,
                                canBeRelearnedAsZeroSkill:
                                    !t && !o && !u.isZero && _.skillsState.get() === H.ZeroSkills,
                            }),
                        );
                    }),
                    he = 'SkillsRow_base_1e',
                    fe = 'SkillsRow_skill_df',
                    Ce = 'SkillsRow_emptySkill_b5';
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Ae = ({ skills: e, isIrrelevant: t, className: a, isLockedByZeroPerks: n }) =>
                        r().createElement(
                            'div',
                            { className: h()(he, a) },
                            c.UI(e, (e) =>
                                r().createElement(
                                    ve,
                                    ke({ key: `${e.skillId}_${e.isInProgress}` }, e, {
                                        isIrrelevant: t,
                                        className: fe,
                                        isLockedByZeroPerks: n,
                                    }),
                                ),
                            ),
                            (0, U.K)(6 - e.length, (e) => r().createElement('div', { className: Ce, key: e })),
                        ),
                    we = 'SkillsGroup_base_1e',
                    ye = 'SkillsGroup_title_5c',
                    Be = 'SkillsGroup_qualificationContainer_18',
                    Fe = 'SkillsGroup_alertIcon_77',
                    De = 'SkillsGroup_qualification_90',
                    Se = 'SkillsGroup_qualification__locked_57',
                    Ie = 'SkillsGroup_container_04',
                    Ne = 'SkillsGroup_rowsContainer_a3',
                    Te = 'SkillsGroup_row_ad',
                    Le = 'SkillsGroup_roleIcon_b0';
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const Re = ({
                        group: e,
                        qualificationNumber: t,
                        isIrrelevant: a,
                        isFemale: n,
                        additionalSkills: s,
                        className: i,
                        isLockedByZeroPerks: l = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: h()(we, i) },
                            r().createElement(
                                'div',
                                { className: ye },
                                l || a
                                    ? r().createElement(
                                          'div',
                                          { className: Be },
                                          r().createElement('div', { className: Fe }),
                                          r().createElement(
                                              'div',
                                              { className: h()(De, Se) },
                                              l
                                                  ? R.strings.crew.matrix.qualification.lockByZeroPerks.$num(t)
                                                  : R.strings.crew.matrix.qualification.unavailable.$num(t),
                                          ),
                                      )
                                    : r().createElement(
                                          'div',
                                          { className: De },
                                          R.strings.crew.matrix.qualification.$num(t),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: Ie },
                                r().createElement(Z, xe({}, e, { isFemale: n, className: Le })),
                                r().createElement(
                                    'div',
                                    { className: Ne },
                                    s &&
                                        r().createElement(Ae, {
                                            skills: s,
                                            isIrrelevant: a,
                                            className: Te,
                                            isLockedByZeroPerks: l,
                                        }),
                                    r().createElement(
                                        Ae,
                                        xe({}, e, { isIrrelevant: a, className: Te, isLockedByZeroPerks: l }),
                                    ),
                                ),
                            ),
                        ),
                    Pe = 'SkillsGroupsList_base_1d',
                    Me = 'SkillsGroupsList_base__manyRoles_ba',
                    Oe = 'SkillsGroupsList_scroll_e3',
                    He = 'SkillsGroupsList_group_ed',
                    We = (0, i.Pi)(() => {
                        const e = E().model,
                            t = e.computes.relevantSkillsGroups(),
                            a = e.computes.irrelevantSkillsGroups(),
                            s = e.isFemale.get(),
                            i = (0, O.c4)();
                        (0, n.useEffect)(() => {
                            i.recalculateContent();
                        }, [t, a, i]);
                        const l = t.length + a.length >= 2;
                        return r().createElement(
                            'div',
                            { className: h()(Pe, l && Me) },
                            r().createElement(
                                W.z,
                                { className: Oe },
                                r().createElement(
                                    'div',
                                    { id: 'matrix_skills_list' },
                                    c.UI(t, (t, a) =>
                                        r().createElement(Re, {
                                            key: `relevantGroup_${a}`,
                                            group: t,
                                            qualificationNumber: a + 1,
                                            isIrrelevant: !1,
                                            isFemale: s,
                                            className: He,
                                            additionalSkills: 0 === a ? e.commonSkills.get() : void 0,
                                            isLockedByZeroPerks: e.skillsState.get() === H.ZeroSkills && a > 0,
                                        }),
                                    ),
                                    c.UI(a, (e, a) =>
                                        r().createElement(Re, {
                                            key: `irrelevantGroup_${a}`,
                                            group: e,
                                            qualificationNumber: t.length + a + 1,
                                            isIrrelevant: !0,
                                            isFemale: s,
                                            className: He,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Ve = a(2056);
                const ze = {
                        base: 'SkillsStateInfo_base_de',
                        state: 'SkillsStateInfo_state_56',
                        state__allSkills: 'SkillsStateInfo_state__allSkills_a6',
                        state__reduced: 'SkillsStateInfo_state__reduced_ec',
                        state__training: 'SkillsStateInfo_state__training_60',
                        state__disabled: 'SkillsStateInfo_state__disabled_ed',
                        state__locked: 'SkillsStateInfo_state__locked_19',
                        gradient: 'SkillsStateInfo_gradient_44',
                        countContainer: 'SkillsStateInfo_countContainer_da',
                        count: 'SkillsStateInfo_count_87',
                        skillIcon: 'SkillsStateInfo_skillIcon_e2',
                        spinGlow: 'SkillsStateInfo_spinGlow_23',
                        rotation: 'SkillsStateInfo_rotation_58',
                    },
                    $e = (0, i.Pi)(({ className: e }) => {
                        const t = E().model,
                            a = t.selectAvailableSkillsCount.get(),
                            n = t.skillsState.get(),
                            s = t.computes.isUntrained();
                        return r().createElement(
                            'div',
                            { className: h()(ze.base, e) },
                            s && r().createElement('div', { className: ze.gradient }),
                            r().createElement(
                                'div',
                                { className: h()(ze.state, ze[`state__${n}`]) },
                                R.strings.crew.matrix.skills.$dyn(n),
                            ),
                            a > 0 &&
                                r().createElement(
                                    'div',
                                    { className: ze.countContainer },
                                    r().createElement('div', { className: ze.count }, a),
                                    r().createElement(
                                        Ve.u,
                                        {
                                            targetId: Xe,
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ze.skillIcon },
                                            !s && r().createElement('div', { className: ze.spinGlow }),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    Ge = 'SkillsMatrix_base_2a',
                    je = 'SkillsMatrix_base__red_fe',
                    Ze = 'SkillsMatrix_topContainer_09',
                    Ue = 'SkillsMatrix_skillsStateInfo_2e',
                    qe = (0, i.Pi)(() => {
                        const e = E().model.computes.isUntrained();
                        return r().createElement(
                            'div',
                            { className: h()(Ge, e && je) },
                            r().createElement(
                                'div',
                                { className: Ze },
                                r().createElement($e, { className: Ue }),
                                r().createElement(M, null),
                            ),
                            r().createElement(We, null),
                        );
                    }),
                    Ye = (0, i.Pi)(({ setTTCVisibility: e }) => {
                        const t = (0, s.GS)().mediaSize,
                            a = E(),
                            i = a.model,
                            l = a.controls,
                            o = i.computes.isTTCVisible();
                        return (
                            (0, n.useEffect)(() => {
                                l.setTTCVisible(t >= s.cJ.Small), e && e(o);
                            }, [l, o, t, e]),
                            r().createElement(p.d, { isLoggingEnabled: !0 }, r().createElement(qe, null))
                        );
                    }),
                    Xe = R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                    Ke = r().memo(({ setTTCVisibility: e }) =>
                        r().createElement(
                            b,
                            { options: { rootId: Xe } },
                            r().createElement(Ye, { setTTCVisibility: e }),
                        ),
                    );
            },
            894: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { SERVICE_RECORD_RES_ID: () => ee, default: () => te });
                var n = a(6179),
                    r = a.n(n),
                    s = a(3403),
                    i = a(4022),
                    l = a(3215),
                    o = a(4598),
                    u = a(9480),
                    c = a(1612),
                    d = a(9174),
                    m = a(3946);
                const _ = (0, l.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'rankName',
                                        'rankIcon',
                                        'battlesCount',
                                        'averageXP',
                                        'isTankmanInVehicle',
                                    ]),
                                    { achievementsList: e.array('achievementsList'), isTTCVisible: d.LO.box(!1) },
                                ),
                                a = (0, m.Om)(() => u.UI(t.achievementsList.get(), o.yR)),
                                n = (0, m.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get(), !0),
                                r = (0, m.Om)(() => t.achievementsList.get().length > 0);
                            return Object.assign({}, t, {
                                computes: { getAchievementsList: a, isTTCVisible: n, hasAchievements: r },
                            });
                        },
                        ({ model: e }) => Object.assign({}, (0, c.h)({ setTTCVisible: (t) => e.isTTCVisible.set(t) })),
                    ),
                    g = _[0],
                    b = _[1];
                var E = a(6483),
                    p = a.n(E),
                    v = a(5415),
                    h = a(3961);
                const f = 'AchievementsList_base_90',
                    C = 'AchievementsList_title_f4',
                    k = 'AchievementsList_container_a7',
                    A = 'AchievementsList_item_10',
                    w = 'AchievementsList_bar_4a';
                var y = a(7078),
                    B = a(2603);
                const F = {
                    base: 'AchievementItem_base_45',
                    base__small: 'AchievementItem_base__small_b4',
                    icon: 'AchievementItem_icon_91',
                    amountBG: 'AchievementItem_amountBG_46',
                    amount: 'AchievementItem_amount_65',
                };
                let D;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(D || (D = {}));
                const S = ({ name: e, amount: t, block: a, isRare: n, size: s, className: i }) => {
                    const l =
                        s === D.Small ? R.images.gui.maps.icons.achievement : R.images.gui.maps.icons.achievement.big;
                    return r().createElement(
                        y.t,
                        {
                            args: { tooltipId: B.Th, name: e, block: a, isRare: n },
                            targetId: R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                        },
                        r().createElement(
                            'div',
                            { className: p()(F.base, F[`base__${s}`], i) },
                            r().createElement('div', {
                                className: F.icon,
                                style: { backgroundImage: `url(${l.$dyn(e)})` },
                            }),
                            t > 1 &&
                                r().createElement(
                                    'div',
                                    { className: F.amountBG },
                                    r().createElement('div', { className: F.amount }, t),
                                ),
                        ),
                    );
                };
                function I() {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                }
                const N = (0, s.Pi)(({ className: e }) => {
                    const t = b().model,
                        a = (0, v.GS)().mediaSize,
                        n = a === v.cJ.Small || a === v.cJ.ExtraSmall ? D.Small : D.Big;
                    return r().createElement(
                        'div',
                        { className: p()(f, e) },
                        r().createElement(
                            h.z,
                            { classNames: { bar: w } },
                            r().createElement(
                                'div',
                                { className: C },
                                R.strings.crew.serviceRecord.achievementsList.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: k },
                                (0, u.UI)(t.computes.getAchievementsList(), (e, t) =>
                                    r().createElement(S, I({}, e, { size: n, key: `achievement_${t}`, className: A })),
                                ),
                            ),
                        ),
                    );
                });
                var T = a(6373);
                const L = 'BattlesInfo_base_25',
                    x = 'BattlesInfo_container_da',
                    P = 'Item_base_e0',
                    M = 'Item_icon_81',
                    O = 'Item_value_28',
                    H = 'Item_name_35',
                    W = ({ name: e, icon: t, value: a }) =>
                        r().createElement(
                            'div',
                            { className: P },
                            r().createElement('div', { className: M, style: { backgroundImage: `url(${t})` } }),
                            r().createElement('div', { className: O }, a),
                            r().createElement('div', { className: H }, e),
                        );
                var V = a(3649);
                const z = 'RankItem_base_19',
                    $ = 'RankItem_icon_10',
                    G = 'RankItem_name_9d',
                    j = ({ name: e, icon: t }) =>
                        r().createElement(
                            T.i,
                            {
                                header: R.strings.crew.serviceRecord.tooltip.rank.header(),
                                body: R.strings.crew.serviceRecord.tooltip.rank.body(),
                            },
                            r().createElement(
                                'div',
                                { className: z },
                                r().createElement('div', {
                                    className: $,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.tankmen.ranks.big.$dyn((0, V.BN)(t))})`,
                                    },
                                }),
                                r().createElement('div', { className: G }, e),
                            ),
                        ),
                    Z = (0, s.Pi)(() => {
                        const e = b().model;
                        return r().createElement(
                            'div',
                            { className: L },
                            r().createElement(
                                'div',
                                { className: x },
                                r().createElement(j, { name: e.rankName.get(), icon: e.rankIcon.get() }),
                                r().createElement(
                                    T.i,
                                    {
                                        header: R.strings.tooltips.battlesDetails.header(),
                                        body: R.strings.tooltips.battlesDetails.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(W, {
                                            name: R.strings.crew.serviceRecord.battlesCounter(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.battlesCountIcon(),
                                            value: e.battlesCount.get(),
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    T.i,
                                    {
                                        header: R.strings.crew.serviceRecord.tooltip.averageXP.header(),
                                        body: R.strings.crew.serviceRecord.tooltip.averageXP.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(W, {
                                            name: R.strings.crew.serviceRecord.averageXP(),
                                            icon: R.images.gui.maps.icons.crew.serviceRecord.averageXPIcon(),
                                            value: e.averageXP.get(),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    U = 'NoAchievements_base_a5',
                    q = 'NoAchievements_icon_c7',
                    Y = 'NoAchievements_text_34',
                    X = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: p()(U, e) },
                            r().createElement('div', { className: q }),
                            r().createElement('div', { className: Y }, R.strings.crew.serviceRecord.noAchievements()),
                        ),
                    K = 'ServiceRecordApp_achievementsList_fd',
                    Q = 'ServiceRecordApp_noAchievements_07',
                    J = (0, s.Pi)(({ setTTCVisibility: e }) => {
                        e(!1);
                        const t = b().model.computes.hasAchievements();
                        return r().createElement(
                            i.d,
                            null,
                            r().createElement(Z, null),
                            t ? r().createElement(N, { className: K }) : r().createElement(X, { className: Q }),
                        );
                    }),
                    ee = R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    te = r().memo(({ setTTCVisibility: e }) =>
                        r().createElement(
                            g,
                            { options: { rootId: ee } },
                            r().createElement(J, { setTTCVisibility: e }),
                        ),
                    );
            },
            3961: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => b });
                var n = a(6483),
                    r = a.n(n),
                    s = a(794),
                    i = a(7701),
                    l = a(6179),
                    o = a.n(l);
                const u = 'ScrollWithLips_base_81',
                    c = 'ScrollWithLips_fadeTop_3d',
                    d = 'ScrollWithLips_fadeBottom_44',
                    m = 'ScrollWithLips_bar_52',
                    _ = 'ScrollWithLips_content_fb';
                let g;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(g || (g = {}));
                const b = ({ children: e, className: t, classNames: a }) => {
                    const n = (0, l.useState)(g.None),
                        b = n[0],
                        E = n[1],
                        p = b === g.Both,
                        v = (0, i.c4)();
                    return (
                        (0, l.useEffect)(() => {
                            const e = () => {
                                const e = v.getBounds()[1],
                                    t = v.animationScroll.scrollPosition.get();
                                0 === e
                                    ? E(g.None)
                                    : t > 1 && t < e - 21
                                      ? E(g.Both)
                                      : t <= 1
                                        ? E(g.Bottom)
                                        : t >= e - 21 && E(g.Top);
                            };
                            return (
                                v.events.on('change', e),
                                v.events.on('resizeHandled', e),
                                v.events.on('recalculateContent', e),
                                () => {
                                    v.events.off('change', e),
                                        v.events.off('resizeHandled', e),
                                        v.events.off('recalculateContent', e);
                                }
                            );
                        }, [v]),
                        o().createElement(
                            'div',
                            { className: r()(u, t) },
                            o().createElement(
                                s.X.Vertical.Default,
                                {
                                    api: v,
                                    barClassNames: { base: r()(m, null == a ? void 0 : a.bar) },
                                    scrollClassNames: { content: _ },
                                },
                                e,
                            ),
                            (b === g.Top || p) && o().createElement('div', { className: c }),
                            (b === g.Bottom || p) && o().createElement('div', { className: d }),
                        )
                    );
                };
            },
            4022: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => c });
                var n = a(6179),
                    r = a.n(n),
                    s = a(299);
                const i = 'TankmanInfoWrapper_base_5a',
                    l = 'TankmanInfoWrapper_content_b4',
                    o = 'TankmanInfoWrapper_tankmanInfo_80',
                    u = 'TankmanInfoWrapper_children_66',
                    c = ({ children: e, isLoggingEnabled: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: i },
                            r().createElement(
                                'div',
                                { className: l },
                                r().createElement(s.JW, { className: o, isLoggingEnabled: t }),
                                r().createElement('div', { className: u }, e),
                            ),
                        );
            },
            7321: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => Wa });
                var n = a(6179),
                    r = a.n(n),
                    s = a(3403),
                    i = a(3215),
                    l = a(4598),
                    o = a(9480),
                    u = a(3946),
                    c = a(4828);
                const d = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    m = (0, i.q)()(
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
                                a = (0, u.Om)(
                                    () =>
                                        o.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: o.UI(e.roles, l.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: o.UI(e.tankman.roles, l.yR),
                                                    skills: o.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: l.jv },
                                ),
                                n = (0, u.Om)(() => Boolean(o.sE(a(), (e) => -1 === e.tankman.tankmanID))),
                                r = (0, u.Om)(() => 1 === t.slots.get().length),
                                s = (0, u.Om)((e) => t.selectedSlotIdx.get() === e),
                                i = (0, u.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                m = (0, u.Om)((e) => {
                                    var t;
                                    return null == (t = o.U2(a(), e)) ? void 0 : t.tankman;
                                }),
                                _ = (0, u.Om)((e) => {
                                    var t;
                                    const n = null == (t = o.U2(a(), e)) ? void 0 : t.tankman;
                                    return n ? n.skills.length + n.newSkillsAmount + n.possibleSkillsAmount : 0;
                                }),
                                g = (0, u.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (a = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: d.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: a === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: d.includes(a),
                                            isPreviousLayoutQuickTraining:
                                                a === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                a === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: a === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, a;
                                }),
                                b = (0, u.Om)(() => {
                                    const e = g(),
                                        t = e.isCurrentLayoutHangar,
                                        a = e.isCurrentLayoutQuickTraining;
                                    return !r() && !t && !a;
                                }),
                                E = (0, u.Om)(() => !r() && t.buttonsBar.get().isVisible),
                                p = (0, u.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: a,
                                    isSlotSelected: s,
                                    isAnySlotSelected: i,
                                    getSlotTankman: m,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: b,
                                    isButtonBarVisible: E,
                                    getLayoutInfo: g,
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
                    _ = m[0],
                    g = m[1];
                var b = a(6483),
                    E = a.n(b),
                    p = a(6373),
                    v = a(2056);
                let h;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(h || (h = {}));
                const f = 'ButtonsBar_base_9c',
                    C = 'ButtonsBar_button_d1',
                    k = 'ButtonsBar_button__crewOperaions_70',
                    A = 'ButtonsBar_button__crewBooks_b4',
                    w = 'ButtonsBar_button__toggle_64';
                var y = a(3457),
                    B = a(9987),
                    F = a(3649);
                const D = 'CrewBookButton_base_da',
                    S = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    N = 'CrewBookButton_discount_6b',
                    T = 'CrewBookButton_counter_5d',
                    L = (0, s.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const a = g(),
                            n = a.model,
                            s = a.controls,
                            i = n.crewBooks.get(),
                            l = s.onCrewBooksClick,
                            o = i.isDisabled || t;
                        return r().createElement(
                            p.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, F.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            r().createElement(
                                'div',
                                { id: 'crew_book_button', className: E()(D, e) },
                                r().createElement(
                                    y.u5,
                                    { type: y.L$.primary, mixClass: S, disabled: o, onClick: l },
                                    r().createElement('div', { className: I }),
                                ),
                                !o &&
                                    '0' !== i.newAmount &&
                                    r().createElement(
                                        'div',
                                        { className: T },
                                        r().createElement(B.A, { value: i.newAmount }),
                                    ),
                                !o && i.hasDiscount && r().createElement('div', { className: N }),
                            ),
                        );
                    });
                var x = a(3616);
                const P = ['children'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const O = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, P);
                    return r().createElement(
                        x.Z,
                        M(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            a,
                        ),
                        t,
                    );
                };
                var H = a(4489);
                let W;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(W || (W = {}));
                var V = a(1943);
                const z = 'CrewOperationsButton_base_e3',
                    $ = 'CrewOperationsButton_button_8e',
                    G = 'CrewOperationsButton_icon_0c',
                    j = 'CrewOperationsButton_autoReturnIcon_f0',
                    Z = (0, s.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const a = g().model,
                            n = ((e) => {
                                const t = (0, V.Jp)(c.D9);
                                return (a) => t({ action: c.eX.Click, parentScreen: e, item: a });
                            })(a.computes.getUiLoggingParentScreen()),
                            s = a.crewOperations.get();
                        return r().createElement(
                            'div',
                            { id: 'crew_operations_button', className: E()(z, e) },
                            r().createElement(
                                O,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => n(c.x3.CrewOperationsButton),
                                },
                                r().createElement(
                                    p.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            y.u5,
                                            { type: y.L$.primary, mixClass: $, disabled: t },
                                            r().createElement('div', { className: G }),
                                        ),
                                        s.isAutoReturnOn && r().createElement('div', { className: j }),
                                    ),
                                ),
                            ),
                        );
                    });
                var U = a(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    X = 'CrewToggleButton_iconContainer_f9',
                    K = 'CrewToggleButton_icon_a7';
                let Q;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(Q || (Q = {}));
                const J = (0, n.memo)(({ type: e, state: t, isDisabled: a, onClick: s, classMix: i }) => {
                        const l = (0, n.useMemo)(() => {
                            const a = t === h.Disabled ? h.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${a})`,
                            };
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: E()(q, i) },
                            r().createElement(
                                U.C,
                                {
                                    type: y.L$.primary,
                                    isActive: t === h.On,
                                    disabled: a || t === h.Disabled,
                                    className: Y,
                                    onClick: s,
                                },
                                r().createElement(
                                    'div',
                                    { className: X },
                                    r().createElement('div', { className: K, style: l }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [h.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [h.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [h.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [h.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    te = (0, s.Pi)(({ isWidgetDisabled: e }) => {
                        const t = g(),
                            a = t.model,
                            n = t.controls,
                            s = a.acceleratedTraining.get(),
                            i = a.wotPlus.get(),
                            l = n.onAcceleratedTrainingClick,
                            o = n.onWotPlusClick,
                            u = ee[s.state];
                        return r().createElement(
                            'div',
                            { className: f },
                            r().createElement(Z, { classMix: E()(C, k), isWidgetDisabled: e }),
                            r().createElement(L, { classMix: E()(C, A), isWidgetDisabled: e }),
                            s.state !== h.Hidden &&
                                r().createElement(
                                    p.i,
                                    { header: u.header(), body: u.body() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: Q.AcceleratedTraining,
                                            state: s.state,
                                            isDisabled: e || s.isDisabled,
                                            onClick: l,
                                            classMix: E()(C, w),
                                        }),
                                    ),
                                ),
                            i.state !== h.Hidden &&
                                r().createElement(
                                    v.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: Q.WotPlus,
                                            state: i.state,
                                            isDisabled: e || i.isDisabled,
                                            onClick: o,
                                            classMix: E()(C, w),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ae = 'CrewWidgetApp_base_cc',
                    ne = 'CrewWidgetApp_buttonsBar_e5',
                    re = 'CrewWidgetApp_slotsList_ee';
                var se = a(7727),
                    ie = a(7030),
                    le = a(8018),
                    oe = a(7160);
                const ue = 'BaseSlot_base_97',
                    ce = 'BaseSlot_base__hovered_61',
                    de = 'BaseSlot_base__inactive_7e',
                    me = 'BaseSlot_hoverGlow_de',
                    _e = 'BaseSlot_hoverGlow__visible_f4',
                    ge = 'BaseSlot_selectedGlow_25',
                    be = 'BaseSlot_selectedGlow__visible_2f',
                    Ee = 'BaseSlot_hover_e9',
                    pe = 'BaseSlot_hover__visible_1f',
                    ve = 'BaseSlot_disabled_67',
                    he = ({
                        onClick: e,
                        children: t,
                        isSelected: a = !1,
                        isDisabled: s,
                        isEnabledForMouse: i,
                        isEmpty: l = !1,
                        layoutInfo: o,
                    }) => {
                        const u = (0, n.useState)(!1),
                            c = u[0],
                            d = u[1],
                            m = c && (!a || (!l && o.isCurrentLayoutMemberChange)),
                            _ = m && !l && !o.isCurrentLayoutHangar;
                        return r().createElement(
                            'div',
                            {
                                className: E()(ue, (c || a) && !o.isCurrentLayoutHangar && ce, (a || !i) && de),
                                onClick: e,
                                onMouseEnter: () => {
                                    i && !a && (se.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !o.isCurrentLayoutMemberChange && r().createElement('div', { className: E()(ge, a && be) }),
                            r().createElement('div', { className: E()(me, _ && _e) }),
                            r().createElement('div', { className: E()(Ee, m && pe) }),
                            s && r().createElement('div', { className: ve }),
                            t,
                        );
                    },
                    fe = ({
                        startState: e,
                        endState: t,
                        layoutInfo: a,
                        isPaused: s,
                        children: i,
                        className: l,
                        isTankmanMode: o,
                    }) => {
                        const u = (0, ie.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: oe.qb }, pause: s }),
                                [s],
                            )[0],
                            c = (0, n.useMemo)(
                                () =>
                                    a.isCurrentLayoutHangar || a.isCurrentLayoutQuickTraining || o
                                        ? e
                                        : (!a.isPreviousLayoutHangar && !a.isPreviousLayoutBarrack) || s
                                          ? t
                                          : u,
                                [a, s, u, e, t, o],
                            );
                        return r().createElement(ie.animated.div, { className: l, style: c }, i);
                    },
                    Ce = 'DogSlot_base_8f',
                    ke = 'DogSlot_icon_ba',
                    Ae = 'DogSlot_container_63',
                    we = 'DogSlot_roleAndName_c9',
                    ye = 'DogSlot_role_5c',
                    Be = 'DogSlot_name_9c',
                    Fe = 'DogSlot_btnDetails_b7',
                    De = { transform: 'translateX(0rem)' },
                    Se = (0, s.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const a = g(),
                            s = a.model,
                            i = a.controls,
                            l = s.nation.get(),
                            o = i.onDogMoreInfoClick,
                            u = (0, n.useCallback)(() => {
                                !e && (0, se.G)(le.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && o();
                                },
                                [o, e],
                            ),
                            d = (0, ie.useSpring)(
                                () => ({
                                    from: De,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: oe.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(l);
                        return r().createElement(
                            p.i,
                            { header: m.header(), body: m.body() },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    he,
                                    { onClick: u, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    r().createElement(
                                        fe,
                                        {
                                            startState: De,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: Ce,
                                            isTankmanMode: !1,
                                        },
                                        r().createElement(ie.animated.div, { className: ke, style: d }),
                                        r().createElement(
                                            'div',
                                            { className: Ae },
                                            r().createElement(
                                                'div',
                                                { className: we },
                                                r().createElement('div', { className: ye }),
                                                r().createElement(
                                                    'div',
                                                    { className: Be },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(l).name(),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Fe },
                                                r().createElement(
                                                    y.u5,
                                                    { onClick: c },
                                                    R.strings.crew_widget.btnDetails(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Ie = a(9916);
                const Ne = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: l,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    se.$.playYes();
                            }, [s, t, a, r]),
                            u = (0, n.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    l && l(e), ((e) => e.button === W.RIGHT)(e) && o();
                                },
                                [l, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === i && u();
                            }, [i, u]),
                            i ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Te = ['children'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const xe = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Te);
                        return r().createElement(
                            Ne,
                            Le({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Re = 'ChangeCrewButton_base_0f',
                    Pe = 'ChangeCrewButton_base__inactive_77',
                    Me = 'ChangeCrewButton_normalState_07',
                    Oe = 'ChangeCrewButton_normalState__hide_db',
                    He = 'ChangeCrewButton_hoverState_68',
                    We = 'ChangeCrewButton_hoverState__show_89',
                    Ve = (0, s.Pi)(({ isSelected: e, isLocked: t, mainRole: a, isFemale: s }) => {
                        const i = g().model,
                            l = (0, n.useState)(!1),
                            o = l[0],
                            u = l[1],
                            d = (0, V.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: i.computes.getUiLoggingParentScreen(),
                            }),
                            m = (0, n.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, F.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, le.Gc)(a, s, le.wP.Objective),
                                              }),
                                          ],
                                [t, s, a],
                            ),
                            _ = m[0],
                            b = m[1];
                        return r().createElement(
                            p.i,
                            {
                                header: _,
                                body: b,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: E()(Re, (t || e) && Pe),
                                    onMouseEnter: () => {
                                        d.onShow(), t || e || (se.$.playHighlight(), u(!0));
                                    },
                                    onMouseLeave: () => {
                                        d.onHide(), u(!1);
                                    },
                                },
                                r().createElement('div', { className: E()(Me, o && Oe) }),
                                r().createElement('div', { className: E()(He, (e || o) && We) }),
                            ),
                        );
                    }),
                    ze = 'CrewSlot_base_ac',
                    $e = 'CrewSlot_changeCrew_02',
                    Ge = 'CrewSlot_content_5b',
                    je = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ze = 'CrewSlot_warningHighlight_ff',
                    Ue = 'CrewSlot_selectHighlight_50',
                    qe = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Ye = a(7077),
                    Xe = a(7078),
                    Ke = a(2603),
                    Qe = a(771);
                const Je = 'SpecializationAndName_base_ef',
                    et = 'SpecializationAndName_roleWrapper_87',
                    tt = 'SpecializationAndName_role_55',
                    at = 'SpecializationAndName_role__withGap_35',
                    nt = 'SpecializationAndName_name_aa',
                    rt = ({ roles: e, tankmanID: t = Qe.y$, slotIdx: a, name: n }) =>
                        r().createElement(
                            'div',
                            { className: Je },
                            r().createElement(
                                Xe.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ke.rs, slotIdx: a, tankmanID: t },
                                },
                                r().createElement(
                                    'div',
                                    { className: et },
                                    o.UI(e, (e, t) =>
                                        r().createElement('div', {
                                            key: `role__${e}`,
                                            className: E()(tt, t > 0 && at),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: nt }, n),
                        ),
                    st = 'EmptySlotContent_base_77',
                    it = 'EmptySlotContent_tankmanIcon_07',
                    lt = 'EmptySlotContent_icon_a8',
                    ot = 'EmptySlotContent_specialization_1f',
                    ut = 'EmptySlotContent_specialization__disabled_3d',
                    ct = 'EmptySlotContent_vehicle_55',
                    dt = { transform: 'translateX(0rem)', opacity: 1 },
                    mt = { transform: 'translateX(-70rem)', opacity: 0 },
                    _t = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: a,
                            vehicleType: s,
                            isDisabled: i,
                            isSelected: l,
                            slotIdx: u,
                            blinkStyle: c,
                            qtTankmanIconStyle: d,
                        }) => {
                            const m = (0, ie.useSpring)(
                                    () => ({
                                        from: dt,
                                        to: mt,
                                        config: { duration: 200, easing: oe.ei },
                                        immediate: !0,
                                        pause: l,
                                    }),
                                    [l],
                                ),
                                _ = m[0],
                                g = m[1],
                                b = (0, n.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || g.start({ reset: !0, reverse: !0 });
                                }, [g, t]),
                                p = o.U2(e, 0) || '',
                                v = R.strings.crew_widget.vehicleWithName.$dyn((0, F.BN)(s)),
                                h = (0, F.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(p),
                                });
                            return r().createElement(
                                'div',
                                { className: st, onMouseEnter: b, onMouseLeave: b },
                                r().createElement(
                                    'div',
                                    { className: it },
                                    r().createElement(
                                        ie.animated.div,
                                        { style: d },
                                        r().createElement(Ye.G, {
                                            name: 'empty',
                                            size: Ye.U.c100x60Barracks,
                                            classMix: lt,
                                        }),
                                        r().createElement(
                                            ie.animated.div,
                                            { style: i ? void 0 : c },
                                            r().createElement(Ye.G, {
                                                name: 'emptyRed',
                                                size: Ye.U.c100x60Barracks,
                                                classMix: lt,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: E()(ot, i && ut) },
                                    r().createElement(rt, { slotIdx: u, roles: e, name: h }),
                                ),
                                r().createElement(
                                    ie.animated.div,
                                    { className: ct, style: l ? void 0 : _ },
                                    (0, F.uF)(v, { name: a }),
                                ),
                            );
                        },
                    );
                var gt = a(5415),
                    bt = a(8271);
                const Et = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount,
                    pt = (e, t, a) => {
                        const n = ((e, t, a) => {
                                if (e <= t) return [1, e, 24];
                                const n = Math.floor((a - 2) / 18);
                                return [2, e <= 2 * n ? n : Math.ceil(e / 2), 16];
                            })(e, t, a),
                            r = n[0],
                            s = n[1],
                            i = n[2];
                        let l = 2,
                            o = i;
                        for (; s * o + l + (s - 1) > a; ) l > 0 ? (l -= 1) : (o -= 1);
                        return o !== i && (l = o - i), [r, s, l, i, o];
                    };
                var vt = a(4385),
                    ht = a(5563);
                const ft = 'AcceleratedTrainingIcon_base_4f',
                    Ct = 'AcceleratedTrainingIcon_icon_45',
                    kt = (0, n.memo)(({ classMix: e }) =>
                        r().createElement(
                            p.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            r().createElement(
                                'div',
                                { className: E()(ft, e) },
                                r().createElement('div', { className: Ct }),
                            ),
                        ),
                    ),
                    At = {
                        base: 'LastSkillInfo_base_38',
                        levelsContainer: 'LastSkillInfo_levelsContainer_4f',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    wt = 0.01,
                    yt = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            isLevelVisible: a,
                            isAcceleratedTrainingVisible: s,
                            skillSize: i,
                            blinkStyle: l,
                        }) => {
                            const o = (0, n.useRef)(e),
                                u = (0, ie.useSpring)(() => ({ from: { scale: 1 } })),
                                c = u[0],
                                d = u[1];
                            (0, n.useEffect)(() => {
                                t < 0 &&
                                    o.current !== e &&
                                    (d.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: oe.Fs },
                                    }),
                                    (o.current = e));
                            }, [e, t, d]);
                            const m = (0, n.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < wt
                                              ? [R.strings.crew_widget.plusMinValue(), wt]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                _ = m[0],
                                g = m[1];
                            return r().createElement(
                                'div',
                                { className: E()(At.base, At[`base__${i}`]) },
                                a &&
                                    r().createElement(
                                        'div',
                                        { className: At.levelsContainer },
                                        e >= 0 &&
                                            e < 100 &&
                                            r().createElement(
                                                ie.animated.div,
                                                { style: c },
                                                r().createElement(
                                                    'div',
                                                    { className: At.realLevel },
                                                    (0, F.uF)(R.strings.common.percentValue(), {
                                                        value: e > 0 && e < wt ? wt : e,
                                                    }),
                                                ),
                                            ),
                                        t >= 0 &&
                                            t < 100 &&
                                            r().createElement(
                                                ie.animated.div,
                                                { className: At.possibleLevel, style: l },
                                                (0, F.uF)(_, { value: g }),
                                            ),
                                    ),
                                s && r().createElement(kt, { classMix: At.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var Bt = a(8485);
                const Ft = 33,
                    Dt = 0,
                    St = !0,
                    It = 'play';
                const Nt = [
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
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const Lt = (0, n.memo)(function (e) {
                        let t = e.width,
                            a = e.height,
                            s = e.getImageSource,
                            i = e.frameCount,
                            l = e.onAnimate,
                            o = e.frameTime,
                            u = void 0 === o ? Ft : o,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? Dt : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? i - 1 : m,
                            g = e.loop,
                            b = void 0 === g ? St : g,
                            E = e.state,
                            p = void 0 === E ? It : E,
                            v = e.onAnimationDone,
                            h = e.onAnimationComplete,
                            f = e.poster,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Nt);
                        const k = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = k.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    a = (a) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(a.img, -a.x, -a.y);
                                    };
                                switch (p) {
                                    case 'play':
                                        return (function () {
                                            const e = Pt(d, _, s),
                                                t = xt(d, _),
                                                n = window.setInterval(() => {
                                                    const r = t(),
                                                        s = e.get(r);
                                                    s
                                                        ? (null == l || l(r, s),
                                                          a(s),
                                                          r === _ &&
                                                              (null == h || h(),
                                                              b || (null == v || v(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, u);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && f ? { path: f, x: 0, y: 0 } : s(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => a(Rt(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [u, s, d, _, b, l, h, v, f, p]),
                            r().createElement('canvas', Tt({}, C, { width: t, height: a, ref: k }))
                        );
                    }),
                    xt = (e, t) => {
                        let a = e;
                        return () => {
                            const n = a;
                            return (a += 1), a > t && (a = e), n;
                        };
                    },
                    Rt = (e, t) => Object.assign({}, e, { img: t }),
                    Pt = (e, t, a) => {
                        const n = new Map(),
                            r = {};
                        for (let s = e; s <= t; s++) {
                            const e = a(s),
                                t = r[e.path];
                            if (t) n.set(s, Rt(e, t));
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
                                    n.set(s, Rt(e, t));
                            }
                        }
                        return n;
                    };
                function Mt(e) {
                    return (t) => `${e}${t}`;
                }
                const Ot = [
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
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                let Wt;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Wt || (Wt = {}));
                const Vt = (e, t, a) => {
                        const n = new Image();
                        (n.src = a(t)), e.push(n);
                    },
                    zt =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                a = e.height,
                                s = e.getSrcByFrame,
                                i = e.frameCount,
                                l = e.onAnimate,
                                o = void 0 === l ? () => {} : l,
                                u = e.frameTime,
                                c = void 0 === u ? 33 : u,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                g = void 0 === _ || _,
                                b = e.state,
                                E = void 0 === b ? Wt.Play : b,
                                p = e.onAnimationComplete,
                                v = void 0 === p ? () => {} : p,
                                h = e.revers,
                                f = void 0 !== h && h,
                                C = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, Ot);
                            const k = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = k.current;
                                    if (!e) return;
                                    const n = i - 1,
                                        r = e.getContext('2d'),
                                        l = (n) => {
                                            r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, t, a);
                                        };
                                    if ('stop' === E) {
                                        const e = s(0),
                                            t = new Image();
                                        t.src = e;
                                        const a = () => l(t);
                                        return t.addEventListener('load', a), () => t.removeEventListener('load', a);
                                    }
                                    const u = ((e, t, a) => {
                                            const n = [];
                                            if (a) for (let a = e; a >= 0; a--) Vt(n, a, t);
                                            else for (let a = 0; a < e; a++) Vt(n, a, t);
                                            return n;
                                        })(i, s, f),
                                        d = ((e, t = 0) => {
                                            let a = t;
                                            return () => {
                                                const t = a;
                                                return (a += 1), a > e && (a = 0), t;
                                            };
                                        })(n, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = u[e];
                                            l(u[e]), o(e, t), e === n && (v(), g || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [i, c, s, a, m, g, o, v, E, t, f]),
                                r().createElement('canvas', Ht({}, C, { width: t, height: a, ref: k }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    $t = 'AnimatedNewSkill_base__big_31';
                function Gt(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return jt(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return jt(e, t);
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
                function jt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                class Zt {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return Zt._instance || (Zt._instance = new Zt()), Zt._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = Gt(this._observers.values()); !(e = t()).done; ) {
                                        (0, e.value)();
                                    }
                                }, 5e3));
                    }
                    unsubscribe(e) {
                        this._observers.delete(e),
                            0 === this._observers.size &&
                                null !== this._intervalID &&
                                (clearInterval(this._intervalID), (this._intervalID = null));
                    }
                }
                Zt._instance = void 0;
                const Ut = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Mt('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    qt = {
                        width: 16,
                        height: 16,
                        frameCount: 32,
                        chunk: { count: 1, columns: 32, rows: 1 },
                        getChunkPath: Mt('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Yt = ({ size: e }) => {
                        const t = e === Bt.O.Small ? qt : Ut,
                            a = (function (e) {
                                const t = e.chunk,
                                    a = t.rows * t.columns;
                                return (n) => {
                                    const r = n % a,
                                        s = (r % t.columns) * e.width,
                                        i = Math.trunc(r / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / a)), x: s, y: i };
                                };
                            })(t),
                            s = (0, n.useState)(Wt.Stop),
                            i = s[0],
                            l = s[1],
                            o = (0, n.useCallback)(() => {
                                l(Wt.Play);
                            }, [l]),
                            u = (0, n.useCallback)(() => {
                                l(Wt.Stop);
                            }, [l]);
                        return (
                            (0, n.useEffect)(() => (Zt.instance.subscribe(o), () => Zt.instance.unsubscribe(o)), [o]),
                            r().createElement(Lt, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: a,
                                loop: !1,
                                state: i,
                                onAnimationDone: u,
                                className: E()(zt, e === Bt.O.Big && $t),
                            })
                        );
                    },
                    Xt = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                let Qt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Qt || (Qt = {}));
                const Jt = (0, n.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: a,
                            size: s,
                            marginValue: i,
                            clipWidth: l,
                            tankmanId: o,
                            skillsEfficiency: u,
                            blinkStyle: c,
                            showNewSkillAnimation: d,
                            isTooltipEnabled: m = !0,
                            hasInstruction: _,
                        }) => {
                            const g = (0, n.useRef)(''),
                                b = (0, ie.useSpring)(() => ({ from: { scale: 1 } })),
                                p = b[0],
                                h = b[1];
                            (0, n.useEffect)(() => {
                                a === bt.W.New &&
                                    g.current === bt.W.Possible &&
                                    h.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: oe.Fs },
                                    }),
                                    (g.current = a);
                            }, [a, h]);
                            const f = (0, n.useCallback)(() => {
                                switch (a) {
                                    case bt.W.Learned:
                                    case bt.W.Learning:
                                    case bt.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Ke.HZ, tankmanID: o, skillName: e },
                                        };
                                    case bt.W.New:
                                    case bt.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: o },
                                        };
                                }
                            }, [a, e, o]);
                            return r().createElement(
                                v.u,
                                Kt({}, f(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                r().createElement(
                                    ie.animated.div,
                                    { style: p },
                                    r().createElement(
                                        ie.animated.div,
                                        { style: a === bt.W.Possible ? c : void 0 },
                                        r().createElement(
                                            'div',
                                            {
                                                className: E()(Xt.base, Xt[`base__${s}`]),
                                                style: { marginLeft: `${i}rem`, clipPath: `inset(0 ${l}rem 0 0)` },
                                            },
                                            !d || (a !== bt.W.Possible && a !== bt.W.New)
                                                ? r().createElement(Bt.d, {
                                                      icon: t,
                                                      size: s,
                                                      type: a,
                                                      efficiency: u,
                                                      hasInstruction: _,
                                                  })
                                                : r().createElement(Yt, { size: s }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ea = 'SkillsList_base_11',
                    ta = 'SkillsList_efficiency_72',
                    aa = 'SkillsList_container_c7',
                    na = 'SkillsList_row_03';
                function ra() {
                    return (
                        (ra =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ra.apply(this, arguments)
                    );
                }
                const sa = ({
                        tankman: e,
                        isAcceleratedTrainingVisible: t = !1,
                        rowWidth: a = 220,
                        maxBigSkillsInRow: n = 16,
                        blinkStyle: s,
                        isSkillTooltipEnabled: i = !0,
                        showNewSkillAnimation: l = !1,
                    }) => {
                        const u = Et(e),
                            c = pt(u, n, a),
                            d = c[0],
                            m = c[1],
                            _ = c[2],
                            g = c[3],
                            b = c[4],
                            E = d > 1 ? Qt.Small : Qt.Big,
                            p = (0, le.Y4)(e.skillsEfficiency) !== le.H$.Normal,
                            v = -1 !== e.possibleSkillsEfficiency,
                            h = v ? e.possibleSkillsEfficiency : e.skillsEfficiency,
                            f = (0, le.Y4)(h) !== le.H$.Low;
                        return r().createElement(
                            'div',
                            { className: ea },
                            p &&
                                r().createElement(
                                    ie.animated.div,
                                    { style: v ? s : void 0 },
                                    r().createElement(ht.A, {
                                        efficiencyValue: h,
                                        tankmanID: e.tankmanID,
                                        className: ta,
                                    }),
                                ),
                            r().createElement(
                                'div',
                                { className: aa },
                                (0, vt.K)(d, (a) => {
                                    const n = Math.min(m, u - a * m),
                                        c = a === d - 1;
                                    return r().createElement(
                                        'div',
                                        { className: na, key: `row_${a}` },
                                        (0, vt.K)(n, (t) => {
                                            const u = m * a + t;
                                            return r().createElement(
                                                Jt,
                                                ra(
                                                    {},
                                                    ((e, t) => {
                                                        const a = t.skills.length;
                                                        let n = '',
                                                            r = '',
                                                            s = bt.W.Learned,
                                                            i = !1;
                                                        if (e < a) {
                                                            const a = o.U2(t.skills, e);
                                                            a &&
                                                                ((n = a.name),
                                                                (r = a.icon),
                                                                (s = a.type),
                                                                (i = a.hasInstruction));
                                                        } else
                                                            (s = e < a + t.newSkillsAmount ? bt.W.New : bt.W.Possible),
                                                                (r = Qe.jw);
                                                        return { name: n, icon: r, type: s, hasInstruction: i };
                                                    })(u, e),
                                                    {
                                                        size: E,
                                                        marginValue: 0 === t ? 0 : _,
                                                        key: `skill_${u}`,
                                                        clipWidth: t === n - 1 ? 0 : g - b,
                                                        tankmanId: e.tankmanID,
                                                        blinkStyle: s,
                                                        isTooltipEnabled: i,
                                                        showNewSkillAnimation: l,
                                                        skillsEfficiency: h,
                                                    },
                                                ),
                                            );
                                        }),
                                        c &&
                                            r().createElement(yt, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                isLevelVisible: f,
                                                isAcceleratedTrainingVisible: t,
                                                skillSize: E,
                                                blinkStyle: s,
                                            }),
                                    );
                                }),
                            ),
                        );
                    },
                    ia = 'TankmanInfo_base_69',
                    la = 'TankmanInfo_base__disabled_36',
                    oa = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    ua = 'TankmanInfo_specialization_77',
                    ca = 'TankmanInfo_specialization__withManySkills_9a',
                    da = 'TankmanInfo_skillsContainer_17',
                    ma = 'TankmanInfo_skillsContainer__withManySkills_00',
                    _a = (0, s.Pi)(({ slotIdx: e, tankman: t, layoutInfo: a, blinkStyle: n, isDisabled: s }) => {
                        const i = g().model,
                            l = (0, gt.GS)().mediaSize,
                            o = ((e, t, a, n) => {
                                const r = t.skillsEfficiency < Qe.yb,
                                    s = e.isCurrentLayoutQuickTraining || a;
                                let i,
                                    l = 220;
                                return (
                                    (s || a) && (l = n ? 146 : 190),
                                    r && (l -= 36),
                                    (i = r
                                        ? e.isCurrentLayoutHangar
                                            ? 12
                                            : e.isCurrentLayoutQuickTraining
                                              ? 10
                                              : 11
                                        : e.isCurrentLayoutQuickTraining || s
                                          ? 12
                                          : 16),
                                    [l, i, Et(t) > i]
                                );
                            })(a, t, i.computes.isChangeCrewButtonVisible(), l < gt.cJ.Small),
                            u = o[0],
                            c = o[1],
                            d = o[2],
                            m =
                                !a.isCurrentLayoutQuickTraining &&
                                -1 !== t.tankmanID &&
                                t.isLessMastered &&
                                t.skillsEfficiency < 100;
                        return r().createElement(
                            'div',
                            { className: E()(ia, s && la) },
                            r().createElement(
                                Xe.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ke.v$, tankmanID: t.tankmanID },
                                },
                                r().createElement('div', { className: oa }),
                            ),
                            r().createElement(
                                'div',
                                { className: E()(ua, d && ca) },
                                r().createElement(rt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: E()(da, d && ma) },
                                r().createElement(sa, {
                                    tankman: t,
                                    isAcceleratedTrainingVisible: m,
                                    rowWidth: u,
                                    maxBigSkillsInRow: c,
                                    blinkStyle: n,
                                    showNewSkillAnimation: a.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    ga = 'QuickTrainingTankmanSlotContent_base_8d',
                    ba = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Ea = 'QuickTrainingTankmanSlotContent_highlight_72',
                    pa = 'QuickTrainingTankmanSlotContent_icon_7c',
                    va = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    ha = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    fa = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Ca = { opacity: 0 },
                    ka = [{ opacity: 1 }, { opacity: 0 }],
                    Aa = (0, n.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: a,
                            qtTankmanIconStyle: s,
                            layoutInfo: i,
                            isDisabled: l,
                        }) => {
                            const o = (0, n.useRef)(t.lastSkillLevelFull),
                                u = (0, n.useRef)(t.skills.length),
                                c = (0, ie.useSpring)(() => ({ from: va })),
                                d = c[0],
                                m = c[1],
                                _ = (0, ie.useSpring)(() => ({ from: Ca })),
                                g = _[0],
                                b = _[1],
                                E = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? E.current ||
                                          (m.start({
                                              from: va,
                                              to: ha,
                                              reverse: false,
                                              config: { duration: 300, easing: oe.BH },
                                          }),
                                          (E.current = !0))
                                        : E.current
                                          ? (t.skills.length > u.current || t.lastSkillLevelFull > o.current
                                                ? (m.start({
                                                      from: ha,
                                                      to: fa,
                                                      delay: 200,
                                                      config: { duration: 500, easing: oe.BH },
                                                  }),
                                                  (o.current = t.lastSkillLevelFull),
                                                  (u.current = t.skills.length),
                                                  b.start({
                                                      from: Ca,
                                                      to: ka,
                                                      delay: 200,
                                                      config: { duration: 500, easing: oe.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (E.current = !1))
                                          : ((o.current = t.lastSkillLevelFull), (u.current = t.skills.length));
                                }, [m, b, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.length]),
                                r().createElement(
                                    'div',
                                    { className: ga },
                                    r().createElement(ie.animated.div, { className: Ea, style: g }),
                                    r().createElement(
                                        ie.animated.div,
                                        { style: s },
                                        r().createElement(Ye.G, {
                                            name: t.icon,
                                            size: Ye.U.c100x60Barracks,
                                            classMix: pa,
                                            isSkin: t.isInSkin,
                                        }),
                                    ),
                                    r().createElement(ie.animated.div, { className: ba, style: d }),
                                    r().createElement(_a, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: i,
                                        blinkStyle: a,
                                        isDisabled: l,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const a = e.tankman,
                                n = t.tankman;
                            return (
                                a.hasPossibleProgress === n.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const a = e.length;
                                    for (let s = 0; s < a; s++) {
                                        var n, r;
                                        if (
                                            (null == (n = o.U2(e, s)) ? void 0 : n.name) !==
                                            (null == (r = o.U2(t, s)) ? void 0 : r.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(a.skills, n.skills) &&
                                a.lastSkillLevelFull === n.lastSkillLevelFull &&
                                a.possibleSkillsAmount === n.possibleSkillsAmount &&
                                a.lastPossibleSkillLevel === n.lastPossibleSkillLevel &&
                                a.skillsEfficiency === n.skillsEfficiency &&
                                a.possibleSkillsEfficiency === n.possibleSkillsEfficiency
                            );
                        },
                    ),
                    wa = 'TankmanSlotContent_base_00',
                    ya = 'TankmanSlotContent_icon_ef',
                    Ba = (0, n.memo)(({ slotIdx: e, tankman: t, layoutInfo: a, isDisabled: n }) =>
                        r().createElement(
                            'div',
                            { className: wa },
                            r().createElement(Ye.G, {
                                name: t.icon,
                                size: Ye.U.c100x60Barracks,
                                classMix: ya,
                                isSkin: t.isInSkin,
                            }),
                            r().createElement(_a, { slotIdx: e, tankman: t, layoutInfo: a, isDisabled: n }),
                        ),
                    ),
                    Fa = (0, n.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: a,
                            layoutInfo: n,
                            vehicleName: s,
                            vehicleType: i,
                            isDisabled: l,
                            isSelected: o,
                            blinkSlotStyle: u,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === a.tankmanID
                                ? r().createElement(_t, {
                                      roles: t,
                                      layoutInfo: n,
                                      vehicleName: s,
                                      vehicleType: i,
                                      isDisabled: l,
                                      isSelected: o,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                  })
                                : n.isCurrentLayoutQuickTraining
                                  ? r().createElement(Aa, {
                                        slotIdx: e,
                                        tankman: a,
                                        blinkStyle: u,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: n,
                                        isDisabled: l,
                                    })
                                  : r().createElement(Ba, { slotIdx: e, tankman: a, layoutInfo: n, isDisabled: l }),
                    ),
                    Da = { transform: 'translateX(0rem)' },
                    Sa = { transform: 'translateX(41rem)' },
                    Ia = { opacity: 0 },
                    Na = { opacity: 1 },
                    Ta = (0, s.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: a,
                            layoutInfo: s,
                            isSelected: i,
                            isAnySlotSelected: l,
                            isDisabled: u,
                            blinkSlotStyle: d,
                            blinkTankmanStyle: m,
                            qtTankmanIconStyle: _,
                        }) => {
                            const b = g(),
                                p = b.model,
                                v = b.controls,
                                h = ((e, t) => {
                                    const a = (0, V.Jp)(c.D9),
                                        n = (0, H.f)(
                                            () => a({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === W.RIGHT && n();
                                    };
                                })(p.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                f = v.onSlotClick,
                                C = v.onChangeCrewClick,
                                k = p.computes.isChangeCrewButtonVisible(),
                                A = p.computes.isTankmanMode(),
                                w = p.isCrewLocked.get(),
                                y = p.vehicleName.get(),
                                B = p.vehicleType.get(),
                                F = !u && a.isInteractive && (!s.isCurrentLayoutQuickTraining || l),
                                D = (0, n.useCallback)(() => {
                                    F && !A && ((0, se.G)(R.sounds.yes1()), f(e, a.tankmanID));
                                }, [e, a, f, A, F]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), w || ((0, se.G)(R.sounds.yes1()), C(e, a.tankmanID));
                                    },
                                    [e, a, C, w],
                                ),
                                I = (0, n.useMemo)(() => ({ tankmanID: a.tankmanID, slotIdx: e }), [a, e]);
                            return r().createElement(
                                xe,
                                {
                                    args: I,
                                    isEnabled: !u,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: h,
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        he,
                                        {
                                            onClick: D,
                                            isSelected: i,
                                            isDisabled: u,
                                            isEmpty: -1 === a.tankmanID,
                                            layoutInfo: s,
                                            isEnabledForMouse: F,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ze },
                                            a.hasWarning && r().createElement('div', { className: Ze }),
                                            i && r().createElement('div', { className: A ? qe : Ue }),
                                            r().createElement(
                                                fe,
                                                {
                                                    startState: Da,
                                                    endState: Sa,
                                                    layoutInfo: s,
                                                    isPaused: !k,
                                                    className: E()(Ge, k && je),
                                                    isTankmanMode: A,
                                                },
                                                r().createElement(Fa, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: a,
                                                    layoutInfo: s,
                                                    isDisabled: u,
                                                    vehicleName: y,
                                                    vehicleType: B,
                                                    blinkSlotStyle: d,
                                                    blinkTankmanStyle: m,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: i,
                                                }),
                                            ),
                                            k &&
                                                r().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    r().createElement(
                                                        fe,
                                                        {
                                                            startState: Ia,
                                                            endState: Na,
                                                            layoutInfo: s,
                                                            isPaused: !k,
                                                            className: $e,
                                                            isTankmanMode: A,
                                                        },
                                                        r().createElement(Ve, {
                                                            isSelected: s.isCurrentLayoutMemberChange && i,
                                                            isLocked: w,
                                                            mainRole: o.U2(t, 0) || '',
                                                            isFemale: -1 !== a.tankmanID && a.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    La = 'SlotsList_base_5f';
                function xa() {
                    return (
                        (xa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        xa.apply(this, arguments)
                    );
                }
                const Ra = { transform: 'translateX(0rem)' },
                    Pa = { transform: 'translateX(15rem)' },
                    Ma = (0, s.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: a }) => {
                        const s = g().model,
                            i = s.computes.isAnyEmptySlots(),
                            l = (0, ie.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: oe.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            o = l[0],
                            u = l[1];
                        (0, n.useEffect)(() => {
                            i ? u.resume() : u.pause();
                        }, [u, i]);
                        const c = (0, ie.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: oe.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            d = c[0],
                            m = c[1];
                        (0, n.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining]);
                        const _ = (0, ie.useSpring)(() => ({
                                from: Ra,
                                to: Pa,
                                delay: 200,
                                config: { duration: 300, easing: oe.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            b = (0, n.useCallback)(
                                (a) => t || (e.isCurrentLayoutQuickTraining && -1 === a),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return r().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: E()(La, a) },
                            s.computes
                                .getSlots()
                                .map((t, a) =>
                                    r().createElement(
                                        Ta,
                                        xa({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${a}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (s.computes.isSlotSelected(t.slotIdx) || s.computes.isTankmanMode()),
                                            isAnySlotSelected: s.computes.isAnySlotSelected(),
                                            isDisabled: b(t.tankman.tankmanID),
                                            blinkSlotStyle: d,
                                            blinkTankmanStyle: o,
                                            qtTankmanIconStyle: _,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Oa = (0, s.Pi)(() => {
                        const e = g().model,
                            t = e.isDisabled.get(),
                            a = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return r().createElement(
                            'div',
                            { className: ae },
                            e.computes.isButtonBarVisible() &&
                                r().createElement(
                                    'div',
                                    { className: ne },
                                    r().createElement(te, { isWidgetDisabled: t }),
                                ),
                            r().createElement(Ma, { layoutInfo: n, isWidgetDisabled: t, className: re }),
                            a && r().createElement(Se, { layoutInfo: n, isDisabled: t }),
                        );
                    }),
                    Ha = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    Wa = (0, n.memo)(() => r().createElement(_, { options: Ha }, r().createElement(Oa, null)));
            },
            5801: (e, t, a) => {
                'use strict';
                a.d(t, { p: () => Ne });
                var n = a(6179),
                    r = a.n(n),
                    s = a(6483),
                    i = a.n(s),
                    l = a(2106),
                    o = a(6373);
                let u;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(u || (u = {}));
                var c = a(3403),
                    d = a(3415),
                    m = a(9480),
                    _ = a(9631);
                const g = 'FilterTitle_base_a7',
                    b = 'FilterTitle_label_05',
                    E = 'FilterTitle_discount_42',
                    p = 'FilterTitle_discountIcon_30',
                    v = ({ label: e, hasDiscount: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: i()(g, a) },
                            r().createElement('div', { className: b }, e),
                            t && r().createElement('div', { className: E }, r().createElement('div', { className: p })),
                        );
                let h;
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
                })(h || (h = {}));
                var f = a(3649);
                const C = 'ToggleIcon_base_59',
                    k = 'ToggleIcon_base__small_3e',
                    A = 'ToggleIcon_icon_e7',
                    w = r().memo(function ({ icon: e, isSmall: t = !1, classNames: a }) {
                        return r().createElement(
                            'div',
                            { className: i()(C, t && k) },
                            r().createElement('div', {
                                className: i()(A, null == a ? void 0 : a.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var y = a(9690);
                const B = 'VehicleTier_base_9c',
                    F = 'VehicleTier_base__small_fc',
                    D = ({ level: e, isSmall: t = !1 }) =>
                        r().createElement('div', { className: i()(B, t && F) }, (0, y.HG)(e)),
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
                    I = ({ id: e, icon: t, type: a, isSmall: n = !0, isSelected: s = !1 }) =>
                        a === h.VehicleTier
                            ? r().createElement(D, { isSmall: n, level: Number(e) })
                            : r().createElement(w, {
                                  icon: t,
                                  isSmall: n,
                                  classNames: {
                                      icon: i()(S[`icon__${a}`], S[`icon__${a}${(0, f.e)(e)}`], s && S.icon__selected),
                                  },
                              }),
                    N = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                let L;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(L || (L = {}));
                const x = ({ header: e, body: t, contentId: a, targetId: n }) =>
                        a
                            ? { contentId: a, targetId: n }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    P = ({
                        id: e,
                        type: t,
                        label: a,
                        hasDiscount: n,
                        filters: s,
                        onClick: l,
                        className: o,
                        toggleProps: u,
                        theme: c = L.Default,
                    }) => {
                        const g = c === L.InPopup;
                        return r().createElement(
                            'div',
                            { className: i()(N.base, N[`base__${c}`], o) },
                            g && r().createElement(v, { className: N.title, label: a, hasDiscount: n }),
                            r().createElement(
                                'div',
                                { className: N.content },
                                m.UI(s, ({ id: a, isSelected: n, tooltip: s, icon: o, counter: c }) =>
                                    r().createElement(
                                        d.l,
                                        { key: a, tooltipArgs: x(s), className: N.toggle },
                                        r().createElement(
                                            _.C,
                                            T({}, u, {
                                                className: i()(N.toggle, null == u ? void 0 : u.className),
                                                isActive: n,
                                                onClick: () => (null == l ? void 0 : l(e, a)),
                                                counter: c,
                                            }),
                                            r().createElement(I, {
                                                id: a,
                                                icon: o,
                                                type: t,
                                                isSmall: g,
                                                isSelected: n,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var M = a(9197);
                const O = (0, a(3215).q)()(
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
                    H = O[0],
                    W = O[1];
                var V = a(3457),
                    z = a(3616),
                    $ = a(1037),
                    G = a(9367);
                const j = 'PopupButton_base_7c',
                    Z = 'PopupButton_popupButtonLabel_ed',
                    U = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    X = 'PopupButton_discountAlert_c8',
                    K = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: a = $.IC.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: j },
                            r().createElement('div', { className: Z }, R.strings.crew.filter.popup.button.title()),
                            r().createElement(
                                z.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: a,
                                },
                                r().createElement(
                                    'div',
                                    { id: 'popup_btn', className: U },
                                    r().createElement(
                                        _.C,
                                        { type: V.L$.ghost, size: V.qE.small, isActive: e, hasIndicator: !1 },
                                        r().createElement('div', { className: i()(q, e && Y) }),
                                    ),
                                    t && r().createElement(G.Q, { className: X }),
                                ),
                            ),
                        );
                var Q = a(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ae = ({ onClick: e }) =>
                        r().createElement(
                            'div',
                            { className: J },
                            r().createElement(
                                o.i,
                                Q.Xd,
                                r().createElement(
                                    V.u5,
                                    { mixClass: ee, onClick: e, type: V.L$.ghost, size: V.qE.small },
                                    r().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ne = 'default',
                    re = 'search',
                    se = 'email',
                    ie = 'password',
                    le = 'normal',
                    oe = 'disabled',
                    ue = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ne]: '',
                        [se]: R.strings.common.input.placeholder.email(),
                        [re]: R.strings.common.input.placeholder.search(),
                        [ie]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ne]: 'text', [se]: 'text', [re]: 'text', [ie]: 'password' },
                    ge = { [ne]: '', [se]: 'Invalid email', [re]: '', [ie]: '' },
                    be = R.images.gui.maps.icons.components.input;
                function Ee(e, t) {
                    return (
                        t !== se ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var pe = a(7727);
                const ve = {
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
                    he = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: a = ne,
                            size: s = de,
                            variant: l = le,
                            placeholder: o = '',
                            highlighted: u,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: g,
                            onMouseEnter: b,
                            onMouseLeave: E,
                            onMouseDown: p,
                            onMouseUp: v,
                            onClick: h,
                            onChange: f,
                            onClear: C,
                            onFocus: k,
                            onBlur: A,
                        }) => {
                            const w = (0, n.useState)(!1),
                                y = w[0],
                                B = w[1],
                                F = (0, n.useRef)(null),
                                D = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = l !== oe,
                                I = (0, n.useCallback)(
                                    (e) => {
                                        S && (B(!0), k && k(e));
                                    },
                                    [S, k],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        S && !D.current.mouseOver && (B(!1), A && A(e));
                                    },
                                    [S, A],
                                );
                            (0, n.useEffect)(() => {
                                S && y && d && F.current && F.current.select();
                            }, [d, y, S]);
                            const T = (0, n.useCallback)(
                                    (e) => {
                                        S && f && f(e.target.value);
                                    },
                                    [S, f],
                                ),
                                L = (0, n.useCallback)(
                                    (e) => {
                                        S && ((D.current.mouseOver = !0), b && b(e));
                                    },
                                    [S, b],
                                ),
                                x = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            F.current &&
                                            (D.current.mouseDown && F.current.focus(),
                                            (D.current.mouseOver = !1),
                                            E && E(e));
                                    },
                                    [S, E],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        S && ((D.current.mouseDown = !0), p && p(e));
                                    },
                                    [S, p],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        S && ((D.current.mouseDown = !1), v && v(e));
                                    },
                                    [S, v],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        if (S && F.current) {
                                            (!y || (y && e.target !== F.current)) && F.current.focus(), h && h(e);
                                        }
                                    },
                                    [y, S, h],
                                ),
                                O = o || me[a],
                                H = Boolean(_),
                                W = i()(
                                    ve.base,
                                    ve[`base__${s}`],
                                    u && ve[`base__${l}`],
                                    y && ve.base__focused,
                                    H && ve.base__withIcon,
                                    g,
                                ),
                                V = (0, n.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                z = i()(ve.input, ve[`input__${a}`]),
                                $ = i()(ve.icon, ve[`icon__${a}`]),
                                G = i()(ve.placeholder, ve[`placeholder__${a}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: L,
                                    onMouseDown: R,
                                    onMouseUp: P,
                                    onMouseLeave: x,
                                    onClick: M,
                                },
                                !S && r().createElement('div', { className: ve.disabled }),
                                V && r().createElement('div', { style: V, className: $ }),
                                r().createElement('input', {
                                    ref: F,
                                    className: z,
                                    type: _e[a],
                                    value: t,
                                    onChange: T,
                                    disabled: !S,
                                    onFocus: I,
                                    onBlur: N,
                                    maxLength: m,
                                }),
                                O && !t && !y && r().createElement('div', { className: G }, O),
                                c &&
                                    r().createElement('div', {
                                        className: ve.clear,
                                        onClick: (e) => {
                                            pe.$.playClick(), C && C(e);
                                        },
                                        onMouseEnter: pe.$.playHighlight,
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
                    Ce = ({ variant: e, show: t = !0, helperText: a, helperIcon: s, classMix: l }) => {
                        const o = (0, n.useMemo)(() => {
                                const t =
                                    s ||
                                    (function (e) {
                                        return e === ue ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [s, e]),
                            u = i()(fe.base, t && fe.base__shown),
                            c = i()(fe.message, fe[`message__${e}`], l);
                        return r().createElement(
                            'div',
                            { className: u },
                            o && r().createElement('div', { className: fe.icon, style: o }),
                            r().createElement('div', { className: c }, a),
                        );
                    },
                    ke = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Ae = [
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                    Be = (e) => {
                        let t = e.componentId,
                            a = e.type,
                            s = void 0 === a ? ne : a,
                            l = e.variant,
                            o = void 0 === l ? le : l,
                            u = e.size,
                            c = void 0 === u ? de : u,
                            m = e.value,
                            _ = e.tooltipArgs,
                            g = e.helperText,
                            b = void 0 === g ? '' : g,
                            E = e.isValidated,
                            p = void 0 === E || E,
                            v = e.showHelper,
                            h = void 0 === v || v,
                            f = e.error,
                            C = e.options,
                            k = e.onFocus,
                            A = e.onMouseEnter,
                            w = e.onMouseLeave,
                            y = e.onMouseUp,
                            B = e.onMouseDown,
                            F = e.onChange,
                            D = e.classMix,
                            S = e.controlClassMix,
                            I = e.helperClassMix,
                            N = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ae);
                        const T = (0, n.useState)(m),
                            L = T[0],
                            x = T[1],
                            R = (0, n.useState)(p),
                            P = R[0],
                            M = R[1],
                            O = (0, n.useMemo)(() => Object.assign({}, ye, C), [C]),
                            H = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: s }),
                            W = (0, n.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), x(e));
                            }, []),
                            V = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    O.performChangeValidation &&
                                        (t = O.changesValidator ? O.changesValidator(e) : Ee(e, H.current.type)),
                                        F && F(e, t);
                                },
                                [F, O],
                            ),
                            z = (0, n.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            $ = (0, n.useCallback)(() => W(''), [W]);
                        (0, n.useEffect)(() => () => z(), [z]);
                        const G = (0, n.useCallback)(
                            (e) => {
                                z(),
                                    O.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              V(e);
                                          }, O.debounceTime))
                                        : V(e);
                            },
                            [V, z, O.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== L ||
                                (G(H.current.value), (H.current.isChangeHandled = !0));
                        }, [L, G]),
                            (0, n.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), x(m)),
                                    (H.current.type = s);
                            }, [m, s]),
                            (0, n.useEffect)(() => {
                                M(p);
                            }, [p, o]);
                        const j = (0, n.useCallback)((e) => A && A(e), [A]),
                            Z = (0, n.useCallback)(
                                (e) => {
                                    O.disableHighlightOnFocus && P && M(!1), k && k(e);
                                },
                                [P, k, O.disableHighlightOnFocus],
                            ),
                            U = (0, n.useCallback)((e) => y && y(e), [y]),
                            q = (0, n.useCallback)((e) => B && B(e), [B]),
                            Y = (0, n.useCallback)((e) => w && w(e), [w]),
                            X = (0, n.useMemo)(
                                () =>
                                    O.withTypeIcon
                                        ? (function (e, t) {
                                              return e === re ? be.$dyn(`search_${t}`) : '';
                                          })(s, c)
                                        : '',
                                [s, c, O.withTypeIcon],
                            ),
                            K = b || ge[s],
                            Q = Boolean(L),
                            J = f ? ce : o,
                            ee = Boolean(f) || P,
                            te = (0, n.useMemo)(
                                () => ('boolean' == typeof O.withClear ? Q && O.withClear : Q && s === re),
                                [s, Q, O],
                            ),
                            ae = i()(ke.base, ke[`base__${c}`], ke[`base__${o}`], D);
                        return r().createElement(
                            'div',
                            { id: t, className: ae, onMouseEnter: j, onMouseDown: q, onMouseUp: U, onMouseLeave: Y },
                            r().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    he,
                                    we(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: X,
                                            size: c,
                                            type: s,
                                            variant: J,
                                            value: L,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: O.selectOnFocus,
                                            maxLength: O.maxLength,
                                            classMix: S,
                                            onFocus: Z,
                                            onChange: W,
                                            onClear: $,
                                        },
                                        N,
                                    ),
                                ),
                            ),
                            K &&
                                r().createElement(
                                    'div',
                                    { className: ke.helper },
                                    r().createElement(Ce, {
                                        variant: J,
                                        show: h && (O.isPermanentHelper || ee),
                                        helperText: f || K,
                                        helperIcon: O.helperIconSource,
                                        classMix: I,
                                    }),
                                ),
                        );
                    },
                    Fe = ({ value: e, placeholder: t, tooltipHeader: a, onChange: n, className: s, tooltipBody: i }) =>
                        r().createElement(
                            o.i,
                            { header: null != a ? a : void 0, body: i, isEnabled: Boolean(a || i) },
                            r().createElement(Be, {
                                type: re,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: s,
                                onChange: n,
                            }),
                        ),
                    De = {
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
                            a = t.model,
                            n = t.controls,
                            s = a.amountInfo.get(),
                            c = s.from,
                            d = s.to,
                            m = a.panelType.get(),
                            _ = a.filter.get(),
                            g = a.hasAppliedFilters.get(),
                            b = g || (0 === c && 0 === d),
                            E = a.popoverTooltipHeader.get(),
                            p = a.popoverTooltipBody.get();
                        return r().createElement(
                            'div',
                            { className: i()(De.base, De[`base__${m}`]) },
                            r().createElement(
                                'div',
                                { className: De.titleWrapper },
                                r().createElement(M.C, {
                                    title: a.title.get(),
                                    isGlowVisible: b,
                                    from: c,
                                    to: d,
                                    className: De.title,
                                    classNames: { counterGlow: De.counterGlow },
                                }),
                                g && r().createElement(ae, { onClick: n.resetFilter }),
                            ),
                            r().createElement(
                                'div',
                                { className: De.filters },
                                a.isSearchEnabled.get() &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(Fe, {
                                            value: a.searchString.get(),
                                            onChange: n.search,
                                            className: De.search,
                                            placeholder: a.searchPlaceholder.get(),
                                            tooltipHeader: a.searchTooltipHeader.get(),
                                            tooltipBody: a.searchTooltipBody.get(),
                                        }),
                                        m === u.Barracks && r().createElement('div', { className: De.separator }),
                                    ),
                                _.label && r().createElement('div', { className: De.filterLabel }, _.label),
                                r().createElement(P, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: a.filters.get(),
                                    toggleProps: { type: l.L.ghost },
                                    onClick: n.updateFilter,
                                }),
                                a.isPopoverEnabled.get() &&
                                    r().createElement(
                                        o.i,
                                        {
                                            header: null != E ? E : void 0,
                                            body: null != p ? p : void 0,
                                            isEnabled: Boolean(E || p),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: De.popupButtonWrapper },
                                            r().createElement(K, {
                                                isHighlighted: a.isPopoverHighlighted.get(),
                                                hasDiscountAlert: a.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ie = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Ne = r().memo(function ({ popoverDirection: e }) {
                        return r().createElement(H, { options: Ie }, r().createElement(Se, { popoverDirection: e }));
                    });
            },
            299: (e, t, a) => {
                'use strict';
                a.d(t, { Zk: () => at, zn: () => tt, JW: () => nt });
                var n = a(6179),
                    r = a.n(n),
                    s = a(6483),
                    i = a.n(s),
                    l = a(3403),
                    o = a(3618),
                    u = a(3649),
                    c = a(7077);
                const d = 'TankmanFolder_base_00',
                    m = 'TankmanFolder_folder_f5',
                    _ = 'TankmanFolder_photoFrame_ae',
                    g = 'TankmanFolder_base__big_60',
                    b = 'TankmanFolder_icon_74',
                    E = 'TankmanFolder_innerShadow_44',
                    p = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    v = r().memo(function ({ name: e, className: t, isSkin: a = !1 }) {
                        const s = (0, n.useMemo)(() => {
                                const t = (0, u.BN)(String(e));
                                return null !== (a ? p.$dyn('crewSkins') : p).$dyn(t) ? c.U.c204x256 : c.U.c158x118;
                            }, [e, a]),
                            l = s === c.U.c204x256;
                        return r().createElement(
                            'div',
                            { className: i()(d, l && g, t) },
                            r().createElement('div', { className: m }),
                            r().createElement(
                                'div',
                                { className: _ },
                                r().createElement(c.G, { name: e, size: s, isSkin: a, classMix: b }),
                                l && r().createElement('div', { className: E }),
                            ),
                        );
                    });
                var h = a(5716),
                    f = a(771),
                    C = a(3215),
                    k = a(3946),
                    A = a(8032);
                const w = (0, C.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'skillsEfficiency',
                                        'hasRetrainDiscount',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'hasUniqueSound',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                    },
                                ),
                                a = (0, k.Om)(() => t.skillsEfficiency.get() < f.yb),
                                n = (0, k.Om)(() => t.skillsEfficiency.get() === f.sU),
                                r = (0, k.Om)(() => {
                                    const e = t.currentVehicle.get(),
                                        a = t.nativeVehicle.get(),
                                        n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType:
                                            n && e.type !== a.type && !(0, A.f)(t.currentVehicle.get().tags, h.Yl),
                                        isWrongVehicle: n && e.name !== a.name && !e.isPremium,
                                    };
                                }),
                                s = (0, k.Om)(() =>
                                    t.hasRetrainDiscount.get()
                                        ? { args: { tooltipId: 'actionPrice' }, targetId: tt }
                                        : {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              targetId: tt,
                                              body: n()
                                                  ? R.strings.tooltips.buttons.retrain.body()
                                                  : R.strings.tooltips.buttons.increase.body(),
                                          },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: n,
                                    isLowPerksEfficiency: a,
                                    vehicleValidator: r,
                                    discountTooltipArgs: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    y = w[0],
                    B = w[1];
                var F = a(3457),
                    D = a(3415),
                    S = a(5415),
                    I = a(7078),
                    N = a(2603),
                    T = a(9916);
                const L = 'RetrainAndEfficiency_base_71',
                    x = 'RetrainAndEfficiency_canNotRetrainIcon_82',
                    P = 'RetrainAndEfficiency_retrainWarningLabel_af',
                    M = 'RetrainAndEfficiency_skillsEfficiencyLabel_45',
                    O = 'RetrainAndEfficiency_skillsEfficiencyLabel__red_e9',
                    H = 'RetrainAndEfficiency_skillsEfficiencyRateContainer_5c',
                    W = 'RetrainAndEfficiency_skillsEfficiencyNumber_9a',
                    V = 'RetrainAndEfficiency_skillsEfficiencyNumber__red_a1',
                    z = 'RetrainAndEfficiency_skillsEfficiencyInfoIcon_76',
                    $ = r().memo(function ({
                        isPenaltyActive: e,
                        efficiencyValue: t,
                        tankmanID: a,
                        isWrongVehicle: n,
                        isWrongVehicleType: s,
                    }) {
                        return n || s
                            ? r().createElement(
                                  I.t,
                                  {
                                      targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                      args: { tooltipId: N.M4 },
                                  },
                                  r().createElement(
                                      'div',
                                      { className: L },
                                      r().createElement('div', { className: x }),
                                      r().createElement(
                                          'div',
                                          { className: P },
                                          R.strings.crew.personalFile.isUntrained(),
                                      ),
                                  ),
                              )
                            : r().createElement(
                                  I.t,
                                  {
                                      targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                      args: { tooltipId: N.Br, tankmanID: a },
                                  },
                                  r().createElement(
                                      'div',
                                      { className: L },
                                      r().createElement(
                                          'div',
                                          { className: i()(M, e && O) },
                                          R.strings.crew.personalFile.skillsEfficiency(),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: H },
                                          r().createElement(
                                              'div',
                                              { className: i()(W, e && V) },
                                              (0, u.dL)(T.Z5.getNumberFormat(100 * t, T.B3.INTEGRAL)),
                                          ),
                                          !e && r().createElement('div', { className: z }),
                                      ),
                                  ),
                              );
                    }),
                    G = 'CurrentVehicleTrain_base_22',
                    j = 'CurrentVehicleTrain_currentVehicle_9d',
                    Z = 'CurrentVehicleTrain_currentVehicleName_19',
                    U = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    q = 'CurrentVehicleTrain_retrainContainer_6a',
                    Y = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    X = 'CurrentVehicleTrain_discountIcon_04',
                    K = 'CurrentVehicleTrain_discountIcon__forText_d9',
                    Q = 'CurrentVehicleTrain_retrainBtn_3e',
                    J = 'CurrentVehicleTrain_frameGlow_80',
                    ee = 'CurrentVehicleTrain_discountContainer_24',
                    te = 'CurrentVehicleTrain_discountText_45',
                    ae = (0, l.Pi)(function ({ className: e }) {
                        const t = B(),
                            a = t.model,
                            n = t.controls,
                            s = (0, S.GS)().mediaSize,
                            l = a.currentVehicle.get(),
                            u = a.skillsEfficiency.get(),
                            c = l.name,
                            d = Boolean(c),
                            m = a.computes.vehicleValidator(),
                            _ = m.isWrongVehicleType,
                            g = m.isWrongVehicle,
                            b = a.computes.discountTooltipArgs(),
                            E = a.hasRetrainDiscount.get(),
                            p = a.computes.isLowPerksEfficiency();
                        return r().createElement(
                            'div',
                            { className: i()(G, e) },
                            r().createElement(
                                'div',
                                { className: j },
                                r().createElement(o.w, {
                                    text: d
                                        ? R.strings.crew.personalFile.inVehicle()
                                        : R.strings.crew.common.inBarracks(),
                                    binding: {
                                        vehicle: r().createElement('div', { className: i()(Z, l.isPremium && U) }, c),
                                    },
                                }),
                            ),
                            r().createElement($, {
                                isPenaltyActive: p,
                                efficiencyValue: u,
                                isWrongVehicle: g,
                                isWrongVehicleType: _,
                                tankmanID: a.invId.get(),
                            }),
                            p &&
                                r().createElement(
                                    D.l,
                                    { tooltipArgs: b },
                                    r().createElement(
                                        'div',
                                        { className: q },
                                        r().createElement(
                                            'div',
                                            { className: Y },
                                            E && r().createElement('div', { className: X }),
                                            r().createElement(
                                                F.u5,
                                                { onClick: n.retrain, type: F.L$.secondary, mixClass: Q },
                                                g && r().createElement('div', { className: J }),
                                                a.computes.isUntrained()
                                                    ? R.strings.crew.personalFile.retrain()
                                                    : R.strings.crew.personalFile.increase(),
                                            ),
                                        ),
                                    ),
                                ),
                            E &&
                                !p &&
                                r().createElement(
                                    D.l,
                                    { tooltipArgs: b },
                                    r().createElement(
                                        'div',
                                        { className: ee },
                                        r().createElement('div', { className: i()(X, K) }),
                                        r().createElement(
                                            'div',
                                            { className: te },
                                            s < S.cJ.Large
                                                ? R.strings.crew.personalFile.discount.short()
                                                : R.strings.crew.personalFile.discount.full(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var ne = a(6373);
                const re = 'Name_base_2d',
                    se = 'Name_label_31',
                    ie = 'Name_voiceButton_00',
                    le = 'Name_soundIcon_2a',
                    oe = (0, l.Pi)(function ({ className: e }) {
                        const t = B(),
                            a = t.model,
                            s = t.controls,
                            l = (0, n.useCallback)(() => {
                                s.playUniqueVoice();
                            }, [s]);
                        return r().createElement(
                            'div',
                            { className: i()(re, e) },
                            r().createElement(
                                'div',
                                null,
                                r().createElement('div', { className: se }, a.fullName.get()),
                                a.hasUniqueSound.get() &&
                                    r().createElement(
                                        ne.i,
                                        {
                                            header: R.strings.crew.personalFile.voiceTooltip.header(),
                                            body: R.strings.crew.personalFile.voiceTooltip.body(),
                                        },
                                        r().createElement(
                                            F.u5,
                                            { size: F.qE.extraSmall, type: F.L$.ghost, mixClass: ie, onClick: l },
                                            r().createElement('div', { className: le }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ue = a(8018);
                const ce = 'Role_base_e0',
                    de = 'Role_role_2a',
                    me = 'Role_roleIcon_e6',
                    _e = 'Role_roleName_79',
                    ge = 'Role_commanderFeature_e2',
                    be = 'Role_sense_21',
                    Ee = 'Role_commanderBonus_99',
                    pe = (0, l.Pi)(function ({ className: e }) {
                        const t = B().model,
                            a = t.role.get();
                        return r().createElement(
                            'div',
                            { className: i()(ce, e) },
                            r().createElement(
                                I.t,
                                { args: { tooltipId: N.v$ }, targetId: tt },
                                r().createElement(
                                    'div',
                                    { className: de },
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(a)})`,
                                        },
                                        className: me,
                                    }),
                                    r().createElement('div', { className: _e }, (0, ue.Gc)(a, t.isFemale.get())),
                                ),
                            ),
                            'commander' === a &&
                                r().createElement(
                                    'div',
                                    { className: ge },
                                    r().createElement(
                                        I.t,
                                        {
                                            args: { skillName: 'commander_sixthSense', tooltipId: N.HZ, level: 100 },
                                            targetId: tt,
                                        },
                                        r().createElement('div', { className: be }),
                                    ),
                                    r().createElement(
                                        I.t,
                                        { args: { tooltipId: N.uN }, targetId: tt },
                                        r().createElement('div', { className: Ee }),
                                    ),
                                ),
                        );
                    });
                var ve = a(2056),
                    he = a(9690),
                    fe = a(7727),
                    Ce = a(9053),
                    ke = a(4828),
                    Ae = a(1943);
                const we = 'SpecializationSlots_base_1a',
                    ye = 'SpecializationSlots_frame_85',
                    Be = 'SpecializationSlots_frame__first_23',
                    Fe = 'SpecializationSlots_frame__crewLocked_de',
                    De = 'SpecializationSlots_darkFrame_34',
                    Se = 'SpecializationSlots_frame__hover_06',
                    Ie = 'SpecializationSlots_shadow_4a',
                    Ne = 'SpecializationSlots_arrows_6e',
                    Te = 'SpecializationSlots_arrowsIcon_fc',
                    Le = 'SpecializationSlots_changeVehicle_58',
                    xe = 'SpecializationSlots_tier_68',
                    Re = 'SpecializationSlots_vehicle_b6',
                    Pe = 'SpecializationSlots_vehicleTypeIcon_77',
                    Me = 'SpecializationSlots_info_7c',
                    Oe = 'SpecializationSlots_flag_84',
                    He = 'SpecializationSlots_vehicleIcon_ec',
                    We = 'SpecializationSlots_premVehicle_c3',
                    Ve = 'SpecializationSlots_premVehicleTypeIcon_c9';
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const $e = (0, l.Pi)(function ({ className: e }) {
                        const t = B(),
                            a = t.model,
                            s = t.controls,
                            l = a.nativeVehicle.get(),
                            c = a.isCrewLocked.get(),
                            d = (0, n.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            g = (0, n.useContext)(at),
                            b = (0, Ae.Sr)(ke.D9, {
                                item: ke.sk.PremiumTooltip,
                                action: ke.eX.Viewed,
                                parentScreen: ke.sC.PersonalFile,
                            }),
                            E = (0, n.useCallback)(() => {
                                fe.$.playHighlight(), _(!0);
                            }, []),
                            p = (0, n.useCallback)(() => _(!1), []),
                            v = (0, n.useCallback)(() => {
                                fe.$.playClick(), s.changeVehicle();
                            }, [s]),
                            h = (0, n.useCallback)(
                                (e) => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.$dyn(e ? 'c_48x48_elite' : 'c_48x48_specSlot').$dyn((0, u.BN)(l.type))})`,
                                }),
                                [l.type],
                            ),
                            f = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.nations.c_155x31.$dyn(l.nation)})`,
                                }),
                                [l.nation],
                            );
                        return r().createElement(
                            'div',
                            { className: i()(we, e) },
                            r().createElement(
                                ne.i,
                                {
                                    header: c
                                        ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                        : R.strings.crew.personalFile.vehicleTooltip.header(),
                                    body: c ? R.strings.crew.personalFile.crewLockedTooltip.body() : l.name,
                                    ignoreMouseClick: c,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: c ? void 0 : E,
                                        onMouseLeave: c ? void 0 : p,
                                        onClick: c ? void 0 : v,
                                        className: i()(ye, Be, m && Se, c && Fe),
                                    },
                                    r().createElement('div', { className: De }),
                                    r().createElement('div', { style: f, className: Oe }),
                                    r().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, u.BN)(`${l.nation}-${l.techName}`))})`,
                                        },
                                        className: He,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Me },
                                        r().createElement('div', { className: xe }, (0, he.HG)(l.tier)),
                                        r().createElement('div', { style: h(l.isPremium), className: Pe }),
                                        r().createElement('div', { className: Re }, l.name),
                                    ),
                                    r().createElement('div', { className: Ie }),
                                    r().createElement(
                                        'div',
                                        { className: Ne },
                                        r().createElement('div', { className: Te }),
                                        r().createElement(
                                            'div',
                                            { className: Le },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                ve.u,
                                ze(
                                    {
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                    },
                                    g ? b : void 0,
                                ),
                                r().createElement(
                                    'div',
                                    { className: ye },
                                    r().createElement('div', { style: f, className: Oe }),
                                    r().createElement(
                                        'div',
                                        { className: Me },
                                        r().createElement(o.w, {
                                            alignContent: Ce.v2.Center,
                                            justifyContent: Ce.v2.Center,
                                            classMix: We,
                                            text: R.strings.crew.personalFile.premiumVehicle(),
                                            binding: {
                                                icon: r().createElement('div', { style: h(!0), className: Ve }),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ge = 'TankmanInfoApp_base_8a',
                    je = 'TankmanInfoApp_tankmanFolder_2d',
                    Ze = 'TankmanInfoApp_descriptionBlock_f2',
                    Ue = 'TankmanInfoApp_role_71',
                    qe = 'TankmanInfoApp_name_68',
                    Ye = 'TankmanInfoApp_description_a6',
                    Xe = 'TankmanInfoApp_currentVehicle_06',
                    Ke = 'TankmanInfoApp_nativeVehicle_5c',
                    Qe = 'TankmanInfoApp_nativeVehicle__withDescription_03',
                    Je = 'TankmanInfoApp_slots_a1',
                    et = (0, l.Pi)(function ({ className: e }) {
                        const t = B().model,
                            a = t.description.get(),
                            n = Boolean(a);
                        return r().createElement(
                            'div',
                            { className: i()(Ge, e) },
                            r().createElement(v, { name: t.iconName.get(), isSkin: t.isInSkin.get(), className: je }),
                            r().createElement(
                                'div',
                                { className: Ze },
                                r().createElement(pe, { className: Ue }),
                                r().createElement(oe, { className: qe }),
                                n &&
                                    r().createElement(o.w, {
                                        classMix: Ye,
                                        isTruncationAvailable: !0,
                                        isTooltipEnable: !0,
                                        targetId: R.views.lobby.crew.widgets.TankmanInfo('resId'),
                                        text: a,
                                    }),
                                r().createElement(
                                    'div',
                                    { className: i()(Ke, n && Qe) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                r().createElement($e, { className: Je }),
                                r().createElement(ae, { className: Xe }),
                            ),
                        );
                    }),
                    tt = R.views.lobby.crew.widgets.TankmanInfo('resId'),
                    at = (0, n.createContext)(!1),
                    nt = r().memo(function ({ rootId: e = tt, className: t, isLoggingEnabled: a = !1 }) {
                        const s = (0, n.useMemo)(() => ({ rootId: e }), [e]);
                        return r().createElement(
                            y,
                            { options: s },
                            r().createElement(at.Provider, { value: a }, r().createElement(et, { className: t })),
                        );
                    });
            },
            5716: (e, t, a) => {
                'use strict';
                a.d(t, { Yl: () => r, f3: () => n });
                const n = 'premiumIGR',
                    r = 'wotPlus';
            },
            8271: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { W: () => n }),
                    (function (e) {
                        (e.New = 'new'),
                            (e.Learned = 'learned'),
                            (e.Learning = 'learning'),
                            (e.Irrelevant = 'irrelevant'),
                            (e.Possible = 'possible');
                    })(n || (n = {}));
            },
            2603: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Br: () => o,
                    HZ: () => n,
                    M4: () => u,
                    Th: () => s,
                    lu: () => i,
                    rs: () => c,
                    uN: () => r,
                    v$: () => l,
                });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    s = 'achievement',
                    i = 'crewSkin',
                    l = 'tankman',
                    o = 'skillsEfficiency',
                    u = 'crewSkillUntrained',
                    c = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, a) => {
                'use strict';
                a.d(t, { jw: () => s, sU: () => n, y$: () => i, yb: () => r });
                const n = -1,
                    r = 1,
                    s = 'new_skill',
                    i = -1;
                let l;
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
                })(l || (l = {}));
            },
            6880: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            8055: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            4769: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            372: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
            4682: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
            5636: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            6143: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                };
            },
            9627: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
            7629: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            130: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'EfficiencyIndicator_base_34',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'SkillIcon_base_43',
                    base__small: 'SkillIcon_base__small_d0',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
            },
            3938: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
            },
            9426: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    background: 'TankmanSkill_background_e5',
                    background__grey: 'TankmanSkill_background__grey_49',
                    background__lightYellow: 'TankmanSkill_background__lightYellow_9f',
                    background__yellow: 'TankmanSkill_background__yellow_e2',
                    background__red: 'TankmanSkill_background__red_ca',
                    container: 'TankmanSkill_container_84',
                    disabledIcon: 'TankmanSkill_disabledIcon_25',
                    disabled: 'TankmanSkill_disabled_ba',
                };
            },
            4723: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, a, n] = deferred[o], s = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(o--, 1);
                        var l = a();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 904),
        (() => {
            var e = { 904: 0, 987: 0, 938: 0, 105: 0, 640: 0, 2: 0, 3: 0, 595: 0, 695: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [s, i, l] = a,
                        o = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (l) var u = l(__webpack_require__);
                    }
                    for (t && t(a); o < s.length; o++)
                        (r = s[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(u);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(7362));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
