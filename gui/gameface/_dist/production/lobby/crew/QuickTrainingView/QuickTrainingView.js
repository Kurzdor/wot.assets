(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7727),
                    o = u(6179),
                    i = u.n(o),
                    s = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: C,
                    onMouseLeave: F,
                    onClick: p,
                }) => {
                    const b = (0, o.useRef)(null),
                        D = (0, o.useState)(u),
                        B = D[0],
                        v = D[1],
                        f = (0, o.useState)(!1),
                        h = f[0],
                        w = f[1],
                        y = (0, o.useState)(!1),
                        k = y[0],
                        S = y[1],
                        x = (0, o.useCallback)(() => {
                            c || (b.current && (b.current.focus(), v(!0)));
                        }, [c]),
                        L = (0, o.useCallback)(
                            (e) => {
                                B && null !== b.current && !b.current.contains(e.target) && v(!1);
                            },
                            [B],
                        ),
                        T = (0, o.useCallback)(
                            (e) => {
                                c || (p && p(e));
                            },
                            [c, p],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                c || (null !== m && (0, a.G)(m), E && E(e), S(!0));
                            },
                            [c, m, E],
                        ),
                        N = (0, o.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        M = (0, o.useCallback)(
                            (e) => {
                                c || (C && C(e), w(!1));
                            },
                            [c, C],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, a.G)(_), A && A(e), u && x(), w(!0));
                            },
                            [c, _, A, x, u],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                c || (F && F(e), w(!1));
                            },
                            [c, F],
                        ),
                        W = r()(
                            s.Z.base,
                            s.Z[`base__${n}`],
                            {
                                [s.Z.base__disabled]: c,
                                [s.Z[`base__${t}`]]: t,
                                [s.Z.base__focus]: B,
                                [s.Z.base__highlightActive]: h,
                                [s.Z.base__firstHover]: k,
                            },
                            d,
                        ),
                        H = r()(s.Z.state, s.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, o.useEffect)(() => {
                            v(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: b,
                                className: W,
                                onMouseEnter: I,
                                onMouseMove: N,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: T,
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: s.Z.back }),
                                    i().createElement('span', { className: s.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: H },
                                i().createElement('span', { className: s.Z.stateDisabled }),
                                i().createElement('span', { className: s.Z.stateHighlightHover }),
                                i().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, o.memo)(c);
            },
            2106: (e, t, u) => {
                'use strict';
                let n, r;
                u.d(t, { L: () => n, q: () => r }),
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
            9987: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    o = u.n(a),
                    i = u(8055);
                const s = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, s);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > d,
                        C = r()(
                            i.Z.base,
                            i.Z[`base__${t}`],
                            a && i.Z.base__animated,
                            c && i.Z.base__hidden,
                            !E && i.Z.base__pattern,
                            n && i.Z.base__empty,
                            m,
                        );
                    return o().createElement(
                        'div',
                        l({ className: C }, _),
                        o().createElement('div', { className: i.Z.bg }),
                        o().createElement('div', { className: i.Z.pattern }),
                        o().createElement(
                            'div',
                            { className: r()(i.Z.value, g && i.Z.value__text) },
                            A ? d : E,
                            A && o().createElement('span', { className: i.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => d });
                var n = u(3138),
                    r = u(6179),
                    a = u(1043),
                    o = u(5262);
                const i = n.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, o.T)(s, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(3138),
                    r = u(6536),
                    a = u(6179),
                    o = u.n(a),
                    i = u(3495),
                    s = u(1043),
                    l = u(5262);
                const c = ({ children: e }) => {
                    const t = (0, a.useContext)(i.Y),
                        u = (0, a.useState)(t),
                        c = u[0],
                        d = u[1],
                        m = (0, a.useCallback)((e, t) => {
                            const u = n.O.view.pxToRem(e),
                                r = n.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: r }, (0, l.T)(u, r, s.j)));
                        }, []),
                        _ = (0, a.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', m), n.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', m),
                                    n.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [m, _],
                        );
                    const E = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return o().createElement(i.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    r = u(7382),
                    a = u(3495);
                const o = ['children'];
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, o);
                    const i = (0, n.useContext)(a.Y),
                        s = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        m = i.extraSmall,
                        _ = i.extraLargeWidth,
                        E = i.largeWidth,
                        g = i.mediumWidth,
                        A = i.smallWidth,
                        C = i.extraSmallWidth,
                        F = i.extraLargeHeight,
                        p = i.largeHeight,
                        b = i.mediumHeight,
                        D = i.smallHeight,
                        B = i.extraSmallHeight,
                        v = { extraLarge: F, large: p, medium: b, small: D, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, r.H)(t, u, v);
                        if (u.largeWidth && E) return (0, r.H)(t, u, v);
                        if (u.mediumWidth && g) return (0, r.H)(t, u, v);
                        if (u.smallWidth && A) return (0, r.H)(t, u, v);
                        if (u.extraSmallWidth && C) return (0, r.H)(t, u, v);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && b) return t;
                            if (u.smallHeight && D) return t;
                            if (u.extraSmallHeight && B) return t;
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
                (0, n.memo)(i);
            },
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                'use strict';
                u.d(t, { YN: () => r.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    r = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var n;
                function r(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => r }),
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
            1037: (e, t, u) => {
                'use strict';
                u.d(t, { IC: () => n });
                var n,
                    r = u(6483),
                    a = u.n(r),
                    o = u(6373),
                    i = u(1856),
                    s = u(3138),
                    l = u(2039),
                    c = u(5099),
                    d = u(7727),
                    m = u(9916),
                    _ = u(6179),
                    E = u.n(_),
                    g = u(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, r) => {
                        const C = (0, _.useRef)(null),
                            F = (0, _.useRef)(null),
                            p = (0, _.useRef)(null),
                            b = (0, _.useState)(window.decorator && window.decorator.directionType),
                            D = b[0],
                            B = b[1],
                            v = (0, _.useCallback)(() => {
                                d.$.playClick(), s.O.view.sendEvent.close();
                            }, []),
                            f = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            h = a()(g.Z.arrow, g.Z[`arrow${A[D]}`]);
                        (0, l.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const w = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === C.current || t === p.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = s.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : s.O.view.sendEvent.close('popover');
                                },
                                [C, p, u],
                            ),
                            y = (0, _.useCallback)(
                                () => (
                                    s.O.view.freezeTextureBeforeResize(),
                                    (0, i.v)(() => {
                                        if (F.current) {
                                            const e = F.current.scrollWidth,
                                                t = F.current.scrollHeight;
                                            s.O.view.resize(e, t), B(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(r, () => ({ updateSize: y })),
                            (0, l.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', w, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !t && e.promise.then(() => y()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', w);
                                    }
                                );
                            }, [y, w, t]),
                            E().createElement(
                                'div',
                                { className: g.Z.base, ref: F },
                                E().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    E().createElement(
                                        'div',
                                        { className: g.Z.content, ref: C },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            E().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                E().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: v,
                                                    onMouseEnter: f,
                                                    ref: p,
                                                }),
                                            ),
                                    ),
                                    E().createElement('div', { className: h, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(1037),
                    r = u(9916),
                    a = u(6179),
                    o = u.n(a);
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
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        A = void 0 === g || g,
                        C = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, i);
                    const F = (0, a.useRef)(null),
                        p = (0, a.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            F.current && (0, r.P3)(t, c, F.current, u, d, m);
                        }, [t, c, m, u, d]);
                    return o().createElement(
                        'div',
                        s(
                            {
                                ref: F,
                                onMouseDown:
                                    ((b = E.props.onClick),
                                    (e) => {
                                        A && (p(), _ && _(e), b && b(e));
                                    }),
                            },
                            C,
                        ),
                        E,
                    );
                    var b;
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => s });
                var n = u(6179),
                    r = u.n(n),
                    a = u(2056);
                const o = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, o);
                    return r().createElement(
                        a.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    r = u(6179),
                    a = u.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, o);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, m]);
                        return a().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    r = u(9916),
                    a = u(6179);
                const o = [
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
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const s = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            C = e.decoratorId,
                            F = void 0 === C ? 0 : C,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            v = e.onShow,
                            f = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, o);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => B || (0, n.F)().resId, [B]),
                            k = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(u, F, { isMouseEvent: !0, on: !0, arguments: i(r) }, y),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [u, F, r, y, v]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(u, F, { on: !1 }, y),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, F, y, f]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && S();
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
                                !1 === b && S();
                            }, [b, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return b
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      l && l(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === A && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === A && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : t;
                        var L;
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
            1856: (e, t, u) => {
                'use strict';
                u.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                (u = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                        }
                    );
                };
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => i });
                var n = u(3138);
                function r(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return a(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: u = o, context: a = 'model' } = {}) {
                    const i = new Map();
                    function s(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = i.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            r = a.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const o = 'string' == typeof r ? `${a}.${r}` : a,
                                s = n.O.view.addModelObserver(o, t, !0);
                            return i.set(s, u), e && u(l(r)), s;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = r(i.keys()); !(e = u()).done; ) {
                                s(e.value, t);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => s });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    o = u.n(a),
                    i = u(8246);
                const s = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                _ = (u, a, o) => {
                                    var s;
                                    const l = i.U(a),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            o = Object.entries(a),
                                                            i = o.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([t, u]) => {
                                                                            i[u].set(e[t]);
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
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && o ? o.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                g = (0, a.useState)(s),
                                A = g[0],
                                C = g[1],
                                F = (0, a.useState)(() => _(s, l, d)),
                                p = F[0],
                                b = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? b(_(A, l, d)) : (E.current = !0);
                                }, [d, A, l]),
                                (0, a.useEffect)(() => {
                                    C(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                o().createElement(u.Provider, { value: p }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                u.d(t, { f8: () => l, s_: () => a, wB: () => c, yR: () => o });
                var n = u(3649),
                    r = (u(9916), u(8613));
                const a = 1e3,
                    o = 60,
                    i = 60 * o,
                    s = 24 * i;
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
                function l(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / s);
                    t -= u * s;
                    const n = Math.trunc(t / i);
                    t -= n * i;
                    const r = Math.trunc(t / o);
                    return (t -= r * o), { days: u, hours: n, minutes: r, seconds: t };
                }
                const c = (e, t = !0) =>
                    e.days > 7 && t
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
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => s, on: () => i, onResize: () => a, onScaleUpdated: () => o });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        o = l[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    });
                var n = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var n = u(5959);
                const r = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => h,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => A,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => b,
                        pxToRem: () => C,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    o = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const h = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    i = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => r, yR: () => n });
                function n(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id)),
                        { caller: u, stack: t, resId: n }
                    );
                };
            },
            2344: (e, t, u) => {
                'use strict';
                u.d(t, { au: () => r });
                u(2790);
                var n = u(3469);
                u(2133), u(579), u(5360), u(9056);
                const r = n.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(6179);
                const r = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(7044),
                    r = u(6179);
                const a = () => {},
                    o = (e = 0, t, u = 0, o = a) => {
                        const i = (0, r.useState)(e),
                            s = i[0],
                            l = i[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        a = t || (e > 2 * n.yR ? n.yR : 1),
                                        i = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - r) / n.s_);
                                            null !== u && t <= u ? (l(u), o && o(), clearInterval(i)) : l(t);
                                        }, a * n.s_);
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, t, u, o]),
                            s
                        );
                    };
            },
            5332: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => a });
                var n = u(4483),
                    r = u(6179);
                function a(e, t, u, a = !1) {
                    const o = (0, r.useMemo)(() => (0, n.Z)(u, a, e), t);
                    return (0, r.useEffect)(() => o.cancel, [o]), o;
                }
            },
            2133: (e, t, u) => {
                'use strict';
                u(6179);
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => s, GS: () => l, cJ: () => o, fd: () => i });
                var n = u(6179),
                    r = u(7739),
                    a = u(1043);
                let o, i, s;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
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
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5360: (e, t, u) => {
                'use strict';
                u(6536);
                var n = u(9916);
                u(6179);
                n.Sw.instance;
                let r;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(r || (r = {}));
            },
            9056: (e, t, u) => {
                'use strict';
                var n = u(9916);
                u(6179);
                n.Sw.instance;
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => r });
                var n = u(6179);
                const r = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            2790: (e, t, u) => {
                'use strict';
                u(6179);
            },
            579: (e, t, u) => {
                'use strict';
                u(3138), u(6179);
            },
            4489: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => a });
                var n = u(5139),
                    r = u(6179);
                function a(e, t, u) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
            },
            5521: (e, t, u) => {
                'use strict';
                let n, r;
                u.d(t, { n: () => n }),
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
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { G: () => i, U2: () => n, UI: () => o, sE: () => s });
                const r = n;
                function a(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function i(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let u = 0; u < e.length; u++) {
                        if (t(r(e, u), u, e)) return !0;
                    }
                    return !1;
                }
                function s(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const n = a(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
            },
            5099: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => n });
                const n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((u, n) => {
                            e.then((e) => !t && u(e)).catch((e) => !t && n(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => n });
                const n = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
            },
            3368: () => {
                !(function () {
                    let e,
                        t,
                        u,
                        n,
                        r,
                        a,
                        o,
                        i = -1;
                    document.addEventListener('mousedown', (u) => {
                        document.getSelection().empty(),
                            u.target.select &&
                                -1 === i &&
                                ((e = u.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (u) => {
                            if ((-1 === i && u.target.select && u.target === e && (i = e.selectionStart), i > -1)) {
                                const n = Math.min(Math.max(u.x, t.left), t.right),
                                    r = Math.min(Math.max(u.y, t.top), t.bottom),
                                    a = document.createEvent('MouseEvent');
                                a.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(a);
                                const o = e.selectionEnd;
                                o > i ? e.setSelectionRange(i, o, 'forward') : e.setSelectionRange(o, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (i = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (u = e.target),
                                (n = e.target.value),
                                (r = u.selectionStart),
                                (a = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (o = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                u.setSelectionRange(a, o, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (t) => {
                            document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const u = document.caretPositionFromPoint(t.x, t.y);
                                    if (!u.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, u.offsetNode, u.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { $: () => r, G: () => n });
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
            3649: (e, t, u) => {
                'use strict';
                u.d(t, {
                    BN: () => i,
                    Eg: () => l,
                    Uw: () => A,
                    WU: () => a,
                    dL: () => C,
                    uF: () => o,
                    v2: () => r,
                    z4: () => s,
                });
                var n = u(1281);
                let r;
                function a(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function o(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    m = (e, t, u = r.left) => e.split(t).reduce(u === r.left ? c : d, []),
                    _ = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = r.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(u)) return _(e);
                        if ('ja' === u) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, t = r.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = s(e);
                            return m(a, /( )/, t).forEach((e) => (u = u.concat(m(e, n, r.left)))), u;
                        })(e, t);
                    },
                    A = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : g(e, t))),
                    C = (e) => a(R.strings.common.percentValue(), { value: e });
            },
            4483: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(5139);
                function r(e, t, u) {
                    return void 0 === u ? (0, n.Z)(e, t, !1) : (0, n.Z)(e, u, !1 !== t);
                }
            },
            5139: (e, t, u) => {
                'use strict';
                function n(e, t, u, n) {
                    let r,
                        a = !1,
                        o = 0;
                    function i() {
                        r && clearTimeout(r);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            (o = Date.now()), u.apply(l, s);
                        }
                        a ||
                            (n && !r && d(),
                            i(),
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
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (s.cancel = function () {
                            i(), (a = !0);
                        }),
                        s
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => a.Z,
                    B3: () => s,
                    Z5: () => o.Z5,
                    B0: () => i,
                    c9: () => p,
                    wU: () => v,
                    ry: () => C,
                    Eu: () => F,
                    SW: () => D,
                    P3: () => B,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var a = u(1358);
                var o = u(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function o(e) {
                                            g(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            g(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    b = () => p(i.CLOSE),
                    D = () => p(i.POP_OVER, { on: !1 }),
                    B = (e, t, u, n, r = R.invalid('resId'), a) => {
                        const o = _.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            d = s.width,
                            m = s.height,
                            E = {
                                x: _.O.view.pxToRem(l) + o.x,
                                y: _.O.view.pxToRem(c) + o.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        p(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: A(E),
                            on: !0,
                            args: a,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var h = u(7572);
                const w = r.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: D,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: B,
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: v,
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => a, Z5: () => n, cy: () => r });
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
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    a = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            3458: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { Z0: () => r, in: () => n, sx: () => a }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const r = 'tooltip_watched',
                    a = 2;
                let o;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(o || (o = {}));
            },
            4828: (e, t, u) => {
                'use strict';
                u.d(t, { AB: () => _, D9: () => n, eX: () => a, sC: () => o, tL: () => r, x3: () => l });
                const n = 'crew',
                    r = 2e3;
                let a, o, i, s, l, c, d, m;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(a || (a = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(o || (o = {})),
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
                    })(l || (l = {})),
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
                    [R.views.lobby.crew.personal_case.PersonalFileView('resId')]: o.PersonalFile,
                    [R.views.lobby.crew.personal_case.PersonalDataView('resId')]: o.PersonalData,
                    [R.views.lobby.crew.personal_case.ServiceRecordView('resId')]: o.ServiceRecord,
                    [R.views.lobby.crew.BarracksView('resId')]: o.Barracks,
                    [R.views.lobby.crew.HangarCrewWidget('resId')]: o.Hangar,
                    [R.views.lobby.crew.MemberChangeView('resId')]: o.MemberChange,
                    [R.views.lobby.crew.TankChangeView('resId')]: o.TankChange,
                    [R.views.lobby.crew.QuickTrainingView('resId')]: o.QuickTraining,
                };
            },
            1943: (e, t, u) => {
                'use strict';
                u.d(t, { Jp: () => d, Sr: () => m });
                var n = u(6179),
                    r = u(3458);
                const a = ['action', 'timeLimit'];
                const o = 'metrics',
                    i = () => Date.now(),
                    s = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: n || null,
                        additional_info: r || null,
                    }),
                    l = (e, t) => {
                        const u = (0, n.useCallback)(
                            (u, n = r.in.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => u(e, t, n);
                    },
                    c = (e, t) => {
                        const u = l(e, t),
                            r = (0, n.useRef)(new Map()),
                            a = (0, n.useRef)(new Map()),
                            o = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    (void 0 !== t && t > 0) || r.current.set(e, i());
                                },
                                [r],
                            ),
                            s = (0, n.useCallback)(() => {
                                r.current.clear(), a.current.clear();
                            }, [r, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== r.current.get(e) &&
                                        void 0 === a.current.get(e) &&
                                        a.current.set(e, i());
                                },
                                [r, a],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = r.current.get(e);
                                    if (void 0 === t) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    a.current.delete(e);
                                    const n = i() - u;
                                    r.current.set(e, t + n);
                                },
                                [r, a],
                            ),
                            m = (0, n.useCallback)(
                                (e, t = 0, n, o) => {
                                    const s = r.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== a.current.get(e) && d(e), r.current.delete(e);
                                    const l = (i() - s) / 1e3;
                                    l <= t ||
                                        ((o = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(o, l)),
                                        u(e, n, o));
                                },
                                [r, a, u, d],
                            );
                        return [(e) => o(e), (e, t, u, n) => m(e, t, u, n), () => s(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = l(e, o),
                            u = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, s(e));
                                },
                                [t],
                            );
                        return (e) => u(e);
                    },
                    m = (e, t) => {
                        const u = ((e) => {
                                const t = c(e, o),
                                    u = t[0],
                                    r = t[1],
                                    a = t[2],
                                    i = t[3],
                                    l = t[4],
                                    d = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                u = e.timeLimit,
                                                n = e.logLevel;
                                            r(t, u, n, s(e));
                                        },
                                        [r],
                                    );
                                return [(e) => u(e), (e) => d(e), () => a(), (e) => i(e), (e) => l(e)];
                            })(e),
                            i = u[0],
                            l = u[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(t, a);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => i(d || r.Z0),
                                onHide: () => l(Object.assign({ action: d || r.Z0, timeLimit: m || r.sx }, _)),
                            }),
                            [d, m, _, i, l],
                        );
                    };
            },
            8208: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => tt,
                        Bar: () => Qe,
                        DefaultScroll: () => et,
                        Direction: () => Re,
                        defaultSettings: () => Oe,
                        useHorizontalScrollApi: () => We,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => pt, Bar: () => At, Default: () => Ft, useVerticalScrollApi: () => ut });
                var a = u(7739),
                    o = u(6179),
                    i = u.n(o),
                    s = u(6483),
                    l = u.n(s),
                    c = u(926),
                    d = u.n(c),
                    m = u(5415);
                const _ = ['children', 'className'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = {
                        [m.fd.ExtraSmall]: '',
                        [m.fd.Small]: d().SMALL_WIDTH,
                        [m.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [m.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [m.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [m.Aq.ExtraSmall]: '',
                        [m.Aq.Small]: d().SMALL_HEIGHT,
                        [m.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [m.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [m.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [m.cJ.ExtraSmall]: '',
                        [m.cJ.Small]: d().SMALL,
                        [m.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [m.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [m.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, _);
                        const r = (0, m.GS)(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return i().createElement('div', E({ className: l()(u, g[a], A[o], C[s]) }, n), t);
                    },
                    p = ['children'];
                const b = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, p);
                    return i().createElement(a.ZN, null, i().createElement(F, u, t));
                };
                var D = u(493),
                    B = u.n(D),
                    v = u(1856),
                    f = u(3403),
                    h = u(7030),
                    w = u(7160);
                let y;
                !(function (e) {
                    (e.Info = 'info'), (e.Error = 'error');
                })(y || (y = {}));
                var k = u(7078),
                    S = u(6373),
                    x = u(2056);
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const T = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = i().createElement('div', { className: u }, e);
                    if (t.header || t.body) return i().createElement(S.i, t, n);
                    const r = t.contentId;
                    return r ? i().createElement(x.u, L({}, t, { contentId: r }), n) : i().createElement(k.t, t, n);
                };
                var I = u(8045);
                const N = 'ExtendedText_base_71',
                    M = 'ExtendedText_base__zeroPadding_25',
                    O = 'ExtendedText_base__isTruncationAvailable_5b',
                    P = 'ExtendedText_truncated_97',
                    W = 'ExtendedText_truncated__hide_31',
                    H = 'ExtendedText_unTruncated_b8';
                var j = u(3649);
                let z, U, $;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(z || (z = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(U || (U = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })($ || ($ = {}));
                const G = { [$.NBSP]: z.NoBreakSymbol, [$.ZWNBSP]: z.NoBreakSymbol, [$.NEW_LINE]: z.LineBreak },
                    V = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Z = {
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
                    X = 'renderers_noBreakWrapper_10',
                    q = 'renderers_lineBreak_b5',
                    Y = 'renderers_newLine_bd',
                    K = 'renderers_word_f3',
                    Q = (e) => ({ color: `#${e}` }),
                    J = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: l()(K, Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: K, style: Q(n) },
                                      e,
                                  )
                            : i().createElement('span', { key: u, 'data-block-type': t.blockType, className: K }, e);
                    },
                    ee = {
                        [z.Word]: J,
                        [z.NoBreakSymbol]: J,
                        [z.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [z.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': z.LineBreak, className: q }),
                        [z.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': z.NewLine, className: Y }, e),
                        [z.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': z.NoBreakWrapper, className: X }, e),
                    },
                    te = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const o = `${u}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        u = te(e, ee[t], o);
                                    n.push(...u);
                                } else n.push(t({ elementList: [r], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    ue = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            r = ee[n],
                                            a = te(e, r, t);
                                        return (
                                            n === z.NoBreakWrapper
                                                ? u.push(r({ elementList: a, textBlock: e, key: `${t}` }))
                                                : u.push(...a),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    ne = (e, t, u, n) => {
                        let r = t.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                        a !== e.length && u(e.slice(a));
                    },
                    re = V
                        ? (e) => {
                              const t = [];
                              return (
                                  ne(
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
                                                      ne(
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
                              let u = t.exec(e);
                              if (!u) return [e];
                              const n = [];
                              let r = 0;
                              for (; u; ) n.push(e.slice(r, t.lastIndex)), (r = t.lastIndex), (u = t.exec(e));
                              return r !== e.length && n.push(e.slice(r)), n;
                          },
                    ae = (e, t = '') => {
                        const u = [];
                        return (
                            ne(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: z.Word, colorTag: t, childList: re(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = G[n.charAt(0)];
                                    r === z.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: z.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: z.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : u.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            u
                        );
                    },
                    oe = (e, t, u = '') => {
                        const n = [];
                        return (
                            ne(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...ae(e, u));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...ae(String(a), u))
                                        : n.push({ blockType: z.Binding, colorTag: u, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    ie = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === z.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: z.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    se = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === z.NoBreakSymbol
                                        ? ((u = !0), t.push(...ie(t.pop(), e)))
                                        : (u ? t.push(...ie(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    ne(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...oe(e, t));
                                        },
                                        (e) => {
                                            u.push(...oe(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })((0, j.Eg)((0, j.z4)(e)), t),
                        );
                        return ue(u);
                    },
                    le = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    ce = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    de = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = ce(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            o = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + o] : [!1, n];
                        }
                        const i = Math.max(u + o, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    me = (e, t, u, n, r, a) => {
                        let o = -1,
                            s = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === z.LineBreak || c === z.NewLine || c === z.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = de(u, n, r),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - m) + a,
                                    E = t[l];
                                (s = i().cloneElement(E, E.props, _)), (o = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    m = c.props.children,
                                    _ = me(e, m, e.length - 1, n, r, a),
                                    E = _[0],
                                    g = _[1];
                                if (!(E < 0)) {
                                    const e = m.slice(0, E);
                                    (s = i().cloneElement(c, c.props, e, g)), (o = l);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [o, s];
                    },
                    _e = (e, t, u, n = '...') => {
                        const r = [...t],
                            a = e.current;
                        if (!a) return [r, !1];
                        const o = u.height,
                            i = u.width,
                            s = a.lastElementChild;
                        if (!le(s, o) && ce(s, i) <= 0) return [r, !1];
                        const l = a.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    le(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(l, o);
                        if (c < 0) return [r, !1];
                        const d = me(l, r, c, i, n.length, n),
                            m = d[0],
                            _ = d[1];
                        return _ && (r.splice(m, 1, _), r.splice(m + 1)), [r, !0];
                    },
                    Ee = i().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: a = !1,
                            targetId: s,
                            justifyContent: c = U.FlexStart,
                            alignContent: d = U.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const _ = (0, o.useRef)(null),
                                E = (0, o.useRef)({ height: 0, width: 0 }),
                                g = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = g[0],
                                C = g[1],
                                F = (0, o.useMemo)(() => se(e, n), [n, e]),
                                p = (0, o.useMemo)(() => {
                                    if (
                                        r &&
                                        A.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [n, r, s, e, A.isTruncated]),
                                b = (0, o.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = _e(_, F, E.current, m),
                                            n = t[0],
                                            r = t[1];
                                        C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                    },
                                    [u, m, F],
                                ),
                                D = (0, o.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, o.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, o.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new I.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(_, b, a),
                                i().createElement(
                                    'div',
                                    { className: l()(N, t, M, a && O), style: D },
                                    i().createElement('div', { className: H, ref: _ }, F),
                                    i().createElement(
                                        T,
                                        { tooltipArgs: p },
                                        i().createElement(
                                            'div',
                                            { className: l()(P, !A.isTruncateFinished && a && W), style: D },
                                            A.isTruncateFinished && a ? A.elementList : F,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ge = {
                        base: 'Tip_base_be',
                        base__info: 'Tip_base__info_8e',
                        base__error: 'Tip_base__error_6a',
                        closeBtn: 'Tip_closeBtn_1a',
                        newLine: 'Tip_newLine_07',
                    },
                    Ae = (0, o.forwardRef)(({ id: e, text: t, type: u = y.Info, onClose: n }, r) =>
                        i().createElement(
                            'div',
                            { ref: r },
                            i().createElement(
                                'div',
                                { className: l()(ge.base, ge[`base__${u}`]) },
                                i().createElement(Ee, {
                                    text: t,
                                    binding: { newLine: i().createElement('div', { className: ge.newLine }) },
                                }),
                                u === y.Info &&
                                    i().createElement('div', { className: ge.closeBtn, onClick: () => n(e) }),
                            ),
                        ),
                    ),
                    Ce = (0, o.memo)(Ae);
                var Fe = u(536),
                    pe = u(7321),
                    be = u(3215),
                    De = u(4598),
                    Be = u(9480),
                    ve = u(3946);
                const fe = (0, be.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'nationName',
                                        'vehicleName',
                                        'tankmanName',
                                        'isConversionBannerVisible',
                                        'backButtonLabel',
                                    ]),
                                    {
                                        tips: e.array('tips'),
                                        booksList: e.array('booksList'),
                                        freeXpData: e.object('freeXpData'),
                                        learningData: e.object('learningData'),
                                    },
                                ),
                                u = (0, ve.Om)(() => t.learningData.get().personalXpAmount > 0),
                                n = (0, ve.Om)(() =>
                                    Be.G(t.booksList.get(), (e) => e.selectedCount > 0 && 'personalBook' !== e.type),
                                ),
                                r = (0, ve.Om)(() => !(n() || u())),
                                a = (0, ve.Om)((e) => Be.U2(t.booksList.get(), e), { equals: De.jv }),
                                o = (0, ve.Om)(() => Be.UI(t.tips.get(), (e) => Object.assign({}, e)), {
                                    equals: De.jv,
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    hasFreeXpSelected: u,
                                    hasSelectedBooks: n,
                                    getBook: a,
                                    getTips: o,
                                    isConversionBannerShowedInsteadOfButtons: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            back: e.createCallbackNoArgs('onBack'),
                            closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                            onAbout: e.createCallbackNoArgs('onAbout'),
                            onLearn: e.createCallbackNoArgs('onLearn'),
                            onCancel: e.createCallbackNoArgs('onCancel'),
                            cancelWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onCancel'),
                            onBuyBook: e.createCallback((e) => ({ bookId: e }), 'onBuyBook'),
                            onBookSelected: e.createCallback((e, t) => ({ intCD: e, count: t }), 'onBookSelected'),
                            onBookMouseEnter: e.createCallback((e) => ({ intCD: e }), 'onBookMouseEnter'),
                            onCardMouseLeave: e.createCallbackNoArgs('onCardMouseLeave'),
                            onFreeXpMouseEnter: e.createCallbackNoArgs('onFreeXpMouseEnter'),
                            onFreeXpManualInput: e.createCallback((e) => ({ value: e }), 'onFreeXpManualInput'),
                            onFreeXpSelected: e.createCallback((e) => ({ isSelected: e }), 'onFreeXpSelected'),
                            onFreeXpUpdated: e.createCallback(
                                (e, t) => ({ actionType: e, action: t }),
                                'onFreeXpUpdated',
                            ),
                            onTipClose: e.createCallback((e) => ({ id: e }), 'onTipClose'),
                        }),
                    ),
                    he = fe[0],
                    we = fe[1],
                    ye = (e, t, u) => (u < e ? e : u > t ? t : u);
                var ke = u(3138);
                const Se = [];
                function xe(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), Se)
                    );
                }
                function Le(e, t, u = []) {
                    const n = (0, o.useRef)(0),
                        r = (0, o.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, o.useEffect)(() => r, [r]);
                    const a = (null != u ? u : []).concat([t]);
                    return [
                        (0, o.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, a),
                        r,
                    ];
                }
                var Te = u(7727);
                function Ie(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ne(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ne(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ne(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var Me = u(4489);
                let Re;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Re || (Re = {}));
                const Oe = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Pe = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const i = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : ye(r, a, u);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Oe : l,
                                d = (0, o.useRef)(null),
                                m = (0, o.useRef)(null),
                                _ = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var n, r = Ie(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, o.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                E = (0, Me.f)(
                                    () => {
                                        ke.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, h.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), _.trigger('change', e), a && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                A = g[0],
                                C = g[1],
                                F = (0, o.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = A.scrollPosition.get(),
                                            a = (null != (n = A.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, t * u + a + r);
                                    },
                                    [A.scrollPosition],
                                ),
                                p = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            C.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, A.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, A.scrollPosition],
                                ),
                                b = (0, o.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            a = F(t, e, n);
                                        p(a);
                                    },
                                    [p, F, c.step],
                                ),
                                D = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && b(n(e)),
                                            d.current && _.trigger('mouseWheel', e, A.scrollPosition, t(d.current));
                                    },
                                    [A.scrollPosition, b, _],
                                ),
                                B = ((e, t = []) => {
                                    const u = (0, o.useRef)(),
                                        n = (0, o.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, v.v)(() => {
                                            const e = d.current;
                                            e &&
                                                (p(i(e, A.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [p, A.scrollPosition.goal],
                                ),
                                f = xe(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, A.scrollPosition.goal);
                                    t !== A.scrollPosition.goal && p(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', B),
                                    () => {
                                        window.removeEventListener('resize', B);
                                    }
                                ),
                                [B],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: D,
                                    applyScroll: p,
                                    applyStepTo: b,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: A,
                                    recalculateContent: f,
                                    events: { on: _.on, off: _.off },
                                }),
                                [A.scrollPosition, p, b, _.off, _.on, f, D, C, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    We = Pe({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Re.Next : Re.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    He = 'HorizontalBar_base_49',
                    je = 'HorizontalBar_base__nonActive_82',
                    ze = 'HorizontalBar_leftButton_5f',
                    Ue = 'HorizontalBar_rightButton_03',
                    $e = 'HorizontalBar_track_0d',
                    Ge = 'HorizontalBar_thumb_fd',
                    Ve = 'HorizontalBar_rail_32',
                    Ze = 'disable',
                    Xe = { pending: !1, offset: 0 },
                    qe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ye = () => {},
                    Ke = (e, t) => Math.max(20, e.offsetWidth * t),
                    Qe = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = qe, onDrag: n = Ye }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(Xe),
                            E = _[0],
                            g = _[1],
                            A = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            C = () => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    l = ye(0, 1, o / (r - n)),
                                    m = (t.offsetWidth - Ke(t, i)) * l;
                                (u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (a.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return a.current.classList.add(Ze), void s.current.classList.remove(Ze);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(Ze), void s.current.classList.add(Ze);
                                            var t, u;
                                            a.current.classList.remove(Ze), s.current.classList.remove(Ze);
                                        }
                                    })(m);
                            },
                            F = xe(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && t && n && u)) return;
                                    const o = Math.min(1, n / a);
                                    (t.style.width = `${Ke(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(je) : r.current.classList.remove(je));
                                })(),
                                    C();
                            });
                        (0, o.useEffect)(() => (0, v.v)(F)),
                            (0, o.useEffect)(
                                () =>
                                    (0, v.v)(() => {
                                        const t = () => {
                                            C();
                                        };
                                        let u = Ye;
                                        const n = () => {
                                            u(), (u = (0, v.v)(F));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!E.pending) return;
                                const t = ke.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            s = d.current;
                                        if (!i || !s) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - i.getBoundingClientRect().x,
                                            m = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: m });
                                    }),
                                    u = ke.O.client.events.mouse.up(() => {
                                        t(), A(Xe);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, A]);
                        const p = Le((t) => e.applyStepTo(t), m, [e]),
                            b = p[0],
                            D = p[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const B = (e) => {
                            e.target.classList.contains(Ze) || (0, Te.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(He, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(ze, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ze) ||
                                        0 !== e.button ||
                                        ((0, Te.G)('play'), b(Re.Next));
                                },
                                onMouseUp: D,
                                ref: a,
                                onMouseEnter: B,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()($e, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, Te.G)('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Re.Prev : Re.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                i().createElement('div', { ref: d, className: l()(Ge, t.thumb) }),
                                i().createElement('div', { className: l()(Ve, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(Ue, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ze) ||
                                        0 !== e.button ||
                                        ((0, Te.G)('play'), b(Re.Prev));
                                },
                                onMouseUp: D,
                                ref: s,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    Je = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    et = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Je.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Je.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Je.defaultScrollArea, r) },
                                i().createElement(tt, { className: s, api: _, classNames: a }, e),
                            ),
                            i().createElement(Qe, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    tt = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => (0, v.v)(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Je.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: l()(Je.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(Je.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (tt.Bar = Qe), (tt.Default = et);
                const ut = Pe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Re.Next : Re.Prev),
                    }),
                    nt = 'VerticalBar_base_f3',
                    rt = 'VerticalBar_base__nonActive_42',
                    at = 'VerticalBar_topButton_d7',
                    ot = 'VerticalBar_bottomButton_06',
                    it = 'VerticalBar_track_df',
                    st = 'VerticalBar_thumb_32',
                    lt = 'VerticalBar_rail_43',
                    ct = 'disable',
                    dt = () => {},
                    mt = { pending: !1, offset: 0 },
                    _t = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Et = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    gt = (e, t) => Math.max(20, e.offsetHeight * t),
                    At = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = _t, onDrag: n = dt }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(mt),
                            E = _[0],
                            g = _[1],
                            A = (0, o.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            C = xe(() => {
                                const t = d.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && t && u)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (t.style.height = `${gt(u, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(rt) : r.current.classList.remove(rt)),
                                    o
                                );
                            }),
                            F = xe(() => {
                                const t = c.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    l = ye(0, 1, o / (r - n)),
                                    m = (t.offsetHeight - gt(t, i)) * l;
                                (u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (a.current && s.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return a.current.classList.add(ct), void s.current.classList.remove(ct);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(ct), void s.current.classList.add(ct);
                                            var t, u;
                                            a.current.classList.remove(ct), s.current.classList.remove(ct);
                                        }
                                    })(m);
                            }),
                            p = xe(() => {
                                Et(e, () => {
                                    C(), F();
                                });
                            });
                        (0, o.useEffect)(() => (0, v.v)(p)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    Et(e, () => {
                                        F();
                                    });
                                };
                                let u = dt;
                                const n = () => {
                                    u(), (u = (0, v.v)(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!E.pending) return;
                                const t = ke.O.client.events.mouse.up(() => {
                                        A(mt);
                                    }),
                                    u = ke.O.client.events.mouse.move(([t]) => {
                                        Et(e, (u) => {
                                            const r = c.current,
                                                a = d.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, n, A]);
                        const b = Le((t) => e.applyStepTo(t), m, [e]),
                            D = b[0],
                            B = b[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const f = (e) => {
                            e.target.classList.contains(ct) || (0, Te.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(nt, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(at, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ct) ||
                                        0 !== e.button ||
                                        ((0, Te.G)('play'), D(Re.Next));
                                },
                                ref: a,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(it, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, Te.G)('play'), t.target === n))
                                                A({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Et(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Re.Prev : Re.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: d, className: l()(st, t.thumb) }),
                                i().createElement('div', { className: l()(lt, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(ot, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ct) ||
                                        0 !== e.button ||
                                        ((0, Te.G)('play'), D(Re.Prev));
                                },
                                onMouseUp: B,
                                ref: s,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Ct = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ft = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(Ct.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Ct.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Ct.area, r) },
                                i().createElement(pt, { className: a, classNames: s, api: _ }, e),
                            ),
                            i().createElement(At, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    pt = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, o.useEffect)(() => (0, v.v)(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Ct.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Ct.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                pt.Default = Ft;
                const bt = { Vertical: r, Horizontal: n };
                var Dt = u(5521),
                    Bt = u(9916);
                const vt = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ft(e = Dt.n.NONE, t = vt, u = !1, n = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== Dt.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && ke.O.view.isEventHandled()) return;
                                ke.O.view.setEventHandled(), t(r), u && r.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                const ht = {
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
                    wt = [
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
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                class kt extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, Te.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, Te.G)(this.props.soundClick);
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
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, wt)),
                            E = l()(ht.base, ht[`base__${a}`], ht[`base__${r}`], null == o ? void 0 : o.base),
                            g = l()(ht.icon, ht[`icon__${a}`], ht[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = l()(ht.glow, null == o ? void 0 : o.glow),
                            C = l()(ht.caption, ht[`caption__${a}`], null == o ? void 0 : o.caption),
                            F = l()(ht.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            yt(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== a && i().createElement('div', { className: ht.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: C }, t),
                            n && i().createElement('div', { className: F }, n),
                        );
                    }
                }
                kt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const St = ({ onClick: e }) =>
                        i().createElement(kt, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    xt = 'common_close_0e',
                    Lt = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        i().createElement(kt, {
                            onClick: e,
                            classNames: { base: xt },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    Tt = 'TopButtons_base_ef',
                    It = 'TopButtons_leftButtons_9e',
                    Nt = 'TopButtons_rightButtons_33',
                    Mt = i().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: u,
                        onAboutClick: n,
                        onCloseClick: r,
                        className: a,
                        classNames: o,
                    }) {
                        return i().createElement(
                            'div',
                            { className: l()(Tt, a) },
                            e &&
                                u &&
                                i().createElement(
                                    'div',
                                    { className: l()(It, null == o ? void 0 : o.leftButtons) },
                                    i().createElement(kt, { onClick: u, caption: e, type: 'back' }),
                                ),
                            i().createElement(
                                'div',
                                { className: l()(Nt, null == o ? void 0 : o.rightButtons) },
                                n && i().createElement(St, { onClick: n }),
                                r && i().createElement(Lt, { onClick: r, label: t }),
                            ),
                        );
                    });
                class Rt extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Bt.B3.GOLD;
                        else e = Bt.B3.INTEGRAL;
                        const t = Bt.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Rt.defaultProps = { format: 'integral' };
                const Ot = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
                let Pt, Wt, Ht;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Pt || (Pt = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Wt || (Wt = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Ht || (Ht = {}));
                const jt = (0, o.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: u,
                        type: n,
                        value: r,
                        discountValue: a,
                        showPlus: o,
                        isEnough: s = !0,
                        stockBackgroundName: c = Ht.Red,
                        className: d,
                        classNames: m,
                    }) =>
                        i().createElement(
                            'span',
                            { className: l()(Ot.base, Ot[`base__${u}`], d) },
                            i().createElement(
                                'span',
                                {
                                    className: l()(
                                        Ot.value,
                                        Ot[`value__${n}`],
                                        !s && Ot.value__notEnough,
                                        null == m ? void 0 : m.value,
                                    ),
                                },
                                o && r > 0 && '+',
                                i().createElement(Rt, { value: r, format: n === Wt.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: l()(Ot.icon, Ot[`icon__${n}-${u}`], null == m ? void 0 : m.icon),
                            }),
                            e &&
                                i().createElement(
                                    'span',
                                    {
                                        className: l()(
                                            Ot.stock,
                                            a && Ot.stock__indent,
                                            t && Ot.stock__interactive,
                                            null == m ? void 0 : m.stock,
                                        ),
                                    },
                                    i().createElement('span', {
                                        className: Ot.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                    }),
                                    Boolean(a) && a,
                                ),
                        ),
                );
                var zt = u(8018);
                const Ut = {
                        base: 'BaseCard_base_79',
                        base__disabled: 'BaseCard_base__disabled_3c',
                        base__selected: 'BaseCard_base__selected_a3',
                        icon: 'BaseCard_icon_0c',
                        description: 'BaseCard_description_79',
                        additionalDescription: 'BaseCard_additionalDescription_2e',
                        activeLayer: 'BaseCard_activeLayer_2a',
                        activeLayer__visible: 'BaseCard_activeLayer__visible_50',
                        iconContainer: 'BaseCard_iconContainer_76',
                        title: 'BaseCard_title_79',
                        bottomContainer: 'BaseCard_bottomContainer_4f',
                        bottomGlow: 'BaseCard_bottomGlow_ed',
                        bottomOption: 'BaseCard_bottomOption_61',
                        bottomOption__fullWidth: 'BaseCard_bottomOption__fullWidth_20',
                        errorIcon: 'BaseCard_errorIcon_07',
                    },
                    $t = (function () {
                        let e, t;
                        const u = function (u, n) {
                            e && clearTimeout(e),
                                (t = u),
                                (e = setTimeout(function () {
                                    t.call(this), clearTimeout(e);
                                }, n));
                        };
                        return (
                            (u.cancel = function () {
                                e && clearTimeout(e);
                            }),
                            u
                        );
                    })();
                let Gt;
                !(function (e) {
                    (e.None = 'none'), (e.Disabled = 'disabled'), (e.Selected = 'selected');
                })(Gt || (Gt = {}));
                let Vt = !1;
                const Zt = (0, o.memo)(function ({
                        icon: e,
                        title: t,
                        description: u,
                        additionalDescription: n,
                        headerContent: r,
                        bottomContent: a,
                        cardState: o = Gt.None,
                        hasError: s = !1,
                        hoverSound: c = '',
                        withFullWidthOption: d = !1,
                        onCardMouseEnter: m,
                        onCardSelect: _,
                    }) {
                        const E = we().controls,
                            g = o === Gt.Disabled,
                            A = o === Gt.Selected;
                        return i().createElement(
                            'div',
                            {
                                className: l()(g ? Ut.base__disabled : Ut.base, Ut[`base__${o}`]),
                                onMouseEnter: () => {
                                    g ||
                                        A ||
                                        (c ? (0, Te.G)(c) : Te.$.playHighlight(),
                                        (0, Te.G)(zt.gO.SHOP_INFO),
                                        $t(() => {
                                            (Vt = !0), m();
                                        }, 300));
                                },
                                onMouseLeave: () => {
                                    g ||
                                        A ||
                                        $t(() => {
                                            Vt && (E.onCardMouseLeave(), (Vt = !1));
                                        }, 100);
                                },
                                onClick: () => {
                                    g || ($t.cancel(), Te.$.playClick(), !A && (Vt = !0), _());
                                },
                            },
                            i().createElement(
                                'div',
                                { className: l()(Ut.activeLayer, A && Ut.activeLayer__visible) },
                                i().createElement(
                                    'div',
                                    {
                                        className: l()(Ut.bottomOption, d && Ut.bottomOption__fullWidth),
                                        onClick: (e) => e.stopPropagation(),
                                    },
                                    a,
                                ),
                            ),
                            r,
                            i().createElement(
                                'div',
                                { className: Ut.iconContainer },
                                i().createElement('div', {
                                    className: Ut.icon,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.s180x135.$dyn(e)})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Ut.description },
                                i().createElement('div', { className: Ut.title }, t),
                                u,
                                i().createElement('div', { className: Ut.additionalDescription }, n),
                            ),
                            (A || s) &&
                                i().createElement(
                                    'div',
                                    { className: Ut.bottomContainer },
                                    i().createElement('div', { className: Ut.bottomGlow }),
                                    s && i().createElement('div', { className: Ut.errorIcon }),
                                ),
                        );
                    }),
                    Xt = 'BookCard_vehicleName_e6',
                    qt = 'CardBottomContent_base_eb',
                    Yt = 'CardBottomContent_optionCounterBtn_48',
                    Kt = 'CardBottomContent_optionCounterValue_41',
                    Qt = 'CardBottomContent_optionCounterBtn__plus_47',
                    Jt = 'CardBottomContent_optionCounterBtn__plusDisabled_ad',
                    eu = 'CardBottomContent_optionCounterBtn__minus_0f',
                    tu = ({ canAddBook: e, selectedCount: t, handleBookSubtract: u, handleBookAdded: n }) =>
                        i().createElement(
                            'div',
                            { className: qt },
                            i().createElement('div', { className: l()(Yt, eu), onClick: u }),
                            i().createElement('div', { className: Kt }, t),
                            i().createElement('div', { className: l()(Yt, e ? Qt : Jt), onClick: n }),
                        );
                var uu = u(3457);
                const nu = 'CardHeaderContent_buySection_4a',
                    ru = 'CardHeaderContent_btnBuyHover_8b',
                    au = 'CardHeaderContent_btnBuyHover__hover_4f',
                    ou = 'CardHeaderContent_btnBuy_bb',
                    iu = 'CardHeaderContent_booksCounter_6c',
                    su = 'CardHeaderContent_booksCounterIcon_1b',
                    lu = 'CardHeaderContent_booksCounterValue_49',
                    cu = ({ withBuyBtn: e, amount: t, handleBuyClick: u }) => {
                        const n = (0, m.GS)().mediaSize,
                            r = (0, o.useState)(!1),
                            a = r[0],
                            s = r[1],
                            c = () => s(!a);
                        return i().createElement(
                            i().Fragment,
                            null,
                            e &&
                                i().createElement(
                                    'div',
                                    { className: nu },
                                    i().createElement('div', { className: l()(ru, a && au) }),
                                    i().createElement(
                                        S.i,
                                        { body: R.strings.crew_books.tooltip.buyManual() },
                                        i().createElement(
                                            uu.u5,
                                            {
                                                size: n === m.cJ.Large ? uu.qE.small : uu.qE.extraSmall,
                                                mixClass: ou,
                                                onClick: u,
                                                onMouseEnter: c,
                                                onMouseLeave: c,
                                            },
                                            R.strings.crew_books.buttons.buy(),
                                        ),
                                    ),
                                ),
                            i().createElement(
                                'div',
                                { className: iu },
                                i().createElement('div', { className: su }),
                                i().createElement('div', { className: lu }, t),
                            ),
                        );
                    },
                    du = R.strings.crew_books.tooltip,
                    mu = (0, f.Pi)(({ bookIndex: e }) => {
                        var t;
                        const u = we(),
                            n = u.model,
                            r = u.controls,
                            a = null == (t = R.strings.menu.nations.$dyn(n.nationName.get())) ? void 0 : t.toString(),
                            o = n.computes.getBook(e),
                            s = o.intCD,
                            l = o.icon,
                            c = o.title,
                            d = o.mainText,
                            m = o.additionalText,
                            _ = o.bookAddedXp,
                            E = o.availableCount,
                            g = o.selectedCount,
                            A = o.isEligibleForBuy,
                            C = o.hasError,
                            F = 0 === E,
                            p = g < E,
                            b = ((e, t, u) => (e || t ? Gt.Disabled : u > 0 ? Gt.Selected : Gt.None))(F, C, g),
                            D = b === Gt.Selected;
                        return i().createElement(
                            S.i,
                            { isEnabled: F, body: A ? du.outOfStockCanBuy() : du.outOfStock() },
                            i().createElement(
                                'div',
                                null,
                                i().createElement(Zt, {
                                    icon: l,
                                    hasError: C,
                                    cardState: b,
                                    title: i().createElement(Ee, { text: c, binding: { nation: a } }),
                                    description: i().createElement(Ee, {
                                        text: d,
                                        binding: {
                                            xp: i().createElement(jt, { type: Wt.xp, size: Pt.small, value: _ }),
                                        },
                                    }),
                                    additionalDescription: i().createElement(Ee, {
                                        text: m,
                                        binding: {
                                            nation: a,
                                            vehicleName: i().createElement(
                                                'div',
                                                { className: Xt },
                                                n.vehicleName.get(),
                                            ),
                                        },
                                    }),
                                    headerContent: i().createElement(cu, {
                                        withBuyBtn: A,
                                        amount: E,
                                        handleBuyClick: (e) => {
                                            e.stopPropagation(), r.onBuyBook(s);
                                        },
                                    }),
                                    bottomContent: i().createElement(tu, {
                                        canAddBook: p,
                                        selectedCount: g,
                                        handleBookAdded: () => {
                                            p && (Te.$.playClick(), r.onBookSelected(s, g + 1));
                                        },
                                        handleBookSubtract: () => {
                                            Te.$.playClick(), r.onBookSelected(s, g - 1);
                                        },
                                    }),
                                    onCardMouseEnter: () => r.onBookMouseEnter(s),
                                    onCardSelect: () => {
                                        const e = D ? 0 : 1;
                                        r.onBookSelected(s, e);
                                    },
                                }),
                            ),
                        );
                    });
                u(3368);
                const _u = ['value', 'className', 'autoFocus', 'onKeyDown'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                let gu = !0;
                const Au = (0, o.memo)(function (e) {
                        let t,
                            u = e.value,
                            n = e.className,
                            r = e.autoFocus,
                            a = e.onKeyDown,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, _u);
                        return i().createElement(
                            'input',
                            Eu(
                                {
                                    type: 'text',
                                    ref: (e) => {
                                        e &&
                                            ((t = e),
                                            r && e.focus(),
                                            gu && e.setSelectionRange(e.value.length, e.value.length));
                                    },
                                    className: n,
                                    value: u,
                                    onKeyDown: (e) => {
                                        const u = e.currentTarget,
                                            n = u.value.length,
                                            o = u.selectionStart || 0;
                                        (gu = o === n && e.which !== Dt.n.DELETE),
                                            (e.which !== Dt.n.DELETE && e.which !== Dt.n.BACKSPACE) ||
                                                1 !== n ||
                                                setTimeout(() => {
                                                    u.setSelectionRange(n, n);
                                                }),
                                            e.which === Dt.n.ESCAPE && t && r && t.blur(),
                                            null == a || a(e);
                                    },
                                },
                                o,
                            ),
                        );
                    }),
                    Cu = 'ExperienceStepper_base_ba',
                    Fu = 'ExperienceStepper_base__focused_f9',
                    pu = 'ExperienceStepper_currency_62',
                    bu = 'ExperienceStepper_inputWrapper_4b',
                    Du = 'ExperienceStepper_input_3b',
                    Bu = 'ExperienceStepper_currencyIcon_e8',
                    vu = 'ExperienceStepper_controls_15',
                    fu = 'ExperienceStepper_btn_00',
                    hu = 'ExperienceStepper_btnIncrement_fe',
                    wu = 'ExperienceStepper_btnIncrement__disabled_b8',
                    yu = 'ExperienceStepper_btnDecrement_fb',
                    ku = 'ExperienceStepper_btnDecrement__disabled_3e',
                    Su = 'perk',
                    xu = 'percent',
                    Lu = 'play',
                    Tu = /\d+/,
                    Iu = () => (0, Te.G)('highlight'),
                    Nu = ({ value: e, maxValue: t, isActive: u }) => {
                        const n = we().controls,
                            r = e < t,
                            a = e > 1,
                            s = (0, o.useRef)(null);
                        return i().createElement(
                            x.u,
                            { contentId: R.views.lobby.crew.tooltips.ExperienceStepperTooltip('resId') },
                            i().createElement(
                                'div',
                                { ref: s, className: Cu },
                                i().createElement(
                                    'div',
                                    { className: pu },
                                    i().createElement(
                                        'div',
                                        { className: bu },
                                        i().createElement(Au, {
                                            value: e,
                                            autoFocus: u,
                                            className: Du,
                                            onBlur: () => {
                                                var e;
                                                return null == (e = s.current) ? void 0 : e.classList.remove(Fu);
                                            },
                                            onFocus: () => {
                                                var e;
                                                return u && (null == (e = s.current) ? void 0 : e.classList.add(Fu));
                                            },
                                            onKeyDown: (e) => {
                                                let t,
                                                    u = 0;
                                                (t =
                                                    e.ctrlKey || e.which === Dt.n.PAGE_UP || e.which === Dt.n.PAGE_DOWN
                                                        ? Su
                                                        : xu),
                                                    (e.which !== Dt.n.ARROW_UP && e.which !== Dt.n.PAGE_UP) || !r
                                                        ? (e.which !== Dt.n.ARROW_DOWN && e.which !== Dt.n.PAGE_DOWN) ||
                                                          !a ||
                                                          (u = -1)
                                                        : (u = 1),
                                                    t && 0 !== u && n.onFreeXpUpdated(t, u);
                                            },
                                            onChange: (e) => {
                                                var u;
                                                let r = Number(
                                                    null == (u = Tu.exec(e.currentTarget.value)) ? void 0 : u[0],
                                                );
                                                !Number.isInteger(r) && n.onFreeXpManualInput(1),
                                                    r > t ? (r = t) : r < 1 && (r = 1),
                                                    n.onFreeXpManualInput(r);
                                            },
                                            onWheel: (e) => {
                                                e.deltaY > 0 ? n.onFreeXpUpdated(xu, 1) : n.onFreeXpUpdated(xu, -1);
                                            },
                                        }),
                                    ),
                                    i().createElement('div', { className: Bu }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: vu },
                                    i().createElement('div', {
                                        className: l()(fu, hu, !r && wu),
                                        onMouseEnter: Iu,
                                        onClick: (e) =>
                                            r &&
                                            (({ ctrlKey: e }) => {
                                                (0, Te.G)(Lu), n.onFreeXpUpdated(e ? Su : xu, 1);
                                            })(e),
                                    }),
                                    i().createElement('div', {
                                        className: l()(fu, yu, !a && ku),
                                        onMouseEnter: Iu,
                                        onClick: (e) =>
                                            a &&
                                            (({ ctrlKey: e }) => {
                                                (0, Te.G)(Lu), n.onFreeXpUpdated(e ? Su : xu, -1);
                                            })(e),
                                    }),
                                ),
                            ),
                        );
                    },
                    Mu = 'FreeXpCard_discount_48',
                    Ru = 'FreeXpCard_discountValue_ca',
                    Ou = 'FreeXpCard_bottomStepper_4a',
                    Pu = (0, f.Pi)(() => {
                        const e = we(),
                            t = e.model,
                            u = e.controls,
                            n = t.freeXpData.get(),
                            r = n.playerXp,
                            a = n.discountSize,
                            o = n.currentXpValue,
                            s = n.exchangeRate,
                            l = n.isEligibleToApplyFreeXp,
                            c = n.hasError,
                            d = a > 1,
                            m = ((e, t, u, n) => (e || u < 1 || t ? Gt.Disabled : n > 0 ? Gt.Selected : Gt.None))(
                                l,
                                c,
                                r,
                                o,
                            ),
                            _ = m === Gt.Selected;
                        return i().createElement(Zt, {
                            withFullWidthOption: !0,
                            icon: 'freeXp',
                            hasError: c,
                            cardState: m,
                            title: R.strings.crew_books.card.freeExp.title(),
                            description: R.strings.crew_books.card.freeExp.mainText(),
                            additionalDescription: i().createElement(
                                x.u,
                                {
                                    contentId: R.views.lobby.crew.tooltips.QuickTrainingDiscountTooltip('resId'),
                                    isEnabled: d,
                                },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(Ee, {
                                        text: R.strings.crew_books.card.freeExp.additionalText(),
                                        binding: {
                                            freeXp: i().createElement(jt, {
                                                type: Wt.freeXP,
                                                size: Pt.small,
                                                value: 1,
                                            }),
                                            xp: i().createElement(jt, {
                                                type: Wt.xp,
                                                size: Pt.small,
                                                value: s,
                                                isDiscount: d,
                                            }),
                                        },
                                    }),
                                ),
                            ),
                            headerContent: d
                                ? i().createElement(
                                      'div',
                                      { className: Mu },
                                      i().createElement(Ee, {
                                          text: R.strings.crew_books.card.freeExp.discountValue(),
                                          binding: { discount: a },
                                          classMix: Ru,
                                      }),
                                  )
                                : null,
                            bottomContent: i().createElement(
                                'div',
                                { className: Ou },
                                i().createElement(Nu, { value: o, maxValue: r, isActive: _ }),
                            ),
                            onCardSelect: () => u.onFreeXpSelected(!_),
                            onCardMouseEnter: u.onFreeXpMouseEnter,
                            hoverSound: zt.gO.CREW_FREEXP_HIGHLIGHT,
                        });
                    }),
                    Wu = 'FormatText_base_d0',
                    Hu = ({
                        binding: e,
                        text: t = '',
                        classMix: u,
                        alignment: n = j.v2.left,
                        formatWithBrackets: r,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const a = r && e ? (0, j.WU)(t, e) : t;
                        return i().createElement(
                            o.Fragment,
                            null,
                            a.split('\n').map((t, r) =>
                                i().createElement(
                                    'div',
                                    { className: l()(Wu, u), key: `${t}-${r}` },
                                    (0, j.Uw)(t, n, e).map((e, t) =>
                                        i().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    ju = 'SectionFooter_base_82',
                    zu = 'SectionFooter_base__visible_e5',
                    Uu = 'SectionFooter_labelContainer_68',
                    $u = 'SectionFooter_confirmLabel_53',
                    Gu = 'SectionFooter_confirmLabelMemberName_23',
                    Vu = 'SectionFooter_confirmBtn_5d',
                    Zu = (0, f.Pi)(() => {
                        const e = (0, m.GS)().mediaSize,
                            t = we(),
                            u = t.model,
                            n = t.controls,
                            r = u.learningData.get(),
                            a = u.computes.hasFreeXpSelected(),
                            o = u.computes.hasSelectedBooks(),
                            s = e < m.cJ.Medium ? Pt.small : Pt.big;
                        return i().createElement(
                            'div',
                            { className: l()(ju, (o || a) && zu) },
                            i().createElement(
                                'div',
                                { className: Uu },
                                o &&
                                    i().createElement(Hu, {
                                        classMix: $u,
                                        text:
                                            e >= m.cJ.Small && a
                                                ? R.strings.crew_books.confirm.crewLabelSeparated()
                                                : R.strings.crew_books.confirm.crewLabel(),
                                        binding: {
                                            xpValue: i().createElement(jt, {
                                                type: Wt.xp,
                                                size: s,
                                                value: r.crewXpAmount,
                                                isEnough: !0,
                                            }),
                                        },
                                    }),
                                a &&
                                    i().createElement(Hu, {
                                        classMix: $u,
                                        text: o
                                            ? R.strings.crew_books.confirm.personalExtraLabel()
                                            : R.strings.crew_books.confirm.personalLabel(),
                                        binding: {
                                            memberName: i().createElement(
                                                'div',
                                                { className: Gu },
                                                u.tankmanName.get(),
                                            ),
                                            xpValue: i().createElement(jt, {
                                                type: Wt.xp,
                                                size: s,
                                                value: r.personalXpAmount,
                                                isEnough: !0,
                                            }),
                                        },
                                    }),
                            ),
                            i().createElement(
                                uu.u5,
                                { size: uu.qE.medium, mixClass: Vu, onClick: n.onLearn },
                                R.strings.crew_books.buttons.learn(),
                            ),
                            i().createElement(
                                uu.u5,
                                { type: uu.L$.secondary, size: uu.qE.medium, mixClass: Vu, onClick: n.onCancel },
                                R.strings.crew_books.buttons.cancel(),
                            ),
                        );
                    }),
                    Xu = 'CrewBooksSection_base_33',
                    qu = 'CrewBooksSection_base__centered_be',
                    Yu = 'CrewBooksSection_topButtons_2a',
                    Ku = 'CrewBooksSection_mainContentWrapper_2a',
                    Qu = 'CrewBooksSection_mainContent_91',
                    Ju = 'CrewBooksSection_title_fe',
                    en = 'CrewBooksSection_divider_f1',
                    tn = 'CrewBooksSection_divider__bottom_d6',
                    un = 'CrewBooksSection_cards_7f',
                    nn = 'CrewBooksSection_cardsScrollContent_8f',
                    rn = 'CrewBooksSection_cardsScrollBar_c4',
                    an = (0, f.Pi)(() => {
                        const e = (0, m.GS)().remScreenWidth,
                            t = ut(),
                            u = we(),
                            n = u.model,
                            r = u.controls;
                        var a;
                        return (
                            (a = () => {
                                n.computes.hasFreeXpSelected() || n.computes.hasSelectedBooks()
                                    ? r.cancelWithEsc()
                                    : r.closeWithEsc();
                            }),
                            ft(Dt.n.ESCAPE, a),
                            i().createElement(
                                'div',
                                { className: l()(Xu, e >= 2100 && qu) },
                                i().createElement(Mt, {
                                    onAboutClick: r.onAbout,
                                    onCloseClick: r.onClose,
                                    onBackClick: r.back,
                                    backButtonLabel: n.backButtonLabel.get(),
                                    className: Yu,
                                }),
                                i().createElement(
                                    'div',
                                    { className: Ku },
                                    i().createElement(
                                        'div',
                                        { className: Qu },
                                        i().createElement('div', { className: Ju }, R.strings.crew_books.page.title()),
                                        i().createElement('div', { className: en }),
                                        i().createElement(
                                            bt.Vertical.Area.Default,
                                            { barClassNames: { base: rn }, scrollClassNames: { content: nn }, api: t },
                                            i().createElement(
                                                'div',
                                                { className: un },
                                                i().createElement(Pu, null),
                                                n.booksList
                                                    .get()
                                                    .map((e, t) => i().createElement(mu, { key: t, bookIndex: t })),
                                            ),
                                        ),
                                        i().createElement('div', { className: l()(en, tn) }),
                                        i().createElement(Zu, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    on = 'QuickTrainingViewApp_base_b9',
                    sn = 'QuickTrainingViewApp_flagWrapper_b7',
                    ln = 'QuickTrainingViewApp_flag_54',
                    cn = 'QuickTrainingViewApp_leftPanelSection_7e',
                    dn = 'QuickTrainingViewApp_pageTips_41',
                    mn = 'QuickTrainingViewApp_conversionBanner_30',
                    _n = 'QuickTrainingViewApp_conversionBanner__visible_46';
                function En(e, t, u, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, r);
                }
                const gn = (0, f.Pi)(() => {
                    const e = new WeakMap(),
                        t = (0, h.useSpringRef)(),
                        u = we(),
                        n = u.model,
                        r = u.controls,
                        a = n.computes.getTips(),
                        s = (0, h.useTransition)(a, {
                            ref: t,
                            from: { opacity: 0, height: 0, marginBottom: 8 },
                            keys: (e) => e.id,
                            enter: (t) =>
                                (function () {
                                    var u,
                                        n =
                                            ((u = function* (u) {
                                                return yield u({
                                                    opacity: 1,
                                                    height: e.get(t).scrollHeight,
                                                    marginBottom: 8,
                                                });
                                            }),
                                            function () {
                                                var e = this,
                                                    t = arguments;
                                                return new Promise(function (n, r) {
                                                    var a = u.apply(e, t);
                                                    function o(e) {
                                                        En(a, n, r, o, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        En(a, n, r, o, i, 'throw', e);
                                                    }
                                                    o(void 0);
                                                });
                                            });
                                    return function (e) {
                                        return n.apply(this, arguments);
                                    };
                                })(),
                            leave: { opacity: 0, height: 0, marginBottom: 0 },
                            config: { duration: 150, easing: w.to },
                        });
                    return (
                        (0, o.useEffect)(() =>
                            (0, v.v)(() => {
                                t.start();
                            }),
                        ),
                        i().createElement(
                            'div',
                            { className: on },
                            i().createElement(
                                'div',
                                { className: sn },
                                i().createElement('div', {
                                    className: ln,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.crew.flags.${n.nationName.get()})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: cn },
                                i().createElement(pe.O, null),
                                i().createElement(
                                    'div',
                                    { className: dn },
                                    s((t, u) =>
                                        i().createElement(
                                            h.animated.div,
                                            { style: t },
                                            i().createElement(Ce, {
                                                ref: (t) => t && e.set(u, t),
                                                id: u.id,
                                                text: u.text,
                                                type: u.type,
                                                onClose: r.onTipClose,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            i().createElement(an, null),
                            n.isConversionBannerVisible.get() &&
                                i().createElement(Fe.y, {
                                    className: l()(mn, n.computes.isConversionBannerShowedInsteadOfButtons() && _n),
                                }),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    B().render(
                        i().createElement(he, null, i().createElement(b, null, i().createElement(gn, null))),
                        document.getElementById('root'),
                    );
                });
            },
            5563: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7078),
                    o = u(2603),
                    i = u(771),
                    s = u(3649),
                    l = u(9916),
                    c = u(6179),
                    d = u.n(c),
                    m = u(130);
                const _ = (0, c.memo)(({ efficiencyValue: e, tankmanID: t = i.y$, className: u }) => {
                    const n = e === i.sU,
                        c = n ? { tooltipId: o.M4 } : { tooltipId: o.Br, tankmanID: t };
                    return d().createElement(
                        a.t,
                        { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: c, isEnabled: t !== i.y$ },
                        d().createElement(
                            'div',
                            { className: r()(m.Z.base, u) },
                            n
                                ? d().createElement('div', { className: m.Z.icon })
                                : d().createElement(
                                      'div',
                                      { className: r()(m.Z.percent, e === i.yb && m.Z.percent__full) },
                                      (0, s.dL)(l.Z5.getNumberFormat(100 * e, l.B3.INTEGRAL)),
                                  ),
                        ),
                    );
                });
            },
            2768: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => s, y: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    o = u.n(a),
                    i = u(4458);
                let s;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(s || (s = {}));
                const l = o().memo(function ({ iconName: e, size: t = s.c24x24, className: u }) {
                    var n;
                    return o().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e)})`,
                        },
                        className: r()(i.Z.base, i.Z[`base__${t}`], u),
                    });
                });
            },
            7077: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => c, U: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    o = u(6179),
                    i = u.n(o),
                    s = u(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: t = l.c100x60, classMix: u, isSkin: n = !1 }) => {
                    const c = (0, o.useMemo)(() => {
                        try {
                            let u = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            n && (u = u.$dyn('crewSkins'));
                            const r = u.$dyn((0, a.BN)(e));
                            if (!r) throw Error;
                            return { backgroundImage: `url(${r})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, n]);
                    return i().createElement('div', { style: c, className: r()(s.Z.base, s.Z[`base__${t}`], u) });
                };
            },
            8485: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => d, d: () => g });
                var n = u(6483),
                    r = u.n(n),
                    a = u(8271),
                    o = u(771),
                    i = u(6179),
                    s = u.n(i),
                    l = u(2768),
                    c = u(9426);
                let d;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(d || (d = {}));
                const m = { [d.Big]: l.F.c22x22, [d.Small]: l.F.c14x14 };
                var _;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(_ || (_ = {}));
                const E = (e, t, u) =>
                        e === a.W.Possible || e === a.W.New
                            ? _.LightYellow
                            : e === a.W.Irrelevant
                              ? _.Grey
                              : t === o.sU
                                ? e === a.W.Learning
                                    ? _.Yellow
                                    : _.Grey
                                : t < o.yb
                                  ? u
                                      ? _.Grey
                                      : _.Red
                                  : e === a.W.Learning
                                    ? _.Yellow
                                    : _.Grey,
                    g = s().memo(function ({
                        icon: e,
                        type: t,
                        size: u,
                        efficiency: n = o.yb,
                        hasInstruction: i = !1,
                    }) {
                        const d = (!i && n === o.sU) || t === a.W.Irrelevant;
                        return s().createElement(
                            'div',
                            { className: r()(c.Z.base, c.Z[`base__${u}`]) },
                            s().createElement('div', {
                                className: r()(c.Z.background, c.Z[`background__${E(t, n, i)}`]),
                            }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: c.Z.container },
                                    s().createElement(l.y, {
                                        iconName: e,
                                        size: m[u],
                                        className: r()(d && c.Z.disabledIcon),
                                    }),
                                    d && s().createElement('div', { className: c.Z.disabled }),
                                ),
                        );
                    });
            },
            9631: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3457),
                    o = u(2106),
                    i = u(9987),
                    s = u(6179),
                    l = u.n(s),
                    c = u(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        u = e.counter,
                        n = e.className,
                        s = e.children,
                        _ = e.type,
                        E = void 0 === _ ? o.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? o.q.small : g,
                        C = e.hasIndicator,
                        F = void 0 === C || C,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: r()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(a.u5, m({ type: E, size: A, mixClass: c.Z.button }, p), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        F && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(i.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { BH: () => o, Fs: () => i, ei: () => n, qb: () => r, to: () => a });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    a = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2),
                    o = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            4585: (e, t, u) => {
                'use strict';
                u.d(t, { o: () => a });
                var n = u(5332),
                    r = u(6179);
                const a = (e, t, u = 150) => {
                    const a = (0, r.useState)(e),
                        o = a[0],
                        i = a[1],
                        s = (0, n.N)((e) => i(e), t, u);
                    return {
                        isHovered: o,
                        handleMouseEnter: (0, r.useCallback)(() => s(!0), [s]),
                        handleMouseLeave: (0, r.useCallback)(() => s(!1), [s]),
                    };
                };
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => o, H$: () => i, Y4: () => s, gO: () => a, wP: () => r });
                var n = u(771);
                u(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let a;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(a || (a = {}));
                const o = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
                const s = (e) => (e === n.sU ? i.Untrained : e < n.yb ? i.Low : i.Normal);
            },
            536: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => z });
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    o = u.n(a),
                    i = u(3457);
                let s, l;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(s || (s = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(l || (l = {}));
                var c = u(7044),
                    d = u(2344),
                    m = u(3138);
                var _ = u(3649);
                const E = 'Countdown_base_fe',
                    g = 'Countdown_icon_8b',
                    A = 'Countdown_description_8d',
                    C = (e) => e.toString().padStart(2, '0'),
                    F = R.images.gui.maps.icons.components.countdown,
                    p = (e, t) => {
                        const u = 2 === t ? F.big : F;
                        switch (e) {
                            case s.Timer:
                                return u.clock();
                            case s.Countdown:
                                return u.hourglass();
                            case s.Cooldown:
                                return u.lock();
                        }
                    },
                    b = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = s.Timer,
                            style: u = l.Description,
                            onTimeReached: a,
                            className: i = '',
                            classNames: F = {},
                        }) => {
                            const b = u !== l.Description ? 1 : void 0,
                                D = (0, d.au)(e, b),
                                B = (() => {
                                    const e = (0, n.useState)(m.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                u(m.O.view.getScale());
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
                                })();
                            a && a[D] && a[D]();
                            const v = ((e, t) => {
                                switch (t) {
                                    case l.Description:
                                        return (0, c.wB)(e);
                                    case l.Short:
                                        return `${C(e.minutes)}:${C(e.seconds)}`;
                                    case l.Long:
                                        return `${C(e.hours)}:${C(e.minutes)}:${C(e.seconds)}`;
                                    case l.Extended:
                                        return `${(0, _.WU)(R.strings.common.duration.days(), { days: e.days })} | ${C(e.hours)}:${C(e.minutes)}:${C(e.seconds)}`;
                                }
                            })((0, c.f8)(D), u);
                            return r().createElement(
                                'div',
                                { className: o()(E, i) },
                                t !== s.None &&
                                    r().createElement('div', {
                                        className: o()(g, F.icon),
                                        style: { backgroundImage: `url('${p(t, B)}')` },
                                    }),
                                r().createElement('div', { className: o()(A, F.text) }, v),
                            );
                        },
                    );
                var D = u(6373),
                    B = u(7727),
                    v = u(3403),
                    f = u(4585);
                const h = (0, u(3215).q)()(
                        ({ observableModel: e }) => Object.assign({}, e.primitives(['secondsLeft', 'isDisabled'])),
                        ({ externalModel: e }) => ({ startConversion: e.createCallbackNoArgs('onStartConversion') }),
                    ),
                    w = h[0],
                    y = h[1],
                    k = 'ConversionBannerWidgetApp_base_08',
                    S = 'ConversionBannerWidgetApp_base__disabled_79',
                    x = 'ConversionBannerWidgetApp_background_c7',
                    L = 'ConversionBannerWidgetApp_base__hovered_e9',
                    T = 'ConversionBannerWidgetApp_backgroundImage_96',
                    I = 'ConversionBannerWidgetApp_fullSize_7f',
                    N = 'ConversionBannerWidgetApp_button_fc',
                    M = 'ConversionBannerWidgetApp_buttonGlow_57',
                    O = 'ConversionBannerWidgetApp_buttonText_70',
                    P = 'ConversionBannerWidgetApp_text_63',
                    W = 'ConversionBannerWidgetApp_countdown_f9',
                    H = (0, v.Pi)(({ className: e }) => {
                        const t = y(),
                            u = t.model,
                            a = t.controls,
                            c = u.isDisabled.get(),
                            d = (0, f.o)(!1, [], 0),
                            m = d.isHovered,
                            _ = d.handleMouseEnter,
                            E = d.handleMouseLeave;
                        (0, n.useEffect)(() => {
                            m && !c && B.$.playHighlight();
                        }, [m, c]);
                        return r().createElement(
                            'div',
                            { className: o()(k, m && L, c && S, e), onMouseEnter: c ? void 0 : _, onMouseLeave: E },
                            r().createElement('div', { className: x }, r().createElement('div', { className: T })),
                            r().createElement('div', { className: P }, R.strings.crew.conversionBanner.infoText()),
                            r().createElement(b, {
                                className: W,
                                duration: u.secondsLeft.get(),
                                icon: s.Timer,
                                style: l.Extended,
                            }),
                            r().createElement('div', {
                                className: I,
                                onClick: () => {
                                    c || (B.$.playClick(), a.startConversion());
                                },
                            }),
                            r().createElement(
                                D.i,
                                {
                                    body: c
                                        ? R.strings.crew.conversionBanner.button.tooltip.disabled.body()
                                        : R.strings.crew.conversionBanner.button.tooltip.enabled.body(),
                                    header: c ? R.strings.crew.conversionBanner.button.tooltip.disabled.title() : '',
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        i.u5,
                                        { mixClass: N, disabled: c, onClick: a.startConversion },
                                        !c && r().createElement('div', { className: M }),
                                        r().createElement(
                                            'div',
                                            { className: O },
                                            R.strings.crew.conversionBanner.button.label(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    j = { rootId: R.views.lobby.crew.widgets.ConversionBannerWidget('resId') },
                    z = (0, n.memo)((e) => r().createElement(w, { options: j }, r().createElement(H, e)));
            },
            7321: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => Hu });
                var n = u(6179),
                    r = u.n(n),
                    a = u(3403),
                    o = u(3215),
                    i = u(4598),
                    s = u(9480),
                    l = u(3946),
                    c = u(4828);
                const d = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    m = (0, o.q)()(
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
                                u = (0, l.Om)(
                                    () =>
                                        s.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: s.UI(e.roles, i.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: s.UI(e.tankman.roles, i.yR),
                                                    skills: s.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: i.jv },
                                ),
                                n = (0, l.Om)(() => Boolean(s.sE(u(), (e) => -1 === e.tankman.tankmanID))),
                                r = (0, l.Om)(() => 1 === t.slots.get().length),
                                a = (0, l.Om)((e) => t.selectedSlotIdx.get() === e),
                                o = (0, l.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                m = (0, l.Om)((e) => {
                                    var t;
                                    return null == (t = s.U2(u(), e)) ? void 0 : t.tankman;
                                }),
                                _ = (0, l.Om)((e) => {
                                    var t;
                                    const n = null == (t = s.U2(u(), e)) ? void 0 : t.tankman;
                                    return n ? n.skills.length + n.newSkillsAmount + n.possibleSkillsAmount : 0;
                                }),
                                E = (0, l.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (u = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: d.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: u === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: d.includes(u),
                                            isPreviousLayoutQuickTraining:
                                                u === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                u === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: u === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, u;
                                }),
                                g = (0, l.Om)(() => {
                                    const e = E(),
                                        t = e.isCurrentLayoutHangar,
                                        u = e.isCurrentLayoutQuickTraining;
                                    return !r() && !t && !u;
                                }),
                                A = (0, l.Om)(() => !r() && t.buttonsBar.get().isVisible),
                                C = (0, l.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: u,
                                    isSlotSelected: a,
                                    isAnySlotSelected: o,
                                    getSlotTankman: m,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: g,
                                    isButtonBarVisible: A,
                                    getLayoutInfo: E,
                                    getUiLoggingParentScreen: C,
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
                    E = m[1];
                var g = u(6483),
                    A = u.n(g),
                    C = u(6373),
                    F = u(2056);
                let p;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(p || (p = {}));
                const b = 'ButtonsBar_base_9c',
                    D = 'ButtonsBar_button_d1',
                    B = 'ButtonsBar_button__crewOperaions_70',
                    v = 'ButtonsBar_button__crewBooks_b4',
                    f = 'ButtonsBar_button__toggle_64';
                var h = u(3457),
                    w = u(9987),
                    y = u(3649);
                const k = 'CrewBookButton_base_da',
                    S = 'CrewBookButton_button_ee',
                    x = 'CrewBookButton_icon_11',
                    L = 'CrewBookButton_discount_6b',
                    T = 'CrewBookButton_counter_5d',
                    I = (0, a.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E(),
                            n = u.model,
                            a = u.controls,
                            o = n.crewBooks.get(),
                            i = a.onCrewBooksClick,
                            s = o.isDisabled || t;
                        return r().createElement(
                            C.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, y.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: o.totalAmount,
                                }),
                            },
                            r().createElement(
                                'div',
                                { id: 'crew_book_button', className: A()(k, e) },
                                r().createElement(
                                    h.u5,
                                    { type: h.L$.primary, mixClass: S, disabled: s, onClick: i },
                                    r().createElement('div', { className: x }),
                                ),
                                !s &&
                                    '0' !== o.newAmount &&
                                    r().createElement(
                                        'div',
                                        { className: T },
                                        r().createElement(w.A, { value: o.newAmount }),
                                    ),
                                !s && o.hasDiscount && r().createElement('div', { className: L }),
                            ),
                        );
                    });
                var N = u(3616);
                const M = ['children'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const P = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, M);
                    return r().createElement(
                        N.Z,
                        O(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            u,
                        ),
                        t,
                    );
                };
                var W = u(4489);
                let H;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(H || (H = {}));
                var j = u(1943);
                const z = 'CrewOperationsButton_base_e3',
                    U = 'CrewOperationsButton_button_8e',
                    $ = 'CrewOperationsButton_icon_0c',
                    G = 'CrewOperationsButton_autoReturnIcon_f0',
                    V = (0, a.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = E().model,
                            n = ((e) => {
                                const t = (0, j.Jp)(c.D9);
                                return (u) => t({ action: c.eX.Click, parentScreen: e, item: u });
                            })(u.computes.getUiLoggingParentScreen()),
                            a = u.crewOperations.get();
                        return r().createElement(
                            'div',
                            { id: 'crew_operations_button', className: A()(z, e) },
                            r().createElement(
                                P,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => n(c.x3.CrewOperationsButton),
                                },
                                r().createElement(
                                    C.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            h.u5,
                                            { type: h.L$.primary, mixClass: U, disabled: t },
                                            r().createElement('div', { className: $ }),
                                        ),
                                        a.isAutoReturnOn && r().createElement('div', { className: G }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Z = u(9631);
                const X = 'CrewToggleButton_base_03',
                    q = 'CrewToggleButton_button_89',
                    Y = 'CrewToggleButton_iconContainer_f9',
                    K = 'CrewToggleButton_icon_a7';
                let Q;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(Q || (Q = {}));
                const J = (0, n.memo)(({ type: e, state: t, isDisabled: u, onClick: a, classMix: o }) => {
                        const i = (0, n.useMemo)(() => {
                            const u = t === p.Disabled ? p.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${u})`,
                            };
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: A()(X, o) },
                            r().createElement(
                                Z.C,
                                {
                                    type: h.L$.primary,
                                    isActive: t === p.On,
                                    disabled: u || t === p.Disabled,
                                    className: q,
                                    onClick: a,
                                },
                                r().createElement(
                                    'div',
                                    { className: Y },
                                    r().createElement('div', { className: K, style: i }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [p.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [p.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [p.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [p.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    te = (0, a.Pi)(({ isWidgetDisabled: e }) => {
                        const t = E(),
                            u = t.model,
                            n = t.controls,
                            a = u.acceleratedTraining.get(),
                            o = u.wotPlus.get(),
                            i = n.onAcceleratedTrainingClick,
                            s = n.onWotPlusClick,
                            l = ee[a.state];
                        return r().createElement(
                            'div',
                            { className: b },
                            r().createElement(V, { classMix: A()(D, B), isWidgetDisabled: e }),
                            r().createElement(I, { classMix: A()(D, v), isWidgetDisabled: e }),
                            a.state !== p.Hidden &&
                                r().createElement(
                                    C.i,
                                    { header: l.header(), body: l.body() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: Q.AcceleratedTraining,
                                            state: a.state,
                                            isDisabled: e || a.isDisabled,
                                            onClick: i,
                                            classMix: A()(D, f),
                                        }),
                                    ),
                                ),
                            o.state !== p.Hidden &&
                                r().createElement(
                                    F.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: Q.WotPlus,
                                            state: o.state,
                                            isDisabled: e || o.isDisabled,
                                            onClick: s,
                                            classMix: A()(D, f),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ue = 'CrewWidgetApp_base_cc',
                    ne = 'CrewWidgetApp_buttonsBar_e5',
                    re = 'CrewWidgetApp_slotsList_ee';
                var ae = u(7727),
                    oe = u(7030),
                    ie = u(8018),
                    se = u(7160);
                const le = 'BaseSlot_base_97',
                    ce = 'BaseSlot_base__hovered_61',
                    de = 'BaseSlot_base__inactive_7e',
                    me = 'BaseSlot_hoverGlow_de',
                    _e = 'BaseSlot_hoverGlow__visible_f4',
                    Ee = 'BaseSlot_selectedGlow_25',
                    ge = 'BaseSlot_selectedGlow__visible_2f',
                    Ae = 'BaseSlot_hover_e9',
                    Ce = 'BaseSlot_hover__visible_1f',
                    Fe = 'BaseSlot_disabled_67',
                    pe = ({
                        onClick: e,
                        children: t,
                        isSelected: u = !1,
                        isDisabled: a,
                        isEnabledForMouse: o,
                        isEmpty: i = !1,
                        layoutInfo: s,
                    }) => {
                        const l = (0, n.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = c && (!u || (!i && s.isCurrentLayoutMemberChange)),
                            _ = m && !i && !s.isCurrentLayoutHangar;
                        return r().createElement(
                            'div',
                            {
                                className: A()(le, (c || u) && !s.isCurrentLayoutHangar && ce, (u || !o) && de),
                                onClick: e,
                                onMouseEnter: () => {
                                    o && !u && (ae.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !s.isCurrentLayoutMemberChange && r().createElement('div', { className: A()(Ee, u && ge) }),
                            r().createElement('div', { className: A()(me, _ && _e) }),
                            r().createElement('div', { className: A()(Ae, m && Ce) }),
                            a && r().createElement('div', { className: Fe }),
                            t,
                        );
                    },
                    be = ({
                        startState: e,
                        endState: t,
                        layoutInfo: u,
                        isPaused: a,
                        children: o,
                        className: i,
                        isTankmanMode: s,
                    }) => {
                        const l = (0, oe.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: se.qb }, pause: a }),
                                [a],
                            )[0],
                            c = (0, n.useMemo)(
                                () =>
                                    u.isCurrentLayoutHangar || u.isCurrentLayoutQuickTraining || s
                                        ? e
                                        : (!u.isPreviousLayoutHangar && !u.isPreviousLayoutBarrack) || a
                                          ? t
                                          : l,
                                [u, a, l, e, t, s],
                            );
                        return r().createElement(oe.animated.div, { className: i, style: c }, o);
                    },
                    De = 'DogSlot_base_8f',
                    Be = 'DogSlot_icon_ba',
                    ve = 'DogSlot_container_63',
                    fe = 'DogSlot_roleAndName_c9',
                    he = 'DogSlot_role_5c',
                    we = 'DogSlot_name_9c',
                    ye = 'DogSlot_btnDetails_b7',
                    ke = { transform: 'translateX(0rem)' },
                    Se = (0, a.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const u = E(),
                            a = u.model,
                            o = u.controls,
                            i = a.nation.get(),
                            s = o.onDogMoreInfoClick,
                            l = (0, n.useCallback)(() => {
                                !e && (0, ae.G)(ie.gO.RUDY);
                            }, [e]),
                            c = (0, n.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && s();
                                },
                                [s, e],
                            ),
                            d = (0, oe.useSpring)(
                                () => ({
                                    from: ke,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: se.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(i);
                        return r().createElement(
                            C.i,
                            { header: m.header(), body: m.body() },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    pe,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    r().createElement(
                                        be,
                                        {
                                            startState: ke,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: De,
                                            isTankmanMode: !1,
                                        },
                                        r().createElement(oe.animated.div, { className: Be, style: d }),
                                        r().createElement(
                                            'div',
                                            { className: ve },
                                            r().createElement(
                                                'div',
                                                { className: fe },
                                                r().createElement('div', { className: he }),
                                                r().createElement(
                                                    'div',
                                                    { className: we },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(i).name(),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: ye },
                                                r().createElement(
                                                    h.u5,
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
                var xe = u(9916);
                const Le = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: r = 0,
                        args: a,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const s = (0, n.useCallback)(() => {
                                (0, xe.c9)(xe.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: a,
                                }),
                                    ae.$.playYes();
                            }, [a, t, u, r]),
                            l = (0, n.useCallback)(() => {
                                (0, xe.c9)(xe.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === H.RIGHT)(e) && s();
                                },
                                [i, s],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Te = ['children'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Ne = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Te);
                        return r().createElement(
                            Le,
                            Ie({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Me = 'ChangeCrewButton_base_0f',
                    Re = 'ChangeCrewButton_base__inactive_77',
                    Oe = 'ChangeCrewButton_normalState_07',
                    Pe = 'ChangeCrewButton_normalState__hide_db',
                    We = 'ChangeCrewButton_hoverState_68',
                    He = 'ChangeCrewButton_hoverState__show_89',
                    je = (0, a.Pi)(({ isSelected: e, isLocked: t, mainRole: u, isFemale: a }) => {
                        const o = E().model,
                            i = (0, n.useState)(!1),
                            s = i[0],
                            l = i[1],
                            d = (0, j.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: o.computes.getUiLoggingParentScreen(),
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
                                              (0, y.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, ie.Gc)(u, a, ie.wP.Objective),
                                              }),
                                          ],
                                [t, a, u],
                            ),
                            _ = m[0],
                            g = m[1];
                        return r().createElement(
                            C.i,
                            {
                                header: _,
                                body: g,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: A()(Me, (t || e) && Re),
                                    onMouseEnter: () => {
                                        d.onShow(), t || e || (ae.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        d.onHide(), l(!1);
                                    },
                                },
                                r().createElement('div', { className: A()(Oe, s && Pe) }),
                                r().createElement('div', { className: A()(We, (e || s) && He) }),
                            ),
                        );
                    }),
                    ze = 'CrewSlot_base_ac',
                    Ue = 'CrewSlot_changeCrew_02',
                    $e = 'CrewSlot_content_5b',
                    Ge = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ve = 'CrewSlot_warningHighlight_ff',
                    Ze = 'CrewSlot_selectHighlight_50',
                    Xe = 'CrewSlot_selectHighlightInTankmanMode_37';
                var qe = u(7077),
                    Ye = u(7078),
                    Ke = u(2603),
                    Qe = u(771);
                const Je = 'SpecializationAndName_base_ef',
                    et = 'SpecializationAndName_roleWrapper_87',
                    tt = 'SpecializationAndName_role_55',
                    ut = 'SpecializationAndName_role__withGap_35',
                    nt = 'SpecializationAndName_name_aa',
                    rt = ({ roles: e, tankmanID: t = Qe.y$, slotIdx: u, name: n }) =>
                        r().createElement(
                            'div',
                            { className: Je },
                            r().createElement(
                                Ye.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ke.rs, slotIdx: u, tankmanID: t },
                                },
                                r().createElement(
                                    'div',
                                    { className: et },
                                    s.UI(e, (e, t) =>
                                        r().createElement('div', {
                                            key: `role__${e}`,
                                            className: A()(tt, t > 0 && ut),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: nt }, n),
                        ),
                    at = 'EmptySlotContent_base_77',
                    ot = 'EmptySlotContent_tankmanIcon_07',
                    it = 'EmptySlotContent_icon_a8',
                    st = 'EmptySlotContent_specialization_1f',
                    lt = 'EmptySlotContent_specialization__disabled_3d',
                    ct = 'EmptySlotContent_vehicle_55',
                    dt = { transform: 'translateX(0rem)', opacity: 1 },
                    mt = { transform: 'translateX(-70rem)', opacity: 0 },
                    _t = (0, n.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: u,
                            vehicleType: a,
                            isDisabled: o,
                            isSelected: i,
                            slotIdx: l,
                            blinkStyle: c,
                            qtTankmanIconStyle: d,
                        }) => {
                            const m = (0, oe.useSpring)(
                                    () => ({
                                        from: dt,
                                        to: mt,
                                        config: { duration: 200, easing: se.ei },
                                        immediate: !0,
                                        pause: i,
                                    }),
                                    [i],
                                ),
                                _ = m[0],
                                E = m[1],
                                g = (0, n.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || E.start({ reset: !0, reverse: !0 });
                                }, [E, t]),
                                C = s.U2(e, 0) || '',
                                F = R.strings.crew_widget.vehicleWithName.$dyn((0, y.BN)(a)),
                                p = (0, y.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(C),
                                });
                            return r().createElement(
                                'div',
                                { className: at, onMouseEnter: g, onMouseLeave: g },
                                r().createElement(
                                    'div',
                                    { className: ot },
                                    r().createElement(
                                        oe.animated.div,
                                        { style: d },
                                        r().createElement(qe.G, {
                                            name: 'empty',
                                            size: qe.U.c100x60Barracks,
                                            classMix: it,
                                        }),
                                        r().createElement(
                                            oe.animated.div,
                                            { style: o ? void 0 : c },
                                            r().createElement(qe.G, {
                                                name: 'emptyRed',
                                                size: qe.U.c100x60Barracks,
                                                classMix: it,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: A()(st, o && lt) },
                                    r().createElement(rt, { slotIdx: l, roles: e, name: p }),
                                ),
                                r().createElement(
                                    oe.animated.div,
                                    { className: ct, style: i ? void 0 : _ },
                                    (0, y.uF)(F, { name: u }),
                                ),
                            );
                        },
                    );
                var Et = u(5415),
                    gt = u(8271);
                const At = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount,
                    Ct = (e, t, u) => {
                        const n = ((e, t, u) => {
                                if (e <= t) return [1, e, 24];
                                const n = Math.floor((u - 2) / 18);
                                return [2, e <= 2 * n ? n : Math.ceil(e / 2), 16];
                            })(e, t, u),
                            r = n[0],
                            a = n[1],
                            o = n[2];
                        let i = 2,
                            s = o;
                        for (; a * s + i + (a - 1) > u; ) i > 0 ? (i -= 1) : (s -= 1);
                        return s !== o && (i = s - o), [r, a, i, o, s];
                    };
                var Ft = u(4385),
                    pt = u(5563);
                const bt = 'AcceleratedTrainingIcon_base_4f',
                    Dt = 'AcceleratedTrainingIcon_icon_45',
                    Bt = (0, n.memo)(({ classMix: e }) =>
                        r().createElement(
                            C.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            r().createElement(
                                'div',
                                { className: A()(bt, e) },
                                r().createElement('div', { className: Dt }),
                            ),
                        ),
                    ),
                    vt = {
                        base: 'LastSkillInfo_base_38',
                        levelsContainer: 'LastSkillInfo_levelsContainer_4f',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    ft = 0.01,
                    ht = (0, n.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            isLevelVisible: u,
                            isAcceleratedTrainingVisible: a,
                            skillSize: o,
                            blinkStyle: i,
                        }) => {
                            const s = (0, n.useRef)(e),
                                l = (0, oe.useSpring)(() => ({ from: { scale: 1 } })),
                                c = l[0],
                                d = l[1];
                            (0, n.useEffect)(() => {
                                t < 0 &&
                                    s.current !== e &&
                                    (d.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: se.Fs },
                                    }),
                                    (s.current = e));
                            }, [e, t, d]);
                            const m = (0, n.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < ft
                                              ? [R.strings.crew_widget.plusMinValue(), ft]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                _ = m[0],
                                E = m[1];
                            return r().createElement(
                                'div',
                                { className: A()(vt.base, vt[`base__${o}`]) },
                                u &&
                                    r().createElement(
                                        'div',
                                        { className: vt.levelsContainer },
                                        e >= 0 &&
                                            e < 100 &&
                                            r().createElement(
                                                oe.animated.div,
                                                { style: c },
                                                r().createElement(
                                                    'div',
                                                    { className: vt.realLevel },
                                                    (0, y.uF)(R.strings.common.percentValue(), {
                                                        value: e > 0 && e < ft ? ft : e,
                                                    }),
                                                ),
                                            ),
                                        t >= 0 &&
                                            t < 100 &&
                                            r().createElement(
                                                oe.animated.div,
                                                { className: vt.possibleLevel, style: i },
                                                (0, y.uF)(_, { value: E }),
                                            ),
                                    ),
                                a && r().createElement(Bt, { classMix: vt.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var wt = u(8485);
                const yt = 33,
                    kt = 0,
                    St = !0,
                    xt = 'play';
                const Lt = [
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const It = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            a = e.getImageSource,
                            o = e.frameCount,
                            i = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? yt : s,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? kt : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? o - 1 : m,
                            E = e.loop,
                            g = void 0 === E ? St : E,
                            A = e.state,
                            C = void 0 === A ? xt : A,
                            F = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            b = e.poster,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Lt);
                        const B = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (C) {
                                    case 'play':
                                        return (function () {
                                            const e = Rt(d, _, a),
                                                t = Nt(d, _),
                                                n = window.setInterval(() => {
                                                    const r = t(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == i || i(r, a),
                                                          u(a),
                                                          r === _ &&
                                                              (null == p || p(),
                                                              g || (null == F || F(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && b ? { path: b, x: 0, y: 0 } : a(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(Mt(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, d, _, g, i, p, F, b, C]),
                            r().createElement('canvas', Tt({}, D, { width: t, height: u, ref: B }))
                        );
                    }),
                    Nt = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    Mt = (e, t) => Object.assign({}, e, { img: t }),
                    Rt = (e, t, u) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= t; a++) {
                            const e = u(a),
                                t = r[e.path];
                            if (t) n.set(a, Mt(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, Mt(e, t));
                            }
                        }
                        return n;
                    };
                function Ot(e) {
                    return (t) => `${e}${t}`;
                }
                const Pt = [
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
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                let Ht;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Ht || (Ht = {}));
                const jt = (e, t, u) => {
                        const n = new Image();
                        (n.src = u(t)), e.push(n);
                    },
                    zt =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                a = e.getSrcByFrame,
                                o = e.frameCount,
                                i = e.onAnimate,
                                s = void 0 === i ? () => {} : i,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                E = void 0 === _ || _,
                                g = e.state,
                                A = void 0 === g ? Ht.Play : g,
                                C = e.onAnimationComplete,
                                F = void 0 === C ? () => {} : C,
                                p = e.revers,
                                b = void 0 !== p && p,
                                D = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, Pt);
                            const B = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = B.current;
                                    if (!e) return;
                                    const n = o - 1,
                                        r = e.getContext('2d'),
                                        i = (n) => {
                                            r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, t, u);
                                        };
                                    if ('stop' === A) {
                                        const e = a(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => i(t);
                                        return t.addEventListener('load', u), () => t.removeEventListener('load', u);
                                    }
                                    const l = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) jt(n, u, t);
                                            else for (let u = 0; u < e; u++) jt(n, u, t);
                                            return n;
                                        })(o, a, b),
                                        d = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return (u += 1), u > e && (u = 0), t;
                                            };
                                        })(n, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = l[e];
                                            i(l[e]), s(e, t), e === n && (F(), E || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [o, c, a, u, m, E, s, F, A, t, b]),
                                r().createElement('canvas', Wt({}, D, { width: t, height: u, ref: B }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    Ut = 'AnimatedNewSkill_base__big_31';
                function $t(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Gt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Gt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Gt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                class Vt {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return Vt._instance || (Vt._instance = new Vt()), Vt._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = $t(this._observers.values()); !(e = t()).done; ) {
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
                Vt._instance = void 0;
                const Zt = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Ot('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    Xt = {
                        width: 16,
                        height: 16,
                        frameCount: 32,
                        chunk: { count: 1, columns: 32, rows: 1 },
                        getChunkPath: Ot('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    qt = ({ size: e }) => {
                        const t = e === wt.O.Small ? Xt : Zt,
                            u = (function (e) {
                                const t = e.chunk,
                                    u = t.rows * t.columns;
                                return (n) => {
                                    const r = n % u,
                                        a = (r % t.columns) * e.width,
                                        o = Math.trunc(r / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / u)), x: a, y: o };
                                };
                            })(t),
                            a = (0, n.useState)(Ht.Stop),
                            o = a[0],
                            i = a[1],
                            s = (0, n.useCallback)(() => {
                                i(Ht.Play);
                            }, [i]),
                            l = (0, n.useCallback)(() => {
                                i(Ht.Stop);
                            }, [i]);
                        return (
                            (0, n.useEffect)(() => (Vt.instance.subscribe(s), () => Vt.instance.unsubscribe(s)), [s]),
                            r().createElement(It, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: u,
                                loop: !1,
                                state: o,
                                onAnimationDone: l,
                                className: A()(zt, e === wt.O.Big && Ut),
                            })
                        );
                    },
                    Yt = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
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
                            type: u,
                            size: a,
                            marginValue: o,
                            clipWidth: i,
                            tankmanId: s,
                            skillsEfficiency: l,
                            blinkStyle: c,
                            showNewSkillAnimation: d,
                            isTooltipEnabled: m = !0,
                            hasInstruction: _,
                        }) => {
                            const E = (0, n.useRef)(''),
                                g = (0, oe.useSpring)(() => ({ from: { scale: 1 } })),
                                C = g[0],
                                p = g[1];
                            (0, n.useEffect)(() => {
                                u === gt.W.New &&
                                    E.current === gt.W.Possible &&
                                    p.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: se.Fs },
                                    }),
                                    (E.current = u);
                            }, [u, p]);
                            const b = (0, n.useCallback)(() => {
                                switch (u) {
                                    case gt.W.Learned:
                                    case gt.W.Learning:
                                    case gt.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Ke.HZ, tankmanID: s, skillName: e },
                                        };
                                    case gt.W.New:
                                    case gt.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: s },
                                        };
                                }
                            }, [u, e, s]);
                            return r().createElement(
                                F.u,
                                Kt({}, b(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                r().createElement(
                                    oe.animated.div,
                                    { style: C },
                                    r().createElement(
                                        oe.animated.div,
                                        { style: u === gt.W.Possible ? c : void 0 },
                                        r().createElement(
                                            'div',
                                            {
                                                className: A()(Yt.base, Yt[`base__${a}`]),
                                                style: { marginLeft: `${o}rem`, clipPath: `inset(0 ${i}rem 0 0)` },
                                            },
                                            !d || (u !== gt.W.Possible && u !== gt.W.New)
                                                ? r().createElement(wt.d, {
                                                      icon: t,
                                                      size: a,
                                                      type: u,
                                                      efficiency: l,
                                                      hasInstruction: _,
                                                  })
                                                : r().createElement(qt, { size: a }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    eu = 'SkillsList_base_11',
                    tu = 'SkillsList_efficiency_72',
                    uu = 'SkillsList_container_c7',
                    nu = 'SkillsList_row_03';
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const au = ({
                        tankman: e,
                        isAcceleratedTrainingVisible: t = !1,
                        rowWidth: u = 220,
                        maxBigSkillsInRow: n = 16,
                        blinkStyle: a,
                        isSkillTooltipEnabled: o = !0,
                        showNewSkillAnimation: i = !1,
                    }) => {
                        const l = At(e),
                            c = Ct(l, n, u),
                            d = c[0],
                            m = c[1],
                            _ = c[2],
                            E = c[3],
                            g = c[4],
                            A = d > 1 ? Qt.Small : Qt.Big,
                            C = (0, ie.Y4)(e.skillsEfficiency) !== ie.H$.Normal,
                            F = -1 !== e.possibleSkillsEfficiency,
                            p = F ? e.possibleSkillsEfficiency : e.skillsEfficiency,
                            b = (0, ie.Y4)(p) !== ie.H$.Low;
                        return r().createElement(
                            'div',
                            { className: eu },
                            C &&
                                r().createElement(
                                    oe.animated.div,
                                    { style: F ? a : void 0 },
                                    r().createElement(pt.A, {
                                        efficiencyValue: p,
                                        tankmanID: e.tankmanID,
                                        className: tu,
                                    }),
                                ),
                            r().createElement(
                                'div',
                                { className: uu },
                                (0, Ft.K)(d, (u) => {
                                    const n = Math.min(m, l - u * m),
                                        c = u === d - 1;
                                    return r().createElement(
                                        'div',
                                        { className: nu, key: `row_${u}` },
                                        (0, Ft.K)(n, (t) => {
                                            const l = m * u + t;
                                            return r().createElement(
                                                Jt,
                                                ru(
                                                    {},
                                                    ((e, t) => {
                                                        const u = t.skills.length;
                                                        let n = '',
                                                            r = '',
                                                            a = gt.W.Learned,
                                                            o = !1;
                                                        if (e < u) {
                                                            const u = s.U2(t.skills, e);
                                                            u &&
                                                                ((n = u.name),
                                                                (r = u.icon),
                                                                (a = u.type),
                                                                (o = u.hasInstruction));
                                                        } else
                                                            (a = e < u + t.newSkillsAmount ? gt.W.New : gt.W.Possible),
                                                                (r = Qe.jw);
                                                        return { name: n, icon: r, type: a, hasInstruction: o };
                                                    })(l, e),
                                                    {
                                                        size: A,
                                                        marginValue: 0 === t ? 0 : _,
                                                        key: `skill_${l}`,
                                                        clipWidth: t === n - 1 ? 0 : E - g,
                                                        tankmanId: e.tankmanID,
                                                        blinkStyle: a,
                                                        isTooltipEnabled: o,
                                                        showNewSkillAnimation: i,
                                                        skillsEfficiency: p,
                                                    },
                                                ),
                                            );
                                        }),
                                        c &&
                                            r().createElement(ht, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                isLevelVisible: b,
                                                isAcceleratedTrainingVisible: t,
                                                skillSize: A,
                                                blinkStyle: a,
                                            }),
                                    );
                                }),
                            ),
                        );
                    },
                    ou = 'TankmanInfo_base_69',
                    iu = 'TankmanInfo_base__disabled_36',
                    su = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    lu = 'TankmanInfo_specialization_77',
                    cu = 'TankmanInfo_specialization__withManySkills_9a',
                    du = 'TankmanInfo_skillsContainer_17',
                    mu = 'TankmanInfo_skillsContainer__withManySkills_00',
                    _u = (0, a.Pi)(({ slotIdx: e, tankman: t, layoutInfo: u, blinkStyle: n, isDisabled: a }) => {
                        const o = E().model,
                            i = (0, Et.GS)().mediaSize,
                            s = ((e, t, u, n) => {
                                const r = t.skillsEfficiency < Qe.yb,
                                    a = e.isCurrentLayoutQuickTraining || u;
                                let o,
                                    i = 220;
                                return (
                                    (a || u) && (i = n ? 146 : 190),
                                    r && (i -= 36),
                                    (o = r
                                        ? e.isCurrentLayoutHangar
                                            ? 12
                                            : e.isCurrentLayoutQuickTraining
                                              ? 10
                                              : 11
                                        : e.isCurrentLayoutQuickTraining || a
                                          ? 12
                                          : 16),
                                    [i, o, At(t) > o]
                                );
                            })(u, t, o.computes.isChangeCrewButtonVisible(), i < Et.cJ.Small),
                            l = s[0],
                            c = s[1],
                            d = s[2],
                            m =
                                !u.isCurrentLayoutQuickTraining &&
                                -1 !== t.tankmanID &&
                                t.isLessMastered &&
                                t.skillsEfficiency < 100;
                        return r().createElement(
                            'div',
                            { className: A()(ou, a && iu) },
                            r().createElement(
                                Ye.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ke.v$, tankmanID: t.tankmanID },
                                },
                                r().createElement('div', { className: su }),
                            ),
                            r().createElement(
                                'div',
                                { className: A()(lu, d && cu) },
                                r().createElement(rt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: A()(du, d && mu) },
                                r().createElement(au, {
                                    tankman: t,
                                    isAcceleratedTrainingVisible: m,
                                    rowWidth: l,
                                    maxBigSkillsInRow: c,
                                    blinkStyle: n,
                                    showNewSkillAnimation: u.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    Eu = 'QuickTrainingTankmanSlotContent_base_8d',
                    gu = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Au = 'QuickTrainingTankmanSlotContent_highlight_72',
                    Cu = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Fu = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    pu = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    bu = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Du = { opacity: 0 },
                    Bu = [{ opacity: 1 }, { opacity: 0 }],
                    vu = (0, n.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: u,
                            qtTankmanIconStyle: a,
                            layoutInfo: o,
                            isDisabled: i,
                        }) => {
                            const s = (0, n.useRef)(t.lastSkillLevelFull),
                                l = (0, n.useRef)(t.skills.length),
                                c = (0, oe.useSpring)(() => ({ from: Fu })),
                                d = c[0],
                                m = c[1],
                                _ = (0, oe.useSpring)(() => ({ from: Du })),
                                E = _[0],
                                g = _[1],
                                A = (0, n.useRef)(!1);
                            return (
                                (0, n.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? A.current ||
                                          (m.start({
                                              from: Fu,
                                              to: pu,
                                              reverse: false,
                                              config: { duration: 300, easing: se.BH },
                                          }),
                                          (A.current = !0))
                                        : A.current
                                          ? (t.skills.length > l.current || t.lastSkillLevelFull > s.current
                                                ? (m.start({
                                                      from: pu,
                                                      to: bu,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }),
                                                  (s.current = t.lastSkillLevelFull),
                                                  (l.current = t.skills.length),
                                                  g.start({
                                                      from: Du,
                                                      to: Bu,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (A.current = !1))
                                          : ((s.current = t.lastSkillLevelFull), (l.current = t.skills.length));
                                }, [m, g, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.length]),
                                r().createElement(
                                    'div',
                                    { className: Eu },
                                    r().createElement(oe.animated.div, { className: Au, style: E }),
                                    r().createElement(
                                        oe.animated.div,
                                        { style: a },
                                        r().createElement(qe.G, {
                                            name: t.icon,
                                            size: qe.U.c100x60Barracks,
                                            classMix: Cu,
                                            isSkin: t.isInSkin,
                                        }),
                                    ),
                                    r().createElement(oe.animated.div, { className: gu, style: d }),
                                    r().createElement(_u, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: o,
                                        blinkStyle: u,
                                        isDisabled: i,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const u = e.tankman,
                                n = t.tankman;
                            return (
                                u.hasPossibleProgress === n.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const u = e.length;
                                    for (let a = 0; a < u; a++) {
                                        var n, r;
                                        if (
                                            (null == (n = s.U2(e, a)) ? void 0 : n.name) !==
                                            (null == (r = s.U2(t, a)) ? void 0 : r.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(u.skills, n.skills) &&
                                u.lastSkillLevelFull === n.lastSkillLevelFull &&
                                u.possibleSkillsAmount === n.possibleSkillsAmount &&
                                u.lastPossibleSkillLevel === n.lastPossibleSkillLevel &&
                                u.skillsEfficiency === n.skillsEfficiency &&
                                u.possibleSkillsEfficiency === n.possibleSkillsEfficiency
                            );
                        },
                    ),
                    fu = 'TankmanSlotContent_base_00',
                    hu = 'TankmanSlotContent_icon_ef',
                    wu = (0, n.memo)(({ slotIdx: e, tankman: t, layoutInfo: u, isDisabled: n }) =>
                        r().createElement(
                            'div',
                            { className: fu },
                            r().createElement(qe.G, {
                                name: t.icon,
                                size: qe.U.c100x60Barracks,
                                classMix: hu,
                                isSkin: t.isInSkin,
                            }),
                            r().createElement(_u, { slotIdx: e, tankman: t, layoutInfo: u, isDisabled: n }),
                        ),
                    ),
                    yu = (0, n.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: n,
                            vehicleName: a,
                            vehicleType: o,
                            isDisabled: i,
                            isSelected: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === u.tankmanID
                                ? r().createElement(_t, {
                                      roles: t,
                                      layoutInfo: n,
                                      vehicleName: a,
                                      vehicleType: o,
                                      isDisabled: i,
                                      isSelected: s,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                  })
                                : n.isCurrentLayoutQuickTraining
                                  ? r().createElement(vu, {
                                        slotIdx: e,
                                        tankman: u,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: n,
                                        isDisabled: i,
                                    })
                                  : r().createElement(wu, { slotIdx: e, tankman: u, layoutInfo: n, isDisabled: i }),
                    ),
                    ku = { transform: 'translateX(0rem)' },
                    Su = { transform: 'translateX(41rem)' },
                    xu = { opacity: 0 },
                    Lu = { opacity: 1 },
                    Tu = (0, a.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: a,
                            isSelected: o,
                            isAnySlotSelected: i,
                            isDisabled: l,
                            blinkSlotStyle: d,
                            blinkTankmanStyle: m,
                            qtTankmanIconStyle: _,
                        }) => {
                            const g = E(),
                                C = g.model,
                                F = g.controls,
                                p = ((e, t) => {
                                    const u = (0, j.Jp)(c.D9),
                                        n = (0, W.f)(
                                            () => u({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === H.RIGHT && n();
                                    };
                                })(C.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                b = F.onSlotClick,
                                D = F.onChangeCrewClick,
                                B = C.computes.isChangeCrewButtonVisible(),
                                v = C.computes.isTankmanMode(),
                                f = C.isCrewLocked.get(),
                                h = C.vehicleName.get(),
                                w = C.vehicleType.get(),
                                y = !l && u.isInteractive && (!a.isCurrentLayoutQuickTraining || i),
                                k = (0, n.useCallback)(() => {
                                    y && !v && ((0, ae.G)(R.sounds.yes1()), b(e, u.tankmanID));
                                }, [e, u, b, v, y]),
                                S = (0, n.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), f || ((0, ae.G)(R.sounds.yes1()), D(e, u.tankmanID));
                                    },
                                    [e, u, D, f],
                                ),
                                x = (0, n.useMemo)(() => ({ tankmanID: u.tankmanID, slotIdx: e }), [u, e]);
                            return r().createElement(
                                Ne,
                                {
                                    args: x,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: p,
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        pe,
                                        {
                                            onClick: k,
                                            isSelected: o,
                                            isDisabled: l,
                                            isEmpty: -1 === u.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: y,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ze },
                                            u.hasWarning && r().createElement('div', { className: Ve }),
                                            o && r().createElement('div', { className: v ? Xe : Ze }),
                                            r().createElement(
                                                be,
                                                {
                                                    startState: ku,
                                                    endState: Su,
                                                    layoutInfo: a,
                                                    isPaused: !B,
                                                    className: A()($e, B && Ge),
                                                    isTankmanMode: v,
                                                },
                                                r().createElement(yu, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: u,
                                                    layoutInfo: a,
                                                    isDisabled: l,
                                                    vehicleName: h,
                                                    vehicleType: w,
                                                    blinkSlotStyle: d,
                                                    blinkTankmanStyle: m,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: o,
                                                }),
                                            ),
                                            B &&
                                                r().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    r().createElement(
                                                        be,
                                                        {
                                                            startState: xu,
                                                            endState: Lu,
                                                            layoutInfo: a,
                                                            isPaused: !B,
                                                            className: Ue,
                                                            isTankmanMode: v,
                                                        },
                                                        r().createElement(je, {
                                                            isSelected: a.isCurrentLayoutMemberChange && o,
                                                            isLocked: f,
                                                            mainRole: s.U2(t, 0) || '',
                                                            isFemale: -1 !== u.tankmanID && u.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Iu = 'SlotsList_base_5f';
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                const Mu = { transform: 'translateX(0rem)' },
                    Ru = { transform: 'translateX(15rem)' },
                    Ou = (0, a.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: u }) => {
                        const a = E().model,
                            o = a.computes.isAnyEmptySlots(),
                            i = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: se.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            s = i[0],
                            l = i[1];
                        (0, n.useEffect)(() => {
                            o ? l.resume() : l.pause();
                        }, [l, o]);
                        const c = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: se.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            d = c[0],
                            m = c[1];
                        (0, n.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining]);
                        const _ = (0, oe.useSpring)(() => ({
                                from: Mu,
                                to: Ru,
                                delay: 200,
                                config: { duration: 300, easing: se.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            g = (0, n.useCallback)(
                                (u) => t || (e.isCurrentLayoutQuickTraining && -1 === u),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return r().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: A()(Iu, u) },
                            a.computes
                                .getSlots()
                                .map((t, u) =>
                                    r().createElement(
                                        Tu,
                                        Nu({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${u}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (a.computes.isSlotSelected(t.slotIdx) || a.computes.isTankmanMode()),
                                            isAnySlotSelected: a.computes.isAnySlotSelected(),
                                            isDisabled: g(t.tankman.tankmanID),
                                            blinkSlotStyle: d,
                                            blinkTankmanStyle: s,
                                            qtTankmanIconStyle: _,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Pu = (0, a.Pi)(() => {
                        const e = E().model,
                            t = e.isDisabled.get(),
                            u = e.hasDog.get(),
                            n = e.computes.getLayoutInfo();
                        return r().createElement(
                            'div',
                            { className: ue },
                            e.computes.isButtonBarVisible() &&
                                r().createElement(
                                    'div',
                                    { className: ne },
                                    r().createElement(te, { isWidgetDisabled: t }),
                                ),
                            r().createElement(Ou, { layoutInfo: n, isWidgetDisabled: t, className: re }),
                            u && r().createElement(Se, { layoutInfo: n, isDisabled: t }),
                        );
                    }),
                    Wu = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    Hu = (0, n.memo)(() => r().createElement(_, { options: Wu }, r().createElement(Pu, null)));
            },
            8271: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { W: () => n }),
                    (function (e) {
                        (e.New = 'new'),
                            (e.Learned = 'learned'),
                            (e.Learning = 'learning'),
                            (e.Irrelevant = 'irrelevant'),
                            (e.Possible = 'possible');
                    })(n || (n = {}));
            },
            2603: (e, t, u) => {
                'use strict';
                u.d(t, { Br: () => a, HZ: () => n, M4: () => o, rs: () => i, v$: () => r });
                const n = 'crewPerkGf',
                    r = 'tankman',
                    a = 'skillsEfficiency',
                    o = 'crewSkillUntrained',
                    i = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { jw: () => a, sU: () => n, y$: () => o, yb: () => r });
                const n = -1,
                    r = 1,
                    a = 'new_skill',
                    o = -1;
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
            6880: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            8055: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            4769: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            130: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'EfficiencyIndicator_base_34',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            3938: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
            },
            9426: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            4723: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], a = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 37),
        (() => {
            var e = { 37: 0, 623: 0, 3: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, o, i] = u,
                        s = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(8208));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
